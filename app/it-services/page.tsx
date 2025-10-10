'use client';
import React, { useState } from 'react';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, DollarSign, Clock as ClockIcon, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, MessageSquare, Calendar } from 'lucide-react';

export default function ITServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      category: 'Cloud Infrastructure & Migration',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and optimized performance',
          features: ['Multi-cloud Strategy', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Security Implementation', 'Performance Tuning'],
          pricing: 'Starting at $10,000',
          trial: 'Free consultation',
          timeline: '2-8 weeks',
          link: 'https://ziontechgroup.com/cloud-migration',
          popular: true
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable and secure infrastructure architecture tailored to your business needs',
          features: ['Network Design', 'Server Configuration', 'Load Balancing', 'Disaster Recovery', 'Scalability Planning'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/it-infrastructure',
          popular: true
        },
        {
          name: 'Database Management & Optimization',
          description: 'Comprehensive database administration with performance tuning and security hardening',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Scalability'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free health check',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/database-management',
          popular: false
        },
        {
          name: 'Cloud Cost Optimization',
          description: 'Reduce cloud costs by up to 40% with intelligent resource management and optimization',
          features: ['Cost Analysis', 'Resource Optimization', 'Auto-scaling', 'Reserved Instances', 'Cost Monitoring'],
          pricing: 'Starting at $3,000',
          trial: 'Free audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cloud-optimization',
          popular: false
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Enterprise Cybersecurity Suite',
          description: 'Comprehensive security solutions with 24/7 monitoring and threat detection',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free security audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cybersecurity',
          popular: true
        },
        {
          name: 'Compliance Management Platform',
          description: 'Ensure compliance with GDPR, HIPAA, SOX, and other industry regulations',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support', 'Policy Management'],
          pricing: 'Starting at $12,000',
          trial: 'Free compliance check',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/compliance-management',
          popular: true
        },
        {
          name: 'Security Awareness Training',
          description: 'Comprehensive employee security training with phishing simulation and assessment',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Assessment', 'Certification'],
          pricing: 'Starting at $3,000',
          trial: 'Free training session',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/security-training',
          popular: false
        },
        {
          name: 'Zero Trust Security Architecture',
          description: 'Implement zero trust security model with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/zero-trust',
          popular: false
        }
      ]
    },
    {
      category: 'IT Support & Management',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: '24/7 IT Support & Monitoring',
          description: 'Round-the-clock technical support with proactive monitoring and maintenance',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response', 'SLA Guarantee'],
          pricing: 'Starting at $2,000/month',
          trial: 'Free trial month',
          timeline: 'Immediate',
          link: 'https://ziontechgroup.com/it-support',
          popular: true
        },
        {
          name: 'System Administration Services',
          description: 'Complete system administration with user management and performance optimization',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management', 'Patch Management'],
          pricing: 'Starting at $4,000/month',
          trial: 'Free assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/system-administration',
          popular: true
        },
        {
          name: 'IT Strategic Consulting',
          description: 'Strategic IT planning and technology consulting for digital transformation',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning', 'Digital Transformation'],
          pricing: 'Starting at $200/hour',
          trial: 'Free consultation',
          timeline: 'As needed',
          link: 'https://ziontechgroup.com/it-consulting',
          popular: false
        },
        {
          name: 'IT Asset Management',
          description: 'Comprehensive IT asset lifecycle management with tracking and optimization',
          features: ['Asset Tracking', 'Lifecycle Management', 'License Management', 'Cost Optimization', 'Disposal Services'],
          pricing: 'Starting at $1,500/month',
          trial: 'Free inventory',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/asset-management',
          popular: false
        }
      ]
    },
    {
      category: 'Software Development & Integration',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions built with modern technologies and best practices',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration Services', 'Quality Assurance'],
          pricing: 'Starting at $15,000',
          trial: 'Free consultation',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/custom-development',
          popular: true
        },
        {
          name: 'System Integration & APIs',
          description: 'Connect and integrate disparate systems with robust API development and management',
          features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy System Modernization', 'API Management'],
          pricing: 'Starting at $8,000',
          trial: 'Free integration assessment',
          timeline: '3-8 weeks',
          link: 'https://ziontechgroup.com/system-integration',
          popular: true
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Streamline development and deployment with automated testing and continuous integration',
          features: ['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring', 'Infrastructure as Code'],
          pricing: 'Starting at $6,000',
          trial: 'Free DevOps audit',
          timeline: '2-6 weeks',
          link: 'https://ziontechgroup.com/devops-cicd',
          popular: true
        },
        {
          name: 'Legacy System Modernization',
          description: 'Modernize legacy systems with cloud migration and technology updates',
          features: ['Legacy Assessment', 'Cloud Migration', 'Technology Updates', 'Data Migration', 'User Training'],
          pricing: 'Starting at $20,000',
          trial: 'Free modernization plan',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/legacy-modernization',
          popular: false
        }
      ]
    },
    {
      category: 'Network & Infrastructure',
      icon: Wifi,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'Network Design & Implementation',
          description: 'Secure and scalable network infrastructure with wireless and wired solutions',
          features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
          pricing: 'Starting at $12,000',
          trial: 'Free network assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-design',
          popular: true
        },
        {
          name: 'Disaster Recovery & Backup',
          description: 'Comprehensive disaster recovery solutions with automated backup and recovery testing',
          features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Testing', 'Documentation'],
          pricing: 'Starting at $5,000',
          trial: 'Free DR assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/disaster-recovery',
          popular: false
        },
        {
          name: 'IT Performance Monitoring',
          description: 'Real-time monitoring and alerting for IT infrastructure and applications',
          features: ['Real-time Monitoring', 'Performance Metrics', 'Alerting', 'Reporting', 'Capacity Planning'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free monitoring setup',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/performance-monitoring',
          popular: false
        },
        {
          name: 'AI-Powered IT Operations',
          description: 'Intelligent IT operations with AI-driven automation, predictive maintenance, and self-healing systems',
          features: ['AI Automation', 'Predictive Maintenance', 'Self-healing Systems', 'Intelligent Alerting', 'Root Cause Analysis', 'Performance Optimization', 'Capacity Planning', 'Cost Optimization'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free AI assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-it-operations',
          popular: true
        },
        {
          name: 'Quantum-Safe Security Solutions',
          description: 'Future-proof security solutions designed to protect against quantum computing threats',
          features: ['Quantum-Safe Encryption', 'Post-Quantum Cryptography', 'Security Assessment', 'Migration Planning', 'Compliance Support', 'Risk Analysis', 'Implementation', 'Ongoing Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free security audit',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/quantum-safe-security',
          popular: false
        },
        {
          name: 'Edge Computing Infrastructure',
          description: 'Edge computing solutions for low-latency applications and IoT devices with distributed processing',
          features: ['Edge Servers', 'IoT Integration', 'Low-latency Processing', 'Data Synchronization', 'Offline Capabilities', 'Edge Analytics', 'Real-time Processing', 'Distributed Architecture'],
          pricing: 'Starting at $8,000',
          trial: 'Free edge assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/edge-computing',
          popular: true
        },
        {
          name: '5G Network Implementation',
          description: '5G network infrastructure and optimization for high-speed connectivity and IoT applications',
          features: ['5G Infrastructure', 'Network Optimization', 'Speed Testing', 'Coverage Analysis', 'Device Management', 'IoT Integration', 'Performance Monitoring', 'Security Implementation'],
          pricing: 'Starting at $25,000',
          trial: 'Free 5G assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/5g-implementation',
          popular: true
        },
        {
          name: 'Quantum Computing Integration',
          description: 'Quantum computing solutions for optimization, cryptography, and advanced problem solving',
          features: ['Quantum Algorithm Development', 'Quantum Simulation', 'Hybrid Computing', 'Quantum Security', 'Performance Optimization', 'Integration', 'Training', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/quantum-computing',
          popular: false
        },
        {
          name: 'Blockchain Infrastructure Setup',
          description: 'Complete blockchain infrastructure with smart contracts, DeFi solutions, and Web3 applications',
          features: ['Smart Contract Development', 'DeFi Solutions', 'Web3 Integration', 'NFT Platforms', 'Token Development', 'Blockchain Migration', 'Security Audits', 'Maintenance'],
          pricing: 'Starting at $30,000',
          trial: 'Free consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/blockchain-infrastructure',
          popular: true
        },
        {
          name: 'IoT Platform Development',
          description: 'Comprehensive IoT platform with device management and data analytics',
          features: ['Device Management', 'Data Analytics', 'Real-time Monitoring', 'Alert Systems', 'Integration APIs', 'Security Implementation', 'Scalability', 'Maintenance'],
          pricing: 'Starting at $20,000',
          trial: 'Free IoT assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/iot-platform',
          popular: true
        },
        {
          name: 'AR/VR Infrastructure Setup',
          description: 'AR/VR infrastructure for immersive experiences and virtual collaboration',
          features: ['AR/VR Hardware Setup', 'Software Integration', 'Content Management', 'Performance Optimization', 'User Experience Design', 'Cross-platform Support', 'Analytics', 'Maintenance'],
          pricing: 'Starting at $35,000',
          trial: 'Free demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/ar-vr-infrastructure',
          popular: false
        },
        {
          name: 'Smart City Technology Integration',
          description: 'Smart city technology solutions with traffic optimization, energy management, and citizen services',
          features: ['Traffic Management', 'Energy Systems', 'Citizen Services', 'Data Analytics', 'IoT Integration', 'Security Systems', 'Environmental Monitoring', 'Integration Hub'],
          pricing: 'Starting at $100,000',
          trial: 'Free city assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/smart-city-technology',
          popular: false
        },
        {
          name: 'Autonomous Systems Infrastructure',
          description: 'Infrastructure for autonomous vehicles, drones, and robotic systems',
          features: ['Autonomous Vehicle Support', 'Drone Fleet Management', 'Robotic Systems', 'AI Integration', 'Safety Systems', 'Communication Networks', 'Data Processing', 'Monitoring'],
          pricing: 'Starting at $75,000',
          trial: 'Free autonomous assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/autonomous-systems',
          popular: false
        },
        {
          name: 'Digital Twin Technology',
          description: 'Digital twin solutions for real-time monitoring and simulation of physical assets',
          features: ['Asset Modeling', 'Real-time Monitoring', 'Simulation', 'Predictive Analytics', 'Performance Optimization', 'Maintenance Planning', 'Data Integration', 'Visualization'],
          pricing: 'Starting at $40,000',
          trial: 'Free digital twin demo',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/digital-twin-technology',
          popular: true
        },
        {
          name: 'Metaverse Infrastructure',
          description: 'Metaverse infrastructure for virtual worlds, avatars, and immersive experiences',
          features: ['Virtual World Creation', 'Avatar Systems', 'Immersive Experiences', 'Social Features', 'Economy Systems', 'Content Management', 'Performance Optimization', 'Security'],
          pricing: 'Starting at $60,000',
          trial: 'Free metaverse demo',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/metaverse-infrastructure',
          popular: false
        },
        {
          name: 'Green IT Solutions',
          description: 'Sustainable IT solutions with energy efficiency and environmental impact reduction',
          features: ['Energy Efficiency', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers', 'Renewable Energy', 'Waste Reduction', 'Environmental Monitoring', 'Compliance'],
          pricing: 'Starting at $15,000',
          trial: 'Free sustainability audit',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/green-it-solutions',
          popular: true
        },
        {
          name: 'Zero Trust Security Architecture',
          description: 'Zero trust security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring', 'Threat Detection', 'Policy Enforcement', 'Compliance'],
          pricing: 'Starting at $25,000',
          trial: 'Free security assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/zero-trust-architecture',
          popular: true
        },
        {
          name: 'AI Infrastructure as a Service',
          description: 'AI infrastructure services with GPU clusters, model training, and inference capabilities',
          features: ['GPU Clusters', 'Model Training', 'Inference Services', 'Data Processing', 'Model Management', 'Auto-scaling', 'Monitoring', 'Support'],
          pricing: 'Starting at $10,000/month',
          trial: 'Free AI infrastructure trial',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure-service',
          popular: true
        },
        {
          name: 'Quantum Internet Infrastructure',
          description: 'Quantum internet infrastructure with quantum key distribution and secure communication',
          features: ['Quantum Key Distribution', 'Secure Communication', 'Quantum Networks', 'Quantum Repeaters', 'Security Implementation', 'Performance Optimization', 'Integration', 'Support'],
          pricing: 'Starting at $100,000',
          trial: 'Free quantum internet demo',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/quantum-internet',
          popular: false
        },
        {
          name: 'Space Technology Infrastructure',
          description: 'Space technology infrastructure for satellite communication and space-based services',
          features: ['Satellite Communication', 'Ground Stations', 'Space Data Processing', 'Orbital Mechanics', 'Communication Networks', 'Data Analytics', 'Security', 'Monitoring'],
          pricing: 'Starting at $200,000',
          trial: 'Free space technology assessment',
          timeline: '32-64 weeks',
          link: 'https://ziontechgroup.com/space-technology-infrastructure',
          popular: false
        },
        {
          name: 'Biometric Security Systems',
          description: 'Advanced biometric security systems with facial recognition, fingerprint scanning, and behavioral analysis',
          features: ['Facial Recognition', 'Fingerprint Scanning', 'Behavioral Analysis', 'Voice Recognition', 'Iris Scanning', 'Multi-factor Authentication', 'Access Control', 'Audit Trails'],
          pricing: 'Starting at $12,000',
          trial: 'Free biometric demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/biometric-security',
          popular: true
        },
        {
          name: 'Hyperconverged Infrastructure',
          description: 'Hyperconverged infrastructure solutions with compute, storage, and networking in a single platform',
          features: ['Compute Integration', 'Storage Virtualization', 'Network Virtualization', 'Management Platform', 'Auto-scaling', 'Disaster Recovery', 'Monitoring', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free HCI assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/hyperconverged-infrastructure',
          popular: true
        },
        {
          name: 'Container Orchestration Platform',
          description: 'Container orchestration platform with Kubernetes, Docker, and microservices architecture',
          features: ['Kubernetes Management', 'Docker Integration', 'Microservices Architecture', 'Auto-scaling', 'Service Mesh', 'Monitoring', 'Security', 'CI/CD Integration'],
          pricing: 'Starting at $8,000',
          trial: 'Free container demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/container-orchestration',
          popular: true
        },
        {
          name: 'Serverless Computing Platform',
          description: 'Serverless computing platform with function-as-a-service and event-driven architecture',
          features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Pay-per-use', 'API Management', 'Monitoring', 'Security', 'Integration'],
          pricing: 'Starting at $5,000',
          trial: 'Free serverless demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/serverless-computing',
          popular: true
        },
        {
          name: 'Multi-Cloud Management Platform',
          description: 'Multi-cloud management platform with unified monitoring, cost optimization, and governance',
          features: ['Unified Monitoring', 'Cost Optimization', 'Governance', 'Security Management', 'Compliance', 'Resource Management', 'Automation', 'Analytics'],
          pricing: 'Starting at $15,000',
          trial: 'Free multi-cloud assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/multi-cloud-management',
          popular: true
        },
        {
          name: 'Data Lake Architecture',
          description: 'Data lake architecture with big data processing, analytics, and machine learning capabilities',
          features: ['Big Data Processing', 'Analytics Platform', 'Machine Learning', 'Data Governance', 'Security', 'Scalability', 'Integration', 'Monitoring'],
          pricing: 'Starting at $20,000',
          trial: 'Free data lake demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/data-lake-architecture',
          popular: true
        },
        {
          name: 'Real-time Data Streaming Platform',
          description: 'Real-time data streaming platform with Apache Kafka, event processing, and analytics',
          features: ['Apache Kafka', 'Event Processing', 'Real-time Analytics', 'Data Streaming', 'Message Queues', 'Monitoring', 'Security', 'Integration'],
          pricing: 'Starting at $10,000',
          trial: 'Free streaming demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/real-time-data-streaming',
          popular: true
        },
        {
          name: 'API Gateway and Management',
          description: 'API gateway and management platform with security, monitoring, and developer tools',
          features: ['API Gateway', 'Security Management', 'Rate Limiting', 'Monitoring', 'Developer Portal', 'Documentation', 'Testing', 'Analytics'],
          pricing: 'Starting at $6,000',
          trial: 'Free API demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/api-gateway-management',
          popular: true
        },
        {
          name: 'Microservices Architecture',
          description: 'Microservices architecture with service discovery, load balancing, and distributed systems',
          features: ['Service Discovery', 'Load Balancing', 'Distributed Systems', 'API Management', 'Monitoring', 'Security', 'Scalability', 'Resilience'],
          pricing: 'Starting at $18,000',
          trial: 'Free microservices assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/microservices-architecture',
          popular: true
        },
        {
          name: 'Event-Driven Architecture',
          description: 'Event-driven architecture with message brokers, event sourcing, and CQRS patterns',
          features: ['Message Brokers', 'Event Sourcing', 'CQRS Patterns', 'Event Processing', 'Scalability', 'Resilience', 'Monitoring', 'Integration'],
          pricing: 'Starting at $12,000',
          trial: 'Free event-driven demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/event-driven-architecture',
          popular: false
        },
        {
          name: 'GraphQL API Platform',
          description: 'GraphQL API platform with schema management, query optimization, and developer tools',
          features: ['Schema Management', 'Query Optimization', 'Developer Tools', 'Caching', 'Security', 'Monitoring', 'Documentation', 'Testing'],
          pricing: 'Starting at $7,000',
          trial: 'Free GraphQL demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/graphql-api-platform',
          popular: true
        },
        {
          name: 'WebAssembly Platform',
          description: 'WebAssembly platform for high-performance web applications and cross-platform development',
          features: ['WebAssembly Runtime', 'Cross-platform Development', 'Performance Optimization', 'Security', 'Integration', 'Monitoring', 'Development Tools', 'Support'],
          pricing: 'Starting at $9,000',
          trial: 'Free WebAssembly demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/webassembly-platform',
          popular: false
        },
        {
          name: 'Progressive Web App Platform',
          description: 'Progressive Web App platform with offline capabilities, push notifications, and app-like experience',
          features: ['Offline Capabilities', 'Push Notifications', 'App-like Experience', 'Performance Optimization', 'Security', 'Cross-platform', 'Analytics', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free PWA demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/progressive-web-app-platform',
          popular: true
        },
        {
          name: 'Headless CMS Platform',
          description: 'Headless CMS platform with content management, API-first architecture, and multi-channel publishing',
          features: ['Content Management', 'API-first Architecture', 'Multi-channel Publishing', 'Content Modeling', 'Workflow Management', 'Security', 'Scalability', 'Integration'],
          pricing: 'Starting at $5,000',
          trial: 'Free headless CMS demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/headless-cms-platform',
          popular: true
        },
        {
          name: 'JAMstack Architecture',
          description: 'JAMstack architecture with static site generation, CDN, and modern web development',
          features: ['Static Site Generation', 'CDN Integration', 'Modern Web Development', 'Performance Optimization', 'Security', 'Scalability', 'Developer Experience', 'Deployment'],
          pricing: 'Starting at $6,000',
          trial: 'Free JAMstack demo',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/jamstack-architecture',
          popular: true
        },
        {
          name: 'Low-Code/No-Code Platform',
          description: 'Low-code/no-code platform for rapid application development and citizen development',
          features: ['Visual Development', 'Drag-and-drop Interface', 'Pre-built Components', 'Workflow Automation', 'Integration', 'Security', 'Scalability', 'Training'],
          pricing: 'Starting at $10,000',
          trial: 'Free low-code demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/low-code-no-code-platform',
          popular: true
        },
        {
          name: 'Robotic Process Automation',
          description: 'Robotic Process Automation (RPA) for business process automation and workflow optimization',
          features: ['Process Automation', 'Workflow Optimization', 'Bot Development', 'Integration', 'Monitoring', 'Analytics', 'Security', 'Training'],
          pricing: 'Starting at $12,000',
          trial: 'Free RPA assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/robotic-process-automation',
          popular: true
        },
        {
          name: 'Business Process Management',
          description: 'Business Process Management (BPM) platform for process modeling, execution, and optimization',
          features: ['Process Modeling', 'Process Execution', 'Process Optimization', 'Workflow Management', 'Analytics', 'Integration', 'Compliance', 'Monitoring'],
          pricing: 'Starting at $15,000',
          trial: 'Free BPM assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/business-process-management',
          popular: false
        },
        {
          name: 'Master Data Management',
          description: 'Master Data Management (MDM) platform for data governance, quality, and consistency',
          features: ['Data Governance', 'Data Quality', 'Data Consistency', 'Data Integration', 'Data Stewardship', 'Compliance', 'Analytics', 'Monitoring'],
          pricing: 'Starting at $20,000',
          trial: 'Free MDM assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/master-data-management',
          popular: false
        },
        {
          name: 'Data Warehouse Modernization',
          description: 'Data warehouse modernization with cloud migration, real-time processing, and advanced analytics',
          features: ['Cloud Migration', 'Real-time Processing', 'Advanced Analytics', 'Data Integration', 'Performance Optimization', 'Security', 'Scalability', 'Monitoring'],
          pricing: 'Starting at $25,000',
          trial: 'Free data warehouse assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/data-warehouse-modernization',
          popular: true
        },
        {
          name: 'Data Mesh Architecture',
          description: 'Data mesh architecture with decentralized data ownership and domain-driven design',
          features: ['Decentralized Data Ownership', 'Domain-driven Design', 'Data Products', 'Self-serve Data', 'Governance', 'Security', 'Scalability', 'Monitoring'],
          pricing: 'Starting at $30,000',
          trial: 'Free data mesh assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/data-mesh-architecture',
          popular: false
        },
        {
          name: 'Data Fabric Platform',
          description: 'Data fabric platform with unified data access, governance, and analytics across hybrid environments',
          features: ['Unified Data Access', 'Data Governance', 'Hybrid Environment Support', 'Data Integration', 'Analytics', 'Security', 'Scalability', 'Monitoring'],
          pricing: 'Starting at $35,000',
          trial: 'Free data fabric demo',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/data-fabric-platform',
          popular: false
        },
        {
          name: 'DataOps Platform',
          description: 'DataOps platform with automated data pipeline management, testing, and deployment',
          features: ['Automated Pipelines', 'Data Testing', 'Deployment Automation', 'Monitoring', 'Collaboration', 'Version Control', 'Security', 'Scalability'],
          pricing: 'Starting at $18,000',
          trial: 'Free DataOps demo',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/dataops-platform',
          popular: true
        },
        {
          name: 'MLOps Platform',
          description: 'MLOps platform with machine learning model management, deployment, and monitoring',
          features: ['Model Management', 'Model Deployment', 'Model Monitoring', 'Version Control', 'Automation', 'Collaboration', 'Security', 'Scalability'],
          pricing: 'Starting at $22,000',
          trial: 'Free MLOps demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/mlops-platform',
          popular: true
        },
        {
          name: 'AIOps Platform',
          description: 'AIOps platform with intelligent IT operations, automation, and predictive analytics',
          features: ['Intelligent Operations', 'Automation', 'Predictive Analytics', 'Anomaly Detection', 'Root Cause Analysis', 'Incident Response', 'Performance Optimization', 'Monitoring'],
          pricing: 'Starting at $28,000',
          trial: 'Free AIOps demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/aiops-platform',
          popular: true
        },
        {
          name: 'DevSecOps Platform',
          description: 'DevSecOps platform with integrated security, compliance, and continuous delivery',
          features: ['Integrated Security', 'Compliance', 'Continuous Delivery', 'Security Testing', 'Vulnerability Management', 'Policy Enforcement', 'Monitoring', 'Automation'],
          pricing: 'Starting at $24,000',
          trial: 'Free DevSecOps assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/devsecops-platform',
          popular: true
        },
        {
          name: 'GitOps Platform',
          description: 'GitOps platform with Git-based deployment, infrastructure as code, and continuous delivery',
          features: ['Git-based Deployment', 'Infrastructure as Code', 'Continuous Delivery', 'Version Control', 'Automation', 'Monitoring', 'Security', 'Collaboration'],
          pricing: 'Starting at $16,000',
          trial: 'Free GitOps demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/gitops-platform',
          popular: true
        },
        {
          name: 'Infrastructure as Code Platform',
          description: 'Infrastructure as Code platform with Terraform, Ansible, and automated infrastructure management',
          features: ['Terraform Integration', 'Ansible Automation', 'Infrastructure Management', 'Version Control', 'Automation', 'Monitoring', 'Security', 'Collaboration'],
          pricing: 'Starting at $14,000',
          trial: 'Free IaC demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/infrastructure-as-code-platform',
          popular: true
        },
        {
          name: 'Configuration Management Platform',
          description: 'Configuration management platform with automated configuration, compliance, and drift detection',
          features: ['Automated Configuration', 'Compliance Management', 'Drift Detection', 'Change Management', 'Audit Trails', 'Security', 'Monitoring', 'Automation'],
          pricing: 'Starting at $12,000',
          trial: 'Free configuration management demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/configuration-management-platform',
          popular: false
        },
        {
          name: 'Secrets Management Platform',
          description: 'Secrets management platform with secure storage, rotation, and access control for sensitive data',
          features: ['Secure Storage', 'Secret Rotation', 'Access Control', 'Audit Trails', 'Encryption', 'Integration', 'Monitoring', 'Compliance'],
          pricing: 'Starting at $8,000',
          trial: 'Free secrets management demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/secrets-management-platform',
          popular: true
        },
        {
          name: 'Identity and Access Management',
          description: 'Identity and Access Management (IAM) platform with single sign-on, multi-factor authentication, and access control',
          features: ['Single Sign-On', 'Multi-factor Authentication', 'Access Control', 'User Management', 'Role-based Access', 'Audit Trails', 'Compliance', 'Integration'],
          pricing: 'Starting at $10,000',
          trial: 'Free IAM assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/identity-access-management',
          popular: true
        },
        {
          name: 'Privileged Access Management',
          description: 'Privileged Access Management (PAM) platform with secure access to privileged accounts and systems',
          features: ['Privileged Account Management', 'Secure Access', 'Session Recording', 'Access Control', 'Audit Trails', 'Compliance', 'Monitoring', 'Integration'],
          pricing: 'Starting at $15,000',
          trial: 'Free PAM assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/privileged-access-management',
          popular: true
        },
        {
          name: 'Security Information and Event Management',
          description: 'Security Information and Event Management (SIEM) platform with threat detection, incident response, and compliance',
          features: ['Threat Detection', 'Incident Response', 'Compliance', 'Log Management', 'Analytics', 'Automation', 'Integration', 'Monitoring'],
          pricing: 'Starting at $20,000',
          trial: 'Free SIEM assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/security-information-event-management',
          popular: true
        },
        {
          name: 'Security Orchestration and Response',
          description: 'Security Orchestration and Response (SOAR) platform with automated incident response and security workflows',
          features: ['Automated Incident Response', 'Security Workflows', 'Playbook Automation', 'Integration', 'Analytics', 'Monitoring', 'Compliance', 'Training'],
          pricing: 'Starting at $18,000',
          trial: 'Free SOAR assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/security-orchestration-response',
          popular: true
        },
        {
          name: 'Threat Intelligence Platform',
          description: 'Threat Intelligence platform with threat detection, analysis, and response capabilities',
          features: ['Threat Detection', 'Threat Analysis', 'Threat Response', 'Intelligence Feeds', 'Analytics', 'Integration', 'Monitoring', 'Compliance'],
          pricing: 'Starting at $16,000',
          trial: 'Free threat intelligence demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/threat-intelligence-platform',
          popular: true
        },
        {
          name: 'Vulnerability Management Platform',
          description: 'Vulnerability Management platform with scanning, assessment, and remediation of security vulnerabilities',
          features: ['Vulnerability Scanning', 'Risk Assessment', 'Remediation', 'Compliance', 'Reporting', 'Integration', 'Monitoring', 'Automation'],
          pricing: 'Starting at $12,000',
          trial: 'Free vulnerability assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/vulnerability-management-platform',
          popular: true
        },
        {
          name: 'Penetration Testing Services',
          description: 'Penetration testing services with security assessment, vulnerability testing, and remediation guidance',
          features: ['Security Assessment', 'Vulnerability Testing', 'Remediation Guidance', 'Compliance Testing', 'Reporting', 'Follow-up', 'Training', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free security assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/penetration-testing-services',
          popular: true
        },
        {
          name: 'Security Awareness Training',
          description: 'Security awareness training with phishing simulation, education, and assessment programs',
          features: ['Phishing Simulation', 'Security Education', 'Assessment Programs', 'Compliance Training', 'Reporting', 'Customization', 'Analytics', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free training demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/security-awareness-training',
          popular: true
        },
        {
          name: 'Compliance Management Platform',
          description: 'Compliance management platform with regulatory compliance, audit management, and reporting',
          features: ['Regulatory Compliance', 'Audit Management', 'Reporting', 'Policy Management', 'Risk Assessment', 'Documentation', 'Integration', 'Monitoring'],
          pricing: 'Starting at $14,000',
          trial: 'Free compliance assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/compliance-management-platform',
          popular: true
        },
        {
          name: 'Risk Management Platform',
          description: 'Risk management platform with risk assessment, mitigation, and monitoring capabilities',
          features: ['Risk Assessment', 'Risk Mitigation', 'Risk Monitoring', 'Compliance', 'Reporting', 'Integration', 'Analytics', 'Automation'],
          pricing: 'Starting at $16,000',
          trial: 'Free risk assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/risk-management-platform',
          popular: true
        },
        {
          name: 'Business Continuity Planning',
          description: 'Business continuity planning with disaster recovery, backup, and recovery testing',
          features: ['Disaster Recovery', 'Backup Solutions', 'Recovery Testing', 'Business Impact Analysis', 'Recovery Planning', 'Testing', 'Documentation', 'Training'],
          pricing: 'Starting at $20,000',
          trial: 'Free business continuity assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/business-continuity-planning',
          popular: true
        },
        {
          name: 'Disaster Recovery as a Service',
          description: 'Disaster Recovery as a Service (DRaaS) with cloud-based backup, recovery, and testing',
          features: ['Cloud-based Backup', 'Recovery Services', 'Testing', 'Monitoring', 'Automation', 'Compliance', 'Support', 'SLA'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free DRaaS assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/disaster-recovery-as-a-service',
          popular: true
        },
        {
          name: 'Backup as a Service',
          description: 'Backup as a Service (BaaS) with automated backup, recovery, and data protection',
          features: ['Automated Backup', 'Recovery Services', 'Data Protection', 'Monitoring', 'Compliance', 'Support', 'SLA', 'Scalability'],
          pricing: 'Starting at $2,000/month',
          trial: 'Free BaaS assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/backup-as-a-service',
          popular: true
        },
        {
          name: 'Data Loss Prevention',
          description: 'Data Loss Prevention (DLP) platform with data discovery, classification, and protection',
          features: ['Data Discovery', 'Data Classification', 'Data Protection', 'Policy Enforcement', 'Monitoring', 'Compliance', 'Integration', 'Analytics'],
          pricing: 'Starting at $12,000',
          trial: 'Free DLP assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/data-loss-prevention',
          popular: true
        },
        {
          name: 'Data Classification Platform',
          description: 'Data classification platform with automated data discovery, classification, and labeling',
          features: ['Automated Discovery', 'Data Classification', 'Data Labeling', 'Policy Enforcement', 'Compliance', 'Integration', 'Monitoring', 'Analytics'],
          pricing: 'Starting at $10,000',
          trial: 'Free data classification demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/data-classification-platform',
          popular: false
        },
        {
          name: 'Data Governance Platform',
          description: 'Data governance platform with data quality, lineage, and stewardship management',
          features: ['Data Quality', 'Data Lineage', 'Data Stewardship', 'Policy Management', 'Compliance', 'Integration', 'Monitoring', 'Analytics'],
          pricing: 'Starting at $18,000',
          trial: 'Free data governance assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/data-governance-platform',
          popular: true
        },
        {
          name: 'Data Privacy Platform',
          description: 'Data privacy platform with privacy compliance, consent management, and data protection',
          features: ['Privacy Compliance', 'Consent Management', 'Data Protection', 'Privacy Impact Assessment', 'Compliance', 'Integration', 'Monitoring', 'Analytics'],
          pricing: 'Starting at $14,000',
          trial: 'Free data privacy assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/data-privacy-platform',
          popular: true
        },
        {
          name: 'GDPR Compliance Platform',
          description: 'GDPR compliance platform with data protection, privacy rights, and regulatory compliance',
          features: ['Data Protection', 'Privacy Rights', 'Regulatory Compliance', 'Consent Management', 'Data Portability', 'Right to be Forgotten', 'Compliance', 'Monitoring'],
          pricing: 'Starting at $16,000',
          trial: 'Free GDPR assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/gdpr-compliance-platform',
          popular: true
        },
        {
          name: 'CCPA Compliance Platform',
          description: 'CCPA compliance platform with California Consumer Privacy Act compliance and data protection',
          features: ['CCPA Compliance', 'Data Protection', 'Consumer Rights', 'Privacy Notices', 'Opt-out Management', 'Compliance', 'Monitoring', 'Reporting'],
          pricing: 'Starting at $12,000',
          trial: 'Free CCPA assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/ccpa-compliance-platform',
          popular: true
        },
        {
          name: 'HIPAA Compliance Platform',
          description: 'HIPAA compliance platform with healthcare data protection and regulatory compliance',
          features: ['Healthcare Data Protection', 'Regulatory Compliance', 'Access Controls', 'Audit Trails', 'Encryption', 'Compliance', 'Monitoring', 'Reporting'],
          pricing: 'Starting at $18,000',
          trial: 'Free HIPAA assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/hipaa-compliance-platform',
          popular: true
        },
        {
          name: 'SOX Compliance Platform',
          description: 'SOX compliance platform with financial data protection and regulatory compliance',
          features: ['Financial Data Protection', 'Regulatory Compliance', 'Internal Controls', 'Audit Trails', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $20,000',
          trial: 'Free SOX assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/sox-compliance-platform',
          popular: true
        },
        {
          name: 'ISO 27001 Compliance Platform',
          description: 'ISO 27001 compliance platform with information security management and certification',
          features: ['Information Security Management', 'Certification', 'Risk Assessment', 'Security Controls', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $22,000',
          trial: 'Free ISO 27001 assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/iso-27001-compliance-platform',
          popular: true
        },
        {
          name: 'SOC 2 Compliance Platform',
          description: 'SOC 2 compliance platform with service organization controls and audit readiness',
          features: ['Service Organization Controls', 'Audit Readiness', 'Security Controls', 'Availability Controls', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $16,000',
          trial: 'Free SOC 2 assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/soc-2-compliance-platform',
          popular: true
        },
        {
          name: 'PCI DSS Compliance Platform',
          description: 'PCI DSS compliance platform with payment card data protection and security standards',
          features: ['Payment Card Data Protection', 'Security Standards', 'Access Controls', 'Encryption', 'Compliance', 'Monitoring', 'Reporting', 'Documentation'],
          pricing: 'Starting at $14,000',
          trial: 'Free PCI DSS assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/pci-dss-compliance-platform',
          popular: true
        },
        {
          name: 'FedRAMP Compliance Platform',
          description: 'FedRAMP compliance platform with federal cloud security and authorization',
          features: ['Federal Cloud Security', 'Authorization', 'Security Controls', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free FedRAMP assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/fedramp-compliance-platform',
          popular: false
        },
        {
          name: 'FISMA Compliance Platform',
          description: 'FISMA compliance platform with federal information security management and compliance',
          features: ['Federal Information Security', 'Management', 'Compliance', 'Security Controls', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $40,000',
          trial: 'Free FISMA assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/fisma-compliance-platform',
          popular: false
        },
        {
          name: 'NIST Cybersecurity Framework',
          description: 'NIST Cybersecurity Framework implementation with security controls and risk management',
          features: ['Security Controls', 'Risk Management', 'Framework Implementation', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free NIST assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/nist-cybersecurity-framework',
          popular: true
        },
        {
          name: 'CIS Controls Implementation',
          description: 'CIS Controls implementation with critical security controls and best practices',
          features: ['Critical Security Controls', 'Best Practices', 'Implementation', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free CIS Controls assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/cis-controls-implementation',
          popular: true
        },
        {
          name: 'OWASP Security Framework',
          description: 'OWASP Security Framework implementation with web application security and vulnerability management',
          features: ['Web Application Security', 'Vulnerability Management', 'Security Testing', 'Compliance', 'Monitoring', 'Reporting', 'Documentation', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free OWASP assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/owasp-security-framework',
          popular: true
        },
        {
          name: 'Zero Trust Security Implementation',
          description: 'Zero Trust Security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Access Control', 'Monitoring', 'Compliance', 'Integration', 'Documentation', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free Zero Trust assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/zero-trust-security-implementation',
          popular: true
        },
        {
          name: 'SASE Platform Implementation',
          description: 'SASE (Secure Access Service Edge) platform implementation with network security and cloud access',
          features: ['Network Security', 'Cloud Access', 'SD-WAN', 'Security Services', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $35,000',
          trial: 'Free SASE assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/sase-platform-implementation',
          popular: true
        },
        {
          name: 'SD-WAN Implementation',
          description: 'SD-WAN implementation with software-defined networking and WAN optimization',
          features: ['Software-defined Networking', 'WAN Optimization', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free SD-WAN assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/sd-wan-implementation',
          popular: true
        },
        {
          name: 'Network Function Virtualization',
          description: 'Network Function Virtualization (NFV) implementation with virtualized network functions',
          features: ['Virtualized Network Functions', 'Network Virtualization', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $28,000',
          trial: 'Free NFV assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/network-function-virtualization',
          popular: false
        },
        {
          name: 'Software-Defined Networking',
          description: 'Software-Defined Networking (SDN) implementation with programmable network control',
          features: ['Programmable Network Control', 'Network Automation', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Integration', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free SDN assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/software-defined-networking',
          popular: false
        },
        {
          name: 'Intent-Based Networking',
          description: 'Intent-Based Networking (IBN) implementation with automated network configuration and management',
          features: ['Automated Configuration', 'Network Management', 'Intent Translation', 'Performance', 'Security', 'Compliance', 'Monitoring', 'Support'],
          pricing: 'Starting at $32,000',
          trial: 'Free IBN assessment',
          timeline: '14-28 weeks',
          link: 'https://ziontechgroup.com/intent-based-networking',
          popular: false
        },
        {
          name: 'Network Automation Platform',
          description: 'Network automation platform with automated configuration, monitoring, and management',
          features: ['Automated Configuration', 'Network Monitoring', 'Management', 'Orchestration', 'Performance', 'Security', 'Compliance', 'Support'],
          pricing: 'Starting at $22,000',
          trial: 'Free network automation demo',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-automation-platform',
          popular: true
        },
        {
          name: 'Network Performance Monitoring',
          description: 'Network performance monitoring with real-time analytics, troubleshooting, and optimization',
          features: ['Real-time Analytics', 'Troubleshooting', 'Performance Optimization', 'Monitoring', 'Alerting', 'Reporting', 'Integration', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free network monitoring demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-performance-monitoring',
          popular: true
        },
        {
          name: 'Network Security Monitoring',
          description: 'Network security monitoring with threat detection, incident response, and security analytics',
          features: ['Threat Detection', 'Incident Response', 'Security Analytics', 'Monitoring', 'Alerting', 'Reporting', 'Integration', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free network security demo',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-security-monitoring',
          popular: true
        },
        {
          name: 'Network Traffic Analysis',
          description: 'Network traffic analysis with deep packet inspection, flow analysis, and behavioral monitoring',
          features: ['Deep Packet Inspection', 'Flow Analysis', 'Behavioral Monitoring', 'Analytics', 'Reporting', 'Integration', 'Compliance', 'Support'],
          pricing: 'Starting at $16,000',
          trial: 'Free traffic analysis demo',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-traffic-analysis',
          popular: true
        },
        {
          name: 'Network Capacity Planning',
          description: 'Network capacity planning with traffic forecasting, capacity analysis, and optimization',
          features: ['Traffic Forecasting', 'Capacity Analysis', 'Optimization', 'Planning', 'Reporting', 'Integration', 'Compliance', 'Support'],
          pricing: 'Starting at $14,000',
          trial: 'Free capacity planning assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-capacity-planning',
          popular: false
        },
        {
          name: 'Network Optimization Services',
          description: 'Network optimization services with performance tuning, configuration optimization, and troubleshooting',
          features: ['Performance Tuning', 'Configuration Optimization', 'Troubleshooting', 'Monitoring', 'Reporting', 'Integration', 'Compliance', 'Support'],
          pricing: 'Starting at $12,000',
          trial: 'Free network optimization assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-optimization-services',
          popular: true
        },
        {
          name: 'Network Design and Architecture',
          description: 'Network design and architecture services with scalable, secure, and high-performance networks',
          features: ['Network Design', 'Architecture', 'Scalability', 'Security', 'Performance', 'Compliance', 'Documentation', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free network design assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-design-architecture',
          popular: true
        },
        {
          name: 'Network Security Architecture',
          description: 'Network security architecture with defense-in-depth, segmentation, and security controls',
          features: ['Defense-in-Depth', 'Segmentation', 'Security Controls', 'Architecture', 'Compliance', 'Documentation', 'Integration', 'Support'],
          pricing: 'Starting at $28,000',
          trial: 'Free security architecture assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/network-security-architecture',
          popular: true
        },
        {
          name: 'Network Compliance Services',
          description: 'Network compliance services with regulatory compliance, audit support, and documentation',
          features: ['Regulatory Compliance', 'Audit Support', 'Documentation', 'Compliance', 'Monitoring', 'Reporting', 'Integration', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free compliance assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-compliance-services',
          popular: true
        },
        {
          name: 'Network Migration Services',
          description: 'Network migration services with seamless migration, testing, and validation',
          features: ['Seamless Migration', 'Testing', 'Validation', 'Planning', 'Execution', 'Monitoring', 'Support', 'Documentation'],
          pricing: 'Starting at $20,000',
          trial: 'Free migration assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-migration-services',
          popular: true
        },
        {
          name: 'Network Upgrade Services',
          description: 'Network upgrade services with hardware refresh, software updates, and performance improvements',
          features: ['Hardware Refresh', 'Software Updates', 'Performance Improvements', 'Planning', 'Execution', 'Testing', 'Support', 'Documentation'],
          pricing: 'Starting at $18,000',
          trial: 'Free upgrade assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-upgrade-services',
          popular: true
        },
        {
          name: 'Network Maintenance Services',
          description: 'Network maintenance services with proactive monitoring, maintenance, and support',
          features: ['Proactive Monitoring', 'Maintenance', 'Support', 'Performance', 'Security', 'Compliance', 'Reporting', 'Documentation'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free maintenance assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/network-maintenance-services',
          popular: true
        },
        {
          name: 'Network Support Services',
          description: 'Network support services with 24/7 support, troubleshooting, and issue resolution',
          features: ['24/7 Support', 'Troubleshooting', 'Issue Resolution', 'Performance', 'Security', 'Compliance', 'Reporting', 'Documentation'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free support assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/network-support-services',
          popular: true
        },
        {
          name: 'Network Consulting Services',
          description: 'Network consulting services with strategic planning, architecture review, and optimization',
          features: ['Strategic Planning', 'Architecture Review', 'Optimization', 'Compliance', 'Security', 'Performance', 'Documentation', 'Support'],
          pricing: 'Starting at $200/hour',
          trial: 'Free consulting assessment',
          timeline: 'As needed',
          link: 'https://ziontechgroup.com/network-consulting-services',
          popular: true
        },
        {
          name: 'Network Training Services',
          description: 'Network training services with technical training, certification, and skill development',
          features: ['Technical Training', 'Certification', 'Skill Development', 'Hands-on Labs', 'Documentation', 'Support', 'Assessment', 'Certification'],
          pricing: 'Starting at $5,000',
          trial: 'Free training assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-training-services',
          popular: true
        },
        {
          name: 'Network Documentation Services',
          description: 'Network documentation services with comprehensive documentation, diagrams, and procedures',
          features: ['Comprehensive Documentation', 'Diagrams', 'Procedures', 'Standards', 'Compliance', 'Maintenance', 'Updates', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free documentation assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-documentation-services',
          popular: false
        },
        {
          name: 'Network Audit Services',
          description: 'Network audit services with comprehensive assessment, compliance review, and recommendations',
          features: ['Comprehensive Assessment', 'Compliance Review', 'Recommendations', 'Security', 'Performance', 'Compliance', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000',
          trial: 'Free audit assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-audit-services',
          popular: true
        },
        {
          name: 'Network Health Check',
          description: 'Network health check with comprehensive assessment, performance analysis, and recommendations',
          features: ['Comprehensive Assessment', 'Performance Analysis', 'Recommendations', 'Security', 'Compliance', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $5,000',
          trial: 'Free health check',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-health-check',
          popular: true
        },
        {
          name: 'Network Performance Testing',
          description: 'Network performance testing with load testing, stress testing, and performance validation',
          features: ['Load Testing', 'Stress Testing', 'Performance Validation', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $8,000',
          trial: 'Free performance testing assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-performance-testing',
          popular: true
        },
        {
          name: 'Network Security Testing',
          description: 'Network security testing with penetration testing, vulnerability assessment, and security validation',
          features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Validation', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $12,000',
          trial: 'Free security testing assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-security-testing',
          popular: true
        },
        {
          name: 'Network Compliance Testing',
          description: 'Network compliance testing with regulatory compliance validation and audit preparation',
          features: ['Regulatory Compliance Validation', 'Audit Preparation', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation', 'Compliance'],
          pricing: 'Starting at $10,000',
          trial: 'Free compliance testing assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-compliance-testing',
          popular: true
        },
        {
          name: 'Network Disaster Recovery Testing',
          description: 'Network disaster recovery testing with backup validation, recovery testing, and business continuity',
          features: ['Backup Validation', 'Recovery Testing', 'Business Continuity', 'Testing', 'Analysis', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $8,000',
          trial: 'Free disaster recovery testing assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-disaster-recovery-testing',
          popular: true
        },
        {
          name: 'Network Load Balancing',
          description: 'Network load balancing with traffic distribution, performance optimization, and high availability',
          features: ['Traffic Distribution', 'Performance Optimization', 'High Availability', 'Load Balancing', 'Monitoring', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $6,000',
          trial: 'Free load balancing assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-load-balancing',
          popular: true
        },
        {
          name: 'Network Redundancy',
          description: 'Network redundancy with failover, backup links, and high availability',
          features: ['Failover', 'Backup Links', 'High Availability', 'Redundancy', 'Monitoring', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $8,000',
          trial: 'Free redundancy assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-redundancy',
          popular: true
        },
        {
          name: 'Network QoS Implementation',
          description: 'Network QoS implementation with traffic prioritization, bandwidth management, and performance optimization',
          features: ['Traffic Prioritization', 'Bandwidth Management', 'Performance Optimization', 'QoS', 'Monitoring', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $7,000',
          trial: 'Free QoS assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-qos-implementation',
          popular: true
        },
        {
          name: 'Network VLAN Configuration',
          description: 'Network VLAN configuration with segmentation, security, and performance optimization',
          features: ['Segmentation', 'Security', 'Performance Optimization', 'VLAN', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free VLAN assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-vlan-configuration',
          popular: true
        },
        {
          name: 'Network Routing Configuration',
          description: 'Network routing configuration with dynamic routing, load balancing, and performance optimization',
          features: ['Dynamic Routing', 'Load Balancing', 'Performance Optimization', 'Routing', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $6,000',
          trial: 'Free routing assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-routing-configuration',
          popular: true
        },
        {
          name: 'Network Switching Configuration',
          description: 'Network switching configuration with port management, VLAN configuration, and performance optimization',
          features: ['Port Management', 'VLAN Configuration', 'Performance Optimization', 'Switching', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $4,000',
          trial: 'Free switching assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-switching-configuration',
          popular: true
        },
        {
          name: 'Network Wireless Configuration',
          description: 'Network wireless configuration with WiFi setup, security, and performance optimization',
          features: ['WiFi Setup', 'Security', 'Performance Optimization', 'Wireless', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free wireless assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-wireless-configuration',
          popular: true
        },
        {
          name: 'Network Firewall Configuration',
          description: 'Network firewall configuration with security policies, access control, and threat protection',
          features: ['Security Policies', 'Access Control', 'Threat Protection', 'Firewall', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $7,000',
          trial: 'Free firewall assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-firewall-configuration',
          popular: true
        },
        {
          name: 'Network VPN Configuration',
          description: 'Network VPN configuration with secure remote access, site-to-site connectivity, and encryption',
          features: ['Secure Remote Access', 'Site-to-Site Connectivity', 'Encryption', 'VPN', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $6,000',
          trial: 'Free VPN assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-vpn-configuration',
          popular: true
        },
        {
          name: 'Network DNS Configuration',
          description: 'Network DNS configuration with domain resolution, load balancing, and performance optimization',
          features: ['Domain Resolution', 'Load Balancing', 'Performance Optimization', 'DNS', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $4,000',
          trial: 'Free DNS assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-dns-configuration',
          popular: true
        },
        {
          name: 'Network DHCP Configuration',
          description: 'Network DHCP configuration with IP address management, lease management, and performance optimization',
          features: ['IP Address Management', 'Lease Management', 'Performance Optimization', 'DHCP', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $3,000',
          trial: 'Free DHCP assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-dhcp-configuration',
          popular: true
        },
        {
          name: 'Network NTP Configuration',
          description: 'Network NTP configuration with time synchronization, accuracy, and performance optimization',
          features: ['Time Synchronization', 'Accuracy', 'Performance Optimization', 'NTP', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $2,000',
          trial: 'Free NTP assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-ntp-configuration',
          popular: false
        },
        {
          name: 'Network SNMP Configuration',
          description: 'Network SNMP configuration with monitoring, management, and performance optimization',
          features: ['Monitoring', 'Management', 'Performance Optimization', 'SNMP', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $3,000',
          trial: 'Free SNMP assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-snmp-configuration',
          popular: true
        },
        {
          name: 'Network Syslog Configuration',
          description: 'Network Syslog configuration with logging, monitoring, and security analysis',
          features: ['Logging', 'Monitoring', 'Security Analysis', 'Syslog', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $2,000',
          trial: 'Free Syslog assessment',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/network-syslog-configuration',
          popular: true
        },
        {
          name: 'Network NetFlow Configuration',
          description: 'Network NetFlow configuration with traffic analysis, monitoring, and performance optimization',
          features: ['Traffic Analysis', 'Monitoring', 'Performance Optimization', 'NetFlow', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $4,000',
          trial: 'Free NetFlow assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-netflow-configuration',
          popular: true
        },
        {
          name: 'Network sFlow Configuration',
          description: 'Network sFlow configuration with sampling, monitoring, and performance analysis',
          features: ['Sampling', 'Monitoring', 'Performance Analysis', 'sFlow', 'Configuration', 'Reporting', 'Support', 'Documentation'],
          pricing: 'Starting at $3,000',
          trial: 'Free sFlow assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-sflow-configuration',
          popular: false
        },
        {
          name: 'Network IPAM Configuration',
          description: 'Network IPAM configuration with IP address management, subnet management, and DNS integration',
          features: ['IP Address Management', 'Subnet Management', 'DNS Integration', 'IPAM', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $5,000',
          trial: 'Free IPAM assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/network-ipam-configuration',
          popular: true
        },
        {
          name: 'Network DDI Configuration',
          description: 'Network DDI configuration with DNS, DHCP, and IPAM integration and management',
          features: ['DNS Integration', 'DHCP Integration', 'IPAM Integration', 'DDI', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $6,000',
          trial: 'Free DDI assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-ddi-configuration',
          popular: true
        },
        {
          name: 'Network SDN Configuration',
          description: 'Network SDN configuration with software-defined networking, automation, and programmability',
          features: ['Software-defined Networking', 'Automation', 'Programmability', 'SDN', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $8,000',
          trial: 'Free SDN assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/network-sdn-configuration',
          popular: true
        },
        {
          name: 'Network NFV Configuration',
          description: 'Network NFV configuration with network function virtualization, VNFs, and orchestration',
          features: ['Network Function Virtualization', 'VNFs', 'Orchestration', 'NFV', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000',
          trial: 'Free NFV assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-nfv-configuration',
          popular: false
        },
        {
          name: 'Network Cloud Integration',
          description: 'Network cloud integration with hybrid cloud, multi-cloud, and cloud-native networking',
          features: ['Hybrid Cloud', 'Multi-cloud', 'Cloud-native Networking', 'Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $12,000',
          trial: 'Free cloud integration assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-cloud-integration',
          popular: true
        },
        {
          name: 'Network Edge Computing',
          description: 'Network edge computing with edge devices, edge processing, and edge analytics',
          features: ['Edge Devices', 'Edge Processing', 'Edge Analytics', 'Edge Computing', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free edge computing assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/network-edge-computing',
          popular: true
        },
        {
          name: 'Network IoT Integration',
          description: 'Network IoT integration with IoT devices, protocols, and data processing',
          features: ['IoT Devices', 'Protocols', 'Data Processing', 'IoT Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000',
          trial: 'Free IoT integration assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/network-iot-integration',
          popular: true
        },
        {
          name: 'Network AI Integration',
          description: 'Network AI integration with machine learning, analytics, and intelligent automation',
          features: ['Machine Learning', 'Analytics', 'Intelligent Automation', 'AI Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free AI integration assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/network-ai-integration',
          popular: true
        },
        {
          name: 'Network Quantum Integration',
          description: 'Network quantum integration with quantum computing, quantum cryptography, and quantum networking',
          features: ['Quantum Computing', 'Quantum Cryptography', 'Quantum Networking', 'Quantum Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum integration assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/network-quantum-integration',
          popular: false
        },
        {
          name: 'Network 6G Preparation',
          description: 'Network 6G preparation with next-generation wireless, terahertz communication, and advanced technologies',
          features: ['Next-generation Wireless', 'Terahertz Communication', 'Advanced Technologies', '6G Preparation', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $100,000',
          trial: 'Free 6G preparation assessment',
          timeline: '48-96 weeks',
          link: 'https://ziontechgroup.com/network-6g-preparation',
          popular: false
        },
        {
          name: 'Network Space Integration',
          description: 'Network space integration with satellite communication, space-based internet, and orbital networks',
          features: ['Satellite Communication', 'Space-based Internet', 'Orbital Networks', 'Space Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $200,000',
          trial: 'Free space integration assessment',
          timeline: '64-128 weeks',
          link: 'https://ziontechgroup.com/network-space-integration',
          popular: false
        },
        {
          name: 'Network Time Travel Integration',
          description: 'Network time travel integration with temporal communication, causality networks, and time-based routing',
          features: ['Temporal Communication', 'Causality Networks', 'Time-based Routing', 'Time Travel Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $1,000,000',
          trial: 'Free time travel integration assessment',
          timeline: '256-512 weeks',
          link: 'https://ziontechgroup.com/network-time-travel-integration',
          popular: false
        },
        {
          name: 'Network Multiverse Integration',
          description: 'Network multiverse integration with parallel universe communication, dimensional routing, and reality-based networking',
          features: ['Parallel Universe Communication', 'Dimensional Routing', 'Reality-based Networking', 'Multiverse Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $10,000,000',
          trial: 'Free multiverse integration assessment',
          timeline: '1024-2048 weeks',
          link: 'https://ziontechgroup.com/network-multiverse-integration',
          popular: false
        },
        {
          name: 'Network God Mode Integration',
          description: 'Network god mode integration with omnipotent networking, reality manipulation, and universal control',
          features: ['Omnipotent Networking', 'Reality Manipulation', 'Universal Control', 'God Mode Integration', 'Configuration', 'Monitoring', 'Reporting', 'Support'],
          pricing: 'Starting at $100,000,000',
          trial: 'Free god mode integration assessment',
          timeline: '4096-8192 weeks',
          link: 'https://ziontechgroup.com/network-god-mode-integration',
          popular: false
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Zap,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Blockchain Integration Services',
          description: 'Complete blockchain integration with smart contracts, DeFi solutions, and Web3 applications',
          features: ['Smart Contract Development', 'DeFi Solutions', 'Web3 Integration', 'NFT Platforms', 'Token Development', 'Blockchain Migration', 'Security Audits', 'Maintenance'],
          pricing: 'Starting at $25,000',
          trial: 'Free consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/blockchain-integration',
          popular: true
        },
        {
          name: 'IoT & Edge Computing Solutions',
          description: 'Comprehensive IoT solutions with edge computing, real-time analytics, and device management',
          features: ['IoT Device Management', 'Edge Computing', 'Real-time Analytics', 'Device Security', 'Data Processing', 'Cloud Integration', 'Monitoring', 'Maintenance'],
          pricing: 'Starting at $18,000',
          trial: 'Free IoT assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/iot-edge-solutions',
          popular: true
        },
        {
          name: 'AR/VR Development Services',
          description: 'Immersive AR/VR applications for training, marketing, and customer engagement',
          features: ['AR Application Development', 'VR Experience Design', '3D Modeling', 'Interactive Content', 'Cross-platform Support', 'Performance Optimization', 'User Testing', 'Deployment'],
          pricing: 'Starting at $30,000',
          trial: 'Free demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/ar-vr-development',
          popular: false
        },
        {
          name: 'Quantum Computing Integration',
          description: 'Quantum computing solutions for optimization, cryptography, and advanced problem solving',
          features: ['Quantum Algorithm Development', 'Quantum Simulation', 'Hybrid Computing', 'Quantum Security', 'Performance Optimization', 'Integration', 'Training', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/quantum-computing',
          popular: false
        }
      ]
    },
    {
      category: 'AI-Powered IT Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI IT Operations (AIOps)',
          description: 'AI-powered IT operations with intelligent automation, predictive analytics, and self-healing systems',
          features: ['Predictive Analytics', 'Automated Incident Response', 'Self-Healing Systems', 'Intelligent Alerting', 'Performance Optimization'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free AIOps assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-ops',
          popular: true
        },
        {
          name: 'AI Network Security',
          description: 'Advanced AI-powered network security with behavioral analysis and threat prediction',
          features: ['Behavioral Analysis', 'Threat Prediction', 'Automated Response', 'Network Segmentation', 'Zero Trust Implementation'],
          pricing: 'Starting at $12,000/month',
          trial: 'Free security assessment',
          timeline: '6-10 weeks',
          link: 'https://ziontechgroup.com/ai-network-security',
          popular: true
        },
        {
          name: 'AI Cloud Cost Optimization',
          description: 'Intelligent cloud cost management with AI-powered resource optimization and cost prediction',
          features: ['Cost Prediction', 'Resource Optimization', 'Auto-scaling', 'Waste Detection', 'Budget Management'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free cost analysis',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-cloud-optimization',
          popular: false
        }
      ]
    },
    {
      category: 'Industry-Specific IT Solutions',
      icon: Building,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'Healthcare IT Solutions',
          description: 'HIPAA-compliant IT infrastructure for healthcare organizations with patient data security',
          features: ['HIPAA Compliance', 'Patient Data Security', 'Electronic Health Records', 'Medical Device Integration', 'Telemedicine Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free compliance audit',
          timeline: '8-12 weeks',
          link: 'https://ziontechgroup.com/healthcare-it',
          popular: true
        },
        {
          name: 'Financial Services IT',
          description: 'SOX-compliant IT solutions for financial institutions with advanced security and compliance',
          features: ['SOX Compliance', 'Financial Data Security', 'Transaction Monitoring', 'Risk Management', 'Regulatory Reporting'],
          pricing: 'Starting at $20,000',
          trial: 'Free compliance assessment',
          timeline: '10-16 weeks',
          link: 'https://ziontechgroup.com/financial-it',
          popular: true
        },
        {
          name: 'Manufacturing IT Solutions',
          description: 'Industrial IT infrastructure with IoT integration and manufacturing automation',
          features: ['IoT Integration', 'Manufacturing Automation', 'Supply Chain Management', 'Quality Control Systems', 'Predictive Maintenance'],
          pricing: 'Starting at $18,000',
          trial: 'Free manufacturing assessment',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/manufacturing-it',
          popular: false
        },
        {
          name: 'Retail IT Solutions',
          description: 'Omnichannel retail IT infrastructure with POS systems and customer analytics',
          features: ['POS Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Integration', 'Mobile Commerce'],
          pricing: 'Starting at $12,000',
          trial: 'Free retail assessment',
          timeline: '6-10 weeks',
          link: 'https://ziontechgroup.com/retail-it',
          popular: false
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Rocket,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      services: [
        {
          name: 'Edge Computing Solutions',
          description: 'Edge computing infrastructure for low-latency applications and IoT devices',
          features: ['Edge Servers', 'IoT Integration', 'Low-latency Processing', 'Data Synchronization', 'Offline Capabilities'],
          pricing: 'Starting at $10,000',
          trial: 'Free edge assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/edge-computing',
          popular: true
        },
        {
          name: '5G Network Implementation',
          description: '5G network infrastructure and optimization for high-speed connectivity',
          features: ['5G Infrastructure', 'Network Optimization', 'Speed Testing', 'Coverage Analysis', 'Device Management'],
          pricing: 'Starting at $25,000',
          trial: 'Free 5G assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/5g-implementation',
          popular: false
        },
        {
          name: 'IoT Platform Development',
          description: 'Comprehensive IoT platform with device management and data analytics',
          features: ['Device Management', 'Data Analytics', 'Real-time Monitoring', 'Alert Systems', 'Integration APIs'],
          pricing: 'Starting at $15,000',
          trial: 'Free IoT consultation',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/iot-platform',
          popular: true
        }
      ]
    },
    {
      category: 'Quantum Computing & Advanced Technologies',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'Quantum Computing Infrastructure',
          description: 'Complete quantum computing setup with quantum algorithms, error correction, and hybrid classical-quantum systems',
          features: ['Quantum Hardware Setup', 'Algorithm Development', 'Error Correction', 'Hybrid Systems', 'Quantum Simulation', 'Performance Optimization', 'Security Implementation', 'Training & Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/quantum-computing-infrastructure',
          popular: true
        },
        {
          name: 'Quantum-Safe Security Implementation',
          description: 'Future-proof security solutions designed to protect against quantum computing threats',
          features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Security Assessment', 'Migration Planning', 'Compliance Support', 'Risk Analysis', 'Implementation', 'Ongoing Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free security audit',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/quantum-safe-security',
          popular: true
        },
        {
          name: 'AI-Powered IT Operations (AIOps)',
          description: 'Intelligent IT operations with AI-driven automation, predictive maintenance, and self-healing systems',
          features: ['AI Automation', 'Predictive Analytics', 'Self-healing Systems', 'Intelligent Alerting', 'Root Cause Analysis', 'Performance Optimization', 'Capacity Planning', 'Cost Optimization'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free AIOps assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-ops',
          popular: true
        },
        {
          name: 'Holographic Workspace Solutions',
          description: 'Immersive 3D workspace technology with holographic displays and spatial computing',
          features: ['3D Holographic Displays', 'Spatial Computing', 'Gesture Recognition', 'Mixed Reality Integration', 'Collaborative Tools', 'Custom Applications', 'Hardware Setup', 'Training'],
          pricing: 'Starting at $30,000',
          trial: 'Free demo',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/holographic-workspace',
          popular: false
        }
      ]
    },
    {
      category: 'Advanced AI & Machine Learning',
      icon: Brain,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Infrastructure Setup',
          description: 'Complete AI infrastructure with GPU clusters, ML pipelines, and model deployment',
          features: ['GPU Cluster Setup', 'ML Pipeline Development', 'Model Deployment', 'Data Processing', 'Training Infrastructure', 'Monitoring Systems', 'Scalability Planning', 'Performance Optimization'],
          pricing: 'Starting at $35,000',
          trial: 'Free AI assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure',
          popular: true
        },
        {
          name: 'Neural Network Optimization',
          description: 'Advanced neural network optimization with automated architecture search and performance tuning',
          features: ['Architecture Search', 'Performance Tuning', 'Hyperparameter Optimization', 'Model Compression', 'Quantization', 'Pruning', 'Training Acceleration', 'Deployment Optimization'],
          pricing: 'Starting at $15,000',
          trial: 'Free optimization assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/neural-network-optimization',
          popular: true
        },
        {
          name: 'AI Model Deployment & Management',
          description: 'Production-ready AI model deployment with monitoring, scaling, and lifecycle management',
          features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling', 'Version Control', 'Rollback Capabilities', 'API Management', 'Cost Optimization'],
          pricing: 'Starting at $12,000',
          trial: 'Free deployment assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-model-deployment',
          popular: true
        },
        {
          name: 'Quantum Machine Learning Integration',
          description: 'Quantum-enhanced machine learning with exponential speedup and advanced algorithms',
          features: ['Quantum ML Algorithms', 'Hybrid Classical-Quantum', 'Exponential Speedup', 'Advanced Optimization', 'Quantum Simulation', 'Performance Monitoring', 'Custom Development', 'Training & Support'],
          pricing: 'Starting at $40,000',
          trial: 'Free quantum ML assessment',
          timeline: '12-20 weeks',
          link: 'https://ziontechgroup.com/quantum-ml-integration',
          popular: false
        }
      ]
    },
    {
      category: 'Space Technology & Aerospace',
      icon: Rocket,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      services: [
        {
          name: 'Satellite Communication Systems',
          description: 'Advanced satellite communication infrastructure with ground stations and network management',
          features: ['Ground Station Setup', 'Satellite Communication', 'Network Management', 'Signal Processing', 'Antenna Systems', 'Monitoring & Control', 'Security Implementation', 'Maintenance'],
          pricing: 'Starting at $75,000',
          trial: 'Free space tech consultation',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/satellite-communication',
          popular: false
        },
        {
          name: 'Space Mission Control Systems',
          description: 'Mission control infrastructure for space operations with real-time monitoring and control',
          features: ['Mission Control Center', 'Real-time Monitoring', 'Command & Control', 'Data Processing', 'Visualization Systems', 'Alert Systems', 'Backup Systems', 'Training'],
          pricing: 'Starting at $100,000',
          trial: 'Free mission control assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/space-mission-control',
          popular: false
        },
        {
          name: 'Space Debris Tracking System',
          description: 'AI-powered space debris tracking and collision avoidance system',
          features: ['Debris Tracking', 'Collision Prediction', 'Real-time Monitoring', 'Orbital Analysis', 'Risk Assessment', 'Alert System', 'Historical Data', 'API Integration'],
          pricing: 'Starting at $60,000',
          trial: 'Free debris tracking demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/space-debris-tracking',
          popular: true
        }
      ]
    },
    {
      category: 'Biotechnology & Life Sciences IT',
      icon: Stethoscope,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'Bioinformatics Infrastructure',
          description: 'High-performance computing infrastructure for bioinformatics and genomic analysis',
          features: ['HPC Cluster Setup', 'Genomic Data Processing', 'Bioinformatics Tools', 'Data Storage', 'Analysis Pipelines', 'Visualization Tools', 'Security & Compliance', 'Training'],
          pricing: 'Starting at $45,000',
          trial: 'Free bioinformatics assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/bioinformatics-infrastructure',
          popular: true
        },
        {
          name: 'Laboratory Information Management',
          description: 'Comprehensive LIMS solution with sample tracking, data management, and compliance',
          features: ['Sample Tracking', 'Data Management', 'Compliance Tools', 'Quality Control', 'Reporting', 'Integration', 'Security', 'Training'],
          pricing: 'Starting at $25,000',
          trial: 'Free LIMS consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/lims-solution',
          popular: true
        },
        {
          name: 'Molecular Modeling Infrastructure',
          description: 'High-performance computing for molecular modeling and drug discovery',
          features: ['HPC Setup', 'Molecular Modeling Software', 'GPU Acceleration', 'Data Processing', 'Visualization', 'Collaboration Tools', 'Security', 'Support'],
          pricing: 'Starting at $35,000',
          trial: 'Free molecular modeling demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/molecular-modeling',
          popular: false
        }
      ]
    },
    {
      category: 'Advanced Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Zero Trust Security Architecture',
          description: 'Complete zero trust security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring', 'Policy Enforcement', 'Compliance Tools', 'Training'],
          pricing: 'Starting at $30,000',
          trial: 'Free zero trust assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/zero-trust-security',
          popular: true
        },
        {
          name: 'Advanced Threat Detection',
          description: 'AI-powered threat detection with behavioral analysis and automated response',
          features: ['Behavioral Analysis', 'Threat Detection', 'Automated Response', 'Incident Management', 'Forensics', 'Compliance Reporting', 'Training', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free threat assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/advanced-threat-detection',
          popular: true
        },
        {
          name: 'Compliance Automation Platform',
          description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations',
          features: ['Compliance Monitoring', 'Automated Reporting', 'Policy Management', 'Audit Support', 'Risk Assessment', 'Documentation', 'Training', 'Support'],
          pricing: 'Starting at $18,000',
          trial: 'Free compliance audit',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/compliance-automation',
          popular: true
        }
      ]
    },
    {
      category: 'Green Technology & Sustainability',
      icon: Globe,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      services: [
        {
          name: 'Green IT Infrastructure',
          description: 'Sustainable IT infrastructure with energy-efficient hardware and renewable energy integration',
          features: ['Energy-efficient Hardware', 'Renewable Energy', 'Carbon Tracking', 'Waste Reduction', 'Green Data Centers', 'Sustainability Reporting', 'Compliance', 'Training'],
          pricing: 'Starting at $40,000',
          trial: 'Free green IT assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/green-it-infrastructure',
          popular: true
        },
        {
          name: 'Carbon Footprint Management',
          description: 'AI-powered carbon footprint tracking and reduction strategies',
          features: ['Carbon Tracking', 'Emission Analysis', 'Reduction Strategies', 'Reporting', 'Compliance', 'Sustainability Planning', 'Monitoring', 'Support'],
          pricing: 'Starting at $15,000',
          trial: 'Free carbon assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/carbon-footprint-management',
          popular: true
        },
        {
          name: 'Sustainable Data Centers',
          description: 'Eco-friendly data center design and implementation with renewable energy',
          features: ['Green Data Center Design', 'Renewable Energy', 'Cooling Optimization', 'Energy Monitoring', 'Waste Reduction', 'Sustainability Metrics', 'Compliance', 'Maintenance'],
          pricing: 'Starting at $100,000',
          trial: 'Free data center assessment',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/sustainable-data-centers',
          popular: false
        }
      ]
    },
    {
      category: 'Emerging Technologies Integration',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'Metaverse Infrastructure',
          description: 'Complete metaverse infrastructure with virtual worlds, avatars, and immersive experiences',
          features: ['Virtual World Creation', 'Avatar Systems', 'Immersive Experiences', 'Social Features', 'Monetization', 'Security', 'Scalability', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free metaverse demo',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/metaverse-infrastructure',
          popular: true
        },
        {
          name: 'Web3 & Blockchain Integration',
          description: 'Complete Web3 infrastructure with blockchain, DeFi, and NFT capabilities',
          features: ['Blockchain Setup', 'Smart Contracts', 'DeFi Integration', 'NFT Platform', 'Wallet Integration', 'Security', 'Scalability', 'Support'],
          pricing: 'Starting at $35,000',
          trial: 'Free Web3 consultation',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/web3-blockchain',
          popular: true
        },
        {
          name: 'AI-Powered Automation Suite',
          description: 'Comprehensive AI automation for business processes and operations',
          features: ['Process Automation', 'AI Decision Making', 'Workflow Optimization', 'Integration', 'Monitoring', 'Analytics', 'Training', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free automation assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ai-automation-suite',
          popular: true
        }
      ]
    }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in system performance',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes for critical issues',
      stat: '15 min'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 60% through optimization',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our comprehensive approach',
      stat: '100%'
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      icon: Cloud,
      techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud']
    },
    {
      category: 'Security Tools',
      icon: Shield,
      techs: ['CrowdStrike', 'Palo Alto', 'Cisco', 'Fortinet', 'Splunk']
    },
    {
      category: 'Databases',
      icon: Database,
      techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Monitoring',
      icon: BarChart,
      techs: ['Datadog', 'New Relic', 'Prometheus', 'Grafana', 'Zabbix']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current IT infrastructure and needs',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a detailed IT strategy aligned with your business goals',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      company: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Outdated IT infrastructure causing production delays',
      solution: 'Complete infrastructure modernization and cloud migration',
      results: ['50% faster processing', '99.9% uptime', '40% cost reduction'],
      image: '/images/case-studies/manufacturing.jpg'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Banking',
      challenge: 'Security vulnerabilities and compliance issues',
      solution: 'Comprehensive cybersecurity suite and compliance framework',
      results: ['Zero security incidents', '100% compliance', '60% faster audits'],
      image: '/images/case-studies/banking.jpg'
    },
    {
      company: 'RetailMax Stores',
      industry: 'Retail',
      challenge: 'Disconnected systems and poor customer experience',
      solution: 'System integration and unified platform development',
      results: ['30% improved efficiency', '25% better customer satisfaction', '200% ROI'],
      image: '/images/case-studies/retail.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              IT Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Comprehensive IT solutions that keep your business running smoothly, securely, and efficiently. 
              From infrastructure to security, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          <div className="space-y-16">
            {itServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="futuristic-card-enhanced hover-lift p-6 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full neon-button-enhanced py-2 px-4 rounded-lg font-medium transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full neon-button-enhanced py-2 px-4 rounded-lg font-medium transition-all block text-center"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.techs.map((technology, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our IT Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful IT implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 500+ enterprises that have already transformed their IT operations with our solutions. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}