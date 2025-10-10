'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Users, DollarSign, Clock, Phone, Mail } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting solution for businesses of all sizes',
      category: 'Analytics',
      price: '$99/month',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Multi-platform integration',
        'Automated insights',
        'Team collaboration tools',
        'API access'
      ],
      benefits: [
        'Increase data-driven decisions by 80%',
        'Reduce reporting time by 70%',
        'Improve team productivity by 50%'
      ],
      popular: true
    },
    {
      id: 'content-generator',
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing',
      category: 'Content',
      price: '$79/month',
      features: [
        'AI-powered writing assistance',
        'Multiple content formats',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar integration',
        'Plagiarism detection'
      ],
      benefits: [
        'Save 10+ hours per week',
        'Increase content output by 300%',
        'Improve SEO rankings by 40%'
      ],
      popular: false
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Suite',
      description: 'Complete email marketing solution with automation and analytics',
      category: 'Marketing',
      price: '$149/month',
      features: [
        'Drag-and-drop email builder',
        'Advanced automation workflows',
        'A/B testing capabilities',
        'Subscriber segmentation',
        'Detailed analytics',
        'CRM integration'
      ],
      benefits: [
        'Increase open rates by 35%',
        'Boost click-through rates by 50%',
        'Generate 25% more leads'
      ],
      popular: true
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker Pro',
      description: 'Smart expense tracking and financial management for businesses',
      category: 'Finance',
      price: '$59/month',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense approval workflows',
        'Tax preparation tools',
        'Multi-currency support',
        'Mobile app included'
      ],
      benefits: [
        'Reduce expense processing time by 60%',
        'Improve accuracy by 90%',
        'Save 5+ hours per month'
      ],
      popular: false
    },
    {
      id: 'inventory-management',
      title: 'Inventory Manager',
      description: 'Comprehensive inventory tracking and management system',
      category: 'Operations',
      price: '$199/month',
      features: [
        'Real-time inventory tracking',
        'Automated reorder points',
        'Barcode scanning',
        'Multi-location support',
        'Supplier management',
        'Advanced reporting'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Decrease carrying costs by 30%',
        'Improve order accuracy by 95%'
      ],
      popular: false
    },
    {
      id: 'lead-scoring',
      title: 'Lead Scoring Engine',
      description: 'AI-powered lead scoring and qualification system',
      category: 'Sales',
      price: '$129/month',
      features: [
        'AI-powered lead scoring',
        'Behavioral tracking',
        'Lead qualification automation',
        'CRM integration',
        'Custom scoring models',
        'Real-time notifications'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Reduce sales cycle by 30%',
        'Improve lead quality by 60%'
      ],
      popular: true
    }
  ];

  const categories = ['all', 'Analytics', 'Content', 'Marketing', 'Finance', 'Operations', 'Sales'];

  const filteredProducts = microSaasProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      product: 'Email Marketing Suite',
      quote: 'The email marketing suite has transformed our campaigns. We\'ve seen a 50% increase in engagement rates.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, RetailMax',
      product: 'Inventory Manager',
      quote: 'Our inventory management has never been more efficient. Stockouts are down 80% since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Manager, MediaFlow',
      product: 'AI Content Generator',
      quote: 'The AI content generator saves us 10+ hours per week. The quality is outstanding and our SEO rankings have improved significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Business Software</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems. Analytics, content generation, email marketing, and more." />
        <meta name="keywords" content="micro SaaS, business software, analytics, content generation, email marketing, inventory management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Powerful, focused software solutions designed to solve specific business problems. 
            Get the tools you need without the complexity of enterprise software.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Products' : category}
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
              <div key={product.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                product.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {product.popular && (
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                  <div className="text-sm text-gray-400">{product.category}</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 group">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">See how our micro SaaS solutions are helping businesses succeed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.product}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and see how our micro SaaS solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;