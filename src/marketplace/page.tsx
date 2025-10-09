import React, { useState } from 'react';
import { ShoppingCart, Users, Wrench, Search, Filter, Star, Clock, CheckCircle, ArrowRight, Phone, Mail, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MarketplacePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');

  const _categories = [
    {
      id: 'products',
      label: 'AI Products',
      icon: ShoppingCart
    },
    {
      id: 'services',
      label: 'Services',
      icon: Wrench
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: Award
    }
  ];

  const products = [
    {
      id: 1,
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website with our drag-and-drop builder.',
      price: '$99/month',
      rating: 4.8,
      reviews: 124,
      category: 'products',
      image: '/images/products/chatbot-builder.jpg'
    },
    {
      id: 2,
      name: 'Predictive Analytics Suite',
      description: 'Advanced analytics tools to predict trends and make data-driven decisions.',
      price: '$199/month',
      rating: 4.9,
      reviews: 89,
      category: 'products',
      image: '/images/products/analytics-suite.jpg'
    },
    {
      id: 3,
      name: 'Custom AI Development',
      description: 'Tailored AI solutions designed specifically for your business needs.',
      price: 'Custom',
      rating: 5.0,
      reviews: 45,
      category: 'services',
      image: '/images/services/custom-development.jpg'
    },
    {
      id: 4,
      name: 'E-commerce AI Template',
      description: 'Pre-built AI templates for e-commerce websites with recommendation engines.',
      price: '$49',
      rating: 4.7,
      reviews: 203,
      category: 'templates',
      image: '/images/templates/ecommerce-ai.jpg'
    }
  ];

  const filteredProducts = products.filter(product => 
    product.category === activeCategory &&
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Marketplace</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and purchase AI products, services, and templates to accelerate your digital transformation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products and services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button className="flex items-center px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            {_categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 m-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-colors">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cyan-500/30 rounded-full flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-gray-300 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-400 text-sm">{product.reviews} reviews</span>
                  </div>
                  <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
              <p className="text-gray-300 mb-8">We offer custom AI solutions tailored to your specific needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Request Custom Solution
                </a>
                <a 
                  href="/services" 
                  className="bg-transparent text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Wrench className="h-5 w-5 mr-2" />
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketplacePage;