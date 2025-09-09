import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, Building2, BarChart3, PenTool, Eye, Store, Factory, Briefcase, Handshake, FileText, Video, MessageSquare, Phone, Calendar, Settings, HardDrive, Lightbulb, Wifi, Network, Cube, Database, Server, Monitor, Smartphone, Tablet, Laptop, Printer, Clock, Mail, MapPin, DollarSign, CheckCircle, ArrowRight, ExternalLink, RefreshCw, Maximize2, Minimize2, X, Loader2, Plus, UserPlus, MoreVertical, Edit3, Play, Loader, PhoneOff, ScreenShare, Square, Hand, Mic, MicOff, VideoOff, Send, Bot, Sparkles, User, Copy, AlertCircle, Info, EyeOff, Download, TestTube, Settings, Zap, Shield, Gauge, Wrench, Trash2, Activity, AlertTriangle, XCircle, PieChart, LineChart, TrendingDown, ArrowUpRight, ArrowDownRight, Filter, Upload, Bug, Key, Map, Linkedin, Twitter, Github, Youtube, GraduationCap, Users2, Cookie, Clock3, CheckCircle2, BriefcaseIcon, UserIcon, UserRound, Kanban, PlusCircle, Inbox, Check, AspectRatio, Tabs, TabsList, TabsTrigger, TabsContent, Button, Card, CardHeader, CardContent, CardTitle, CardDescription } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';
;
interface AppHeaderProps {;
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean;
};
;
export function AppHeader(...args: any[]): any {;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeNav, setActiveNav] = useState<any>(null);
;
  useEffect(() => {;
    const handleScroll = () => {;
      setScrolled(window.scrollY > 10);
    };
;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
;
  const handleSearch = async (e: React.FormEvent) => {;
    e.preventDefault();
    if (searchQuery.trim()) {;
      setIsSearching(true);
      try {;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search;
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {;
        setIsSearching(false);
      };
    };
  };
;
  const mainNavigation = [;
    { name: 'Home', href: '/', current: true },;
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },;
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },;
    { name: 'Pricing', href: '/pricing', current: false, hasDropdown: true },;
    { name: 'Company', href: '/about', current: false, hasDropdown: true },;
    { name: 'Resources', href: '/help', current: false, hasDropdown: true },;
    { name: 'Contact', href: '/contact', current: false },;
    { name: 'Get Quote', href: '/request-quote', current: false },;
  ];
;
  // Organized Services Categories;
  const servicesCategories = [;
    {;
      title: 'AI & Machine Learning',;
      icon: Brain,;
      color: 'from-purple-500 to-cyan-500',;
      services: [;
        { ;
          name: 'AI Business Intelligence', ;
          href: '/services/ai-business-intelligence', ;
          icon: Brain, ;
          description: 'Machine Learning & Data Science',;
          featured: true;
        },;
        { ;
          name: 'AI Workflow Orchestrator', ;
          href: '/services/ai-workflow-orchestrator', ;
          icon: Workflow, ;
          description: 'Intelligent Process Automation',;
          featured: true;
        },;
        { ;
          name: 'AI Data Governance Platform', ;
          href: '/services/ai-data-governance-platform', ;
          icon: Shield, ;
          description: 'Data Protection & Compliance',;
          featured: true;
        },;
        { ;
          name: 'AI Customer Experience Analytics', ;
          href: '/services/ai-customer-experience-analytics', ;
          icon: Users, ;
          description: 'Customer Insights & Analytics',;
          featured: true;
        },;
        { ;
          name: 'AI Healthcare Analytics', ;
          href: '/services/ai-healthcare-analytics', ;
          icon: Heart, ;
          description: 'Medical AI & Diagnostics',;
          featured: true;
        },;
        { ;
          name: 'AI Financial Trading', ;
          href: '/services/ai-financial-trading', ;
          icon: TrendingUp, ;
          description: 'FinTech AI Solutions',;
          featured: true;
        },;
        { ;
          name: 'AI Supply Chain Optimization', ;
          href: '/services/ai-supply-chain-optimization', ;
          icon: Workflow, ;
          description: 'Supply Chain AI',;
          featured: true;
        },;
        { ;
          name: 'AI Content Creation', ;
          href: '/services/ai-content-creation', ;
          icon: PenTool, ;
          description: 'AI-Powered Content Generation',;
          featured: true;
        },;
        { ;
          name: 'AI HR Platform', ;
          href: '/services/ai-hr-platform', ;
          icon: Users, ;
          description: 'Human Resources Automation',;
          featured: true;
        },;
        { ;
          name: 'AI Marketing Automation', ;
          href: '/services/ai-marketing-automation', ;
          icon: Target, ;
          description: 'Intelligent Marketing Solutions',;
          featured: true;
        },;
        { ;
          name: 'AI Quantum Hybrid Platform', ;
          href: '/services/ai-quantum-hybrid-platform', ;
          icon: Atom, ;
          description: 'Quantum-AI Integration',;
          featured: true;
        },;
        { ;
          name: 'AI Autonomous Research Assistant', ;
          href: '/services/ai-autonomous-research-assistant', ;
          icon: Search, ;
          description: 'Research Automation',;
          featured: true;
        },;
        { ;
          name: 'AI Cybersecurity Threat Intelligence', ;
          href: '/services/ai-cybersecurity-threat-intelligence', ;
          icon: Shield, ;
          description: 'AI-Powered Security',;
          featured: true;
        };
      ];
    },;
    {;
      title: 'Cloud & Infrastructure',;
      icon: Cloud,;
      color: 'from-blue-500 to-cyan-500',;
      services: [;
        { ;
          name: 'Cloud & DevOps', ;
          href: '/services/cloud-devops', ;
          icon: Cloud, ;
          description: 'DevOps & Infrastructure',;
          featured: true;
        },;
        { ;
          name: 'IT Infrastructure', ;
          href: '/services/it-infrastructure', ;
          icon: Building, ;
          description: 'Enterprise Infrastructure',;
          featured: true;
        },;
        { ;
          name: 'Digital Twin Platform', ;
          href: '/services/digital-twin', ;
          icon: Globe, ;
          description: 'Virtual Replicas & Simulation',;
          featured: true;
        },;
        { ;
          name: 'IoT Edge Computing', ;
          href: '/services/iot-edge-computing', ;
          icon: Wifi, ;
          description: 'Smart Device Networks',;
          featured: true;
        },;
        { ;
          name: 'Data Analytics', ;
          href: '/services/data-analytics', ;
          icon: BarChart3, ;
          description: 'Business Intelligence & Insights',;
          featured: true;
        };
      ];
    },;
    {;
      title: 'Security & Compliance',;
      icon: Shield,;
      color: 'from-red-500 to-orange-500',;
      services: [;
        { ;
          name: 'AI Cybersecurity Suite', ;
          href: '/services/ai-cybersecurity-suite', ;
          icon: Shield, ;
          description: 'Advanced AI Security',;
          featured: true;
        },;
        { ;
          name: 'Zero Trust Network Access', ;
          href: '/services/zero-trust-network-access', ;
          icon: Lock, ;
          description: 'Modern Security Architecture',;
          featured: true;
        },;
        { ;
          name: 'Security Headers & CSP', ;
          href: '/services/security-headers-csp', ;
          icon: Shield, ;
          description: 'Web Security Hardening',;
          featured: true;
        },;
        { ;
          name: 'DSR Privacy Portal', ;
          href: '/services/dsr-portal', ;
          icon: Lock, ;
          description: 'GDPR/CCPA Compliance',;
          featured: true;
        };
      ];
    },;
    {;
      title: 'Emerging Technologies',;
      icon: Atom,;
      color: 'from-indigo-500 to-purple-500',;
      services: [;
        { ;
          name: 'Quantum Computing', ;
          href: '/services/quantum-computing', ;
          icon: Atom, ;
          description: 'Next-Gen Computational Power',;
          featured: true;
        },;
        { ;
          name: 'AI Quantum Hybrid Platform', ;
          href: '/services/ai-quantum-hybrid-platform', ;
          icon: Atom, ;
          description: 'Quantum-AI Integration',;
          featured: true;
        },;
        { ;
          name: 'Space Technology', ;
          href: '/services/space-tech', ;
          icon: Rocket, ;
          description: 'Space-Based Solutions',;
          featured: true;
        },;
        { ;
          name: 'Sustainable Technology', ;
          href: '/services/sustainable-technology', ;
          icon: Leaf, ;
          description: 'Green Technology Solutions',;
          featured: true;
        };
      ];
    },;
    {;
      title: 'Micro SaaS Solutions',;
      icon: ShoppingCart,;
      color: 'from-orange-500 to-red-500',;
      services: [;
        { ;
          name: 'Micro SaaS Products', ;
          href: '/services/micro-saas', ;
          icon: ShoppingCart, ;
          description: 'AI automations with transparent pricing',;
          featured: true;
        },;
        { ;
          name: 'Micro CRM', ;
          href: '/services/micro-crm', ;
          icon: Users, ;
          description: 'Customer Relationship Management',;
          featured: true;
        },;
        { ;
          name: 'Helpdesk Platform', ;
          href: '/services/helpdesk', ;
          icon: HelpCircle, ;
          description: 'Customer Support System',;
          featured: true;
        },;
        { ;
          name: 'Website Analytics', ;
          href: '/services/website-analytics', ;
          icon: BarChart3, ;
          description: 'Performance Tracking & Insights',;
          featured: true;
        };
      ];
    };
  ];
;
  const solutions = [;
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence & Machine Learning' },;
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud Infrastructure & Services' },;
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security & Compliance' },;
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket, description: 'Business Process Modernization' },;
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Cpu, description: 'Internet of Things & Edge Computing' },;
    { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Lock, description: 'Distributed Ledger Technology' },;
    { name: 'Healthcare Technology', href: '/healthcare-tech', icon: Heart, description: 'Medical Technology Solutions' },;
    { name: 'Sustainability Tech', href: '/sustainability-tech', icon: Globe, description: 'Green Technology Solutions' };
  ];
;
  const company = [;
    { name: 'About Us', href: '/about', icon: Building, description: 'Company overview & mission' },;
    { name: 'Leadership', href: '/leadership', icon: Users, description: 'Executive team profiles' },;
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities' },;
    { name: 'News & Media', href: '/news', icon: FileText, description: 'Press releases & updates' },;
    { name: 'Partners', href: '/partners', icon: HeartHandshake, description: 'Strategic partnerships' },;
    { name: 'Investors', href: '/investors', icon: DollarSign, description: 'Investment information' };
  ];
;
  const resources = [;
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support documentation' },;
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Industry insights & updates' },;
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },;
    { name: 'Whitepapers', href: '/whitepapers', icon: FileText, description: 'Technical resources' },;
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },;
    { name: 'API Documentation', href: '/api-docs', icon: Code, description: 'Developer resources' };
  ];
;
  const featuredServices = [;
    { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Brain, description: 'Multi-agent AI coordination & workflow automation' },;
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'AI-Powered Threat Detection & Response' },;
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Zap, description: 'Next-Generation Quantum Computing' },;
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart, description: 'Predictive Diagnostics & Care Optimization' };
  ];
;
  const serviceCategories = [;
    { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine Learning & Data Science' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Compliance' },;
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },;
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },;
    { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'DeFi & Smart Contracts' },;
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' };
  ];
;
  const pricingDropdown = [;
    {;
      name: 'Pricing Plans',;
      icon: DollarSign,;
      color: 'from-emerald-600 to-teal-600',;
      services: [;
        { name: 'Pricing Overview', href: '/pricing', description: 'Service pricing', icon: DollarSign },;
        { name: 'Pricing Guide', href: '/pricing-guide', description: 'Detailed pricing info', icon: FileText },;
        { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026', description: 'Future pricing', icon: BarChart3 },;
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', description: 'Current pricing', icon: TrendingUp };
      ];
    },;
    {;
      name: 'Get Started',;
      icon: Star,;
      color: 'from-cyan-600 to-blue-600',;
      services: [;
        { name: 'Request Quote', href: '/request-quote', description: 'Get custom pricing', icon: DollarSign },;
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a demo', icon: CalendarIcon },;
        { name: 'Contact Sales', href: '/contact', description: 'Speak with sales', icon: PhoneCall },;
        { name: 'Free Trial', href: '/signup', description: 'Start free trial', icon: Star };
      ];
    };
  ];
;
  const companyLinks = [;
    { name: 'About Us', href: '/about', description: 'Our story and mission', icon: Building },;
    { name: 'Our Team', href: '/team', description: 'Meet our experts', icon: Users },;
    { name: 'Careers', href: '/careers', description: 'Join our team', icon: Briefcase },;
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships', icon: Building },;
    { name: 'News & Press', href: '/news', description: 'Latest updates', icon: FileText },;
    { name: 'Events', href: '/events', description: 'Upcoming events', icon: CalendarIcon },;
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories', icon: Award },;
    { name: 'Marketplace', href: '/marketplace', description: 'Service marketplace', icon: ShoppingCart };
  ];
;
  const resourceLinks = [;
    { name: 'Help Center', href: '/help', description: 'Support and documentation', icon: HelpCircle },;
    { name: 'Documentation', href: '/documentation', description: 'Technical docs', icon: FileText },;
    { name: 'Training', href: '/training', description: 'Learning resources', icon: GraduationCap },;
    { name: 'Blog', href: '/blog', description: 'Latest insights', icon: BookOpen },;
    { name: 'Webinars', href: '/webinars', description: 'Educational events', icon: CalendarIcon },;
    { name: 'White Papers', href: '/white-papers', description: 'Research papers', icon: FileText },;
    { name: 'FAQ', href: '/faq', description: 'Common questions', icon: HelpCircle },;
    { name: 'Support Center', href: '/support', description: 'Technical support', icon: HelpCircle },;
    { name: 'Community', href: '/community', description: 'User community', icon: Users };
  ];
;
  const handleNavClick = (nav: unknown) => {;
    if (nav.hasDropdown) {;
      setActiveNav(nav);
      // Close other dropdowns;
      if (nav.name === 'Services') {;
        setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false)} else if(nav.name === 'Solutions') {};
        setResourcesDropdownOpen(false)} else if(nav.name === 'Pricing') {};
        setResourcesDropdownOpen(false)} else if(nav.name === 'Company') {};
        setResourcesDropdownOpen(false)} else if(nav.name === 'Resources') {};
        setCompanyDropdownOpen(false)}
    } else {};
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/ai-solutions', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/services/it-infrastructure', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/services/micro-saas-solutions', description: 'Scalable software solutions' }
      ]
    },
    {};
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'AI Sales Automation Suite', href: '/innovative-services-showcase-2025', description: 'Complete sales automation' },
        { name: 'AI Customer Support Platform', href: '/innovative-services-showcase-2025', description: 'Intelligent support system' },
        { name: 'AI Financial Analytics', href: '/innovative-services-showcase-2025', description: 'Financial insights platform' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', description: 'AI-powered project optimization' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', description: 'Advanced threat detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', description: 'AI-powered trading' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', description: 'Healthcare analytics platform' }
      ]
    },
    {};
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' }
      ]
    },
    {};
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' }
      ]
    },
    {};
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' }
      ]
    }
  ];

            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">;
              {};
                <div key={item.name} className="relative">;
                  {};
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Services Showcase', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2030', href: '/pricing', icon: DollarSign, description: 'Advanced pricing strategies' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];

  const companyCategories = [
    {};
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {};
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'News', href: '/news', description: 'Company and industry news' },
        { name: 'Events', href: '/events', description: 'Upcoming events and webinars' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' }
      ]
    }
  ];

  const supportCategories = [
    {};
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      ]
    },
    {};
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
        { name: 'Community', href: '/community', description: 'User community' }
      ]
    }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
  ];

  return (
    <>
      <div>Broken JSX</div>
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {};
                <div key={item.name} className="relative">
                  {};
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <div>Broken JSX</div>
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 xl:w-64 pl-10 pr-4 py-2 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-sm"
                />
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <div>Broken JSX</div>
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {};
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-slate-400">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {};
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {service.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {service.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;

            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">;
              <div>Broken JSX</div>
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors";
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true">;
                Solutions;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {};
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <solution.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {solution.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {solution.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">;
              <div>Broken JSX</div>
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors";
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true">;
                Resources;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {};
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {resource.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;

            {/* Company Dropdown */}
            <div className="relative dropdown-container">;
              <div>Broken JSX</div>
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors";
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true">;
                Company;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {};
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {item.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>;
          </nav>;

          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">;
            {/* Search */}
            <div className="relative hidden md:block">;
              <form onSubmit={handleSearch} className="relative">;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={};
}`}
                />;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;
            </div>;

            {/* User Menu */}
            {};
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors";
                  aria-expanded={activeDropdown === 'user'}
                  aria-haspopup="true">;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
                    <User className="w-4 h-4 text-white" />;
                  </div>;
                  <span className="text-white text-sm hidden lg:block">{user.name}</span>;
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;

                <AnimatePresence>;
                  {};
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <div>Broken JSX</div>
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <div>Broken JSX</div>
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;
                        <hr className="border-zion-slate/20 my-2" />;
                        <div>Broken JSX</div>
                          onClick={};
}}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
          </nav>;

          {/* Right side actions */}
          <div className="flex items-center space-x-4">;
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },;
    { name: 'About', href: '/about', current: false },;
    { name: 'Contact', href: '/contact', current: false },;
  ];

  const services = [;
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },;
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },;
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },;
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },;
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },;
  ];

  return (;
    <>;
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">;
        <div className="container flex h-16 items-center px-4 sm:px-6">;
          {/* Logo */}
          <div className="flex items-center">;
            <Link to="/" className="flex-shrink-0">;
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">;
            {};
                {item.name}
              </Link>;
            ))}
            {/* Services Dropdown */}
            <div className="relative">;
              <div>Broken JSX</div>
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                Services;
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />;
              </button>;
              ;
              {};
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >;
                  <div className="p-4">;
                    <div className="grid grid-cols-1 gap-2">;
                      {};
                              {service.name}
                            </div>;
                            <div className="text-sm text-gray-400">;
                              {service.description}
                            </div>;
                          </div>;
                        </div>;
                      )};
;
                      {/* Solutions Dropdown */};
                      {item.name === 'Solutions' && solutionsDropdownOpen && (;
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">;
                          <div className="space-y-4">;
                            <h3 className="text-lg font-semibold text-white mb-4">Industry Solutions</h3>;
                            {solutions.map((((((((solution, index, index, index, index, index, index) => ({ ...((((((solution, index, index, index, index, index, key: index })) => ({ ...(((((solution, index, index, index, index, key: index })) => ({ ...((((solution, index, index, index, key: index })) => ({ ...(((solution, index, index, key: index })) => ({ ...((solution, index, key: index })) => ({ ...(solution, key: index })) => (;
                              <Link;
                                key={solution.name};
                                to={solution.href};
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group";
                              >;
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">;
                                  <solution.icon className="w-4 h-4 text-cyan-400"       />;
                                </div>;
                                <div className="flex-1">;
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">;
                                    {solution.name};
                                  </h4>;
                                  <p className="text-xs text-slate-400">{solution.description}</p>;
                                </div>;
                                {solution.featured && (;
                                  <Star className="w-3 h-3 text-yellow-400"       />;
                                )};
                              </Link>;
                            ))};
                          </div>;
                          <div className="mt-6 pt-6 border-t border-slate-700">;
                            <Link;
                              to="/solutions";
                              className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors";
                            >;
                              <span>View All Solutions</span>;
                              <ArrowRight className="w-4 h-4"       />;
                            </Link>;
                          </div>;
                        </div>;
                      )};
;
                      {/* Resources Dropdown */};
                      {item.name === 'Resources' && resourcesDropdownOpen && (;
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">;
                          <div className="space-y-4">;
                            <h3 className="text-lg font-semibold text-white mb-4">Resources & Support</h3>;
                            {resources.map((((((((resource, index, index, index, index, index, index) => ({ ...((((((resource, index, index, index, index, index, key: index })) => ({ ...(((((resource, index, index, index, index, key: index })) => ({ ...((((resource, index, index, index, key: index })) => ({ ...(((resource, index, index, key: index })) => ({ ...((resource, index, key: index })) => ({ ...(resource, key: index })) => (;
                              <Link;
                                key={resource.name};
                                to={resource.href};
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group";
                              >;
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">;
                                  <resource.icon className="w-4 h-4 text-cyan-400"       />;
                                </div>;
                                <div className="flex-1">;
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">;
                                    {resource.name};
                                  </h4>;
                                  <p className="text-xs text-slate-400">{resource.description}</p>;
                                </div>;
                                {resource.featured && (;
                                  <Star className="w-3 h-3 text-yellow-400"       />;
                                )};
                              </Link>;
                            ))};
                          </div>;
                          <div className="mt-6 pt-6 border-t border-slate-700">;
                            <Link;
                              to="/resources";
                              className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors";
                            >;
                              <span>View All Resources</span>;
                              <ArrowRight className="w-4 h-4"       />;
                            </Link>;
                          </div>;
                        </div>;
                      )};
                    </div>;
                  ) : (;
                    <Link;
                      to={item.href};
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium";
                    >;
                      {item.name};
                    </Link>;
                  )};
                </div>;
              ))};
            </nav>;
;
            {/* Search and Actions */};
            <div className="hidden lg:flex items-center space-x-4">;
              {/* Search */};
              <form onSubmit={handleSearch} className="relative">;
                <input;
                  type="text";
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  placeholder="Search services...";
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors";
                />;
                <button;
                  type="submit";
                  disabled={isSearching};
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors";
                >;
                  {isSearching ? (;
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>;
                  ) : (;
                    <Search className="w-4 h-4"       />;
                  )};
                </button>;
              </form>;
;
              {/* Theme Toggle */};
              <ThemeToggle       />;
;
              {/* CTA Button */};
              <Link;
                to="/contact";
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium";
              >;
                {mobileMenuOpen ? <X className="w-5 h-5"       /> : <Menu className="w-5 h-5"       />};
              </button>;
            </div>;
          </div>;
        </div>;
;
        {/* Mobile menu */};
        {mobileMenuOpen && (;
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700">;
            <div className="container-responsive py-6">;
              <div className="space-y-6">;
                {/* Mobile Search */};
                <form onSubmit={handleSearch} className="relative">;
                  <input;
                    type="text";
                    value={searchQuery};
                    onChange={(e) => setSearchQuery(e.target.value)};
                    placeholder="Search services...";
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors";
                  />;
                  <button;
                    type="submit";
                    disabled={isSearching};
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors";
                  >;
                    {isSearching ? (;
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>;
                    ) : (;
                      <Search className="w-4 h-4"       />;
                    )};
                  </button>;
                </form>;
;
                {/* Mobile Navigation */};
                <nav className="space-y-4">;
                  {navigation.map((((((((item, index, index, index, index, index, index) => ({ ...((((((item, index, index, index, index, index, key: index })) => ({ ...(((((item, index, index, index, index, key: index })) => ({ ...((((item, index, index, index, key: index })) => ({ ...(((item, index, index, key: index })) => ({ ...((item, index, key: index })) => ({ ...(item, key: index })) => (;
                    <div key={item.name}>;
                      <Link;
                        to={item.href};
                        className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium";
                        onClick={() => setMobileMenuOpen(false)};
                      >;
                        {item.name};
                      </Link>;
                    </div>;
                  ))};
                </nav>;
;
                {/* Mobile Quick Links */};
                <div className="space-y-4">;
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Quick Links</h3>;
                  <div className="grid grid-cols-2 gap-4">;
                    {quickLinks.slice(0, 6).map((((((((link, index, index, index, index, index, index) => ({ ...((((((link, index, index, index, index, index, key: index })) => ({ ...(((((link, index, index, index, index, key: index })) => ({ ...((((link, index, index, index, key: index })) => ({ ...(((link, index, index, key: index })) => ({ ...((link, index, key: index })) => ({ ...(link, key: index })) => (;
                      <Link;
                        key={link.name};
                        to={link.href};
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200";
                        onClick={() => setMobileMenuOpen(false)};
                      >;
                        <link.icon className="w-4 h-4"       />;
                        <span className="text-sm">{link.name}</span>;
                      </Link>;
                    ))};
                  </div>;
                </div>;
;
                {/* Mobile Contact Info */};
                <div className="space-y-4">;
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Contact</h3>;
                  <div className="space-y-2">;
                    <div className="flex items-center space-x-2 text-slate-300">;
                      <Phone className="w-4 h-4"       />;
                      <span className="text-sm">{contactInfo.phone}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-slate-300">;
                      <Mail className="w-4 h-4"       />;
                      <span className="text-sm">{contactInfo.email}</span>;
                    </div>;
                  </div>;
                </div>;
;
                {/* Mobile CTA */};
                <Link;
                  to="/contact";
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center";
                  onClick={() => setMobileMenuOpen(false)};
                >;
                  Get Started;
                </Link>;
              </div>;
            )}
          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">;
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">;
              <Bell className="h-5 w-5" />;
            </button>;

            {/* User menu */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">;
              <User className="h-5 w-5" />;
            </button>;
              {};
              )}
            </button>;
          </div>;
        </div>;
      </div>;

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {};
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan";
                />;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;

              {/* Mobile Navigation Links */}
              <div className="space-y-2">;
                {};
                    {item.name}
                  </Link>;
                ))}
              </nav>;

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">;
                <div className="grid grid-cols-1 gap-3">;
                  {};
                      {action.name}        {/* Mobile Navigation */}
        {};
                  onClick={() => setMobileMenuOpen(false)}
                >;
                  {item.name}
                </Link>;
              ))}
              {/* Mobile Services */}
              <div className="px-3 py-2">;
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>;
                <div className="space-y-1">;
                  {};
                      onClick={() => setMobileMenuOpen(false)}
                    >;
                      {service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              </div>;

              {/* Mobile Services */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Services;
                </div>;
                {};
                    {service.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Solutions */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Solutions;
                </div>;
                {};
                    {solution.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Resources */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Resources;
                </div>;
                {};
                    {resource.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Company */}
              <div className="space-y-2">;
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">;
                  Company;
                </div>;
                {};
                    {item.name}
                  </Link>;
                ))}
              </div>;

              {/* Mobile Auth */}
              {};
}}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">;
                      Logout;
                    </button>;
                  </div>;
                </div>;
              )}
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </header>  )}
}}})))))