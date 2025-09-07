
<<<<<<< HEAD
import React, { useState } from 'react';


import React, { useState } from 'react',
<<<<<<< HEAD
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ChevronRight;
import {
=======
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

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  Menu, X, Search, ChevronDown, ChevronRight;

  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;
=======
=======

import React, { useState } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ChevronRight;
<<<<<<< HEAD
import {
<<<<<<< HEAD
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
=======


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

=======
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  Shield,
  Globe,
  Factory,
  Car,
  Building,
  GraduationCap,
  Scale,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Mountain,
  Code,
  Wrench,
  Smartphone,
  BarChart3,
  Eye,
  Globe2,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  ShieldCheck,
  Target,
  Users2,
  Briefcase,
  Lightbulb,
  Award,
<<<<<<< HEAD
  Clock,;
  CheckCircle,;} from 'lucide-react';import { ;
=======

  Clock,;
  CheckCircle,;} from 'lucide-react';import { ;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Menu, X, Search, ChevronDown, ChevronRight;

origin/cursor/automate-test-improve-and-merge-code-2533

  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;

import {Menu,X,Search,ChevronDown,ChevronRight,Home,Users,Settings,HelpCircle,Mail,Phone,MapPin,BookOpen,MessageCircle,Star,TrendingUp,Layers,Cpu,Database,Cloud,Lock,Shield,Globe,Factory,Car,Building,GraduationCap,Scale,Palette,Camera,Video,Music,Gamepad2,Heart,Leaf,Sun,Moon,Wind,Droplets,Mountain,Code,Wrench,Smartphone,BarChart3,Eye,Globe2,Zap,Rocket,Brain,Sparkles,ShieldCheck,Target,Users2,Briefcase,Lightbulb,Award,Menu, X, Search, ChevronDown, ChevronRight;import React, { useState } from react',import Link from 'next/link;
import { motion, AnimatePresence  } from framer-motion';
import { Menu, X, Search, ChevronDown, ChevronRight;Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;
=======
  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  BookOpen, MessageCircle, Star, TrendingUp;
  Layers, Cpu, Database, Cloud, Lock, Shield;
  Globe, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2;
<<<<<<< HEAD
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
}
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle}
 } from 'lucide-react';
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle

const contactInfo = $2;
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = $2;
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
<<<<<<< HEAD
  {
    title: '🚀 2029 Futuristic AI Services',
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/services / ai - consciousness - evolution - platform', description: 'Develop genuine AI consciousness', price: '$19, 999 / month' }
      { name: 'AI Emotional Intelligence Platform', href: '/services / ai - emotional - intelligence - platform', description: 'Real - time emotion analysis and response', price: '$3, 999 / month' }
      { name: 'AI Creativity Orchestrator', href: '/services / ai - creativity - orchestrator', description: 'Multi - model creativity fusion', price: '$5, 999 / month' }
      { name: 'AI Autonomous Business Manager', href: '/services / ai - autonomous - business - manager', description: 'Fully autonomous business operations', price: '$12, 999 / month' }
    ];
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const contactInfo = $2;
  email: kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709,
  website: https://ziontechgroup.com'
},

<<<<<<< HEAD
const serviceCategories = $2;
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600,
    description: Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform, href: /services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness, price: $19,999/month' },
      { name: 'AI Emotional Intelligence Platform, href: /services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response, price: $3,999/month' },
      { name: 'AI Creativity Orchestrator, href: /services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion, price: $5,999/month' },
      { name: 'AI Autonomous Business Manager, href: /services/ai-autonomous-business-manager', description: 'Fully autonomous business operations, price: $12,999/month' }
    ]
  },
  {},
  {
=======
const serviceCategories = [


      {

        name: 'AI Autonomous Business Manager',
        href: '/services / ai - autonomous - business - manager',
        description: 'Fully autonomous business operations',
        price: '$12, 999 / month',
      },
    ],

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
<<<<<<< HEAD
    services: [
      { name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  },
  {
=======
<<<<<<< HEAD
    services: [;
      {
        name: 'Quantum Internet Security Gateway',
        href: '/services / quantum - internet - security - gateway',
        description: 'Unbreakable quantum encryption',
        price: '$15, 999 / month',
      },
      {
        name: 'Biotech DNA Computing Platform',
        href: '/services / biotech - dna - computing - platform',
        description: 'DNA - based computation',
        price: '$25, 999 / month',
      },
      {
        name: 'Quantum Financial Trading Platform',
        href: '/services / quantum - financial - trading - platform',
        description: 'Quantum - powered trading algorithms',
        price: '$35, 999 / month',
      },
      {
=======


      {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        name: 'Quantum Creativity Studio',
        href: '/services / quantum - creativity - studio',
        description: 'Quantum - enhanced creativity',
        price: '$1, 999 / month',
      },
    ],
<<<<<<< HEAD
      { name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' };
      { name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' };
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' };
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  };
  {
  },  {      { name: 'Quantum Internet Security Gateway', href: '/services / quantum - internet - security - gateway', description: 'Unbreakable quantum encryption', price: '$15, 999 / month' }
      { name: 'Biotech DNA Computing Platform', href: '/services / biotech - dna - computing - platform', description: 'DNA - based computation', price: '$25, 999 / month' }
      { name: 'Quantum Financial Trading Platform', href: '/services / quantum - financial - trading - platform', description: 'Quantum - powered trading algorithms', price: '$35, 999 / month' }
      { name: 'Quantum Creativity Studio', href: '/services / quantum - creativity - studio', description: 'Quantum - enhanced creativity', price: '$1, 999 / month' }
    ];
  }
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
<<<<<<< HEAD
    services: [
      { name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2,499/month' },
      { name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3,999/month' },
      { name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1,599/month' },
      { name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2,999/month' }
    ]
  },
  {
=======
<<<<<<< HEAD
    services: [;
      {
        name: 'AI Business Intelligence Suite',
        href: '/services / ai - business - intelligence - suite',
        description: 'Intelligent insights and analytics',
        price: '$2, 499 / month',
      },
      {
        name: 'Smart Supply Chain Optimization',
        href: '/services / smart - supply - chain - optimization',
        description: 'AI - powered supply chain intelligence',
        price: '$3, 999 / month',
      },
      {
        name: 'Intelligent HR Management System',
        href: '/services / intelligent - hr - management - system',
        description: 'AI - powered HR optimization',
        price: '$1, 599 / month',
      },
      {
=======


      {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        name: 'Smart Financial Management Platform',
        href: '/services / smart - financial - management - platform',
        description: 'AI - powered financial planning',
        price: '$2, 999 / month',
      },
    ],
<<<<<<< HEAD
      { name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2,499/month' };
      { name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3,999/month' };
      { name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1,599/month' };
      { name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2,999/month' }
    ]
  };
  {
  },  {      { name: 'AI Business Intelligence Suite', href: '/services / ai - business - intelligence - suite', description: 'Intelligent insights and analytics', price: '$2, 499 / month' }
      { name: 'Smart Supply Chain Optimization', href: '/services / smart - supply - chain - optimization', description: 'AI - powered supply chain intelligence', price: '$3, 999 / month' }
      { name: 'Intelligent HR Management System', href: '/services / intelligent - hr - management - system', description: 'AI - powered HR optimization', price: '$1, 599 / month' }
      { name: 'Smart Financial Management Platform', href: '/services / smart - financial - management - platform', description: 'AI - powered financial planning', price: '$2, 999 / month' }
    ];
  }
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title: '🌌 2029 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
<<<<<<< HEAD
    services: [
      { name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' },
      { name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2,999/month' }
    ]
  },
  {
=======
<<<<<<< HEAD
    services: [;
      {
        name: 'Space Mining Automation Platform',
        href: '/services / space - mining - automation - platform',
        description: 'Automated asteroid mining',
        price: '$45, 999 / month',
      },
      {
        name: 'Metaverse Digital Reality Platform',
        href: '/services / metaverse - digital - reality - platform',
        description: 'Immersive virtual worlds',
        price: '$8, 999 / month',
      },
      {
        name: 'AI Predictive Health Analytics',
        href: '/services / ai - predictive - health - analytics',
        description: 'Predictive health outcomes',
        price: '$7, 999 / month',
      },
      {
=======


      {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        name: 'Virtual Event Hologram Platform',
        href: '/services / virtual - event - hologram - platform',
        description: 'Holographic event experiences',
        price: '$2, 999 / month',
      },
    ],
<<<<<<< HEAD
      { name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' };
      { name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' };
      { name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' };
      { name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2,999/month' }
    ]
  };
  {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
<<<<<<< HEAD
      { name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1,899/month' },
      { name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1,299/month' },
      { name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' },
      { name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1,799/month' }
    ]
<<<<<<< HEAD
=======
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600','
    description: 'Cutting-edge micro solutions',
    services: [
      'Advanced Research Automation',
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle
 } from 'lucide-react';
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle
=======
<<<<<<< HEAD
  },  {      { name: 'Space Mining Automation Platform', href: '/services / space - mining - automation - platform', description: 'Automated asteroid mining', price: '$45, 999 / month' }
      { name: 'Metaverse Digital Reality Platform', href: '/services / metaverse - digital - reality - platform', description: 'Immersive virtual worlds', price: '$8, 999 / month' }
      { name: 'AI Predictive Health Analytics', href: '/services / ai - predictive - health - analytics', description: 'Predictive health outcomes', price: '$7, 999 / month' }
      { name: 'Virtual Event Hologram Platform', href: '/services / virtual - event - hologram - platform', description: 'Holographic event experiences', price: '$2, 999 / month' }
    ];
  }
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from - green - 600 via - yellow - 600 to - orange - 600',
    description: 'Cutting - edge micro solutions',
    services: [;
      {
        name: 'Intelligent Customer Experience Platform',
        href: '/services / intelligent - customer - experience - platform',
        description: 'AI - powered customer journey optimization',
        price: '$1, 899 / month',
      },
      {
        name: 'Intelligent Marketing Automation',
        href: '/services / intelligent - marketing - automation',
        description: 'AI - powered marketing optimization',
        price: '$1, 299 / month',
      },
      {
        name: 'Smart Project Management',
        href: '/services / smart - project - management',
        description: 'AI - powered project optimization',
        price: '$899 / month',
      },
      {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const contactInfo = {
  mobile: +1 302 464 0950
  email: 'kleber@ziontechgroup.com'
  address: 364 E Main St STE 1008 Middletown DE 19709
  website: 'https://ziontechgroup.com'
}
{
  name: AI Emotional Intelligence Platform, href: '/services/ai-emotional-intelligence-platform', description: Real-time emotion analysis and response, price: '$3, 999/month'
}
{
  name: AI Creativity Orchestrator, href: '/services/ai-creativity-orchestrator', description: Multi-model creativity fusion, price: '$5, 999/month'
}
{
  name: AI Autonomous Business Manager, href: '/services/ai-autonomous-business-manager', description: Fully autonomous business operations, price: '$12, 999/month'
}]
}
{
  title: ⚛️ 2029 Quantum & Emerging Tech, icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600', description: Quantum computing and beyond, services: [ {
  name: 'Quantum Internet Security Gateway', href: /services/quantum-internet-security-gateway, description: 'Unbreakable quantum encryption', price: $15, 999/month
}
{
  name: 'Biotech DNA Computing Platform', href: /services/biotech-dna-computing-platform, description: 'DNA-based computation', price: $25, 999/month
}
{
  name: 'Quantum Financial Trading Platform', href: /services/quantum-financial-trading-platform, description: 'Quantum-powered trading algorithms', price: $35, 999/month
}
{
  name: 'Quantum Creativity Studio', href: /services/quantum-creativity-studio, description: 'Quantum-enhanced creativity', price: $1, 999/month
}]
}
{
  title: '🏙️ 2029 Enterprise IT Solutions', icon: Cpu, color: from-blue-600 via-cyan-600 to-teal-600, description: 'Autonomous enterprise infrastructure', services: [ {
  name: AI Business Intelligence Suite, href: '/services/ai-business-intelligence-suite', description: Intelligent insights and analytics, price: '$2, 499/month'
}
{
  name: Smart Supply Chain Optimization, href: '/services/smart-supply-chain-optimization', description: AI-powered supply chain intelligence, price: '$3, 999/month'
}
{
  name: Intelligent HR Management System, href: '/services/intelligent-hr-management-system', description: AI-powered HR optimization, price: '$1, 599/month'
}
{
  name: Smart Financial Management Platform, href: '/services/smart-financial-management-platform', description: AI-powered financial planning, price: '$2, 999/month'
}]
}
{
  title: 🌌 2029 Space & Metaverse Tech, icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', description: Space exploration and digital reality, services: [ {
  name: 'Space Mining Automation Platform', href: /services/space-mining-automation-platform, description: 'Automated asteroid mining', price: $45, 999/month
}
{
  name: 'Metaverse Digital Reality Platform', href: /services/metaverse-digital-reality-platform, description: 'Immersive virtual worlds', price: $8, 999/month
}
{
  name: 'AI Predictive Health Analytics', href: /services/ai-predictive-health-analytics, description: 'Predictive health outcomes', price: $7, 999/month
}
{
  name: 'Virtual Event Hologram Platform', href: /services/virtual-event-hologram-platform, description: 'Holographic event experiences', price: $2, 999/month
}]
}
{
  title: '🎯 2029 Innovative Micro SAAS', icon: Target, color: from-green-600 via-yellow-600 to-orange-600, description: 'Cutting-edge micro solutions', services: [ {
  name: Intelligent Customer Experience Platform, href: '/services/intelligent-customer-experience-platform', description: AI-powered customer journey optimization, price: '$1, 899/month'
}
{
  name: Intelligent Marketing Automation, href: '/services/intelligent-marketing-automation', description: AI-powered marketing optimization, price: '$1, 299/month'
}
{
  name: Smart Project Management, href: '/services/smart-project-management', description: AI-powered project optimization, price: '$899/month'
}
{
  name: Intelligent Sales Optimization, href: '/services/intelligent-sales-optimization', description: AI-powered sales intelligence, price: '$1, 799/month'
}]
}
> <Link href=/" className="flex items-center space-x-3 group > <div className=relative" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 > <Rocket className=w-7 h-7 text-white" /> </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 /> </div> <div className=hidden sm:block" > <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent > Zion Tech Group </h1> <p className=text-xs text-gray-400" >Future Technology Solutions</p> </div> </a> </motion.div> </motion.div>) )
}</div> /> </div> {
  /* Contact Button */
}<motion.div initial= {  {  website: https://ziontechgroup.com
}
const serviceCategories = [
    title: '🚀 2029 Futuristic AI Services'
    icon: Brain
    color: from-violet-600 via-purple-600 to-indigo-600
    description: 'Next-generation AI consciousness and creativity'
    services: [
      {
        name: AI Consciousness Evolution Platform
        href: '/services/ai-consciousness-evolution-platform'
        description: Develop genuine AI consciousness
        price: '$19,999/month'
      }
      {
        name: AI Emotional Intelligence Platform
        href: '/services/ai-emotional-intelligence-platform'
        description: Real-time emotion analysis and response
        price: '$3,999/month'
      }
      {
        name: AI Creativity Orchestrator
        href: '/services/ai-creativity-orchestrator'
        description: Multi-model creativity fusion
        price: '$5,999/month'
      }
      {
        name: AI Autonomous Business Manager
        href: '/services/ai-autonomous-business-manager'
        description: Fully autonomous business operations
        price: '$12,999/month'
      }
    ]
  },  {      { name: AI Consciousness Evolution Platform, href: '/services/ai-consciousness-evolution-platform', description: Develop genuine AI consciousness, price: '$19,999/month' }
      { name: AI Emotional Intelligence Platform, href: '/services/ai-emotional-intelligence-platform', description: Real-time emotion analysis and response, price: '$3,999/month' }
      { name: AI Creativity Orchestrator, href: '/services/ai-creativity-orchestrator', description: Multi-model creativity fusion, price: '$5,999/month' }
      { name: AI Autonomous Business Manager, href: '/services/ai-autonomous-business-manager', description: Fully autonomous business operations, price: '$12,999/month' }
    ]
  }
    title: ⚛️ 2029 Quantum & Emerging Tech
    icon: Globe
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    description: Quantum computing and beyond
    services: [
      {
        name: 'Quantum Internet Security Gateway'
        href: /services/quantum-internet-security-gateway
        description: 'Unbreakable quantum encryption'
        price: $15,999/month
      }
      {
        name: 'Biotech DNA Computing Platform'
        href: /services/biotech-dna-computing-platform
        description: 'DNA-based computation'
        price: $25,999/month
      }
      {
        name: 'Quantum Financial Trading Platform'
        href: /services/quantum-financial-trading-platform
        description: 'Quantum-powered trading algorithms'
        price: $35,999/month
      }
      {
        name: 'Quantum Creativity Studio'
        href: /services/quantum-creativity-studio
        description: 'Quantum-enhanced creativity'
        price: $1,999/month
      }
    ]
  },  {      { name: 'Quantum Internet Security Gateway', href: /services/quantum-internet-security-gateway, description: 'Unbreakable quantum encryption', price: $15,999/month }
      { name: 'Biotech DNA Computing Platform', href: /services/biotech-dna-computing-platform, description: 'DNA-based computation', price: $25,999/month }
      { name: 'Quantum Financial Trading Platform', href: /services/quantum-financial-trading-platform, description: 'Quantum-powered trading algorithms', price: $35,999/month }
      { name: 'Quantum Creativity Studio', href: /services/quantum-creativity-studio, description: 'Quantum-enhanced creativity', price: $1,999/month }
    ]
  }
    title: '🏙️ 2029 Enterprise IT Solutions'
    icon: Cpu
    color: from-blue-600 via-cyan-600 to-teal-600
    description: 'Autonomous enterprise infrastructure'
    services: [
      {
        name: AI Business Intelligence Suite
        href: '/services/ai-business-intelligence-suite'
        description: Intelligent insights and analytics
        price: '$2,499/month'
      }
      {
        name: Smart Supply Chain Optimization
        href: '/services/smart-supply-chain-optimization'
        description: AI-powered supply chain intelligence
        price: '$3,999/month'
      }
      {
        name: Intelligent HR Management System
        href: '/services/intelligent-hr-management-system'
        description: AI-powered HR optimization
        price: '$1,599/month'
      }
      {
        name: Smart Financial Management Platform
        href: '/services/smart-financial-management-platform'
        description: AI-powered financial planning
        price: '$2,999/month'
      }
    ]
  },  {      { name: AI Business Intelligence Suite, href: '/services/ai-business-intelligence-suite', description: Intelligent insights and analytics, price: '$2,499/month' }
      { name: Smart Supply Chain Optimization, href: '/services/smart-supply-chain-optimization', description: AI-powered supply chain intelligence, price: '$3,999/month' }
      { name: Intelligent HR Management System, href: '/services/intelligent-hr-management-system', description: AI-powered HR optimization, price: '$1,599/month' }
      { name: Smart Financial Management Platform, href: '/services/smart-financial-management-platform', description: AI-powered financial planning, price: '$2,999/month' }
    ]
  }
    title: 🌌 2029 Space & Metaverse Tech
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    description: Space exploration and digital reality
    services: [
      {
        name: 'Space Mining Automation Platform'
        href: /services/space-mining-automation-platform
        description: 'Automated asteroid mining'
        price: $45,999/month
      }
      {
        name: 'Metaverse Digital Reality Platform'
        href: /services/metaverse-digital-reality-platform
        description: 'Immersive virtual worlds'
        price: $8,999/month
      }
      {
        name: 'AI Predictive Health Analytics'
        href: /services/ai-predictive-health-analytics
        description: 'Predictive health outcomes'
        price: $7,999/month
      }
      {
        name: 'Virtual Event Hologram Platform'
        href: /services/virtual-event-hologram-platform
        description: 'Holographic event experiences'
        price: $2,999/month
      }
    ]
  },  {      { name: 'Space Mining Automation Platform', href: /services/space-mining-automation-platform, description: 'Automated asteroid mining', price: $45,999/month }
      { name: 'Metaverse Digital Reality Platform', href: /services/metaverse-digital-reality-platform, description: 'Immersive virtual worlds', price: $8,999/month }
      { name: 'AI Predictive Health Analytics', href: /services/ai-predictive-health-analytics, description: 'Predictive health outcomes', price: $7,999/month }
      { name: 'Virtual Event Hologram Platform', href: /services/virtual-event-hologram-platform, description: 'Holographic event experiences', price: $2,999/month }
    ]
  }
    title: '🎯 2029 Innovative Micro SAAS'
    icon: Target
    color: from-green-600 via-yellow-600 to-orange-600
    description: 'Cutting-edge micro solutions'
    services: [
      {
        name: Intelligent Customer Experience Platform
        href: '/services/intelligent-customer-experience-platform'
        description: AI-powered customer journey optimization
        price: '$1,899/month'
      }
      {
        name: Intelligent Marketing Automation
        href: '/services/intelligent-marketing-automation'
        description: AI-powered marketing optimization
        price: '$1,299/month'
      }
      {
        name: Smart Project Management
        href: '/services/smart-project-management'
        description: AI-powered project optimization
        price: '$899/month'
      }
      {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name: 'Intelligent Sales Optimization',
        href: '/services/intelligent-sales-optimization',
        description: 'AI-powered sales intelligence',
        price: '$1,799/month',
      },
    ],
<<<<<<< HEAD
  },
  {
=======
<<<<<<< HEAD
      { name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1,899/month' };
      { name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1,299/month' };
      { name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' },
      { name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1,799/month' }
    ]
  };
  {
  },  {      { name: 'Intelligent Customer Experience Platform', href: '/services / intelligent - customer - experience - platform', description: 'AI - powered customer journey optimization', price: '$1, 899 / month' }
      { name: 'Intelligent Marketing Automation', href: '/services / intelligent - marketing - automation', description: 'AI - powered marketing optimization', price: '$1, 299 / month' }
      { name: 'Smart Project Management', href: '/services / smart - project - management', description: 'AI - powered project optimization', price: '$899 / month' },
      { name: 'Intelligent Sales Optimization', href: '/services / intelligent - sales - optimization', description: 'AI - powered sales intelligence', price: '$1, 799 / month' }
    ];
  }
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
<<<<<<< HEAD
    services: [
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
=======
<<<<<<< HEAD
    services: [;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite',
    ],
<<<<<<< HEAD
      'Biotech Research Suite',
    ],'
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
];
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

const mainNavigation = [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];
=======

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
>>>>>>> origin/chore/fix-lint-and-merge
  }
];
;
const main_navigation = [;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain }
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe }
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu }
  { name: 'Space Tech', href: '/space-tech', icon: Rocket }
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target }
  { name: 'Innovations', href: '/innovations', icon: Sparkles }
  { name: 'About', href: '/about', icon: Users }
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const quickLinks = [
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
const main_navigation = [;'
  { name: 'Home', href: '/', icon: Home },'
  { name: 'Services', href: '/services', icon: Briefcase },'
  { name: 'AI Solutions', href: '/ai - solutions', icon: Brain },'
  { name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },'
  { name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },'
  { name: 'Space Tech', href: '/space - tech', icon: Rocket },'
  { name: 'Micro SAAS', href: '/micro - saas', icon: Target },'
  { name: 'Innovations', href: '/innovations', icon: Sparkles },'
  { name: 'About', href: '/about', icon: Users },

const quickLinks = ['
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
  },
];
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
{ name: 'Contact', href: '/contact', icon: MessageCircle },
];
const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
{ name: 'Support', href: '/support', icon: MessageCircle },
origin/cursor/automate-test-improve-and-merge-code-2533
];
=======

