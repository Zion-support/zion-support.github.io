import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Zap, Mail, Phone, MapPin, Globe, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, ArrowRight,
  Shield, Users, Code, Building, BookOpen, HelpCircle,
  Star, Brain, Cloud, Award, TrendingUp, Lightbulb, 
  Rocket, Target, CheckCircle, Heart, MessageCircle,
  ShoppingCart, Cpu, Database, Network, Lock, BarChart3,
  Server, Smartphone, Cpu as CpuIcon, Wifi, ShieldCheck,
  Globe2, Bot, Workflow, Eye, Sparkles, ExternalLink,
  Handshake, FileText, Video, GraduationCap, Atom,
  PenTool, Leaf, ChevronRight, ChevronDown, DollarSign, Package
} from 'lucide-react';

export function EnhancedFooter() {

  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', description: 'Our mission and values' },
        { name: 'Our Team', href: '/team', description: 'Meet our experts' },
        { name: 'Leadership', href: '/leadership', description: 'Executive team' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News', href: '/news', description: 'Latest updates' },

      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Machine learning & automation' },
        { name: 'Cloud Services', href: '/services/cloud-devops', description: 'Infrastructure & DevOps' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', description: 'Security & compliance' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Quantum Computing', href: '/services/ai-quantum-financial-trading-platform', description: 'Next-gen computing power' },
        { name: 'Smart City Solutions', href: '/services/ai-smart-city-infrastructure-management', description: 'Urban infrastructure management' },
        { name: 'Autonomous Systems', href: '/services/ai-autonomous-vehicle-management-platform', description: 'AI-powered automation' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Lightweight applications' },
        { name: 'AI Email Marketing', href: '/services/ai-autonomous-email-marketing-platform', description: 'AI-powered email automation' },
        { name: 'AI Affiliate Tracking', href: '/services/ai-affiliate-marketing-tracking-platform', description: 'Advanced affiliate marketing' },
        { name: 'AI E-commerce Returns', href: '/services/ai-ecommerce-return-management-platform', description: 'Streamlined return management' },
        { name: 'AI Learning Management', href: '/services/ai-learning-management-system', description: 'AI-powered educational platform' },
        { name: 'Consulting', href: '/it-consulting', description: 'Technology advisory' },

      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'Medical technology' },
        { name: 'Financial', href: '/financial-solutions', description: 'Fintech solutions' },
        { name: 'Manufacturing', href: '/manufacturing-solutions', description: 'Industry 4.0' },
        { name: 'Research & Development', href: '/research-development', description: 'Innovation labs' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' },

      ]
    },
    {
      title: 'Events & Media',
      links: [
        { name: 'Blog', href: '/blog', description: 'Insights & updates' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Documentation', href: '/documentation', description: 'Technical guides' },
        { name: 'API Reference', href: '/api', description: 'Developer resources' },

      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help', description: 'Find answers' },
        { name: 'FAQ', href: '/faq', description: 'Common questions' },
        { name: 'Contact Support', href: '/support', description: 'Get help' },
        { name: 'Training', href: '/training', description: 'Skill development' },
        { name: 'Status Page', href: '/status', description: 'Service status' },
        { name: 'Community', href: '/community', description: 'User forums' },
      ]
    }
  ];

  // Featured Services for quick access
  const featuredServices = [
    { name: 'AI Quantum Financial Analytics', href: '/services/ai-quantum-financial-analytics-platform', icon: BarChart3, featured: true },
    { name: 'AI Autonomous Supply Chain', href: '/services/ai-autonomous-supply-chain-management-platform', icon: Package, featured: true },
    { name: 'AI Cybersecurity Operations', href: '/services/ai-cybersecurity-operations-center', icon: Shield, featured: true },
    { name: 'AI Content Creation Studio Pro', href: '/services/AI-Content-Creation-Studio-Pro', icon: PenTool, featured: true },
    { name: 'Quantum AI Trading Platform', href: '/services/Quantum-AI-Trading-Platform', icon: Atom, featured: true },
    { name: '2026 Services Showcase', href: '/innovative-services-showcase-2026', icon: Sparkles, featured: true }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'text-blue-600 hover:text-blue-500' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'text-blue-700 hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'text-pink-500 hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'text-red-500 hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'text-gray-600 hover:text-gray-500' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a message'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Call us directly'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office'
    }
  ];

export const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/ai" className="hover:text-white">AI Solutions</a></li>
              <li><a href="/services/cybersecurity" className="hover:text-white">Cybersecurity</a></li>
              <li><a href="/services/cloud" className="hover:text-white">Cloud Services</a></li>
              <li><a href="/services/transformation" className="hover:text-white">Digital Transformation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/news" className="hover:text-white">News</a></li>
              <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
