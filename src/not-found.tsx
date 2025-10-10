'use client';
import React from 'react';
import { Home, ArrowLeft, Search, Phone, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, CheckCircle, ArrowRight, Globe, Database, Smartphone, Settings, Lock, TrendingUp, Star, Award, Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react';

export default function NotFoundPage() {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cloud },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: Code }
  ];

  const popularServices = [
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Consultation', href: '/consultation', icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
              404
            </h1>
            <h2 className="text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's help you find what you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <link.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                  <span className="text-white group-hover:text-cyan-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Popular Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularServices.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <service.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-white group-hover:text-purple-300">{service.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you find what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-white transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div>
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}