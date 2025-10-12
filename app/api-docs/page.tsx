import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Key, Zap, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ApiDocsPage() {
  const apiSections = [
    {
      icon: <Key className="w-8 h-8 text-blue-500" />,
      title: 'Authentication',
      description: 'Learn how to authenticate with our API',
      endpoint: 'POST /auth/token'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Services',
      description: 'Access our AI-powered services via API',
      endpoint: 'POST /ai/generate'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Manage your data and analytics',
      endpoint: 'GET /data/analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Webhooks',
      description: 'Set up real-time notifications',
      endpoint: 'POST /webhooks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services including authentication, endpoints, and examples." />
        <meta name="keywords" content="API documentation, REST API, authentication, endpoints, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              API Documentation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate with our services using our comprehensive REST API.
            </p>
          </div>
        </div>
      </section>

      {/* API Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiSections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <div className="bg-gray-800 rounded-lg p-3 mb-4">
                  <code className="text-green-400 text-sm">{section.endpoint}</code>
                </div>
                <Link
                  to="/docs"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Integrate?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Get started with our API and start building amazing applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/docs" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Full Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}