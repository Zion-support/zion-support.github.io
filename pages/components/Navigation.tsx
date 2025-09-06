


import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import React, { useState } from './react';
import Link from './next / link';
import { motion  } from './framer-motion';

import {



  BookOpen,
  Brain,
  Building,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  Clock,
  Cloud,
  Code,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gamepad2,
  Globe,
  Heart,
  Home,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Music,
  Network,
  Phone,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,

import {;
  ArrowRight,;
  Award,;
  BarChart3,;
  BookOpen,;
  Brain,;
  Building,;
  Calculator,;
  Calendar,;
  Camera,;
  CheckCircle,;
  ChevronDown,;
  Clock,;
  Cloud,;
  Code,;
  CreditCard,;
  DollarSign,;
  Eye,;
  FileText,;
  Gamepad2,;
  Globe,;
  Heart,;
  Home,;
  Lock,;
  Mail,;
  MapPin,;
  Menu,;
  MessageSquare,;
  Music,;
  Network,;
  Phone,;
  Rocket,;
  Settings,;
  Shield,;
  ShoppingCart,;
  Star,;
  Target,;
  TrendingUp,;
  Truck,;
  Users,;
  X,;
  Zap,;

} from "lucide-react";

  Clock,
  DollarSign,
  Cpu,
  Rocket,
  Car,
  Sprout,
  Wifi,
  GraduationCap,
  Award as Recognition,
  Star as Rating,
  Users as People,
  Settings as Config,
  BarChart3 as Analytics,
  Shield as Security,
  Code as Programming,
  Zap as Lightning,
  Globe as World,
  Home as House,
  Building as Office,
  FileText as Document,
  MessageSquare as Chat,
  Calendar as Schedule,
  ShoppingCart as Cart,
  BookOpen as Book,
  Camera as Photo,
  Music as Audio,
  Gamepad2 as Gaming,
  Heart as Love,
  Truck as Delivery,
  Calculator as Math,
  CreditCard as Payment,
  Lock as Secure,
  Eye as View,
  Target as Goal,
  TrendingUp as Growth,
  Clock as Time,
  DollarSign as Money;

} from 'lucide-react';




} from 'lucide-react';




  ArrowRight
  Award
  BarChart3
  BookOpen
  Brain
  Building
  Calculator
  Calendar
  Camera
  CheckCircle
  ChevronDown
  Clock
  Cloud
  Code
  CreditCard
  DollarSign
  Eye
  FileText
  Gamepad2
  Globe
  Heart
  Home
  Lock
  Mail
  MapPin
  Menu
  MessageSquare
  Music
  Network
  Phone
  Rocket
  Settings
  Shield
  ShoppingCart
  Star
  Target
  TrendingUp
  Truck
  Users
  X
  Zap
} from "lucide-react";




