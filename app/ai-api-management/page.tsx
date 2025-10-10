'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Code, Cloud, Lock, Monitor } from 'lucide-react';

const AiApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered API Management',
      description: 'Intelligent API management with AI-driven insights and automated optimization.',
      benefits: ['Smart routing', 'Predictive scaling', 'Automated monitoring', 'Intelligent caching']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security features to protect your APIs and data.',
      benefits: ['OAuth 2.0', 'JWT tokens', 'Rate limiting', 'DDoS protection']
    },
    {
      icon: Monitor,
      title: 'Real-Time Monitoring',
      description: 'Comprehensive monitoring and analytics for all your API endpoints.',
      benefits: ['Live metrics', 'Performance tracking', 'Error monitoring', 'Usage analytics']
    },
    {
      icon: Code,
      title: 'Developer-Friendly',
      description: 'Built for developers with comprehensive documentation and tools.',
      benefits: ['OpenAPI specs', 'SDK generation', 'Interactive docs', 'Testing tools']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Fully managed cloud solution with automatic scaling and high availability.',
      benefits: ['Auto-scaling', 'Global CDN', '99.9% uptime', 'Multi-region support']
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple configuration and management through intuitive dashboards.',
      benefits: ['Visual config', 'Template library', 'Version control', 'Rollback support']
    }
  ];

  const benefits = [
    'Reduce API development time by 60%',
    'Improve API performance and reliability',
    'Enhance security with advanced protection',
    'Scale automatically with traffic demands',
    'Gain insights with comprehensive analytics',
    'Streamline developer onboarding'
  ];

  const useCases = [
    {
      title: 'Microservices Management',
      description: 'Orchestrate and manage complex microservices architectures',
      icon: Database
    },
    {
      title: 'Third-Party Integration',
      description: 'Securely integrate with external APIs and services',
      icon: Globe
    },
    {
      title: 'Mobile API Gateway',
      description: 'Optimize APIs for mobile applications and devices',
      icon: Monitor
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize legacy systems with API-first approach',
      icon: Code
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management platform for modern applications. Secure, scalable, and intelligent API gateway solution." />
        <meta name="keywords" content="API management, AI-powered APIs, API gateway, microservices, API security, developer tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered API Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Secure, scale, and optimize your APIs with our intelligent management platform. 
                Built for modern applications with AI-driven insights and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive API Management</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage APIs at scale with AI-powered intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our API management platform can transform your application architecture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our API Management?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered API management platform is designed to help you build, deploy, 
                  and scale APIs with confidence and intelligence.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Code className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Developer Experience</h3>
                    <p className="text-gray-300 mb-6">
                      Built by developers for developers with comprehensive tools and documentation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your APIs?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building better APIs with our AI-powered management platform. 
                Get started today and see the difference intelligent API management can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiApiManagementPage;