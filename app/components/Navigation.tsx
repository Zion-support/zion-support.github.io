<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
=======
"use client";
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
>>>>>>> main
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
<<<<<<< HEAD
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
=======
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
>>>>>>> main
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
<<<<<<< HEAD
  ChevronDownIcon
} from '@heroicons/react/24/outline'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
=======
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  ChevronDown, 
  Mail, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  ArrowRight, 
  Target, 
  Smartphone, 
  TrendingUp, 
  Settings, 
  FileText, 
  MessageCircle, 
  DollarSign, 
  Box, 
  Link as LinkIcon, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [_microSaasOpen, setMicroSaasOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
=======
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
<<<<<<< HEAD
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
    submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  const isActive = (path: string) => {
    return pathname === path
  }
=======
<<<<<<< HEAD

  const closeAllMenus = useCallback(() => {
    setIsOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [])

  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', icon: Mic, description: 'Voice technology' }
  ]

  const itServices = [
    { name: 'Web Development', url: '/web-development', icon: Code, description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', icon: Cloud, description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security services' },
    { name: 'DevOps', url: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', icon: BarChart, description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', icon: Wifi, description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', icon: LinkIcon, description: 'Blockchain technology' }
  ]

  const _microSaasServices = [
    { name: 'AI Project Management Pro', url: '/ai-project-management-pro', icon: Target, description: 'AI-powered project management' },
    { name: 'AI Financial Analytics Pro', url: '/ai-financial-analytics-pro', icon: DollarSign, description: 'Advanced financial analytics' },
    { name: 'AI Email Automation', url: '/ai-email-automation', icon: Mail, description: 'Automated email marketing' },
    { name: 'AI 3D Model Generator', url: '/ai-3d-model-generator', icon: Box, description: '3D model generation' }
  ]

>>>>>>> 1c3bcb5bf864
  return (
    <nav className={
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
}`}>
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg: flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover: text-white hover:bg-slate-800'}`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  {/* Dropdown Menu */},
    {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover: text-white hover:bg-slate-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {/* CTA Button */}
          <div className="hidden lg: flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover: from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="lg: hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover: text-white p-2"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
=======
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  ChartBarIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Training', href: '/training', icon: AcademicCapIcon },
    { name: 'Help', href: '/help', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Status', href: '/status', icon: CheckCircleIcon }
  ];

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
    { name: 'Micro SaaS', href: '/micro-saas', icon: CodeBracketIcon },
    { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
    { name: 'Mobile Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
    { name: 'Web Development', href: '/web-development', icon: GlobeAltIcon },
    { name: 'Data Analytics', href: '/data-analytics', icon: ChartBarIcon },
    { name: 'DevOps', href: '/devops', icon: WrenchScrewdriverIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <CogIcon className="w-4 h-4" />
                <span>Services</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
>>>>>>> main
            </button>
          </div>
        </div>
        {/* Mobile Navigation */},
    {isOpen && (
          <div className="lg: hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover: text-white hover:bg-slate-700'}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name}
                            href={subItem.href}
                            className="text-gray-400 hover: text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
=======
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={closeAllMenus}
=======
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    {
      name: 'Services',
      href: '/services',
      icon: BriefcaseIcon,
    submenu: [
        { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  const isActive = (path: string) => {
    return pathname === path
  }
  return (
    <nav className={
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
}`}>
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg: flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover: text-white hover:bg-slate-800'}`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  {/* Dropdown Menu */},
    {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover: text-white hover:bg-slate-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {/* CTA Button */}
          <div className="hidden lg: flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover: from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="lg: hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover: text-white p-2"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */},
    {isOpen && (
          <div className="lg: hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover: text-white hover:bg-slate-700'}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name}
                            href={subItem.href}
                            className="text-gray-400 hover: text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
<<<<<<< HEAD
    </nav>
  )
}
export default Navigation
=======

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            {/* Mobile Services */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-3 mb-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Services</h3>
              </div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{service.name}</span>
                  </Link>
                );
              })}
            </div>
            
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                to="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
<<<<<<< HEAD
  );
});

export default Navigation;
>>>>>>> main
=======
  )
}
<<<<<<< HEAD

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
export default Navigation
>>>>>>> 1c3bcb5bf864
