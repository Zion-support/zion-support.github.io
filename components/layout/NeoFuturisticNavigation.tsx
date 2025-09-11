<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Menu
  X
  ChevronDown
  ChevronRight
  Phone
  Mail
  MapPin
  Globe
  ArrowRight
  Sparkles
  Brain
  Atom
  Shield
  DollarSign
  FileText
  BarChart3
  MessageSquare
  Truck
  Users
  Database
  Cpu
  Cloud
  Play
  Search
  ShieldCheck
  TrendingUp
  Rocket
  Zap
  Check
  Star
  Clock
  Target
  Building
  Award
  ChartBar
  Lock
  Smartphone
  Palette
  Calendar
  CreditCard
  Settings
  Code
  BookOpen
  Activity
  Bot
  ChevronRight as ChevronRightIcon
  Eye
  FlaskConical
  Link as LinkIcon;
import Button from '../ui/Button';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Sparkles,
  Brain,
  Atom,
  Shield,
  DollarSign,
  FileText,
  BarChart3,
  MessageSquare,
  Truck,
  Users,
  Database,
  Cpu,
  Cloud,
  Play,
  Search,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Zap,
  Check,
  Star,
  Clock,
  Target,
  Building,
  Award,
  ChartBar,
  Lock,
  Smartphone,
  Palette,
  Calendar,
  CreditCard,
  Settings,
  Code,
  BookOpen,
  Activity,
  Bot,
  ChevronRight as ChevronRightIcon,
  Eye,
  FlaskConical,;
  Link as LinkIcon,;
import Button from '../ui/Button';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
<<<<<<< HEAD




=======
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }
  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  }
  const isActive = (path: string) => router.pathname === path;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const serviceCategories = [
    {
      name: 'Quantum Computing'
      description: 'Revolutionary quantum computing solutions'
      icon: <Atom className='w-5 h-5' />
      color: 'from-purple-500 to-pink-500'
      services: [
        {
          name: 'Quantum AI Platform'
          description: 'AI-powered quantum computing'
          price: '$299/month'
        }
        {
          name: 'Quantum Optimization'
          description: 'Quantum algorithms for complex problems'
          price: '$199/month'
        }
        {
          name: 'Quantum Simulation'
          description: 'Advanced quantum simulations'
          price: '$399/month'
        }
      ]
    }
    {
      name: 'AI & Machine Learning'
      description: 'Advanced artificial intelligence and ML platforms'
      icon: <Brain className='w-5 h-5' />
      color: 'from-blue-500 to-cyan-500'
      services: [
        {
          name: 'AI Content Generator'
          description: 'Professional AI content creation'
          price: '$49/month'
        }
        {
          name: 'AI Analytics Platform'
          description: 'Advanced business intelligence'
          price: '$99/month'
        }
        {
          name: 'AI Automation Suite'
          description: 'Complete business automation'
          price: '$149/month'
        }
      ]
    }
    {
      name: 'Cybersecurity'
      description: 'Next-generation security solutions'
      icon: <Shield className='w-5 h-5' />
      color: 'from-red-500 to-orange-500'
      services: [
        {
          name: 'Quantum Cybersecurity'
          description: 'Post-quantum era security'
          price: '$159/month'
        }
        {
          name: 'AI Threat Detection'
          description: 'Intelligent security monitoring'
          price: '$89/month'
        }
        {
          name: 'Zero-Trust Platform'
          description: 'Advanced access control'
          price: '$129/month'
        }
      ]
    }
    {
      name: 'Blockchain & Web3'
      description: 'Future-proof blockchain and decentralized solutions'
      icon: <LinkIcon className='w-5 h-5' />
      color: 'from-indigo-500 to-purple-500'
      services: [
        {
          name: 'Quantum Blockchain'
          description: 'Post-quantum blockchain platform'
          price: '$349/month'
        }
        {
          name: 'DeFi Protocol Suite'
          description: 'Complete DeFi solutions'
          price: '$199/month'
        }
        {
          name: 'NFT Marketplace'
          description: 'AI-curated NFT platform'
          price: '$99/month'
        }
      ]
    }
    {
      name: 'IoT & Smart Cities'
      description: 'Connected devices and intelligent infrastructure'
      icon: <Globe className='w-5 h-5' />
      color: 'from-teal-500 to-green-500'
      services: [
        {
          name: 'Quantum IoT Platform'
          description: 'Quantum-secured IoT solutions'
          price: '$199/month'
        }
        {
          name: 'Smart City Suite'
          description: 'Complete urban intelligence'
          price: '$299/month'
        }
        {
          name: 'Industrial IoT'
          description: 'Manufacturing automation'
          price: '$249/month'
        }
      ]
    }
    {
      name: 'Metaverse & VR/AR'
      description: 'Immersive digital experiences and virtual worlds'
      icon: <Eye className='w-5 h-5' />
      color: 'from-pink-500 to-rose-500'
      services: [
        {
          name: 'Quantum Metaverse'
          description: 'Quantum-enhanced virtual reality'
          price: '$499/month'
        }
        {
          name: 'VR Development'
          description: 'Complete VR platform'
          price: '$299/month'
        }
        {
          name: 'AR Solutions'
          description: 'Augmented reality platform'
          price: '$199/month'
        }
      ]
    }
    {
      name: 'Robotics & Automation'
      description: 'Intelligent automation and robotic systems'
      icon: <Cpu className='w-5 h-5' />
      color: 'from-orange-500 to-red-500'
      services: [
        {
          name: 'Quantum Robotics'
          description: 'AI-powered robotics platform'
          price: '$799/month'
        }
        {
          name: 'Manufacturing AI'
          description: 'Autonomous manufacturing'
          price: '$199/month'
        }
        {
          name: 'Service Robotics'
          description: 'Intelligent service automation'
          price: '$349/month'
        }
      ]
    }
    {
      name: 'Energy & Sustainability'
      description: 'Green technology and energy optimization'
      icon: <Zap className='w-5 h-5' />
      color: 'from-yellow-500 to-orange-500'
      services: [
        {
          name: 'Quantum Energy'
          description: 'AI-optimized energy management'
          price: '$299/month'
        }
        {
          name: 'Smart Grid'
          description: 'Intelligent energy distribution'
          price: '$199/month'
        }
        {
          name: 'Sustainability AI'
          description: 'Environmental impact optimization'
          price: '$149/month'
        }
      ]
    }
    {
      name: 'Financial Technology'
      description: 'Innovative fintech and trading solutions'
      icon: <DollarSign className='w-5 h-5' />
      color: 'from-violet-500 to-purple-500'
      services: [
        {
          name: 'Quantum Trading'
          description: 'Quantum-enhanced algorithmic trading'
          price: '$899/month'
        }
        {
          name: 'AI Risk Management'
          description: 'Intelligent financial risk analysis'
          price: '$399/month'
        }
        {
          name: 'Blockchain Finance'
          description: 'DeFi and blockchain solutions'
          price: '$199/month'
        }
      ]
    }
    {
      name: 'Biotechnology & Healthcare'
      description: 'AI-powered healthcare and biotech solutions'
      icon: <FlaskConical className='w-5 h-5' />
      color: 'from-emerald-500 to-teal-500'
      services: [
        {
          name: 'Biotech AI'
          description: 'AI-powered drug discovery'
          price: '$599/month'
        }
        {
          name: 'Healthcare Analytics'
          description: 'Medical data intelligence'
          price: '$299/month'
        }
        {
          name: 'Genomic AI'
          description: 'Advanced genetic analysis'
          price: '$399/month'
        }
      ]
    }
  ];
  const companyInfo = [
    {
      name: 'About Zion Tech Group'
      description: 'Leading the global micro SaaS revolution'
      icon: <Rocket className='w-5 h-5' />
      link: '/about'
    }
    {
      name: 'Careers'
      description: 'Join our revolutionary team'
      icon: <Star className='w-5 h-5' />
      link: '/careers'
    }
    {
      name: 'News & Updates'
      description: 'Latest announcements and releases'
      icon: <TrendingUp className='w-5 h-5' />
      link: '/news'
    }
    {
      name: 'Contact'
      description: 'Talk to our team 24/7'
      icon: <Phone className='w-5 h-5' />
      link: '/contact'
    }
  ];
  const resources = [
    {
      name: 'Documentation'
      description: 'Comprehensive service guides'
      icon: <BookOpen className='w-5 h-5' />
      link: '/docs'
    }
    {
      name: 'Blog & Insights'
      description: 'Latest technology trends'
      icon: <FileText className='w-5 h-5' />
      link: '/blog'
    }
    {
      name: 'Case Studies'
      description: 'Real-world success stories'
      icon: <BarChart3 className='w-5 h-5' />
      link: '/case-studies'
    }
    {
      name: 'Pricing'
      description: 'Transparent and flexible plans'
      icon: <CreditCard className='w-5 h-5' />
      link: '/pricing'
    }
    {
      name: 'Reports'
      description: 'Live performance and audits'
      icon: <Activity className='w-5 h-5' />
      link: '/reports'
    }
  ];

<<<<<<< HEAD




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Popular quick links to flagship services
  const popularServiceLinks = [
    { name: 'AI Content Generator', href: '/ai-content-generator' }
    { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' }
    { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' }
    { name: 'AI Video Editing', href: '/ai-video-editing' }
    { name: 'AI SEO Optimization', href: '/ai-seo-optimization' }
    { name: 'AI IoT Platform', href: '/ai-iot-platform' }
    { name: 'AI Sales Automation', href: '/ai-sales-automation' }
    { name: 'AI Market Research', href: '/ai-market-research' }
  ];

<<<<<<< HEAD




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Newly added real services quick links
  const newServiceLinks = [
    {
      name: 'Email Deliverability Monitor'
      href: '/services/email-deliverability-monitor'
    }
    {
      name: 'Landing Page Experimentation'
      href: '/services/landing-page-experimentation'
    }
    {
      name: 'Invoice Reconciliation Automation'
      href: '/services/invoice-reconciliation-automation'
    }
    {
      name: 'GitHub Ops Health Dashboard'
      href: '/services/github-ops-health-dashboard'
    }
    {
      name: 'Error Budget Automation'
      href: '/services/error-budget-automation'
    }
    { name: 'LLM Usage Governance', href: '/services/llm-usage-governance' }
  ];
    >
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',;
  };

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {;
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path: string) => router && router.pathname === path;

  const serviceCategories = [;
    {;
      name: 'Quantum Computing',;
      description: 'Revolutionary quantum computing solutions',;
      icon: <Atom className='w-5 h-5' />,;
      color: 'from-purple-500 to-pink-500',;
      services: [;
        {;
          name: 'Quantum AI Platform',;
          description: 'AI-powered quantum computing',;
          price: '$299/month',;
        },;
        {;
          name: 'Quantum Optimization',;
          description: 'Quantum algorithms for complex problems',;
          price: '$199/month',;
        },;
        {;
          name: 'Quantum Simulation',;
          description: 'Advanced quantum simulations',;
          price: '$399/month',;
        },;
      ],;
    },;
    {;
      name: 'AI & Machine Learning',;
      description: 'Advanced artificial intelligence and ML platforms',;
      icon: <Brain className='w-5 h-5' />,;
      color: 'from-blue-500 to-cyan-500',;
      services: [;
        {;
          name: 'AI Content Generator',;
          description: 'Professional AI content creation',;
          price: '$49/month',;
        },;
        {;
          name: 'AI Analytics Platform',;
          description: 'Advanced business intelligence',;
          price: '$99/month',;
        },;
        {;
          name: 'AI Automation Suite',;
          description: 'Complete business automation',;
          price: '$149/month',;
        },;
      ],;
    },;
    {;
      name: 'Cybersecurity',;
      description: 'Next-generation security solutions',;
      icon: <Shield className='w-5 h-5' />,;
      color: 'from-red-500 to-orange-500',;
      services: [;
        {;
          name: 'Quantum Cybersecurity',;
          description: 'Post-quantum era security',;
          price: '$159/month',;
        },;
        {;
          name: 'AI Threat Detection',;
          description: 'Intelligent security monitoring',;
          price: '$89/month',;
        },;
        {;
          name: 'Zero-Trust Platform',;
          description: 'Advanced access control',;
          price: '$129/month',;
        },;
      ],;
    },;
    {;
      name: 'Blockchain & Web3',;
      description: 'Future-proof blockchain and decentralized solutions',;
      icon: <LinkIcon className='w-5 h-5' />,;
      color: 'from-indigo-500 to-purple-500',;
      services: [;
        {;
          name: 'Quantum Blockchain',;
          description: 'Post-quantum blockchain platform',;
          price: '$349/month',;
        },;
        {;
          name: 'DeFi Protocol Suite',;
          description: 'Complete DeFi solutions',;
          price: '$199/month',;
        },;
        {;
          name: 'NFT Marketplace',;
          description: 'AI-curated NFT platform',;
          price: '$99/month',;
        },;
      ],;
    },;
    {;
      name: 'IoT & Smart Cities',;
      description: 'Connected devices and intelligent infrastructure',;
      icon: <Globe className='w-5 h-5' />,;
      color: 'from-teal-500 to-green-500',;
      services: [;
        {;
          name: 'Quantum IoT Platform',;
          description: 'Quantum-secured IoT solutions',;
          price: '$199/month',;
        },;
        {;
          name: 'Smart City Suite',;
          description: 'Complete urban intelligence',;
          price: '$299/month',;
        },;
        {;
          name: 'Industrial IoT',;
          description: 'Manufacturing automation',;
          price: '$249/month',;
        },;
      ],;
    },;
    {;
      name: 'Metaverse & VR/AR',;
      description: 'Immersive digital experiences and virtual worlds',;
      icon: <Eye className='w-5 h-5' />,;
      color: 'from-pink-500 to-rose-500',;
      services: [;
        {;
          name: 'Quantum Metaverse',;
          description: 'Quantum-enhanced virtual reality',;
          price: '$499/month',;
        },;
        {;
          name: 'VR Development',;
          description: 'Complete VR platform',;
          price: '$299/month',;
        },;
        {;
          name: 'AR Solutions',;
          description: 'Augmented reality platform',;
          price: '$199/month',;
        },;
      ],;
    },;
    {;
      name: 'Robotics & Automation',;
      description: 'Intelligent automation and robotic systems',;
      icon: <Cpu className='w-5 h-5' />,;
      color: 'from-orange-500 to-red-500',;
      services: [;
        {;
          name: 'Quantum Robotics',;
          description: 'AI-powered robotics platform',;
          price: '$799/month',;
        },;
        {;
          name: 'Manufacturing AI',;
          description: 'Autonomous manufacturing',;
          price: '$199/month',;
        },;
        {;
          name: 'Service Robotics',;
          description: 'Intelligent service automation',;
          price: '$349/month',;
        },;
      ],;
    },;
    {;
      name: 'Energy & Sustainability',;
      description: 'Green technology and energy optimization',;
      icon: <Zap className='w-5 h-5' />,;
      color: 'from-yellow-500 to-orange-500',;
      services: [;
        {;
          name: 'Quantum Energy',;
          description: 'AI-optimized energy management',;
          price: '$299/month',;
        },;
        {;
          name: 'Smart Grid',;
          description: 'Intelligent energy distribution',;
          price: '$199/month',;
        },;
        {;
          name: 'Sustainability AI',;
          description: 'Environmental impact optimization',;
          price: '$149/month',;
        },;
      ],;
    },;
    {;
      name: 'Financial Technology',;
      description: 'Innovative fintech and trading solutions',;
      icon: <DollarSign className='w-5 h-5' />,;
      color: 'from-violet-500 to-purple-500',;
      services: [;
        {;
          name: 'Quantum Trading',;
          description: 'Quantum-enhanced algorithmic trading',;
          price: '$899/month',;
        },;
        {;
          name: 'AI Risk Management',;
          description: 'Intelligent financial risk analysis',;
          price: '$399/month',;
        },;
        {;
          name: 'Blockchain Finance',;
          description: 'DeFi and blockchain solutions',;
          price: '$199/month',;
        },;
      ],;
    },;
    {;
      name: 'Biotechnology & Healthcare',;
      description: 'AI-powered healthcare and biotech solutions',;
      icon: <FlaskConical className='w-5 h-5' />,;
      color: 'from-emerald-500 to-teal-500',;
      services: [;
        {;
          name: 'Biotech AI',;
          description: 'AI-powered drug discovery',;
          price: '$599/month',;
        },;
        {;
          name: 'Healthcare Analytics',;
          description: 'Medical data intelligence',;
          price: '$299/month',;
        },;
        {;
          name: 'Genomic AI',;
          description: 'Advanced genetic analysis',;
          price: '$399/month',;
        },;
      ],;
    },;
  ];

  const companyInfo = [;
    {;
      name: 'About Zion Tech Group',;
      description: 'Leading the global micro SaaS revolution',;
      icon: <Rocket className='w-5 h-5' />,;
      link: '/about',;
    },;
    {;
      name: 'Careers',;
      description: 'Join our revolutionary team',;
      icon: <Star className='w-5 h-5' />,;
      link: '/careers',;
    },;
    {;
      name: 'News & Updates',;
      description: 'Latest announcements and releases',;
      icon: <TrendingUp className='w-5 h-5' />,;
      link: '/news',;
    },;
    {;
      name: 'Contact',;
      description: 'Talk to our team 24/7',;
      icon: <Phone className='w-5 h-5' />,;
      link: '/contact',;
    },;
  ];

  const resources = [;
    {;
      name: 'Documentation',;
      description: 'Comprehensive service guides',;
      icon: <BookOpen className='w-5 h-5' />,;
      link: '/docs',;
    },;
    {;
      name: 'Blog & Insights',;
      description: 'Latest technology trends',;
      icon: <FileText className='w-5 h-5' />,;
      link: '/blog',;
    },;
    {;
      name: 'Case Studies',;
      description: 'Real-world success stories',;
      icon: <BarChart3 className='w-5 h-5' />,;
      link: '/case-studies',;
    },;
    {;
      name: 'Pricing',;
      description: 'Transparent and flexible plans',;
      icon: <CreditCard className='w-5 h-5' />,;
      link: '/pricing',;
    },;
    {;
      name: 'Reports',;
      description: 'Live performance and audits',;
      icon: <Activity className='w-5 h-5' />,;
      link: '/reports',;
    },;
  ];

  // Popular quick links to flagship services;
  const popularServiceLinks = [;
    { name: 'AI Content Generator', href: '/ai-content-generator' },;
    { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' },;
    { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },;
    { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },;
    { name: 'AI Video Editing', href: '/ai-video-editing' },;
    { name: 'AI SEO Optimization', href: '/ai-seo-optimization' },;
    { name: 'AI IoT Platform', href: '/ai-iot-platform' },;
    { name: 'AI Sales Automation', href: '/ai-sales-automation' },;
    { name: 'AI Market Research', href: '/ai-market-research' },;
  ];

  // Newly added real services quick links;
  const newServiceLinks = [;
    {;
      name: 'Email Deliverability Monitor',;
      href: '/services/email-deliverability-monitor',;
    },;
    {;
      name: 'Landing Page Experimentation',;
      href: '/services/landing-page-experimentation',;
    },;
    {;
      name: 'Invoice Reconciliation Automation',;
      href: '/services/invoice-reconciliation-automation',;
    },;
    {;
      name: 'GitHub Ops Health Dashboard',;
      href: '/services/github-ops-health-dashboard',;
    },;
    {;
      name: 'Error Budget Automation',;
      href: '/services/error-budget-automation',;
    },;
    { name: 'LLM Usage Governance', href: '/services/llm-usage-governance' },;
  ];


    >;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Scroll Progress Bar */}
      <div className='absolute top-0 left-0 h-1 w-full bg-transparent'>;
        <div
          className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600'
          style={{

            width: `${typeof window !== 'undefined' && document && document.body.scrollHeight> 0 ? Math && Math.min(100, (window && window.scrollY / (document && document.body.scrollHeight - window && window.innerHeight)) * 100) : 0}%`,;

          }}
        />;
      </div>;
      <div className='max-w-7xl mx-auto px-4'>;
        <div className='flex items-center justify-between h-20'>;
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3 group'>;
            <div className='relative'>;
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                <Sparkles className='w-6 h-6 text-white' />;
              </div>;
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>;
            </div>;
            <div className='hidden sm:block'>;
              <div className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>;
                Zion Tech Group;
              </div>;
              <div className='text-xs text-gray-400'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next / link';
import { use_router } from 'next / router';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Sparkles,
  Brain,
  Atom,
  Shield,
  DollarSign,
  FileText,
  BarChart3,
  MessageSquare,
  Truck,
  Users,
  Database,
  Cpu,
  Cloud,
  Play,
  Search,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Zap,
  Check,
  Star,
  Clock,
  Target,
  Building,
  Award,
  ChartBar,
  Lock,
  Smartphone,
  Palette,
  Calendar,
  CreditCard,
  Settings,
  Code,
  BookOpen,
  Activity,
  Bot,
  ChevronRight as ChevronRightIcon,
  Eye,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  FlaskConical,
  Link as LinkIcon,
import Button from '../ui / Button';
export default /**
 * NeoFuturisticNavigation - Function description
 */
function NeoFuturisticNavigation() {
  const [is_open, setIsOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  const [active_dropdown, setActiveDropdown] = useState < string | null>(null);
  const router = use_router ();
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  }
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 20);
    }
;
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  }, []);
;
  const toggle_dropdown = (dropdown: string) =>: any {
    setActiveDropdown (active_dropdown === dropdown ? null : dropdown);
  }
;
  const closeMobileMenu = () =>: any {
    setIsOpen (false);
    setActiveDropdown (null);
  }
;
  const is_active = (path: string) =>: any router.pathname === path;
;
  const service_categories = [;
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions',
      icon: <Atom className='w - 5 h - 5' />,
      color: 'from - purple - 500 to - pink - 500',
      services: [;
        {
          name: 'Quantum AI Platform',
          description: 'AI - powered quantum computing',
          price: '$299 / month',
        },
        {
          name: 'Quantum Optimization',
          description: 'Quantum algorithms for complex problems',
          price: '$199 / month',
        },
        {
          name: 'Quantum Simulation',
          description: 'Advanced quantum simulations',
          price: '$399 / month',
        },
      ],
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence and ML platforms',
      icon: <Brain className='w - 5 h - 5' />,
      color: 'from - blue - 500 to - cyan - 500',
      services: [;
        {
          name: 'AI Content Generator',
          description: 'Professional AI content creation',
          price: '$49 / month',
        },
        {
          name: 'AI Analytics Platform',
          description: 'Advanced business intelligence',
          price: '$99 / month',
        },
        {
          name: 'AI Automation Suite',
          description: 'Complete business automation',
          price: '$149 / month',
        },
      ],
    },
    {
      name: 'Cybersecurity',
      description: 'Next - generation security solutions',
      icon: <Shield className='w - 5 h - 5' />,
      color: 'from - red - 500 to - orange - 500',
      services: [;
        {
          name: 'Quantum Cybersecurity',
          description: 'Post - quantum era security',
          price: '$159 / month',
        },
        {
          name: 'AI Threat Detection',
          description: 'Intelligent security monitoring',
          price: '$89 / month',
        },
        {
          name: 'Zero - Trust Platform',
          description: 'Advanced access control',
          price: '$129 / month',
        },
      ],
    },
    {
      name: 'Blockchain & Web3',
      description: 'Future - proof blockchain and decentralized solutions',
      icon: <LinkIcon className='w - 5 h - 5' />,
      color: 'from - indigo - 500 to - purple - 500',
      services: [;
        {
          name: 'Quantum Blockchain',
          description: 'Post - quantum blockchain platform',
          price: '$349 / month',
        },
        {
          name: 'DeFi Protocol Suite',
          description: 'Complete DeFi solutions',
          price: '$199 / month',
        },
        {
          name: 'NFT Marketplace',
          description: 'AI - curated NFT platform',
          price: '$99 / month',
        },
      ],
    },
    {
      name: 'IoT & Smart Cities',
      description: 'Connected devices and intelligent infrastructure',
      icon: <Globe className='w - 5 h - 5' />,
      color: 'from - teal - 500 to - green - 500',
      services: [;
        {
          name: 'Quantum IoT Platform',
          description: 'Quantum - secured IoT solutions',
          price: '$199 / month',
        },
        {
          name: 'Smart City Suite',
          description: 'Complete urban intelligence',
          price: '$299 / month',
        },
        {
          name: 'Industrial IoT',
          description: 'Manufacturing automation',
          price: '$249 / month',
        },
      ],
    },
    {
      name: 'Metaverse & VR / AR',
      description: 'Immersive digital experiences and virtual worlds',
      icon: <Eye className='w - 5 h - 5' />,
      color: 'from - pink - 500 to - rose - 500',
      services: [;
        {
          name: 'Quantum Metaverse',
          description: 'Quantum - enhanced virtual reality',
          price: '$499 / month',
        },
        {
          name: 'VR Development',
          description: 'Complete VR platform',
          price: '$299 / month',
        },
        {
          name: 'AR Solutions',
          description: 'Augmented reality platform',
          price: '$199 / month',
        },
      ],
    },
    {
      name: 'Robotics & Automation',
      description: 'Intelligent automation and robotic systems',
      icon: <Cpu className='w - 5 h - 5' />,
      color: 'from - orange - 500 to - red - 500',
      services: [;
        {
          name: 'Quantum Robotics',
          description: 'AI - powered robotics platform',
          price: '$799 / month',
        },
        {
          name: 'Manufacturing AI',
          description: 'Autonomous manufacturing',
          price: '$199 / month',
        },
        {
          name: 'Service Robotics',
          description: 'Intelligent service automation',
          price: '$349 / month',
        },
      ],
    },
    {
      name: 'Energy & Sustainability',
      description: 'Green technology and energy optimization',
      icon: <Zap className='w - 5 h - 5' />,
      color: 'from - yellow - 500 to - orange - 500',
      services: [;
        {
          name: 'Quantum Energy',
          description: 'AI - optimized energy management',
          price: '$299 / month',
        },
        {
          name: 'Smart Grid',
          description: 'Intelligent energy distribution',
          price: '$199 / month',
        },
        {
          name: 'Sustainability AI',
          description: 'Environmental impact optimization',
          price: '$149 / month',
        },
      ],
    },
    {
      name: 'Financial Technology',
      description: 'Innovative fintech and trading solutions',
      icon: <DollarSign className='w - 5 h - 5' />,
      color: 'from - violet - 500 to - purple - 500',
      services: [;
        {
          name: 'Quantum Trading',
          description: 'Quantum - enhanced algorithmic trading',
          price: '$899 / month',
        },
        {
          name: 'AI Risk Management',
          description: 'Intelligent financial risk analysis',
          price: '$399 / month',
        },
        {
          name: 'Blockchain Finance',
          description: 'DeFi and blockchain solutions',
          price: '$199 / month',
        },
      ],
    },
    {
      name: 'Biotechnology & Healthcare',
      description: 'AI - powered healthcare and biotech solutions',
      icon: <FlaskConical className='w - 5 h - 5' />,
      color: 'from - emerald - 500 to - teal - 500',
      services: [;
        {
          name: 'Biotech AI',
          description: 'AI - powered drug discovery',
          price: '$599 / month',
        },
        {
          name: 'Healthcare Analytics',
          description: 'Medical data intelligence',
          price: '$299 / month',
        },
        {
          name: 'Genomic AI',
          description: 'Advanced genetic analysis',
          price: '$399 / month',
        },
      ],
    },
  ];
;
  const company_info = [;
    {
      name: 'About Zion Tech Group',
      description: 'Leading the global micro SaaS revolution',
      icon: <Rocket className='w - 5 h - 5' />,
      link: '/about',
    },
    {
      name: 'Careers',
      description: 'Join our revolutionary team',
      icon: <Star className='w - 5 h - 5' />,
      link: '/careers',
    },
    {
      name: 'News & Updates',
      description: 'Latest announcements and releases',
      icon: <TrendingUp className='w - 5 h - 5' />,
      link: '/news',
    },
    {
      name: 'Contact',
      description: 'Talk to our team 24 / 7',
      icon: <Phone className='w - 5 h - 5' />,
      link: '/contact',
    },
  ];
;
  const resources = [;
    {
      name: 'Documentation',
      description: 'Comprehensive service guides',
      icon: <BookOpen className='w - 5 h - 5' />,
      link: '/docs',
    },
    {
      name: 'Blog & Insights',
      description: 'Latest technology trends',
      icon: <FileText className='w - 5 h - 5' />,
      link: '/blog',
    },
    {
      name: 'Case Studies',
      description: 'Real - world success stories',
      icon: <BarChart3 className='w - 5 h - 5' />,
      link: '/case - studies',
    },
    {
      name: 'Pricing',
      description: 'Transparent and flexible plans',
      icon: <CreditCard className='w - 5 h - 5' />,
      link: '/pricing',
    },
    {
      name: 'Reports',
      description: 'Live performance and audits',
      icon: <Activity className='w - 5 h - 5' />,
      link: '/reports',
    },
  ];
;
  // Popular quick links to flagship services;
  const popularServiceLinks = [;
    { name: 'AI Content Generator', href: '/ai - content - generator' },
    { name: 'AI Blockchain Analytics', href: '/ai - blockchain - analytics' },
    { name: 'AI Legal Contract Analyzer', href: '/ai - legal - contract - analyzer' },
    { name: 'AI HR Recruitment', href: '/ai - hr - recruitment' },
    { name: 'AI Video Editing', href: '/ai - video - editing' },
    { name: 'AI SEO Optimization', href: '/ai - seo - optimization' },
    { name: 'AI IoT Platform', href: '/ai - iot - platform' },
    { name: 'AI Sales Automation', href: '/ai - sales - automation' },
    { name: 'AI Market Research', href: '/ai - market - research' },
  ];
;
  // Newly added real services quick links;
  const newServiceLinks = [;
    {
      name: 'Email Deliverability Monitor',
      href: '/services / email - deliverability - monitor',
    },
    {
      name: 'Landing Page Experimentation',
      href: '/services / landing - page - experimentation',
    },
    {
      name: 'Invoice Reconciliation Automation',
      href: '/services / invoice - reconciliation - automation',
    },
    {
      name: 'GitHub Ops Health Dashboard',
      href: '/services / github - ops - health - dashboard',
    },
    {
      name: 'Error Budget Automation',
      href: '/services / error - budget - automation',
    },
    { name: 'LLM Usage Governance', href: '/services / llm - usage - governance' },
  ];
