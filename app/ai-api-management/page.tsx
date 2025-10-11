import React from 'react';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      title: 'API Gateway Management',
      description: 'Centralized API gateway with advanced routing, load balancing, and traffic management.',
      benefits: ['High Availability', 'Load Balancing', 'Rate Limiting', 'Traffic Analytics'],
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'AI Model Integration',
      description: 'Seamless integration with various AI models and machine learning services.',
      benefits: ['Multi-Model Support', 'Auto-Scaling', 'Model Versioning', 'Performance Monitoring'],
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with authentication, authorization, and compliance features.',
      benefits: ['OAuth 2.0', 'API Key Management', 'Audit Logging', 'GDPR Compliance'],
      icon: <Globe className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring, analytics, and insights for your AI API infrastructure.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'Error Monitoring', 'Usage Analytics'],
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Developer Experience',
      description: 'Comprehensive developer tools and documentation for seamless integration.',
      benefits: ['API Documentation', 'SDK Generation', 'Testing Tools', 'Developer Portal'],
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Cost Optimization',
      description: 'Intelligent cost management and optimization for AI API usage.',
      benefits: ['Usage Optimization', 'Cost Analytics', 'Budget Controls', 'Resource Scaling'],
      icon: <Zap className="w-8 h-8 text-purple-400" />
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
    </>
  );
};

export default AIApiManagementPage;
