'use client';
import React from 'react';
import { Circle, Star, ArrowRight, Brain, Zap, Shield, Cloud, Smartphone, Database, Globe, Send, BarChart3, Target, DollarSign, Clock, Activity, Lock, FileText, CreditCard, Building2, Sparkles, PieChart, CheckCircle } from 'lucide-react';

// Icon mapping for serialization
const iconMap = {
  Brain,
  Cloud,
  Shield,
  Globe,
  Zap,
  Database,
  BarChart3,
  Target,
  DollarSign,
  Activity,
  Lock,
  FileText,
  CreditCard,
  Building2,
  Sparkles,
  PieChart,
  Star,
  Clock,
  Send,
  Smartphone,
  Circle,
  ArrowRight,
  CheckCircle
};

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: 'Brain',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      services: [
        'AI Chatbots & Virtual Assistants',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation'
      ]
    },
    {
      title: 'IT Services',
      icon: 'Cloud',
      description: 'Comprehensive IT services to modernize your infrastructure and operations.',
      services: [
        'Cloud Migration & Management',
        'Cybersecurity Solutions',
        'DevOps & CI/CD',
        'Database Management',
        'Network Infrastructure',
        'IT Support & Maintenance'
      ]
    },
    {
      title: 'Security Solutions',
      icon: 'Shield',
      description: 'Advanced security solutions to protect your business from cyber threats.',
      services: [
        'Threat Detection & Prevention',
        'Security Audits & Assessments',
        'Compliance Management',
        'Identity & Access Management',
        'Data Protection & Encryption',
        'Security Monitoring'
      ]
    },
    {
      title: 'Global Services',
      icon: 'Globe',
      description: 'Worldwide services to support your global business operations.',
      services: [
        'International Deployment',
        'Multi-language Support',
        'Global Compliance',
        'Cross-border Data Management',
        'Regional Support Centers',
        'Cultural Adaptation'
      ]
    },
    {
      title: 'Automation',
      icon: 'Zap',
      description: 'Intelligent automation solutions to streamline your business processes.',
      services: [
        'Process Automation',
        'Workflow Optimization',
        'Smart Scheduling',
        'Automated Reporting',
        'Data Processing',
        'System Integration'
      ]
    },
    {
      title: 'Data Analytics',
      icon: 'Database',
      description: 'Powerful data analytics solutions to drive informed business decisions.',
      services: [
        'Business Intelligence',
        'Data Visualization',
        'Predictive Modeling',
        'Real-time Analytics',
        'Data Warehousing',
        'Performance Metrics'
      ]
    }
  ];

  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and reporting',
      icon: 'BarChart3'
    },
    {
      title: 'Targeted Solutions',
      description: 'Customized solutions for your specific needs',
      icon: 'Target'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce costs while improving efficiency',
      icon: 'DollarSign'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization',
      icon: 'Activity'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security for your data',
      icon: 'Lock'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation and support',
      icon: 'FileText'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: 'CheckCircle' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: 'Clock' },
    { number: '24/7', label: 'Support Available', icon: 'Send' },
    { number: '50+', label: 'Countries Served', icon: 'Globe' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <IconComponent className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;