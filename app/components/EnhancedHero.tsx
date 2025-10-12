import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EnhancedHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export default function EnhancedHero({
  title = "Transform Your Business with AI",
  subtitle = "Cutting-Edge Technology Solutions",
  description = "Leverage the power of artificial intelligence and advanced technology to revolutionize your business operations and drive unprecedented growth.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  className = ""
}: EnhancedHeroProps) {
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
      details: 'info@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Tech Street, Silicon Valley',
      description: 'Schedule a meeting'
    }
  ];

  return (
    <div className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4">
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to={primaryButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to={secondaryButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                {secondaryButtonText}
              </Link>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3">
                    <info.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{info.title}</div>
                    <div className="text-sm">{info.details}</div>
                    <div className="text-xs text-gray-400">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
