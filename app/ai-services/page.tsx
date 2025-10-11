'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, BarChart, Code, Smartphone, ArrowRight, CheckCircle, Star, Zap, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone }
  ];

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom AI Models', 'Data Visualization'],
      price: 'From $2,999/month',
      rating: 4.9,
      reviews: 127,
      icon: Brain
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Scalable, secure cloud solutions with 99.9% uptime guarantee.',
      category: 'cloud',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Security Monitoring', '24/7 Support'],
      price: 'From $1,999/month',
      rating: 4.8,
      reviews: 89,
      icon: Cloud
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets and ensure compliance.',
      category: 'security',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      price: 'From $1,499/month',
      rating: 4.9,
      reviews: 156,
      icon: Shield
    },
    {
      id: 4,
      title: 'Data Analytics Platform',
      description: 'Advanced analytics tools to help you make data-driven decisions and optimize performance.',
      category: 'analytics',
      features: ['Business Intelligence', 'Custom Reports', 'Data Integration', 'Performance Metrics'],
      price: 'From $2,499/month',
      rating: 4.7,
      reviews: 98,
      icon: BarChart
    },
    {
      id: 5,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      category: 'development',
      features: ['Web Applications', 'API Development', 'Database Design', 'Quality Assurance'],
      price: 'From $5,000/project',
      rating: 4.8,
      reviews: 203,
      icon: Code
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      category: 'mobile',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization'],
      price: 'From $8,000/project',
      rating: 4.9,
      reviews: 142,
      icon: Smartphone
    }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our business with their AI solutions. We saw a 40% increase in efficiency within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Their cloud infrastructure management has been exceptional. We\'ve had zero downtime since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      role: 'Security Director',
      content: 'The cybersecurity solutions provided by Zion Tech Group are top-notch. Our security posture has improved dramatically.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and technology services including business intelligence, cloud solutions, cybersecurity, and custom development." />
        <meta name="keywords" content="AI services, artificial intelligence, cloud computing, cybersecurity, data analytics, software development" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI & Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and technology solutions designed to accelerate your business growth and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and technology services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get a Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiServicesPage;