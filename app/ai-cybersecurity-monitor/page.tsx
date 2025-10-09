'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, Lock, AlertTriangle, Eye, Activity, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Database, Cloud, Code, Smartphone, Settings, BarChart3, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AICybersecurityMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms detect and prevent cyber threats in real-time',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Anomaly detection', 'Threat intelligence']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent incident response and automated threat mitigation',
      benefits: ['Instant response', 'Threat isolation', 'System hardening', 'Recovery automation']
    },
    {
      icon: Eye,
      title: 'Network Monitoring',
      description: 'Comprehensive network security monitoring and analysis',
      benefits: ['Traffic analysis', 'Intrusion detection', 'Vulnerability scanning', 'Compliance monitoring']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Continuous security risk assessment and vulnerability management',
      benefits: ['Risk scoring', 'Vulnerability tracking', 'Patch management', 'Security posture analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$1,499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email support',
        'Standard reporting',
        'Mobile app access',
        'Basic compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing companies and enterprises',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Advanced compliance',
        'Incident response',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large organizations and critical infrastructure',
      features: [
        'Unlimited endpoints',
        'Full AI suite',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Dedicated SOC team',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence and security updates',
      icon: Activity,
      price: 'Starting at $999/month',
      features: ['Threat feeds', 'IOC tracking', 'Malware analysis', 'Attack attribution']
    },
    {
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning and patch management',
      icon: Target,
      price: 'Starting at $799/month',
      features: ['Asset discovery', 'Vulnerability scanning', 'Patch prioritization', 'Compliance tracking']
    },
    {
      title: 'Incident Response',
      description: 'Rapid incident response and forensic analysis',
      icon: AlertTriangle,
      price: 'Starting at $1,299/month',
      features: ['Incident detection', 'Forensic analysis', 'Evidence collection', 'Recovery planning']
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting',
      icon: Shield,
      price: 'Starting at $1,199/month',
      features: ['Compliance tracking', 'Audit preparation', 'Policy management', 'Reporting automation']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CISO',
      company: 'Financial Services Corp',
      content: 'The AI threat detection has prevented multiple sophisticated attacks. Our security posture has improved dramatically with 99.9% threat detection accuracy.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Security Director',
      company: 'Healthcare Systems Inc',
      content: 'The automated response capabilities have reduced our incident response time by 80%. We can now contain threats within minutes instead of hours.',
      rating: 5,
      avatar: 'SR'
    },
    {
      name: 'David Thompson',
      role: 'IT Security Manager',
      company: 'Manufacturing Group',
      content: 'The compliance management features have streamlined our audit process. We now maintain continuous compliance with minimal effort.',
      rating: 5,
      avatar: 'DT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Cybersecurity Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring platform with threat detection, automated response, and compliance management. Starting at $1,499/month." />
        <meta name="keywords" content="ai cybersecurity, threat detection, security monitoring, incident response, vulnerability management, compliance monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-monitor" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-600/20 rounded-full text-red-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Cybersecurity
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Cybersecurity Monitoring
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your organization with AI-powered threat detection, automated incident response, 
            and continuous security monitoring. Achieve 99.9% threat detection accuracy with real-time protection.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$1,499</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-red-600 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Monitor Inquiry"
              className="bg-transparent border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-medium hover:bg-red-400 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Security Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Security AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-16 h-16 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-red-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Enterprise Security Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-red-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                      : 'bg-transparent border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Trusted by Security Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of organizations using AI to protect their critical assets and maintain continuous security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityMonitorPage;