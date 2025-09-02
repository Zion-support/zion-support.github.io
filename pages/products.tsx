import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Code, Database, Cloud, Smartphone } from 'lucide-react';
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
      id: 'ai-platform',
      name: 'Zion AI Platform',
      description: 'Comprehensive AI development and deployment platform with pre-built models and custom training capabilities.',
      icon: Globe,
      features: ['Custom AI Models', 'Pre-trained Models', 'Real-time Inference', 'Model Management'],
      pricing: 'Starting at $299/month',
      category: 'AI & Machine Learning'
    },
    {
      id: 'cloud-suite',
      name: 'Zion Cloud Suite',
      description: 'Complete cloud infrastructure management platform with automated scaling and monitoring.',
      icon: Cloud,
      features: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Security'],
      pricing: 'Starting at $199/month',
      category: 'Cloud Infrastructure'
    },
    {
      id: 'dev-tools',
      name: 'Zion DevTools',
      description: 'Advanced development tools and IDE extensions for modern software development.',
      icon: Code,
      features: ['Code Analysis', 'Debugging Tools', 'Performance Profiling', 'Team Collaboration'],
      pricing: 'Starting at $99/month',
      category: 'Development Tools'
    },
    {
      id: 'mobile-sdk',
      name: 'Zion Mobile SDK',
      description: 'Cross-platform mobile development SDK with native performance and modern UI components.',
      icon: Smartphone,
      features: ['Cross-platform', 'Native Performance', 'UI Components', 'Push Notifications'],
      pricing: 'Starting at $149/month',
      category: 'Mobile Development'
    },
    {
      id: 'data-platform',
      name: 'Zion Data Platform',
      description: 'Enterprise data management and analytics platform with real-time processing capabilities.',
      icon: Database,
      features: ['Real-time Processing', 'Data Visualization', 'ETL Pipelines', 'Data Governance'],
      pricing: 'Starting at $399/month',
      category: 'Data & Analytics'
    },
    {
      id: 'security-suite',
      name: 'Zion Security Suite',
      description: 'Comprehensive cybersecurity platform with threat detection and automated response.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Security Analytics'],
      pricing: 'Starting at $249/month',
      category: 'Cybersecurity'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Infrastructure', 'Development Tools', 'Mobile Development', 'Data & Analytics', 'Cybersecurity'];

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore our comprehensive suite of technology products designed to accelerate your digital transformation."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive technology products designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of products designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-semibold">{product.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
                      href={`/contact?product=${product.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss which products are right for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Sales
            </Link>
            <Link href="/demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;