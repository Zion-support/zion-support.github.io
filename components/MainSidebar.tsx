import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
interface SidebarProps extends React.PropsWithChildren<{}> {
  isOpen: boolean onClose: () => void
}

const MainSidebar: Reac t.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
    name: string href: string
    icon: any description?: string
  }

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Hom e }, { name: 'About', href: '/about', icon: User s },
      { name: 'Services', href: '/services', icon: Briefcas e }, { name: 'Contact', href: '/contact', icon: Phon e },
    ], services: [
      { name: 'Web Development', href: '/services/web-development', icon: Cod e },
      { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brai n }, { name: 'Cloud Services', href: '/services/cloud-services', icon: Clou d },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart 3 },  ], solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Buildin g },
      { name: 'E-commerce', href: '/solutions/ecommerce', icon: ShoppingCar t }, { name: 'Mobile Apps', href: '/solutions/mobile', icon: Smartphon e },
      { name: 'IoT Solutions', href: '/solutions/iot', icon: Networ k },  ], resources: [
      { name: 'Blog', href: '/blog', icon: FileTex t },
      { name: 'Case Studies', href: '/case-studies', icon: Targe t }, { name: 'Documentation', href: '/docs', icon: BookOpe n },
      { name: 'Support', href: '/support', icon: LifeBuo y },  ], company: [
      { name: 'Our Team', href: '/team', icon: User s },
      { name: 'Careers', href: '/careers', icon: Briefcas e }, { name: 'News', href: '/news', icon: Newspape r },
      { name: 'Contact', href: '/contact', icon: Mai l },  ]
  }
  const quickActions = [
    { name: 'Get Quote', href: '/quote', icon: DollarSig n, color: 'from-green-500 to-green-600' },
    { name: 'Schedule Call', href: '/schedule', icon: Calenda r, color: 'from-blue-500 to-blue-600' },
    { name: 'View Portfolio', href: '/portfolio', icon: Ey e, color: 'from-purple-500 to-purple-600' },
    { name: 'Support', href: '/support', icon: HelpCircl e, color: 'from-orange-500 to-orange-600' },
  ]

  const contactInfo = [
    { icon: Phon e, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mai l, text: 'info@ziontechgroup.com', href: 'mailto: inf o@ziontechgroup.com' }, { icon: MapPi n, text: 'San Francisco, CA', href: '#' },  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedi n, color: 'hover: tex t-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitte r, color: 'hover: tex t-blue-400' },
    { name: 'Website', href: 'https://ziontechgroup.com', icon: Glob e, color: 'hover: tex t-green-400' },
  ]

  const renderNavSection = (title: string, items: NavIte m[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
}  Mail, MapPin, Globe, Linkedin, Twitter, Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Settings, User, Bell, BookOpen, Award, Leaf, Sun, Wind } from
  'lucide-react.ts'';interface SidebarProps extends React.PropsWithChildren<{}> {isOpen: anyanyanyanyanyanyanyanyanyanyanyanyanyboolean'
  onClose: ()               => void}

const MainSidebar: Reac t.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
  name: string href: string
   icon: any description?: string
}

  const navigation: { main: NavIte m[] services: NavIte m[] solutions: NavIte m[] resources: NavIte m[] company: NavIte m[] } = {
    main: [
      { name: 'Home', href: '/', icon: Hom e }, { name: 'About', href: '/about', icon: Buildin g }, { name: 'Services', href: '/services', icon: Briefcas e }, { name: 'Solutions', href: '/solutions', icon: Targe t }, { name: 'Partners', href: '/partners', icon: Handshak e }, { name: 'Careers', href: '/careers', icon: User s }, { name: 'Blog', href: '/blog', icon: Newspape r }, { name: 'Contact', href: '/contact', icon: Phon e }], services: [
      { name: 'AI Services', href: '/services/ai-services', icon: Brai n, description: 'Applied AI solutions' }, { name: 'IT Services', href: '/services/it-services', icon: Serve r, description: 'Infrastructure & support' }, { name: 'Micro SaaS', href: '/services/micro-saas', icon: Stor e, description: 'Rapid product development' }, { name: 'AI Ops Copilot', href: '/services/ai-ops-copilot', icon: Cp u, description: 'Ops automation' }, { name: 'Security Copilot', href: '/services/security-copilot', icon: Shiel d, description: 'Proactive defense' }, { name: 'Data Platform', href: '/services/data-platform', icon: Databas e, description: 'Data pipelines & BI' }, { name: 'MarTech Automation', href: '/services/martech-automation', icon: Rocke t, description: 'Growth automation' }], solutions: [
      { name: 'Solutions Overview', href: '/solutions', icon: Targe t, description: 'All solution areas' }, { name: 'Enterprise', href: '/solutions/enterprise', icon: Building 2, description: 'Large-scale implementations' }, { name: 'Small Business', href: '/solutions/small-business', icon: Stor e, description: 'SMB focused' }, { name: 'Startups', href: '/solutions/startups', icon: Rocke t, description: 'Growth acceleration' }, { name: 'Case Studies', href: '/case-studies', icon: BarChart 3, description: 'Success stories' }], resources: [
      { name: 'Documentation', href: '/documentation', icon: FileTex t, description: 'Technical guides' }, { name: 'API Reference', href: '/api', icon: Cod e, description: 'Developer resources' }, { name: 'Case Studies', href: '/case-studies', icon: BarChart 3, description: 'Success stories' }, { name: 'Help Center', href: '/help', icon: HelpCircl e, description: 'Support & FAQs' }, { name: 'Status', href: '/status', icon: CheckCircl e, description: 'System status' }, { name: 'Pricing', href: '/pricing', icon: DollarSig n, description: 'Service pricing' }], company: [
      { name: 'About Us', href: '/about', icon: Buildin g, description: 'Our story & mission' }, { name: 'Team', href: '/team', icon: User s, description: 'Meet our experts' }, { name: 'Partners', href: '/partners', icon: Handshak e, description: 'Strategic partnerships' }, { name: 'Careers', href: '/careers', icon: Briefcas e, description: 'Join our team' }, { name: 'Blog', href: '/blog', icon: Newspape r, description: 'Company updates' }]
  }

  const quickActions = [
    { name: 'Contact Sales', href: '/contact', icon: Quot e, color: 'from-cyan-500 to-blue-600' }, { name: 'Get Support', href: '/contact', icon: HelpCircl e, color: 'from-green-500 to-emerald-600' }, { name: 'View Status', href: '/status', icon: CheckCircl e, color: 'from-yellow-500 to-orange-600' }, { name: 'Documentation', href: '/documentation', icon: FileTex t, color: 'from-purple-500 to-pink-600' }]

  const contactInfo = [
    { icon: Phon e, text: '+1 (302) 464-0950', href: 'tel:+13024640950' }, { icon: Mai l, text: 'kleber@ziontechgroup.com', href: 'mailto: klebe r@ziontechgroup.com' }, { icon: MapPi n, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' }]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group/', icon: Linkedi n, color: 'text-blue-500' }, { name: 'Twitter', href: 'https://twitter.com/ZionTechGroup', icon: Twitte r, color: 'text-blue-400' }, { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Cod e, color: 'text-gray-400' }]

  const renderNavSection = (title: string, items: NavIte m[], sectionKey: string) => (
    <div key={sectionKey} className='mb-6'>
      <button
        onClick={() => toggleSection(sectionKey)}
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: tex t-white transition-colors duration-200 font-medium'
      >
        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className='w-4 h-4'  />
        ) : (
          <ChevronRight className='w-4 h-4'  />
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
                  : 'text-gray-400 hover: tex t-white hover: b g-white/5'
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
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg: hidde n"
          onClick={onClose}
         />
      </button>  const renderNavSection = (title: anyanyanyanyanyanyanyanyanyanyanyanyanystring, items[], sectionKey: string)               => (
    <div key={sectionKey} className='mb-6'>'      <button'        onClick={() => toggleSection(sectionKey)}
        className='flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: tex t-white transition-colors duration-200 font-medium''      >'        <span className='text-sm font-semibold uppercase tracking-wide'>{title}</span>'        {expandedSections.includes(sectionKey) ? ('          <ChevronDown className='w-4 h-4'  />'        ) : ('          <ChevronRight className='w-4 h-4'  />'        )}'      </button>
      {expandedSections.includes(sectionKey) && (
        <div className='mt-2 space-y-1'>'          {items.map((item) => ('            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
                isActive(item.href)
                  ?, bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'': 'text-gray-400 hover: tex t-white hover: b g-white/5'              }`}
  '            >`              <item.icon className='w-4 h-4 flex-shrink-0' />'              <div className='flex-1 min-w-0'>'                <div className='font-medium'>{item.name}</div>'                {item.description && ('                  <div className='text-xs text-gray-500 truncate'>{item.description}</div>'                )}'              </div></Link>          ))}'
        </div>
      )}
    </div>
  )
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className = 'fixed inset-0 bg-black/50 z-40 lg: hidde n''          onClick={onClose}'         />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg: translat e-x-0 lg: relative lg:z-auto`}>
        {/* Header */}
        <div className="p-6 border-b border-zion-blue-light">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white"  />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION
              </div>
              <div className="text-xs text-zion-slate-light">Tech Group</div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"  />
            <input type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan focus: borde r-transparent"
             />
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white mb-3 px-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: b g-white/10 transition-all duration-200 group"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-200`}>
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-white text-center">{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

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
                    : 'text-gray-300 hover: tex t-white hover: b g-white/5'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Zion Tech</h2>
              <p className="text-xs text-gray-400">Navigation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-6">
          <div className="space-y-6">
            {/* Main Pages */}
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Main Pages
              </h3>
              {navigation.main.map((item) => (
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
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Services */}
            {renderNavigationSection('Services', navigation.services, 'services')}

            {/* Solutions */}
            {renderNavigationSection('Solutions', navigation.solutions, 'solutions')}

            {/* Resources */}
            {renderNavigationSection('Resources', navigation.resources, 'resources')}

            {/* Company */}
            {renderNavigationSection('Company', navigation.company, 'company')}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-6 border-t border-gray-800">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                onClick={onClose}
                className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
              >
                <action.icon className="w-4 h-4 mx-auto mb-1" />
                <div className="text-xs font-medium">{action.name}</div>
              </Link>
            ))}
          </div>
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
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center gap-2 text-xs text-zion-slate-light hover: tex t-zion-cyan transition-colors duration-200"
              >
                <contact.icon className="w-3 h-3" />
                <span className="truncate">{contact.text}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 hover: b g-white/10 rounded-lg transition-all duration-200 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-zion-slate-light text-center">
            © {new Date().getFullYear()} Zion Tech Group
          </div>
        </div>
      </div>
</>
  )
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 transform transition-transform duration-300 ease-in-out ${`
        isOpen ?, translate-x-0
  ': '-translate-x-full'      } lg: translat e-x-0 lg: relative lg:z-auto`}>'`        {/* Header */}
        <div className='p-6 border-b border-zion-blue-light'>'          <div className='flex items-center gap-3 mb-4'>'            <div className='w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center'>'              <Zap className='w-6 h-6 text-white'  />'            </div>'            <div>              <div className='text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'>'                ZION'              </div>'
              <div className='text-xs text-zion-slate-light'>Tech Group</div>'            </div>'          </div>
          {/* Search */}
          <div className='relative'>'            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4'  />'            <input'              type='text''              placeholder='Search...''              className='w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 text-sm focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan focus: borde r-transparent''            />'          </div>'
        </div>
        {/* Navigation Content */}
        <div className='flex-1 overflow-y-auto p-4 space-y-6'>'          {/* Quick Actions */}'          <div className='mb-6'>'            <h3 className='text-sm font-semibold text-white mb-3 px-3'>Quick Actions</h3>'            <div className='grid grid-cols-2 gap-2'>'              {quickActions.map((action) => ('                <Link
                  key={action.name}
                  href={action.href}
                  onClick={onClose}
                  className='flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover: b g-white/10 transition-all duration-200 group''                >'                  <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-200`}>`                    <action.icon className='w-4 h-4 text-white' />'                  </div>'                  <span className='text-xs text-white text-center'>{action.name}</span>'                </Link>'              ))}</div>
          </div>
          {/* Main Navigation */}
<div className='space-y-1'>'            {navigation.main.map((item) => ('              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${`
                  isActive(item.href)
                    ?, bg-zion-cyan/20 text-zion-cyan border-l-2 border-zion-cyan'': 'text-gray-300 hover: tex t-white hover: b g-white/5'                }`}
, >`                <item.icon className='w-4 h-4 flex-shrink-0' />'                <span className='font-medium'>{item.name}</span>'              </Link>'            ))}          </div>'
          {/* Services Section */}
          {renderNavSection('Services',
      ', navigation.services, 'services
  ')}''          {/* Solutions Section */}'
          {renderNavSection(
  'Solutions', navigation.solutions, 'solutions')}'',
      '          {/* Resources Section */}'
          {renderNavSection('Resources',
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
  '_blank': '_self}'
, rel={contact.href.startsWith('http'
  ') ? 'noopener noreferrer
  ': '}'                className='flex items-center gap-2 text-xs text-zion-slate-light hover: tex t-zion-cyan transition-colors duration-200''              >'                <contact.icon className='w-3 h-3' />'                <span className='truncate'>{contact.text}</span>'              </a>'            ))}          </div>
          {/* Social Links */}
          <div className='flex items-center gap-3 mb-4'>'            {socialLinks.map((social) => ('              <a
                key={social.name}
                href={social.href}
                target='_blank''                rel='noopener noreferrer''                className={`p-2 hover: b g-white/10 rounded-lg transition-all duration-200 ${social.color}`}'                aria-label={social.name}`              >'
                <social.icon className='w-4 h-4' />'              </a>'            ))}
          </div>
          {/* Copyright */}
          <div className='text-xs text-zion-slate-light text-center'>'            © {new Date().getFullYear()} Zion Tech Group"          </div>'"
        </div>
      </div>
</>)
}

export default MainSidebar