;
    >;
      {/* Scroll Progress Bar */}
      <div className='absolute top - 0 left - 0 h - 1 w - full bg - transparent'>;
        <div;
          className='h - full bg - gradient - to - r from - cyan - 500 via - blue - 500 to - purple - 600';
          style={{
            width: `${typeof window !== 'undefined' && document.body.scroll_height > 0 ? Math.min (100, (window.scroll_y / (document.body.scroll_height - window.inner_height)) * 100) : 0}%`,
          }}
        />;
      </div>;
      <div className='max - w-7xl mx - auto px - 4'>;
        <div className='flex items - center justify - between h - 20'>;
          {/* Logo */}
          <Link href='/' className='flex items - center space - x-3 group'>;
            <div className='relative'>;
              <div className='w - 10 h - 10 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                <Sparkles className='w - 6 h - 6 text - white' />;
              </div>;
              <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300'></div>;
            </div>;
            <div className='hidden sm:block'>;
              <div className='text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;
                Zion Tech Group;
              </div>;
              <div className='text - xs text - gray - 400'>;
                Revolutionary Technology;
              </div>;
            </div>;
          </Link>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items - center space - x-8'>;
            {/* Services Dropdown */}
            <div className='relative group'>;
              <button;
                className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
                on_click={() => toggle_dropdown ('services')}
              >;
                <span > Services</span>;
                <ChevronDown;
                  className={`w - 4 h - 4 transition - transform duration - 300 ${
                    active_dropdown === 'services' ? 'rotate - 180' : '';
                  }`}
                />;
              </button>;
              {active_dropdown === 'services' && (
                <div className='absolute top - full left - 0 mt - 2 w-[800px] bg - black / 90 backdrop - blur - xl rounded - 2xl border border - gray - 700 / 50 shadow - 2xl p - 6'>;
                  <div className='grid grid - cols - 2 gap - 6'>;
                    {service_categories.map ((category, index) => (
                      <div key={index} className='group'>;
                        <div className='flex items - center space - x-3 mb - 3'>;
                          <div;
                            className={`p - 2 rounded - lg bg - gradient - to - r ${category.color} bg - opacity - 20`}
                          >;
                            {category.icon}
                          </div>;
                          <div>;
                            <h3 className='text - white font - semibold group - hover:text - cyan - 400 transition - colors'>;
                              {category.name}
                            </h3>;
                            <p className='text - gray - 400 text - sm'>;
                              {category.description}
                            </p>;
                          </div>;
                        </div>;
                        <div className='space - y-2'>;
                          {category.services.map ((service, service_index) => (
                            <div;
                              key={service_index}
                              className='flex items - center justify - between p - 2 rounded - lg hover:bg - gray - 800 / 50 transition - colors';
                            >;
                              <div>;
                                <div className='text - white text - sm font - medium'>;
                                  {service.name}
                                </div>;
                                <div className='text - gray - 400 text - xs'>;
                                  {service.description}
                                </div>;
                              </div>;
                              <div className='text - cyan - 400 text - sm font - semibold'>;
                                {service.price}
                              </div>;
                            </div>))}
                        </div>;
                      </div>))}
                  </div>;
                  <div className='mt - 6 pt - 6 border - t border - gray - 700 / 50'>;
                    <div className='flex items - center justify - between'>;
                      <div className='text - gray - 400 text - sm'>;
                        <span className='text - cyan - 400 font - semibold'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          500+;
                        </span>{' '}
                        Revolutionary Services Available;
                      </div>;
                      <Button href='/services' variant='quantum' size='sm'>;
                        View All Services;
<<<<<<< HEAD
            </div>;
=======

            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Direct Links */}
            <Link
              href='/it-services'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              IT Services;
            </Link>;
            <Link
              href='/ai-services'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              AI Services;
            </Link>;
            <Link
              href='/micro-saas'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Micro SaaS;
            </Link>;
            <Link
              href='/pricing'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Pricing;
            </Link>;
            <Link
              href='/ai-evals'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              AI Evals;
            </Link>;
            <Link
              href='/agentic-rag'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Agentic RAG;
            </Link>;
            <Link
              href='/ai-guardrails'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Guardrails;
            </Link>;
            <Link
              href='/ai-agents'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Agents;
            </Link>;
            <Link
              href='/solutions'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Solutions;
            </Link>;
            <Link
              href='/api-observability'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              API Observability;
            </Link>;
            <Link
              href='/incident-automation-suite'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Incident Automation;
            </Link>;
            <Link
              href='/data-pipeline-health'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Data Pipeline Health;
            </Link>;
            <Link
              href='/ai-code-review-copilot'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              AI Code Review;
            </Link>;
            <Link
              href='/resources'
<<<<<<< HEAD
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Resources;
            </Link>;
=======

              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'>;
              Resources;
            </Link>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Popular Dropdown */}
            <div className='relative group'>;
              <button
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2'
                onClick={() => toggleDropdown('popular')}
              >;
                <span>Popular</span>;
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'popular' ? 'rotate-180' : ''}`}
                />;
              </button>;
              {activeDropdown === 'popular' && (;
                <div className='absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'>;
                  <div className='space-y-2'>;
                    {popularServiceLinks && popularServiceLinks.map(item => (;
                      <Link
                        key={item && item.href}
                        href={item && item.href}
                        className='flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors'>;
                        <span className='text-white text-sm'>{item && item.name}</span>;
                        <ArrowRight className='w-4 h-4 text-cyan-400' />;
                      </Link>;
                    ))}
                  </div>;
                </div>;
              )}
<<<<<<< HEAD
            </div>;
=======

            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* New Dropdown */}
            <div className='relative group'>;
              <button
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2'
                onClick={() => toggleDropdown('new')}
              >;
                <span className='flex items-center gap-2'>;
                  New{' '}
                  <span className='px-2 py-0 && 0.5 text-[10px] rounded-full bg-fuchsia-600 text-white'>;
                    Live;
                  </span>;
                </span>;
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'new' ? 'rotate-180' : ''}`}
                />;
              </button>;
              {activeDropdown === 'new' && (;
                <div className='absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'>;
                  <div className='space-y-2'>;
                    {newServiceLinks && newServiceLinks.map(item => (;
                      <Link
                        key={item && item.href}
                        href={item && item.href}
                        className='flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors'>;
                        <span className='text-white text-sm'>{item && item.name}</span>;
                        <ArrowRight className='w-4 h-4 text-fuchsia-400' />;
                      </Link>;
                    ))}
                  </div>;
                </div>;
              )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </div>;
  FlaskConical,;
  Link as LinkIcon,;
import Button from '../ui/Button';
export default function NeoFuturisticNavigation() {;

<<<<<<< HEAD
export default function NeoFuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }
  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  }
  const isActive = (path: string) => router.pathname === path;

  const serviceCategories = [
    {
      name: 'Quantum Computing'
      description: 'Revolutionary quantum computing solutions'
      icon: <Atom className='w-5 h-5' />
      color: 'from-purple-500 to-pink-500'
      services: [
        {
          name: 'Quantum AI Platform'
          description: 'AI-powered quantum computing'
          price: '$299/month'
        }
        {
          name: 'Quantum Optimization'
          description: 'Quantum algorithms for complex problems'
          price: '$199/month'
        }
        {
          name: 'Quantum Simulation'
          description: 'Advanced quantum simulations'
          price: '$399/month'
        }
      ]
    }
    {
      name: 'AI & Machine Learning'
      description: 'Advanced artificial intelligence and ML platforms'
      icon: <Brain className='w-5 h-5' />
      color: 'from-blue-500 to-cyan-500'
      services: [
        {
          name: 'AI Content Generator'
          description: 'Professional AI content creation'
          price: '$49/month'
        }
        {
          name: 'AI Analytics Platform'
          description: 'Advanced business intelligence'
          price: '$99/month'
        }
        {
          name: 'AI Automation Suite'
          description: 'Complete business automation'
          price: '$149/month'
        }
      ]
    }
    {
      name: 'Cybersecurity'
      description: 'Next-generation security solutions'
      icon: <Shield className='w-5 h-5' />
      color: 'from-red-500 to-orange-500'
      services: [
        {
          name: 'Quantum Cybersecurity'
          description: 'Post-quantum era security'
          price: '$159/month'
        }
        {
          name: 'AI Threat Detection'
          description: 'Intelligent security monitoring'
          price: '$89/month'
        }
        {
          name: 'Zero-Trust Platform'
          description: 'Advanced access control'
          price: '$129/month'
        }
      ]
    }
    {
      name: 'Blockchain & Web3'
      description: 'Future-proof blockchain and decentralized solutions'
      icon: <LinkIcon className='w-5 h-5' />
      color: 'from-indigo-500 to-purple-500'
      services: [
        {
          name: 'Quantum Blockchain'
          description: 'Post-quantum blockchain platform'
          price: '$349/month'
        }
        {
          name: 'DeFi Protocol Suite'
          description: 'Complete DeFi solutions'
          price: '$199/month'
        }
        {
          name: 'NFT Marketplace'
          description: 'AI-curated NFT platform'
          price: '$99/month'
        }
      ]
    }
    {
      name: 'IoT & Smart Cities'
      description: 'Connected devices and intelligent infrastructure'
      icon: <Globe className='w-5 h-5' />
      color: 'from-teal-500 to-green-500'
      services: [
        {
          name: 'Quantum IoT Platform'
          description: 'Quantum-secured IoT solutions'
          price: '$199/month'
        }
        {
          name: 'Smart City Suite'
          description: 'Complete urban intelligence'
          price: '$299/month'
        }
        {
          name: 'Industrial IoT'
          description: 'Manufacturing automation'
          price: '$249/month'
        }
      ]
    }
    {
      name: 'Metaverse & VR/AR'
      description: 'Immersive digital experiences and virtual worlds'
      icon: <Eye className='w-5 h-5' />
      color: 'from-pink-500 to-rose-500'
      services: [
        {
          name: 'Quantum Metaverse'
          description: 'Quantum-enhanced virtual reality'
          price: '$499/month'
        }
        {
          name: 'VR Development'
          description: 'Complete VR platform'
          price: '$299/month'
        }
        {
          name: 'AR Solutions'
          description: 'Augmented reality platform'
          price: '$199/month'
        }
      ]
    }
    {
      name: 'Robotics & Automation'
      description: 'Intelligent automation and robotic systems'
      icon: <Cpu className='w-5 h-5' />
      color: 'from-orange-500 to-red-500'
      services: [
        {
          name: 'Quantum Robotics'
          description: 'AI-powered robotics platform'
          price: '$799/month'
        }
        {
          name: 'Manufacturing AI'
          description: 'Autonomous manufacturing'
          price: '$199/month'
        }
        {
          name: 'Service Robotics'
          description: 'Intelligent service automation'
          price: '$349/month'
        }
      ]
    }
    {
      name: 'Energy & Sustainability'
      description: 'Green technology and energy optimization'
      icon: <Zap className='w-5 h-5' />
      color: 'from-yellow-500 to-orange-500'
      services: [
        {
          name: 'Quantum Energy'
          description: 'AI-optimized energy management'
          price: '$299/month'
        }
        {
          name: 'Smart Grid'
          description: 'Intelligent energy distribution'
          price: '$199/month'
        }
        {
          name: 'Sustainability AI'
          description: 'Environmental impact optimization'
          price: '$149/month'
        }
      ]
    }
    {
      name: 'Financial Technology'
      description: 'Innovative fintech and trading solutions'
      icon: <DollarSign className='w-5 h-5' />
      color: 'from-violet-500 to-purple-500'
      services: [
        {
          name: 'Quantum Trading'
          description: 'Quantum-enhanced algorithmic trading'
          price: '$899/month'
        }
        {
          name: 'AI Risk Management'
          description: 'Intelligent financial risk analysis'
          price: '$399/month'
        }
        {
          name: 'Blockchain Finance'
          description: 'DeFi and blockchain solutions'
          price: '$199/month'
        }
      ]
    }
    {
      name: 'Biotechnology & Healthcare'
      description: 'AI-powered healthcare and biotech solutions'
      icon: <FlaskConical className='w-5 h-5' />
      color: 'from-emerald-500 to-teal-500'
      services: [
        {
          name: 'Biotech AI'
          description: 'AI-powered drug discovery'
          price: '$599/month'
        }
        {
          name: 'Healthcare Analytics'
          description: 'Medical data intelligence'
          price: '$299/month'
        }
        {
          name: 'Genomic AI'
          description: 'Advanced genetic analysis'
          price: '$399/month'
        }
      ]
    }
  ];
  const companyInfo = [
    {
      name: 'About Zion Tech Group'
      description: 'Leading the global micro SaaS revolution'
      icon: <Rocket className='w-5 h-5' />
      link: '/about'
    }
    {
      name: 'Careers'
      description: 'Join our revolutionary team'
      icon: <Star className='w-5 h-5' />
      link: '/careers'
    }
    {
      name: 'News & Updates'
      description: 'Latest announcements and releases'
      icon: <TrendingUp className='w-5 h-5' />
      link: '/news'
    }
    {
      name: 'Contact'
      description: 'Talk to our team 24/7'
      icon: <Phone className='w-5 h-5' />
      link: '/contact'
    }
  ];
  const resources = [
    {
      name: 'Documentation'
      description: 'Comprehensive service guides'
      icon: <BookOpen className='w-5 h-5' />
      link: '/docs'
    }
    {
      name: 'Blog & Insights'
      description: 'Latest technology trends'
      icon: <FileText className='w-5 h-5' />
      link: '/blog'
    }
    {
      name: 'Case Studies'
      description: 'Real-world success stories'
      icon: <BarChart3 className='w-5 h-5' />
      link: '/case-studies'
    }
    {
      name: 'Pricing'
      description: 'Transparent and flexible plans'
      icon: <CreditCard className='w-5 h-5' />
      link: '/pricing'
    }
    {
      name: 'Reports'
      description: 'Live performance and audits'
      icon: <Activity className='w-5 h-5' />
      link: '/reports'
    }
  ];

  // Popular quick links to flagship services
  const popularServiceLinks = [
    { name: 'AI Content Generator', href: '/ai-content-generator' }
    { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' }
    { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' }
    { name: 'AI Video Editing', href: '/ai-video-editing' }
    { name: 'AI SEO Optimization', href: '/ai-seo-optimization' }
    { name: 'AI IoT Platform', href: '/ai-iot-platform' }
    { name: 'AI Sales Automation', href: '/ai-sales-automation' }
    { name: 'AI Market Research', href: '/ai-market-research' }
  ];

  // Newly added real services quick links
  const newServiceLinks = [
    {
      name: 'Email Deliverability Monitor'
      href: '/services/email-deliverability-monitor'
    }
    {
      name: 'Landing Page Experimentation'
      href: '/services/landing-page-experimentation'
    }
    {
      name: 'Invoice Reconciliation Automation'
      href: '/services/invoice-reconciliation-automation'
    }
    {
      name: 'GitHub Ops Health Dashboard'
      href: '/services/github-ops-health-dashboard'
    }
    {
      name: 'Error Budget Automation'
      href: '/services/error-budget-automation'
    }
    { name: 'LLM Usage Governance', href: '/services/llm-usage-governance' }
  ];
    >
      {/* Scroll Progress Bar */}
      <div className='absolute top-0 left-0 h-1 w-full bg-transparent'>
        <div
          className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600'
          style={{
            width: `${typeof window !== 'undefined' && document.body.scrollHeight > 0 ? Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) : 0}%`
          }}
        />
      </div>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='relative'>
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Sparkles className='w-6 h-6 text-white' />
              </div>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
            </div>
            <div className='hidden sm:block'>
              <div className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                Zion Tech Group
              </div>
              <div className='text-xs text-gray-400'>
                Revolutionary Technology
              </div>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {/* Services Dropdown */}
            <div className='relative group'>
              <button
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2'
                onClick={() => toggleDropdown('services')}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'services' && (
                <div className='absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'>
                  <div className='grid grid-cols-2 gap-6'>
                    {serviceCategories.map((category, index) => (
                      <div key={index} className='group'>
                        <div className='flex items-center space-x-3 mb-3'>
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}
                          >
                            {category.icon}
                          </div>
                          <div>
                            <h3 className='text-white font-semibold group-hover:text-cyan-400 transition-colors'>
                              {category.name}
                            </h3>
                            <p className='text-gray-400 text-sm'>
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className='space-y-2'>
                          {category.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className='flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors'
                            >
                              <div>
                                <div className='text-white text-sm font-medium'>
                                  {service.name}
                                </div>
                                <div className='text-gray-400 text-xs'>
                                  {service.description}
                                </div>
                              </div>
                              <div className='text-cyan-400 text-sm font-semibold'>
                                {service.price}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-6 pt-6 border-t border-gray-700/50'>
                    <div className='flex items-center justify-between'>
                      <div className='text-gray-400 text-sm'>
                        <span className='text-cyan-400 font-semibold'>
                          500+
                        </span>{' '}
                        Revolutionary Services Available
                      </div>
                      <Button href='/services' variant='quantum' size='sm'>
                        View All Services
                        <ArrowRight className='w-4 h-4 ml-2' />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Direct Links */}
            <Link
              href='/it-services'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              IT Services
            </Link>
            <Link
              href='/ai-services'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              AI Services
            </Link>
            <Link
              href='/micro-saas'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Micro SaaS
            </Link>
            <Link
              href='/pricing'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Pricing
            </Link>
            <Link
              href='/ai-evals'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              AI Evals
            </Link>
            <Link
              href='/agentic-rag'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Agentic RAG
            </Link>
            <Link
              href='/ai-guardrails'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Guardrails
            </Link>
            <Link
              href='/ai-agents'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Agents
            </Link>
            <Link
              href='/solutions'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Solutions
            </Link>
            <Link
              href='/api-observability'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              API Observability
            </Link>
            <Link
              href='/incident-automation-suite'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Incident Automation
            </Link>
            <Link
              href='/data-pipeline-health'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Data Pipeline Health
            </Link>
            <Link
              href='/ai-code-review-copilot'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              AI Code Review
            </Link>
            <Link
              href='/resources'
              className='text-gray-300 hover:text-white transition-colors duration-300 py-2'
            >
              Resources
            </Link>
            {/* Popular Dropdown */}
            <div className='relative group'>
              <button
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2'
                onClick={() => toggleDropdown('popular')}
              >
                <span>Popular</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'popular' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeDropdown === 'popular' && (
                <div className='absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'>
                  <div className='space-y-2'>
                    {popularServiceLinks.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className='flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors'
                      >
                        <span className='text-white text-sm'>{item.name}</span>
                        <ArrowRight className='w-4 h-4 text-cyan-400' />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* New Dropdown */}
            <div className='relative group'>
              <button
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2'
                onClick={() => toggleDropdown('new')}
              >
                <span className='flex items-center gap-2'>
                  New{' '}
                  <span className='px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-600 text-white'>
                    Live
                  </span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'new' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeDropdown === 'new' && (
                <div className='absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6'>
                  <div className='space-y-2'>
                    {newServiceLinks.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className='flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors'
                      >
                        <span className='text-white text-sm'>{item.name}</span>
                        <ArrowRight className='w-4 h-4 text-fuchsia-400' />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  FlaskConical,;
  Link as LinkIcon,;
import Button from '../ui/Button';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors'
            onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
<<<<<<< HEAD
          </button>;
        </div>;
      </div>;
=======
<<<<<<< HEAD
          >;
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}

          </button>;
        </div>;
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Mobile Menu */}
      {isOpen && (;
        <div className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50'>;
          <div className='max-w-7xl mx-auto px-4 py-6'>;
            <div className='space-y-6'>;
              {/* Services Section */}
              <div>;
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-services')}
                >;
                  <span>Services</span>;
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
                {activeDropdown === 'mobile-services' && (
                  <div className='ml-4 space-y-3'>
                    {serviceCategories.map((category, index) => (
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {activeDropdown === 'mobile-services' && (
                  <div className='ml-4 space-y-3'>
                    {serviceCategories.map((category, index) => (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </button>;
                {activeDropdown === 'mobile-services' && (;
                  <div className='ml-4 space-y-3'>;
                    {serviceCategories && serviceCategories.map((category, index) => (;
                      <div
                        key={index}
                        className='border-l-2 border-gray-700 pl-4'>;
                        <div className='text-cyan-400 font-medium mb-2'>;
                          {category && category.name}
                        </div>;
                        <div className='text-gray-400 text-sm mb-2'>;
                          {category && category.description}
                        </div>;
                        <div className='space-y-1'>;
                          {category && category.services;
                            .slice(0, 2);
                            .map((service, serviceIndex) => (;
                              <div
                                key={serviceIndex}
                                className='text-xs text-gray-500'>;
                                • {service && service.name} - {service && service.price}
                              </div>;
                            ))}
                        </div>;
                      </div>;
                    ))}
                    <div className='pt-3'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50'>
          <div className='max-w-7xl mx-auto px-4 py-6'>
            <div className='space-y-6'>
              {/* Services Section */}
              <div>
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-services')}
                >
                  <span>Services</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}
                  />
                </button>

                {activeDropdown === 'mobile-services' && (
                  <div className='ml-4 space-y-3'>
                    {serviceCategories.map((category, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-gray-700 pl-4'
                      >
                        <div className='text-cyan-400 font-medium mb-2'>
                          {category.name}
                        </div>
                        <div className='text-gray-400 text-sm mb-2'>
                          {category.description}
                        </div>
                        <div className='space-y-1'>
                          {category.services
                            .slice(0, 2)
                            .map((service, serviceIndex) => (
                              <div
                                key={serviceIndex}
                                className='text-xs text-gray-500'
                              >
                                • {service.name} - {service.price}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                    <div className='pt-3'>
                      <Button
                        href='/services'
                        variant='quantum'
                        size='sm'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        className='w-full'>;
                        View All Services;
                        <ArrowRight className='w-4 h-4 ml-2' />;
                      </Button>;
                    </div>;
                  </div>;
                )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              </div>;





<<<<<<< HEAD
              </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Company Section */}
              <div>;
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-company')}
                >;
                  <span>Company</span>;
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-90' : ''}`}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </button>;
                {activeDropdown === 'mobile-company' && (;
                  <div className='ml-4 space-y-3'>;
                    {companyInfo && companyInfo.map((item, index) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Link
                        key={index}
                        href={item && item.link}
                        className='block text-gray-300 hover:text-white transition-colors'
                        onClick={closeMobileMenu}>;
                        {item && item.name}
                      </Link>;
                    ))}
                  </div>;
                )}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Resources Section */}
              <div>;
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-resources')}
                >;
                  <span>Resources</span>;
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </button>;
                {activeDropdown === 'mobile-resources' && (;
                  <div className='ml-4 space-y-3'>;
                    {resources && resources.map((item, index) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Link
                        key={index}
                        href={item && item.link}
                        className='block text-gray-300 hover:text-white transition-colors'
                        onClick={closeMobileMenu}>;
                        {item && item.name}
                      </Link>;
                    ))}
                  </div>;
                )}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
=======

              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Contact Info */}
              <div className='pt-6 border-t border-gray-700/50'>;
                <div className='text-white font-semibold mb-4'>;
                  Contact Information;
                </div>;
                <div className='space-y-3'>;
                  <div className='flex items-center space-x-3'>;
                    <Phone className='w-5 h-5 text-cyan-400' />;
                    <span className='text-gray-300'>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-3'>;
                    <Mail className='w-5 h-5 text-purple-400' />;
                    <span className='text-gray-300'>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-3'>;
                    <MapPin className='w-5 h-5 text-green-400' />;
                    <span className='text-gray-300 text-sm'>;
                      {contactInfo && contactInfo.address}
                    </span>;
                  </div>;
                  <div className='flex items-center space-x-3'>;
                    <Globe className='w-5 h-5 text-blue-400' />;
                    <span className='text-gray-300'>{contactInfo && contactInfo.website}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='mt-6 space-y-3'>;
                        className='w-full'
                      >
                        View All Services
                        <ArrowRight className='w-4 h-4 ml-2' />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Section */}
              <div>
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-company')}
                >
                  <span>Company</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-90' : ''}`}
                  />
                </button>
                {activeDropdown === 'mobile-company' && (
                  <div className='ml-4 space-y-3'>
                    {companyInfo.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className='block text-gray-300 hover:text-white transition-colors'
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Resources Section */}
              <div>
                <button
                  className='flex items-center justify-between w-full text-left text-white font-semibold mb-4'
                  onClick={() => toggleDropdown('mobile-resources')}
                >
                  <span>Resources</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`}
                  />
                </button>
                {activeDropdown === 'mobile-resources' && (
                  <div className='ml-4 space-y-3'>
                    {resources.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className='block text-gray-300 hover:text-white transition-colors'
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Contact Info */}
              <div className='pt-6 border-t border-gray-700/50'>
                <div className='text-white font-semibold mb-4'>
                  Contact Information
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <Phone className='w-5 h-5 text-cyan-400' />
                    <span className='text-gray-300'>{contactInfo.mobile}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-purple-400' />
                    <span className='text-gray-300'>{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <MapPin className='w-5 h-5 text-green-400' />
                    <span className='text-gray-300 text-sm'>
                      {contactInfo.address}
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Globe className='w-5 h-5 text-blue-400' />
                    <span className='text-gray-300'>{contactInfo.website}</span>
                  </div>
                </div>
                <div className='mt-6 space-y-3'>
=======

                <div className='mt-6 space-y-3'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <div className='mt-6 space-y-3'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button
                    href='/services'
                    variant='quantum'
                    size='lg'
                    className='w-full'
                  >
                    Explore Services
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </Button>
                  <Button
                    href='/contact'
                    variant='secondary'
                    size='lg'
<<<<<<< HEAD
                    className='w-full'>;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />;
                      </Button>;
                    </div>;
                  </div>;
                </div>)}
            </div>;
            {/* Direct Links */}
            <Link;
              href='/it - services';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              IT Services;
            </Link>;
            <Link;
              href='/ai - services';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              AI Services;
            </Link>;
            <Link;
              href='/micro - saas';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Micro SaaS;
            </Link>;
            <Link;
              href='/pricing';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Pricing;
            </Link>;
            <Link;
              href='/ai - evals';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              AI Evals;
            </Link>;
            <Link;
              href='/agentic - rag';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Agentic RAG;
            </Link>;
            <Link;
              href='/ai - guardrails';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Guardrails;
            </Link>;
            <Link;
              href='/ai - agents';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Agents;
            </Link>;
            <Link;
              href='/solutions';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Solutions;
            </Link>;
            <Link;
              href='/api - observability';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              API Observability;
            </Link>;
            <Link;
              href='/incident - automation - suite';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Incident Automation;
            </Link>;
            <Link;
              href='/data - pipeline - health';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Data Pipeline Health;
            </Link>;
            <Link;
              href='/ai - code - review - copilot';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              AI Code Review;
            </Link>;
            <Link;
              href='/resources';
              className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
            >;
              Resources;
            </Link>;
            {/* Popular Dropdown */}
            <div className='relative group'>;
              <button;
                className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
                on_click={() => toggle_dropdown ('popular')}
              >;
                <span > Popular</span>;
                <ChevronDown;
                  className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === 'popular' ? 'rotate - 180' : ''}`}
                />;
              </button>;
              {active_dropdown === 'popular' && (
                <div className='absolute top - full left - 0 mt - 2 w - 80 bg - black / 90 backdrop - blur - xl rounded - 2xl border border - gray - 700 / 50 shadow - 2xl p - 6'>;
                  <div className='space - y-2'>;
                    {popularServiceLinks.map (item => (
                      <Link;
                        key={item.href}
                        href={item.href}
                        className='flex items - center justify - between p - 2 rounded - lg hover:bg - gray - 800 / 50 transition - colors';
                      >;
                        <span className='text - white text - sm'>{item.name}</span>;
                        <ArrowRight className='w - 4 h - 4 text - cyan - 400' />;
                      </Link>))}
                  </div>;
                </div>)}
            </div>;
            {/* New Dropdown */}
            <div className='relative group'>;
              <button;
                className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2';
                on_click={() => toggle_dropdown ('new')}
              >;
                <span className='flex items - center gap - 2'>;
                  New{' '}
                  <span className='px - 2 py - 0.5 text-[10px] rounded - full bg - fuchsia - 600 text - white'>;
                    Live;
                  </span>;
                </span>;
                <ChevronDown;
                  className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === 'new' ? 'rotate - 180' : ''}`}
                />;
              </button>;
              {active_dropdown === 'new' && (
                <div className='absolute top - full left - 0 mt - 2 w - 96 bg - black / 90 backdrop - blur - xl rounded - 2xl border border - gray - 700 / 50 shadow - 2xl p - 6'>;
                  <div className='space - y-2'>;
                    {newServiceLinks.map (item => (
                      <Link;
                        key={item.href}
                        href={item.href}
                        className='flex items - center justify - between p - 2 rounded - lg hover:bg - gray - 800 / 50 transition - colors';
                      >;
                        <span className='text - white text - sm'>{item.name}</span>;
                        <ArrowRight className='w - 4 h - 4 text - fuchsia - 400' />;
                      </Link>))}
                  </div>;
                </div>)}
            </div>;
          </div>;
          {/* Mobile Menu Button */}
          <button;
            className='lg:hidden p - 2 text - gray - 300 hover:text - white transition - colors';
            on_click={() => setIsOpen (!is_open)}
          >;
            {is_open ? <X className='w - 6 h - 6' /> : <Menu className='w - 6 h - 6' />}
          </button>;
        </div>;
      </div>;
      {/* Mobile Menu */}
      {is_open && (
        <div className='lg:hidden bg - black / 95 backdrop - blur - xl border - t border - gray - 700 / 50'>;
          <div className='max - w-7xl mx - auto px - 4 py - 6'>;
            <div className='space - y-6'>;
              {/* Services Section */}
              <div>;
                <button;
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';
                  on_click={() => toggle_dropdown ('mobile - services')}
                >;
                  <span > Services</span>;
                  <ChevronRight;
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - services' ? 'rotate - 90' : ''}`}
                  />;
                </button>;
                {active_dropdown === 'mobile - services' && (
                  <div className='ml - 4 space - y-3'>;
                    {service_categories.map ((category, index) => (
                      <div;
                        key={index}
                        className='border - l-2 border - gray - 700 pl - 4';
                      >;
                        <div className='text - cyan - 400 font - medium mb - 2'>;
                          {category.name}
                        </div>;
                        <div className='text - gray - 400 text - sm mb - 2'>;
                          {category.description}
                        </div>;
                        <div className='space - y-1'>;
                          {category.services;
                            .slice (0, 2);
                            .map ((service, service_index) => (
                              <div;
                                key={service_index}
                                className='text - xs text - gray - 500';
                              >;
                                • {service.name} - {service.price}
                              </div>))}
                        </div>;
                      </div>))}
                    <div className='pt - 3'>;
                      <Button;
                        href='/services';
                        variant='quantum';
                        size='sm';
                        className='w - full';
                      >;
                        View All Services;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />;
                      </Button>;
                    </div>;
                  </div>)}
              </div>;
              {/* Company Section */}
              <div>;
                <button;
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';
                  on_click={() => toggle_dropdown ('mobile - company')}
                >;
                  <span > Company</span>;
                  <ChevronRight;
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - company' ? 'rotate - 90' : ''}`}
                  />;
                </button>;
                {active_dropdown === 'mobile - company' && (
                  <div className='ml - 4 space - y-3'>;
                    {company_info.map ((item, index) => (
                      <Link;
                        key={index}
                        href={item.link}
                        className='block text - gray - 300 hover:text - white transition - colors';
                        on_click={closeMobileMenu}
                      >;
                        {item.name}
                      </Link>))}
                  </div>)}
              </div>;
              {/* Resources Section */}
              <div>;
                <button;
                  className='flex items - center justify - between w - full text - left text - white font - semibold mb - 4';
                  on_click={() => toggle_dropdown ('mobile - resources')}
                >;
                  <span > Resources</span>;
                  <ChevronRight;
                    className={`w - 5 h - 5 transition - transform duration - 300 ${active_dropdown === 'mobile - resources' ? 'rotate - 90' : ''}`}
                  />;
                </button>;
                {active_dropdown === 'mobile - resources' && (
                  <div className='ml - 4 space - y-3'>;
                    {resources.map ((item, index) => (
                      <Link;
                        key={index}
                        href={item.link}
                        className='block text - gray - 300 hover:text - white transition - colors';
                        on_click={closeMobileMenu}
                      >;
                        {item.name}
                      </Link>))}
                  </div>)}
              </div>;
              {/* Contact Info */}
              <div className='pt - 6 border - t border - gray - 700 / 50'>;
                <div className='text - white font - semibold mb - 4'>;
                  Contact Information;
                </div>;
                <div className='space - y-3'>;
                  <div className='flex items - center space - x-3'>;
                    <Phone className='w - 5 h - 5 text - cyan - 400' />;
                    <span className='text - gray - 300'>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-3'>;
                    <Mail className='w - 5 h - 5 text - purple - 400' />;
                    <span className='text - gray - 300'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-3'>;
                    <MapPin className='w - 5 h - 5 text - green - 400' />;
                    <span className='text - gray - 300 text - sm'>;
                      {contact_info.address}
                    </span>;
                  </div>;
                  <div className='flex items - center space - x-3'>;
                    <Globe className='w - 5 h - 5 text - blue - 400' />;
                    <span className='text - gray - 300'>{contact_info.website}</span>;
                  </div>;
                </div>;
                <div className='mt - 6 space - y-3'>;
                  <Button;
                    href='/services';
                    variant='quantum';
                    size='lg';
                    className='w - full';
                  >;
                    Explore Services;
                    <ArrowRight className='w - 5 h - 5 ml - 2' />;
                  </Button>;
                  <Button;
                    href='/contact';
                    variant='secondary';
                    size='lg';
                    className='w - full';
                  >;
                    Contact Us;
                  </Button>;
                </div>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
=======





  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'services' ? 'rotate-180' : ''
}`
}/> </button> </div>) )
}</div> </div>) )
}</div> <div className="mt-6 pt-6 border-t border-gray-700/50" > <div className="flex items-center justify-between" > <div className="text-gray-400 text-sm" > <span className="text-cyan-400 font-semibold" >500+</span> Revolutionary Services Available </div> <Button href="/services" variant="quantum" size="sm" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div> </div>)
}</div> > <span>Popular</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'popular'? 'rotate-180': ''
}`
}/> </button>) )
}</div> </div>)
}</div>) )
}</div> </div>)
}</div> </div> </button> </div> </div> <span>Services</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-services'? 'rotate-90': ''
}`
}/> </button>) )
}</div> </div>) )
}<div className="pt-3" > <Button href="/services" variant="quantum" size="sm" className="w-full" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div>)
}</div> {
  /* Company Section */
}<div> <span>Company</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-company'? 'rotate-90': ''
}`
}/> </button>) )
}</div>)
}</div> {
  /* Resources Section */
}<div> <span>Resources</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {

  activeDropdown === 'mobile-resources'? 'rotate-90': ''
}`
}/> </button>) )
}</div>)
}</div> </div> </div> <div className="mt-6 space-y-3" > <Button href="/services" variant="quantum" size="lg" className="w-full" > Explore Services <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/contact" variant="secondary" size="lg" className="w-full" > Contact Us </Button> </div> </div> </div> </div> </div>)
}</nav>) 								<div className="mt-6 space-y-3">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { 
	Menu;
	X, 
	ChevronDown, 
	ChevronRight;
	Phone;
	Mail;
	MapPin;
	Globe;
	ArrowRight;
	Sparkles;
	Brain;
	Atom;
	Shield;
	DollarSign;
	FileText;
	BarChart3;
	MessageSquare;
	Truck;
	Users;
	Database;
	Cpu;
	Cloud;
	Play;
	Search;
	ShieldCheck;
	TrendingUp;
	Rocket;
	Zap;
	Check;
	Star;
	Clock;
	Target;
	Building;
	Award;
	ChartBar;
	Lock;
	Smartphone;
	Palette;
	Calendar;
	CreditCard;
	Settings;
	Code;
	BookOpen;
	Activity;
	Bot;
	ChevronRight as ChevronRightIcon;
	Eye;
	FlaskConical;
	Link as LinkIcon
} from 'lucide-react';
import Button from '../ui/Button';
export default function NeoFuturisticNavigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const router = useRouter();
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
};
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll)
	}, []);
	const toggleDropdown = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
	};
	const closeMobileMenu = () => {
		setIsOpen(false);
		setActiveDropdown(null)
	};
	const isActive = (path: string) => router.pathname === path,

		window.addEventListener('scroll', handleScroll),
		return () => window.removeEventListener('scroll', handleScroll)
	}, []),

	const toggleDropdown = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
	},

	const closeMobileMenu = () => {
		setIsOpen(false),
		setActiveDropdown(null)
	},

	const isActive = (path: string) => router.pathname === path

	const serviceCategories = [
		{
			name: 'Quantum Computing',
			description: 'Revolutionary quantum computing solutions',
icon: <Atom className="w-5 h-5" />,
			color: 'from-purple-500 to-pink-500',
			services: [
				{ name: 'Quantum AI Platform', description: 'AI-powered quantum computing', price: '$299/month' },
				{ name: 'Quantum Optimization', description: 'Quantum algorithms for complex problems', price: '$199/month' },
				{ name: 'Quantum Simulation', description: 'Advanced quantum simulations', price: '$399/month' }
			]
};
		{
			name: 'AI & Machine Learning',
			description: 'Advanced artificial intelligence and ML platforms',
			icon: <Brain className="w-5 h-5" />,
			color: 'from-blue-500 to-cyan-500',
			services: [
				{ name: 'AI Content Generator', description: 'Professional AI content creation', price: '$49/month' },
				{ name: 'AI Analytics Platform', description: 'Advanced business intelligence', price: '$99/month' },
				{ name: 'AI Automation Suite', description: 'Complete business automation', price: '$149/month' }
			]
};
		{
			name: 'Cybersecurity',
			description: 'Next-generation security solutions',
			icon: <Shield className="w-5 h-5" />,
			color: 'from-red-500 to-orange-500',
			services: [
				{ name: 'Quantum Cybersecurity', description: 'Post-quantum era security', price: '$159/month' },
				{ name: 'AI Threat Detection', description: 'Intelligent security monitoring', price: '$89/month' },
				{ name: 'Zero-Trust Platform', description: 'Advanced access control', price: '$129/month' }
			]
};
		{
			name: 'Blockchain & Web3',
			description: 'Future-proof blockchain and decentralized solutions',
			icon: <LinkIcon className="w-5 h-5" />,
			color: 'from-indigo-500 to-purple-500',
			services: [
				{ name: 'Quantum Blockchain', description: 'Post-quantum blockchain platform', price: '$349/month' },
				{ name: 'DeFi Protocol Suite', description: 'Complete DeFi solutions', price: '$199/month' },
				{ name: 'NFT Marketplace', description: 'AI-curated NFT platform', price: '$99/month' }
			]
};
		{
			name: 'IoT & Smart Cities',
			description: 'Connected devices and intelligent infrastructure',
			icon: <Globe className="w-5 h-5" />,
			color: 'from-teal-500 to-green-500',
			services: [
				{ name: 'Quantum IoT Platform', description: 'Quantum-secured IoT solutions', price: '$199/month' },
				{ name: 'Smart City Suite', description: 'Complete urban intelligence', price: '$299/month' },
				{ name: 'Industrial IoT', description: 'Manufacturing automation', price: '$249/month' }
			]
};
		{
			name: 'Metaverse & VR/AR',
			description: 'Immersive digital experiences and virtual worlds',
			icon: <Eye className="w-5 h-5" />,
			color: 'from-pink-500 to-rose-500',
			services: [
				{ name: 'Quantum Metaverse', description: 'Quantum-enhanced virtual reality', price: '$499/month' },
				{ name: 'VR Development', description: 'Complete VR platform', price: '$299/month' },
				{ name: 'AR Solutions', description: 'Augmented reality platform', price: '$199/month' }
			]
};
		{
			name: 'Robotics & Automation',
			description: 'Intelligent automation and robotic systems',
			icon: <Cpu className="w-5 h-5" />,
			color: 'from-orange-500 to-red-500',
			services: [
				{ name: 'Quantum Robotics', description: 'AI-powered robotics platform', price: '$799/month' },
				{ name: 'Manufacturing AI', description: 'Autonomous manufacturing', price: '$199/month' },
				{ name: 'Service Robotics', description: 'Intelligent service automation', price: '$349/month' }
			]
};
		{
			name: 'Energy & Sustainability',
			description: 'Green technology and energy optimization',
			icon: <Zap className="w-5 h-5" />,
			color: 'from-yellow-500 to-orange-500',
			services: [
				{ name: 'Quantum Energy', description: 'AI-optimized energy management', price: '$299/month' },
				{ name: 'Smart Grid', description: 'Intelligent energy distribution', price: '$199/month' },
				{ name: 'Sustainability AI', description: 'Environmental impact optimization', price: '$149/month' }
			]
};
		{
			name: 'Financial Technology',
			description: 'Innovative fintech and trading solutions',
			icon: <DollarSign className="w-5 h-5" />,
			color: 'from-violet-500 to-purple-500',
			services: [
				{ name: 'Quantum Trading', description: 'Quantum-enhanced algorithmic trading', price: '$899/month' },
				{ name: 'AI Risk Management', description: 'Intelligent financial risk analysis', price: '$399/month' },
				{ name: 'Blockchain Finance', description: 'DeFi and blockchain solutions', price: '$199/month' }
			]
};
		{
			name: 'Biotechnology & Healthcare',
			description: 'AI-powered healthcare and biotech solutions',
			icon: <FlaskConical className="w-5 h-5" />,
			color: 'from-emerald-500 to-teal-500',
			services: [
				{ name: 'Biotech AI', description: 'AI-powered drug discovery', price: '$599/month' },
				{ name: 'Healthcare Analytics', description: 'Medical data intelligence', price: '$299/month' },
				{ name: 'Genomic AI', description: 'Advanced genetic analysis', price: '$399/month' }
			]
		}
];
	const companyInfo = [
		{ name: 'About Zion Tech Group', description: 'Leading the global micro SaaS revolution', icon: <Rocket className="w-5 h-5" />, link: '/about' },
		{ name: 'Careers', description: 'Join our revolutionary team', icon: <Star className="w-5 h-5" />, link: '/careers' },
		{ name: 'News & Updates', description: 'Latest announcements and releases', icon: <TrendingUp className="w-5 h-5" />, link: '/news' },
		{ name: 'Contact', description: 'Talk to our team 24/7', icon: <Phone className="w-5 h-5" />, link: '/contact' }
	];
	const resources = [
		{ name: 'Documentation', description: 'Comprehensive service guides', icon: <BookOpen className="w-5 h-5" />, link: '/docs' },
		{ name: 'Blog & Insights', description: 'Latest technology trends', icon: <FileText className="w-5 h-5" />, link: '/blog' },
		{ name: 'Case Studies', description: 'Real-world success stories', icon: <BarChart3 className="w-5 h-5" />, link: '/case-studies' },
		{ name: 'Pricing', description: 'Transparent and flexible plans', icon: <CreditCard className="w-5 h-5" />, link: '/pricing' },
		{ name: 'Reports', description: 'Live performance and audits', icon: <Activity className="w-5 h-5" />, link: '/reports' }
	];

	// Popular quick links to flagship services
	const popularServiceLinks = [
		{ name: 'AI Content Generator', href: '/ai-content-generator' },
		{ name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' },
		{ name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
		{ name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },
		{ name: 'AI Video Editing', href: '/ai-video-editing' },
		{ name: 'AI SEO Optimization', href: '/ai-seo-optimization' },
		{ name: 'AI IoT Platform', href: '/ai-iot-platform' },
		{ name: 'AI Sales Automation', href: '/ai-sales-automation' },
		{ name: 'AI Market Research', href: '/ai-market-research' }
];
	// Newly added real services quick links
	const newServiceLinks = [
		{ name: 'Email Deliverability Monitor', href: '/services/email-deliverability-monitor' },
		{ name: 'Landing Page Experimentation', href: '/services/landing-page-experimentation' },
		{ name: 'Invoice Reconciliation Automation', href: '/services/invoice-reconciliation-automation' },
		{ name: 'GitHub Ops Health Dashboard', href: '/services/github-ops-health-dashboard' },
		{ name: 'Error Budget Automation', href: '/services/error-budget-automation' },
		{ name: 'LLM Usage Governance', href: '/services/llm-usage-governance' }
];
	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50' : 'bg-transparent'
		}`}> 
			{/* Scroll Progress Bar */}
<div className="absolute top-0 left-0 h-1 w-full bg-transparent">
				<div
					className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
					style={{ width: `${(typeof window !== 'undefined' && document.body.scrollHeight > 0) ? (Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)) : 0}%` }}
				/>
			</div>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3 group">
						<div className="relative">
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Sparkles className="w-6 h-6 text-white" />
							</div>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
						</div>
						<div className="hidden sm:block">
							<div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
								Zion Tech Group
							</div>
							<div className="text-xs text-gray-400">Revolutionary Technology</div>
						</div>
					</Link>
					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{/* Services Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={() => toggleDropdown('services')}
							>
								<span>Services</span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
									activeDropdown === 'services' ? 'rotate-180' : ''
								}`}/>
							</button>
							{activeDropdown === 'services' && (
								<div className="absolute top-full left-0 mt-2 w-[800px] bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="grid grid-cols-2 gap-6">
										{serviceCategories.map((category, index) => (
											<div key={index} className="group">
												<div className="flex items-center space-x-3 mb-3">
													<div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
														{category.icon}
													</div>
													<div>
<h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
															{category.name}
														</h3>
														<p className="text-gray-400 text-sm">{category.description}</p>
													</div>
												</div>
												<div className="space-y-2">
													{category.services.map((service, serviceIndex) => (
														<div key={serviceIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
															<div>
																<div className="text-white text-sm font-medium">{service.name}</div>
																<div className="text-gray-400 text-xs">{service.description}</div>
															</div>
															<div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
														</div>
													))}
												</div>
											</div>
									))}
									</div>
<div className="mt-6 pt-6 border-t border-gray-700/50">
										<div className="flex items-center justify-between">
											<div className="text-gray-400 text-sm">
												<span className="text-cyan-400 font-semibold">500+</span> Revolutionary Services Available
											</div>
											<Button href="/services" variant="quantum" size="sm">
												View All Services
												<ArrowRight className="w-4 h-4 ml-2" />
											</Button>
										</div>
									</div>
								</div>
							)}
						</div>
{/* Direct Links */}
						<Link href="/it-services" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">IT Services</Link>
						<Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Services</Link>
						<Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Micro SaaS</Link>
						<Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Pricing</Link>
						<Link href="/ai-evals" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Evals</Link>
						<Link href="/agentic-rag" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Agentic RAG</Link>
						<Link href="/ai-guardrails" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Guardrails</Link>
						<Link href="/ai-agents" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Agents</Link>
						<Link href="/solutions" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Solutions</Link>
						<Link href="/api-observability" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">API Observability</Link>
						<Link href="/incident-automation-suite" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Incident Automation</Link>
						<Link href="/data-pipeline-health" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Data Pipeline Health</Link>
						<Link href="/ai-code-review-copilot" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">AI Code Review</Link>
						<Link href="/resources" className="text-gray-300 hover:text-white transition-colors duration-300 py-2">Resources</Link>
						{/* Popular Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={() => toggleDropdown('popular')}
							>
								<span>Popular</span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'popular' ? 'rotate-180' : ''}`}/>
							</button>
							{activeDropdown === 'popular' && (
								<div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="space-y-2">
										{popularServiceLinks.map((item) => (
											<Link key={item.href} href={item.href} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
												<span className="text-white text-sm">{item.name}</span>
												<ArrowRight className="w-4 h-4 text-cyan-400" />
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
{/* New Dropdown */}
						<div className="relative group">
							<button
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
								onClick={() => toggleDropdown('new')}
							>
								<span className="flex items-center gap-2">New <span className="px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-600 text-white">Live</span></span>
								<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'new' ? 'rotate-180' : ''}`}/>
							</button>
							{activeDropdown === 'new' && (
								<div className="absolute top-full left-0 mt-2 w-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-6">
									<div className="space-y-2">
										{newServiceLinks.map((item) => (
											<Link key={item.href} href={item.href} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
												<span className="text-white text-sm">{item.name}</span>
												<ArrowRight className="w-4 h-4 text-fuchsia-400" />
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
{/* Mobile Menu Button */}
					<button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-700/50">
					<div className="max-w-7xl mx-auto px-4 py-6">
						<div className="space-y-6">
							{/* Services Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={() => toggleDropdown('mobile-services')}>
									<span>Services</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-90' : ''}`}/>
								</button>
								{activeDropdown === 'mobile-services' && (
									<div className="ml-4 space-y-3">
										{serviceCategories.map((category, index) => (
											<div key={index} className="border-l-2 border-gray-700 pl-4">
												<div className="text-cyan-400 font-medium mb-2">{category.name}</div>
												<div className="text-gray-400 text-sm mb-2">{category.description}</div>
												<div className="space-y-1">
													{category.services.slice(0, 2).map((service, serviceIndex) => (
														<div key={serviceIndex} className="text-xs text-gray-500">• {service.name} - {service.price}</div>
													))}
												</div>
											</div>
										))}
<div className="pt-3">
											<Button href="/services" variant="quantum" size="sm" className="w-full">
												View All Services
												<ArrowRight className="w-4 h-4 ml-2" />
											</Button>
										</div>
									</div>
								)}
							</div>
{/* Company Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={() => toggleDropdown('mobile-company')}>
									<span>Company</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-90' : ''}`}/>
								</button>
								{activeDropdown === 'mobile-company' && (
									<div className="ml-4 space-y-3">
										{companyInfo.map((item, index) => (
											<Link key={index} href={item.link} className="block text-gray-300 hover:text-white transition-colors" onClick={closeMobileMenu}>
												{item.name}
											</Link>
										))}
									</div>
								)}
							</div>
{/* Resources Section */}
							<div>
								<button className="flex items-center justify-between w-full text-left text-white font-semibold mb-4" onClick={() => toggleDropdown('mobile-resources')}>
									<span>Resources</span>
									<ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-90' : ''}`}/>
								</button>
								{activeDropdown === 'mobile-resources' && (
									<div className="ml-4 space-y-3">
										{resources.map((item, index) => (
											<Link key={index} href={item.link} className="block text-gray-300 hover:text-white transition-colors" onClick={closeMobileMenu}>
												{item.name}
											</Link>
										))}
									</div>
								)}
							</div>
{/* Contact Info */}
							<div className="pt-6 border-t border-gray-700/50">
								<div className="text-white font-semibold mb-4">Contact Information</div>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<Phone className="w-5 h-5 text-cyan-400" />
										<span className="text-gray-300">{contactInfo.mobile}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Mail className="w-5 h-5 text-purple-400" />
										<span className="text-gray-300">{contactInfo.email}</span>
									</div>
									<div className="flex items-center space-x-3">
										<MapPin className="w-5 h-5 text-green-400" />
										<span className="text-gray-300 text-sm">{contactInfo.address}</span>
									</div>
									<div className="flex items-center space-x-3">
										<Globe className="w-5 h-5 text-blue-400" />
										<span className="text-gray-300">{contactInfo.website}</span>
									</div>
								</div>
								<div className="mt-6 space-y-3">
