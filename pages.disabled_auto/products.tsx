import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react';

const ProductsPage: NextPage = () => {
  const productCategories = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Micro SaaS Solutions',
      description: 'Focused software applications that solve specific business problems with minimal overhead.',
      products: [
        {
          name: 'AI Content Generator',
          description: 'Automated content creation for blogs, social media, and marketing materials.',
          price: '$29/month',
          features: ['AI-powered writing', 'Multiple templates', 'SEO optimization', 'Team collaboration']
        },
        {
          name: 'Project Management Suite',
          description: 'Comprehensive project tracking and team collaboration tools.',
          price: '$19/month',
          features: ['Task management', 'Time tracking', 'Team chat', 'Progress reports']
        },
        {
          name: 'Social Media Scheduler',
          description: 'Schedule and manage social media posts across multiple platforms.',
          price: '$15/month',
          features: ['Multi-platform posting', 'Content calendar', 'Analytics dashboard', 'Auto-scheduling']
        }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'IT Infrastructure Solutions',
      description: 'Enterprise-grade IT services and infrastructure management solutions.',
      products: [
        {
          name: 'Cloud Migration Service',
          description: 'Seamless migration to cloud platforms with zero downtime.',
          price: 'Starting at $5,000',
          features: ['Zero-downtime migration', 'Data security', 'Performance optimization', '24/7 support']
        },
        {
          name: 'Cybersecurity Suite',
          description: 'Comprehensive security solutions to protect your digital assets.',
          price: 'Starting at $2,500',
          features: ['Threat monitoring', 'Vulnerability assessment', 'Incident response', 'Security training']
        },
        {
          name: 'Network Infrastructure',
          description: 'Design and implementation of secure, scalable network solutions.',
          price: 'Starting at $10,000',
          features: ['Network design', 'Hardware installation', 'Security configuration', 'Ongoing maintenance']
        }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize business processes.',
      products: [
        {
          name: 'Custom AI Models',
          description: 'Tailored machine learning models for your specific business needs.',
          price: 'Starting at $15,000',
          features: ['Custom model training', 'Data preprocessing', 'Model deployment', 'Performance monitoring']
        },
        {
          name: 'Predictive Analytics',
          description: 'Advanced analytics to forecast trends and make data-driven decisions.',
          price: 'Starting at $8,000',
          features: ['Data analysis', 'Trend forecasting', 'Custom dashboards', 'Real-time insights']
        },
        {
          name: 'AI Chatbot Solutions',
          description: 'Intelligent chatbots for customer service and support automation.',
          price: 'Starting at $3,000',
          features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard']
        }
      ]
    }
  ];

  const featuredProducts = [
    {
      name: 'AI Business Intelligence Platform',
      category: 'AI & Analytics',
      description: 'Transform your business data into actionable insights with our advanced AI-powered analytics platform.',
      price: 'Starting at $25,000',
      rating: 4.9,
      reviews: 127,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Multi-source data integration'
      ],
      image: '/products/ai-bi-platform.jpg'
    },
    {
      name: 'Enterprise Cloud Suite',
      category: 'Cloud Services',
      description: 'Complete cloud infrastructure solution with migration, management, and optimization services.',
      price: 'Starting at $50,000',
      rating: 4.8,
      reviews: 89,
      features: [
        'Multi-cloud support',
        'Automated scaling',
        'Security compliance',
        'Cost optimization',
        '24/7 monitoring'
      ],
      image: '/products/enterprise-cloud.jpg'
    },
    {
      name: 'Micro SaaS Development Kit',
      category: 'Development Tools',
      description: 'Complete toolkit for building and launching micro SaaS applications quickly and efficiently.',
      price: '$5,000',
      rating: 4.9,
      reviews: 156,
      features: [
        'Pre-built templates',
        'Payment integration',
        'User management',
        'Analytics dashboard',
        'Deployment automation'
      ],
      image: '/products/saas-dev-kit.jpg'
    }
  ];

  return (
    <MainLayout
      title="Products & Solutions - Zion Tech Group"
      description="Explore our comprehensive range of technology products and solutions. From micro SaaS applications to enterprise AI solutions, we have the tools to transform your business."
      keywords="technology products, micro SaaS, AI solutions, cloud services, IT infrastructure, business software"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Products & Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover our comprehensive range of technology products designed to accelerate your business growth 
            and streamline your operations with cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">🚀</div>
                    <p className="text-sm font-medium">{product.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-medium">{product.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category.
            </p>
          </div>
          
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="text-blue-600 mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                      <Link 
                        href="/contact"
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Get Started →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are designed with your success in mind, featuring cutting-edge technology and comprehensive support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Our products have helped 1000+ businesses achieve their goals and drive growth.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Built with security-first principles and enterprise-grade protection.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 support from our team of technology experts and specialists.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Quick setup and deployment with minimal disruption to your operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our experts to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Get a Custom Quote
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductsPage;