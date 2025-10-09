'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CreditCard, TrendingUp, Shield, Brain, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Zap, Target, Globe, Award, Users, Cpu, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, DollarSign, BarChart3, Lock, Eye, AlertTriangle } from 'lucide-react';

const AIFintechPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Trading Algorithms',
      description: 'Advanced machine learning algorithms for automated trading and portfolio optimization',
      benefits: ['Algorithmic trading', 'Risk management', 'Portfolio optimization', 'Market analysis']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Real-time fraud detection and prevention using AI pattern recognition',
      benefits: ['Real-time monitoring', 'Pattern recognition', 'Anomaly detection', 'Risk scoring']
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure and intelligent payment processing with AI-powered fraud prevention',
      benefits: ['Secure payments', 'Multi-currency support', 'Instant settlements', 'Chargeback protection']
    },
    {
      icon: TrendingUp,
      title: 'Investment Analytics',
      description: 'AI-powered investment analysis and market prediction tools',
      benefits: ['Market prediction', 'Investment recommendations', 'Risk assessment', 'Performance tracking']
    },
    {
      icon: BarChart3,
      title: 'Financial Planning',
      description: 'Intelligent financial planning and wealth management solutions',
      benefits: ['Goal setting', 'Budget optimization', 'Retirement planning', 'Tax optimization']
    },
    {
      icon: Lock,
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting for financial regulations',
      benefits: ['KYC/AML compliance', 'Regulatory reporting', 'Audit trails', 'Risk assessment']
    }
  ];

  const fintechServices = [
    {
      name: 'AI Trading Platform',
      price: '$2,999/month',
      description: 'Complete algorithmic trading platform with AI-powered strategies',
      features: [
        'Custom trading algorithms',
        'Real-time market data',
        'Risk management tools',
        'Backtesting capabilities',
        'Portfolio optimization',
        'Performance analytics'
      ]
    },
    {
      name: 'Fraud Prevention System',
      price: '$1,499/month',
      description: 'Advanced AI fraud detection and prevention for financial transactions',
      features: [
        'Real-time fraud detection',
        'Machine learning models',
        'Transaction monitoring',
        'Risk scoring',
        'Alert management',
        'Compliance reporting'
      ]
    },
    {
      name: 'Payment Gateway',
      price: '$799/month',
      description: 'Secure payment processing with AI-powered fraud prevention',
      features: [
        'Multi-currency support',
        'PCI DSS compliance',
        'Fraud prevention',
        'Instant settlements',
        'API integration',
        'Analytics dashboard'
      ]
    },
    {
      name: 'Investment Advisory',
      price: '$1,999/month',
      description: 'AI-powered investment advisory and portfolio management services',
      features: [
        'Portfolio analysis',
        'Investment recommendations',
        'Risk assessment',
        'Market research',
        'Performance tracking',
        'Client reporting'
      ]
    },
    {
      name: 'RegTech Solutions',
      price: '$1,299/month',
      description: 'Regulatory technology solutions for compliance and reporting',
      features: [
        'KYC/AML automation',
        'Regulatory reporting',
        'Compliance monitoring',
        'Audit trails',
        'Risk assessment',
        'Document management'
      ]
    },
    {
      name: 'Digital Banking',
      price: '$3,999/month',
      description: 'Complete digital banking platform with AI-powered features',
      features: [
        'Account management',
        'Mobile banking',
        'AI chatbots',
        'Personalized services',
        'Security features',
        'Analytics dashboard'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'Banks',
      description: 'Digital transformation with AI-powered customer service and fraud prevention',
      results: '40% reduction in fraud losses, 60% improvement in customer satisfaction'
    },
    {
      industry: 'Investment Firms',
      description: 'Algorithmic trading and portfolio optimization with AI insights',
      results: '25% increase in portfolio returns, 50% reduction in risk'
    },
    {
      industry: 'Fintech Startups',
      description: 'Rapid deployment of AI-powered financial services and compliance',
      results: '80% faster time-to-market, 90% compliance automation'
    },
    {
      industry: 'Insurance Companies',
      description: 'AI-powered underwriting, claims processing, and risk assessment',
      results: '30% faster claims processing, 45% reduction in fraudulent claims'
    }
  ];

  const regulations = [
    'PCI DSS', 'SOX', 'Basel III', 'MiFID II', 'GDPR', 'CCPA', 'PIPEDA', 'FATCA'
  ];

  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered fintech solutions including algorithmic trading, fraud detection, payment processing, and regulatory compliance. Transform your financial services." />
        <meta name="keywords" content="AI fintech, algorithmic trading, fraud detection, payment processing, financial AI, regtech, digital banking, investment analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-fintech" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Fintech Solutions
              </h1>
              <p className="text-xl md:text-2xl text-green-400 mb-8">
                Revolutionizing Financial Services with AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered fintech platform provides algorithmic trading, fraud detection, 
                payment processing, and regulatory compliance solutions to transform your 
                financial services and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  View Services
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Fintech Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-green-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
        <section id="services" className="py-20 px-4 bg-gradient-to-r from-green-600/10 to-blue-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Fintech Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fintechServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-green-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{useCase.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600/10 to-blue-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Regulatory Compliance
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                Our solutions are designed to meet the most stringent financial regulations worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {regulations.map((regulation, index) => (
                  <span key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold">
                    {regulation}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Financial Services
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join the fintech revolution with our AI-powered solutions and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFintechPage;