import React from 'react';
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

import { Link } from 'react-router-dom';
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
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' }
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
import { Link } from 'react-router-dom';
<<<<<<< HEAD

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI-powered solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI Automation</li>
              <li>Data Analytics</li>
              <li>Custom Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
<<<<<<< HEAD
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Contact Support</li>
=======
=======
'use client';
import React, { memo } from 'react';
import React, { Link } from 'react-router-dom';
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },'
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },'
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },'
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },'
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },'
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },'
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },'
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },'
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },'
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },'
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },'
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' },'
    { name: 'AI Video Analysis', url: '/ai-video-analysis', description: 'Video content analysis' },'
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', description: 'Text-to-speech' },'
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' },'
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Emotion detection' },'
    { name: 'AI Enterprise Chatbot', url: '/ai-chatbot-enterprise', description: 'Enterprise-grade chatbots' },'
    { name: 'AI Content Moderation', url: '/ai-content-moderation', description: 'Automated content filtering' },'
    { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling', description: 'ML forecasting' },'
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Smart document processing' },'
    { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics', description: 'Conversation insights' },'
    { name: 'AI Supply Chain Intelligence', url: '/ai-supply-chain-ai', description: 'Supply chain optimization' },'
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', description: 'Medical diagnostics' },'
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting', description: 'Financial predictions' },'
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics', description: 'IoT data analysis' },'
    { name: 'AI Conversational AI Platform', url: '/ai-conversational-ai', description: 'Advanced conversations' },'
    { name: 'AI Automated Testing', url: '/ai-automated-testing', description: 'Intelligent testing' },'
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management', description: 'Smart knowledge systems' },'
    { name: 'AI Customer Churn Prediction', url: '/ai-customer-churn', description: 'Churn prevention' },'
    { name: 'AI Automated Reporting', url: '/ai-automated-reporting', description: 'Smart reporting' },'
    { name: 'AI Voice Assistant Platform', url: '/ai-voice-assistant', description: 'Enterprise voice AI' },'
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Advanced content creation' }'
  ];

  const microSaasServices = [
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time BI & Analytics' },'
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code Chatbot Platform' },'
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated Email Campaigns' },'
    { name: 'Social Media AI', url: '/social-media-ai', description: 'AI Social Management' },'
    { name: 'AI Project Management', url: '/ai-project-management', description: 'Smart Project Tracking' },'
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO Tools' },'
    { name: 'AI Sales CRM', url: '/ai-sales-crm', description: 'Intelligent CRM System' },'
    { name: 'AI Design Studio', url: '/ai-design-studio', description: 'AI Design Tools' },'
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence' },'
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },'
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },'
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },'
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },'
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },'
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation' },'
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },'
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },'
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation' },'
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation' },'
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', description: 'Social media management' },'
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing' },'
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', description: 'Advanced translation' }'
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },'
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Security solutions' },'
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },'
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },'
    { name: 'API Development', url: '/api-development', description: 'REST & GraphQL APIs' },'
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment' },'
    { name: 'Database Management', url: '/database-management', description: 'Data solutions' },'
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },'
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },'
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },'
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },'
    { name: 'Network Security', url: '/network-security', description: 'Network protection' },'
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud transition' },'
    { name: 'System Integration', url: '/system-integration', description: 'System connectivity' },'
    { name: 'Performance Optimization', url: '/performance-optimization', description: 'System tuning' },'
    { name: 'Disaster Recovery', url: '/disaster-recovery', description: 'Business continuity' },'
    { name: 'Compliance & Governance', url: '/compliance-governance', description: 'Regulatory compliance' },'
    { name: 'Quality Assurance', url: '/quality-assurance', description: 'Testing & validation' },'
    { name: 'Technical Consulting', url: '/technical-consulting', description: 'Expert guidance' },'
    { name: 'Legacy Modernization', url: '/legacy-modernization', description: 'System upgrades' },'
    { name: 'Data Visualization & BI', url: '/data-visualization', description: 'Advanced dashboards' },'
    { name: 'Workflow Automation', url: '/workflow-automation', description: 'Process automation' },'
    { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' }'
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },'
    { name: 'Our Team', url: '/team' },'
    { name: 'Careers', url: '/careers' },'
    { name: 'Case Studies', url: '/case-studies' },'
    { name: 'Blog', url: '/blog' },'
    { name: 'Careers', url: '/careers' },'
    { name: 'Partners', url: '/partners' },'
    { name: 'Support', url: '/support' },'
    { name: 'Status', url: '/status' }'
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },'
    { name: 'API Reference', url: '/api-docs' },'
    { name: 'Tutorials', url: '/tutorials' },'
    { name: 'Support Center', url: '/support' },'
    { name: 'Status Page', url: '/status' },'
    { name: 'Community', url: '/community' }'
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },'
    { name: 'Terms of Service', url: '/terms' },'
    { name: 'Cookie Policy', url: '/cookies' },'
    { name: 'Compliance', url: '/compliance' }'
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },'
    { name: 'Digital Transformation', url: '/digital-transformation' },'
    { name: 'Business Intelligence', url: '/business-intelligence' },'
    { name: 'Edge Computing', url: '/edge-computing' },'
    { name: 'Consultation', url: '/consultation' },'
    { name: 'Custom Development', url: '/custom-software' }'
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },'
    { name: 'Our Team', url: '/team' },'
    { name: 'Careers', url: '/careers' },'
    { name: 'Case Studies', url: '/case-studies' },'
    { name: 'Blog', url: '/blog' },'
    { name: 'News', url: '/news' },'
    { name: 'Press Kit', url: '/press' },'
    { name: 'Partners', url: '/partners' }'
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },'
    { name: 'Documentation', url: '/docs' },'
    { name: 'API Documentation', url: '/api-docs' },'
    { name: 'Tutorials', url: '/tutorials' },'
    { name: 'Community', url: '/community' },'
    { name: 'Status', url: '/status' },'
    { name: 'Contact Support', url: '/contact' },'
    { name: 'System Requirements', url: '/requirements' }'
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },'
    { name: 'Terms of Service', url: '/terms' },'
    { name: 'Cookie Policy', url: '/cookies' },'
    { name: 'GDPR Compliance', url: '/gdpr' },'
>>>>>>> origin/main
  ];

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
=======
    <div>
  )
    </div>
  );
  );
  )
    <footer className="bg-gray-900 text-white py-8">"
      <div className="container mx-auto px-4">"
>>>>>>> origin/main
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-400">
              Advanced AI and IT solutions for modern businesses.
<<<<<<< HEAD
  Zap,
  ChevronRight
} from 'lucide-react';

=======

  const quickLinks = [
    { name: 'Home', path: '/' },'
    { name: 'About', path: '/about' },'
    { name: 'Contact', path: '/contact' },'
    { name: 'Privacy Policy', path: '/privacy' },'
    { name: 'Terms of Service', path: '/terms' }'
  ]
import React, { Brain, Mail, Phone, MapPin, ArrowRight, Award, Users, Shield, Clock, Globe, Zap, ChevronRight } from 'lucide-react';
>>>>>>> origin/main
export default function Footer() {
  const navigationItems = [
    { name: "Home", path: "/" },"
    { name: "About", path: "/about" },"
    { name: "Services", path: "/services" },"
    { name: "AI Services", path: "/ai-services" },"
    { name: "Micro SAAS", path: "/micro-saas" },"
    { name: "5G Solutions", path: "/5g-solutions" },"
    { name: "Contact", path: "/contact" },"
    { name: "Demo", path: "/demo" },"
    { name: "Consultation", path: "/consultation" },"
    { name: "Blog", path: "/blog" },"
    { name: "Tutorials", path: "/tutorials" },"
    { name: "Support", path: "/support" },"
  ];
<<<<<<< HEAD
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
=======

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },"
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },"
    { name: "AI Content Generation", path: "/ai-content-generation" },"
    { name: "AI Customer Support", path: "/ai-customer-support" },"
    { name: "AI Data Analytics", path: "/ai-data-analytics" },"
    { name: "AI Document Processing", path: "/ai-document-processing" },"
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },"
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },"
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },"
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },"
  ];

  const microSaasServices = [
    { name: "AI Video Generator", path: "/zion-ai-video-generator" },"
    { name: "AI Invoice Generator", path: "/zion-ai-invoice-generator" },"
    { name: "AI Customer Insights", path: "/zion-ai-customer-insights" },"
    { name: "AI Email Analyzer", path: "/zion-ai-email-analyzer" },"
    { name: "Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },"
    { name: "AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },"
    { name: "Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },"
    { name: "AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" },"
    { name: "AI Code Reviewer", path: "/zion-ai-code-reviewer" },"
    { name: "AI Social Media Manager", path: "/zion-ai-social-media-manager" },"
    { name: 'Security Policy', url: '/security' },'
    { name: 'SLA Agreement', url: '/sla' },'
  ];

  const itServices = [
    { name: "Cloud Migration", path: "/cloud-migration" },"
    { name: "Web Development", path: "/web-development" },"
    { name: "DevOps", path: "/devops" },"
    { name: "IT Consulting", path: "/it-consulting" },"
    { name: "Network Security", path: "/network-security" },"
    { name: "Custom Software", path: "/custom-software" },"
    { name: "System Integration", path: "/system-integration" },"
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },"
    { name: "5G Edge Computing", path: "/5g-edge-computing" },"
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },"
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },"
    { name: "5G Private Networks", path: "/5g-private-networks" },"
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },"
    { name: "5G Data Analytics", path: "/5g-data-analytics" },"
    { name: "5G Implementation", path: "/5g-implementation" },"
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },"
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },"
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },"
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

