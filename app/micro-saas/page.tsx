import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Users, DollarSign, ArrowRight, CheckCircle, Star, Clock, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using AI.',
      category: 'content',
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
      popular: true
    },
    {
      id: 2,
      name: 'Task Automation Hub',
      description: 'Automate repetitive tasks across your business with no-code workflows.',
      category: 'automation',
      price: '$49/month',
      features: [
        'Visual workflow builder',
        '500+ integrations',
        'Custom triggers',
        'Team collaboration',
        'Analytics dashboard'
      ],
      rating: 4.9,
      users: 1800,
      popular: false
    },
    {
      id: 3,
      name: 'Analytics Dashboard Pro',
      description: 'Comprehensive analytics and reporting for your business metrics.',
      category: 'analytics',
      price: '$39/month',
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Data visualization',
        'Export capabilities',
        'Team sharing'
      ],
      rating: 4.7,
      users: 3200,
      popular: false
    },
    {
      id: 4,
      name: 'Customer Support Bot',
      description: 'AI-powered chatbot for customer support and lead generation.',
      category: 'support',
      price: '$19/month',
      features: [
        '24/7 availability',
        'Multi-language support',
        'Lead qualification',
        'Integration with CRM',
        'Custom responses'
      ],
      rating: 4.6,
      users: 4100,
      popular: false
    },
    {
      id: 5,
      name: 'Email Marketing Suite',
      description: 'Advanced email marketing automation and campaign management.',
      category: 'marketing',
      price: '$59/month',
      features: [
        'Email templates',
        'Automation workflows',
        'A/B testing',
        'Subscriber management',
        'Performance analytics'
      ],
      rating: 4.8,
      users: 1500,
      popular: false
    },
    {
      id: 6,
      name: 'Project Management Tool',
      description: 'Streamlined project management with AI-powered insights.',
      category: 'productivity',
      price: '$34/month',
      features: [
        'Task management',
        'Team collaboration',
        'Time tracking',
        'AI insights',
        'Mobile app'
      ],
      rating: 4.7,
      users: 2800,
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'content', name: 'Content' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'support', name: 'Support' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'productivity', name: 'Productivity' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed to streamline your business operations. AI-powered tools for content, automation, analytics, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI products, automation software, analytics dashboard, productivity tools" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused business tools that solve specific problems. Our micro SaaS products 
              are designed to integrate seamlessly into your workflow and deliver immediate value.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                product.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {product.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold text-sm">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-gray-300 text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-gray-300 text-sm">{product.users.toLocaleString()} users</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS Products?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our products are designed with simplicity, power, and integration in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300">Get started in minutes with our intuitive setup process</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300">Built-in collaboration features for your entire team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Affordable Pricing</h3>
              <p className="text-gray-300">Transparent pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS products are helping businesses worldwide streamline their operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">15,000+</div>
              <div className="text-white text-lg">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-white text-lg">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-white text-lg">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4.8</div>
              <div className="text-white text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with a free trial and see how our micro SaaS products can streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;