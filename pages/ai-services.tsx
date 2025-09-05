import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  Search, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Gamepad2
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  // AI Automation & Process Intelligence
  {
    id: 1,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Custom model development & training',
      'Data preprocessing & feature engineering',
      'Model deployment & monitoring',
      'A/B testing & performance optimization',
      'Real-time prediction APIs',
      'Model versioning & management',
      'Automated retraining pipelines',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase prediction accuracy by 40-60%',
      'Automate decision-making processes',
      'Reduce manual analysis time by 80%',
      'Improve business outcomes by 25-35%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing'
  },
  {
    id: 2,
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: [
      'Object detection & recognition',
      'Image classification & tagging',
      'Facial recognition & analysis',
      'Video analytics & monitoring',
      'OCR & document processing',
      'Quality control automation',
      'Real-time processing capabilities',
      'Custom model fine-tuning'
    ],
    benefits: [
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Chatbot & virtual assistant development',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Multi-language support'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Improve customer satisfaction by 35%',
      'Reduce content moderation costs by 70%',
      'Enable multilingual operations'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, Content platforms, E-learning, Legal'
  },
  {
    id: 4,
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Predictive analytics & forecasting',
      'Anomaly detection & alerting',
      'Automated report generation',
      'Real-time data visualization',
      'Pattern recognition & insights',
      'Custom dashboard creation',
      'Data quality assessment',
      'Trend analysis & recommendations'
    ],
    benefits: [
      'Increase decision speed by 60%',
      'Identify opportunities 3x faster',
      'Reduce false positives by 80%',
      'Improve forecast accuracy by 40%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, Marketing, Operations, Sales teams'
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Voice & text capabilities',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding'
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction by 40%',
      'Lower support costs by 60%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service'
  },

  // Advanced AI Services
  {
    id: 6,
    title: 'Quantum AI & Machine Learning',
    description: 'Quantum-enhanced machine learning solutions for complex optimization problems and advanced computational tasks.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $5,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Advanced pattern recognition',
      'Quantum simulation capabilities',
      'Research collaboration'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve previously intractable problems',
      'Advanced optimization capabilities',
      'Future-proof AI solutions'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    id: 7,
    title: 'AI Drug Discovery & Development',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
    icon: Heart,
    category: 'AI Healthcare',
    price: 'Starting at $4,500/month',
    features: [
      'Molecular structure analysis',
      'Drug-target interaction prediction',
      'Compound screening & optimization',
      'Clinical trial design optimization',
      'Side effect prediction',
      'Patent landscape analysis',
      'Regulatory compliance support',
      'Collaborative research tools'
    ],
    benefits: [
      'Accelerate drug discovery by 50%',
      'Reduce development costs by 40%',
      'Improve success rates by 30%',
      'Faster time to market'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical companies, Biotech firms, Research institutions'
  },
  {
    id: 8,
    title: 'AI Climate & Environmental Solutions',
    description: 'AI-powered climate analysis, environmental monitoring, and sustainability optimization solutions.',
    icon: TreePine,
    category: 'AI Climate',
    price: 'Starting at $2,200/month',
    features: [
      'Climate data analysis & prediction',
      'Environmental impact assessment',
      'Carbon footprint optimization',
      'Renewable energy optimization',
      'Weather pattern analysis',
      'Sustainability reporting',
      'Environmental risk assessment',
      'Green technology recommendations'
    ],
    benefits: [
      'Improve environmental outcomes by 40%',
      'Reduce carbon footprint by 35%',
      'Optimize resource usage',
      'Meet sustainability goals'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Manufacturing, Government'
  },
  {
    id: 9,
    title: 'AI Space Technology & Research',
    description: 'AI solutions for space exploration, satellite data analysis, and astronomical research applications.',
    icon: Rocket,
    category: 'AI Space',
    price: 'Starting at $3,500/month',
    features: [
      'Satellite data processing & analysis',
      'Space mission planning & optimization',
      'Astronomical data analysis',
      'Orbital mechanics calculations',
      'Space weather prediction',
      'Mission control AI systems',
      'Research data visualization',
      'Space communication protocols'
    ],
    benefits: [
      'Accelerate space research by 60%',
      'Improve mission success rates',
      'Optimize space operations',
      'Enable new discoveries'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies, Aerospace'
  },
  {
    id: 10,
    title: 'AI Autonomous Systems',
    description: 'AI solutions for autonomous vehicles, drones, and robotic systems with advanced perception and decision-making.',
    icon: Car,
    category: 'AI Autonomous',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous vehicle AI systems',
      'Drone fleet management AI',
      'Robotic process automation',
      'Computer vision for autonomy',
      'Path planning & navigation',
      'Collision avoidance systems',
      'Real-time decision making',
      'Safety & compliance monitoring'
    ],
    benefits: [
      'Enable fully autonomous operations',
      'Improve safety by 95%',
      'Reduce operational costs by 50%',
      'Increase efficiency by 70%'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive, Logistics, Agriculture, Manufacturing, Transportation'
  },
  {
    id: 11,
    title: 'AI Legal & Compliance Solutions',
    description: 'AI-powered legal research, contract analysis, and compliance monitoring for legal professionals.',
    icon: BookOpen,
    category: 'AI Legal',
    price: 'Starting at $2,800/month',
    features: [
      'Legal document analysis',
      'Contract review & extraction',
      'Case law research & analysis',
      'Compliance monitoring',
      'Risk assessment & mitigation',
      'Legal precedent identification',
      'Document automation',
      'Regulatory change tracking'
    ],
    benefits: [
      'Reduce legal research time by 80%',
      'Improve accuracy by 90%',
      'Lower legal costs by 60%',
      'Ensure compliance automatically'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Compliance teams'
  },
  {
    id: 12,
    title: 'AI Financial Services & Trading',
    description: 'AI solutions for financial analysis, algorithmic trading, risk management, and fraud detection.',
    icon: DollarSign,
    category: 'AI Finance',
    price: 'Starting at $3,200/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment & management',
      'Fraud detection & prevention',
      'Credit scoring & underwriting',
      'Portfolio optimization',
      'Market analysis & prediction',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve trading performance by 40%',
      'Reduce fraud losses by 85%',
      'Optimize portfolio returns',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Banks, Investment firms, Insurance companies, Fintech'
  },
  {
    id: 13,
    title: 'AI Agriculture & Food Tech',
    description: 'AI solutions for precision agriculture, crop monitoring, and food production optimization.',
    icon: Sprout,
    category: 'AI Agriculture',
    price: 'Starting at $2,500/month',
    features: [
      'Crop monitoring & analysis',
      'Yield prediction & optimization',
      'Pest & disease detection',
      'Soil analysis & recommendations',
      'Weather prediction & planning',
      'Automated farming systems',
      'Supply chain optimization',
      'Quality control & grading'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 40%',
      'Lower pesticide use by 50%',
      'Improve food quality'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Farmers, Agribusiness, Food companies, Research institutions'
  },
  {
    id: 14,
    title: 'AI Energy & Utilities',
    description: 'AI solutions for energy management, grid optimization, and renewable energy integration.',
    icon: Zap,
    category: 'AI Energy',
    price: 'Starting at $2,800/month',
    features: [
      'Smart grid optimization',
      'Energy consumption analysis',
      'Renewable energy forecasting',
      'Demand response management',
      'Predictive maintenance',
      'Energy trading optimization',
      'Carbon footprint tracking',
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Improve grid efficiency by 35%',
      'Optimize renewable integration',
      'Meet sustainability goals'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Utility companies, Energy providers, Manufacturing, Government'
  },
  {
    id: 15,
    title: 'AI Education & Learning',
    description: 'AI-powered educational platforms with personalized learning, adaptive content, and intelligent tutoring.',
    icon: GraduationCap,
    category: 'AI Education',
    price: 'Starting at $1,800/month',
    features: [
      'Personalized learning paths',
      'Adaptive content delivery',
      'Intelligent tutoring systems',
      'Learning analytics & insights',
      'Automated assessment & grading',
      'Multi-language support',
      'Accessibility features',
      'Progress tracking & reporting'
    ],
    benefits: [
      'Improve learning outcomes by 50%',
      'Personalize education for each student',
      'Reduce teaching workload by 40%',
      'Enable scalable education'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Schools, Universities, Online education, Corporate training'
  },
  // New Advanced AI Services
  {
    id: 21,
    title: 'AI-Powered Code Generation',
    description: 'Automated code generation and software development assistance using advanced AI models.',
    icon: Code,
    category: 'Development AI',
    price: 'Starting at $3,500/month',
    features: [
      'Automated code generation',
      'Code review and optimization',
      'Bug detection and fixing',
      'Documentation generation',
      'Test case creation',
      'API integration assistance',
      'Multi-language support',
      'Custom model training'
    ],
    benefits: [
      'Reduce development time by 60%',
      'Improve code quality by 40%',
      'Automate repetitive coding tasks',
      'Accelerate time-to-market'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Software development, IT consulting, Tech startups'
  },
  {
    id: 22,
    title: 'AI Content Moderation',
    description: 'Automated content moderation and safety systems for platforms and communities.',
    icon: Shield,
    category: 'Content AI',
    price: 'Starting at $2,200/month',
    features: [
      'Real-time content filtering',
      'Image and video moderation',
      'Hate speech detection',
      'Spam and fraud prevention',
      'Custom policy enforcement',
      'Multi-language support',
      'Human review integration',
      'Analytics and reporting'
    ],
    benefits: [
      'Reduce moderation costs by 80%',
      'Improve response time by 95%',
      'Maintain platform safety',
      'Scale content review operations'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Social media, Forums, E-commerce, Gaming platforms'
  },
  {
    id: 23,
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization systems for user experiences, recommendations, and content delivery.',
    icon: Users,
    category: 'Personalization AI',
    price: 'Starting at $2,800/month',
    features: [
      'User behavior analysis',
      'Dynamic content personalization',
      'Product recommendation engine',
      'A/B testing automation',
      'Real-time adaptation',
      'Cross-platform consistency',
      'Privacy-compliant tracking',
      'Performance optimization'
    ],
    benefits: [
      'Increase engagement by 45%',
      'Boost conversion rates by 35%',
      'Improve user satisfaction',
      'Maximize revenue potential'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Mobile apps'
  },
  {
    id: 24,
    title: 'AI Voice Cloning & Synthesis',
    description: 'High-quality voice synthesis and cloning for various applications and use cases.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,500/month',
    features: [
      'Voice cloning and synthesis',
      'Multi-language voice generation',
      'Emotion and tone control',
      'Real-time voice conversion',
      'Custom voice training',
      'API integration',
      'High-quality audio output',
      'Privacy protection'
    ],
    benefits: [
      'Create unique voice experiences',
      'Reduce voiceover costs by 70%',
      'Enable multilingual content',
      'Maintain brand consistency'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Media production, E-learning, Accessibility, Entertainment'
  },
  {
    id: 25,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning and behavioral analysis.',
    icon: Lock,
    category: 'Security AI',
    price: 'Starting at $3,200/month',
    features: [
      'Real-time fraud detection',
      'Behavioral pattern analysis',
      'Transaction monitoring',
      'Risk scoring and assessment',
      'Anomaly detection',
      'Multi-channel protection',
      'False positive reduction',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce fraud losses by 85%',
      'Decrease false positives by 60%',
      'Improve detection speed by 90%',
      'Enhance customer trust'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Payment processors'
  },
  {
    id: 26,
    title: 'AI Document Intelligence',
    description: 'Intelligent document processing, extraction, and analysis for business automation.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $2,000/month',
    features: [
      'Document classification',
      'Data extraction and parsing',
      'OCR and text recognition',
      'Form processing automation',
      'Contract analysis',
      'Compliance checking',
      'Multi-format support',
      'Workflow integration'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual data entry by 95%',
      'Improve accuracy by 90%',
      'Streamline business processes'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Legal, Finance, Healthcare, Government, Insurance'
  },
  {
    id: 27,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and optimization algorithms.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $4,000/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route and logistics planning',
      'Supplier risk assessment',
      'Cost optimization',
      'Real-time tracking',
      'Disruption prediction',
      'Sustainability metrics'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times by 40%',
      'Minimize supply disruptions',
      'Optimize resource utilization'
    ],
    marketPrice: '$6,000-18,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Distribution'
  },
  {
    id: 28,
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis and treatment recommendation systems for healthcare professionals.',
    icon: Stethoscope,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Symptom assessment',
      'Treatment recommendations',
      'Drug interaction checking',
      'Patient risk stratification',
      'Clinical decision support',
      'Integration with EHR systems',
      'Regulatory compliance'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce misdiagnosis by 50%',
      'Accelerate treatment decisions',
      'Enhance patient outcomes'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Hospitals, Clinics, Medical practices, Telemedicine'
  },
  {
    id: 29,
    title: 'AI Trading Algorithm Development',
    description: 'Advanced algorithmic trading systems with machine learning and market analysis capabilities.',
    icon: TrendingUp,
    category: 'FinTech AI',
    price: 'Starting at $6,000/month',
    features: [
      'Market analysis and prediction',
      'Algorithmic trading strategies',
      'Risk management systems',
      'Portfolio optimization',
      'Real-time market monitoring',
      'Backtesting and validation',
      'Regulatory compliance',
      'Performance analytics'
    ],
    benefits: [
      'Improve trading performance by 35%',
      'Reduce risk exposure by 40%',
      'Automate trading decisions',
      'Maximize portfolio returns'
    ],
    marketPrice: '$10,000-30,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Investment firms, Hedge funds, Trading companies, Financial advisors'
  },
  {
    id: 30,
    title: 'AI-Powered Video Analytics',
    description: 'Advanced video analysis and understanding for security, marketing, and business intelligence.',
    icon: Video,
    category: 'Video AI',
    price: 'Starting at $2,800/month',
    features: [
      'Object and person detection',
      'Behavioral analysis',
      'Facial recognition',
      'Crowd monitoring',
      'Anomaly detection',
      'Real-time alerts',
      'Video search and indexing',
      'Privacy protection'
    ],
    benefits: [
      'Enhance security monitoring',
      'Improve operational efficiency',
      'Gain business insights',
      'Reduce manual monitoring costs'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Security, Retail, Transportation, Smart cities'
  },
  {
    id: 31,
    title: 'AI Language Translation & Localization',
    description: 'Advanced multilingual translation and localization services powered by AI.',
    icon: Globe,
    category: 'Language AI',
    price: 'Starting at $1,800/month',
    features: [
      'Real-time translation',
      'Document translation',
      'Website localization',
      'Voice translation',
      'Cultural adaptation',
      'Quality assurance',
      'API integration',
      'Custom terminology'
    ],
    benefits: [
      'Reach global audiences',
      'Reduce translation costs by 60%',
      'Improve translation accuracy',
      'Accelerate time-to-market'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Global businesses, E-commerce, Media, Education'
  },
  {
    id: 32,
    title: 'AI-Powered Email Marketing',
    description: 'Intelligent email marketing automation with personalization and optimization capabilities.',
    icon: Mail,
    category: 'Marketing AI',
    price: 'Starting at $2,200/month',
    features: [
      'Automated email campaigns',
      'Personalized content generation',
      'Send time optimization',
      'Subject line optimization',
      'A/B testing automation',
      'Segmentation and targeting',
      'Performance analytics',
      'Deliverability optimization'
    ],
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 50%',
      'Improve conversion rates by 35%',
      'Reduce campaign management time'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing agencies, E-commerce, SaaS, Enterprise'
  },
  {
    id: 33,
    title: 'AI-Powered Search Engine Optimization',
    description: 'Intelligent SEO optimization and content strategy using AI and machine learning.',
    icon: Search,
    category: 'SEO AI',
    price: 'Starting at $2,500/month',
    features: [
      'Keyword research and analysis',
      'Content optimization suggestions',
      'Technical SEO auditing',
      'Competitor analysis',
      'Ranking prediction',
      'Content gap analysis',
      'Link building strategies',
      'Performance tracking'
    ],
    benefits: [
      'Improve search rankings by 60%',
      'Increase organic traffic by 80%',
      'Reduce SEO management time',
      'Maximize content ROI'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Digital marketing, E-commerce, Content creators, Agencies'
  },
  {
    id: 34,
    title: 'AI-Powered HR & Recruitment',
    description: 'Intelligent human resources and recruitment automation with AI-powered candidate matching.',
    icon: Users,
    category: 'HR AI',
    price: 'Starting at $2,800/month',
    features: [
      'Resume screening and parsing',
      'Candidate matching and ranking',
      'Interview scheduling automation',
      'Skills assessment',
      'Bias detection and mitigation',
      'Employee sentiment analysis',
      'Performance prediction',
      'Talent pipeline management'
    ],
    benefits: [
      'Reduce hiring time by 50%',
      'Improve candidate quality by 40%',
      'Eliminate hiring bias',
      'Enhance employee retention'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'HR departments, Recruitment agencies, Enterprise, Startups'
  },
  {
    id: 35,
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent predictive maintenance systems for equipment and infrastructure monitoring.',
    icon: Settings,
    category: 'Maintenance AI',
    price: 'Starting at $3,200/month',
    features: [
      'Equipment health monitoring',
      'Failure prediction algorithms',
      'Maintenance scheduling optimization',
      'Sensor data analysis',
      'Root cause analysis',
      'Cost optimization',
      'Real-time alerts',
      'Integration with IoT systems'
    ],
    benefits: [
      'Reduce maintenance costs by 30%',
      'Prevent unplanned downtime by 80%',
      'Extend equipment lifespan by 25%',
      'Optimize maintenance schedules'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Manufacturing, Utilities, Transportation, Facilities management'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Process Automation", count: aiServices.filter(s => s.category === "Process Automation").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Development AI", count: aiServices.filter(s => s.category === "Development AI").length },
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length },
  { name: "Document AI", count: aiServices.filter(s => s.category === "Document AI").length },
  { name: "Video AI", count: aiServices.filter(s => s.category === "Video AI").length },
  { name: "Language AI", count: aiServices.filter(s => s.category === "Language AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "SEO AI", count: aiServices.filter(s => s.category === "SEO AI").length },
  { name: "HR AI", count: aiServices.filter(s => s.category === "HR AI").length },
  { name: "Maintenance AI", count: aiServices.filter(s => s.category === "Maintenance AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services and solutions for businesses. Machine learning, computer vision, NLP, and more." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                AI Services & Solutions
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your business with cutting-edge artificial intelligence. From machine learning to computer vision, we deliver AI solutions that drive real results.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started Today
                </Link>
                <Link href="#services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  View Our Services
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-gray-500">Setup: {service.setupTime}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                      href="/contact" 
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact us today to discuss your AI needs and get a custom solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
