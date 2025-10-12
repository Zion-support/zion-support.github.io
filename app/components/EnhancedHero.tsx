
import React from 'react';

import { ArrowRight } from 'lucide-react';
'use client'

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ];
  const contactInfo = [
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9 AM-6 PM PST'
    },
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting'
  ];
  return (
      {/* Background Effects */}
    
      {/* Main Content */}
        {/* Left Content */}
    
              Transform Your Business with{' '}
    
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI & IT Solutions

              Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.

            {/* Benefits List */}

              <h3 className="text-lg font-semiboldtext-whitemb-4">Why Choose Us?</h3>
 (
    
                    <span className="text-sm">{benefit}</span>

                ))}

            {/* CTA Buttons */}

                Get Started
    
              <button className="cyber-button-secondary px-8 py-4text-lgfont-semibold">Learn More

            {/* Contact Info */}
 (
    
                    <div className="text-smfont-mediumtext-white">{contact.title}</div>
                    <div className="text-xstext-gray-400">{contact.details}</div>

              ))}

        {/* Right Content - Visual Elements */}

            {/* Floating Cards */}
    
                <h3 className="text-lg font-boldtext-whitemb-2">AI Solutions</h3>

                <p className="text-smtext-gray-300">Machine Learning & Analytics</p>

                <h3 className="text-lg font-boldtext-whitemb-2">Security</h3>

                <p className="text-smtext-gray-300">Cybersecurity & Compliance</p>

                <h3 className="text-lg font-boldtext-whitemb-2">Cloud Services</h3>

                <p className="text-smtext-gray-300">Infrastructure & Migration</p>
  )
};
