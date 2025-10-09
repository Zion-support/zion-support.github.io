'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Brain, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Shield, Globe, Code } from 'lucide-react';

const DevOpsCICDPage: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'CI/CD Pipeline',
      description: 'Automated continuous integration and deployment pipelines for faster releases.',
      benefits: ['Automated builds', 'Automated testing', 'Automated deployment']
    },
    {
      icon: Brain,
      title: 'AI-Powered DevOps',
      description: 'AI-driven DevOps practices for intelligent automation and optimization.',
      benefits: ['Predictive scaling', 'Anomaly detection', 'Smart monitoring']
    },
    {
      icon: Target,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and scalability.',
      benefits: ['Version control', 'Reproducible environments', 'Cost optimization']
    },
    {
      icon: BarChart,
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and analytics for application performance.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Alert management']
    },
    {
      icon: Settings,
      title: 'Container Orchestration',
      description: 'Kubernetes and container orchestration for scalable deployments.',
      benefits: ['Auto-scaling', 'Load balancing', 'Service discovery']
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Security-first DevOps practices with automated security scanning.',
      benefits: ['Vulnerability scanning', 'Compliance checks', 'Security automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic DevOps',
      price: '$999',
      period: '/month',
      description: 'Essential CI/CD setup',
      features: [
        'Basic CI/CD pipeline',
        'Git integration',
        'Automated testing',
        'Email support',
        'Basic monitoring',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional DevOps',
      price: '$2,999',
      period: '/month',
      description: 'Advanced DevOps suite',
      features: [
        'Advanced CI/CD',
        'Container orchestration',
        'Infrastructure as Code',
        'Priority support',
        'Advanced monitoring',
        'Security integration',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise DevOps',
      price: '$7,999',
      period: '/month',
      description: 'Complete DevOps transformation',
      features: [
        'Full DevOps suite',
        'AI-powered automation',
        'Custom solutions',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Faster Deployments' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const tools = [
    {
      title: 'Kubernetes',
      description: 'Container orchestration and management platform.',
      icon: Globe
    },
    {
      title: 'Docker',
      description: 'Containerization platform for consistent deployments.',
      icon: Code
    },
    {
      title: 'Jenkins',
      description: 'Automated CI/CD pipeline and build automation.',
      icon: Zap
    },
    {
      title: 'Terraform',
      description: 'Infrastructure as Code for cloud resource management.',
      icon: Settings
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Professional DevOps and CI/CD services with 90% faster deployments, 99.9% uptime guarantee, and 50% cost reduction. AI-powered automation and infrastructure as code."
        keywords={['DevOps', 'CI/CD', 'continuous integration', 'continuous deployment', 'Kubernetes', 'Docker']}
        canonicalUrl="https://ziontechgroup.com/devops-cicd"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                DevOps & CI/CD Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Accelerate development with 90% faster deployments
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our comprehensive DevOps and CI/CD services help development teams 
                deliver software faster, more reliably, and with better quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Assessment</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              DevOps Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              DevOps Tools & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <tool.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              DevOps Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
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
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Accelerate Your Development?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your development process with DevOps and CI/CD
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Assessment</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevOpsCICDPage;