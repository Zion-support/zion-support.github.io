import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  BarChart, 
  Eye, 
  MessageSquare, 
  Zap, 
  Shield, 
  Cloud, 
  Database,
  Users,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Star,
  Clock,
  Target,
  Layers
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      icon: Brain,
      price: 'Starting at $2,500/month',
      features: [
        'Custom Model Development',
        'Predictive Analytics',
        'Pattern Recognition',
        'Real-time Processing',
        'Model Optimization',
        'Continuous Learning'
      ],
      category: 'Core AI',
      color: 'from-purple-500 to-indigo-600',
      popular: true,
      capabilities: [
        'Predictive maintenance for manufacturing',
        'Customer behavior analysis',
        'Fraud detection systems',
        'Demand forecasting',
        'Quality control automation'
      ]
    },
    {
      id: 2,
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and conversational AI systems.',
      icon: MessageSquare,
      price: 'Starting at $1,800/month',
      features: [
        'Text Analysis & Sentiment',
        'Language Translation',
        'Chatbot Development',
        'Document Processing',
        'Voice Recognition',
        'Content Generation'
      ],
      category: 'Language AI',
      color: 'from-blue-500 to-cyan-600',
      popular: true,
      capabilities: [
        'Multilingual customer support',
        'Automated document analysis',
        'Social media sentiment tracking',
        'Voice-to-text transcription',
        'Intelligent content moderation'
      ]
    },
    {
      id: 3,
      name: 'Computer Vision Systems',
      description: 'Image and video analysis solutions for object detection, facial recognition, and visual inspection.',
      icon: Eye,
      price: 'Starting at $3,200/month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition',
        'Image Classification',
        'Video Analytics',
        'Medical Imaging',
        'Quality Inspection'
      ],
      category: 'Visual AI',
      color: 'from-green-500 to-emerald-600',
      popular: false,
      capabilities: [
        'Automated quality control',
        'Security surveillance systems',
        'Medical image analysis',
        'Retail analytics',
        'Autonomous vehicle vision'
      ]
    },
    {
      id: 4,
      name: 'AI-Powered Analytics',
      description: 'Intelligent data analytics platform with automated insights, forecasting, and business intelligence.',
      icon: BarChart,
      price: 'Starting at $1,200/month',
      features: [
        'Automated Insights',
        'Predictive Analytics',
        'Anomaly Detection',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization'
      ],
      category: 'Analytics',
      color: 'from-orange-500 to-red-600',
      popular: true,
      capabilities: [
        'Sales forecasting',
        'Customer churn prediction',
        'Market trend analysis',
        'Operational efficiency optimization',
        'Risk assessment'
      ]
    },
    {
      id: 5,
      name: 'AI Automation Platform',
      description: 'Intelligent process automation with RPA, workflow optimization, and decision-making capabilities.',
      icon: Zap,
      price: 'Starting at $2,800/month',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Decision Trees',
        'Exception Handling',
        'Integration APIs',
        'Performance Monitoring'
      ],
      category: 'Automation',
      color: 'from-yellow-500 to-orange-600',
      popular: false,
      capabilities: [
        'Invoice processing automation',
        'Customer onboarding workflows',
        'Inventory management',
        'HR process automation',
        'Financial reporting'
      ]
    },
    {
      id: 6,
      name: 'AI Security Solutions',
      description: 'Advanced cybersecurity with AI-powered threat detection, behavioral analysis, and automated response.',
      icon: Shield,
      price: 'Starting at $4,500/month',
      features: [
        'Threat Detection',
        'Behavioral Analysis',
        'Automated Response',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Incident Management'
      ],
      category: 'Security',
      color: 'from-red-500 to-pink-600',
      popular: true,
      capabilities: [
        'Real-time threat monitoring',
        'User behavior analytics',
        'Automated incident response',
        'Compliance reporting',
        'Security orchestration'
      ]
    },
    {
      id: 7,
      name: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure with GPU clusters, model deployment, and managed AI services.',
      icon: Cloud,
      price: 'Starting at $3,800/month',
      features: [
        'GPU Clusters',
        'Model Deployment',
        'Auto-scaling',
        'Load Balancing',
        'Data Pipeline',
        'Monitoring & Logging'
      ],
      category: 'Infrastructure',
      color: 'from-cyan-500 to-blue-600',
      popular: false,
      capabilities: [
        'High-performance computing',
        'Model serving at scale',
        'Data preprocessing pipelines',
        'Real-time inference',
        'Cost optimization'
      ]
    },
    {
      id: 8,
      name: 'AI Data Management',
      description: 'Intelligent data management with automated cleaning, labeling, and preparation for AI models.',
      icon: Database,
      price: 'Starting at $1,500/month',
      features: [
        'Data Cleaning',
        'Automated Labeling',
        'Data Validation',
        'Feature Engineering',
        'Data Versioning',
        'Privacy Protection'
      ],
      category: 'Data',
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      capabilities: [
        'Automated data quality checks',
        'Smart data labeling',
        'Feature extraction',
        'Data lineage tracking',
        'GDPR compliance'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      applications: [
        'Medical image analysis',
        'Drug discovery',
        'Patient monitoring',
        'Diagnostic assistance',
        'Treatment optimization'
      ]
    },
    {
      name: 'Finance',
      icon: '💰',
      applications: [
        'Fraud detection',
        'Algorithmic trading',
        'Risk assessment',
        'Credit scoring',
        'Regulatory compliance'
      ]
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      applications: [
        'Predictive maintenance',
        'Quality control',
        'Supply chain optimization',
        'Process automation',
        'Defect detection'
      ]
    },
    {
      name: 'Retail',
      icon: '🛍️',
      applications: [
        'Customer analytics',
        'Inventory optimization',
        'Price optimization',
        'Recommendation engines',
        'Demand forecasting'
      ]
    },
    {
      name: 'Transportation',
      icon: '🚗',
      applications: [
        'Autonomous vehicles',
        'Route optimization',
        'Predictive maintenance',
        'Traffic management',
        'Fleet management'
      ]
    },
    {
      name: 'Education',
      icon: '🎓',
      applications: [
        'Personalized learning',
        'Automated grading',
        'Student analytics',
        'Content generation',
        'Learning optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Transform your business with cutting-edge artificial intelligence
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Our comprehensive AI services help enterprises harness the power of artificial intelligence to drive innovation, 
            optimize operations, and achieve unprecedented growth. From machine learning to computer vision, we deliver 
            solutions that transform your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our AI Service Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {service.category}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.slice(0, 3).map((capability, index) => (
                      <li key={index} className="text-xs text-gray-400 flex items-center">
                        <Target className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="quantum-card p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
                
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-300">
                      <Layers className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* AI Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our AI Development Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="quantum-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Discovery & Analysis</h3>
              <p className="text-sm text-gray-300">
                We analyze your business needs, data sources, and objectives to design the optimal AI solution.
              </p>
            </div>
            
            <div className="quantum-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Data Preparation</h3>
              <p className="text-sm text-gray-300">
                We clean, validate, and prepare your data for AI model training and optimization.
              </p>
            </div>
            
            <div className="quantum-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Model Development</h3>
              <p className="text-sm text-gray-300">
                We develop, train, and optimize AI models tailored to your specific use case and requirements.
              </p>
            </div>
            
            <div className="quantum-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Deployment & Monitoring</h3>
              <p className="text-sm text-gray-300">
                We deploy your AI solution and provide ongoing monitoring, maintenance, and optimization.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Get Free AI Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;
