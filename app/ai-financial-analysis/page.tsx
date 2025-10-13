import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BarChart3, TrendingUp, Shield, Brain, Zap, Users, Clock, Star, Mic, Smartphone, Globe } from 'lucide-react';

const AiFinancialAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'AI-powered financial analysis with predictive modeling and risk assessment.',
      benefits: ['Predictive modeling', 'Risk analysis', 'Market trends', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Real-time Monitoring',
      description: 'Monitor financial markets and portfolio performance in real-time.',
      benefits: ['Live market data', 'Portfolio tracking', 'Alert systems', 'Performance monitoring']
    },
    {
      icon: Brain,
      title: 'Machine Learning Insights',
      description: 'Get AI-driven insights and recommendations for better financial decisions.',
      benefits: ['ML algorithms', 'Pattern recognition', 'Investment suggestions', 'Risk predictions']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and management tools.',
      benefits: ['Risk scoring', 'Portfolio diversification', 'Stress testing', 'Compliance monitoring']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically.',
      benefits: ['Auto-reporting', 'Custom dashboards', 'Data visualization', 'Export capabilities']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on financial analysis and decision-making.',
      benefits: ['Team sharing', 'Comment systems', 'Approval workflows', 'Role management']
    }
  ];

  const benefits = [
    '50% more accurate predictions',
    'Real-time market monitoring',
    'Automated risk assessment',
    'Comprehensive financial reporting',
    'Portfolio optimization',
    'Advanced ML algorithms'
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analysis - Advanced Financial Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your financial analysis with AI-powered insights. Predictive modeling, risk assessment, and automated reporting for better financial decisions." />
        <meta name="keywords" content="AI financial analysis, financial intelligence, predictive modeling, risk assessment, portfolio analysis, financial reporting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Financial
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Analysis
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your financial analysis with AI-powered insights. 
              Predictive modeling, risk assessment, and automated reporting for better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Financial Analysis Features
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
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose AI Financial Analysis?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of financial professionals already using AI-powered analysis 
              to make better investment decisions and manage risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiFinancialAnalysisPage;