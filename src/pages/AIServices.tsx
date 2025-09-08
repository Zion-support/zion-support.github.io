import React from 'react';
import { Link  } from 'react-router-dom.ts';
import { Brain, LineChart, Bot, Database, Shield, DollarSign, ExternalLink, Image as ImageIcon, FileText, Workflow, Globe, Video  } from 'lucide-react';

export default function AIServices() {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Machine Learning & Data Science solutions that transform business data into actionable insights',
      icon: BrainIcon,
      color: 'from-indigo-500 to-purple-600',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'Real-time Insights'],
      benefits: ['30% improvement in decision-making', 'Automated data processing', 'Predictive capabilities'],
      useCases: ['Financial Forecasting', 'Customer Segmentation', 'Risk Assessment', 'Performance Optimization'],
      pricing: 'From $5,000/month',
      rating: 4.9,
      reviewCount: 127,
      featured: true
    },
    {
      id: 'ai-workflow-orchestrator',
      name: 'AI Workflow Orchestrator',
      description: 'Intelligent Process Automation that streamlines complex business workflows',
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Performance Monitoring'],
      benefits: ['70% reduction in manual work', 'Improved accuracy', 'Faster processing'],
      useCases: ['Supply Chain Management', 'HR Processes', 'Customer Service', 'Quality Control'],
      pricing: 'From $3,500/month',
      rating: 4.8,
      reviewCount: 89,
      featured: true
    },
    {
      id: 'ai-data-governance',
      name: 'AI Data Governance',
      description: 'AI-Powered Data Protection and governance solutions',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      features: ['Data Classification', 'Privacy Protection', 'Compliance Monitoring', 'Risk Assessment'],
      benefits: ['Enhanced data security', 'Regulatory compliance', 'Reduced risk exposure'],
      useCases: ['GDPR Compliance', 'Data Privacy', 'Audit Preparation', 'Risk Management'],
      pricing: 'From $4,500/month',
      rating: 4.9,
      reviewCount: 156,
      featured: false
    },
    {
      id: 'ai-customer-success-platform',
      name: 'AI Customer Success Platform',
      description: 'Proactive Customer Engagement and success management',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      features: ['Customer Analytics', 'Predictive Churn', 'Personalized Engagement', 'Success Metrics'],
      benefits: ['25% increase in customer satisfaction', 'Reduced churn rates', 'Improved retention'],
      useCases: ['Customer Onboarding', 'Success Planning', 'Churn Prevention', 'Expansion Management'],
      pricing: 'From $2,500/month',
      rating: 4.7,
      reviewCount: 203,
      featured: false
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'AI-powered sales automation and optimization',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Optimization', 'Performance Analytics'],
      benefits: ['40% increase in conversion rates', 'Faster sales cycles', 'Better lead quality'],
      useCases: ['Lead Generation', 'Sales Forecasting', 'Pipeline Management', 'Performance Tracking'],
      pricing: 'From $3,500/month',
      rating: 4.8,
      reviewCount: 167,
      featured: true
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      description: 'Regulatory compliance automation and monitoring',
      icon: CheckCircle,
      color: 'from-emerald-500 to-teal-600',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Policy Management'],
      benefits: ['Reduced compliance costs', 'Automated monitoring', 'Real-time alerts'],
      useCases: ['Regulatory Compliance', 'Risk Assessment', 'Audit Preparation', 'Policy Enforcement'],
      pricing: 'From $7,500/month',
      rating: 4.9,
      reviewCount: 98,
      featured: false
    },
    {
      id: 'ai-auto-email-responder',
      name: 'AI Auto Email Responder',
      description: 'Faster replies with CRM logging and intelligent responses',
      icon: Mail,
      color: 'from-teal-500 to-green-600',
      features: ['Smart Responses', 'CRM Integration', 'Sentiment Analysis', 'Response Tracking'],
      benefits: ['80% faster response times', 'Improved customer experience', 'Better tracking'],
      useCases: ['Customer Support', 'Sales Follow-up', 'Inquiry Management', 'Lead Nurturing'],
      pricing: 'From $2,800/month',
      rating: 4.7,
      reviewCount: 298,
      featured: false
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio',
      description: 'On-brand AI content generation and management',
      icon: FileText,
      color: 'from-yellow-500 to-orange-600',
      features: ['Content Generation', 'Brand Consistency', 'Multi-format Support', 'Quality Control'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'Scalable production'],
      useCases: ['Marketing Content', 'Blog Writing', 'Social Media', 'Product Descriptions'],
      pricing: 'From $2,500/month',
      rating: 4.6,
      reviewCount: 445,
      featured: false
    }
  ];

  const aiCapabilities = [
    {
      category: 'Machine Learning',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      capabilities: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning'],
      description: 'Advanced ML algorithms for pattern recognition and predictive modeling'
    },
    {
      category: 'Natural Language Processing',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      capabilities: ['Text Analysis', 'Language Generation', 'Sentiment Analysis', 'Translation'],
      description: 'Understanding and generating human language with high accuracy'
    },
    {
      category: 'Computer Vision',
      icon: Eye,
      color: 'from-green-500 to-emerald-600',
      capabilities: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      description: 'Visual data processing and analysis for various applications'
    },
    {
      category: 'Predictive Analytics',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      capabilities: ['Forecasting', 'Risk Assessment', 'Trend Analysis', 'Pattern Recognition'],
      description: 'Data-driven predictions and insights for strategic decision-making'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      applications: ['Diagnostic AI', 'Drug Discovery', 'Patient Care', 'Medical Imaging'],
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Cost reduction']
    },
    {
      name: 'Finance',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      applications: ['Fraud Detection', 'Risk Assessment', 'Trading Algorithms', 'Customer Service'],
      benefits: ['Enhanced security', 'Better risk management', 'Improved efficiency']
    },
    {
      name: 'Manufacturing',
      icon: Building,
      color: 'from-blue-500 to-cyan-600',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation'],
      benefits: ['Reduced downtime', 'Higher quality', 'Cost savings']
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-600',
      applications: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Demand Forecasting'],
      benefits: ['Better customer experience', 'Optimized inventory', 'Increased sales']
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain, color: 'from-indigo-500 to-purple-600' },
    { label: 'Data Processed', value: '10TB+', icon: Database, color: 'from-blue-500 to-cyan-600' },
    { label: 'Accuracy Rate', value: '95%+', icon: Target, color: 'from-green-500 to-emerald-600' },
    { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'from-yellow-500 to-orange-600' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Brain },
    { id: 'capabilities', label: 'Capabilities', icon: Zap },
    { id: 'industries', label: 'Industries', icon: Building },
    { id: 'benefits', label: 'Benefits', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Transform your business with our comprehensive AI and machine learning solutions. From predictive analytics to intelligent automation, we deliver cutting-edge AI services."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              From predictive analytics to intelligent automation, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  AI Service Portfolio
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Comprehensive AI solutions designed to transform every aspect of your business operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300 hover:border-purple-400/50 ${
                      service.featured ? 'border-purple-400/30' : 'border-slate-700/50'
                    }`}
                  >
                    {service.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs rounded-full mb-4">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Service
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{service.pricing}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Capabilities Tab */}
          {activeTab === 'capabilities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  AI Capabilities
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Our comprehensive AI capabilities cover the full spectrum of artificial intelligence and machine learning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.category}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4`}>
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{capability.category}</h3>
                    <p className="text-gray-300 mb-6">{capability.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Industries Tab */}
          {activeTab === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Industry Applications
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  AI solutions tailored for specific industries and use cases.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Applications:</h4>
                      <ul className="space-y-1">
                        {industry.applications.map((app, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">{app}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Why Choose Our AI Services?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover the advantages of partnering with Zion Tech Group for your AI initiatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: 'Expert AI Team',
                    description: 'Certified AI engineers and data scientists with advanced degrees and industry experience',
                    color: 'from-indigo-500 to-purple-600'
                  },
                  {
                    icon: Zap,
                    title: 'Rapid Implementation',
                    description: 'Quick deployment of AI solutions without compromising quality or security',
                    color: 'from-purple-500 to-pink-600'
                  },
                  {
                    icon: Shield,
                    title: 'Enterprise Security',
                    description: 'ISO 27001 certified with SOC 2 Type II compliance and advanced security protocols',
                    color: 'from-blue-500 to-cyan-600'
                  },
                  {
                    icon: Target,
                    title: 'Proven Results',
                    description: 'Track record of delivering measurable business outcomes and ROI for clients',
                    color: 'from-green-500 to-emerald-600'
                  },
                  {
                    icon: Globe,
                    title: 'Global Support',
                    description: '24/7 support available across 25+ countries with local expertise',
                    color: 'from-teal-500 to-green-600'
                  },
                  {
                    icon: Award,
                    title: 'Continuous Innovation',
                    description: 'Ongoing R&D investment in emerging AI technologies and methodologies',
                    color: 'from-yellow-500 to-orange-600'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Start Your AI Project
                </motion.button>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
}

const AIServices = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Systems",
      description: "Build intelligent systems that operate independently and make decisions in real-time.",
      features: ["Self-learning algorithms", "Predictive analytics", "Automated decision making"],
      path: "/ai-autonomous-systems"
    },
    {
      icon: TrendingUp,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      features: ["Real-time dashboards", "Predictive modeling", "Performance optimization"],
      path: "/ai-business-intelligence"
    },
    {
      icon: Code,
      title: "AI Code Generation",
      description: "Accelerate development with AI-powered code generation and review tools.",
      features: ["Automated coding", "Code review", "Bug detection"],
      path: "/ai-code-generation"
    },
    {
      icon: Eye,
      title: "AI Computer Vision",
      description: "Implement advanced computer vision solutions for image and video analysis.",
      features: ["Object detection", "Facial recognition", "Quality control"],
      path: "/ai-computer-vision"
    },
    {
      icon: Users,
      title: "AI Healthcare Solutions",
      description: "Revolutionize healthcare with AI-powered diagnostic and treatment systems.",
      features: ["Medical imaging", "Patient monitoring", "Drug discovery"],
      path: "/ai-healthcare-solutions"
    },
    {
      icon: Shield,
      title: "AI Compliance Automation",
      description: "Ensure regulatory compliance with intelligent automation and monitoring.",
      features: ["Risk assessment", "Compliance monitoring", "Audit trails"],
      path: "/ai-compliance-automation"
    }
  ];

  const benefits = [
    "Increased operational efficiency",
    "Reduced human error",
    "24/7 availability",
    "Scalable solutions",
    "Cost optimization",
    "Competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Tomorrow's Challenges
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your business operations, 
              enhance decision-making, and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )};
;
export: default AIServices;



          <p className='text-lg text-gray-600'>Content coming soon...</p>
        </div>
      </div>
</>


  )}







<<<<<<< HEAD
export default AIServices;
>>>>>>> origin/cursor/website-audit-and-enhancement-2595
=======
export default AIServices;
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
