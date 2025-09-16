<<<<<<< HEAD
import React from 'react';

const NextNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NextNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
import React, { useState, useEffect } from 'react',;',';';
    ';';';';
import Link from 'next/link',;';';
    ';';';';
import { useRouter } from 'next/router',;',';';
    ';';';';

import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Phone,
  Mail,;
  MapPin,;';
  Code,;';';
  Database,;';';';
  Network,;',';';
    ';';';
  Settings} from 'lucide-react';
const NextNavigation = (props: any) => {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [isScrolled, setIsScrolled] = useState<any>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {';
    const handleScroll = (props: any) => {';';
      setIsScrolled(window.scrollY > 20);';';';
    };',';';
    ';';';
    window.addEventListener('scroll', handleScroll);',';';
    ';';';
    return () => window.removeEventListener('scroll', handleScroll);';';
  }, []);';';';
  const navigationItems = [',';';
    ';';' { name: 'Home', href: '/' },';';' {',';';
    ';';';
      name: 'Services',',';';
    ';';';
      href: '/services',';';
      dropdown: [';';' {',';';
    ';';';
          name: 'AI Services',',';';
    ';';';
          href: '/ai-services',';';';
          icon: Brai n,',';';
    ';';';
          description: 'Cutting-edge AI solutions' },';';' {',';';
    ';';';
          name: 'IT Services',',';';
    ';';';
          href: '/it-services',';';';
          icon: Clou d,',';';
    ';';';
          description: 'Enterprise IT infrastructure' },';';' {',';';
    ';';';
          name: 'Micro SaaS',',';';
    ';';';
          href: '/micro-saas',';';';
          icon: Cod e,',';';
    ';';';
          description: 'Custom software solutions' },';';' {',';';
    ';';';
          name: 'Cybersecurity',',';';
    ';';';
          href: '/services#cybersecurity',';';';
          icon: Shiel d,',';';
    ';';';
          description: 'Advanced security solutions' },';';' {',';';
    ';';';
          name: 'Cloud & DevOps',',';';
    ';';';
          href: '/services#cloud',';';';
          icon: Databas e,',';';
    ';';';
          description: 'Scalable cloud infrastructure' },';';' {',';';
    ';';';
          name: 'Digital Transformation',',';';
    ';';';
          href: '/services#ai',';';';
          icon: Za p,',';';
    ';';';
          description: 'Business transformation' }';';
      ] ;';';';
},',';';
    ';';' { name: 'About', href: '/about' },',';';
    ';';' { name: 'Contact', href: '/contact' }
  ]';
  const contactInfo = [';' {';';';
      icon: Phon e,',';';
    ';';';
      text: '+1 302 464 0950',',';';
    ';';';
      href: 'tel:+13024640950' },';' {';';';
      icon: Mai l,',';';
    ';';';
      text: 'kleber@ziontechgroup.com',',';';
    ';';';
      href: 'mailto: klebe r@ziontechgroup.com' },';' {';';';
      icon: MapPi n,',';';
    ';';';
      text: '364 E Main St STE 1008, Middletown DE 19709',',';';
    ';';';
      href: '#' }
  ]
  const toggleDropdown = (props: any) => {
    setActiveDropdown(activeDropdown === name ? null : name)};
  const closeMobileMenu = (props: any) => {
    setIsOpen(false);
    setActiveDropdown(null);';
  };';';
  return (';';';
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${',';';
    ';';';
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent';
}`}>
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white"  />
            </div>
            <span className="text-xl font-bold text-white group-hover: tex t-cyan-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg: flex items-center space-x-8">
            { navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)
      )}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default NextNavigation;