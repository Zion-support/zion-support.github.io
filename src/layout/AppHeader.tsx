import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, Eye, FileText, Globe, Handshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, ShieldCheck, Sparkles, Crown, Flame, Gauge, GitFork, Server, Smartphone, Database, Network, Clock, Truck, Factory, City, CheckCircle, ArrowUpRight, Play, MailIcon, BarChart3, PenTool, Key, Globe2CarHome } from "lucide-react";
import React, { useEffectuseState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
export, function, AppHeader() {
  const [mobileMenuOpensetMobileMenuOpen] = useState(false);
  const [searchQuerysetSearchQuery] = useState('');
  const [servicesDropdownOpensetServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpensetSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpensetResourcesDropdownOpen] = useState(false);
  const [scrolledsetScrolled] = useState(false);
  const [isSearchingsetIsSearching] = useState(false);
;
  useEffect(() => {
    const handleScroll = () => {;
      setScrolled(window.scrollY > 10);
    },;
    window.addEventListener('scroll'handleScroll);
    return () => window.removeEventListener('scroll'handleScroll);
  }, []);
  const handleSearch = async (e: React.FormEvent) => {;
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await, new, Promise(resolve => setTimeout(resolve10o00))// Simulate search;
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`,;
      } finally {
        setIsSearching(false);
      };
    }
  },;
  const navigation = [;
    { name: 'Home'hre,;
    f: '/'curren,;
  t: true };
    { name: 'Services', href: '/services'curren,;
    t: falsehasDropdow,;
  n: true };
    { name: 'Solutions', href: '/solutions'curren,;
    t: falsehasDropdow,;
  n: true };
    { name: 'Pricing'hre,;
    f: '/pricing-guide-20o30'curren,;
  t: false };
    { name: 'Resources', href: '/resources'curren,;
    t: falsehasDropdow,;
  n: true };
    { name: 'About'hre,;
    f: '/about'curren,;
  t: false }{ name: 'Contact'hre,;
    f: '/contact'curren,;
  t: false };
,  ];
  const services = [;
    // AI & Business Intelligence;
    { ;
      name: 'Innovative, Micro, SAAS 20o25',href: '/innovative-micro-saas-services-20o25',icon: Rocket,description: 'Cutting-edge, AI, Services'featured: truecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    { ;
      name: 'AI, Business, Intelligence',href: '/services/ai-business-intelligence',icon: Brain,description: 'Machine Learning & Data Science'feature,;
    d: truecolo,;
  r: 'from-purple-50o0 to-cyan-50o0';
    };
    { ;
      name: 'AI, Autonomous, Supply Chain',href: '/services/ai-autonomous-supply-chain-orchestrator',icon: Truck,description: 'Autonomous, Supply, Chain Management'featured: truecolo,;
  r: 'from-blue-50o0 to-indigo-50o0';
    };
    { ;
      name: 'AI, Autonomous, Sales Intelligence',href: '/services/ai-autonomous-sales-intelligence',icon: Target,description: 'Autonomous Sales & Lead Generation'feature,;
    d: truecolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    // AI & Healthcare;
    { ;
      name: 'AI, Healthcare, Platform',href: '/services/ai-healthcare-platform',icon: Heart,description: 'Medical AI & Diagnostics'feature,;
    d: truecolo,;
  r: 'from-red-50o0 to-pink-50o0';
    };
    { ;
      name: 'Quantum, AI, Drug Discovery',href: '/services/quantum-ai-drug-discovery-platform',icon: Atom,description: 'Quantum, Drug, Discovery'featured: truecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    // AI & Legal Tech;
    { ;
      name: 'AI, Legal, Contract Analyzer',href: '/services/ai-autonomous-legal-contract-analyzer',icon: Scale,description: 'Autonomous, Legal, Analysis'featured: truecolo,;
  r: 'from-blue-50o0 to-indigo-50o0';
    };
    // AI & Content;
    { ;
      name: 'AI, Creative, Studio',href: '/services/ai-autonomous-creative-studio',icon: PenTool,description: 'Autonomous, Content, Creation'featured: truecolo,;
  r: 'from-orange-50o0 to-red-50o0';
    };
    { ;
      name: 'AI, Content, Creation',href: '/services/ai-content-creation',icon: FileText,description: 'Content Generation & Optimization'feature,;
    d: truecolo,;
  r: 'from-blue-50o0 to-indigo-50o0';
    };
    // AI & Customer Support;
    { ;
      name: 'AI, Customer, Success Platform',href: '/services/ai-autonomous-customer-success-platform',icon: MessageCircle,description: 'Autonomous, Customer, Success'featured: truecolo,;
  r: 'from-blue-50o0 to-purple-50o0';
    };
    { ;
      name: 'AI, Customer, Support',href: '/services/ai-customer-support',icon: HelpCircle,description: 'AI-Powered Support'feature,;
    d: truecolo,;
  r: 'from-green-50o0 to-blue-50o0';
    };
    // AI & Research;
    { ;
      name: 'AI, Research, Assistant',href: '/services/ai-autonomous-research-assistant',icon: BookOpen,description: 'Autonomous, Research, Automation'featured: truecolo,;
  r: 'from-purple-50o0 to-violet-50o0';
    };
    // AI & Education;
    { ;
      name: 'AI, Education, Platform',href: '/services/ai-autonomous-education-platform',icon: Users,description: 'Autonomous, Learning, Management'featured: truecolo,;
  r: 'from-blue-50o0 to-indigo-50o0';
    };
    // AI & HR;
    { ;
      name: 'AI, HR, Platform',href: '/services/ai-autonomous-hr-platform',icon: Users,description: 'Autonomous, HR, Management'featured: truecolo,;
  r: 'from-indigo-50o0 to-blue-50o0';
    };
    // AI & Entertainment;
    { ;
      name: 'AI, Entertainment, Platform',href: '/services/ai-autonomous-entertainment-platform',icon: Play,description: 'Autonomous, Entertainment, Creation'featured: truecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    // AI & Metaverse;
    { ;
      name: 'AI, Metaverse, Platform',href: '/services/ai-autonomous-metaverse-platform',icon: Globe,description: 'Autonomous, Virtual, Worlds'featured: truecolo,;
  r: 'from-purple-50o0 to-indigo-50o0';
    };
    // AI & Space Tech;
    { ;
      name: 'AI, Space, Technology',href: '/services/ai-autonomous-space-technology-platform',icon: Rocket,description: 'Autonomous, Space, Operations'featured: truecolo,;
  r: 'from-indigo-50o0 to-purple-50o0';
    };
    // AI & Green Tech;
    { ;
      name: 'AI, Green, Technology',href: '/services/ai-autonomous-green-technology-platform',icon: Leaf,description: 'Autonomous, Environmental, Management'featured: truecolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    // Cybersecurity;
    { ;
      name: 'AI, Autonomous, Cybersecurity',href: '/services/ai-autonomous-cybersecurity-operations',icon: ShieldCheck,description: 'Autonomous, Security, Operations'featured: truecolo,;
  r: 'from-red-50o0 to-orange-50o0';
    };
    { ;
      name: 'AI Cybersecurity',href: '/services/ai-cybersecurity',icon: Shield,description: 'AI-Powered Security'feature,;
    d: truecolo,;
  r: 'from-green-50o0 to-blue-50o0';
    };
    // Quantum Computing;
    { ;
      name: 'Quantum, AI, Trading Platform',href: '/services/quantum-ai-trading-platform',icon: Atom,description: 'Quantum-Powered Trading'feature,;
    d: truecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    { ;
      name: 'Quantum Computing',href: '/services/quantum-computing',icon: Atom,description: 'Quantum AI & Optimization'feature,;
    d: truecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    // Blockchain & Web3;
    { ;
      name: 'Blockchain, Governance, Platform',href: '/services/blockchain-autonomous-governance-platform',icon: GitFork,description: 'Decentralized, Autonomous, Governance'featured: truecolo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
    // Cloud & DevOps;
    { ;
      name: 'Cloud Infrastructure',href: '/services/cloud-devops',icon: Cloud,description: 'Cloud & DevOps Solutions'feature,;
    d: truecolo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    // IoT & Edge Computing;
    { ;
      name: 'IoT, Edge, Computing',href: '/services/iot-edge-computing',icon: Cpu,description: 'IoT & Real-time Processing'feature,;
    d: truecolo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    // Digital Twin;
    { ;
      name: 'Digital, Twin, Platform',href: '/services/digital-twin',icon: Globe,description: 'Virtual Replicas & Simulation'feature,;
    d: truecolo,;
  r: 'from-blue-50o0 to-indigo-50o0';
    };
    // Data Analytics;
    { ;
      name: 'Data Analytics',href: '/services/data-analytics',icon: BarChart3,description: 'Advanced Analytics & BI'feature,;
    d: truecolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    },;
    // IT Infrastructure;
    { ;
      name: 'IT Infrastructure',href: '/services/it-infrastructure',icon: Serverdescription: 'Infrastructure & Management'feature,;
    d: truecolo,;
  r: 'from-gray-50o0 to-slate-50o0';
    };
,  ];
  const solutions = [;
    {
      title: 'Enterprise Solutions',items: [;
        { name: 'Digital Transformation'hre,;
    f: '/solutions/digital-transformation'descriptio,;
  n: 'Complete, enterprise, digital transformation' };
        { name: 'Cloud Migration'hre,;
    f: '/solutions/cloud-migration'descriptio,;
  n: 'Seamless, cloud, migration strategies' };
        { name: 'Data Strategy'hre,;
    f: '/solutions/data-strategy'descriptio,;
  n: 'Comprehensive, data, strategy implementation' }{ name: 'AI Implementation'hre,;
    f: '/solutions/ai-implementation'descriptio,;
  n: 'End-to-end, AI, implementation' }
    ,  ];
    };
    {
      title: 'Industry Solutions',items: [;
        { name: 'Healthcare AI'hre,;
    f: '/solutions/healthcare-ai'descriptio,;
  n: 'AI, solutions, for healthcare industry' };
        { name: 'Financial Services'hre,;
    f: '/solutions/financial-services'descriptio,;
  n: 'FinTech, and, banking solutions' };
        { name: 'Manufacturing'hre,;
    f: '/solutions/manufacturing'descriptio,;
  n: 'Smart, manufacturing, solutions' }{ name: 'Retail & E-commerce'hre,;
    f: '/solutions/retail-ecommerce'descriptio,;
  n: 'Retail, transformation, solutions' }
    ,  ];
    };
    {
      title: 'Technology Solutions',items: [;
        { name: 'Cybersecurity'hre,;
    f: '/solutions/cybersecurity'descriptio,;
  n: 'Comprehensive, security, solutions' };
        { name: 'Blockchain'hre,;
    f: '/solutions/blockchain'descriptio,;
  n: 'Blockchain, and, Web3 solutions' };
        { name: 'IoT Solutions'hre,;
    f: '/solutions/iot'descriptio,;
  n: 'Internet, of, Things solutions' }{ name: 'Quantum Computing'hre,;
    f: '/solutions/quantum-computing'descriptio,;
  n: 'Quantum, computing, applications' }
    ,  ];
    };
  ];
  const resources = [;
    {
      title: 'Learning Resources',items: [;
        { name: 'Documentation'hre,;
    f: '/docs'descriptio,;
  n: 'Technical, documentation, and guides' };
        { name: 'API Reference'hre,;
    f: '/docs/api'descriptio,;
  n: 'Complete, API, documentation' };
        { name: 'SDKs & Libraries'hre,;
    f: '/docs/sdks'descriptio,;
  n: 'Software, development, kits' }{ name: 'Code Examples'hre,;
    f: '/docs/examples'descriptio,;
  n: 'Code, samples, and tutorials' }
    ,  ];
    };
    {
      title: 'Research & Insights',items: [;
        { name: 'Case Studies'hre,;
    f: '/case-studies'descriptio,;
  n: 'Success, stories, and implementations' };
        { name: 'White Papers'hre,;
    f: '/white-papers'descriptio,;
  n: 'In-depth, technical, research' };
        { name: 'Blog'hre,;
    f: '/blog'descriptio,;
  n: 'Latest, news, and insights' }{ name: 'Webinars'hre,;
    f: '/webinars'descriptio,;
  n: 'Educational, webinars, and events' }
    ,  ];
    };
    {
      name: 'White Papers',href: '/white-papers',icon: FileTextdescriptio,;
    n: 'In-depth, research, and analysis'feature,;
  d: true;
    };
    {
      name: 'Webinars',href: '/webinars',icon: Usersdescriptio,;
    n: 'Expert-led, learning, sessions'feature,;
  d: true;
    };
    {
      name: 'Documentation',href: '/docs',icon: Codedescriptio,;
    n: 'Technical, guides, and APIs'feature,;
  d: true;
    };
    {
      name: 'FAQ & Support',href: '/faq',icon: HelpCircledescriptio,;
    n: 'Get, help, and answers'feature,;
  d: true;
    };
    {
      name: 'Pricing, Guide, 20o25',href: '/pricing-guide-20o25',icon: DollarSigndescriptio,;
    n: 'Complete, pricing, information'feature,;
  d: true;
    }
  ];
  const quickLinks = [;
    { name: 'Marketplace'hre,;
    f: '/marketplace'ico,;
  n: ShoppingCart };
    { name: 'Request Quote'hre,;
    f: '/request-quote'ico,;
  n: MessageCircle };
    { name: 'Pricing'hre,;
    f: '/pricing'ico,;
  n: DollarSign };
    { name: 'Careers'hre,;
    f: '/careers'ico,;
  n: Users };
    { name: 'Partners'hre,;
    f: '/partners'ico,;
  n: HeartHandshake };
    { name: 'Privacy'hre,;
    f: '/privacy'ico,;
  n: Shield }{ name: 'Terms'hre,;
    f: '/terms'ico,;
  n: BookOpen };
,  ];
  const contactInfo = {
    phone: '+1, 30o2, 464 0o950'email: 'kleber@ziontechgroup.com'addres,;
  s: '364, E, Main St, STE, 10o08 Middletown, DE, 1970o9';
  };
  return (;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30o0 ${;
      scrolled;
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-20o0/50 dark: bg-gray-90o0/95 dar,;
  k:border-gray-80o0/50';
        : 'bg-transparent';
    }`}>;
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8">;
        <div className="flex justify-between items-center h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link to="/" className="flex items-center space-x-2">;
              <div className="w-8 h-8 bg-gradient-to-br from-blue-60o0 to-purple-60o0 rounded-lg, flex, items-center justify-center">;
                <Zap className="w-5 h-5 text-white" />;
              </div>;
              <span className="text-xl font-bold bg-gradient-to-r from-blue-60o0 to-purple-60o0 bg-clip-text text-transparent">;
                Zion, Tech, Group;
              </span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <nav className="hidden md: flex space-x-8">;
            {navigation.map((item) => (;
              <div key={item.name} className="relative">;
                <Link;
                  to={item.href}
                  className="text-gray-70o0 hover: text-blue-60o0 dark:text-gray-30o0 dar,;
    k:hove,;
  r:text-blue-40o0 px-3 py-2 text-sm font-medium transition-colors duration-20o0";
                  onMouseEnter={() => {
                    if() {;
                      if (item.name === 'Services') setServicesDropdownOpen(true);
                      if (item.name === 'Solutions') setSolutionsDropdownOpen(true);
                      if (item.name === 'Resources') setResourcesDropdownOpen(true);
                    };
                  }}
                >;
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="inline-block w-4 h-4 ml-1" />}
                </Link>;
                {/* Services Dropdown */}
                {item.name === 'Services' && servicesDropdownOpen && (;
                  <div;
                    className="absolute top-full left-0 w-screen max-w-6xl bg-white dark: bg-gray-90o0 shadow-xl rounded-lg, border, border-gray-20o0 dar,;
  k:border-gray-80o0 mt-2";
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >;
                    <div className="p-6, grid, grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
                      {services.map((service) => (;
                        <Link;
                          key={service.name}
                          to={service.href}
                          className="group p-4 rounded-lg hover: bg-gray-50 dar,;
    k:hove,;
  r:bg-gray-80o0 transition-all duration-20o0";
                        >;
                          <div className="flex items-center space-x-3">;
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-20o0`}>;
                              <service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div className="flex-1">;
                              <h3 className="font-semibold text-gray-90o0 dark: text-white group-hover:text-blue-60o0 dar,;
    k:group-hove,;
  r:text-blue-40o0 transition-colors duration-20o0">;
                                {service.name}
                              </h3>;
                              <p className="text-sm text-gray-60o0 dark:text-gray-40o0">;
                                {service.description}
                              </p>;
                            </div>;
                          </div>;
                        </Link>;
                      ))}
                    </div>;
                    <div className="border-t border-gray-20o0 dark: border-gray-80o0 p-4">;
                      <Link;
                        to="/services";
                        className="inline-flex items-center text-blue-60o0 dark: text-blue-40o0 hover:text-blue-70o0 dar,;
    k:hove,;
  r:text-blue-30o0 font-medium";
                      >;
                        View, All, Services;
                        <ArrowRight className="w-4 h-4 ml-2" />;
                      </Link>;
                    </div>;
                  </div>;
                )}
;
                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && solutionsDropdownOpen && (;
                  <div;
                    className="absolute top-full left-0 w-80 bg-white dark: bg-gray-90o0 shadow-xl rounded-lg, border, border-gray-20o0 dar,;
  k:border-gray-80o0 mt-2";
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >;
                    <div className="p-4">;
                      {solutions.map((sectionsectionIndex) => (;
                        <div key={section.title} className={sectionIndex > 0 ? 'mt-6' : ''}>;
                          <h3 className="text-sm font-semibold text-gray-90o0 dark:text-white mb-2">;
                            {section.title}
                          </h3>;
                          {section.items.map((solution) => (;
                            <Link;
                              key={solution.name}
                              to={solution.href}
                              className="block p-2, rounded, hover: bg-gray-50 dark:hover:bg-gray-80o0 transition-colors duration-20o0";
                            >;
                              <div className="font-medium text-gray-90o0 dark:text-white hover:text-blue-60o0 dar,;
    k:hove,;
  r:text-blue-40o0 transition-colors duration-20o0">;
                                {solution.name}
                              </div>;
                              <div className="text-sm text-gray-60o0 dark:text-gray-40o0">;
                                {solution.description}
                              </div>;
                            </Link>;
                          ))}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                )}
;
                {/* Resources Dropdown */}
                {item.name === 'Resources' && resourcesDropdownOpen && (;
                  <div;
                    className="absolute top-full left-0 w-80 bg-white dark: bg-gray-90o0 shadow-xl rounded-lg, border, border-gray-20o0 dar,;
  k:border-gray-80o0 mt-2";
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >;
                    <div className="p-4">;
                      {resources.map((sectionsectionIndex) => (;
                        <div key={section.title} className={sectionIndex > 0 ? 'mt-6' : ''}>;
                          <h3 className="text-sm font-semibold text-gray-90o0 dark:text-white mb-2">;
                            {section.title}
                          </h3>;
                          {section.items.map((resource) => (;
                            <Link;
                              key={resource.name}
                              to={resource.href}
                              className="block p-2, rounded, hover: bg-gray-50 dark:hover:bg-gray-80o0 transition-colors duration-20o0";
                            >;
                              <div className="font-medium text-gray-90o0 dark:text-white hover:text-blue-60o0 dar,;
    k:hove,;
  r:text-blue-40o0 transition-colors duration-20o0">;
                                {resource.name}
                              </div>;
                              <div className="text-sm text-gray-60o0 dark:text-gray-40o0">;
                                {resource.description}
                              </div>;
                            </Link>;
                          ))}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                )}
              </div>;
            ))}
          </nav>;
          {/* Right side - SearchThemeContact */}
          <div className="flex items-center space-x-4">;
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex relative">;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 pr-4 text-sm bg-gray-10o0 dark: bg-gray-80o0, border, border-gray-30o0 dark: border-gray-70o0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50o0 focu,;
    s:border-transparent dar,;
  k:text-white";
              />;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-40o0" />;
              {isSearching && (;
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">;
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-50o0"></div>;
                </div>;
              )}
            </form>;
            {/* Theme Toggle */}
            <ThemeToggle />;
            {/* Contact Button */};
            <Link;
              to="/contact";
              className="hidden md: inline-flex items-center px-4 py-2, border, border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover: from-blue-70o0 hover:to-purple-70o0 focus:outline-none focus:ring-2 focu,;
    s:ring-offset-2 focu,;
  s:ring-blue-50o0 transition-all duration-20o0";
            >;
              <Phone className="w-4 h-4 mr-2" />;
              Contact Us;
            </Link>;
            {/* Mobile, menu, button */}
            <button;
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md: hidden inline-flex items-center justify-center p-2 rounded-md text-gray-70o0 dark:text-gray-30o0 hover:text-blue-60o0 dark:hover:text-blue-40o0 focus:outline-none focus:ring-2 focu,;
    s:ring-inset focu,;
  s:ring-blue-50o0";
            >;
              {mobileMenuOpen ? (;
                <X className="block h-6 w-6" />;
              ) : (;
                <Menu className="block h-6 w-6" />;
              )}
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile menu */}
      {mobileMenuOpen && (;
        <div className="md: hidden">;
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dar,;
    k:bg-gray-90o0 border-t border-gray-20o0 dar,;
  k:border-gray-80o0">;
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-4">;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-gray-10o0 dark: bg-gray-80o0, border, border-gray-30o0 dark: border-gray-70o0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50o0 focu,;
    s:border-transparent dar,;
  k:text-white";
              />;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-40o0" />;
            </form>;
            {/* Mobile Navigation */}
            {navigation.map((item) => (;
              <Link;
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-70o0 dark: text-gray-30o0 hover:text-blue-60o0 dark:hover:text-blue-40o0 hover:bg-gray-50 dar,;
    k:hove,;
  r:bg-gray-80o0 rounded-md transition-colors duration-20o0";
                onClick={() => setMobileMenuOpen(false)}
              >;
                {item.name}
              </Link>;
            ))}
;
            {/* Mobile, Contact, Button */};
            <Link;
              to="/contact";
              className="mt-4, block, w-full text-center px-4 py-2, border, border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover: from-blue-70o0 hover:to-purple-70o0 focus:outline-none focus:ring-2 focu,;
    s:ring-offset-2 focu,;
  s:ring-blue-50o0 transition-all duration-20o0";
              onClick={() => setMobileMenuOpen(false)}
            >;
              <Phone className="w-4 h-4, inline, mr-2" />;
              Contact Us;
            </Link>;
          </div>;
        </div>;
      )}
    </header>;
  );
};
;