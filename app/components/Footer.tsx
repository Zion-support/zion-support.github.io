<<<<<<< HEAD
import React, { memo } from "react";
import { Link } from "react-router-dom";
=======
'use client';

import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [

    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation' }
  ];

  const itServices = [

    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless migration' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Security Monitoring', url: '/security-monitoring', description: '24/7 security' },
    { name: 'Penetration Testing', url: '/penetration-testing', description: 'Security testing' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile applications' },
    { name: 'Web Development', url: '/web-development', description: 'Web applications' },
    { name: 'Process Automation', url: '/process-automation', description: 'Workflow automation' }
  ];

  const microSaasServices = [

    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer management' },
    { name: 'Security Monitoring Suite', url: '/security-monitoring-suite', description: 'Cybersecurity' },
    { name: 'Cloud Infrastructure Manager', url: '/cloud-infrastructure-manager', description: 'Cloud management' },
    { name: 'Email Marketing Automation', url: '/email-marketing-automation', description: 'Email marketing' },
    { name: 'Project Management Pro', url: '/project-management-pro', description: 'Project management' },
    { name: 'E-commerce Analytics Pro', url: '/ecommerce-analytics-pro', description: 'E-commerce analytics' },
    { name: 'AI Recruitment Assistant', url: '/ai-recruitment-assistant', description: 'HR & recruitment' },
    { name: 'Medical Records Manager', url: '/medical-records-manager', description: 'Healthcare' },
    { name: 'AI Accounting Assistant', url: '/ai-accounting-assistant', description: 'Finance & accounting' },
    { name: 'Property Management AI', url: '/property-management-ai', description: 'Real estate' },
    { name: 'Legal Document Manager', url: '/legal-document-manager', description: 'Legal & compliance' },
    { name: 'Online Learning Platform', url: '/online-learning-platform', description: 'Education' },
    { name: 'Supply Chain Optimizer', url: '/supply-chain-optimizer', description: 'Manufacturing' },
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation' }
  ];

  const emergingTech = [

    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' },
    { name: 'Robotics & Automation', url: '/robotics', description: 'Intelligent robotics' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: '5G Implementation', url: '/5g-implementation', description: '5G solutions' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D AI solutions' },
    { name: 'Holographic Workspace', url: '/ai-holographic-workspace', description: 'Holographic AI' }
  ];

  const companyLinks = [

    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [

    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST',
    emergency: '24/7 Emergency Support Available'
  };
>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b

const Footer: React.FC = memo(() => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Enhanced Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="cyber-grid-enhanced"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

      {/* Quantum Particles */}
      <div className="quantum-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Scan Lines */}
      <div className="scan-lines"></div>

      <div className="relative z-10 glass-card">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3
                className="text-2xl font-bold mb-6 holographic-text font-['Orbitron'] cyber-glitch"
                data-text="ZION TECH GROUP"
              >
                ZION TECH GROUP
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed matrix-text">
                Advanced AI and IT Solutions for the modern world. We help
                businesses transform through cutting-edge technology.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">📞</strong>{" "}
                  <a
                    href="tel:+13024640950"
                    className="hover:text-cyan-300 transition-colors neon-glow"
                  >
                    +1 302 464 0950
                  </a>
                </p>
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">✉️</strong>{" "}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </p>
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">📍</strong> 364 E Main
                  St STE 1008
                  <br />
                  Middletown DE 19709
                </p>
                <p className="flex items-center">
                  <strong className="text-cyan-400 mr-2">🌐</strong>{" "}
                  <a
                    href="https://ziontechgroup.com"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    https://ziontechgroup.com
                  </a>
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://ziontechgroup.com"
                  className="text-gray-300 hover:text-cyan-300 transition-colors neon-glow p-2 rounded-lg hover:bg-cyan-500/10"
                >
                  <span className="sr-only">Website</span>
                  <svg
                    className="h-6 w-6 hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-gradient holographic-text">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/ai-services"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-services"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-solutions"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    IT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Advanced Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cloud-infrastructure"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cybersecurity"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link
                    to="/data-analytics"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/web-development"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile-development"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/micro-saas-solutions"
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Micro SaaS Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">AI Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/ai-solutions"
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    AI Solutions Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-chatbot-builder"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Chatbot Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-document-processor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Document Processor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-form-builder"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Form Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-voice-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Voice Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-fraud-detection"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Fraud Detection
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-image-recognition"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Image Recognition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-lead-scoring"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Lead Scoring
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-predictive-maintenance"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Predictive Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-price-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Price Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-scheduling-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Scheduling Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-crm-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI CRM Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-data-visualizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Data Visualizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-email-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Email Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-content-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-social-media-manager"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Social Media Manager
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-video-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Video Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-translator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Translator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-legal-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Legal Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-medical-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Medical Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-education-tutor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Education Tutor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-real-estate-analyzer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Real Estate Analyzer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-supply-chain-optimizer"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Supply Chain Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-3d-model-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI 3D Model Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-audio-processor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Audio Processor
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Micro SaaS Tools</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/micro-saas-solutions"
                    className="text-gray-300 hover:text-white font-semibold"
                  >
                    Micro SaaS Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/social-media-scheduler"
                    className="text-gray-300 hover:text-white"
                  >
                    Social Media Scheduler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/expense-tracker-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Expense Tracker Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/task-manager-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Task Manager Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-content-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-translator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Translator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-video-generator"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Video Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-audio-processor"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Audio Processor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analytics-dashboard"
                    className="text-gray-300 hover:text-white"
                  >
                    Analytics Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/customer-support-hub"
                    className="text-gray-300 hover:text-white"
                  >
                    Customer Support Hub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Zion AI Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/zion-ai-chatbot-builder"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Chatbot Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-code-assistant"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Code Assistant
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-content-moderator"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Content Moderator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-customer-support-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Customer Support Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-workflow-automator-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Workflow Automator Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-email-marketing-pro"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Email Marketing Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-financial-forecaster"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Financial Forecaster
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-sales-predictor"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Sales Predictor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-translation-service"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Translation Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/zion-ai-voice-synthesis"
                    className="text-gray-300 hover:text-white"
                  >
                    Zion AI Voice Synthesis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Advanced Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/blockchain-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Blockchain Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/iot-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    IoT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/5g-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    5G Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quantum-computing-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Quantum Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/edge-computing-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Edge Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/augmented-reality-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Augmented Reality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/virtual-reality-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Virtual Reality
                  </Link>
                </li>
                <li>
                  <Link
                    to="/robotic-process-automation"
                    className="text-gray-300 hover:text-white"
                  >
                    Robotic Process Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/low-code-platform"
                    className="text-gray-300 hover:text-white"
                  >
                    Low-Code Platform
                  </Link>
                </li>
                <li>
                  <Link
                    to="/serverless-architecture"
                    className="text-gray-300 hover:text-white"
                  >
                    Serverless Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/container-orchestration"
                    className="text-gray-300 hover:text-white"
                  >
                    Container Orchestration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-infrastructure"
                    className="text-gray-300 hover:text-white"
                  >
                    AI Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/data-lake-solutions"
                    className="text-gray-300 hover:text-white"
                  >
                    Data Lake Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-300 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnerships"
                    className="text-gray-300 hover:text-white"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="text-gray-300 hover:text-white"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tutorials"
                    className="text-gray-300 hover:text-white"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-gray-300 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api-docs"
                    className="text-gray-300 hover:text-white"
                  >
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-300 hover:text-white"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className="text-gray-300 hover:text-white">
                    Live Demos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessibility"
                    className="text-gray-300 hover:text-white"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-gray-300 hover:text-white"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-cyan-500/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
                <p className="mb-2">
                  © 2025 Zion Tech Group. All rights reserved.
                </p>
                <p className="mb-2">
                  📞{" "}
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 (302) 464-0950
                  </a>
                </p>
                <p className="mb-2">
                  ✉️{" "}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

<<<<<<< HEAD
Footer.displayName = "Footer";

export default Footer;
=======
Footer.displayName = 'Footer';
export default Footer;
>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b
