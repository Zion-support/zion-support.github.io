import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Zap, Shield, Clock, Users, Award, Globe, Target, Star, ArrowRight, Code, BarChart, Cloud, Database, Cpu, Eye, MessageSquare, FileText, Search, Settings, Lock, Smartphone, Monitor, Server, Network } from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      category: 'AI Automation',
      icon: Zap,
      color: 'from-yellow-600/20 to-orange-600/20',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      services: [
        {
          name: 'Workflow Automation',
          description: 'Automate repetitive tasks and streamline business processes',
          features: ['Process optimization', 'Task scheduling', 'Error reduction', 'Cost savings'],
          price: 'Starting at $2,500/month'
        },
        {
          name: 'Document Processing',
          description: 'Intelligent document analysis and data extraction',
          features: ['OCR technology', 'Data extraction', 'Classification', 'Validation'],
          price: 'Starting at $1,800/month'
        },
        {
          name: 'Email Automation',
          description: 'Smart email management and response systems',
          features: ['Auto-categorization', 'Smart replies', 'Priority sorting', 'Spam filtering'],
          price: 'Starting at $1,200/month'
        }
      ]
    },
    {
      category: 'AI Analytics',
      icon: BarChart,
      color: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      services: [
        {
          name: 'Predictive Analytics',
          description: 'Forecast trends and make data-driven decisions',
          features: ['Trend prediction', 'Risk assessment', 'Performance forecasting', 'ROI analysis'],
          price: 'Starting at $3,500/month'
        },
        {
          name: 'Customer Insights',
          description: 'Deep analysis of customer behavior and preferences',
          features: ['Behavior analysis', 'Segmentation', 'Personalization', 'Churn prediction'],
          price: 'Starting at $2,800/month'
        },
        {
          name: 'Business Intelligence',
          description: 'Comprehensive business data analysis and reporting',
          features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'KPI tracking'],
          price: 'Starting at $2,200/month'
        }
      ]
    },
    {
      category: 'AI Development',
      icon: Code,
      color: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      services: [
        {
          name: 'Custom AI Models',
          description: 'Bespoke machine learning models for your specific needs',
          features: ['Model training', 'Custom algorithms', 'Performance optimization', 'Integration'],
          price: 'Starting at $5,000/month'
        },
        {
          name: 'AI Integration',
          description: 'Seamlessly integrate AI into your existing systems',
          features: ['API development', 'System integration', 'Data migration', 'Testing'],
          price: 'Starting at $3,200/month'
        },
        {
          name: 'AI Consulting',
          description: 'Strategic AI planning and implementation guidance',
          features: ['Strategy development', 'Technology assessment', 'Implementation planning', 'Training'],
          price: 'Starting at $2,000/month'
        }
      ]
    },
    {
      category: 'AI Security',
      icon: Shield,
      color: 'from-red-600/20 to-pink-600/20',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-400',
      services: [
        {
          name: 'Threat Detection',
          description: 'AI-powered security monitoring and threat prevention',
          features: ['Real-time monitoring', 'Anomaly detection', 'Threat analysis', 'Incident response'],
          price: 'Starting at $4,500/month'
        },
        {
          name: 'Fraud Prevention',
          description: 'Advanced fraud detection and prevention systems',
          features: ['Pattern recognition', 'Risk scoring', 'Real-time alerts', 'Compliance'],
          price: 'Starting at $3,800/month'
        },
        {
          name: 'Data Protection',
          description: 'AI-driven data security and privacy protection',
          features: ['Data encryption', 'Access control', 'Privacy compliance', 'Audit trails'],
          price: 'Starting at $2,500/month'
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'AI solutions for medical diagnosis, patient care, and research',
      applications: ['Medical imaging', 'Drug discovery', 'Patient monitoring', 'Treatment optimization']
    },
    {
      name: 'Finance',
      icon: '💰',
      description: 'AI-powered financial services and risk management',
      applications: ['Algorithmic trading', 'Credit scoring', 'Fraud detection', 'Risk assessment']
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'AI-driven e-commerce optimization and customer experience',
      applications: ['Recommendation engines', 'Price optimization', 'Inventory management', 'Customer service']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'AI for production optimization and quality control',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation']
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'AI-enhanced learning and educational technology',
      applications: ['Personalized learning', 'Assessment automation', 'Content generation', 'Student analytics']
    },
    {
      name: 'Real Estate',
      icon: '🏠',
      description: 'AI solutions for property management and market analysis',
      applications: ['Property valuation', 'Market analysis', 'Lead generation', 'Virtual tours']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Our clients see an average return on investment of 300% within the first year'
    },
    {
      icon: Clock,
      title: '70% Time Savings',
      description: 'Automate repetitive tasks and free up your team for strategic work'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance built into every solution'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support and monitoring for all implementations'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '100+ successful AI implementations across various industries'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business and adapt to changing needs'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify opportunities, and define clear objectives for AI implementation.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your business goals and technical requirements.',
      icon: Target
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build and integrate custom AI solutions into your existing infrastructure with minimal disruption.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thoroughly test all AI systems and optimize performance for maximum efficiency and accuracy.',
      icon: Settings
    },
    {
      step: '05',
      title: 'Deployment & Training',
      description: 'Deploy AI solutions and provide comprehensive training for your team to ensure smooth adoption.',
      icon: Users
    },
    {
      step: '06',
      title: 'Monitoring & Support',
      description: 'Continuous monitoring, maintenance, and support to ensure optimal performance and ongoing improvements.',
      icon: Monitor
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Services - Zion Tech Group | Custom AI Solutions & Implementation"
        description="Transform your business with our comprehensive AI services. Custom AI development, automation, analytics, and security solutions. 300% ROI guarantee. Call (302) 464-0950."
        keywords="AI services, artificial intelligence solutions, AI development, AI automation, AI analytics, custom AI, machine learning, AI consulting"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Advanced <span className="text-cyan-400">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From custom AI development to intelligent automation, we deliver results that drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white">300% ROI Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-white">70% Time Savings</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white">100+ Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Our AI Services</h2>
            <p className="text-xl text-gray-300">Comprehensive AI solutions tailored to your business needs</p>
          </div>
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-2xl p-8 cyber-card">
                <div className="flex items-center mb-8">
                  <category.icon className={`w-12 h-12 ${category.textColor} mr-4`} />
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                    <p className="text-gray-300">Advanced AI solutions for modern businesses</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                      <button className="w-full cyber-button-secondary py-2">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Industry Applications</h2>
            <p className="text-xl text-gray-300">AI solutions designed for your specific industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card hover:from-cyan-600/20 hover:to-purple-600/20 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300">Proven results and exceptional value</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-300">A proven methodology for successful AI adoption</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discover how our AI services can revolutionize your operations 
            and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}