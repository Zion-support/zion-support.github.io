'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, CheckCircle, ArrowRight, Phone, Mail, Star, Award, Globe, Database, Smartphone, Settings, Lock, TrendingUp, MessageSquare, Eye, Sparkles, Cpu, HardDrive, Wifi, Server, Globe as World, Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'Machine Learning Solutions',
          description: 'Custom ML models for predictive analytics and decision-making',
          price: 'Starting at $1,500/month',
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring']
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis and language understanding',
          price: 'Starting at $1,200/month',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development']
        },
        {
          name: 'Computer Vision',
          description: 'Image and video analysis solutions for object detection and recognition',
          price: 'Starting at $1,800/month',
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition']
        },
        {
          name: 'AI Automation',
          description: 'Intelligent process automation with decision-making capabilities',
          price: 'Starting at $1,400/month',
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and support',
      services: [
        {
          name: 'Cloud Migration & Management',
          description: 'Seamless migration to AWS, Azure, or GCP with 99.9% uptime guarantee',
          price: 'Starting at $1,299/month',
          features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring']
        },
        {
          name: 'Cybersecurity',
          description: 'Advanced security solutions with threat detection and prevention',
          price: 'Starting at $1,599/month',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamlined development workflows with automated testing and deployment',
          price: 'Starting at $1,199/month',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup']
        },
        {
          name: 'Database Management',
          description: 'Database design, optimization, and management with AI-powered tuning',
          price: 'Starting at $899/month',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
        }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Ready-to-use AI-powered applications',
      services: [
        {
          name: 'AI Project Manager',
          description: 'Intelligent project planning with AI-powered resource optimization',
          price: '$99/month',
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration']
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automate your social media with AI-powered content creation',
          price: '$79/month',
          features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence']
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with AI-powered insights',
          price: '$149/month',
          features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking']
        },
        {
          name: 'AI Email Marketing',
          description: 'Transform your email marketing with AI-powered content generation',
          price: '$99/month',
          features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns']
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and goals to create a tailored solution strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a comprehensive solution architecture that aligns with your business objectives.',
      icon: Code
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations and maximum efficiency.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure peak performance.',
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Users },
    { number: '50+', label: 'Expert Engineers', icon: Award }
  ];

  const benefits = [
=======
  const additionalServices = [
>>>>>>> main
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain insights'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your critical data and systems'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your solutions up and running quickly with our proven methodologies'
    },
    {
      icon: BarChart,
      title: 'Measurable Results',
      description: 'Track performance with detailed analytics and reporting dashboards'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI and IT services including machine learning, cloud migration, cybersecurity, DevOps, and micro SAAS solutions. Expert technology services for modern businesses."
        keywords={['AI services', 'IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'machine learning', 'micro SAAS', 'technology solutions']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Comprehensive AI and IT Solutions
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From artificial intelligence and machine learning to cloud migration and cybersecurity, 
                we provide end-to-end technology solutions that transform businesses and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Service Categories
              </h2>
              <div className="space-y-16">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="cyber-card p-8">
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 neon-text">{category.title}</h3>
                        <p className="text-gray-300 text-lg">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                          <h4 className="text-xl font-bold text-white mb-3 neon-text">{service.name}</h4>
                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                          <div className="mb-4">
                            <div className={`text-lg font-bold mb-2 neon-text ${category.color}`}>{service.price}</div>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href="/contact"
                            className={`inline-flex items-center text-sm font-medium transition-all duration-300 hover:scale-105 ${category.color} border border-current hover:bg-current hover:text-slate-900 px-4 py-2 rounded-lg`}
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="container mx-auto px-4 py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                Let our expert team help you choose the right services and create a customized solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
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

export default ServicesPage;