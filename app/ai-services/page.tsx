import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, BarChart3, Shield, Zap, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const services = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence to uncover insights and drive business decisions.',
      icon: <BarChart3 className="w-8 h-8" />,
      href: '/ai-analytics',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards']
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions that work 24/7.',
      icon: <Zap className="w-8 h-8" />,
      href: '/ai-automation',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Scheduling']
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered content generation tools.',
      icon: <Brain className="w-8 h-8" />,
      href: '/ai-content-generation',
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support']
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      icon: <Shield className="w-8 h-8" />,
      href: '/ai-customer-service',
      features: ['24/7 Support', 'Natural Language Processing', 'Sentiment Analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including analytics, automation, content generation, and customer service solutions. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From analytics to automation, we help you harness the power of artificial intelligence.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you implement the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;
