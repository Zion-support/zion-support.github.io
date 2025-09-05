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
  // NEW ADVANCED AI SERVICES
  {
    id: 16,
    title: 'AI Edge Computing Solutions',
    description: 'Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities.',
    icon: Cpu,
    category: 'Edge AI',
    price: 'Starting at $2,200/month',
    features: [
      'Edge AI model deployment',
      'Real-time inference processing',
      'Offline AI capabilities',
      'Edge device management',
      'Data synchronization',
      'Model optimization for edge',
      'Security at the edge',
      'Performance monitoring'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Enable offline AI processing',
      'Lower bandwidth requirements',
      'Improve data privacy'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'IoT companies, Manufacturing, Retail, Healthcare, Automotive'
  },
  {
    id: 17,
    title: 'AI Cybersecurity & Threat Detection',
    description: 'Advanced AI-powered cybersecurity solutions for threat detection, prevention, and response.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $3,500/month',
    features: [
      'Real-time threat detection',
      'Behavioral analysis & anomaly detection',
      'Automated incident response',
      'Malware & virus detection',
      'Network security monitoring',
      'Phishing & fraud prevention',
      'Security orchestration',
      'Compliance monitoring'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      'Automate security responses',
      'Improve security posture'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprises, Government, Financial services, Healthcare, Critical infrastructure'
  },
  {
    id: 18,
    title: 'AI Supply Chain Intelligence',
    description: 'Comprehensive AI solutions for supply chain optimization, risk management, and demand forecasting.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $2,800/month',
    features: [
      'Demand forecasting & planning',
      'Supply chain risk assessment',
      'Vendor performance analytics',
      'Inventory optimization',
      'Route & logistics optimization',
      'Quality control automation',
      'Sustainability tracking',
      'Real-time visibility'
    ],
    benefits: [
      'Reduce supply chain costs by 25%',
      'Improve forecast accuracy by 40%',
      'Minimize supply disruptions',
      'Optimize inventory levels'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce, Food & beverage'
  },
  {
    id: 19,
    title: 'AI Voice & Speech Technology',
    description: 'Advanced voice AI solutions including speech recognition, synthesis, and conversational interfaces.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $1,800/month',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice biometrics & authentication',
      'Conversational AI interfaces',
      'Multi-language support',
      'Voice emotion analysis',
      'Real-time transcription',
      'Voice command processing'
    ],
    benefits: [
      'Improve accessibility by 60%',
      'Enable hands-free operations',
      'Enhance user experience',
      'Reduce interaction barriers'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Customer service, Healthcare, Education, Accessibility, IoT devices'
  },
  {
    id: 20,
    title: 'AI Healthcare Diagnostics',
    description: 'AI-powered medical imaging analysis, diagnostic assistance, and treatment recommendation systems.',
    icon: Stethoscope,
    category: 'Healthcare AI',
    price: 'Starting at $4,500/month',
    features: [
      'Medical image analysis (X-ray, MRI, CT)',
      'Diagnostic decision support',
      'Treatment recommendation systems',
      'Drug interaction checking',
      'Patient risk stratification',
      'Clinical trial optimization',
      'Electronic health record analysis',
      'Telemedicine AI support'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce misdiagnosis by 50%',
      'Accelerate treatment decisions',
      'Enhance patient outcomes'
    ],
    marketPrice: '$7,000-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Hospitals, Clinics, Medical imaging centers, Pharmaceutical companies, Research institutions'
  },
  {
    id: 21,
    title: 'AI FinTech & Banking Solutions',
    description: 'Comprehensive AI solutions for financial services including fraud detection, credit scoring, and robo-advisory.',
    icon: DollarSign,
    category: 'FinTech AI',
    price: 'Starting at $3,200/month',
    features: [
      'Fraud detection & prevention',
      'Credit scoring & underwriting',
      'Algorithmic trading systems',
      'Robo-advisory services',
      'Risk assessment & management',
      'Regulatory compliance automation',
      'Customer service automation',
      'Financial planning assistance'
    ],
    benefits: [
      'Reduce fraud losses by 85%',
      'Improve credit decisions by 40%',
      'Automate compliance processes',
      'Enhance customer experience'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Credit unions, Investment firms, Insurance companies, Fintech startups'
  },
  {
    id: 22,
    title: 'AI Content Generation & Marketing',
    description: 'AI-powered content creation, marketing automation, and personalized customer engagement solutions.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,500/month',
    features: [
      'Automated content generation',
      'Personalized marketing campaigns',
      'Social media content creation',
      'Email marketing optimization',
      'SEO content optimization',
      'Content performance analysis',
      'Brand voice consistency',
      'Multi-language content creation'
    ],
    benefits: [
      'Increase content production by 300%',
      'Improve engagement rates by 45%',
      'Reduce content costs by 60%',
      'Maintain brand consistency'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, Media companies, Content creators, SaaS companies'
  },
  {
    id: 23,
    title: 'AI Robotics & Automation',
    description: 'AI solutions for robotic process automation, industrial robots, and intelligent automation systems.',
    icon: Bot,
    category: 'Robotics AI',
    price: 'Starting at $3,800/month',
    features: [
      'Robotic process automation (RPA)',
      'Industrial robot programming',
      'Computer vision for robots',
      'Autonomous navigation systems',
      'Human-robot collaboration',
      'Quality control automation',
      'Predictive maintenance',
      'Safety monitoring systems'
    ],
    benefits: [
      'Increase productivity by 50%',
      'Reduce operational costs by 40%',
      'Improve quality consistency',
      'Enable 24/7 operations'
    ],
    marketPrice: '$6,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Manufacturing, Warehousing, Healthcare, Agriculture, Construction, Service industries'
  },
  {
    id: 24,
    title: 'AI Environmental Monitoring',
    description: 'AI-powered environmental monitoring, climate analysis, and sustainability optimization solutions.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $2,200/month',
    features: [
      'Air quality monitoring & prediction',
      'Water quality analysis',
      'Climate change modeling',
      'Pollution source identification',
      'Environmental impact assessment',
      'Sustainability reporting',
      'Carbon footprint tracking',
      'Ecosystem health monitoring'
    ],
    benefits: [
      'Improve environmental outcomes by 40%',
      'Enable proactive environmental management',
      'Meet sustainability goals',
      'Reduce environmental risks'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Government, Energy companies, Manufacturing, Research institutions'
  },
  {
    id: 25,
    title: 'AI Sports Analytics & Performance',
    description: 'AI solutions for sports performance analysis, injury prevention, and team optimization.',
    icon: Trophy,
    category: 'Sports AI',
    price: 'Starting at $2,500/month',
    features: [
      'Performance analysis & tracking',
      'Injury prediction & prevention',
      'Tactical analysis & strategy',
      'Player scouting & recruitment',
      'Fan engagement optimization',
      'Broadcast enhancement',
      'Training optimization',
      'Real-time statistics'
    ],
    benefits: [
      'Improve athlete performance by 25%',
      'Reduce injury rates by 30%',
      'Enhance fan engagement',
      'Optimize team strategies'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Professional sports teams, Athletic organizations, Sports media, Fitness centers, Universities'
  },
  {
    id: 26,
    title: 'AI Real Estate Intelligence',
    description: 'AI-powered real estate analysis, property valuation, and market prediction solutions.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $1,800/month',
    features: [
      'Property valuation & pricing',
      'Market trend analysis',
      'Investment opportunity identification',
      'Property condition assessment',
      'Tenant screening & analysis',
      'Rental price optimization',
      'Neighborhood analysis',
      'Risk assessment'
    ],
    benefits: [
      'Improve property valuations by 20%',
      'Identify investment opportunities',
      'Optimize rental pricing',
      'Reduce investment risks'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Real estate agents, Property managers, Investors, Developers, Lenders'
  },
  {
    id: 27,
    title: 'AI Transportation & Logistics',
    description: 'AI solutions for transportation optimization, fleet management, and smart mobility.',
    icon: Truck,
    category: 'Transportation AI',
    price: 'Starting at $2,800/month',
    features: [
      'Route optimization & planning',
      'Fleet management & tracking',
      'Demand prediction & matching',
      'Autonomous vehicle systems',
      'Traffic flow optimization',
      'Maintenance scheduling',
      'Fuel efficiency optimization',
      'Safety monitoring'
    ],
    benefits: [
      'Reduce transportation costs by 25%',
      'Improve delivery times by 30%',
      'Optimize fleet utilization',
      'Enhance safety performance'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Logistics companies, Transportation providers, E-commerce, Delivery services, Fleet operators'
  },
  {
    id: 28,
    title: 'AI Gaming & Entertainment',
    description: 'AI solutions for game development, content generation, and personalized entertainment experiences.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $1,500/month',
    features: [
      'Procedural content generation',
      'AI-powered NPCs & characters',
      'Dynamic difficulty adjustment',
      'Player behavior analysis',
      'Content personalization',
      'Automated testing & QA',
      'Monetization optimization',
      'Real-time adaptation'
    ],
    benefits: [
      'Reduce development time by 40%',
      'Improve player engagement',
      'Personalize gaming experiences',
      'Optimize monetization'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Game developers, Entertainment companies, Streaming platforms, Esports organizations'
  },
  {
    id: 29,
    title: 'AI Research & Development',
    description: 'AI solutions for scientific research, drug discovery, and innovation acceleration.',
    icon: FlaskConical,
    category: 'Research AI',
    price: 'Starting at $4,000/month',
    features: [
      'Scientific literature analysis',
      'Hypothesis generation & testing',
      'Data mining & pattern recognition',
      'Simulation & modeling',
      'Collaborative research tools',
      'Patent analysis & insights',
      'Research trend identification',
      'Innovation opportunity mapping'
    ],
    benefits: [
      'Accelerate research by 50%',
      'Identify new opportunities',
      'Improve research efficiency',
      'Enable breakthrough discoveries'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Universities, Pharmaceutical companies, Government labs, Innovation centers'
  },
  {
    id: 30,
    title: 'AI Personalization Engine',
    description: 'Advanced AI personalization platform for websites, apps, and digital experiences.',
    icon: Users,
    category: 'Personalization AI',
    price: 'Starting at $1,200/month',
    features: [
      'User behavior analysis',
      'Content personalization',
      'Product recommendations',
      'Dynamic pricing optimization',
      'Email & message personalization',
      'A/B testing automation',
      'Customer journey optimization',
      'Real-time personalization'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Improve user engagement by 50%',
      'Boost customer satisfaction',
      'Optimize user experience'
    ],
    marketPrice: '$2,000-5,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, SaaS companies, Media platforms, Mobile apps, Digital agencies'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Climate", count: aiServices.filter(s => s.category === "AI Climate").length },
  { name: "AI Space", count: aiServices.filter(s => s.category === "AI Space").length },
  { name: "AI Autonomous", count: aiServices.filter(s => s.category === "AI Autonomous").length },
  { name: "AI Legal", count: aiServices.filter(s => s.category === "AI Legal").length },
  { name: "AI Finance", count: aiServices.filter(s => s.category === "AI Finance").length },
  { name: "AI Agriculture", count: aiServices.filter(s => s.category === "AI Agriculture").length },
  { name: "AI Energy", count: aiServices.filter(s => s.category === "AI Energy").length },
  { name: "AI Education", count: aiServices.filter(s => s.category === "AI Education").length },
  { name: "Edge AI", count: aiServices.filter(s => s.category === "Edge AI").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Robotics AI", count: aiServices.filter(s => s.category === "Robotics AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Sports AI", count: aiServices.filter(s => s.category === "Sports AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Transportation AI", count: aiServices.filter(s => s.category === "Transportation AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Research AI", count: aiServices.filter(s => s.category === "Research AI").length },
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and specialized AI solutions for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, AI development" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning to computer vision, 
                we provide comprehensive AI services that drive innovation and growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your business needs and industry requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{service.category}</span>
                    <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your AI needs and discover how our solutions can drive your business forward.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="tel:+13024640950" className="flex items-center text-lg hover:text-indigo-400 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-lg hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                {contactInfo.email}
              </a>
              <div className="flex items-center text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                {contactInfo.address}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}