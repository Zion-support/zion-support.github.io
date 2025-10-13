<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
'use client;
=======
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6

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

import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

const Footer: React.FC = () => {
=======
import { ArrowRight, Brain, Zap, Phone } from "lucide-react";
const Footer = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', url: '/ai-video-analysis', description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', url: '/ai-chatbot-enterprise', description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', url: '/ai-content-moderation', description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling', description: 'ML forecasting' },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics', description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', url: '/ai-supply-chain-ai', description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting', description: 'Financial predictions' },
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics', description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', url: '/ai-conversational-ai', description: 'Advanced conversations' },
    { name: 'AI Automated Testing', url: '/ai-automated-testing', description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management', description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', url: '/ai-customer-churn', description: 'Churn prevention' },
    { name: 'AI Automated Reporting', url: '/ai-automated-reporting', description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', url: '/ai-voice-assistant', description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Advanced content creation' }
  ]

<<<<<<< HEAD
  const microSaasServices = [
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time BI & Analytics' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code Chatbot Platform' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated Email Campaigns' },
    { name: 'Social Media AI', url: '/social-media-ai', description: 'AI Social Management' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'Smart Project Tracking' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO Tools' },
    { name: 'AI Sales CRM', url: '/ai-sales-crm', description: 'Intelligent CRM System' },
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'AI Design Tools' },
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation' },
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', description: 'Social media management' }
=======
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Voice Solutions', url: '/ai-voice-assistant', description: 'Voice AI' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-services', description: 'AWS, Azure, GCP' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
<<<<<<< HEAD
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Security', url: '/network-security', description: 'Network protection' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud transition' },
    { name: 'System Integration', url: '/system-integration', description: 'System connectivity' },
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'System tuning' },
    { name: 'Disaster Recovery', url: '/disaster-recovery', description: 'Business continuity' },
    { name: 'Compliance & Governance', url: '/compliance-governance', description: 'Regulatory compliance' },
    { name: 'Quality Assurance', url: '/quality-assurance', description: 'Testing & validation' },
    { name: 'Technical Consulting', url: '/technical-consulting', description: 'Expert guidance' },
    { name: 'Legacy Modernization', url: '/legacy-modernization', description: 'System upgrades' },
    { name: 'Data Visualization & BI', url: '/data-visualization', description: 'Advanced dashboards' },
    { name: 'Workflow Automation', url: '/workflow-automation', description: 'Process automation' },
<<<<<<< HEAD
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' }
=======
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' },
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile applications' },
    { name: 'Database Services', url: '/ai-data-analytics', description: 'Database management' }
=======
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'API Development', url: '/api-development', description: 'API development & management' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Comprehensive security' },
    { name: 'Database Management', url: '/database-management', description: 'Data processing & storage' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'API Documentation', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Status', url: '/status' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'System Requirements', url: '/requirements' }
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'Accessibility', url: '/accessibility' },
    { name: 'Sitemap', url: '/sitemap' }
