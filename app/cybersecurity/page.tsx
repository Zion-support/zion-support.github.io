'use client';
import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Camera, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, Brain, Cpu, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const CybersecurityPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const securitySolutions = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention using AI-powered security monitoring',
      icon: Target,
      features: ['Real-time Monitoring', 'AI Threat Analysis', 'Behavioral Analytics', 'Automated Response'],
      benefits: ['99.9% threat detection', 'Real-time alerts', 'Reduced false positives', 'Automated mitigation']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments to identify and remediate vulnerabilities',
      icon: Search,
      features: ['Penetration Testing', 'Code Analysis', 'Infrastructure Scanning', 'Compliance Audits'],
      benefits: ['Complete coverage', 'Prioritized remediation', 'Compliance assurance', 'Risk reduction']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services',
      icon: Activity,
      features: ['24/7 SOC', 'Incident Response', 'Log Analysis', 'Threat Intelligence'],
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Peace of mind']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents',
      icon: Zap,
      features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Post-Incident Review'],
      benefits: ['Minimal downtime', 'Data recovery', 'Lessons learned', 'Improved security']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,200',
      period: '/month',
      description: 'Basic security protection for small businesses',
      features: [
        'Basic threat detection',
        'Monthly vulnerability scans',
        'Email support',
        'Standard monitoring',
        'Basic incident response'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,599',
      period: '/month',
      description: 'Comprehensive security for growing businesses',
      features: [
        'Advanced threat detection',
        'Weekly vulnerability assessments',
        'Priority support',
        '24/7 monitoring',
        'Rapid incident response',
        'Compliance reporting',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Complete security solution for large enterprises',
      features: [
        'Full security suite',
        'Daily vulnerability assessments',
        '24/7 dedicated support',
        'Advanced monitoring',
        'Immediate incident response',
        'Full compliance suite',
        'Custom security training',
        'Dedicated security team',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Services - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business with enterprise-grade security."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'incident response', 'SOC', 'penetration testing', 'security audit']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Cybersecurity Services',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security monitoring.',
          serviceType: 'Cybersecurity Services',
          areaServed: 'US',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://ziontechgroup.com/cybersecurity',
            servicePhone: '+1-302-464-0950'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Cybersecurity"
              >
                Cybersecurity
              </h1>
              <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Protect Your Business with Enterprise-Grade Security
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Defend against evolving cyber threats with our comprehensive cybersecurity solutions. 
                From threat detection to incident response, we provide 24/7 protection for your critical assets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Security Solutions Section */}
          <section className="mb-16" aria-labelledby="security-solutions-heading">
            <h2 id="security-solutions-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Cybersecurity Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive security services to protect your business from cyber threats
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {securitySolutions.map((solution, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Choose the perfect cybersecurity solution for your business needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-red-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Cybersecurity Plan`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Our Cybersecurity Solutions */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Expert Security Team</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our team of certified security professionals and ethical hackers have years of experience in protecting businesses from cyber threats.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Results</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We've helped businesses achieve 99.9% threat detection, 100% compliance, and zero successful breaches with our security solutions.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Enterprise Security</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bank-level security with SOC 2 Type II certification, advanced encryption, and compliance with industry standards.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Secure Your Business?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CybersecurityPage;