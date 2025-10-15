'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  LockClosedIcon,
  CpuChipIcon,
  DocumentTextIcon,
  EyeIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const CybersecuritySolutionsPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response system that identifies and neutralizes cyber threats in real-time.',
      benefits: ['Real-time threat monitoring', 'AI-powered analysis', 'Automated response']
    },
    {
      icon: LockClosedIcon,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture with continuous verification and least privilege access controls.',
      benefits: ['Identity verification', 'Access controls', 'Continuous monitoring']
    },
    {
      icon: EyeIcon,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response with our advanced SOC (Security Operations Center).',
      benefits: ['24/7 monitoring', 'Incident response', 'Threat intelligence']
    },
    {
      icon: DocumentTextIcon,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements with automated compliance monitoring.',
      benefits: ['Regulatory compliance', 'Automated reporting', 'Audit trails']
    },
    {
      icon: CpuChipIcon,
      title: 'Penetration Testing',
      description: 'Comprehensive penetration testing and vulnerability assessments to identify and fix security weaknesses.',
      benefits: ['Vulnerability assessment', 'Penetration testing', 'Security recommendations']
    },
    {
      icon: UserGroupIcon,
      title: 'Security Training',
      description: 'Employee security awareness training and phishing simulation to build a security-conscious workforce.',
      benefits: ['Security training', 'Phishing simulation', 'Awareness programs']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Firewall management',
        'Email security',
        'Monthly security reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced threat detection',
        '24/7 monitoring',
        'Incident response',
        'Compliance management',
        'Priority support',
        'Security training',
        'Penetration testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Complete security suite',
        'Dedicated security team',
        'Custom security policies',
        '24/7 dedicated support',
        'On-premise deployment',
        'Advanced analytics',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const securityServices = [
    'Network Security',
    'Endpoint Protection',
    'Email Security',
    'Cloud Security',
    'Identity & Access Management',
    'Data Loss Prevention',
    'Security Information & Event Management (SIEM)',
    'Managed Detection & Response (MDR)',
    'Vulnerability Management',
    'Security Consulting',
    'Incident Response',
    'Digital Forensics'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CISO at TechCorp',
      content: 'Zion\'s cybersecurity solutions have significantly improved our security posture. The AI-powered threat detection is incredibly effective.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director at FinanceCorp',
      content: 'The compliance management features saved us months of work. We passed our SOC 2 audit with flying colors.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Manager at HealthCorp',
      content: 'The 24/7 monitoring and incident response capabilities give us peace of mind. Their team is incredibly responsive.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, zero trust security, compliance management, and 24/7 monitoring. Protect your business from cyber threats."
        keywords="cybersecurity solutions, threat detection, zero trust security, compliance management, security monitoring, penetration testing, SOC"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Cybersecurity Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Protect your business with comprehensive cybersecurity solutions. Advanced threat detection, zero trust security, and 24/7 monitoring to keep your data safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40">
                  <span className="relative z-10 flex items-center">
                    Get Security Assessment
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-red-400 text-red-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-red-400/25 neon-border-animated">
                  Schedule Consultation
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Threat Detection</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm sm:text-base">Monitoring</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-2">12</div>
                  <div className="text-gray-300 text-sm sm:text-base">Security Services</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-2">SOC 2</div>
                  <div className="text-gray-300 text-sm sm:text-base">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-red-400 font-medium neon-text">Security</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Comprehensive <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our full suite of cybersecurity services covers every aspect of your security needs.
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {securityServices.map((service, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                    <span className="text-gray-300 hover:text-red-400 transition-colors font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Choose Your <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Security Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Flexible pricing options designed to meet your cybersecurity needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'hover:shadow-red-500/20 border-2 border-red-500' : 'hover:shadow-orange-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Contact Sales'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Security Professionals <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of organizations who trust our cybersecurity solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-red-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-red-900/40 via-slate-900 to-orange-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Secure Your Business Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Get a comprehensive security assessment and protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-red-500/25">
                <span className="relative z-10 flex items-center">
                  Get Security Assessment
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Contact Security Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;