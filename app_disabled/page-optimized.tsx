import dynamic from 'next/dynamic';
import { UnifiedBanner, bannerConfigurations } from './components/UnifiedBannerSystem';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load heavy components
const UnifiedContentPromotion = dynamic(() => import('../components/UnifiedContentPromotion'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>,
});

const InteractiveAIROICalculator = dynamic(
  () => import('../components/InteractiveAIROICalculator'),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  }
);

const ContentShowcase = dynamic(() => import('../components/ContentShowcase'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>,
});

const InteractiveContentShowcase2026 = dynamic(
  () => import('../components/InteractiveContentShowcase2026'),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>,
  }
);

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description:
    'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords:
    'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description:
      'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description:
      'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

export default function HomePageOptimized() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <PerformanceMonitor />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Enterprise with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our proven AI
              transformation methodology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Free AI Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Banner System */}
      <LazyWrapper>
        <UnifiedBanner configurations={bannerConfigurations} />
      </LazyWrapper>

      {/* Key Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Our AI solutions deliver measurable business impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-600">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Autonomous Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end AI transformation services for modern enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">Autonomous AI Systems</h3>
              <p className="text-gray-600 mb-4">
                Self-managing AI systems that operate independently and adapt to changing business
                conditions.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-green-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and machine learning to predict trends and optimize business
                decisions.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="text-purple-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Intelligent automation solutions that streamline operations and reduce manual work.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <LazyWrapper>
        <InteractiveAIROICalculator />
      </LazyWrapper>

      {/* Content Showcase */}
      <LazyWrapper>
        <ContentShowcase />
      </LazyWrapper>

      {/* Interactive Content Showcase 2026 */}
      <LazyWrapper>
        <InteractiveContentShowcase2026 />
      </LazyWrapper>

      {/* Unified Content Promotion */}
      <LazyWrapper>
        <UnifiedContentPromotion />
      </LazyWrapper>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free AI assessment and discover how we can help you achieve 300% ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Download AI Strategy Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
