
<<<<<<< HEAD

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {

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
import React, { useState } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

import {


  Menu
  X
  Search
  ChevronDown
  ChevronRight
  Home
  Users
  Settings
  HelpCircle
  Mail
  Phone
  MapPin
  BookOpen
  MessageCircle
  Star
  TrendingUp
  Layers
  Cpu
  Database
  Cloud
  Lock
  Shield
  Globe
  Factory
  Car
  Building
  GraduationCap
  Scale
  Palette
  Camera
  Video
  Music
  Gamepad2
  Heart
  Leaf
  Sun
  Moon
  Wind
  Droplets
  Mountain
  Code
  Wrench
  Smartphone
  BarChart3
  Eye
  Globe2
  Zap
  Rocket
  Brain
  Sparkles
  ShieldCheck
  Target
  Users2
  Briefcase
  Lightbulb
  Award
  Clock
  CheckCircle;} from 'lucide-react';import {


  Menu, X, Search, ChevronDown, ChevronRight;

origin/cursor/automate-test-improve-and-merge-code-2533
=======
import React, { useState } from 'react';


import React, { useState } from 'react',
>>>>>>> origin/cursor/delete-old-data-records-6bba

  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;

import {Menu,X,Search,ChevronDown,ChevronRight,Home,Users,Settings,HelpCircle,Mail,Phone,MapPin,BookOpen,MessageCircle,Star,TrendingUp,Layers,Cpu,Database,Cloud,Lock,Shield,Globe,Factory,Car,Building,GraduationCap,Scale,Palette,Camera,Video,Music,Gamepad2,Heart,Leaf,Sun,Moon,Wind,Droplets,Mountain,Code,Wrench,Smartphone,BarChart3,Eye,Globe2,Zap,Rocket,Brain,Sparkles,ShieldCheck,Target,Users2,Briefcase,Lightbulb,Award,Menu, X, Search, ChevronDown, ChevronRight;import React, { useState } from react',import Link from 'next/link;
import { motion, AnimatePresence  } from framer-motion';
import { Menu, X, Search, ChevronDown, ChevronRight;Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;
<<<<<<< HEAD


=======
  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  BookOpen, MessageCircle, Star, TrendingUp;
  Layers, Cpu, Database, Cloud, Lock, Shield;
  Globe, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2;
<<<<<<< HEAD
=======
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
}
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle}
 } from 'lucide-react';
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle


  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;icon: Target,color: 'from-green-600 via-yellow-600 to-orange-600',description: 'Cutting-edge micro solutions',services: [;
      'Advanced Research Automation',Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle;
  } from 'lucide-react';
const contactInfo = null;
{name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3, 999/month';
}
{'name': 'AI Creativity Orchestrator', 'href': '/services/ai-creativity-orchestrator', 'description': 'Multi-model creativity fusion', 'price': '$5, 999/month';'
}
{'name': 'AI Autonomous Business Manager', 'href': '/services/ai-autonomous-business-manager', 'description': 'Fully autonomous business operations', 'price': '$12, 999/month';'
}];
}
{'title': '⚛️ 2029 Quantum & Emerging Tech', 'icon': Globe, 'color': 'from-indigo-600 via-blue-600 to-cyan-600', 'description': 'Quantum computing and beyond', 'services': [ {'name': 'Quantum Internet Security Gateway', 'href': '/services/quantum-internet-security-gateway', 'description': 'Unbreakable quantum encryption', 'price': '$15, 999/month';'
}
{'name': 'Biotech DNA Computing Platform', 'href': '/services/biotech-dna-computing-platform', 'description': 'DNA-based computation', 'price': '$25, 999/month';'
}
{'name': 'Quantum Financial Trading Platform', 'href': '/services/quantum-financial-trading-platform', 'description': 'Quantum-powered trading algorithms', 'price': '$35, 999/month';'
}
{'name': 'Quantum Creativity Studio', 'href': '/services/quantum-creativity-studio', 'description': 'Quantum-enhanced creativity', 'price': '$1, 999/month';'
}];
}
{'title': '🏙️ 2029 Enterprise IT Solutions', 'icon': Cpu, 'color': 'from-blue-600 via-cyan-600 to-teal-600', 'description': 'Autonomous enterprise infrastructure', 'services': [ {'name': 'AI Business Intelligence Suite', 'href': '/services/ai-business-intelligence-suite', 'description': 'Intelligent insights and analytics', 'price': '$2, 499/month';'
}
{'name': 'Smart Supply Chain Optimization', 'href': '/services/smart-supply-chain-optimization', 'description': 'AI-powered supply chain intelligence', 'price': '$3, 999/month';'
}
{'name': 'Intelligent HR Management System', 'href': '/services/intelligent-hr-management-system', 'description': 'AI-powered HR optimization', 'price': '$1, 599/month';'
}
{'name': 'Smart Financial Management Platform', 'href': '/services/smart-financial-management-platform', 'description': 'AI-powered financial planning', 'price': '$2, 999/month';'
}];
}
{'title': '🌌 2029 Space & Metaverse Tech', 'icon': Rocket, 'color': 'from-teal-600 via-emerald-600 to-green-600', 'description': 'Space exploration and digital reality', 'services': [ {'name': 'Space Mining Automation Platform', 'href': '/services/space-mining-automation-platform', 'description': 'Automated asteroid mining', 'price': '$45, 999/month';'
}
{'name': 'Metaverse Digital Reality Platform', 'href': '/services/metaverse-digital-reality-platform', 'description': 'Immersive virtual worlds', 'price': '$8, 999/month';'
}
{'name': 'AI Predictive Health Analytics', 'href': '/services/ai-predictive-health-analytics', 'description': 'Predictive health outcomes', 'price': '$7, 999/month';'
}
{'name': 'Virtual Event Hologram Platform', 'href': '/services/virtual-event-hologram-platform', 'description': 'Holographic event experiences', 'price': '$2, 999/month';'
}];
}
{'title': '🎯 2029 Innovative Micro SAAS', 'icon': Target, 'color': 'from-green-600 via-yellow-600 to-orange-600', 'description': 'Cutting-edge micro solutions', 'services': [ {'name': 'Intelligent Customer Experience Platform', 'href': '/services/intelligent-customer-experience-platform', 'description': 'AI-powered customer journey optimization', 'price': '$1, 899/month';'
}
{'name': 'Intelligent Marketing Automation', 'href': '/services/intelligent-marketing-automation', 'description': 'AI-powered marketing optimization', 'price': '$1, 299/month';'
}
{'name': 'Smart Project Management', 'href': '/services/smart-project-management', 'description': 'AI-powered project optimization', 'price': '$899/month';'
}
{'name': 'Intelligent Sales Optimization', 'href': '/services/intelligent-sales-optimization', 'description': 'AI-powered sales intelligence', 'price': '$1, 799/month';'
}];
}
> <Link href='/' className='flex items-center space-x-3 group' > <div className='relative' > <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-'hover': scale-110 transition-transform duration-300' > <Rocket className='w-7 h-7 text-white' /> </div> <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-'hover':opacity-75 transition-opacity duration-300' /> </div> <div className='hidden 'sm':block' > <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' > Zion Tech Group </h1> <p className='text-xs text-gray-400' >Future Technology Solutions</p> </div> </a> </motion.div> </motion.div>) ,'
}</div> /> </div> {/* Contact Button */;
}<motion.div initial= {'title': '🚀 2029 Futuristic AI Services','icon': Brain,'color': 'from-violet-600 via-purple-600 to-indigo-600','description': 'Next-generation AI consciousness and creativity','services': [;'
{'name': 'AI Consciousness Evolution Platform','href': '/services/ai-consciousness-evolution-platform','description': 'Develop genuine AI consciousness','price': '$19,999/month'},{'name': 'AI Emotional Intelligence Platform';'
        }
        'href': '/services/ai-emotional-intelligence-platform';'
        'description': 'Real-time emotion analysis and response';'
        'price': '$3,999/month';'
      }
import React, { useState } from react';
import Link from 'next/link;
import { motion, AnimatePresence } from framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight,
  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin,
  BookOpen, MessageCircle, Star, TrendingUp,
  Layers, Cpu, Database, Cloud, Lock, Shield,
  Globe, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2,
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target,
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle
} from 'lucide-react,
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
  {
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' };
      { name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' };
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' };
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  };
  {

const serviceCategories = [
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD
=======
const serviceCategories = $2;
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    title: '🌌 2029 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
<<<<<<< HEAD

    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600','
    description: 'Cutting-edge micro solutions',
    services: [
      'Advanced Research Automation',
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle
 } from 'lucide-react';
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle

    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',


      'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite',
    ],



  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];

=======

  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];

  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
}
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle}
 } from 'lucide-react';

const contactInfo = null;
{name: 'AI Emotional Intelligence Platform',
  href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response'}
  price: '$3, 999/month';}
}
{name: 'AI Creativity Orchestrator',
  href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion'}
  price: '$5, 999/month';}
}
{name: 'AI Autonomous Business Manager',
  href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations'}
  price: '$12, 999/month';}
}];
}
{title: '⚛️ 2029 Quantum & Emerging Tech',
  icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600',
  description: 'Quantum computing and beyond', services: [ {name: 'Quantum Internet Security Gateway',
  href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption'}
  price: '$15, 999/month';}
}
{name: 'Biotech DNA Computing Platform',
  href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation'}
  price: '$25, 999/month';}
}
{name: 'Quantum Financial Trading Platform',
  href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms'}
  price: '$35, 999/month';}
}
{name: 'Quantum Creativity Studio',
  href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity'}
  price: '$1, 999/month';}
}];
}
{title: '🏙️ 2029 Enterprise IT Solutions',
  icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600',
  description: 'Autonomous enterprise infrastructure', services: [ {name: 'AI Business Intelligence Suite',
  href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics'}
  price: '$2, 499/month';}
}
{name: 'Smart Supply Chain Optimization',
  href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence'}
  price: '$3, 999/month';}
}
{name: 'Intelligent HR Management System',
  href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization'}
  price: '$1, 599/month';}
}
{name: 'Smart Financial Management Platform',
  href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning'}
  price: '$2, 999/month';}
}];
}
{title: '🌌 2029 Space & Metaverse Tech',
  icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600',
  description: 'Space exploration and digital reality', services: [ {name: 'Space Mining Automation Platform',
  href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining'}
  price: '$45, 999/month';}
}
{name: 'Metaverse Digital Reality Platform',
  href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds'}
  price: '$8, 999/month';}
}
{name: 'AI Predictive Health Analytics',
  href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes'}
  price: '$7, 999/month';}
}
{name: 'Virtual Event Hologram Platform',
  href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences'}
  price: '$2, 999/month';}
}];
}
{title: '🎯 2029 Innovative Micro SAAS',
  icon: Target, color: 'from-green-600 via-yellow-600 to-orange-600',
  description: 'Cutting-edge micro solutions', services: [ {name: 'Intelligent Customer Experience Platform',
  href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization'}
  price: '$1, 899/month';}
}
{name: 'Intelligent Marketing Automation',
  href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization'}
  price: '$1, 299/month';}
}
{name: 'Smart Project Management',
  href: '/services/smart-project-management', description: 'AI-powered project optimization'}
  price: '$899/month';}
}
{name: 'Intelligent Sales Optimization',
  href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence'}
  price: '$1, 799/month';}
}];
}
> <Link href=\"/\" className=\"flex items-center space-x-3 group\"     /> <div className=\"relative\"     /> <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover: scale-110 transition-transform duration-300\"     /> <Rocket className=\"w-7 h-7 text-white\"    /> </div> <div className=\"absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300\"    /> </div> <div className=\"hidden sm:block\"     /> <h1 className=\"text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\"     /> Zion Tech Group </h1> <p className=\"text-xs text-gray-400\"     />Future Technology Solutions</p> </div> </a> </motion.div> </motion.div>) 
}</div> /> </div> {/* Contact Button */;}
}<motion.div initial= {{title: '🚀 2029 Futuristic AI Services',
  icon: Brain,color: 'from-violet-600 via-purple-600 to-indigo-600'}
  description: 'Next-generation AI consciousness and creativity',services: [;}
{name: 'AI Consciousness Evolution Platform',
  href: '/services/ai-consciousness-evolution-platform',description: 'Develop genuine AI consciousness'}
  price: '$19,999/month'},{name: 'AI Emotional Intelligence Platform';
        href: '/services/ai-emotional-intelligence-platform';
        description: 'Real-time emotion analysis and response';}
        price: '$3,999/month';}
      }
      {name: 'AI Creativity Orchestrator';
        href: '/services/ai-creativity-orchestrator';
        description: 'Multi-model creativity fusion';}
        price: '$5,999/month';}
      }
      {name: 'AI Autonomous Business Manager',
  href: '/services/ai-autonomous-business-manager',description: 'Fully autonomous business operations'}
  price: '$12,999/month'}]},{title: '⚛️ 2029 Quantum & Emerging Tech',
  icon: Globe,color: 'from-indigo-600 via-blue-600 to-cyan-600'}
  description: 'Quantum computing and beyond',services: [;}
{name: 'Quantum Internet Security Gateway',
  href: '/services/quantum-internet-security-gateway',description: 'Unbreakable quantum encryption'}
  price: '$15,999/month'},{name: 'Biotech DNA Computing Platform';
        href: '/services/biotech-dna-computing-platform';
        description: 'DNA-based computation';}
        price: '$25,999/month';}
      }
      {name: 'Quantum Financial Trading Platform';
        href: '/services/quantum-financial-trading-platform';
        description: 'Quantum-powered trading algorithms';}
        price: '$35,999/month';}
      }
      {name: 'Quantum Creativity Studio',
  href: '/services/quantum-creativity-studio',description: 'Quantum-enhanced creativity'}
  price: '$1,999/month'}]},{title: '🏙️ 2029 Enterprise IT Solutions',
  icon: Cpu,color: 'from-blue-600 via-cyan-600 to-teal-600'}
  description: 'Autonomous enterprise infrastructure',services: [;}
{name: 'AI Business Intelligence Suite',
  href: '/services/ai-business-intelligence-suite',description: 'Intelligent insights and analytics'}
  price: '$2,499/month'},{name: 'Smart Supply Chain Optimization';
        href: '/services/smart-supply-chain-optimization';
        description: 'AI-powered supply chain intelligence';}
        price: '$3,999/month';}
      }
      {name: 'Intelligent HR Management System';
        href: '/services/intelligent-hr-management-system';
        description: 'AI-powered HR optimization';}
        price: '$1,599/month';}
      }
      {name: 'Smart Financial Management Platform',
  href: '/services/smart-financial-management-platform',description: 'AI-powered financial planning'}
  price: '$2,999/month'}]},{title: '🌌 2029 Space & Metaverse Tech',
  icon: Rocket,color: 'from-teal-600 via-emerald-600 to-green-600'}
  description: 'Space exploration and digital reality',services: [;}
{name: 'Space Mining Automation Platform',
  href: '/services/space-mining-automation-platform',description: 'Automated asteroid mining'}
  price: '$45,999/month'},{name: 'Metaverse Digital Reality Platform';
        href: '/services/metaverse-digital-reality-platform';
        description: 'Immersive virtual worlds';}
        price: '$8,999/month';}
      }
      {name: 'AI Predictive Health Analytics';
        href: '/services/ai-predictive-health-analytics';
        description: 'Predictive health outcomes';}
        price: '$7,999/month';}
      }
      {name: 'Virtual Event Hologram Platform',
  href: '/services/virtual-event-hologram-platform',description: 'Holographic event experiences'}
  price: '$2,999/month'}]},{title: '🎯 2029 Innovative Micro SAAS',
  icon: Target,color: 'from-green-600 via-yellow-600 to-orange-600'}
  description: 'Cutting-edge micro solutions',services: [;}
{name: 'Intelligent Customer Experience Platform',
  href: '/services/intelligent-customer-experience-platform',description: 'AI-powered customer journey optimization'}
  price: '$1,899/month'},{name: 'Intelligent Marketing Automation';
        href: '/services/intelligent-marketing-automation';
        description: 'AI-powered marketing optimization';}
        price: '$1,299/month';}
      }
      {name: 'Smart Project Management';
        href: '/services/smart-project-management';
        description: 'AI-powered project optimization';}
        price: '$899/month';}
      }

      {
        name: 'Intelligent Sales Optimization',
  href: '/services/intelligent-sales-optimization',
        description: 'AI-powered sales intelligence'}
  price: '$1,799/month'}
      }
    ]
  },
  {
    title: '🔬 2029 Research & Development',
  icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
  description: 'Breakthrough research solutions',
    services: [
'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite'
    ]}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
];
;
const main_navigation = [;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai - solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },
  { name: 'Space Tech', href: '/space - tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro - saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },

}
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle}
 } from 'lucide-react';
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle

<<<<<<< HEAD


const quickLinks = [


  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },





export default function UltraFuturisticNavigation2029V2() {
  }
];const main_navigation = [;
  { name: 'Home', href: '/', icon: Home },{ name: 'Services', href: '/services', icon: Briefcase },{ name: 'AI Solutions', href: '/ai - solutions', icon: Brain },{ name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },{ name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },{ name: 'Space Tech', href: '/space - tech', icon: Rocket },{ name: 'Micro SAAS', href: '/micro - saas', icon: Target },{ name: 'Innovations', href: '/innovations', icon: Sparkles },{ name: 'About', href: '/about', icon: Users },const quickLinks = [;
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }},];
const mainNavigation = [;
  { name: 'Home', href: '/', icon: Home },{ name: 'Services', href: '/services', icon: Briefcase },{ name: 'AI Solutions', href: '/ai-solutions', icon: Brain },{ name: 'Quantum Tech', href: '/quantum-tech', icon: Globe },{ name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu },{ name: 'Space Tech', href: '/space-tech', icon: Rocket },{ name: 'Micro SAAS', href: '/micro-saas', icon: Target },{ name: 'Innovations', href: '/innovations', icon: Sparkles },{ name: 'About', href: '/about', icon: Users },{ name: 'Contact', href: '/contact', icon: MessageCircle },];
const quickLinks = [;
  { name: 'About Us', href: '/about', icon: Users },{ name: 'Case Studies', href: '/case-studies', icon: BookOpen },{ name: 'Blog', href: '/blog', icon: BookOpen },{ name: 'News', href: '/news', icon: TrendingUp },{ name: 'Careers', href: '/careers', icon: GraduationCap },{ name: 'Support', href: '/support', icon: MessageCircle },];
  { name: 'About Us', href: '/about', icon: Users },{ name: 'Case Studies', href: '/case - studies', icon: BookOpen },{ name: 'Blog', href: '/blog', icon: BookOpen },{ name: 'News', href: '/news', icon: TrendingUp },{ name: 'Careers', href: '/careers', icon: GraduationCap },export default function UltraFuturisticNavigation2029V2() {const [isOpen, setIsOpen] = useState(false)const [isOpen, setIsOpen] = useState(false)const [activeCategory, setActiveCategory] = useState<string | null>(null)const [searchQuery, setSearchQuery] = useState('')const toggleMenu = () => setIsOpen(!isOpen)const closeMenu  = () => setIsOpen(false)return (<nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'>;
  { name: 'Careers', href: '/careers', icon: GraduationCap },

export default function UltraFuturisticNavigation2029V2() {}

=======
const mainNavigation = [
  { name: 'Home'}
  href: '/', icon: Home}
},
  { name: 'Services'}
  href: '/services', icon: Briefcase}
},
  { name: 'AI Solutions'}
  href: '/ai-solutions', icon: Brain}
},
  { name: 'Quantum Tech'}
  href: '/quantum-tech', icon: Globe}
},
  { name: 'Enterprise IT'}
  href: '/enterprise-it', icon: Cpu}
},
  { name: 'Space Tech'}
  href: '/space-tech', icon: Rocket}
},
  { name: 'Micro SAAS'}
  href: '/micro-saas', icon: Target}
},
  { name: 'Innovations'}
  href: '/innovations', icon: Sparkles}
},
  { name: 'About'}
  href: '/about', icon: Users}
},
{ name: 'Contact'}
  href: '/contact', icon: MessageCircle}
}
];

>>>>>>> origin/cursor/delete-old-data-records-6bba

const quickLinks = [
  { name: 'About Us'}
  href: '/about', icon: Users}
},
  { name: 'Case Studies'}
  href: '/case-studies', icon: BookOpen}
},
  { name: 'Blog'}
  href: '/blog', icon: BookOpen}
},
  { name: 'News'}
  href: '/news', icon: TrendingUp}
},
  { name: 'Careers'}
  href: '/careers', icon: GraduationCap}
},
{ name: 'Support'}
  href: '/support', icon: MessageCircle}
}
];
  { name: 'About Us'}
  href: '/about', icon: Users}
},
  { name: 'Case Studies'}
  href: '/case - studies', icon: BookOpen}
},
  { name: 'Blog'}
  href: '/blog', icon: BookOpen}
},
  { name: 'News'}
  href: '/news', icon: TrendingUp}
},
  { name: 'Careers'}
  href: '/careers', icon: GraduationCap}
},

export default function UltraFuturisticNavigation2029V2() {
<<<<<<< HEAD

  const [isOpen, setIsOpen] = useState(false);
=======
  const [isOpen, setIsOpen] = useState(false);
const quickLinks = [
  { name: Contact, href: '/contact', icon: MessageCircle }];  { name: Contact, href: '/contact', icon: MessageCircle }
const main_navigation = [;
  { name: Home', href: '/, icon: Home },
  { name: 'Services', href: /services, icon: Briefcase },'
  { name: 'AI Solutions, href: /ai - solutions', icon: Brain },'
  { name: Quantum Tech, href: '/quantum - tech', icon: Globe },
  { name: Enterprise IT', href: '/enterprise - it, icon: Cpu },
  { name: 'Space Tech', href: /space - tech, icon: Rocket },'
  { name: 'Micro SAAS, href: /micro - saas', icon: Target },'
  { name: Innovations, href: '/innovations', icon: Sparkles },
  { name: About', href: '/about, icon: Users },
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (



            className='flex-shrink-0'


=======
  { name: 'Careers', href: /careers, icon: GraduationCap },

export default function UltraFuturisticNavigation2029V2() {}
  const [isOpen, setIsOpen] = useState(false);



>>>>>>> origin/cursor/delete-old-data-records-6bba
          >
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
           />
            <Link href='/' className='flex items-center space-x-3 group' />
              <div className='relative' />
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300' />
                  <Rocket className='w-7 h-7 text-white' />
                </div>'
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />
              </div>'
              <div className='hidden sm:block'>'
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Zion Tech Group;
                </h1>'
                <p className='text-xs text-gray-400'>
                  Future Technology Solutions;
                  <Rocket className='w-7 h-7 text-white />
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />

                </p>              </div>          >
<<<<<<< HEAD

                animate={{ opacity: 1, y: 0 }}

transition={{
                  duration: 0.5,
                  delay: mainNavigation.indexOf(item) * 0.1,
=======
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20>
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=flex justify-between items-center h-20">
          {/* Logo */}

            className="flex-shrink-0
          >
            <Link href="/" className=flex items-center space-x-3 group>"
              <div className="relative>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: mainNavigation.indexOf(item) * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10"
                >
                  <item.icon className="w-4 h-4" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </p>              </div>          >
    <nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'>
      {/* Main Navigation Bar */}'
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>'
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}

<<<<<<< HEAD
=======
const [activeCategory, setActiveCategory] = useState<string | null>(null);

const [searchQuery, setSearchQuery] = useState('');

const toggleMenu = () => setIsOpen(!isOpen);

const closeMenu = () => setIsOpen(false);

  return (
<nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'    />}
}
      {/* Main Navigation Bar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
        <div className='flex justify-between items-center h-20'    />;
          {/* Logo */}
          <motion.div;
            initial={{ opacity: 0, x: -20 }
}
            animate={{ opacity: 1, x: 0 }}

            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                  <Rocket className=w-7 h-7 text-white" />
                </div>"
                <div className=absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 />
              </div>"
              <div className="hidden sm:block>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group;
                </h1>
                <p className=text-xs text-gray-400">Future Technology Solutions</p>
                </p>
origin/cursor/automate-test-improve-and-merge-code-2533
                <p className=text-xs text-gray-400 />
            transition={{ duration: 0.5 }}

className='flex-shrink-0'
              />
            <Link href='/' className='flex items-center space-x-3 group'    />
              <div className='relative'    />
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'    />
                  <Rocket className='w-7 h-7 text-white'    />
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'    />
              </div>
              <div className='hidden sm:block'    />
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
                  Zion Tech Group;
                </h1>
                <p className='text-xs text-gray-400'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Future Technology Solutions;
                </p>
              </div>
            </Link>
          </motion.div>
<<<<<<< HEAD

          {/* Desktop Navigation */}

<div className='hidden lg:flex items-center space-x-8'    />

=======

          {/* Desktop Navigation */}'
          <div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div;
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                }}'
                className='relative group';
                <Link;
                  href={item.href}
            {/* Search */}'
            <div className='relative>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;
              <input
                type=text''
                placeholder=Search services...
                value={searchQuery}
            {mainNavigation.map((item) => (
<div className='hidden lg:flex items-center space-x-8'>
            {mainNavigation.map(item => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <motion.div
              <motion.div;
                key={item.name}
                initial={ opacity: 0;, y: -20 ;}
                animate={ opacity: 1;, y: 0 ;}

<div className=hidden lg:flex items-center space-x-8 />
          {/* Desktop Navigation */}

<div className='hidden lg:flex items-center space-x-8'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {mainNavigation.map(item => (
              <motion.div;}
key={item.nam}
}
                initial={{ opacity: 0, y: -20 }
}
                animate={{ opacity: 1, y: 0 }
}

transition={{
<<<<<<< HEAD


=======
                  duration: 0.5;}
                  delay: mainNavigation.indexOf(item) * 0.1;}
                }}
                className='relative group'
                <Link
                  href={item.href}
                  className=flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10
                >
                  <item.icon className='w-4 h-4' />
className='flex-shrink-0';
          >;


            transition={{ duration: 0 && 0.5 }}
            className='flex-shrink-0'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                  <Rocket className='w-7 h-7 text-white' />;
                </div>;
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />;
              </div>;
              <div className='hidden sm:block'>;
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text-xs text-gray-400'>;
                  Future Technology Solutions;
                </p>              </div>          >;
    <nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'>;
      {/* Main Navigation Bar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex justify-between items-center h-20'>;
          {/* Logo */}
          <motion.div;
            initial={ opacity: 0, x: -20 }
            animate={ opacity: 1, x: 0 }
            transition={ duration: 0.5 }
            className='flex-shrink-0';
          >;
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                  <Rocket className='w-7 h-7 text-white' />;
                </div>;
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />;
              </div>;
              <div className='hidden sm:block'>;
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className="text-xs text-gray-400">Future Technology Solutions</p>;
<<<<<<< HEAD

              </div>;
            </Link>;
          </motion && motion.div>;

=======
                </p>;
              </div>;
            </Link>;
          </motion.div>;
          {/* Desktop Navigation */}<div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div;
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                transition={{
  { name: 'Support', href: '/support', icon: MessageCircle }, ];  { name: 'Support', href: '/support', icon: MessageCircle }
];
;
export default /**
 * UltraFuturisticNavigation2029V2 - Function description
 */
function UltraFuturisticNavigation2029V2() {
  const [is_open, setIsOpen] = useState (false);
  const [active_category, setActiveCategory] = useState < string | null>(null);
  const [search_query, setSearchQuery] = useState ('');
;
  const toggle_menu = () =>: any setIsOpen (!is_open);
  const close_menu = () =>: any setIsOpen (false);
;
  return (
    <nav className='relative z - 50 bg - black / 80 backdrop - blur - xl border - b border - cyan - 500 / 20'>;
      {/* Main Navigation Bar */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='flex justify - between items - center h - 20'>          {/* Logo */}    <nav className="relative z - 50 bg - black / 80 backdrop - blur - xl border - b border - cyan - 500 / 20">;
      {/* Main Navigation Bar */}
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex justify - between items - center h - 20">;
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -20 }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex - shrink - 0';
          >;
            <Link href='/' className='flex items - center space - x-3 group'>;
              <div className='relative'>;
                <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                  <Rocket className='w - 7 h - 7 text - white' />;
                </div>;
                <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300' />;
              </div>;
              <div className='hidden sm:block'>;
                <h1 className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </h1>;
                <p className='text - xs text - gray - 400'>;
                  Future Technology Solutions;
                </p>              </div>          >;
            <Link href="/" className="flex items - center space - x-3 group">;
              <div className="relative">;
                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300">;
                  <Rocket className="w - 7 h - 7 text - white" />;
                </div>;
                <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300" />;
              </div>;
              <div className="hidden sm:block">;
                <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </h1>;
                <p className="text - xs text - gray - 400">Future Technology Solutions</p>;
              </div>;
            </Link>;
          </motion.div>;
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items - center space - x-8'>;
            {main_navigation.map (item => (              <motion.div;
                key={item.name}
                initial={{ opacity: 0, coordinate_y: -20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}          <div className="hidden lg:flex items - center space - x-8">;
            {main_navigation.map ((item) => (
              <motion.div;
                key={item.name}
                initial={{ opacity: 0, coordinate_y: -20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: main_navigation.index_of (item) * 0.1,
>>>>>>> origin/cursor/delete-old-data-records-6bba
                }}
                className='relative group';
                <Link;
                  href={item.href}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;
              <input;
                type='text';
                placeholder='Search services...';
                value={searchQuery}
            {mainNavigation.map((item) => (<div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation.map(item => (<motion.div;
                key={item.name}
                initial={ opacity: 0, y: -20 }
                animate={ opacity: 1, y: 0 }transition={duration: 0.5,delay: mainNavigation.indexOf(item) * 0.1,}
                className='relative group';
                <Link;
                  href={item.href}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10';
                >;
                  <item.icon className='w-4 h-4' />;
                  <span>{item.name}</span>;
                </Link>;
                {/* Hover effect */}
                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />
              </motion.div>

                {/* Hover effect *}
}
                <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />;
                <div className=absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 />;
              </motion.div>;
            ))}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <span>{item.name}</span>
                </Link>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>

<<<<<<< HEAD
          {/* Right side - Contact & Search */}'
          <div className='hidden lg:flex items-center space-x-4'>

              </motion.div>

            ))}
          </div>
          {/* Right side - Contact & Search */}"
          <div className="hidden lg:flex items-center space-x-4">
              </motion.div>

          </div>;
          {/* Right side - Contact & Search */}<div className='hidden lg:flex items-center space-x-4'>;
              </motion.div>;
            ))}
          </div>

          {/* Right side - Contact & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />

            {/* Search */}
            ))}
          </div>

=======
                  duration: 0.5}
                  delay: mainNavigation.indexOf(item) * 0.1}
                }}
                className='relative group'
                <Link;
href={item.href}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-300 hover: text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10'
                    />
                  <item.icon className='w-4 h-4'    />
                  <span    />{item.name}</span>
                </Link>

                {/* Hover effect *}
}
                <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300'    />;
              </motion.div>;
            ))}

          </div>
          {/* Right side - Contact & Search */}


<div className='hidden lg: flex items-center space-x-4'    />
            {/* Search */}
            <div className='relative'    />
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'    />
              <input;
type=text
                placeholder='Search services...'
                value={searchQuery}

                onChange={e => setSearchQuery(e && e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;


          {/* Desktop Navigation */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="hidden lg:flex items-center space-x-8">
                animate={{ opacity: 1, y: 0 }}          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: mainNavigation.indexOf(item) * 0.1 }}
className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10"
                >
                  <item.icon className="w-4 h-4" />
                transition={{
                  duration: 0.5
                  delay: mainNavigation.indexOf(item) * 0.1
                }}
                className='relative group'
                <Link
                  href={item.href}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10'
                >
                  <item.icon className='w-4 h-4' />
              </motion.div>;
            ))}

                  <span>{item.name}</span>
                </Link>
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
          {/* Right side - Contact & Search */}
          <div className='hidden lg:flex items-center space-x-4'>

              </motion.div>

            ))}
          </div>

          {/* Right side - Contact & Search */}

<<<<<<< HEAD

=======
          {/* Right side - Contact & Search */}"
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            ))}
          </div>

          {/* Right side - Contact & Search */}
