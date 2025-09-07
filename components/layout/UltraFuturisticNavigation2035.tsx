import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles;
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones;
  Code, Database, Network, Server, Monitor, Smartphone;
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck;
<<<<<<< HEAD
<<<<<<< HEAD
  Building, MessageCircle;
  } from 'lucide-react';
interface NavigationItem  {name: string;
  href: string;
import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Rocket,
  Shield,
  Zap,
  Target,
  Atom,
  BookOpen,
  Truck,
  DollarSign,
  BarChart3,
  Globe,
  Users,
  Star,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  Settings,
  Eye,
  Award,
  Clock,
  Heart,
  Lightbulb,
  Search,
  Grid,
  List,
  TrendingUp,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  User,
  ShoppingCart,
  Bell,
  HelpCircle,
  FileText,
  Video,
  Headphones,
  Code,
  Database,
  Network,
  Server,
  Monitor,
  Smartphone,
  Camera,
  Gamepad2,
  Palette,
  Music,
  Film,
  BookOpenCheck,
  Building,;
  MessageCircle,;
} from 'lucide-react';
=======
  Building, MessageCircle
 } from 'lucide-react';
interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

import {
  Menu
  ChevronDown
  X
  Phone
  Mail
  MapPin
  ArrowRight
  Brain
  Rocket
  Shield
  Zap
  Target
  Atom
  BookOpen
  Truck
  DollarSign
  BarChart3
  Globe
  Users
  Star
  Sparkles
  Cpu
  Lock
  Cloud
  Settings
  Eye
  Award
  Clock
  Heart
  Lightbulb
  Search
  Grid
  List
  TrendingUp
  Shield as ShieldIcon
  Globe as GlobeIcon
  User
  ShoppingCart
  Bell
  HelpCircle
  FileText
  Video
  Headphones
  Code
  Database
  Network
  Server
  Monitor
  Smartphone
  Camera
  Gamepad2
  Palette
  Music
  Film
  BookOpenCheck
  Building
  MessageCircle;
} from 'lucide-react';
interface NavigationItem {
  name: string;


  href: string;  icon?: React.ReactNode;import { ;


  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, ;
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, ;
import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Rocket,
  Shield,
  Zap,
  Target,
  Atom,
  BookOpen,
  Truck,
  DollarSign,
  BarChart3,
  Globe,
  Users,
  Star,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  Settings,
  Eye,
  Award,
  Clock,
  Heart,
  Lightbulb,
  Search,
  Grid,
  List,
  TrendingUp,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  User,
  ShoppingCart,
  Bell,
  HelpCircle,
  FileText,
  Video,
  Headphones,
  Code,
  Database,
  Network,
  Server,
  Monitor,
  Smartphone,
  Camera,
  Gamepad2,
  Palette,
  Music,
  Film,
  BookOpenCheck,
  Building,
  MessageCircle,
} from 'lucide-react';
;
interface NavigationItem {
  name: string;
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight;
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen;
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles,
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb;
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon;
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones,
  Code, Database, Network, Server, Monitor, Smartphone;
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck;
  Building, MessageCircle;
} from 'lucide-react';
=======
  Building, MessageCircle
 } from 'lucide-react';
interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
<<<<<<< HEAD
  featured?: boolean
=======
<<<<<<< HEAD
  featured?: boolean;
=======

  featured?: boolean
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
  featured?: boolean;
<<<<<<< HEAD
  featured?: boolean;  featured?: boolean

const contactInfo = null;
<<<<<<< HEAD
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  featured?: boolean;  featured?: boolean;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
  featured?: boolean;
  featured?: boolean;  featured?: boolean
}
  featured?: boolean;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles, 
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, 
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, MessageCircle
} from 'lucide-react',

<<<<<<< HEAD
interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean
}

const contactInfo = $2;
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const navigationItems: NavigationItem[] = [
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Plans and average market prices',
    children: [
    ]
  featured?: boolean;  featured?: boolean;
}
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
=======
const contactInfo = {}
'
  mobile: '+1 302 464 0950','
  email: 'kleber@ziontechgroup.com','
  address: '364 E Main St STE 1008 Middletown DE 19709','
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = []
  {'
    name: 'Pricing','
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,'
    description: 'Plans and average market prices',
    children: []
    ]
  featured?: boolean;  featured?: boolean;
}
const contact_info = {'
  mobile: '+1 302 464 0950','
  email: 'kleber@ziontechgroup.com','
  address: '364 E Main St STE 1008 Middletown DE 19709','
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}
;
const navigation_items: NavigationItem[] = [;
<<<<<<< HEAD
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className='w - 5 h - 5' />,
    children: [;
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      {
        name: 'Market Pricing',
        href: '/market - pricing',
        description: 'Compare market averages',
      },
    ],
    icon: <DollarSign className = $2;
    description: 'Plans and average market prices',
    children: [
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Compare market averages' }
    ]
=======
  {'
    name: 'Pricing','
    href: '/pricing','
    icon: <DollarSign className='w - 5 h - 5' />,
    children: [;'
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      {'
        name: 'Market Pricing','
        href: '/market - pricing','
        description: 'Compare market averages',
icon: <DollarSign className='w-5 h-5' />,
    description: 'Plans and average market prices',
    children: [
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' }
      {
        name: 'Market Pricing',
        href: '/market-pricing',
        description: 'Compare market averages',
      },
    ],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  },
  {
    name: 'Resources',
    href: '/resources',
<<<<<<< HEAD
=======
    icon: <BookOpen className='w-5 h-5' />,
    description: 'Guides, reports and tools',
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      {
        name: 'Case Studies',
        href: '/case-studies',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        description: 'Proven results',
      },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      {
        name: 'Services Advertising',
<<<<<<< HEAD
        description: 'Features, benefits and market pricing links',
      },
    ],
    icon: <BookOpen className = $2;
    description: 'Guides, reports and tools',
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className = $2;
=======
        href: '/services-advertising',
        description: 'Features, benefits and market pricing links',
origin/cursor/automate-test-improve-and-merge-code-2533
      },
    ],
  },
  {'
    name: 'Resources','
    href: '/resources','
        description: 'Proven results',
      },'
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      {'
        name: 'Services Advertising','
        description: 'Features, benefits and market pricing links',
      },
    ],
  },
  {'
    name: 'Contact','
    href: '/contact','
      { name: 'Support', href: '/support', description: 'Help center' }
    ]"
  },    icon: <BookOpen className="w-5 h-5" />'
    description: 'Guides, reports and tools';
    children: ['
      { name: 'Blog', href: '/blog', description: 'Insights and updates' }'
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' }'
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' }'
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  }
  {'
    name: 'All Services','
    href: '/comprehensive - services - showcase - 2025',"
    icon: <Globe className="w - 5 h - 5" />,'
    description: 'Complete portfolio of all technology services','
    badge: 'Showcase',
    featured: true,
      {'
        name: 'Zero Trust Security','
        href: '/zero-trust-security-platform','
        description: 'Next-generation security architecture',
      },
      {'
        name: 'Quantum Cloud Infrastructure','
        href: '/quantum-cloud-infrastructure','
        description: 'Quantum-enhanced cloud computing',
      },
      {'
        name: 'Autonomous IT Operations','
        href: '/autonomous-it-operations-center','
        description: 'Self-managing IT infrastructure',
      },
      {'
        name: 'Edge Computing Orchestration','
        href: '/edge-computing-orchestration','
        description: 'Distributed edge computing',
      },
      {'
        name: 'Blockchain Infrastructure','
        href: '/blockchain-infrastructure-platform','
        description: 'Enterprise blockchain solutions',
      },
      {'
        name: 'AI-Powered DevOps','
        href: '/ai-powered-devops-platform','
        description: 'Intelligent development operations',
      },
      {'
        name: 'Quantum Cybersecurity','
        href: '/quantum-cybersecurity-services','
        description: 'Next-gen quantum security',
      },
      {'
        name: 'AI-Powered Cybersecurity','
        href: '/ai-powered-cybersecurity','
        description: 'Intelligent threat detection',
      },
    ],
  },'
    name: 'Industry Solutions','
    href: '/industry-solutions','
    icon: <Building className='w-5 h-5' />,'
    description: 'Industry-specific technology solutions','
    badge: 'Industry',
    children: []
      {'
        name: 'Healthcare AI','
        href: '/healthcare-ai-solutions','
        description: 'AI-powered healthcare',
      },
      {'
        name: 'Financial Technology','
        href: '/fintech-solutions','
        description: 'Next-gen fintech',
      },
      {'
        name: 'Manufacturing AI','
        href: '/manufacturing-ai-solutions','
        description: 'Smart manufacturing',
      },
      {'
        name: 'Retail Technology','
        href: '/innovative-business-solutions','
        description: 'Digital retail transformation',
      },
      {'
        name: 'Education Technology','
        href: '/training','
        description: 'AI-powered learning',
      },
      {'
        name: 'Government Solutions','
        href: '/enterprise-solutions-showcase','
        description: 'Public sector innovation',
      },
      {'
        name: 'Energy & Utilities','
        href: '/quantum-energy','
        description: 'Sustainable energy tech',
      },
      {'
        name: 'Biotech AI Research','
        href: '/biotech-ai','
        description: 'AI-driven biotech',
  }
  {'
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]'
    href: '/ai - services',"
    icon: <Brain className="w - 5 h - 5" />,'
    badge: 'New',
    featured: true,
    children: [;
<<<<<<< HEAD
      {
        name: 'AI Customer Success Platform',
        href: '/ai - customer - success - platform',
    name: 'Contact',
    href: '/contact',
    icon: <Phone className='w-5 h-5' />,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    description: 'Talk to our team',
    featured: true,
    children: [
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' },
<<<<<<< HEAD
      { name: 'Support', href: '/support', description: 'Help center' }
    ]
=======
{ name: 'Support', href: '/support', description: 'Help center' },
    ],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  },
  {
    name: 'Services',
    href: '/services',
<<<<<<< HEAD
    icon: <Grid className = $2;
    description: 'Browse by category',
    badge: 'New',
    children: [
      { name: 'AI & Data', href: '/services?filter=ai-consciousness', description: 'AI, data, ML services' },
      { name: 'Enterprise IT', href: '/services?filter=enterprise-it', description: 'Infra, security, platforms' },
      { name: 'Quantum & Emerging', href: '/services?filter=quantum-emerging', description: 'Quantum, space, frontier' },
      { name: 'Micro SAAS', href: '/services?filter=micro-saas', description: 'Business accelerators' },
      { name: 'Creative & Media', href: '/services?filter=creative-media', description: 'Content, media, design' }
    ]
=======
    icon: <Grid className='w-5 h-5' />,
    description: 'Browse by category',
    badge: 'New',
    children: [
      {
        name: 'AI & Data',
        href: '/services?filter=ai-consciousness',
        description: 'AI, data, ML services',
      },
      {
        name: 'Enterprise IT',
        href: '/services?filter=enterprise-it',
        description: 'Infra, security, platforms',
      },
      {
        name: 'Quantum & Emerging',
        href: '/services?filter=quantum-emerging',
        description: 'Quantum, space, frontier',
      },
      {
        name: 'Micro SAAS',
        href: '/services?filter=micro-saas',
        description: 'Business accelerators',
      },
      {
        name: 'Creative & Media',
        href: '/services?filter=creative-media',
        description: 'Content, media, design',
      },
    ],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
<<<<<<< HEAD
    icon: <Globe className = $2;
=======
    icon: <Globe className='w-5 h-5' />,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
<<<<<<< HEAD
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology', featured: true},
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true},
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', description: 'Enterprise-grade solutions' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'Business transformation services' }
    ]

}
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className = $2;
=======
{
        name: 'View All Services',
        href: '/comprehensive-services-showcase-2025',
        description: 'Complete services portfolio',
      },
      {
        name: 'Ultimate 2035 Futuristic'
        href: '/ultimate-2035-futuristic-services-showcase'
        description: 'Revolutionary future technology'
        featured: true
      }
      {
        name: 'Ultimate 2025 Micro SAAS'
        href: '/ultimate-2025-micro-saas-showcase'
        description: 'Latest innovative services'
        featured: true
      }
      {
        name: 'Service Categories'
        href: '/comprehensive-services-showcase-2025#categories'
        description: 'Browse by category'
      }
      {
        name: 'Pricing Comparison'
        href: '/comprehensive-services-showcase-2025#pricing'
        description: 'Compare service costs'
      }
      {
        name: 'Service Search'
        href: '/comprehensive-services-showcase-2025#search'
        description: 'Find specific services'
      }
      {
        name: 'Market Pricing'
        href: '/market-pricing'
        description: 'Average market prices & references'
      }
      {
        name: 'Latest Innovations'
        href: '/revolutionary-2025-services-showcase'
        description: 'Cutting-edge solutions'
      }
      {
        name: '2026 Services'
        href: '/revolutionary-2026-services'
        description: 'Next generation solutions'
      }
      {
        name: '2027 Services'
        href: '/revolutionary-2027-services-showcase'
        description: 'Future-ready services'
      }
      {
        name: 'Ultimate 2026'
        href: '/ultimate-2026-services-showcase'
        description: 'Premium service collection'
      }
      {
        name: 'Enterprise Solutions'
        href: '/enterprise-solutions-showcase'
        description: 'Enterprise-grade solutions'
      }
      {
        name: 'Innovative Business Solutions'
        href: '/innovative-business-solutions'
        description: 'Business transformation services'
      }
    ]
  }
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className='w-5 h-5' />,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    children: [
<<<<<<< HEAD
      { name: 'Support', href: '/support', description: 'Help center' }
=======
{
        name: 'AI Customer Success Platform',
        href: '/ai-customer-success-platform',
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      {'
        name: 'AI Customer Success Platform','
        href: '/ai - customer - success - platform','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: 'Predict and prevent churn with AI',
        featured: true,
      },
      {'
        name: 'AI Sales Intelligence','
        href: '/ai - sales - intelligence - platform','
        description: 'Supercharge sales with AI automation',
      },
      {'
        name: 'AI Financial Planning','
        href: '/ai - financial - planning - platform','
        description: 'Intelligent financial forecasting',
      },
      {'
        name: 'AI Decision Engine','
        href: '/ai - powered - decision - engine','
        description: 'AI - powered business decisions',
      },
      {'
        name: 'AI Content Automation','
        href: '/intelligent - content - automation - platform','
        description: 'Automate content creation',
      },
      {'
        name: 'AI HR Analytics','
        href: '/ai - hr - analytics - platform','
        description: 'Transform HR with AI insights',
      },
      {'
        name: 'AI Consciousness Evolution','
        href: '/ai - consciousness - evolution - 2029','
        description: 'Emotional intelligence and self - awareness',
      },
      {'
        name: 'AI Quantum Neural Network','
        href: '/ai - quantum - neural - network','
        description: 'Hybrid AI - Quantum computing platform',
      },
      {'
        name: 'AI Autonomous Business Operations','
        href: '/ai - autonomous - business - operations','
        description: 'Fully autonomous business management',
      },
      {'
        name: 'AI Autonomous Research','
        href: '/ai - autonomous - research - assistant','
        description: 'Self - directed AI research',
      },
      {'
        name: 'AI Emotional Intelligence','
        href: '/ai - emotional - intelligence - training','
        description: 'EQ training platform',
      },
      {'
        name: 'AI Predictive Maintenance','
        href: '/ai - predictive - maintenance - platform','
        description: 'Equipment failure prediction',
      },
      {'
        name: 'AI Content Personalization','
        href: '/ai - content - personalization - engine','
        description: 'Personalized content delivery',
      },
      {'
        name: 'AI Autonomous Ecosystem','
        href: '/ai - autonomous - ecosystem - manager','
        description: 'Self - managing AI systems',
      },
      {'
        name: 'AI Ethics & Governance','
        href: '/ai - ethics - governance - framework','
        description: 'Ethical AI frameworks',
      },
      {'
        name: 'Advanced AI Automation','
        href: '/advanced - ai - automation - services',
        description:;'
          'AI automation for development, testing, DevOps, security, and data',
      },
    ],
  },
  {}
  }
  {}
'
    name: 'AI & Consciousness',

  const closeMobileMenu = () => {}
    setIsOpen(false);
    closeDropdowns();    }'
    name: 'Micro SAAS Solutions','
    href: '/micro - saas','
    icon: <Rocket className='w - 5 h - 5' />,    description: 'Innovative business solutions for modern enterprises','
    badge: 'Hot',
    featured: true,'
    children: [      { name: 'AI Customer Success Platform', href: '/ai - customer - success - platform', description: 'Predict and prevent churn with AI', featured: true },'
      { name: 'AI Sales Intelligence', href: '/ai - sales - intelligence - platform', description: 'Supercharge sales with AI automation' },'
      { name: 'AI Financial Planning', href: '/ai - financial - planning - platform', description: 'Intelligent financial forecasting' },'
      { name: 'AI Decision Engine', href: '/ai - powered - decision - engine', description: 'AI - powered business decisions' },'
      { name: 'AI Content Automation', href: '/intelligent - content - automation - platform', description: 'Automate content creation' },'
      { name: 'AI HR Analytics', href: '/ai - hr - analytics - platform', description: 'Transform HR with AI insights' },'
      { name: 'AI Consciousness Evolution', href: '/ai - consciousness - evolution - 2029', description: 'Emotional intelligence and self - awareness' },'
      { name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network', description: 'Hybrid AI - Quantum computing platform' },'
      { name: 'AI Autonomous Business Operations', href: '/ai - autonomous - business - operations', description: 'Fully autonomous business management' },'
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed AI research' },'
      { name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - training', description: 'EQ training platform' },'
      { name: 'AI Predictive Maintenance', href: '/ai - predictive - maintenance - platform', description: 'Equipment failure prediction' },'
      { name: 'AI Content Personalization', href: '/ai - content - personalization - engine', description: 'Personalized content delivery' },'
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem - manager', description: 'Self - managing AI systems' },'
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance - framework', description: 'Ethical AI frameworks' },'
      { name: 'Advanced AI Automation', href: '/advanced - ai - automation - services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ];
  }
  {'
      { name: 'Invoice Studio', href: '/invoice-studio', description: 'Instant branded invoices and payments' }
    ]'
    href: '/micro - saas',"
    icon: <Rocket className="w - 5 h - 5" />,'
    badge: 'Hot',
    featured: true,
    children: [;
      {'
        name: 'Customer Success Platform','
        href: '/ai - customer - success - platform','
        description: 'AI - powered customer retention',
        featured: true,
      },
      {'
        name: 'Supply Chain Optimization','
        href: '/intelligent - supply - chain - optimization','
        description: 'AI - powered supply chain management',
      },
      {'
        name: 'Financial Planning Platform','
        href: '/ai - financial - planning - platform','
        description: 'Intelligent financial planning',
      },
      {'
        name: 'HR Analytics Platform','
        href: '/ai - hr - analytics - platform','
        description: 'AI - powered HR insights',
      },
      {'
        name: 'Sales Intelligence Platform','
        href: '/ai - sales - intelligence - platform','
        description: 'AI - powered sales automation',
      },
      {'
        name: 'CRM Intelligence Suite','
        href: '/smart - crm - intelligence - suite','
        description: 'Transform your CRM with AI',
      },
      {'
        name: 'Content Automation Platform','
        href: '/intelligent - content - automation - platform','
        description: 'AI - powered content management',
      },
      {'
        name: 'Decision Engine','
        href: '/ai - powered - decision - engine','
        description: 'AI - powered business decisions',
      },
      {'
        name: 'Helpdesk & Support','
        href: '/helpdesk - automation','
        description: 'AI helpdesk, ticketing, KB, and chat',
      },
      {'
        name: 'Learning Management (LMS)','
        href: '/lms - platform','
        description: 'Adaptive training and certifications',
      },
      {'
        name: 'E‑commerce Returns','
        href: '/ecommerce - returns - management','
        description: 'Automated returns, labels, and RMAs',
      },
      {'
        name: 'SEO Content Optimizer','
        href: '/seo - content - optimizer','
        description: 'On - page AI scoring and fixes',
      },
      {'
        name: 'Keyword Research Engine','
        href: '/keyword - research - engine','
        description: 'Low - competition keywords discovery',
      },
      {'
        name: 'Privacy Analytics Suite','
        href: '/analytics - suite','
        description: 'Cookie - less, privacy - friendly analytics',
      },
      {'
        name: 'Invoice Studio','
        href: '/invoice - studio','
        description: 'Instant branded invoices and payments',
      },
    ],
  },
  {'
    name: 'Quantum & Emerging Tech','
    href: '/quantum - services','
    icon: <Atom className='w - 5 h - 5' />,    description: 'Quantum computing and breakthrough technologies','
    badge: 'Hot',
    featured: true,'
    children: [      { name: 'Customer Success Platform', href: '/ai - customer - success - platform', description: 'AI - powered customer retention', featured: true },'
      { name: 'Supply Chain Optimization', href: '/intelligent - supply - chain - optimization', description: 'AI - powered supply chain management' },'
      { name: 'Financial Planning Platform', href: '/ai - financial - planning - platform', description: 'Intelligent financial planning' },'
      { name: 'HR Analytics Platform', href: '/ai - hr - analytics - platform', description: 'AI - powered HR insights' },'
      { name: 'Sales Intelligence Platform', href: '/ai - sales - intelligence - platform', description: 'AI - powered sales automation' },'
      { name: 'CRM Intelligence Suite', href: '/smart - crm - intelligence - suite', description: 'Transform your CRM with AI' },'
      { name: 'Content Automation Platform', href: '/intelligent - content - automation - platform', description: 'AI - powered content management' },'
      { name: 'Decision Engine', href: '/ai - powered - decision - engine', description: 'AI - powered business decisions' },'
      { name: 'Helpdesk & Support', href: '/helpdesk - automation', description: 'AI helpdesk, ticketing, KB, and chat' }'
      { name: 'Learning Management (LMS)', href: '/lms - platform', description: 'Adaptive training and certifications' },'
      { name: 'E‑commerce Returns', href: '/ecommerce - returns - management', description: 'Automated returns, labels, and RMAs' }'
      { name: 'SEO Content Optimizer', href: '/seo - content - optimizer', description: 'On - page AI scoring and fixes' },'
      { name: 'Keyword Research Engine', href: '/keyword - research - engine', description: 'Low - competition keywords discovery' },'
      { name: 'Privacy Analytics Suite', href: '/analytics - suite', description: 'Cookie - less, privacy - friendly analytics' }'
      { name: 'Invoice Studio', href: '/invoice - studio', description: 'Instant branded invoices and payments' }
    ];
  }
  {'
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Revolutionary space AI' }
    ]'
    href: '/quantum - services',"
    icon: <Atom className="w - 5 h - 5" />,'
    badge: 'Hot',
    featured: true,
    children: [;
      {'
        name: 'Quantum - Secure Cloud Infrastructure','
        href: '/quantum - secure - cloud - infrastructure','
        description: 'Unbreakable quantum encryption',
      },
      {'
        name: 'Quantum Financial Trading Platform','
        href: '/quantum - financial - trading','
        description: 'Ultra - fast quantum trading',
      },
      {'
        name: 'Quantum Internet Security Platform','
        href: '/quantum - internet - security - platform','
        description: 'Future - proof internet security',
      },
      {'
        name: 'Space Resource Mining','
        href: '/space - resource - mining - platform','
        description: 'Asteroid mining and space resources',
      },
      {'
        name: 'Quantum Internet Security','
        href: '/quantum - internet - security - platform','
        description: 'Unbreakable encryption',
      },
      {'
        name: 'Brain - Computer Interface','
        href: '/brain - computer - interface - platform','
        description: 'Neural interface technology',
      },
      {'
        name: 'Quantum Materials Discovery','
        href: '/quantum - materials - discovery - platform','
        description: 'Materials science acceleration',
      },
      {'
        name: 'Autonomous Vehicle AI','
        href: '/autonomous - vehicle - ai - platform','
        description: 'Self - driving AI systems',
      },
      {'
        name: 'Quantum Bio - Computing','
        href: '/quantum - bio - computing - platform','
        description: 'Quantum - biological hybrid processing',
      },
      {'
        name: 'Quantum Energy Platform','
        href: '/quantum - energy - platform','
        description: 'Fusion power simulation',
      },
      {'
        name: 'Quantum Robotics','
        href: '/quantum - robotics','
        description: 'Quantum - enhanced robotics',
      },
      {'
        name: 'Quantum Cybersecurity','
        href: '/quantum - cybersecurity - platform','
        description: 'Next - gen security',
      },
      {'
        name: 'Quantum Logistics','
        href: '/quantum - logistics - optimization','
        description: 'Route optimization',
      },
      {'
        name: 'Quantum Metaverse','
        href: '/quantum - metaverse','
        description: 'Quantum - enhanced virtual worlds',
      },
      {'
        name: 'Quantum IoT Platform','
        href: '/quantum - iot','
        description: 'Quantum - secured IoT',
      },
      {'
        name: 'AI - Powered Space Technology','
        href: '/ai - powered - space - technology','
        description: 'Revolutionary space AI',
      },
    ],
  },
  {'
    name: 'Enterprise IT','
    href: '/enterprise - it','
    icon: <Shield className='w - 5 h - 5' />,    description: 'Advanced enterprise infrastructure and security','
    badge: 'Enterprise',
    featured: true,'
    children: [      { name: 'Quantum - Secure Cloud Infrastructure', href: '/quantum - secure - cloud - infrastructure', description: 'Unbreakable quantum encryption' },'
      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading', description: 'Ultra - fast quantum trading' },'
      { name: 'Quantum Internet Security Platform', href: '/quantum - internet - security - platform', description: 'Future - proof internet security' },'
      { name: 'Space Resource Mining', href: '/space - resource - mining - platform', description: 'Asteroid mining and space resources' },'
      { name: 'Quantum Internet Security', href: '/quantum - internet - security - platform', description: 'Unbreakable encryption' },'
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface - platform', description: 'Neural interface technology' },'
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },'
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai - platform', description: 'Self - driving AI systems' },'
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing - platform', description: 'Quantum - biological hybrid processing' },'
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform', description: 'Fusion power simulation' },'
      { name: 'Quantum Robotics', href: '/quantum - robotics', description: 'Quantum - enhanced robotics' },'
      { name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity - platform', description: 'Next - gen security' },'
      { name: 'Quantum Logistics', href: '/quantum - logistics - optimization', description: 'Route optimization' },'
      { name: 'Quantum Metaverse', href: '/quantum - metaverse', description: 'Quantum - enhanced virtual worlds' },'
      { name: 'Quantum IoT Platform', href: '/quantum - iot', description: 'Quantum - secured IoT' },'
      { name: 'AI - Powered Space Technology', href: '/ai - powered - space - technology', description: 'Revolutionary space AI' }
    ];
  }
  {}
    ]
  }'
    name: 'Industry Solutions''
    href: '/industry-solutions''
    icon: <Building className='w-5 h-5' />'
    description: 'Industry-specific technology solutions''
    badge: 'Industry'
    children: []
      {'
        name: 'Healthcare AI''
        href: '/healthcare-ai-solutions''
        description: 'AI-powered healthcare'
      }
      {'
        name: 'Financial Technology''
        href: '/fintech-solutions''
        description: 'Next-gen fintech'
      }
      {'
        name: 'Manufacturing AI''
        href: '/manufacturing-ai-solutions''
        description: 'Smart manufacturing'
      }
      {'
        name: 'Retail Technology''
        href: '/innovative-business-solutions''
        description: 'Digital retail transformation'
      }
      {'
        name: 'Education Technology''
        href: '/training''
        description: 'AI-powered learning'
      }
      {'
        name: 'Government Solutions''
        href: '/enterprise-solutions-showcase''
        description: 'Public sector innovation'
      }
      {'
        name: 'Energy & Utilities''
        href: '/quantum-energy''
        description: 'Sustainable energy tech'
      }
      {'
        name: 'Biotech AI Research''
        href: '/biotech-ai''
        description: 'AI-driven biotech'
      }
    ]
  }
<<<<<<< HEAD
        name: 'AI Sales Intelligence'
        href: '/ai-sales-intelligence-platform'
        description: 'Supercharge sales with AI automation'
      }
      {
        name: 'AI Financial Planning'
        href: '/ai-financial-planning-platform'
        description: 'Intelligent financial forecasting'
      }
      {
        name: 'AI Decision Engine'
        href: '/ai-powered-decision-engine'
        description: 'AI-powered business decisions'
      }
      {
        name: 'AI Content Automation'
        href: '/intelligent-content-automation-platform'
        description: 'Automate content creation'
      }
      {
        name: 'AI HR Analytics'
        href: '/ai-hr-analytics-platform'
        description: 'Transform HR with AI insights'
      }
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-2029'
        description: 'Emotional intelligence and self-awareness'
      }
      {
        name: 'AI Quantum Neural Network'
        href: '/ai-quantum-neural-network'
        description: 'Hybrid AI-Quantum computing platform'
      }
      {
        name: 'AI Autonomous Business Operations'
        href: '/ai-autonomous-business-operations'
        description: 'Fully autonomous business management'
      }
      {
        name: 'AI Autonomous Research'
        href: '/ai-autonomous-research-assistant'
        description: 'Self-directed AI research'
      }
      {
        name: 'AI Emotional Intelligence'
        href: '/ai-emotional-intelligence-training'
        description: 'EQ training platform'
      }
      {
        name: 'AI Predictive Maintenance'
        href: '/ai-predictive-maintenance-platform'
        description: 'Equipment failure prediction'
      }
      {
        name: 'AI Content Personalization'
        href: '/ai-content-personalization-engine'
        description: 'Personalized content delivery'
      }
      {
        name: 'AI Autonomous Ecosystem'
        href: '/ai-autonomous-ecosystem-manager'
        description: 'Self-managing AI systems'
      }
      {
        name: 'AI Ethics & Governance'
        href: '/ai-ethics-governance-framework'
        description: 'Ethical AI frameworks'
      }
      {
        name: 'Advanced AI Automation'
        href: '/advanced-ai-automation-services'
        description:
          'AI automation for development, testing, DevOps, security, and data'
      }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    ]
  },    icon: <BookOpen className="w-5 h-5" />
  icon?: React.ReactNode;description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;featured?: boolean;
}
  featured?: boolean;
  featured?: boolean;  featured?: boolean;
const contactInfo = null;
const contactInfo = {mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com',}website: 'https://ziontechgroup.com';
}
  featured?: boolean;const contactInfo = {mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com';
}const navigationItems: NavigationItem[] = [;
  {name: 'Pricing',href: '/pricing',icon: <DollarSign className="w-5 h-5" />,description: 'Plans and average market prices',children: [;
    ];
  featured?: boolean;  featured?: boolean;
}
const contact_info = {mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}const navigation_items: NavigationItem[] = [;
  {name: 'Pricing',href: '/pricing',icon: <DollarSign className='w - 5 h - 5' />,children: [;
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },{name: 'Market Pricing',href: '/market - pricing',description: 'Compare market averages',icon: <DollarSign className='w-5 h-5' />,description: 'Plans and average market prices',children: [;
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' }
      {name: 'Market Pricing',href: '/market-pricing',description: 'Compare market averages',},],},{name: 'Resources',href: '/resources',icon: <BookOpen className='w-5 h-5' />,description: 'Guides, reports and tools',children: [;
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },{name: 'Case Studies',href: '/case-studies',description: 'Proven results',},{ name: 'Developer', href: '/developer', description: 'Docs and SDKs' },{name: 'Services Advertising',href: '/services-advertising',description: 'Features, benefits and market pricing links',},],},{name: 'Resources',href: '/resources',description: 'Proven results',},{ name: 'Developer', href: '/developer', description: 'Docs and SDKs' },{name: 'Services Advertising',description: 'Features, benefits and market pricing links',},],},{name: 'Contact',href: '/contact',{ name: 'Support', href: '/support', description: 'Help center' }
    ];
  },    icon: <BookOpen className="w-5 h-5" />;
    description: 'Guides, reports and tools';
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' }
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' }
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' }
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI', featured: true},
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial forecasting' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'AI Content Automation', href: '/intelligent-content-automation-platform', description: 'Automate content creation' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with AI insights' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business management' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
<<<<<<< HEAD
    icon: <Rocket className = $2;
=======
    icon: <Rocket className='w-5 h-5' />,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Customer Success Platform', href: '/ai-customer-success-platform', description: 'AI-powered customer retention', featured: true},
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered supply chain management' },
      { name: 'Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales automation' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Transform your CRM with AI' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'AI-powered content management' },
      { name: 'Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'Helpdesk & Support', href: '/helpdesk-automation', description: 'AI helpdesk, ticketing, KB, and chat' },
      { name: 'Learning Management (LMS)', href: '/lms-platform', description: 'Adaptive training and certifications' },
      { name: 'E‑commerce Returns', href: '/ecommerce-returns-management', description: 'Automated returns, labels, and RMAs' },
      { name: 'SEO Content Optimizer', href: '/seo-content-optimizer', description: 'On-page AI scoring and fixes' },
      { name: 'Keyword Research Engine', href: '/keyword-research-engine', description: 'Low-competition keywords discovery' },
      { name: 'Privacy Analytics Suite', href: '/analytics-suite', description: 'Cookie-less, privacy-friendly analytics' },
      { name: 'Invoice Studio', href: '/invoice-studio', description: 'Instant branded invoices and payments' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className = $2;
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading', description: 'Ultra-fast quantum trading' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', description: 'Future-proof internet security' },
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Revolutionary space AI' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className = $2;
    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    featured: true,
    children: [
        name: 'AI Sales Intelligence',
        href: '/ai - sales - intelligence - platform',
        description: 'Supercharge sales with AI automation',
      },
      {
        name: 'AI Financial Planning',
        href: '/ai - financial - planning - platform',
        description: 'Intelligent financial forecasting',
      },
      {
        name: 'AI Decision Engine',
        href: '/ai - powered - decision - engine',
        description: 'AI - powered business decisions',
      },
      {
        name: 'AI Content Automation',
        href: '/intelligent - content - automation - platform',
        description: 'Automate content creation',
      },
      {
        name: 'AI HR Analytics',
        href: '/ai - hr - analytics - platform',
        description: 'Transform HR with AI insights',
      },
      {
        name: 'AI Consciousness Evolution',
        href: '/ai - consciousness - evolution - 2029',
        description: 'Emotional intelligence and self - awareness',
      },
      {
        name: 'AI Quantum Neural Network',
        href: '/ai - quantum - neural - network',
        description: 'Hybrid AI - Quantum computing platform',
      },
      {
        name: 'AI Autonomous Business Operations',
        href: '/ai - autonomous - business - operations',
        description: 'Fully autonomous business management',
      },
      {
        name: 'AI Autonomous Research',
        href: '/ai - autonomous - research - assistant',
        description: 'Self - directed AI research',
      },
      {
        name: 'AI Emotional Intelligence',
        href: '/ai - emotional - intelligence - training',
        description: 'EQ training platform',
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai - predictive - maintenance - platform',
        description: 'Equipment failure prediction',
      },
      {
        name: 'AI Content Personalization',
        href: '/ai - content - personalization - engine',
        description: 'Personalized content delivery',
      },
      {
        name: 'AI Autonomous Ecosystem',
        href: '/ai - autonomous - ecosystem - manager',
        description: 'Self - managing AI systems',
      },
      {
        name: 'AI Ethics & Governance',
        href: '/ai - ethics - governance - framework',
        description: 'Ethical AI frameworks',
      },
      {
        name: 'Advanced AI Automation',
        href: '/advanced - ai - automation - services',
        description:;
          'AI automation for development, testing, DevOps, security, and data',
      },
    ],
  },
  {
  }
  {

    name: 'AI & Consciousness',

  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns();    }
    name: 'Micro SAAS Solutions',
    href: '/micro - saas',
    icon: <Rocket className='w - 5 h - 5' />,    description: 'Innovative business solutions for modern enterprises',
    badge: 'Hot',
    featured: true,
    children: [      { name: 'AI Customer Success Platform', href: '/ai - customer - success - platform', description: 'Predict and prevent churn with AI', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai - sales - intelligence - platform', description: 'Supercharge sales with AI automation' },
      { name: 'AI Financial Planning', href: '/ai - financial - planning - platform', description: 'Intelligent financial forecasting' },
      { name: 'AI Decision Engine', href: '/ai - powered - decision - engine', description: 'AI - powered business decisions' },
      { name: 'AI Content Automation', href: '/intelligent - content - automation - platform', description: 'Automate content creation' },
      { name: 'AI HR Analytics', href: '/ai - hr - analytics - platform', description: 'Transform HR with AI insights' },
      { name: 'AI Consciousness Evolution', href: '/ai - consciousness - evolution - 2029', description: 'Emotional intelligence and self - awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network', description: 'Hybrid AI - Quantum computing platform' },
      { name: 'AI Autonomous Business Operations', href: '/ai - autonomous - business - operations', description: 'Fully autonomous business management' },
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai - predictive - maintenance - platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai - content - personalization - engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem - manager', description: 'Self - managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance - framework', description: 'Ethical AI frameworks' },
      { name: 'Advanced AI Automation', href: '/advanced - ai - automation - services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ];
  }
  {
      { name: 'Invoice Studio', href: '/invoice-studio', description: 'Instant branded invoices and payments' }
    ]
    href: '/micro - saas',
    icon: <Rocket className="w - 5 h - 5" />,
    badge: 'Hot',
    featured: true,
    children: [;
      {
        name: 'Customer Success Platform',
<<<<<<< HEAD
        href: '/ai - customer - success - platform',
        description: 'AI - powered customer retention',
        featured: true,
      },
      {
        name: 'Supply Chain Optimization',
        href: '/intelligent - supply - chain - optimization',
        description: 'AI - powered supply chain management',
      },
      {
        name: 'Financial Planning Platform',
        href: '/ai - financial - planning - platform',
        description: 'Intelligent financial planning',
      },
      {
        name: 'HR Analytics Platform',
        href: '/ai - hr - analytics - platform',
        description: 'AI - powered HR insights',
      },
      {
        name: 'Sales Intelligence Platform',
        href: '/ai - sales - intelligence - platform',
        description: 'AI - powered sales automation',
      },
      {
        name: 'CRM Intelligence Suite',
        href: '/smart - crm - intelligence - suite',
        description: 'Transform your CRM with AI',
      },
      {
        name: 'Content Automation Platform',
        href: '/intelligent - content - automation - platform',
        description: 'AI - powered content management',
      },
      {
        name: 'Decision Engine',
        href: '/ai - powered - decision - engine',
        description: 'AI - powered business decisions',
      },
      {
        name: 'Helpdesk & Support',
        href: '/helpdesk - automation',
        description: 'AI helpdesk, ticketing, KB, and chat',
      },
      {
        name: 'Learning Management (LMS)',
        href: '/lms - platform',
        description: 'Adaptive training and certifications',
      },
      {
        name: 'E‑commerce Returns',
        href: '/ecommerce - returns - management',
        description: 'Automated returns, labels, and RMAs',
      },
      {
        name: 'SEO Content Optimizer',
        href: '/seo - content - optimizer',
        description: 'On - page AI scoring and fixes',
      },
      {
        name: 'Keyword Research Engine',
        href: '/keyword - research - engine',
        description: 'Low - competition keywords discovery',
      },
      {
        name: 'Privacy Analytics Suite',
        href: '/analytics - suite',
        description: 'Cookie - less, privacy - friendly analytics',
      },
      {
        name: 'Invoice Studio',
  href: '/invoice-studio'}
        description: 'Instant branded invoices and payments'}
      }
    ]

}
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum - services',
    icon: <Atom className='w - 5 h - 5' />,    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    featured: true,
    children: [      { name: 'Customer Success Platform', href: '/ai - customer - success - platform', description: 'AI - powered customer retention', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent - supply - chain - optimization', description: 'AI - powered supply chain management' },
      { name: 'Financial Planning Platform', href: '/ai - financial - planning - platform', description: 'Intelligent financial planning' },
      { name: 'HR Analytics Platform', href: '/ai - hr - analytics - platform', description: 'AI - powered HR insights' },
      { name: 'Sales Intelligence Platform', href: '/ai - sales - intelligence - platform', description: 'AI - powered sales automation' },
      { name: 'CRM Intelligence Suite', href: '/smart - crm - intelligence - suite', description: 'Transform your CRM with AI' },
      { name: 'Content Automation Platform', href: '/intelligent - content - automation - platform', description: 'AI - powered content management' },
      { name: 'Decision Engine', href: '/ai - powered - decision - engine', description: 'AI - powered business decisions' },
      { name: 'Helpdesk & Support', href: '/helpdesk - automation', description: 'AI helpdesk, ticketing, KB, and chat' }
      { name: 'Learning Management (LMS)', href: '/lms - platform', description: 'Adaptive training and certifications' },
      { name: 'E‑commerce Returns', href: '/ecommerce - returns - management', description: 'Automated returns, labels, and RMAs' }
      { name: 'SEO Content Optimizer', href: '/seo - content - optimizer', description: 'On - page AI scoring and fixes' },
      { name: 'Keyword Research Engine', href: '/keyword - research - engine', description: 'Low - competition keywords discovery' },
      { name: 'Privacy Analytics Suite', href: '/analytics - suite', description: 'Cookie - less, privacy - friendly analytics' }
      { name: 'Invoice Studio', href: '/invoice - studio', description: 'Instant branded invoices and payments' }
    ];
  }
  {
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Revolutionary space AI' }
    ]
    href: '/quantum - services',
    icon: <Atom className="w - 5 h - 5" />,
    badge: 'Hot',
    featured: true,
    children: [;
      {
        name: 'Quantum - Secure Cloud Infrastructure',
        href: '/quantum - secure - cloud - infrastructure',
        description: 'Unbreakable quantum encryption',
      },
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum - financial - trading',
        description: 'Ultra - fast quantum trading',
      },
      {
        name: 'Quantum Internet Security Platform',
        href: '/quantum - internet - security - platform',
        description: 'Future - proof internet security',
      },
      {
        name: 'Space Resource Mining',
        href: '/space - resource - mining - platform',
        description: 'Asteroid mining and space resources',
      },
      {
        name: 'Quantum Internet Security',
        href: '/quantum - internet - security - platform',
        description: 'Unbreakable encryption',
      },
      {
        name: 'Brain - Computer Interface',
        href: '/brain - computer - interface - platform',
        description: 'Neural interface technology',
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum - materials - discovery - platform',
        description: 'Materials science acceleration',
      },
      {
        name: 'Autonomous Vehicle AI',
        href: '/autonomous - vehicle - ai - platform',
        description: 'Self - driving AI systems',
      },
      {
        name: 'Quantum Bio - Computing',
        href: '/quantum - bio - computing - platform',
        description: 'Quantum - biological hybrid processing',
      },
      {
        name: 'Quantum Energy Platform',
        href: '/quantum - energy - platform',
        description: 'Fusion power simulation',
      },
      {
        name: 'Quantum Robotics',
        href: '/quantum - robotics',
        description: 'Quantum - enhanced robotics',
      },
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum - cybersecurity - platform',
        description: 'Next - gen security',
      },
      {
        name: 'Quantum Logistics',
        href: '/quantum - logistics - optimization',
        description: 'Route optimization',
      },
      {
        name: 'Quantum Metaverse',
        href: '/quantum - metaverse',
        description: 'Quantum - enhanced virtual worlds',
      },
      {
        name: 'Quantum IoT Platform',
        href: '/quantum - iot',
        description: 'Quantum - secured IoT',
      },
      {
        name: 'AI - Powered Space Technology',
        href: '/ai - powered - space - technology',
        description: 'Revolutionary space AI',
      },
    ],
  },
  {
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Next-generation security architecture' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent development operations' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-services', description: 'Next-gen quantum security' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Intelligent threat detection' }
    ]
=======
        href: '/ai-customer-success-platform',
        description: 'AI-powered customer retention',
        featured: true,
      },
      {
        name: 'Supply Chain Optimization'
        href: '/intelligent-supply-chain-optimization'
        description: 'AI-powered supply chain management'
      }
      {
        name: 'Financial Planning Platform'
        href: '/ai-financial-planning-platform'
        description: 'Intelligent financial planning'
      }
      {
        name: 'HR Analytics Platform'
        href: '/ai-hr-analytics-platform'
        description: 'AI-powered HR insights'
      }
      {
        name: 'Sales Intelligence Platform'
        href: '/ai-sales-intelligence-platform'
        description: 'AI-powered sales automation'
      }
      {
        name: 'CRM Intelligence Suite'
        href: '/smart-crm-intelligence-suite'
        description: 'Transform your CRM with AI'
      }
      {
        name: 'Content Automation Platform'
        href: '/intelligent-content-automation-platform'
        description: 'AI-powered content management'
      }
      {
        name: 'Decision Engine'
        href: '/ai-powered-decision-engine'
        description: 'AI-powered business decisions'
      }
      {
        name: 'Helpdesk & Support'
        href: '/helpdesk-automation'
        description: 'AI helpdesk, ticketing, KB, and chat'
      }
      {
        name: 'Learning Management (LMS)'
        href: '/lms-platform'
        description: 'Adaptive training and certifications'
      }
      {
        name: 'E‑commerce Returns'
        href: '/ecommerce-returns-management'
        description: 'Automated returns, labels, and RMAs'
      }
      {
        name: 'SEO Content Optimizer'
        href: '/seo-content-optimizer'
        description: 'On-page AI scoring and fixes'
      }
      {
        name: 'Keyword Research Engine'
        href: '/keyword-research-engine'
        description: 'Low-competition keywords discovery'
      }
      {
        name: 'Privacy Analytics Suite'
        href: '/analytics-suite'
        description: 'Cookie-less, privacy-friendly analytics'
      }
      {
        name: 'Invoice Studio'
        href: '/invoice-studio'
        description: 'Instant branded invoices and payments'
      }
    ]
  }
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className='w-5 h-5' />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    featured: true,
    children: [
{
        name: 'Quantum-Secure Cloud Infrastructure',
        href: '/quantum-secure-cloud-infrastructure',
        description: 'Unbreakable quantum encryption',
      },
      {
        name: 'Quantum Financial Trading Platform'
        href: '/quantum-financial-trading'
        description: 'Ultra-fast quantum trading'
      }
      {
        name: 'Quantum Internet Security Platform'
        href: '/quantum-internet-security-platform'
        description: 'Future-proof internet security'
      }
      {
        name: 'Space Resource Mining'
        href: '/space-resource-mining-platform'
        description: 'Asteroid mining and space resources'
      }
      {
        name: 'Quantum Internet Security'
        href: '/quantum-internet-security-platform'
        description: 'Unbreakable encryption'
      }
      {
        name: 'Brain-Computer Interface'
        href: '/brain-computer-interface-platform'
        description: 'Neural interface technology'
      }
      {
        name: 'Quantum Materials Discovery'
        href: '/quantum-materials-discovery-platform'
        description: 'Materials science acceleration'
      }
      {
        name: 'Autonomous Vehicle AI'
        href: '/autonomous-vehicle-ai-platform'
        description: 'Self-driving AI systems'
      }
      {
        name: 'Quantum Bio-Computing'
        href: '/quantum-bio-computing-platform'
        description: 'Quantum-biological hybrid processing'
      }
      {
        name: 'Quantum Energy Platform'
        href: '/quantum-energy-platform'
        description: 'Fusion power simulation'
      }
      {
        name: 'Quantum Robotics'
        href: '/quantum-robotics'
        description: 'Quantum-enhanced robotics'
      }
      {
        name: 'Quantum Cybersecurity'
        href: '/quantum-cybersecurity-platform'
        description: 'Next-gen security'
      }
      {
        name: 'Quantum Logistics'
        href: '/quantum-logistics-optimization'
        description: 'Route optimization'
      }
      {
        name: 'Quantum Metaverse'
        href: '/quantum-metaverse'
        description: 'Quantum-enhanced virtual worlds'
      }
      {
        name: 'Quantum IoT Platform'
        href: '/quantum-iot'
        description: 'Quantum-secured IoT'
      }
      {
        name: 'AI-Powered Space Technology'
        href: '/ai-powered-space-technology'
        description: 'Revolutionary space AI'
      }
    ]

}
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className='w-5 h-5' />,
    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    featured: true,
    children: [
{
        name: 'Zero Trust Security',
        href: '/zero-trust-security-platform',
        description: 'Next-generation security architecture',
      },
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum-cloud-infrastructure',
        description: 'Quantum-enhanced cloud computing',
      },
      {
        name: 'Autonomous IT Operations',
        href: '/autonomous-it-operations-center',
        description: 'Self-managing IT infrastructure',
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge-computing-orchestration',
        description: 'Distributed edge computing',
      },
      {
        name: 'Blockchain Infrastructure',
        href: '/blockchain-infrastructure-platform',
        description: 'Enterprise blockchain solutions',
      },
      {
        name: 'AI-Powered DevOps',
        href: '/ai-powered-devops-platform',
        description: 'Intelligent development operations',
      },
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum-cybersecurity-services',
        description: 'Next-gen quantum security',
      },
      {
        name: 'AI-Powered Cybersecurity',
        href: '/ai-powered-cybersecurity',
        description: 'Intelligent threat detection',
      },
    ],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
