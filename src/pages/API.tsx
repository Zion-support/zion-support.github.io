import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap, Globe, BookOpen, Download } from 'lucide-react';

const API: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/services',
      description: 'Retrieve all available services',
      auth: 'Required'
    },
    {
      method: 'POST',
      path: '/api/v1/quote',
      description: 'Request a quote for services',
      auth: 'Required'
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get analytics data',
      auth: 'Required'
    },
    {
      method: 'PUT',
      path: '/api/v1/user/profile',
      description: 'Update user profile',
      auth: 'Required'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-100ms response times guaranteed'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide edge locations for fast access'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'Live data synchronization across all endpoints'
    }
  ];

  const sdks = [
    { name: 'JavaScript/Node.js', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C#', icon: '🔷' },
    { name: 'Go', icon: '🐹' },
    { name: 'PHP', icon: '🐘' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Reference - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Integrate with our platform using RESTful APIs, SDKs, and developer tools."
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate with Zion Tech Group services using our comprehensive API documentation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              API documentation coming soon. We're building comprehensive integration guides.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default API;
