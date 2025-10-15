import React, { memo, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import { generateStructuredData } from './utils/seoData';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load heavy components
const ServiceCard = lazy(() => import('./components/ServiceCard'));
const AIToolCard = lazy(() => import('./components/AIToolCard'));

const HomePage: React.FC = memo(() => {
  const structuredData = generateStructuredData('Organization', {
    name: "Zion Tech Group",
    description: "Leading provider of AI and IT solutions for modern businesses",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.png",
    telephone: "+1-555-ZION-TECH",
    email: "contact@ziontechgroup.com",
    streetAddress: "123 Tech Street",
    addressLocality: "Innovation City",
    addressRegion: "IC",
    postalCode: "12345",
    addressCountry: "US",
    sameAs: [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  });

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation."
        keywords="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 text-center font-medium"
                aria-label="Get started with our services"
              >
                Get Started
              </a>
              <a 
                href="/about" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 text-center font-medium"
                aria-label="Learn more about our company"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Services Preview */}
          <section className="mt-20" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={<LoadingSpinner />}>
                <ServiceCard
                  title="AI Services"
                  description="Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision."
                  link="/ai-services"
                  icon="🤖"
                />
                <ServiceCard
                  title="Cloud Infrastructure"
                  description="Scalable cloud solutions that provide reliability, security, and performance for your business applications."
                  link="/cloud-infrastructure"
                  icon="☁️"
                />
                <ServiceCard
                  title="Digital Transformation"
                  description="Complete digital transformation services to modernize your business processes and systems."
                  link="/digital-transformation"
                  icon="🔄"
                />
              </Suspense>
            </div>
          </section>
          
          {/* AI Tools Preview */}
          <section className="mt-20" aria-labelledby="ai-tools-heading">
            <h2 id="ai-tools-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Suspense fallback={<LoadingSpinner />}>
                <AIToolCard
                  title="Content Moderator"
                  description="Automated content moderation using AI"
                  link="/zion-ai-content-moderator"
                />
                <AIToolCard
                  title="Sales Predictor"
                  description="Predict sales trends with AI"
                  link="/zion-ai-sales-predictor"
                />
                <AIToolCard
                  title="Workflow Automator"
                  description="Automate business workflows"
                  link="/zion-ai-workflow-automator"
                />
                <AIToolCard
                  title="Financial Forecaster"
                  description="AI-powered financial predictions"
                  link="/zion-ai-financial-forecaster"
                />
              </Suspense>
            </div>
            <div className="text-center mt-8">
              <a 
                href="/services" 
                className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="View all our services"
              >
                View All Services →
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;