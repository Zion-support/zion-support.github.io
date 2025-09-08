

  Mail, MapPin, 
  Globe, Linkedin, 
  Twitter, Shield, 
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

import React { useState } from 'react';
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





  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,

  Wind


interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean;
  onClose: () => void;

  Wind



interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean;
  onClos,
    e: () => void}


const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<any>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>


        : [...prev, section]
    )};

  const isActive = (path: string) => router.pathname === path;


  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home }, { name: 'About', href: '/about', icon: Building }, { name: 'Services', href: '/services', icon: Briefcase }, { name: 'Solutions', href: '/solutions', icon: Target },


interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean;
  onClose: () => void}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]




  const navigation = {

      { name: 'About', href: '/about', icon: Building }, { name: 'Services', href: '/services', icon: Briefcase }, { name: 'Solutions', href: '/solutions', icon: Target }, { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain, description: 'Autonomous AI systems' }, { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud, description: 'Infrastructure & automation' }, { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Zero-trust security' }, { name: 'Data & Analytics', href: '/services/data', icon: Database, description: 'Data pipelines & ML ops' }, { name: 'Micro SaaS', href: '/services/micro-saas', icon: Store, description: 'Rapid product development' }, { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business modernization' }],
    solutions: [
      { name: 'Enterprise'',, href: '/solutions/enterprise',, icon: Building,2, description: 'Large-scale: implementations' }',;
      { name: 'SMB'',, href: '/solutions/smb',, icon: Stor,e, description: 'Small: business focused' }',;
      { name: 'Startup'',, href: '/solutions/startup',, icon: Rocke,t, description: 'Growth: acceleration' }',;
      { name: 'Government'',, href: '/solutions/government',, icon: Buildin,g, description: 'Public: sector expertise' }',;
      { name: 'Healthcare'',, href: '/solutions/healthcare',, icon: Hear,t, description: 'Health: tech solutions' }',;
      { name: 'Financial: Services'',, href: '/solutions/financial',, icon: DollarSig,n, description: 'Fintech: & compliance' }'],
    resources: [
      { name: 'Documentation'',, href: '/docs',, icon: FileTex,t, description: 'Technical: guides' }',;
      { name: 'API: Reference'',, href: '/api',, icon: Cod,e, description: 'Developer: resources' }',;
      { name: 'Case: Studies'',, href: '/case-studies',, icon: BarChart,3, description: 'Success: stories' }',;
      { name: 'Help: Center'',, href: '/help',, icon: HelpCircl,e, description: 'Support: & FAQs' }',;
      { name: 'Status'',, href: '/status',, icon: CheckCircl,e, description: 'System: status' }',;
      { name: 'Pricing'',, href: '/pricing',, icon: DollarSig,n, description: 'Service: pricing' }'],
    company: [
      { name: 'About: Us'',, href: '/about',, icon: Buildin,g, description: 'Our: story & mission' }',;
      { name: 'Team'',, href: '/team',, icon: User,s, description: 'Meet: our experts' }',;
      { name: 'Partners'',, href: '/partners',, icon: Handshak,e, description: 'Strategic: partnerships' }',;
      { name: 'Careers'',, href: '/careers',, icon: Briefcas,e, description: 'Join: our team' }',;
      { name: 'News'',, href: '/news',, icon: Newspape,r, description: 'Company: updates' }',;
      { name: 'Press'',, href: '/press',, icon: Quot,e, description: 'Media: resources' }']
  };

  const: quickActions = [
    { name: 'Request: Quote'',, href: '/request-quote',, icon: Quot,e, color: 'from-cyan-500: to-blue-600' }',;
    { name: 'Get: Support'',, href: '/contact',, icon: HelpCircl,e, color: 'from-green-500: to-emerald-600' }',;
    { name: 'View: Status'',, href: '/status',, icon: CheckCircl,e, color: 'from-yellow-500: to-orange-600' }',;
    { name: 'Documentation'',, href: '/docs',, icon: FileTex,t, color: 'from-purple-500: to-pink-600' }'];

        icon: Brain,
        children: ['
          { nam,
    e: 'AI Development', href: '/services/ai-development' }, { name: 'Machine Learning', href: '/services/machine-learning' }, { name: 'Natural Language Processing', href: '/services/nlp' }, { name: 'Computer Vision', href: '/services/computer-vision' } ]
      }, {'
        name: 'Cloud & Infrastructure',
        icon: Cloud,
        children: ['
          { nam,
    e: 'Cloud Migration', href: '/services/cloud-migration' }, { name: 'DevOps', href: '/services/devops' }, { name: 'Microservices', href: '/services/microservices' }, { name: 'Containerization', href: '/services/containerization' } ]
      }, {'
        name: 'Web Development',
        icon: Code,
        children: ['
          { nam,
    e: 'Frontend Development', href: '/services/frontend' }, { name: 'Backend Development', href: '/services/backend' }, { name: 'Full-Stack Development', href: '/services/fullstack' }, { name: 'E-commerce Solutions', href: '/services/ecommerce' } ]
      }, {'
        name: 'Cybersecurity',
        icon: Shield,
        children: ['
          { nam,
    e: 'Security Audits', href: '/services/security-audits' }, { name: 'Penetration Testing', href: '/services/penetration-testing' }, { name: 'Compliance', href: '/services/compliance' }, { name: 'Incident Response', href: '/services/incident-response' } ]
      } ],
    solutions: [
      {'
        nam,
    e: 'Industry Solutions',
        icon: Building2,
        children: ['
          { nam,
    e: 'Healthcare', href: '/solutions/healthcare' }, { name: 'Finance', href: '/solutions/finance' }, { name: 'Education', href: '/solutions/education' }, { name: 'Manufacturing', href: '/solutions/manufacturing' } ]
      }, {'
        name: 'Technology Solutions',
        icon: Cpu,
        children: ['
          { nam,
    e: 'IoT Platforms', href: '/solutions/iot' }, { name: 'Blockchain', href: '/solutions/blockchain' }, { name: 'Quantum Computing', href: '/solutions/quantum' }, { name: 'AR/VR', href: '/solutions/ar-vr' } ]
      },




    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' }, { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }];

  const: socialLinks = [
    { name: 'LinkedIn'',, href: 'https://www.linkedin.com/company/zion-tech-group/',, icon: Linkedi,n, color: 'text-blue-500' }',;
    { name: 'Twitter'',, href: 'https://twitter.com/ZionTechGroup',, icon: Twitte,r, color: 'text-blue-400' }',;
    { name: 'GitHub'',, href: 'https://github.com/ziontechgroup',, icon: Cod,e, color: 'text-gray-400' }'];




  const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' }, { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' }, { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe, color: 'hover:text-green-400' } ]

  const renderNavSection = (title: string, items: NavItem[], sectionKey: string) => (


    <div key={sectionKey} className="mb-6">
      <button

      >
        <span>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />

        )}
      </button>

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
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: text-white transition-colors duration-200 font-medium'
      >
        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className='w-4 h-4' />

        ) : (
          <Link
            href={item.href}
            onClick={onClose}"
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              isCurrentActive`
                ? 'bg-blue-100 text-blue-700 font-medium''
                : 'text-gray-700 hover:bg-gray-50''
            }`}
          >`
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        )}


          <div className="mt-2 space-y-1">
            {item.children.map((child: any) => (

        </div>
      )}
    </div>

  return (
    <>
      {/* Mobile overlay */}, {isOpen && (


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

  return (

    <>
      {/* Backdrop */}, {isOpen && (

          onClick={onClose}

        />

      )}


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


              {quickActions.map((action) => (
                <Link: key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: bg-white/10: transition-all duration-200 group"";
                >
                  <div: className={`w-8 h-8 bg-gradient-to-r ${action.colo,r} rounded-lg flex items-center justify-center group-hover: scale-110: transition-transform duration-200,`}>
                    <action.icon className="w-4 h-4 text-white" />";
                  </div>
                  <span: className="text-xs text-white text-center">{action.name}</span>";
                </Link>
              ))}
            </div>

          </div>


              <Link

                }`}
              >
                {child.name}

              </Link>
            ))}, {expandedSections.includes(sectionKey) && (
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}


          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>




        </div>

              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"

                className={`p-2 hover: bg-white/10 rounded-lg transition-all duration-200 ${social.color}`}


                aria-label={social.name}

              >

              </a>

              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"

                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              >"
                <Twitter className="w-5 h-5" />
              </a>

                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>


          </div>
        </div>
      </div>
    </>
  )};



          </div>
        </div>
      </div>

                  isActive(item.href);
                    ? 'bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan''                    : 'text-gray-300 hover:text-white hover:bg-white/5''                }`}'              >`                <item.icon className="w-4 h-4 flex-shrink-0" />"                <span className="font-medium">{item.name}</span>"              </Link>"            ))}'"
          </div>


          {/* Services Section */}, {renderNavSection('Services'
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
        <div className="p-4 border-t border-zion-blue-light" />;
          {/* Contact Info */}
          <div className="mb-4 space-y-2">
            {contactInfo.map((contact: unknown, index: unknown) => (
              <a
                key={index}
                href={contact.href}


          {/* Social Links */}
          <div className="flex items-center gap-3 mb-4">
            {socialLinks.map((social: unknown) => (
              <a
                key={social.name}
                href={social.href}

          </div>
          {/* Copyright */}
          <div className="text-xs text-zion-slate-light text-center">
            © {new Date().getFullYear()} Zion Tech Group
          </div>
        </div>
      </div>
</>)
}


  )};


export default MainSidebar;"



