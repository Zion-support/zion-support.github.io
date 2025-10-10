'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Search, Filter } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI',
      category: 'Content Creation',
      price: '$29/month',
      features: [
        'Unlimited content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'API access'
      ],
      rating: 4.8,
      users: 1250,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time analytics and insights for your business with customizable dashboards',
      category: 'Analytics',
      price: '$49/month',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Automated reports',
        'Data export capabilities',
        'Team collaboration tools'
      ],
      rating: 4.9,
      users: 890,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'Email Marketing Automation',
      description: 'Automate your email campaigns with AI-powered personalization and optimization',
      category: 'Marketing',
      price: '$39/month',
      features: [
        'AI-powered personalization',
        'Automated campaign sequences',
        'A/B testing tools',
        'Advanced segmentation',
        'Performance analytics'
      ],
      rating: 4.7,
      users: 2100,
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Project Management AI',
      description: 'Intelligent project management with AI-powered task optimization and team coordination',
      category: 'Productivity',
      price: '$59/month',
      features: [
        'AI task prioritization',
        'Smart resource allocation',
        'Progress tracking',
        'Team collaboration',
        'Integration capabilities'
      ],
      rating: 4.6,
      users: 750,
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: 'Customer Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing',
      category: 'Support',
      price: '$79/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with CRM',
        'Analytics and insights',
        'Custom training'
      ],
      rating: 4.8,
      users: 1650,
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      name: 'Financial Tracker AI',
      description: 'Intelligent financial tracking and budgeting with predictive analytics',
      category: 'Finance',
      price: '$35/month',
      features: [
        'Automated expense tracking',
        'Predictive budgeting',
        'Investment insights',
        'Tax optimization',
        'Financial reporting'
      ],
      rating: 4.9,
      users: 980,
      image: '/api/placeholder/400/300'
    }
  ];

  const categories = ['All', 'Content Creation', 'Analytics', 'Marketing', 'Productivity', 'Support', 'Finance'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | AI-Powered SaaS Solutions</title>
        <meta name="description" content="Discover our collection of micro SaaS products powered by AI. Small, focused solutions that solve specific business problems efficiently." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, productivity tools, automation, SaaS solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover our collection of focused, AI-powered SaaS solutions designed to solve specific business problems.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS products..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category === 'All'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users} users</div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Try Free
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We can create a custom micro SaaS solution tailored to your specific business needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Request Custom Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;