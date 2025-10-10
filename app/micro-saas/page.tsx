'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Mail, Calendar, FileText, Search, Settings, Globe, Smartphone, Target, Database, Lock, Cpu, BarChart, PieChart, Activity, CreditCard, ShoppingCart, BookOpen, Building, Heart, Car, Leaf, Gamepad2, GraduationCap, Briefcase, Home, Scale, Book, Truck, Wrench, Camera, Music, Video, Image, Download, Upload, Share, Edit, Trash2, Plus, Minus, X, Check, AlertTriangle, Info, HelpCircle, ExternalLink, Download as DownloadIcon, Upload as UploadIcon, Share as ShareIcon, Edit as EditIcon, Trash2 as TrashIcon, Plus as PlusIcon, Minus as MinusIcon, X as XIcon, Check as CheckIcon, AlertTriangle as AlertIcon, Info as InfoIcon, HelpCircle as HelpIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  benefits: string[];
  marketPrice: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    // Analytics & Business Intelligence
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with real-time analytics, predictive insights, and automated reporting for data-driven decision making.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom KPI tracking', 'Mobile app', 'API integration', 'White-label options', 'Advanced filtering', 'Export capabilities'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Analytics',
      benefits: ['Increase data accuracy by 95%', 'Reduce reporting time by 80%', 'Improve decision speed by 60%'],
      marketPrice: '$299/month',
      link: '/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: '📈',
      title: 'Smart Revenue Optimizer',
      description: 'AI-powered revenue optimization tool that analyzes sales patterns, identifies growth opportunities, and provides actionable insights.',
      features: ['Revenue forecasting', 'Sales pattern analysis', 'Growth opportunity detection', 'ROI tracking', 'Customer lifetime value', 'Churn prediction', 'Pricing optimization', 'Market analysis'],
      price: '$299/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Analytics',
      benefits: ['Increase revenue by 25%', 'Reduce churn by 40%', 'Optimize pricing strategies'],
      marketPrice: '$399/month',
      link: '/smart-revenue-optimizer'
    },
    {
      id: '3',
      icon: '🎯',
      title: 'Customer Behavior Analytics',
      description: 'Deep customer insights platform that tracks user behavior, preferences, and engagement patterns to optimize customer experience.',
      features: ['Behavior tracking', 'Engagement analytics', 'Customer journey mapping', 'Segmentation tools', 'A/B testing', 'Heatmap analysis', 'Conversion tracking', 'Personalization engine'],
      price: '$149/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Analytics',
      benefits: ['Improve conversion rates by 35%', 'Increase customer satisfaction by 50%', 'Reduce bounce rates by 30%'],
      marketPrice: '$249/month',
      link: '/customer-behavior-analytics'
    },

    // CRM & Sales
    {
      id: '4',
      icon: '👥',
      title: 'AI-Powered CRM Elite',
      description: 'Next-generation CRM with AI-driven lead scoring, automated follow-ups, and intelligent sales pipeline management.',
      features: ['AI lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Pipeline management', 'Email integration', 'Call tracking', 'Document management', 'Team collaboration'],
      price: '$199/month',
      users: 'Up to 150 users',
      popular: true,
      category: 'CRM',
      benefits: ['Increase sales by 40%', 'Improve lead quality by 60%', 'Reduce manual work by 70%'],
      marketPrice: '$299/month',
      link: '/ai-crm'
    },
    {
      id: '5',
      icon: '💼',
      title: 'Sales Pipeline Manager',
      description: 'Comprehensive sales management tool with deal tracking, forecasting, and performance analytics for sales teams.',
      features: ['Deal tracking', 'Sales forecasting', 'Performance analytics', 'Goal setting', 'Team management', 'Commission tracking', 'Reporting tools', 'Mobile access'],
      price: '$129/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM',
      benefits: ['Increase deal closure by 30%', 'Improve forecast accuracy by 45%', 'Boost team performance by 25%'],
      marketPrice: '$199/month',
      link: '/sales-pipeline-manager'
    },
    {
      id: '6',
      icon: '🎪',
      title: 'Lead Generation Pro',
      description: 'AI-powered lead generation platform that identifies, qualifies, and nurtures prospects automatically.',
      features: ['Lead identification', 'Qualification scoring', 'Automated nurturing', 'Email sequences', 'Social media integration', 'Lead scoring', 'CRM integration', 'Analytics dashboard'],
      price: '$179/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'CRM',
      benefits: ['Generate 3x more qualified leads', 'Reduce cost per lead by 50%', 'Increase conversion rates by 35%'],
      marketPrice: '$279/month',
      link: '/lead-generation-pro'
    },

    // Marketing & Content
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Automation Suite',
      description: 'Advanced email marketing platform with AI-powered personalization, automation workflows, and detailed analytics.',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Automation workflows', 'Personalization', 'Analytics', 'Landing pages', 'Integration tools'],
      price: '$99/month',
      users: 'Up to 50,000 contacts',
      popular: true,
      category: 'Marketing',
      benefits: ['Increase open rates by 40%', 'Boost click-through rates by 60%', 'Reduce unsubscribe rates by 30%'],
      marketPrice: '$149/month',
      link: '/email-marketing-automation'
    },
    {
      id: '8',
      icon: '📱',
      title: 'Social Media Manager Pro',
      description: 'Comprehensive social media management platform with content scheduling, analytics, and engagement tracking.',
      features: ['Content scheduling', 'Multi-platform posting', 'Analytics dashboard', 'Engagement tracking', 'Hashtag research', 'Content calendar', 'Team collaboration', 'Brand monitoring'],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Marketing',
      benefits: ['Increase engagement by 50%', 'Save 10 hours per week', 'Improve brand consistency'],
      marketPrice: '$129/month',
      link: '/social-media-manager'
    },
    {
      id: '9',
      icon: '🎨',
      title: 'AI Content Studio',
      description: 'AI-powered content creation platform that generates high-quality text, images, and videos for marketing campaigns.',
      features: ['AI writing assistant', 'Image generation', 'Video creation', 'Content templates', 'Brand voice training', 'SEO optimization', 'Plagiarism checker', 'Multi-language support'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Marketing',
      benefits: ['Create content 10x faster', 'Reduce content costs by 70%', 'Improve content quality'],
      marketPrice: '$249/month',
      link: '/ai-content-studio'
    },
    {
      id: '10',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'Advanced SEO tool that analyzes websites, suggests improvements, and tracks rankings across search engines.',
      features: ['Keyword research', 'Site audit', 'Rank tracking', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Link building', 'Local SEO'],
      price: '$89/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'Marketing',
      benefits: ['Increase organic traffic by 200%', 'Improve search rankings', 'Reduce SEO costs by 60%'],
      marketPrice: '$149/month',
      link: '/seo-optimizer'
    },

    // Security & Compliance
    {
      id: '11',
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring platform with threat detection, vulnerability scanning, and incident response.',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance monitoring', '24/7 monitoring', 'Incident response', 'Security reports', 'Penetration testing', 'Risk assessment'],
      price: '$299/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'Security',
      benefits: ['Prevent 99% of security breaches', 'Reduce compliance costs by 50%', 'Improve response time by 80%'],
      marketPrice: '$499/month',
      link: '/security-monitoring-suite'
    },
    {
      id: '12',
      icon: '🛡️',
      title: 'Data Protection Manager',
      description: 'GDPR and privacy compliance tool that helps businesses protect customer data and meet regulatory requirements.',
      features: ['Data mapping', 'Privacy impact assessment', 'Consent management', 'Data retention', 'Breach notification', 'Compliance reporting', 'Privacy policies', 'Cookie management'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security',
      benefits: ['Ensure 100% compliance', 'Reduce legal risks', 'Build customer trust'],
      marketPrice: '$349/month',
      link: '/data-protection-manager'
    },

    // Infrastructure & Cloud
    {
      id: '13',
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization platform for multi-cloud environments.',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management', 'Monitoring', 'Security compliance', 'Performance analytics'],
      price: '$399/month',
      users: 'Unlimited users',
      popular: true,
      category: 'Infrastructure',
      benefits: ['Reduce cloud costs by 40%', 'Improve performance by 50%', 'Ensure 99.9% uptime'],
      marketPrice: '$599/month',
      link: '/cloud-infrastructure-manager'
    },
    {
      id: '14',
      icon: '⚡',
      title: 'DevOps Automation Platform',
      description: 'Complete DevOps solution with CI/CD pipelines, automated testing, and deployment management.',
      features: ['CI/CD pipelines', 'Automated testing', 'Deployment management', 'Infrastructure as code', 'Monitoring', 'Log management', 'Security scanning', 'Team collaboration'],
      price: '$249/month',
      users: 'Up to 50 developers',
      popular: false,
      category: 'Infrastructure',
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      marketPrice: '$399/month',
      link: '/devops-automation'
    },

    // Customer Support
    {
      id: '15',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer support platform with chatbots, ticket management, and knowledge base automation.',
      features: ['AI chatbots', 'Ticket management', 'Knowledge base', 'Live chat', 'Multi-channel support', 'Analytics', 'Customer satisfaction', 'Automation workflows'],
      price: '$179/month',
      users: 'Unlimited conversations',
      popular: true,
      category: 'Support',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 80%', 'Increase customer satisfaction'],
      marketPrice: '$279/month',
      link: '/ai-customer-support'
    },
    {
      id: '16',
      icon: '📞',
      title: 'Call Center Management',
      description: 'Complete call center solution with call routing, analytics, and performance management tools.',
      features: ['Call routing', 'Performance analytics', 'Quality monitoring', 'Agent management', 'Call recording', 'IVR system', 'Reporting tools', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 100 agents',
      popular: false,
      category: 'Support',
      benefits: ['Improve call efficiency by 40%', 'Reduce wait times by 50%', 'Enhance customer experience'],
      marketPrice: '$299/month',
      link: '/call-center-management'
    },

    // Finance & Accounting
    {
      id: '17',
      icon: '💰',
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting platform with automated bookkeeping, invoice processing, and financial reporting.',
      features: ['Automated bookkeeping', 'Invoice processing', 'Expense tracking', 'Financial reporting', 'Tax preparation', 'Bank reconciliation', 'Payroll management', 'Compliance monitoring'],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Finance',
      benefits: ['Reduce accounting time by 70%', 'Improve accuracy by 95%', 'Save on accounting costs'],
      marketPrice: '$249/month',
      link: '/ai-accounting-assistant'
    },
    {
      id: '18',
      icon: '💳',
      title: 'Invoice Generator Pro',
      description: 'Professional invoice creation and management platform with automated billing and payment tracking.',
      features: ['Invoice templates', 'Automated billing', 'Payment tracking', 'Client portal', 'Tax calculations', 'Multi-currency', 'Recurring invoices', 'Payment reminders'],
      price: '$49/month',
      users: 'Up to 100 clients',
      popular: false,
      category: 'Finance',
      benefits: ['Get paid 30% faster', 'Reduce billing errors by 90%', 'Improve cash flow'],
      marketPrice: '$79/month',
      link: '/invoice-generator-pro'
    },

    // Project Management
    {
      id: '19',
      icon: '📋',
      title: 'Project Management Pro',
      description: 'Advanced project management platform with AI-powered task allocation, resource planning, and progress tracking.',
      features: ['Task management', 'Resource planning', 'Gantt charts', 'Team collaboration', 'Time tracking', 'Budget management', 'Risk assessment', 'Reporting tools'],
      price: '$129/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Project Management',
      benefits: ['Complete projects 25% faster', 'Improve team productivity by 40%', 'Reduce project costs by 20%'],
      marketPrice: '$199/month',
      link: '/project-management-pro'
    },
    {
      id: '20',
      icon: '⏰',
      title: 'Time Tracking & Productivity',
      description: 'Comprehensive time tracking solution with productivity analytics and team performance insights.',
      features: ['Time tracking', 'Productivity analytics', 'Team insights', 'Project billing', 'Screenshots', 'App monitoring', 'Reporting tools', 'Integration APIs'],
      price: '$79/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Project Management',
      benefits: ['Increase productivity by 30%', 'Improve time management', 'Reduce project overruns'],
      marketPrice: '$129/month',
      link: '/time-tracking-productivity'
    },

    // E-commerce
    {
      id: '21',
      icon: '🛒',
      title: 'E-commerce Analytics Pro',
      description: 'Advanced e-commerce analytics platform with sales tracking, customer insights, and conversion optimization.',
      features: ['Sales analytics', 'Customer insights', 'Conversion tracking', 'A/B testing', 'Inventory management', 'Revenue forecasting', 'Marketing attribution', 'Mobile analytics'],
      price: '$199/month',
      users: 'Up to 10 stores',
      popular: true,
      category: 'E-commerce',
      benefits: ['Increase sales by 35%', 'Improve conversion rates by 50%', 'Reduce cart abandonment'],
      marketPrice: '$299/month',
      link: '/ecommerce-analytics-pro'
    },
    {
      id: '22',
      icon: '📦',
      title: 'Inventory Management System',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and stock optimization.',
      features: ['Inventory tracking', 'Demand forecasting', 'Automated reordering', 'Stock alerts', 'Multi-location', 'Barcode scanning', 'Supplier management', 'Analytics dashboard'],
      price: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'E-commerce',
      benefits: ['Reduce stockouts by 80%', 'Optimize inventory levels', 'Improve cash flow'],
      marketPrice: '$249/month',
      link: '/inventory-management-system'
    },

    // Healthcare
    {
      id: '23',
      icon: '🏥',
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management system with patient data security and clinical workflow automation.',
      features: ['Patient records', 'HIPAA compliance', 'Clinical workflows', 'Appointment scheduling', 'Billing integration', 'Telemedicine', 'Prescription management', 'Analytics dashboard'],
      price: '$299/month',
      users: 'Up to 100 providers',
      popular: true,
      category: 'Healthcare',
      benefits: ['Improve patient care', 'Ensure compliance', 'Reduce administrative costs'],
      marketPrice: '$499/month',
      link: '/medical-records-manager'
    },
    {
      id: '24',
      icon: '💊',
      title: 'Pharmacy Management System',
      description: 'Complete pharmacy management solution with inventory tracking, prescription processing, and patient management.',
      features: ['Prescription processing', 'Inventory management', 'Patient profiles', 'Insurance verification', 'Drug interaction checking', 'Billing system', 'Reporting tools', 'Mobile app'],
      price: '$199/month',
      users: 'Up to 50 staff',
      popular: false,
      category: 'Healthcare',
      benefits: ['Improve accuracy by 95%', 'Reduce processing time by 60%', 'Enhance patient safety'],
      marketPrice: '$349/month',
      link: '/pharmacy-management-system'
    },

    // Real Estate
    {
      id: '25',
      icon: '🏠',
      title: 'Property Management AI',
      description: 'AI-powered property management platform with tenant screening, maintenance scheduling, and rent optimization.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Financial reporting', 'Document management', 'Mobile app'],
      price: '$179/month',
      users: 'Up to 200 properties',
      popular: true,
      category: 'Real Estate',
      benefits: ['Increase rental income by 20%', 'Reduce vacancy rates by 30%', 'Improve tenant satisfaction'],
      marketPrice: '$279/month',
      link: '/property-management-ai'
    },
    {
      id: '26',
      icon: '🏘️',
      title: 'Real Estate CRM',
      description: 'Comprehensive CRM for real estate professionals with lead management, client tracking, and transaction management.',
      features: ['Lead management', 'Client tracking', 'Transaction management', 'Marketing automation', 'Document storage', 'Commission tracking', 'Market analysis', 'Mobile access'],
      price: '$99/month',
      users: 'Up to 25 agents',
      popular: false,
      category: 'Real Estate',
      benefits: ['Close 40% more deals', 'Improve client relationships', 'Streamline transactions'],
      marketPrice: '$149/month',
      link: '/real-estate-crm'
    },

    // Legal & Compliance
    {
      id: '27',
      icon: '⚖️',
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment.',
      features: ['Contract analysis', 'Compliance tracking', 'Risk assessment', 'Document templates', 'Legal research', 'Case management', 'Billing integration', 'Client portal'],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Legal',
      benefits: ['Reduce document review time by 70%', 'Improve compliance by 90%', 'Minimize legal risks'],
      marketPrice: '$399/month',
      link: '/legal-document-manager'
    },
    {
      id: '28',
      icon: '📋',
      title: 'Compliance Management Suite',
      description: 'Comprehensive compliance management platform for regulatory requirements and audit preparation.',
      features: ['Regulatory tracking', 'Audit preparation', 'Policy management', 'Training modules', 'Risk assessment', 'Reporting tools', 'Documentation', 'Alert system'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Legal',
      benefits: ['Ensure 100% compliance', 'Reduce audit preparation time', 'Minimize regulatory risks'],
      marketPrice: '$299/month',
      link: '/compliance-management-suite'
    },

    // Education
    {
      id: '29',
      icon: '🎓',
      title: 'Online Learning Platform',
      description: 'Complete e-learning platform with course creation, student management, and progress tracking.',
      features: ['Course creation', 'Student management', 'Progress tracking', 'Assessment tools', 'Certification', 'Video streaming', 'Discussion forums', 'Mobile app'],
      price: '$149/month',
      users: 'Up to 1,000 students',
      popular: true,
      category: 'Education',
      benefits: ['Increase student engagement by 60%', 'Reduce course creation time by 50%', 'Improve learning outcomes'],
      marketPrice: '$249/month',
      link: '/online-learning-platform'
    },
    {
      id: '30',
      icon: '📚',
      title: 'Student Information System',
      description: 'Comprehensive student management system with enrollment, grading, and academic progress tracking.',
      features: ['Student enrollment', 'Grade management', 'Academic tracking', 'Parent portal', 'Attendance tracking', 'Report cards', 'Financial aid', 'Communication tools'],
      price: '$199/month',
      users: 'Up to 2,000 students',
      popular: false,
      category: 'Education',
      benefits: ['Streamline administration', 'Improve parent communication', 'Enhance student tracking'],
      marketPrice: '$299/month',
      link: '/student-information-system'
    },

    // Manufacturing
    {
      id: '31',
      icon: '🏭',
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain management with demand forecasting, inventory optimization, and supplier management.',
      features: ['Demand forecasting', 'Inventory optimization', 'Supplier management', 'Risk assessment', 'Cost analysis', 'Performance tracking', 'Integration APIs', 'Analytics dashboard'],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Manufacturing',
      benefits: ['Reduce inventory costs by 25%', 'Improve supplier performance', 'Minimize supply chain risks'],
      marketPrice: '$449/month',
      link: '/supply-chain-optimizer'
    },
    {
      id: '32',
      icon: '⚙️',
      title: 'Production Planning System',
      description: 'Advanced production planning and scheduling system with capacity optimization and resource management.',
      features: ['Production planning', 'Capacity optimization', 'Resource management', 'Scheduling tools', 'Quality control', 'Maintenance scheduling', 'Performance metrics', 'Integration APIs'],
      price: '$249/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Manufacturing',
      benefits: ['Increase production efficiency by 30%', 'Reduce planning time by 60%', 'Optimize resource utilization'],
      marketPrice: '$399/month',
      link: '/production-planning-system'
    },

    // Human Resources
    {
      id: '33',
      icon: '👥',
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment platform with resume screening, candidate matching, and interview scheduling.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Skills assessment', 'Background checks', 'Onboarding tools', 'Analytics dashboard', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 50 HR users',
      popular: true,
      category: 'Human Resources',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline recruitment process'],
      marketPrice: '$299/month',
      link: '/ai-recruitment-assistant'
    },
    {
      id: '34',
      icon: '📊',
      title: 'Employee Performance Manager',
      description: 'Comprehensive employee performance management with goal setting, reviews, and development tracking.',
      features: ['Goal setting', 'Performance reviews', '360 feedback', 'Development tracking', 'Recognition system', 'Analytics dashboard', 'Integration tools', 'Mobile app'],
      price: '$149/month',
      users: 'Up to 200 employees',
      popular: false,
      category: 'Human Resources',
      benefits: ['Improve employee engagement', 'Streamline performance reviews', 'Enhance development planning'],
      marketPrice: '$249/month',
      link: '/employee-performance-manager'
    },

    // Travel & Hospitality
    {
      id: '35',
      icon: '✈️',
      title: 'Travel Management System',
      description: 'Complete travel management platform with booking, expense tracking, and itinerary management.',
      features: ['Travel booking', 'Expense tracking', 'Itinerary management', 'Policy compliance', 'Approval workflows', 'Reporting tools', 'Mobile app', 'Integration APIs'],
      price: '$179/month',
      users: 'Up to 100 travelers',
      popular: true,
      category: 'Travel',
      benefits: ['Reduce travel costs by 20%', 'Improve policy compliance', 'Streamline booking process'],
      marketPrice: '$279/month',
      link: '/travel-management-system'
    },
    {
      id: '36',
      icon: '🏨',
      title: 'Hotel Management Suite',
      description: 'Comprehensive hotel management system with reservations, guest services, and revenue optimization.',
      features: ['Reservation management', 'Guest services', 'Revenue optimization', 'Housekeeping', 'Maintenance tracking', 'Guest communication', 'Analytics dashboard', 'Mobile app'],
      price: '$299/month',
      users: 'Up to 50 staff',
      popular: false,
      category: 'Travel',
      benefits: ['Increase revenue by 25%', 'Improve guest satisfaction', 'Streamline operations'],
      marketPrice: '$449/month',
      link: '/hotel-management-suite'
    },

    // Non-Profit
    {
      id: '37',
      icon: '🤝',
      title: 'Donor Management System',
      description: 'Comprehensive donor management platform with fundraising, volunteer coordination, and impact tracking.',
      features: ['Donor database', 'Fundraising tools', 'Volunteer coordination', 'Event management', 'Impact tracking', 'Communication tools', 'Reporting dashboard', 'Mobile app'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Non-Profit',
      benefits: ['Increase donations by 40%', 'Improve donor retention', 'Streamline operations'],
      marketPrice: '$249/month',
      link: '/donor-management-system'
    },
    {
      id: '38',
      icon: '📈',
      title: 'Grant Management Platform',
      description: 'Complete grant management solution with application tracking, compliance monitoring, and reporting tools.',
      features: ['Application tracking', 'Compliance monitoring', 'Budget management', 'Reporting tools', 'Document management', 'Collaboration tools', 'Analytics dashboard', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Non-Profit',
      benefits: ['Improve grant success rate', 'Ensure compliance', 'Streamline reporting'],
      marketPrice: '$299/month',
      link: '/grant-management-platform'
    },

    // Agriculture
    {
      id: '39',
      icon: '🌾',
      title: 'Farm Management System',
      description: 'Comprehensive farm management platform with crop tracking, weather monitoring, and yield optimization.',
      features: ['Crop tracking', 'Weather monitoring', 'Yield optimization', 'Inventory management', 'Financial tracking', 'Equipment management', 'Analytics dashboard', 'Mobile app'],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Agriculture',
      benefits: ['Increase crop yields by 20%', 'Reduce costs by 15%', 'Improve planning'],
      marketPrice: '$279/month',
      link: '/farm-management-system'
    },
    {
      id: '40',
      icon: '🐄',
      title: 'Livestock Management',
      description: 'Complete livestock management system with health tracking, breeding records, and production monitoring.',
      features: ['Health tracking', 'Breeding records', 'Production monitoring', 'Feed management', 'Vaccination tracking', 'Financial tracking', 'Analytics dashboard', 'Mobile app'],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Agriculture',
      benefits: ['Improve animal health', 'Increase production efficiency', 'Reduce costs'],
      marketPrice: '$249/month',
      link: '/livestock-management'
    },

    // Energy & Utilities
    {
      id: '41',
      icon: '⚡',
      title: 'Energy Management System',
      description: 'Smart energy management platform with consumption monitoring, cost optimization, and sustainability tracking.',
      features: ['Consumption monitoring', 'Cost optimization', 'Sustainability tracking', 'Predictive analytics', 'Equipment management', 'Reporting tools', 'Mobile app', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Energy',
      benefits: ['Reduce energy costs by 30%', 'Improve efficiency', 'Track sustainability goals'],
      marketPrice: '$299/month',
      link: '/energy-management-system'
    },
    {
      id: '42',
      icon: '🌱',
      title: 'Carbon Footprint Tracker',
      description: 'Environmental impact tracking platform with carbon footprint monitoring and sustainability reporting.',
      features: ['Carbon tracking', 'Sustainability reporting', 'Goal setting', 'Impact analysis', 'Benchmarking', 'Reporting tools', 'Mobile app', 'Integration APIs'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Energy',
      benefits: ['Reduce carbon footprint', 'Improve sustainability', 'Meet environmental goals'],
      marketPrice: '$149/month',
      link: '/carbon-footprint-tracker'
    },

    // Transportation & Logistics
    {
      id: '43',
      icon: '🚚',
      title: 'Fleet Management System',
      description: 'Complete fleet management platform with vehicle tracking, maintenance scheduling, and driver management.',
      features: ['Vehicle tracking', 'Maintenance scheduling', 'Driver management', 'Route optimization', 'Fuel tracking', 'Compliance monitoring', 'Analytics dashboard', 'Mobile app'],
      price: '$249/month',
      users: 'Up to 100 vehicles',
      popular: true,
      category: 'Transportation',
      benefits: ['Reduce fuel costs by 20%', 'Improve driver safety', 'Optimize routes'],
      marketPrice: '$399/month',
      link: '/fleet-management-system'
    },
    {
      id: '44',
      icon: '📦',
      title: 'Logistics Optimization',
      description: 'AI-powered logistics platform with route optimization, warehouse management, and delivery tracking.',
      features: ['Route optimization', 'Warehouse management', 'Delivery tracking', 'Inventory tracking', 'Cost analysis', 'Performance metrics', 'Integration APIs', 'Mobile app'],
      price: '$299/month',
      users: 'Up to 75 users',
      popular: false,
      category: 'Transportation',
      benefits: ['Reduce delivery costs by 25%', 'Improve delivery times', 'Optimize warehouse operations'],
      marketPrice: '$449/month',
      link: '/logistics-optimization'
    },

    // Entertainment & Media
    {
      id: '45',
      icon: '🎬',
      title: 'Content Management System',
      description: 'Advanced content management platform for media companies with production tracking and distribution management.',
      features: ['Production tracking', 'Distribution management', 'Rights management', 'Revenue tracking', 'Analytics dashboard', 'Collaboration tools', 'Mobile app', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Entertainment',
      benefits: ['Streamline production', 'Maximize revenue', 'Improve collaboration'],
      marketPrice: '$299/month',
      link: '/content-management-system'
    },
    {
      id: '46',
      icon: '🎵',
      title: 'Music Distribution Platform',
      description: 'Complete music distribution platform with royalty tracking, playlist management, and analytics.',
      features: ['Distribution tools', 'Royalty tracking', 'Playlist management', 'Analytics dashboard', 'Marketing tools', 'Collaboration features', 'Mobile app', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 50 artists',
      popular: false,
      category: 'Entertainment',
      benefits: ['Increase music reach', 'Maximize royalties', 'Streamline distribution'],
      marketPrice: '$249/month',
      link: '/music-distribution-platform'
    },

    // Sports & Fitness
    {
      id: '47',
      icon: '🏃',
      title: 'Fitness Tracking Platform',
      description: 'Comprehensive fitness platform with workout tracking, nutrition planning, and progress monitoring.',
      features: ['Workout tracking', 'Nutrition planning', 'Progress monitoring', 'Goal setting', 'Social features', 'Analytics dashboard', 'Mobile app', 'Wearable integration'],
      price: '$79/month',
      users: 'Up to 1,000 users',
      popular: true,
      category: 'Sports',
      benefits: ['Improve fitness outcomes', 'Increase engagement', 'Track progress effectively'],
      marketPrice: '$129/month',
      link: '/fitness-tracking-platform'
    },
    {
      id: '48',
      icon: '⚽',
      title: 'Sports Team Management',
      description: 'Complete sports team management platform with player tracking, game scheduling, and performance analytics.',
      features: ['Player tracking', 'Game scheduling', 'Performance analytics', 'Team communication', 'Statistics tracking', 'Training plans', 'Mobile app', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 players',
      popular: false,
      category: 'Sports',
      benefits: ['Improve team performance', 'Streamline management', 'Track player progress'],
      marketPrice: '$249/month',
      link: '/sports-team-management'
    },

    // Gaming
    {
      id: '49',
      icon: '🎮',
      title: 'Gaming Analytics Platform',
      description: 'Advanced gaming analytics platform with player behavior tracking, monetization optimization, and performance monitoring.',
      features: ['Player analytics', 'Monetization tracking', 'Performance monitoring', 'A/B testing', 'Retention analysis', 'Revenue optimization', 'Real-time dashboards', 'Integration APIs'],
      price: '$199/month',
      users: 'Up to 10 games',
      popular: true,
      category: 'Gaming',
      benefits: ['Increase player retention by 40%', 'Boost revenue by 60%', 'Improve game performance'],
      marketPrice: '$299/month',
      link: '/gaming-analytics-platform'
    },
    {
      id: '50',
      icon: '🏆',
      title: 'Esports Tournament Manager',
      description: 'Complete esports tournament management platform with registration, bracket management, and live streaming.',
      features: ['Tournament creation', 'Registration management', 'Bracket management', 'Live streaming', 'Prize distribution', 'Analytics dashboard', 'Mobile app', 'Integration APIs'],
      price: '$249/month',
      users: 'Up to 500 participants',
      popular: false,
      category: 'Gaming',
      benefits: ['Streamline tournaments', 'Increase engagement', 'Improve organization'],
      marketPrice: '$399/month',
      link: '/esports-tournament-manager'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Finance', 'Project Management', 'E-commerce', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Manufacturing', 'Human Resources', 'Travel', 'Non-Profit', 'Agriculture', 'Energy', 'Transportation', 'Entertainment', 'Sports', 'Gaming'];

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

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.9/5',
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

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

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
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs. Starting at $49/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, CRM, marketing automation, cloud management, small business software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
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
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
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
                {categories.slice(0, 8).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
              <p className="text-gray-400">
                {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={product.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      to={product.link}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
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
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
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