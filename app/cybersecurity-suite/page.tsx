'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, AlertTriangle, Zap, ArrowRight, Star, Globe, Smartphone, Mail, Phone, MapPin, CheckCircle, Clock, Users, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecuritySuite: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced AI-powered threat detection with real-time monitoring and automated response',
      features: ['24/7 monitoring', 'AI threat analysis', 'Automated response', 'Incident reporting'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solution with multi-factor authentication and privileged access management',
      features: ['SSO integration', 'MFA enforcement', 'Role-based access', 'Audit trails'],
      price: 'Starting at $800/month'
    },
    {
      icon: Eye,
      title: 'Security Assessment',
      description: 'Comprehensive security audits and vulnerability assessments with detailed remediation plans',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance audits', 'Risk assessment'],
      price: 'Starting at $2,500'
    },
    {
      icon: AlertTriangle,
      title: 'Security Operations Center (SOC)',
      description: 'Managed security services with dedicated security analysts and incident response',
      features: ['Dedicated analysts', 'Threat hunting', 'Incident response', 'Security reporting'],
      price: 'Starting at $5,000/month'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Zero-Trust Architecture',
      description: 'Implement zero-trust security model with continuous verification and least privilege access'
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Advanced security analytics with machine learning for threat detection and prevention'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring with immediate threat detection and response'
    }
  ];

  const compliance = [
    { name: 'GDPR', status: 'Compliant', icon: CheckCircle },
    { name: 'HIPAA', status: 'Compliant', icon: CheckCircle },
    { name: 'SOX', status: 'Compliant', icon: CheckCircle },
    { name: 'PCI DSS', status: 'Compliant', icon: CheckCircle },
    { name: 'ISO 27001', status: 'Certified', icon: CheckCircle },
    { name: 'SOC 2', status: 'Certified', icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'CISO',
      company: 'Financial Services Inc',
      content: 'Their cybersecurity suite prevented 3 major breaches in the last year. The ROI has been incredible.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'IT Director',
      company: 'Healthcare Systems',
      content: 'HIPAA compliance was seamless with their solution. Our audit scores improved dramatically.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Security Manager',
      company: 'E-commerce Platform',
      content: 'The SOC team is exceptional. They caught and mitigated threats before they could cause damage.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">Enterprise-Grade Cybersecurity</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with comprehensive cybersecurity solutions. Advanced threat detection, 
              compliance management, and 24/7 security monitoring to keep your data safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Security Assessment
              </a>
              <a
                href="#services"
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-red-500/20">
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection Rate</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-red-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Security Monitoring</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-red-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Compliance Rate</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-red-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with our complete cybersecurity suite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mr-6">
                    <service.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                    <div className="text-red-400 font-bold text-lg">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge security technologies to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-red-500/20">
                <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet all regulatory requirements with our certified security solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-red-500/20">
                <item.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                <div className="text-green-400 text-sm font-medium">{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've protected businesses from cyber threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-red-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for a cyber attack. Get a comprehensive security assessment and protect your business 
            with enterprise-grade cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Security Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="w-5 h-5 text-red-400" />
              <a href="tel:+13024640950" className="hover:text-red-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-5 h-5 text-red-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-red-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecuritySuite;