import { HeroSection } from '@/components/HeroSection';
import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Home from '@/pages/Home';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ErrorBanner } from '@/components/talent/ErrorBanner';
import { logWarn, logError } from '@/utils/productionLogger';

export interface HomePageProps {
  hasError?: boolean;
  errorMessage?: string;
  timestamp?: number; // Add timestamp for cache busting
}

// Check if Sentry is likely initialized (basic check, mirrors sentry.server.config.js)
const sentryDsnAvailable = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const isSentryActive = sentryDsnAvailable && !sentryDsnAvailable.startsWith('YOUR_');

export async function fetchHomeData() {
  // Placeholder async function. Real implementation would fetch data.
  return Promise.resolve(null);
}

// Use getStaticProps instead of getServerSideProps for better reliability and caching
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    await fetchHomeData();
    return { 
      props: {
        timestamp: Date.now()
      },
      // Revalidate every 5 minutes in production for fresh content
      revalidate: 300
    };
  } catch (error) {
    logError('Error in getStaticProps for home page:', { data: error });
    
    // Log to Sentry if available, but don't block the page
    if (isSentryActive) {
      try {
        Sentry.captureException(error);
      } catch (sentryError) {
        logWarn('Failed to log to Sentry:', { data: sentryError });
      }
    }
    
    // Return fallback props instead of crashing
    return {
      props: {
        hasError: false, // Don't show error on home page, show fallback content
        timestamp: Date.now()
      },
      revalidate: 60 // Retry more frequently if there was an error
    };
  }
};

const ErrorTestButton = () => {
  const handleClick = () => {
    try {
      throw new Error("This is a test error from the homepage button!");
    } catch (error) {
      if (isSentryActive) {
        Sentry.captureException(error);
      }
      logError('Button error test:', { error });
    }
  };

  const { t } = useTranslation(); // Added this line

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      {t('test_error_button_text')}
    </button>
  );
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const showDebug = router.query.debug === 'true';
  const showButton = process.env.NODE_ENV === 'development' || showDebug;

  return (
    <>
      <Head>
        <title>Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Zion Tech Group"
        subtitle="The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure."
        primaryAction={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Learn More",
          href: "/about"
        }}
        stats={heroStats}
      />

      {/* Platform Capabilities */}
      <Features
        title="Revolutionary Platform Capabilities"
        subtitle="Discover the cutting-edge technologies and intelligent systems that power the future of autonomous innovation."
        features={platformFeatures}
        columns={3}
      />

      {/* Micro SaaS Services */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Specialized Business Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Focused solutions for specific business challenges with competitive pricing and comprehensive features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group border border-gray-800 hover:border-green-500/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Marketing Automation</h3>
              <p className="text-gray-400 mb-4">AI-powered email marketing with advanced automation and analytics.</p>
              <div className="text-2xl font-bold text-green-400 mb-2">Starting at $89/month</div>
              <div className="text-sm text-gray-500">Market average: $75-200/month</div>
            </Card>

            <Card className="text-center group border border-gray-800 hover:border-green-500/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💳</div>
              <h3 className="text-xl font-semibold text-white mb-3">Payment Processing</h3>
              <p className="text-gray-400 mb-4">Secure payment gateway with subscription billing and fraud detection.</p>
              <div className="text-2xl font-bold text-green-400 mb-2">Starting at $49/month</div>
              <div className="text-sm text-gray-500">Market average: $29-99/month</div>
            </Card>

            <Card className="text-center group border border-gray-800 hover:border-green-500/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">CRM Solutions</h3>
              <p className="text-gray-400 mb-4">Comprehensive CRM with sales automation and customer insights.</p>
              <div className="text-2xl font-bold text-green-400 mb-2">Starting at $25/user/month</div>
              <div className="text-sm text-gray-500">Market average: $20-50/user/month</div>
            </Card>
          </div>

          <div className="text-center">
            <Button
              href="/micro-saas"
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Explore All Micro SaaS Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Built with Modern Technology
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our platform leverages the latest technologies and best practices to deliver exceptional performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologyStack.map((tech, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-800 hover:border-blue-500/30"
                style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 text-lg">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
      <Home />
      {showButton && <ErrorTestButton />}
    </>
  );
};

export default IndexPage;
