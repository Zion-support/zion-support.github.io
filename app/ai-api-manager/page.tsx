import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight } from 'lucide-react';

=======
import { CheckCircle, ArrowRight, Settings, Cpu, Database, Monitor } from 'lucide-react';

=======
import { CheckCircle, ArrowRight, Settings, Cpu, Database, Monitor } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Settings, Cpu, Database, Monitor } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
import { CheckCircle, ArrowRight, Settings, Cpu, Database, Monitor } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      title: 'API Configuration',
      description: 'Easy configuration and management of AI APIs.',
      benefits: ['Simple Setup', 'Flexible Configuration', 'Environment Management', 'Version Control'],
      icon: <Settings className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'AI Processing',
      description: 'High-performance AI processing and inference.',
      benefits: ['GPU Acceleration', 'Batch Processing', 'Real-time Inference', 'Model Optimization'],
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Data Management',
      description: 'Efficient data storage and retrieval for AI operations.',
      benefits: ['Vector Databases', 'Data Pipelines', 'Caching Layer', 'Data Security'],
      icon: <Database className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and performance analytics.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'Error Monitoring', 'Usage Analytics'],
      icon: <Monitor className="w-8 h-8 text-orange-400" />
<<<<<<< HEAD
<<<<<<< HEAD
const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      title: 'API Configuration',
      description: 'Centralized configuration management for all your AI APIs and services.',
      benefits: ['Easy Setup', 'Flexible Configuration', 'Environment Management', 'Version Control']
    },
    {
      title: 'User Management',
      description: 'Comprehensive user and team management with role-based access control.',
      benefits: ['Role-Based Access', 'Team Collaboration', 'User Analytics', 'Permission Management']
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics for API performance and usage.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'Usage Analytics', 'Alert System']
    },
    {
      title: 'Security Controls',
      description: 'Advanced security features to protect your AI API infrastructure.',
      benefits: ['Authentication', 'Authorization', 'Rate Limiting', 'Audit Logging']
    },
    {
      title: 'Integration Tools',
      description: 'Powerful tools for integrating AI APIs with your existing systems.',
      benefits: ['SDK Generation', 'Webhook Support', 'API Testing', 'Documentation']
    },
    {
      title: 'Cost Management',
      description: 'Intelligent cost tracking and optimization for AI API usage.',
      benefits: ['Usage Tracking', 'Cost Analytics', 'Budget Controls', 'Optimization Tips']

=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
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

<<<<<<< HEAD
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI API Management
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
                Powerful API Manager Features
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
                Advanced API Management Features
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
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
                Contact us today to learn more about our AI API manager solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
<<<<<<< HEAD
<<<<<<< HEAD
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive AI API Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional AI API manager services to help your business succeed and grow.
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
                  Contact us today to learn more about our AI API manager services.
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
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

=======
        
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        <Footer />
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default AIApiManagerPage;
export default AIAPIManagerPage;

=======
export default AIApiManagerPage;

=======
=======
export default AIApiManagerPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
export default AIApiManagerPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
