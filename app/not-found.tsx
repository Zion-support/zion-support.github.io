<<<<<<< HEAD
'use client'
import Link from 'next/link'
import { Home, ArrowLeft, RefreshCw } from 'lucide-react'
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

export default function NotFound() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
<<<<<<< HEAD

      <div className="text-center">

=======
      <div className="text-center">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
        <span className="text-8xl font-bold text-white mb-4">404</span>
        <h1 className="text-2xl font-semibold text-white mb-4">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">404</span>
          </div></div></div></div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          Page Not Found
        </h1>
        <p className="text-gray-300 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD

          <Link href="/" 
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <button onClick={() => window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
=======
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh
          </button>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
      <div className="container mx-auto px-4 py-20"></div>
        <div className="max-w-4xl mx-auto text-center"></div>
          {/* 404 Error */}
          <div className="mb-8"></div>
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4"></h1>
              404
            </h1>
            <h2 className="text-4xl font-bold text-white mb-4"></h2>
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's help you find what you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12"></div>
            <div className="max-w-md mx-auto relative"></div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                ></a>
                  <link.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                  <span className="text-white group-hover:text-cyan-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="mb-12"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Popular Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
              {popularServices.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                ></a>
                  <service.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-white group-hover:text-purple-300">{service.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 mb-8"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6"></p>
              Our team is here to help you find what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center"
              ></a>
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-white transition-colors inline-flex items-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div></div>
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            ></a>
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
