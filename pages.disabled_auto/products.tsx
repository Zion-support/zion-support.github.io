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
          description: 'Automated content creation using advanced AI models',
          features: ['Natural language processing', 'Multi-language support', 'SEO optimization', 'Brand voice consistency'],
          pricing: 'Starting at $99/month',
          href: '/services/ai-content-generator'
        },
        {
          name: 'Custom AI Models',
          description: 'Tailored AI solutions for specific business needs',
          features: ['Custom training', 'Industry-specific models', 'Real-time processing', 'Scalable infrastructure'],
          pricing: 'Custom pricing',
          href: '/services/custom-ai-models'
        },
        {
          name: 'AI Analytics Platform',
          description: 'Advanced analytics powered by machine learning',
          features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
          pricing: 'Starting at $199/month',
          href: '/services/ai-analytics-platform'
        }
      ]
    },
    {
      category: 'Development Tools',
      icon: Code,
      items: [
        {
          name: 'Project Management Suite',
          description: 'Comprehensive project management and collaboration platform',
          features: ['Task tracking', 'Team collaboration', 'Resource management', 'Progress analytics'],
          pricing: 'Starting at $49/month',
          href: '/services/project-management-suite'
        },
        {
          name: 'Inventory Management',
          description: 'Smart inventory tracking and optimization system',
          features: ['Real-time tracking', 'Automated reordering', 'Analytics dashboard', 'Multi-location support'],
          pricing: 'Starting at $79/month',
          href: '/services/inventory-management'
        },
        {
          name: 'Customer Support Platform',
          description: 'AI-powered customer service and support system',
          features: ['Automated responses', 'Ticket management', 'Knowledge base', 'Performance analytics'],
          pricing: 'Starting at $129/month',
          href: '/services/customer-support-platform'
        }
      ]
    },
    {
      category: 'Infrastructure',
      icon: Cloud,
      items: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to cloud infrastructure',
          features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
          pricing: 'Custom pricing',
          href: '/services/cloud-migration'
        },
        {
          name: 'DevOps Automation',
          description: 'Automated deployment and infrastructure management',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting', 'Auto-scaling'],
          pricing: 'Starting at $299/month',
          href: '/services/devops-automation'
        },
        {
          name: 'Data Backup & Recovery',
          description: 'Comprehensive data protection and disaster recovery',
          features: ['Automated backups', 'Point-in-time recovery', 'Cross-region replication', 'Compliance ready'],
          pricing: 'Starting at $149/month',
          href: '/services/data-backup-recovery'
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Explore our comprehensive suite of technology products and solutions designed to transform your business operations."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover our comprehensive suite of technology products designed to accelerate your business growth 
            and streamline operations with cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {products.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((product, productIndex) => (
                    <div key={productIndex} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-lg font-semibold text-blue-600">{product.pricing}</div>
                      </div>
                      
                      <Link
                        href={product.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
              Get Custom Quote
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;