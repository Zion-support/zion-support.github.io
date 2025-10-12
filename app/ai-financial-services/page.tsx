import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { Brain, Shield, TrendingUp, BarChart, Target, Zap } from 'lucide-react';

const AIFinancialServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Real-time analysis', 'Predictive modeling', 'Risk assessment', 'Fraud detection']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Real-time monitoring', 'Pattern recognition', 'Anomaly detection', 'Risk mitigation']
    },
    {
      icon: TrendingUp,
      title: 'Algorithmic Trading',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Automated trading', 'Market analysis', 'Portfolio optimization', 'Risk management']
    },
    {
      icon: BarChart,
      title: 'Financial Forecasting',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Predictive analytics', 'Market trends', 'Investment insights', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Risk Assessment',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Risk evaluation', 'Compliance monitoring', 'Credit scoring', 'Insurance underwriting']
    },
    {
      icon: Zap,
      title: 'Automated Processing',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Transaction processing', 'Document analysis', 'Compliance checks', 'Reporting automation']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial services including fraud detection, risk assessment, algorithmic trading, and financial forecasting solutions." />
        <meta name="keywords" content="AI financial services, fintech AI, fraud detection, risk assessment, algorithmic trading, financial forecasting" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Financial Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your financial operations with cutting-edge AI solutions for fraud detection,
                risk assessment, algorithmic trading, and predictive analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI-driven financial solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Financial Services?</h2>
              <p className="text-xl text-gray-300">Transform your financial operations with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Financial Services and experience the future of intelligent financial management.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialServicesPage;