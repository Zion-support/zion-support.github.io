import React from 'react';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      title: 'API Gateway Management',
      description: 'Centralized API gateway for seamless integration and management.',
      benefits: ['Traffic Control', 'Rate Limiting', 'Authentication', 'Monitoring'],
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'AI Model Integration',
      description: 'Easy integration with various AI models and services.',
      benefits: ['Model Versioning', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Global Distribution',
      description: 'Worldwide API distribution with edge computing capabilities.',
      benefits: ['Low Latency', 'High Availability', 'Global CDN', 'Edge Computing'],
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and performance insights.',
      benefits: ['Real-time Metrics', 'Usage Analytics', 'Performance Reports', 'Cost Optimization'],
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Professional AI API management services and solutions." />
        <meta name="keywords" content="AI API management, API gateway, AI solutions, technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI API <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional AI API management solutions for modern businesses. 
              Streamline your AI operations with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI API management solutions tailored to your business needs.
=======
                Powerful API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI API management platform designed for modern businesses.
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your AI API management needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

=======
        
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        <Footer />
      </div>
    </>
  );
};

export default AIApiManagementPage;