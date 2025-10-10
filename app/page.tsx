'use client';
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Settings, CheckCircle, Star, Phone, Mail, MapPin,
  ChevronRight, Play, Award, Clock, DollarSign
} from 'lucide-react';
import Footer from './components/Footer';

// Service Card Skeleton Component
const ServiceCardSkeleton: React.FC = () => (
  <div className="quantum-card p-4 sm:p-6 energy-pulse animate-pulse">
    <div className="h-12 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-10 bg-gray-700 rounded"></div>
  </div>
);

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      link: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud computing, cybersecurity, and infrastructure management.',
      link: '/it-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Micro SaaS',
      description: 'Custom micro software-as-a-service solutions designed for specific business needs.',
      link: '/micro-saas',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and infrastructure.',
      link: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security measures to protect your data and systems from threats.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with experienced professionals who understand your industry challenges.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid deployment and implementation of solutions to get you up and running quickly.'
    }
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
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The micro SaaS solutions they built for us have revolutionized how we serve our customers.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      role: 'Security Director',
      content: 'Their cybersecurity expertise helped us achieve compliance and protect our sensitive data.',
      rating: 5
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, micro SaaS, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions from Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                Advanced AI & IT Solutions
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                for the Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, quantum computing, and innovative IT solutions. 
              We deliver enterprise-grade technology that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 inline" />
                Watch Demo
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>500+ Companies Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>5-Star Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </React.Fragment>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;