<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
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
=======
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
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
>>>>>>> main
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
  Wind
<<<<<<< HEAD
} from 'lucide-react';

interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean;
  onClose: () => void;
}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => router.pathname === path;
=======
import { Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Settings, User, Bell, BookOpen, Award, Leaf, Sun, Wind
   } from 'lucide-react'

interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean
  onClose: () => void
}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }
  const isActive = (path: string) => router.pathname === path
  interface NavItem {
    name: string
    href: string
    icon: any
    description?: string
  }
>>>>>>> main

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Users },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
<<<<<<< HEAD
      { name: 'AI Development', href: '/services/ai-development', icon: Brain },
      { name: 'Cloud Architecture', href: '/services/cloud-architecture', icon: Cloud },
      { name: 'Web Development', href: '/services/web-development', icon: Code },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'IoT Platforms', href: '/services/iot-platforms', icon: Network },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
      { name: 'SaaS Platforms', href: '/solutions/saas', icon: Server },
      { name: 'Mobile Apps', href: '/solutions/mobile', icon: Smartphone },
      { name: 'E-commerce', href: '/solutions/ecommerce', icon: ShoppingCart },
      { name: 'Analytics', href: '/solutions/analytics', icon: BarChart3 },
      { name: 'Automation', href: '/solutions/automation', icon: Zap },
    ],
    technologies: [
      { name: 'React & Next.js', href: '/technologies/react', icon: Code },
      { name: 'Node.js', href: '/technologies/nodejs', icon: Server },
      { name: 'Python', href: '/technologies/python', icon: Cpu },
      { name: 'AWS', href: '/technologies/aws', icon: Cloud },
      { name: 'Docker', href: '/technologies/docker', icon: Database },
      { name: 'Kubernetes', href: '/technologies/kubernetes', icon: Network },
    ],
    resources: [
      { name: 'Documentation', href: '/docs', icon: BookOpen },
      { name: 'API Reference', href: '/api', icon: Code },
      { name: 'Tutorials', href: '/tutorials', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'White Papers', href: '/whitepapers', icon: FileText },
      { name: 'Support', href: '/support', icon: HelpCircle },
    ]
  };

  const renderNavItem = (item: any, level = 0) => {
    const hasChildren = typeof item === 'object' && item.children;
    const isExpanded = expandedSections.includes(item.name);

    if (hasChildren) {
      return (
        <div key={item.name} className="mb-2">
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
              level === 0
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              {item.icon && <item.icon className="w-5 h-5 mr-3" />}
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {isExpanded && (
            <div className="ml-4 mt-2 space-y-1">
              {item.children.map((child: any) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive(item.href)
            ? 'bg-blue-100 text-blue-700 font-medium'
            : level === 0
            ? 'text-gray-700 hover:bg-gray-100'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
        onClick={onClose}
      >
        {item.icon && <item.icon className="w-5 h-5 mr-3" />}
        <span>{item.name}</span>
      </Link>
    );
  };

=======
      {
        name: 'AI Services',
        icon: Brain,
        children: [
          { name: 'AI Services', href: '/services/ai-services' },
          { name: 'AI Development', href: '/services/ai-development' },
        ]
      },
      {
        name: 'IT & Development',
        icon: Code,
        children: [
          { name: 'IT Services', href: '/services/it-services' },
          { name: 'Web Development', href: '/services/web-development' },
          { name: 'Cloud Services', href: '/services/cloud-services' },
        ]
      },
      {
        name: 'SaaS Solutions',
        icon: Cloud,
        children: [
          { name: 'Micro SaaS', href: '/services/micro-saas' },
        ]
      },
    ],
    solutions: [
      {
        name: 'Automation Solutions',
        icon: Zap,
        children: [
          { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
          { name: 'Email Automation', href: '/solutions/email-automation' },
          { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
        ]
      },
      {
        name: 'Business Solutions',
        icon: Target,
        children: [
          { name: 'Customer Support', href: '/solutions/customer-support' },
          { name: 'Event Management', href: '/solutions/event-management' },
          { name: 'Project Management', href: '/solutions/project-management' },
        ]
      },
    ],
    resources: [
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign },
      { name: 'Sitemap', href: '/sitemap', icon: Globe },
      { name: 'Search', href: '/search', icon: Search },
    ],
    support: [
      { name: 'Contact Us', href: '/contact', icon: Phone },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield },
      { name: 'Terms of Service', href: '/terms', icon: FileText },
      { name: 'Cookie Policy', href: '/cookies', icon: Shield },
    ]
  }
  const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: DollarSign, color: 'from-green-500 to-green-600' },
    { name: 'Schedule Call', href: '/schedule', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { name: 'View Portfolio', href: '/portfolio', icon: Eye, color: 'from-purple-500 to-purple-600' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-orange-600' },
  ]

  const contactInfo = [
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ]

  const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe, color: 'hover:text-green-400' },
  ]

  const renderNavSection = (title: string, items: NavItem[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
}  Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Settings, User, Bell, BookOpen, Award, Leaf, Sun, Wind }  from 'lucide-react.ts;interface SidebarProps extends React.PropsWithChildren<{}> {isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyboolean
  onClose: ()               => void}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<any>([])

  const toggleSection = (section: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const isActive = (path: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === path

  interface NavItem {
  name: string
   href: string
   icon: any
   description?: string
}

  const navigation: { main: NavItem[] services: NavItem[] solutions: NavItem[] resources: NavItem[] company: NavItem[] } = {
    main: [
      { name: 'Home', href: '/', icon: Home }, { name: 'About', href: '/about', icon: Building }, { name: 'Services', href: '/services', icon: Briefcase }, { name: 'Solutions', href: '/solutions', icon: Target }, { name: 'Partners', href: '/partners', icon: Handshake }, { name: 'Careers', href: '/careers', icon: Users }, { name: 'Blog', href: '/blog', icon: Newspaper }, { name: 'Contact', href: '/contact', icon: Phone }], services: [
      { name: 'AI Services', href: '/services/ai-services', icon: Brain, description: 'Applied AI solutions' }, { name: 'IT Services', href: '/services/it-services', icon: Server, description: 'Infrastructure & support' }, { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' }, { name: 'AI Ops Copilot', href: '/services/ai-ops-copilot', icon: Cpu, description: 'Ops automation' }, { name: 'Security Copilot', href: '/services/security-copilot', icon: Shield, description: 'Proactive defense' }, { name: 'Data Platform', href: '/services/data-platform', icon: Database, description: 'Data pipelines & BI' }, { name: 'MarTech Automation', href: '/services/martech-automation', icon: Rocket, description: 'Growth automation' }], solutions: [
      { name: 'Solutions Overview', href: '/solutions', icon: Target, description: 'All solution areas' }, { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2, description: 'Large-scale implementations' }, { name: 'Small Business', href: '/solutions/small-business', icon: Store, description: 'SMB focused' }, { name: 'Startups', href: '/solutions/startups', icon: Rocket, description: 'Growth acceleration' }, { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' }], resources: [
      { name: 'Documentation', href: '/documentation', icon: FileText, description: 'Technical guides' }, { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' }, { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' }, { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support & FAQs' }, { name: 'Status', href: '/status', icon: CheckCircle, description: 'System status' }, { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing' }], company: [
      { name: 'About Us', href: '/about', icon: Building, description: 'Our story & mission' }, { name: 'Team', href: '/team', icon: Users, description: 'Meet our experts' }, { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' }, { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' }, { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Company updates' }]
  }

  const quickActions = [
  { name: 'Contact Sales', href: '/contact', icon: Quote, color: 'from-cyan-500 to-blue-600' }, { name: 'Get Support', href: '/contact', icon: HelpCircle, color: 'from-green-500 to-emerald-600' }, { name: 'View Status', href: '/status', icon: CheckCircle, color: 'from-yellow-500 to-orange-600' }, { name: 'Documentation', href: '/documentation', icon: FileText, color: 'from-purple-500 to-pink-600' }]

  const contactInfo = [
  { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' }, { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' }, { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }]

  const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group/', icon: Linkedin, color: 'text-blue-500' }, { name: 'Twitter', href: 'https://twitter.com/ZionTechGroup', icon: Twitter, color: 'text-blue-400' }, { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code, color: 'text-gray-400' }]

  const renderNavSection = (title: string, items: NavItem[], sectionKey: string) => (
    <div key={sectionKey} className='mb-6'>
      <button
        onClick={() => toggleSection(sectionKey)}
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium'
      >
        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className='w-4 h-4' />
        ) : (
          <ChevronRight className='w-4 h-4' />
        )}
      </button>

      {expandedSections.includes(sectionKey) && (
        <div className="mt-2 space-y-1">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium">{item.name}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 truncate">{item.description}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
>>>>>>> main
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
<<<<<<< HEAD
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
=======
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
>>>>>>> main
          onClick={onClose}
        />
      </button>  const renderNavSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanystring, items[], sectionKey: string)               => (
    <div key={sectionKey} className='mb-6'>'      <button'        onClick={() => toggleSection(sectionKey)}
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white transition-colors duration-200 font-medium''      >'        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>'        {expandedSections.includes(sectionKey) ? ('          <ChevronDown className='w-4 h-4' />'        ) : ('          <ChevronRight className='w-4 h-4' />'        )}'      </button>
      {expandedSections.includes(sectionKey) && (
        <div className='mt-2 space-y-1'>'          {items.map((item) => ('            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
                isActive(item.href)
                  ?, bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'': 'text-gray-400 hover:text-white hover:bg-white/5'              }`}
  '            >`              <item.icon className='w-4 h-4 flex-shrink-0' />'              <div className='flex-1 min-w-0'>'                <div className='font-medium'>{item.name}</div>'                {item.description && ('                  <div className='text-xs text-gray-500 truncate'>{item.description}</div>'                )}'              </div></Link>          ))}
        </div>
      )}
    </div>
  )
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
className = 'fixed inset-0 bg-black/50 z-40 lg: hidden''          onClick={onClose}'        />
      )}

      {/* Sidebar */}