<<<<<<< HEAD
<<<<<<< HEAD
                    className='w-full'
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'services' ? 'rotate-180' : ''
}`
}/> </button> </div>) )
}</div> </div>) )
}</div> <div className="mt-6 pt-6 border-t border-gray-700/50" > <div className="flex items-center justify-between" > <div className="text-gray-400 text-sm" > <span className="text-cyan-400 font-semibold" >500+</span> Revolutionary Services Available </div> <Button href="/services" variant="quantum" size="sm" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div> </div>)
}</div> > <span>Popular</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'popular'? 'rotate-180': ''
}`
}/> </button>) )
}</div> </div>)
}</div>) )
}</div> </div>)
}</div> </div> </button> </div> </div> <span>Services</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-services'? 'rotate-90': ''
}`
}/> </button>) )
}</div> </div>) )
}<div className="pt-3" > <Button href="/services" variant="quantum" size="sm" className="w-full" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div>)
}</div> {
  /* Company Section */
}<div> <span>Company</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-company'? 'rotate-90': ''
}`
}/> </button>) )
}</div>)
}</div> {
  /* Resources Section */
}<div> <span>Resources</span> <ChevronRight className= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-resources'? 'rotate-90': ''
}`
}/> </button>) )
}</div>)
}</div> </div> </div> <div className="mt-6 space-y-3" > <Button href="/services" variant="quantum" size="lg" className="w-full" > Explore Services <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/contact" variant="secondary" size="lg" className="w-full" > Contact Us </Button> </div> </div> </div> </div> </div>)
}</nav>) 								<div className="mt-6 space-y-3">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
									<Button href="/services" variant="quantum" size="lg" className="w-full">
										Explore Services
										<ArrowRight className="w-5 h-5 ml-2" />
									</Button>
									<Button href="/contact" variant="secondary" size="lg" className="w-full">
										Contact Us
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
<<<<<<< HEAD

<<<<<<< HEAD
=======

  `w-4 h-4 transition-transform duration-300 $ {;
  activeDropdown === 'services' ? 'rotate-180' : '' ;
}` ;
}/> </button> </div>) ) ;
}</div> </div>) ) ;
}</div> <div className="mt-6 pt-6 border-t border-gray-700/50" > <div className="flex items-center justify-between" > <div className="text-gray-400 text-sm" > <span className="text-cyan-400 font-semibold" >500+</span> Revolutionary Services Available </div> <Button href="/services" variant="quantum" size="sm" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div> </div>) ;
}</div> > <span>Popular</span> <ChevronDownclassName= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === 'popular'? 'rotate-180': '' 
}` 
}/> </button>) ) ;
}</div> </div>) ;
}</div>) ) ;
}</div> </div>) ;
}</div> </div> </button> </div> </div> <span>Services</span> <ChevronRightclassName= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-services'? 'rotate-90': '' 
}` 
}/> </button>) ) ;
}</div> </div>) ) ;
}<div className="pt-3" > <Button href="/services" variant="quantum" size="sm" className="w-full" > View All Services <ArrowRight className="w-4 h-4 ml-2" /> </Button> </div> </div>) ;
}</div> {;
  /* Company Section */ ;
}<div> <span>Company</span> <ChevronRightclassName= {
  `w-5 h-5 transition-transform duration-300 $ {
  activeDropdown === 'mobile-company'? 'rotate-90': '' 
}` 
}/> </button>) ) ;
}</div>) ;
}</div> {;
  /* Resources Section */ ;
}<div> <span>Resources</span> <ChevronRightclassName= {
  `w-5 h-5 transition-transform duration-300 $ {

  activeDropdown === 'mobile-resources'? 'rotate-90': '' 
}` 
}/> </button>) ) ;
}</div>) ;
}</div> </div> </div> <div className="mt-6 space-y-3" > <Button href="/services" variant="quantum" size="lg" className="w-full" > Explore Services <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button href="/contact" variant="secondary" size="lg" className="w-full" > Contact Us </Button> </div> </div> </div> </div> </div>) ;
}</nav>) 								<div className="mt-6 space-y-3">;
									<Button href="/services" variant="quantum" size="lg" className="w-full">;
										Explore Services;
										<ArrowRight className="w-5 h-5 ml-2" />;
									</Button>;
									<Button href="/contact" variant="secondary" size="lg" className="w-full">;
										Contact Us;
									</Button>;
								</div>;
							</div>;
						</div>;
					</div>;
				</div>;
			)}
		</nav>;
	);
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>)}
    </nav>);
;
  `w - 4 h - 4 transition - transform duration - 300 $ {
  active_dropdown === 'services' ? 'rotate - 180' : '';
}`;
}/> </button> </div>) );
}</div> </div>) );
}</div> <div className="mt - 6 pt - 6 border - t border - gray - 700 / 50" > <div className="flex items - center justify - between" > <div className="text - gray - 400 text - sm" > <span className="text - cyan - 400 font - semibold" >500+</span> Revolutionary Services Available </div> <Button href="/services" variant="quantum" size="sm" > View All Services <ArrowRight className="w - 4 h - 4 ml - 2" /> </Button> </div> </div> </div>);
}</div> > <span > Popular</span> <ChevronDown className= {
  `w - 4 h - 4 transition - transform duration - 300 $ {
  active_dropdown === 'popular'? 'rotate - 180': '';
}`;
}/> </button>) );
}</div> </div>);
}</div>) );
}</div> </div>);
}</div> </div> </button> </div> </div> <span > Services</span> <ChevronRight className= {
  `w - 5 h - 5 transition - transform duration - 300 $ {
  active_dropdown === 'mobile - services'? 'rotate - 90': '';
}`;
}/> </button>) );
}</div> </div>) );
}<div className="pt - 3" > <Button href="/services" variant="quantum" size="sm" className="w - full" > View All Services <ArrowRight className="w - 4 h - 4 ml - 2" /> </Button> </div> </div>);
}</div> {
  /* Company Section */;
}<div> <span > Company</span> <ChevronRight className= {
  `w - 5 h - 5 transition - transform duration - 300 $ {
  active_dropdown === 'mobile - company'? 'rotate - 90': '';
}`;
}/> </button>) );
}</div>);
}</div> {
  /* Resources Section */;
}<div> <span > Resources</span> <ChevronRight className= {
  `w - 5 h - 5 transition - transform duration - 300 $ {
  active_dropdown === 'mobile - resources'? 'rotate - 90': '';
}`;
}/> </button>) );
}</div>);
}</div> </div> </div> <div className="mt - 6 space - y-3" > <Button href="/services" variant="quantum" size="lg" className="w - full" > Explore Services <ArrowRight className="w - 5 h - 5 ml - 2" /> </Button> <Button href="/contact" variant="secondary" size="lg" className="w - full" > Contact Us </Button> </div> </div> </div> </div> </div>);
}</nav>) 								<div className="mt - 6 space - y-3">;
        <Button href="/services" variant="quantum" size="lg" className="w - full">;
          Explore Services;
          <ArrowRight className="w - 5 h - 5 ml - 2" />;
        </Button>;
        <Button href="/contact" variant="secondary" size="lg" className="w - full">;
          Contact Us;
        </Button>;
        </div>;
      </div>;
      </div>;
    </div>;
    </div>)}
  </nav>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

	);
}

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
}
	);
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
