import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'AI Content Generator',
      description: 'Generate high-quality content using AI. Perfect for blogs, social media, and marketing materials.',
      category: 'AI Tools',
      price: '$29/month',
      features: [
        'Unlimited content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'API access'
      ],
      rating: 4.8,
      users: 2500,
      revenue: '$15,000/month',
      launchDate: '2023-01-15',
      featured: true
    },
    {
      id: 2,
      name: 'Social Media Scheduler',
      description: 'Schedule and manage your social media posts across multiple platforms from one dashboard.',
      category: 'Social Media',
      price: '$19/month',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Analytics dashboard',
        'Team collaboration',
        'Bulk upload'
      ],
      rating: 4.6,
      users: 1800,
      revenue: '$8,500/month',
      launchDate: '2023-03-22',
      featured: true
    },
    {
      id: 3,
      name: 'Invoice Generator Pro',
      description: 'Create professional invoices quickly with customizable templates and automated billing.',
      category: 'Business Tools',
      price: '$15/month',
      features: [
        'Custom templates',
        'Automated reminders',
        'Payment tracking',
        'Tax calculations',
        'Multi-currency support'
      ],
      rating: 4.7,
      users: 3200,
      revenue: '$12,000/month',
      launchDate: '2023-02-10',
      featured: false
    },
    {
      id: 4,
      name: 'Password Manager',
      description: 'Secure password management with encryption and cross-device synchronization.',
      category: 'Security',
      price: '$9/month',
      features: [
        'End-to-end encryption',
        'Cross-device sync',
        'Password generator',
        'Secure sharing',
        'Dark web monitoring'
      ],
      rating: 4.9,
      users: 4500,
      revenue: '$18,000/month',
      launchDate: '2023-01-05',
      featured: true
    },
    {
      id: 5,
      name: 'URL Shortener Plus',
      description: 'Advanced URL shortening with analytics, custom domains, and QR code generation.',
      category: 'Marketing',
      price: '$12/month',
      features: [
        'Custom domains',
        'Analytics dashboard',
        'QR code generation',
        'Bulk operations',
        'API access'
      ],
      rating: 4.5,
      users: 2800,
      revenue: '$9,500/month',
      launchDate: '2023-04-18',
      featured: false
    },
    {
      id: 6,
      name: 'Email Signature Builder',
      description: 'Create professional email signatures with HTML templates and team management.',
      category: 'Email Tools',
      price: '$8/month',
      features: [
        'HTML templates',
        'Team management',
        'Brand consistency',
        'Mobile optimization',
        'Analytics tracking'
      ],
      rating: 4.4,
      users: 1500,
      revenue: '$4,200/month',
      launchDate: '2023-05-12',
      featured: false
    }
  ];

  const categories = ['All', 'AI Tools', 'Social Media', 'Business Tools', 'Security', 'Marketing', 'Email Tools'];

  const stats = [
    { icon: Users, label: 'Total Users', value: '15,000+' },
    { icon: DollarSign, label: 'Monthly Revenue', value: '$67,200+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '25%' },
    { icon: Star, label: 'Average Rating', value: '4.7/5' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | Innovative Software Solutions</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed to solve specific business problems. AI tools, productivity apps, and more." />
        <meta name="keywords" content="micro SaaS, software products, AI tools, productivity apps, business solutions, SaaS products" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span> Products
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our collection of innovative micro SaaS products designed to solve specific business problems and boost productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Carefully crafted solutions that address real business needs and deliver measurable value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group ${product.featured ? 'border border-cyan-500/50' : 'border border-white/20'}`}>
                  {product.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured Product</span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-white">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-cyan-400 font-bold">{product.users}</div>
                        <div className="text-gray-400">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{product.revenue}</div>
                        <div className="text-gray-400">Revenue</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center group-hover:scale-105">
                      Try Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We can build a custom micro SaaS product tailored to your specific business needs and requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;