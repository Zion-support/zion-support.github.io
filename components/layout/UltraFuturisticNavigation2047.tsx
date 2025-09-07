<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useEffect } from 'react',
import Link from 'next/link';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon,
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon,
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin
} from 'lucide-react',
=======
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X, Phone, Mail, ArrowRight;
import {
<<<<<<< HEAD
  }
  Menu,
ChevronDown
  X,
Phone
  Mail,
ArrowRight
  Brain,
Rocket
  Target,
Atom
  Shield,
DollarSign
  BarChart3,
Globe
  Grid,
Heart
  Database,
Cpu
  Palette,
Cloud
  Network,
TrendingUp
  ShoppingCart,
Settings
  Building,
Monitor
  Zap,
Eye
  Infinity,
Sparkles
  Users,
Lock
  Code,
Server
  Layers,
Globe2
  Star,
Award
  Clock,
CheckCircle
  Zap as ZapIcon,
Phone as PhoneIcon,
Search
  User,
Bell
  Cog,
LogOut
  Home,
Info
  FileText,
Users as UsersIcon,
Bot
  MessageCircle,
Linkedin
  Twitter,
  Github,


import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,;
  MapPin,;
} from 'lucide-react';

interface NavigationItem {
  }
  'name': string;

import { Menu,ChevronDown,X,Phone,Mail,ArrowRight,Brain,Rocket,Target,Atom,Shield,DollarSign,BarChart3,Globe,Grid,Heart,Database,Cpu,Palette,Cloud,Network,TrendingUp,ShoppingCart,Settings,Building,Monitor,Zap,Eye,Infinity,Sparkles,Users,Lock,Code,Server,Layers,Globe2,Star,Award,Clock,CheckCircle,Zap as ZapIcon,Phone as PhoneIcon,Search,User,Bell,Cog,LogOut,Home,Info,FileText,Users as UsersIcon,Bot,MessageCircle,Linkedin,Twitter,Github,import {Menu,ChevronDown,X,Phone,Mail,ArrowRight,Brain,Rocket,Target,Atom,Shield,DollarSign,BarChart3,Globe,Grid,Heart,Database,Cpu,Palette,Cloud,Network,TrendingUp,ShoppingCart,Settings,Building,Monitor,Zap,Eye,Infinity,Sparkles,Users,Lock,Code,Server,Layers,Globe2,Star,Award,Clock,CheckCircle,Zap as ZapIcon,Phone as PhoneIcon,Search,User,Bell,Cog,LogOut,Home,Info,FileText,Users as UsersIcon,Bot,MessageCircle,Linkedin,Twitter,Github,Youtube,MapPin,} from 'lucide-react';
import React, { useState, useEffect } from 'react',import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, ChevronDown, X, Phone, Mail, ArrowRight;Menu;
  ChevronDown;
  X;
  Phone;
  Mail;
  ArrowRight;
  Brain;
  Rocket;
  Target;
  Atom;
  Shield;
  DollarSign;
  BarChart3;
  Globe;
  Grid;
  Heart;
  Database;
  Cpu;
  Palette;
  Cloud;
  Network;
  TrendingUp;
  ShoppingCart;
  Settings;
  Building;
  Monitor;
  Zap;
  Eye;
  Infinity;
  Sparkles;
  Users;
  Lock;
  Code;
  Server;
  Layers;
  Globe2;
  Star;
  Award;
  Clock;
  CheckCircle;
  Zap as ZapIcon;
  Phone as PhoneIcon;
  Search;
  User;
  Bell;
  Cog;
  LogOut;
  Home;
  Info;
  FileText;
  Users as UsersIcon;
  Bot;
  MessageCircle;
  Linkedin;
  Twitter;
  Github;
  Youtube;
  MapPin;
 } from 'lucide-react';
interface NavigationItem  {name: string;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import Link from 'next / link';
  ChevronDown,X,Phone,Mail,ArrowRight,Brain,Rocket,Target,Atom,Shield,DollarSign,BarChart3,Globe,Grid,Heart,Database,Cpu,Palette,Cloud,Network,TrendingUp,ShoppingCart,Settings,Building,Monitor,Zap,Eye,Infinity,Sparkles,Users,Lock,Code,Server,Layers,Globe2,Star,Award,Clock,CheckCircle,Zap as ZapIcon,Phone as PhoneIcon,Search,User,Bell,Cog,LogOut,Home,Info,FileText,Users as UsersIcon,Bot,MessageCircle,Linkedin,Twitter,Github,Youtube,MapPin,} from 'lucide-react';
  ChevronDown,X,Phone,Mail,ArrowRight,Brain,Rocket,Target,Atom,Shield,DollarSign,BarChart3,Globe,Grid,Heart,Database,Cpu,Palette,Cloud,Network,TrendingUp,ShoppingCart,Settings,Building,Monitor,Zap,Eye,Infinity,Sparkles,Users,Lock,Code,Server,Layers,Globe2,Star,Award,Clock,CheckCircle,Zap as ZapIcon,Phone as PhoneIcon,Search,User,Bell,Cog,LogOut,Home,Info,FileText,Users as UsersIcon,Bot,MessageCircle,Linkedin,Twitter,Github,Youtube,MapPin,} from 'lucide-react';
interface NavigationItem  {name: string;
  href: string;  icon?: React.ReactNode;import { href: string;  icon?: React.ReactNode;import {Menu, ChevronDown, X, Phone, Mail, ArrowRight;Brain, Rocket, Target, Atom, Shield;
} from 'lucide-react';
  Github} from lucide-react';
interface NavigationItem {}
  name: string;


class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {'
    console.error(Error caught by boundary:, error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React, { useState, useEffect } from 'react;
import Link from 'next / link';
import { motion, AnimatePresence } from framer-motion';

import {}
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  MapPin,'
} from lucide-react;



  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  MapPin,'
} from 'lucide-react;
interface NavigationItem {}
  name: string;
  href: string;  icon?: React.ReactNode;import {}
  href: string;  icon?: React.ReactNode;import {

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

origin/cursor/automate-test-improve-and-merge-code-2533

=======
  Menu;
ChevronDown,
X;
Phone,
Mail;
ArrowRight,
Brain;
Rocket,
Target;
Atom,
Shield;
DollarSign,
BarChart3;
Globe,
Grid;
Heart,
Database;
Cpu,
Palette;
Cloud,
Network;
TrendingUp,
ShoppingCart;
Settings,
Building;
Monitor,
Zap;
Eye,
Infinity;
Sparkles,
Users;
Lock,
Code;
Server,
Layers;
Globe2,
Star;
Award,
Clock;
CheckCircle,
Zap as ZapIcon;
Phone as PhoneIcon;
Search,
User;
Bell,
Cog;
LogOut,
Home;
Info,
FileText;
Users as UsersIcon;
Bot,
MessageCircle;
Linkedin,
Twitter;
Github,
Youtube;}
MapPin;}
} from 'lucide-react';

interface NavigationItem {
  name: string;

>>>>>>> origin/chore/fix-lint-and-merge
  Brain, Rocket, Target, Atom, Shield;

  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
<<<<<<< HEAD
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin;
  } from 'lucide-react';
interface NavigationItem  {name: string;
  href: string;
  icon?: React.ReactNode;
} from 'lucide-react';
interface NavigationItem  {name: string;
  href: string;
import { motion, AnimatePresence } from 'framer-motion';

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,;
  MapPin,;
} from 'lucide-react';

import {
<<<<<<< HEAD
=======
  Menu
  ChevronDown
  X
  Phone
  Mail
  ArrowRight
  Brain
  Rocket
  Target
  Atom
  Shield
  DollarSign
  BarChart3
  Globe
  Grid
  Heart
  Database
  Cpu
  Palette
  Cloud
  Network
  TrendingUp
  ShoppingCart
  Settings
  Building
  Monitor
  Zap
  Eye
  Infinity
  Sparkles
  Users
  Lock
  Code
  Server
  Layers
  Globe2
  Star
  Award
  Clock
  CheckCircle
  Zap as ZapIcon
  Phone as PhoneIcon
  Search
  User
  Bell
  Cog
  LogOut
  Home
  Info
  FileText
  Users as UsersIcon
  Bot
  MessageCircle
  Linkedin
  Twitter
  Github
  Youtube
  MapPin;
} from 'lucide-react';
interface NavigationItem {
  name: string;
<<<<<<< HEAD
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
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,;
  MapPin,;
} from 'lucide-react';
interface NavigationItem {

  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin

=======

  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
}
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin}
 } from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge

interface NavigationItem {
  name: string;
  href: string;}
  icon?: React.ReactNode;}
} from 'lucide-react';

