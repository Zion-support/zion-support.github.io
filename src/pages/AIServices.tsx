import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Users, 
  Lock,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Workflow,
  Target,
  Rocket,
  Atom,
  Cpu,
  Network,
  Server,
  Eye,
  MessageSquare,
  FileText,
  TrendingUp,
  Search,
  Palette,
  Code,
  Bot,
  Sparkles
} from 'lucide-react';

const AIServices: React.FC = () => {
  const aiCategories = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Transform your business with intelligent insights and predictive analytics.',
      href: '/services/ai-business-intelligence',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom AI Models', 'Data Visualization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Content Creation',
      description: 'Generate high-quality content with AI-powered writing and creative tools.',
      href: '/services/ai-content-creation',
      features: ['Content Generation', 'SEO Optimization', 'Creative Writing', 'Multilingual Support'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your systems with intelligent threat detection and response.',
      href: '/services/ai-cybersecurity',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Monitoring'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'AI HR & Talent',
      description: 'Optimize HR processes with AI-powered recruitment and management.',
      href: '/services/ai-hr-platform',
      features: ['Candidate Screening', 'Performance Analytics', 'Employee Engagement', 'Skills Assessment'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'AI Financial Analytics',
      description: 'Drive financial decisions with intelligent analytics and risk assessment.',
      href: '/services/ai-financial-analytics',
      features: ['Risk Assessment', 'Market Analysis', 'Fraud Detection', 'Portfolio Optimization'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Streamline operations with intelligent process automation and optimization.',
      href: '/services/ai-workflow-orchestrator',
      features: ['Process Automation', 'Smart Routing', 'Performance Tracking', 'Continuous Learning'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const advancedAIServices = [
    {
      icon: Atom,
      title: 'Quantum AI',
      description: 'Leverage quantum computing for advanced AI applications and optimization.',
      services: [
        'Quantum Machine Learning',
        'Quantum Neural Networks',
        'Quantum Optimization',
        'Hybrid Quantum-Classical AI'
      ]
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for automation and insights.',
      services: [
        'Object Detection',
        'Facial Recognition',
        'Image Classification',
        'Video Analytics'
      ]
    },
    {
      icon: Search,
      title: 'Natural Language Processing',
      description: 'Understand and generate human language with advanced NLP capabilities.',
      services: [
        'Text Analysis',
        'Language Generation',
        'Sentiment Analysis',
        'Translation Services'
      ]
    },
    {
      icon: Database,
      title: 'AI Data Platforms',
      description: 'Comprehensive data infrastructure for AI and machine learning.',
      services: [
        'Data Warehousing',
        'Real-time Processing',
        'Data Quality',
        'ML Pipeline Management'
      ]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Accelerated Innovation',
      description: 'Leverage cutting-edge AI to stay ahead of the competition and drive market leadership.'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'AI-powered solutions deliver higher accuracy and precision than traditional methods.'
    },
    {
      icon: Zap,
      title: 'Automation & Efficiency',
      description: 'Automate complex tasks and processes to improve operational efficiency and reduce costs.'
    },
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Unlock hidden patterns and insights from your data to make better business decisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">AI Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge AI services that drive innovation, 
              efficiency, and competitive advantage. From machine learning to natural 
              language processing, we help businesses harness the power of AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore AI Services
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule AI Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Categories Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI services cover every aspect of artificial intelligence, 
              from business applications to cutting-edge research and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link to={category.href}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced AI Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise extends to cutting-edge AI technologies that provide 
              the foundation for next-generation applications and solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedAIServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-300">
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services deliver measurable business value through innovative technology, 
              expert implementation, and ongoing support and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you implement AI solutions 
              that drive innovation, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule AI Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download AI Services Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;