const Footer: React.FC = () => {
  return (
    <div>
  )
    </div>
  );
  );
  )
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
>>>>>>> origin/main
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">"
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
<<<<<<< HEAD
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
=======
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">"
            <div className="flex items-center space-x-2 mb-6">"
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">"
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
>>>>>>> origin/main
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
<<<<<<< HEAD
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
=======
            <div className="space-y-3">"
              <div className="flex items-center space-x-3">"
                <Phone className="w-5 h-5 text-blue-400" />"
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">"
                <Mail className="w-5 h-5 text-blue-400" />"
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">"
                <MapPin className="w-5 h-5 text-blue-400" />"
                <span className="text-gray-300">Delaware, USA</span>
              </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group;
              </h3>
            </div>
  const Component = () => {
  
    return (
    <div>
  )
    </div>
  );
  );
  )
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>"
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">"
              <div className="flex items-center space-x-3 mb-6">"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">"
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white neon-text-enhanced">Zion Tech Group</h3>"
                  <p className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting. 
                Transform your business with our comprehensive range of services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">"
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">"
                  <Phone className="w-4 h-4" />"
                  <a href="tel:+13024640950" className="text-sm">(302) 464-0950</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">"
                  <Mail className="w-4 h-4" />"
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4 mt-0.5" />"
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Clock className="w-4 h-4" />"
                  <span className="text-sm">24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-6 flex items-center">"
                <Brain className="w-5 h-5 mr-2" />
                AI Services;
              </h4>
              <ul className="space-y-3">
                {aiServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All AI Services
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-6 flex items-center">"
                <Cloud className="w-5 h-5 mr-2" />
                IT Services;
              </h4>
              <ul className="space-y-3">
                {itServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.url}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/it-services"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All IT Services
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Micro SAAS */}
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-6 flex items-center">"
                <Cpu className="w-5 h-5 mr-2" />
                Micro SAAS;
              </h4>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.url}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/micro-saas"
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All Micro SAAS
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
=======
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
          </div>

          {/* AI Solutions */}
          <div>
<<<<<<< HEAD
            <h4 className="text-md font-semibold mb-4">Services</h4>"
            <ul className="space-y-2">"
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>"
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>"
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>"
            <ul className="space-y-2">"
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>"
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>"
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>"
            <ul className="space-y-2">"
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>"
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion AI Solutions. All rights reserved.
          </p>
>>>>>>> origin/main
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
            <ul className="space-y-2>
              {emergingTech.map((service, index) => (

            <ul className="space-y-2 mb-6>
            </ul>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400>Support</h3>
            <ul className="space-y-2 mb-6>
              {supportLinks.map((link, index) => (

    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
=======
=======
}
                <li key={index}>
                  <Link ;
                    href={service.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm;
                  >
                    {service.name}

                  </Link>
                </li>
                ))}

            </ul>
          </div>
          {/* Company & Support */}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center>"
              <Users className="w-5 h-5 mr-2 />
              Company;
            </h3>
            <ul className="space-y-2 mb-6>
              {companyLinks.map((link, index) => (

                <li key={index}>
                  <Link ;
                    href={link.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm;
                  >
                    {link.name}

                  </Link>
                </li>
                ))}

            </ul>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400>Support</h3>"
            <ul className="space-y-2 mb-6>
              {supportLinks.map((link, index) => (

                <li key={index}>
                  <Link ;
                    href={link.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm;
                  >
                    {link.name}

                  </Link>
                </li>
                ))}

            </ul>
            <div className="space-y-3>"
              <div className="flex items-center text-sm text-gray-300>"
                <Phone className="w-4 h-4 mr-2 text-cyan-400 />"
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors font-medium>
                  {contactInfo.phone}

                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300>"
                <Mail className="w-4 h-4 mr-2 text-cyan-400 />"
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors font-medium>
                  {contactInfo.email}

                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300>"
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5 />"
                <span className="leading-relaxed>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300>"
                <Clock className="w-4 h-4 mr-2 text-cyan-400 />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium>
                {contactInfo.emergency}

import React, { Link } from 'react-router-dom';
import React, { Brain, Mail, Phone, MapPin } from 'lucide-react';
  BarChart3,
  Cloud,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Target,
  Calendar,
  Users,
  Award,
  Star
} from "lucide-react";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  const services = useMemo(() => [
    { name: "AI Solutions", href: "/ai-services", icon: <Brain className="w-4 h-4" /> },"
    { name: "IT Services", href: "/services", icon: <Shield className="w-4 h-4" /> },"
    { name: "Micro SAAS", href: "/micro-saas", icon: <Zap className="w-4 h-4" /> },"
    { name: "5G Solutions", href: "/5g-solutions", icon: <Globe className="w-4 h-4" /> }
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", href: "/ai-analytics" },"
    { name: "AI Automation", href: "/ai-automation" },"
    { name: "AI Content Generation", href: "/ai-content-generation" },"
    { name: "AI Customer Service", href: "/ai-customer-service" },"
    { name: "AI Marketing", href: "/ai-marketing" },"
    { name: "AI Healthcare", href: "/ai-healthcare" }"
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },"
    { name: "Zion Security Shield", href: "/zion-security-shield" },"
    { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },"
    { name: "Zion Content Studio", href: "/zion-content-studio" },"
    { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },"
    { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" }"
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", href: "/about" },"
    { name: "Contact", href: "/contact" },"
    { name: "Blog", href: "/blog" },"
    { name: "Demo", href: "/demo" },"
    { name: "Support", href: "/support" },"
    { name: "Privacy Policy", href: "/privacy" },"
    { name: "Terms of Service", href: "/terms" }"
  ], []);

  const stats = useMemo(() => [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-5 h-5" /> },"
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-5 h-5" /> },"
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-5 h-5" /> },"
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ], []);

const Footer: React.FC = () => {
  const Component = () => {
  
    return (
    <div>
  )
    </div>
  );
  );
  )
    <footer className="bg-slate-900 text-white">"
      <div className="max-w-7xl mx-auto px-4 py-12">"
>>>>>>> origin/main
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">"
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech</span>
<<<<<<< HEAD
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
=======
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
              </p>
              
              <div className="space-y-3">"
                <div className="flex items-center text-gray-300">"
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />"
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">"
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />"
                  <span className="text-sm">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-start text-gray-300">"
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />"
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
>>>>>>> origin/main
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of advanced AI and IT solutions for businesses worldwide.
            </p>
<<<<<<< HEAD
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
=======
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-4">"
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">"
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">"
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">"
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

>>>>>>> origin/main
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>"
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
=======
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="mt-8 pt-8 border-t border-gray-700>
          <div className="flex flex-col md:flex-row justify-between items-center>
=======
        <div className="mt-8 pt-8 border-t border-gray-700>"
          <div className="flex flex-col md:flex-row justify-between items-center>"
>>>>>>> origin/main
            <div className="text-sm text-gray-400 mb-4 md:mb-0>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6>"
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Privacy Policy;
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Terms of Service;
              </a>
<<<<<<< HEAD
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
=======
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>"
            <h3 className="text-lg font-semibold mb-6 flex items-center">"
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services;
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link;
>>>>>>> origin/main
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>"
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
<<<<<<< HEAD
                  <Link
=======
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
                  <Link ;
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />"
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
=======
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">AI Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-automated-reporting" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Automated Reporting
                </Link>
              </li>
              <li>
                <Link to="/ai-data-analytics-pro" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Data Analytics Pro
                </Link>
              </li>
              <li>
                <Link to="/ai-email-assistant" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Email Assistant
                </Link>
              </li>
              <li>
                <Link to="/ai-fraud-detection" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Fraud Detection
                </Link>
              </li>
              <li>
                <Link to="/ai-predictive-analytics" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Predictive Analytics
                </Link>
              </li>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
            </ul>
          </div>

          {/* IT Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6 flex items-center">"
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services;
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link;
>>>>>>> origin/main
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
<<<<<<< HEAD
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
=======
                      <div className="font-medium">{service.name}</div>"
>>>>>>> origin/main
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD

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
                Cookie Policy
              </a>
=======
                  >
                    {link.name}
              {navigationItems.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link;
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {item.name}
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
          {/* Services */}
          <div className="lg:col-span-2">"
            <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-4">"
                  <div className="flex items-center space-x-2">"
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    <h5 className="font-semibold text-gray-200">{category.title}</h5>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link ;
                          to={service.path} 
                          className="text-gray-300 hover:text-white transition-colors flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Resources */}
          <div className="lg:col-span-1">"
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>"
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link;
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">"
              <Cloud className="w-5 h-5 text-purple-400 mr-2" />
              Micro SaaS;
            </h4>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link ;
                    to={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                    title={service.description}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
=======
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">IT Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/custom-software" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/database-management" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Database Management
                </Link>
              </li>
              <li>
                <Link to="/network-infrastructure" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Network Infrastructure
                </Link>
              </li>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
            </ul>
          </div>

          {/* Company */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4 flex items-center">"
              <Code className="w-5 h-5 text-pink-400 mr-2" />
              IT Services;
            </h4>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link ;
                    to={service.url}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"
                    title={service.description}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
            </ul>
                Cookie Policy;
              </a>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Solutions</h3>"
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Micro SAAS</h4>"
                <ul className="space-y-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link ;
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4">Company</h5>"
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link;
                        to={link.url}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
>>>>>>> origin/main
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Emerging Tech</h4>"
                <ul className="space-y-2">
                  {emergingTech.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link ;
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
<<<<<<< HEAD
=======
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
=======
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
          </div>
        </div>

>>>>>>> origin/main
        {/* Bottom Section */}
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-12 pt-8">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Company</h4>"
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
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Support</h4>"
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
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Legal</h4>"
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
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Stay Updated</h4>"
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
                  Subscribe;
                </button>
<<<<<<< HEAD
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
=======
              </div>
            </div>
          </div>
        </div>


            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Core Services</h4>"
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      {service.icon}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>"
              <ul className="space-y-2">
                {aiServices.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h4>"
              <ul className="space-y-2">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
<<<<<<< HEAD
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">
              Email: info@zionai.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion AI Solutions. All rights reserved.</p>
=======

>>>>>>> origin/main
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">"
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>"
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">"
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {companyLinks.map((link, index) => (
                <Link;
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
<<<<<<< HEAD
  )})
Footer.displayName = 'Footer
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
};

export default Footer;
export default Footer;
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
=======
            </div>
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Company</h3>"
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link;
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-center text-gray-400 text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-2">Transforming businesses with cutting-edge AI and technology solutions.</p>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
            <div className="flex items-center space-x-3">"
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>"
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">"
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>"
                <p className="text-white font-medium">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">"
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>"
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-slate-900/50 backdrop-blur-sm">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">"
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ by Zion Tech Group</span>
                <span className="hidden md:inline">•</span>"
                <span className="hidden md:inline">Delaware, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )})
Footer.displayName = 'Footer;'
  );
export default Footer;
});

