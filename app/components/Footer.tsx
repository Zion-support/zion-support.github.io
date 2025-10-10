<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone'
      });
    }
  }, []);

  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'footer_email'
      });
    }
  }, []);

  const footerSections = [
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { name: 'AI Automation', href: '/ai-automation', icon: Settings },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Globe },
        { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video }
=======
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Twitter, Linkedin, Github, Settings } from 'lucide-react';
=======
'use client';
import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone'
      });
    }
  }, []);

  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'footer_email'
      });
    }
  }, []);

  const footerSections = [
    {
      title: 'AI Services',
<<<<<<< HEAD
      icon: Brain,
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro' },
        { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant' },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace' },
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' }
>>>>>>> origin/main
=======
      links: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { name: 'AI Automation', href: '/ai-automation', icon: Settings },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Globe },
        { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video }
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
      ]
    },
    {
      title: 'IT Services',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
      links: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Database Management', href: '/database-management', icon: Database },
        { name: 'System Integration', href: '/system-integration', icon: Settings },
        { name: 'Network Security', href: '/network-security', icon: Lock }
<<<<<<< HEAD
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare AI', href: '/ai-healthcare', icon: Stethoscope },
        { name: 'Fintech AI', href: '/ai-fintech', icon: CreditCard },
        { name: 'Manufacturing AI', href: '/ai-manufacturing', icon: Factory },
        { name: 'Retail AI', href: '/ai-retail', icon: ShoppingCart },
        { name: 'Education AI', href: '/ai-education', icon: GraduationCap },
        { name: 'Transportation AI', href: '/ai-transportation', icon: Car }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen }
=======
      icon: Cloud,
      services: [
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'Custom Development', href: '/custom-development' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Design', href: '/network-design' },
        { name: 'AI Infrastructure Monitoring', href: '/ai-infrastructure-monitoring' },
        { name: 'Blockchain Integration', href: '/blockchain-integration-services' },
        { name: 'AI API Management', href: '/ai-api-management' },
        { name: 'Smart Contract Security', href: '/smart-contract-security-audit' },
        { name: 'Edge Computing Solutions', href: '/edge-computing' },
        { name: '5G Network Implementation', href: '/5g-implementation' },
        { name: 'IoT Platform Development', href: '/iot-platform' },
        { name: 'Quantum-Safe Security', href: '/quantum-security' }
=======
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare AI', href: '/ai-healthcare', icon: Stethoscope },
        { name: 'Fintech AI', href: '/ai-fintech', icon: CreditCard },
        { name: 'Manufacturing AI', href: '/ai-manufacturing', icon: Factory },
        { name: 'Retail AI', href: '/ai-retail', icon: ShoppingCart },
        { name: 'Education AI', href: '/ai-education', icon: GraduationCap },
        { name: 'Transportation AI', href: '/ai-transportation', icon: Car }
      ]
    },
    {
<<<<<<< HEAD
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/ai-blockchain-solutions' },
        { name: 'IoT & Edge Computing', href: '/edge-computing' },
        { name: 'AR/VR Solutions', href: '/ai-holographic-workspace' },
        { name: 'Smart Cities', href: '/smart-cities' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Innovation Labs', href: '/innovation-labs' },
        { name: 'Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' },
        { name: 'Space Technology', href: '/ai-space-technology-pro' },
        { name: 'Climate Solutions', href: '/ai-climate-solutions-pro' },
        { name: 'Drug Discovery', href: '/ai-drug-discovery-pro' },
        { name: 'Neural Interfaces', href: '/ai-neural-interface' },
        { name: 'Quantum Security', href: '/quantum-security' },
        { name: 'Immersive Learning', href: '/ai-immersive-learning' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Settings,
      services: [
        { name: 'AI Operations', href: '/ai-ops' },
        { name: 'Healthcare IT', href: '/healthcare-it' },
        { name: 'Financial IT', href: '/financial-it' },
        { name: 'Edge Computing', href: '/edge-computing' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'IoT Platform', href: '/iot-platform' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Custom Development', href: '/custom-development' }
>>>>>>> origin/main
=======
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen }
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
      ]
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
<<<<<<< HEAD
  ];

  return (
    <footer className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white cyber-text neon-text">
                  Zion Tech Group
                </h3>
                <p className="text-cyan-400 font-medium">
                  AI & IT Solutions
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology 
              and achieve unprecedented growth.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 neon-text">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 neon-text">95%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 neon-text">$50M+</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400 neon-text">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold text-white mb-4 neon-text">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-cyan-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Stay Updated with AI Innovations
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights, case studies, and AI breakthroughs delivered to your inbox.
=======
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Demo', href: '/demo' },
    { name: 'Consultation', href: '/consultation' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Health', href: '/health' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden cyber-grid">{/* Futuristic Background Effects */}</footer>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" >{/* Quantum Particles */}</div>
      </div><div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }}><div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }}><div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }}><div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }}>{/* Main Footer Content */}</div>
      </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">{/* Company Info */}</div>
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
                <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group<p className="text-gray-300 mb-6 leading-relaxed">Leading provider of AI-powered enterprise solutions, quantum computing,
              autonomous systems, and digital transformation services. Transforming businesses</p>
              with cutting-edge technology and innovative solutions.</p>
=======
  ];

  return (
    <footer className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white cyber-text neon-text">
                  Zion Tech Group
                </h3>
                <p className="text-cyan-400 font-medium">
                  AI & IT Solutions
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems,
              and digital transformation services. Transform your business with cutting-edge technology
              and achieve unprecedented growth.
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 neon-text">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 neon-text">95%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 neon-text">$50M+</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400 neon-text">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>

            {/* Contact Info */}
<<<<<<< HEAD
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 (302) 464-0950</a>
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300 group">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
=======
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
                <div>
                  <div className="font-medium">364 E Main St STE 1008<div>Middletown, DE 19709</div>
                </div>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Clock className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div>
                  <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM EST<div className="text-sm text-cyan-400">24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6 neon-glow-cyan">Our Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{serviceCategories.map((category, index) => (</div>
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-medium">{category.title}<ul className="space-y-2">{category.services.map((service, serviceIndex) => (</ul>
                      <li key={serviceIndex}>
                        <Link
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        >{service.name}</Link>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="space-y-8">{/* Company */}</div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company<ul className="space-y-2">{companyLinks.map((link, index) => (</ul>
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >{link.name}</Link>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-4">Support<ul className="space-y-2">{supportLinks.map((link, index) => (</ul>
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >{link.name}</Link>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4">Legal<ul className="space-y-2">{legalLinks.map((link, index) => (</ul>
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >{link.name}</Link>
                      </Link>
                    </li>
                  ))}
                </ul>
=======
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold text-white mb-4 neon-text">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
<<<<<<< HEAD
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-4 neon-text cyber-text">Stay Updated with Our Latest Innovations<p className="text-gray-300 mb-6">Get the latest news about AI breakthroughs, quantum computing advances,</p>
              technology updates, and industry insights delivered to your inbox.</p>
>>>>>>> origin/main
=======
        <div className="mt-16 pt-8 border-t border-cyan-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Stay Updated with AI Innovations
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights, case studies, and AI breakthroughs delivered to your inbox.
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
<<<<<<< HEAD
<<<<<<< HEAD
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button px-6 py-3">
                Subscribe
=======
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button neon-glow">Subscribe</button>
                <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> origin/main
=======
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button px-6 py-3">
                Subscribe
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
              </button>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
      {/* Bottom Footer */}
      <div className="border-t border-cyan-400/20 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</a>
            </div>
<<<<<<< HEAD

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>GDPR Compliant</span>
=======
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {currentYear} Zion Tech Group. All rights reserved.</div>
            </div>
=======
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-2">
                <BarChart className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
>>>>>>> origin/main
=======
              <div className="flex items-center space-x-1">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>GDPR Compliant</span>
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default Footer;
=======
});

Footer.displayName = 'Footer';

export default Footer;
>>>>>>> origin/main
=======
};

export default Footer;
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
