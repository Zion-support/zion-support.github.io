<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Twitter, Linkedin, Github, Settings } from 'lucide-react';
=======
'use client';
import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)

<<<<<<< HEAD
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
      icon: Brain;
      services: [,
=======
<<<<<<< HEAD
      icon: Brain,
      services: [
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
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
      icon: Cloud;
      services: [,
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
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
<<<<<<< HEAD
      title: 'Micro SAAS',
      icon: Code;
      services: [,
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer', href: '/ai-content-writer' },
        { name: 'AI Video Generator', href: '/ai-video-generator' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { name: 'AI Voice Assistant Pro', href: '/ai-voice-assistant' },
        { name: 'AI Document Scanner Pro', href: '/ai-document-scanner' },
        { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber' },
        { name: 'AI Website Builder Pro', href: '/ai-website-builder' }
=======
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare AI', href: '/ai-healthcare', icon: Stethoscope },
        { name: 'Fintech AI', href: '/ai-fintech', icon: CreditCard },
        { name: 'Manufacturing AI', href: '/ai-manufacturing', icon: Factory },
        { name: 'Retail AI', href: '/ai-retail', icon: ShoppingCart },
        { name: 'Education AI', href: '/ai-education', icon: GraduationCap },
        { name: 'Transportation AI', href: '/ai-transportation', icon: Car }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
      ]
    },
    {
<<<<<<< HEAD
      title: 'Emerging Technologies',
      icon: Zap;
      services: [,
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
      icon: Settings;
      services: [,
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

<<<<<<< HEAD
  return(<footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden cyber-grid">)
      {/* Futuristic Background Effects */})
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
<<<<<<< HEAD
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
=======
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length: 50px_50px]" />,
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      {/* Quantum Particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }} />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">,
          {/* Company Info */}
          <div className="lg: col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
=======
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden cyber-grid">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" /></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Quantum Particles */}</div>
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }} /></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }} /></div>
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }} /></div>
      <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }} />
      
      {/* Main Footer Content */}</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}</div>
          <div className="lg:col-span-2"></div>
            <div className="flex items-center space-x-2 mb-6 group"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <Zap className="w-5 h-5 text-white" />
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
=======
              </div>,
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group</span>,
            </div>,
,
            <p className="text-gray-300 mb-6 leading-relaxed">,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              Leading provider of AI-powered enterprise solutions, quantum computing,
              autonomous systems, and digital transformation services. Transforming businesses;
              with cutting-edge technology and innovative solutions.
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
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
<<<<<<< HEAD
=======
            <div className="space-y-3 mb-6"></div>
              <div className="flex items-center space-x-3 text-gray-300 group"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group"></div>
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
=======
                <Phone className="w-4 h-4 text-cyan-400 group-hover: text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">
                  +1 (302) 464-0950;
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">
                  kleber@ziontechgroup.com;
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </div>
<<<<<<< HEAD
              <div className="flex items-start space-x-3 text-gray-300 group">
<<<<<<< HEAD
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />,
                <div>,
                  <div className="font-medium">364 E Main St STE 1008</div>,
                  <div>Middletown, DE 19709</div>
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
                </div>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Clock className="w-4 h-4 text-cyan-400 group-hover: text-cyan-300 transition-colors" />
                <div>
=======
              <div className="flex items-start space-x-3 text-gray-300 group"></div>
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <div></div>
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group"></div>
                <Clock className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div className="text-sm text-cyan-400">24/7 Emergency Support</div>,
                </div>,
              </div>,
            </div>,
,
            {/* Social Links */}
<<<<<<< HEAD
            <div className="flex space-x-4">
              <a href="https: //linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
=======
            <div className="flex space-x-4"></div>
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />,
              </a>,
            </div>,
          </div>,
,
          {/* Services */}
<<<<<<< HEAD
          <div className="lg: col-span-3">,
            <h3 className="text-white font-semibold text-lg mb-6 neon-glow-cyan">Our Services</h3>,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
=======
          <div className="lg:col-span-3"></div>
            <h3 className="text-white font-semibold text-lg mb-6 neon-glow-cyan">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (</div>
                <div key={index}></div>
                  <div className="flex items-center space-x-2 mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <category.icon className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link;
                          to={service.href}
                          className="text-gray-300 hover: text-cyan-400 transition-colors text-sm",
                        >,
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
<<<<<<< HEAD
          <div className="lg: col-span-2">,
            <div className="space-y-8">,
              {/* Company */}
              <div>
=======
          <div className="lg:col-span-2"></div>
            <div className="space-y-8">
              {/* Company */}</div>
              <div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link;
                        to={link.href}
                        className="text-gray-300 hover: text-cyan-400 transition-colors text-sm",
                      >,
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div></div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link;
                        to={link.href}
                        className="text-gray-300 hover: text-cyan-400 transition-colors text-sm",
                      >,
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div></div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link;
                        to={link.href}
                        className="text-gray-300 hover: text-cyan-400 transition-colors text-sm",
                      >,
                        {link.name}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className="mt-12 pt-8 border-t border-gray-700"></div>
          <div className="max-w-2xl mx-auto text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <h3 className="text-white font-semibold text-lg mb-4 neon-text cyber-text">Stay Updated with Our Latest Innovations</h3>
=======
            <h3 className="text-white font-semibold text-lg mb-4 neon-text cyber-text">
              Stay Updated with Our Latest Innovations;
            </h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, quantum computing advances,
              technology updates, and industry insights delivered to your inbox.
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input;
=======
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"></div>
              <input
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
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
<<<<<<< HEAD
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button neon-glow">
                Subscribe
=======
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button neon-glow">
                Subscribe;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
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
=======
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'AI-powered data visualization' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robots' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const support = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Support Center', url: '/support' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">IT Services</h4>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging Tech */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Emerging Tech</h4>
            <ul className="space-y-3">
              {emergingTech.map((tech, index) => (
                <li key={index}>
                  <Link 
                    to={tech.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-cyan-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-cyan-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:info@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Global Services</p>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
            </div>
          </div>
<<<<<<< HEAD
        </div>,
      </div>,
,
=======
        </div>

<<<<<<< HEAD
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
      {/* Bottom Bar */}
<<<<<<< HEAD
      <div className="border-t border-gray-700 bg-slate-900">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
=======
      <div className="border-t border-gray-700 bg-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <div className="text-gray-400 text-sm">© {currentYear} Zion Tech Group. All rights reserved.</div>
=======
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">,
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">,
            <div className="text-gray-400 text-sm">,
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-c796

            <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
              <div className="flex items-center space-x-2"></div>
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2"></div>
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center space-x-2"></div>
=======
<<<<<<< HEAD
              <div className="flex items-center space-x-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
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
=======
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Cookies
            </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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

<<<<<<< HEAD
export default Footer;
>>>>>>> origin/main
=======
};

export default Footer;
>>>>>>> d657cf2a1bc2 (fix: resolve merge conflicts in App.tsx, Footer.tsx, and Navigation.tsx)
=======
export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
