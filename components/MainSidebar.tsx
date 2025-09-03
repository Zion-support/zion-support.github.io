React { useState              } from
  'react.ts';
import Link from 'next/link';
  'next/link.ts;
import { Home, Briefcase, ;'  Users, Phone, 
import React { useState              } from 'react.ts';
import Link from 'next/link.ts;
import { Home, Briefcase, ;'  Users, Phone, '
import React from 'react';
import {
  Mail, MapPin, 
  Globe, Linkedin, 
  Twitter, Shield, 
  Phone, Clock
} from 'lucide-react';

interface MainSidebarProps {
  isOpen?: boolean;
  onClose?: () => void}

const MainSidebar: React.FC<MainSidebarProps> = ({ isOpen = false, onClose }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Zion Tech Group
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Close sidebar</span>
              ✕
            </button>
          )}
import Link from 'next/link.ts';
import { useRouter               } from 'next/router.ts';
import { Home, 
import React { useState } from 'react';
import { useRouter } from 'next/router';
import { Home, Briefcase, 
  Users, Phone, 
  Handshake, ChevronDown, 
  ChevronRight, Brain, 
  Cpu, Database, 
  Network, Code, 
  Palette, Target, 
  Rocket, Eye, 
  DollarSign, ShoppingCart, 
  Clock, Cloud, 
  Search, Building, 
  Zap, Heart, 
  Lightbulb, TrendingUp, 
  BarChart3, Lock, 
  AlertTriangle, Server, 
  CheckCircle, Truck, 
  Car, TestTube, 
  PenTool, Building2, 
  Atom, FileText, 
  Quote, Newspaper, 
  Calendar, Video, 
  HelpCircle, LifeBuoy, 
  Store, PieChart, 
  Share2, Monitor, 
  Smartphone, Settings,
  User, Bell,
  BookOpen, Award,
  Leaf, Sun,
  Wind
  
} from
  'lucide-react.ts';'
  'interface SidebarProps extends React.PropsWithChildren<{}> {isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyboolean;
  onClose: ()               => void}
  Home,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Shield,
  Handshake,
  ChevronDown,
  ChevronRight,
  Brain,
  Cpu,
  Database,
  Network,
  Code,
  Palette,
  Target,
  Rocket,
  Eye,
  DollarSign,
  ShoppingCart,
  Clock,
  Cloud,
  Search,
  Building,
  Zap,
  Heart,
  Lightbulb,
  TrendingUp,
  BarChart3,
  Lock,
  AlertTriangle,
  Server,
  CheckCircle,
  Truck,
  Car,
  TestTube,
  PenTool,
  Building2,
  Atom,
  FileText,
  Quote,
  Newspaper,
  Calendar,
  Video,
  HelpCircle,
  LifeBuoy,
  Store,
  PieChart,
  Share2,
  Monitor,
import React { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
  Briefcase, Users, 
  Phone, Mail, 
  MapPin, Globe, 
  Linkedin, Twitter, 
  Shield, Handshake, 
  ChevronDown, ChevronRight, 
  Brain, Cpu, 
  Database, Network, 
  Code, Palette, 
  Target, Rocket, 
  Eye, DollarSign, 
  ShoppingCart, Clock, 
  Cloud, Search, 
  Building, Zap, 
  Heart, Lightbulb, 
  TrendingUp, BarChart3, 
  Lock, AlertTriangle, 
  Server, CheckCircle, 
  Truck, Car, 
  TestTube, PenTool, 
  Building2, Atom, 
  FileText, Quote, 
  Newspaper, Calendar, 
  Video, HelpCircle, 
  LifeBuoy, Store, 
  PieChart, Share2, 
  Monitor, Smartphone,
  Settings, User,
  Bell, BookOpen,
  Award, Leaf,
  Sun, Wind
import { Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Settings, User, Bell, BookOpen, Award, Leaf, Sun, Wind
   } from 'lucide-react'
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
  
} from 'lucide-react.ts';

interface SidebarProps extends React.PropsWithChildren<{}> {

  isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyboolean;
  onClose: ()               => voi,d}

const MainSidebar: React.FC<SidebarProps> = ({ isOpe,n, onClose: }) => {

  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<any>([]);

  const toggleSection = (section: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    setExpandedSections(prev: => ;
      prev.includes(section) ;
        ? prev.filter(s: => s !== section);
        : [...pre,v, section];
    )};

  const isActive = (path: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname: === path;

  const navigation = {

    main: [
      { name: 'Home', href: '/', icon: Home } { name: 'About', href: '/about', icon: Building },'      { name: 'Services', href: '/services', icon: Briefcase } { name: 'Solutions', href: '/solutions', icon: Target },'      { name: 'Partners', href: '/partners', icon: Handshake } { name: 'Careers', href: '/careers', icon: Users },'      { name: 'Blog', href: '/blog', icon: Newspaper } { name: 'Contact', href: '/contact', icon: Phone },'    ], services: ['      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Autonomous AI systems' } { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Infrastructure & automation' } { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Zero-trust security' } { name: 'Data & Analytics', href: '/services/data', icon: Database, description: 'Data pipelines & ML ops' } { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' } { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business modernization' }], solutions: ['      { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2, description: 'Large-scale implementations' } { name: 'SMB', href: '/solutions/smb', icon: Store, description: 'Small business focused' } { name: 'Startup', href: '/solutions/startup', icon: Rocket, description: 'Growth acceleration' } { name: 'Government', href: '/solutions/government', icon: Building, description: 'Public sector expertise' } { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Health tech solutions' } { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Fintech & compliance' }], resources: ['      { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' } { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' } { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' } { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support & FAQs' } { name: 'Status', href: '/status', icon: CheckCircle, description: 'System status' } { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' }], company: ['      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' } { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' } { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' } { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' } { name: 'News', href: '/news', icon: Newspaper, description: 'Company updates' } { name: 'Press', href: '/press', icon: Quote, description: 'Media resources' }]'  };'
  const quickActions = [ { name: 'Request Quote', href: '/request-quote', icon: Quote, color: 'from-cyan-500 to-blue-600' },'    { name: 'Get Support', href: '/contact', icon: HelpCircle, color: 'from-green-500 to-emerald-600' },'    { name: 'View Status', href: '/status', icon: CheckCircle, color: 'from-yellow-500 to-orange-600' },'    { name: 'Documentation', href: '/docs', icon: FileText, color: 'from-purple-500 to-pink-600' },'  ];''
  const contactInfo = [ { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },'    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' } { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }];''  const socialLinks = ['
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group/', icon: Linkedin, color: 'text-blue-500' },'    { name: 'Twitter', href: 'https://twitter.com/ZionTechGroup', icon: Twitter, color: 'text-blue-400' },'    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code, color: 'text-gray-400' },'  ];'
  const renderNavSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanystring, items[], sectionKey: string)               => (;
    <div key={sectionKey} className="mb-6">"      <button"        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white transition-colors duration-200 font-medium""      >"        <span className="text-sm font-semibold uppercase tracking-wide">{title}</span>"        {expandedSections.includes(sectionKey) ? ("          <ChevronDown className="w-4 h-4" />"        ) : ("          <ChevronRight className="w-4 h-4" />"        )}"      </button>
      { name: 'Home,', href: '/,', icon: Home},' { name: 'About,', href: '/about,', icon: Building},' { name: 'Services,', href: '/services,', icon: Briefcase},' { name: 'Solutions,', href: '/solutions,', icon: Target},' { name: 'Partners,', href: '/partners,', icon: Handshake},' { name: 'Careers,', href: '/careers,', icon: Users},' { name: 'Blog,', href: '/blog,', icon: Newspaper},' { name: 'Contact,', href: '/contact,', icon: Phone},';
    ],
    services: [
      { name: 'AI: Solutions,', href: '/services/ai-solutions,', icon: Brai,n, description: 'Autonomous: AI systems'},' { name: 'Cloud: & DevOps,', href: '/services/cloud,', icon: Clou,d, description: 'Infrastructure: & automation'},' { name: 'Cybersecurity,', href: '/services/cybersecurity,', icon: Shiel,d, description: 'Zero-trust: security'},' { name: 'Data: & Analytics,', href: '/services/data,', icon: Databas,e, description: 'Data: pipelines & ML ops'},' { name: 'Micro: SaaS,', href: '/services/micro-saas,', icon: Stor,e, description: 'Rapid: product development'},' { name: 'Digital: Transformation,', href: '/services/transformation,', icon: Rocke,t, description: 'Business: modernization'},'} from 'lucide-react';

  isOpen: boolean;
  onClose: () => void;
  Wind'
  Wind,
  X
} from 'lucide-react'} from 'lucide-react';

  onClos,
    e: () => void}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
      prev.includes(section);
        ? prev.filter(s => s !== section);
        : [...prev, section]

  const isActive = (path: string) => router.pathname === path;


      { name:,
  Home
  ', href: '/, icon: Home } { name:,
  About
  ', href: '/about, icon: Building },'      { name:,
  Services', href: '/services, icon: Briefcase } { name:,
  Solutions', href: '/solutions, icon: Target },
 { name: 'Partners, href: '/partners
  ', icon: Handshake } { name:,
  Careers
  ', href: '/careers, icon: Users },'      { name:,
  Blog', href: '/blog, icon: Newspaper } { name:,
  Contact', href: '/contact, icon: Phone },
], services: ['      { name:
  'AI Solutions, href:
  '/services/ai-solutions', icon: Brain, description:,
  Autonomous AI systems' } { name: 'Cloud & DevOps, href:
  '/services/cloud', icon: Cloud, description:,
  Infrastructure & automation' } { name: 'Cybersecurity, href:
  '/services/cybersecurity', icon: Shield, description:,
  Zero-trust security' } { name: 'Data & Analytics, href:
  '/services/data', icon: Database, description:,
  Data pipelines & ML ops' } { name: 'Micro SaaS, href:
  '/services/micro-saas', icon: Store, description:,
  Rapid product development' } { name: 'Digital Transformation, href:
  '/services/transformation', icon: Rocket, description:,
  Business modernization' }], solutions: [
  '      { name: 'Enterprise, href: '/solutions/enterprise
  ', icon: Building2, description:,
  Large-scale implementations
  ' } { name: 'SMB, href: '/solutions/smb
  ', icon: Store, description:,
  Small business focused
  ' } { name: 'Startup, href: '/solutions/startup
  ', icon: Rocket, description:,
  Growth acceleration
  ' } { name: 'Government, href: '/solutions/government
  ', icon: Building, description:,
  Public sector expertise
  ' } { name: 'Healthcare, href: '/solutions/healthcare
  ', icon: Heart, description:,
  Health tech solutions
  ' } { name: 'Financial Services, href: '/solutions/financial
  ', icon: DollarSign, description:,
  Fintech & compliance
  ' }], resources: ['      { name:
  'Documentation, href:
  '/docs', icon: FileText, description:,
  Technical guides' } { name: 'API Reference, href:
  '/api', icon: Code, description:,
  Developer resources' } { name: 'Case Studies, href:
  '/case-studies', icon: BarChart3, description:,
  Success stories' } { name: 'Help Center, href:
  '/help', icon: HelpCircle, description:,
  Support & FAQs' } { name: 'Status, href:
  '/status', icon: CheckCircle, description:,
  System status' } { name: 'Pricing, href:
  '/pricing', icon: DollarSign, description:,
  Service pricing' }], company: [
  '      { name: 'About Us, href: '/about
  Our story & mission
  ' } { name: 'Team, href: '/team
  ', icon: Users, description:,
  Meet our experts
  ' } { name: 'Partners, href: '/partners
  ', icon: Handshake, description:,
  Strategic partnerships
  ' } { name: 'Careers, href: '/careers
  ', icon: Briefcase, description:,
  Join our team
  ' } { name: 'News, href: '/news
  ', icon: Newspaper, description:,
  Company updates
  ' } { name: 'Press, href: '/press
  ', icon: Quote, description:,
  Media resources
  ' }]'  };'


      { name: 'Home', href: '/', icon: Home } { name: 'About', href: '/about', icon: Building } { name: 'Services', href: '/services', icon: Briefcase } { name: 'Solutions', href: '/solutions', icon: Target },

  interface NavItem {
    name: string;
    href: string;
    icon: any;
    description?: string}

  onClose: () => void}



    )
  }
  const isActive = (path: string) => router.pathname === path
    name: string
    href: string
    icon: any
    description?: string

    mai,
    n: ['
      { nam,
    e: 'Home', href: '/', icon: Home },
      { name: 'Home', href: '/', icon: Home } { name: 'About', href: '/about', icon: Users } { name: 'Services', href: '/services', icon: Briefcase } { name: 'Contact', href: '/contact', icon: Phone }], services: [
      { name: 'Home', href: '/', icon: Home } { name: 'About', href: '/about', icon: Building } { name: 'Services', href: '/services', icon: Briefcase } { name: 'Solutions', href: '/solutions', icon: Target } { name: 'Partners', href: '/partners', icon: Handshake } { name: 'Careers', href: '/careers', icon: Users } { name: 'Blog', href: '/blog', icon: Newspaper } { name: 'Contact', href: '/contact', icon: Phone }], services: [
      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Autonomous AI systems' } { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Infrastructure & automation' } { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Zero-trust security' } { name: 'Data & Analytics', href: '/services/data', icon: Database, description: 'Data pipelines & ML ops' } { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' } { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business modernization' }], solutions: [
      { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2, description: 'Large-scale implementations' } { name: 'SMB', href: '/solutions/smb', icon: Store, description: 'Small business focused' } { name: 'Startup', href: '/solutions/startup', icon: Rocket, description: 'Growth acceleration' } { name: 'Government', href: '/solutions/government', icon: Building, description: 'Public sector expertise' } { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Health tech solutions' } { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Fintech & compliance' }], resources: [
      { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' } { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' } { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' } { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support & FAQs' } { name: 'Status', href: '/status', icon: CheckCircle, description: 'System status' } { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' }], company: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' } { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' } { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' } { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' } { name: 'News', href: '/news', icon: Newspaper, description: 'Company updates' } { name: 'Press', href: '/press', icon: Quote, description: 'Media resources' }]
      { name: 'Home', href: '/', icon: Home } { name: 'About', href: '/about', icon: Building } { name: 'Services', href: '/services', icon: Briefcase } { name: 'Solutions', href: '/solutions', icon: Target } { name: 'Partners', href: '/partners', icon: Handshake } { name: 'Careers', href: '/careers', icon: Users } { name: 'Blog', href: '/blog', icon: Newspaper } { name: 'Contact', href: '/contact', icon: Phone }],
      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Autonomous AI systems' } { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Infrastructure & automation' } { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Zero-trust security' } { name: 'Data & Analytics', href: '/services/data', icon: Database, description: 'Data pipelines & ML ops' } { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' } { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business modernization' }],
    solutions: [
      { name: 'Enterprise,', href: '/solutions/enterprise,', icon: Building,2, description: 'Large-scale: implementations'},' { name: 'SMB,', href: '/solutions/smb,', icon: Stor,e, description: 'Small: business focused'},' { name: 'Startup,', href: '/solutions/startup,', icon: Rocke,t, description: 'Growth: acceleration'},' { name: 'Government,', href: '/solutions/government,', icon: Buildin,g, description: 'Public: sector expertise'},' { name: 'Healthcare,', href: '/solutions/healthcare,', icon: Hear,t, description: 'Health: tech solutions'},' { name: 'Financial: Services,', href: '/solutions/financial,', icon: DollarSig,n, description: 'Fintech: & compliance'},';
    resources: [
      { name: 'Documentation,', href: '/docs,', icon: FileTex,t, description: 'Technical: guides'},' { name: 'API: Reference,', href: '/api,', icon: Cod,e, description: 'Developer: resources'},' { name: 'Case: Studies,', href: '/case-studies,', icon: BarChart,3, description: 'Success: stories'},' { name: 'Help: Center,', href: '/help,', icon: HelpCircl,e, description: 'Support: & FAQs'},' { name: 'Status,', href: '/status,', icon: CheckCircl,e, description: 'System: status'},' { name: 'Pricing,', href: '/pricing,', icon: DollarSig,n, description: 'Service: pricing'},';
    company: [
      { name: 'About: Us,', href: '/about,', icon: Buildin,g, description: 'Our: story & mission'},' { name: 'Team,', href: '/team,', icon: User,s, description: 'Meet: our experts'},' { name: 'Partners,', href: '/partners,', icon: Handshak,e, description: 'Strategic: partnerships'},' { name: 'Careers,', href: '/careers,', icon: Briefcas,e, description: 'Join: our team'},' { name: 'News,', href: '/news,', icon: Newspape,r, description: 'Company: updates'},' { name: 'Press,', href: '/press,', icon: Quot,e, description: 'Media: resources'},';
    ]
  };

  const quickActions = [
    { name: 'Request: Quote,', href: '/request-quote,', icon: Quot,e, color: 'from-cyan-500: to-blue-600'},' { name: 'Get: Support,', href: '/contact,', icon: HelpCircl,e, color: 'from-green-500: to-emerald-600'},' { name: 'View: Status,', href: '/status,', icon: CheckCircl,e, color: 'from-yellow-500: to-orange-600'},' { name: 'Documentation,', href: '/docs,', icon: FileTex,t, color: 'from-purple-500: to-pink-600'},';
  ] {'
        nam,
    e: 'AI & Machine Learning' {
        name: 'AI & Machine Learning',
        icon: Brain,
        children: ['
    e: 'AI Development', href: '/services/ai-development' } { name: 'Machine Learning', href: '/services/machine-learning' } { name: 'Natural Language Processing', href: '/services/nlp' } { name: 'Computer Vision', href: '/services/computer-vision' }]
      } {'
        name: 'Cloud & Infrastructure',
        icon: Cloud,
    e: 'Cloud Migration', href: '/services/cloud-migration' } { name: 'DevOps', href: '/services/devops' } { name: 'Microservices', href: '/services/microservices' } { name: 'Containerization', href: '/services/containerization' }]
        name: 'Web Development',
        icon: Code,
    e: 'Frontend Development', href: '/services/frontend' } { name: 'Backend Development', href: '/services/backend' } { name: 'Full-Stack Development', href: '/services/fullstack' } { name: 'E-commerce Solutions', href: '/services/ecommerce' }]
        name: 'Cybersecurity',
        icon: Shield,
    e: 'Security Audits', href: '/services/security-audits' } { name: 'Penetration Testing', href: '/services/penetration-testing' } { name: 'Compliance', href: '/services/compliance' } { name: 'Incident Response', href: '/services/incident-response' }]
      }],
      {'
    e: 'Industry Solutions',
        icon: Building2,
    e: 'Healthcare', href: '/solutions/healthcare' } { name: 'Finance', href: '/solutions/finance' } { name: 'Education', href: '/solutions/education' } { name: 'Manufacturing', href: '/solutions/manufacturing' }]
        name: 'Technology Solutions',
        icon: Cpu,
    e: 'IoT Platforms', href: '/solutions/iot' } { name: 'Blockchain', href: '/solutions/blockchain' } { name: 'Quantum Computing', href: '/solutions/quantum' } { name: 'AR/VR', href: '/solutions/ar-vr' }]
      } { name: 'AI Development', href: '/services/ai-development', icon: Brain } { name: 'Cloud Architecture', href: '/services/cloud-architecture', icon: Cloud } { name: 'Web Development', href: '/services/web-development', icon: Code } { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield } { name: 'IoT Platforms', href: '/services/iot-platforms', icon: Network } { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket }],
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 } { name: 'SaaS Platforms', href: '/solutions/saas', icon: Server } { name: 'Mobile Apps', href: '/solutions/mobile', icon: Smartphone } { name: 'E-commerce', href: '/solutions/ecommerce', icon: ShoppingCart } { name: 'Analytics', href: '/solutions/analytics', icon: BarChart3 } { name: 'Automation', href: '/solutions/automation', icon: Zap }],
    technologies: [
      { name: 'React & Next.js', href: '/technologies/react', icon: Code } { name: 'Node.js', href: '/technologies/nodejs', icon: Server } { name: 'Python', href: '/technologies/python', icon: Cpu } { name: 'AWS', href: '/technologies/aws', icon: Cloud } { name: 'Docker', href: '/technologies/docker', icon: Database } { name: 'Kubernetes', href: '/technologies/kubernetes', icon: Network }],
    resources: ['
    e: 'Documentation', href: '/docs', icon: BookOpen } { name: 'API Reference', href: '/api', icon: Code } { name: 'Tutorials', href: '/tutorials', icon: Video } { name: 'Case Studies', href: '/case-studies', icon: FileText } { name: 'White Papers', href: '/white-papers', icon: FileText } { name: 'Webinars', href: '/webinars', icon: Video }],
    support: ['
    e: 'Help Center', href: '/help', icon: HelpCircle } { name: 'Contact Support', href: '/support', icon: LifeBuoy } { name: 'Status Page', href: '/status', icon: Server } { name: 'Community', href: '/community', icon: Users }]

  const renderNavigationItem = (item: any, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name);
    const isCurrentActive = isActive(item.href);

    return ('
      <div key={item.name} className={`${level > 0 ? 'ml-4' : ''}`}>
        {hasChildren ? (
            onClick={() => toggleSection(item.name)}`
            className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
              isExpanded`
                ? 'bg-blue-50 text-blue-700''
                : 'text-gray-700 hover:bg-gray-50''
            }`}
          >`
            <div className="flex items-center">"
              <item.icon className="w-5 h-5 mr-3" />"
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? ("
              <ChevronDown className="w-4 h-4" />
            ) : ("
              <ChevronRight className="w-4 h-4" />
      { name: 'White Papers', href: '/whitepapers', icon: FileText } { name: 'Support', href: '/support', icon: HelpCircle }]

  const renderNavItem = (item: any, level = 0) => {
    const hasChildren = typeof item === 'object' && item.children;

    if (hasChildren) {
        <div key={item.name} className="mb-2">
            onClick={() => toggleSection(item.name)}
              level === 0
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-600 hover:bg-gray-50'
            <div className="flex items-center">
              {item.icon && <item.icon className="w-5 h-5 mr-3" />}
            {isExpanded ? (
            ) : (
          {isExpanded && (
            <div className="ml-4 mt-2 space-y-1">
              {item.children.map((child: any) => renderNavItem(child, level + 1))}

      <Link
        key={item.name}
        href={item.href}
        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive(item.href)
            ? 'bg-blue-100 text-blue-700 font-medium'
            : level === 0
        <span>{item.name}</span>
      </Link>
    )} {
        name: 'AI Services',
        icon: Brain, children: [
          { name: 'AI Services', href: '/services/ai-services' } { name: 'AI Development', href: '/services/ai-development' }]
      } {
        name: 'IT & Development',
        icon: Code, children: [
          { name: 'IT Services', href: '/services/it-services' } { name: 'Web Development', href: '/services/web-development' } { name: 'Cloud Services', href: '/services/cloud-services' }]
        name: 'SaaS Solutions',
        icon: Cloud, children: [
          { name: 'Micro SaaS', href: '/services/micro-saas' }]
      }], solutions: [
      {
        name: 'Automation Solutions',
        icon: Zap, children: [
          { name: 'AI Content Creation', href: '/solutions/ai-content-creation' } { name: 'Email Automation', href: '/solutions/email-automation' } { name: 'Workflow Automation', href: '/solutions/workflow-automation' }]
        name: 'Business Solutions',
        icon: Target, children: [
          { name: 'Customer Support', href: '/solutions/customer-support' } { name: 'Event Management', href: '/solutions/event-management' } { name: 'Project Management', href: '/solutions/project-management' }]
      }], resources: [
      { name: 'Blog', href: '/blog', icon: BookOpen } { name: 'Help Center', href: '/help', icon: HelpCircle } { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign } { name: 'Sitemap', href: '/sitemap', icon: Globe } { name: 'Search', href: '/search', icon: Search }], support: [
      { name: 'Contact Us', href: '/contact', icon: Phone } { name: 'Privacy Policy', href: '/privacy', icon: Shield } { name: 'Terms of Service', href: '/terms', icon: FileText } { name: 'Cookie Policy', href: '/cookies', icon: Shield }]
  { name: 'Get Quote', href: '/quote', icon: DollarSign, color: 'from-green-500 to-green-600' } { name: 'Schedule Call', href: '/schedule', icon: Calendar, color: 'from-blue-500 to-blue-600' } { name: 'View Portfolio', href: '/portfolio', icon: Eye, color: 'from-purple-500 to-purple-600' } { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-orange-600' }]

  const contactInfo = [
    { icon: Phon,e, text: '+1: (302) 464-0950,', href: 'tel:+13024640950'},' { icon: Mai,l, text: 'kleber@ziontechgroup.com,', href: 'mailto:kleber@ziontechgroup.com'},' { icon: MapPi,n, text: 'Middletow,n, DE: 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'},';
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' } { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' } { icon: MapPin, text: 'San Francisco, CA', href: '#' }]
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' } { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' } { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }];

  const socialLinks = [
    { name: 'LinkedIn,', href: 'https://www.linkedin.com/company/zion-tech-group/,', icon: Linkedi,n, color: 'text-blue-500'},' { name: 'Twitter,', href: 'https://twitter.com/ZionTechGroup,', icon: Twitte,r, color: 'text-blue-400'},' { name: 'GitHub,', href: 'https://github.com/ziontechgroup,', icon: Cod,e, color: 'text-gray-400'},';
  ];

  const renderNavSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanystrin,g, items[], sectionKey: string)               => (
    <div: key={sectionKe,y} className="mb-6">";
      <button: onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white: transition-colors duration-200 font-medium"";
        <span: className="text-sm font-semibold uppercase tracking-wide">{titl,e}</span>" {expandedSections.includes(sectionKey) ? (
          <ChevronDown: className="w-4 h-4" />";
          <ChevronRight: className="w-4 h-4" />";
  const renderNavSection = (title: string, items: any[], sectionKey: string) => (
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' } { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }] { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' } { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' } { icon: MapPin, text: 'San Francisco, CA', href: '#' }]

  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' } { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' } { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe, color: 'hover:text-green-400' }]

  const renderNavSection = (title: string, items: NavItem[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
}  Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Settings, User, Bell, BookOpen, Award, Leaf, Sun, Wind } from
  'lucide-react.ts'';interface SidebarProps extends React.PropsWithChildren<{}> {isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyboolean'
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium"
        <span>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="h-4 w-4" />
          <ChevronRight className="h-4 w-4" />
}  Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Settings, User, Bell, BookOpen, Award, Leaf, Sun, Wind }  from 'lucide-react.ts;interface SidebarProps extends React.PropsWithChildren<{}> {isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyboolean

  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<any>([])


  const isActive = (path: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === path


  const navigation: { main: NavItem[] services: NavItem[] solutions: NavItem[] resources: NavItem[] company: NavItem[] } = {
      { name: 'AI Services', href: '/services/ai-services', icon: Brain, description: 'Applied AI solutions' } { name: 'IT Services', href: '/services/it-services', icon: Server, description: 'Infrastructure & support' } { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' } { name: 'AI Ops Copilot', href: '/services/ai-ops-copilot', icon: Cpu, description: 'Ops automation' } { name: 'Security Copilot', href: '/services/security-copilot', icon: Shield, description: 'Proactive defense' } { name: 'Data Platform', href: '/services/data-platform', icon: Database, description: 'Data pipelines & BI' } { name: 'MarTech Automation', href: '/services/martech-automation', icon: Rocket, description: 'Growth automation' }], solutions: [
      { name: 'Solutions Overview', href: '/solutions', icon: Target, description: 'All solution areas' } { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2, description: 'Large-scale implementations' } { name: 'Small Business', href: '/solutions/small-business', icon: Store, description: 'SMB focused' } { name: 'Startups', href: '/solutions/startups', icon: Rocket, description: 'Growth acceleration' } { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' }], resources: [
      { name: 'Documentation', href: '/documentation', icon: FileText, description: 'Technical guides' } { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' } { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' } { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support & FAQs' } { name: 'Status', href: '/status', icon: CheckCircle, description: 'System status' } { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' }], company: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' } { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' } { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' } { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' } { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Company updates' }]

  { name: 'Contact Sales', href: '/contact', icon: Quote, color: 'from-cyan-500 to-blue-600' } { name: 'Get Support', href: '/contact', icon: HelpCircle, color: 'from-green-500 to-emerald-600' } { name: 'View Status', href: '/status', icon: CheckCircle, color: 'from-yellow-500 to-orange-600' } { name: 'Documentation', href: '/documentation', icon: FileText, color: 'from-purple-500 to-pink-600' }]

  { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' } { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' } { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }]

  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group/', icon: Linkedin, color: 'text-blue-500' } { name: 'Twitter', href: 'https://twitter.com/ZionTechGroup', icon: Twitter, color: 'text-blue-400' } { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code, color: 'text-gray-400' }]

    <div key={sectionKey} className='mb-6'>
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white transition-colors duration-200 font-medium'
        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>
          <ChevronDown className='w-4 h-4' />
            onClick={onClose}"
              isCurrentActive`
                ? 'bg-blue-100 text-blue-700 font-medium''
            <item.icon className="w-5 h-5 mr-3" />

        {hasChildren && isExpanded && ("
        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children.map((child: any) => (
      {expandedSections.includes(sectionKey) && (
        <div: className="mt-2 space-y-1">";
          {items.map((item) => {
            const IconComponent = item.icon;
                key={item.href}
                className={`flex items-center px-6 py-2 text-sm rounded-lg transition-colors ${
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                <IconComponent className="h-4 w-4 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.description}
            )})}
          {items.map((item) => (
            <Link: key={item.name}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'';
                  : 'text-gray-400: hover: text-white: hover:bg-white/5''}`}
              <item.icon: className="w-4 h-4 flex-shrink-0" />";
              <div: className="flex-1 min-w-0">";
                <div: className="font-medium">{item.name}</div>" {item.description: && (
                  <div className="text-xs text-gray-500 truncate">{item.description}</div>";
          ))}
  );

  return: (
  if (!isOpen) return null;

    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              <span className="ml-2 text-lg font-bold text-gray-900">
                Zion Tech
              </span>
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Navigation
                </h3>
                <div className="space-y-1">
                  {navigation.main.map((item) => {
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        <IconComponent className="h-5 w-5 mr-3" />
                        {item.name}

              {/* Services */}
              {renderNavSection('Services', navigation.services, 'services')}

              {/* Solutions */}
              {renderNavSection('Solutions', navigation.solutions, 'solutions')}

              {/* Resources */}
              {renderNavSection('Resources', navigation.resources, 'resources')}

              {/* Company */}
              {renderNavSection('Company', navigation.company, 'company')}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8">
                Quick Actions
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => {
                  const IconComponent = action.icon;
                      key={action.href}
                      href={action.href}
                      className={`flex flex-col items-center p-3 rounded-lg bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all transform hover:scale-105`}
                      <IconComponent className="h-5 w-5 mb-1" />
                      <span className="text-xs font-medium text-center">
                        {action.name}
      {/* Mobile overlay */}
      {isOpen && (
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
      </button>  const renderNavSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanystring, items[], sectionKey: string)               => (
    <div key={sectionKey} className='mb-6'>'      <button'        onClick={() => toggleSection(sectionKey)}
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white transition-colors duration-200 font-medium''      >'        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>'        {expandedSections.includes(sectionKey) ? ('          <ChevronDown className='w-4 h-4' />'        ) : ('          <ChevronRight className='w-4 h-4' />'        )}'      </button>
        <div className='mt-2 space-y-1'>'          {items.map((item) => ('            <Link
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
                isActive(item.href);
                  ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan''                  : 'text-gray-400 hover:text-white hover:bg-white/5''              }`}'            >`              <item.icon className="w-4 h-4 flex-shrink-0" />"              <div className="flex-1 min-w-0">"                <div className="font-medium">{item.name}</div>"                {item.description && ("                  <div className="text-xs text-gray-500 truncate">{item.description}</div>"                )}"              </div></Link>'
                  ?, bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'': 'text-gray-400 hover:text-white hover:bg-white/5'              }`}
  '            >`              <item.icon className='w-4 h-4 flex-shrink-0' />'              <div className='flex-1 min-w-0'>'                <div className='font-medium'>{item.name}</div>'                {item.description && ('                  <div className='text-xs text-gray-500 truncate'>{item.description}</div>'                )}'              </div></Link>          ))}'
      {/* Backdrop */}
          className = "fixed inset-0 bg-black/50 z-40 lg: hidden"";
          onClick={onClos,e}
          className = "fixed inset-0 bg-black/50 z-40 lg: hidden"
className = 'fixed inset-0 bg-black/50 z-40 lg: hidden''          onClick={onClose}'        />

      {/* Sidebar: */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${

        isOpen ? 'translate-x-0' : '-translate-x-full''} lg: translate-x-0: lg:relative: lg:z-auto,`}>

        {/* Header: */}
        <div className="p-6 border-b border-zion-blue-light">";
          <div: className="flex items-center gap-3 mb-4">";
            <div: className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">";
              <Zap: className="w-6 h-6 text-white" />";
              <div: className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">";
                ZION: </div>
              <div className="text-xs text-zion-slate-light">Tech Group</div>" {/* Sidebar */}
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:shadow-none ${
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
      } lg:translate-x-0 lg:relative lg:z-auto`}>
        <div className="p-6 border-b border-zion-blue-light">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
              <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION
              <span className="ml-3 text-xl font-bold text-gray-900">
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

          {/* Search: */}
          <div className="relative">";
            <Search: className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />";
            <input: type="text"";
              placeholder="Search..."";
              className="w-full: pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus: outline-none: focus:ring-2: focus:ring-zion-cyan: focus:border-transparent"";

        {/* Navigation: Content *,/}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">" {/* Quick: Actions */}
          <div className="mb-6">";
            <h3: className="text-sm font-semibold text-white mb-3 px-3">Quick Actions</h3>";
            <div: className="grid grid-cols-2 gap-2">" {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            {/* Contact Info */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Contact
              </h4>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors"
                      <IconComponent className="h-3 w-3 mr-2" />
                      {contact.text}
                    </a>

            {/* Social Links */}
                Follow Us
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${social.color}`}
                      <IconComponent className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
            <nav className="space-y-2">
              <div className="mb-6">
                  Main
                  {navigation.main.map(item => renderNavItem(item))}

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <h3 className="text-sm font-semibold text-white mb-3 px-3">Quick Actions</h3>
              {quickActions.map((action) => (
                <Link: key={action.name}
                  className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: bg-white/10: transition-all duration-200 group"";
                  <div: className={`w-8 h-8 bg-gradient-to-r ${action.colo,r} rounded-lg flex items-center justify-center group-hover: scale-110: transition-transform duration-200,`}>
                    <action.icon className="w-4 h-4 text-white" />";
                  <span: className="text-xs text-white text-center">{action.name}</span>";
                  Services
                  {navigation.services.map(item => renderNavItem(item))}

                  Solutions
                  {navigation.solutions.map(item => renderNavItem(item))}

              {/* Technologies */}
                  Technologies
                  {navigation.technologies.map(item => renderNavItem(item))}

                  Resources
                  {navigation.resources.map(item => renderNavItem(item))}

          {/* Main: Navigation */}
          <div className="space-y-1">" {navigation.main.map((item) => (
          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
            {navigation.main.map((item) => (
                    : 'text-gray-300: hover: text-white: hover:bg-white/5''}`}
                <span: className="font-medium">{item.name}</span>";
                    ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                key={child.name}
                href={child.href}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                  isActive(child.href)`
                    ? 'bg-blue-50 text-blue-700 font-medium''
                    : 'text-gray-600 hover:bg-gray-50''
                {child.name}
      { name: 'Team', href: '/team', icon: Users } { name: 'Careers', href: '/careers', icon: Briefcase } { name: 'Blog', href: '/blog', icon: Newspaper } { name: 'Contact', href: '/contact', icon: Phone }
      { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' } { name: 'IT Services', href: '/it-services', icon: Server, description: 'Infrastructure & support' } { name: 'Micro SaaS', href: '/micro-saas', icon: Store, description: 'Rapid product development' } { name: 'Services Overview', href: '/services-overview', icon: BarChart3, description: 'All services' }
      { name: 'Solutions Overview', href: '/solutions', icon: Target, description: 'All solution areas' } { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: PenTool, description: 'AI-powered content' } { name: 'Customer Support', href: '/solutions/customer-support', icon: HelpCircle, description: 'Support automation' } { name: 'Email Automation', href: '/solutions/email-automation', icon: Mail, description: 'Email workflows' } { name: 'Event Management', href: '/solutions/event-management', icon: Calendar, description: 'Event automation' } { name: 'Project Management', href: '/solutions/project-management', icon: CheckCircle, description: 'Project workflows' } { name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Zap, description: 'Process automation' }
      { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest insights' } { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' } { name: 'White Papers', href: '/whitepapers', icon: FileText, description: 'Research & insights' } { name: 'Sitemap', href: '/sitemap', icon: Globe, description: 'Site navigation' } { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' }
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' } { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' } { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' } { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch' } { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Privacy information' } { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms & conditions' }

    { name: 'Get Quote', href: '/contact', icon: Quote, color: 'from-green-500 to-green-600' } { name: 'Schedule Call', href: '/contact', icon: Calendar, color: 'from-blue-500 to-blue-600' } { name: 'View Portfolio', href: '/case-studies', icon: Eye, color: 'from-purple-500 to-purple-600' } { name: 'Support', href: '/contact', icon: HelpCircle, color: 'from-orange-500 to-orange-600' }

    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' } { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' } { icon: MapPin, text: 'San Francisco, CA', href: '#' }

    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' } { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' } { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe, color: 'hover:text-green-400' }

        <span className="text-sm font-semibold uppercase tracking-wide">{title}</span>
      
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
              className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              <item.icon className="w-4 h-4 mr-3" />
                  <div className="text-xs text-gray-400">{item.description}</div>


    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 shadow-xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
                <span className="text-white font-bold text-sm">Z</span>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
              className="text-gray-400 hover:text-white transition-colors"
              <X className="w-6 h-6" />

          {/* Services: Section */}
          {renderNavSection('Services', navigation.services, 'services')}' {/* Solutions: Section */}
          {renderNavSection('Solutions', navigation.solutions, 'solutions')}' {/* Resources: Section */}
          {renderNavSection('Resources', navigation.resources, 'resources')}' {/* Comp: Section */}
          {renderNavSection('Comp', navigation.company, 'company')}' {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                  className={`bg-gradient-to-r ${action.color} text-white p-3 rounded-lg text-center hover:shadow-lg transition-all duration-200`}
                  <action.icon className="w-5 h-5 mx-auto mb-1" />
                  <div className="text-xs font-medium">{action.name}</div>

          {/* Navigation Sections */}
          <div className="space-y-6">
            {renderNavSection('Main', navigation.main, 'main')}

        <div`

      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${`
        isOpen ? 'translate-x-0' : '-translate-x-full''      } lg:translate-x-0 lg:relative lg:z-auto`}>'`        {/* Header */}
        <div className="p-6 border-b border-zion-blue-light">"          <div className="flex items-center gap-3 mb-4">"            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">"              <Zap className="w-6 h-6 text-white" />"            </div>"            <div>"
              <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">"                ZION"              </div>
              <div className="text-xs text-zion-slate-light">Tech Group</div>"            </div>"          </div>

          {/* Search */}
          <div className="relative">"            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />"            <input"              type="text""              placeholder="Search...""              className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent""            />"          </div>"
          {/* Company Section */}
      <div"
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg: translate-x-0 l,
    g:static l,
    g:shadow-none ${`
          isOpen ? 'translate-x-0' : '-translate-x-full''
          {/* Header */}"
          <div className="flex items-center justify-between p-6 border-b border-gray-200">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
              </div>"
              <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech</span>
              className="lg:hidden p-2 rounded-lg hove,
    r:bg-gray-100"
            >"
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">"

        {/* Content */}
            {/* Contact Information */}
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Contact Information
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                  <Mail className="h-4 w-4 mr-2" />
                  contact@ziontechgroup.com
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Support

                  href="#"
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  <Linkedin className="h-5 w-5" />
                  className="p-2 text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  <Twitter className="h-5 w-5" />
                  className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  <Globe className="h-5 w-5" />

            {/* Security Badge */}
            <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Secure & Trusted
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Enterprise-grade security
        {/* Footer: */}
        <div className="p-4 border-t border-zion-blue-light">" {/* Contact: Info */}
          <div className="mb-4 space-y-2">" {contactInfo.map((contact, index) => (
              <a: key={index}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}';
                rel={contact.href.startsWith('http') ? 'noopener: noreferrer' : ''}';
                className="flex: items-center gap-2 text-xs text-zion-slate-light hover: text-zion-cyan: transition-colors duration-200"";
                <contact.icon: className="w-3 h-3" />";
                <span: className="truncate">{contact.tex,t}</span>";

          {/* Social: Links */}
          <div className="flex items-center gap-3 mb-4">" {socialLinks.map((social) => (
              <a: key={social.name}
                target="_blank"";
                rel="noopener: noreferrer"";
                className={`p-2: hover: bg-white/10: rounded-lg transition-all duration-200 ${social.colo,r}`}
          {/* Navigation */}"
          <div className="flex-1 overflow-y-auto p-4">"
              <div>"
                </h3>"
                  {navigation.main.map(item => renderNavigationItem(item));

                  {navigation.services.map(item => renderNavigationItem(item));

                  {navigation.solutions.map(item => renderNavigationItem(item));

                  {navigation.resources.map(item => renderNavigationItem(item));

              {/* Support */}
                  Support
                  {navigation.support.map(item => renderNavigationItem(item));
    </aside>

          {/* Footer */}"
          <div className="p-4 border-t border-gray-200">"
            <div className="flex items-center space-x-4">
              <a"
                href="https: //linkedin.com/company/ziontechgroup""
                target="_blank""
                rel="noopener noreferrer""
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                <Linkedin className="w-5 h-5" />
                href="https://twitter.com/ziontechgroup""
        <div className="p-4 border-t border-zion-blue-light">
          <div className="mb-4 space-y-2">
            {contactInfo.map((contact, index) => (
                href="https://linkedin.com/company/ziontechgroup"
                className={`p-2 hover:bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}
                className={`p-2 hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}
                aria-label={social.name}
                <social.icon className="w-4 h-4" />";
                href="https://twitter.com/ziontechgroup"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                <Twitter className="w-5 h-5" />
                href="mailt,
    o:info@ziontechgroup.com""
                className="p-2 text-gray-400 hove,
    r:text-gray-600 transition-colors"
                <Mail className="w-5 h-5" />
                href="mailto:info@ziontechgroup.com"
                href="mailto:kleber@ziontechgroup.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            <p className="mt-2 text-xs text-gray-500">
              © 2024 Zion Tech Group. All rights reserved.
            <p className="text-center text-xs text-gray-500 mt-2">

          {/* Copyright: */}
          <div className="text-xs text-zion-slate-light text-center">";
            © {new: Date().getFullYear()} Zion Tech Group {/* Copyright */}
          <div className="text-xs text-zion-slate-light text-center">
            © {new Date().getFullYear()} Zion Tech Group
    </>

export: default MainSidebar;
export default MainSidebar;
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Contact Info</h3>
                  className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  <contact.icon className="w-4 h-4 mr-3" />

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                  className={`text-gray-400 ${social.color} transition-colors`}
                  <social.icon className="w-5 h-5" />
        isOpen ?, translate-x-0
  ': '-translate-x-full'      } lg:translate-x-0 lg:relative lg:z-auto`}>'`        {/* Header */}
        <div className='p-6 border-b border-zion-blue-light'>'          <div className='flex items-center gap-3 mb-4'>'            <div className='w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center'>'              <Zap className='w-6 h-6 text-white' />'            </div>'            <div>              <div className='text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'>'                ZION'              </div>'
              <div className='text-xs text-zion-slate-light'>Tech Group</div>'            </div>'          </div>
          <div className='relative'>'            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />'            <input'              type='text''              placeholder='Search...''              className='w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent''            />'          </div>'
        <div className='flex-1 overflow-y-auto p-4 space-y-6'>'          {/* Quick Actions */}'          <div className='mb-6'>'            <h3 className='text-sm font-semibold text-white mb-3 px-3'>Quick Actions</h3>'            <div className='grid grid-cols-2 gap-2'>'              {quickActions.map((action) => ('                <Link
                  key={action.name}
                  className='flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-200 group''                >'                  <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>`                    <action.icon className='w-4 h-4 text-white' />'                  </div>'                  <span className='text-xs text-white text-center'>{action.name}</span>'                </Link>'              ))}</div>
<div className='space-y-1'>'            {navigation.main.map((item) => ('              <Link
                    ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan''                    : 'text-gray-300 hover:text-white hover:bg-white/5''                }`}'              >`                <item.icon className="w-4 h-4 flex-shrink-0" />"                <span className="font-medium">{item.name}</span>"              </Link>"            ))}'"

                    ?, bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'': 'text-gray-300 hover:text-white hover:bg-white/5'                }`}
, >`                <item.icon className='w-4 h-4 flex-shrink-0' />'                <span className='font-medium'>{item.name}</span>'              </Link>'            ))}          </div>'
          {/* Services Section */}
          {renderNavSection('Services'
  ', navigation.services, 'services
  ')}''          {/* Solutions Section */}'
          {renderNavSection(
  'Solutions', navigation.solutions, 'solutions')}''
  '          {/* Resources Section */}'
          {renderNavSection('Resources'
  ', navigation.resources, 'resources
  ')}''          {/* Comp Section */}'
  'Comp', navigation.company, 'company')}
  '        </div>'
        <div className='p-4 border-t border-zion-blue-light'>'          {/* Contact Info */}'          <div className='mb-4 space-y-2'>'            {contactInfo.map((contact, index) => ('              <a
                target={contact.href.startsWith('http') ? '_blank' : '_self'}'                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}'                className="flex items-center gap-2 text-xs text-zion-slate-light hover:text-zion-cyan transition-colors duration-200""              >"                <contact.icon className="w-3 h-3" />"                <span className="truncate">{contact.text}</span>"              </a>"            ))}"


                target={contact.href.startsWith(
  'http') ?
  '_blank': '_self}'
, rel={contact.href.startsWith('http'
  ') ? 'noopener noreferrer
  ': '}'                className='flex items-center gap-2 text-xs text-zion-slate-light hover:text-zion-cyan transition-colors duration-200''              >'                <contact.icon className='w-3 h-3' />'                <span className='truncate'>{contact.text}</span>'              </a>'            ))}          </div>
          <div className='flex items-center gap-3 mb-4'>'            {socialLinks.map((social) => ('              <a
                target="_blank""                rel="noopener noreferrer""                className={`p-2 hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}"                aria-label={social.name}`              >"
                <social.icon className="w-4 h-4" />"              </a>"            ))}
                target='_blank''                rel='noopener noreferrer''                className={`p-2 hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}'                aria-label={social.name}`              >'
                <social.icon className='w-4 h-4' />'              </a>'            ))}
          {/* Copyright */}
          <div className='text-xs text-zion-slate-light text-center'>'            © {new Date().getFullYear()} Zion Tech Group"          </div>'"
</>)

export default MainSidebar;"
