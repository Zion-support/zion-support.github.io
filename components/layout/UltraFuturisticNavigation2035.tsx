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
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean
}
  featured?: boolean;
  featured?: boolean;  featured?: boolean
}
  featured?: boolean;
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
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
  website: 'https://ziontechgroup.com', }  website: 'https://ziontechgroup.com';
}
;
const navigation_items: NavigationItem[] = [;
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
  },
  {
    name: 'Resources',
    href: '/resources',
        description: 'Proven results',
      },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      {
        name: 'Services Advertising',
        description: 'Features, benefits and market pricing links',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
      { name: 'Support', href: '/support', description: 'Help center' }
    ]
  },    icon: <BookOpen className="w-5 h-5" />
    description: 'Guides, reports and tools';
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' }
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' }
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' }
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  }
  {
    name: 'All Services',
    href: '/comprehensive - services - showcase - 2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
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
  },
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Building className='w-5 h-5' />,
    description: 'Industry-specific technology solutions',
    badge: 'Industry',
    children: [
      {
        name: 'Healthcare AI',
        href: '/healthcare-ai-solutions',
        description: 'AI-powered healthcare',
      },
      {
        name: 'Financial Technology',
        href: '/fintech-solutions',
        description: 'Next-gen fintech',
      },
      {
        name: 'Manufacturing AI',
        href: '/manufacturing-ai-solutions',
        description: 'Smart manufacturing',
      },
      {
        name: 'Retail Technology',
        href: '/innovative-business-solutions',
        description: 'Digital retail transformation',
      },
      {
        name: 'Education Technology',
        href: '/training',
        description: 'AI-powered learning',
      },
      {
        name: 'Government Solutions',
        href: '/enterprise-solutions-showcase',
        description: 'Public sector innovation',
      },
      {
        name: 'Energy & Utilities',
        href: '/quantum-energy',
        description: 'Sustainable energy tech',
      },
      {
        name: 'Biotech AI Research',
        href: '/biotech-ai',
        description: 'AI-driven biotech',
  }
  {
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
    href: '/ai - services',
    icon: <Brain className="w-5 h-5" />,
    badge: 'New',
    featured: true,
    children: [;
      {
        name: 'AI Customer Success Platform',
        href: '/ai - customer - success - platform',
        description: 'Predict and prevent churn with AI',
        featured: true,
      },
      {
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
    icon: <Rocket className="w-5 h-5" />,
    badge: 'Hot',
    featured: true,
    children: [;
      {
        name: 'Customer Success Platform',
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
        href: '/invoice - studio',
        description: 'Instant branded invoices and payments',
      },
    ],
  },
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
    icon: <Atom className="w-5 h-5" />,
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
    name: "name",
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
    name: 'Resources'
    href: '/resources'
    icon: <BookOpen className='w-5 h-5' />
    description: 'Documentation, support, and learning resources'
    children: [
    href: '/enterprise - it',
    icon: <Shield className="w-5 h-5" />,
    badge: 'Enterprise',
    featured: true,
    children: [;
      {
        name: 'Zero Trust Security',
        href: '/zero - trust - security - platform',
        description: 'Next - generation security architecture',
      },
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum - cloud - infrastructure',
        description: 'Quantum - enhanced cloud computing',
      },
      {
        name: 'Autonomous IT Operations',
        href: '/autonomous - it - operations - center',
        description: 'Self - managing IT infrastructure',
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge - computing - orchestration',
        description: 'Distributed edge computing',
      },
      {
        name: 'Blockchain Infrastructure',
        href: '/blockchain - infrastructure - platform',
        description: 'Enterprise blockchain solutions',
      },
      {
        name: 'AI - Powered DevOps',
        href: '/ai - powered - devops - platform',
        description: 'Intelligent development operations',
      },
      {
        name: 'Quantum Cybersecurity',
        href: '/quantum - cybersecurity - services',
        description: 'Next - gen quantum security',
      },
      {
        name: 'AI - Powered Cybersecurity',
        href: '/ai - powered - cybersecurity',
        description: 'Intelligent threat detection',
      },
    ],
  },
    name: 'Industry Solutions',
    href: '/industry - solutions',
    icon: <Building className='w - 5 h - 5' />,
    description: 'Industry - specific technology solutions',
    badge: 'Industry',
    children: [;
      {
        name: 'Healthcare AI',
        href: '/healthcare - ai - solutions',
        description: 'AI - powered healthcare',
      },
      {
        name: 'Financial Technology',
        href: '/fintech - solutions',
        description: 'Next - gen fintech',
      },
      {
        name: 'Manufacturing AI',
        href: '/manufacturing - ai - solutions',
        description: 'Smart manufacturing',
      },
      {
        name: 'Retail Technology',
        href: '/innovative - business - solutions',
        description: 'Digital retail transformation',
      },
      {
        name: 'Education Technology',
        href: '/training',
        description: 'AI - powered learning',
      },
      {
        name: 'Government Solutions',
        href: '/enterprise - solutions - showcase',
        description: 'Public sector innovation',
      },
      {
        name: 'Energy & Utilities',
        href: '/quantum - energy',
        description: 'Sustainable energy tech',
      },
      {
        name: 'Biotech AI Research',
        href: '/biotech - ai',
        description: 'AI - driven biotech',
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className='w - 5 h - 5' />,
    description: 'Documentation, support, and learning resources',
    children: [;
      {
        name: 'Documentation'
        href: '/docs'
        description: 'Technical documentation'
      }
      {
      {
        name: 'Support Center'
        href: '/support'
        description: 'Help and support'
      }
      {
        name: 'Training'
        href: '/training'
        description: 'Learning resources'
      }
      { name: 'Community', href: '/community', description: 'User community' }
    ]
  }
];
const UltraFuturisticNavigation2035: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }
  const closeDropdowns = () => {
    setActiveDropdown(null)
  };
  const closeMobileMenu = () => {
    setIsOpen(false);
    closeDropdowns()
  };
            {/* Desktop Navigation */}  };
  return (
    <nav aria-label="Primary" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl'
            {/* Desktop Navigation */}
                  <button
                    onClick={() => toggleDropdown(item && item.name)}
                    className='flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400'                  >;
                    {item && item.icon}
                    <span>{item && item.name}</span>;
                    {item && item.badge && (            <div className="hidden lg:flex items-center gap-8">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="relative group">;
                  <button
                    onClick={() => toggleDropdown(item && item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400";
                    {item && item.icon}
                    <span>{item && item.name}</span>;
                    {item && item.badge && (;
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item && item.badge === 'New'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : item && item.badge === 'Hot'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : item && item.badge === 'Showcase'
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : item && item.badge === 'Future'
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  : item && item.badge === 'Enterprise'
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : item && item.badge === 'Industry'
                                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>;
                        {item && item.badge}
                      </span>;
                    )}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item && item.name ? 'rotate-180' : ''
                      }`}
                    />                  </button>                      <spanclassName={`px-2 py-1 text-xs rounded-full ${
                        item && item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item && item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item && item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item && item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item && item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item && item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                  </button>
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'
                  {/* Dropdown Menu */}
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child && child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <div>
                              <h3 className="font-semibold text-white">{item.title |item.name}</h3>
                              {item.description && (
                                <p className="text-sm text-gray-400">{item.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child && child.name}
                                href={child && child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                                onClick={closeDropdowns}>;
                                {child && child.featured && (;
                                  <Star className='w-4 h-4 text-cyan-400' />;
                                )}
                                <div className='flex-1'>;
                                  <div className='font-medium'>;
                                    {child && child.name}
                                  </div>;
                                    <div className='text-sm opacity-75'>;
                                      {child && child.description}
                                    </div>;
                                  )}
                                </div>;
                                <ArrowRight className='w-4 h-4 opacity-50' />                              </Link>                                <ArrowRight className="w-4 h-4 opacity-50" />;
                              </Link>;
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
                    }`}
                  >;
                    {action && action.icon}
                    <span>{action && action.name}</span>;
                  </Link>;
                ))}
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>;
                <a
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'>;
                  <Phone className='w-4 h-4' />;
                  <span className='hidden xl:inline'>{contactInfo && contactInfo.mobile}</span>;
                </a>;
                <a
                    key={action.name}
                    href={action.href}
                    className={`flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 ${
                      action.primary;
                        ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25';
                        : 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
                    }`}
                  >;
                    {action.icon}
                    <span>{action.name}</span>;
                  </Link>))}
              </div>;
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
            </div>;
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
              aria-label='Toggle mobile menu'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200';
              aria-label='Toggle mobile menu';
            >;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200";
              aria-label="Toggle mobile menu";
            >;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
          </div>;
        </div>;
        {/* Mobile Menu */}
        <AnimatePresence>;
          {isOpen && (;
            <motion&& motion.div
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
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
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className='space-y-2'>
                            {item.children?.map(child => (                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'                                  child.featured
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                }`}
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            {/* Right Side Actions */}
            <div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}
            {/* Right Side Actions */}
            <div className='hidden lg:flex items-center gap-4'>
              {/* Quick Actions */}
              <div className='flex items-center gap-2'>
                  <Link
                    key={action.name}
                    href={action.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {action.icon}
                    <span>{action.name}</span>
                  </Link>
                ))}
              {/* Contact Info */}
              <div className='flex items-center gap-4 text-sm text-gray-400'>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200'
                >
                  <Phone className='w-4 h-4' />
                  <span className='hidden xl:inline'>{contactInfo.mobile}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='flex items-center gap-2 hover:text-purple-400 transition-colors duration-200'
                >
                  <Mail className='w-4 h-4' />
                  <span className='hidden xl:inline'>{contactInfo.email}</span>                </a>              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
              aria-label='Toggle mobile menu'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />                      </button>                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                        />                      </button>                        <ChevronDownclassName={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item && item.name ? 'rotate-180' : ''
                        }`} />;
                      </button>;
                      {/* Mobile Dropdown */}
                      <AnimatePresence>;
                        {activeDropdown === item && item.name && (;
                          <motion&& motion.div
                              <Link
                                key={child && child.name}
                                href={child && child.href}
                                className={`block p-3 rounded-lg transition-colors duration-200 ${
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
                                )}
                              </Link>
                              </Link>;
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ))}
                          key={action.name}
                          href={action.href}
                        <Link
                          key={action && action.name}
                          href={action && action.href}
                          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            action && action.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
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
  );
}
}, []);
}
;
}, []);
</div> <div> <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip-text text-transparent" > Zion Tech Group </div> <div className="text - xs text-gray-400" >Revolutionary Technology</div> </div> </a> > {
  item.icon;
}<span> {
  item.name;
}</span> {
  item.badge && (<span className= {
  `px - 2 py - 1 text - xs rounded - full $ {
  item.badge === 'New' ? 'bg - green - 500 / 20 text - green - 400 border border - green - 500 / 30' : item.badge === 'Hot' ? 'bg - red - 500 / 20 text - red - 400 border border - red - 500 / 30' : item.badge === 'Showcase' ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 30' : item.badge === 'Future' ? 'bg - purple - 500 / 20 text - purple - 400 border border - purple - 500 / 30' : item.badge === 'Enterprise' ? 'bg - blue - 500 / 20 text - blue - 400 border border - blue - 500 / 30' : item.badge === 'Industry' ? 'bg - orange - 500 / 20 text - orange - 400 border border - orange - 500 / 30' : 'bg - gray - 500 / 20 text - gray - 400 border border - gray - 500 / 30';
}`;
}> {
  item.badge;
}</span>);
}<ChevronDown className= {
  `w - 4 h - 4 transition - transform duration - 200 $ {
  active_dropdown === item.name ? 'rotate - 180' : '';
}`;
}/> </button> {
  /* Dropdown Menu */;
}<AnimatePresence> {
  active_dropdown === item.name && (<motion.div);
}</div> </div> <Link key= {
  child.name;
}href= {
  child.href;
}className= {
  `flex items - center gap - 3 p - 3 rounded - xl transition - all duration - 200 $ {
  child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 text - cyan - 400 hover:bg - cyan - 500 / 20': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
}`;
}on_click= {
  close_dropdowns;
}>);
}</div> <ArrowRight className="w - 4 h-4 opacity-50" /> </a>) );
}</div> </div> </motion.div>);
}</AnimatePresence> </div>) );
}</div> <Link key= {
  action.name;
}href= {
  action.href;
}className= {
  `flex items - center gap - 2 px - 4 py - 2 rounded - xl text - sm font - medium transition - all duration - 200 $ {
  action.primary ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white hover:from - cyan - 600 hover:to - blue - 600 shadow - lg shadow - cyan - 500 / 25': 'text - gray - 300 hover:text - white hover:bg - gray - 800 / 50';
}`;
}> </a> </div> </div> {
  /* Mobile Menu Button */;
}<button </button> </div> </div> {
  /* Mobile Menu */;
}<AnimatePresence> <span className= {
  `px - 2 py - 1 text - xs rounded - full $ {
  item.badge === 'New'? 'bg - green - 500 / 20 text - green - 400': item.badge === 'Hot'? 'bg - red - 500 / 20 text - red - 400': item.badge === 'Showcase'? 'bg - cyan - 500 / 20 text - cyan - 400': 'bg - gray - 500 / 20 text - gray - 400';
}`;
}> {
  item.badge;
}</span>);
}</div> <ChevronDown className= {
  `w - 4 h - 4 transition - transform duration - 200 $ {
  active_dropdown === item.name ? 'rotate - 180': '';
}`;
}/> </button> {
  /* Mobile Dropdown */;
}<AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name;
}href= {
  child.href;
}className= {
  `block p - 3 rounded - lg transition - colors duration - 200 $ {
  child.featured ? 'bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 text - cyan - 400': 'text - gray - 400 hover:text - white hover:bg - gray - 800 / 50';
}`;
}on_click= {
  closeMobileMenu;
}>);
}</a>) );
}</motion.div>);
}</AnimatePresence> </div>) );
}<Link key= {
  action.name;
}href= {
  action.href;
}className= {
}
export default UltraFuturisticNavigation2035);
}
;
export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;  )
};
export default UltraFuturisticNavigation2035;
export default UltraFuturisticNavigation2035;