<<<<<<< HEAD
  description?: string;
  name: string;
  href: string;  icon?: React.ReactNode;import {

  href: string;  icon?: React.ReactNode;import { ;

<<<<<<< HEAD
  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

=======
<<<<<<< HEAD
  href: string;  icon?: React.ReactNode;import {
  href: string;  icon?: React.ReactNode;import { ;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  Brain, Rocket, Target, Atom, Shield;
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
<<<<<<< HEAD
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin

} from 'lucide-react';
interface NavigationItem {
  name: string
  href: string

=======

  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin;
} from 'lucide-react';

>>>>>>> merged-prs-20250907-203621

interface NavigationItem {
  name: string,
  href: string,
<<<<<<< HEAD
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean,
  category?: string,
=======
  icon?: React.ReactNode;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  description?: string;
=======
interface NavigationItem {
  name: string;
href: string;
description?: string;
>>>>>>> origin/chore/fix-lint-and-merge
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;

  category?: string;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  color?: string
}

<<<<<<< HEAD
const navigationItems: NavigationItem[] = [
  {
    name: 'Home & Core',
    href: '/',
    icon: <Home className = $2;
    description: 'Main pages and core information',
    category: 'core',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'Home', 
        href: '/', 
        description: 'Main homepage',
        icon: <Home className = $2;
        color: 'from-emerald-500 to-cyan-500',
        featured: true},
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Company information and mission',
        icon: <Info className = $2;
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        description: 'Get in touch with our team',
        icon: <Mail className = $2;
        color: 'from-purple-500 to-pink-500'
      },
      { 
        name: 'Team', 
        href: '/team', 
        description: 'Meet our leadership team',
        icon: <Users className = $2;
        color: 'from-orange-500 to-red-500'
      }
    ]
  },
  {
    name: 'AI & Technology Services',
    href: '/services',
    icon: <Brain className = $2;
    description: 'Advanced AI and technology solutions',
    badge: 'Featured',
    category: 'services',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className = $2;
        featured: true},
      { 
        name: 'AI Consciousness Evolution', 
        href: '/ai-consciousness-evolution-2029', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className = $2;
        color: 'from-purple-500 to-pink-500',
        featured: true},
      { 
        name: 'Quantum Neural Networks', 
        href: '/quantum-neural-network-platform', 
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className = $2;
        color: 'from-blue-500 to-cyan-500',
        featured: true},
      { 
        name: 'Autonomous Business Operations', 
        href: '/autonomous-business-operations-platform', 
        description: 'AI-powered business automation',
        icon: <Bot className = $2;
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'IT Asset Management', 
        href: '/ai-powered-it-asset-management', 
        description: 'AI-powered IT infrastructure management',
        icon: <Monitor className = $2;
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Advanced Solutions',
    href: '/solutions',
    icon: <Rocket className = $2;
    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [
      { 
        name: 'Solutions Overview', 
        href: '/solutions', 
        description: 'Complete solutions overview',
        icon: <Rocket className = $2;
        featured: true},
      { 
        name: 'Blockchain Solutions', 
        href: '/blockchain-solutions', 
        description: 'Advanced blockchain technology',
        icon: <Database className = $2;
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'IoT Platforms', 
        href: '/iot-platforms', 
        description: 'Internet of Things solutions',
        icon: <Network className = $2;
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Space Technology', 
        href: '/space-tech', 
        description: 'Space technology innovations',
        icon: <Globe2 className = $2;
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    name: 'Resources & Insights',
    href: '/blog',
    icon: <FileText className = $2;
    description: 'Knowledge base and insights',
    category: 'resources',
    color: 'from-orange-500 to-red-500',
    children: [
      { 
        name: 'Blog & Articles', 
        href: '/blog', 
        description: 'Latest insights and articles',
        icon: <FileText className = $2;
        featured: true},
      { 
        name: 'Technology Insights', 
        href: '/technology-insights', 
        description: 'Technology trends and analysis',
        icon: <TrendingUp className = $2;
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories and implementations',
        icon: <Star className = $2;
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'In-depth research and analysis',
        icon: <FileText className = $2;
        color: 'from-gray-500 to-slate-500'
      }
    ]
  },
  {
    name: 'Company & Support',
    href: '/about',
    icon: <Building className = $2;
    description: 'Company information and support',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      { 
        name: 'About Zion Tech Group', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Info className = $2;
        featured: true},
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Users className = $2;
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'Support', 
        href: '/support', 
        description: 'Get help and support',
        icon: <MessageCircle className = $2;
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Privacy Policy', 
        href: '/privacy', 
        description: 'Privacy and data protection',
        icon: <Shield className = $2;
        color: 'from-red-500 to-pink-500'
      }
    ]
  }
],

const contactInfo = $2;
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
],

const UltraFuturisticNavigation2047 = () => {
  const [isOpen, setIsOpen] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
=======
<<<<<<< HEAD
=======
const navigationItems: NavigationItem[] = [
  {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    name: 'Home & Core'
    href: '/'
    icon: <Home className='w-5 h-5' />,    description: 'Main pages and core information'
    category: 'core'
    color: 'from-emerald-500 to-cyan-500'
    children: [
      {    icon: <Home className="w-5 h-5" />
    description: 'Main pages and core information'
    category: 'core'
    color: 'from-emerald-500 to-cyan-500'
    children: [
      {
<<<<<<< HEAD
=======

  color?: string
  color?: string;  color?: string;

<<<<<<< HEAD
  color?: string
  color?: string;  color?: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
const navigation_items: NavigationItem[] = [;
  {
    name: 'Home & Core',
    href: '/',
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    icon: <Home className='w - 5 h - 5' />,    description: 'Main pages and core information',
    category: 'core',
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;
      {    icon: <Home className="w - 5 h - 5" />,
    description: 'Main pages and core information',
    category: 'core',
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;
      {
        name: 'Home',
        href: '/',
        description: 'Main homepage',
        icon: <Home className='w - 4 h - 4' />,
        color: 'from - emerald - 500 to - cyan - 500',
        featured: true,
      },
      {
        name: 'About Us',
        href: '/about',
        description: 'Company information and mission',
        icon: <Info className='w - 4 h - 4' />,
        color: 'from - blue - 500 to - cyan - 500',
      },
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
        icon: <Mail className='w - 4 h - 4' />,
        color: 'from - purple - 500 to - pink - 500',
      },
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our leadership team',
        icon: <Users className='w - 4 h - 4' />,
  color?: string;
}
  color?: string;
  color?: string;  color?: string;
}
  color?: string;

const navigationItems: NavigationItem[] = []
  {}
'
    name: 'Home & Core''
    href: '/''
    icon: <Home className='w-5 h-5' />,    description: 'Main pages and core information''
    category: 'core''
    color: 'from-emerald-500 to-cyan-500'
    children: []
      {    icon: <Home className="w-5 h-5" />'
    description: 'Main pages and core information''
    category: 'core''
    color: 'from-emerald-500 to-cyan-500'
    children: []
      {}
}
const navigation_items: NavigationItem[] = [;
  {'
    name: 'Home & Core','
    href: '/','
    icon: <Home className='w - 5 h - 5' />,    description: 'Main pages and core information','
    category: 'core','
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;"
      {    icon: <Home className="w - 5 h - 5" />,'
    description: 'Main pages and core information','
    category: 'core','
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;
      {'
        name: 'Home','
        href: '/','
        description: 'Main homepage','
        icon: <Home className='w - 4 h - 4' />,'
        color: 'from - emerald - 500 to - cyan - 500',
        featured: true,
      },
      {'
        name: 'About Us','
        href: '/about','
        description: 'Company information and mission','
        icon: <Info className='w - 4 h - 4' />,'
        color: 'from - blue - 500 to - cyan - 500',
      },
      {'
        name: 'Contact','
        href: '/contact','
        description: 'Get in touch with our team','
        icon: <Mail className='w - 4 h - 4' />,'
        color: 'from - purple - 500 to - pink - 500',
      },
      {'
        name: 'Team','
        href: '/team','
        description: 'Meet our leadership team','
        icon: <Users className='w - 4 h - 4' />,'
        color: 'from - orange - 500 to - red - 500',
      },
    ],
  },
  {
    name: 'Advanced Solutions',
    href: '/solutions',
    icon: <Rocket className='w-5 h-5' />,    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {

    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [

    description: 'Knowledge base and insights',
    category: 'resources',
    color: 'from-orange-500 to-red-500',
    children: [

    description: 'Company information and support',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      {
        href: '/about',
        description: 'Our story and mission',
        icon: <Info className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Users className='w-4 h-4' />,
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Support',
        href: '/support',
        description: 'Get help and support',
        icon: <MessageCircle className='w-4 h-4' />,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy',
        description: 'Privacy and data protection',
        icon: <Shield className='w-4 h-4' />,
        color: 'from-red-500 to-pink-500',
      },
    ],
  },];        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
    name: 'AI & Technology Services',
    href: '/services',
    icon: <Brain className='w - 5 h - 5' />,    description: 'Advanced AI and technology solutions',        name: 'Home',
        href: '/',
        description: 'Main homepage',
        icon: <Home className="w - 4 h - 4" />,
        color: 'from - emerald - 500 to - cyan - 500',
        featured: true;
      }
      {
        name: 'About Us',
        href: '/about',
        description: 'Company information and mission',
        icon: <Info className="w - 4 h - 4" />,
        color: 'from - blue - 500 to - cyan - 500';
      }
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
        icon: <Mail className="w - 4 h - 4" />,
        color: 'from - purple - 500 to - pink - 500';
      }
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our leadership team',
        icon: <Users className="w - 4 h - 4" />,
        color: 'from - orange - 500 to - red - 500';
      }
    ];
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

    name: 'Home & Core';
    href: '/';
    icon: <Home className;

<<<<<<< HEAD
const UltraFuturisticNavigation2047 = () =    /> {
 ;
>>>>>>> origin/chore/fix-lint-and-merge
  const [isOpen, setIsOpen] = useState(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    name: 'AI & Technology Services',
    href: '/services',
    icon: <Brain className="w - 5 h - 5" />,
    description: 'Advanced AI and technology solutions',
    badge: 'Featured',
    category: 'services',
<<<<<<< HEAD
    color: 'from - purple - 500 to - pink - 500',
    children: [;
      {
        name: 'All Services',
        href: '/services',
        description: 'Complete services overview',
        icon: <Grid className='w - 4 h - 4' />,
  color?: string
}
  color?: string;
  color?: string;  color?: string
}
  color?: string;

const navigationItems: NavigationItem[] = [
  {

    name: 'Home & Core'
    href: '/'
    icon: <Home className='w-5 h-5' />,    description: 'Main pages and core information'
    category: 'core'
    color: 'from-emerald-500 to-cyan-500'
    children: [
      {    icon: <Home className="w-5 h-5" />
    description: 'Main pages and core information'
    category: 'core'
    color: 'from-emerald-500 to-cyan-500'
    children: [
      {
        name: 'Home'
        href: '/'
        description: 'Main homepage'
        icon: <Home className='w-4 h-4' />
        color: 'from-emerald-500 to-cyan-500'
        featured: true
      }
      {
        name: 'About Us'
        href: '/about'
        description: 'Company information and mission'
        icon: <Info className='w-4 h-4' />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Contact'
        href: '/contact'
        description: 'Get in touch with our team'
        icon: <Mail className='w-4 h-4' />
        color: 'from-purple-500 to-pink-500'
      }
      {
        name: 'Team'
        href: '/team'
        description: 'Meet our leadership team'
        icon: <Users className='w-4 h-4' />
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
  {
    name: 'AI & Technology Services'
    href: '/services'
    icon: <Brain className='w-5 h-5' />,    description: 'Advanced AI and technology solutions',        name: 'Home'
        href: '/'
        description: 'Main homepage'
        icon: <Home className="w-4 h-4" />
        color: 'from-emerald-500 to-cyan-500'
        featured: true
      }
      {
        name: 'About Us'
        href: '/about'
        description: 'Company information and mission'
        icon: <Info className="w-4 h-4" />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Contact'
        href: '/contact'
        description: 'Get in touch with our team'
        icon: <Mail className="w-4 h-4" />
        color: 'from-purple-500 to-pink-500'
      }
      {
        name: 'Team'
        href: '/team'
        description: 'Meet our leadership team'
        icon: <Users className="w-4 h-4" />
        color: 'from-orange-500 to-red-500'
      }
    ]
  }
  {
    name: 'AI & Technology Services'
    href: '/services'
    icon: <Brain className="w-5 h-5" />
    description: 'Advanced AI and technology solutions'
    badge: 'Featured'
    category: 'services'
    color: 'from-purple-500 to-pink-500'
    children: [
      {
        name: 'All Services'
        href: '/services'
        description: 'Complete services overview'
        icon: <Grid className='w-4 h-4' />
        featured: true
      }
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-2029'
        description: 'Next-generation AI consciousness'
        icon: <Brain className='w-4 h-4' />
        color: 'from-purple-500 to-pink-500'
        featured: true
      }
      {
        name: 'Quantum Neural Networks'
        href: '/quantum-neural-network-platform'
        description: 'Quantum-powered AI neural networks'
        icon: <Atom className='w-4 h-4' />
        color: 'from-blue-500 to-cyan-500'
        featured: true
      }
      {
        name: 'Autonomous Business Operations'
        href: '/autonomous-business-operations-platform'
        description: 'AI-powered business automation'
        icon: <Bot className='w-4 h-4' />
        color: 'from-emerald-500 to-teal-500'
      }
      {
        name: 'IT Asset Management'
        href: '/ai-powered-it-asset-management'
        description: 'AI-powered IT infrastructure management'
        icon: <Monitor className='w-4 h-4' />
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  }
  {
    name: 'Advanced Solutions'
    href: '/solutions'
    icon: <Rocket className='w-5 h-5' />,    description: 'Cutting-edge technology solutions'
    category: 'solutions'
    color: 'from-blue-500 to-cyan-500'
    children: [
      {        name: 'All Services'
        href: '/services'
        description: 'Complete services overview'
        icon: <Grid className="w-4 h-4" />
        featured: true
      }
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-2029'
        description: 'Next-generation AI consciousness'
        icon: <Brain className="w-4 h-4" />
        color: 'from-purple-500 to-pink-500'
        featured: true
      }
      {
        name: 'Quantum Neural Networks'
        href: '/quantum-neural-network-platform'
        description: 'Quantum-powered AI neural networks'
        icon: <Atom className="w-4 h-4" />
        color: 'from-blue-500 to-cyan-500'
        featured: true
      }
      {
        name: 'Autonomous Business Operations'
        href: '/autonomous-business-operations-platform'
        description: 'AI-powered business automation'
        icon: <Bot className="w-4 h-4" />
        color: 'from-emerald-500 to-teal-500'
      }
      {
        name: 'IT Asset Management'
        href: '/ai-powered-it-asset-management'
        description: 'AI-powered IT infrastructure management'
        icon: <Monitor className="w-4 h-4" />
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  }
  {
    name: 'Advanced Solutions'
    href: '/solutions'
    icon: <Rocket className="w-5 h-5" />
    description: 'Cutting-edge technology solutions'
    category: 'solutions'
    color: 'from-blue-500 to-cyan-500'
    children: [
      {
        name: 'Solutions Overview'
        href: '/solutions'
        description: 'Complete solutions overview'
        icon: <Rocket className='w-4 h-4' />
        featured: true
      }
      {
        name: 'Blockchain Solutions'
        href: '/blockchain-solutions'
        description: 'Advanced blockchain technology'
        icon: <Database className='w-4 h-4' />
        color: 'from-emerald-500 to-teal-500'
      }
      {
        name: 'IoT Platforms'
        href: '/iot-platforms'
        description: 'Internet of Things solutions'
        icon: <Network className='w-4 h-4' />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Space Technology'
        href: '/space-tech'
        description: 'Space technology innovations'
        icon: <Globe2 className='w-4 h-4' />
        color: 'from-purple-500 to-pink-500'
      }
    ]
  }
  {
    name: 'Resources & Insights'
    href: '/blog'
    icon: <FileText className='w-5 h-5' />,    description: 'Knowledge base and insights'
    category: 'resources'
    color: 'from-orange-500 to-red-500'
    children: [
      {        name: 'Solutions Overview'
        href: '/solutions'
        description: 'Complete solutions overview'
        icon: <Rocket className="w-4 h-4" />
        featured: true
      }
      {
        name: 'Blockchain Solutions'
        href: '/blockchain-solutions'
        description: 'Advanced blockchain technology'
        icon: <Database className="w-4 h-4" />
        color: 'from-emerald-500 to-teal-500'
      }
      {
        name: 'IoT Platforms'
        href: '/iot-platforms'
        description: 'Internet of Things solutions'
        icon: <Network className="w-4 h-4" />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Space Technology'
        href: '/space-tech'
        description: 'Space technology innovations'
        icon: <Globe2 className="w-4 h-4" />
        color: 'from-purple-500 to-pink-500'
      }
    ]
  }
  {
    name: 'Resources & Insights'
    href: '/blog'
    icon: <FileText className="w-5 h-5" />
    description: 'Knowledge base and insights'
    category: 'resources'
    color: 'from-orange-500 to-red-500'
    children: [
      {
        name: 'Blog & Articles'
        href: '/blog'
        description: 'Latest insights and articles'
        icon: <FileText className='w-4 h-4' />
        featured: true
      }
      {
        name: 'Technology Insights'
        href: '/technology-insights'
        description: 'Technology trends and analysis'
        icon: <TrendingUp className='w-4 h-4' />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Case Studies'
        href: '/case-studies'
        description: 'Success stories and implementations'
        icon: <Star className='w-4 h-4' />
        color: 'from-yellow-500 to-orange-500'
      }
      {
        name: 'White Papers'
        href: '/white-papers'
        description: 'In-depth research and analysis'
        icon: <FileText className='w-4 h-4' />
        color: 'from-gray-500 to-slate-500'
      }
    ]
  }
  {
    name: 'Company & Support'
    href: '/about'
    icon: <Building className='w-5 h-5' />,    description: 'Company information and support'
    category: 'company'
    color: 'from-gray-500 to-slate-500'
    children: [
      {        name: 'Blog & Articles'
        href: '/blog'
        description: 'Latest insights and articles'
        icon: <FileText className="w-4 h-4" />
        featured: true
      }
      {
        name: 'Technology Insights'
        href: '/technology-insights'
        description: 'Technology trends and analysis'
        icon: <TrendingUp className="w-4 h-4" />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Case Studies'
        href: '/case-studies'
        description: 'Success stories and implementations'
        icon: <Star className="w-4 h-4" />
        color: 'from-yellow-500 to-orange-500'
      }
      {
        name: 'White Papers'
        href: '/white-papers'
        description: 'In-depth research and analysis'
        icon: <FileText className="w-4 h-4" />
        color: 'from-gray-500 to-slate-500'
      }
    ]
  }
  {
    name: 'Company & Support'
    href: '/about'
    icon: <Building className="w-5 h-5" />
    description: 'Company information and support'
    category: 'company'
    color: 'from-gray-500 to-slate-500'
    children: [
      {
        href: '/about'
        description: 'Our story and mission'
        icon: <Info className='w-4 h-4' />
        featured: true
      }
      {
        name: 'Careers'
        href: '/careers'
        description: 'Join our team'
        icon: <Users className='w-4 h-4' />
        color: 'from-green-500 to-emerald-500'
      }
      {
        name: 'Support'
        href: '/support'
        description: 'Get help and support'
        icon: <MessageCircle className='w-4 h-4' />
        color: 'from-blue-500 to-cyan-500'
      }
      {
        name: 'Privacy Policy'
        href: '/privacy'
        description: 'Privacy and data protection'
        icon: <Shield className='w-4 h-4' />
        color: 'from-red-500 to-pink-500'
      }
    ]
  },];        icon: <Shield className="w-4 h-4" />
        color: 'from-red-500 to-pink-500'
      }
    ]
  }
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const socialLinks = [
  {
    name: 'LinkedIn'
    href: 'https://linkedin.com/company/ziontechgroup'
    icon: Linkedin
    color: 'hover:text-blue-400'
  }
  {
    name: 'Twitter'
    href: 'https://twitter.com/ziontechgroup'
    icon: Twitter
    color: 'hover:text-sky-400'
  }
  {
    name: 'GitHub'
    href: 'https://github.com/Zion-Holdings'
    icon: Github
    color: 'hover:text-gray-400'
  }
  {
    name: 'YouTube'
    href: 'https://youtube.com/@ziontechgroup'
    icon: Youtube
    color: 'hover:text-red-500'
  },];  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' }
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' }
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
const UltraFuturisticNavigation2047 = () => {
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
<<<<<<< HEAD
  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);  };    setActiveDropdown(activeDropdown === name ? null : name)
  }

    description: 'Main pages and core information',
    category: 'core',
    color: 'from-emerald-500 to-cyan-500',
    children: [

    description: 'Advanced AI and technology solutions',

    badge: 'Featured',
    category: 'services',
    color: 'from-purple-500 to-pink-500',
    children: [
      {

        name: 'All Services',
        href: '/services',
        description: 'Complete services overview',
        icon: <Grid className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'AI Consciousness Evolution',
        href: '/ai-consciousness-evolution-2029',
        description: 'Next-generation AI consciousness',
        icon: <Brain className='w-4 h-4' />,
        color: 'from-purple-500 to-pink-500',
        featured: true,
      },
      {
        name: 'Quantum Neural Networks',
        href: '/quantum-neural-network-platform',
        description: 'Quantum-powered AI neural networks',
        icon: <Atom className='w-4 h-4' />,
        color: 'from-blue-500 to-cyan-500',
        featured: true,
      },
      {
        name: 'Autonomous Business Operations',
        href: '/autonomous-business-operations-platform',
        description: 'AI-powered business automation',
        icon: <Bot className='w-4 h-4' />,
        color: 'from-emerald-500 to-teal-500',
      },
      {
        name: 'IT Asset Management',
        href: '/ai-powered-it-asset-management',
        description: 'AI-powered IT infrastructure management',
        icon: <Monitor className='w-4 h-4' />,
        color: 'from-indigo-500 to-purple-500',
      },
    ],
  },
  {
    name: 'Advanced Solutions',
    href: '/solutions',
    icon: <Rocket className='w-5 h-5' />,    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {

    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [

    description: 'Knowledge base and insights',
    category: 'resources',
    color: 'from-orange-500 to-red-500',
    children: [

    description: 'Company information and support',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      {
        href: '/about',
        description: 'Our story and mission',
        icon: <Info className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Users className='w-4 h-4' />,
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Support',
        href: '/support',
        description: 'Get help and support',
        icon: <MessageCircle className='w-4 h-4' />,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy',
        description: 'Privacy and data protection',
        icon: <Shield className='w-4 h-4' />,
        color: 'from-red-500 to-pink-500',
      },
    ],
  },];        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
      }
    ]
  }

  };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);



const handleDropdownToggle = (
setActiveDropdown(activeDropdown === name ? null : name),) => {
  return $3;}
}
<<<<<<< HEAD

=======
};
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

  const toggleMenu = () => setIsOpen($2);
  const closeMenu = () => setIsOpen($2);
  const handleDropdownToggle = $2;
  useEffect(() => {
<<<<<<< HEAD
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen($2);
        setActiveDropdown(null)
      }
    },

    window.addEventListener($2);
    return () => window.removeEventListener('resize', handleResize)
  }, []),

  return (
    <nav className="relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
=======

    const handleResize = (
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
<<<<<<< HEAD
=======

<<<<<<< HEAD
  const handleDropdownToggle = (name: string) => {
setActiveDropdown(activeDropdown === name ? null : name);
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  useEffect(() => {}
    const handleResize = () => {}
      if (window.innerWidth >= 1024) {}
        setIsOpen(false);
setActiveDropdown(null);
=======
setActiveDropdown(null);) => {
  return $3;}
}
>>>>>>> origin/chore/fix-lint-and-merge
      }
<<<<<<< HEAD
    }

    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    };

    window && window.addEventListener('resize', handleResize);
    return () => window && window.removeEventListener('resize', handleResize);
<<<<<<< HEAD
        setActiveDropdown(null);      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);        setActiveDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, []);
  return (
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
<<<<<<< HEAD
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Rocket className='w-5 h-5 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>                Zion Tech Group  }, []);
  }, []);
;
  return (
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
>>>>>>> merged-prs-20250907-203621
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>
  category?: string;color?: string;
}
  color?: string;
  color?: string;  color?: string;
}
  color?: string;const navigationItems: NavigationItem[] = [;
  {name: 'Home & Core';
    href: '/';
    icon: <Home className='w-5 h-5' />,    description: 'Main pages and core information';
    category: 'core';
    color: 'from-emerald-500 to-cyan-500';
    children: [;
      {    icon: <Home className="w-5 h-5" />;
    description: 'Main pages and core information';
    category: 'core';
    color: 'from-emerald-500 to-cyan-500';
    children: [;
      {}
const navigation_items: NavigationItem[] = [;
  {name: 'Home & Core',href: '/',icon: <Home className='w - 5 h - 5' />,    description: 'Main pages and core information',category: 'core',color: 'from - emerald - 500 to - cyan - 500',children: [;
      {    icon: <Home className="w - 5 h - 5" />,description: 'Main pages and core information',category: 'core',color: 'from - emerald - 500 to - cyan - 500',children: [;
      {name: 'Home',href: '/',description: 'Main homepage',icon: <Home className='w - 4 h - 4' />,color: 'from - emerald - 500 to - cyan - 500',featured: true,},{name: 'About Us',href: '/about',description: 'Company information and mission',icon: <Info className='w - 4 h - 4' />,color: 'from - blue - 500 to - cyan - 500',},{name: 'Contact',href: '/contact',description: 'Get in touch with our team',icon: <Mail className='w - 4 h - 4' />,color: 'from - purple - 500 to - pink - 500',},{name: 'Team',href: '/team',description: 'Meet our leadership team',icon: <Users className='w - 4 h - 4' />,color: 'from - orange - 500 to - red - 500',},],},{name: 'Advanced Solutions',href: '/solutions',icon: <Rocket className='w-5 h-5' />,    description: 'Cutting-edge technology solutions',category: 'solutions',color: 'from-blue-500 to-cyan-500',children: [;
      {description: 'Cutting-edge technology solutions',category: 'solutions',color: 'from-blue-500 to-cyan-500',children: [;
    description: 'Knowledge base and insights',category: 'resources',color: 'from-orange-500 to-red-500',children: [;
    description: 'Company information and support',category: 'company',color: 'from-gray-500 to-slate-500',children: [;
      {href: '/about',description: 'Our story and mission',icon: <Info className='w-4 h-4' />,featured: true,},{name: 'Careers',href: '/careers',description: 'Join our team',icon: <Users className='w-4 h-4' />,color: 'from-green-500 to-emerald-500',},{name: 'Support',href: '/support',description: 'Get help and support',icon: <MessageCircle className='w-4 h-4' />,color: 'from-blue-500 to-cyan-500',},{name: 'Privacy Policy',href: '/privacy',description: 'Privacy and data protection',icon: <Shield className='w-4 h-4' />,color: 'from-red-500 to-pink-500',},],},];        icon: <Shield className="w-4 h-4" />,color: 'from-red-500 to-pink-500';
    name: 'AI & Technology Services',href: '/services',icon: <Brain className='w - 5 h - 5' />,    description: 'Advanced AI and technology solutions',        name: 'Home',href: '/',description: 'Main homepage',icon: <Home className="w - 4 h - 4" />,color: 'from - emerald - 500 to - cyan - 500',featured: true;
      }
      {name: 'About Us',href: '/about',description: 'Company information and mission',icon: <Info className="w - 4 h - 4" />,color: 'from - blue - 500 to - cyan - 500';
      }
      {name: 'Contact',href: '/contact',description: 'Get in touch with our team',icon: <Mail className="w - 4 h - 4" />,color: 'from - purple - 500 to - pink - 500';
      }
      {name: 'Team',href: '/team',description: 'Meet our leadership team',icon: <Users className="w - 4 h - 4" />,color: 'from - orange - 500 to - red - 500';
      }
    ];name: 'Home & Core';
    href: '/';
    icon: <Home className;
const UltraFuturisticNavigation2047 = () => {const [isOpen, setIsOpen] = useState(false)const [activeDropdown, setActiveDropdown] = useState<string | null>(null)const toggleMenu = () => setIsOpen(!isOpen)const closeMenu  = () => setIsOpen(false)const handleDropdownToggle = (name: string) => {setActiveDropdown(activeDropdown === name ? null : name)}useEffect(() => {const handleResize = () => {if (window.innerWidth >= 1024) {setIsOpen(false)setActiveDropdown(null)}
    }window.addEventListener('resize', handleResize)return () => window.removeEventListener('resize', handleResize)}, [])return (<nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex justify-between items-center h-16'>;
          {/* Logo */}
          <div className='flex-shrink-0'>;
            <Link href='/' className='flex items-center space-x-2'>;
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>;
                <Rocket className='w-5 h-5 text-white' />;
              </div>;
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>                Zion Tech Group  }, [])}, [])return (<div className="flex-shrink-0">;
=======
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Rocket className='w-5 h-5 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>                Zion Tech Group  }, []);

  return (
<<<<<<< HEAD
    <nav className="relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
=======
    <nav className="relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-16">;
          {/* Logo */}

  return (


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

<<<<<<< HEAD
      }
    };

    window.addEventListener('resize', handleResize);

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Zion Tech Group
              </span>
            </Link>
          </div>
<<<<<<< HEAD
=======


          <div className="flex-shrink-0">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Link href="/" className="flex items-center space-x-2">;
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">;
                <Rocket className="w-5 h-5 text-white" />;
              </div>;
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Zion Tech Group
              </span>
            </Link>
          </div>
=======
<<<<<<< HEAD
    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
  }, []);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <nav className='relative bg - slate - 900 / 95 backdrop - blur - md border - b border - slate - 700 / 50 z - 50'>;
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='flex justify - between items - center h - 16'>;
          {/* Logo */}
          <div className='flex - shrink - 0'>;
            <Link href='/' className='flex items - center space - x-2'>;
              <div className='w - 8 h - 8 bg - gradient - to - r from - purple - 500 to - blue - 500 rounded - lg flex items - center justify - center'>;
                <Rocket className='w - 5 h - 5 text - white' />;
              </div>;
              <span className='text - xl font - bold bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>                Zion Tech Group  }, []);
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'    />
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
        <div className='flex justify-between items-center h-16'    />
          {/* Logo *}
}
          <div className='flex-shrink-0'    />
            <Link href='/' className='flex items-center space-x-2'    />
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'    />
                <Rocket className='w-5 h-5 text-white'    />
              </div>

<<<<<<< HEAD
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'    />
                Zion Tech Group;
              </span>
            </Link>
          </div>

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;
<<<<<<< HEAD
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}<div className='hidden lg:flex lg:items-center lg:space-x-8'>;
            {navigationItems && navigationItems.map(item => (<div key={item && item.name} className='relative group'>;
                <button;
<div className='hidden lg:flex lg:items-center lg:space-x-8'>;
            {navigationItems.map(item => (<div key={item.name} className='relative group'>;
                <button;
                  onClick={() => handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200';
                >;
=======

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10}}
                      animate={{ opacity: 1, y: 0}}
                      exit={{ opacity: 0, y: 10}}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50"
                    >
                      <div className="space-y-4">
                        {item.children?.map((child) => (
                          <Link
=======

<div className='hidden lg: flex lg:items-center lg:space-x-8'    />
            {navigationItems.map(item => (}
              <div key={item.name} className='relative group'    />
                <button;
onClick={() =    /> handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'>

>>>>>>> origin/chore/fix-lint-and-merge
                  {item.icon}
                  <span    />{item.nam}
}</span>;
                  <ChevronDown className='w-4 h-4'    />;
                </button>;
<<<<<<< HEAD
                <AnimatePresence>;
                  {activeDropdown === item.name && (<motion.div;
                <button

<div className='hidden lg:flex lg:items-center lg:space-x-8'>
            {navigationItems.map(item => (
              <div key={item.name} className='relative group'>
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4' />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:space-x-8'>;
            {navigationItems && navigationItems.map(item => (;
              <div key={item && item.name} className='relative group'>;
<<<<<<< HEAD
                <button
=======


          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:space-x-8'>
            {navigationItems.map(item => (
              <div key={item.name} className='relative group'>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4' />                </button>                <button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon,
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon,
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin
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
  featured?: boolean,
  category?: string,
  color?: string
=======
                <AnimatePresence    />;
                  {activeDropdown === item.name && (<motion.div;}
                      initial={{ opacity: 0, y: 10 }
>>>>>>> origin/chore/fix-lint-and-merge
}
                      animate={{ opacity: 1, y: 0 }
}
=======
<<<<<<< HEAD
                    >
                      <div className='space-y-4'>
                        {item.children?.map(child => (
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'
=======
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}

<<<<<<< HEAD
className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'
                        />
                      <div className='space-y-4'    />
                        {item.children?.map(child => (}
                      transition={{ duration: 0 && 0.2 }
}
                      className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'>;
                      <div className='space-y-4'    />;
                        {item && item.children?.map(child => (;
                          <Link}
                            <div;}
className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                              {child.icon}
                            </div>;
<<<<<<< HEAD
                            <div className='flex-1'>;'
                              <div className='flex items-center space-x-2'>;'
                                <span className='font-medium text-white'>;'
                                  {child.name}
>>>>>>> merged-prs-20250907-203621
                            key={child.name}
                            href={child.href}
                            className='flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200'
                            onClick={closeMenu}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-slate-500'}`}>
                              {child.icon}
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center space-x-2'>
                                <span className='font-medium text-white'>{child.name}</span>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
<<<<<<< HEAD
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                            </div>
=======
                      <div className='space-y-4'>
                        {item.children?.map(child => (
<<<<<<< HEAD
                      transition={{ duration: 0 && 0.2 }}'
                      className=absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50>;'
                      <div className='space-y-4>;
                        {item && item.children?.map(child => (;
                          <Link
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}
                            >
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          <Link
                            key={child.name}
                            href={child.href}
                            className='flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200'
                            onClick={closeMenu}
                          >
                            <div
<<<<<<< HEAD
                              className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}
                            >
=======

          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items - center lg:space - x-8'>;
            {navigation_items.map (item => (
              <div key={item.name} className='relative group'>;
                <button;
                  on_click={() => handleDropdownToggle (item.name)}
                  className='flex items - center space - x-1 px - 3 py - 2 text - sm font - medium text - gray - 300 hover:text - white transition - colors duration - 200';
                >;
                  {item.icon}
                  <span>{item.name}</span>;
                  <ChevronDown className='w - 4 h - 4' />                </button>                <button;
                  on_click={() => handleDropdownToggle (item.name)}
                  className="flex items - center space - x-1 px - 3 py - 2 text - sm font - medium text - gray - 300 hover:text - white transition - colors duration - 200";
                >;
                  {item.icon}
                  <span>{item.name}</span>;
                  <ChevronDown className="w - 4 h - 4" />;
                </button>;
                <AnimatePresence>;
                  {active_dropdown === item.name && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top - full left - 0 w - 80 bg - slate - 800 / 95 backdrop - blur - md border border - slate - 700 / 50 rounded - xl shadow - 2xl p - 6 z - 50';
                    >;
                      <div className='space - y-4'>;
                        {item.children?.map (child => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className='flex items - start space - x-3 p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration - 200';
                            on_click={close_menu}
                          >;
                            <div;
                              className={`p - 2 rounded - lg bg - gradient - to - r ${child.color || 'from - gray - 500 to - slate - 500'}`}
                            >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                              {child.icon}
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center space-x-2'>
                                <span className='font-medium text-white'>
<<<<<<< HEAD
=======
                            <div className='flex-1'    />;
                              <div className='flex items-center space-x-2'    />;
                                <span className='font-medium text-white'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                                  {child.name}

                                </span>
                                {child.featured && (
<<<<<<< HEAD
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>
                                    Featured
                                  </span>
=======
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'    />
                                    Featured}
                                  </span>}
>>>>>>> origin/chore/fix-lint-and-merge
                                )}
                              </div>
<<<<<<< HEAD
<p className='text-sm text-gray-400 mt-1'>
                                </span>;
                                {child.featured && (<span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>;
=======
                                  {child.name}
                                </span>
                                {child.featured && (
<<<<<<< HEAD
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>                                    Featured
                                  </span>
=======

                              className={`p-2 rounded-lg bg-gradient-to-r ${child && child.color || 'from-gray-500 to-slate-500'}`}>;
                              {child && child.icon}
                            </div>;
                            <div className='flex-1'>;
                              <div className='flex items-center space-x-2'>;
                                <span className='font-medium text-white'>;
                                  {child && child.name}
                                </span>;
                                {child && child.featured && (;
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>                                    Featured;
                                  </span>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                                )}
                              </div>
                              <p className='text-sm text-gray-400 mt-1'>
                                {child.description}
                              </p>                            </div>                    >
                      <div className="space-y-4">
                        {item.children?.map((child) => (
                          <Link
<<<<<<< HEAD
                            key={child.name}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}>
=======
                            key={child && child.name}
                            href={child && child.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"

                                  <span className='px - 2 py - 1 text - xs font - medium bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full'>                                    Featured;
                                  </span>)}
                              </div>;
                              <p className='text - sm text - gray - 400 mt - 1'>;
                                {child.description}
                              </p>                            </div>                    >;
                      <div className="space - y-4">;
                        {item.children?.map ((child) => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className="flex items - start space - x-3 p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration - 200";
                            on_click={close_menu}
                          >;
                            <div className={`p - 2 rounded - lg bg - gradient - to - r ${child.color || 'from - gray - 500 to - slate - 500'}`}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-white">{child.name}</span>
                                {child.featured && (
<<<<<<< HEAD
=======

                            onClick={closeMenu}>;
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${child && child.color || 'from-gray-500 to-slate-500'}`}>;
                              {child && child.icon}
                            </div>;
                            <div className="flex-1">;
                              <div className="flex items-center space-x-2">;
                                <span className="font-medium text-white">{child && child.name}</span>;
                                {child && child.featured && (;
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                                    Featured;
                                  </span>;
                                )}</div>;
<p className='text-sm text-gray-400 mt-1'>;
=======
<<<<<<< HEAD
<p className='text-sm text-gray-400 mt-1'    />

>>>>>>> origin/chore/fix-lint-and-merge
                                {child.description}
                              </p>;
                            </div>;
                          </Link>;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                              </div>
                              <p className='text-sm text-gray-400 mt-1'>{child.description}</p>
                            </div>
                            </div>

                          </Link>
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        ))}
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
<<<<<<< HEAD
          {/* Contact Info & CTA */}


<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Contact Info & CTA */}

<div className='hidden lg: flex lg:items-center lg:space-x-4'    />
            <div className='flex items-center space-x-4 text-sm text-gray-400'    />
              <a;
href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
                  />
>>>>>>> origin/chore/fix-lint-and-merge

                <Phone className='w-4 h-4'    />
                <span    />{contactInfo.mobile}</span>
              </a>
            </div>
            <Link;
href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                />
              Get Started;
              <ArrowRight className='ml-2 w-4 h-4'    />
            </Link>
          </div>

          {/* Mobile menu button *}
}
<div className='lg:hidden'    />;
            <button;
              onClick={toggleMenu}

              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                />
              <span className='sr-only'    />Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6'    />
              ) : (
                <Menu className='block h-6 w-6'    />
}
              }
}
            </button>;
          </div>;
        </div>;
      </div>;
<div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <a

                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >'
                <Phone className='w-4 h-4' />                <span>{contactInfo.mobile}</span>
              </a>
            </div>"
            <Link          <div className="hidden lg:flex lg:items-center lg:space-x-4">"
            <div className="flex items-center space-x-4 text-sm text-gray-400">"`
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">"
                <Phone className="w-4 h-4" />
<<<<<<< HEAD
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className='text-sm text-gray-400 mt-1'>
                                {child.description}
                              </p>                              <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                            </div>

>>>>>>> merged-prs-20250907-203621
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
<<<<<<< HEAD
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
=======
          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >
                <Phone className='w-4 h-4' />                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
              <a href={`tel:${contactInfo.mobile}`} className='flex items-center space-x-1 hover:text-white transition-colors'>
                <Phone className='w-4 h-4' />

>>>>>>> merged-prs-20250907-203621
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link
<<<<<<< HEAD
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
=======
              href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>
          </div>
          {/* Mobile menu button */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              </a>
            </div>
<<<<<<< HEAD
            <Link'
=======
            <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              href='/contact'
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link"
              href="/contact"
<<<<<<< HEAD
"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            >
              Get Started"
              <ArrowRight className="ml-2 w-4 h-4" />'
=======

<<<<<<< HEAD
          <div className='lg:hidden'>              href="/contact"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
<<<<<<< HEAD
            </Link>
=======

            </Link>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>;
              Get Started;'
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>;
          </div>;
<<<<<<< HEAD
                <Phone className='w-4 h-4' />
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link
href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4' />
            </Link>
          </div>
          {/* Mobile menu button */}
<div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
              )}
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0}}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
=======
=======
          {/* Mobile menu button */}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
<<<<<<< HEAD
      <AnimatePresence>;
        {isOpen && (<motion&& motion.div;
            }
            initial={{ "opacity": 0, "height": 0 
=======
<<<<<<< HEAD
      <AnimatePresence    />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
>>>>>>> origin/chore/fix-lint-and-merge
}
            animate={{ opacity: 1, height: 'auto' }
}

            exit={{ opacity: 0, height: 0 }}

<<<<<<< HEAD
            transition={{ "duration": 0.3 }}
className='"lg":hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50''
>>>>>>> merged-prs-20250907-203621
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
<<<<<<< HEAD
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0}}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='ml-4 mt-2 space-y-1'
=======
            exit={{ opacity: 0, height: 0 }}transition={{ duration: 0.3 }}
className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50';
          >;
            <div className='px-2 pt-2 pb-3 space-y-1'>;
              {navigationItems.map(item => (<div key={item.name}>;
                  <button;
                    onClick={() => handleDropdownToggle(item && item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200';
                  >;
            transition={{ duration: 0.3 }}
className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button;
                    onClick={() => handleDropdownToggle(item && item.name)}'
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200';
                  >;'
                    <div className='flex items-center space-x-2'>;
=======
            transition={{ duration: 0.3 }}
className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'
              />
            <div className='px-2 pt-2 pb-3 space-y-1'    />
              {navigationItems.map(item => (}
                <div key={item.name}    />
                  <button;
onClick={() =    /> handleDropdownToggle(item && item.name}
}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'>

                    <div className='flex items-center space-x-2'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      {item && item.icon}
                      <span    />{item && item.name}</span>;
                    </div>;
                    <ChevronDown;
                    <ChevronDown
                    <ChevronDown;
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`}
                    />;
                  </button>          >;
            <div className="px-2 pt-2 pb-3 space-y-1">;
              {navigationItems && navigationItems.map((item) => (<div key={item && item.name}>;
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50";
          >;
            <div className="px-2 pt-2 pb-3 space-y-1">;
              {navigationItems.map((item) => (<div key={item.name}>;
                  <button;
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />;
                  </button>;
                  <AnimatePresence>;
                    {activeDropdown === item.name && (<motion.div;
            </Link>
          </div>

<<<<<<< HEAD
          {/* Mobile menu button */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
              )}
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              )}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
=======
                                  <span className="px - 2 py - 1 text - xs font - medium bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full">;
                                    Featured;
                                  </span>)}
                              </div>;
                              <p className='text - sm text - gray - 400 mt - 1'>;
                                {child.description}
                              </p>                              <p className="text - sm text - gray - 400 mt - 1">{child.description}</p>;
                            </div>;
                          </Link>))}
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>))}
          </div>;
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex lg:items - center lg:space - x-4'>;
            <div className='flex items - center space - x-4 text - sm text - gray - 400'>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className='flex items - center space - x-1 hover:text - white transition - colors';
              >;
                <Phone className='w - 4 h - 4' />                <span>{contact_info.mobile}</span>;
              </a>;
            </div>;
            <Link          <div className="hidden lg:flex lg:items - center lg:space - x-4">;
            <div className="flex items - center space - x-4 text - sm text - gray - 400">;
              <a href={`tel:${contact_info.mobile}`} className="flex items - center space - x-1 hover:text - white transition - colors">;
                <Phone className="w - 4 h - 4" />;
              </a>;
            </div>;
            <Link;
              href='/contact';
              className='inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200';
            >;
              Get Started;
              <ArrowRight className='ml - 2 w - 4 h - 4' />            </Link>;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>              href="/contact";
              className="inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200";
            >;
              Get Started;
              <ArrowRight className="ml - 2 w - 4 h - 4" />;
          </div>;
          {/* Mobile menu button */}
          <div className='lg:hidden'>;
            <button;
              on_click={toggle_menu}
              className='inline - flex items - center justify - center p - 2 rounded - md text - gray - 400 hover:text - white hover:bg - slate - 700 focus:outline - none focus:ring - 2 focus:ring - inset focus:ring - white';
            >;
              <span className='sr - only'>Open main menu</span>;
              {is_open ? (
                <X className='block h - 6 w - 6' />) : (
                <Menu className='block h - 6 w - 6' />              )}            <button;
              on_click={toggle_menu}
              className="inline - flex items - center justify - center p - 2 rounded - md text - gray - 400 hover:text - white hover:bg - slate - 700 focus:outline - none focus:ring - 2 focus:ring - inset focus:ring - white";
            >;
              <span className="sr - only">Open main menu</span>;
              {is_open ? (
                <X className="block h - 6 w - 6" />) : (
                <Menu className="block h - 6 w - 6" />)}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
<<<<<<< HEAD
            exit={{ opacity: 0, height: 0}}
=======
            exit={{ opacity: 0, height: 0 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item && item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200';
                  >;
                    <div className='flex items-center space-x-2'>;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`}
                    />;
                  </button>          >;
            <div className="px-2 pt-2 pb-3 space-y-1">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name}>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

                  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    onClick={() => handleDropdownToggle(item && item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200";
                  >;
                    <div className="flex items-center space-x-2">;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
}
onClick={() => handleDropdownToggle(item && item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 'hover':text-white 'hover':bg-slate-700/50 rounded-md transition-colors duration-200'>'

                    <div className='flex items-center space-x-2'>;'
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;'`
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`} />;
                  </button>;
<<<<<<< HEAD
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (<motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
                        className='ml-4 mt-2 space-y-1'
=======
                    <ChevronDown;
className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                       />
                  </button>
                  <AnimatePresence    />
                    {activeDropdown === item.name && (}
                      <motion.div;}
onClick={() =    /> handleDropdownToggle(item && item.name)}
                    className=\"w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200\">
"
                    <div className=\"flex items-center space-x-2\"    />;
                      {item && item.icon}
                      <span    />{item && item.name}</span>;
                    </div>;
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`}    />;
                  </button>;
      {/* Mobile Navigation */}
      <AnimatePresence    />;
        {is_open && (<motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
}
            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}
>>>>>>> origin/chore/fix-lint-and-merge

=======
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;

              )}

            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50'

          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                  >
                    <div className='flex items-center space-x-2'>
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        transition={{ duration: 0.2 }}

className='ml-4 mt-2 space-y-1'
                          />
                        {item.children?.map(child => (}
                          <Link;}
key={child.name}
                            href={child.href}
<<<<<<< HEAD

<<<<<<< HEAD
=======

                          >
                            {child.name}
                          </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        ))}
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}

              {/* Mobile Contact Info */}'
              <div className=pt-4 pb-3 border-t border-slate-700/50>;'
                <div className='px-3 py-2 text-sm text-gray-400>;
                  <div className='flex items-center space-x-2 mb-2'>;
                    <Phone className=w-4 h-4' />;'
                      className=hover:text-white transition-colors>;
                      {contactInfo && contactInfo.mobile}
                    </a>;
                  </div>;
                  <Link'
                    href='/contact
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}>;
                    Get Started;
                    <ArrowRight className=ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}"
              <div className=pt-4 pb-3 border-t border-slate-700/50>"
                <div className="px-3 py-2 text-sm text-gray-400>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className=w-4 h-4" />"`
                    <a href={`tel:${contactInfo.mobile}`} className=hover:text-white transition-colors>
                      {contactInfo.mobile}
                    </a>
                  </div>"
                  <div className="flex items-center space-x-2 mb-2>
                    <Mail className="w-4 h-4" />`
                    <a href={`mailto:${contactInfo.email}`} className=hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>"
                  <div className=flex items-center space-x-2>"
                    <MapPin className="w-4 h-4 />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="px-3 pt-2">
<<<<<<< HEAD
              <div className=pt-4 pb-3 border-t border-slate-700/50">;
=======
              <div className="pt-4 pb-3 border-t border-slate-700/50">;
<<<<<<< HEAD
                        transition={{ duration: 0.2 }}
=======
                <div className="px-3 py-2 text-sm text-gray-400">;
                  <div className="flex items-center space-x-2 mb-2">;
                    <Phone className="w-4 h-4" />;
                    <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-white transition-colors">;
                      {contactInfo && contactInfo.mobile}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </a>;
                  </div>;"
                  <div className=flex items-center space-x-2 mb-2>;"
                    <Mail className="w-4 h-4 />;`
                    <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-white transition-colors">;
                      {contactInfo && contactInfo.email}
                    </a>;
                  </div>;
                  <div className=flex items-center space-x-2">;"
                    <MapPin className=w-4 h-4 />;
                    <span>{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
                      >
                        {item.children?.map(child => (
                          <Link;
                            key={child.name}
                            href={child.href}
className='ml-4 mt-2 space-y-1
=======
                <div className="px-3 pt-2">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        className='ml-4 mt-2 space-y-1'

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
<<<<<<< HEAD
className='ml-4 mt-2 space-y-1'
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                            onClick={closeMenu}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
=======
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
>>>>>>> origin/chore/fix-lint-and-merge
                            onClick={closeMenu}
                              />

                            {child.nam}
}
                          </Link>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}

                        transition={{ duration: 0.2 }}'
                        className='ml-4 mt-2 space-y-1'

                          <Link;
                            key={child.name}
                            href={child.href}'
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}                      >
                        {item.children?.map((child) => (
                          <Link;
                            key={child.name}
                            href={child.href}"
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                        ))}
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
{/* Mobile Contact Info */}
              <div className='pt-4 pb-3 border-t border-slate-700/50'>;
                <div className='px-3 py-2 text-sm text-gray-400'>;
                  <div className='flex items-center space-x-2 mb-2'>;
                    <Phone className='w-4 h-4' />;
                    <a;
                      href={`tel:${contactInfo.mobile}`}
                      className='hover:text-white transition-colors';
                    >;
                      {contactInfo.mobile}
                    </a>;
                  </div>;
                  <div className='flex items-center space-x-2 mb-2'>;
                    <Mail className='w-4 h-4' />;
                    <a;
                      href={`mailto:${contactInfo.email}`}
                      className='hover:text-white transition-colors';
                    >;
                      {contactInfo.email}
                    </a>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-4 h-4' />;
                    <span>{contactInfo.address}</span>;
                  </div>;
                </div>;
                <div className='px-3 pt-2'>;
                  <Link;
                  <Link;
                    href="/contact";
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200";
                  </Link>;
                </div>;
              </div>;
            </div>;export default UltraFuturisticNavigation2047;
          </motion.div>)}
      </AnimatePresence>;
    </nav>)}export default UltraFuturisticNavigation2047)}export default UltraFuturisticNavigation2047;)export default UltraFuturisticNavigation2047;  )}
