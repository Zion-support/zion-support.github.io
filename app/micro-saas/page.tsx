import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Shield, Cloud, Users, Target, Calendar, 
  ArrowRight, Star, CheckCircle, Zap, Brain, Globe,
  Search, Filter, Grid, List, TrendingUp, Award,
  DollarSign, Clock, Users2, Settings, Database,
  FileText, MessageSquare, ShoppingCart, Briefcase,
  PieChart, Activity, Lock, Smartphone, Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All', 'Analytics', 'Security', 'Storage', 'CRM', 'Marketing', 
    'Productivity', 'Finance', 'Operations', 'HR', 'E-commerce', 
    'Documentation', 'Social Media', 'AI Tools', 'Automation'
  ];

  const microSaasProducts = [
    {
      id: 1,
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.",
      price: 299,
      category: "Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Visualization", "API Integration"],
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      popular: true,
      new: false
    },
    {
      id: 2,
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection, automated response, and 24/7 monitoring. Enterprise-grade security for your business.",
      price: 499,
      category: "Security",
      icon: <Shield className="w-8 h-8" />,
      features: ["AI Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Tools", "Incident Management"],
      rating: 4.8,
      reviews: 892,
      link: "/zion-security-shield",
      popular: true,
      new: false
    },
    {
      id: 3,
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features. Your data, secured and accessible.",
      price: 99,
      category: "Storage",
      icon: <Cloud className="w-8 h-8" />,
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Version Control", "Team Collaboration"],
      rating: 4.7,
      reviews: 2156,
      link: "/zion-cloud-vault",
      popular: true,
      new: false
    },
    {
      id: 4,
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive customer insights.",
      price: 199,
      category: "CRM",
      icon: <Users className="w-8 h-8" />,
      features: ["AI Lead Scoring", "Automated Follow-ups", "Customer Insights", "Pipeline Management", "Integration Hub"],
      rating: 4.8,
      reviews: 1683,
      link: "/zion-ai-crm-pro",
      popular: true,
      new: false
    },
    {
      id: 5,
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics.",
      price: 149,
      category: "Marketing",
      icon: <Target className="w-8 h-8" />,
      features: ["Content Generation", "Multi-channel Campaigns", "Behavioral Targeting", "A/B Testing", "ROI Analytics"],
      rating: 4.6,
      reviews: 1124,
      link: "/zion-ai-marketing-automation-pro",
      popular: true,
      new: false
    },
    {
      id: 6,
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization, resource allocation, and automated progress tracking.",
      price: 99,
      category: "Productivity",
      icon: <Calendar className="w-8 h-8" />,
      features: ["Task Prioritization", "Resource Allocation", "Progress Tracking", "Team Collaboration", "Deadline Management"],
      rating: 4.7,
      reviews: 945,
      link: "/zion-ai-project-manager-pro",
      popular: true,
      new: false
    },
    {
      id: 7,
      name: "Zion AI Accounting Suite",
      description: "Automated accounting with AI-powered expense tracking, invoice processing, financial reporting, and tax preparation assistance.",
      price: 179,
      category: "Finance",
      icon: <DollarSign className="w-8 h-8" />,
      features: ["Expense Tracking", "Invoice Processing", "Financial Reports", "Tax Preparation", "Compliance Tools"],
      rating: 4.8,
      reviews: 756,
      link: "/zion-ai-accounting-suite",
      popular: false,
      new: true
    },
    {
      id: 8,
      name: "Zion AI Inventory Manager",
      description: "Smart inventory management with predictive restocking, automated supply chain optimization, and real-time tracking.",
      price: 129,
      category: "Operations",
      icon: <Database className="w-8 h-8" />,
      features: ["Predictive Restocking", "Supply Chain Optimization", "Real-time Tracking", "Demand Forecasting", "Cost Analysis"],
      rating: 4.6,
      reviews: 634,
      link: "/zion-ai-inventory-manager",
      popular: false,
      new: true
    },
    {
      id: 9,
      name: "Zion AI HR Assistant Pro",
      description: "AI-powered HR management with automated recruitment, employee analytics, performance tracking, and benefits administration.",
      price: 159,
      category: "HR",
      icon: <Users2 className="w-8 h-8" />,
      features: ["Automated Recruitment", "Employee Analytics", "Performance Tracking", "Benefits Admin", "Compliance Management"],
      rating: 4.7,
      reviews: 523,
      link: "/zion-ai-hr-assistant-pro",
      popular: false,
      new: true
    },
    {
      id: 10,
      name: "Zion AI E-commerce Optimizer",
      description: "AI-driven e-commerce optimization with dynamic pricing, inventory management, customer insights, and conversion optimization.",
      price: 199,
      category: "E-commerce",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ["Dynamic Pricing", "Inventory Management", "Customer Insights", "Conversion Optimization", "Sales Analytics"],
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-ecommerce-optimizer",
      popular: true,
      new: false
    },
    {
      id: 11,
      name: "Zion AI Document Processor",
      description: "Intelligent document processing with OCR, data extraction, automated workflow management, and smart categorization.",
      price: 89,
      category: "Documentation",
      icon: <FileText className="w-8 h-8" />,
      features: ["OCR Technology", "Data Extraction", "Workflow Automation", "Smart Categorization", "Search & Retrieval"],
      rating: 4.5,
      reviews: 412,
      link: "/zion-ai-document-processor",
      popular: false,
      new: true
    },
    {
      id: 12,
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content generation, scheduling, performance analytics, and engagement optimization.",
      price: 119,
      category: "Social Media",
      icon: <MessageSquare className="w-8 h-8" />,
      features: ["Content Generation", "Post Scheduling", "Performance Analytics", "Engagement Optimization", "Multi-platform Management"],
      rating: 4.6,
      reviews: 678,
      link: "/zion-ai-social-media-manager",
      popular: false,
      new: true
    },
    {
      id: 13,
      name: "Zion AI Code Assistant Pro",
      description: "AI-powered coding assistant with intelligent code completion, bug detection, refactoring suggestions, and automated testing.",
      price: 149,
      category: "AI Tools",
      icon: <Brain className="w-8 h-8" />,
      features: ["Code Completion", "Bug Detection", "Refactoring Suggestions", "Automated Testing", "Code Review"],
      rating: 4.9,
      reviews: 1234,
      link: "/zion-ai-code-assistant-pro",
      popular: true,
      new: false
    },
    {
      id: 14,
      name: "Zion AI Workflow Automation",
      description: "Intelligent workflow automation with process optimization, task automation, and intelligent decision making capabilities.",
      price: 169,
      category: "Automation",
      icon: <Settings className="w-8 h-8" />,
      features: ["Process Optimization", "Task Automation", "Decision Making", "Integration Hub", "Performance Monitoring"],
      rating: 4.7,
      reviews: 567,
      link: "/zion-ai-workflow-automation",
      popular: false,
      new: true
    },
    {
      id: 15,
      name: "Zion AI Data Warehouse",
      description: "Advanced data warehousing solution with AI-powered data processing, analytics, and business intelligence capabilities.",
      price: 249,
      category: "Analytics",
      icon: <PieChart className="w-8 h-8" />,
      features: ["Data Processing", "Advanced Analytics", "Business Intelligence", "Data Visualization", "Real-time Insights"],
      rating: 4.8,
      reviews: 345,
      link: "/zion-ai-data-warehouse",
      popular: false,
      new: true
    }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions. AI-powered tools for analytics, security, productivity, and business automation. Start your free trial today."
        keywords="micro saas, business tools, AI solutions, automation, productivity, analytics, CRM, project management, business software"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">50+ Micro SAAS Solutions Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="neon-text futuristic-text animate-neon-glow" data-text="Micro SAAS Solutions">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From analytics to automation, we have the tools you need to succeed.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SAAS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  viewMode === 'grid' ? (
                    index % 3 === 0 ? 'cyber-card' : 
                    index % 3 === 1 ? 'hologram-card' : 
                    'quantum-card'
                  ) : 'cyber-card'
                }`}
              >
                <Link to={product.link} className="block">
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {product.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                        Popular
                      </span>
                    )}
                    {product.new && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        New
                      </span>
                    )}
                  </div>

                  <div className={`${viewMode === 'list' ? 'flex items-start space-x-6' : ''}`}>
                    {/* Icon */}
                    <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'flex items-center mb-4'}`}>
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform animate-quantum-pulse">
                        {product.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors futuristic-text">
                          {product.name}
                        </h3>
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 3 && (
                          <span className="text-xs text-cyan-400">
                            +{product.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Rating and Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">
                            ${product.price}
                          </div>
                          <div className="text-sm text-gray-400">/month</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;