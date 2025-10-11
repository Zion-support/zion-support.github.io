import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Server, Wifi, Sparkles, Star, Users, TrendingUp, Target, Award, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      benefits: ['AI Content Generation - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $79/month', 'AI Automation Suite - $99/month'],
      link: '/ai-services',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: 'Micro SAAS Services',
      description: 'Focused, affordable micro software solutions designed to solve specific business problems with AI-powered tools.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Code Reviewer - $29/month'],
      link: '/micro-saas-services',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses with 99.9% uptime guarantee.',
      benefits: ['Cloud Infrastructure - $500/month', 'Cloud Migration - $2,500 setup', 'Cloud Security - $800/month', 'Cloud Monitoring - $300/month'],
      link: '/cloud-services',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Wifi className="w-12 h-12 text-yellow-500" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity and IoT integration.',
      benefits: ['5G Network Design - $10,000', '5G Implementation - $25,000', '5G Testing - $5,000', '5G Maintenance - $2,000/month'],
      link: '/5g-implementation',
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: <Server className="w-12 h-12 text-pink-500" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and technology stack.',
      benefits: ['Digital Strategy - $15,000', 'Process Automation - $8,000', 'Technology Integration - $12,000', 'Change Management - $5,000'],
      link: '/digital-transformation',
      color: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/30'
    }
  ];

  const specialServices = [
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: 'AI Quantum Financial Oracle',
      description: 'Revolutionary quantum-powered financial analysis with 94.7% prediction accuracy',
      price: 'Starting at $299/month',
      badge: 'NEW',
      link: '/ai-quantum-financial-oracle'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'AI Holographic Workspace',
      description: '3D virtual environment for immersive collaboration and productivity',
      price: 'Coming Soon',
      badge: 'FUTURE',
      link: '/ai-holographic-workspace'
    },
    {
      icon: <Brain className="w-8 h-8 text-violet-400" />,
      title: 'AI Telepathic Interface',
      description: 'Mind-computer interface for direct neural communication',
      price: 'Experimental',
      badge: 'EXPERIMENTAL',
      link: '/ai-telepathic-interface'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: <Brain className="w-6 h-6 text-blue-400" /> },
    { number: '10,000+', label: 'Happy Customers', icon: <Users className="w-6 h-6 text-green-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Expert Support', icon: <Award className="w-6 h-6 text-yellow-400" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our productivity by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFlow',
      role: 'CEO',
      content: 'The AI Quantum Financial Oracle is revolutionary. We\'ve seen 40% better investment returns since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'Their micro SAAS services are game-changers. We got up and running in minutes, not months.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Future Technology Solutions</title>
        <meta name="description" content="Pioneering the future of technology with cutting-edge AI, quantum computing, and innovative micro SAAS solutions. Transform your business today." />
        <meta name="keywords" content="AI solutions, quantum computing, micro saas, IT services, cloud services, 5G implementation, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold inline-flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Future Technology Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Pioneering the
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Future</span>
                <br />of Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and innovative micro SAAS solutions. 
                Experience the next generation of technology that drives unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group text-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className={`bg-gradient-to-br ${feature.color} backdrop-blur-lg rounded-2xl p-8 border ${feature.borderColor} hover:scale-105 transition-all duration-300 group`}>
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    {feature.benefits.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{feature.benefits.length - 3} more services
                      </li>
                    )}
                  </ul>
                  <Link 
                    to={feature.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Specialized</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies that push the boundaries of what's possible in business and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  <div className="absolute -top-3 right-4">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {service.badge}
                    </span>
                  </div>
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-semibold text-cyan-400 mb-6">
                    {service.price}
                  </div>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center group"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join the future of technology today. Get started with our comprehensive solutions and experience unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
