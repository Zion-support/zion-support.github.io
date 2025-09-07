

import React, { useState, useEffect } from 'react',
import Link from 'next/link';
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
  "name": string;

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
interface NavigationItem  {name: string;class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
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

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

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
  color?: string
}
  color?: string;
  color?: string;  color?: string
}
  color?: string;


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
}
const navigation_items: NavigationItem[] = [;
  {
    name: 'Home & Core',
    href: '/',
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
=======

    name: 'Home & Core';
    href: '/';
    icon: <Home className;

const UltraFuturisticNavigation2047 = () =    /> {
 ;
>>>>>>> origin/chore/fix-lint-and-merge
  const [isOpen, setIsOpen] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);



const handleDropdownToggle = (
setActiveDropdown(activeDropdown === name ? null : name),) => {
  return $3;}
}
<<<<<<< HEAD

=======
};
>>>>>>> origin/chore/fix-lint-and-merge


  useEffect(() => {

    const handleResize = (
      if (window.innerWidth >= 1024) {
        setIsOpen(false);

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
    }

    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);

<<<<<<< HEAD
  }, []);
  return (
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
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
    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
  }, []);
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

              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'    />
                Zion Tech Group;
              </span>
            </Link>
          </div>

>>>>>>> origin/chore/fix-lint-and-merge
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
                <button

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
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}

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

                              {child.icon}
                            </div>;
<<<<<<< HEAD
                            <div className='flex-1'>;'
                              <div className='flex items-center space-x-2'>;'
                                <span className='font-medium text-white'>;'
                                  {child.name}
                            key={child.name}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-slate-500'}`}>
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-white">{child.name}</span>
                                {child.featured && (
                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                      <div className='space-y-4'>
                        {item.children?.map(child => (
                      transition={{ duration: 0 && 0.2 }}'
                      className=absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50>;'
                      <div className='space-y-4>;
                        {item && item.children?.map(child => (;
                          <Link
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}
                            >
                              {child.icon}
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center space-x-2'>
                                <span className='font-medium text-white'>
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
                                    Featured;
                                  </span>;
                                )}</div>;
<p className='text-sm text-gray-400 mt-1'>;
=======
<p className='text-sm text-gray-400 mt-1'    />

>>>>>>> origin/chore/fix-lint-and-merge
                                {child.description}
                              </p>;
                            </div>;
                          </Link>;
<<<<<<< HEAD
                              </div>
                              <p className="text-sm text-gray-400 mt-1">{child.description}</p>
                            </div>
                            </div>

                          </Link>
=======
>>>>>>> origin/chore/fix-lint-and-merge
                        ))}
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
<<<<<<< HEAD
          {/* Contact Info & CTA */}

=======

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

              </a>
            </div>
            <Link'
              href='/contact'
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link"
              href="/contact"
"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            >
              Get Started"
              <ArrowRight className="ml-2 w-4 h-4" />'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>;
              Get Started;'
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>;
          </div>;
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
              )}
            </button>
          </div>
        </div>
      </div>

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
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>'
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0}}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
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
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 "hover":text-white "hover":bg-slate-700/50 rounded-md transition-colors duration-200">"

                    <div className="flex items-center space-x-2">;"
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;'`
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`} />;
                  </button>;
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

                        transition={{ duration: 0.2 }}

className='ml-4 mt-2 space-y-1'
                          />
                        {item.children?.map(child => (}
                          <Link;}
key={child.name}
                            href={child.href}
<<<<<<< HEAD

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
              <div className=pt-4 pb-3 border-t border-slate-700/50">;
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
                      >
                        {item.children?.map(child => (
                          <Link;
                            key={child.name}
                            href={child.href}
className='ml-4 mt-2 space-y-1
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
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
                  </Link>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </nav>;

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
                      {contactInfo.email}

                    </a>
                  </div>
<<<<<<< HEAD

                  <div className='flex items-center space-x-2'>
                    <MapPin className=w-4 h-4' />
                    <span>{contactInfo.address}</span>
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
                  <Link;
href='/contact'
>>>>>>> origin/chore/fix-lint-and-merge
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}
                      />
                    Get Started;
                    <ArrowRight className='ml-2 w-4 h-4'    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
)
};


export default UltraFuturisticNavigation2047;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
const navigationItems: NavigationItem[] = [
  {


=======

"
>>>>>>> origin/chore/fix-lint-and-merge