<<<<<<< HEAD
    icon: <Building className = $2;
    description: 'Industry-specific technology solutions',
    badge: 'Industry',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'AI-powered healthcare' },
      { name: 'Financial Technology', href: '/fintech-solutions', description: 'Next-gen fintech' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing' },
      { name: 'Retail Technology', href: '/innovative-business-solutions', description: 'Digital retail transformation' },
      { name: 'Education Technology', href: '/training', description: 'AI-powered learning' },
      { name: 'Government Solutions', href: '/enterprise-solutions-showcase', description: 'Public sector innovation' },
      { name: 'Energy & Utilities', href: '/quantum-energy', description: 'Sustainable energy tech' },
      { name: 'Biotech AI Research', href: '/biotech-ai', description: 'AI-driven biotech' }
    ]
  },
    name: 'Enterprise IT',
    href: '/enterprise - it',
    icon: <Shield className='w - 5 h - 5' />,    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    featured: true,
    children: [      { name: 'Quantum - Secure Cloud Infrastructure', href: '/quantum - secure - cloud - infrastructure', description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading', description: 'Ultra - fast quantum trading' },
      { name: 'Quantum Internet Security Platform', href: '/quantum - internet - security - platform', description: 'Future - proof internet security' },
      { name: 'Space Resource Mining', href: '/space - resource - mining - platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum - internet - security - platform', description: 'Unbreakable encryption' },
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface - platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai - platform', description: 'Self - driving AI systems' },
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing - platform', description: 'Quantum - biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum - robotics', description: 'Quantum - enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity - platform', description: 'Next - gen security' },
      { name: 'Quantum Logistics', href: '/quantum - logistics - optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum - metaverse', description: 'Quantum - enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum - iot', description: 'Quantum - secured IoT' },
      { name: 'AI - Powered Space Technology', href: '/ai - powered - space - technology', description: 'Revolutionary space AI' }
    ];
  }
  {
    ]
  }
    name: 'Industry Solutions'
    href: '/industry-solutions'
    icon: <Building className='w-5 h-5' />
    description: 'Industry-specific technology solutions'
    badge: 'Industry'
    children: [
      {
        name: 'Healthcare AI'
        href: '/healthcare-ai-solutions'
        description: 'AI-powered healthcare'
      }
      {
        name: 'Financial Technology'
        href: '/fintech-solutions'
        description: 'Next-gen fintech'
      }
      {
        name: 'Manufacturing AI'
        href: '/manufacturing-ai-solutions'
        description: 'Smart manufacturing'
      }
      {
        name: 'Retail Technology'
        href: '/innovative-business-solutions'
        description: 'Digital retail transformation'
      }
      {
        name: 'Education Technology'
        href: '/training'
        description: 'AI-powered learning'
      }
      {
        name: 'Government Solutions'
        href: '/enterprise-solutions-showcase'
        description: 'Public sector innovation'
      }
      {
        name: 'Energy & Utilities'
        href: '/quantum-energy'
        description: 'Sustainable energy tech'
      }
      {
        name: 'Biotech AI Research'
        href: '/biotech-ai'
        description: 'AI-driven biotech'
      }
    ]
  }
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className = $2;
    description: 'Documentation, support, and learning resources',
    children: [

=======
    icon: <Building className='w-5 h-5' />,
    description: 'Industry-specific technology solutions',
    badge: 'Industry',
    children: [
      {
        name: 'Zero Trust Security'
        href: '/zero-trust-security-platform'
        description: 'Next-generation security architecture'
      }
      {
        name: 'Quantum Cloud Infrastructure'
        href: '/quantum-cloud-infrastructure'
        description: 'Quantum-enhanced cloud computing'
      }
      {
        name: 'Autonomous IT Operations'
        href: '/autonomous-it-operations-center'
        description: 'Self-managing IT infrastructure'
      }
      {
        name: 'Edge Computing Orchestration'
        href: '/edge-computing-orchestration'
        description: 'Distributed edge computing'
      }
      {
        name: 'Blockchain Infrastructure'
        href: '/blockchain-infrastructure-platform'
        description: 'Enterprise blockchain solutions'
      }
      {
        name: 'AI-Powered DevOps'
        href: '/ai-powered-devops-platform'
        description: 'Intelligent development operations'
      }
      {
        name: 'Quantum Cybersecurity'
        href: '/quantum-cybersecurity-services'
        description: 'Next-gen quantum security'
      }
      {
        name: 'Biotech AI Research',
        href: '/biotech-ai',
        description: 'AI-driven biotech',
      },
    ],
  },
origin/cursor/automate-test-improve-and-merge-code-2533
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className='w-5 h-5' />,
    description: 'Documentation, support, and learning resources',
    children: [
    href: '/enterprise - it',
    icon: <Shield className="w - 5 h - 5" />,
=======
  {'
    name: 'Resources''
    href: '/resources''
    icon: <BookOpen className='w-5 h-5' />'
    description: 'Documentation, support, and learning resources'
    children: ['
    href: '/enterprise - it',"
    icon: <Shield className="w - 5 h - 5" />,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    badge: 'Enterprise',
    featured: true,
    children: [;
      {'
        name: 'Zero Trust Security','
        href: '/zero - trust - security - platform','
        description: 'Next - generation security architecture',
      },
      {'
        name: 'Quantum Cloud Infrastructure','
        href: '/quantum - cloud - infrastructure','
        description: 'Quantum - enhanced cloud computing',
      },
      {'
        name: 'Autonomous IT Operations','
        href: '/autonomous - it - operations - center','
        description: 'Self - managing IT infrastructure',
      },
      {'
        name: 'Edge Computing Orchestration','
        href: '/edge - computing - orchestration','
        description: 'Distributed edge computing',
      },
      {'
        name: 'Blockchain Infrastructure','
        href: '/blockchain - infrastructure - platform','
        description: 'Enterprise blockchain solutions',
      },
      {'
        name: 'AI - Powered DevOps','
        href: '/ai - powered - devops - platform','
        description: 'Intelligent development operations',
      },
      {'
        name: 'Quantum Cybersecurity','
        href: '/quantum - cybersecurity - services','
        description: 'Next - gen quantum security',
      },
      {'
        name: 'AI - Powered Cybersecurity','
        href: '/ai - powered - cybersecurity','
        description: 'Intelligent threat detection',
      },
    ],
  },'
    name: 'Industry Solutions','
    href: '/industry - solutions','
    icon: <Building className='w - 5 h - 5' />,'
    description: 'Industry - specific technology solutions','
    badge: 'Industry',
    children: [;
      {'
        name: 'Healthcare AI','
        href: '/healthcare - ai - solutions','
        description: 'AI - powered healthcare',
      },
      {'
        name: 'Financial Technology','
        href: '/fintech - solutions','
        description: 'Next - gen fintech',
      },
      {'
        name: 'Manufacturing AI','
        href: '/manufacturing - ai - solutions','
        description: 'Smart manufacturing',
      },
      {'
        name: 'Retail Technology','
        href: '/innovative - business - solutions','
        description: 'Digital retail transformation',
      },
      {'
        name: 'Education Technology','
        href: '/training','
        description: 'AI - powered learning',
      },
      {'
        name: 'Government Solutions','
        href: '/enterprise - solutions - showcase','
        description: 'Public sector innovation',
      },
      {'
        name: 'Energy & Utilities','
        href: '/quantum - energy','
        description: 'Sustainable energy tech',
      },
      {'
        name: 'Biotech AI Research','
        href: '/biotech - ai','
        description: 'AI - driven biotech',
      },
    ],
  },
  {'
    name: 'Resources','
    href: '/resources','
    icon: <BookOpen className='w - 5 h - 5' />,'
    description: 'Documentation, support, and learning resources',
    children: [;
<<<<<<< HEAD
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation',
      },
      {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        name: 'API Reference',
        href: '/api-documentation',
        description: 'API documentation',
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories',
      },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights' },
<<<<<<< HEAD

=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      {
        name: 'Support Center',
        href: '/support',
        description: 'Help and support',
      },
      {
        name: 'Training',
        href: '/training',
        description: 'Learning resources',
      },
      { name: 'Community', href: '/community', description: 'User community' },
    ],
  },
];
<<<<<<< HEAD
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-documentation', description: 'API documentation' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights' },
      { name: 'Support Center', href: '/support', description: 'Help and support' },
      { name: 'Training', href: '/training', description: 'Learning resources' },
      { name: 'Community', href: '/community', description: 'User community' }
    ]
  }
],

const quickActions = [
  { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" />, primary: true},
  { name: 'Get a Quote', href: '/quote', icon: <DollarSign className = $2;
  { name: 'Book Demo', href: '/demo', icon: <Video className = $2;
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className = $2;
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className = $2;
  { name: 'Market Pricing', href: '/market-pricing', icon: <BarChart3 className = $2;
  { name: 'Services Advertising', href: '/services-advertising', icon: <Sparkles className = $2;
  { name: 'Documentation', href: '/docs', icon: <BookOpen className = $2;
  { name: 'Support', href: '/support', icon: <HelpCircle className = $2;
const UltraFuturisticNavigation2035: React.FC = () => {
  const [isOpen, setIsOpen] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState($2);
  useEffect(() => {
=======

const quickActions = [
  {
    name: 'Get Started',
    href: '/contact',
    icon: <ArrowRight className='w-4 h-4' />,
    primary: true,
  },
  {
    name: 'Get a Quote',
    href: '/quote',
    icon: <DollarSign className='w-4 h-4' />,
  },
  { name: 'Book Demo', href: '/demo', icon: <Video className='w-4 h-4' /> },
  {
    name: 'Live Chat',
    href: '/chat',
    icon: <MessageCircle className='w-4 h-4' />,
  },
  {
    name: 'View Pricing',
    href: '/pricing',
    icon: <DollarSign className='w-4 h-4' />,
  },
  {
    name: 'Market Pricing',
    href: '/market-pricing',
    icon: <BarChart3 className='w-4 h-4' />,
  },
  {
    name: 'Services Advertising',
    href: '/services-advertising',
    icon: <Sparkles className='w-4 h-4' />,
  },
  {
    name: 'Documentation',
    href: '/docs',
    icon: <BookOpen className='w-4 h-4' />,
  },
  {
    name: 'Support',
    href: '/support',
    icon: <HelpCircle className='w-4 h-4' />,
  },
];

origin/cursor/automate-test-improve-and-merge-code-2533
const UltraFuturisticNavigation2035: React.FC = () => {
 ;
  const [isOpen, setIsOpen] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null />(null);

const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = (

setIsScrolled(window.scrollY > 10)) => {
  return $3;}
}
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const toggleDropdown = (
    setActiveDropdown(activeDropdown === name ? null : name);) => {
  return $3;}
}
  }
];
const UltraFuturisticNavigation2035: React.FC = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {}
    const handleScroll = () => {'
    window.addEventListener('scroll', handleScroll);'
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDropdown = (name: string) => {}
    setActiveDropdown(activeDropdown === name ? null : name)
  }
  const closeDropdowns = () => {}
    setActiveDropdown(null)

setIsScrolled(window.scrollY > 10);
    };

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDropdown = (name: string) => {
<<<<<<< HEAD
    setActiveDropdown(activeDropdown === name ? null : name)
  }
  const closeDropdowns = () => {
    setActiveDropdown(null)

  };
    const handleScroll = $2;
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const toggleDropdown = $2;
  const closeDropdowns = $2;
  const closeMobileMenu = () => {
  icon?: React.ReactNode;description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;featured?: boolean;
}
  featured?: boolean;
  featured?: boolean;  featured?: boolean;
const contactInfo = null;
const contactInfo = {mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com',}website: 'https://ziontechgroup.com';
}
  featured?: boolean;const contactInfo = {mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com';
}const navigationItems: NavigationItem[] = [;
  {name: 'Pricing',href: '/pricing',icon: <DollarSign className="w-5 h-5" />,description: 'Plans and average market prices',children: [;
    ];
  featured?: boolean;  featured?: boolean;
}
const contact_info = {mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}const navigation_items: NavigationItem[] = [;
  {name: 'Pricing',href: '/pricing',icon: <DollarSign className='w - 5 h - 5' />,children: [;
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },{name: 'Market Pricing',href: '/market - pricing',description: 'Compare market averages',icon: <DollarSign className='w-5 h-5' />,description: 'Plans and average market prices',children: [;
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' }
      {name: 'Market Pricing',href: '/market-pricing',description: 'Compare market averages',},],},{name: 'Resources',href: '/resources',icon: <BookOpen className='w-5 h-5' />,description: 'Guides, reports and tools',children: [;
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },{name: 'Case Studies',href: '/case-studies',description: 'Proven results',},{ name: 'Developer', href: '/developer', description: 'Docs and SDKs' },{name: 'Services Advertising',href: '/services-advertising',description: 'Features, benefits and market pricing links',},],},{name: 'Resources',href: '/resources',description: 'Proven results',},{ name: 'Developer', href: '/developer', description: 'Docs and SDKs' },{name: 'Services Advertising',description: 'Features, benefits and market pricing links',},],},{name: 'Contact',href: '/contact',{ name: 'Support', href: '/support', description: 'Help center' }
    ];
  },    icon: <BookOpen className="w-5 h-5" />;
    description: 'Guides, reports and tools';
    children: [;
      { name: 'Blog', href: '/blog', description: 'Insights and updates' }
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' }
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' }
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ];
  }
  {name: 'All Services',href: '/comprehensive - services - showcase - 2025',icon: <Globe className="w - 5 h - 5" />,description: 'Complete portfolio of all technology services',badge: 'Showcase',featured: true,{name: 'Zero Trust Security',href: '/zero-trust-security-platform',description: 'Next-generation security architecture',},{name: 'Quantum Cloud Infrastructure',href: '/quantum-cloud-infrastructure',description: 'Quantum-enhanced cloud computing',},{name: 'Autonomous IT Operations',href: '/autonomous-it-operations-center',description: 'Self-managing IT infrastructure',},{name: 'Edge Computing Orchestration',href: '/edge-computing-orchestration',description: 'Distributed edge computing',},{name: 'Blockchain Infrastructure',href: '/blockchain-infrastructure-platform',description: 'Enterprise blockchain solutions',},{name: 'AI-Powered DevOps',href: '/ai-powered-devops-platform',description: 'Intelligent development operations',},{name: 'Quantum Cybersecurity',href: '/quantum-cybersecurity-services',description: 'Next-gen quantum security',},{name: 'AI-Powered Cybersecurity',href: '/ai-powered-cybersecurity',description: 'Intelligent threat detection',},],},name: 'Industry Solutions',href: '/industry-solutions',icon: <Building className='w-5 h-5' />,description: 'Industry-specific technology solutions',badge: 'Industry',children: [;
      {name: 'Healthcare AI',href: '/healthcare-ai-solutions',description: 'AI-powered healthcare',},{name: 'Financial Technology',href: '/fintech-solutions',description: 'Next-gen fintech',},{name: 'Manufacturing AI',href: '/manufacturing-ai-solutions',description: 'Smart manufacturing',},{name: 'Retail Technology',href: '/innovative-business-solutions',description: 'Digital retail transformation',},{name: 'Education Technology',href: '/training',description: 'AI-powered learning',},{name: 'Government Solutions',href: '/enterprise-solutions-showcase',description: 'Public sector innovation',},{name: 'Energy & Utilities',href: '/quantum-energy',description: 'Sustainable energy tech',},{name: 'Biotech AI Research',href: '/biotech-ai',description: 'AI-driven biotech',}
  {{ name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ];
    href: '/ai - services',icon: <Brain className="w - 5 h - 5" />,badge: 'New',featured: true,children: [;
      {name: 'AI Customer Success Platform',href: '/ai - customer - success - platform',name: 'Contact',href: '/contact',icon: <Phone className='w-5 h-5' />,description: 'Talk to our team',featured: true,children: [;
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' },{ name: 'Support', href: '/support', description: 'Help center' },],},{name: 'Services',href: '/services',icon: <Grid className='w-5 h-5' />,description: 'Browse by category',badge: 'New',children: [;
      {name: 'AI & Data',href: '/services?filter=ai-consciousness',description: 'AI, data, ML services',},{name: 'Enterprise IT',href: '/services?filter=enterprise-it',description: 'Infra, security, platforms',},{name: 'Quantum & Emerging',href: '/services?filter=quantum-emerging',description: 'Quantum, space, frontier',},{name: 'Micro SAAS',href: '/services?filter=micro-saas',description: 'Business accelerators',},{name: 'Creative & Media',href: '/services?filter=creative-media',description: 'Content, media, design',},],},{name: 'All Services',href: '/comprehensive-services-showcase-2025',icon: <Globe className='w-5 h-5' />,description: 'Complete portfolio of all technology services',badge: 'Showcase',featured: true,children: [;
{name: 'View All Services',href: '/comprehensive-services-showcase-2025',description: 'Complete services portfolio',},{name: 'Ultimate 2035 Futuristic';
        href: '/ultimate-2035-futuristic-services-showcase';
        description: 'Revolutionary future technology';
        featured: true;
      }
      {name: 'Ultimate 2025 Micro SAAS';
        href: '/ultimate-2025-micro-saas-showcase';
        description: 'Latest innovative services';
        featured: true;
      }
      {name: 'Service Categories';
        href: '/comprehensive-services-showcase-2025#categories';
        description: 'Browse by category';
      }
      {name: 'Pricing Comparison';
        href: '/comprehensive-services-showcase-2025#pricing';
        description: 'Compare service costs';
      }
      {name: 'Service Search';
        href: '/comprehensive-services-showcase-2025#search';
        description: 'Find specific services';
      }
      {name: 'Market Pricing';
        href: '/market-pricing';
        description: 'Average market prices & references';
      }
      {name: 'Latest Innovations';
        href: '/revolutionary-2025-services-showcase';
        description: 'Cutting-edge solutions';
      }
      {name: '2026 Services';
        href: '/revolutionary-2026-services';
        description: 'Next generation solutions';
      }
      {name: '2027 Services';
        href: '/revolutionary-2027-services-showcase';
        description: 'Future-ready services';
      }
      {name: 'Ultimate 2026';
        href: '/ultimate-2026-services-showcase';
        description: 'Premium service collection';
      }
      {name: 'Enterprise Solutions';
        href: '/enterprise-solutions-showcase';
        description: 'Enterprise-grade solutions';
      }
      {name: 'Innovative Business Solutions';
        href: '/innovative-business-solutions';
        description: 'Business transformation services';
      }
    ];
  }
  {name: 'AI & Consciousness',href: '/ai-services',icon: <Brain className='w-5 h-5' />,description: 'Revolutionary AI consciousness and emotional intelligence',badge: 'New',featured: true,children: [;
{name: 'AI Customer Success Platform',href: '/ai-customer-success-platform',description: 'Predict and prevent churn with AI',featured: true,},{name: 'AI Sales Intelligence',href: '/ai - sales - intelligence - platform',description: 'Supercharge sales with AI automation',},{name: 'AI Financial Planning',href: '/ai - financial - planning - platform',description: 'Intelligent financial forecasting',},{name: 'AI Decision Engine',href: '/ai - powered - decision - engine',description: 'AI - powered business decisions',},{name: 'AI Content Automation',href: '/intelligent - content - automation - platform',description: 'Automate content creation',},{name: 'AI HR Analytics',href: '/ai - hr - analytics - platform',description: 'Transform HR with AI insights',},{name: 'AI Consciousness Evolution',href: '/ai - consciousness - evolution - 2029',description: 'Emotional intelligence and self - awareness',},{name: 'AI Quantum Neural Network',href: '/ai - quantum - neural - network',description: 'Hybrid AI - Quantum computing platform',},{name: 'AI Autonomous Business Operations',href: '/ai - autonomous - business - operations',description: 'Fully autonomous business management',},{name: 'AI Autonomous Research',href: '/ai - autonomous - research - assistant',description: 'Self - directed AI research',},{name: 'AI Emotional Intelligence',href: '/ai - emotional - intelligence - training',description: 'EQ training platform',},{name: 'AI Predictive Maintenance',href: '/ai - predictive - maintenance - platform',description: 'Equipment failure prediction',},{name: 'AI Content Personalization',href: '/ai - content - personalization - engine',description: 'Personalized content delivery',},{name: 'AI Autonomous Ecosystem',href: '/ai - autonomous - ecosystem - manager',description: 'Self - managing AI systems',},{name: 'AI Ethics & Governance',href: '/ai - ethics - governance - framework',description: 'Ethical AI frameworks',},{name: 'Advanced AI Automation',href: '/advanced - ai - automation - services',description:;
          'AI automation for development, testing, DevOps, security, and data',},],},{}
  {name: 'AI & Consciousness',const closeMobileMenu = () => {setIsOpen(false)closeDropdowns()}
    name: 'Micro SAAS Solutions',href: '/micro - saas',icon: <Rocket className='w - 5 h - 5' />,    description: 'Innovative business solutions for modern enterprises',badge: 'Hot',featured: true,children: [      { name: 'AI Customer Success Platform', href: '/ai - customer - success - platform', description: 'Predict and prevent churn with AI', featured: true },{ name: 'AI Sales Intelligence', href: '/ai - sales - intelligence - platform', description: 'Supercharge sales with AI automation' },{ name: 'AI Financial Planning', href: '/ai - financial - planning - platform', description: 'Intelligent financial forecasting' },{ name: 'AI Decision Engine', href: '/ai - powered - decision - engine', description: 'AI - powered business decisions' },{ name: 'AI Content Automation', href: '/intelligent - content - automation - platform', description: 'Automate content creation' },{ name: 'AI HR Analytics', href: '/ai - hr - analytics - platform', description: 'Transform HR with AI insights' },{ name: 'AI Consciousness Evolution', href: '/ai - consciousness - evolution - 2029', description: 'Emotional intelligence and self - awareness' },{ name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network', description: 'Hybrid AI - Quantum computing platform' },{ name: 'AI Autonomous Business Operations', href: '/ai - autonomous - business - operations', description: 'Fully autonomous business management' },{ name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed AI research' },{ name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - training', description: 'EQ training platform' },{ name: 'AI Predictive Maintenance', href: '/ai - predictive - maintenance - platform', description: 'Equipment failure prediction' },{ name: 'AI Content Personalization', href: '/ai - content - personalization - engine', description: 'Personalized content delivery' },{ name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem - manager', description: 'Self - managing AI systems' },{ name: 'AI Ethics & Governance', href: '/ai - ethics - governance - framework', description: 'Ethical AI frameworks' },{ name: 'Advanced AI Automation', href: '/advanced - ai - automation - services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ];
  }
  {{ name: 'Invoice Studio', href: '/invoice-studio', description: 'Instant branded invoices and payments' }
    ];
    href: '/micro - saas',icon: <Rocket className="w - 5 h - 5" />,badge: 'Hot',featured: true,children: [;
      {name: 'Customer Success Platform',href: '/ai - customer - success - platform',description: 'AI - powered customer retention',featured: true,},{name: 'Supply Chain Optimization',href: '/intelligent - supply - chain - optimization',description: 'AI - powered supply chain management',},{name: 'Financial Planning Platform',href: '/ai - financial - planning - platform',description: 'Intelligent financial planning',},{name: 'HR Analytics Platform',href: '/ai - hr - analytics - platform',description: 'AI - powered HR insights',},{name: 'Sales Intelligence Platform',href: '/ai - sales - intelligence - platform',description: 'AI - powered sales automation',},{name: 'CRM Intelligence Suite',href: '/smart - crm - intelligence - suite',description: 'Transform your CRM with AI',},{name: 'Content Automation Platform',href: '/intelligent - content - automation - platform',description: 'AI - powered content management',},{name: 'Decision Engine',href: '/ai - powered - decision - engine',description: 'AI - powered business decisions',},{name: 'Helpdesk & Support',href: '/helpdesk - automation',description: 'AI helpdesk, ticketing, KB, and chat',},{name: 'Learning Management (LMS)',href: '/lms - platform',description: 'Adaptive training and certifications',},{name: 'E‑commerce Returns',href: '/ecommerce - returns - management',description: 'Automated returns, labels, and RMAs',},{name: 'SEO Content Optimizer',href: '/seo - content - optimizer',description: 'On - page AI scoring and fixes',},{name: 'Keyword Research Engine',href: '/keyword - research - engine',description: 'Low - competition keywords discovery',},{name: 'Privacy Analytics Suite',href: '/analytics - suite',description: 'Cookie - less, privacy - friendly analytics',},{name: 'Invoice Studio',href: '/invoice - studio',description: 'Instant branded invoices and payments',},],},{name: 'Quantum & Emerging Tech',href: '/quantum - services',icon: <Atom className='w - 5 h - 5' />,    description: 'Quantum computing and breakthrough technologies',badge: 'Hot',featured: true,children: [      { name: 'Customer Success Platform', href: '/ai - customer - success - platform', description: 'AI - powered customer retention', featured: true },{ name: 'Supply Chain Optimization', href: '/intelligent - supply - chain - optimization', description: 'AI - powered supply chain management' },{ name: 'Financial Planning Platform', href: '/ai - financial - planning - platform', description: 'Intelligent financial planning' },{ name: 'HR Analytics Platform', href: '/ai - hr - analytics - platform', description: 'AI - powered HR insights' },{ name: 'Sales Intelligence Platform', href: '/ai - sales - intelligence - platform', description: 'AI - powered sales automation' },{ name: 'CRM Intelligence Suite', href: '/smart - crm - intelligence - suite', description: 'Transform your CRM with AI' },{ name: 'Content Automation Platform', href: '/intelligent - content - automation - platform', description: 'AI - powered content management' },{ name: 'Decision Engine', href: '/ai - powered - decision - engine', description: 'AI - powered business decisions' },{ name: 'Helpdesk & Support', href: '/helpdesk - automation', description: 'AI helpdesk, ticketing, KB, and chat' }
      { name: 'Learning Management (LMS)', href: '/lms - platform', description: 'Adaptive training and certifications' },{ name: 'E‑commerce Returns', href: '/ecommerce - returns - management', description: 'Automated returns, labels, and RMAs' }
      { name: 'SEO Content Optimizer', href: '/seo - content - optimizer', description: 'On - page AI scoring and fixes' },{ name: 'Keyword Research Engine', href: '/keyword - research - engine', description: 'Low - competition keywords discovery' },{ name: 'Privacy Analytics Suite', href: '/analytics - suite', description: 'Cookie - less, privacy - friendly analytics' }
      { name: 'Invoice Studio', href: '/invoice - studio', description: 'Instant branded invoices and payments' }
    ];
  }
  {{ name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Revolutionary space AI' }
    ];
    href: '/quantum - services',icon: <Atom className="w - 5 h - 5" />,badge: 'Hot',featured: true,children: [;
      {name: 'Quantum - Secure Cloud Infrastructure',href: '/quantum - secure - cloud - infrastructure',description: 'Unbreakable quantum encryption',},{name: 'Quantum Financial Trading Platform',href: '/quantum - financial - trading',description: 'Ultra - fast quantum trading',},{name: 'Quantum Internet Security Platform',href: '/quantum - internet - security - platform',description: 'Future - proof internet security',},{name: 'Space Resource Mining',href: '/space - resource - mining - platform',description: 'Asteroid mining and space resources',},{name: 'Quantum Internet Security',href: '/quantum - internet - security - platform',description: 'Unbreakable encryption',},{name: 'Brain - Computer Interface',href: '/brain - computer - interface - platform',description: 'Neural interface technology',},{name: 'Quantum Materials Discovery',href: '/quantum - materials - discovery - platform',description: 'Materials science acceleration',},{name: 'Autonomous Vehicle AI',href: '/autonomous - vehicle - ai - platform',description: 'Self - driving AI systems',},{name: 'Quantum Bio - Computing',href: '/quantum - bio - computing - platform',description: 'Quantum - biological hybrid processing',},{name: 'Quantum Energy Platform',href: '/quantum - energy - platform',description: 'Fusion power simulation',},{name: 'Quantum Robotics',href: '/quantum - robotics',description: 'Quantum - enhanced robotics',},{name: 'Quantum Cybersecurity',href: '/quantum - cybersecurity - platform',description: 'Next - gen security',},{name: 'Quantum Logistics',href: '/quantum - logistics - optimization',description: 'Route optimization',},{name: 'Quantum Metaverse',href: '/quantum - metaverse',description: 'Quantum - enhanced virtual worlds',},{name: 'Quantum IoT Platform',href: '/quantum - iot',description: 'Quantum - secured IoT',},{name: 'AI - Powered Space Technology',href: '/ai - powered - space - technology',description: 'Revolutionary space AI',},],},{name: 'Enterprise IT',href: '/enterprise - it',icon: <Shield className='w - 5 h - 5' />,    description: 'Advanced enterprise infrastructure and security',badge: 'Enterprise',featured: true,children: [      { name: 'Quantum - Secure Cloud Infrastructure', href: '/quantum - secure - cloud - infrastructure', description: 'Unbreakable quantum encryption' },{ name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading', description: 'Ultra - fast quantum trading' },{ name: 'Quantum Internet Security Platform', href: '/quantum - internet - security - platform', description: 'Future - proof internet security' },{ name: 'Space Resource Mining', href: '/space - resource - mining - platform', description: 'Asteroid mining and space resources' },{ name: 'Quantum Internet Security', href: '/quantum - internet - security - platform', description: 'Unbreakable encryption' },{ name: 'Brain - Computer Interface', href: '/brain - computer - interface - platform', description: 'Neural interface technology' },{ name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },{ name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai - platform', description: 'Self - driving AI systems' },{ name: 'Quantum Bio - Computing', href: '/quantum - bio - computing - platform', description: 'Quantum - biological hybrid processing' },{ name: 'Quantum Energy Platform', href: '/quantum - energy - platform', description: 'Fusion power simulation' },{ name: 'Quantum Robotics', href: '/quantum - robotics', description: 'Quantum - enhanced robotics' },{ name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity - platform', description: 'Next - gen security' },{ name: 'Quantum Logistics', href: '/quantum - logistics - optimization', description: 'Route optimization' },{ name: 'Quantum Metaverse', href: '/quantum - metaverse', description: 'Quantum - enhanced virtual worlds' },{ name: 'Quantum IoT Platform', href: '/quantum - iot', description: 'Quantum - secured IoT' },{ name: 'AI - Powered Space Technology', href: '/ai - powered - space - technology', description: 'Revolutionary space AI' }
    ];
  }
  {];
  }
    name: 'Industry Solutions';
    href: '/industry-solutions';
    icon: <Building className='w-5 h-5' />;
    description: 'Industry-specific technology solutions';
    badge: 'Industry';
    children: [;
      {name: 'Healthcare AI';
        href: '/healthcare-ai-solutions';
        description: 'AI-powered healthcare';
      }
      {name: 'Financial Technology';
        href: '/fintech-solutions';
        description: 'Next-gen fintech';
      }
      {name: 'Manufacturing AI';
        href: '/manufacturing-ai-solutions';
        description: 'Smart manufacturing';
      }
      {name: 'Retail Technology';
        href: '/innovative-business-solutions';
        description: 'Digital retail transformation';
      }
      {name: 'Education Technology';
        href: '/training';
        description: 'AI-powered learning';
      }
      {name: 'Government Solutions';
        href: '/enterprise-solutions-showcase';
        description: 'Public sector innovation';
      }
      {name: 'Energy & Utilities';
        href: '/quantum-energy';
        description: 'Sustainable energy tech';
      }
      {name: 'Biotech AI Research';
        href: '/biotech-ai';
        description: 'AI-driven biotech';
      }
    ];
  }name: 'AI Sales Intelligence';
        href: '/ai-sales-intelligence-platform';
        description: 'Supercharge sales with AI automation';
      }
      {name: 'AI Financial Planning';
        href: '/ai-financial-planning-platform';
        description: 'Intelligent financial forecasting';
      }
      {name: 'AI Decision Engine';
        href: '/ai-powered-decision-engine';
        description: 'AI-powered business decisions';
      }
      {name: 'AI Content Automation';
        href: '/intelligent-content-automation-platform';
        description: 'Automate content creation';
      }
      {name: 'AI HR Analytics';
        href: '/ai-hr-analytics-platform';
        description: 'Transform HR with AI insights';
      }
      {name: 'AI Consciousness Evolution';
        href: '/ai-consciousness-evolution-2029';
        description: 'Emotional intelligence and self-awareness';
      }
      {name: 'AI Quantum Neural Network';
        href: '/ai-quantum-neural-network';
        description: 'Hybrid AI-Quantum computing platform';
      }
      {name: 'AI Autonomous Business Operations';
        href: '/ai-autonomous-business-operations';
        description: 'Fully autonomous business management';
      }
      {name: 'AI Autonomous Research';
        href: '/ai-autonomous-research-assistant';
        description: 'Self-directed AI research';
      }
      {name: 'AI Emotional Intelligence';
        href: '/ai-emotional-intelligence-training';
        description: 'EQ training platform';
      }
      {name: 'AI Predictive Maintenance';
        href: '/ai-predictive-maintenance-platform';
        description: 'Equipment failure prediction';
      }
      {name: 'AI Content Personalization';
        href: '/ai-content-personalization-engine';
        description: 'Personalized content delivery';
      }
      {name: 'AI Autonomous Ecosystem';
        href: '/ai-autonomous-ecosystem-manager';
        description: 'Self-managing AI systems';
      }
      {name: 'AI Ethics & Governance';
        href: '/ai-ethics-governance-framework';
        description: 'Ethical AI frameworks';
      }
      {name: 'Advanced AI Automation';
        href: '/advanced-ai-automation-services';
        description:;
          'AI automation for development, testing, DevOps, security, and data';
      }
    ];
  }
  {name: 'Micro SAAS Solutions',href: '/micro-saas',icon: <Rocket className='w-5 h-5' />,description: 'Innovative business solutions for modern enterprises',badge: 'Hot',featured: true,children: [;
{name: 'Customer Success Platform',href: '/ai-customer-success-platform',description: 'AI-powered customer retention',featured: true,},{name: 'Supply Chain Optimization';
        href: '/intelligent-supply-chain-optimization';
        description: 'AI-powered supply chain management';
      }
      {name: 'Financial Planning Platform';
        href: '/ai-financial-planning-platform';
        description: 'Intelligent financial planning';
      }
      {name: 'HR Analytics Platform';
        href: '/ai-hr-analytics-platform';
        description: 'AI-powered HR insights';
      }
      {name: 'Sales Intelligence Platform';
        href: '/ai-sales-intelligence-platform';
        description: 'AI-powered sales automation';
      }
      {name: 'CRM Intelligence Suite';
        href: '/smart-crm-intelligence-suite';
        description: 'Transform your CRM with AI';
      }
      {name: 'Content Automation Platform';
        href: '/intelligent-content-automation-platform';
        description: 'AI-powered content management';
      }
      {name: 'Decision Engine';
        href: '/ai-powered-decision-engine';
        description: 'AI-powered business decisions';
      }
      {name: 'Helpdesk & Support';
        href: '/helpdesk-automation';
        description: 'AI helpdesk, ticketing, KB, and chat';
      }
      {name: 'Learning Management (LMS)';
        href: '/lms-platform';
        description: 'Adaptive training and certifications';
      }
      {name: 'E‑commerce Returns';
        href: '/ecommerce-returns-management';
        description: 'Automated returns, labels, and RMAs';
      }
      {name: 'SEO Content Optimizer';
        href: '/seo-content-optimizer';
        description: 'On-page AI scoring and fixes';
      }
      {name: 'Keyword Research Engine';
        href: '/keyword-research-engine';
        description: 'Low-competition keywords discovery';
      }
      {name: 'Privacy Analytics Suite';
        href: '/analytics-suite';
        description: 'Cookie-less, privacy-friendly analytics';
      }
      {name: 'Invoice Studio';
        href: '/invoice-studio';
        description: 'Instant branded invoices and payments';
      }
    ];
  }
  {name: 'Quantum & Emerging Tech',href: '/quantum-services',icon: <Atom className='w-5 h-5' />,description: 'Quantum computing and breakthrough technologies',badge: 'Hot',featured: true,children: [;
{name: 'Quantum-Secure Cloud Infrastructure',href: '/quantum-secure-cloud-infrastructure',description: 'Unbreakable quantum encryption',},{name: 'Quantum Financial Trading Platform';
        href: '/quantum-financial-trading';
        description: 'Ultra-fast quantum trading';
      }
      {name: 'Quantum Internet Security Platform';
        href: '/quantum-internet-security-platform';
        description: 'Future-proof internet security';
      }
      {name: 'Space Resource Mining';
        href: '/space-resource-mining-platform';
        description: 'Asteroid mining and space resources';
      }
      {name: 'Quantum Internet Security';
        href: '/quantum-internet-security-platform';
        description: 'Unbreakable encryption';
      }
      {name: 'Brain-Computer Interface';
        href: '/brain-computer-interface-platform';
        description: 'Neural interface technology';
      }
       {name: 'Quantum Materials Discovery';
        href: '/quantum-materials-discovery-platform';
        description: 'Materials science acceleration';
      }
      {name: 'Autonomous Vehicle AI';
        href: '/autonomous-vehicle-ai-platform';
        description: 'Self-driving AI systems';
      }
      {name: 'Quantum Bio-Computing';
        href: '/quantum-bio-computing-platform';
        description: 'Quantum-biological hybrid processing';
      }
      {name: 'Quantum Energy Platform';
        href: '/quantum-energy-platform';
        description: 'Fusion power simulation';
      }
      {name: 'Quantum Robotics';
        href: '/quantum-robotics';
        description: 'Quantum-enhanced robotics';
      }
      {name: 'Quantum Cybersecurity';
        href: '/quantum-cybersecurity-platform';
        description: 'Next-gen security';
      }
      {name: 'Quantum Logistics';
        href: '/quantum-logistics-optimization';
        description: 'Route optimization';
      }
      {name: 'Quantum Metaverse';
        href: '/quantum-metaverse';
        description: 'Quantum-enhanced virtual worlds';
      }
      {name: 'Quantum IoT Platform';
        href: '/quantum-iot';
        description: 'Quantum-secured IoT';
      }
      {name: 'AI-Powered Space Technology';
        href: '/ai-powered-space-technology';
        description: 'Revolutionary space AI';
      }
    ];
  }
  {name: 'Enterprise IT',href: '/enterprise-it',icon: <Shield className='w-5 h-5' />,description: 'Advanced enterprise infrastructure and security',badge: 'Enterprise',featured: true,children: [;
{name: 'Zero Trust Security',href: '/zero-trust-security-platform',description: 'Next-generation security architecture',},{name: 'Quantum Cloud Infrastructure',href: '/quantum-cloud-infrastructure',description: 'Quantum-enhanced cloud computing',},{name: 'Autonomous IT Operations',href: '/autonomous-it-operations-center',description: 'Self-managing IT infrastructure',},{name: 'Edge Computing Orchestration',href: '/edge-computing-orchestration',description: 'Distributed edge computing',},{name: 'Blockchain Infrastructure',href: '/blockchain-infrastructure-platform',description: 'Enterprise blockchain solutions',},{name: 'AI-Powered DevOps',href: '/ai-powered-devops-platform',description: 'Intelligent development operations',},{name: 'Quantum Cybersecurity',href: '/quantum-cybersecurity-services',description: 'Next-gen quantum security',},{name: 'AI-Powered Cybersecurity',href: '/ai-powered-cybersecurity',description: 'Intelligent threat detection',},],},{name: 'Industry Solutions',href: '/industry-solutions',icon: <Building className='w-5 h-5' />,description: 'Industry-specific technology solutions',badge: 'Industry',children: [;
      {name: 'Zero Trust Security';
        href: '/zero-trust-security-platform';
        description: 'Next-generation security architecture';
      }
      {name: 'Quantum Cloud Infrastructure';
        href: '/quantum-cloud-infrastructure';
        description: 'Quantum-enhanced cloud computing';
      }
      {name: 'Autonomous IT Operations';
        href: '/autonomous-it-operations-center';
        description: 'Self-managing IT infrastructure';
      }
      {name: 'Edge Computing Orchestration';
        href: '/edge-computing-orchestration';
        description: 'Distributed edge computing';
      }
      {name: 'Blockchain Infrastructure';
        href: '/blockchain-infrastructure-platform';
        description: 'Enterprise blockchain solutions';
      }
      {name: 'AI-Powered DevOps';
        href: '/ai-powered-devops-platform';
        description: 'Intelligent development operations';
      }
      {name: 'Quantum Cybersecurity';
        href: '/quantum-cybersecurity-services';
        description: 'Next-gen quantum security';
      }
      {name: 'Biotech AI Research',href: '/biotech-ai',description: 'AI-driven biotech',},],},{name: 'Resources',href: '/resources',icon: <BookOpen className='w-5 h-5' />,description: 'Documentation, support, and learning resources',children: [;
    href: '/enterprise - it',icon: <Shield className="w - 5 h - 5" />,badge: 'Enterprise',featured: true,children: [;
      {name: 'Zero Trust Security',href: '/zero - trust - security - platform',description: 'Next - generation security architecture',},{name: 'Quantum Cloud Infrastructure',href: '/quantum - cloud - infrastructure',description: 'Quantum - enhanced cloud computing',},{name: 'Autonomous IT Operations',href: '/autonomous - it - operations - center',description: 'Self - managing IT infrastructure',},{name: 'Edge Computing Orchestration',href: '/edge - computing - orchestration',description: 'Distributed edge computing',},{name: 'Blockchain Infrastructure',href: '/blockchain - infrastructure - platform',description: 'Enterprise blockchain solutions',},{name: 'AI - Powered DevOps',href: '/ai - powered - devops - platform',description: 'Intelligent development operations',},{name: 'Quantum Cybersecurity',href: '/quantum - cybersecurity - services',description: 'Next - gen quantum security',},{name: 'AI - Powered Cybersecurity',href: '/ai - powered - cybersecurity',description: 'Intelligent threat detection',},],},name: 'Industry Solutions',href: '/industry - solutions',icon: <Building className='w - 5 h - 5' />,description: 'Industry - specific technology solutions',badge: 'Industry',children: [;
      {name: 'Healthcare AI',href: '/healthcare - ai - solutions',description: 'AI - powered healthcare',},{name: 'Financial Technology',href: '/fintech - solutions',description: 'Next - gen fintech',},{name: 'Manufacturing AI',href: '/manufacturing - ai - solutions',description: 'Smart manufacturing',},{name: 'Retail Technology',href: '/innovative - business - solutions',description: 'Digital retail transformation',},{name: 'Education Technology',href: '/training',description: 'AI - powered learning',},{name: 'Government Solutions',href: '/enterprise - solutions - showcase',description: 'Public sector innovation',},{name: 'Energy & Utilities',href: '/quantum - energy',description: 'Sustainable energy tech',},{name: 'Biotech AI Research',href: '/biotech - ai',description: 'AI - driven biotech',},],},{name: 'Resources',href: '/resources',icon: <BookOpen className='w - 5 h - 5' />,description: 'Documentation, support, and learning resources',children: [;
      {name: 'Documentation',href: '/docs',description: 'Technical documentation',},{name: 'API Reference',href: '/api-documentation',description: 'API documentation',},{name: 'Case Studies',href: '/case-studies',description: 'Success stories',},{ name: 'Blog & News', href: '/blog', description: 'Latest insights' },{name: 'Support Center',href: '/support',description: 'Help and support',},{name: 'Training',href: '/training',description: 'Learning resources',},{ name: 'Community', href: '/community', description: 'User community' },],},];const quickActions = [;
  {name: 'Get Started',href: '/contact',icon: <ArrowRight className='w-4 h-4' />,primary: true,},{name: 'Get a Quote',href: '/quote',icon: <DollarSign className='w-4 h-4' />,},{ name: 'Book Demo', href: '/demo', icon: <Video className='w-4 h-4' /> },{name: 'Live Chat',href: '/chat',icon: <MessageCircle className='w-4 h-4' />,},{name: 'View Pricing',href: '/pricing',icon: <DollarSign className='w-4 h-4' />,},{name: 'Market Pricing',href: '/market-pricing',icon: <BarChart3 className='w-4 h-4' />,},{name: 'Services Advertising',href: '/services-advertising',icon: <Sparkles className='w-4 h-4' />,},{name: 'Documentation',href: '/docs',icon: <BookOpen className='w-4 h-4' />,},{name: 'Support',href: '/support',icon: <HelpCircle className='w-4 h-4' />,},];const UltraFuturisticNavigation2035: React.FC = () => {const [isOpen, setIsOpen] = useState(false)const [activeDropdown, setActiveDropdown] = useState<string | null>(null)const [isScrolled, setIsScrolled] = useState(false)useEffect(() => {const handleScroll = () => {window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])const toggleDropdown = (name: string) => {setActiveDropdown(activeDropdown === name ? null : name)}
  const closeDropdowns = () => {setActiveDropdown(null)setIsScrolled(window.scrollY > 10)}window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])const toggleDropdown = (name: string) => {setActiveDropdown(activeDropdown === name ? null : name)}
  const closeDropdowns = () => {setActiveDropdown(null)}const closeMobileMenu = () => {setIsOpen(false)closeDropdowns()}{/* Desktop Navigation */}  }return (<nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled;
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl';
            {/* Desktop Navigation */}
                  <button;
    closeDropdowns()
  };

const closeMobileMenu = (
    setIsOpen(false);
    closeDropdowns()
  };


    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95' />
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' />
        </div>
      </div>
      <div className='relative z-10'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-3 group'>
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Brain className='w-6 h-6 text-white' />
              </div>
              <div>
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>
                  Revolutionary Technology
                </div>
              </div>
            </Link>
            {/* Desktop Navigation */}
<div className='hidden lg:flex items-center gap-8'>
              {navigationItems.map(item => (
                <div key={item.name} className='relative group'>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className='flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
<<<<<<< HEAD
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    className='flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400';
                  >;
                    {item.icon}
                    <span>{item.name}</span>;
                    {item.badge && (<span;
                        className={`px-2 py-1 text-xs rounded-full ${item.badge === 'New';
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30';
                            : item.badge === 'Hot';
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30';
                              : item.badge === 'Showcase';
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30';
                                : item.badge === 'Future';
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
                                  : item.badge === 'Enterprise';
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
                                    : item.badge === 'Industry';
                                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
                                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
                        }`}
                      >;
                        {item.badge}
                      </span>;
                    )}
                    <ChevronDown;
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';
                      }`}

                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
=======

<span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : item.badge === 'Hot'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : item.badge === 'Showcase'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : item.badge === 'Future'
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  : item.badge === 'Enterprise'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : item.badge === 'Industry'
                                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
<<<<<<< HEAD
                      <motion.div
                    />;
                  </button>;
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {activeDropdown === item.name && (<motion.div;
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden';
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {activeDropdown === item.name && (<motion.div;
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden';
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

<<<<<<< HEAD
=======
                                key={child && child.name}
                                href={child && child.href}`
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'`
                                }`}
                                onClick={closeDropdowns}    />
                                {child && child.featured && (<Star className='w-4 h-4 text-cyan-400'    />;}
                                )}
                                <div className='flex-1'    />
                                  <div className='font-medium'    />
                                    {child && child.name}
                                  </div>
                                    <div className='text-sm opacity-75'    />
                                      {child && child.description}
                                    </div>
                                  )}
                                </div>;"
                                <ArrowRight className='w-4 h-4 opacity-50'    />                              </Link>                                <ArrowRight className=\"w-4 h-4 opacity-50\"    />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion && motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
                    }`}
                  >
                    {action && action.icon}
                    <span    />{action && action.name}</span>
                  </Link>
                ))}
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'    />
                <a
                  href={`tel: ${contactInfo && contactInfo.mobile}

                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'    />
                  <Phone className='w-4 h-4'    />
                  <span className='hidden xl: inline'    />{contactInfo && contactInfo.mobil}
}</span>
                </a>
                <a
                    key={action.name}
                    href={action.href}
                    className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 ${action.primary
                        ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25';}
                        : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';}
                    }`}    />

                    {action.icon}
                    <span    />{action.name}</span>
                  </Link>))}
              </div>
              {/* Contact Info */}
                  href={`mailto: ${contactInfo && contactInfo.email}

                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'>
                  <Mail className='w-4 h-4'    />
                  <span className='hidden xl: inline'    />{contactInfo && contactInfo.emai}"
}</span>                </a>              <div className=\"flex items-center gap-4 text-sm text-gray-400\"    />
                <a href={`tel: ${contactInfo && contactInfo.mobile},"
} className=\"flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200\"    />;"
                  <Phone className=\"w-4 h-4\"    />;"
                  <span className=\"hidden xl: inline\"    />{contactInfo && contactInfo.mobil}
}</span>
                </a>
                <a href={`mailto: ${contactInfo && contactInfo.email},"
} className=\"flex items-center gap-2 hover:text-purple-400 transition-colors duration-200\"    />;"
                  <Mail className=\"w-4 h-4\"    />;"
                  <span className=\"hidden xl: inline\"    />{contactInfo && contactInfo.emai}
}</span>
              </div>
            </div>;{/* Mobile Menu Button */}
            <button
              onClick={() =    /> setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
              aria-label='Toggle mobile menu'>

              {isOpen ? (<X className='w-6 h-6'    />;}
              ) : (<Menu className='w-6 h-6'    />;}"
              )}            </button>              className=\'lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200\';"
              aria-label=\"Toggle mobile menu\">
"
              {isOpen ? <X className=\"w-6 h-6\"    /> : <Menu className=\"w-6 h-6\"    />}
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion&& motion.div'
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :'
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :'
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :'
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :'
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :'
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

                        onMouseLeave={closeDropdown}
}
                       />;
                        <div className='p-6' />;
                          <div className='flex items-center gap-3 mb-4' />;
                            {item.icon}
                            <div>;
                              <h3 className="font-semibold text-white">{item.title |item.name}</h3>;
                              {item.description && (<p className="text-sm text-gray-400">{item.description}</p>;
                              )}
                            </div>;
                          </div>;
                          <div className="space-y-2">;
                            {item.children?.map((child) => (className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden';
                        onMouseLeave={closeDropdowns}
                      >;
                        <div className='p-6'>;
                          <div className='flex items-center gap-3 mb-4'>;
                            {item.icon}
                            <div>;
                              <h3 className='font-semibold text-white'>;
                                {item.title |item.name}
                              </h3>;
                              {item.description && (<p className='text-sm text-gray-400'>;
                                  {item.description}
                                </p>;
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                            </div>;
                          </div>;
                          <div className='space-y-2'>;
                            {item.children?.map(child => (<Link;
                                key={child && child.name}
                                href={child && child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${: 'text-gray-300 hover:text-white hover:bg-gray-800/50';
                                }`}
                                onClick={closeDropdowns}>;
                                {child && child.featured && (<Star className='w-4 h-4 text-cyan-400' />;
                                )}
                                <div className='flex-1'>;
                                  <div className='font-medium'>;
                                    {child && child.name}
                                  </div>;
=======
                      <motion.div;
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}'
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div;
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}'
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'


                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div;
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}`
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${}
                                  child && child.featured'
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'`
                                }`}
                      >"
                        <div className="p-6">"
                          <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <div>"
                              <h3 className="font-semibold text-white">{item.title |item.name}</h3>
                              {item.description && ("
                                <p className="text-sm text-gray-400">{item.description}</p>
                              )}
                            </div>
                          </div>"
                          <div className="space-y-2">
                            {item.children?.map((child) => (
<<<<<<< HEAD
className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'
                        onMouseLeave={closeDropdowns}
                      >
                        <div className='p-6'>
                          <div className='flex items-center gap-3 mb-4'>
                            {item.icon}
                            <div>
                              <h3 className='font-semibold text-white'>
                                {item.title |item.name}
                              </h3>
                              {item.description && (
                                <p className='text-sm text-gray-400'>
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className='space-y-2'>
                            {item.children?.map(child => (
origin/cursor/automate-test-improve-and-merge-code-2533
                              <Link
=======
                              <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                                key={child && child.name}
                                href={child && child.href}`
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'`
                                }`}
                                onClick={closeDropdowns}>;
                                {child && child.featured && (;'
                                  <Star className='w-4 h-4 text-cyan-400' />;
                                )}'
                                <div className='flex-1'>;'
                                  <div className='font-medium'>;
                                    {child && child.name}
                                  </div>;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                    <div className='text-sm opacity-75'>;
                                      {child && child.description}
                                    </div>;
                                  )}
<<<<<<< HEAD
                                </div>;
=======
                                </div>;'"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                <ArrowRight className='w-4 h-4 opacity-50' />                              </Link>                                <ArrowRight className="w-4 h-4 opacity-50" />;
                              </Link>;
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}`
                    }`}
                  >;
                    {action && action.icon}
                    <span>{action && action.name}</span>;
                  </Link>;
                ))}
<<<<<<< HEAD
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>;
                <a;
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'>;
                  <Phone className='w-4 h-4' />;
=======
              {/* Contact Info */}'
              <div className='flex items-center gap-4 text-sm text-gray-400'>;
                <a;`
                  href={`tel:${contactInfo && contactInfo.mobile}`}'
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'>;'
                  <Phone className='w-4 h-4' />;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.mobile}</span>;
                </a>;
                <a;
                    key={action.name}
<<<<<<< HEAD
                    href={action.href}
                    className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 ${action.primary;
                        ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25';
                        : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
=======
                    href={action.href}`
                    className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 ${}
                      action.primary;'
                        ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25';'
                        : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';`
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    }`}
                  >;
                    {action.icon}
                    <span>{action.name}</span>;
                  </Link>))}
              </div>;
<<<<<<< HEAD
              {/* Contact Info */}
                  href={`mailto:${contactInfo && contactInfo.email}`}
                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'>;
                  <Mail className='w-4 h-4' />;
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.email}</span>                </a>              <div className="flex items-center gap-4 text-sm text-gray-400">;
                <a href={`tel:${contactInfo && contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">;
                  <Phone className="w-4 h-4" />;
                  <span className="hidden xl:inline">{contactInfo && contactInfo.mobile}</span>;
                </a>;
                <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">;
                  <Mail className="w-4 h-4" />;
                  <span className="hidden xl:inline">{contactInfo && contactInfo.email}</span>;
              </div>;
            </div>;{/* Mobile Menu Button */}
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200';
              aria-label='Toggle mobile menu';
            >;
              {isOpen ? (<X className='w-6 h-6' />;
              ) : (<Menu className='w-6 h-6' />;
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200";
              aria-label="Toggle mobile menu";
            >;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>;
        </div>;
            {/* Mobile Menu Button */}
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200';
              aria-label='Toggle mobile menu';
            >;
              {isOpen ? (<X className='w-6 h-6' />;
              ) : (<Menu className='w-6 h-6' />;
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200";
              aria-label="Toggle mobile menu";
            >;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>;
        </div>;
          </div>;
        </div>;{/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (<motion&& motion.div;
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :;
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :;
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :;
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :;
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :;
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :;
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {activeDropdown === item.name && (<motion.div;
=======
              {/* Contact Info */}`
                  href={`mailto:${contactInfo && contactInfo.email}`}'
                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'>;'
                  <Mail className='w-4 h-4' />;'"
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.email}</span>                </a>              <div className="flex items-center gap-4 text-sm text-gray-400">;"`
                <a href={`tel:${contactInfo && contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">;"
                  <Phone className="w-4 h-4" />;"
                  <span className="hidden xl:inline">{contactInfo && contactInfo.mobile}</span>;
                </a>;"`
                <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">;"
                  <Mail className="w-4 h-4" />;"
                  <span className="hidden xl:inline">{contactInfo && contactInfo.email}</span>;
              </div>;
            </div>;

            {/* Mobile Menu Button */}
            <button;
              onClick={() => setIsOpen(!isOpen)}'
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200''
              aria-label='Toggle mobile menu'
            >
              {isOpen ? ('
                <X className='w-6 h-6' />
              ) : ('
                <Menu className='w-6 h-6' />"
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200""
              aria-label="Toggle mobile menu"
            >"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>

            {/* Mobile Menu Button */}
            <button;
              onClick={() => setIsOpen(!isOpen)}'
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200';'
              aria-label='Toggle mobile menu';
            >;
              {isOpen ? (;'
                <X className='w-6 h-6' />;
              ) : (;'
                <Menu className='w-6 h-6' />;"
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200";"
              aria-label="Toggle mobile menu";
            >;"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
          </div>;
        </div>;

        {/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (;
            <motion&& motion.div'
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :'
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :'
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :'
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :'
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :'
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={closeDropdowns}
<<<<<<< HEAD
                      >;
                        <div className='p-6'>;
                          <div className='flex items-center gap-3 mb-4'>;
                            {item.icon}
                            <div>;
                              <h3 className='font-semibold text-white'>;
=======
                      >'
                        <div className='p-6'>'
                          <div className='flex items-center gap-3 mb-4'>
                            {item.icon}
                            <div>'
                              <h3 className='font-semibold text-white'>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                {item.title |item.name}
                              </h3>
                              {item.description && (
                                  {item.description}
                                </p>
                              )}
<<<<<<< HEAD
                            </div>;
                          </div>;
                          <div className='space-y-2'>;
                            {item.children?.map(child => (                              <Link;
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${<Link;
                                key={child.name}
                                href={child.href}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1}}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <div>
                              <h3 className="font-semibold text-white">{item.title || item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-400">{item.description}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
=======
                            </div>
                          </div>'
                          <div className='space-y-2'>
                            {item.children?.map(child => (                              <Link;
                                key={child.name}
                                href={child.href}`
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${}
                              <Link;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                key={child.name}
<<<<<<< HEAD
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
<<<<<<< HEAD
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20' 
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
=======
child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
=======
                                href={child.href}`
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${}
                                  child.featured'
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                  child.featured'
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20''
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                }`}
                                onClick={closeDropdowns}
                              >
{child.featured && (
                                  <Star className='w-4 h-4 text-cyan-400' />
<<<<<<< HEAD
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${child.featured;
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20';
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50';
                                }`}onClick={closeDropdowns}
                              >;
{child.featured && (<Star className='w-4 h-4 text-cyan-400' />;
                                )}
                                <div className='flex-1'>;
                                  <div className='font-medium'>;
                                    {child.name}
                                  </div>;
                                    <div className='text-sm opacity-75'>;
=======
                                )}
                                <div className='flex-1'>
                                  <div className='font-medium'>
                                    {child.name}
                                  </div>
                                    <div className='text-sm opacity-75'>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                      {child.description}
                                    </div>
                                  )}
<<<<<<< HEAD
                                onClick={closeDropdowns}
                              >
                                {child.featured && <Star className="w-4 h-4 text-cyan-400" />}
                                <div className="flex-1">
                                  <div className="font-medium">{child.name}</div>
                                  {child.description && (
                                    <div className="text-sm opacity-75">{child.description}</div>
                                  )}
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                </div>
                                <ArrowRight className="w-4 h-4 opacity-50" />
                              </Link>
<<<<<<< HEAD
                                </div>;
                                <ArrowRight className='w-4 h-4 opacity-50' />;
                              </Link>;
                                </div>;
                                <ArrowRight className='w-4 h-4 opacity-50' />;
                              </Link>;
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
<<<<<<< HEAD
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Quick Actions */}
              <div className='flex items-center gap-2'>;
                  <Link;
                {quickActions.map(action => (<Link;
              <div className='flex items-center gap-2'>


                  <Link

              <div className='flex items-center gap-2'>;
                  <Link;
                {quickActions.map(action => (<Link;
              <div className="flex items-center gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
=======
            {/* Right Side Actions */}'
            <div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}
<<<<<<< HEAD
            {/* Right Side Actions */}
<div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}
              <div className='flex items-center gap-2'>

                  <Link

                {quickActions.map(action => (
                  <Link
origin/cursor/automate-test-improve-and-merge-code-2533
=======
            {/* Right Side Actions */}'
            <div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}'
              <div className='flex items-center gap-2'>

                  <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    key={action.name}
                    href={action.href}`
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${}
                      action.primary'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25''
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'`
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    }`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
<<<<<<< HEAD
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              exit={{ opacity: 0, height: 0 }}transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50';
            >;
              <div className='container mx-auto px-4 py-6'>;
                <div className='space-y-6'>;
                  {/* Mobile Navigation Items */}
                  {navigationItems.map(item => (<div key={item.name}>;
                      <button;
                        onClick={() => toggleDropdown(item.name)}
                        className='flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200';
                      >;
                        <div className='flex items-center gap-3'>;
                          {item.icon}
                          <span>{item.name}</span>;
                          {item.badge && (<span;
                              className={`px-2 py-1 text-xs rounded-full ${item.badge === 'New';
                                  ? 'bg-green-500/20 text-green-400';
                                  : item.badge === 'Hot';
                                    ? 'bg-red-500/20 text-red-400';
                                    : item.badge === 'Showcase';
                                      ? 'bg-cyan-500/20 text-cyan-400';
                                      : 'bg-gray-500/20 text-gray-400';
                              }`}
              exit={{ opacity: 0, height: 0 }}

                            </span>
                            >;
                              {item.badge}</span>;
                          )}
                        </div>;
<ChevronDown;
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';
=======
<<<<<<< HEAD
              {/* Contact Info */}
<div className='flex items-center gap-4 text-sm text-gray-400'>
                <a
                  href={`tel:${contactInfo.mobile}`}
=======
              {/* Contact Info */}'
              <div className='flex items-center gap-4 text-sm text-gray-400'>
                <a;`
                  href={`tel:${contactInfo.mobile}`}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'
                >'
                  <Phone className='w-4 h-4' />'
                  <span className='hidden xl:inline'>{contactInfo.mobile}</span>
                </a>
                <a;`
                  href={`mailto:${contactInfo.email}`}'
                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'
<<<<<<< HEAD
                >
                  <Mail className='w-4 h-4' />
                  <span className='hidden xl:inline'>{contactInfo.email}</span>
                </a>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
=======
                >'
                  <Mail className='w-4 h-4' />'"
                  <span className='hidden xl:inline'>{contactInfo.email}</span>                </a>              <div className="flex items-center gap-4 text-sm text-gray-400">"`
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">"
                  <Phone className="w-4 h-4" />"
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </a>"`
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">"
                  <Mail className="w-4 h-4" />"
                  <span className="hidden xl:inline">{contactInfo.email}</span>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button;
              onClick={() => setIsOpen(!isOpen)}'
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              aria-label='Toggle mobile menu'
            >
              {isOpen ? ('
                <X className='w-6 h-6' />
<<<<<<< HEAD
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
=======
              ) : ('
                <Menu className='w-6 h-6' />"
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200""
              aria-label="Toggle mobile menu"
            >"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}'
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}

                      {/* Mobile Dropdown */}
                      <AnimatePresence>;
                        {activeDropdown === item && item.name && (;
<<<<<<< HEAD
                          <motion&& motion.div
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
<<<<<<< HEAD
                      <AnimatePresence>;
                        {activeDropdown === item && item.name && (;
                          <motion&& motion.div
                              <Link
                                key={child && child.name}
                                href={child && child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${
className='ml-6 mt-2 space-y-2';
                          >;
                            {item.children?.map(child => (<Link;
                                key={child && child.name}
                                href={child && child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${: 'text-gray-400 hover:text-white hover:bg-gray-800/50';
                                }`}
                                onClick={closeMobileMenu}>;
                                <div className='font-medium'>{child && child.name}</div>;
                                {child && child.description && (<div className='text-sm opacity-75 mt-1'>;
                                    {child && child.description}
                                  </div>                                )}                                <div className="font-medium">{child && child.name}</div>;
                                {child && child.description && (<div className="text-sm opacity-75 mt-1">{child && child.description}</div>;child.featured;
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400';
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50';
                                }`}
                                onClick={closeMobileMenu}
                              >;
<div className='font-medium'>{child.name}</div>;
                                {child.description && (<div className='text-sm opacity-75 mt-1'>;
                                    {child.description}
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeMobileMenu}>;
                                <div className='font-medium'>{child && child.name}</div>;
                                {child && child.description && (;
                                  <div className='text-sm opacity-75 mt-1'>;
                                    {child && child.description}
                                  </div>                                )}                                <div className="font-medium">{child && child.name}</div>;
                                {child && child.description && (;
                                  <div className="text-sm opacity-75 mt-1">{child && child.description}</div>;
=======
className='ml-6 mt-2 space-y-2'
                          >
                            {item.children?.map(child => (
origin/cursor/automate-test-improve-and-merge-code-2533
                              <Link
=======
                          <motion&& motion.div;
                              <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                                key={child && child.name}
                                href={child && child.href}`
                                className={`block p-3 rounded-lg transition-colors duration-200 ${'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'`
                                }`}
                                onClick={closeMobileMenu}>;'
                                <div className='font-medium'>{child && child.name}</div>;
                                {child && child.description && (;'
                                  <div className='text-sm opacity-75 mt-1'>;
                                    {child && child.description}"
                                  </div>                                )}                                <div className="font-medium">{child && child.name}</div>;
                                {child && child.description && (;"
                                  <div className="text-sm opacity-75 mt-1">{child && child.description}</div>;
child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeMobileMenu}
                              >
<div className='font-medium'>{child.name}</div>
                                {child.description && (
                                  <div className='text-sm opacity-75 mt-1'>
                                    {child.description}
                                  </div>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                )}

                              </Link>
<<<<<<< HEAD
                                  </div>;
                                )}</Link>;
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                              </Link>;
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
<<<<<<< HEAD
                  ))}{/* Mobile Quick Actions */}
<div className='pt-4 border-t border-gray-800/50'>;
                    <div className='space-y-3'>;
                      {quickActions.map(action => (<Link;
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  ))}



<<<<<<< HEAD
=======
                  {/* Mobile Quick Actions */}
<div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3'>
                      {quickActions.map(action => (
                        <Link
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                          key={action.name}
                          href={action.href}
                        <Link;
                          key={action && action.name}
<<<<<<< HEAD
                          href={action && action.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${action && action.primary;
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50';
                          }`}
                          onClick={closeMobileMenu}>;
                          {action && action.icon}
                          <span>{action && action.name}</span>;
                        </Link>;
                      ))}
                  {/* Mobile Contact Info */}
                  <div className='pt-4 border-t border-gray-800/50'>;
                    <div className='space-y-3 text-sm text-gray-400'>;
                      <a
                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a
                  {/* Mobile Contact Info */}<div className='pt-4 border-t border-gray-800/50'>;
                    <div className='space-y-3 text-sm text-gray-400'>;<div className='pt-4 border-t border-gray-800/50'>;
                    <div className='space-y-3 text-sm text-gray-400'>;
                      <a;
                        <span>{contactInfo.mobile}</span>;
                      </a>;
                      <a;
                        href={`mailto:${contactInfo && contactInfo.email}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'>;
                        <Mail className='w-4 h-4' />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </a>;
                      <div className='flex items-center gap-3 p-3 rounded-lg'>;
                        <MapPin className='w-4 h-4' />;
                        <span className='text-sm'>{contactInfo && contactInfo.address}</span>                      </div>                        <span>{contactInfo && contactInfo.mobile}</span>;
                      </a>;
                      <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">;
                        <Mail className="w-4 h-4" />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </a>;
                      <div className="flex items-center gap-3 p-3 rounded-lg">;
                        <MapPin className="w-4 h-4" />;
                        <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </nav>;
  )}href={`mailto:${contactInfo.email}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200';
                      >;
                        <Mail className='w-4 h-4' />;
                        <span>{contactInfo.email}</span>;
                      </a>;
                      <div className='flex items-center gap-3 p-3 rounded-lg'>;
                        <MapPin className='w-4 h-4' />;
                        <span className='text-sm'>{contactInfo.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </nav>;
)}}, [])}}, [])</div> <div> <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Zion Tech Group </div> <div className="text - xs text - gray - 400" >Revolutionary Technology</div> </div> </a> > {item.icon;
}<span> {item.name;
}</span> {item.badge && (<span className= {`px - 2 py - 1 text - xs rounded - full $ {item.badge === 'New' ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30' : item.badge === 'Hot' ? 'bg - red - 500 / 20 text - red - 400 border border - red - 500 / 30' : item.badge === 'Showcase' ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30' : item.badge === 'Future' ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30' : item.badge === 'Enterprise' ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30' : item.badge === 'Industry' ? 'bg - orange - 500 / 20 text - orange - 400 border border - orange - 500 / 30' : 'bg - gray - 500 / 20 text - gray - 400 border border - gray - 500 / 30';
  );
}
}, []);
}
;
}, []);
</div> <div> <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Zion Tech Group </div> <div className="text - xs text - gray - 400" >Revolutionary Technology</div> </div> </a> > {
  item.icon;
}<span> {
  item.name;
}</span> {
  item.badge && (<span className= {
  `px - 2 py - 1 text - xs rounded - full $ {
  item.badge === 'New' ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30' : item.badge === 'Hot' ? 'bg - red - 500 / 20 text - red - 400 border border - red - 500 / 30' : item.badge === 'Showcase' ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30' : item.badge === 'Future' ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30' : item.badge === 'Enterprise' ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30' : item.badge === 'Industry' ? 'bg - orange - 500 / 20 text - orange - 400 border border - orange - 500 / 30' : 'bg - gray - 500 / 20 text - gray - 400 border border - gray - 500 / 30';
}`;
}> {item.badge;
}</span>)}<ChevronDown className= {`w - 4 h - 4 transition - transform duration - 200 $ {active_dropdown === item.name ? 'rotate - 180' : '';
}`;
}/> </button> {/* Dropdown Menu */;
}<AnimatePresence> {active_dropdown === item.name && (<motion.div)}</div> </div> <Link key= {child.name;
}href= {child.href;
}className= {`flex items - center gap - 3 p - 3 rounded - xl transition - all duration - 200 $ {child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
}`;
}on_click= {close_dropdowns;
}>)}</div> <ArrowRight className="w - 4 h - 4 opacity - 50" /> </a>) )}</div> </div> </motion.div>)}</AnimatePresence> </div>) )}</div> <Link key= {action.name;
}href= {action.href;
}className= {`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 $ {action.primary ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
}`;
}> </a> </div> </div> {/* Mobile Menu Button */;
}<button </button> </div> </div> {/* Mobile Menu */;
}<AnimatePresence> <span className= {`px - 2 py - 1 text - xs rounded - full $ {item.badge === 'New'? 'bg - green - 500 / 20 text - green - 400': item.badge === 'Hot'? 'bg - red - 500 / 20 text - red - 400': item.badge === 'Showcase'? 'bg - cyan - 500 / 20 text - cyan - 400': 'bg - gray - 500 / 20 text - gray - 400';
}`;
}> {item.badge;
}</span>)}</div> <ChevronDown className= {`w - 4 h - 4 transition - transform duration - 200 $ {active_dropdown === item.name ? 'rotate - 180': '';
}`;
}/> </button> {/* Mobile Dropdown */;
}<AnimatePresence> > {item.children?.map ( (child) => (<Link key= {child.name;
}href= {child.href;
}className= {`block p - 3 rounded - lg transition - colors duration - 200 $ {child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400': 'text - gray - 400 hover:text - white hover:bg - gray - 800 / 50';
}`;
}on_click= {closeMobileMenu;
}>)}</a>) )}</motion.div>)}</AnimatePresence> </div>) )}<Link key= {action.name;
}href= {action.href;
}className= {}
export default UltraFuturisticNavigation2035)}export default UltraFuturisticNavigation2035;export default UltraFuturisticNavigation2035;  )}export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0}}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0}}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-6">
                  {/* Mobile Navigation Items */}
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
<<<<<<< HEAD
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0}}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0}}
                            transition = $2;
export default UltraFuturisticNavigation2035,
=======
                        {activeDropdown === item && item.name && (
                                key={child && child.name}
                                href={child && child.href}`
                                className={`block p-3 rounded-lg transition-colors duration-200 ${'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'`
                                }`}
                                onClick={closeMobileMenu}>;'
                                <div className='font-medium'>{child && child.name}</div>
                                {child && child.description && (;'
                                  <div className='text-sm opacity-75 mt-1'>
                                    {child && child.description}"
                                  </div>                                )}                                <div className="font-medium">{child && child.name}</div>
                                {child && child.description && (;"
                                  <div className="text-sm opacity-75 mt-1">{child && child.description}</div>
child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}

                                }`}
                                onClick={closeMobileMen}

                                  />
<div className='font-medium'    />{child.name}</div>
                                {child.description && (<div className='text-sm opacity-75 mt-1'    />;}
                                    {child.description}

                                  </div>
                                )}
                              </Link>

                              </Link>
                            ))}
                          </motion && motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  {/* Mobile Quick Actions */}
                  <div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3'>
                      {quickActions.map(action => (                        <Link                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <Link
                          key={action.name}
                          href={action.href}
                        <Link
                          key={action && action.name}
                          href={action && action.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${action && action.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';}
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50';}
                          }`}
                          onClick={closeMobileMenu}    />
                          {action && action.icon}
                          <span    />{action && action.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Mobile Contact Info */}
                  <div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3 text-sm text-gray-400'>
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200'
                      >
                        <Phone className='w-4 h-4' />
                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a
href={`mailto: ${contactInfo.email}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'
                          />
                        <Mail className='w-4 h-4'    />
                        <span    />{contactInfo.email}</span>
                      </a>
                      <div className='flex items-center gap-3 p-3 rounded-lg'    />
                        <MapPin className='w-4 h-4'    />
                        <span className='text-sm'    />{contactInfo.address}</span>
=======
                          href={action && action.href}`
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${}
                            action && action.primary'
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white''
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'`
                          }`}
                          onClick={closeMobileMenu}>;
                          {action && action.icon}
                          <span>{action && action.name}</span>;
                        </Link>;
                      ))}
                  {/* Mobile Contact Info */}'
                  <div className='pt-4 border-t border-gray-800/50'>;'
                    <div className='space-y-3 text-sm text-gray-400'>;
<<<<<<< HEAD
<div className='pt-4 border-t border-gray-800/50'>
                    <div className='space-y-3 text-sm text-gray-400'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      <a
=======
                      <a;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a;`
                        href={`mailto:${contactInfo && contactInfo.email}`}'
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'>;'
                        <Mail className='w-4 h-4' />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </a>;'
                      <div className='flex items-center gap-3 p-3 rounded-lg'>;'
                        <MapPin className='w-4 h-4' />;'
                        <span className='text-sm'>{contactInfo && contactInfo.address}</span>                      </div>                        <span>{contactInfo && contactInfo.mobile}</span>;
                      </a>;"`
                      <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">;"
                        <Mail className="w-4 h-4" />;
                        <span>{contactInfo && contactInfo.email}</span>;
                      </a>;"
                      <div className="flex items-center gap-3 p-3 rounded-lg">;"
                        <MapPin className="w-4 h-4" />;"
                        <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion && motion.div>;
          )}
        </AnimatePresence>;
      </div>;
    </nav>;
  );
}
                        href={`mailto:${contactInfo.email}`}
                        className='flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'
                      >
                        <Mail className='w-4 h-4' />
                        <span>{contactInfo.email}</span>
                      </a>
                      <div className='flex items-center gap-3 p-3 rounded-lg'>
                        <MapPin className='w-4 h-4' />
                        <span className='text-sm'>{contactInfo.address}</span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
<<<<<<< HEAD
)
};

}, [])
}, []);"
</div> <div    /> <div className=\"text - xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent\"     /> Zion Tech Group </div> <div className=\"text - xs text - gray - 400\"     />Revolutionary Technology</div> </div> </a> > {}
  item.icon;}
}<span    /> {}
  item.name;}
}</span> {
  item.badge && (<span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
}`
}> {
  item.badge
}</span>)
}<ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180' : ''
}`
}/> </button> {
  /* Dropdown Menu */
}<AnimatePresence> {
  activeDropdown === item.name && (<motion.div)
}</div> </div> <Link key= {
  child.name
}href= {
  child.href
}className= {
  `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeDropdowns
}>)
}</div> <ArrowRight className="w-4 h-4 opacity-50" /> </a>) )
}</div> </div> </motion.div>)
}</AnimatePresence> </div>) )
}</div> <Link key= {
  action.name
}href= {
  action.href
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}> </a> </div> </div> {
  /* Mobile Menu Button */
}<button </button> </div> </div> {
  /* Mobile Menu */
}<AnimatePresence> <span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New'? 'bg-green-500/20 text-green-400': item.badge === 'Hot'? 'bg-red-500/20 text-red-400': item.badge === 'Showcase'? 'bg-cyan-500/20 text-cyan-400': 'bg-gray-500/20 text-gray-400'
}`
}> {
  item.badge
}</span>)
}</div> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180': ''
}`
}/> </button> {
  /* Mobile Dropdown */
}<AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name
}href= {
  child.href
}className= {
  `block p-3 rounded-lg transition-colors duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400': 'text-gray-400 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeMobileMenu
}>)
}</a>) )
}</motion.div>)
}</AnimatePresence> </div>) )
}<Link key= {
  action.name
}href= {
  action.href
}className= {
  `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white': 'text-gray-300 hover:text-white hover:bg-gray-800/50'
}`
}onClick= {
  closeMobileMenu
}>) )
}</div> </div> </div> </div> </div> </div> </div> </motion.div>)
}</AnimatePresence> </div> </nav>)
}
}`;
} /> {item.badge;}
}</span>)}<ChevronDown className= {`w - 4 h - 4 transition - transform duration - 200 $ {active_dropdown === item.name ? 'rotate - 180' : '';}
}`;
}/> </button> {/* Dropdown Menu */;}
}<AnimatePresence /> {active_dropdown === item.name && (<motion.div)}</div /> </div> <Link key= {child.name;}
}href= {child.href;}
}className= {`flex items - center gap - 3 p - 3 rounded - xl transition - all duration - 200 $ {child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';}
}`;
}on_click= {close_dropdowns;}"
} />)}</div> <ArrowRight className=\"w - 4 h - 4 opacity - 50\" /> </a>) )}</div> </div> </motion.div>)}</AnimatePresence> </div>) )}</div> <Link key= {action.name;}
}href= {action.href;}
}className= {`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 $ {action.primary ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';}
}`;
} /> </a> </div> </div> {/* Mobile Menu Button */;}
}<button </button /> </div> </div> {/* Mobile Menu */;}
}<AnimatePresence /> <span className= {`px - 2 py - 1 text - xs rounded - full $ {item.badge === 'New'? 'bg - green - 500 / 20 text - green - 400': item.badge === 'Hot'? 'bg - red - 500 / 20 text - red - 400': item.badge === 'Showcase'? 'bg - cyan - 500 / 20 text - cyan - 400': 'bg - gray - 500 / 20 text - gray - 400';}
}`;
} /> {item.badge;}
}</span>)}</div> <ChevronDown className= {`w - 4 h - 4 transition - transform duration - 200 $ {active_dropdown === item.name ? 'rotate - 180': '';}
}`;
}/> </button> {/* Mobile Dropdown */;}
}<AnimatePresence /> > {item.children?.map ( (child) => (<Link key= {child.name;}
}href= {child.href;}
}className= {`block p - 3 rounded - lg transition - colors duration - 200 $ {child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400': 'text - gray - 400 hover:text - white hover:bg - gray - 800 / 50';}
}`;
}on_click= {closeMobileMenu;}
} />)}</a>) )}</motion.div>)}</AnimatePresence> </div>) )}<Link key= {action.name;}
}href= {action.href;}
}className = {}
export default UltraFuturisticNavigation2035;
}
export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;  )}
export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;"