export default UltraFuturisticNavigation2047;export default UltraFuturisticNavigation2047;href='/contact';
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200';
                    onClick={closeMenu}
                  >;
                    Get Started;
                    <ArrowRight className='ml-2 w-4 h-4' />;
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
=======
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                            onClick={closeMenu}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}

                            onClick={closeMenu}

>>>>>>> merged-prs-20250907-203621
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
              {/* Mobile Contact Info */}
              <div className='pt-4 pb-3 border-t border-slate-700/50'>
                <div className='px-3 py-2 text-sm text-gray-400'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Phone className='w-4 h-4' />
<<<<<<< HEAD
=======
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Mail className='w-4 h-4' />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='w-4 h-4' />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className='px-3 pt-2'>
                  <Link
                    href='/contact'
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className='ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}
              <div className="pt-4 pb-3 border-t border-slate-700/50">
                <div className="px-3 py-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="px-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        className='ml - 4 mt - 2 space - y-1';
                      >;
                        {item.children?.map (child => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className='block px - 3 py - 2 text - sm text - gray - 400 hover:text - white hover:bg - slate - 700 / 50 rounded - md transition - colors duration - 200'                            on_click={close_menu}                      >;
                        {item.children?.map ((child) => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className="block px - 3 py - 2 text - sm text - gray - 400 hover:text - white hover:bg - slate - 700 / 50 rounded - md transition - colors duration - 200";
                            on_click={close_menu}
                          >;
                            {child.name}
                          </Link>))}
                      </motion.div>)}
                  </AnimatePresence>;
                </div>))}
              {/* Mobile Contact Info */}
              <div className='pt - 4 pb - 3 border - t border - slate - 700 / 50'>;
                <div className='px - 3 py - 2 text - sm text - gray - 400'>;
                  <div className='flex items - center space - x-2 mb - 2'>;
                    <Phone className='w - 4 h - 4' />;
                    <a;
                      href={`tel:${contact_info.mobile}`}
                      className='hover:text - white transition - colors';
                    >;
                      {contact_info.mobile}
                    </a>;
                  </div>;
                  <div className='flex items - center space - x-2 mb - 2'>;
                    <Mail className='w - 4 h - 4' />;
                    <a;
                      href={`mailto:${contact_info.email}`}
                      className='hover:text - white transition - colors';
                    >;
                      {contact_info.email}
                    </a>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <div className='px - 3 pt - 2'>;
                  <Link;
                    href='/contact';
                    className='w - full inline - flex items - center justify - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200';
                    on_click={close_menu}
                  >;
                    Get Started;
                    <ArrowRight className='ml - 2 w - 4 h - 4' />                  </Link>              {/* Mobile Contact Info */}
              <div className="pt - 4 pb - 3 border - t border - slate - 700 / 50">;
                <div className="px - 3 py - 2 text - sm text - gray - 400">;
                  <div className="flex items - center space - x-2 mb - 2">;
                    <Phone className="w - 4 h - 4" />;
                    <a href={`tel:${contact_info.mobile}`} className="hover:text - white transition - colors">;
                      {contact_info.mobile}
                    </a>;
                  </div>;
                  <div className="flex items - center space - x-2 mb - 2">;
                    <Mail className="w - 4 h - 4" />;
                    <a href={`mailto:${contact_info.email}`} className="hover:text - white transition - colors">;
                      {contact_info.email}
                    </a>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <MapPin className="w - 4 h - 4" />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <div className="px - 3 pt - 2">;
                  <Link;
                    href="/contact";
                    className="w - full inline - flex items - center justify - center px - 4 py - 2 bg - gradient - to - r from - purple - 500 to - blue - 500 text - white text - sm font - medium rounded - lg hover:from - purple - 600 hover:to - blue - 600 transition - all duration - 200";
                    on_click={close_menu}
                  >;
                    Get Started;
                    <ArrowRight className="ml - 2 w - 4 h - 4" />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </Link>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
          </motion.div>;
        )}
      </AnimatePresence>;
    </nav>;

export default UltraFuturisticNavigation2047;
=======
<<<<<<< HEAD
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
=======


};
export default UltraFuturisticNavigation2047;  );
};
export default UltraFuturisticNavigation2047;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
;
export default UltraFuturisticNavigation2047);
}
;
export default UltraFuturisticNavigation2047;
;
<<<<<<< HEAD
  );
export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;
=======
<<<<<<< HEAD
  );
  );
}
};

export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default UltraFuturisticNavigation2047;
)}export default UltraFuturisticNavigation2047;
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0}}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0}}
                        transition = $2;
export default UltraFuturisticNavigation2047,

"
              {/* Mobile Contact Info */}'
              <div className='pt-4 pb-3 border-t border-slate-700/50'>;'
                <div className='px-3 py-2 text-sm text-gray-400'>;'
                  <div className='flex items-center space-x-2 mb-2'>;'
                    <Phone className='w-4 h-4' />;'
                      className='hover:text-white transition-colors'>;
                      {contactInfo && contactInfo.mobile}
                    </a>;
                  </div>;
                  <Link'
                    href='/contact''
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}>;
                    Get Started;'
                    <ArrowRight className='ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}"
              <div className="pt-4 pb-3 border-t border-slate-700/50">"
                <div className="px-3 py-2 text-sm text-gray-400">"
                  <div className="flex items-center space-x-2 mb-2">"
                    <Phone className="w-4 h-4" />"`
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>"
                  <div className="flex items-center space-x-2 mb-2">"
                    <Mail className="w-4 h-4" />"`
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>"
                  <div className="flex items-center space-x-2">"
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>"
                <div className="px-3 pt-2">"
              <div className="pt-4 pb-3 border-t border-slate-700/50">;
                    </a>;
                  </div>;"
                  <div className="flex items-center space-x-2 mb-2">;"
                    <Mail className="w-4 h-4" />;"`
                    <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-white transition-colors">;
                      {contactInfo && contactInfo.email}
                    </a>;
                  </div>;"
                  <div className="flex items-center space-x-2">;"
                    <MapPin className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
                      >
                        {item.children?.map(child => (
                          <Link;
                            key={child.name}
                            href={child.href}
className='ml-4 mt-2 space-y-1'
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                            onClick={closeMenu}
origin/cursor/automate-test-improve-and-merge-code-2533
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
{/* Mobile Contact Info */}
<<<<<<< HEAD
              <div className='pt-4 pb-3 border-t border-slate-700/50'>
                <div className='px-3 py-2 text-sm text-gray-400'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Phone className='w-4 h-4' />
>>>>>>> merged-prs-20250907-203621
                    <a;`
                      href={`tel:${contactInfo.mobile}`}'
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>'
                  <div className='flex items-center space-x-2 mb-2'>'
                    <Mail className='w-4 h-4' />
                    <a;`
                      href={`mailto:${contactInfo.email}`}'
                      className='hover:text-white transition-colors'
                    >
<<<<<<< HEAD
=======
=======
              <div className='pt-4 pb-3 border-t border-slate-700/50'    />;
                <div className='px-3 py-2 text-sm text-gray-400'    />;
                  <div className='flex items-center space-x-2 mb-2'    />;
                    <Phone className='w-4 h-4'    />;
                    <a;
                      href={`tel: ${contactInfo.mobile}`}
                      className='hover:text-white transition-colors'    />

                      {contactInfo.mobil}
}
                    </a>;
                  </div>;
                  <div className='flex items-center space-x-2 mb-2'    />;
                    <Mail className='w-4 h-4'    />;
                    <a;
                      href={`mailto: ${contactInfo.email}`}
                      className='hover:text-white transition-colors'    />

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                      {contactInfo.email}

                    </a>
                  </div>
<<<<<<< HEAD
                  <div className='flex items-center space-x-2'    />
                    <MapPin className='w-4 h-4'    />
                    <span    />{contactInfo.address}</span>
=======
<<<<<<< HEAD

                  <div className='flex items-center space-x-2'>
                    <MapPin className=w-4 h-4' />
                    <span>{contactInfo.address}</span>
>>>>>>> merged-prs-20250907-203621
                  </div>
                </div>'
                <div className='px-3 pt-2'>
                  <Link;
                  <Link"
                    href="/contact""
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  </Link>;
                </div>;
              </div>;
            </div>;

export default UltraFuturisticNavigation2047;
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
;
export default UltraFuturisticNavigation2047);
}
;
export default UltraFuturisticNavigation2047;
;
  );
export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;

export default UltraFuturisticNavigation2047;
                    href='/contact'
=======
                  <div className='flex items-center space-x-2'    />
                    <MapPin className='w-4 h-4'    />
                    <span    />{contactInfo.address}</span>
                  </div>
                </div>
                <div className='px-3 pt-2'    />
<<<<<<< HEAD
                  <Link
                  <Link"
                    href="/contact""
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
=======
                  <Link;
href='/contact'
>>>>>>> origin/chore/fix-lint-and-merge
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}
                      />
                    Get Started;
                    <ArrowRight className='ml-2 w-4 h-4'    />
>>>>>>> merged-prs-20250907-203621
                  </Link>
                </div>
              </div>
            </div>
export default UltraFuturisticNavigation2047
          </motion.div>)}
      </AnimatePresence>
    </nav>
<<<<<<< HEAD
  );
}
export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;

"
=======
)
};


<<<<<<< HEAD
export default UltraFuturisticNavigation2047;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
const navigationItems: NavigationItem[] = [
  {


=======

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default UltraFuturisticNavigation2047;
export default UltraFuturisticNavigation2047;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
