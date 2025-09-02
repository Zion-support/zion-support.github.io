import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, Code, Database, Cloud } from 'lucide-react';
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
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
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products and how they can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Sales
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;