import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_X, _ChevronRight, _Home, _Star, _Users, _Settings, _HelpCircle, _Mail, _Phone, _MapPin, _Brain, _Atom, _Shield, _Rocket, _DollarSign, _Globe, _Cpu, _Database, _Lock, _Zap, _TrendingUp, _Award, _CheckCircle, _Clock, _ArrowRight, _Search, _Menu, _X as CloseIcon, _Target, _BookOpen, _Truck, _BarChart3, _Sparkles, _Eye, _Lightbulb, _Palette, _Code} from 'lucide-react';

interface SidebarItem {_name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean;}

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const sidebarItems: SidebarItem[] = [
  {_name: 'All Services', _href: '/comprehensive-services-showcase-2025', _icon: <Globe className="w-5 h-5" />, _description: 'Complete portfolio of all technology services', _badge: 'Showcase', _children: [
      { name: 'View All Services', _href: '/comprehensive-services-showcase-2025', _description: 'Complete services portfolio'},
      {_name: 'Service Categories', _href: '/comprehensive-services-showcase-2025#categories', _description: 'Browse by category'},
      {_name: 'Pricing Comparison', _href: '/comprehensive-services-showcase-2025#pricing', _description: 'Compare service costs'},
      {_name: 'Service Search', _href: '/comprehensive-services-showcase-2025#search', _description: 'Find specific services'},
      {_name: 'Latest Innovations', _href: '/revolutionary-2025-services-showcase', _description: 'Cutting-edge solutions'},
      {_name: '2026 Services', _href: '/revolutionary-2026-services', _description: 'Next generation solutions'},
      {_name: '2027 Services', _href: '/revolutionary-2027-services-showcase', _description: 'Future-ready services'},
      {_name: 'Ultimate 2026', _href: '/ultimate-2026-services-showcase', _description: 'Premium service collection'}
    ]
  },
  {_name: 'AI & Consciousness', _href: '/ai-services', _icon: <Brain className="w-5 h-5" />, _description: 'Revolutionary AI consciousness and emotional intelligence', _badge: 'New', _isNew: true, _children: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2025', _description: 'Emotional intelligence and self-awareness'},
      {_name: 'AI Quantum Neural Network', _href: '/ai-quantum-neural-network', _description: 'Hybrid AI-Quantum computing platform'},
      {_name: 'AI Autonomous Research', _href: '/ai-autonomous-research-assistant', _description: 'Self-directed AI research'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-training', _description: 'EQ training platform'},
      {_name: 'AI Predictive Maintenance', _href: '/ai-predictive-maintenance-platform', _description: 'Equipment failure prediction'},
      {_name: 'AI Content Personalization', _href: '/ai-content-personalization-engine', _description: 'Personalized content delivery'},
      {_name: 'AI Autonomous Ecosystem', _href: '/ai-autonomous-ecosystem-manager', _description: 'Self-managing AI systems'},
      {_name: 'AI Ethics & Governance', _href: '/ai-ethics-governance-framework', _description: 'Ethical AI frameworks'},
      {_name: 'AI Creativity Studio', _href: '/ai-creativity-studio', _description: 'AI-powered creative content'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform', _description: 'Personalized AI learning'},
      {_name: 'AI Healthcare Diagnostics', _href: '/ai-healthcare-diagnostics', _description: 'Medical AI solutions'},
      {_name: 'AI Financial Intelligence', _href: '/ai-financial-intelligence', _description: 'Financial AI analytics'},
      {_name: 'AI Sustainability Platform', _href: '/ai-sustainability-platform', _description: 'Environmental AI solutions'},
      {_name: 'AI Legal Contract Analyzer', _href: '/ai-legal-contract-analyzer', _description: 'Legal document analysis'}
    ]
  },
  {_name: 'Quantum & Emerging Tech', _href: '/quantum-services', _icon: <Atom className="w-5 h-5" />, _description: 'Quantum computing and breakthrough technologies', _badge: 'Hot', _isHot: true, _children: [
      { name: 'Space Resource Mining', _href: '/space-resource-mining-platform', _description: 'Asteroid mining and space resources'},
      {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-platform', _description: 'Unbreakable encryption'},
      {_name: 'Brain-Computer Interface', _href: '/brain-computer-interface-platform', _description: 'Neural interface technology'},
      {_name: 'Quantum Materials Discovery', _href: '/quantum-materials-discovery-platform', _description: 'Materials science acceleration'},
      {_name: 'Autonomous Vehicle AI', _href: '/autonomous-vehicle-ai-platform', _description: 'Self-driving AI systems'},
      {_name: 'Quantum Bio-Computing', _href: '/quantum-bio-computing-platform', _description: 'Quantum-biological hybrid processing'},
      {_name: 'Quantum Energy Platform', _href: '/quantum-energy-platform', _description: 'Fusion power simulation'},
      {_name: 'Quantum Robotics', _href: '/quantum-robotics', _description: 'Quantum-enhanced robotics'},
      {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity-platform', _description: 'Next-gen security'},
      {_name: 'Quantum Logistics', _href: '/quantum-logistics-optimization', _description: 'Route optimization'},
      {_name: 'Quantum Metaverse', _href: '/quantum-metaverse', _description: 'Quantum-enhanced virtual worlds'},
      {_name: 'Quantum IoT Platform', _href: '/quantum-iot', _description: 'Quantum-secured IoT'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading', _description: 'Quantum trading algorithms'}
    ]
  },
  {_name: 'Enterprise IT', _href: '/enterprise-it', _icon: <Shield className="w-5 h-5" />, _color: 'text-blue-400', _items: [
      { name: 'Quantum-Secure Cloud', _href: '/quantum-secure-cloud-infrastructure', _badge: 'New'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center', _badge: 'New'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration', _badge: 'New'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform', _badge: 'New'},
      {_name: 'AI-Powered DevOps', _href: '/ai-powered-devops-platform', _badge: 'New'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure-platform'},
      {_name: 'Zero Trust Security', _href: '/zero-trust-security-platform'},
      {_name: 'Quantum Networking', _href: '/quantum-networking'},
      {_name: 'Quantum Data Center', _href: '/quantum-data-center'},
      {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity'},
      {_name: 'Quantum Cloud Migration', _href: '/quantum-cloud-migration'}
    ]
  },
  {_name: 'Micro SAAS', _href: '/micro-saas', _icon: <Rocket className="w-5 h-5" />, _description: 'Innovative business solutions for modern enterprises', _badge: 'Popular', _children: [
      { name: 'AI Business Intelligence', _href: '/ai-business-intelligence-suite', _description: 'Data-driven insights'},
      {_name: 'AI Content Generation', _href: '/ai-content-generation-platform', _description: 'Automated content creation'},
      {_name: 'AI Customer Service', _href: '/ai-customer-service-automation', _description: 'Intelligent support automation'},
      {_name: 'AI Sales Intelligence', _href: '/ai-sales-intelligence-platform', _description: 'Sales performance optimization'},
      {_name: 'AI Marketing Automation', _href: '/ai-marketing-automation-suite', _description: 'Campaign optimization'},
      {_name: 'AI Project Management', _href: '/ai-project-management-platform', _description: 'Intelligent project coordination'},
      {_name: 'AI Financial Analytics', _href: '/ai-financial-analytics-platform', _description: 'Financial insights and optimization'},
      {_name: 'AI HR Management', _href: '/ai-hr-management-platform', _description: 'HR operations automation'},
      {_name: 'AI Supply Chain', _href: '/ai-supply-chain-optimization', _description: 'Supply chain optimization'},
      {_name: 'AI Legal Analysis', _href: '/ai-legal-document-analysis', _description: 'Legal document processing'}
    ]
  },
  {_name: 'Creative & Design', _href: '/creative-services', _icon: <Palette className="w-5 h-5" />, _description: 'AI-powered creative and design solutions', _children: [
      { name: 'AI Creativity Studio', _href: '/ai-creativity-studio', _description: 'AI-powered creative content'},
      {_name: 'Metaverse Development', _href: '/metaverse-development-studio', _description: '3D world creation'},
      {_name: 'Quantum Metaverse', _href: '/quantum-metaverse-platform', _description: 'Quantum-enhanced experiences'},
      {_name: '3D Design & Modeling', _href: '/3d-design-platform', _description: 'Advanced 3D creation tools'},
      {_name: 'AI Video Generation', _href: '/ai-video-generation', _description: 'Automated video content'},
      {_name: 'AI Music Composition', _href: '/ai-music-composition', _description: 'AI-generated music'}
    ]
  },
  {_name: 'Research & Development', _href: '/research-development', _icon: <BookOpen className="w-5 h-5" />, _description: 'Cutting-edge research and development services', _children: [
      { name: 'AI Autonomous Research', _href: '/ai-autonomous-research-assistant', _description: 'Self-directed research'},
      {_name: 'Quantum Materials Discovery', _href: '/quantum-materials-discovery-platform', _description: 'Materials science acceleration'},
      {_name: 'Space Technology Research', _href: '/space-technology-research', _description: 'Space exploration solutions'},
      {_name: 'Biotech AI Research', _href: '/biotech-ai-research-platform', _description: 'Biological research automation'},
      {_name: 'Neuroscience Research', _href: '/neuroscience-research-platform', _description: 'Brain research tools'},
      {_name: 'Climate Research AI', _href: '/climate-research-ai', _description: 'Environmental research automation'}
    ]
  },
  {_name: 'Industry Solutions', _href: '/industry-solutions', _icon: <Truck className="w-5 h-5" />, _description: 'Specialized solutions for specific industries', _children: [
      { name: 'Healthcare AI', _href: '/healthcare-ai-solutions', _description: 'Medical AI applications'},
      {_name: 'Financial Services', _href: '/financial-ai-solutions', _description: 'Fintech AI solutions'},
      {_name: 'Manufacturing AI', _href: '/manufacturing-ai-solutions', _description: 'Industrial automation'},
      {_name: 'Retail AI', _href: '/retail-ai-solutions', _description: 'Retail optimization'},
      {_name: 'Education AI', _href: '/education-ai-solutions', _description: 'Educational technology'},
      {_name: 'Transportation AI', _href: '/transportation-ai-solutions', _description: 'Smart transportation'}
    ]
  },
  {_name: 'Pricing & Plans', _href: '/pricing', _icon: <DollarSign className="w-5 h-5" />, _description: 'Flexible pricing options for all services', _children: [
      { name: '2025 Pricing', _href: '/pricing-2025', _description: 'Current year pricing'},
      {_name: '2026 Pricing', _href: '/pricing-2026', _description: 'Next year pricing'},
      {_name: 'Enterprise Plans', _href: '/enterprise-pricing', _description: 'Large organization pricing'},
      {_name: 'Startup Plans', _href: '/startup-pricing', _description: 'Small business pricing'},
      {_name: 'Custom Solutions', _href: '/custom-pricing', _description: 'Tailored pricing'},
      {_name: 'ROI Calculator', _href: '/roi-calculator', _description: 'Calculate your return on investment'}
    ]
  },
  {_name: 'Resources', _href: '/resources', _icon: <BookOpen className="w-5 h-5" />, _description: 'Educational resources and documentation', _children: [
      { name: 'Documentation', _href: '/docs', _description: 'Technical documentation'},
      {_name: 'API Reference', _href: '/api-docs', _description: 'API documentation'},
      {_name: 'Tutorials', _href: '/tutorials', _description: 'Step-by-step guides'},
      {_name: 'Case Studies', _href: '/case-studies', _description: 'Success stories'},
      {_name: 'Blog', _href: '/blog', _description: 'Latest insights and news'},
      {_name: 'Research Papers', _href: '/research-papers', _description: 'Academic publications'}
    ]
  },
  {_name: 'Support', _href: '/support', _icon: <Settings className="w-5 h-5" />, _description: 'Technical support and customer service', _children: [
      { name: 'Help Center', _href: '/help', _description: 'Self-service support'},
      {_name: 'Contact Support', _href: '/contact', _description: 'Get in touch'},
      {_name: 'Live Chat', _href: '/live-chat', _description: 'Real-time assistance'},
      {_name: 'Training Programs', _href: '/training', _description: 'Skill development'},
      {_name: 'Community Forum', _href: '/community', _description: 'User community'},
      {_name: 'Status Page', _href: '/status', _description: 'Service status'}
    ]
  }
];

const _resources = [
  {_name: 'Documentation', _href: '/docs', _icon: <FileText className="w-4 h-4" />},
  {_name: 'API Reference', _href: '/api-documentation', _icon: <Settings className="w-4 h-4" />},
  {_name: 'Case Studies', _href: '/case-studies', _icon: <BookOpen className="w-4 h-4" />},
  {_name: 'Blog & News', _href: '/blog', _icon: <FileText className="w-4 h-4" />},
  {_name: 'Training & Certification', _href: '/training', _icon: <Award className="w-4 h-4" />},
  {_name: 'Community Forum', _href: '/community', _icon: <Users className="w-4 h-4" />}
];


const _supportLinks = [
  {_name: 'Contact Support', _href: '/support', _description: 'Get help from our team'},
  {_name: 'Documentation', _href: '/docs', _description: 'Technical guides'},
  {_name: 'API Reference', _href: '/api-documentation', _description: 'Developer documentation'},
  {_name: 'Status Page', _href: '/status', _description: 'Service status'},
  {_name: 'Training', _href: '/training', _description: 'Learn our platforms'},
  {_name: 'Community', _href: '/community', _description: 'Connect with users'}
];

  const _toggleSection = (_title: string) => {_const _newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);} else {_newExpanded.add(title);}
    setExpandedSections(newExpanded);
  };

  const _filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (_<motion.aside
      initial={_{ x: -300, _opacity: 0}}
      animate={_{ x: 0, _opacity: 1}}
      transition={_{ duration: 0.5, _ease: "easeOut"}}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
    >
      {_/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50"></div>
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h2>
            <p className="text-xs text-gray-400">Navigation</p>
          </div>
        </div>

        {_/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>{_contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>{_contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{_contactInfo.website}</span>
          </div>
        </div>
      </div>

      {_/* Navigation Sections */}
      <div className="p-4 space-y-2">
        {_sidebarSections.map((section) => (_<div key={section.title} className="space-y-1">
            <button
              onClick={_() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {_section.icon}
                </div>
                <span className="font-medium">{_section.title}</span>
                {_section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    {section.badge}
                  </span>
                )}
              </div>
              {_expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              )}
            </button>

            <AnimatePresence>
              {_expandedSections.has(section.title) && (_<motion.div
                  initial={{ opacity: 0, _height: 0}}
                  animate={_{ opacity: 1, _height: 'auto'}}
                  exit={_{ opacity: 0, _height: 0}}
                  transition={_{ duration: 0.2}}
                  className="ml-8 space-y-1"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {_/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchQuery}
                  onChange={_(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
              
              {_/* Search Results */}
              {_searchQuery && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Search Results</h4>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.slice(0, _5).map(_(service) => (
                        <Link
                          key={service.name}
                          href={_service.href}
                          onClick={_onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                        >
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                            {_service.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {_service.description}
                          </div>
                        </Link>
                      ))}
                      {_filteredServices.length > 5 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{filteredServices.length - 5} more results
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-2">
                      No services found
                    </div>
                  )}
                </div>
              )}
            </div>

            {_/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={_`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={_`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{_contactInfo.address}</span>
                </div>
              </div>
            </div>

            {_/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {_stats.map(_(stat, _index) => (
                  <motion.div
                    key={stat.label}
                    initial={_{ opacity: 0, _scale: 0.8}}
                    animate={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 0.3, _delay: index * 0.1}}
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{_stat.value}</div>
                    <div className="text-xs text-gray-400">{_stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {_/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                {_quickLinks.map(_(link) => (
                  <Link
                    key={link.name}
                    href={_link.href}
                    onClick={_onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {_link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {_link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {_/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {_sidebarItems.map(_(item) => (_<div key={item.name}>
                    <button
                      onClick={_() => toggleCategory(item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={_`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {_item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {_item.name}
                        </span>
                      </div>
                      <ChevronRight 
                        className={_`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item.name ? 'rotate-90' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {_expandedCategory === item.name && (_<motion.div
                          initial={{ opacity: 0, _height: 0}}
                          animate={_{ opacity: 1, _height: 'auto'}}
                          exit={_{ opacity: 0, _height: 0}}
                          transition={_{ duration: 0.2}}
                          className="ml-8 mt-2 space-y-1"
                        >
                          {_item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={_child.href}
                              onClick={_onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                {_child.name}
                              </span>
                              {_child.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {_/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={_onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    Contact Us
                  </div>
                  <div className="text-xs text-gray-500">Get in touch with our team</div>
                </Link>
                <Link
                  href="/pricing"
                  onClick={_onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    View Pricing
                  </div>
                  <div className="text-xs text-gray-500">Explore our pricing plans</div>
                </Link>
                <Link
                  href="/about"
                  onClick={_onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    About Us
                  </div>
                  <div className="text-xs text-gray-500">Learn about Zion Tech Group</div>
                </Link>
              </div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-blue-400">1000+</div>
              <div className="text-xs text-gray-400">Clients</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-green-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {_/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Link>
        </div>
      </div>

      {_/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
    </motion.aside>
  );
};

export default EnhancedSidebar2025;
