import React from 'react';
import { ArrowRight, CheckCircle, Users, Brain, BarChart, Target, Zap, Shield } from 'lucide-react';

const AiCrmPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations to improve customer relationships.',
      benefits: ['Predictive Analytics', 'Customer Scoring', 'Behavior Analysis', 'Trend Detection']
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Comprehensive customer profiles with AI-enhanced data management.',
      benefits: ['360° Customer View', 'Contact History', 'Interaction Tracking', 'Personalization']
    },
    {
      icon: Target,
      title: 'Lead Scoring',
      description: 'AI-powered lead qualification and scoring to improve conversion rates.',
      benefits: ['Automated Scoring', 'Lead Prioritization', 'Conversion Prediction', 'ROI Tracking']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Advanced analytics and reporting to track sales performance and trends.',
      benefits: ['Sales Forecasting', 'Performance Metrics', 'Pipeline Analysis', 'Custom Reports']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline sales processes with AI-powered automation'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your customer data'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your sales performance and trends'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI CRM
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your customer relationships with AI-powered CRM that provides intelligent insights and automates sales processes.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI CRM provides comprehensive tools to manage and grow your customer relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <feature.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI CRM?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI CRM delivers intelligent insights and automates processes to drive sales growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your CRM?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI CRM can help you improve customer relationships and drive sales growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiCrmPage;