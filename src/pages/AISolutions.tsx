import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Cloud, Shield, Globe, Users, Zap, Rocket, Target,
  ArrowRight, ExternalLink, Download, Play, FileText, Search,
  CheckCircle, AlertCircle, Info, Clock, Star, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2, TrendingUp,
  Cpu, Network, BarChart3, Database, Layers, Workflow,
  Palette, TestTube, Bug, Lightbulb, Heart, Bot, Microscope,
  ChartBar, Camera, MessageSquare, Code, Database, Globe2
} from 'lucide-react';

export default function AISolutions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const aiCategories = [
    { id: 'all', name: 'All Solutions', icon: Brain, count: 12 },
    { id: 'machine-learning', name: 'Machine Learning', icon: Cpu, count: 4 },
    { id: 'computer-vision', name: 'Computer Vision', icon: Camera, count: 3 },
    { id: 'nlp', name: 'Natural Language Processing', icon: MessageSquare, count: 3 },
    { id: 'automation', name: 'AI Automation', icon: Workflow, count: 2 }
  ];

  const aiSolutions = [
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      category: 'machine-learning',
      description: 'Advanced analytics platform that uses machine learning to uncover hidden patterns and provide predictive insights',
      features: ['Predictive analytics', 'Real-time processing', 'Custom algorithms', 'API integration'],
      useCases: ['Business intelligence', 'Risk assessment', 'Market forecasting', 'Performance optimization'],
      industries: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'],
      featured: true
    },
    {
      id: 2,
      name: 'Computer Vision System',
      category: 'computer-vision',
      description: 'Intelligent image and video analysis system for object detection, recognition, and quality control',
      features: ['Object detection', 'Image classification', 'Quality control', 'Real-time processing'],
      useCases: ['Manufacturing QA', 'Security monitoring', 'Medical imaging', 'Retail analytics'],
      industries: ['Manufacturing', 'Healthcare', 'Security', 'Retail'],
      featured: true
    },
    {
      id: 3,
      name: 'Natural Language Processing Engine',
      category: 'nlp',
      description: 'Advanced NLP engine for text analysis, sentiment analysis, and automated content processing',
      features: ['Sentiment analysis', 'Text classification', 'Entity extraction', 'Language translation'],
      useCases: ['Customer feedback analysis', 'Content moderation', 'Document processing', 'Chatbots'],
      industries: ['Customer Service', 'Media', 'Legal', 'Education'],
      featured: false
    },
    {
      id: 4,
      name: 'AI-Powered Chatbot Platform',
      category: 'automation',
      description: 'Intelligent chatbot platform with natural language understanding and automated customer service',
      features: ['Natural language understanding', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      useCases: ['Customer support', 'Sales assistance', 'Appointment booking', 'FAQ automation'],
      industries: ['E-commerce', 'Healthcare', 'Banking', 'Travel'],
      featured: false
    },
    {
      id: 5,
      name: 'Predictive Maintenance System',
      category: 'machine-learning',
      description: 'AI-driven predictive maintenance system that predicts equipment failures and optimizes maintenance schedules',
      features: ['Failure prediction', 'Maintenance optimization', 'Sensor integration', 'Alert system'],
      useCases: ['Industrial equipment', 'Vehicle fleet', 'Building systems', 'IT infrastructure'],
      industries: ['Manufacturing', 'Transportation', 'Real Estate', 'Technology'],
      featured: false
    },
    {
      id: 6,
      name: 'AI Content Generation',
      category: 'nlp',
      description: 'Intelligent content generation system for creating articles, reports, and marketing materials',
      features: ['Content creation', 'Style customization', 'Multi-format output', 'SEO optimization'],
      useCases: ['Marketing content', 'Report generation', 'Product descriptions', 'Social media posts'],
      industries: ['Marketing', 'Publishing', 'E-commerce', 'Education'],
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'finance', name: 'Financial Services', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'education', name: 'Education', count: 2 },
    { id: 'transportation', name: 'Transportation', count: 1 }
  ];

  const aiUseCases = [
    {
      id: 1,
      title: 'Healthcare Diagnosis',
      description: 'AI-powered diagnostic systems that analyze medical images and patient data for early disease detection',
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Cost reduction', 'Better patient outcomes'],
      industry: 'healthcare',
      featured: true
    },
    {
      id: 2,
      title: 'Fraud Detection',
      description: 'Machine learning algorithms that detect fraudulent transactions and activities in real-time',
      benefits: ['Real-time detection', 'Reduced false positives', 'Cost savings', 'Enhanced security'],
      industry: 'finance',
      featured: true
    },
    {
      id: 3,
      title: 'Supply Chain Optimization',
      description: 'AI-driven supply chain management that optimizes inventory, logistics, and demand forecasting',
      benefits: ['Reduced costs', 'Improved efficiency', 'Better forecasting', 'Risk mitigation'],
      industry: 'manufacturing',
      featured: false
    },
    {
      id: 4,
      title: 'Personalized Recommendations',
      description: 'AI-powered recommendation engines that provide personalized product and content suggestions',
      benefits: ['Increased sales', 'Better user experience', 'Higher engagement', 'Customer retention'],
      industry: 'retail',
      featured: false
    }
  ];

  const implementationServices = [
    {
      id: 1,
      name: 'AI Strategy & Planning',
      description: 'Comprehensive AI strategy development aligned with business objectives and technology roadmap',
      duration: '4-8 weeks',
      deliverables: ['AI strategy document', 'Technology roadmap', 'ROI analysis', 'Implementation plan'],
      featured: true
    },
    {
      id: 2,
      name: 'AI Model Development',
      description: 'Custom AI model development tailored to your specific business requirements and data',
      duration: '8-16 weeks',
      deliverables: ['Custom AI models', 'Training datasets', 'Model documentation', 'Performance metrics'],
      featured: true
    },
    {
      id: 3,
      name: 'AI Integration & Deployment',
      description: 'Seamless integration of AI solutions into existing systems with full deployment support',
      duration: '6-12 weeks',
      deliverables: ['System integration', 'Deployment documentation', 'User training', 'Support setup'],
      featured: false
    },
    {
      id: 4,
      name: 'AI Training & Support',
      description: 'Comprehensive training programs and ongoing support for AI system users and administrators',
      duration: '2-4 weeks',
      deliverables: ['Training materials', 'User workshops', 'Support documentation', 'Maintenance plan'],
      featured: false
    }
  ];

  const filteredSolutions = aiSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || solution.industries.includes(selectedIndustry);
    
    return matchesCategory && matchesIndustry;
  });

  const featuredSolutions = filteredSolutions.filter(solution => solution.featured);
  const regularSolutions = filteredSolutions.filter(solution => !solution.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      'machine-learning': 'bg-blue-100 text-blue-800',
      'computer-vision': 'bg-green-100 text-green-800',
      'nlp': 'bg-purple-100 text-purple-800',
      'automation': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, 
              we deliver AI-powered innovations that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#solutions"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Brain className="w-5 h-5 mr-2" />
                Explore Solutions
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get AI Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-400">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">AI Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {aiCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Solutions */}
      {featuredSolutions.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured AI Solutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredSolutions.map((solution) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(solution.category)}`}>
                        {aiCategories.find(c => c.id === solution.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features</h4>
                        <div className="space-y-1">
                          {solution.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Industries</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.industries.slice(0, 3).map((industry) => (
                            <span key={industry} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All AI Solutions */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSolutions.map((solution) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(solution.category)}`}>
                      {aiCategories.find(c => c.id === solution.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Use Cases</h4>
                      <div className="space-y-1">
                        {solution.useCases.slice(0, 2).map((useCase, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Use Cases</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Discover how AI is transforming industries and solving real-world business challenges
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiUseCases.filter(useCase => useCase.featured).map((useCase) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {useCase.industry}
                    </span>
                    <span className="text-gray-400 text-sm">Use Case</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {useCase.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Implementation Services</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              End-to-end AI implementation services to ensure successful deployment and maximum ROI
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Duration:</span> {service.duration}
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Deliverables:</span>
                    </div>
                    <ul className="text-sm text-gray-400 ml-4 space-y-1">
                      {service.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Harness the Power of AI?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities, develop strategies, and implement solutions that drive real business value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                View AI Case Studies
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Brain className="w-5 h-5 mr-2" />
                Explore AI Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
