'use client';
import React, { useState } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, Settings, Calendar, FileText, MessageSquare, Star, Award, Clock, DollarSign, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';

export default function AIServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      category: 'AI Automation & Process Intelligence',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Pro',
          description: 'Next-generation process automation with intelligent decision-making capabilities',
          features: ['Smart Process Mining', 'Intelligent Task Routing', 'Predictive Process Optimization', 'Real-time Monitoring', 'Self-healing Workflows'],
          pricing: 'Starting at $8,500/month',
          roi: '300-500% ROI',
          popular: true,
          icon: '⚡',
          benefits: ['70% process efficiency gain', '90% error reduction', 'Unlimited workflow complexity']
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with emotional intelligence and context awareness',
          features: ['Emotional AI Analysis', 'Multi-modal Support', 'Proactive Issue Detection', 'Knowledge Graph Integration', 'Human-AI Collaboration'],
          pricing: 'Starting at $5,500/month',
          roi: '250-450% ROI',
          popular: true,
          icon: '🤖',
          benefits: ['95% customer satisfaction', '60% faster resolution', '24/7 multilingual support']
        },
        {
          name: 'AI Sales Intelligence Platform',
          description: 'Revolutionary sales automation with predictive insights and behavioral analysis',
          features: ['Buyer Intent Prediction', 'Dynamic Pricing AI', 'Sales Coaching AI', 'Revenue Forecasting', 'Customer Journey Mapping'],
          pricing: 'Starting at $7,200/month',
          roi: '400-700% ROI',
          popular: false,
          icon: '📈',
          benefits: ['45% increase in close rates', '30% shorter sales cycles', 'Predictive sales insights']
        },
        {
          name: 'AI Document Intelligence',
          description: 'Advanced document processing with natural language understanding and extraction',
          features: ['OCR with 99.9% Accuracy', 'Smart Data Extraction', 'Contract Analysis', 'Compliance Checking', 'Automated Classification'],
          pricing: 'Starting at $4,800/month',
          roi: '200-400% ROI',
          popular: false,
          icon: '📄',
          benefits: ['90% time savings', '99.9% accuracy', 'Automated compliance']
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Advanced predictive modeling with real-time insights and scenario planning',
          features: ['Machine Learning Models', 'Real-time Predictions', 'Scenario Analysis', 'Anomaly Detection', 'Automated Insights'],
          pricing: 'Starting at $9,500/month',
          roi: '500-900% ROI',
          popular: true,
          icon: '🔮',
          benefits: ['95% prediction accuracy', 'Real-time insights', 'Automated decision support']
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Comprehensive BI platform with natural language querying and automated reporting',
          features: ['Natural Language Queries', 'Automated Report Generation', 'Interactive Dashboards', 'Data Storytelling', 'Collaborative Analytics'],
          pricing: 'Starting at $8,200/month',
          roi: '400-800% ROI',
          popular: true,
          icon: '📊',
          benefits: ['80% faster insights', 'Natural language queries', 'Automated reporting']
        },
        {
          name: 'AI Market Intelligence',
          description: 'Real-time market analysis and competitive intelligence with trend prediction',
          features: ['Market Trend Analysis', 'Competitor Monitoring', 'Sentiment Analysis', 'Price Intelligence', 'Opportunity Detection'],
          pricing: 'Starting at $6,800/month',
          roi: '300-600% ROI',
          popular: false,
          icon: '🌐',
          benefits: ['Real-time market insights', 'Competitive advantage', 'Trend prediction']
        },
        {
          name: 'AI Performance Optimization',
          description: 'Intelligent performance monitoring and optimization recommendations',
          features: ['Performance Benchmarking', 'Optimization Recommendations', 'Resource Allocation', 'Efficiency Metrics', 'Continuous Improvement'],
          pricing: 'Starting at $5,500/month',
          roi: '250-500% ROI',
          popular: false,
          icon: '⚙️',
          benefits: ['30% performance improvement', 'Automated optimization', 'Continuous monitoring']
        }
      ]
    },
    {
      category: 'AI Content & Creative Intelligence',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Studio Pro',
          description: 'Complete content creation suite with brand voice consistency and multi-format generation',
          features: ['Brand Voice Training', 'Multi-format Generation', 'SEO Optimization', 'Plagiarism Detection', 'Content Performance Analytics'],
          pricing: 'Starting at $4,200/month',
          roi: '200-500% ROI',
          popular: true,
          icon: '✍️',
          benefits: ['10x content production', 'Brand consistency', 'SEO-optimized content']
        },
        {
          name: 'AI Video Production Suite',
          description: 'Automated video creation with AI-powered editing and personalization',
          features: ['Script Generation', 'Auto Video Editing', 'Voice Synthesis', 'Personalization Engine', 'Multi-platform Optimization'],
          pricing: 'Starting at $7,800/month',
          roi: '300-700% ROI',
          popular: true,
          icon: '🎬',
          benefits: ['Professional videos in minutes', 'Personalized content', 'Multi-platform ready']
        },
        {
          name: 'AI Design Intelligence',
          description: 'Advanced design automation with brand consistency and creative optimization',
          features: ['Brand Guideline Compliance', 'Creative Optimization', 'A/B Testing', 'Template Generation', 'Design Analytics'],
          pricing: 'Starting at $6,500/month',
          roi: '250-600% ROI',
          popular: false,
          icon: '🎨',
          benefits: ['Consistent brand design', 'Creative optimization', 'Automated A/B testing']
        },
        {
          name: 'AI Marketing Automation',
          description: 'Intelligent marketing campaigns with cross-channel optimization and personalization',
          features: ['Cross-channel Orchestration', 'Personalization Engine', 'Campaign Optimization', 'Customer Journey Mapping', 'ROI Tracking'],
          pricing: 'Starting at $8,900/month',
          roi: '400-800% ROI',
          popular: false,
          icon: '📢',
          benefits: ['50% higher engagement', 'Cross-channel optimization', 'Personalized campaigns']
        }
      ]
    },
    {
      category: 'AI Industry-Specific Solutions',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Intelligence',
          description: 'Advanced medical AI with diagnostic support and treatment optimization',
          features: ['Medical Image Analysis', 'Diagnostic Support', 'Treatment Recommendations', 'Drug Discovery', 'Patient Risk Assessment'],
          pricing: 'Starting at $18,500/month',
          roi: '500-1000% ROI',
          popular: true,
          icon: '🏥',
          benefits: ['40% faster diagnosis', '25% accuracy improvement', 'Life-saving insights']
        },
        {
          name: 'AI Financial Intelligence',
          description: 'Comprehensive fintech solutions with fraud detection and algorithmic trading',
          features: ['Real-time Fraud Detection', 'Algorithmic Trading', 'Risk Assessment', 'Credit Scoring', 'Regulatory Compliance'],
          pricing: 'Starting at $15,200/month',
          roi: '400-900% ROI',
          popular: true,
          icon: '💰',
          benefits: ['99.9% fraud detection', 'Real-time risk assessment', 'Regulatory compliance']
        },
        {
          name: 'AI Manufacturing Intelligence',
          description: 'Smart manufacturing with predictive maintenance and quality optimization',
          features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management', 'Safety Monitoring'],
          pricing: 'Starting at $12,800/month',
          roi: '350-700% ROI',
          popular: false,
          icon: '🏭',
          benefits: ['30% reduction in downtime', '25% quality improvement', 'Predictive maintenance']
        },
        {
          name: 'AI Retail Intelligence',
          description: 'E-commerce optimization with personalized shopping and inventory management',
          features: ['Personalized Recommendations', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Behavior Analysis', 'Omnichannel Integration'],
          pricing: 'Starting at $9,500/month',
          roi: '300-600% ROI',
          popular: false,
          icon: '🛍️',
          benefits: ['35% increase in sales', 'Personalized shopping', 'Inventory optimization']
        }
      ]
    },
    {
      category: 'AI Innovation & Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        {
          name: 'AI Quantum Computing Solutions',
          description: 'Cutting-edge quantum AI for complex optimization and cryptography',
          features: ['Quantum Machine Learning', 'Optimization Problems', 'Cryptography', 'Simulation', 'Quantum Algorithms'],
          pricing: 'Starting at $25,000/month',
          roi: '800-1500% ROI',
          popular: false,
          icon: '⚛️',
          benefits: ['Exponential speedup', 'Complex optimization', 'Future-proof technology']
        },
        {
          name: 'AI Edge Computing Platform',
          description: 'Real-time AI processing at the edge with minimal latency',
          features: ['Edge AI Processing', 'Real-time Inference', 'Offline Capability', 'Low Latency', 'Resource Optimization'],
          pricing: 'Starting at $11,500/month',
          roi: '400-800% ROI',
          popular: false,
          icon: '📡',
          benefits: ['Ultra-low latency', 'Offline processing', 'Real-time insights']
        },
        {
          name: 'AI Blockchain Intelligence',
          description: 'Blockchain AI solutions for smart contracts and decentralized applications',
          features: ['Smart Contract AI', 'DeFi Optimization', 'NFT Intelligence', 'Blockchain Analytics', 'Decentralized AI'],
          pricing: 'Starting at $14,200/month',
          roi: '500-1000% ROI',
          popular: false,
          icon: '🔗',
          benefits: ['Decentralized AI', 'Smart contract optimization', 'Blockchain analytics']
        },
        {
          name: 'AI Autonomous Systems',
          description: 'Self-managing AI systems with autonomous decision-making capabilities',
          features: ['Autonomous Operations', 'Self-healing Systems', 'Adaptive Learning', 'Resource Management', 'Continuous Optimization'],
          pricing: 'Starting at $20,000/month',
          roi: '600-1200% ROI',
          popular: false,
          icon: '🤖',
          benefits: ['Fully autonomous operation', 'Self-healing systems', 'Continuous optimization']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our clients see an average ROI of 300% within the first year',
      stat: '300%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 90% with intelligent automation',
      stat: '90%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower operational costs by 70% through process optimization',
      stat: '70%'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee',
      stat: '99.9%'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We analyze your business processes and identify AI opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your needs',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'Build and integrate AI solutions into your existing systems',
      duration: '4-12 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '2-4 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Support',
      description: 'Deploy solutions and provide ongoing support and monitoring',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'Manual data processing taking 40 hours per week',
      solution: 'AI-powered data processing automation',
      results: ['95% time reduction', '300% ROI', 'Zero errors'],
      image: '/images/case-studies/techcorp.jpg'
    },
    {
      company: 'HealthPlus Medical',
      industry: 'Healthcare',
      challenge: 'Patient diagnosis accuracy and speed',
      solution: 'AI diagnostic assistance system',
      results: ['40% faster diagnosis', '25% accuracy improvement', '200% ROI'],
      image: '/images/case-studies/healthplus.jpg'
    },
    {
      company: 'FinanceFlow Bank',
      industry: 'Banking',
      challenge: 'Fraud detection and risk assessment',
      solution: 'AI fraud detection and risk analysis',
      results: ['99.5% fraud detection', '60% false positive reduction', '400% ROI'],
      image: '/images/case-studies/financeflow.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From automation to analytics, 
              we deliver intelligent systems that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-3xl">{service.icon}</span>
                        <h4 className="text-xl font-bold text-white">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}