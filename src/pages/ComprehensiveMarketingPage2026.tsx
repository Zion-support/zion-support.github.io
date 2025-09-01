import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Search, 
  Mail, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Lightbulb,
  Rocket,
  Brain,
  Shield,
  Cpu,
  Network,
  Lock,
  Palette,
  Filter,
  ChevronDown,
  ExternalLink,
  Eye,
  Heart,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  Gauge,
  Workflow,
  Zap,
  Code,
  Cloud,
  Database
} from 'lucide-react';

const ComprehensiveMarketingPage2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const marketingCategories = [
    { id: 'all', name: 'All Services', icon: TrendingUp, count: 20 },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: Globe, count: 6 },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Brain, count: 5 },
    { id: 'analytics', name: 'Analytics & Insights', icon: BarChart3, count: 4 },
    { id: 'automation', name: 'Marketing Automation', icon: Zap, count: 3 },
    { id: 'strategy', name: 'Strategy & Consulting', icon: Target, count: 2 }
  ];

  const marketingServices = [
    {
      id: 1,
      name: 'AI-Powered Marketing Automation Platform',
      category: 'ai-marketing',
      description: 'Intelligent marketing automation that learns from customer behavior and optimizes campaigns in real-time.',
      features: ['Behavioral targeting', 'Predictive analytics', 'A/B testing automation', 'Personalized content'],
      price: 'From $45,000',
      duration: '20-28 weeks',
      complexity: 'Very High',
      icon: Brain,
      benefits: ['Increased conversion rates', 'Reduced manual work', 'Better ROI tracking', 'Personalized experiences'],
      technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'AWS'],
      caseStudy: 'Improved conversion rates by 65% for e-commerce client',
      innovationLevel: 'Cutting Edge',
      marketTrend: 'High Growth'
    },
    {
      id: 2,
      name: 'Advanced Customer Analytics Dashboard',
      category: 'analytics',
      description: 'Comprehensive customer analytics platform with real-time insights and predictive modeling.',
      features: ['Customer segmentation', 'Predictive modeling', 'Real-time reporting', 'Custom dashboards'],
      price: 'From $35,000',
      duration: '16-24 weeks',
      complexity: 'High',
      icon: BarChart3,
      benefits: ['Data-driven decisions', 'Customer insights', 'Improved targeting', 'Performance optimization'],
      technologies: ['Tableau', 'Python', 'React', 'PostgreSQL', 'Apache Spark'],
      caseStudy: 'Increased customer lifetime value by 40%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Demand'
    },
    {
      id: 3,
      name: 'Omnichannel Marketing Platform',
      category: 'digital-marketing',
      description: 'Seamless marketing across all channels with unified customer experience and consistent messaging.',
      features: ['Multi-channel integration', 'Unified customer view', 'Cross-channel campaigns', 'Real-time sync'],
      price: 'From $40,000',
      duration: '18-26 weeks',
      complexity: 'High',
      icon: Globe,
      benefits: ['Consistent messaging', 'Better customer experience', 'Improved conversion', 'Easier management'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Webhooks'],
      caseStudy: 'Increased engagement across all channels by 55%',
      innovationLevel: 'Advanced',
      marketTrend: 'Growing'
    },
    {
      id: 4,
      name: 'Predictive Lead Scoring System',
      category: 'ai-marketing',
      description: 'AI-powered lead scoring that predicts customer likelihood to convert and prioritizes sales efforts.',
      features: ['Predictive scoring', 'Behavioral analysis', 'Lead prioritization', 'ROI optimization'],
      price: 'From $30,000',
      duration: '14-20 weeks',
      complexity: 'High',
      icon: Target,
      benefits: ['Better lead quality', 'Increased sales efficiency', 'Higher conversion rates', 'ROI improvement'],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
      caseStudy: 'Improved sales conversion by 45%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Growth'
    },
    {
      id: 5,
      name: 'Social Media Management Suite',
      category: 'digital-marketing',
      description: 'Comprehensive social media management with AI-powered content optimization and scheduling.',
      features: ['Content scheduling', 'AI optimization', 'Analytics tracking', 'Multi-platform support'],
      price: 'From $25,000',
      duration: '12-18 weeks',
      complexity: 'Medium',
      icon: MessageCircle,
      benefits: ['Time savings', 'Better engagement', 'Consistent posting', 'Performance insights'],
      technologies: ['React', 'Node.js', 'Social APIs', 'MongoDB', 'Redis'],
      caseStudy: 'Increased social engagement by 80%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Demand'
    },
    {
      id: 6,
      name: 'Email Marketing Automation Platform',
      category: 'automation',
      description: 'Advanced email marketing with AI-driven personalization and behavioral triggers.',
      features: ['Behavioral triggers', 'Personalization', 'A/B testing', 'Advanced analytics'],
      price: 'From $28,000',
      duration: '14-20 weeks',
      complexity: 'Medium',
      icon: Mail,
      benefits: ['Higher open rates', 'Better click-through', 'Increased conversions', 'Automated workflows'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'SMTP services'],
      caseStudy: 'Improved email conversion by 60%',
      innovationLevel: 'Advanced',
      marketTrend: 'Stable'
    },
    {
      id: 7,
      name: 'SEO & Content Optimization Platform',
      category: 'digital-marketing',
      description: 'AI-powered SEO platform with content optimization and keyword research automation.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitive analysis'],
      price: 'From $32,000',
      duration: '16-22 weeks',
      complexity: 'Medium',
      icon: Search,
      benefits: ['Better search rankings', 'Increased organic traffic', 'Content optimization', 'Competitive advantage'],
      technologies: ['Python', 'React', 'PostgreSQL', 'SEO APIs', 'NLP'],
      caseStudy: 'Increased organic traffic by 120%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Demand'
    },
    {
      id: 8,
      name: 'Customer Journey Mapping Tool',
      category: 'strategy',
      description: 'Visual customer journey mapping with touchpoint analysis and optimization recommendations.',
      features: ['Journey visualization', 'Touchpoint analysis', 'Optimization suggestions', 'Customer insights'],
      price: 'From $22,000',
      duration: '10-16 weeks',
      complexity: 'Medium',
      icon: Workflow,
      benefits: ['Better customer experience', 'Improved conversion', 'Reduced friction', 'Strategic insights'],
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Analytics APIs'],
      caseStudy: 'Reduced customer drop-off by 35%',
      innovationLevel: 'Advanced',
      marketTrend: 'Growing'
    },
    {
      id: 9,
      name: 'Marketing Performance Dashboard',
      category: 'analytics',
      description: 'Real-time marketing performance dashboard with KPI tracking and automated reporting.',
      features: ['KPI tracking', 'Real-time updates', 'Automated reporting', 'Custom metrics'],
      price: 'From $20,000',
      duration: '8-14 weeks',
      complexity: 'Medium',
      icon: Gauge,
      benefits: ['Performance visibility', 'Data-driven decisions', 'Time savings', 'Better insights'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
      caseStudy: 'Reduced reporting time by 70%',
      innovationLevel: 'Advanced',
      marketTrend: 'Stable'
    },
    {
      id: 10,
      name: 'Influencer Marketing Platform',
      category: 'digital-marketing',
      description: 'Comprehensive influencer marketing platform with discovery, management, and ROI tracking.',
      features: ['Influencer discovery', 'Campaign management', 'ROI tracking', 'Performance analytics'],
      price: 'From $35,000',
      duration: '18-24 weeks',
      complexity: 'High',
      icon: Users,
      benefits: ['Better influencer matches', 'Campaign optimization', 'ROI tracking', 'Streamlined management'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'Analytics'],
      caseStudy: 'Increased influencer campaign ROI by 85%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Growth'
    }
  ];

  const filteredServices = marketingServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Basic': return 'text-gray-400';
      case 'Advanced': return 'text-blue-400';
      case 'Cutting Edge': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            2026
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Marketing Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your marketing with AI-powered automation, advanced analytics, and cutting-edge 
            digital strategies. Stay ahead of the competition with our innovative marketing solutions.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search marketing services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {marketingCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(service.complexity)} bg-slate-700`}>
                      {service.complexity}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Innovation Level */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">Innovation:</span>
                    <span className={`font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">Market Trend:</span>
                    <span className="text-green-400 font-medium">
                      {service.marketTrend}
                    </span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.price}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.duration}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.complexity}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded-md">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Case Study */}
                <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">Case Study</span>
                  </div>
                  <p className="text-xs text-gray-400">{service.caseStudy}</p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  Transform Your Marketing
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Trends Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                2026 Marketing Trends
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our insights into the latest marketing trends and technologies 
                that will shape the industry in 2026 and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI-Powered Personalization',
                  description: 'Hyper-personalized marketing experiences driven by AI and machine learning'
                },
                {
                  icon: BarChart3,
                  title: 'Predictive Analytics',
                  description: 'Data-driven insights that predict customer behavior and optimize campaigns'
                },
                {
                  icon: Globe,
                  title: 'Omnichannel Integration',
                  description: 'Seamless customer experiences across all marketing channels and touchpoints'
                },
                {
                  icon: Zap,
                  title: 'Marketing Automation',
                  description: 'Intelligent automation that streamlines workflows and improves efficiency'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Don't let your competitors get ahead. Start implementing the latest marketing technologies 
              and strategies today to dominate your market in 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Marketing Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:shadow-lg">
                Schedule Marketing Consultation
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketingPage2026;