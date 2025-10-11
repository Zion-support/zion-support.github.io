'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Email Assistant',
      description: 'Automated email management and response system',
      icon: MessageCircle,
      features: ['Smart Categorization', 'Auto-Responses', 'Sentiment Analysis', 'Priority Scoring'],
      price: '$29/month',
      popular: true
    },
    {
      id: 2,
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs and social media',
      icon: FileText,
      features: ['Blog Posts', 'Social Media', 'SEO Optimization', 'Multi-language'],
      price: '$19/month',
      popular: false
    },
    {
      id: 3,
      title: 'Lead Generation',
      description: 'Automated lead capture and qualification system',
      icon: Target,
      features: ['Lead Scoring', 'CRM Integration', 'Email Sequences', 'Analytics'],
      price: '$39/month',
      popular: false
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time business analytics and reporting',
      icon: BarChart,
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      price: '$24/month',
      popular: false
    },
    {
      id: 5,
      title: 'Task Automation',
      description: 'Streamline repetitive tasks with intelligent automation',
      icon: Workflow,
      features: ['Workflow Builder', 'API Integrations', 'Scheduled Tasks', 'Error Handling'],
      price: '$34/month',
      popular: false
    },
    {
      id: 6,
      title: 'Customer Support Bot',
      description: 'AI-powered customer support and ticket management',
      icon: MessageSquare,
      features: ['24/7 Support', 'Multi-language', 'Ticket Routing', 'Knowledge Base'],
      price: '$44/month',
      popular: false
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '50+', label: 'Micro-SaaS Apps', icon: Package },
    { number: '24/7', label: 'Support', icon: Shield }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology to automate and optimize your business processes.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed and performance with optimized infrastructure and efficient algorithms.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and reporting to help you make data-driven decisions.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The AI Email Assistant has saved us 10 hours per week. It\'s incredibly accurate and easy to use.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'ContentCo',
      role: 'Marketing Director',
      content: 'Our content generation has increased by 300% since using their Content Generator. Quality is outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'LeadGen Pro',
      role: 'Sales Manager',
      content: 'The lead generation tool has transformed our sales process. We\'re seeing 40% more qualified leads.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro-SaaS applications designed to solve specific business problems with AI-powered automation." />
        <meta name="keywords" content="micro-saas, SaaS applications, AI automation, business tools, productivity software" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro-SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our collection of specialized micro-SaaS applications designed to solve specific business problems with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Explore Apps
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Pricing
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

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro-SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro-SaaS applications are designed with modern businesses in mind, offering powerful features in simple, focused packages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro-SaaS Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized applications designed to solve specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 group ${
                  service.popular 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                    : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
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
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our users have to say about our micro-SaaS solutions.
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
              Start using our micro-SaaS solutions today and see the difference AI-powered automation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroSaaSPage;