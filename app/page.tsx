'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Settings,
  Target,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Lock,
  Calendar,
  Headphones,
  Code,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  FileText,
  Package,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence services including chatbots, analytics, and automation',
      link: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Complete cloud migration and management services for scalable business growth',
      link: '/it-services'
    },
    {
      icon: BarChart3,
      title: 'Micro SaaS Tools',
      description: 'Comprehensive suite of business software tools for productivity and growth',
      link: '/micro-saas'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats',
      link: '/it-services'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'CEO',
      content: 'The micro SaaS tools they provided revolutionized our business operations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      role: 'VP of Technology',
      content: 'Their quantum computing solutions gave us a competitive edge we never thought possible.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="Zion Tech Group - AI & IT Solutions | Leading Technology Company"
        description="Leading provider of AI and IT solutions including quantum computing, autonomous systems, cloud infrastructure, and micro SaaS tools. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, quantum computing, cloud migration, cybersecurity, micro saas, business software, technology consulting"
        canonicalUrl="https://ziontechgroup.com"
      />

      <div className="min-h-screen">
        <Navigation />
        <main id="main-content" className="pt-20" role="main" aria-label="Main content">
          {/* Hero Section */}
          <section className="relative overflow-hidden" aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Welcome to <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Leading provider of AI and IT solutions for modern businesses.
                  Transform your operations with cutting-edge technology including quantum computing, 
                  autonomous systems, and advanced cybersecurity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-label="Get started with Zion Tech Group services"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-label="Explore our comprehensive service offerings"
                  >
                    Explore Our Services
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" role="region" aria-label="Company statistics">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center" role="img" aria-label={`${stat.number} ${stat.label}`}>
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" aria-hidden="true">{stat.number}</div>
                      <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-cyan-400">Core Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your business growth and innovation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Core services">
                {features.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                    role="listitem"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine cutting-edge technology with deep industry expertise to deliver exceptional results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Over 500 successful projects with 99.9% client satisfaction rate and industry-leading expertise in AI and IT solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Round-the-clock technical support and monitoring to ensure your systems run smoothly and efficiently.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Future-proof technology solutions that grow with your business and adapt to changing market demands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50" aria-labelledby="testimonials-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-cyan-400">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it - hear from our satisfied clients
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Client testimonials">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10" role="listitem">
                    <div className="flex items-center mb-4" aria-label={`${testimonial.rating} star rating`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20" aria-labelledby="cta-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of companies that have already transformed their operations with our cutting-edge AI and IT solutions.
                  Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-label="Get a free consultation with our team"
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    aria-label="Call us at (302) 464-0950"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400 text-sm">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
