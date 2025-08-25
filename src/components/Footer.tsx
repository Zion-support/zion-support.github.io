<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
=======
import { FooterNewsletter } from "@/components/FooterNewsletter";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin, Sparkles, Zap, Shield, Brain, Code, Database, BarChart3, Link as LinkIcon, UserCheck } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Shield, Zap, Users } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Zap, Brain, Cloud, Shield, Users, Code, Building, Globe } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap, Brain, Shield, Globe, Code, TrendingUp, Users, Building } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38

export function Footer() {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      links: [
        { label: "AI Content Hub Pro", path: "/services/ai-content-hub-pro" },
        { label: "AI Customer Service Automation", path: "/services/ai-customer-service-automation" },
        { label: "AI Sales Intelligence Platform", path: "/services/ai-sales-intelligence-platform" },
        { label: "AI Fintech Platform", path: "/services/ai-fintech-platform" },
        { label: "AI Healthcare Technology", path: "/services/ai-healthcare-tech-platform" },
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Enterprise Platform", path: "/services/quantum-enterprise-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" }
      ]
    },
    {
      title: "Specialized IT Services",
      links: [
        { label: "Cloud Cost Optimization", path: "/services/cloud-cost-optimization-finops" },
        { label: "DevOps Automation Platform", path: "/services/devops-automation-cicd-platform" },
        { label: "Data Analytics Platform", path: "/services/data-analytics-business-intelligence" },
        { label: "IoT & Edge Computing", path: "/services/iot-edge-computing-platform" },
        { label: "API Management Platform", path: "/services/api-management-integration-platform" },
        { label: "Advanced Cybersecurity", path: "/services/advanced-cybersecurity-platform" },
        { label: "5G Enterprise Networks", path: "/services/5g-enterprise-network-solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/services/business-intelligence" },
        { label: "Marketing Automation", path: "/services/ai-marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr" },
        { label: "Legal Tech", path: "/services/ai-legal" }
      ]
    },
    {
      title: "Emerging Tech",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" }
=======
  const footerSections = [
    {
      title: "Marketplace",
      links: [
        { label: "AI & ML Services", href: "/micro-saas-services" },
        { label: "IT Services", href: "/services" },
        { label: "Cloud Solutions", href: "/services" },
        { label: "Cybersecurity", href: "/services" },
        { label: "DevOps Automation", href: "/services" },
        { label: "Data Analytics", href: "/services" },
      ]
    },
    {
      title: "Talent & Resources",
      links: [
        { label: "AI Engineers", href: "/talent" },
        { label: "Data Scientists", href: "/talent" },
        { label: "DevOps Specialists", href: "/talent" },
        { label: "Full-Stack Developers", href: "/talent" },
        { label: "Equipment & Tools", href: "/equipment" },
        { label: "Learning Resources", href: "/blog" },
      ]
    },
    {
      title: "Enterprise",
      links: [
        { label: "Custom Solutions", href: "/enterprise" },
        { label: "White-Label Platform", href: "/enterprise" },
        { label: "API Access", href: "/developers" },
        { label: "Dedicated Support", href: "/enterprise" },
        { label: "Security & Compliance", href: "/services" },
        { label: "Migration Services", href: "/services" },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
      ]
    },
    {
      title: "Company",
      links: [
<<<<<<< HEAD
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
=======
        { label: "About Us", href: "/about" },
        { label: "Blog & Insights", href: "/blog" },
        { label: "Partners", href: "/partners" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Sitemap", href: "/sitemap" },
      ]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
    }
  ];

  const contactInfo = {
<<<<<<< HEAD
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const handleSocialLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to open the primary URL first
    const newWindow = window.open(link.url, '_blank', 'noopener,noreferrer');
    
    // If the window fails to open, try the fallback
    if (!newWindow) {
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    } else {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">The Tech & AI Marketplace</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions, cybersecurity, and digital transformation services. 
                We help organizations thrive in the digital age.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <button
                  onClick={() => handleContactClick('phone')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">📞</span>
                  {contactInfo.phone}
                </button>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="mr-3">✉️</span>
                  {contactInfo.email}
                </button>
                <div className="flex items-start text-gray-300">
                  <span className="mr-3 mt-1">📍</span>
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/10 to-zion-blue-dark"></div>
      
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
      
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-zion-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      
      {/* Animated border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-zion-cyan rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-zion-purple rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-zion-cyan rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-zion-purple rounded-full animate-pulse opacity-30 delay-1500"></div>
      </div>

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bdc0
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-8717
          <div>
<<<<<<< HEAD
=======
          <div className="lg:col-span-2">
>>>>>>> origin/cursor/website-audit-and-enhancement-050f
=======
          <div className="lg:col-span-2">
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting talent, services, and innovation in one seamless ecosystem.
=======
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION TECH GROUP</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md text-lg">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. 
              Connecting talent with opportunity and innovation with implementation.
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
<<<<<<< HEAD
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>San Francisco, CA</span>
              </div>
            </div>

=======
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-slate border-t border-zion-blue-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-12 pb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's premier marketplace for high-tech and artificial intelligence solutions. 
              We connect businesses with cutting-edge technology services and innovative AI platforms.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-zion-cyan" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
            {/* Social Links */}
=======
            </div>
=======
                    <div className="mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent neon-pulse">ZION</span>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
            <p className="text-zion-slate-light mb-4 max-w-xs">
              The world's first free marketplace dedicated to high-tech and artificial intelligence. Publish, connect, and thrive — all in one place.
            </p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark border-t border-zion-purple/20 pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION TECH GROUP</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's premier marketplace for cutting-edge technology, AI solutions, and innovative micro SAAS services. 
              Connecting businesses with top-tier tech talent and transformative solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
=======
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark border-t border-zion-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence solutions. 
              Transforming businesses through innovative micro SAAS services and cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
<<<<<<< HEAD
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
=======
    email: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <footer className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark border-t border-zion-purple/30 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-16 pb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence. 
              Connecting businesses with cutting-edge AI services, IT solutions, and top tech talent.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-sm">
                  {contactInfo.phone}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const serviceCategories = [
    { name: "AI Services", link: "/micro-saas-services?category=ai-services", description: "AI & ML Solutions" },
    { name: "IT Services", link: "/micro-saas-services?category=it-services", description: "Infrastructure & Security" },
    { name: "Development", link: "/micro-saas-services?category=development-services", description: "Custom Software" },
    { name: "Automation", link: "/micro-saas-services?category=automation-services", description: "Process Automation" },
    { name: "Data Services", link: "/micro-saas-services?category=data-services", description: "Analytics & BI" },
    { name: "Consulting", link: "/micro-saas-services?category=consulting-services", description: "Strategic Guidance" }
  ];

  const quickLinks = [
    { name: "Marketplace", link: "/marketplace" },
    { name: "Talent Directory", link: "/talent" },
    { name: "Equipment", link: "/equipment" },
    { name: "AI Recruiting", link: "/zion-hire-ai" },
    { name: "IT Onsite Services", link: "/it-onsite-services" },
    { name: "Request Quote", link: "/request-quote" }
  ];

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Partners", link: "/partners" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
    { name: "Sitemap", link: "/sitemap" }
  ];

  const supportLinks = [
    { name: "Help Center", link: "/help" },
    { name: "Documentation", link: "/docs" },
    { name: "API Reference", link: "/api" },
    { name: "Status Page", link: "/status" },
    { name: "Community", link: "/community" },
    { name: "Support Ticket", link: "/support" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue border-t border-zion-blue-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pt-12 pb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
              <Badge className="ml-3 bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                Tech Group
              </Badge>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-xs leading-relaxed">
              The world's first comprehensive marketplace dedicated to high-tech, artificial intelligence, and innovative business solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-white">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">
                  kleber@ziontechgroup.com
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="max-w-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
=======
                <span className="text-sm leading-relaxed">
                  {contactInfo.address}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-zion-cyan flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                </span>
              </div>
            </div>

            {/* Social Links */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
                <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                <a href="tel:+1-555-123-4567" className="hover:text-zion-cyan transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                <span>Global - Remote First</span>
              </div>
            </div>
            
            {/* Social Links */}
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 hover-glow"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
<<<<<<< HEAD
<<<<<<< HEAD
                href="https://www.linkedin.com/company/zion-tech-group"
=======
                href="https://www.linkedin.com/company/ziontechgroup"
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
                href="https://www.linkedin.com/company/zion-marketplace"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 hover-glow"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 hover-glow"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 hover-glow"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-blue-light/20 rounded-lg"
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 hover-glow"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-purple/10 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-lg hover:bg-zion-cyan/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Marketplace */}
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-6 text-lg">Marketplace</h3>
            <ul className="space-y-3">
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services-overview" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services Overview</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
              <li><Link to="/cloud-services" className="text-zion-cyan transition-colors">Cloud Services</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Services</Link></li>
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Services & Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Services</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite IT Support</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring Solutions</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
=======
          {/* Marketplace */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">Products <ExternalLink className="h-3 w-3 ml-1" /></Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
<<<<<<< HEAD
              <li><Link to="/featured" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Featured</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
            <ul className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/digital-marketing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Marketing</Link></li>
              <li><Link to="/business-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Business Solutions</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Onsite Services</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link></li>
=======
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Onsite Services</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-bdc0
=======
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  IT & AI Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Global Onsite Services
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tech Equipment
                </Link>
              </li>
              <li>
                <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Zion Hire AI
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Request Quote
                </Link>
              </li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            </ul>
          </div>

          {/* Solutions */}
          <div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services-hub" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services Hub</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
              <li><Link to="/digital-transformation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Digital Transformation</Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Global IT Support</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Recruiting</Link></li>
=======
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Hire AI</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-8717
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS Services</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
<<<<<<< HEAD
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
<<<<<<< HEAD
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
=======
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Zion Hire AI</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
              <li><Link to="/content/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
=======
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
              <li><Link to="/match" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
=======
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/quantum-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Technology</Link></li>
              <li><Link to="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
              <li><Link to="/green-it" className="text-zion-cyan hover:text-zion-purple transition-colors">Green IT</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/category/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI & Machine Learning
              </Link></li>
              <li><Link to="/category/cloud-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cloud & Infrastructure
              </Link></li>
              <li><Link to="/category/security-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cybersecurity
              </Link></li>
              <li><Link to="/category/data-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Data & Analytics
              </Link></li>
              <li><Link to="/category/development-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Development Services
              </Link></li>
              <li><Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                IT Onsite Services
              </Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">General Services</Link></li>
              <li><Link to="/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">AI Services</Link></li>
              <li><Link to="/it-services" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">IT Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Micro SAAS</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Green IT</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
            </ul>
          </div>

          {/* Marketplace */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
<<<<<<< HEAD
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Press</Link></li>
              <li><Link to="/investors" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Investors</Link></li>
=======
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-cyan hover:text-zion-purple transition-colors">Sitemap</Link></li>
=======
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-zion-cyan" />
              Marketplace
            </h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Products
              </Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Talent
              </Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Equipment
              </Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Categories
              </Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Assistant
              </Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Green IT
              </Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
            </ul>
          </div>

          {/* Company */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Hiring</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Get Quote</Link></li>
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Docs</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Resources & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog & News</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-050f
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
<<<<<<< HEAD
            <ul className="space-y-2">
<<<<<<< HEAD
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-105 hover-glow">Sitemap</Link></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
=======
            <ul className="space-y-3">
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
<<<<<<< HEAD
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
=======
              <li><Link to="/sitemap" className="text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Resources & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Support</Link></li>
              <li><Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Community</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
              <li><Link to="/developers/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Documentation</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-8717
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
<<<<<<< HEAD
<<<<<<< HEAD
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Community</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
              <li><Link to="/contact" className="text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
=======
              <li><Link to="/mission" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Our Mission</Link></li>
              <li><Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Team</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
            </ul>
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-050f
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Resources & Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
              <li><Link to="/service-description-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Service Generator</Link></li>
              <li><Link to="/content-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Content Generator</Link></li>
              <li><Link to="/portfolio-builder" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Portfolio Builder</Link></li>
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
>>>>>>> origin/cursor/website-audit-and-enhancement-bdc0
            </ul>
          </div>
          
          <div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bdc0
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
=======
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
              <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                New
              </Badge>
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {category.name}
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                  <p className="text-zion-slate-light/60 text-xs mt-1">{category.description}</p>
                </li>
              ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
            </ul>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-zion-slate-light mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
=======
          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {section.title === "Marketplace" && <Globe className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Talent & Resources" && <Users className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Enterprise" && <Building className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Company" && <Code className="h-5 w-5 text-zion-cyan" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-purple/20 pt-8 pb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and marketplace opportunities delivered to your inbox.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Support</Link></li>
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
              <li><Link to="/post-job" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Post a Job</Link></li>
              <li><Link to="/publish" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Publish Product</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-xl">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest news on tech, AI, and marketplace opportunities. 
              Join thousands of professionals staying ahead of the curve.
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
            </p>
            <FooterNewsletter />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
              <li><Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Community</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Zion Hire AI</Link></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Newsletter</h4>
              <p className="text-zion-slate-light mb-4 text-sm">
                Stay updated with the latest news on tech, AI, and marketplace opportunities.
              </p>
              <FooterNewsletter />
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-7286
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Newsletter Section */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-xl">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest news on tech, AI, and marketplace opportunities delivered to your inbox.
=======
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Developer Portal</Link></li>
              <li><Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Zion Hire AI</Link></li>
              <li><Link to="/mobile-launch" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Mobile App</Link></li>
=======
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Micro SAAS Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/it-onsite-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Onsite Support
                </Link>
              </li>
              <li>
                <Link to="/zion-hire-ai" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                  Talent Solutions
                </Link>
              </li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
            </ul>
          </div>

          {/* Solutions */}
          <div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-4 text-lg">User Resources</h3>
            <ul className="space-y-2 mb-4">
              <li><Link to="/create-profile" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Create Profile</Link></li>
              <li><Link to="/portfolio" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="/post-job" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Post a Job</Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link></li>
            </ul>
          </div>
          
          <div>
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-zion-slate-light mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-zion-cyan" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services?category=AI" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-zion-purple-light" />
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=IT" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Database className="h-4 w-4 mr-2 text-zion-purple-light" />
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Development" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Code className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Development
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Security" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Security
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services?category=Automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                  <Workflow className="h-4 w-4 mr-2 text-zion-purple-light" />
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-zion-blue-light">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated with Zion Tech</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI technology, business automation, and innovative solutions 
              delivered directly to your inbox.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-zion-cyan" />
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Blog
              </Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Partners
              </Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Careers
              </Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact
              </Link></li>
              <li><Link to="/request-quote" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2 group">
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Request Quote
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-zion-cyan" />
              Stay Updated
            </h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Get the latest insights on AI technology, marketplace opportunities, and industry trends delivered to your inbox.
            </p>
          </div>
          <FooterNewsletter />
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
<<<<<<< HEAD
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
            </p>
<<<<<<< HEAD
            <FooterNewsletter />
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Accessibility</Link></li>
            </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
=======
        <div className="mt-12 pt-8 border-t border-zion-blue-light">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm text-zion-slate-light">
                <p>Mobile: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/request-quote" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Request Quote</Link>
                <Link to="/contact" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Us</Link>
                <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link>
                <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">Partnerships</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm text-zion-slate-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
                <p>24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
          
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
        <div className="mt-12 pt-8 border-t border-zion-blue-light relative">
          {/* Animated border glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-40"></div>
          
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
        {/* Bottom Section */}
        <div className="pt-8 border-t border-zion-blue-light">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
          <div className="flex flex-col md:flex-row justify-between items-center">
=======
        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-zion-purple" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Talent Directory
                </Link>
              </li>
              <li>
                <Link to="/match" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Matcher
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Community Hub
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg flex items-center">
              <Building className="h-5 w-5 mr-2 text-zion-blue" />
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sitemap
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-4">
                Get the latest insights on AI, tech trends, and marketplace opportunities.
              </p>
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Service Categories Quick Links */}
        <div className="border-t border-zion-blue-light pt-8 mb-8">
          <h3 className="text-white font-semibold mb-6 text-center text-lg">Our Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <Link to="/micro-saas-services?category=AI" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Brain className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">AI Services</span>
            </Link>
            <Link to="/micro-saas-services?category=IT" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Shield className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">IT Solutions</span>
            </Link>
            <Link to="/micro-saas-services?category=Development" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Code className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Development</span>
            </Link>
            <Link to="/micro-saas-services?category=Analytics" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <TrendingUp className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Analytics</span>
            </Link>
            <Link to="/micro-saas-services?category=Security" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Shield className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Security</span>
            </Link>
            <Link to="/micro-saas-services?category=Automation" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Zap className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Automation</span>
            </Link>
            <Link to="/micro-saas-services?category=Integration" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Globe className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Integration</span>
            </Link>
            <Link to="/micro-saas-services?category=Consulting" className="flex flex-col items-center p-4 rounded-lg bg-zion-blue-dark/30 hover:bg-zion-cyan/20 transition-all duration-300 group">
              <Users className="h-8 w-8 text-zion-cyan mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-zion-slate-light text-sm text-center group-hover:text-zion-cyan transition-colors">Consulting</span>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future of AI and technology
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
=======
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm mb-2">
                &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-zion-slate-light">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
<<<<<<< HEAD
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Accessibility</Link>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
              <p className="text-zion-slate-light text-xs mt-1 opacity-80">
                Empowering businesses with cutting-edge technology solutions
              </p>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Sitemap</Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-all duration-300 hover:scale-105 hover-glow">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-all duration-300 hover:scale-105 hover-glow">Terms of Service</Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
        {/* Bottom Footer */}
        <div className="border-t border-zion-purple/20 pt-8 pb-8">
=======
            <h3 className="text-white font-semibold mb-4 text-lg">
              <span className="bg-gradient-to-r from-zion-blue to-zion-cyan bg-clip-text text-transparent">
                Marketplace
              </span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              <span className="bg-gradient-to-r from-zion-purple to-zion-blue bg-clip-text text-transparent">
                Company
              </span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Support
              </span>
            </h3>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <p className="text-zion-slate-light text-sm mb-3">
                Get the latest tech insights and service updates.
              </p>
              <FooterNewsletter />
=======
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering the future of technology through innovation and collaboration.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Sitemap</Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Contact</Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
              <p className="text-zion-slate-light text-xs mt-1">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Sitemap
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors"
              >
                Main Website
              </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
<<<<<<< HEAD
              <p className="text-zion-slate-light/70 text-xs mt-1">
                Empowering businesses through innovative AI and technology solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Contact Support
              </Link>
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                Visit Website
              </a>
=======
              <p className="text-zion-slate-light/60 text-xs mt-1">
                Empowering businesses with innovative technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Accessibility
              </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="border-t border-zion-purple/20 pt-8 pb-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-2xl p-6 text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Ready to Transform Your Business?
            </h4>
            <p className="text-zion-slate-light mb-4 max-w-2xl mx-auto">
              Get in touch with our team to discuss your AI and technology needs. 
              We're here to help you leverage the power of artificial intelligence and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Message
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Support
              </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleSocialLinkClick(link, e)}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-md transition-all duration-200"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-200">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 mx-auto" />
      </motion.button>
    </footer>
  );
}
