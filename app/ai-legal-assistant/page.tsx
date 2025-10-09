'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, Scale, FileText, Gavel, BookOpen, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AILegalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Document Analysis',
      description: 'AI-powered legal document review and analysis with 99.5% accuracy',
      benefits: ['Contract analysis', 'Risk identification', 'Compliance checking', 'Clause extraction']
    },
    {
      icon: Scale,
      title: 'Case Research',
      description: 'Intelligent legal research with precedent analysis and case law insights',
      benefits: ['Precedent research', 'Case law analysis', 'Statute interpretation', 'Legal citations']
    },
    {
      icon: FileText,
      title: 'Document Generation',
      description: 'Automated legal document creation with customizable templates',
      benefits: ['Contract drafting', 'Legal briefs', 'Pleadings', 'Agreements']
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Real-time compliance tracking and regulatory updates',
      benefits: ['Regulatory updates', 'Compliance alerts', 'Risk assessment', 'Audit preparation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$399',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 100 documents/month',
        'Basic AI analysis',
        'Standard templates',
        'Email support',
        'Mobile app access',
        'Basic research tools'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing law firms and legal departments',
      features: [
        'Up to 1,000 documents/month',
        'Advanced AI analytics',
        'Custom templates',
        'Priority support',
        'API access',
        'Team collaboration',
        'Advanced research',
        'Client portal'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: [
        'Unlimited documents',
        'Full AI suite',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Contract Review',
      description: 'AI-powered contract analysis and risk assessment',
      icon: FileText,
      price: 'Starting at $199/month',
      features: ['Risk identification', 'Clause analysis', 'Compliance checking', 'Recommendations']
    },
    {
      title: 'Legal Research',
      description: 'Intelligent legal research and case law analysis',
      icon: BookOpen,
      price: 'Starting at $299/month',
      features: ['Precedent research', 'Case law analysis', 'Statute research', 'Citation management']
    },
    {
      title: 'Document Drafting',
      description: 'Automated legal document creation and customization',
      icon: Gavel,
      price: 'Starting at $399/month',
      features: ['Template library', 'Custom drafting', 'Version control', 'Collaboration tools']
    },
    {
      title: 'Compliance Management',
      description: 'Real-time compliance monitoring and regulatory updates',
      icon: Shield,
      price: 'Starting at $499/month',
      features: ['Regulatory tracking', 'Compliance alerts', 'Risk assessment', 'Audit support']
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Partner',
      company: 'Chen & Associates Law Firm',
      content: 'The AI document analysis has reduced our contract review time by 70% while improving accuracy. It\'s like having a team of paralegals working 24/7.',
      rating: 5,
      avatar: 'RC'
    },
    {
      name: 'Sarah Williams',
      role: 'General Counsel',
      company: 'TechCorp Industries',
      content: 'The compliance monitoring features have helped us stay ahead of regulatory changes. We\'ve avoided several potential compliance issues.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Partner',
      company: 'Rodriguez Legal Group',
      content: 'The legal research capabilities are incredible. We can find relevant cases and precedents in minutes instead of hours.',
      rating: 5,
      avatar: 'MR'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered legal assistant platform with document analysis, legal research, and compliance monitoring. Starting at $399/month." />
        <meta name="keywords" content="ai legal assistant, legal document analysis, legal research, contract review, compliance monitoring, legal automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Scale className="w-4 h-4 mr-2" />
            AI-Powered Legal Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Legal Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your legal practice with AI-powered document analysis, intelligent research, 
            and automated compliance monitoring. Reduce review time by 70% with 99.5% accuracy.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Time Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$399</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Legal Assistant Inquiry"
              className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Legal AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
            Comprehensive Legal Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-16 h-16 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
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
            Trusted by Legal Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of legal professionals using AI to work more efficiently and deliver better results for their clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center"
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

export default AILegalAssistantPage;