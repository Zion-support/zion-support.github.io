import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon, Eye, Bot, Cpu as AI, Sparkles, Target as Focus, Layers, Workflow } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      icon: Brain,
      price: 2500,
      period: 'month',
      features: [
        'Custom Model Development',
        'Predictive Analytics',
        'Pattern Recognition',
        'Model Training & Optimization',
        'Real-time Inference',
        'A/B Testing',
        'Performance Monitoring',
        'Continuous Learning'
      ],
      category: 'Core AI',
      popular: true,
      savings: '$30,000/year vs ML engineers'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: MessageCircle,
      price: 1800,
      period: 'month',
      features: [
        'Text Analysis & Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Chatbot Development',
        'Document Processing',
        'Voice Recognition',
        'Content Generation',
        'Language Modeling'
      ],
      category: 'Core AI',
      popular: true,
      savings: '$20,000/year vs NLP specialists'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual understanding.',
      icon: Eye,
      price: 2200,
      period: 'month',
      features: [
        'Object Detection & Recognition',
        'Image Classification',
        'Facial Recognition',
        'Video Analysis',
        'Medical Imaging',
        'Quality Inspection',
        'Augmented Reality',
        'Real-time Processing'
      ],
      category: 'Core AI',
      savings: '$25,000/year vs CV engineers'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: Workflow,
      price: 1500,
      period: 'month',
      features: [
        'Process Discovery',
        'Workflow Automation',
        'Decision Automation',
        'Exception Handling',
        'Process Optimization',
        'ROI Tracking',
        'Change Management',
        'Continuous Improvement'
      ],
      category: 'Automation',
      popular: true,
      savings: '$18,000/year vs process consultants'
    },
    {
      id: 'ai-analytics',
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics platform with AI insights, predictions, and automated reporting.',
      icon: BarChart,
      price: 1999,
      period: 'month',
      features: [
        'Predictive Analytics',
        'Anomaly Detection',
        'Trend Analysis',
        'Automated Insights',
        'Custom Dashboards',
        'Real-time Alerts',
        'Data Visualization',
        'Performance Metrics'
      ],
      category: 'Analytics',
      savings: '$24,000/year vs data scientists'
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      icon: Bot,
      price: 1200,
      period: 'month',
      features: [
        'Natural Conversations',
        'Context Understanding',
        'Multi-language Support',
        'Integration APIs',
        'Learning Capabilities',
        'Human Handoff',
        'Analytics & Insights',
        'Custom Training'
      ],
      category: 'Conversational AI',
      popular: true,
      savings: '$15,000/year vs customer service staff'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and multimedia generation.',
      icon: FileText,
      price: 899,
      period: 'month',
      features: [
        'Text Generation',
        'Image Creation',
        'Video Production',
        'Audio Generation',
        'Content Optimization',
        'Brand Voice Training',
        'Multi-language Support',
        'Quality Control'
      ],
      category: 'Content AI',
      savings: '$12,000/year vs content creators'
    },
    {
      id: 'ai-recommendation',
      name: 'AI Recommendation Systems',
      description: 'Personalized recommendation engines that increase engagement and drive conversions.',
      icon: Target,
      price: 1600,
      period: 'month',
      features: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-based Filtering',
        'Real-time Updates',
        'A/B Testing',
        'Performance Tracking',
        'Multi-channel Support',
        'Custom Algorithms'
      ],
      category: 'Personalization',
      savings: '$20,000/year vs recommendation specialists'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud detection systems that identify suspicious activities in real-time.',
      icon: Shield,
      price: 2100,
      period: 'month',
      features: [
        'Real-time Detection',
        'Pattern Recognition',
        'Risk Scoring',
        'False Positive Reduction',
        'Adaptive Learning',
        'Compliance Reporting',
        'Multi-channel Monitoring',
        'Alert Management'
      ],
      category: 'Security AI',
      savings: '$25,000/year vs fraud analysts'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-powered demand forecasting and inventory management.',
      icon: Layers,
      price: 2800,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Optimization',
        'Supplier Analysis',
        'Risk Assessment',
        'Cost Optimization',
        'Real-time Monitoring',
        'Predictive Maintenance'
      ],
      category: 'Operations AI',
      savings: '$35,000/year vs supply chain consultants'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis, treatment planning, and patient care optimization.',
      icon: Activity,
      price: 3500,
      period: 'month',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Planning',
        'Drug Discovery',
        'Patient Monitoring',
        'Clinical Decision Support',
        'Compliance Management',
        'Research Analytics'
      ],
      category: 'Healthcare AI',
      savings: '$50,000/year vs medical specialists'
    },
    {
      id: 'ai-finance',
      name: 'AI Financial Services',
      description: 'AI-powered financial solutions for trading, risk management, and customer service.',
      icon: DollarSign,
      price: 3200,
      period: 'month',
      features: [
        'Algorithmic Trading',
        'Risk Assessment',
        'Credit Scoring',
        'Fraud Prevention',
        'Customer Insights',
        'Regulatory Compliance',
        'Portfolio Optimization',
        'Market Analysis'
      ],
      category: 'FinTech AI',
      savings: '$40,000/year vs financial analysts'
    }
  ];

  const categories = [
    { name: 'Core AI', icon: Brain, count: 3 },
    { name: 'Automation', icon: Workflow, count: 1 },
    { name: 'Analytics', icon: BarChart, count: 1 },
    { name: 'Conversational AI', icon: Bot, count: 1 },
    { name: 'Content AI', icon: FileText, count: 1 },
    { name: 'Personalization', icon: Target, count: 1 },
    { name: 'Security AI', icon: Shield, count: 1 },
    { name: 'Operations AI', icon: Layers, count: 1 },
    { name: 'Healthcare AI', icon: Activity, count: 1 },
    { name: 'FinTech AI', icon: DollarSign, count: 1 }
  ];

  const pricingPlans = [
    {
      name: 'AI Starter',
      price: 999,
      period: 'month',
      description: 'Essential AI services for small businesses',
      features: [
        'Basic ML Models',
        'Simple Chatbot',
        'Content Generation',
        'Basic Analytics',
        'Email Support',
        'Standard Templates'
      ],
      popular: false
    },
    {
      name: 'AI Professional',
      price: 2499,
      period: 'month',
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Custom ML Models',
        'Advanced NLP',
        'Computer Vision',
        'Process Automation',
        'AI Analytics',
        'Priority Support',
        'Custom Training',
        'API Access'
      ],
      popular: true
    },
    {
      name: 'AI Enterprise',
      price: 4999,
      period: 'month',
      description: 'Full-scale AI solutions for large organizations',
      features: [
        'All Professional Features',
        'Custom AI Development',
        'Dedicated AI Team',
        'Advanced Security',
        'Compliance Management',
        'SLA Guarantee',
        'Strategic Consulting',
        'White-label Solutions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence. From machine learning to automation, we deliver AI solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Process Automation</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Client Savings</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <category.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  {service.savings && (
                    <p className="text-green-400 text-sm mt-1">{service.savings}</p>
                  )}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full cyber-button text-center">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your AI Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge AI</h3>
              <p className="text-gray-300">Latest AI technologies and algorithms for maximum performance and accuracy.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and deployment of AI solutions to start seeing results fast.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI with measurable business impact and cost savings.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all AI solutions and data.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">World-class AI engineers and data scientists with proven track records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts assess your business and recommend the best AI solutions for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free AI assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
