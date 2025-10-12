import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CybersecurityPage() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Threat Intelligence', 'Automated Response']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and protection solutions.',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Access Controls', 'Compliance Management']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response.',
      features: ['SIEM Solutions', 'Log Analysis', 'Incident Response', 'Forensic Analysis']
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Vulnerability Assessment',
      description: 'Regular security assessments and penetration testing.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Risk Assessment']
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    '24/7 monitoring and support',
    'Compliance with industry standards',
    'Customized security solutions',
    'Rapid incident response',
    'Continuous security updates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including threat detection, data protection, and security monitoring." />
        <meta name="keywords" content="cybersecurity, security services, threat detection, data protection, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Cybersecurity Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive security solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss how our cybersecurity services can protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}