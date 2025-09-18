"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, 
  Brain, Atom, Target, 
  Star, 
  Twitter, Linkedin, Youtube, Github, 
  ArrowUp, ArrowRight, ExternalLink, Heart, Zap
} from 'lucide-react';

const footerSections = [
  {
    title: 'Featured Revolutionary Services 2043',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    badge: 'Featured',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', featured: true, description: 'Next-generation AI consciousness' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', featured: true, description: 'Quantum-powered AI networks' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', featured: true, description: 'AI-powered business insights' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', featured: true, description: 'Quantum-resistant security' },
      { name: 'Autonomous Customer Success 2043', href: '/autonomous-customer-success-2043', featured: true, description: 'AI-powered customer success' },
      { name: 'Space Resource Intelligence 2043', href: '/space-resource-intelligence-2043', description: 'AI-powered space resource management' },
      { name: 'Autonomous DevOps Platform 2043', href: '/autonomous-devops-2043', description: 'Fully autonomous DevOps' },
      { name: 'AI Healthcare Platform 2043', href: '/ai-healthcare-platform-2043', description: 'AI-powered healthcare solutions' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043', description: 'Quantum-powered trading' },
      { name: 'Autonomous Supply Chain 2043', href: '/autonomous-supply-chain-2043', description: 'AI-powered supply chain' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    badge: 'Hot',
    links: [
      { name: 'AI Consciousness Evolution 2043', href: '/ai-consciousness-evolution-2043', description: 'Next-generation AI consciousness' },
      { name: 'Quantum AI Neural Network 2043', href: '/quantum-ai-neural-2043', description: 'Quantum-powered AI networks' },
      { name: 'Autonomous AI Research 2043', href: '/autonomous-ai-research-2043', description: 'Fully autonomous AI research' },
      { name: 'AI Content Personalization 2043', href: '/ai-content-personalization-2043', description: 'Intelligent content personalization' },
      { name: 'AI Ethics & Governance 2043', href: '/ai-ethics-governance-2043', description: 'AI ethics and governance' },
      { name: 'AI Autonomous Ecosystem 2043', href: '/ai-autonomous-ecosystem-2043', description: 'Complete AI ecosystem' },
      { name: 'AI Predictive Maintenance 2043', href: '/ai-predictive-maintenance-2043', description: 'AI-powered maintenance' },
      { name: 'AI Customer Success 2043', href: '/ai-customer-success-2043', description: 'AI-powered customer success' },
      { name: 'AI Business Intelligence 2043', href: '/ai-business-intelligence-2043', description: 'AI-powered business insights' },
      { name: 'AI Marketing Automation 2043', href: '/ai-marketing-automation-2043', description: 'Intelligent marketing automation' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Trending',
    links: [
      { name: 'Quantum Cloud Infrastructure 2043', href: '/quantum-cloud-infrastructure-2043', description: 'Quantum-powered cloud infrastructure' },
      { name: 'Quantum Database Platform 2043', href: '/quantum-database-2043', description: 'Quantum-powered database' },
      { name: 'Quantum Edge Computing 2043', href: '/quantum-edge-computing-2043', description: 'Quantum-powered edge computing' },
      { name: 'Quantum API Gateway 2043', href: '/quantum-api-gateway-2043', description: 'Quantum-powered API gateway' },
      { name: 'Quantum Cybersecurity 2043', href: '/quantum-cybersecurity-2043', description: 'Quantum-resistant security' },
      { name: 'Quantum Internet Security 2043', href: '/quantum-internet-security-2043', description: 'Quantum internet security' },
      { name: 'Quantum Financial Trading 2043', href: '/quantum-financial-trading-2043', description: 'Quantum-powered trading' },
      { name: 'Quantum Neural Network 2043', href: '/quantum-ai-neural-2043', description: 'Quantum-powered AI networks' }
    ]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    badge: 'New',
    links: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Careers', href: '/careers', description: 'Join our revolutionary team' },
      { name: 'News & Updates', href: '/news', description: 'Latest insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and results' },
      { name: 'Blog', href: '/blog', description: 'Industry insights and trends' },
      { name: 'Resources', href: '/resources', description: 'Helpful tools and guides' },
      { name: 'Support', href: '/support', description: '24/7 technical support' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' }
    ]
  }
];

  const additionalLinks = useMemo(() => [
    {
      title: 'Support & Training',
      items: [
        { label: 'Help Center', href: '/help' },
        { label: 'Training Programs', href: '/training' },
        { label: 'API Documentation', href: '/api-docs' },
        { label: 'Developer Resources', href: '/developer' }
      ]
    },
    {
      title: 'Legal & Compliance',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Security', href: '/security' },
        { label: 'Compliance', href: '/compliance' }
      ]
    },
    {
      title: 'Partnerships',
      items: [
        { label: 'Partner Program', href: '/partners' },
        { label: 'Reseller Program', href: '/resellers' },
        { label: 'Technology Partners', href: '/tech-partners' },
        { label: 'Become a Partner', href: '/become-partner' }
      ]
    }
  ], []);

  const contactInfo = useMemo(() => ({
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    founded: '2024'
  },
  quickLinks: [
    { label: 'About Us', href: '/about', icon: Users },
    { label: 'Services', href: '/services', icon: Briefcase },
    { label: 'Solutions', href: '/solutions', icon: Target },
    { label: 'Case Studies', href: '/case-studies', icon: Building },
    { label: 'Blog', href: '/blog', icon: FileText },
    { label: 'Careers', href: '/careers', icon: Users }
  ],
  services: [
    { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain },
    { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom },
    { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket },
    { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: ShieldIcon },
    { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud },
    { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building }
  ],
  resources: [
    { label: 'Documentation', href: '/docs', icon: Code },
    { label: 'API Reference', href: '/api-documentation', icon: Code },
    { label: 'Webinars', href: '/webinars', icon: Video },
    { label: 'White Papers', href: '/white-papers', icon: FileText },
    { label: 'Support', href: '/support', icon: Zap },
    { label: 'Status', href: '/status', icon: Globe }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' }
  ]
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" />, color: 'from-blue-400 to-blue-600' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" />, color: 'from-blue-600 to-blue-800' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" />, color: 'from-red-500 to-red-700' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" />, color: 'from-gray-600 to-gray-800' }
];

const companyStats = [
  { number: '1500+', label: 'Revolutionary Services', icon: Star, color: 'from-yellow-500 to-orange-500' },
  { number: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },
  { number: '24/7', label: 'AI Support Available', icon: Brain, color: 'from-cyan-500 to-blue-500' },
  { number: '150+', label: 'Countries Served', icon: Globe, color: 'from-purple-500 to-pink-500' }
];

const UltraFuturisticFooter2040: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticFooter2040</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticFooter2040;
