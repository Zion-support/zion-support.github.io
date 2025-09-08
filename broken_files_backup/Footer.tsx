<<<<<<< HEAD
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin, Sparkles, Zap, Shield, Brain, Code, Database, BarChart3, Link as LinkIcon, UserCheck } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Shield, Zap, Users } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Zap, Brain, Cloud, Shield, Users, Code, Building, Globe } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, Zap, Brain, Shield, Globe, Code, TrendingUp, Users, Building } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
=======
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
=======
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Zap,
  Shield,
  Cpu,
  Brain,
  Building,
  FileText,
  HelpCircle,
  Code,
  Target,
  BookOpen,
  Handshake,
  Award,
  TrendingUp,
  Palette,
  Monitor,
  Server,
  Cloud,
  Key,
  Eye,
  ShieldCheck,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Heart,
  ThumbsUp,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From AI and quantum computing to cybersecurity and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
=======
=======
>>>>>>> origin/main
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Services Showcase", path: "/services-showcase" },
        { label: "AI Solutions", path: "/services/ai" },
        { label: "AI Business Intelligence", path: "/services/ai-business-intelligence" },
        { label: "AI Marketing Automation", path: "/services/ai-marketing-automation" },
        { label: "Cloud & DevOps", path: "/services/cloud" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Digital Transformation", path: "/services/transformation" },
        { label: "Emerging Technologies", path: "/emerging-tech" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "News", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "AI Matcher", path: "/ai-matcher" },
        { label: "Solutions", path: "/solutions" },
        { label: "Research & Development", path: "/research-development" },
        { label: "Training", path: "/training" },
        { label: "Webinars", path: "/webinars" },
        { label: "White Papers", path: "/white-papers" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support", path: "/support" },
        { label: "Request Quote", path: "/request-quote" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-zion-cyan/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-zion-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-zion-cyan/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Footer Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
<<<<<<< HEAD
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSocialLinkClick(link, e)}
                    className="w-10 h-10 bg-zion-slate-light/20 hover:bg-zion-cyan/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={link.name}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Stay updated with our latest insights and innovations
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-l-md text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                />
                <button className="px-4 py-2 bg-zion-cyan text-black font-medium rounded-r-md hover:bg-zion-cyan/80 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
              <li><Link href="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
              <li><Link href="/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Technology</Link></li>
              <li><Link href="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link href="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
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
=======
            <h3 className="text-white font-semibold mb-4 text-lg">Support & Resources</h3>
            <ul className="space-y-2 mb-6">
              <li><Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
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
=======
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
>>>>>>> origin/main
              </span>
            </div>
            <p className="text-zion-slate-light mb-8 max-w-md leading-relaxed text-lg">
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses navigate the future of technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">
                    <span className="font-medium text-white">{contact.label}:</span> {contact.value}
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-xl border border-white/20 hover:border-zion-cyan/50 ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25`}
                  aria-label={`Follow us on ${social.name}`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-zion-cyan rounded-full" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.label}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan/50 rounded-full group-hover:bg-zion-cyan transition-colors duration-300" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div 
        className="border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
<<<<<<< HEAD
            <h3 className="text-white font-semibold mb-4 text-xl">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest news on tech, AI, and marketplace opportunities. 
              Join thousands of professionals staying ahead of the curve.
=======
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg">{t('footer.sections.newsletter.title')}</h3>
            <p className="text-foreground/80 mb-4 text-sm">
              {t('footer.sections.newsletter.description')}
            </p>
            <FooterNewsletter />
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
          </div>
        </div>

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
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link></li>
              <li><Link href="/help-center" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Help Center</Link></li>
              <li><Link href="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors">API Docs</Link></li>
              <li><Link href="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog & Insights</Link></li>
              <li><Link href="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights, case studies, and technology updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
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
                {t('footer.bottom.api_status')}
              </Link>
=======
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Insights</span>
            </h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Get the latest technology trends, AI insights, and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25 border border-zion-cyan/30 hover:border-zion-cyan/60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div 
        className="border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-zion-slate-light text-sm mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="w-1 h-1 bg-zion-cyan rounded-full" />
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">Privacy Policy</Link>
              <span className="w-1 h-1 bg-zion-cyan rounded-full" />
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">Terms of Service</Link>
              <span className="w-1 h-1 bg-zion-cyan rounded-full" />
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">Cookie Policy</Link>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;