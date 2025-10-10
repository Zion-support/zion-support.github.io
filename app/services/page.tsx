'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes with cutting-edge machine learning and deep learning technologies.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting', 'Deep Learning', 'Neural Networks', 'AI Model Training'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true,
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns and intelligent optimization.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    
    // Cloud Services
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection and compliance management.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', 'Monitoring'],
      price: 'Starting at $599/month',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $799/month',
      category: 'Cloud Services'
    },
    
    // Cybersecurity
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance', 'Threat Intelligence'],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your defenses.',
      features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Security', 'Web Application Testing', 'Reporting'],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting solutions.',
      features: ['Regulatory Compliance', 'Automated Monitoring', 'Audit Trails', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Cybersecurity'
    },
    
    // Data Analytics
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing and analytics platforms.',
      features: ['Data Processing', 'Real-time Analytics', 'Scalable Infrastructure', 'Machine Learning', 'Data Lakes'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with interactive dashboards and automated reporting.',
      features: ['Interactive Dashboards', 'Automated Reports', 'Data Integration', 'Self-service Analytics', 'Mobile Access'],
      price: 'Starting at $899/month',
      category: 'Data Analytics'
    },
    
    // Mobile Development
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile App Maintenance',
      description: 'Ongoing maintenance and updates for your mobile applications with performance optimization.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', 'App Store Management'],
      price: 'Starting at $299/month',
      category: 'Mobile Development'
    },
    
    // Database Services
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Database Services',
      popular: true
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Seamless database migration with zero downtime and data integrity preservation.',
      features: ['Zero Downtime', 'Data Integrity', 'Performance Optimization', 'Testing', 'Documentation'],
      price: 'Starting at $1,999/migration',
      category: 'Database Services'
    },
    
    // Automation
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true
    },
    {
      icon: Zap,
      title: 'IT Automation',
      description: 'Automate IT operations with intelligent monitoring, deployment, and maintenance solutions.',
      features: ['Infrastructure Automation', 'Deployment Automation', 'Monitoring', 'Self-healing', 'Cost Optimization'],
      price: 'Starting at $799/month',
      category: 'Automation'
    },
    
    // Web Development
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features and integrations.',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimization'],
      price: 'Starting at $1,999/month',
      category: 'Web Development'
    },
    
    // IT Services
    {
      icon: Database,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'IT Services'
    },
    
    // Advanced AI Services
    {
      icon: Brain,
      title: 'AI Quantum Computing',
      description: 'Revolutionary quantum computing solutions for complex problem solving and optimization.',
      features: ['Quantum Algorithms', 'Quantum Machine Learning', 'Optimization Problems', 'Cryptography', 'Simulation'],
      price: 'Starting at $5,000/month',
      category: 'AI Services',
      popular: true,
      trial: '14-day free trial',
      setup: '4-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Autonomous Systems',
      description: 'Self-managing AI systems that operate independently with minimal human intervention.',
      features: ['Autonomous Decision Making', 'Self-Learning', 'Adaptive Behavior', 'Real-time Processing', 'Safety Systems'],
      price: 'Starting at $3,500/month',
      category: 'AI Services',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Holographic Workspace',
      description: 'Next-generation holographic AI workspace for immersive collaboration and visualization.',
      features: ['3D Holographic Display', 'Gesture Control', 'Spatial Computing', 'Collaborative Workspace', 'AR/VR Integration'],
      price: 'Starting at $2,999/month',
      category: 'AI Services',
      popular: true,
      trial: '7-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Brain,
      title: 'AI 3D Generation',
      description: 'Create stunning 3D models, animations, and virtual environments with AI-powered generation.',
      features: ['3D Model Generation', 'Animation Creation', 'Texture Generation', 'Lighting Optimization', 'Rendering'],
      price: 'Starting at $1,299/month',
      category: 'AI Services',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Agricultural Intelligence',
      description: 'Smart farming solutions with AI-powered crop monitoring, yield prediction, and resource optimization.',
      features: ['Crop Monitoring', 'Yield Prediction', 'Soil Analysis', 'Pest Detection', 'Resource Optimization'],
      price: 'Starting at $899/month',
      category: 'AI Services',
      popular: true,
      trial: '30-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Climate Solutions',
      description: 'Environmental AI solutions for climate monitoring, carbon tracking, and sustainability optimization.',
      features: ['Climate Monitoring', 'Carbon Tracking', 'Sustainability Analytics', 'Environmental Impact', 'Green Energy'],
      price: 'Starting at $1,199/month',
      category: 'AI Services',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Drug Discovery',
      description: 'Accelerate pharmaceutical research with AI-powered drug discovery and molecular analysis.',
      features: ['Molecular Analysis', 'Drug Design', 'Toxicity Prediction', 'Clinical Trials', 'Regulatory Compliance'],
      price: 'Starting at $4,999/month',
      category: 'AI Services',
      popular: true,
      trial: '14-day free trial',
      setup: '4-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Energy Grid Management',
      description: 'Intelligent energy grid optimization with AI-powered load balancing and renewable energy integration.',
      features: ['Load Balancing', 'Renewable Integration', 'Demand Forecasting', 'Grid Optimization', 'Energy Storage'],
      price: 'Starting at $2,499/month',
      category: 'AI Services',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Brain,
      title: 'AI Financial Crime Detection',
      description: 'Advanced fraud detection and financial crime prevention with AI-powered analysis.',
      features: ['Fraud Detection', 'Money Laundering', 'Transaction Analysis', 'Risk Assessment', 'Compliance'],
      price: 'Starting at $1,799/month',
      category: 'AI Services',
      popular: true,
      trial: '14-day free trial',
      setup: '2-week implementation'
    },
    
    // Advanced Cloud Services
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Comprehensive multi-cloud strategy with seamless integration across AWS, Azure, and Google Cloud.',
      features: ['Multi-Cloud Strategy', 'Cost Optimization', 'Security Management', 'Performance Monitoring', 'Disaster Recovery'],
      price: 'Starting at $1,999/month',
      category: 'Cloud Services',
      popular: true,
      trial: '30-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Cloud,
      title: 'Edge Computing Solutions',
      description: 'Deploy AI and applications at the edge for ultra-low latency and real-time processing.',
      features: ['Edge AI Deployment', 'Real-time Processing', 'Low Latency', 'Offline Capability', 'IoT Integration'],
      price: 'Starting at $1,499/month',
      category: 'Cloud Services',
      popular: true,
      trial: '21-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Cloud,
      title: 'Serverless Architecture',
      description: 'Build and deploy serverless applications with automatic scaling and cost optimization.',
      features: ['Auto-scaling', 'Cost Optimization', 'Event-driven Architecture', 'Microservices', 'API Management'],
      price: 'Starting at $799/month',
      category: 'Cloud Services',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Development',
      description: 'Modern cloud-native application development with containerization and orchestration.',
      features: ['Containerization', 'Kubernetes', 'Microservices', 'CI/CD Pipelines', 'Monitoring'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true,
      trial: '21-day free trial',
      setup: '2-week implementation'
    },
    
    // Advanced Cybersecurity
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Implement zero trust security architecture with continuous verification and least privilege access.',
      features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Continuous Monitoring', 'Threat Detection'],
      price: 'Starting at $1,599/month',
      category: 'Cybersecurity',
      popular: true,
      trial: '14-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Shield,
      title: 'AI-Powered Threat Hunting',
      description: 'Proactive threat hunting with AI-powered analysis and behavioral detection.',
      features: ['Behavioral Analysis', 'Threat Hunting', 'Incident Response', 'Forensics', 'Threat Intelligence'],
      price: 'Starting at $2,299/month',
      category: 'Cybersecurity',
      popular: true,
      trial: '7-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Shield,
      title: 'Security Orchestration',
      description: 'Automate security operations with AI-powered orchestration and response.',
      features: ['Security Automation', 'Incident Response', 'Workflow Orchestration', 'Integration', 'Analytics'],
      price: 'Starting at $1,399/month',
      category: 'Cybersecurity',
      popular: true,
      trial: '14-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Shield,
      title: 'Compliance Automation',
      description: 'Automate compliance monitoring and reporting for various regulatory frameworks.',
      features: ['Regulatory Compliance', 'Automated Reporting', 'Risk Assessment', 'Audit Trails', 'Documentation'],
      price: 'Starting at $999/month',
      category: 'Cybersecurity',
      popular: true,
      trial: '21-day free trial',
      setup: '1-week implementation'
    },
    
    // Advanced Data Analytics
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Process and analyze data in real-time with streaming analytics and instant insights.',
      features: ['Streaming Analytics', 'Real-time Processing', 'Instant Insights', 'Event Processing', 'Alerting'],
      price: 'Starting at $1,199/month',
      category: 'Data Analytics',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors with advanced predictive modeling and machine learning.',
      features: ['Predictive Modeling', 'Forecasting', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning'],
      price: 'Starting at $1,599/month',
      category: 'Data Analytics',
      popular: true,
      trial: '21-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: BarChart3,
      title: 'Data Lake Solutions',
      description: 'Store and process massive amounts of structured and unstructured data with data lake architecture.',
      features: ['Data Lake Architecture', 'Data Ingestion', 'Data Processing', 'Data Governance', 'Analytics'],
      price: 'Starting at $1,899/month',
      category: 'Data Analytics',
      popular: true,
      trial: '30-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: BarChart3,
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior, preferences, and lifetime value with advanced analytics.',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Lifetime Value', 'Churn Prediction', 'Personalization'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics',
      popular: true,
      trial: '14-day free trial',
      setup: '2-week implementation'
    },
    
    // Advanced Mobile Development
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Build native-quality mobile apps for iOS and Android with a single codebase.',
      features: ['React Native', 'Flutter', 'Xamarin', 'Native Performance', 'Code Reuse'],
      price: 'Starting at $2,499/month',
      category: 'Mobile Development',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Create app-like web experiences that work offline and can be installed on devices.',
      features: ['Offline Functionality', 'App-like Experience', 'Push Notifications', 'Installation', 'Responsive Design'],
      price: 'Starting at $1,799/month',
      category: 'Mobile Development',
      popular: true,
      trial: '14-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Smartphone,
      title: 'Mobile AI Integration',
      description: 'Integrate AI capabilities into mobile apps for enhanced user experiences.',
      features: ['On-device AI', 'Computer Vision', 'Natural Language Processing', 'Machine Learning', 'Real-time Processing'],
      price: 'Starting at $2,199/month',
      category: 'Mobile Development',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    
    // Advanced Database Services
    {
      icon: Database,
      title: 'NoSQL Database Solutions',
      description: 'Design and implement NoSQL databases for scalable, flexible data storage.',
      features: ['MongoDB', 'Cassandra', 'Redis', 'DynamoDB', 'CouchDB'],
      price: 'Starting at $1,099/month',
      category: 'Database Services',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    {
      icon: Database,
      title: 'Graph Database Solutions',
      description: 'Build knowledge graphs and relationship databases for complex data relationships.',
      features: ['Neo4j', 'Graph Analytics', 'Relationship Mapping', 'Knowledge Graphs', 'Network Analysis'],
      price: 'Starting at $1,399/month',
      category: 'Database Services',
      popular: true,
      trial: '21-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Database,
      title: 'Time Series Databases',
      description: 'Optimize databases for time-series data with high-performance storage and analytics.',
      features: ['InfluxDB', 'TimescaleDB', 'High Performance', 'Time Series Analytics', 'IoT Data'],
      price: 'Starting at $899/month',
      category: 'Database Services',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    
    // Advanced Automation
    {
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered decision making and exception handling.',
      features: ['Process Mining', 'Workflow Automation', 'Exception Handling', 'AI Decision Making', 'Process Optimization'],
      price: 'Starting at $1,499/month',
      category: 'Automation',
      popular: true,
      trial: '21-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Zap,
      title: 'Robotic Process Automation',
      description: 'Deploy software robots to automate repetitive tasks and improve efficiency.',
      features: ['Task Automation', 'UI Automation', 'Data Processing', 'Integration', 'Monitoring'],
      price: 'Starting at $999/month',
      category: 'Automation',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    {
      icon: Zap,
      title: 'Hyperautomation',
      description: 'Combine multiple automation technologies with AI and machine learning for maximum efficiency.',
      features: ['Multi-tool Integration', 'AI Enhancement', 'End-to-end Automation', 'Continuous Improvement', 'Analytics'],
      price: 'Starting at $2,299/month',
      category: 'Automation',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    
    // Advanced Web Development
    {
      icon: Globe,
      title: 'Progressive Web Applications',
      description: 'Build modern web applications with app-like features and offline capabilities.',
      features: ['Service Workers', 'Offline Support', 'Push Notifications', 'App Shell', 'Responsive Design'],
      price: 'Starting at $1,599/month',
      category: 'Web Development',
      popular: true,
      trial: '14-day free trial',
      setup: '2-week implementation'
    },
    {
      icon: Globe,
      title: 'Microservices Architecture',
      description: 'Design and implement microservices architecture for scalable, maintainable applications.',
      features: ['Service Decomposition', 'API Gateway', 'Service Discovery', 'Load Balancing', 'Monitoring'],
      price: 'Starting at $2,199/month',
      category: 'Web Development',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Globe,
      title: 'Headless CMS Solutions',
      description: 'Build content management systems with flexible, API-first architecture.',
      features: ['API-first Design', 'Multi-channel Publishing', 'Content Modeling', 'Developer Experience', 'Scalability'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true,
      trial: '14-day free trial',
      setup: '1-week implementation'
    },
    
    // Emerging Technologies
    {
      icon: Globe,
      title: '5G Implementation',
      description: 'Leverage 5G technology for ultra-fast connectivity and new application possibilities.',
      features: ['5G Network Design', 'Edge Computing', 'IoT Integration', 'Low Latency', 'High Bandwidth'],
      price: 'Starting at $3,999/month',
      category: 'Emerging Technologies',
      popular: true,
      trial: '14-day free trial',
      setup: '4-week implementation'
    },
    {
      icon: Globe,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart Contracts', 'Decentralized Apps', 'Cryptocurrency Integration', 'Supply Chain', 'Identity Management'],
      price: 'Starting at $2,999/month',
      category: 'Emerging Technologies',
      popular: true,
      trial: '21-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Globe,
      title: 'IoT Platform Development',
      description: 'Build comprehensive IoT platforms for connected devices and data management.',
      features: ['Device Management', 'Data Collection', 'Real-time Processing', 'Analytics', 'Security'],
      price: 'Starting at $1,899/month',
      category: 'Emerging Technologies',
      popular: true,
      trial: '30-day free trial',
      setup: '3-week implementation'
    },
    {
      icon: Globe,
      title: 'AR/VR Development',
      description: 'Create immersive augmented and virtual reality experiences for various industries.',
      features: ['3D Modeling', 'Spatial Computing', 'Gesture Recognition', 'Haptic Feedback', 'Multi-platform'],
      price: 'Starting at $2,499/month',
      category: 'Emerging Technologies',
      popular: true,
      trial: '14-day free trial',
      setup: '3-week implementation'
    }
  ];

  const categories = [
    'All',
    'AI Services',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Database Services',
    'Automation',
    'Web Development',
    'IT Services',
    'Emerging Technologies'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
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
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                {categories.slice(1).map((category) => (
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

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    {service.trial && (
                      <div className="text-sm text-green-400 font-medium mb-1">{service.trial}</div>
                    )}
                    {service.setup && (
                      <div className="text-sm text-gray-400">{service.setup}</div>
                    )}
                    {!service.trial && !service.setup && (
                      <div className="text-sm text-gray-300">Contact for custom pricing</div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
