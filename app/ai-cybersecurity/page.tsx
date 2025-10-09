'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    'AI-powered threat detection and analysis',
    'Real-time security monitoring and alerting',
    'Automated incident response and remediation',
    'Behavioral analytics and anomaly detection',
    'Advanced malware and virus protection',
    'Network security and intrusion prevention',
    'Data loss prevention and encryption',
    'Compliance monitoring and reporting',
    'Security awareness training and phishing simulation',
    '24/7 security operations center (SOC)'
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 80%',
    'Prevent 99.9% of known and unknown threats',
    'Automate 90% of security responses',
    'Reduce security incidents by 70%',
    'Ensure compliance with industry standards',
    'Provide 24/7 protection and monitoring',
    'Scale security with business growth',
    'Reduce security costs by 50%',
    'Improve security team productivity by 300%'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security protection for large organizations',
      icon: Building,
      benefits: ['Advanced threat protection', 'Compliance assurance', 'Scalable security']
    },
    {
      title: 'Small Business',
      description: 'Affordable security solutions for growing businesses',
      icon: Briefcase,
      benefits: ['Cost-effective protection', 'Easy management', 'Expert support']
    },
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant security for healthcare organizations',
      icon: Heart,
      benefits: ['HIPAA compliance', 'Patient data protection', 'Regulatory adherence']
    },
    {
      title: 'Financial Services',
      description: 'Bank-level security for financial institutions',
      icon: CreditCard,
      benefits: ['Financial compliance', 'Fraud prevention', 'Data encryption']
    }
  ];

  const pricing = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        'Virus scanning',
        'Security monitoring',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and mid-size companies',
      features: [
        'Advanced threat detection',
        'AI-powered analysis',
        'Real-time monitoring',
        'Incident response',
        'Compliance reporting',
        'Priority support',
        'Custom security policies',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Full AI security suite',
        'Dedicated SOC team',
        'Custom integrations',
        'Advanced analytics',
        '24/7 support',
        'Compliance management',
        'Security consulting',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const technologies = [
    'Machine Learning', 'Deep Learning', 'SIEM', 'SOAR', 'EDR', 'XDR',
    'Threat Intelligence', 'Behavioral Analytics', 'Zero Trust', 'Cloud Security',
    'Network Security', 'Endpoint Protection', 'Data Loss Prevention', 'Identity Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions. Protect your business with intelligent threat detection, automated response, and 24/7 monitoring. Starting at $299/month." />
        <meta name="keywords" content="ai cybersecurity, threat detection, security monitoring, incident response, cyber protection, security ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with advanced AI-powered cybersecurity. Detect threats in real-time, 
            automate responses, and ensure compliance with intelligent security solutions that adapt to evolving threats.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Less False Positives</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Security Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose AI Cybersecurity?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
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
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Technologies & Integrations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Protect your organization with advanced AI cybersecurity solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;