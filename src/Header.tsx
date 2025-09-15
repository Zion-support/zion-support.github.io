<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Shield,
  Cloud,
  Code,
  Database,
  Smartphone,
  Globe
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@ziontechgroup.com',
    address: 'San Francisco, CA'
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        {
          name: 'All Services',
          description: 'Complete suite of technology solutions',
          href: '/pages/ComprehensiveServices2025',
          icon: Globe
        },
        {
          name: 'AI Research Lab',
          description: 'Cutting-edge AI research and development',
          href: '/pages/AIResearchLab2025',
          icon: Brain
        },
        {
          name: 'Quantum Computing',
          description: 'Quantum solutions for complex problems',
          href: '/pages/QuantumComputingSolutions2025',
          icon: Zap
        },
        {
          name: 'Cybersecurity Suite',
          description: 'Enterprise-grade security solutions',
          href: '/pages/CybersecuritySuite2025',
          icon: Shield
        },
        {
          name: 'Innovation 2025',
          description: 'Revolutionary technology showcase',
          href: '/pages/InnovationLanding2025',
          icon: Code
        },
        {
          name: 'Future Tech Trends',
          description: 'Emerging technologies and trends',
          href: '/pages/FutureTechTrends2025',
          icon: Database
        },
        {
          name: 'Revolutionary Tech Showcase',
          description: 'Cutting-edge AI, Quantum Computing, and Neural Interfaces',
          href: '/pages/RevolutionaryTechShowcase2025',
          icon: Zap
        },
        {
          name: 'Advanced AI Intelligence',
          description: 'Autonomous reasoning and emotional intelligence',
          href: '/pages/AdvancedAIIntelligence2025',
          icon: Brain
        },
        {
          name: 'Quantum Computing Breakthrough',
          description: 'Exponential computing power and impossible solutions',
          href: '/pages/QuantumComputingBreakthrough2025',
          icon: Shield
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        {
          name: 'Enterprise Solutions',
          description: 'Large-scale business transformations',
          href: '/solutions/enterprise',
          icon: Globe
        },
        {
          name: 'Startup Solutions',
          description: 'Rapid development for startups',
          href: '/solutions/startup',
          icon: Zap
        }
      ]
    },
    {
      name: 'Autonomous AI 2025',
      href: '/pages/NewShowcase2025'
    },
    {
      name: 'Playbook 2025',
      href: '/pages/AIInnovationPlaybook2025'
    },
    {
      name: 'Case Studies',
      href: '/case-studies'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'About',
      href: '/about'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Zion Tech Group
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;