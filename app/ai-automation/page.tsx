'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      benefits: ['Workflow optimization', 'Task scheduling', 'Error reduction', 'Time savings']
    },
    {
      icon: Target,
      title: 'Smart Decision Making',
      description: 'AI-driven decision support systems that learn and adapt to your business needs.',
      benefits: ['Predictive analytics', 'Risk assessment', 'Performance optimization', 'Strategic insights']
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Automation solutions that grow with your business and adapt to changing requirements.',
      benefits: ['Flexible architecture', 'Easy integration', 'Performance monitoring', 'Continuous improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your operations with intelligent automation solutions that work 24/7 to improve efficiency.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI automation can transform your operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Automation Demo
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiAutomationPage;
