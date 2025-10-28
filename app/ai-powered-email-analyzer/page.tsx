

export const metadata = {
  title: 'AI-Powered Email Analyzer | Zion Tech Group',
  description: 'Professional AI-powered email analysis services by Zion Tech Group. Advanced email intelligence and automation.',
  keywords: 'AI, email, analysis, automation, intelligence, technology, services',
  openGraph: {
    title: 'AI-Powered Email Analyzer | Zion Tech Group',
    description: 'Professional AI-powered email analysis services by Zion Tech Group.',
    type: 'website',
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


