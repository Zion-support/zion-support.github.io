import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of cutting-edge artificial intelligence and information technology
                to drive innovation, efficiency, and growth in your organization.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <contact.icon className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">{contact.title}</div>
                    <div className="text-xs text-gray-400">{contact.details}</div>
                    <div className="text-xs text-gray-500">{contact.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-xl font-semibold">Innovation in Action</p>
                <p className="text-gray-300">Experience the future of technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
