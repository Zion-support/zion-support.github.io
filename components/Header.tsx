import React from 'react';
import Link from 'next/link';
import EnhancedNavigation from './ui/EnhancedNavigation';
import { Star, Cloud, Shield, Zap, Users, BookOpen, Handshake, Phone } from 'lucide-react';

export default function Header() {
  const navigationItems = [
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'AI Solutions', href: '/solutions/ai', description: 'Advanced AI and machine learning', icon: <Zap className="w-4 h-4" /> },
        { name: 'Cloud Services', href: '/solutions/cloud', description: 'Scalable cloud infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/solutions/security', description: 'Comprehensive security solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/solutions/quantum', description: 'Next-gen quantum solutions', icon: <Star className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions', icon: <Zap className="w-4 h-4" /> },
        { name: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless cloud transition', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Security Audits', href: '/services/security-audits', description: 'Comprehensive security review', icon: <Shield className="w-4 h-4" /> },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'End-to-end transformation', icon: <Star className="w-4 h-4" /> }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {
      name: 'Resources',
      href: '#',
      children: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and updates', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships', icon: <Handshake className="w-4 h-4" /> },
        { name: 'Support', href: '/support', description: '24/7 technical support', icon: <Phone className="w-4 h-4" /> }
      ]
    }
  ];

  const logo = (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <Star className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Zion Tech Group
      </span>
    </div>
  );

  return (
    <EnhancedNavigation
      items={navigationItems}
      logo={logo}
      ctaText="Get Started"
      ctaHref="/contact"
    />
  );
}