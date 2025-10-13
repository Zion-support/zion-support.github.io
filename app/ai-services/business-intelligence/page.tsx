import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Database, Users, DollarSign, Target } from 'lucide-react';

const AiBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis with AI-powered insights and predictive modeling.',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Data visualization', 'Custom reports']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor key performance indicators and business metrics with intelligent alerts.',
      benefits: ['KPI monitoring', 'Automated alerts', 'Trend analysis', 'Performance optimization']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources for comprehensive analysis.',
      benefits: ['Multi-source integration', 'Data cleansing', 'Real-time sync', 'API connectivity']
    },
    {
      icon: Users,
      title: 'User Behavior Analysis',
      description: 'Understand customer behavior and preferences through advanced analytics.',
      benefits: ['Customer segmentation', 'Behavior patterns', 'Engagement metrics', 'Personalization insights']
    },
    {
      icon: DollarSign,
      title: 'Revenue Optimization',
      description: 'Identify opportunities to increase revenue and optimize business performance.',
      benefits: ['Revenue forecasting', 'Cost analysis', 'Profit optimization', 'ROI tracking']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven strategic planning and decision making for business growth.',
      benefits: ['Strategic insights', 'Market analysis', 'Competitive intelligence', 'Growth planning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence - Advanced Analytics Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence solutions. Advanced analytics, predictive modeling, and data-driven insights." />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, business intelligence, data visualization, KPI monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Business
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered business intelligence solutions. 
              Get advanced analytics, predictive insights, and data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Business Intelligence Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered business intelligence solutions and make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your AI Journey
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiBusinessIntelligencePage;