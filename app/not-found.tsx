'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, CheckCircle, ArrowRight, Globe, Database, Smartphone, Settings, Lock, TrendingUp, Star, Award, Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Brain },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: BarChart },
    { name: 'Case Studies', href: '/case-studies', icon: Target }
  ];

  const popularServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Code },
    { name: 'Database Management', href: '/database', icon: Database },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-12">
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 neon-text">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-cyan-400 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have vanished into the digital void. 
              Don't worry, our AI-powered search algorithms are working to bring it back!
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 neon-text">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300 group"
                >
                  <link.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 neon-text">Popular Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="cyber-card p-4 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors ml-auto" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 neon-text">Search Our Site</h3>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for pages, services, or content..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="cyber-card p-8">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              If you can't find what you're looking for, our expert team is here to help. 
              Contact us and we'll guide you to the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Fun fact: Our AI systems have a 99.9% accuracy rate, but even they can't predict when you'll land on a 404 page! 🤖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;