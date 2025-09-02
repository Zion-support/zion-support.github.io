import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Package, Zap, Shield, Globe, Users, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
      id: 'ai-platform',
      name: 'Zion AI Platform',
      description: 'Comprehensive AI development and deployment platform with pre-built models and custom training capabilities.',
      features: [
        'Custom AI Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Real-time Processing',
        'API Integration'
      ],
      pricing: 'Starting at $299/month',
      category: 'AI & Machine Learning',
      icon: Zap,
      color: 'blue'
    },
    {
      id: 'cloud-suite',
      name: 'Zion Cloud Suite',
      description: 'Complete cloud infrastructure management solution with automated scaling and monitoring.',
      features: [
        'Multi-Cloud Management',
        'Auto-scaling Infrastructure',
        'Real-time Monitoring',
        'Security Compliance',
        'Cost Optimization',
        '24/7 Support'
      ],
      pricing: 'Starting at $199/month',
      category: 'Cloud Infrastructure',
      icon: Globe,
      color: 'green'
    },
    {
      id: 'security-hub',
      name: 'Zion Security Hub',
      description: 'Advanced cybersecurity platform with threat detection, prevention, and response capabilities.',
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Incident Response',
        'Compliance Monitoring',
        'Security Analytics',
        'Automated Remediation'
      ],
      pricing: 'Starting at $399/month',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'red'
    },
    {
      id: 'analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Business intelligence and analytics platform with advanced reporting and visualization tools.',
      features: [
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization',
        'Predictive Insights',
        'Integration APIs',
        'Mobile Access'
      ],
      pricing: 'Starting at $149/month',
      category: 'Business Intelligence',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      id: 'collaboration-suite',
      name: 'Zion Collaboration Suite',
      description: 'Team collaboration and project management platform with integrated communication tools.',
      features: [
        'Project Management',
        'Team Communication',
        'File Sharing',
        'Task Tracking',
        'Time Management',
        'Integration Hub'
      ],
      pricing: 'Starting at $99/month',
      category: 'Productivity',
      icon: Users,
      color: 'indigo'
    },
    {
      id: 'iot-platform',
      name: 'Zion IoT Platform',
      description: 'Internet of Things platform for device management, data collection, and analytics.',
      features: [
        'Device Management',
        'Data Collection',
        'Real-time Analytics',
        'Remote Monitoring',
        'Alert System',
        'API Gateway'
      ],
      pricing: 'Starting at $249/month',
      category: 'IoT Solutions',
      icon: Package,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore Zion Tech Group's comprehensive suite of technology products including AI platforms, cloud solutions, security tools, and business intelligence software."
      keywords="products, software, AI platform, cloud suite, security hub, analytics, collaboration, IoT, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Package className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Comprehensive technology solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className={`bg-gradient-to-r ${getColorClasses(product.color)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-12 h-12" />
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-gray-900">{product.pricing}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link 
                            href="/contact" 
                            className={`flex-1 bg-gradient-to-r ${getColorClasses(product.color)} text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5`}
                          >
                            Get Started
                          </Link>
                          <Link 
                            href={`/products/${product.id}`} 
                            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Products?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our products are built with enterprise-grade security, scalability, and performance in mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level security with encryption, compliance, and regular security audits.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Built to grow with your business, from startup to enterprise scale.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
                <p className="text-gray-600">
                  Optimized for speed and reliability with 99.9% uptime guarantee.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Dedicated support team available around the clock to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get started with our products today and experience the power of modern technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Sales
              </Link>
              <Link 
                href="/demo" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Products;