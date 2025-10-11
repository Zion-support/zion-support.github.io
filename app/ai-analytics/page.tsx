'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
;
const AiAnalyticsPage: React.FC = () => {const features = [
    {
      ico,
    n: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
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
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
>>>>>>> main
    }
  ];
    <>
      <Helmet>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai analytics solution for modern businesses." />
        <meta name="keywords" content="AI ai analytics, artificial intelligence, ai analytics, AI solutions, intelligent automation" />;
const useCases = [
        <meta name="keywords" content="AI ai analytics, artificial intelligence, ai analytics, AI solutions, intelligent automation" />  const useCases = [;
const useCases = [
=======

  const benefits = [
    'Transform raw data into actionable insights',
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Optimize business processes and workflows',
    'Reduce costs through intelligent automation',
    'Gain competitive advantage with advanced technology'
  ];

  const useCases = [
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: BarChart
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and customer behavior',
      icon: Brain
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and optimize key performance indicators',
      icon: Target
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: Users
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive analytics, and automated reporting." />
      </Helmet>

      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              Ai Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai analytics solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive analytics platform provides everything you need to make data-driven decisions.
              </p>
            </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
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
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Benefits Section */}
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hove,
    r:scale-110 transition-transform">
                    
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>)
              ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
            </div>
          </div>
        </section>

        {/* CTA Section */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}
export default AiAnalyticsPage;
    </React.Fragment>)
export default AiAnalyticsPage;
