'use client';
import React from 'react';
import { Briefcase, Target, Users, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, DollarSign, Globe, Settings, BarChart, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development aligned with business objectives',
      benefits: ['Technology roadmap', 'Budget optimization', 'Risk assessment', 'ROI analysis']
    },
    {
      icon: Settings,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services for modern businesses',
      benefits: ['Process automation', 'Cloud migration', 'Legacy modernization', 'Change management']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Advanced security strategy and implementation services',
      benefits: ['Security assessment', 'Compliance planning', 'Incident response', 'Training programs']
    },
    {
      icon: BarChart,
      title: 'IT Performance Optimization',
      description: 'Optimize your IT infrastructure for maximum efficiency and performance',
      benefits: ['Performance analysis', 'Capacity planning', 'Cost optimization', 'Monitoring setup']
    },
    {
      icon: Users,
      title: 'Team Training & Development',
      description: 'Comprehensive training programs for your IT team',
      benefits: ['Technical training', 'Certification programs', 'Best practices', 'Mentoring']
    },
    {
      icon: Globe,
      title: 'Cloud Strategy & Migration',
      description: 'Strategic cloud adoption and migration services',
      benefits: ['Cloud assessment', 'Migration planning', 'Cost optimization', 'Security implementation']
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for healthcare organizations',
      icon: Shield,
      challenges: ['Compliance requirements', 'Data security', 'Integration complexity', 'Scalability needs']
    },
    {
      title: 'Financial Services',
      description: 'Secure and compliant IT infrastructure for financial institutions',
      icon: DollarSign,
      challenges: ['Regulatory compliance', 'Data protection', 'High availability', 'Risk management']
    },
    {
      title: 'Manufacturing',
      description: 'IoT and automation solutions for manufacturing operations',
      icon: Settings,
      challenges: ['Legacy systems', 'IoT integration', 'Supply chain optimization', 'Quality control']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Scalable e-commerce and retail technology solutions',
      icon: Globe,
      challenges: ['Seasonal scaling', 'Customer experience', 'Inventory management', 'Payment security']
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current IT infrastructure, processes, and business needs',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized IT strategy aligned with your business objectives and budget',
      duration: '2-3 weeks'
    },
    {
      step: '3',
      title: 'Implementation Planning',
      description: 'Detailed implementation roadmap with timelines, resources, and milestones',
      duration: '1-2 weeks'
    },
    {
      step: '4',
      title: 'Execution & Support',
      description: 'Ongoing support and guidance throughout the implementation process',
      duration: 'Ongoing'
    }
  ];

  const pricingPlans = [
    {
      name: 'Advisory',
      price: '$200',
      period: '/hour',
      description: 'On-demand consulting and advisory services',
      features: [
        'Strategic planning',
        'Technology assessment',
        'Best practices guidance',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Project-Based',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive project delivery',
      features: [
        'Full project management',
        'Dedicated team',
        'Regular check-ins',
        'Priority support',
        'Guaranteed delivery'
      ],
      popular: true
    },
    {
      name: 'Retainer',
      price: '$5,000',
      period: '/month',
      description: 'Ongoing strategic partnership',
      features: [
        'Unlimited consultations',
        'Priority support',
        'Regular strategy reviews',
        'Technology updates',
        'Dedicated consultant'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '60%', label: 'Efficiency Gain' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            IT Consulting & Strategy
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Strategic IT consulting for digital transformation and business growth
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with expert IT consulting services. We help organizations develop 
            strategic technology roadmaps, implement digital transformation initiatives, and optimize 
            their IT infrastructure for maximum efficiency and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="#services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Consulting Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Industry Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white neon-text">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">Key Challenges We Address:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Consulting Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 mb-2">{step.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{step.duration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Flexible Engagement Models
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your IT Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert consultants help you develop a strategic IT roadmap that drives 
              business growth and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITConsultingPage;