import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Zap, Briefcase, Brain, Shield, Cpu, Cloud, Server, Leaf, Rocket, Smartphone, DollarSign, Building } from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  external?: boolean;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: Zap
    },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Cpu },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap },
        { name: 'Green IT', path: '/green-it', icon: Leaf },
        { name: 'Space Tech', path: '/space-tech', icon: Rocket },
        { name: 'Mobile Solutions', path: '/mobile', icon: Smartphone },
        { name: 'Financial Solutions', path: '/financial-solutions', icon: DollarSign },
        { name: 'Micro SaaS Services', path: '/micro-saas-services', icon: Building }
      ]
    },
    {
      name: 'About',
      path: '/about',
      icon: Briefcase
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: Zap
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.path}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {child.icon && <child.icon className="h-4 w-4" />}
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.path}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
