import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, ChevronDown, ChevronRight } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  LogOut,
  User,
  Search,
  Brain,
  Shield,
  Cloud,
  Code,
  Network,
  Zap,
  Phone,
  Mail,
  MapPin,
  Building2,
} from 'lucide-react'
const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' },
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' },
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}
const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' },
]
interface SidebarProps {}
  isOpen: boolean
  onClose: () => void
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])
  const navigation = {
    'Services': [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
    ],
    'Solutions': [
      { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
      { name: 'Data Analytics', href: '/solutions/data-analytics' },
    ],
    'Industries': [
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
    ],
  }
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ]
  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

  ExternalLink
} from 'lucide-react';
interface SidebarProps {
  isOpen: boolean;, onClose: () => void
        : [...prev, title]
    )
  ]
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion&& motion.div
            initial={{ opacity: 0 ;}}
            animate={{ opacity: 1 ;}}
            exit={{ opacity: 0 ;}}
            initial={{ x: -300 ;}}
            animate={{ x: 0 ;}}
            exit={{ x: -300 ;}}
            transition={{ type: 'spring';, damping: 25;, stiffness: 200 ;}}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
              {/* Navigation */}
              <nav className="space-y-4">
                {Object && Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                    <Link
                      key={link && link.name}
                      href={link && link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}>
                      {link && link.name}
                    </Link>
                  ))}
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup && ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors"
const Sidebar: React.FC < SidebarProps> = ({ is_open;, on_close }) => {
  const [open_dropdowns, setOpenDropdowns] = useState < string[]>([])
  const handleDropdownToggle = (title: string) =>: any {
    setOpenDropdowns (prev =>
      prev.includes (title)
        ? prev.filter (item => item !== title)
        : [...prev, title])
  const navigation = {
    'Services': [
      { name: 'Web Development';, href: '/services / web - development';, icon: Code ;},
      { name: 'Mobile Development';, href: '/services / mobile - development';, icon: Smartphone ;},
      { name: 'Cloud Solutions';, href: '/services / cloud - solutions';, icon: Cloud ;},
      { name: 'Cybersecurity';, href: '/services / cybersecurity';, icon: Shield ;},
      { name: 'Performance Optimization';, href: '/services / performance';, icon: Zap ;},
    ],
    'Solutions': [
      { name: 'Enterprise Solutions';, href: '/solutions / enterprise';, icon: Building2 ;},
      { name: 'E - commerce Platforms';, href: '/solutions / ecommerce';, icon: ShoppingCart ;},
      { name: 'Healthcare Technology';, href: '/solutions / healthcare';, icon: Heart ;},
      { name: 'Educational Platforms';, href: '/solutions / education';, icon: GraduationCap ;},
    ],
    'Industries': [
      { name: 'Manufacturing';, href: '/industries / manufacturing';, icon: Factory ;},
      { name: 'Logistics';, href: '/industries / logistics';, icon: Truck ;},
      { name: 'Finance';, href: '/industries / finance';, icon: CreditCard ;},
      { name: 'Healthcare';, href: '/industries / healthcare';, icon: Heart ;},
      { name: 'Education';, href: '/industries / education';, icon: GraduationCap ;},
    ],

  const quick_links = [
    { name: 'About Us';, href: '/about' ;},
    { name: 'Our Team';, href: '/team' ;},
    { name: 'Case Studies';, href: '/case - studies' ;},
    { name: 'Blog';, href: '/blog' ;},
    { name: 'Careers';, href: '/careers' ;},
    { name: 'Contact';, href: '/contact' ;},
  ]
  return (
    <AnimatePresence>
      {is_open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 ;}}
            animate={{ opacity: 1 ;}}
            exit={{ opacity: 0 ;}}
            className="fixed inset - 0 bg - black bg - opacity - 50 z - 40"
            on_click={on_close}
          />
          <motion.div
            initial={{ coordinate_x: -300 ;}}
            animate={{ coordinate_x: 0 ;}}
            exit={{ coordinate_x: -300 ;}}
            transition={{ type: 'spring';, damping: 25;, stiffness: 200 ;}}
            className="fixed left - 0 top - 0 h - full w - 80 bg - white shadow - xl z - 50"
            <div className="p - 6">
              {/* Header */}
              <div className="flex items - center justify - between mb - 8">
                <div className="flex items - center space - x-2">
                  <div className="bg - gradient - to - r from - blue - 600 to - purple - 600 p - 2 rounded - lg">
                    <Building2 className="w - 8 h - 8 text - white" />
                  </div>
                  <span className="text - xl font - bold text - gray - 900">Zion Tech Group</span>
                </div>
                <button
                  on_click={on_close}
                  className="p - 2 hover:bg - gray - 100 rounded - lg transition - colors"
                  <X className="w - 6 h - 6" />
                </button>
              </div>
              {/* Navigation */}
              <nav className="space - y-4">
                {Object.entries (navigation).map (([title, links]) => (
                  <div key={title}>
                    <button
                      on_click={() => handleDropdownToggle (title)}
                      className="flex items - center justify - between w - full text - left text - lg font - semibold text - gray - 900 py - 2 hover: text - blue - 600 transition - colors"
              <div className="mt - 8 pt - 8 border - t border - gray - 200">
                <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Quick Links</h3>
                <div className="space - y-2">
                  {quick_links.map ((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text - gray - 600 hover:text - blue - 600 transition - colors py - 1"
                      on_click={on_close}
                    >
                      {link.name}
                    </Link>))}
                </div>
              </div>
              {/* Contact Info */}
              <div className="mt - 8 pt - 8 border - t border - gray - 200">
                <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Contact Us</h3>
                <div className="space - y-3">
                  <div className="flex items - center space - x-3 text - gray - 600">
                    <Phone className="w - 4 h - 4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items - center space - x-3 text - gray - 600">
                    <Mail className="w - 4 h - 4" />
                    <span > kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div className="mt - 4">
                  <Link
                    href="/contact"
                    className="inline - flex items - center space - x-2 bg - blue - 600 text - white px - 4 py - 2 rounded - lg hover:bg - blue - 700 transition - colors"
                    on_click={on_close}
                  >
                    <span > Get Started</span>
                    <ExternalLink className="w - 4 h - 4" />
                  </Link>
              </div>
            </div>
          </motion.div>
        </>)}
    </AnimatePresence>)
export default Sidebar
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
  X,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Building2,
  User,
  LogOut,
  Search
} from 'lucide-react'
const navigation = {
  'Services': [
    { name: 'AI Services';, href: '/ai-services' ;},
    { name: 'IT Services';, href: '/it-services' ;},
    { name: 'Micro SaaS';, href: '/micro-saas' ;},
    { name: 'Consulting';, href: '/consulting' ;}
  ],
  'Solutions': [
    { name: 'Enterprise';, href: '/enterprise' ;},
    { name: 'Startup';, href: '/startup' ;},
    { name: 'Industry';, href: '/industries' ;}
  ],
  'Company': [
    { name: 'About';, href: '/about' ;},
    { name: 'Team';, href: '/team' ;},
    { name: 'Careers';, href: '/careers' ;},
    { name: 'Contact';, href: '/contact' ;}
  ]
}
import React from 'react'
import { Home, Settings, User, LogOut } from 'lucide-react'
interface SidebarProps {
  isOpen: boolean
  onClose: () => void
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
const Sidebar: React.FC<SidebarProps> = ({ isOpen;, onClose }) => {
  const menuItems = [
    { href: '/dashboard';, label: 'Dashboard';, icon: Home ;},
    { href: '/profile';, label: 'Profile';, icon: User ;},
    { href: '/settings';, label: 'Settings';, icon: Settings ;},
  ]
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
}
export default Sidebar;
