'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3, Settings, Globe, Lock } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Intelligent API Monitoring',
      description: 'Real-time monitoring and analytics for all your APIs with AI-powered insights and anomaly detection.',
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts']
    },
    {
      icon: Shield,
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']
    },
    {
      icon: Settings,
      title: 'Automated Documentation',
      description: 'Generate and maintain comprehensive API documentation automatically with AI-powered analysis.',
      benefits: ['Auto-generated docs', 'Interactive examples', 'Version management', 'Developer portal']
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'Enterprise-grade security features including authentication, authorization, and threat detection.',
      benefits: ['OAuth 2.0 support', 'JWT tokens', 'API key management', 'Threat detection']
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Distribute your APIs globally with intelligent caching and edge computing capabilities.',
      benefits: ['Global distribution', 'Edge caching', 'Low latency', 'High availability']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with detailed insights into API usage and performance.',
      benefits: ['Usage analytics', 'Performance metrics', 'Cost analysis', 'Trend reporting']
    }
  ];

  const benefits = [
    'Reduced API downtime by 95%',
    '50% faster API response times',
    'Automated security scanning',
    'Real-time performance monitoring',
    'Intelligent load balancing',
    'Cost optimization insights'
  ];

  const stats = [
    { icon: <Zap className="w-8 h-8 text-blue-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-green-500" />, value: '100%', label: 'Security' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '10K+', label: 'APIs Managed' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Settings className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">AI API Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI API Management
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
            Intelligent API Management Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Manage, monitor, and optimize your APIs with our AI-powered platform. 
            Get intelligent insights, automated security, and seamless scaling for all your API needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="hologram-card-enhanced p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Advanced API Management Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-blue-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
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
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Why Choose Our AI API Management?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers using our AI API Management platform to build better APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIApiManagementPage;