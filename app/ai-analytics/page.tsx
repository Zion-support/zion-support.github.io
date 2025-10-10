'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
<<<<<<< HEAD
const AiAnalyticsPage: React.FC = () => {
  const features = [
=======
;
const AiAnalyticsPage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
<<<<<<< HEAD
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your business performance with AI-driven recommendations and insights.',
      benefits: ['Performance tracking', 'Optimization suggestions', 'ROI analysis', 'Growth strategies']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: BarChart,
      title: 'Visual Analytics',
      description: 'Transform complex data into intuitive visualizations and interactive charts.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export capabilities']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];
  const benefits = [
=======
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Globe,
    };
  ];
;
const benefits = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
<<<<<<< HEAD
  ]
=======
  ];
    <>
      <Helmet>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai analytics solution for modern businesses." />
        <meta name="keywords" content="AI ai analytics, artificial intelligence, ai analytics, AI solutions, intelligent automation" />;
const useCases = [
];
        <meta name="keywords" content="AI ai analytics, artificial intelligence, ai analytics, AI solutions, intelligent automation" />  const useCases = [
;
];
const useCases = [
];
  const benefits = [
];
    'Transform raw data into actionable insights',
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Optimize business processes and workflows',
    'Reduce costs through intelligent automation',
    'Gain competitive advantage with advanced technology'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const useCases = [
[
        {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
<<<<<<< HEAD
    {
      title: 'Marketing Analytics',
      description: 'Optimize marketing campaigns with AI-powered insights',
      icon: '📈'
    },
    {
      title: 'Financial Analysis',
      description: 'Monitor financial performance and identify trends',
      icon: '💰'
=======
        {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and customer behavior',
      icon: Brain
    },
        {
      title: 'Performance Monitoring',
      description: 'Track and optimize key performance indicators',
      icon: Target
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
        {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
<<<<<<< HEAD
      icon: '👥'
    },
    {
      title: 'Operations Monitoring',
      description: 'Track operational metrics and optimize processes',
      icon: '⚙️'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate business risks proactively',
      icon: '🛡️'
    }
  ]
=======
      icon: Users
    };
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <React .Fragment>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
<<<<<<< HEAD
<meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: px-6 lg:px-8">
=======
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive analytics, and automated reporting." />
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, business intelligence, predictive analytics, data visualization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */};
        <section className="pt-20 pb-16 px-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Analytics
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent analytics powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
  </
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More,
  </
=======
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Analytics Features,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI analytics platform can revolutionize your business intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
=======
        {/* Features Section */};
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive analytics platform provides everything you need to make data-driven decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature .icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                          {benefit};
                        </li>
                      ));
                    </ul>);
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))};
                  </ul>
                </div>
              ))};
            </div>
          </div>
        </section>
        {/* Use Cases Section */};
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI analytics platform can transform your business across different industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase .icon className="w-8 h-8 text-purple-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI analytics platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial
  </
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
export default AiAnalyticsPage
  </button>
  </h2>
  </button>
  </button>
  </h1>
=======
        {/* Benefits Section */};
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Analytics?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered analytics platform is designed to help you make smarter decisions, 
                  optimize processes, and drive growth through intelligent data analysis.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))};
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <BarChart className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Real-Time Insights</h3>
                    <p className="text-gray-300 mb-6">
                      Get instant access to your most important metrics and KPIs with our real-time analytics dashboard.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              ));
              ))};
            </div>
            </div>
          </div>
        </section>
        {/* CTA Section */};
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start making smarter decisions with our AI-powered analytics platform. 
                Get started today and see the difference intelligent data analysis can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default AiAnalyticsPage;
    </React.Fragment>)
export default AiAnalyticsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
