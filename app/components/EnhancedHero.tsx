'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react';

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
      description: 'Mon-Fri 9AM-6PM PST'
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
    <div>
      </CheckCircle>
      </ArrowRight>
      </contact>
      </Brain>
      </Shield>
      </div>
      </div>
      </Globe>
      {/* Background Effects */}
      <div>
      <div>
      
      {/* Main Content */}
      <div>
        {/* Left Content */}
        <div>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span>
                AI & IT Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of cutting-edge artificial intelligence and information technology;
to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
              <div>
                {benefits.map((benefit, index) => (
                  <div>
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div>
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div>
              {contactInfo.map((contact, index) => (
                <div>
                  <contact.icon className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <div>
                    <div>{contact.title}</div>
                    <div>{contact.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div>
          <div>
            {/* Floating Cards */}
            <div>
              <div>
                <Brain className="h-8 w-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
              </div>
            </div>

            <div>
              <div>
                <Shield className="h-8 w-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
              </div>
            </div>

            <div>
              <div>
                <Globe className="h-8 w-8 text-green-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Cloud Services</h3>
                <p className="text-sm text-gray-300">Infrastructure & Migration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}