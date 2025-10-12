import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

const EnhancedHero: React.FC = () => {
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Background Effects */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  />
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Left Content */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5 ml-2" />
              Transform Your Business with{' '}
              <span className="w-5 h-5 ml-2" />AI & IT Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h3 className="text-lgfont-semiboldtext-whitemb-4"  >Why Choose Us?</h3>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300" />
                    <CheckCircle className="w-5 h-5 ml-2" />
                    <span className="text-sm"  >{benefit}</span>
                  </div>
                ))}
              </div>

            {/* CTA Buttons */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5 ml-2" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="w-5 h-5 ml-2">Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300" />
                  <contact.icon className="h-5w-5tex t-c yan-400mr-3flex-shrink-0"  />
                  <div />
                    <div className="text-smfont-medium text-white"  >{contact.title}</div>
                    <div className="text-xs text-gray-400"  >{contact.details}</div>
                </div>
              ))}
            </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {/* Floating Cards */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Brain className="w-5 h-5 ml-2" />
                <h3 className="text-lgfont-bold text-whitemb-2"  >AI Solutions</h3>
                <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
              </div>

            <div className="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2 xl backdrop-blur-sm borderborder-purple-500/30animate-float" style="{{" animationDelay: '1 s' }} />
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Shield className="w-5 h-5 ml-2" />
                <h3 className="text-lgfont-bold text-whitemb-2"  >Security</h3>
                <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
              </div>

            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2 xl backdrop-blur-sm borderborder-green-500/30animate-float" style="{{" animationDelay: '2 s' }} />
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Globe className="w-5 h-5 ml-2" />
                <h3 className="text-lgfont-bold text-whitemb-2"  >Cloud Services</h3>
                <p className="text-sm text-gray-300">Infrastructure & Migration</p>
              </div>
          </div>
      </div>
  )
};