import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Brain, Cloud, Code, Zap, Shield, Users, TrendingUp, Award, Clock, DollarSign, Target, BarChart, Settings, Database, Lock, Globe, Smartphone, Headphones, FileText, Image, Video, Music, Palette, Search, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Cpu, HardDrive, Wifi, Monitor, Camera, Printer, MemoryStick, Wrench, Bell, Heart, ThumbsUp, Share2, Download, Upload, Activity, PieChart, LineChart, Layers, Atom, Sparkles, Rocket, Lightbulb, Target as TargetIcon, Zap as ZapIcon } from 'lucide-react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-services');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Advanced artificial intelligence solutions for enterprise transformation'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and cloud solutions'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      description: 'Ready-to-use business applications and productivity tools'
    },
    {
      id: 'specialized',
      name: 'Specialized',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Cutting-edge technologies and specialized solutions'
    }
  ];

  const services = {
    'ai-services': [
      {
        id: 'ai-business-intelligence',
        name: 'AI Business Intelligence',
        description: 'Transform raw data into actionable insights with 99.9% accuracy',
        price: '$2,499/month',
        features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Natural Language Queries'],
        popular: true,
        link: '/ai-business-intelligence',
        icon: BarChart,
        color: 'from-purple-500 to-pink-600',
        stats: { accuracy: '99.9%', clients: '200+', roi: '400%' }
      },
      {
        id: 'ai-content-generation',
        name: 'AI Content Generation',
        description: 'Create high-quality content at scale with AI assistance',
        price: '$899/month',
        features: ['Multi-language Support', 'Brand Voice Training', 'SEO Optimization', 'Content Calendar'],
        popular: true,
        link: '/ai-content-generation',
        icon: FileText,
        color: 'from-green-500 to-teal-600',
        stats: { languages: '40+', articles: '1000+/day', efficiency: '300%' }
      },
      {
        id: 'ai-customer-support',
        name: 'AI Customer Support',
        description: '24/7 intelligent customer service with human handoff',
        price: '$1,299/month',
        features: ['95% Resolution Rate', 'Multi-language NLP', 'Sentiment Analysis', 'Escalation Management'],
        popular: false,
        link: '/ai-customer-support',
        icon: Headphones,
        color: 'from-blue-500 to-cyan-600',
        stats: { resolution: '95%', languages: '50+', satisfaction: '98%' }
      },
      {
        id: 'ai-cybersecurity',
        name: 'AI Cybersecurity',
        description: 'Advanced threat detection and automated response',
        price: '$2,199/month',
        features: ['Threat Detection', 'Anomaly Detection', 'Incident Response', 'Compliance Monitoring'],
        popular: true,
        link: '/ai-cybersecurity',
        icon: Shield,
        color: 'from-red-500 to-orange-600',
        stats: { detection: '99.9%', response: '<1min', breaches: '0' }
      }
    ],
    'it-services': [
      {
        id: 'cloud-migration',
        name: 'Cloud Migration',
        description: 'Seamless migration to AWS, Azure, or GCP with zero downtime',
        price: 'Starting at $10,000',
        features: ['Zero Downtime', 'Cost Optimization', 'Security Implementation', 'Performance Tuning'],
        popular: true,
        link: '/cloud-migration',
        icon: Cloud,
        color: 'from-blue-500 to-indigo-600',
        stats: { uptime: '99.9%', savings: '40%', migration: '2-8 weeks' }
      },
      {
        id: 'cybersecurity-suite',
        name: 'Cybersecurity Suite',
        description: 'Comprehensive security with 24/7 monitoring and threat detection',
        price: 'Starting at $8,000/month',
        features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Penetration Testing'],
        popular: true,
        link: '/cybersecurity',
        icon: Lock,
        color: 'from-red-500 to-pink-600',
        stats: { monitoring: '24/7', threats: '1000+/day', response: '<15min' }
      },
      {
        id: 'it-infrastructure',
        name: 'IT Infrastructure',
        description: 'Scalable and secure infrastructure architecture',
        price: 'Starting at $15,000',
        features: ['Network Design', 'Server Configuration', 'Disaster Recovery', 'Scalability Planning'],
        popular: false,
        link: '/it-infrastructure',
        icon: Server,
        color: 'from-gray-500 to-slate-600',
        stats: { uptime: '99.9%', scalability: 'Unlimited', support: '24/7' }
      }
    ],
    'micro-saas': [
      {
        id: 'ai-project-manager',
        name: 'AI Project Manager',
        description: 'Intelligent project management with predictive analytics',
        price: '$299/month',
        features: ['Smart Task Assignment', 'Risk Prediction', 'Resource Optimization', 'Progress Tracking'],
        popular: true,
        link: '/ai-project-manager',
        icon: Target,
        color: 'from-green-500 to-emerald-600',
        stats: { efficiency: '300%', accuracy: '95%', time: '50% saved' }
      },
      {
        id: 'ai-social-media-manager',
        name: 'AI Social Media Manager',
        description: 'Automated social media content creation and scheduling',
        price: '$199/month',
        features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization'],
        popular: true,
        link: '/ai-social-media-manager',
        icon: Share2,
        color: 'from-pink-500 to-rose-600',
        stats: { engagement: '150%', time: '20h saved', platforms: '6+' }
      },
      {
        id: 'ai-analytics-dashboard',
        name: 'AI Analytics Dashboard',
        description: 'Real-time business intelligence with predictive insights',
        price: '$399/month',
        features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'],
        popular: false,
        link: '/ai-analytics-dashboard',
        icon: BarChart,
        color: 'from-indigo-500 to-purple-600',
        stats: { insights: 'Real-time', accuracy: '99%', reports: 'Automated' }
      }
    ],
    'specialized': [
      {
        id: 'quantum-computing',
        name: 'Quantum Computing',
        description: 'Next-generation quantum solutions for complex optimization',
        price: 'Custom pricing',
        features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum ML', 'Hybrid Computing'],
        popular: false,
        link: '/quantum-computing',
        icon: Atom,
        color: 'from-cyan-500 to-blue-600',
        stats: { speed: '1000x', problems: 'Complex', future: 'Ready' }
      },
      {
        id: 'autonomous-systems',
        name: 'Autonomous Systems',
        description: 'AI-powered autonomous solutions for various industries',
        price: '$4,999/month',
        features: ['Machine Learning', 'Real-time Processing', 'Safety Systems', 'Adaptive Learning'],
        popular: false,
        link: '/autonomous-systems',
        icon: Rocket,
        color: 'from-orange-500 to-red-600',
        stats: { autonomy: '95%', safety: '99.9%', learning: 'Continuous' }
      },
      {
        id: 'blockchain-web3',
        name: 'Blockchain & Web3',
        description: 'Decentralized application development and Web3 solutions',
        price: '$3,999/month',
        features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration'],
        popular: false,
        link: '/blockchain-web3',
        icon: Globe,
        color: 'from-yellow-500 to-orange-600',
        stats: { security: 'Cryptographic', transparency: '100%', innovation: 'Cutting-edge' }
      }
    ]
  };

  const currentServices = services[activeTab as keyof typeof services] || [];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Interactive Service Explorer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Explore Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the perfect solution for your business needs. Click on any category to explore 
            our comprehensive suite of AI, IT, and specialized services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <category.icon className={`w-5 h-5 ${activeTab === category.id ? 'text-white' : category.color}`} />
              <span className="font-semibold">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {serviceCategories.find(cat => cat.id === activeTab)?.name}
            </h3>
            <p className="text-lg text-gray-300">
              {serviceCategories.find(cat => cat.id === activeTab)?.description}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentServices.map((service) => (
            <div
              key={service.id}
              className={`cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300 relative ${
                hoveredService === service.id ? 'ring-2 ring-cyan-400' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.popular && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">4.9</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {Object.entries(service.stats).map(([key, value], index) => (
                  <div key={index} className="text-center p-2 bg-slate-700/50 rounded">
                    <div className="text-xs font-bold text-cyan-400">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-cyan-400">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                <div className="text-sm text-gray-400">Starting price</div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive suite of solutions or contact us for a personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
            >
              <span>Get Personalized Quote</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <span>Call: (302) 464-0950</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;