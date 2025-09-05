<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Database, Users, Award, BookOpen, Phone
} from 'lucide-react',

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

<<<<<<< HEAD
=======
  const services = [
    { name: 'All Solutions', href: '/comprehensive-2025-services-showcase', icon: Globe, description: 'Complete collection of innovative solutions' },
    { name: 'AI Business Intelligence', href: 'https://ziontechgroup.com/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: 'https://ziontechgroup.com/quantum-cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: 'https://ziontechgroup.com/edge-computing-orchestration', icon: Cpu, description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: 'https://ziontechgroup.com/space-technology', icon: Rocket, description: 'Space exploration and satellite tech' },
    { name: 'Pricing', href: '/pricing-2025', icon: Award, description: 'Transparent pricing for all solutions' }
  ],

  const company = [
    { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our mission and team' },
    { name: 'Our Work', href: '/portfolio', icon: Award, description: 'See our latest projects and achievements' },
    { name: 'Content Hub', href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights' },
    { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with our experts' }
  ],

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  },

  const closeAllDropdowns = () => {
    setActiveDropdown(null),
    setIsOpen(false)
  },

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
},

<<<<<<< HEAD
export default EnhancedNavigation;
=======
export default EnhancedNavigation,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