const navigationItems = [
  {
    title: "Services"
    href: "/services"
    icon: Settings
    submenu: [
      {
        title: "AI Services"
        href: "/ai-services"
        icon: Brain
        description: "30+ cutting-edge AI solutions"
        popular: true
      }
      {
        title: "IT Services"
        href: "/it-services"
        icon: Network
        description: "25+ comprehensive IT services"
        popular: true
      }
      {
        title: "Micro SaaS"
        href: "/micro-saas"
        icon: Cloud
        description: "40+ innovative micro SaaS solutions"
        popular: true
      }
} from './lucide-react';
;
const navigation_items = [;
  {
    title: "Services",
    href: "/services",
    icon: Settings,
    submenu: [;
      {
        title: "AI Services",
        href: "/ai - services",
        icon: Brain,
        description: "30+ cutting - edge AI solutions",
        popular: true,
      },
      {
        title: "IT Services",
        href: "/it - services",
        icon: Network,
        description: "25+ comprehensive IT services",
        popular: true,
      },
      {
        title: "Micro SaaS",
        href: "/micro - saas",
        icon: Cloud,
        description: "40+ innovative micro SaaS solutions",
        popular: true,
      },
      {
        title: "Cybersecurity"
        href: "/cybersecurity"
        icon: Shield
        description: "Enterprise security solutions"
        popular: false
      }
      {

        title: "Cloud Solutions",
        href: "/cloud - solutions",
        icon: Cloud,
        description: "Scalable cloud infrastructure",
        popular: false,
      },
      {
        title: "Data Analytics",
        href: "/data - analytics",
        icon: BarChart3,
        description: "Advanced analytics platform",
        popular: false,
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    icon: Target,
    submenu: [;
      {
        title: "Enterprise Solutions",
        href: "/solutions / enterprise",
        icon: Building,
        description: "Comprehensive enterprise solutions",
      },
      {
        title: "Startup Solutions",
        href: "/solutions / startup",
        icon: Rocket,
        description: "Rapid deployment for startups",
      },
      {
        title: "Industry Solutions",
        href: "/solutions / industry",
        icon: BarChart3,
        description: "Industry - specific solutions",
      },
      {
        title: "Custom Solutions",
        href: "/solutions / custom",
        icon: Settings,
        description: "Tailored custom solutions",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    icon: Building,
    submenu: [;
      {
        title: "Healthcare",
        href: "/industries / healthcare",
        icon: Heart,
        description: "Medical AI and health tech",
      },
      {
        title: "Finance",
        href: "/industries / finance",
        icon: DollarSign,
        description: "Fintech and financial services",
      },
      {
        title: "Manufacturing",
        href: "/industries / manufacturing",
        icon: Settings,
        description: "Industrial automation",
      },
      {
        title: "Retail",
        href: "/industries / retail",
        icon: ShoppingCart,
        description: "E - commerce and retail tech",
      },
      {
        title: "Education",
        href: "/industries / education",
        icon: BookOpen,
        description: "EdTech solutions",
      },
      {
        title: "Real Estate",
        href: "/industries / real - estate",
        icon: Home,
        description: "PropTech innovations",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    icon: FileText,
    submenu: [;

      {
        title: "Blog"
        href: "/blog"
        icon: FileText
        description: "Latest insights and trends"
      }
      {

        title: "Case Studies",
        href: "/case - studies",
        icon: BarChart3,
        description: "Success stories and results",
      },
      {
        title: "White Papers",
        href: "/white - papers",
        icon: FileText,
        description: "In - depth research reports",
      },
      {
        title: "Tutorials",
        href: "/tutorials",
        icon: BookOpen,
        description: "Step - by - step guides",
      },

      {
        title: "FileTextation"
        href: "/docs"
        icon: FileText
        description: "Technical documentation"
      }
    ]
  }
  {

    title: "Company",
    href: "/about",
    icon: Building,
    submenu: [;

      {
        title: "About Us"
        href: "/about"
        icon: Building
        description: "Our story and mission"
      }
      {
        title: "Team"
        href: "/team"
        icon: Users
        description: "Meet our experts"
      }
      {
        title: "Careers"
        href: "/careers"
        icon: Users
        description: "Join our team"
      }
      {
        title: "Partners"
        href: "/partners"
        icon: Globe
        description: "Our partnerships"
      }
      {
        title: "News"
        href: "/news"
        icon: FileText
        description: "Company updates"
      }
      {
        title: "Press"
        href: "/press"
        icon: FileText
        description: "Press releases and media"
      }
    ]
  }
];

const navigationItems = [;
  {;
    title: "Services",;
    href: "/services",;
    icon: Settings,;
    submenu: [;
      {;
        title: "AI Services",;
        href: "/ai-services",;
        icon: Brain,;
        description: "30+ cutting-edge AI solutions",;
        popular: true,;
      },;
      {;
        title: "IT Services",;
        href: "/it-services",;
        icon: Network,;
        description: "25+ comprehensive IT services",;
        popular: true,;
      },;
      {;
        title: "Micro SaaS",;
        href: "/micro-saas",;
        icon: Cloud,;
        description: "40+ innovative micro SaaS solutions",;
        popular: true,;
      },;
      {;
        title: "Cybersecurity",;
        href: "/cybersecurity",;
        icon: Shield,;
        description: "Enterprise security solutions",;
        popular: false,;
      },;
      {;
        title: "Cloud Solutions",;
        href: "/cloud-solutions",;
        icon: Cloud,;
        description: "Scalable cloud infrastructure",;
        popular: false,;
      },;
      {;
        title: "Data Analytics",;
        href: "/data-analytics",;
        icon: BarChart3,;
        description: "Advanced analytics platform",;
        popular: false,;
      },;
    ],;
  },;
  {;
    title: "Solutions",;
    href: "/solutions",;
    icon: Target,;
    submenu: [;
      {;
        title: "Enterprise Solutions",;
        href: "/solutions/enterprise",;
        icon: Building,;
        description: "Comprehensive enterprise solutions",;
      },;
      {;
        title: "Startup Solutions",;
        href: "/solutions/startup",;
        icon: Rocket,;
        description: "Rapid deployment for startups",;
      },;
      {;
        title: "Industry Solutions",;
        href: "/solutions/industry",;
        icon: BarChart3,;
        description: "Industry-specific solutions",;
      },;
      {;
        title: "Custom Solutions",;
        href: "/solutions/custom",;
        icon: Settings,;
        description: "Tailored custom solutions",;
      },;
    ],;
  },;
  {;
    title: "Industries",;
    href: "/industries",;
    icon: Building,;
    submenu: [;
      {;
        title: "Healthcare",;
        href: "/industries/healthcare",;
        icon: Heart,;
        description: "Medical AI and health tech",;
      },;
      {;
        title: "Finance",;
        href: "/industries/finance",;
        icon: DollarSign,;
        description: "Fintech and financial services",;
      },;
      {;
        title: "Manufacturing",;
        href: "/industries/manufacturing",;
        icon: Settings,;
        description: "Industrial automation",;
      },;
      {;
        title: "Retail",;
        href: "/industries/retail",;
        icon: ShoppingCart,;
        description: "E-commerce and retail tech",;
      },;
      {;
        title: "Education",;
        href: "/industries/education",;
        icon: BookOpen,;
        description: "EdTech solutions",;
      },;
      {;
        title: "Real Estate",;
        href: "/industries/real-estate",;
        icon: Home,;
        description: "PropTech innovations",;
      },;
    ],;
  },;
  {;
    title: "Resources",;
    href: "/resources",;
    icon: FileText,;
    submenu: [;
      {;
        title: "Blog",;
        href: "/blog",;
        icon: FileText,;
        description: "Latest insights and trends",;
      },;
      {;
        title: "Case Studies",;
        href: "/case-studies",;
        icon: BarChart3,;
        description: "Success stories and results",;
      },;
      {;
        title: "White Papers",;
        href: "/white-papers",;
        icon: FileText,;
        description: "In-depth research reports",;
      },;
      {;
        title: "Tutorials",;
        href: "/tutorials",;
        icon: BookOpen,;
        description: "Step-by-step guides",;
      },;
      {;
        title: "FileTextation",;
        href: "/docs",;
        icon: FileText,;
        description: "Technical documentation",;
      },;
    ],;
  },;
  {;
    title: "Company",;
    href: "/about",;
    icon: Building,;
    submenu: [;
      {;
        title: "About Us",;
        href: "/about",;
        icon: Building,;
        description: "Our story and mission",;
      },;
      {;
        title: "Team",;
        href: "/team",;
        icon: Users,;
        description: "Meet our experts",;
      },;
      {;
        title: "Careers",;
        href: "/careers",;
        icon: Users,;
        description: "Join our team",;
      },;
      {;
        title: "Partners",;
        href: "/partners",;
        icon: Globe,;
        description: "Our partnerships",;
      },;
      {;
        title: "News",;
        href: "/news",;
        icon: FileText,;
        description: "Company updates",;
      },;
      {;
        title: "Press",;
        href: "/press",;
        icon: FileText,;
        description: "Press releases and media",;
      },;
    ],;
  },;
];