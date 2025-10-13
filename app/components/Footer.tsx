<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
'use client;

import React, { memo } from 'react;

import { Link } from 'react-router-dom;

import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from lucide-react;

const Footer: React.FC = memo(() => {;

const currentYear = new Date().getFullYear();;;

const aiServices = [;;;

    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation }

=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
'use client';
import React, { memo } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/ad-creation-and-management-f267
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Phone, Mail, MapPin, Clock, Brain } from 'lucide-react';
=======
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Code, Users } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
=======
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, MessageSquare, Star, TrendingUp, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
<<<<<<< HEAD
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
<<<<<<< HEAD
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ];
=======
    { name: 'News', url: '/news' }
  ];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
=======
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-solutions', description: 'Advanced AI Services' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'ML Implementation' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'NLP Solutions' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'CV Applications' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Data Analytics' },
    { name: 'AI Consulting', url: '/ai-consulting', description: 'AI Strategy' },
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
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete content creation suite' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Real-time business intelligence' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Machine Learning Platform', url: '/ai-ml-platform', description: 'Complete ML platform' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Advanced computer vision' },
    { name: 'AI Natural Language Processing', url: '/ai-nlp', description: 'Advanced NLP solutions' },
    { name: 'AI Robotics Platform', url: '/ai-robotics', description: 'Intelligent robotics' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Data management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity Suite', url: '/cybersecurity-suite', description: 'Security solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup & management' },
    { name: 'Data Backup & Recovery', url: '/data-backup', description: 'Data protection' },
    { name: 'IT Support & Helpdesk', url: '/it-support', description: 'Technical support' },
    { name: 'IT Training & Certification', url: '/it-training', description: 'Staff development' },
    { name: 'Global IT Support', url: '/global-it-support', description: 'Worldwide support' }
  ];

  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI Tools' },
    { name: 'Business Apps', url: '/business-apps', description: 'Business Applications' },
    { name: 'Productivity Tools', url: '/productivity', description: 'Productivity Suite' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing Suite' },
    { name: 'Analytics Dashboard', url: '/analytics', description: 'Business Intelligence' },
    { name: 'CRM Solutions', url: '/crm', description: 'Customer Management' },
    { name: 'Project Management', url: '/project-management', description: 'Project Tools' },
    { name: 'Communication Tools', url: '/communication', description: 'Team Collaboration' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum Solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent Robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected Devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data Insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' },
    { name: 'Press Kit', url: '/press' },
    { name: 'Partners', url: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Status', url: '/status' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'System Requirements', url: '/requirements' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'Accessibility', url: '/accessibility' },
    { name: 'Sitemap', url: '/sitemap' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Advanced AI and IT solutions for modern businesses.
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-services' },
    { name: 'AI Chatbot Builder', path: '/ai-services' },
    { name: 'AI Analytics Dashboard', path: '/ai-services' },
    { name: 'AI Email Assistant', path: '/ai-services' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/it-services' },
    { name: 'Cybersecurity', path: '/it-services' },
    { name: 'Mobile Development', path: '/it-services' },
    { name: 'Data Analytics', path: '/it-services' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/micro-saas-services' },
    { name: 'AI Expense Tracker', path: '/micro-saas-services' },
    { name: 'AI Password Manager', path: '/micro-saas-services' },
    { name: 'AI Invoice Generator', path: '/micro-saas-services' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]
=======
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Award, 
  Users, 
  Shield, 
  Clock,
  Globe,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Support", path: "/support" },
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Document Processing", path: "/ai-document-processing" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },
  ];

  const microSaasServices = [
    { name: "AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },
    { name: "Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },
    { name: "AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" },
    { name: "AI Code Reviewer", path: "/zion-ai-code-reviewer" },
    { name: "AI Social Media Manager", path: "/zion-ai-social-media-manager" },
  ];

  const itServices = [
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "Web Development", path: "/web-development" },
    { name: "DevOps", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Network Security", path: "/network-security" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "System Integration", path: "/system-integration" },
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Implementation", path: "/5g-implementation" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
=======
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+1-302-464-0950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
=======

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
<<<<<<< HEAD
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </ul>
          </div>
          <div>
<<<<<<< HEAD
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </ul>
          </div>
          <div>
<<<<<<< HEAD
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
=======
          {/* Emerging Technologies */}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center>
              <Zap className="w-5 h-5 mr-2 />
              Emerging Tech
            </h3>
<<<<<<< HEAD
            <ul className="space-y-2>
              {emergingTech.map((service, index) => (

=======
            <ul className="space-y-2">
              {emergingTech.map((service, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}>
                  <Link 
                    href={service.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm
                  >
                    {service.name}

                  </Link>
                </li>
                ))}

            </ul>
          </div>
          {/* Company & Support */}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center>
              <Users className="w-5 h-5 mr-2 />
              Company
            </h3>
<<<<<<< HEAD
            <ul className="space-y-2 mb-6>
=======

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
              {companyLinks.map((link, index) => (

=======
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}>
                  <Link 
                    href={link.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm
                  >
                    {link.name}

                  </Link>
                </li>
                ))}

<<<<<<< HEAD
            </ul>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 text-cyan-400>Support</h3>
            <ul className="space-y-2 mb-6>
              {supportLinks.map((link, index) => (

=======
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Support</h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}>
                  <Link 
                    href={link.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm
                  >
                    {link.name}

                  </Link>
                </li>
                ))}

            </ul>
            <div className="space-y-3>
              <div className="flex items-center text-sm text-gray-300>
                <Phone className="w-4 h-4 mr-2 text-cyan-400 />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors font-medium>
                  {contactInfo.phone}

                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300>
                <Mail className="w-4 h-4 mr-2 text-cyan-400 />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors font-medium>
                  {contactInfo.email}

                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300>
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5 />
                <span className="leading-relaxed>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300>
                <Clock className="w-4 h-4 mr-2 text-cyan-400 />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium>
                {contactInfo.emergency}

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech</span>
=======
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation. 
              We help businesses leverage cutting-edge technology to drive growth and innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-cyan-400" />
                <div>
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of advanced AI and IT solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Global Services</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="mt-8 pt-8 border-t border-gray-700>
          <div className="flex flex-col md:flex-row justify-between items-center>
            <div className="text-sm text-gray-400 mb-4 md:mb-0>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6>
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
=======
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
=======
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
=======
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
<<<<<<< HEAD
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
=======
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services & Company */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              Specialized
            </h4>
            <ul className="space-y-3 mb-8">
              {specializedServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e
                  >
                    {link.name}
=======
              {navigationItems.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {item.name}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link
<<<<<<< HEAD
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
=======
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
                Cookie Policy
              </a>
=======
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Solutions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Micro SAAS</h4>
                <ul className="space-y-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Emerging Tech</h4>
                <ul className="space-y-2">
                  {emergingTech.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and tech updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-r-md hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with ❤️ for the future</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
            </div>
          </div>
        </div>
      </div>
    </footer>
  )})
Footer.displayName = 'Footer
=======

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
export default Footer;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
});

Footer.displayName = 'Footer';
<<<<<<< HEAD
export default Footer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======

        {/* Quick Links & Contact */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
=======
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Micro SAAS & 5G Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5G Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">5G Solutions</h3>
            <ul className="space-y-2">
              {fiveGServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
=======
  );
<<<<<<< HEAD
};

export default Footer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0373
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======

export default Footer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
