'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const HomePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your needs.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    { name: 'AI Analytics', href: '/ai-analytics', description: 'Advanced data insights', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', description: 'Process automation', icon: Zap },
    { name: 'AI Customer Support', href: '/ai-customer-support', description: 'AI-powered support', icon: Users },
    { name: 'AI Content Generation', href: '/ai-content-generation', description: 'Content creation', icon: FileText },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Security solutions', icon: Shield },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions', icon: Target },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', description: 'E-commerce AI', icon: Globe },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', description: 'Mobile AI apps', icon: Smartphone }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', description: 'Cloud solutions', icon: Cloud },
    { name: 'DevOps & CI/CD', href: '/devops', description: 'Development operations', icon: Code },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions', icon: Lock },
    { name: 'IT Consulting', href: '/it-consulting', description: 'Expert IT guidance', icon: Settings },
    { name: 'Database Services', href: '/database-services', description: 'Database management', icon: Database },
    { name: 'Network Solutions', href: '/network-solutions', description: 'Network infrastructure', icon: Globe }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard', description: 'Business analytics', icon: BarChart },
    { name: 'Content Generator', href: '/micro-saas/content-generator', description: 'AI content creation', icon: FileText },
    { name: 'Email Marketing', href: '/micro-saas/email-marketing', description: 'Email automation', icon: Mail },
    { name: 'Social Manager', href: '/micro-saas/social-manager', description: 'Social media management', icon: Users },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker', description: 'Financial tracking', icon: TrendingUp },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler', description: 'Scheduling system', icon: Calendar }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of cutting-edge AI and IT solutions. We help businesses 
              leverage technology to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver innovative solutions that drive real business results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
                <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/ai-services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View All AI Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions to support your business infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
                <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/it-services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View All IT Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Micro SaaS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful, focused tools designed to solve specific business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
                <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/micro-saas"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View All Micro SaaS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