=======
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Deployment automation' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' }
  ];
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Zap, 
  Brain, 
  Code, 
  Cloud, 
  Shield,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'AI Services',
      links: [
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'IT Support', href: '/it-support' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    {
      title: 'Emerging Tech',
      links: [
        { name: 'Blockchain Solutions', href: '/blockchain' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
  ];

export default function Footer() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Advanced AI and IT solutions for modern businesses.
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
<<<<<<< HEAD
<<<<<<< HEAD
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Support", path: "/support" },
<<<<<<< HEAD
=======
    { name: "Consultation", path: "/consultation" },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
  ];
<<<<<<< HEAD
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
=======

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
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

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
<<<<<<< HEAD
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">24/7 Support Available</span>

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
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
=======
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
=======
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-gray-300">24/7 Support Available</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74
              </div>
            </div>
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">IT Services</h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 group flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-400">{service.description}</div>
                    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
            </ul>
          </div>
<<<<<<< HEAD
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
            <ul className="space-y-2>
              {emergingTech.map((service, index) => (

            <ul className="space-y-2 mb-6>
            </ul>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400>Support</h3>
            <ul className="space-y-2 mb-6>
              {supportLinks.map((link, index) => (

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
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation. 
              We help businesses leverage cutting-edge technology to drive growth and innovation.
=======
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin,
  Github,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', path: '/ai-services' },
      { name: 'IT Services', path: '/services' },
      { name: 'Micro SAAS', path: '/micro-saas' },
      { name: '5G Solutions', path: '/5g-solutions' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
      { name: 'Support', path: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
    ],
    resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'API Reference', path: '/api' },
      { name: 'Status', path: '/status' }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and digital transformation 
              for modern businesses. Transform your operations with cutting-edge technology.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
<<<<<<< HEAD
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
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of advanced AI and IT solutions for businesses worldwide.
            </p>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
=======

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pink-400">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {item.name}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
=======
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
              </div>
            </div>
          </div>
        </div>
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
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
=======
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
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
          </div>

          {/* Specialized Services & Company */}
          <div>
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
=======
            
            <h3 className="text-lg font-semibold mb-6 text-pink-400">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {item.name}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
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
                  >
                    {link.name}
          </div>
<<<<<<< HEAD

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
        </div>

        {/* Bottom Section */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
        <div className="border-t border-gray-700 mt-12 pt-8">
=======
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
              </Link>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered solutions, cloud infrastructure, and cybersecurity services. 
                Transform your business with cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-cyan-400 mt-1" />
                  <span>
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
=======
        {/* Contact Info Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD
            ))}
=======
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-red-600/20 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f49
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white/10">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, cloud technology, and cybersecurity delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
=======
            
            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
                Cookie Policy
              </a>
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
=======
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 group mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                  <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of advanced AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                    (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span className="text-sm">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-6 neon-text-enhanced">AI Services</h3>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-start space-x-2"
                    >
                      <Zap className="w-4 h-4 text-cyan-500 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium group-hover:text-cyan-300">{service.name}</div>
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-6 neon-text-enhanced">IT Services</h3>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group flex items-start space-x-2"
                    >
                      <Cloud className="w-4 h-4 text-purple-500 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium group-hover:text-purple-300">{service.name}</div>
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-400 mb-6 neon-text-enhanced">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 group flex items-start space-x-2"
                    >
                      <Users className="w-4 h-4 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div className="font-medium group-hover:text-green-300">{link.name}</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                    </Link>
                  </li>
                ))}
              </ul>
<<<<<<< HEAD
=======
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
            </div>

<<<<<<< HEAD
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
=======
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
  )})
Footer.displayName = 'Footer
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
<<<<<<< HEAD
};

export default Footer;
export default Footer;
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
=======
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-analytics" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-content-generation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link to="/ai-customer-support" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Customer Support
                </Link>
              </li>
              <li>
                <Link to="/ai-cybersecurity" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/ai-data-analytics" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/ai-workflow-automation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Workflow Automation
                </Link>
              </li>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
            </ul>
          </div>
        </div>

<<<<<<< HEAD
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
<<<<<<< HEAD
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
=======
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View All Micro SAAS →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, 
  Facebook, Twitter, Linkedin, Github,
  ArrowRight, Shield, Award, Users
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Enterprise Solutions', href: '/ai-services' },
    { name: 'IT Consulting', href: '/it-services' },
    { name: 'Micro SaaS Development', href: '/micro-saas' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity-suite' },
    { name: 'Data Analytics', href: '/ai-data-analytics' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Support Center', href: '/support' },
    { name: 'Status Page', href: '/status' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              and digital transformation services. Transforming businesses through 
              cutting-edge technology.
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
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
<<<<<<< HEAD
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
                    {service.name}
=======
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* 5G Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">5G Solutions</h3>
            <ul className="space-y-2">
              {fiveGServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
<<<<<<< HEAD
<<<<<<< HEAD
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fe6
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
=======
          {/* Company */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/5g-solutions"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View All 5G Solutions →
                </Link>
              </li>
            </ul>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Saturday: 10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Sunday: Closed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>24/7 Emergency Support Available</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Stay updated with the latest AI and technology trends, product updates, and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-cyan-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-r-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
=======
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a 
                    href="tel:+13024640950" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    (302) 464-0950
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-gray-400">Delaware, USA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Business Hours</p>
                  <p className="text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-cyan-400" />
              <div>
                <h4 className="text-white font-semibold">Enterprise Security</h4>
                <p className="text-gray-400 text-sm">ISO 27001 Certified</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-cyan-400" />
              <div>
                <h4 className="text-white font-semibold">Award Winning</h4>
                <p className="text-gray-400 text-sm">Best AI Solutions 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-cyan-400" />
              <div>
                <h4 className="text-white font-semibold">500+ Clients</h4>
                <p className="text-gray-400 text-sm">Trusted Worldwide</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 mt-8 pt-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </Link>
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
=======
          {/* IT Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/data-management" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Data Management
                </Link>
              </li>
              <li>
                <Link to="/network-solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Network Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-consulting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/system-integration" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  System Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS & 5G */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Package className="w-5 h-5 mr-2 text-green-400" />
              Micro SAAS & 5G
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/project-management-tool" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/team-collaboration" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Team Collaboration
                </Link>
              </li>
              <li>
                <Link to="/analytics-dashboard" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/5g-network-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  5G Network Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/5g-iot-solutions" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  5G IoT Solutions
                </Link>
              </li>
              <li>
                <Link to="/5g-smart-city" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  5G Smart City
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Accessibility
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/ziontechgroup" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/ziontechgroup" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/ziontechgroup" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@ziontechgroup" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Compliant</span>
              </div>
}
};
export default Footer;
export default Footer;
=======
  );
};

export default Footer;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
  )
}

export default Footer
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
=======
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
=======
        <div className="border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Cookie Policy
                </Link>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};
=======
});

Footer.displayName = 'Footer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

export default Footer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
