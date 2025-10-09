<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, MessageSquare, Eye, Bot, Share2, Mail as EmailIcon, BarChart3, Projector, Headphones } from 'lucide-react';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5

=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
const Navigation: React.FC = () => {
=======
'use client';
import React, { useState, useEffect, memo } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

<<<<<<< HEAD
  const serviceCategories = [
    {
<<<<<<< HEAD
=======
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', icon: '🤖', popular: true },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', icon: '📢', popular: true },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', icon: '⚙️', popular: true },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', icon: '🏥', popular: true },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', icon: '💰', popular: true },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', icon: '📊', popular: true },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', icon: '🔐', popular: true },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', icon: '🔄', popular: false },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service', icon: '💬', popular: false },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes', icon: '📈', popular: false },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', icon: '📊', popular: false },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation', icon: '🎯', popular: false }
      ]
    },
    {
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: '✍️', popular: false },
<<<<<<< HEAD
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization', icon: '🎯', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
<<<<<<< HEAD
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video creation' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: 'AI 3D modeling' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion solutions' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'AI fitness training' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'AI email management' }
=======
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI-driven SEO optimization', icon: '🎯', popular: false },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI-powered writing tool', icon: '✍️', popular: false },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-assisted app development', icon: '📱', popular: false },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI-powered design tool', icon: '🎨', popular: false },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis', icon: '🎤', popular: false }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions' },
        { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' },
        { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D' },
        { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI at the edge' },
        { name: 'Machine Learning Models', path: '/machine-learning-models', description: 'Custom ML development' },
        { name: 'Computer Vision', path: '/computer-vision', description: 'Image recognition & analysis' },
        { name: 'Natural Language Processing', path: '/natural-language-processing', description: 'Text & language AI' },
        { name: 'AI Chatbots & Virtual Assistants', path: '/ai-chatbots-virtual-assistants', description: 'Conversational AI' },
        { name: 'Predictive Analytics', path: '/predictive-analytics', description: 'Forecasting & modeling' },
        { name: 'AI Recommendation Engines', path: '/ai-recommendation-engines', description: 'Personalized suggestions' }
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud solutions' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-administration', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
<<<<<<< HEAD
=======
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' },
        { name: 'IT Training', path: '/it-training', description: 'Staff development' },
        { name: 'IT Project Management', path: '/it-project-management', description: 'IT project delivery' },
        { name: 'Backup & Recovery', path: '/backup-recovery', description: 'Data protection services' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale IT solutions' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure design' },
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
<<<<<<< HEAD
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
=======
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration and optimization', icon: Cloud },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions', icon: Shield },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Streamlined development workflows', icon: Settings },
        { name: 'Database Services', path: '/database', description: 'Database design and optimization', icon: Database },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise IT infrastructure', icon: Cpu },
        { name: 'Network Services', path: '/networking', description: 'Network design and management', icon: Globe },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', icon: BarChart },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance solutions', icon: CheckSquare }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
=======
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' },
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
        { name: 'Cybersecurity Suite', path: '/cybersecurity-suite', description: 'Advanced security solutions' },
        { name: 'Performance Optimization', path: '/performance-optimization', description: 'System tuning' },
        { name: 'Global IT Services', path: '/global-it-services', description: 'Worldwide IT support' },
<<<<<<< HEAD
        { name: 'IT Training & Certification', path: '/it-training-certification', description: 'Professional development' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud infrastructure' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure' },
        { name: 'Security', path: '/security', description: 'Security solutions' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
=======
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', icon: '💻', popular: true },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup', icon: '☁️', popular: true },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', icon: '🔒', popular: true },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation', icon: '⚙️', popular: true },
        { name: 'Database Management', path: '/database-management', description: 'Database management', icon: '🗄️', popular: true },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure', icon: '🌐', popular: false },
        { name: 'System Administration', path: '/system-administration', description: 'System management', icon: '⚙️', popular: false },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning', icon: '💡', popular: false },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management', icon: '🛠️', popular: false },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development', icon: '🎓', popular: false }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
