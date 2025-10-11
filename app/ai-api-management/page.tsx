'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react'

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling'],
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including authentication, authorization, and threat detection.',
      benefits: ['JWT authentication', 'OAuth integration', 'Threat detection', 'Data encryption'],
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete user management system with role-based access control and analytics.',
      benefits: ['Role-based access', 'User analytics', 'Permission management', 'Audit trails'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time analytics and monitoring to track API performance and usage patterns.',
      benefits: ['Real-time monitoring', 'Usage analytics', 'Performance metrics', 'Alert system'],
    }
  ];

  const benefits = [
    'Reduced API costs through intelligent optimization',
    'Enhanced security with AI-powered threat detection',
    'Improved developer experience with comprehensive tooling',
    'Scalable infrastructure that grows with your needs',
    'Real-time monitoring and analytics',
    'Compliance with industry standards'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions for modern applications. Smart rate limiting, security, and analytics." />
        <meta name="keywords" content="API management, AI, rate limiting, security, analytics, developer tools" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Management</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered API management solutions that optimize performance, enhance security, and provide comprehensive analytics for modern applications.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful API Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered API management platform provides everything you need to build, secure, and scale your APIs.
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI API Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of API management with AI-powered optimization and security.
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your API Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to build a robust, secure, and scalable API management solution.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIApiManagementPage;