'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  benefits?: string[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showContactInfo?: boolean;
}

const EnhancedHero: React.FC<HeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Leading provider of AI and IT solutions",
  description = "Empower your organization with cutting-edge artificial intelligence, advanced analytics, and comprehensive IT services tailored to your unique needs.",
  benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ],
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  showContactInfo = true
}) => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ziontechgroup.com',
      link: 'mailto:info@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      link: '#'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-cyan-400 mb-4 font-semibold">
              {subtitle}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to={primaryButtonLink}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to={secondaryButtonLink}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                {secondaryButtonText}
              </Link>
            </div>

            {showContactInfo && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <info.icon className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">{info.title}</p>
                      <p className="text-gray-300 text-sm">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses already transforming with our solutions.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHero;
