<<<<<<< HEAD




import React, { useState, useEffect } from 'react',
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X, Phone, Mail, ArrowRight;
import {

=======

import React, { useState, useEffect } from 'react',
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

  Brain, Rocket, Target, Atom, Shield;

  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD
=======
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
}
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin}
 } from 'lucide-react';
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface NavigationItem {
  name: string;
  href: string;}
  icon?: React.ReactNode;}
} from 'lucide-react';

<<<<<<< HEAD
=======
  description?: string;
  name: string;
  href: string;  icon?: React.ReactNode;import {
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  Brain, Rocket, Target, Atom, Shield;
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;


  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin;
} from 'lucide-react';


=======

 } from 'lucide-react';'
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface NavigationItem {
  name: string,
  href: string,
<<<<<<< HEAD

  icon?: React.ReactNode;




  description?: string;
=======
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean,
  category?: string,
  description?: string;
} from 'lucide-react';'

interface NavigationItem {
  name: string;
href: string;
description?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;

  category?: string;

<<<<<<< HEAD

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
const UltraFuturisticNavigation2047 = () =    /> {
 ;
  const [isOpen, setIsOpen] = useState(false);
    name: 'AI & Technology Services',
    href: '/services',
    icon: <Brain className="w - 5 h - 5" />,
    description: 'Advanced AI and technology solutions',
    badge: 'Featured',
    category: 'services',
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
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
<<<<<<< HEAD
=======
  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);  };    setActiveDropdown(activeDropdown === name ? null : name)
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);



const handleDropdownToggle = (
setActiveDropdown(activeDropdown === name ? null : name),) => {
  return $3;}
}

<<<<<<< HEAD
};




=======

};

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const toggleMenu = () => setIsOpen($2);
  const closeMenu = () => setIsOpen($2);
  const handleDropdownToggle = $2;
  useEffect(() => {
<<<<<<< HEAD


    const handleResize = (
      if (window.innerWidth >= 1024) {
        setIsOpen(false);


  }, []);
  return (
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
=======
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
setActiveDropdown(null);
setActiveDropdown(null);) => {
  return $3;}
}
      }
    }

    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);

>>>>>>> origin/cursor/delete-old-data-records-6bba

          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Rocket className='w-5 h-5 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>                Zion Tech Group  }, []);

  return (
<<<<<<< HEAD

=======
    <nav className="relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

      }
    };

    window.addEventListener('resize', handleResize);

    window.addEventListener('resize', handleResize);'
return () => window.removeEventListener('resize', handleResize);'
  }, []);
return (;
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>'
      <div className='max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8'>'
        <div className='flex justify-between items-center h-16'>'
          {/* Logo *
}
          <div className='flex-shrink-0'>'
            <Link href='/' className='flex items-center space-x-2'>'
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>'
                <Rocket className='w-5 h-5 text-white' />'
              </div>

              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Zion Tech Group
              </span>
            </Link>
          </div>
<<<<<<< HEAD



          <div className="flex-shrink-0">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
    window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
  }, []);
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'    />
                Zion Tech Group;
              </span>
            </Link>
          </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;
<<<<<<< HEAD


          {/* Desktop Navigation */}

                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4' />                </button>                <button


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


                <AnimatePresence    />;
                  {activeDropdown === item.name && (<motion.div;}
                      initial={{ opacity: 0, y: 10 }

}
                      animate={{ opacity: 1, y: 0 }
}


                              {child.icon}
                            </div>;

                      <div className='space-y-4'>
                        {item.children?.map(child => (
=======
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
          {/* Desktop Navigation */}
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
                  {item.icon}
                  <span    />{item.nam}
}</span>;
                  <ChevronDown className='w-4 h-4'    />;
                </button>;
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
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
                            <div className='flex-1'>;'
                              <div className='flex items-center space-x-2'>;'
                                <span className='font-medium text-white'>;'
                                  {child.name}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          <Link
                            key={child.name}
                            href={child.href}
                            className='flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200'
                            onClick={closeMenu}
                          >
                            <div
<<<<<<< HEAD


          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items - center lg:space - x-8'>;
            {navigation_items.map (item => (
              <div key={item.name} className='relative group'>;
                <button;
                  on_click={() => handleDropdownToggle (item.name)}
                  className='flex items - center space - x-1 px - 3 py - 2 text - sm font - medium text - gray - 300 hover:text - white transition - colors duration - 200';
                >;
=======
                              className={`p-2 rounded-lg bg-gradient-to-r ${child.color |'from-gray-500 to-slate-500'}`}
                            >
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


                              {child.icon}
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center space-x-2'>
                                <span className='font-medium text-white'>

                            <div className='flex-1'    />;
                              <div className='flex items-center space-x-2'    />;
                                <span className='font-medium text-white'    />;

                                  {child.name}

                                </span>
                                {child.featured && (

                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'    />
                                    Featured}
                                  </span>}

                                )}
                              </div>

                                  {child.name}
                                </span>
                                {child.featured && (
=======

                            <div className={`p-2 rounded-lg bg-gradient-to-r ${child.color || 'from-gray-500 to-slate-500'}`}>
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-white">{child.name}</span>
                                {child.featured && (

<p className='text-sm text-gray-400 mt-1'    />


                                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'
origin/cursor/automate-test-improve-and-merge-code-2533
                    >
                <button;
                    >'
                      <div className='space-y-4'>
                        {item.children?.map(child => (
                      transition={{ duration: 0 && 0.2 }}'
                      className='absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50'>;'
                      <div className='space-y-4'>;
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
                                  {child.name}
                                </span>
                                {child.featured && (
                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'>'
                                    }
                                    Featured
                                  </span>
                                )}
origin/cursor/automate-test-improve-and-merge-code-2533
                              </div>
<p className='text-sm text-gray-400 mt-1'>'

                                {child.description}
                              </p>;
                            </div>;
                          </Link>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                              </div>
                              <p className='text-sm text-gray-400 mt-1'>{child.description}</p>
                            </div>
                            </div>

                          </Link>
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        ))}
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}

<<<<<<< HEAD



          {/* Contact Info & CTA */}

<div className='hidden lg: flex lg:items-center lg:space-x-4'    />
            <div className='flex items-center space-x-4 text-sm text-gray-400'    />
              <a;
href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
                  />


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
=======
      <AnimatePresence    />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

            exit={{ opacity: 0, height: 0 }}


              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 "hover": text-white "hover":bg-slate-700 "focus":outline-none "focus":ring-2 "focus":ring-inset "focus":ring-white''
            >
              <span className='sr-only'>Open main menu</span>'
              {isOpen ? (
                <X className='block h-6 w-6' />'
              ) : (
                <Menu className='block h-6 w-6' />'

              
}
            </button>;
          </div>;
<<<<<<< HEAD
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

          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >
                <Phone className='w-4 h-4' />                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />


                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link

              href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>
          </div>
          {/* Mobile menu button */}

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}



=======
            </button>;
          </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (<motion&& motion.div;
            }
            initial={{ "opacity": 0, "height": 0 
}
            animate={{ "opacity": 1, "height": 'auto' ,'
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item && item.name)}
                    className='w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200';
                  >;
                    <div className='flex items-center space-x-2'>;
<<<<<<< HEAD
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

=======

                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        transition={{ duration: 0.2 }}

className='ml-4 mt-2 space-y-1'
                          />
                        {item.children?.map(child => (}
                          <Link;}
key={child.name}
                            href={child.href}


<<<<<<< HEAD
                          >
                            {child.name}
                          </Link>

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

              <div className="pt-4 pb-3 border-t border-slate-700/50">;


=======
                <div className="px-3 pt-2">;
                        className='ml-4 mt-2 space-y-1'

>>>>>>> origin/cursor/delete-old-data-records-6bba
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
<<<<<<< HEAD
=======
className='ml-4 mt-2 space-y-1'
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'

                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                            onClick={closeMenu}
                              />
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                            onClick={closeMenu}
                            className='block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}

                            onClick={closeMenu}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


              {/* Mobile Contact Info */}
              <div className='pt-4 pb-3 border-t border-slate-700/50'>
                <div className='px-3 py-2 text-sm text-gray-400'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Phone className='w-4 h-4' />

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

                  </Link>;
                </div>;
              </div>;
            </div>;


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



=======
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


                      {contactInfo.email}

                    </a>
                  </div>


=======
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

                    <span>{contactInfo.address}</span>
                  </div>
                <div className='px-3 pt-2'>'
                  <Link,
href='/contact''
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg "hover":from-purple-600 "hover":to-blue-600 transition-all duration-200''
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className='ml-2 w-4 h-4' />'
                  </Link>
                </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
)
};
export default UltraFuturisticNavigation2047;
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
                  <div className='flex items-center space-x-2'    />
                    <MapPin className='w-4 h-4'    />
                    <span    />{contactInfo.address}</span>
                  </div>
                </div>
                <div className='px-3 pt-2'    />
                  <Link
                  <Link"
                    href="/contact""
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}
                      />
                    Get Started;
                    <ArrowRight className='ml-2 w-4 h-4'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </Link>
                </div>
              </div>
            </div>
export default UltraFuturisticNavigation2047
          </motion.div>)}
      </AnimatePresence>
    </nav>
<<<<<<< HEAD

)
};






=======
  );
}
export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;

"
origin/cursor/automate-test-improve-and-merge-code-2533
const navigationItems: NavigationItem[] = [
  {



"
export default UltraFuturisticNavigation2047;
export default UltraFuturisticNavigation2047;
>>>>>>> origin/cursor/delete-old-data-records-6bba