<div className='hidden lg:flex items-center space-x-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input'
                type='text''
                placeholder='Search services...'
                value={searchQuery}"
            <div className="relative">"
            <div className='relative' />
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input;
type='text'
                placeholder='Search services...'
                value={searchQuery}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
<<<<<<< HEAD


=======
                onChange={e => setSearchQuery(e.target.value)}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
            {/* Contact Button */}
            <motion&& motion.div;
              initial={{ "opacity": 0, "scale": 0 && 0.8 
}
              animate={{ "opacity": 1, "scale": 1 
}
              transition={{ "duration": 0 && 0.5, "delay": 0 && 0.5 
}>;

            {/* Contact Button */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link


=======
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64"
              />
            </div>
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />

              <input"
                type="text""
                placeholder="Search services..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 "focus":outline-none "focus":ring-2 "focus":ring-cyan-500/50 "focus":border-cyan-500/50 w-64''
              />

            </div>


href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                  />
                <MessageCircle className='w-4 h-4 mr-2'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Get Started;
              </Link>
            </motion.div>
          </div>
<<<<<<< HEAD

=======
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                <MessageCircle className='w-4 h-4 mr-2' />                Get Started                href="/contact";
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25";
              >;
                <MessageCircle className="w-4 h-4 mr-2" />;
              </Link>;
            </motion && motion.div>;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>;
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">

              )}

          {/* Mobile menu button */}
          <div className=lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300
            >
              {isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />}
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'    />
            <button
              onClick={toggleMenu}
origin/cursor/automate-test-improve-and-merge-code-2533
            {/* Contact Button */}
            <motion&& motion.div;
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.5 }}>;
              <Link;
            <button;
              onClick={toggleMenu}'
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'>;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300">;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

            </button>;
          </div>;

            {/* Contact Button *
}
            <motion&& motion.div;
              initial={{ "opacity": 0, "scale": 0 && 0.8 
}
              animate={{ "opacity": 1, "scale": 1 
}
              transition={{ "duration": 0 && 0.5, "delay": 0 && 0.5 
}>;

              <Link,
href='/contact''
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg "hover": from-cyan-600 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105 shadow-lg "hover":shadow-cyan-500/25''
              >
                <MessageCircle className='w-4 h-4 mr-2' />'
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button *
}
<div className='"lg":hidden'>;'
            <button;
              onClick={toggleMenu}
              className='p-2 rounded-lg text-gray-300 "hover":text-cyan-400 "hover":bg-gray-800 transition-colors duration-300'>'

              {isOpen ? (<X className='w-6 h-6' />;'
              ) : (<Menu className='w-6 h-6' />;'
              )}

>>>>>>> origin/cursor/delete-old-data-records-6bba
            </button>
          </div>
        </div>
      </div>


<<<<<<< HEAD

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}


              {/* Mobile Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
=======
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
<<<<<<< HEAD


                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />;
              </div>;



              {/* Mobile Navigation Links */}
              <div className='space-y-2'>
                {mainNavigation.map(item => (                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;



            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">


      {/* Mobile Navigation Menu */}
      <AnimatePresence    />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
}


            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20'



              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}


=======
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            <div className="px-4 py-6 space-y-4">;
              {/* Mobile Search */}"
              <div className="relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input"
                  type=text"
                  placeholder="Search services...
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space-y-2'>
                {mainNavigation.map(item => (              <div className="space-y-2">
                {mainNavigation.map((item) => (
>>>>>>> origin/cursor/delete-old-data-records-6bba

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
<<<<<<< HEAD

                    <item.icon className='w-5 h-5' />
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {mainNavigation.map((item) => (


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
<<<<<<< HEAD

                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>



                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>

                  </div>"
                  <div className="flex items-center space-x-3 text-gray-400">"
                    <MapPin className="w-4 h-4" />"
                    <span className="text-sm">{contactInfo.address}</span>
                  <div className='flex items-center space-x-3 text-gray-400'>

                  <div className='flex items-center space-x-3 text-gray-400' />
                    <Mail className='w-4 h-4' />
                    <span className='text-sm' />{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-3 text-gray-400' />
                    <MapPin className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.address}</span>
=======
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
              />
            <div className='px-4 py-6 space-y-4'    />
              {/* Mobile Search */}
              <div className='relative'    />
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'    />
                <input;
type='text'
                  placeholder='Search services...'
                  value={searchQuery}

                  onChange={e =    /> setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'
                />
              </div>
              {/* Mobile Navigation Links */}
<div className='space-y-2'    />
                {mainNavigation.map(item => (}
                  <Link;}
key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}
                  </Link>
                ))}
              </div>



className='flex items-center space-x-3 px-4 py-3 text-gray-300 "hover":text-cyan-400 "hover":bg-gray-800/50 rounded-lg transition-colors duration-300''
                  >
                    <item.icon className='w-5 h-5' />'
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            exit={{ opacity: 0, height: 0 }}transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20';
          >;
            <div className='px-4 py-6 space-y-4'>;
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={searchQuery}onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchQuery}onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50';
                />;
              </div>;
              {/* Mobile Navigation Links */}
<div className='space-y-2'>;
                {mainNavigation.map(item => (<Link;
                    key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300';
                  >;
                    <item.icon className='w-5 h-5' />;
                    <span>{item.name}</span>;
                  </Link>;
                ))}
              </div>;
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Quick Links;
                </h3>'
                <div className='space-y-2'>
                  {quickLinks.map(item => (
                    <Link

              {/* Quick Links *}
}
<div className='pt-4 border-t border-gray-700'    />;
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'    />;
                  Quick Links;
                </h3>;
                <div className='space-y-2'    />;
                  {quickLinks.map(item => (<Link;}
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}

              {/* Quick Links */}


                    </Link>

                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Contact Info;
                </h3>
                <div className=space-y-2 px-4'>'
                  <div className=flex items-center space-x-3 text-gray-400>'
                    <Phone className='w-4 h-4 />
                    <span className='text-sm'>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className=w-4 h-4" />"
                </div>;
              </div>;
              {/* Contact Info */}

<div className=pt-4 border-t border-gray-700 />
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4' />
                  Contact Info;
                </h3>
                <div className=space-y-2 px-4 />
                  <div className='flex items-center space-x-3 text-gray-400' />
                    <Phone className=w-4 h-4 />
                    <span className='text-sm' />{contactInfo.mobile}</span>
                  </div>
                  <div className=flex items-center space-x-3 text-gray-400>
                    <Mail className="w-4 h-4" />
                    <span className=text-sm>{contactInfo.email}</span>
                  </div>"
                  <div className="flex items-center space-x-3 text-gray-400>
                    <MapPin className="w-4 h-4" />
                    <span className=text-sm">{contactInfo.address}</span>
                  <div className=flex items-center space-x-3 text-gray-400>

                  <div className='flex items-center space-x-3 text-gray-400' />
                    <Mail className=w-4 h-4 />
                    <span className='text-sm' />{contactInfo.email}</span>
                  </div>
                  <div className=flex items-center space-x-3 text-gray-400 />
                    <MapPin className='w-4 h-4' />
                    <span className=text-sm>{contactInfo.address}</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
                    <span className='text-sm' />{contactInfo.address}</span>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
            </div>
=======
      {/* Service Categories Dropdown */}

            exit={{ opacity: 0, y: -20 }}


      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {activeCategory && (<motion&& motion.div;
      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {activeCategory && (<motion.div;
            }
            initial={{ "opacity": 0, "y": -20 
}
            animate={{ "opacity": 1, "y": 0 
}

            exit={{ "opacity": 0, "y": -20 }}

            transition={{ "duration": 0.3 }}
className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40''
          >
            <div className='max-w-7xl mx-auto px-4 py-8'>'
              <div className='grid grid-cols-1 "lg":grid-cols-2 "xl":grid-cols-3 gap-8'>'
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>'
                    <div className='flex items-center space-x-3'>'
                      <div

            exit={{ opacity: 0, y: -20 }}transition={{ duration: 0.3 }}
className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40';
          >;
            <div className='max-w-7xl mx-auto px-4 py-8'>;
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>;
                {serviceCategories.map(category => (<div key={category.title} className='space-y-4'>;
                    <div className='flex items-center space-x-3'>;
className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                    >
                      <item.icon className='w-4 h-4' />
                      <span className='text-sm'>{item.name}</span>
                    </Link>
className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300' />

>>>>>>> origin/cursor/delete-old-data-records-6bba
          </motion.div>
}
            animate={{ opacity: 1;, y: 0 ;}
}

<<<<<<< HEAD





      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {activeCategory && (;
          <motion&& motion.div
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div

            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
=======
            exit={{ opacity: 0;, y: -20 ;}}
>>>>>>> origin/cursor/delete-old-data-records-6bba


            transition={{ duration: 0.3 }}
className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
          >'
            <div className='max-w-7xl mx-auto px-4 py-8'>'
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
          >
            <div className=max-w-7xl mx-auto px-4 py-8'>'
              <div className=grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8>
                {serviceCategories.map(category => ('
                  <div key={category.title} className='space-y-4>
                    <div className='flex items-center space-x-3'>
<<<<<<< HEAD

                      <div


=======
                      <div;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </motion.div>)}
            transition={{ duration: 0.3 ;}}
className=absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40
           />
            <div className='max-w-7xl mx-auto px-4 py-8' />
              <div className=grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 />
                {serviceCategories.map(category => (}
                  <div key={category.title} className='space-y-4' />
                    <div className='flex items-center space-x-3' />
<<<<<<< HEAD

=======
            transition={{ duration: 0.3 }}
className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'
              />
            <div className='max-w-7xl mx-auto px-4 py-8'    />
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'    />
                {serviceCategories.map(category => (}
                  <div key={category.title} className='space-y-4'    />
                    <div className='flex items-center space-x-3'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <div;
          </motion.div    />
}
      </AnimatePresence>;
      {/* Service Categories Dropdown */}
<<<<<<< HEAD

      <AnimatePresence    />;
        {active_category && (<motion.div;}
            initial={{ opacity: 0, coordinate_y: -20 }

=======
      <AnimatePresence>;
        {active_category && (<motion.div;
            }
            initial={{ "opacity": 0, "coordinate_y": -20 
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
            animate={{ opacity: 1, coordinate_y: 0 }
}

<<<<<<< HEAD
=======
            exit={{ "opacity": 0, "coordinate_y": -20 }}
            transition={{ "duration": 0.3 }}
                          {category.titl
}
                        </h3>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
        {active_category && (
          <motion.div;
            initial={{ opacity: 0, coordinate_y: -20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            exit={{ opacity: 0, coordinate_y: -20 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD

=======
            className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'

          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                      >
                        <category.icon className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-white'>
                          {category.title}
                        </h3>;
                        <p className='text - sm text - gray - 400'>;
                          {category.description}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40"
          >

            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40"
          >

            <div className="max-w-7xl mx-auto px-4 py-8">
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories.map((category) => ("
                  <div key={category.title} className="space-y-4">"
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>"
                        <category.icon className=w-5 h-5 text-white />
                      </div>
                      <div>"
                        <h3 className="text-lg font-semibold text-white>{category.title}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <div className=space-y-3">
                      {category.services.map((service, index) => (
<<<<<<< HEAD


=======
                        <Link;
                          key={service && service.name}
                          href={service && service.href}'

                        className={`p-2 rounded-lg bg-gradient-to-r ${category && category.color}`}>;
                        <category && category.icon className='w-5 h-5 text-white' />;
                      </div>;
                      <div>;
                        <h3 className='text-lg font-semibold text-white'>;
                          {category && category.title}
                        </h3>;
                        <p className='text-sm text-gray-400'>;
                          {category && category.description}
                        </p>;
                      </div>;
                    </div>;
                    <div className='space-y-3'>                      {category && category.services.map((service, index) => (;
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'>;
            <div className="max-w-7xl mx-auto px-4 py-8">;
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
                {serviceCategories && serviceCategories.map((category) => (;
                  <div key={category && category.title} className="space-y-4">;
                    <div className="flex items-center space-x-3">;
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category && category.color}`}>;
                        <category && category.icon className="w-5 h-5 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-lg font-semibold text-white">{category && category.title}</h3>;
                        <p className="text-sm text-gray-400">{category && category.description}</p>;
                      </div>;
                    </div>;
                    <div className="space-y-3">;
                      {category && category.services.map((service, index) => (;
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <div className='flex justify-between items-start'>;
                            <div>;
                              <h4 className=font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'>;
                                {service && service.name}
                              </h4>;'
                              <p className=text-sm text-gray-400 mt-1>;
                                {service && service.description}
                              </p>;
                            </div>;'
                            <span className='text-sm font-semibold text-cyan-400>;
                              {service && service.price}
                            </span>                          </div>                        >;"
                          <div className=flex justify-between items-start>;
                            <div>;"
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300>;
                                {service && service.name}
                              </h4>;
                              <p className="text-sm text-gray-400 mt-1">{service && service.description}</p>;
                            </div>;
                            <span className=text-sm font-semibold text-cyan-400">{service && service.price}</span>;
                          </div>;
                        </Link>;
<<<<<<< HEAD



                      ))}
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion && motion.div>;
        )}

      </AnimatePresence>;
    </nav>;
  );

  );

}

}
  );
}
                        </p>;
                      </div>;
                    </div>;
                    <div className='space - y-3'>                      {category.services.map ((service, index) => (
                        <Link;
                          key={service.name}

                          href={service.href}
className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'    />

                          <div className='flex justify-between items-start'    />;
                            <div    />;
                              <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'    />;
                                {service.name}
                              </h4>;
                              <p className='text-sm text-gray-400 mt-1'    />;

=======
                          {category.titl}
}
                        </h3 />;
                        <p className=text - sm text - gray - 400' />;

                          {category.description}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40
          >
            <div className=max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8>
                {serviceCategories.map((category) => (
                  <div key={category.title} className=space-y-4">
                    <div className="flex items-center space-x-3>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className=w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white>{category.title}</h3>
                        <p className=text-sm text-gray-400">{category.description}</p>
                      </div>


                          <div className='flex justify-between items-start'>;'
                            <div>;
                              <h4 className='font-medium text-white group-"hover":text-cyan-400 transition-colors duration-300'>;'
                                {service.name}
                              </h4>;
                              <p className='text-sm text-gray-400 mt-1'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                {service.description}
                              </p>;
                            </div>;
                            <span className='text-sm font-semibold text-cyan-400'    />;
                              {service.price}
<<<<<<< HEAD


                            </span>

                          </div>
                        </Link>
                      ))}


=======
                            </span>                          </div>                        >;
                          <div className='flex justify - between items - start'>;
                            <div>;
                              <h4 className='font - medium text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;
                                {service.name}
                              </h4>;
                              <p className='text - sm text - gray - 400 mt - 1'>{service.description}</p>;
                            </div>;
                            <span className='text - sm font - semibold text - cyan - 400'>{service.price}</span>;
                          </div>;
                        </Link>))}

                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion && motion.div>;

        )}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </AnimatePresence>
    </nav>
  );
}

<<<<<<< HEAD
"




=======

      </AnimatePresence>
    </nav>
);
  );
}
}
  );
}

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
