'use client'
import React from 'react'

const EnhancedHero: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ]

  const contactInfo = [
    {
      icon: 
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: 
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting'
    }
  ]

  return (
    <div>

    <div>
  
      {/* Background Effects */}
      <div>
  
      <div>
  
      {/* Main Content */}
      <div>
  
        {/* Left Content */}
        <div>
  
          <div>
  
            <h1>
  
              Transform Your Business with{' '}
              <span>
  
                AI & IT Solutions
              </span>
            </h1>
            
            <p>
  
              Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}
            <div>
  
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
              <div>
  
                {benefits.map((benefit, index) => (
                  <div>
  
                    <CheckCircle>
  
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div>
  
              <button>
  
                Get Started
                <ArrowRight>
  
              </button>
              <button>
  
                Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div>
  
              {contactInfo.map((contact, index) => (
                <div>
  
                  <contact>
  
                  <div>
  
                    <div className="text-sm font-medium text-white">{contact.title}</div>
                    <div className="text-xs text-gray-400">{contact.details}</div>
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
  
                <Brain>
  
                <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
              </div>
            </div>

            <div>
  
              <div>
  
                <Shield>
  
                <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
              </div>
            </div>

            <div>
  
              <div>
  
                <Globe>
  
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

export default EnhancedHero
