'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, BarChart, Globe, Database, Smartphone, Settings, FileText, MessageCircle, DollarSign, Calendar, Target, CheckSquare, Eye, Mic, Workflow, Wifi, Package, Heart, TrendingUp, Lock, Monitor, Link as LinkIcon, Server, Box, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';
=======
<<<<<<< HEAD
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, BarChart, Database, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, CheckCircle, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
=======
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';
>>>>>>> origin/main

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
<<<<<<< HEAD
  // AI Services Data
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data insights' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Streamline workflows' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Intelligent conversations' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data-driven insights' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Financial technology' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce optimization' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process optimization' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' }
  ];
=======
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' }
  ]
>>>>>>> origin/main

  // IT Services Data
  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
<<<<<<< HEAD
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' },
    { name: 'Cloud-Native Development', url: '/cloud-native-development', description: 'Microservices & containers' },
    { name: 'AI Integration Services', url: '/ai-integration-services', description: 'AI model integration' },
    { name: 'Blockchain Development', url: '/blockchain-development', description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', url: '/iot-development', description: 'Connected device solutions' }
  ];

  // Micro SAAS Services Data
  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence', price: '$99/mo' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support', price: '$149/mo' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring', price: '$199/mo' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery', price: '$79/mo' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation', price: '$129/mo' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM', price: '$179/mo' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation', price: '$89/mo' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management', price: '$119/mo' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing', price: '$69/mo' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation', price: '$49/mo' },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation', price: '$159/mo' },
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', description: 'Social media management', price: '$79/mo' },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing', price: '$199/mo' },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', description: 'Advanced translation', price: '$89/mo' },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', description: 'Intelligent code review', price: '$139/mo' },
    { name: 'Zion Customer Insights Pro', url: '/zion-customer-insights', description: 'Customer analytics', price: '$169/mo' }
  ];

=======
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' }
  ]

>>>>>>> origin/main
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
<<<<<<< HEAD
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

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
=======
  ]

>>>>>>> cursor/website-audit-and-update-with-deployment-635f
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a to="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a to="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
>>>>>>> origin/main
            </div>
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link to={service.url} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
>>>>>>> origin/main
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
<<<<<<< HEAD
                <Link 
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
=======
<<<<<<< HEAD
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Mobile Development
=======
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
>>>>>>> origin/main
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
=======
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link to={service.url} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
>>>>>>> origin/main
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
<<<<<<< HEAD
                <Link 
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All IT Services →
=======
                <Link to="/it-services" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium">
                  View All IT Services →
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
>>>>>>> origin/main
                </Link>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name} - {service.price}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Micro SAAS →
=======
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Contact
>>>>>>> origin/main
                </Link>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 mt-6 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
=======
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Sitemap
                </Link>
              </li>
=======
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
>>>>>>> origin/main
                    {link.name}
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <Link 
<<<<<<< HEAD
              to="/consultation" 
=======
              to="/contact" 
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
>>>>>>> origin/main
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
});

Footer.displayName = 'Footer';
export default Footer;
=======
<<<<<<< HEAD
}

export default Footer
=======
});

Footer.displayName = 'Footer';

export default Footer;
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
>>>>>>> origin/main
