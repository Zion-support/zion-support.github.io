'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, AlertCircle, CheckSquare, Timer, DollarSign, PieChart, Activity, Cloud, Server, Database, Lock, ArrowUp, ArrowDown, RefreshCw, Settings, Monitor } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments',
      benefits: ['Vendor-agnostic approach', 'Cost optimization', 'Risk mitigation', 'Flexibility & scalability']
    },
    {
      icon: Shield,
      title: 'Security-First Migration',
      description: 'Bank-level security throughout the migration process with zero-downtime deployment',
      benefits: ['End-to-end encryption', 'Compliance adherence', 'Zero data loss', 'Audit trail maintenance']
    },
    {
      icon: RefreshCw,
      title: 'Automated Migration',
      description: 'AI-powered migration automation with intelligent workload assessment and optimization',
      benefits: ['90% automation rate', 'Faster migration', 'Reduced errors', 'Cost savings']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of cloud resources for maximum efficiency',
      benefits: ['Real-time monitoring', 'Auto-scaling', 'Cost optimization', 'Performance tuning']
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees',
      benefits: ['Zero-downtime migration', 'Data validation', 'Backup & recovery', 'Performance optimization']
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards and implement robust governance frameworks',
      benefits: ['GDPR compliance', 'SOC 2 certification', 'HIPAA compliance', 'Governance frameworks']
    }
  ];

  const migrationTypes = [
    {
      name: 'Lift & Shift',
      description: 'Move applications to cloud with minimal changes',
      icon: ArrowUp,
      benefits: ['Fastest migration', 'Minimal risk', 'Quick ROI', 'Preserve existing architecture']
    },
    {
      name: 'Replatforming',
      description: 'Optimize applications for cloud-native features',
      icon: RefreshCw,
      benefits: ['Cloud optimization', 'Better performance', 'Cost reduction', 'Enhanced scalability']
    },
    {
      name: 'Refactoring',
      description: 'Completely redesign applications for cloud',
      icon: Settings,
      benefits: ['Maximum cloud benefits', 'Modern architecture', 'Best performance', 'Future-proof design']
    },
    {
      name: 'Hybrid Cloud',
      description: 'Combine on-premises and cloud infrastructure',
      icon: Server,
      benefits: ['Flexibility', 'Gradual migration', 'Risk mitigation', 'Cost control']
    },
    {
      name: 'Multi-Cloud',
      description: 'Distribute workloads across multiple cloud providers',
      icon: Globe,
      benefits: ['Vendor independence', 'Risk distribution', 'Best-of-breed services', 'Cost optimization']
    },
    {
      name: 'Cloud-Native',
      description: 'Build new applications using cloud-native technologies',
      icon: Sparkles,
      benefits: ['Microservices architecture', 'Containerization', 'DevOps integration', 'Auto-scaling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$5,000',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Infrastructure audit',
        'Workload analysis',
        'Cost estimation',
        'Migration roadmap',
        'Risk assessment',
        'Recommendations report'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$25,000',
      period: 'per project',
      description: 'Complete migration for small to medium workloads',
      features: [
        'Up to 50 servers',
        'Database migration',
        'Application migration',
        'Security implementation',
        'Testing & validation',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'per project',
      description: 'Large-scale enterprise migration with custom requirements',
      features: [
        'Unlimited servers',
        'Custom architecture',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Mark Thompson',
      role: 'CTO',
      company: 'Financial Services Inc.',
      content: 'Cloud migration services reduced our infrastructure costs by 40% and improved performance by 60%. Excellent work!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Healthcare Solutions',
      content: 'Zero-downtime migration with complete data integrity. Our business never missed a beat during the transition.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'VP of Engineering',
      company: 'E-commerce Platform',
      content: 'The automated migration process was flawless. We saved months of manual work and achieved 99.9% uptime.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Server, value: '500+', label: 'Servers Migrated' },
    { icon: Database, value: '100+', label: 'Databases Migrated' },
    { icon: TrendingUp, value: '40%', label: 'Average Cost Reduction' },
    { icon: Clock, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero-downtime deployment, security-first approach, and automated migration. Reduce costs by 40%. Starting at $5,000." />
        <meta name="keywords" content="cloud migration, aws migration, azure migration, google cloud migration, cloud consulting, infrastructure migration" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Cloud Migration
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Cloud Migration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Seamlessly migrate your infrastructure to the cloud with our expert team. Zero-downtime deployment, 
            security-first approach, and automated migration processes. Reduce costs by 40% while improving performance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Cloud Migration Services Consultation"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Migration Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Migration Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} cyber-card`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Cloud Migration Services - ${plan.name}`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses that have successfully migrated to the cloud with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigrationServicesPage;