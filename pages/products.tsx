import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Code, Database, Cloud, Smartphone } from 'lucide-react';
=======
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, Code, Database, Cloud } from 'lucide-react';
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
<<<<<<< HEAD
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
=======
      name: 'AI Content Generator',
      description: 'Automated content creation platform powered by advanced AI',
      icon: <Zap className="w-8 h-8" />,
      features: ['Multi-language support', 'SEO optimization', 'Brand voice consistency', 'Real-time collaboration'],
      pricing: 'Starting at $99/month',
      link: '/products/ai-content-generator'
    },
    {
      name: 'Project Management Suite',
      description: 'Comprehensive project management with AI-powered insights',
      icon: <Users className="w-8 h-8" />,
      features: ['Task automation', 'Resource planning', 'Progress tracking', 'Team collaboration'],
      pricing: 'Starting at $149/month',
      link: '/products/project-management-suite'
    },
    {
      name: 'Inventory Tracker',
      description: 'Smart inventory management with predictive analytics',
      icon: <Database className="w-8 h-8" />,
      features: ['Real-time tracking', 'Demand forecasting', 'Automated reordering', 'Multi-location support'],
      pricing: 'Starting at $79/month',
      link: '/products/inventory-tracker'
    },
    {
      name: 'Customer Support Platform',
      description: 'AI-powered customer support with intelligent routing',
      icon: <Shield className="w-8 h-8" />,
      features: ['24/7 chatbot', 'Ticket management', 'Knowledge base', 'Performance analytics'],
      pricing: 'Starting at $199/month',
      link: '/products/customer-support-platform'
    },
    {
      name: 'Cloud Migration Tool',
      description: 'Seamless cloud migration with zero downtime',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Automated migration', 'Data validation', 'Rollback capability', 'Cost optimization'],
      pricing: 'Starting at $299/month',
      link: '/products/cloud-migration-tool'
    },
    {
      name: 'AI Analytics Platform',
      description: 'Advanced analytics with machine learning insights',
      icon: <Code className="w-8 h-8" />,
      features: ['Predictive modeling', 'Custom dashboards', 'Real-time alerts', 'Data visualization'],
      pricing: 'Starting at $179/month',
      link: '/products/ai-analytics-platform'
    }
  ];

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore our comprehensive suite of technology products designed to transform your business operations."
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
<<<<<<< HEAD
            Comprehensive technology products designed to accelerate your digital transformation 
            and drive business growth.
          </p>
=======
            Discover our comprehensive suite of technology products designed to streamline operations, 
            enhance productivity, and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Request Demo
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Pricing
            </Link>
          </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
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
=======
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered tools to comprehensive business solutions, our products are designed 
              to meet the evolving needs of modern businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-lg font-semibold text-blue-600 mb-4">{product.pricing}</div>
                
                <Link href={product.link} className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss which products are right for your business needs.
=======
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products and how they can benefit your organization.
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Sales
            </Link>
<<<<<<< HEAD
            <Link href="/demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Request Demo
=======
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Demo
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;