Footer.displayName = 'Footer';

        {/* Quick Links & Contact */}
        <div className="mt-8 pt-8 border-t border-gray-700">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>"
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link;
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
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>"
              <div className="space-y-3">"
                <div className="flex items-center text-gray-300 text-sm">"
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">"
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start text-gray-300 text-sm">"
                  <MapPin className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">"
          <div className="max-w-md mx-auto text-center">"
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>"
            <p className="text-gray-300 mb-4">
              Get the latest updates on AI technology and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">"
          <div className="flex flex-col md:flex-row justify-between items-center">"
>>>>>>> origin/main
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">"
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy;
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
<<<<<<< HEAD
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
=======
                <li key={index}>
                  <Link;
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> origin/main
                  </Link>
                </li>
              ))}
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
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
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
                Terms of Service
=======
                Terms of Service;
>>>>>>> origin/main
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy;
              </Link>
<<<<<<< HEAD
=======
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">"
          <div className="flex flex-col md:flex-row justify-between items-center">"
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">"
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item, index) => (
                  <Link key={index} to={item.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-0">"
              <p className="text-gray-500 text-xs">
                Built with ❤️ by Zion Tech Group;
              </p>
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">"
          <div className="max-w-2xl mx-auto text-center">"
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends;
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, emerging technologies, and industry best practices delivered to your inbox.
        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">"
          <div className="max-w-4xl mx-auto text-center">"
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Innovation</h3>"
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
>>>>>>> origin/main
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
=======
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Cookie Policy
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>"
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>"
              <div className="text-gray-300">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>"
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>"
              <div className="text-gray-300">Support Available</div>
            </div>
<<<<<<< HEAD
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">"
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">"
              <span className="flex items-center">"
                <Shield className="w-4 h-4 mr-1" />
                Enterprise Security;
              </span>
              <span className="flex items-center">"
                <Award className="w-4 h-4 mr-1" />
                ISO 27001 Certified;
              </span>
              <span className="flex items-center">"
                <Globe className="w-4 h-4 mr-1" />
                Global Services;
              </span>
            </div>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
        </div>
      </div>
=======
        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI and IT solutions to boost their performance and achieve guaranteed ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
    </footer>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

}

export default Footer;
};

export default Footer;
});

Footer.displayName = 'Footer';

export default Footer;
export default Footer;
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
>>>>>>> origin/main
