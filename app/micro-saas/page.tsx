'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, 
  MessageSquare, Target, Rocket, Brain, Code, Mail, Smartphone, Search, Calendar,
  FileText, Settings, Globe, Lock, Database, Cpu, PieChart, CreditCard, Camera,
  Headphones, BookOpen, ShoppingCart, Home, Briefcase, Heart, Car, Plane, Gamepad2,
  Music, Video, Image, Download, Upload, Share2, Bell, Clock, MapPin, Phone,
  Eye, Edit, Trash2, Plus, Minus, X, Check, AlertTriangle, Info, HelpCircle
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice?: string;
  savings?: string;
  rating?: number;
  reviews?: number;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    // Productivity & Business Tools
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and custom reporting for data-driven decisions.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration', 'Data visualization', 'Automated insights', 'Team collaboration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$299/month',
      savings: '67%',
      rating: 4.9,
      reviews: 1247
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM Suite',
      description: 'Intelligent customer relationship management with automated lead scoring, personalized interactions, and sales forecasting.',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields', 'Pipeline management', 'Contact scoring', 'Deal tracking'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Productivity',
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.8,
      reviews: 892
    },
    {
      id: '3',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection with 24/7 surveillance and automated incident response.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response', 'Security alerts', 'Risk assessment', 'Audit trails'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security',
      marketPrice: '$599/month',
      savings: '67%',
      rating: 4.7,
      reviews: 456
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments with intelligent scaling.',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management', 'Performance monitoring', 'Cost alerts', 'Resource scheduling'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure',
      marketPrice: '$799/month',
      savings: '63%',
      rating: 4.6,
      reviews: 234
    },
    {
      id: '5',
      icon: Mail,
      title: 'AI Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-driven personalization, A/B testing, and comprehensive analytics.',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools', 'Personalization', 'Send time optimization', 'Deliverability tracking'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: true,
      category: 'Marketing',
      marketPrice: '$199/month',
      savings: '60%',
      rating: 4.8,
      reviews: 1567
    },
    {
      id: '6',
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution for 24/7 customer support with natural language processing and seamless human handoff.',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training', 'Sentiment analysis', 'Live chat integration', 'Escalation management'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'Support',
      marketPrice: '$299/month',
      savings: '57%',
      rating: 4.7,
      reviews: 789
    },
    {
      id: '7',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages with context awareness.',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation', 'Code review', 'Refactoring suggestions', 'Security scanning'],
      price: '$39/month',
      users: 'Up to 10 developers',
      popular: true,
      category: 'Development',
      marketPrice: '$99/month',
      savings: '61%',
      rating: 4.9,
      reviews: 2134
    },
    {
      id: '8',
      icon: Calendar,
      title: 'Smart Scheduler AI',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management for maximum productivity.',
      features: ['Calendar optimization', 'Meeting coordination', 'Time management', 'Auto-scheduling', 'Integration APIs', 'Conflict resolution', 'Time zone handling', 'Recurring events'],
      price: '$19/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$49/month',
      savings: '61%',
      rating: 4.6,
      reviews: 445
    },
    {
      id: '9',
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with AI-powered data extraction, classification, and intelligent workflow automation.',
      features: ['Document extraction', 'Data classification', 'Workflow automation', 'OCR technology', 'Template recognition', 'Batch processing', 'Quality control', 'Integration APIs'],
      price: '$89/month',
      users: 'Up to 1,000 documents/month',
      popular: false,
      category: 'Productivity',
      marketPrice: '$199/month',
      savings: '55%',
      rating: 4.5,
      reviews: 312
    },
    {
      id: '10',
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization with AI-powered keyword research, content suggestions, and ranking tracking.',
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis', 'Technical SEO', 'Local SEO', 'Schema markup', 'Performance monitoring'],
      price: '$49/month',
      users: 'Up to 5 websites',
      popular: true,
      category: 'Marketing',
      marketPrice: '$149/month',
      savings: '67%',
      rating: 4.8,
      reviews: 987
    },
    {
      id: '11',
      icon: Smartphone,
      title: 'Mobile App Builder AI',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment to app stores.',
      features: ['Drag-and-drop builder', 'AI code generation', 'Instant deployment', 'Cross-platform', 'App store publishing', 'Push notifications', 'Analytics integration', 'User management'],
      price: '$99/month',
      users: 'Up to 3 apps',
      popular: true,
      category: 'Development',
      marketPrice: '$299/month',
      savings: '67%',
      rating: 4.7,
      reviews: 654
    },
    {
      id: '12',
      icon: Globe,
      title: 'Landing Page Creator',
      description: 'Build high-converting landing pages with AI optimization, A/B testing, and conversion tracking for maximum ROI.',
      features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Conversion tracking', 'Mobile responsive', 'Template library', 'Analytics dashboard', 'Lead capture forms'],
      price: '$29/month',
      users: 'Up to 10 pages',
      popular: false,
      category: 'Marketing',
      marketPrice: '$79/month',
      savings: '63%',
      rating: 4.6,
      reviews: 523
    },
    {
      id: '13',
      icon: Settings,
      title: 'API Builder Pro',
      description: 'Create and manage APIs with AI assistance, documentation generation, testing tools, and version control.',
      features: ['API creation', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Authentication', 'Monitoring', 'Analytics'],
      price: '$59/month',
      users: 'Up to 20 APIs',
      popular: false,
      category: 'Development',
      marketPrice: '$149/month',
      savings: '60%',
      rating: 4.5,
      reviews: 234
    },
    {
      id: '14',
      icon: PieChart,
      title: 'Financial Analytics AI',
      description: 'Advanced financial analysis with AI-powered insights, forecasting, and automated reporting for better financial decisions.',
      features: ['Financial forecasting', 'Budget analysis', 'Cash flow tracking', 'Investment insights', 'Risk assessment', 'Automated reports', 'Tax optimization', 'Compliance monitoring'],
      price: '$79/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$199/month',
      savings: '60%',
      rating: 4.7,
      reviews: 456
    },
    {
      id: '15',
      icon: CreditCard,
      title: 'Payment Processor AI',
      description: 'Intelligent payment processing with fraud detection, automated reconciliation, and multi-currency support.',
      features: ['Fraud detection', 'Automated reconciliation', 'Multi-currency', 'Payment analytics', 'Chargeback management', 'Subscription billing', 'Invoice generation', 'Tax calculation'],
      price: '$149/month',
      users: 'Unlimited transactions',
      popular: true,
      category: 'Finance',
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.8,
      reviews: 1234
    },
    {
      id: '16',
      icon: Camera,
      title: 'AI Image Generator',
      description: 'Create stunning images with AI-powered generation, editing tools, and brand-consistent visual content.',
      features: ['AI image generation', 'Photo editing', 'Brand consistency', 'Template library', 'Batch processing', 'High resolution', 'Commercial license', 'API access'],
      price: '$35/month',
      users: 'Up to 500 images/month',
      popular: true,
      category: 'Design',
      marketPrice: '$99/month',
      savings: '65%',
      rating: 4.9,
      reviews: 1876
    },
    {
      id: '17',
      icon: Headphones,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration.',
      features: ['Voice recognition', 'Natural language processing', 'Multi-language support', 'Enterprise integration', 'Custom wake words', 'Conversation management', 'Analytics', 'API access'],
      price: '$199/month',
      users: 'Up to 1,000 interactions/month',
      popular: false,
      category: 'AI',
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.6,
      reviews: 345
    },
    {
      id: '18',
      icon: BookOpen,
      title: 'AI Learning Platform',
      description: 'Create personalized learning experiences with AI-powered content adaptation and student performance analytics.',
      features: ['Personalized learning', 'Content adaptation', 'Performance analytics', 'Learning paths', 'Progress tracking', 'Assessment tools', 'Certification', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 100 students',
      popular: false,
      category: 'Education',
      marketPrice: '$299/month',
      savings: '67%',
      rating: 4.7,
      reviews: 567
    },
    {
      id: '19',
      icon: ShoppingCart,
      title: 'E-commerce AI Optimizer',
      description: 'Optimize e-commerce performance with AI-powered product recommendations, pricing strategies, and inventory management.',
      features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer insights', 'Sales forecasting', 'A/B testing', 'Conversion optimization', 'Analytics dashboard'],
      price: '$179/month',
      users: 'Up to 10,000 products',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$499/month',
      savings: '64%',
      rating: 4.8,
      reviews: 789
    },
    {
      id: '20',
      icon: Home,
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Financial reporting', 'Lease management', 'Communication tools'],
      price: '$149/month',
      users: 'Up to 50 properties',
      popular: false,
      category: 'Real Estate',
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.6,
      reviews: 234
    },
    {
      id: '21',
      icon: Briefcase,
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Job posting optimization', 'Candidate scoring', 'Hiring analytics'],
      price: '$199/month',
      users: 'Up to 100 job postings/month',
      popular: true,
      category: 'HR',
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.7,
      reviews: 456
    },
    {
      id: '22',
      icon: Heart,
      title: 'Healthcare AI Assistant',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis.',
      features: ['HIPAA compliance', 'Data extraction', 'Medical analysis', 'Patient portal', 'Integration APIs', 'Appointment scheduling', 'Prescription management', 'Health monitoring'],
      price: '$299/month',
      users: 'Up to 1,000 patients',
      popular: false,
      category: 'Healthcare',
      marketPrice: '$799/month',
      savings: '63%',
      rating: 4.8,
      reviews: 123
    },
    {
      id: '23',
      icon: Car,
      title: 'Fleet Management AI',
      description: 'Optimize fleet operations with AI-powered route planning, maintenance scheduling, and driver performance analytics.',
      features: ['Route optimization', 'Maintenance scheduling', 'Driver analytics', 'Fuel optimization', 'GPS tracking', 'Performance monitoring', 'Cost analysis', 'Compliance tracking'],
      price: '$249/month',
      users: 'Up to 100 vehicles',
      popular: false,
      category: 'Transportation',
      marketPrice: '$599/month',
      savings: '58%',
      rating: 4.6,
      reviews: 189
    },
    {
      id: '24',
      icon: Plane,
      title: 'Travel AI Planner',
      description: 'Intelligent travel planning with AI-powered recommendations, booking optimization, and itinerary management.',
      features: ['Travel recommendations', 'Booking optimization', 'Itinerary management', 'Price alerts', 'Weather integration', 'Local insights', 'Expense tracking', 'Mobile app'],
      price: '$39/month',
      users: 'Up to 10 travelers',
      popular: false,
      category: 'Travel',
      marketPrice: '$99/month',
      savings: '61%',
      rating: 4.5,
      reviews: 267
    },
    {
      id: '25',
      icon: Gamepad2,
      title: 'Gaming Analytics AI',
      description: 'Advanced gaming analytics with player behavior analysis, performance optimization, and monetization insights.',
      features: ['Player analytics', 'Performance optimization', 'Monetization insights', 'A/B testing', 'Retention analysis', 'Revenue tracking', 'User segmentation', 'Real-time dashboards'],
      price: '$149/month',
      users: 'Up to 100,000 players',
      popular: false,
      category: 'Gaming',
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.7,
      reviews: 345
    },
    {
      id: '26',
      icon: Music,
      title: 'AI Music Composer',
      description: 'Create original music with AI-powered composition, arrangement, and production tools for content creators.',
      features: ['AI composition', 'Music arrangement', 'Production tools', 'Style adaptation', 'Royalty-free music', 'Export options', 'Collaboration tools', 'API access'],
      price: '$59/month',
      users: 'Unlimited tracks',
      popular: false,
      category: 'Creative',
      marketPrice: '$149/month',
      savings: '60%',
      rating: 4.6,
      reviews: 178
    },
    {
      id: '27',
      icon: Video,
      title: 'AI Video Editor',
      description: 'Automated video editing with AI-powered scene detection, auto-cropping, and intelligent content optimization.',
      features: ['Auto-editing', 'Scene detection', 'Auto-cropping', 'Content optimization', 'Template library', 'Batch processing', 'Export options', 'Cloud storage'],
      price: '$79/month',
      users: 'Up to 100 videos/month',
      popular: true,
      category: 'Creative',
      marketPrice: '$199/month',
      savings: '60%',
      rating: 4.8,
      reviews: 567
    },
    {
      id: '28',
      icon: Image,
      title: 'AI Photo Enhancer',
      description: 'Enhance photos with AI-powered upscaling, color correction, and automatic retouching for professional results.',
      features: ['AI upscaling', 'Color correction', 'Auto retouching', 'Background removal', 'Style transfer', 'Batch processing', 'High resolution', 'API access'],
      price: '$29/month',
      users: 'Up to 1,000 photos/month',
      popular: false,
      category: 'Creative',
      marketPrice: '$79/month',
      savings: '63%',
      rating: 4.7,
      reviews: 423
    },
    {
      id: '29',
      icon: Download,
      title: 'Cloud Storage AI',
      description: 'Intelligent cloud storage with AI-powered organization, duplicate detection, and automated backup management.',
      features: ['AI organization', 'Duplicate detection', 'Automated backup', 'File versioning', 'Search optimization', 'Sharing tools', 'Security encryption', 'Sync across devices'],
      price: '$19/month',
      users: 'Up to 1TB storage',
      popular: false,
      category: 'Storage',
      marketPrice: '$49/month',
      savings: '61%',
      rating: 4.5,
      reviews: 234
    },
    {
      id: '30',
      icon: Upload,
      title: 'File Transfer AI',
      description: 'Secure file transfer with AI-powered compression, encryption, and intelligent delivery optimization.',
      features: ['AI compression', 'End-to-end encryption', 'Delivery optimization', 'Progress tracking', 'Batch transfers', 'Resume capability', 'Speed optimization', 'Security scanning'],
      price: '$39/month',
      users: 'Unlimited transfers',
      popular: false,
      category: 'Storage',
      marketPrice: '$99/month',
      savings: '61%',
      rating: 4.6,
      reviews: 156
    },
    {
      id: '31',
      icon: Share2,
      title: 'Social Media AI',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics across platforms.',
      features: ['Content creation', 'Auto-scheduling', 'Performance analytics', 'Multi-platform', 'Engagement tracking', 'Hashtag optimization', 'Audience insights', 'Competitor analysis'],
      price: '$45/month',
      users: 'Up to 10 social accounts',
      popular: true,
      category: 'Social Media',
      marketPrice: '$129/month',
      savings: '65%',
      rating: 4.8,
      reviews: 1234
    },
    {
      id: '32',
      icon: Bell,
      title: 'Notification AI',
      description: 'Intelligent notification management with AI-powered timing optimization and personalized delivery strategies.',
      features: ['Timing optimization', 'Personalized delivery', 'Multi-channel support', 'A/B testing', 'Analytics dashboard', 'User segmentation', 'Delivery tracking', 'Performance insights'],
      price: '$25/month',
      users: 'Up to 100,000 notifications/month',
      popular: false,
      category: 'Communication',
      marketPrice: '$79/month',
      savings: '68%',
      rating: 4.6,
      reviews: 345
    },
    {
      id: '33',
      icon: Clock,
      title: 'Time Tracking AI',
      description: 'Advanced time tracking with AI-powered productivity analysis and automated timesheet generation.',
      features: ['AI productivity analysis', 'Automated timesheets', 'Project tracking', 'Team management', 'Reporting tools', 'Integration APIs', 'Mobile app', 'Offline sync'],
      price: '$15/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Productivity',
      marketPrice: '$39/month',
      savings: '62%',
      rating: 4.5,
      reviews: 567
    },
    {
      id: '34',
      icon: MapPin,
      title: 'Location Analytics AI',
      description: 'AI-powered location intelligence with foot traffic analysis, demographic insights, and market research.',
      features: ['Foot traffic analysis', 'Demographic insights', 'Market research', 'Competitor analysis', 'Location scoring', 'Heat maps', 'Trend analysis', 'API access'],
      price: '$199/month',
      users: 'Up to 50 locations',
      popular: false,
      category: 'Analytics',
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.7,
      reviews: 234
    },
    {
      id: '35',
      icon: Phone,
      title: 'AI Call Center',
      description: 'Intelligent call center solution with AI-powered routing, sentiment analysis, and automated call handling.',
      features: ['AI call routing', 'Sentiment analysis', 'Automated handling', 'Call recording', 'Analytics dashboard', 'Integration APIs', 'Multi-language', 'Quality monitoring'],
      price: '$299/month',
      users: 'Up to 50 agents',
      popular: true,
      category: 'Communication',
      marketPrice: '$799/month',
      savings: '63%',
      rating: 4.8,
      reviews: 456
    },
    {
      id: '36',
      icon: Eye,
      title: 'AI Eye Tracking',
      description: 'Advanced eye tracking analytics with AI-powered attention analysis and user experience optimization.',
      features: ['Attention analysis', 'UX optimization', 'Heat maps', 'Gaze tracking', 'A/B testing', 'Real-time analytics', 'Mobile support', 'API integration'],
      price: '$149/month',
      users: 'Up to 1,000 sessions/month',
      popular: false,
      category: 'Analytics',
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.6,
      reviews: 123
    },
    {
      id: '37',
      icon: Edit,
      title: 'AI Content Editor',
      description: 'Advanced content editing with AI-powered grammar checking, style suggestions, and readability optimization.',
      features: ['Grammar checking', 'Style suggestions', 'Readability optimization', 'Plagiarism detection', 'Tone analysis', 'Multi-language', 'Collaboration tools', 'Version control'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Content',
      marketPrice: '$79/month',
      savings: '63%',
      rating: 4.8,
      reviews: 987
    },
    {
      id: '38',
      icon: Trash2,
      title: 'Data Cleanup AI',
      description: 'Automated data cleaning with AI-powered duplicate detection, format standardization, and quality validation.',
      features: ['Duplicate detection', 'Format standardization', 'Quality validation', 'Data enrichment', 'Error correction', 'Batch processing', 'API access', 'Custom rules'],
      price: '$49/month',
      users: 'Up to 100,000 records/month',
      popular: false,
      category: 'Data',
      marketPrice: '$149/month',
      savings: '67%',
      rating: 4.7,
      reviews: 345
    },
    {
      id: '39',
      icon: Plus,
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with AI-powered demand forecasting and automated reorder optimization.',
      features: ['Demand forecasting', 'Reorder optimization', 'Stock alerts', 'Supplier management', 'Cost analysis', 'Integration APIs', 'Mobile app', 'Reporting tools'],
      price: '$79/month',
      users: 'Up to 10,000 SKUs',
      popular: false,
      category: 'Inventory',
      marketPrice: '$199/month',
      savings: '60%',
      rating: 4.6,
      reviews: 234
    },
    {
      id: '40',
      icon: Minus,
      title: 'Cost Optimization AI',
      description: 'AI-powered cost analysis and optimization with automated savings recommendations and budget tracking.',
      features: ['Cost analysis', 'Savings recommendations', 'Budget tracking', 'Vendor comparison', 'Spend analytics', 'Alert system', 'Integration APIs', 'Custom reports'],
      price: '$99/month',
      users: 'Up to 5 departments',
      popular: false,
      category: 'Finance',
      marketPrice: '$249/month',
      savings: '60%',
      rating: 4.5,
      reviews: 156
    },
    {
      id: '41',
      icon: X,
      title: 'AI Error Detector',
      description: 'Automated error detection and resolution with AI-powered analysis and intelligent troubleshooting suggestions.',
      features: ['Error detection', 'Resolution suggestions', 'Pattern analysis', 'Alert system', 'Integration APIs', 'Custom rules', 'Performance monitoring', 'Analytics dashboard'],
      price: '$69/month',
      users: 'Up to 50 systems',
      popular: false,
      category: 'Monitoring',
      marketPrice: '$179/month',
      savings: '61%',
      rating: 4.6,
      reviews: 267
    },
    {
      id: '42',
      icon: Check,
      title: 'Quality Assurance AI',
      description: 'Automated quality testing with AI-powered test generation, execution, and intelligent bug detection.',
      features: ['Test generation', 'Automated execution', 'Bug detection', 'Performance testing', 'Regression testing', 'Integration APIs', 'Custom scenarios', 'Reporting tools'],
      price: '$149/month',
      users: 'Up to 100 test cases',
      popular: true,
      category: 'Testing',
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.8,
      reviews: 456
    },
    {
      id: '43',
      icon: AlertTriangle,
      title: 'Risk Assessment AI',
      description: 'AI-powered risk analysis and mitigation with automated threat detection and compliance monitoring.',
      features: ['Risk analysis', 'Threat detection', 'Compliance monitoring', 'Mitigation strategies', 'Alert system', 'Integration APIs', 'Custom rules', 'Reporting tools'],
      price: '$199/month',
      users: 'Up to 25 projects',
      popular: false,
      category: 'Risk Management',
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.7,
      reviews: 189
    },
    {
      id: '44',
      icon: Info,
      title: 'AI Knowledge Base',
      description: 'Intelligent knowledge management with AI-powered search, content organization, and automated FAQ generation.',
      features: ['AI search', 'Content organization', 'FAQ generation', 'Multi-language', 'Version control', 'Analytics', 'Integration APIs', 'Mobile app'],
      price: '$59/month',
      users: 'Up to 1,000 articles',
      popular: false,
      category: 'Knowledge Management',
      marketPrice: '$149/month',
      savings: '60%',
      rating: 4.6,
      reviews: 234
    },
    {
      id: '45',
      icon: HelpCircle,
      title: 'AI Help Desk',
      description: 'Intelligent help desk solution with AI-powered ticket routing, automated responses, and knowledge base integration.',
      features: ['Ticket routing', 'Automated responses', 'Knowledge base', 'Multi-channel', 'SLA management', 'Analytics', 'Integration APIs', 'Mobile app'],
      price: '$89/month',
      users: 'Up to 50 agents',
      popular: true,
      category: 'Support',
      marketPrice: '$229/month',
      savings: '61%',
      rating: 4.7,
      reviews: 567
    },
    {
      id: '46',
      icon: Database,
      title: 'AI Database Optimizer',
      description: 'Intelligent database optimization with AI-powered query analysis, performance tuning, and automated maintenance.',
      features: ['Query analysis', 'Performance tuning', 'Automated maintenance', 'Index optimization', 'Monitoring', 'Alert system', 'Integration APIs', 'Custom rules'],
      price: '$179/month',
      users: 'Up to 10 databases',
      popular: false,
      category: 'Database',
      marketPrice: '$449/month',
      savings: '60%',
      rating: 4.6,
      reviews: 123
    },
    {
      id: '47',
      icon: Cpu,
      title: 'AI Server Monitor',
      description: 'Advanced server monitoring with AI-powered anomaly detection, predictive maintenance, and automated scaling.',
      features: ['Anomaly detection', 'Predictive maintenance', 'Automated scaling', 'Performance monitoring', 'Alert system', 'Integration APIs', 'Custom metrics', 'Reporting tools'],
      price: '$129/month',
      users: 'Up to 100 servers',
      popular: false,
      category: 'Monitoring',
      marketPrice: '$329/month',
      savings: '61%',
      rating: 4.7,
      reviews: 234
    },
    {
      id: '48',
      icon: Lock,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security analysis, breach detection, and automated password generation.',
      features: ['Security analysis', 'Breach detection', 'Password generation', 'Multi-device sync', 'Team sharing', 'Integration APIs', 'Mobile app', 'Biometric support'],
      price: '$19/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Security',
      marketPrice: '$49/month',
      savings: '61%',
      rating: 4.8,
      reviews: 1234
    },
    {
      id: '49',
      icon: Target,
      title: 'AI Goal Tracker',
      description: 'Intelligent goal tracking with AI-powered progress analysis, milestone prediction, and automated motivation strategies.',
      features: ['Progress analysis', 'Milestone prediction', 'Motivation strategies', 'Team collaboration', 'Integration APIs', 'Mobile app', 'Analytics', 'Custom metrics'],
      price: '$39/month',
      users: 'Up to 50 goals',
      popular: false,
      category: 'Productivity',
      marketPrice: '$99/month',
      savings: '61%',
      rating: 4.6,
      reviews: 345
    },
    {
      id: '50',
      icon: Rocket,
      title: 'AI Launch Assistant',
      description: 'Comprehensive product launch management with AI-powered market analysis, timing optimization, and success prediction.',
      features: ['Market analysis', 'Timing optimization', 'Success prediction', 'Launch planning', 'Team coordination', 'Integration APIs', 'Analytics', 'Custom workflows'],
      price: '$199/month',
      users: 'Up to 10 launches',
      popular: false,
      category: 'Project Management',
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.7,
      reviews: 156
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const categories = [
    'All', 'Productivity', 'Marketing', 'Development', 'Finance', 'Design', 'AI', 'Education', 
    'E-commerce', 'Real Estate', 'HR', 'Healthcare', 'Transportation', 'Travel', 'Gaming', 
    'Creative', 'Storage', 'Social Media', 'Communication', 'Analytics', 'Content', 'Data', 
    'Inventory', 'Monitoring', 'Testing', 'Risk Management', 'Knowledge Management', 'Support', 
    'Database', 'Security', 'Project Management'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 50+ micro SaaS solutions. AI-powered tools for productivity, marketing, development, finance, and more. Starting from $15/month with free trials." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, productivity tools, marketing automation, development tools, finance software, CRM, analytics" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="50+ AI-powered business tools for every need" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-scan-line">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              50+ AI-powered business tools designed for specific needs. Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center quantum-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search micro SaaS solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(0, 10).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white neon-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                {categories.length > 10 && (
                  <span className="text-gray-400 text-sm px-4 py-2">
                    +{categories.length - 10} more categories
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center hologram-card p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 energy-pulse">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
                Choose from our collection of 50+ specialized business tools designed to solve specific challenges.
              </p>
              <div className="text-cyan-400 font-medium">
                Showing {filteredProducts.length} of {microSaasProducts.length} products
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative quantum-card p-6 hover:scale-105 transition-all duration-300 group ${
                    product.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 energy-pulse">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                      {product.marketPrice && (
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Save {product.savings}
                          </span>
                        </div>
                      )}
                      <div className="text-gray-400 text-sm">{product.users}</div>
                    </div>

                    {product.rating && (
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating!)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-1">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    )}

                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-4">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm text-center">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      product.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}>
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="cyber-button"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="cyber-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center quantum-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center energy-pulse">
                  <span className="text-2xl font-bold text-slate-900">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center quantum-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center energy-pulse">
                  <span className="text-2xl font-bold text-slate-900">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center quantum-card p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center energy-pulse">
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Get in Touch</h2>
                <p className="text-xl text-gray-300">
                  Ready to transform your business with our micro SaaS solutions?
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <Phone className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg">
                    +1 (302) 464-0950
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Mon-Fri: 9AM-6PM EST</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <Mail className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">24/7 Support Available</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <MapPin className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from 50+ micro SaaS solutions that fit your business needs. 
                Start with a free trial and scale as you grow. No long-term commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 cyber-button px-8 py-4 text-lg font-semibold transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;