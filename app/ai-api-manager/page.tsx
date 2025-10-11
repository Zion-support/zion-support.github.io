import React from 'react';
import { CheckCircle, ArrowRight, Settings, Cpu, Database, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      title: 'API Configuration',
      description: 'Centralized configuration management for all your AI APIs and services.',
      benefits: ['Easy Setup', 'Flexible Configuration', 'Environment Management', 'Version Control'],
      icon: <Settings className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'User Management',
      description: 'Comprehensive user and team management with role-based access control.',
      benefits: ['Role-Based Access', 'Team Collaboration', 'User Analytics', 'Permission Management'],
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics for API performance and usage.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'Usage Analytics', 'Alert System'],
      icon: <Database className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Security Controls',
      description: 'Advanced security features to protect your AI API infrastructure.',
      benefits: ['Authentication', 'Authorization', 'Rate Limiting', 'Audit Logging'],
      icon: <Monitor className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Integration Tools',
      description: 'Powerful tools for integrating AI APIs with your existing systems.',
      benefits: ['SDK Generation', 'Webhook Support', 'API Testing', 'Documentation'],
      icon: <Settings className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Cost Management',
      description: 'Intelligent cost tracking and optimization for AI API usage.',
      benefits: ['Usage Tracking', 'Cost Analytics', 'Budget Controls', 'Optimization Tips'],
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
        <meta name="description" content="Professional AI API manager solutions for modern businesses." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI API Manager
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI API manager solutions for modern businesses. 
              Manage and optimize your AI APIs with ease.
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
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
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

export default AIApiManagerPage;
