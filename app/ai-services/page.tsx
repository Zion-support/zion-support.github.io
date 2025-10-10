'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Stethoscope,
  Truck,
  Cpu,
  Rocket,
  Scale,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    // Core AI Services
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Machine Learning Models',
        'Data Visualization',
        'Automated Reporting',
        'Anomaly Detection',
        'Performance Optimization'
      ],
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      users: '2,500+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '40% faster insights',
        'Real-time processing',
        'Custom dashboards',
        'Predictive accuracy 95%'
      ],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 2,
      name: 'AI Workflow Automation Suite',
      description: 'Intelligent business process automation with AI-powered decision making and workflow optimization',
      icon: Zap,
      features: [
        'Visual Workflow Builder',
        'AI Decision Making',
        'Process Optimization',
        'Error Handling',
        'Performance Analytics',
        'Integration Hub',
        'Custom Triggers',
        'Automated Notifications'
      ],
      category: 'Automation',
      popular: true,
      rating: 4.9,
      users: '3,200+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        '60% time savings',
        'Zero-error automation',
        'Visual workflow design',
        'Smart decision making'
      ],
      link: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    {
      id: 3,
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security solutions with AI-powered threat detection, prevention, and response',
      icon: Shield,
      features: [
        'Threat Detection',
        'Anomaly Analysis',
        'Automated Response',
        'Security Monitoring',
        'Incident Management',
        'Compliance Tracking',
        'Risk Assessment',
        'Forensic Analysis'
      ],
      category: 'Security',
      popular: true,
      rating: 4.9,
      users: '1,800+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '99.9% threat detection',
        'Real-time monitoring',
        'Automated response',
        'Zero false positives'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 4,
      name: 'AI Content Generation Studio',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization tools',
      icon: FileText,
      features: [
        'Multi-format Creation',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Templates',
        'Plagiarism Detection',
        'Performance Analytics',
        'Multi-language Support',
        'Collaborative Editing'
      ],
      category: 'Content',
      popular: true,
      rating: 4.7,
      users: '4,100+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $179/mo',
      capabilities: [
        '10x faster content creation',
        'SEO-optimized output',
        'Brand consistency',
        'Multi-language support'
      ],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      id: 5,
      name: 'AI Customer Support Suite',
      description: 'Intelligent customer service platform with AI chatbots, sentiment analysis, and automated ticket routing',
      icon: Users,
      features: [
        'AI Chatbots',
        'Sentiment Analysis',
        'Ticket Routing',
        'Knowledge Base',
        'Multi-channel Support',
        'Performance Analytics',
        'Custom Training',
        'Integration APIs'
      ],
      category: 'Support',
      popular: true,
      rating: 4.8,
      users: '2,900+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        '24/7 availability',
        '95% resolution rate',
        'Multi-language support',
        'Sentiment analysis'
      ],
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: 6,
      name: 'AI Healthcare Solutions',
      description: 'Advanced medical AI platform with diagnostic assistance, treatment recommendations, and patient monitoring',
      icon: Stethoscope,
      features: [
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Patient Monitoring',
        'Medical Imaging Analysis',
        'Drug Interaction Check',
        'Symptom Analysis',
        'Clinical Decision Support',
        'HIPAA Compliance'
      ],
      category: 'Healthcare',
      popular: true,
      rating: 4.9,
      users: '800+',
      color: 'from-teal-500 to-green-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '90% diagnostic accuracy',
        'HIPAA compliant',
        'Real-time monitoring',
        'Treatment optimization'
      ],
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      id: 7,
      name: 'AI Financial Platform',
      description: 'Comprehensive financial AI solution with fraud detection, risk assessment, and automated trading',
      icon: Target,
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Automated Trading',
        'Portfolio Optimization',
        'Market Analysis',
        'Compliance Monitoring',
        'Real-time Alerts',
        'Predictive Modeling'
      ],
      category: 'Finance',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '99.8% fraud detection',
        'Real-time risk assessment',
        'Automated trading',
        'Portfolio optimization'
      ],
      link: 'https://ziontechgroup.com/ai-financial'
    },
    {
      id: 8,
      name: 'AI Computer Vision Platform',
      description: 'Advanced image and video analysis with object detection, facial recognition, and visual search',
      icon: Globe,
      features: [
        'Object Detection',
        'Facial Recognition',
        'Visual Search',
        'Image Classification',
        'Video Analysis',
        'OCR Processing',
        'Quality Assessment',
        'Custom Model Training'
      ],
      category: 'Computer Vision',
      popular: true,
      rating: 4.7,
      users: '2,200+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $249/mo',
      capabilities: [
        '95% accuracy rate',
        'Real-time processing',
        'Custom model training',
        'Multi-format support'
      ],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: 9,
      name: 'AI Machine Learning Platform',
      description: 'Complete ML platform with model training, deployment, and monitoring capabilities',
      icon: Brain,
      features: [
        'Model Training',
        'AutoML',
        'Model Deployment',
        'Performance Monitoring',
        'A/B Testing',
        'Data Preprocessing',
        'Feature Engineering',
        'Model Versioning'
      ],
      category: 'Machine Learning',
      popular: true,
      rating: 4.8,
      users: '1,600+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Automated model training',
        'One-click deployment',
        'Performance monitoring',
        'A/B testing'
      ],
      link: 'https://ziontechgroup.com/ai-ml-platform'
    },
    {
      id: 10,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Automation',
        'Supplier Management',
        'Risk Assessment',
        'Cost Optimization',
        'Real-time Tracking',
        'Performance Analytics'
      ],
      category: 'Supply Chain',
      popular: true,
      rating: 4.7,
      users: '1,200+',
      color: 'from-amber-500 to-yellow-600',
      pricing: 'Starting at $349/mo',
      capabilities: [
        '30% cost reduction',
        'Demand forecasting',
        'Inventory optimization',
        'Logistics automation'
      ],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization'
    },

    // Advanced AI Services
    {
      id: 11,
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions with quantum machine learning, optimization, and cryptography',
      icon: Brain,
      features: [
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Quantum Error Correction',
        'Hybrid Classical-Quantum',
        'Quantum Cloud Access',
        'Quantum Algorithm Development'
      ],
      category: 'Quantum AI',
      popular: true,
      rating: 4.9,
      users: '50+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $9,999/mo',
      capabilities: [
        'Exponential speedup for complex problems',
        'Quantum advantage in optimization',
        'Unbreakable quantum encryption',
        'Revolutionary problem solving'
      ],
      link: 'https://ziontechgroup.com/ai-quantum-computing'
    },
    {
      id: 12,
      name: 'AI Autonomous Systems Platform',
      description: 'Advanced autonomous systems with self-learning capabilities, real-time adaptation, and intelligent decision making',
      icon: Cpu,
      features: [
        'Self-Learning Algorithms',
        'Real-time Adaptation',
        'Sensor Fusion',
        'Decision Making',
        'Safety Protocols',
        'Performance Optimization',
        'Edge Computing',
        'Autonomous Navigation'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.8,
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        'Self-managing systems',
        'Real-time adaptation',
        'Safety-first approach',
        'Edge computing'
      ],
      link: 'https://ziontechgroup.com/ai-autonomous-systems'
    }
  ];

  const benefits = [
    {
      icon: BarChart,
      title: 'Proven Results',
      description: 'Our AI solutions deliver measurable business outcomes',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months',
      stat: '7 days'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance',
      stat: '99.9%'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from AI specialists',
      stat: '24/7'
    }
  ];

  const technologies = [
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'Scikit-learn', category: 'ML Library' },
    { name: 'OpenAI GPT', category: 'Language Model' },
    { name: 'Hugging Face', category: 'NLP Models' },
    { name: 'AWS SageMaker', category: 'Cloud ML' },
    { name: 'Google Cloud AI', category: 'Cloud ML' },
    { name: 'Azure ML', category: 'Cloud ML' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Apache Kafka', category: 'Streaming' }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify AI opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your needs',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy AI solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 neon-text">
                AI Services
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From machine learning to quantum computing, 
              we deliver intelligent systems that drive real results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Automation</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Security</span>
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
              Proven expertise and enterprise-grade AI solutions that deliver measurable business value
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
              Comprehensive AI solutions designed to meet your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {service.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Pricing:</span>
                      <span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Users:</span>
                      <span className="text-sm font-medium text-green-400">{service.users}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Category:</span>
                      <span className="text-sm font-medium text-purple-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a
                      href="/contact"
                      className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable AI and ML technologies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-white font-medium text-sm">{tech.name}</div>
                <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
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

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies that have already transformed their operations with our cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/25 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 (302) 464-0950
            </a>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-200">+1 (302) 464-0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-200">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-200">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;