'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, CheckCircle, DollarSign, Users, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, TrendingUp, Brain, Target, BarChart, MessageSquare, Eye, Sparkles, Database, Cpu, Server, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CloudMigrationServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'Comprehensive Cloud Strategy',
      description: 'End-to-end cloud migration planning with assessment, architecture design, and implementation roadmap',
      benefits: ['Cloud readiness assessment', 'Architecture design', 'Migration planning', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Security-First Migration',
      description: 'Enterprise-grade security implementation with compliance frameworks and data protection protocols',
      benefits: ['Zero-downtime migration', 'Data encryption', 'Compliance adherence', 'Security monitoring']
    },
    {
      icon: Zap,
      title: 'Automated Migration Tools',
      description: 'Advanced automation tools and scripts to ensure seamless, error-free cloud migration',
      benefits: ['Automated migration', 'Error reduction', 'Faster deployment', 'Consistent results']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Post-migration optimization and monitoring to ensure optimal cloud performance and cost efficiency',
      benefits: ['Performance tuning', 'Cost monitoring', 'Resource optimization', 'Continuous improvement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Up to 10 servers',
        'Basic cloud assessment',
        'Standard migration',
        'Email support',
        'AWS/Azure setup',
        'Basic monitoring',
        '30-day support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for growing businesses with complex infrastructure',
      features: [
        'Up to 50 servers',
        'Comprehensive assessment',
        'Advanced migration tools',
        'Priority support',
        'Multi-cloud setup',
        'Advanced monitoring',
        '90-day support',
        'Training & documentation',
        'Performance optimization',
        'Security hardening'
      ],
      popular: true
    },
    {
      name: 'Custom Enterprise',
      price: 'Custom',
      period: '/project',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited servers',
        'Custom assessment',
        'White-glove migration',
        '24/7 dedicated support',
        'Custom cloud architecture',
        'Advanced security',
        '1-year support',
        'Custom training',
        'Dedicated team',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', icon: '☁️', description: 'Leading cloud platform' },
    { name: 'Microsoft Azure', icon: '🔵', description: 'Enterprise cloud solution' },
    { name: 'Google Cloud Platform', icon: '🔍', description: 'AI-powered cloud services' },
    { name: 'IBM Cloud', icon: '🔷', description: 'Hybrid cloud solutions' },
    { name: 'Oracle Cloud', icon: '🔶', description: 'Database-focused cloud' },
    { name: 'Alibaba Cloud', icon: '🟡', description: 'Global cloud platform' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. The cost savings of 40% and improved performance exceeded our expectations.',
      rating: 5,
      savings: '40% cost reduction'
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director, GlobalCorp',
      content: 'The migration to Azure was seamless and secure. Our team productivity increased by 50% with the new cloud infrastructure and tools.',
      rating: 5,
      improvement: '50% productivity increase'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, StartupXYZ',
      content: 'Moving to Google Cloud Platform transformed our business. The AI capabilities and scalability helped us grow 300% in the first year.',
      rating: 5,
      growth: '300% business growth'
    }
  ];

  const migrationSteps = [
    {
      step: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and cloud readiness',
      duration: '1-2 weeks',
      deliverables: ['Infrastructure audit', 'Cloud strategy', 'Migration roadmap']
    },
    {
      step: 'Architecture Design',
      description: 'Design optimal cloud architecture for your specific needs',
      duration: '1-2 weeks',
      deliverables: ['Cloud architecture', 'Security design', 'Cost optimization plan']
    },
    {
      step: 'Migration Execution',
      description: 'Execute the migration with minimal downtime and maximum security',
      duration: '2-4 weeks',
      deliverables: ['Live migration', 'Data transfer', 'Application deployment']
    },
    {
      step: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support',
      duration: 'Ongoing',
      deliverables: ['Performance tuning', 'Cost monitoring', '24/7 support']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Migrate online stores to cloud for better scalability and performance',
      benefits: ['Auto-scaling', 'Global CDN', 'High availability', 'Cost optimization']
    },
    {
      industry: 'Healthcare',
      description: 'Secure cloud migration for healthcare data with HIPAA compliance',
      benefits: ['HIPAA compliance', 'Data security', 'Backup & recovery', 'Audit trails']
    },
    {
      industry: 'Finance',
      description: 'Bank-grade cloud migration with advanced security and compliance',
      benefits: ['SOC 2 compliance', 'Encryption', 'Multi-region setup', 'Disaster recovery']
    },
    {
      industry: 'Manufacturing',
      description: 'IoT and data analytics cloud migration for smart manufacturing',
      benefits: ['IoT integration', 'Real-time analytics', 'Edge computing', 'Predictive maintenance']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - AWS, Azure, GCP Migration Experts | Zion Tech Group"
        description="Expert cloud migration services for AWS, Azure, and GCP. Achieve 40% cost reduction, zero downtime migration, and enterprise-grade security. Get your free cloud assessment today."
        keywords={['cloud migration', 'AWS migration', 'Azure migration', 'GCP migration', 'cloud consulting', 'infrastructure migration']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                Expert Cloud Migration Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                Cloud Migration Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Expert cloud migration services for AWS, Azure, and GCP. Achieve 40% cost reduction, 
                zero downtime migration, and enterprise-grade security with our proven methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Assessment
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Average Cost Reduction</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
                <div className="text-gray-300">Successful Migrations</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud migration solutions with enterprise-grade security and performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Our Proven Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to ensure successful cloud migration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Step {index + 1}</h3>
                    <span className="text-cyan-400 font-bold text-sm">{step.duration}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">{step.step}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{step.description}</p>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 mr-2 text-cyan-400 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Multi-Cloud Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Certified experts in all major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3">{provider.icon}</div>
                  <div className="text-sm text-white font-medium mb-1">{provider.name}</div>
                  <div className="text-xs text-gray-400">{provider.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored cloud migration solutions for different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that fits your infrastructure needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in Cloud Migration ${plan.name} Package`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 200+ successful cloud migrations with proven results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">
                      {testimonial.savings || testimonial.improvement || testimonial.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get your free cloud assessment and discover how much you can save
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Free Cloud Migration Assessment Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CloudMigrationServicesPage;