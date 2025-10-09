'use client';
import React from 'react';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Users, Award, TrendingUp, BarChart, Brain, Eye, Target, Clock, Database, Settings, Sparkles, Globe, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud',
      icon: Cloud,
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring'],
      price: 'Starting at $2,500'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure deployment and management with Terraform and Ansible',
      icon: Settings,
      features: ['Terraform automation', 'Ansible playbooks', 'GitOps workflows', 'Version control'],
      price: 'Starting at $1,800'
    },
    {
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications with Kubernetes',
      icon: Server,
      features: ['Kubernetes setup', 'Docker optimization', 'Auto-scaling', 'Service mesh'],
      price: 'Starting at $2,200'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure',
      icon: Shield,
      features: ['Security audits', 'Compliance frameworks', 'Threat monitoring', 'Access management'],
      price: 'Starting at $1,500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$1,500/month',
      description: 'Perfect for small businesses',
      features: [
        'Cloud setup & migration',
        'Basic monitoring',
        'Email support',
        'Monthly maintenance',
        'Security updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,500/month',
      description: 'Most popular for growing companies',
      features: [
        'Full cloud management',
        'Advanced monitoring',
        'Priority support',
        'Weekly maintenance',
        'Security compliance',
        'Performance optimization',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,500/month',
      description: 'For large organizations',
      features: [
        'Dedicated cloud architect',
        'Custom solutions',
        'Dedicated support',
        'Daily maintenance',
        'Advanced security',
        'Disaster recovery',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const technologies = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive cloud platform with 200+ services',
      icon: 'AWS',
      features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFormation', 'CloudWatch']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-grade cloud solutions and AI services',
      icon: 'Azure',
      features: ['Virtual Machines', 'Azure SQL', 'Azure Functions', 'Azure Monitor']
    },
    {
      name: 'Google Cloud',
      description: 'Advanced data analytics and machine learning platform',
      icon: 'GCP',
      features: ['Compute Engine', 'BigQuery', 'Cloud Functions', 'Cloud Monitoring']
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration for scalable applications',
      icon: 'K8s',
      features: ['Auto-scaling', 'Service discovery', 'Load balancing', 'Rolling updates']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'TechStart Solutions',
      role: 'CTO',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. Our performance improved by 60% and costs decreased by 30%.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'DataFlow Inc',
      role: 'Infrastructure Manager',
      content: 'Their Kubernetes expertise helped us scale from 10 to 1000+ containers seamlessly. The automation they built saves us 20 hours per week.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'SecureTech Corp',
      role: 'Security Director',
      content: 'The security audit and compliance framework they implemented helped us pass SOC 2 certification on the first try. Outstanding work!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Enterprise Cloud Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, deploy, and manage scalable cloud infrastructure with our expert team. 
              From migration to optimization, we ensure your cloud journey is seamless and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Services</h2>
            <p className="text-xl text-gray-300">End-to-end cloud infrastructure solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-blue-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Cloud Technologies We Master</h2>
            <p className="text-xl text-gray-300">Expertise across all major cloud platforms and tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Managed Cloud Services</h2>
            <p className="text-xl text-gray-300">Choose the level of support that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-blue-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600' 
                    : 'border border-blue-400 text-blue-300 hover:bg-blue-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">See what our clients say about our cloud solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
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
      <section className="py-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you build a scalable, secure, and cost-effective infrastructure that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudInfrastructurePage;