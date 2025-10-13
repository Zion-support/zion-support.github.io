import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiFinancialAnalysisPage: React.FC = () => {
  const features = [
    {
      title: 'Risk Assessment',
      description: 'Advanced AI models for comprehensive financial risk analysis and assessment',
      icon: <Shield className="w-6 h-6" />,
      benefits: [
        'Credit risk analysis',
        'Market risk assessment',
        'Operational risk evaluation',
        'Fraud detection'
      ]
    },
    {
      title: 'Investment Analysis',
      description: 'AI-powered investment analysis and portfolio optimization recommendations',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: [
        'Portfolio optimization',
        'Market trend analysis',
        'Investment recommendations',
        'Performance tracking'
      ]
    },
    {
      title: 'Financial Reporting',
      description: 'Automated financial reporting with real-time insights and analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: [
        'Automated reporting',
        'Real-time insights',
        'Compliance monitoring',
        'Custom dashboards'
      ]
    }
  ];

  const benefits = [
    'Reduce financial risks by 50%',
    'Improve investment returns by 25%',
    'Automate 80% of financial analysis',
    'Detect fraud 90% faster',
    'Ensure regulatory compliance',
    'Save 30 hours per week'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Financial Analysis - Zion Tech Group</title>
        <meta name="description" content="Professional AI financial analysis solutions by Zion Tech Group. Advanced financial intelligence and risk assessment." />
        <meta name="keywords" content="AI financial analysis, financial intelligence, risk assessment, investment analysis, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Financial Analysis
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your financial decision-making with AI-powered analysis. 
            Get insights, assess risks, and optimize investments with advanced algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Financial Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for comprehensive financial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Financial Analysis?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that improve financial performance and reduce risks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered financial analysis journey today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiFinancialAnalysisPage;