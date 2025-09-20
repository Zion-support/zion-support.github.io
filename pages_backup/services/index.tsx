import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
const ServicesIndex: NextPage = () => {
  const services = [
    {
      id: 'ai-development',
      title: 'AI Development & Machine Learning',
      description: 'Custom AI solutions, machine learning models, and intelligent automation systems tailored to your business needs.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'Fraud Detection & Risk Assessment'
      ],
      pricing: 'Starting at $2,500/month',
      icon: '🧠',
      link: '/services/ai-development'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions & Infrastructure',
      description: 'Scalable cloud infrastructure, migration services, and DevOps automation for modern applications.',
      features: [
        'AWS, Azure, GCP Migration',
        'Container Orchestration (Kubernetes)',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery & Backup'
      ],
      pricing: 'Starting at $1,800/month',
      icon: '☁️',
      link: '/services/cloud-solutions'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Cryptocurrency Solutions',
      description: 'Secure blockchain development, smart contracts, and DeFi applications for the decentralized future.',
      features: [
        'Smart Contract Development',
        'DeFi Applications & Protocols',
        'NFT Marketplaces & Platforms',
        'Cryptocurrency Integration',
        'Token Development & ICOs',
        'Blockchain Security Audits'
      ],
      pricing: 'Starting at $3,500/month',
      icon: '🔗',
      link: '/services/blockchain'
    },
    {
      id: 'iot-platforms',
      title: 'IoT Platforms & Connected Solutions',
      description: 'Connected device solutions, sensor networks, and real-time data processing for smart environments.',
      features: [
        'Device Management & Monitoring',
        'Real-time Analytics & Dashboards',
        'Edge Computing Solutions',
        'Industrial IoT (IIoT)',
        'Sensor Data Processing',
        'Remote Device Control'
      ],
      pricing: 'Starting at $2,200/month',
      icon: '🌐',
      link: '/services/iot-platforms'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      description: 'Custom micro SAAS platforms and automation tools designed to streamline business processes.',
      features: [
        'Workflow Automation Tools',
        'Data Processing & Analytics',
        'API Integration Services',
        'Custom Dashboard Solutions',
        'Business Process Optimization',
        'Third-party Integrations'
      ],
      pricing: 'Starting at $1,500/month',
      icon: '⚡',
      link: '/products/micro-saas'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions and compliance services to protect your digital assets.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management (GDPR, HIPAA)',
        'Incident Response & Recovery',
        'Security Training & Awareness',
        'Vulnerability Management'
      ],
      pricing: 'Starting at $2,000/month',
      icon: '🔒',
      link: '/services/cybersecurity'
    },
    {
      id: 'web-development',
      title: 'Web & Mobile Development',
      description: 'Modern web applications, mobile apps, and progressive web apps built with cutting-edge technologies.',
      features: [
        'React, Vue.js, Angular Development',
        'Native & Cross-platform Mobile Apps',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'API Development & Integration',
        'Performance Optimization'
      ],
      pricing: 'Starting at $1,200/month',
      icon: '💻',
      link: '/services/web-development'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: [
        'Data Warehousing & ETL',
        'Business Intelligence Dashboards',
        'Real-time Data Processing',
        'Machine Learning Analytics',
        'Data Visualization',
        'Custom Reporting Solutions'
      ],
      pricing: 'Starting at $1,800/month',
      icon: '📊',
      link: '/services/data-analytics'
  const microSaasServices = [
    {
      name: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with predictive analytics and automated reporting",
      features: ["Custom dashboards", "Predictive modeling", "Automated alerts", "Multi-platform integration"],
      pricing: "Starting at $299/month",
      link: "/services/ai-analytics-dashboard"
    },
    {
      name: "Smart Document Processor",
      description: "Automated document processing with OCR, classification, and data extraction",
      features: ["OCR technology", "Document classification", "Data extraction", "API integration"],
      pricing: "Starting at $199/month",
      link: "/services/smart-document-processor"
    },
    {
      name: "Customer Experience Optimizer",
      description: "AI-driven customer journey mapping and optimization platform",
      features: ["Journey mapping", "Sentiment analysis", "A/B testing", "ROI tracking"],
      pricing: "Starting at $399/month",
      link: "/services/customer-experience-optimizer"
    },
    {
      name: "Automated Social Media Manager",
      description: "AI-powered social media scheduling, content creation, and engagement tracking",
      features: ["Content generation", "Optimal timing", "Engagement tracking", "Multi-platform support"],
      pricing: "Starting at $149/month",
      link: "/services/automated-social-media-manager"
    },
    {
      name: "Intelligent Inventory Manager",
      description: "Smart inventory optimization with demand forecasting and automated reordering",
      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Multi-location support"],
      pricing: "Starting at $249/month",
      link: "/services/intelligent-inventory-manager"
    }
  ];
  const itServices = [
    {
      name: "Cloud Migration & Architecture",
      description: "Complete cloud transformation with AWS, Azure, and Google Cloud expertise",
      features: ["Multi-cloud strategy", "Security implementation", "Cost optimization", "24/7 monitoring"],
      pricing: "Starting at $5,000/project",
      link: "/services/cloud-migration"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing protection",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      pricing: "Starting at $3,000/month",
      link: "/services/cybersecurity-solutions"
    },
    {
      name: "DevOps & CI/CD Implementation",
      description: "Automated deployment pipelines and infrastructure as code solutions",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring setup", "Performance optimization"],
      pricing: "Starting at $4,000/month",
      link: "/services/devops-implementation"
    },
    {
      name: "Database Design & Optimization",
      description: "High-performance database architecture and optimization services",
      features: ["Database design", "Performance tuning", "Backup strategies", "Scalability planning"],
      pricing: "Starting at $2,500/project",
      link: "/services/database-optimization"
    },
    {
      name: "API Development & Integration",
      description: "Custom API development and third-party system integration",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Documentation"],
      pricing: "Starting at $3,500/project",
      link: "/services/api-development"
    }
  ];
  const aiServices = [
    {
      name: "Custom AI Model Development",
      description: "Tailored machine learning models for your specific business needs",
      features: ["Custom model training", "Data preprocessing", "Model deployment", "Performance monitoring"],
      pricing: "Starting at $8,000/project",
      link: "/services/custom-ai-models"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and content generation",
      features: ["Text analysis", "Chatbot development", "Content generation", "Sentiment analysis"],
      pricing: "Starting at $4,500/project",
      link: "/services/nlp-solutions"
    },
    {
      name: "Computer Vision Solutions",
      description: "Image and video analysis with object detection and recognition capabilities",
      features: ["Object detection", "Image classification", "Video analysis", "Real-time processing"],
      pricing: "Starting at $6,000/project",
      link: "/services/computer-vision"
    },
    {
      name: "Predictive Analytics Platform",
      description: "Advanced forecasting and predictive modeling for business intelligence",
      features: ["Time series forecasting", "Risk assessment", "Trend analysis", "Automated insights"],
      pricing: "Starting at $5,500/month",
      link: "/services/predictive-analytics"
    },
    {
      name: "AI-Powered Automation",
      description: "Intelligent process automation to streamline business operations",
      features: ["Process mapping", "Workflow automation", "Decision trees", "Integration capabilities"],
      pricing: "Starting at $3,000/month",
      link: "/services/ai-automation"
    }
  ];
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Zap, Target, Users, BarChart3, ArrowRight, CheckCircle, Star, Award, Clock, Globe } from 'lucide-react';


export default function ServicesIndex() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">index</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default index;