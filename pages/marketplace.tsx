import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { 
  ShoppingCart, 
  Star, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Filter, 
  Heart, 
  Download 
} from 'lucide-react';

export default function Marketplace() {
  const categories = [
    {
      name: 'AI Solutions',
      count: '25+ Products',
      description: 'Ready-to-use AI models, APIs, and automation tools',
      icon: '🤖',
      href: '/marketplace/ai-solutions'
    },
    {
      name: 'Cloud Services',
      count: '15+ Products',
      description: 'Infrastructure, storage, and computing solutions',
      icon: '☁️',
      href: '/marketplace/cloud-services'
    },
    {
      name: 'Security Tools',
      count: '20+ Products',
      description: 'Cybersecurity and compliance solutions',
      icon: '🔒',
      href: '/marketplace/security-tools'
    },
    {
      name: 'Development Tools',
      count: '30+ Products',
      description: 'Software development and testing tools',
      icon: '⚙️',
      href: '/marketplace/development-tools'
    }
  ];

  const featuredProducts = [
    {
      name: 'AI Content Generator',
      price: '$99/month',
      rating: 4.8,
      reviews: 156,
      description: 'Generate high-quality content using advanced AI models',
      category: 'AI Solutions',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Cloud Migration Tool',
      price: '$299/month',
      rating: 4.9,
      reviews: 89,
      description: 'Seamlessly migrate your infrastructure to the cloud',
      category: 'Cloud Services',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Security Audit Suite',
      price: '$199/month',
      rating: 4.7,
      reviews: 234,
      description: 'Comprehensive security assessment and compliance tools',
      category: 'Security Tools',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <>
      <Head>
        <title>Marketplace - Zion Tech Group</title>
        <meta name="description" content="Discover and purchase technology solutions, tools, and services in our comprehensive marketplace." />
        <meta name="keywords" content="marketplace, technology solutions, AI tools, cloud services, security tools" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Marketplace
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover and purchase cutting-edge technology solutions, tools, and services
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for products, tools, or services..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the perfect solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{category.count}</p>
                  <p className="text-gray-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Popular and highly-rated solutions from our marketplace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Browse our marketplace and discover technology solutions that can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}