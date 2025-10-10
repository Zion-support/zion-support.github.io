'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, 
  CheckCircle, ArrowRight, Star, Clock, Users, TrendingUp, Settings, 
  Target, Heart, FileText, Cpu, Link, Server, Cloud, Database, 
  Smartphone, Lock, Globe, DollarSign, Calendar, Mail, Phone, 
  MapPin, Search, Filter, SortAsc, Download, Upload, Share2, 
  Copy, Edit, Trash2, Plus, Minus, X, Check, AlertTriangle, 
  Info, Play, Pause, Stop, SkipForward, SkipBack, Volume2, 
  VolumeX, Camera, Video, Image, Music, File, Folder, Archive, 
  Bookmark, Tag, Flag, Pin, Compass, Navigation, Map, Home, 
  Building, Car, Plane, Train, Ship, Bike, Walk, Run, Activity, 
  Pulse, Grid, Award, Rocket, Layers, Workflow, BarChart3, 
  MessageSquare as Chat, Headphones, HardDrive, Printer, Router,
  Package, Monitor, Wifi, Printer as Print, Router as Gateway,
  Package as Box, Award as Trophy, Rocket as Launch, Layers as Stack,
  Workflow as Process, BarChart3 as Analytics, MessageSquare as ChatIcon,
  Headphones as Support, Monitor as Screen, HardDrive as Storage,
  Wifi as Network, Printer as PrintIcon, Router as GatewayIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Grid, color: 'from-cyan-500 to-blue-600' },
    { id: 'conversational', name: 'Conversational AI', icon: MessageSquare, color: 'from-purple-500 to-pink-600' },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye, color: 'from-green-500 to-emerald-600' },
    { id: 'analytics', name: 'AI Analytics', icon: BarChart, color: 'from-orange-500 to-red-600' },
    { id: 'automation', name: 'AI Automation', icon: Zap, color: 'from-yellow-500 to-orange-600' },
    { id: 'content', name: 'Content AI', icon: FileText, color: 'from-indigo-500 to-purple-600' },
    { id: 'healthcare', name: 'Healthcare AI', icon: Heart, color: 'from-pink-500 to-rose-600' },
    { id: 'finance', name: 'Financial AI', icon: DollarSign, color: 'from-green-600 to-teal-600' },
    { id: 'security', name: 'AI Security', icon: Shield, color: 'from-red-500 to-pink-600' },
    { id: 'edge', name: 'Edge AI', icon: Cpu, color: 'from-blue-500 to-cyan-600' }
  ];

  const services = [
    // Conversational AI
    {
      id: 'ai-chatbots-enterprise',
      name: 'AI Enterprise Chatbots',
      description: 'Advanced conversational AI with enterprise-grade security, multi-language support, and seamless human handoff.',
      price: '$499/month',
      marketPrice: '$999-2999/month',
      features: [
        'Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration',
        'Real-time learning', 'Voice integration', 'Knowledge base management', 'Analytics dashboard',
        'Custom training', 'API integration', 'Security compliance', 'Scalable architecture'
      ],
      benefits: [
        'Reduce support costs by 70%', '24/7 availability', 'Instant responses', 'Scalable solutions',
        'Better customer satisfaction', 'Reduced response time', 'Multi-channel support'
      ],
      category: 'conversational',
      popular: true,
      icon: MessageSquare,
      link: 'https://ziontechgroup.com/ai-chatbots-enterprise',
      rating: 4.9,
      reviews: 1247
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      description: 'Enterprise-grade voice AI with speech recognition, synthesis, and natural conversation capabilities.',
      price: '$399/month',
      marketPrice: '$799-1999/month',
      features: [
        'Speech-to-text conversion', 'Text-to-speech synthesis', 'Voice biometrics', 'Call analytics',
        'Multi-language support', 'Real-time transcription', 'Voice emotion analysis', 'Custom voice training',
        'Integration APIs', 'Security features', 'Analytics dashboard', 'Scalable infrastructure'
      ],
      benefits: [
        'Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support',
        'Better user experience', 'Reduced manual work', '24/7 voice support'
      ],
      category: 'conversational',
      popular: true,
      icon: Mic,
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      rating: 4.8,
      reviews: 892
    },
    {
      id: 'ai-conversational-ai',
      name: 'AI Conversational AI Platform',
      description: 'Advanced conversational AI platform with context awareness, memory, and intelligent responses.',
      price: '$599/month',
      marketPrice: '$1199-2999/month',
      features: [
        'Context awareness', 'Memory management', 'Intent recognition', 'Entity extraction',
        'Conversation flow management', 'Multi-turn conversations', 'Emotion detection', 'Personality customization',
        'Integration capabilities', 'Analytics and insights', 'A/B testing', 'Custom training'
      ],
      benefits: [
        'More natural conversations', 'Better user engagement', 'Contextual responses', 'Improved satisfaction',
        'Reduced confusion', 'Better problem solving', 'Personalized interactions'
      ],
      category: 'conversational',
      popular: false,
      icon: Chat,
      link: 'https://ziontechgroup.com/ai-conversational-ai',
      rating: 4.7,
      reviews: 634
    },

    // Computer Vision
    {
      id: 'ai-computer-vision-pro',
      name: 'AI Computer Vision Pro',
      description: 'Advanced image and video analysis with object detection, facial recognition, and real-time processing.',
      price: '$699/month',
      marketPrice: '$1399-3999/month',
      features: [
        'Object detection and recognition', 'Facial recognition systems', 'Quality control automation',
        'Video analytics', 'Real-time processing', 'Medical image analysis', 'Autonomous vehicle vision',
        'Industrial inspection', 'Security monitoring', 'Custom model training', 'API integration'
      ],
      benefits: [
        'Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction',
        'Improved accuracy', 'Faster processing', 'Better decision making'
      ],
      category: 'computer-vision',
      popular: true,
      icon: Eye,
      link: 'https://ziontechgroup.com/ai-computer-vision-pro',
      rating: 4.9,
      reviews: 1156
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Generation',
      description: 'AI-powered 3D content creation with automated modeling, texturing, and animation capabilities.',
      price: '$899/month',
      marketPrice: '$1799-4999/month',
      features: [
        '3D model generation', 'Texture synthesis', 'Animation creation', 'Scene composition',
        'Lighting optimization', 'Material generation', 'Rigging automation', 'Motion capture',
        'VR/AR content', 'Game asset creation', 'Architectural visualization', 'Product design'
      ],
      benefits: [
        'Faster 3D content creation', 'Reduced production costs', 'Consistent quality', 'Creative possibilities',
        'Time savings', 'Professional results', 'Scalable production'
      ],
      category: 'computer-vision',
      popular: false,
      icon: Box,
      link: 'https://ziontechgroup.com/ai-3d-generation',
      rating: 4.6,
      reviews: 456
    },
    {
      id: 'ai-holographic-workspace',
      name: 'AI Holographic Workspace',
      description: 'Immersive holographic work environments with AI-powered collaboration and visualization tools.',
      price: '$1999/month',
      marketPrice: '$3999-9999/month',
      features: [
        'Holographic displays', '3D collaboration', 'Gesture recognition', 'Spatial computing',
        'Virtual meetings', 'Data visualization', 'Design tools', 'Training simulations',
        'Remote collaboration', 'Immersive presentations', 'AR/VR integration', 'AI assistance'
      ],
      benefits: [
        'Immersive work experience', 'Better collaboration', 'Enhanced creativity', 'Remote work solutions',
        'Training effectiveness', 'Data visualization', 'Innovative presentations'
      ],
      category: 'computer-vision',
      popular: false,
      icon: Monitor,
      link: 'https://ziontechgroup.com/ai-holographic-workspace',
      rating: 4.8,
      reviews: 234
    },

    // AI Analytics
    {
      id: 'ai-analytics-pro',
      name: 'AI Analytics Pro',
      description: 'Advanced business intelligence with predictive analytics, real-time insights, and automated reporting.',
      price: '$599/month',
      marketPrice: '$1199-2999/month',
      features: [
        'Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Anomaly detection',
        'Custom data models', 'Machine learning insights', 'Trend analysis', 'Forecasting',
        'Data visualization', 'KPI tracking', 'ROI analysis', 'Performance optimization'
      ],
      benefits: [
        'Data-driven decisions', 'Predictive forecasting', 'Automated reporting', 'ROI optimization',
        'Better insights', 'Faster analysis', 'Competitive advantage'
      ],
      category: 'analytics',
      popular: true,
      icon: BarChart,
      link: 'https://ziontechgroup.com/ai-analytics-pro',
      rating: 4.8,
      reviews: 978
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling and forecasting for business intelligence and decision making.',
      price: '$799/month',
      marketPrice: '$1599-3999/month',
      features: [
        'Predictive modeling', 'Time series forecasting', 'Anomaly detection', 'Customer lifetime value prediction',
        'Churn prediction', 'Sales forecasting', 'Risk assessment', 'Performance optimization',
        'Machine learning models', 'Data preprocessing', 'Model validation', 'Automated insights'
      ],
      benefits: [
        'Better predictions', 'Risk mitigation', 'Performance optimization', 'Data-driven decisions',
        'Competitive advantage', 'Cost savings', 'Improved planning'
      ],
      category: 'analytics',
      popular: true,
      icon: TrendingUp,
      link: 'https://ziontechgroup.com/ai-predictive-analytics',
      rating: 4.7,
      reviews: 743
    },
    {
      id: 'ai-sentiment-analysis',
      name: 'AI Sentiment Analysis',
      description: 'Advanced emotion detection and sentiment analysis for customer feedback and social media monitoring.',
      price: '$299/month',
      marketPrice: '$599-1499/month',
      features: [
        'Emotion detection', 'Sentiment scoring', 'Social media monitoring', 'Customer feedback analysis',
        'Brand reputation tracking', 'Trend analysis', 'Multi-language support', 'Real-time processing',
        'Custom models', 'API integration', 'Dashboard analytics', 'Alert system'
      ],
      benefits: [
        'Better customer insights', 'Brand monitoring', 'Improved customer service', 'Market intelligence',
        'Risk detection', 'Competitive analysis', 'Customer satisfaction'
      ],
      category: 'analytics',
      popular: false,
      icon: Heart,
      link: 'https://ziontechgroup.com/ai-sentiment-analysis',
      rating: 4.6,
      reviews: 567
    },

    // AI Automation
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows with minimal human intervention.',
      price: '$499/month',
      marketPrice: '$999-2499/month',
      features: [
        'Process mining', 'Workflow optimization', 'Task automation', 'Exception handling',
        'Performance monitoring', 'Integration hub', 'Custom triggers', 'Analytics dashboard',
        'Machine learning', 'Adaptive automation', 'Error handling', 'Scalable architecture'
      ],
      benefits: [
        'Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation',
        'Better productivity', 'Reduced manual work', 'Improved accuracy'
      ],
      category: 'automation',
      popular: true,
      icon: Zap,
      link: 'https://ziontechgroup.com/ai-workflow-automation',
      rating: 4.8,
      reviews: 856
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      description: 'Self-operating AI systems for robotics, vehicles, and industrial automation with minimal human oversight.',
      price: '$1999/month',
      marketPrice: '$3999-9999/month',
      features: [
        'Autonomous vehicle AI', 'Robotic process automation', 'Smart manufacturing systems',
        'Predictive maintenance AI', 'Autonomous drone operations', 'Smart city infrastructure',
        'Industrial IoT integration', 'Real-time decision making', 'Safety systems', 'Performance optimization'
      ],
      benefits: [
        '24/7 autonomous operation', 'Reduced human intervention', 'Improved efficiency', 'Cost optimization',
        'Better safety', 'Scalable operations', 'Innovation leadership'
      ],
      category: 'automation',
      popular: false,
      icon: Cpu,
      link: 'https://ziontechgroup.com/ai-autonomous-systems',
      rating: 4.9,
      reviews: 345
    },
    {
      id: 'ai-email-automation',
      name: 'AI Email Automation',
      description: 'Intelligent email marketing automation with AI-powered personalization, A/B testing, and behavioral triggers.',
      price: '$199/month',
      marketPrice: '$399-999/month',
      features: [
        'AI personalization', 'A/B testing', 'Behavioral triggers', 'Email templates',
        'List segmentation', 'Deliverability optimization', 'Analytics dashboard', 'Mobile optimization',
        'Drip campaigns', 'Lead nurturing', 'Performance tracking', 'Integration capabilities'
      ],
      benefits: [
        'Higher open rates', 'Better engagement', 'Automated campaigns', 'Better deliverability',
        'Time savings', 'Improved ROI', 'Personalized experience'
      ],
      category: 'automation',
      popular: true,
      icon: Mail,
      link: 'https://ziontechgroup.com/ai-email-automation',
      rating: 4.7,
      reviews: 692
    },

    // Content AI
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      description: 'Advanced content creation platform with multi-language support, SEO optimization, and brand voice customization.',
      price: '$399/month',
      marketPrice: '$799-1999/month',
      features: [
        'Multi-language content generation', 'SEO optimization', 'Brand voice customization',
        'Content scheduling', 'Plagiarism detection', 'Tone analysis', 'A/B testing', 'Content calendar',
        'Social media content', 'Blog posts', 'Email campaigns', 'Product descriptions'
      ],
      benefits: [
        'Save 80% content creation time', 'Increase SEO rankings', 'Consistent brand voice', 'Multi-platform publishing',
        'Better engagement', 'Cost savings', 'Scalable content'
      ],
      category: 'content',
      popular: true,
      icon: FileText,
      link: 'https://ziontechgroup.com/ai-content-generation-pro',
      rating: 4.8,
      reviews: 1124
    },
    {
      id: 'ai-video-generation',
      name: 'AI Video Generation',
      description: 'AI-powered video creation with automated editing, voice synthesis, and content optimization.',
      price: '$599/month',
      marketPrice: '$1199-2999/month',
      features: [
        'Automated video editing', 'Voice synthesis', 'Content optimization', 'Template library',
        'Multi-format export', 'Real-time preview', 'Custom animations', 'Text-to-video',
        'Music generation', 'Subtitle generation', 'Brand customization', 'Analytics tracking'
      ],
      benefits: [
        'Faster video production', 'Professional quality', 'Cost savings', 'Scalable creation',
        'Better engagement', 'Consistent branding', 'Time efficiency'
      ],
      category: 'content',
      popular: false,
      icon: Video,
      link: 'https://ziontechgroup.com/ai-video-generation',
      rating: 4.6,
      reviews: 456
    },
    {
      id: 'ai-content-moderation',
      name: 'AI Content Moderation',
      description: 'Automated content filtering and moderation with AI-powered detection of inappropriate or harmful content.',
      price: '$299/month',
      marketPrice: '$599-1499/month',
      features: [
        'Automated content filtering', 'Inappropriate content detection', 'Spam prevention',
        'Hate speech detection', 'Image moderation', 'Video content analysis', 'Real-time processing',
        'Custom rules', 'API integration', 'Analytics dashboard', 'Compliance reporting'
      ],
      benefits: [
        'Safer platforms', 'Reduced manual moderation', 'Faster response times', 'Better compliance',
        'Cost savings', 'Scalable moderation', 'Consistent enforcement'
      ],
      category: 'content',
      popular: false,
      icon: Shield,
      link: 'https://ziontechgroup.com/ai-content-moderation',
      rating: 4.7,
      reviews: 789
    },

    // Healthcare AI
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical AI for diagnosis assistance, drug discovery, and patient care optimization with regulatory compliance.',
      price: '$1999/month',
      marketPrice: '$3999-9999/month',
      features: [
        'Medical image analysis', 'Drug discovery algorithms', 'Patient risk assessment', 'Treatment recommendations',
        'Clinical trial optimization', 'Diagnostic assistance', 'Patient monitoring', 'Drug interaction checking',
        'Regulatory compliance', 'HIPAA compliance', 'Medical record analysis', 'Predictive health modeling'
      ],
      benefits: [
        'Improved diagnosis accuracy', 'Faster drug development', 'Better patient outcomes', 'Cost reduction',
        'Faster treatment decisions', 'Reduced medical errors', 'Better patient care'
      ],
      category: 'healthcare',
      popular: true,
      icon: Heart,
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
      rating: 4.9,
      reviews: 567
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Pro',
      description: 'Advanced AI for pharmaceutical research, drug discovery, and clinical trial optimization.',
      price: '$4999/month',
      marketPrice: '$9999-29999/month',
      features: [
        'Molecular modeling', 'Drug-target interaction prediction', 'Clinical trial design', 'Toxicity prediction',
        'Drug repurposing', 'Biomarker discovery', 'Pharmacokinetics modeling', 'Regulatory pathway analysis',
        'Patent analysis', 'Market prediction', 'Collaboration tools', 'Research automation'
      ],
      benefits: [
        'Faster drug development', 'Reduced research costs', 'Better success rates', 'Innovation acceleration',
        'Risk reduction', 'Competitive advantage', 'Life-saving discoveries'
      ],
      category: 'healthcare',
      popular: false,
      icon: Heart,
      link: 'https://ziontechgroup.com/ai-drug-discovery-pro',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 'ai-clinical-trials',
      name: 'AI Clinical Trials Optimization',
      description: 'AI-powered clinical trial design, patient recruitment, and outcome prediction for pharmaceutical research.',
      price: '$2999/month',
      marketPrice: '$5999-14999/month',
      features: [
        'Trial design optimization', 'Patient recruitment', 'Outcome prediction', 'Risk assessment',
        'Protocol optimization', 'Site selection', 'Patient matching', 'Adverse event prediction',
        'Regulatory compliance', 'Data analysis', 'Reporting automation', 'Collaboration tools'
      ],
      benefits: [
        'Faster trial completion', 'Better patient outcomes', 'Reduced costs', 'Improved success rates',
        'Better patient matching', 'Risk mitigation', 'Regulatory compliance'
      ],
      category: 'healthcare',
      popular: false,
      icon: Calendar,
      link: 'https://ziontechgroup.com/ai-clinical-trials-optimization',
      rating: 4.7,
      reviews: 156
    },

    // Financial AI
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection Pro',
      description: 'Advanced AI for financial fraud detection, risk assessment, and compliance monitoring.',
      price: '$799/month',
      marketPrice: '$1599-3999/month',
      features: [
        'Real-time fraud detection', 'Risk assessment', 'Transaction monitoring', 'Pattern recognition',
        'Anomaly detection', 'Machine learning models', 'Compliance reporting', 'Alert systems',
        'API integration', 'Custom rules', 'Analytics dashboard', 'Regulatory compliance'
      ],
      benefits: [
        'Reduced fraud losses', 'Better risk management', 'Compliance automation', 'Real-time protection',
        'Cost savings', 'Better customer trust', 'Competitive advantage'
      ],
      category: 'finance',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/ai-fraud-detection-pro',
      rating: 4.9,
      reviews: 892
    },
    {
      id: 'ai-algorithmic-trading',
      name: 'AI Algorithmic Trading',
      description: 'AI-powered algorithmic trading systems with market analysis, risk management, and automated execution.',
      price: '$1999/month',
      marketPrice: '$3999-9999/month',
      features: [
        'Market analysis', 'Trading algorithms', 'Risk management', 'Portfolio optimization',
        'Real-time execution', 'Backtesting', 'Performance analytics', 'Custom strategies',
        'API integration', 'Compliance monitoring', 'Risk controls', 'Reporting tools'
      ],
      benefits: [
        'Better trading performance', 'Risk mitigation', 'Automated execution', '24/7 trading',
        'Data-driven decisions', 'Reduced emotions', 'Scalable strategies'
      ],
      category: 'finance',
      popular: false,
      icon: TrendingUp,
      link: 'https://ziontechgroup.com/ai-algorithmic-trading',
      rating: 4.8,
      reviews: 456
    },
    {
      id: 'ai-credit-scoring',
      name: 'AI Credit Scoring',
      description: 'Advanced AI for credit risk assessment, loan approval, and financial decision making.',
      price: '$599/month',
      marketPrice: '$1199-2999/month',
      features: [
        'Credit risk assessment', 'Loan approval automation', 'Alternative data analysis', 'Behavioral scoring',
        'Real-time decisions', 'Regulatory compliance', 'Model explainability', 'API integration',
        'Custom models', 'Performance monitoring', 'Audit trails', 'Reporting tools'
      ],
      benefits: [
        'Better risk assessment', 'Faster decisions', 'Reduced defaults', 'Compliance automation',
        'Cost savings', 'Better customer experience', 'Competitive advantage'
      ],
      category: 'finance',
      popular: true,
      icon: DollarSign,
      link: 'https://ziontechgroup.com/ai-credit-scoring',
      rating: 4.7,
      reviews: 634
    },

    // AI Security
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered security solutions with threat detection, prevention, and automated response.',
      price: '$999/month',
      marketPrice: '$1999-4999/month',
      features: [
        'Behavioral anomaly detection', 'Threat intelligence analysis', 'Automated incident response',
        'Vulnerability assessment', 'Security orchestration', 'Real-time threat monitoring',
        'AI-powered risk scoring', 'Automated security patching', 'Compliance monitoring', 'Forensic analysis'
      ],
      benefits: [
        'Proactive threat detection', 'Faster incident response', 'Reduced security risks', 'Compliance automation',
        'Cost savings', 'Better protection', '24/7 monitoring'
      ],
      category: 'security',
      popular: true,
      icon: Shield,
      link: 'https://ziontechgroup.com/ai-cybersecurity-suite',
      rating: 4.9,
      reviews: 1156
    },
    {
      id: 'ai-threat-hunting',
      name: 'AI Threat Hunting',
      description: 'Advanced AI for proactive threat hunting, malware detection, and security intelligence.',
      price: '$1299/month',
      marketPrice: '$2599-5999/month',
      features: [
        'Proactive threat hunting', 'Malware detection', 'Security intelligence', 'Behavioral analysis',
        'Network monitoring', 'Endpoint protection', 'Incident investigation', 'Threat correlation',
        'Custom rules', 'API integration', 'Analytics dashboard', 'Reporting tools'
      ],
      benefits: [
        'Proactive security', 'Better threat detection', 'Faster response', 'Reduced risks',
        'Cost savings', 'Better protection', 'Competitive advantage'
      ],
      category: 'security',
      popular: false,
      icon: Search,
      link: 'https://ziontechgroup.com/ai-threat-hunting',
      rating: 4.8,
      reviews: 567
    },
    {
      id: 'ai-compliance-automation',
      name: 'AI Compliance Automation',
      description: 'Automated compliance management with regulatory tracking, audit preparation, and risk assessment.',
      price: '$799/month',
      marketPrice: '$1599-3999/month',
      features: [
        'Regulatory tracking', 'Audit preparation', 'Risk assessment', 'Document management',
        'Training modules', 'Reporting tools', 'Alert system', 'Integration capabilities',
        'Compliance monitoring', 'Policy management', 'Audit trails', 'Custom workflows'
      ],
      benefits: [
        'Reduced compliance risks', 'Automated reporting', 'Better audit preparation', 'Cost savings',
        'Time efficiency', 'Better compliance', 'Risk mitigation'
      ],
      category: 'security',
      popular: false,
      icon: CheckCircle,
      link: 'https://ziontechgroup.com/ai-compliance-automation',
      rating: 4.7,
      reviews: 423
    },

    // Edge AI
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Distributed AI processing for real-time decision making at the edge with low latency and offline capability.',
      price: '$899/month',
      marketPrice: '$1799-3999/month',
      features: [
        'Edge AI model deployment', 'Real-time processing', 'Low-latency inference', 'Offline capability',
        'Resource optimization', 'IoT device integration', 'Predictive maintenance', 'Energy efficiency optimization',
        'Distributed training', 'Model synchronization', 'Edge analytics', 'Custom deployment'
      ],
      benefits: [
        'Ultra-low latency', 'Offline operation', 'Reduced bandwidth usage', 'Real-time decisions',
        'Better performance', 'Cost savings', 'Scalable deployment'
      ],
      category: 'edge',
      popular: true,
      icon: Cpu,
      link: 'https://ziontechgroup.com/ai-edge-computing',
      rating: 4.8,
      reviews: 789
    },
    {
      id: 'ai-iot-analytics',
      name: 'AI IoT Analytics',
      description: 'AI-powered analytics for IoT devices with real-time monitoring, predictive maintenance, and optimization.',
      price: '$599/month',
      marketPrice: '$1199-2999/month',
      features: [
        'IoT data analysis', 'Predictive maintenance', 'Real-time monitoring', 'Device optimization',
        'Anomaly detection', 'Performance analytics', 'Energy optimization', 'Fault prediction',
        'Custom dashboards', 'API integration', 'Alert systems', 'Reporting tools'
      ],
      benefits: [
        'Better device performance', 'Reduced maintenance costs', 'Improved efficiency', 'Predictive insights',
        'Cost savings', 'Better reliability', 'Optimized operations'
      ],
      category: 'edge',
      popular: false,
      icon: Wifi,
      link: 'https://ziontechgroup.com/ai-iot-analytics',
      rating: 4.6,
      reviews: 456
    },
    {
      id: 'ai-5g-optimization',
      name: 'AI 5G Optimization',
      description: 'AI-powered 5G network optimization with intelligent resource allocation and performance enhancement.',
      price: '$1999/month',
      marketPrice: '$3999-9999/month',
      features: [
        'Network optimization', 'Resource allocation', 'Performance enhancement', 'Traffic management',
        'Quality of service', 'Energy optimization', 'Predictive maintenance', 'Real-time adaptation',
        'Custom algorithms', 'API integration', 'Analytics dashboard', 'Monitoring tools'
      ],
      benefits: [
        'Better network performance', 'Reduced costs', 'Improved efficiency', 'Better user experience',
        'Scalable optimization', 'Competitive advantage', 'Future-ready technology'
      ],
      category: 'edge',
      popular: false,
      icon: Wifi,
      link: 'https://ziontechgroup.com/ai-5g-optimization',
      rating: 4.7,
      reviews: 234
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const features = [
    {
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security with encryption, compliance, and audit trails.',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Real-Time Processing',
      description: 'Ultra-fast AI processing with real-time insights and responses.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Server,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service.',
      icon: Headphones,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems and workflows.',
      icon: Link,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and insights for data-driven decisions.',
      icon: BarChart,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain },
    { label: 'Enterprise Clients', value: '1000+', icon: Building },
    { label: 'Countries Served', value: '150+', icon: Globe },
    { label: 'Uptime', value: '99.9%', icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group - Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of AI services including conversational AI, computer vision, analytics, automation, and more. Enterprise-grade solutions with real-time processing and 24/7 support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, conversational AI, computer vision, AI analytics, AI automation, healthcare AI, financial AI, AI security" />
        <meta property="og:title" content="AI Services | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for enterprise with conversational AI, computer vision, analytics, and automation. 99.9% uptime and 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">30+ AI Services Available</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of AI services. From conversational AI to computer vision, 
                we provide enterprise-grade solutions that scale with your growth and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedCategory === 'all' ? 'All AI Services' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-400 text-lg">
                {filteredServices.length} services found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm font-medium">Save up to 50%</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Try Free Trial
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="w-full border border-cyan-500/30 text-cyan-400 py-2 px-4 rounded-xl font-medium hover:bg-cyan-500/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services are designed with enterprise-grade features, 
                real-time processing, and seamless integration capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of enterprise-grade AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AiServicesPage;