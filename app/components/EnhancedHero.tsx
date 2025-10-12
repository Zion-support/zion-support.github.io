

import React from 'react';
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
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

=======
export default function EnhancedHero() {
  return (
    <>
      <Helmet>
        <title>Enhanced Hero - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced hero by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Enhanced Hero</h1>
          <p className="text-lg text-gray-300 mb-8">Professional enhanced hero coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
