import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIApiManagementPage: React.FC = () => {
  const features = [{'title': 'API Gateway Management', 'description': 'Centralized API gateway for seamless integration and management.', 'benefits': ['Traffic Control', 'Rate Limiting', 'Authentication', 'Monitoring']}, {'title': 'AI Model Integration', 'description': 'Easy integration with various AI models and services.', 'benefits': ['Model Versioning', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling']}, {'title': 'Global Distribution', 'description': 'Worldwide API distribution with edge computing capabilities.', 'benefits': ['Low Latency', 'High Availability', 'Global CDN', 'Edge Computing']}];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Professional AI API management solutions for modern businesses." />
        <meta name="keywords" content="aiapimanagement, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional AI API management solutions for modern businesses.
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIApiManagementPage;