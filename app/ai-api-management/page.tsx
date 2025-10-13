import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Settings } from 'lucide-react';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      title: 'API Gateway Management',
      description: 'Centralized API gateway with advanced routing, rate limiting, and security controls.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Centralized control', 'Rate limiting', 'Security policies', 'Traffic management']
    },
    {
      title: 'Real-time Monitoring',
      description: 'Comprehensive monitoring and analytics for all your APIs with real-time dashboards.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Real-time metrics', 'Performance tracking', 'Error monitoring', 'Usage analytics']
    },
    {
      title: 'Global Distribution',
      description: 'Distribute your APIs globally with edge computing and CDN integration.',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Global reach', 'Low latency', 'High availability', 'Edge computing']
    },
    {
      title: 'Advanced Configuration',
      description: 'Flexible configuration management with versioning and rollback capabilities.',
      icon: <Settings className="w-6 h-6" />,
      benefits: ['Version control', 'Rollback support', 'Environment management', 'Configuration templates']
    }
  ];

  const benefits = [
    'Reduce API management complexity by 80%',
    'Improve API performance by 60%',
    'Enhance security with advanced controls',
    'Scale globally with edge distribution',
    'Monitor and optimize in real-time',
    'Reduce operational costs by 50%'
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Advanced API Gateway Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional AI API management solutions by Zion Tech Group. Advanced API gateway, monitoring, and global distribution." />
        <meta name="keywords" content="API management, API gateway, microservices, API monitoring, API security, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI API Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced API gateway solutions with intelligent routing, monitoring, and global distribution. 
              Scale your APIs with enterprise-grade management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage, monitor, and scale your APIs effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our API Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of professional API management with our advanced solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI API management solution and transform your API infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                <ArrowRight className="w-5 h-5 inline mr-2" />
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAPIManagementPage;