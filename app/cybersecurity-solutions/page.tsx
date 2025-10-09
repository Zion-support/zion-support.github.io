'use client';
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Users, Award, TrendingUp, BarChart, Brain, Target, Clock, Database, Settings, Sparkles, Zap, Search, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const CybersecuritySolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audit and vulnerability assessment',
      icon: Search,
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audit', 'Compliance check'],
      price: 'Starting at $2,000'
    },
    {
      title: 'Managed Security',
      description: '24/7 monitoring and threat detection for your infrastructure',
      icon: Shield,
      features: ['24/7 monitoring', 'Threat detection', 'Incident response', 'Security updates'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Compliance & Governance',
      description: 'Achieve and maintain compliance with industry standards',
      icon: FileText,
      features: ['SOC 2 compliance', 'GDPR compliance', 'HIPAA compliance', 'ISO 27001'],
      price: 'Starting at $3,000'
    },
    {
      title: 'Security Training',
      description: 'Educate your team on cybersecurity best practices',
      icon: Users,
      features: ['Security awareness', 'Phishing simulation', 'Incident response', 'Policy development'],
      price: 'Starting at $500/employee'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,200/month',
      description: 'Basic security for small businesses',
      features: [
        'Security monitoring',
        'Monthly reports',
        'Email support',
        'Basic threat detection',
        'Security updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,500/month',
      description: 'Most popular for growing companies',
      features: [
        'Advanced monitoring',
        'Weekly reports',
        'Priority support',
        'Advanced threat detection',
        'Incident response',
        'Compliance assistance',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,000/month',
      description: 'For large organizations',
      features: [
        'Dedicated security team',
        'Daily reports',
        '24/7 support',
        'Custom security solutions',
        'Full compliance management',
        'Advanced threat hunting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const securityAreas = [
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure from external threats',
      icon: Shield,
      threats: ['DDoS attacks', 'Malware', 'Intrusions', 'Data breaches']
    },
    {
      title: 'Application Security',
      description: 'Secure your applications and web services',
      icon: Lock,
      threats: ['SQL injection', 'XSS attacks', 'API vulnerabilities', 'Code exploits']
    },
    {
      title: 'Data Protection',
      description: 'Safeguard sensitive data and ensure privacy compliance',
      icon: Database,
      threats: ['Data leaks', 'Privacy violations', 'Encryption issues', 'Access control']
    },
    {
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure and services',
      icon: Cloud,
      threats: ['Misconfigurations', 'Unauthorized access', 'Data exposure', 'Compliance gaps']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'FinanceSecure Corp',
      role: 'CISO',
      content: 'Zion Tech Group helped us achieve SOC 2 compliance in record time. Their security expertise is unmatched and their team is incredibly professional.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'HealthTech Solutions',
      role: 'IT Director',
      content: 'After implementing their security solutions, we went from 3 security incidents per month to zero. The ROI was immediate and significant.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'E-commerce Plus',
      role: 'CTO',
      content: 'Their 24/7 monitoring caught a sophisticated attack before it could cause damage. The incident response was flawless and saved us millions.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Enterprise Cybersecurity Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Cybersecurity Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our comprehensive security solutions. 
              From assessment to compliance, we keep your data and systems secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-300 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-300">
                View Security Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Services</h2>
            <p className="text-xl text-gray-300">End-to-end cybersecurity solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-red-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Areas Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Security Focus Areas</h2>
            <p className="text-xl text-gray-300">Comprehensive protection across all attack vectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityAreas.map((area, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.threats.map((threat, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Managed Security Services</h2>
            <p className="text-xl text-gray-300">Choose the level of protection that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-red-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600' 
                    : 'border border-red-400 text-red-300 hover:bg-red-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Security-Conscious Organizations</h2>
            <p className="text-xl text-gray-300">See what our clients say about our security solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/20 to-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Don't Wait for a Security Breach</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your business today with our comprehensive cybersecurity solutions. 
            Get a free security assessment and see how we can help secure your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              Get Free Assessment
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-red-400 text-red-300 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecuritySolutionsPage;