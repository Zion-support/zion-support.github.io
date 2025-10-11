import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight } from 'lucide-react';

=======
import { CheckCircle, ArrowRight, Shield, Zap, Globe, BarChart3 } from 'lucide-react';

=======
import { CheckCircle, ArrowRight, Shield, Zap, Globe, BarChart3 } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Shield, Zap, Globe, BarChart3 } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
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
<<<<<<< HEAD
const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      title: 'API Gateway Management',
      description: 'Centralized API gateway with advanced routing, load balancing, and traffic management.',
      benefits: ['High Availability', 'Load Balancing', 'Rate Limiting', 'Traffic Analytics']
    },
    {
      title: 'AI Model Integration',
      description: 'Seamless integration with various AI models and machine learning services.',
      benefits: ['Multi-Model Support', 'Auto-Scaling', 'Model Versioning', 'Performance Monitoring']
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with authentication, authorization, and compliance features.',
      benefits: ['OAuth 2.0', 'API Key Management', 'Audit Logging', 'GDPR Compliance']
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring, analytics, and insights for your AI API infrastructure.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'Error Monitoring', 'Usage Analytics']
    },
    {
      title: 'Developer Experience',
      description: 'Comprehensive developer tools and documentation for seamless integration.',
      benefits: ['API Documentation', 'SDK Generation', 'Testing Tools', 'Developer Portal']
    },
    {
      title: 'Cost Optimization',
      description: 'Intelligent cost management and optimization for AI API usage.',
      benefits: ['Usage Optimization', 'Cost Analytics', 'Budget Controls', 'Resource Scaling']

=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Professional AI API management solutions for modern businesses." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI API Management
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI API management solutions for modern businesses. 
              Streamline your AI operations with our comprehensive platform.
            </p>
          </div>

<<<<<<< HEAD
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
                Powerful API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI API management platform designed for modern businesses.
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
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our AI API management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
<<<<<<< HEAD
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive AI API Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional AI API management services to help your business succeed and grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us today to learn more about our AI API management services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
=======

=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
<div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
=======
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
    </>
  );
};

<<<<<<< HEAD
export default AIApiManagementPage;
export default AIAPIManagementPage;

=======
export default AIApiManagementPage;

=======
=======
export default AIApiManagementPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
