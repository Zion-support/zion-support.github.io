import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Workflow, 
  Atom, 
  Network, 
  Cpu, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  FileText, 
  Target, 
  Rocket, 
  Star, 
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  Globe,
  Lightbulb,
  Code,
  Database,
  Monitor,
  Smartphone,
  Server,
  Palette,
  Eye,
  Search,
  Settings,
  Palette as PaletteIcon,
  PenTool
} from 'lucide-react';

export default function AIServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, count: 25 },
    { id: 'automation', name: 'AI Automation', icon: Workflow, count: 8 },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart3, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'quantum', name: 'Quantum AI', icon: Atom, count: 4 },
    { id: 'content', name: 'Content Creation', icon: PenTool, count: 3 }
  ];

  const aiServices = [
    {
      id: 'ai-enterprise-automation',
      name: 'AI Enterprise Automation Platform',
      category: 'automation',
      description: 'Comprehensive automation platform for enterprise business processes',
      features: ['Process automation', 'Workflow optimization', 'Intelligent routing', 'Performance analytics'],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-enterprise-automation-platform',
      featured: true
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Platform',
      category: 'analytics',
      description: 'Advanced analytics platform powered by machine learning',
      features: ['Predictive analytics', 'Real-time insights', 'Data visualization', 'Custom dashboards'],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-data-analytics-platform',
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'security',
      description: 'Next-generation security with AI-powered threat detection',
      features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Compliance monitoring'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      link: '/services/ai-cybersecurity-platform',
      featured: true
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Platform',
      category: 'analytics',
      description: 'AI solutions for healthcare analytics and patient care',
      features: ['Patient analytics', 'Diagnostic support', 'Treatment optimization', 'Health monitoring'],
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      link: '/services/ai-healthcare-platform',
      featured: true
    },
    {
      id: 'ai-quantum-hybrid',
      name: 'AI Quantum Hybrid Platform',
      category: 'quantum',
      description: 'Hybrid AI platform combining classical and quantum computing',
      features: ['Quantum algorithms', 'Hybrid optimization', 'Quantum ML', 'Performance scaling'],
      icon: Atom,
      color: 'from-violet-500 to-purple-500',
      link: '/services/ai-quantum-hybrid-platform',
      featured: true
    },
    {
      id: 'ai-autonomous-research',
      name: 'AI Autonomous Research Assistant',
      category: 'automation',
      description: 'Autonomous AI system for research and development',
      features: ['Literature review', 'Hypothesis generation', 'Data analysis', 'Report generation'],
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/ai-autonomous-research-assistant',
      featured: false
    },
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      category: 'analytics',
      description: 'AI-powered platform for financial trading and analysis',
      features: ['Market analysis', 'Risk assessment', 'Portfolio optimization', 'Trading signals'],
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-financial-trading-platform',
      featured: false
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      category: 'automation',
      description: 'Intelligent optimization for supply chain management',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Cost reduction'],
      icon: Network,
      color: 'from-cyan-500 to-blue-500',
      link: '/services/ai-supply-chain-optimization',
      featured: false
    },
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio',
      category: 'content',
      description: 'AI-powered content creation and management platform',
      features: ['Content generation', 'SEO optimization', 'Brand consistency', 'Performance tracking'],
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
      link: '/services/ai-content-creation-studio',
      featured: false
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'analytics',
      description: 'Advanced BI platform with AI-powered insights',
      features: ['Data integration', 'Smart dashboards', 'Predictive insights', 'Actionable recommendations'],
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ai-business-intelligence',
      featured: false
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience Analytics',
      category: 'analytics',
      description: 'Comprehensive customer experience analysis platform',
      features: ['Customer journey mapping', 'Sentiment analysis', 'Behavioral insights', 'Personalization'],
      icon: Eye,
      color: 'from-teal-500 to-green-500',
      link: '/services/ai-customer-experience-analytics-platform',
      featured: false
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'automation',
      description: 'AI assistant for sales teams and customer engagement',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automated follow-ups'],
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500',
      link: '/services/ai-sales-copilot',
      featured: false
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      category: 'security',
      description: 'AI-powered compliance monitoring and reporting',
      features: ['Regulatory tracking', 'Risk assessment', 'Audit automation', 'Compliance reporting'],
      icon: CheckCircle,
      color: 'from-lime-500 to-green-500',
      link: '/services/ai-compliance-assistant',
      featured: false
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Solutions',
      category: 'quantum',
      description: 'Quantum computing solutions for AI applications',
      features: ['Quantum algorithms', 'Quantum ML', 'Optimization problems', 'Research support'],
      icon: Cpu,
      color: 'from-purple-500 to-violet-500',
      link: '/services/ai-quantum-computing-solutions',
      featured: false
    },
    {
      id: 'ai-enterprise-intelligence',
      name: 'AI Enterprise Intelligence Platform',
      category: 'analytics',
      description: 'Comprehensive enterprise intelligence platform',
      features: ['Data unification', 'AI insights', 'Decision support', 'Performance monitoring'],
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/ai-enterprise-intelligence-platform',
      featured: false
    },
    {
      id: 'ai-autonomous-business',
      name: 'AI Autonomous Business Operations',
      category: 'automation',
      description: 'Fully autonomous business operations platform',
      features: ['Process automation', 'Decision making', 'Resource optimization', 'Continuous learning'],
      icon: Rocket,
      color: 'from-rose-500 to-pink-500',
      link: '/services/ai-autonomous-business-operations-platform',
      featured: false
    },
    {
      id: 'ai-quantum-neural',
      name: 'AI Quantum Neural Network Platform',
      category: 'quantum',
      description: 'Quantum neural networks for advanced AI applications',
      features: ['Quantum neural networks', 'Hybrid learning', 'Quantum advantage', 'Scalable architecture'],
      icon: Atom,
      color: 'from-violet-500 to-purple-500',
      link: '/services/ai-quantum-neural-network-platform',
      featured: false
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics Platform',
      category: 'analytics',
      description: 'Advanced analytics for healthcare data and insights',
      features: ['Patient analytics', 'Clinical insights', 'Population health', 'Predictive medicine'],
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-healthcare-analytics-platform',
      featured: false
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Solutions',
      category: 'security',
      description: 'Enterprise blockchain solutions with AI integration',
      features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Financial services'],
      icon: Network,
      color: 'from-amber-500 to-orange-500',
      link: '/services/blockchain-enterprise-solutions',
      featured: false
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      category: 'automation',
      description: 'AI-powered edge computing for IoT and real-time applications',
      features: ['Real-time processing', 'Low latency', 'IoT integration', 'Distributed AI'],
      icon: Cpu,
      color: 'from-slate-500 to-gray-500',
      link: '/services/edge-computing-solutions',
      featured: false
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation platform',
      features: ['Process mapping', 'Automated workflows', 'Integration support', 'Performance monitoring'],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-workflow-automation',
      featured: false
    },
    {
      id: 'ai-devops-automation',
      name: 'AI DevOps Automation Platform',
      category: 'automation',
      description: 'AI-powered DevOps automation and optimization',
      features: ['CI/CD automation', 'Infrastructure management', 'Performance optimization', 'Security integration'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-devops-automation-platform',
      featured: false
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      category: 'automation',
      description: 'Intelligent marketing automation platform',
      features: ['Campaign automation', 'Personalization', 'Analytics', 'A/B testing'],
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-marketing-automation',
      featured: false
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Platform',
      category: 'automation',
      description: 'AI-powered project management and collaboration',
      features: ['Task automation', 'Resource optimization', 'Risk assessment', 'Progress tracking'],
      icon: Calendar,
      color: 'from-indigo-500 to-blue-500',
      link: '/services/ai-project-management-platform',
      featured: false
    },
    {
      id: 'ai-hr-platform',
      name: 'AI HR Platform',
      category: 'automation',
      description: 'Intelligent HR management and analytics platform',
      features: ['Recruitment automation', 'Employee analytics', 'Performance management', 'Talent development'],
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      link: '/services/ai-hr-platform',
      featured: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const featuredServices = aiServices.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <div className="bg-zinc-800/50 border-b border-zinc-700/50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-6">
              <Brain className="w-10 h-10 text-zion-cyan" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Showcase</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Discover our comprehensive suite of AI-powered solutions designed to transform your business. 
              From automation to quantum computing, we deliver cutting-edge technology that drives innovation and growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured AI Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative"
              >
                <Link to={service.link}>
                  <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 h-full hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                    : 'border-zinc-600 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 px-2 py-1 bg-zinc-700/50 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Link to={service.link}>
                  <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-5 h-full hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-3`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-zinc-300">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                      <span className="text-xs font-medium">Explore Service</span>
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify the perfect solutions for your business needs. 
            Get a custom consultation and discover how AI can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '25+', label: 'AI Services', icon: Brain },
            { number: '500+', label: 'Happy Clients', icon: Users },
            { number: '99.9%', label: 'Uptime', icon: Shield },
            { number: '24/7', label: 'Support', icon: Globe }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}