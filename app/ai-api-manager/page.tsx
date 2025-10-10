'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Shield, Zap, Settings, Lock, Globe, ArrowRight, Code, Database, Cloud, Activity } from 'lucide-react';

const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'API Security',
      description: 'Advanced security measures to protect your APIs from threats and unauthorized access.',
      benefits: ['Authentication & authorization', 'Rate limiting', 'API key management', 'Threat detection']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize API performance with caching, load balancing, and intelligent routing.',
      benefits: ['Response caching', 'Load balancing', 'Auto-scaling', 'Performance monitoring']
    },
    {
      icon: Settings,
      title: 'API Gateway',
      description: 'Centralized API gateway for managing, monitoring, and securing all your APIs.',
      benefits: ['Centralized management', 'Traffic routing', 'Request/response transformation', 'API versioning']
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular access control and permission management for API endpoints.',
      benefits: ['Role-based access', 'Permission management', 'API key rotation', 'Audit logging']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Distribute your APIs globally with edge computing and CDN integration.',
      benefits: ['Edge computing', 'CDN integration', 'Global load balancing', 'Low latency']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor API performance, usage, and health in real-time with detailed analytics.',
      benefits: ['Real-time metrics', 'Usage analytics', 'Health monitoring', 'Alert system']
    }
  ];

  const benefits = [
    'Improve API performance by 80%',
    'Reduce security incidents by 95%',
    'Lower operational costs by 60%',
    'Increase API reliability by 90%',
    'Enable global API distribution',
    'Automate API management tasks',
    'Scale APIs efficiently',
    'Enhance developer experience'
  ];

  const useCases = [
    {
      title: 'Microservices Architecture',
      description: 'Manage and orchestrate microservices APIs',
      icon: '🔧'
    },
    {
      title: 'Third-party Integration',
      description: 'Securely integrate with external APIs',
      icon: '🔗'
    },
    {
      title: 'Mobile App Backend',
      description: 'Power mobile applications with robust APIs',
      icon: '📱'
    },
    {
      title: 'Web Application APIs',
      description: 'Build scalable web application backends',
      icon: '🌐'
    },
    {
      title: 'IoT Device Management',
      description: 'Connect and manage IoT devices via APIs',
      icon: '📡'
    },
    {
      title: 'Data Integration',
      description: 'Integrate data from multiple sources',
      icon: '📊'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
        <meta name="description" content="Streamline and secure your API infrastructure with our AI API Manager solution. Advanced security, performance optimization, and intelligent monitoring." />
        <meta name="keywords" content="AI API manager, API gateway, API security, microservices, API monitoring, API optimization" />
      </Helmet>


      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            </div><div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline and secure your API infrastructure with our advanced AI API Manager solution. 
              Intelligent monitoring, security, and optimization for better API performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIAPIManagerPage;