=======
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ AI-powered tools' },
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent customer management' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'Drag-and-drop app builder' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Social media automation' },
        { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-assistant', description: 'E-commerce optimization' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI-powered design tools' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Financial Planner', path: '/ai-financial-planner', description: 'Financial planning & analysis' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing tools' },
        { name: 'AI Code Generator', path: '/ai-code-generator', description: 'AI-assisted coding' },
        { name: 'AI Video Creator', path: '/ai-video-creator', description: 'Automated video production' },
        { name: 'AI Music Composer', path: '/ai-music-composition', description: 'AI music generation' },
        { name: 'AI App Builder', path: '/ai-app-builder', description: 'Native app development' },
        { name: 'AI Market Research', path: '/ai-market-research', description: 'Automated market analysis' },
        { name: 'AI Store Optimizer', path: '/ai-store-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Data Pipeline', path: '/ai-data-pipeline', description: 'Automated data processing' },
        { name: 'AI A/B Testing', path: '/ai-ab-testing', description: 'Intelligent testing' },
        { name: 'AI Website Builder', path: '/ai-website-builder', description: 'AI website creation' },
        { name: 'AI Live Chat', path: '/ai-live-chat', description: 'Intelligent customer chat' },
        { name: 'AI Growth Hacker', path: '/ai-growth-hacker', description: 'Automated growth strategies' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'Secure password management' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' },
        { name: 'AI Health Tracker', path: '/ai-health-tracker', description: 'Personal health monitoring' },
        { name: 'AI Learning Platform', path: '/ai-learning-platform', description: 'Personalized learning' },
        { name: 'AI Task Manager Pro', path: '/task-manager-pro', description: 'Intelligent task management' },
        { name: 'AI Expense Tracker', path: '/expense-tracker', description: 'Smart expense management' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Business Apps', path: '/business-apps', description: 'Business applications' },
        { name: 'AI Productivity Tools', path: '/productivity', description: 'Productivity suite' },
        { name: 'AI Marketing Tools', path: '/marketing-tools', description: 'Marketing suite' },
        { name: 'AI Developer Tools', path: '/developer-tools', description: 'Development tools' },
        { name: 'AI Analytics Tools', path: '/analytics-tools', description: 'Analytics suite' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
    }
<<<<<<< HEAD
=======
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-generation quantum algorithms', icon: '⚛️' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices and edge solutions', icon: '🌐' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent robotic solutions', icon: '🦾' },
        { name: 'Business Apps', path: '/business-apps', description: 'Custom business applications', icon: '📱' }
=======
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '🌐', popular: true },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights', icon: '📊', popular: false },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics', icon: '🤖', popular: false },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: false },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: false }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
      ]
    }
