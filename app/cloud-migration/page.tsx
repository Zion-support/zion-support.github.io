'use client';
import React from 'react';
import { Cloud, Server, Shield, CheckCircle, Star, ArrowRight, Brain, Zap, Users, Clock, DollarSign, Award, Globe, Database, Settings, Smartphone, Mail, Phone, Calendar, FileText, TrendingUp, Eye, Lock, ArrowUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigration: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'AWS Migration',
      description: 'Complete migration to Amazon Web Services with optimized architecture and cost management',
      price: '$2,999',
      features: ['Infrastructure assessment', 'Migration planning', 'Data transfer', 'Security configuration', 'Cost optimization']
    },
    {
      icon: Server,
      title: 'Azure Migration',
      description: 'Seamless migration to Microsoft Azure with hybrid cloud capabilities',
      price: '$2,799',
      features: ['Hybrid cloud setup', 'Active Directory integration', 'Office 365 migration', 'Security compliance', 'Performance tuning']
    },
    {
      icon: Database,
      title: 'Google Cloud Migration',
      description: 'Migrate to Google Cloud Platform with advanced AI and analytics capabilities',
      price: '$2,599',
      features: ['BigQuery setup', 'AI/ML integration', 'Kubernetes deployment', 'Data analytics', 'Machine learning']
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation and hardening for cloud environments',
      price: '$1,499',
      features: ['Security audit', 'Compliance check', 'Vulnerability scan', 'Penetration testing', 'Security policies']
    },
    {
      icon: Settings,
      title: 'DevOps Integration',
      description: 'Implement CI/CD pipelines and DevOps best practices in the cloud',
      price: '$1,999',
      features: ['CI/CD setup', 'Container orchestration', 'Monitoring tools', 'Automation scripts', 'Team training']
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Optimize cloud costs and implement cost management strategies',
      price: '$999',
      features: ['Cost analysis', 'Resource optimization', 'Reserved instances', 'Auto-scaling', 'Budget alerts']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks',
      deliverables: ['Infrastructure audit', 'Migration strategy', 'Risk assessment', 'Timeline planning']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Design optimal cloud architecture tailored to your business needs',
      duration: '1-2 weeks',
      deliverables: ['Cloud architecture design', 'Security framework', 'Scalability plan', 'Integration strategy']
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Execute the migration with minimal downtime and maximum data integrity',
      duration: '2-4 weeks',
      deliverables: ['Data migration', 'Application deployment', 'DNS configuration', 'Testing & validation']
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Optimize performance and provide ongoing support and monitoring',
      duration: 'Ongoing',
      deliverables: ['Performance tuning', 'Cost optimization', '24/7 monitoring', 'Technical support']
    }
  ];

  const pricingTiers = [
    {
      name: 'Small Business',
      price: '$4,999',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic migration',
        'Email support',
        '30-day warranty',
        'Basic monitoring',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      description: 'Comprehensive migration for growing companies',
      features: [
        'Up to 50 servers',
        'Advanced migration',
        'Priority support',
        '90-day warranty',
        'Advanced monitoring',
        'Training included',
        'Custom integrations',
        'Dedicated team'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited servers',
        'Custom migration',
        'Dedicated support',
        '1-year warranty',
        'Full monitoring suite',
        'Custom training',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'TechCorp Inc.',
      content: 'The cloud migration was seamless. We reduced our infrastructure costs by 40% while improving performance by 60%.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'IT Director',
      company: 'Healthcare Systems',
      content: 'Zion Tech Group made our AWS migration look easy. The team was professional and the results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'VP Engineering',
      company: 'E-commerce Platform',
      content: 'The migration to Azure was flawless. We now have better scalability and our development team is more productive.',
      rating: 5
    }
  ];

  const benefits = [
    { icon: ArrowUp, title: 'Scalability', description: 'Scale resources up or down based on demand' },
    { icon: Shield, title: 'Security', description: 'Enhanced security with enterprise-grade protection' },
    { icon: DollarSign, title: 'Cost Savings', description: 'Reduce infrastructure costs by up to 40%' },
    { icon: Zap, title: 'Performance', description: 'Improve application performance and reliability' },
    { icon: Globe, title: 'Global Access', description: 'Access your applications from anywhere in the world' },
    { icon: Settings, title: 'Automation', description: 'Automate routine tasks and maintenance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              <span>Expert Cloud Migration Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cloud Migration
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with our expert team. 
              AWS, Azure, Google Cloud - we handle it all with zero downtime and maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process that ensures successful cloud migration with minimal risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <div className="text-sm text-cyan-400 font-medium mb-4">Duration: {step.duration}</div>
                <ul className="space-y-2">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Migration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cloud migration solutions for all major cloud providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Migration Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that fits your business size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${
                tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses successfully migrate to the cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free cloud migration assessment and discover how we can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free assessment • No obligation • Expert recommendations
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigration;