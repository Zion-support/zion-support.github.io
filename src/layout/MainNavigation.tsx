
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft
} from 'lucide-react';

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge' },
        { name: 'Content Creation', href: '/micro-saas/content-creation' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation' },
        { name: 'Consulting', href: '/it-services/consulting' },
        { name: 'Onsite Support', href: '/it-services/onsite-support' },
        { name: 'Green IT', href: '/it-services/green-it' },
        { name: '5G Solutions', href: '/it-services/5g-solutions' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navigationItems.map((item) => (
        <div key={item.name} className="relative">
          <button
            onClick={() => toggleDropdown(item.name)}
            className={`nav-link flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeDropdown === item.name 
                ? 'text-zion-cyan bg-zion-cyan/10' 
                : 'hover:text-zion-cyan hover:bg-zion-cyan/5'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
              activeDropdown === item.name ? 'rotate-180' : ''
            }`} />
          </button>

          <AnimatePresence>
            {activeDropdown === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl z-50"
              >
                <div className="p-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-zion-cyan/10 text-zion-slate-light hover:text-zion-cyan transition-all duration-200"
                    >
                      {subItem.icon && <subItem.icon className="w-4 h-4" />}
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