const quickLinks = [
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
;
const quick_links = [;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },

<<<<<<< HEAD
=======


<<<<<<< HEAD
export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false)
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/chore/fix-lint-and-merge
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
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

  { name: 'Contact', href: /contact, icon: MessageCircle }];  { name: 'Contact', href: /contact, icon: MessageCircle }

  { name: 'Careers', href: /careers, icon: GraduationCap },

export default function UltraFuturisticNavigation2029V2() {}
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [activeCategory, setActiveCategory] = useState<string | null>(null);'
  const [searchQuery, setSearchQuery] = useState(');
=======
<<<<<<< HEAD
const mainNavigation = [
  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];
  }
];
;
const main_navigation = [;
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai - solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },
  { name: 'Space Tech', href: '/space - tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro - saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const quickLinks = [
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
;
const quick_links = [;
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },

const _serviceCategories = [
  {_title: '🚀 2029 Futuristic AI Services', _icon: Brain, _color: 'from-violet-600 via-purple-600 to-indigo-600', _description: 'Next-generation AI consciousness and creativity', _services: [
      { name: 'AI Consciousness Evolution Platform', _href: '/services/ai-consciousness-evolution-platform', _description: 'Develop genuine AI consciousness', _price: '$19, _999/month'},
      {_name: 'AI Emotional Intelligence Platform', _href: '/services/ai-emotional-intelligence-platform', _description: 'Real-time emotion analysis and response', _price: '$3, _999/month'},
      {_name: 'AI Creativity Orchestrator', _href: '/services/ai-creativity-orchestrator', _description: 'Multi-model creativity fusion', _price: '$5, _999/month'},
      {_name: 'AI Autonomous Business Manager', _href: '/services/ai-autonomous-business-manager', _description: 'Fully autonomous business operations', _price: '$12, _999/month'}
    ]
  },
  {_title: '⚛️ 2029 Quantum & Emerging Tech', _icon: Globe, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Internet Security Gateway', _href: '/services/quantum-internet-security-gateway', _description: 'Unbreakable quantum encryption', _price: '$15, _999/month'},
      {_name: 'Biotech DNA Computing Platform', _href: '/services/biotech-dna-computing-platform', _description: 'DNA-based computation', _price: '$25, _999/month'},
      {_name: 'Quantum Financial Trading Platform', _href: '/services/quantum-financial-trading-platform', _description: 'Quantum-powered trading algorithms', _price: '$35, _999/month'},
      {_name: 'Quantum Creativity Studio', _href: '/services/quantum-creativity-studio', _description: 'Quantum-enhanced creativity', _price: '$1, _999/month'}
    ]
  },
  {_title: '🏙️ 2029 Enterprise IT Solutions', _icon: Cpu, _color: 'from-blue-600 via-cyan-600 to-teal-600', _description: 'Autonomous enterprise infrastructure', _services: [
      { name: 'AI Business Intelligence Suite', _href: '/services/ai-business-intelligence-suite', _description: 'Intelligent insights and analytics', _price: '$2, _499/month'},
      {_name: 'Smart Supply Chain Optimization', _href: '/services/smart-supply-chain-optimization', _description: 'AI-powered supply chain intelligence', _price: '$3, _999/month'},
      {_name: 'Intelligent HR Management System', _href: '/services/intelligent-hr-management-system', _description: 'AI-powered HR optimization', _price: '$1, _599/month'},
      {_name: 'Smart Financial Management Platform', _href: '/services/smart-financial-management-platform', _description: 'AI-powered financial planning', _price: '$2, _999/month'}
    ]
  },
  {_title: '🌌 2029 Space & Metaverse Tech', _icon: Rocket, _color: 'from-teal-600 via-emerald-600 to-green-600', _description: 'Space exploration and digital reality', _services: [
      { name: 'Space Mining Automation Platform', _href: '/services/space-mining-automation-platform', _description: 'Automated asteroid mining', _price: '$45, _999/month'},
      {_name: 'Metaverse Digital Reality Platform', _href: '/services/metaverse-digital-reality-platform', _description: 'Immersive virtual worlds', _price: '$8, _999/month'},
      {_name: 'AI Predictive Health Analytics', _href: '/services/ai-predictive-health-analytics', _description: 'Predictive health outcomes', _price: '$7, _999/month'},
      {_name: 'Virtual Event Hologram Platform', _href: '/services/virtual-event-hologram-platform', _description: 'Holographic event experiences', _price: '$2, _999/month'}
    ]
  },
  {_title: '🎯 2029 Innovative Micro SAAS', _icon: Target, _color: 'from-green-600 via-yellow-600 to-orange-600', _description: 'Cutting-edge micro solutions', _services: [
      { name: 'Intelligent Customer Experience Platform', _href: '/services/intelligent-customer-experience-platform', _description: 'AI-powered customer journey optimization', _price: '$1, _899/month'},
      {_name: 'Intelligent Marketing Automation', _href: '/services/intelligent-marketing-automation', _description: 'AI-powered marketing optimization', _price: '$1, _299/month'},
      {_name: 'Smart Project Management', _href: '/services/smart-project-management', _description: 'AI-powered project optimization', _price: '$899/month'},
      {_name: 'Intelligent Sales Optimization', _href: '/services/intelligent-sales-optimization', _description: 'AI-powered sales intelligence', _price: '$1, _799/month'}
    ]
>>>>>>> merged-prs-20250907-203621
  },
  {
    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
<<<<<<< HEAD
    services: [
      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
],

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home},
  { name: 'Services', href: '/services', icon: Briefcase},
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain},
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe},
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu},
  { name: 'Space Tech', href: '/space-tech', icon: Rocket},
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target},
  { name: 'Innovations', href: '/innovations', icon: Sparkles},
  { name: 'About', href: '/about', icon: Users},
  { name: 'Contact', href: '/contact', icon: MessageCircle}
],

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users},
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen},
  { name: 'Blog', href: '/blog', icon: BookOpen},
  { name: 'News', href: '/news', icon: TrendingUp},
  { name: 'Careers', href: '/careers', icon: GraduationCap},
  { name: 'Support', href: '/support', icon: MessageCircle}
],

export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState($2);
  const [activeCategory, setActiveCategory] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState($2);
  const toggleMenu = () => setIsOpen($2);
  const closeMenu = () => setIsOpen($2);
  return (
=======
    services: [
      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
],

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
],

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },

  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: MessageCircle }
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
{
  name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3, 999/month'
}
{
  name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5, 999/month'
}
{
  name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12, 999/month'
}]
}
{
  title: '⚛️ 2029 Quantum & Emerging Tech', icon: Globe, color: 'from-indigo-600 via-blue-600 to-cyan-600', description: 'Quantum computing and beyond', services: [ {
  name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15, 999/month'
}
{
  name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25, 999/month'
}
{
  name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35, 999/month'
}
{
  name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1, 999/month'
}]
}
{
  title: '🏙️ 2029 Enterprise IT Solutions', icon: Cpu, color: 'from-blue-600 via-cyan-600 to-teal-600', description: 'Autonomous enterprise infrastructure', services: [ {
  name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2, 499/month'
}
{
  name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3, 999/month'
}
{
  name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1, 599/month'
}
{
  name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2, 999/month'
}]
}
{
  title: '🌌 2029 Space & Metaverse Tech', icon: Rocket, color: 'from-teal-600 via-emerald-600 to-green-600', description: 'Space exploration and digital reality', services: [ {
  name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45, 999/month'
}
{
  name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8, 999/month'
}
{
  name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7, 999/month'
}
{
  name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2, 999/month'
}]
}
{
  title: '🎯 2029 Innovative Micro SAAS', icon: Target, color: 'from-green-600 via-yellow-600 to-orange-600', description: 'Cutting-edge micro solutions', services: [ {
  name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1, 899/month'
}
{
  name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1, 299/month'
}
{
  name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month'
}
{
  name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1, 799/month'
}]
}
> <Link href='/' className='flex items-center space-x-3 group' > <div className='relative' > <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300' > <Rocket className='w-7 h-7 text-white' /> </div> <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' /> </div> <div className='hidden sm:block' > <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' > Zion Tech Group </h1> <p className='text-xs text-gray-400' >Future Technology Solutions</p> </div> </a> </motion.div> </motion.div>) )
}</div> /> </div> {
  /* Contact Button */
}<motion.div initial= {  {  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
    title: '🚀 2029 Futuristic AI Services'
    icon: Brain
    color: 'from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and creativity'
    services: [
      {
        name: 'AI Consciousness Evolution Platform'
        href: '/services/ai-consciousness-evolution-platform'
        description: 'Develop genuine AI consciousness'
        price: '$19,999/month'
      }
      {
        name: 'AI Emotional Intelligence Platform'
        href: '/services/ai-emotional-intelligence-platform'
        description: 'Real-time emotion analysis and response'
        price: '$3,999/month'
      }
      {
        name: 'AI Creativity Orchestrator'
        href: '/services/ai-creativity-orchestrator'
        description: 'Multi-model creativity fusion'
        price: '$5,999/month'
      }
      {
        name: 'AI Autonomous Business Manager'
        href: '/services/ai-autonomous-business-manager'
        description: 'Fully autonomous business operations'
        price: '$12,999/month'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' }
      { name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' }
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' }
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  }
    title: '⚛️ 2029 Quantum & Emerging Tech'
    icon: Globe
    color: 'from-indigo-600 via-blue-600 to-cyan-600'
    description: 'Quantum computing and beyond'
    services: [
      {
        name: 'Quantum Internet Security Gateway'
        href: '/services/quantum-internet-security-gateway'
        description: 'Unbreakable quantum encryption'
        price: '$15,999/month'
      }
      {
        name: 'Biotech DNA Computing Platform'
        href: '/services/biotech-dna-computing-platform'
        description: 'DNA-based computation'
        price: '$25,999/month'
      }
      {
        name: 'Quantum Financial Trading Platform'
        href: '/services/quantum-financial-trading-platform'
        description: 'Quantum-powered trading algorithms'
        price: '$35,999/month'
      }
      {
        name: 'Quantum Creativity Studio'
        href: '/services/quantum-creativity-studio'
        description: 'Quantum-enhanced creativity'
        price: '$1,999/month'
      }
    ]
  },  {      { name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' }
      { name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' }
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' }
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  }
    title: '🏙️ 2029 Enterprise IT Solutions'
    icon: Cpu
    color: 'from-blue-600 via-cyan-600 to-teal-600'
    description: 'Autonomous enterprise infrastructure'
    services: [
      {
        name: 'AI Business Intelligence Suite'
        href: '/services/ai-business-intelligence-suite'
        description: 'Intelligent insights and analytics'
        price: '$2,499/month'
      }
      {
        name: 'Smart Supply Chain Optimization'
        href: '/services/smart-supply-chain-optimization'
        description: 'AI-powered supply chain intelligence'
        price: '$3,999/month'
      }
      {
        name: 'Intelligent HR Management System'
        href: '/services/intelligent-hr-management-system'
        description: 'AI-powered HR optimization'
        price: '$1,599/month'
      }
      {
        name: 'Smart Financial Management Platform'
        href: '/services/smart-financial-management-platform'
        description: 'AI-powered financial planning'
        price: '$2,999/month'
      }
    ]
  },  {      { name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2,499/month' }
      { name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3,999/month' }
      { name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1,599/month' }
      { name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2,999/month' }
    ]
  }
    title: '🌌 2029 Space & Metaverse Tech'
    icon: Rocket
    color: 'from-teal-600 via-emerald-600 to-green-600'
    description: 'Space exploration and digital reality'
    services: [
      {
        name: 'Space Mining Automation Platform'
        href: '/services/space-mining-automation-platform'
        description: 'Automated asteroid mining'
        price: '$45,999/month'
      }
      {
        name: 'Metaverse Digital Reality Platform'
        href: '/services/metaverse-digital-reality-platform'
        description: 'Immersive virtual worlds'
        price: '$8,999/month'
      }
      {
        name: 'AI Predictive Health Analytics'
        href: '/services/ai-predictive-health-analytics'
        description: 'Predictive health outcomes'
        price: '$7,999/month'
      }
      {
        name: 'Virtual Event Hologram Platform'
        href: '/services/virtual-event-hologram-platform'
        description: 'Holographic event experiences'
        price: '$2,999/month'
      }
    ]
  },  {      { name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' }
      { name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' }
      { name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' }
      { name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2,999/month' }
    ]
  }
    title: '🎯 2029 Innovative Micro SAAS'
    icon: Target
    color: 'from-green-600 via-yellow-600 to-orange-600'
    description: 'Cutting-edge micro solutions'
    services: [
      {
        name: 'Intelligent Customer Experience Platform'
        href: '/services/intelligent-customer-experience-platform'
        description: 'AI-powered customer journey optimization'
        price: '$1,899/month'
      }
      {
        name: 'Intelligent Marketing Automation'
        href: '/services/intelligent-marketing-automation'
        description: 'AI-powered marketing optimization'
        price: '$1,299/month'
      }
      {
        name: 'Smart Project Management'
        href: '/services/smart-project-management'
        description: 'AI-powered project optimization'
        price: '$899/month'
      }
      {
        name: 'Intelligent Sales Optimization'
        href: '/services/intelligent-sales-optimization'
        description: 'AI-powered sales intelligence'
        price: '$1,799/month'
      }
    ]
  },  {      { name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1,899/month' }
      { name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1,299/month' }
      { name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' }
      { name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1,799/month' }
    ]
  }
    title: '🔬 2029 Research & Development'
    icon: Eye
    color: 'from-orange-600 via-red-600 to-pink-600'
    description: 'Breakthrough research solutions'
    services: [
      'Advanced Research Automation'
      'Quantum Research Platform'
      'AI Research Assistant'
      'Biotech Research Suite'
    ]
  },];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite'
    ]
  }
];
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'Services', href: '/services', icon: Briefcase }
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain }
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe }
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu }
  { name: 'Space Tech', href: '/space-tech', icon: Rocket }
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target }
  { name: 'Innovations', href: '/innovations', icon: Sparkles }
  { name: 'About', href: '/about', icon: Users }
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users }
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen }
  { name: 'Blog', href: '/blog', icon: BookOpen }
  { name: 'News', href: '/news', icon: TrendingUp }
  { name: 'Careers', href: '/careers', icon: GraduationCap }
  { name: 'Support', href: '/support', icon: MessageCircle },];  { name: 'Support', href: '/support', icon: MessageCircle }
];

export default function UltraFuturisticNavigation2029V2() {
export default function UltraFuturisticNavigation2029V2() {;
  const [isOpen, setIsOpen] = useState(false);
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
<<<<<<< HEAD
<nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' />}
}
      {/* Main Navigation Bar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
        <div className=flex justify-between items-center h-20'>;
          {/* Logo */}
          <motion.div;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            className='flex-shrink-0'

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: mainNavigation.indexOf(item) * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10"
                >
                  <item.icon className="w-4 h-4" />
=======
                animate={{ opacity: 1, y: 0 }}

transition={
                  duration: 0.5,
                  delay: mainNavigation.indexOf(item) * 0.1,
                </p>              </div>          >
    <nav className='relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'>
      {/* Main Navigation Bar */}'
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>'
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
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
>>>>>>> origin/chore/fix-lint-and-merge
          <motion.div;
            initial={{ opacity: 0, x: -20 }
}
            animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.5 }}"
            className="flex-shrink-0"
          >"
            <Link href="/" className="flex items-center space-x-3 group">"
              <div className="relative">"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
=======
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
                  Future Technology Solutions;
                </p>
              </div>
            </Link>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          {/* Desktop Navigation */}

<div className='hidden lg:flex items-center space-x-8'    />
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            transition={{ duration: 0 && 0.5 }}
            className='flex-shrink-0'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                </p>;
              </div>;
            </Link>;
          </motion.div>;
          {/* Desktop Navigation */}<div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div;
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
=======
              </div>;
            </Link>;
          </motion && motion.div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
<<<<<<< HEAD
                transition={{
=======
                animate={{ opacity: 1, y: 0 }}          <div className="hidden lg:flex items-center space-x-8">;
            {mainNavigation && mainNavigation.map((item) => (;
              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                }}
                className='relative group';
                <Link;
                  href={item.href}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  duration: 0 && 0.5,
                  delay: mainNavigation && mainNavigation.indexOf(item) * 0 && 0.1,
                }}
                className='relative group'
                <Link
                  href={item && item.href}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10'>;
                  <item && item.icon className='w-4 h-4' />;
                  <span>{item && item.name}</span>;
                </Link>;
<<<<<<< HEAD
                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />              </motion && motion.div>                <div className="absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />;
              </motion && motion.div>;
            ))}
          </div>;
          {/* Right side - Contact & Search */}
          <div className='hidden lg:flex items-center space-x-4'>;
=======


                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />              </motion && motion.div>                <div className="absolute bottom-0 left-0 w-0 h-0 && 0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />;
              </motion && motion.div>;

            ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> merged-prs-20250907-203621
                  <span>{item.name}</span>
                </Link>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD

=======
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
>>>>>>> merged-prs-20250907-203621
          {/* Right side - Contact & Search */}
          <div className='hidden lg:flex items-center space-x-4'>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
<<<<<<< HEAD
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64"
=======
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
>>>>>>> origin/chore/fix-lint-and-merge

          </div>
          {/* Right side - Contact & Search */}
<<<<<<< HEAD
<div className='hidden lg:flex items-center space-x-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input'
                type='text
                placeholder='Search services...'
                value={searchQuery}"
            <div className="relative">"
            <div className='relative' />
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
=======

<div className='hidden lg: flex items-center space-x-4'    />
            {/* Search */}
            <div className='relative'    />
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'    />
>>>>>>> origin/chore/fix-lint-and-merge
              <input;
type=text
                placeholder='Search services...'
                value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />

              <input"
                type=text"
                placeholder="Search services...
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}

>>>>>>> merged-prs-20250907-203621
              />
            </div>

            {/* Contact Button */}
<<<<<<< HEAD
=======
=======

                onChange={e =    /> setSearchQuery(e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'
              />
            </div>

            {/* Contact Button *}
}
>>>>>>> origin/chore/fix-lint-and-merge
            <motion&& motion.div;
              initial={{ opacity: 0, scale: 0 && 0.8 }
}
              animate={{ opacity: 1, scale: 1 }
}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.5 }
}    />;

              <Link;
<<<<<<< HEAD
            <button;
              onClick={toggleMenu}'
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'>;
              {isOpen ? (;
                <X className=w-6 h-6' />;
              ) : (;'
                <Menu className=w-6 h-6 />;
              )}            </button>            <button;
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300">;
              {isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />}
            </button>;
          </div>;
        </div>;
      </div>;


=======
                onChange={e => setSearchQuery(e && e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Desktop Navigation */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
          <div className='hidden lg:flex items-center space-x-4'>

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={e => setSearchQuery(e.target.value)}

                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />

<<<<<<< HEAD
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64"
              />
            </div>
                className='pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64'              />

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />

            </div>

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Contact Button */}
            <motion&& motion.div;
              initial={ 'opacity': 0, 'scale': 0 && 0.8 
}
              animate={ 'opacity': 1, 'scale': 1 
}
              transition={ 'duration': 0 && 0.5, 'delay': 0 && 0.5 
}>;

            {/* Contact Button */}
>>>>>>> merged-prs-20250907-203621
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started
href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
               />
                <MessageCircle className='w-4 h-4 mr-2' />
=======
href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                  />
                <MessageCircle className='w-4 h-4 mr-2'    />
>>>>>>> origin/chore/fix-lint-and-merge
                Get Started;
              </Link>
            </motion.div>
          </div>
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
          {/* Mobile menu button *}
}
<div className='lg:hidden'    />;
            <button;
              onClick={toggleMenu}
<<<<<<< HEAD

<<<<<<< HEAD
              )}

>>>>>>> merged-prs-20250907-203621
          {/* Mobile menu button */}
          <div className=lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300
            >
              {isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />}
=======
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <button
              onClick={toggleMenu}
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'>;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300">;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
<<<<<<< HEAD
            </button>
          </div>
        </div>
      </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              {isOpen ? (<X className='w-6 h-6'    />;}
              ) : (<Menu className='w-6 h-6'    />;}
              )}

>>>>>>> origin/chore/fix-lint-and-merge
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
<<<<<<< HEAD
            exit={{ opacity: 0, height: 0}}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
=======
            exit={{ opacity: 0, height: 0 }}

<<<<<<< HEAD
            exit={{ opacity: 0, height: 0}}
=======

          >
            <div className='px-4 py-6 space-y-4'>
<<<<<<< HEAD
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space-y-2'>;
                {mainNavigation && mainNavigation.map(item => (                  <Link
                    key={item && item.name}
                    href={item && item.href}

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20'

          >
            <div className='px-4 py-6 space-y-4'>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Mobile Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
<<<<<<< HEAD
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />
              </div>
=======

                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />;
              </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Mobile Navigation Links */}
              <div className='space-y-2'>
                {mainNavigation.map(item => (                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
<<<<<<< HEAD
          <motion&& motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
=======

      {/* Mobile Navigation Menu */}
      <AnimatePresence    />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
}

>>>>>>> origin/chore/fix-lint-and-merge
            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20'
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
          >
          >'
            <div className='px-4 py-6 space-y-4'>
              {/* Mobile Search */}'
              <div className='relative'>'
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />'
                <input,
type='text''
                  placeholder='Search services...''
                  value={searchQuery}
                    onClick={closeMenu}'
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;'
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;"
              {/* Mobile Search */}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300>;
                    <item && item.icon className=w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className=px-4 py-6 space-y-4">;
              {/* Mobile Search */}
              <div className="relative>;
                <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
              <div className="relative>
                <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text
                  placeholder=Search services..."
                  value={searchQuery}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300>;
                    <item && item.icon className=w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4>;
=======
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
>>>>>>> merged-prs-20250907-203621
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
<<<<<<< HEAD
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
=======
<<<<<<< HEAD
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;
              {/* Mobile Search */}"
              <div className="relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input"
                  type=text"
                  placeholder="Search services...
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
=======
<<<<<<< HEAD
              <div className="space-y-2">
                {mainNavigation.map((item) => (

                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space-y-2'>
                {mainNavigation.map(item => (              <div className="space-y-2">
                {mainNavigation.map((item) => (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

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
=======
                    <item.icon className='w-5 h-5' />
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {mainNavigation.map((item) => (
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
>>>>>>> merged-prs-20250907-203621
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
=======
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
<<<<<<< HEAD
                  </Link>
                ))}
              </div>

<<<<<<< HEAD
              {/* Quick Links */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
=======
                  </Link>
                ))}
              </div>

              {/* Quick Links */}
              <div className='pt-4 border-t border-gray-700'>
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Quick Links
                </h3>
                <div className='space-y-2'>
                  {quickLinks.map(item => (                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                    >
                      <item.icon className='w-4 h-4' />
                      <span className='text-sm'>{item.name}</span>                    </Link>              <div className="pt-4 border-t border-gray-700">
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                  >
                    <item.icon className='w-5 h-5' />                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((item) => (
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                    >
                      <item.icon className='w-4 h-4' />
                      <span className='text-sm'>{item.name}</span>                      className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                  ))}
                </div>
              </div>

                  </Link>
                ))}
              </div>

              {/* Quick Links */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((item) => (
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'
                      />
                    <item.icon className='w-5 h-5'    />
                    <span    />{item.name}</span>
>>>>>>> origin/chore/fix-lint-and-merge
=======

                ))}

              </div>;




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                      className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
<<<<<<< HEAD
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Contact Info</h3>
                <div className="space-y-2 px-4">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.mobile}</span>
=======
                  ))}
                </div>
              </div>

<<<<<<< HEAD
=======
className='flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'    />

                      <item.icon className='w-4 h-4'    />;
                      <span className='text-sm'    />{item.name}</span>;
                    </Link>;
>>>>>>> origin/chore/fix-lint-and-merge
                  ))}
                </div>;
              </div>;
                  ))}
=======
              {/* Quick Links */}

<<<<<<< HEAD

                    </Link>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
<div className=pt-4 border-t border-gray-700 />
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4' />
                  Contact Info;
                </h3>
                <div className=space-y-2 px-4 />
                  <div className='flex items-center space-x-3 text-gray-400' />
                    <Phone className=w-4 h-4 />
                    <span className='text-sm' />{contactInfo.mobile}</span>
=======
<div className='pt-4 border-t border-gray-700'    />
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'    />
                  Contact Info;
                </h3>
                <div className='space-y-2 px-4'    />
                  <div className='flex items-center space-x-3 text-gray-400'    />
                    <Phone className='w-4 h-4'    />
                    <span className='text-sm'    />{contactInfo.mobile}</span>
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>
                  <div className=flex items-center space-x-3 text-gray-400>
                    <Mail className="w-4 h-4" />
                    <span className=text-sm>{contactInfo.email}</span>
                  </div>"
                  <div className="flex items-center space-x-3 text-gray-400>
                    <MapPin className="w-4 h-4" />
                    <span className=text-sm">{contactInfo.address}</span>
                  <div className=flex items-center space-x-3 text-gray-400>

<<<<<<< HEAD
                  <div className='flex items-center space-x-3 text-gray-400' />
                    <Mail className=w-4 h-4 />
                    <span className='text-sm' />{contactInfo.email}</span>
                  </div>
                  <div className=flex items-center space-x-3 text-gray-400 />
                    <MapPin className='w-4 h-4' />
                    <span className=text-sm>{contactInfo.address}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                    <span className='text-sm' />{contactInfo.address}</span>
=======
                  <div className='flex items-center space-x-3 text-gray-400'    />
                    <Mail className='w-4 h-4'    />
                    <span className='text-sm'    />{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-3 text-gray-400'    />
                    <MapPin className='w-4 h-4'    />
                    <span className='text-sm'    />{contactInfo.address}</span>
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>
                </div>
              </div>

      {/* Service Categories Dropdown */}
<<<<<<< HEAD
=======
      <AnimatePresence    />;
        {activeCategory && (<motion&& motion.div;}
      {/* Service Categories Dropdown */}
      <AnimatePresence    />;
        {activeCategory && (<motion.div;}
            initial={{ opacity: 0, y: -20 }
}
            animate={{ opacity: 1, y: 0 }
}
>>>>>>> origin/chore/fix-lint-and-merge

            exit={{ opacity: 0, y: -20 }}

<<<<<<< HEAD
            transition={{ "duration": 0.3 }}
className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40''
          >
            <div className='max-w-7xl mx-auto px-4 py-8'>'
              <div className='grid grid-cols-1 'lg':grid-cols-2 'xl':grid-cols-3 gap-8'>'
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>'
                    <div className='flex items-center space-x-3'>'
                      <div

            exit={ opacity: 0, y: -20 }transition={ duration: 0.3 }
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

                      <item.icon className='w-4 h-4' />;
                      <span className='text-sm' />{item.name}</span>;
                    </Link>;
                  ))}
                </div>;
              </div>;
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Contact Info */}
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Contact Info */}
<div className='pt-4 border-t border-gray-700'>
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Contact Info;
                </h3>'
                <div className='space-y-2 px-4'>'
                  <div className='flex items-center space-x-3 text-gray-400'>'
                    <Phone className='w-4 h-4' />'
                    <span className='text-sm'>{contactInfo.mobile}</span>
                  </div>"
                  <div className="flex items-center space-x-3 text-gray-400">"
                    <Mail className="w-4 h-4" />"
                </div>;
              </div>;
              {/* Contact Info */}

<<<<<<< HEAD
<div className='pt-4 border-t border-gray-700' />
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4' />
                  Contact Info;
                </h3>
                <div className='space-y-2 px-4' />
                  <div className='flex items-center space-x-3 text-gray-400' />
                    <Phone className='w-4 h-4' />
                    <span className='text-sm' />{contactInfo.mobile}</span>
=======


<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
<<<<<<< HEAD
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
=======
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
origin/cursor/automate-test-improve-and-merge-code-2533
                    <span className='text-sm' />{contactInfo.address}</span>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {activeCategory && (;
          <motion&& motion.div;
      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div;
=======
                </div>;
              </div>;


              {/* Contact Info */}
              <div className='pt-4 border-t border-gray-700'>;
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>;
                  Contact Info;
                </h3>;
                <div className='space-y-2 px-4'>;
                  <div className='flex items-center space-x-3 text-gray-400'>;
                    <Phone className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-3 text-gray-400'>;
                    <Mail className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-3 text-gray-400'>;
                    <MapPin className='w-4 h-4' />;
                    <span className='text-sm'>{contactInfo && contactInfo.address}</span>                  </div>                  </div>;
                  <div className="flex items-center space-x-3 text-gray-400">;
                    <Mail className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-400">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.address}</span>;
      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - cyan - 500 / 20';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {/* Mobile Search */}
              <div className='relative'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={search_query}
                  on_change={e => setSearchQuery (e.target.value)}
                  className='w - full pl - 10 pr - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - lg text - gray - 300 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50'                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space - y-2'>;
                {main_navigation.map (item => (                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={close_menu}
                    className='flex items - center space - x-3 px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                  >;
                    <item.icon className='w - 5 h - 5' />                    <span>{item.name}</span>          >;
            <div className="px - 4 py - 6 space - y-4">;
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - lg text - gray - 300 placeholder - gray - 500 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50";
                />;
              </div>;
              {/* Mobile Navigation Links */}
              <div className='space - y-2'>;
                {main_navigation.map (item => (              <div className="space - y-2">;
                {main_navigation.map ((item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    on_click={close_menu}
                    className='flex items - center space - x-3 px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                  >;
                    <item.icon className='w - 5 h - 5' />                    className="flex items - center space - x-3 px - 4 py - 3 text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300";
                  >;
                    <item.icon className="w - 5 h - 5" />;
                    <span>{item.name}</span>;
                  </Link>))}
              </div>;
              {/* Quick Links */}
              <div className='pt - 4 border - t border - gray - 700'>;
                <h3 className='text - sm font - medium text - gray - 400 mb - 3 px - 4'>;
                  Quick Links;
                </h3>;
                <div className='space - y-2'>;
                  {quick_links.map (item => (                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 px - 4 py - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                    >;
                      <item.icon className='w - 4 h - 4' />;
                      <span className='text - sm'>{item.name}</span>                    </Link>              <div className="pt - 4 border - t border - gray - 700">;
                <h3 className="text - sm font - medium text - gray - 400 mb - 3 px - 4">Quick Links</h3>;
                <div className="space - y-2">;
                  {quick_links.map ((item) => (
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 px - 4 py - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300';
                    >;
                      <item.icon className='w - 4 h - 4' />;
                      <span className='text - sm'>{item.name}</span>                      className="flex items - center space - x-3 px - 4 py - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 300";
                    >;
                      <item.icon className="w - 4 h - 4" />;
                      <span className="text - sm">{item.name}</span>))}
                </div>;
              </div>;
              {/* Contact Info */}
              <div className='pt - 4 border - t border - gray - 700'>;
                <h3 className='text - sm font - medium text - gray - 400 mb - 3 px - 4'>;
                  Contact Info;
                </h3>;
                <div className='space - y-2 px - 4'>;
                  <div className='flex items - center space - x-3 text - gray - 400'>;
                    <Phone className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-3 text - gray - 400'>;
                    <Mail className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-3 text - gray - 400'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.address}</span>                  </div>                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 400">;
                    <Mail className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 400">;
                    <MapPin className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;

      </AnimatePresence>;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
=======


<<<<<<< HEAD
      </AnimatePresence>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}


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
                      <div;
=======
                      <div

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </motion.div>)}
            transition={{ duration: 0.3 ;}}
className=absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40
           />
            <div className='max-w-7xl mx-auto px-4 py-8' />
              <div className=grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 />
                {serviceCategories.map(category => (}
                  <div key={category.title} className='space-y-4' />
                    <div className='flex items-center space-x-3' />
=======
            transition={{ duration: 0.3 }}
className='absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40'
              />
            <div className='max-w-7xl mx-auto px-4 py-8'    />
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'    />
                {serviceCategories.map(category => (}
                  <div key={category.title} className='space-y-4'    />
                    <div className='flex items-center space-x-3'    />
>>>>>>> origin/chore/fix-lint-and-merge
                      <div;
          </motion.div    />
}
      </AnimatePresence>;
      {/* Service Categories Dropdown */}
      <AnimatePresence>;
<<<<<<< HEAD
        {active_category && (<motion.div;
            }
            initial={{ "opacity": 0, "coordinate_y": -20 
=======
      <AnimatePresence    />;
        {active_category && (<motion.div;}
            initial={{ opacity: 0, coordinate_y: -20 }
>>>>>>> origin/chore/fix-lint-and-merge
}
            animate={{ opacity: 1, coordinate_y: 0 }
}
<<<<<<< HEAD
            exit={{ "opacity": 0, "coordinate_y": -20 }}
            transition={{ "duration": 0.3 }}
                          {category.titl
}
                        </h3>;
                        <p className='text - sm text - gray - 400'>;
                          {category.description}"
            <div className="max-w-7xl mx-auto px-4 py-8">"
=======
        {active_category && (
          <motion.div;
            initial={{ opacity: 0, coordinate_y: -20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            exit={{ opacity: 0, coordinate_y: -20 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
            className='absolute top - full left - 0 right - 0 bg - gray - 900 / 95 backdrop - blur - xl border - t border - cyan - 500 / 20 z - 40';
          >;
            <div className='max - w-7xl mx - auto px - 4 py - 8'>;
              <div className='grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8'>;
                {service_categories.map (category => (
                  <div key={category.title} className='space - y-4'>;
                    <div className='flex items - center space - x-3'>;
                      <div;
                        className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}
                      >;
                        <category.icon className='w - 5 h - 5 text - white' />;
                      </div>;
                      <div>;
                        <h3 className='text - lg font - semibold text - white'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          {category.title}
                        </h3>;
                        <p className='text - sm text - gray - 400'>;
                          {category.description}
<<<<<<< HEAD
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40"
          >
=======

            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40"
          >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="max-w-7xl mx-auto px-4 py-8">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                        <Link;
                          key={service && service.name}
                          href={service && service.href}'
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                          {category.titl}
}
                        </h3 />;
                        <p className=text - sm text - gray - 400' />;

                          {category.description}
>>>>>>> merged-prs-20250907-203621
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
                    </div>
<<<<<<< HEAD
                    
                    <div className="space-y-3">
                      {category.services.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                            </div>
                            <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
=======

=======
            exit={{ opacity: 0, coordinate_y: -20 }}
            transition={{ duration: 0.3 }}
                          {category.titl}
}
                        </h3    />;
                        <p className='text - sm text - gray - 400'    />;

                          {category.description}

                        </p>
                      </div>
                    </div>

                    <div className='space-y-3'    />
                      {category.services.map((service, index) => (}
                        <Link;}
key={service.name}
=======
<<<<<<< HEAD
                        <Link
                          key={service.name}
                          href={service.href}
                        <Link
                          key={service.name}
                          href={service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'
                        >
                          <div className='flex justify-between items-start'>
                            <div>
                              <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'>
                                {service.name}
                              </h4>
                              <p className='text-sm text-gray-400 mt-1'>
                                {service.description}
                              </p>
                            </div>
                            <span className='text-sm font-semibold text-cyan-400'>
                              {service.price}
                            </span>                          </div>                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                            </div>
                            <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
                          </div>

                          </div>

                        </Link>
=======

=======
                        <Link
                          key={service.name}
                          href={service.href}

                        </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          href={service.href}
className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'    />

                          <div className='flex justify-between items-start'    />;
                            <div    />;
                              <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'    />;
                                {service.name}
                              </h4>;
                              <p className='text-sm text-gray-400 mt-1'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                                {service.description}
                              </p>;
                            </div>;
                            <span className='text-sm font-semibold text-cyan-400'    />;
                              {service.price}
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
>>>>>>> merged-prs-20250907-203621
                          </div>
                        </Link>
                      ))}
<<<<<<< HEAD
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion && motion.div>;

        )}
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
      </AnimatePresence>
    </nav>
  );
}
<<<<<<< HEAD

<<<<<<< HEAD
"
=======
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
      </AnimatePresence>
    </nav>
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