<<<<<<< HEAD
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
=======
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:z-auto`}>
        {/* Header */}
        <div className="p-6 border-b border-zion-blue-light">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION
>>>>>>> main
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                Zion Tech Group
              </span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {/* Main Navigation */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Main
                </h3>
                <div className="space-y-1">
                  {navigation.main.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Services
                </h3>
                <div className="space-y-1">
                  {navigation.services.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Solutions */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Solutions
                </h3>
                <div className="space-y-1">
                  {navigation.solutions.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="space-y-1">
                  {navigation.technologies.map(item => renderNavItem(item))}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-6">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                <div className="space-y-1">
                  {navigation.resources.map(item => renderNavItem(item))}
                </div>
              </div>
            </nav>
          </div>

<<<<<<< HEAD
          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
=======
          {/* Main Navigation */}
          <div className="space-y-1">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Services Section */}
          {renderNavSection('Services', navigation.services, 'services')}
          
          {/* Solutions Section */}
          {renderNavSection('Solutions', navigation.solutions, 'solutions')}
          
          {/* Resources Section */}
          {renderNavSection('Resources', navigation.resources, 'resources')}
          
          {/* Company Section */}
          {renderNavSection('Company', navigation.company, 'company')}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zion-blue-light">
          {/* Contact Info */}
          <div className="mb-4 space-y-2">
            {contactInfo.map((contact, index) => (
>>>>>>> main
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
<<<<<<< HEAD
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
=======
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-zion-slate-light text-center">
            © {new Date().getFullYear()} Zion Tech Group
>>>>>>> main
          </div>
        </div>
      </div>
    </>
  )
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${`
        isOpen ?, translate-x-0
  ': '-translate-x-full'      } lg:translate-x-0 lg:relative lg:z-auto`}>'`        {/* Header */}
        <div className='p-6 border-b border-zion-blue-light'>'          <div className='flex items-center gap-3 mb-4'>'            <div className='w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center'>'              <Zap className='w-6 h-6 text-white' />'            </div>'            <div>              <div className='text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'>'                ZION'              </div>
              <div className='text-xs text-zion-slate-light'>Tech Group</div>'            </div>'          </div>
          {/* Search */}
          <div className='relative'>'            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />'            <input'              type='text''              placeholder='Search...''              className='w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent''            />'          </div>'
        </div>
        {/* Navigation Content */}
        <div className='flex-1 overflow-y-auto p-4 space-y-6'>'          {/* Quick Actions */}'          <div className='mb-6'>'            <h3 className='text-sm font-semibold text-white mb-3 px-3'>Quick Actions</h3>'            <div className='grid grid-cols-2 gap-2'>'              {quickActions.map((action) => ('                <Link
                  key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className='flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-200 group''                >'                  <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>`                    <action.icon className='w-4 h-4 text-white' />'                  </div>'                  <span className='text-xs text-white text-center'>{action.name}</span>'                </Link>'              ))}</div>
          </div>
          {/* Main Navigation */}
<div className='space-y-1'>'            {navigation.main.map((item) => ('              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
                  isActive(item.href)
                    ?, bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'': 'text-gray-300 hover:text-white hover:bg-white/5'                }`}
, >`                <item.icon className='w-4 h-4 flex-shrink-0' />'                <span className='font-medium'>{item.name}</span>'              </Link>'            ))}          </div>
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
          {renderNavSection(
  'Comp', navigation.company, 'company')}
  '        </div>'
        {/* Footer */}
        <div className='p-4 border-t border-zion-blue-light'>'          {/* Contact Info */}'          <div className='mb-4 space-y-2'>'            {contactInfo.map((contact, index) => ('              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith(
  'http') ?
  '_blank': '_self}
, rel={contact.href.startsWith('http
  ') ? 'noopener noreferrer
  ': '}'                className='flex items-center gap-2 text-xs text-zion-slate-light hover:text-zion-cyan transition-colors duration-200''              >'                <contact.icon className='w-3 h-3' />'                <span className='truncate'>{contact.text}</span>'              </a>'            ))}          </div>
          {/* Social Links */}
          <div className='flex items-center gap-3 mb-4'>'            {socialLinks.map((social) => ('              <a
                key={social.name}
                href={social.href}
                target='_blank''                rel='noopener noreferrer''                className={`p-2 hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}'                aria-label={social.name}`              >'
                <social.icon className='w-4 h-4' />'              </a>'            ))}
          </div>
          {/* Copyright */}
          <div className='text-xs text-zion-slate-light text-center'>'            © {new Date().getFullYear()} Zion Tech Group"          </div>
        </div>
      </div>
</>)
}

export default MainSidebar