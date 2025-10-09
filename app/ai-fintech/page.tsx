'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, DollarSign, Clock, TrendingDown as TrendingDownIcon } from 'lucide-react';

const AIFintechPage: React.FC = () => {
  const features = [
    {
      title: 'Fraud Detection',
      description: 'Advanced AI algorithms to detect and prevent fraudulent transactions',
      icon: Shield,
      benefits: ['99.9% fraud detection accuracy', 'Real-time monitoring', 'Reduced false positives', 'Cost savings']
    },
    {
      title: 'Algorithmic Trading',
      description: 'AI-powered trading algorithms for optimal investment strategies',
      icon: TrendingUp,
      benefits: ['Automated trading', 'Risk management', 'Market analysis', 'Profit optimization']
    },
    {
      title: 'Credit Scoring',
      description: 'AI-enhanced credit assessment for better lending decisions',
      icon: BarChart,
      benefits: ['Accurate risk assessment', 'Faster decisions', 'Reduced defaults', 'Better rates']
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and portfolio optimization',
      icon: Target,
      benefits: ['Portfolio optimization', 'Risk mitigation', 'Compliance monitoring', 'Stress testing']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting',
      icon: FileText,
      benefits: ['Automated reporting', 'Compliance monitoring', 'Audit trails', 'Regulatory updates']
    },
    {
      title: 'Customer Analytics',
      description: 'AI-powered customer insights and behavior analysis',
      icon: Users,
      benefits: ['Customer segmentation', 'Behavior analysis', 'Personalization', 'Retention optimization']
    }
  ];

  const applications = [
    {
      title: 'Banking',
      description: 'AI solutions for traditional and digital banking operations',
      icon: '🏦',
      results: ['40% cost reduction', 'Better customer service', 'Improved security']
    },
    {
      title: 'Investment Management',
      description: 'AI-powered portfolio management and investment strategies',
      icon: '📈',
      results: ['25% better returns', 'Risk reduction', 'Automated management']
    },
    {
      title: 'Insurance',
      description: 'AI for underwriting, claims processing, and risk assessment',
      icon: '🛡️',
      results: ['Faster claims processing', 'Better risk assessment', 'Cost reduction']
    },
    {
      title: 'Payment Processing',
      description: 'AI-enhanced payment systems and fraud prevention',
      icon: '💳',
      results: ['99.9% fraud prevention', 'Faster processing', 'Better security']
    },
    {
      title: 'Lending',
      description: 'AI-powered loan origination and credit assessment',
      icon: '💰',
      results: ['Faster approvals', 'Better risk assessment', 'Reduced defaults']
    },
    {
      title: 'Trading',
      description: 'AI algorithms for automated trading and market analysis',
      icon: '📊',
      results: ['Automated trading', 'Better timing', 'Risk management']
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'Advanced AI security measures protect against fraud and cyber threats',
      icon: Shield,
      stats: '99.9% fraud prevention'
    },
    {
      title: 'Cost Reduction',
      description: 'AI automation reduces operational costs and improves efficiency',
      icon: DollarSign,
      stats: '40% cost reduction'
    },
    {
      title: 'Better Decisions',
      description: 'AI provides data-driven insights for better financial decisions',
      icon: Brain,
      stats: '60% better decision making'
    },
    {
      title: 'Compliance',
      description: 'Automated compliance monitoring ensures regulatory adherence',
      icon: CheckCircle,
      stats: '100% compliance rate'
    }
  ];

  const pricing = [
    {
      name: 'Startup',
      price: 499,
      description: 'Perfect for fintech startups and small financial institutions',
      features: [
        'Up to 10,000 transactions/month',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Compliance monitoring'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: 999,
      description: 'Ideal for established financial institutions',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        'Advanced analytics',
        'Custom workflows',
        'API access',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Global',
      price: 1999,
      description: 'For large financial institutions and global operations',
      features: [
        'Unlimited transactions',
        'Full AI suite',
        '24/7 support',
        'Custom integrations',
        'Custom analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">💳</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Fintech Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionize financial services with AI-powered solutions. Enhance security, 
            improve efficiency, and deliver better customer experiences in the financial sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Schedule Demo
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Financial Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Financial Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{application.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{application.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{application.description}</p>
                
                <div className="space-y-2">
                  {application.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Fintech Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Secure, compliant AI solutions designed for financial institutions of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' 
                      : 'bg-cyan-400 text-slate-900'
                  }`}
                >
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Financial Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions that are already using AI to enhance 
              security, improve efficiency, and deliver better customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Schedule Demo
              </a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIFintechPage;