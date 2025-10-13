import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BarChart3, TrendingUp, Shield, DollarSign, PieChart } from 'lucide-react';

const AiFinancialAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive financial analysis with AI-powered insights and predictions',
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Real-time market analysis and trend prediction with machine learning',
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Automated risk evaluation and portfolio optimization strategies',
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: 'Investment Insights',
      description: 'AI-driven investment recommendations and performance analysis',
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "50% more accurate predictions",
    "Real-time market monitoring",
    "Automated risk assessment",
    "Comprehensive financial reporting",
    "Portfolio optimization",
    "Advanced security protocols"
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analysis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial analysis platform. Get intelligent insights, risk assessment, and investment recommendations for better financial decisions." />
        <meta name="keywords" content="AI financial analysis, investment analysis, risk assessment, financial modeling, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Financial Analysis
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered financial analysis platform. Get intelligent insights, 
              risk assessment, and investment recommendations for better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Financial Features</h2>
              <p className="text-xl text-gray-300">AI-driven financial analysis for smarter decisions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Financial Analysis Platform?</h2>
              <p className="text-xl text-gray-300">Experience the power of AI-driven financial insights</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                  <PieChart className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
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
              Join thousands of businesses already using AI-powered financial analysis 
              to make smarter investment decisions and manage risk effectively.
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