=======
  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Core AI Solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-Powered Marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process Automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, description: 'Medical AI Solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content Creation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data Intelligence' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Lock, description: 'Security AI' },
    { name: 'AI Mobile Apps', href: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users, description: 'AI Support' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target, description: 'Sales AI' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Workflow AI' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart, description: 'Data Viz AI' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Lead Gen AI' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: Code, description: 'Document AI' }
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '⚙️' },
<<<<<<< HEAD
    { name: 'Pricing', path: '/pricing', icon: '💰' },
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
=======
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
        { name: 'IT Training & Certification', path: '/it-training-certification', description: 'Professional development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ ready-to-use apps' },
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent customer management' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Social media automation' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'SEO optimization tools' },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Smart project management' },
        { name: 'AI Task Scheduler', path: '/ai-task-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Expense Tracker', path: '/ai-expense-tracker', description: 'Financial management' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Time Tracker', path: '/ai-time-tracker', description: 'Time management' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'Secure password management' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' },
        { name: 'AI Live Chat', path: '/ai-live-chat', description: 'Intelligent customer chat' },
        { name: 'AI Growth Hacker', path: '/ai-growth-hacker', description: 'Automated growth strategies' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum solutions' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT Solutions', path: '/iot-solutions', description: 'Internet of Things' },
        { name: 'AR/VR Development', path: '/ar-vr-development', description: 'Immersive experiences' },
        { name: 'Edge Computing', path: '/edge-computing', description: 'Distributed computing' },
        { name: '5G Solutions', path: '/5g-solutions', description: 'Next-gen connectivity' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About', href: '/about', icon: Users, description: 'Learn About Us' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success Stories' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get In Touch' },
    { name: 'Pricing', href: '/pricing', icon: Star, description: 'Our Plans' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest Insights' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized Solutions' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data Insights' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap, description: 'Self-Managing Systems' }
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
  ];
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
<<<<<<< HEAD
<<<<<<< HEAD
          <Link href="/" className="flex items-center space-x-2 group">
=======
          <a href="/" className="flex items-center space-x-2 group">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
=======
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
<<<<<<< HEAD
=======
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
          </Link>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
<<<<<<< HEAD
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

=======
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
            {/* Services Dropdown */}
            <div className="relative">
=======
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>

<<<<<<< HEAD
            {/* Services Dropdown */}
            <div className="relative">
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
<<<<<<< HEAD
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
=======
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
=======
            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Sparkles className="w-4 h-4" />
                <span>Emerging Tech</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
<<<<<<< HEAD
=======
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1 group"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                <span className="text-sm">⚙️</span>
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
              </button>
<<<<<<< HEAD
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                  <div className="grid grid-cols-2 gap-4">
=======
              {servicesOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-gray-900 rounded-xl shadow-2xl border border-cyan-500 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-sm font-semibold text-white">{category.title}</span>
                        </div>
<<<<<<< HEAD
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span>{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.services.slice(0, 4).map((service) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
                            <Link
                              key={service.name}
                              href={service.path}
                              className="block text-sm text-gray-600 hover:text-cyan-600 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
<<<<<<< HEAD
                          {category.services.length > 6 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 px-4">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center space-x-1"
                      onClick={closeAllMenus}
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
=======
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-sm font-semibold text-white">{category.title}</span>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <a
                                key={serviceIndex}
                                href={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">
                                  {service.description}
                                </div>
                              </a>
                            ))}
                            {category.services.length > 6 && (
                              <a
                                href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                                onClick={closeAllMenus}
                              >
                                View All →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4">
                      <a
                        href="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </a>
                    </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50">
                  <div className="grid grid-cols-3 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        All Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Micro SAAS Solutions
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        IT Services
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">AI Solutions</h3>
                      <Link to="/ai-marketing" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Marketing
                      </Link>
                      <Link to="/ai-automation" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Automation
                      </Link>
                      <Link to="/ai-healthcare" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Healthcare
                      </Link>
                      <Link to="/ai-fintech" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Fintech
                      </Link>
                      <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Data Analytics
                      </Link>
                      <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        AI Cybersecurity
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">Specialized</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Cybersecurity
                      </Link>
                      <Link to="/business-intelligence" className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded">
                        Business Intelligence
                      </Link>
                    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
                  </div>
=======
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-300">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                </div>
              )}
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <Link 
=======
            <a 
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>

            <Link href="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
              Case Studies
<<<<<<< HEAD
=======
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Case Studies
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
<<<<<<< HEAD
            <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
            <Link
=======
            </a>

            <a
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
<<<<<<< HEAD
            </Link>

            <Link
=======
            </a>

            <a
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
=======
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
              Contact
<<<<<<< HEAD
            </Link>

<<<<<<< HEAD
            {/* CTA Button */}
            <Link
=======
            </a>

            {/* CTA Button */}
            <a
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
<<<<<<< HEAD
            </Link>
=======
            </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
=======
          </div>
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Mobile menu */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
=======
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
=======
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5

              {/* Mobile AI Services */}
              <div>
                <button
<<<<<<< HEAD
                  onClick={() => setServicesOpen(!servicesOpen)}
=======
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
<<<<<<< HEAD
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
<<<<<<< HEAD
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
<<<<<<< HEAD
=======
                        <div className="space-y-1">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
=======
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <a
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
                              key={serviceIndex}
                              href={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
=======
                    {serviceCategories.map((category) => (
                      <div key={category.title}>
                        <div className="text-sm font-semibold text-gray-400 mb-1">{category.title}</div>
                        <div className="space-y-1">
                          {category.services.slice(0, 3).map((service) => (
                            <Link
                              key={service.name}
                              href={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                              onClick={closeAllMenus}
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
                            >
<<<<<<< HEAD
                              {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-1" />} {service.name}
                            </Link>
                          ))}
                          <Link
=======
                              {service.icon} {service.name}
                            </a>
                          ))}
                          <a
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
                            href="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          >
                            View All →
<<<<<<< HEAD
                          </Link>
=======
                          </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
                        </div>
                      </div>
=======
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>
              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                    ))}
                  </div>
<<<<<<< HEAD
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </div>
          </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="/contact"
              className="cyber-button px-4 py-2 text-sm font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
=======

              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>

              <Link href="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>

              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5

<<<<<<< HEAD
=======
                )}
              </div>

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
              <a
                href="tel:+13024640950"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Services</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-sm font-semibold text-white">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.path}
                          onClick={closeAllMenus}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        >
                          {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-2" />} {service.name}
                        </Link>
                      ))}
                    </div>
=======
              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                  </div>
                ))}
              </div>
<<<<<<< HEAD

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
=======
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors duration-300 py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-3 text-green-400 py-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
=======

              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
                </div>
                <a
                  href="/contact"
                  onClick={closeAllMenus}
                  className="cyber-button px-6 py-3 text-center block w-full"
                >
                  Get Started
                </a>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
            </div>
          </div>
=======
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-cyan-400 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/ai-marketing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Marketing
                  </Link>
                  <Link to="/ai-automation" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Automation
                  </Link>
                  <Link to="/ai-healthcare" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Healthcare
                  </Link>
                  <Link to="/ai-fintech" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Fintech
                  </Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Blog
              </Link>
              <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center">
                Contact Us
              </Link>
            </div>
          </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-22b1
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-05a6
=======
export default Navigation;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82c7
=======
});

Navigation.displayName = 'Navigation';
export default Navigation;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
export default Navigation;
>>>>>>> cursor/analyze-improve-and-deploy-application-15c5
=======
export default Navigation;
>>>>>>> cursor/website-audit-and-update-with-deployment-0a76
