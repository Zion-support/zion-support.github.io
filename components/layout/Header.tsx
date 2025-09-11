<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Globe, Shield } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Product', href: '#', hasDropdown: true },
    { name: 'Solutions', href: '/services' },
    { name: 'Micro SaaS', href: '/micro-saas-services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Compare', href: '/pricing-comparison' },
  ];
=======

    { name: 'Contact', href: '/contact', icon: Phone }
  ];

=======
          <div className="flex-shrink-0">;
            <Link href="/" className="text-2xl font-bold text-blue-600">;
              Zion Tech Group;
            </Link>;
          </div>;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Desktop Navigation */}
          <div className="hidden md:block">;
            <div className="ml-10 flex items-baseline space-x-4">;
              {navigation && navigation.map((item) => (;
                <Link
                  key={item && item.name}
                  href={item && item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">;
                  {item && item.name}
                </Link>;
              ))}
            </div>;
          </div>;
>>>>>>> main



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2";
            >;
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>;
          </div>;
        </div>;



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="flex - shrink - 0">;
            <Link href="/" className="text - 2xl font - bold text - blue - 600">;
              Zion Tech Group;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 mr-6">
              <a href="tel:+13024640950" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-neon-blue transition-colors duration-200">
                <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                <span>+1 302 464 0950</span>
              </a>
            </div>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Product') {
                          setIsProductDropdownOpen(!isProductDropdownOpen);
                          setIsSolutionsDropdownOpen(false);
                        } else if (item.name === 'Solutions') {
                          setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
                          setIsProductDropdownOpen(false);
                        }
                      }}
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        (item.name === 'Product' && isProductDropdownOpen) || 
                        (item.name === 'Solutions' && isSolutionsDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {item.name === 'Product' && isProductDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {productDropdown.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 group hover:scale-105"
                              onClick={() => setIsProductDropdownOpen(false)}
                            >
                              <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                {product.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                                  {product.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {product.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {isSaasToolsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {saasToolsDropdown.map((tool) => (
                            <Link
                              key={tool.name}
                              href={tool.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsSaasToolsDropdownOpen(false)}
                            >
                              <div className="font-medium text-white mb-1">{tool.name}</div>
                              <div className="text-sm text-gray-400">{tool.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.name === 'Solutions' && isSolutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4">
                        <div className="grid gap-3">
                          {solutionsDropdown.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                              onClick={() => setIsSolutionsDropdownOpen(false)}
                            >
                              <div className="font-medium text-white mb-1">{solution.name}</div>
                              <div className="text-sm text-gray-400">{solution.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold rounded-lg hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-neon-blue/25"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
            >
              Contact
            </Link>
            <Link
              href="/micro-saas"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
=======
          <div className="hidden md:block">;
            <div className="ml - 10 flex items - baseline space - x-4">;
              {navigation.map ((item) => (
                <Link;
                  key={item.name}
                  href={item.href}
                  className="text - gray - 700 hover:text - blue - 600 px - 3 py - 2 rounded - md text - sm font - medium transition - colors";
                >;
                  {item.name}
                </Link>))}
            </div>;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button              on_click={() => setIsMenuOpen (!isMenuOpen)}
              className="text - gray - 700 hover:text - blue - 600 p - 2";
            >;
              {isMenuOpen ? <X className="h - 6 w - 6" /> : <Menu className="h - 6 w - 6" />}
            </button>;
          </div>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isMenuOpen && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden";
            >;
              <div className="px - 2 pt - 2 pb - 3 space - y-1 sm:px - 3 bg - white border - t">;
                {navigation.map ((item) => (
                  <Link;
                    key={item.name}
                    href={item.href}
                    className="text - gray - 700 hover:text - blue - 600 block px - 3 py - 2 rounded - md text - base font - medium";
                    on_click={() => setIsMenuOpen (false)}
                  >;
                    {item.name}
                  </Link>))}
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </nav>;
    </header>);
}
;
export default Header;
import React, { useState, useEffect } from 'react'; import Link from 'next / link'; import { use_router } from 'next / router'; import { motion, AnimatePresence } from 'framer-motion'; import { Menu, X, Home, Users, Briefcase, Phone, Mail, ChevronDown, Brain, Shield, Cloud, Database, Network, Zap, Target, DollarSign, BookOpen, Calendar, FileText, Award, Globe, Search, ArrowRight } from 'lucide-react'; import { Button } from '../ui / Button'; import { Badge } from '../ui / Badge'; const Header: React.FC = () => { const [is_scrolled, setIsScrolled] = useState (false); useEffect (() => { const handle_scroll = () =>: any { setIsScrolled (window.scroll_y > 0)} window.addEventListener ('scroll', handle_scroll); return () => window.removeEventListener ('scroll', handle_scroll)}, []); const navigation_items = [ { name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Solutions', href: '/solutions' }, { name: 'About', href: '/about' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: '/contact' }, ]; return ( <header className="sticky top - 0 z - 50 bg - slate - 900 / 95 backdrop - blur border - b border - slate - 800"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 h - 14 flex items - center justify - between"> <Link href="/" className="text - white font - bold">Zion Tech Group</Link> <nav className="hidden md:flex items - center gap - 6 text - sm"> {navigation_items.map ((item) => ( <Link key={item.name} href={item.href} className="text - gray - 300 hover:text - white"> {item.name} </Link> ))} </nav> </div> </header> )} export default Header;
export default Header;
;
          {/* Desktop Navigation */}
          <nav className=&quot;hidden md:flex items-center space-x-8&quot;>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=&quot;text-white/80 hover:text-white transition-colors duration-200&quot;
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className=&quot;hidden md:block&quot;>
            <Button href=&quot;/contact&quot; variant=&quot;primary&quot; size=&quot;sm&quot;>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className=&quot;md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200&quot;>
            <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
              <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16&quot; />
>>>>>>> main
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
},

export default Header

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import React from 'react',
import Link from 'next/link';
import Button from '../ui/Button';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

import { Menu, X } from 'lucide-react';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [
    { name: 'Home', href: '/' }
    { name: 'Services', href: '/services' }
    { name: 'About', href: '/about' }
{ name: 'Contact', href: '/contact' }
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
import {Menu
  X
  Home
  Users
  Briefcase
  Phone
  Mail
  ChevronDown
  Brain
  Shield
  Cloud
  Database
  Network
  Zap
  Target
  DollarSign
  BookOpen
  Calendar
  FileText
  Award
  Globe
  Search
  ArrowRight;
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
const Header: React.FC = () => {const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 20);
}
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

}, []);
  const navigation = [;
    { name: 'Home', href: '/' }
    { name: 'Services', href: '/services' }
    { name: 'Solutions', href: '/solutions' }
    { name: 'About', href: '/about' }
    { name: 'Resources', href: '/blog' }
    { name: 'Careers', href: '/careers' }
    { name: 'Contact', href: '/contact' }
    { name: 'Home', href: '/', icon: Home }
    {name: 'Services'
      href: '/services'
      icon: Briefcase
      dropdown: [;
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' }
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Information Technology services' }
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Micro Software as a Service' }
        { name: 'Cybersecurity', href: '/services/ai-autonomous-cybersecurity-platform', icon: Shield, description: 'AI-powered security solutions' }
        { name: 'Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'AI-driven customer experience' }
        { name: 'Healthcare AI', href: '/services/ai-healthcare-diagnostics', icon: Brain, description: 'Medical AI diagnostics' }
      ];
}
    { name: 'About', href: '/about', icon: Users }
    {name: 'Resources'
      href: '#'
      icon: BookOpen
      dropdown: [;
        { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and trends' }
        { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Success stories' }
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' }
        { name: 'Webinars', href: '/webinars', icon: Calendar, description: 'Expert-led sessions' }
        { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign, description: 'Comprehensive pricing info' }
      ];
}
    { name: 'Team', href: '/team', icon: Award }
    { name: 'Contact', href: '/contact', icon: Phone }

  ];
  const serviceCategories = [;
    {name: 'Micro SaaS'
      href: '/services/micro-saas'
      description: 'Innovative focused software solutions'
      popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking'];
}
    {name: 'IT Services'
      href: '/services/it-services'
      description: 'Enterprise infrastructure & security'
      popular: ['Cloud Migration', 'Edge Computing', 'Zero Trust Security', '5G Networks'];
}
    {name: 'AI Services'
      href: '/services/ai-services'
      description: 'Cutting-edge AI & machine learning'
      popular: ['Quantum ML', 'Autonomous Systems', 'AI Cybersecurity', 'Drug Discovery'];
}
  ];
  const serviceCategories = [;
    { name: 'AI Solutions', href: '/services/ai-solutions' }
    { name: 'Cloud & DevOps', href: '/services/cloud' }
    { name: 'Cybersecurity', href: '/services/cybersecurity' }
    { name: 'Data & Analytics', href: '/services/data' }
    { name: 'Micro SaaS', href: '/services/micro-saas' }
    { name: 'Digital Transformation', href: '/services/transformation' }
  ];
  const solutionCategories = [;
    { name: 'Enterprise', href: '/solutions/enterprise' }
    { name: 'SMB', href: '/solutions/smb' }
    { name: 'Startup', href: '/solutions/startup' }
  ];
  const resourceCategories = [;

    { name: 'Documentation', href: '/docs' }
    { name: 'Blog', href: '/blog' }
    { name: 'Partners', href: '/partners' }
    { name: 'Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
  ];
  const isActive = (path: string) => location.pathname === path;
  const resourceCategories = [;
    { name: 'Blog', href: '/blog' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'Webinars', href: '/webinars' }
    { name: 'Documentation', href: '/documentation' }
    { name: 'API Reference', href: '/api' }
    { name: 'Help Center', href: '/help' }
    { name: 'FAQ', href: '/faq' }
  ];
  return (;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ;
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' ;
        : 'bg-transparent';
}`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex items-center justify-between h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
<<<<<<< HEAD
=======
export default Header;
import React,{ useState,useEffect } from 'react'; import Link from 'next/link'; import { useRouter } from 'next/router'; import { motion,AnimatePresence } from 'framer-motion'; import { Menu,X,Home,Users,Briefcase,Phone,Mail,ChevronDown,Brain,Shield,Cloud,Database,Network,Zap,Target,DollarSign,BookOpen,Calendar,FileText,Award,Globe,Search,ArrowRight } from 'lucide-react'; import { Button } from '../ui/Button'; import { Badge } from '../ui/Badge'; const Header: React.FC = () => { const [isScrolled,setIsScrolled] = useState(false); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 0)}; window.addEventListener('scroll',handleScroll); return () => window.removeEventListener('scroll',handleScroll)},[]); const navigationItems = [ { name: 'Home',href: '/' },{ name: 'Services',href: '/services' },{ name: 'Solutions',href: '/solutions' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Contact',href: '/contact' },]; return ( <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between"> <Link href="/" className="text-white font-bold">Zion Tech Group</Link> <nav className="hidden md:flex items-center gap-6 text-sm"> {navigationItems.map((item) => ( <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white"> {item.name} </Link> ))} </nav> </div> </header> )} export default Header;
export default Header;

}
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> main
