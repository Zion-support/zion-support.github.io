'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Zap, Cloud, Shield, Database, Settings, Target, BarChart, MessageSquare, Eye, Users, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Globe, Lock, Activity, PieChart, FileText, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, TrendingDown, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, DollarSign, BarChart3, FileText as Document, Search as SearchIcon, Bot as Robot, Palette as Design, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gaming, ShoppingCart as Ecommerce, CreditCard as Payment, Building as Enterprise, Factory as Manufacturing, Car as Automotive, Plane as Aviation, Ship as Maritime, Train as Transportation, Home as RealEstate, Heart as Healthcare, Stethoscope as Medical, GraduationCap as Education, Briefcase as Business, Wrench as Tools, Hammer as Construction, Paintbrush as Creative, Scissors as Beauty, BookOpen as Publishing, Calculator as Finance, Calendar as Scheduling, Clock3 as Time, Compass as NavigationIcon, PieChart as Analytics, TrendingDown as Decline, Activity as Fitness } from 'lucide-react';

const ServicesOverviewPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500',
      description: 'Advanced artificial intelligence solutions for enterprise applications',
      services: [
        { name: 'Machine Learning Solutions', price: '$1,500/month', marketPrice: '$3,000-8,000/month', link: '/ai-services' },
        { name: 'Natural Language Processing', price: '$1,200/month', marketPrice: '$2,500-6,000/month', link: '/ai-services' },
        { name: 'Computer Vision', price: '$1,800/month', marketPrice: '$4,000-10,000/month', link: '/ai-services' },
        { name: 'AI Automation', price: '$1,400/month', marketPrice: '$3,000-7,000/month', link: '/ai-services' },
        { name: 'AI Consulting & Strategy', price: '$2,500/month', marketPrice: '$5,000-15,000/month', link: '/ai-services' },
        { name: 'AI Chatbots & Conversational AI', price: '$800/month', marketPrice: '$2,000-5,000/month', link: '/ai-services' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500',
      description: 'Comprehensive IT solutions for modern enterprise infrastructure',
      services: [
        { name: 'Cloud Services', price: '$1,299/month', marketPrice: '$3,000-8,000/month', link: '/cloud-migration-services' },
        { name: 'Cybersecurity', price: '$1,599/month', marketPrice: '$4,000-12,000/month', link: '/it-services' },
        { name: 'DevOps & CI/CD', price: '$1,199/month', marketPrice: '$3,000-8,000/month', link: '/it-services' },
        { name: 'Database Services', price: '$899/month', marketPrice: '$2,000-6,000/month', link: '/it-services' },
        { name: 'IT Infrastructure', price: '$999/month', marketPrice: '$2,500-7,000/month', link: '/it-services' },
        { name: 'Network Services', price: '$1,099/month', marketPrice: '$2,500-6,000/month', link: '/it-services' }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500',
      description: 'Powerful, affordable AI-powered tools designed for modern businesses',
      services: [
        { name: 'AI Project Manager', price: '$99/month', marketPrice: '$150-300/month', link: '/ai-project-manager' },
        { name: 'AI Social Media Manager', price: '$79/month', marketPrice: '$200-500/month', link: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', price: '$149/month', marketPrice: '$300-800/month', link: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', price: '$99/month', marketPrice: '$250-600/month', link: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', price: '$149/month', marketPrice: '$400-1000/month', link: '/ai-customer-support-bot' },
        { name: 'AI Code Review Assistant', price: '$89/month', marketPrice: '$200-500/month', link: '/ai-code-generation' },
        { name: 'AI Content Generator', price: '$199/month', marketPrice: '$500-1500/month', link: '/ai-content-generator' },
        { name: 'AI Data Visualization', price: '$129/month', marketPrice: '$300-700/month', link: '/ai-data-visualization' },
        { name: 'AI Video Generation', price: '$199/month', marketPrice: '$500-1500/month', link: '/ai-video-generation' },
        { name: 'AI Voice Cloning', price: '$179/month', marketPrice: '$400-1200/month', link: '/ai-voice-cloning' },
        { name: 'AI Workflow Automation', price: '$159/month', marketPrice: '$400-1000/month', link: '/ai-workflow-automation' },
        { name: 'AI Sales Automation', price: '$189/month', marketPrice: '$500-1200/month', link: '/ai-sales-automation' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Target,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500',
      description: 'Cutting-edge specialized solutions for next-generation technology needs',
      services: [
        { name: 'Quantum Computing', price: 'Custom', marketPrice: '$50,000-500,000/month', link: '/specialized-solutions' },
        { name: 'Autonomous Systems', price: 'Custom', marketPrice: '$100,000-1,000,000/month', link: '/specialized-solutions' },
        { name: 'Blockchain & Web3', price: '$1,999/month', marketPrice: '$5,000-20,000/month', link: '/specialized-solutions' },
        { name: 'IoT & Edge Computing', price: '$1,499/month', marketPrice: '$3,000-10,000/month', link: '/specialized-solutions' },
        { name: 'Business Intelligence', price: '$1,799/month', marketPrice: '$4,000-12,000/month', link: '/specialized-solutions' },
        { name: 'Robotics Solutions', price: 'Custom', marketPrice: '$200,000-2,000,000/month', link: '/specialized-solutions' }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings',
      stat: '300%'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data',
      stat: '99.9%'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services',
      stat: '24/7'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records',
      stat: '50+'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with AI solutions. We achieved 300% ROI in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'CTO',
      content: 'Their cloud migration services saved us 40% on infrastructure costs while improving performance by 60%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Co.',
      role: 'Marketing Director',
      content: 'The AI content generator increased our content output by 500% while maintaining high quality.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, cloud migration, cybersecurity, and specialized technology solutions. Save 50-80% vs market rates." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud migration, cybersecurity, business intelligence, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services-overview" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
                <a href="/services-overview" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                <a href="tel:+13024640950" className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Comprehensive AI and IT Solutions
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                From micro SAAS solutions to enterprise AI services, we provide comprehensive technology solutions that help businesses achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section id="services" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Service Categories
            </h2>
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                        <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                        <div className="mb-4">
                          <div className="text-lg font-bold text-cyan-400 mb-1">{service.price}</div>
                          <div className="text-sm text-gray-400 mb-2">Market: {service.marketPrice}</div>
                          <div className="text-sm text-green-400 mb-4">Save 50-80% vs market</div>
                        </div>
                        <a 
                          href={service.link} 
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 inline-block"
                        >
                          Learn More
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get started with our services today and see the difference AI and IT solutions can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Solutions</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Micro SAAS</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Consulting</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
                  <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesOverviewPage;