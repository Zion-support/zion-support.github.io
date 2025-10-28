import React from 'react';
import Navigation from '../components/Navigation';
import ErrorBoundary from '../components/ErrorBoundary';

<<<<<<< HEAD
export const metadata = {
  title: "Page | Zion Tech Group",
  description: "Professional page services by Zion Tech Group",
  keywords: "page, technology, services",
  openGraph: {
    title: "Page | Zion Tech Group",
    description: "Professional page services by Zion Tech Group",
    type: "website",
=======

export const metadata = {
  title: 'AI-Powered Email Analyzer | Zion Tech Group',
  description: 'Professional AI-powered email analysis services by Zion Tech Group. Advanced email intelligence and automation.',
  keywords: 'AI, email, analysis, automation, intelligence, technology, services',
  openGraph: {
    title: 'AI-Powered Email Analyzer | Zion Tech Group',
    description: 'Professional AI-powered email analysis services by Zion Tech Group.',
    type: 'website',
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
  },
};
const AiPoweredEmailAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent email insights and recommendations.',
      benefits: ['Smart email analysis', 'Predictive insights', 'Automated categorization', 'Real-time processing']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive email analytics dashboard with real-time data visualization.',
      benefits: ['Email performance metrics', 'Custom reports', 'Data visualization', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific email goals and objectives with precision and accuracy.',
      benefits: ['Email optimization', 'Performance tracking', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your email strategy with data-driven insights.',
      benefits: ['Email strategy optimization', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];
const benefits = [
    'Increase email efficiency by up to 60%',
    'Reduce email processing time by 40%',
    'Improve email insights with AI analysis',
    'Scale email operations without proportional staff increases',
    'Gain competitive advantage with advanced email technology'
  ];

<<<<<<< HEAD
export default function pagePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional page services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Page Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your page needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored page solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your page services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
=======
export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Email Analyzer
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Transform your email strategy with intelligent analysis and AI-driven insights
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your email operations with our cutting-edge AI-powered email analysis solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
<<<<<<< HEAD
};
export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <AiPoweredEmailAnalyzerPage {...props} />
    </ErrorBoundary>
  );
}
=======
}


</div>
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
