import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Code, Database, Cloud, Smartphone } from 'lucide-react';
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
      category: 'AI Solutions',
      icon: Globe,
      items: [
        {
          name: 'AI Content Generator',
          description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
          features: ['Natural Language Processing', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training'],
          pricing: 'Starting at $99/month',
          href: '/products/ai-content-generator'
        },
        {
          name: 'AI Business Intelligence',
          description: 'Comprehensive AI-driven analytics and business intelligence platform.',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
          pricing: 'Starting at $299/month',
          href: '/products/ai-business-intelligence'
        },
        {
          name: 'AI Security Platform',
          description: 'Next-generation AI-powered cybersecurity and threat detection system.',
          features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Risk Assessment'],
          pricing: 'Starting at $199/month',
          href: '/products/ai-security-platform'
        }
      ]
    },
    {
      category: 'Cloud Solutions',
      icon: Cloud,
      items: [
        {
          name: 'Cloud Migration Suite',
          description: 'Complete cloud migration and management platform for enterprise applications.',
          features: ['Automated Migration', 'Cost Optimization', 'Performance Monitoring', 'Security Compliance'],
          pricing: 'Starting at $499/month',
          href: '/products/cloud-migration-suite'
        },
        {
          name: 'Kubernetes Orchestration',
          description: 'Advanced container orchestration and management platform.',
          features: ['Auto-scaling', 'Load Balancing', 'Service Mesh', 'Monitoring'],
          pricing: 'Starting at $399/month',
          href: '/products/kubernetes-orchestration'
        }
      ]
    },
    {
      category: 'Development Tools',
      icon: Code,
      items: [
        {
          name: 'API Gateway Platform',
          description: 'Enterprise-grade API management and gateway solution.',
          features: ['Rate Limiting', 'Authentication', 'Analytics', 'Documentation'],
          pricing: 'Starting at $149/month',
          href: '/products/api-gateway-platform'
        },
        {
          name: 'Microservices Framework',
          description: 'Complete framework for building and managing microservices architecture.',
          features: ['Service Discovery', 'Circuit Breakers', 'Distributed Tracing', 'Health Checks'],
          pricing: 'Starting at $249/month',
          href: '/products/microservices-framework'
        }
      ]
    },
    {
      category: 'Mobile Solutions',
      icon: Smartphone,
      items: [
        {
          name: 'Cross-Platform Mobile Suite',
          description: 'Unified mobile development and deployment platform.',
          features: ['React Native', 'Flutter Support', 'Push Notifications', 'Analytics'],
          pricing: 'Starting at $199/month',
          href: '/products/cross-platform-mobile-suite'
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore our comprehensive suite of technology products designed to transform your business operations and drive digital innovation."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover our comprehensive suite of technology products designed to transform your business operations 
            and drive digital innovation across all industries.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Cutting-edge solutions in {category.category.toLowerCase()} to accelerate your digital transformation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-blue-600">{product.pricing}</div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Link
                        href={product.href}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                      >
                        Get Demo
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which products are right for your organization and how we can help you implement them successfully.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Consultation
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;