import React from 'react';
import { Code, Book, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ApiDocsPage: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/services',
      description: 'Retrieve all available services',
      example: 'curl -X GET https://api.ziontechgroup.com/services'
    },
    {
      method: 'POST',
      endpoint: '/api/contact',
      description: 'Submit contact form data',
      example: 'curl -X POST https://api.ziontechgroup.com/contact -d "name=John&email=john@example.com"'
    },
    {
      method: 'GET',
      endpoint: '/api/health',
      description: 'Check API health status',
      example: 'curl -X GET https://api.ziontechgroup.com/health'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive API documentation for integrating with Zion Tech Group services. 
              Build powerful applications using our RESTful APIs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
              <code className="text-purple-400 text-lg">https://api.ziontechgroup.com</code>
            </div>
            
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-purple-400 text-lg">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-300 mb-4">{endpoint.description}</p>
                  <div className="bg-gray-900 rounded p-4">
                    <code className="text-gray-300 text-sm">{endpoint.example}</code>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
              >
                Get API Access <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;