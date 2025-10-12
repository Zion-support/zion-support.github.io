import React from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Brain, Shield, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Advanced AI technology integration',
  'Real-time processing and analytics',
  'Enterprise-grade security and compliance',
  'Scalable and flexible solutions',
  '24/7 technical support',
  'Custom implementation and training'
];

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri 9 AM-6 PM PST'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'contact@ziontechgroup.com',
    description: 'We respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'San Francisco, CA',
    description: 'Schedule a meeting'
  }
];

export default function EnhancedHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of cutting-edge artificial intelligence and information technology
                to drive innovation, efficiency, and growth in your organization.
              </p>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <contact.icon className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">{contact.title}</div>
                    <div className="text-xs text-gray-400">{contact.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 animate-float" style={{ animationDelay: '1s' }}>
                <div className="p-6">
                  <Brain className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                  <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
                </div>
              </div>

              <div className="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-green-500/30 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-6">
                  <Shield className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                  <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
                </div>
              </div>

              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 animate-float" style={{ animationDelay: '3s' }}>
                <div className="p-6">
                  <Cloud className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Cloud</h3>
                  <p className="text-sm text-gray-300">Scalable Infrastructure</p>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}