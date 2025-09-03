<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useEffect              } from 'react.ts';
import Link from 'next/link.ts';
import { useRouter               } from 'next/router.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown, 
  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star
              } from 'lucide-react.ts';
<<<<<<< HEAD
=======
=======
>>>>>>> main
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { 
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, 
  ChevronRight, ChevronDown, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, 
  Target, TrendingUp, Star
} from 'lucide-react';

=======
<<<<<<< HEAD
=======
import { 
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, 
  Phone, Mail, MapPin, ChevronRight, ChevronDown, 
  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, 
  Award, Clock, Heart, Lightbulb, Users, FileText, 
  HelpCircle, BookOpen, Target, TrendingUp, Star'
} from 'lucide-react';
>>>>>>> main
>>>>>>> main

>>>>>>> main
>>>>>>> main
interface SidebarItem {
  name: string;
  hre,
    f: string;
  ico,
    n: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
  category?: string;
}

const contactInfo = {
  mobile: '+1-302-464-0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

const sidebarSections = [
<<<<<<< HEAD
  {'
=======
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD

    title: anyanyanyanyanyanyanyanyanyanyanyanyany&apos;Revolutionary Services', icon: Zap,
    color: 'from-cyan-500 to-blue-600', items[
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> main
    title: 'Revolutionary Services',
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    items: [
<<<<<<< HEAD
      {
        name: 'AI & Consciousness',
        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms',
        subItems: [
          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
          { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
          { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
          { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
          { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
          { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
=======
<<<<<<< HEAD
      {'
        nam,
    e: 'AI & Consciousness',
=======
>>>>>>> main
>>>>>>> main
      {
        name: 'AI & Consciousness',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
        href: '/ai-services', icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms', subItems[
          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' }, { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' }, { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }, { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }, { name: 'AI Education Platform', href: '/ai-education-platform' }, { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' }, { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' }, { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }, { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }, { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
>>>>>>> main
        ]
      },
      {
        name: 'Quantum Computing',
        href: '/quantum-services',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
        subItems: [
          { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
          { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
          { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
          { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
          { name: 'Quantum Robotics', href: '/quantum-robotics' },
          { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
          { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
          { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
        ]
      },
      {
        name: 'Enterprise IT',
        href: '/enterprise-it',
        icon: Shield,
        description: 'Enterprise-grade IT infrastructure and security',
        subItems: [
          { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
          { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
          { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
          { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
          { name: 'Quantum Networking', href: '/quantum-networking' },
          { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
          { name: 'Quantum Data Center', href: '/quantum-data-center' },
          { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
        ]
      },
      {
        name: 'Micro SAAS',
        href: '/micro-saas',
        icon: Rocket,
        description: 'AI-powered micro SAAS solutions',
        subItems: [
          { name: 'AI Content Factory Platform', href: '/ai-content-factory' },
          { name: 'CRM Intelligence & Automation', href: '/crm-intelligence-automation' },
          { name: 'AI Decision Engine Platform', href: '/ai-decision-engine' },
          { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
          { name: 'AI HR & Talent Platform', href: '/ai-hr-talent-platform' },
          { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' },
          { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence' },
          { name: 'Marketing Automation Platform', href: '/marketing-automation-platform' },
          { name: 'Project Management AI', href: '/project-management-ai' }
        ]
      },
      {
        name: 'Space Technology',
        href: '/space-tech',
        icon: Globe,
        description: 'Cutting-edge space exploration and mining',
        subItems: [
          { name: 'Space Mining Platform', href: '/space-mining-platform' },
          { name: 'Satellite Technology', href: '/satellite-technology' },
          { name: 'Space Resource Management', href: '/space-resource-management' },
          { name: 'Interplanetary Communication', href: '/interplanetary-communication' }
        ]
      },
      {
        name: 'Emerging Tech',
        href: '/emerging-tech',
        icon: Sparkles,
        description: 'Future technologies and innovations',
        subItems: [
          { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
          { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
          { name: 'Advanced Robotics', href: '/advanced-robotics' },
          { name: 'Biotechnology Platform', href: '/biotechnology-platform' }
        ]
      }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Target,
    color: 'from-purple-500 to-pink-600',
    items: [
      {
        name: 'Healthcare',
        href: '/healthcare-solutions',
        icon: Heart,
        description: 'AI-powered healthcare diagnostics and solutions',
        subItems: [
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'Medical Imaging AI', href: '/medical-imaging-ai' },
          { name: 'Drug Discovery Platform', href: '/drug-discovery-platform' }
        ]
      },
      {
        name: 'Financial Services',
        href: '/financial-solutions',
        icon: BarChart3,
        description: 'Advanced financial intelligence and analytics',
        subItems: [
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'Quantum Trading Platform', href: '/quantum-financial-trading' },
          { name: 'Risk Assessment AI', href: '/risk-assessment-ai' }
        ]
      },
      {
        name: 'Manufacturing',
        href: '/manufacturing-solutions',
        icon: Settings,
        description: 'Industry 4.0 and smart manufacturing',
        subItems: [
          { name: 'Smart Factory Platform', href: '/smart-factory-platform' },
          { name: 'Predictive Maintenance AI', href: '/predictive-maintenance-ai' },
          { name: 'Quality Control AI', href: '/quality-control-ai' }
        ]
      },
      {
        name: 'Retail & E-commerce',
        href: '/retail-solutions',
        icon: Eye,
        description: 'E-commerce optimization and retail intelligence',
        subItems: [
          { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
          { name: 'Customer Behavior AI', href: '/customer-behavior-ai' },
          { name: 'Inventory Management AI', href: '/inventory-management-ai' }
        ]
      },
      {
        name: 'Government & Defense',
        href: '/government-solutions',
        icon: Shield,
        description: 'Secure government and defense solutions',
        subItems: [
          { name: 'Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
          { name: 'Data Protection AI', href: '/data-protection-ai' },
          { name: 'Threat Detection AI', href: '/threat-detection-ai' }
        ]
      },
      {
        name: 'Education',
        href: '/education-solutions',
        icon: Award,
        description: 'AI-powered education and learning platforms',
        subItems: [
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'Personalized Learning AI', href: '/personalized-learning-ai' },
          { name: 'Student Performance AI', href: '/student-performance-ai' }
        ]
      }
    ]
  },
  {
    title: 'Company & Resources',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
    items: [
      {
        name: 'About Us',
        href: '/about',
        icon: Users,
        description: 'Learn about Zion Tech Group',
        subItems: [
          { name: 'Our Mission', href: '/mission' },
          { name: 'Leadership Team', href: '/leadership' },
          { name: 'Company History', href: '/history' },
          { name: 'Careers', href: '/careers' }
        ]
      },
      {
        name: 'Resources',
        href: '/resources',
        icon: BookOpen,
        description: 'Educational content and documentation',
        subItems: [
          { name: 'Documentation', href: '/docs' },
          { name: 'API Reference', href: '/api-docs' },
          { name: 'Blog & News', href: '/blog' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: 'Whitepapers', href: '/whitepapers' },
          { name: 'Webinars', href: '/webinars' }
        ]
      },
      {
        name: 'Support',
<<<<<<< HEAD
        href: '/support',
        icon: HelpCircle,
        description: 'Get help and support',
        subItems: [
          { name: 'Contact Support', href: '/contact-support' },
          { name: 'Training Programs', href: '/training' },
          { name: 'Community Forum', href: '/community' },
          { name: 'Knowledge Base', href: '/knowledge-base' }
        ]
      }
    ]
  }
=======
        href: '/support', icon: HelpCircle,
        description: 'Get help and support', subItems[
          { name: 'Contact Support', href: '/contact-support' }, { name: anyanyanyanyanyanyanyanyanyanyanyanyany&apos;Training Programs', href: '/training';
},;
          { name: 'Community Forum', href: '/community' },;
          { name: 'Knowledge Base', href: '/knowledge-base' };
        ];
      };
    ];
  };
=======
>>>>>>> main
        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms',
        children: ['
          { nam,
    e: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
          { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
          { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
          { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' }
        ],
        isNew: true,
        badge: 'Revolutionary'
      },
      {'
        name: 'Quantum Computing',
        href: '/quantum-computing',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
<<<<<<< HEAD
        children: ['
          { nam,
    e: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
          { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
          { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
          { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
          { name: 'Quantum Robotics', href: '/quantum-robotics' },
          { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
          { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
          { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
        ]
      },
      {'
        name: 'Enterprise IT',
        href: '/enterprise-it',
        icon: Shield,
        description: 'Enterprise-grade IT infrastructure and security',
        children: ['
          { nam,
    e: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
          { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
          { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
          { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
          { name: 'Quantum Networking', href: '/quantum-networking' },
          { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
          { name: 'Quantum Data Center', href: '/quantum-data-center' },
          { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
        ]
      }
    ]
  },
  {'
    title: 'Innovation Hub',
    icon: Rocket,
    color: 'from-purple-500 to-pink-600',
    items: [
      {'
        nam,
    e: 'Research & Development',
        href: '/research-development',
        icon: Lightbulb,
        description: 'Cutting-edge research and innovation',
        children: ['
          { nam,
    e: 'AI Research Lab', href: '/ai-research-lab' },
          { name: 'Quantum Research Center', href: '/quantum-research-center' },
          { name: 'Biotech Innovation Hub', href: '/biotech-innovation-hub' },
          { name: 'Space Technology Lab', href: '/space-technology-lab' },
          { name: 'Green Technology Center', href: '/green-technology-center' }
        ]
      },
      {'
        name: 'Future Technologies',
        href: '/future-technologies',
        icon: Sparkles,
        description: 'Emerging technologies and trends',
        children: ['
          { nam,
    e: 'Metaverse Platform', href: '/metaverse-platform' },
          { name: 'Neural Interface Technology', href: '/neural-interface-technology' },
          { name: 'Holographic Computing', href: '/holographic-computing' },
          { name: 'Time Crystal Computing', href: '/time-crystal-computing' },
          { name: 'Consciousness Upload Platform', href: '/consciousness-upload-platform' }
=======
        children: [
          { name: 'Quantum Algorithms', href: '/quantum-algorithms' },
          { name: 'Quantum Cryptography', href: '/quantum-cryptography' },
          { name: 'Quantum Machine Learning', href: '/quantum-ml' },
          { name: 'Quantum Simulation', href: '/quantum-simulation' }
        ],
        isHot: true,
        badge: 'Hot'
      },
      {
        name: 'Cybersecurity Evolution',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Advanced threat protection and security',
        children: [
          { name: 'AI-Powered Security', href: '/ai-security' },
          { name: 'Zero Trust Architecture', href: '/zero-trust' },
          { name: 'Quantum Security', href: '/quantum-security' },
          { name: 'Threat Intelligence', href: '/threat-intelligence' }
        ],
        isPremium: true,
        badge: 'Premium'
      }
    ]
  },
  {
    title: 'Core Services',
    icon: Rocket,
    color: 'from-purple-500 to-pink-600',
    items: [
      {
        name: 'Cloud Architecture',
        href: '/cloud-services',
        icon: Cloud,
        description: 'Scalable cloud solutions and infrastructure',
        children: [
          { name: 'Multi-Cloud Strategy', href: '/multi-cloud' },
          { name: 'Serverless Architecture', href: '/serverless' },
          { name: 'Container Orchestration', href: '/containers' },
          { name: 'Edge Computing', href: '/edge-computing' }
        ]
      },
      {
        name: 'Web Development',
        href: '/web-development',
        icon: Globe,
        description: 'Modern web applications and platforms',
        children: [
          { name: 'Progressive Web Apps', href: '/pwa' },
          { name: 'E-commerce Solutions', href: '/ecommerce' },
          { name: 'API Development', href: '/api-development' },
          { name: 'Performance Optimization', href: '/performance' }
        ]
      },
      {
        name: 'Data Analytics',
        href: '/data-analytics',
        icon: BarChart3,
        description: 'Advanced data insights and visualization',
        children: [
          { name: 'Business Intelligence', href: '/business-intelligence' },
          { name: 'Predictive Analytics', href: '/predictive-analytics' },
          { name: 'Real-time Dashboards', href: '/dashboards' },
          { name: 'Data Visualization', href: '/data-viz' }
>>>>>>> main
        ]
      }
    ]
  },
  {'
    title: 'Company',
    icon: Users,
    color: 'from-green-500 to-teal-600',
    items: [
      {'
        nam,
    e: 'About Us',
        href: '/about',
        icon: Heart,
        description: 'Learn about our mission and values'
      },
<<<<<<< HEAD
      {'
        name: 'Leadership',
        href: '/leadership',
        icon: Award,
        description: 'Meet our executive team'
=======
      {
        name: 'Our Team',
        href: '/team',
        icon: Users,
        description: 'Meet the experts behind our solutions'
>>>>>>> main
      },
      {'
        name: 'Careers',
        href: '/careers',
        icon: Target,
        description: 'Join our innovative team'
      },
<<<<<<< HEAD
      {'
        name: 'News & Media',
        href: '/news',
        icon: FileText,
        description: 'Latest news and press releases'
      }
    ]
  },
  {'
    title: 'Support',
    icon: HelpCircle,
    color: 'from-orange-500 to-red-600',
    items: [
      {'
        nam,
    e: 'Documentation',
        href: '/docs',
        icon: BookOpen,
        description: 'Technical documentation and guides'
      },
      {'
        name: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch with our team'
      },
      {'
        name: 'Status',
        href: '/status',
        icon: BarChart3,
        description: 'System status and uptime'
=======
      {
        name: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch with us'
>>>>>>> main
      }
    ]
  }
>>>>>>> main
>>>>>>> main
];

<<<<<<< HEAD
  isOpen: boolean
  onClose: ()               => void}

export default function EnhancedSidebar2025(...args[]: any): {

  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
=======
interface EnhancedSidebar2025Props {
  isOpen: boolean;
<<<<<<< HEAD
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
>>>>>>> main
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

<<<<<<< HEAD
      newExpanded.add(sectionTitle)}
    setExpandedSections(newExpanded)};
  const filteredServices = sidebarSections.flatMap(section =>
    section.items.flatMap(item =>
      item.subItems?.filter(child =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        child.description?.toLowerCase().includes(searchQuery.toLowerCase());
      ) || [];
    );
  );
      newExpanded.delete(itemName)} else {
=======
  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const toggleItem = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };
>>>>>>> main

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => router.pathname === href;

<<<<<<< HEAD
      document.body.style.overflow = 'unset'}
;
    return () => {;
      document.body.style.overflow = 'unset'}}, [isOpen]);
  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === href
=======
>>>>>>> main
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>
=======
  onClos,
    e: () => void;
}

<<<<<<< HEAD
export default function EnhancedSidebar2025(...args[]: any): {
=======
<<<<<<< HEAD
export default function EnhancedSidebar2025(...args[]: any): {
=======
const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
>>>>>>> main
>>>>>>> main

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle);
        ? prev.filter(title => title !== sectionTitle);
        : [...prev, sectionTitle]
    );
  };

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName);
        ? prev.filter(name => name !== itemName);
        : [...prev, itemName]
    );
  };

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
>>>>>>> main

      {/* Sidebar */}
<<<<<<< HEAD
      <motion.div"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
<<<<<<< HEAD
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>
=======
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 lg: translate-x-0 l,
    g:static l,
    g:shadow-none"
      >"
        <div className="flex flex-col h-full">
          {/* Header */}"
          <div className="flex items-center justify-between p-6 border-b border-gray-200">"
            <div className="flex items-center">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>
              </div>"
              <div className="ml-3">"
                <h1 className="text-xl font-bold text-gray-900">Zion Tech</h1>"
                <p className="text-sm text-gray-500">2025 Edition</p>
=======
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 lg:translate-x-0 lg:static lg:shadow-none"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
>>>>>>> main
>>>>>>> main
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </div>
            <button
<<<<<<< HEAD
              onClick={onClose}"
              className="lg:hidden p-2 rounded-lg hove,
    r:bg-gray-100 transition-colors"
            >"
=======
              onClick={onClose}
<<<<<<< HEAD
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-400" />
=======
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
>>>>>>> main
              <X className="w-6 h-6" />
>>>>>>> main
            </button>
          </div>

<<<<<<< HEAD
          {/* Navigation */}"
          <div className="flex-1 overflow-y-auto p-4">"
            <div className="space-y-6">
              {sidebarSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <button
                    onClick={() => toggleSection(section.title)}"
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >"
                    <div className="flex items-center">"
                      <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-3`}>`
                        <section.icon className="w-4 h-4 text-white" />
                      </div>"
                      <span className="font-semibold text-gray-900">{section.title}</span>
                    </div>
                    {expandedSections.includes(section.title) ? ("
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : ("
                      <ChevronRight className="w-5 h-5 text-gray-500" />
=======
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <section.icon className="w-5 h-5 mr-3 text-gray-600" />
                      <span className="font-medium text-gray-900">{section.title}</span>
                    </div>
                    {expandedSections.includes(section.title) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
>>>>>>> main
                    )}
                  </button>

<<<<<<< HEAD
        {/* Navigation Content */}
        <div className="p-6 space-y-6">
          {/* Home Link */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"
          >
            <Home className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Home</span>
          </Link>

          {/* Service Sections */}
          {sidebarSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-3">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">{section.title}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    expandedSections.has(section.title) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 ml-6"
                  >
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <button
                          onClick={() => toggleItem(item.name)}
                          className="w-full flex items-center justify-between p-2 hover:bg-gray-800/30 rounded-lg transition-all duration-300 group text-left"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                            <div>
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                                {item.name}
                              </span>
                              <p className="text-gray-500 text-xs">{item.description}</p>
                            </div>
                          </div>
                          {item.subItems && item.subItems.length > 0 && (
                            <ChevronRight
                              className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                                expandedItems.has(item.name) ? 'rotate-90' : ''
=======
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
<<<<<<< HEAD
                        initial={{ opacity: 0, height: 0 }}"
                        animate={{ opacity: 1, height: 'auto' }}
=======
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
>>>>>>> main
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {section.items.map((item) => (
                          <div key={item.name}>
                            <Link
                              href={item.href}
<<<<<<< HEAD
                              onClick={onClose}"
                              className={`flex items-center p-3 rounded-lg transition-colors ${
                                isActive(item.href)`
                                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600''
                                  : 'text-gray-700 hover:bg-gray-50''
                              }`}
                            >`
                              <item.icon className="w-5 h-5 mr-3" />"
                              <div className="flex-1">"
                                <div className="font-medium">{item.name}</div>
                                {item.description && ("
                                  <div className="text-sm text-gray-500">{item.description}</div>
                                )}
                              </div>
                              {item.children && (
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleItem(item.name);
                                  }}"
                                  className="p-1 hover:bg-gray-200 rounded"
                                >
                                  {expandedItems.includes(item.name) ? ("
                                    <ChevronDown className="w-4 h-4" />
                                  ) : ("
                                    <ChevronRight className="w-4 h-4" />
                                  )}
                                </button>
=======
                              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                                isActive(item.href)
                                  ? 'bg-blue-100 text-blue-700 font-medium'
                                  : 'text-gray-700 hover:bg-gray-100'
>>>>>>> main
                              }`}
                              onClick={onClose}
                            >
                              <item.icon className="w-5 h-5 mr-3" />
                              <span className="flex-1">{item.name}</span>
                              {item.badge && (
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  item.isNew ? 'bg-green-100 text-green-800' :
                                  item.isHot ? 'bg-red-100 text-red-800' :
                                  item.isPremium ? 'bg-purple-100 text-purple-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {item.badge}
                                </span>
>>>>>>> main
                              )}
                            </Link>

<<<<<<< HEAD
                        {/* Sub-items */}
                        {item.subItems && item.subItems.length > 0 && (
                          <AnimatePresence>
                            {expandedItems.has(item.name) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-1 ml-6"
                              >
                                {item.subItems.map((subItem, subIndex) => (
=======
                            {item.children && (
<<<<<<< HEAD
                              <AnimatePresence>
                                {expandedItems.includes(item.name) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}"
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="ml-8 mt-1 space-y-1"
                                  >
                                    {item.children.map((child, childIndex) => (
                                      <Link
                                        key={childIndex}
                                        href={child.href}
                                        onClick={onClose}"
                                        className={`block p-2 rounded-lg text-sm transition-colors ${
                                          isActive(child.href)`
                                            ? 'bg-blue-50 text-blue-700''
                                            : 'text-gray-600 hover:bg-gray-50''
                                        }`}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
=======
                              <div className="ml-4 mt-1 space-y-1">
                                {item.children.map((child) => (
>>>>>>> main
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                      isActive(child.href)
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                    onClick={onClose}
<<<<<<< HEAD
                                    className="flex items-center gap-2 p-2 hover:bg-gray-800/20 rounded-lg transition-all duration-300 group"
                                  >
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"

>>>>>>> main
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                                    <span className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-200 text-xs">
                                      {subItem.name}
                                    </span>
=======
                                  >
                                    {child.name}
>>>>>>> main
                                  </Link>
                                ))}
                              </div>
>>>>>>> main
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

<<<<<<< HEAD
          {/* Footer */}`
          <div className="p-4 border-t border-gray-200">"
            <div className="flex items-center space-x-4">
              <a"
                href="https: //linkedin.com/company/ziontechgroup""
                target="_blank""
                rel="noopener noreferrer""
=======
<<<<<<< HEAD
          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
>>>>>>> main
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >"
                <Globe className="w-5 h-5" />
              </a>
<<<<<<< HEAD
              <a"
                href="mailt,
    o:info@ziontechgroup.com""
                className="p-2 text-gray-400 hove,
    r:text-gray-600 transition-colors"
              >"
                <Mail className="w-5 h-5" />
              </a>
            </div>"
            <p className="mt-2 text-xs text-gray-500">
              © 2025 Zion Tech Group. All rights reserved.
=======
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              © 2024 Zion Tech Group. All rights reserved.
>>>>>>> main
            </p>
          </div>
        </div>
      </motion.div>
=======
          {/* Contact CTA */}
          <div className="pt-6 border-t border-gray-800/50">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30">
              <h4 className="text-sm font-semibold text-white mb-2">Ready to Transform?</h4>
              <p className="text-gray-300 text-xs mb-3">
                Get in touch to discuss your revolutionary technology needs.
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
<<<<<<< HEAD
                <ChevronRight className="w-4 h-4" / />
=======
                <ChevronRight className="w-4 h-4" />
              </Link>
<<<<<<< HEAD
>>>>>>> main
            </div>
          </div>
        </div>
      </motion.div>
<<<<<<< HEAD
</>
  )
}
=======
    </>
  );
}
=======
            </div>;
          </div>;
        </div>;
      </motion.div>;
<<<<<<< HEAD
</>
=======
<<<<<<< HEAD
</>;
=======
>>>>>>> main
    </>
>>>>>>> main
>>>>>>> main
  );
};

export default EnhancedSidebar2025;"
>>>>>>> main
>>>>>>> main
