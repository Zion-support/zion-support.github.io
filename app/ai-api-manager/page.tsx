'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';

const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent API Management',
      description: 'AI-driven API lifecycle management with automated optimization and intelligent routing',
      benefits: ['Smart API discovery', 'Auto-versioning', 'Intelligent caching', 'Performance optimization']
    },
    {
      icon: Settings,
      title: 'Advanced Configuration',
      description: 'Comprehensive API configuration with visual editor and code generation',
      benefits: ['Visual API designer', 'Code generation', 'Schema validation', 'Environment management']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Real-time API analytics with AI-powered insights and performance monitoring',
      benefits: ['Real-time metrics', 'AI insights', 'Performance tracking', 'Usage analytics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with advanced threat detection and compliance features',
      benefits: ['OAuth 2.0 & OpenID', 'API encryption', 'Threat detection', 'Compliance tools']
    }
  ];

  const capabilities = [
    'Automated API documentation generation',
    'Intelligent load balancing and scaling',
    'Real-time API performance monitoring',
    'Advanced security and access control',
    'Multi-cloud deployment support',
    'Custom API gateway configuration',
    'Integration with popular development tools',
    'Comprehensive API testing suite'
  ];

  const integrations = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Azure', logo: 'Azure' },
    { name: 'Google Cloud', logo: 'GCP' },
    { name: 'Kubernetes', logo: 'K8s' },
    { name: 'Docker', logo: 'Docker' },
    { name: 'Terraform', logo: 'Terraform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management platform by Zion Tech Group. Intelligent API lifecycle management and optimization." />
        <meta name="keywords" content="API manager, AI APIs, API lifecycle, API optimization, microservices management" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI API Manager</span>span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">The most intelligent API management platform that adapts, learns, and optimizes your APIs automatically.</p>p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">Start Managing</button>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">View Demo</button>button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Management Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to manage, monitor, and optimize your APIs with AI-powered intelligence.</p>p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
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

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive API management capabilities powered by artificial intelligence.</p>p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{capabilities.map((capability, index) => (</div>
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-medium">{capability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Works with your existing tools and cloud providers for a seamless experience.</p>p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">{integrations.map((integration, index) => (</div>
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{integration.logo}</span>
                </div>
                <p className="text-white text-sm font-medium">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Manage Your APIs Intelligently?</h2>
          <p className="text-xl text-purple-100 mb-8">Experience the future of API management with AI-powered automation and optimization.</p>p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">Start Free Trial</button>button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">Schedule Demo</button>button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAPIManagerPage;