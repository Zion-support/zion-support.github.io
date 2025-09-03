import React, { useState } from 'react';
import Link from 'next/link';
import { 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Code, 
  Database, 
  Lock, 
  Target, 
  BarChart3, 
  TrendingUp,
  MessageCircle,
  FileText,
  Award,
  Clock,
  Globe,
  Settings,
  Cpu,
  Layers,
  Network,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navigationSections = [
    {
      name: 'Services',
      icon: Settings,
      items: [
        { name: 'AI Services', href: '/services/ai', icon: Brain },
        { name: 'Cloud Services', href: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Infrastructure', href: '/services/infrastructure', icon: Database },
        { name: 'Digital Transformation', href: '/services/transformation', icon: Zap },
        { name: 'Consulting', href: '/services/consulting', icon: Users }
      ]
    },
    {
      name: 'Solutions',
      icon: Target,
      items: [
        { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
        { name: 'IoT Solutions', href: '/solutions#iot', icon: Globe },
        { name: 'Blockchain', href: '/solutions#blockchain', icon: Lock },
        { name: 'AR/VR', href: '/solutions#ar-vr', icon: Layers },
        { name: 'Healthcare IT', href: '/solutions#healthcare', icon: Building },
        { name: 'FinTech', href: '/solutions#finance', icon: BarChart3 }
      ]
    },
    {
      name: 'Company',
      icon: Building,
      items: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Award },
        { name: 'Careers', href: '/careers', icon: TrendingUp },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText }
      ]
    },
    {
      name: 'Resources',
      icon: FileText,
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'Support', href: '/support', icon: MessageCircle },
        { name: 'FAQ', href: '/help', icon: MessageCircle },
        { name: 'Pricing Guide', href: '/pricing', icon: BarChart3 }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Products', href: '/products', icon: Rocket },
    { name: 'Pricing', href: '/pricing', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const toggleSection = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                  onClick={onClose}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 overflow-y-auto p-6">
            {navigationSections.map((section) => (
              <div key={section.name} className="mb-6">
                <button
                  onClick={() => toggleSection(section.name)}
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold">{section.name}</span>
                  </div>
                  <div className={`transform transition-transform duration-200 ${
                    activeSection === section.name ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {activeSection === section.name && (
                  <div className="mt-2 ml-8 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                        onClick={onClose}
                      >
                        <item.icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
              Contact Info
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;