'use client';
import React from 'react';

const MicroSaasPage: React.FC = () => {
  return (

import { CheckCircle, ArrowRight, Zap  
  );
} from 'lucide-react'

import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  return (

  const services = [{
      title: 'Custom SAAS Development', description: 'Tailored software-as-a-service solutions for your business', features: ['Custom Features', 'User Management', 'Payment Integration'],
      price: 'Starting at $2,000/month',
      icon: '💻'
    
  );
},
    {
      title: 'SAAS Migration',
      description: 'Migrate your existing applications to cloud-based SAAS',
      features: ['Data Migration', 'API Integration', 'User Training'],
      price: 'Starting at $1,500/month',
      icon: '🔄'
    },
    {
      title: 'Multi-tenant Architecture',
      description: 'Scalable multi-tenant SAAS platform development',
      features: ['Tenant Isolation', 'Scalable Infrastructure', 'Custom Branding'],
      price: 'Starting at $3,000/month',
      icon: '🏢'
    },
    {
      title: 'SAAS Analytics',
      description: 'Advanced analytics and reporting for your SAAS platform',
      features: ['User Analytics', 'Revenue Tracking', 'Performance Metrics'],
      price: 'Starting at $800/month',
      icon: '📊'
    },
    {
      title: 'API Development',
      description: 'RESTful APIs and integrations for your SAAS platform',
      features: ['REST APIs', 'Webhook Integration', 'Third-party APIs'],
      price: 'Starting at $1,200/month',
      icon: '🔌'
    },
    {
      title: 'SAAS Maintenance',
      description: 'Ongoing maintenance and support for your SAAS platform',
      features: ['Bug Fixes', 'Feature Updates', 'Security Patches'],
      price: 'Starting at $600/month',
      icon: '🛠️'
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain  } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  return (

  const microSaasProducts = [{
      icon: '📊', title: 'AI Analytics Dashboard', description: 'Real-time business intelligence and predictive analytics for small to medium businesses', features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users'
    
  );
},
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users'
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users'
    }
  ];

  const benefits = [{ metric: '99.9%', description: 'Uptime Guarantee' }, { metric: '24/7', description: 'Monitoring & Support' }, { metric: 'Auto', description: 'Scaling Capabilities' }, { metric: 'Secure', description: 'Enterprise Security' }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Build, deploy, and scale your software-as-a-service platform with our 
            comprehensive SAAS development and management solutions.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Your SAAS Journey
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View SAAS Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SAAS Platform Benefits</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SAAS Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-orange-400 hover: text-orange-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SAAS Development Process</h2>
          <div className="grid md: grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planning</h3>
              <p className="text-gray-300 text-sm">Define requirements and architecture for your SAAS platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Build your SAAS platform with modern technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Testing</h3>
              <p className="text-gray-300 text-sm">Comprehensive testing and quality assurance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Deploy and launch your SAAS platform</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build Your SAAS Platform?
          </h2>
          <p className="text-gray-300 mb-6">
            Let us help you create a scalable and profitable software-as-a-service solution.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Building Today
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
  </>
      <Helmet ></Helmet>
        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                ></Link>
                  <Zap className="w-5 h-5" /></Zap>
                  <span>Start Free Trial</span>
                </Link>
                <Link to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                ></Link>
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Micro SAAS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-to-use business tools with AI and automation.
          </p>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md: text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
      {/* Featured Products */}
      {popularProducts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Tools</h2>
              <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover: scale-105 group ${
                  tool.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {tool.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover: scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{tool.price}</span>
                        {tool.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{tool.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features: </h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits: </h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <span className="bg-gray-700 px-2 py-1 rounded">{tool.category}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Try Now
                    </button>
                  </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover: border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" /></Star>
                      <span className="text-yellow-400 text-sm font-medium">Popular</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-white mb-6">{product.price}</div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Try Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
      )}

      {/* All Products */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md: flex-row gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value=>{category}
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover: bg-white/10 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  {product.popular && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{product.price}</div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full text-blue-400 hover: text-blue-300 font-medium transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" /></ArrowRight>
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover: shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Micro SaaS Products
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover: bg-gray-300 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow ${
                    product.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" /></Star>
                      <span className="text-sm font-medium text-yellow-600">Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                      <Users className="w-4 h-4 mr-1" /></Users>
                      <span>{product.users}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      {product.price}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" /></CheckCircle>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link to={`/micro-saas/${product.id}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: bg-blue-700 transition-colors flex items-center justify-center"
                    ></Link>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" /></ArrowRight>
                    </Link>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today and experience the power of our micro SaaS solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" /></Zap>
                Start Free Trial
              </a>
              <Link to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              ></Link>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  );
};
export default MicroSaasPage;
export default MicroSaasPage;
export default MicroSaasPage;

export default MicroSaaSPage
