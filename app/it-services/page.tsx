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
    },
    {
      category: 'Advanced AI & Machine Learning Infrastructure',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Infrastructure Setup Pro',
          description: 'Complete AI infrastructure with GPU clusters, ML pipelines, and model deployment',
          features: ['GPU Cluster Setup', 'ML Pipeline Development', 'Model Deployment', 'Data Processing', 'Training Infrastructure', 'Monitoring Systems', 'Scalability Planning', 'Performance Optimization'],
          pricing: 'Starting at $45,000',
          trial: 'Free AI assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure-pro',
          popular: true
        },
        {
          name: 'Neural Network Optimization Pro',
          description: 'Advanced neural network optimization with automated architecture search and performance tuning',
          features: ['Architecture Search', 'Performance Tuning', 'Hyperparameter Optimization', 'Model Compression', 'Quantization', 'Pruning', 'Training Acceleration', 'Deployment Optimization'],
          pricing: 'Starting at $25,000',
          trial: 'Free optimization assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/neural-network-optimization-pro',
          popular: true
        },
        {
          name: 'AI Model Deployment & Management Pro',
          description: 'Production-ready AI model deployment with monitoring, scaling, and lifecycle management',
          features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling', 'Version Control', 'Rollback Capabilities', 'API Management', 'Cost Optimization'],
          pricing: 'Starting at $20,000',
          trial: 'Free deployment assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/ai-model-deployment-pro',
          popular: true
        },
        {
          name: 'Quantum Machine Learning Integration Pro',
          description: 'Quantum-enhanced machine learning with exponential speedup and advanced algorithms',
          features: ['Quantum ML Algorithms', 'Hybrid Classical-Quantum', 'Exponential Speedup', 'Advanced Optimization', 'Quantum Simulation', 'Performance Monitoring', 'Custom Development', 'Training & Support'],
          pricing: 'Starting at $60,000',
          trial: 'Free quantum ML assessment',
          timeline: '16-24 weeks',
          link: 'https://ziontechgroup.com/quantum-ml-integration-pro',
          popular: false
        }
      ]
    },
    {
      category: 'Space Technology & Aerospace IT',
      icon: Rocket,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      services: [
        {
          name: 'Satellite Communication Systems Pro',
          description: 'Advanced satellite communication infrastructure with ground stations and network management',
          features: ['Ground Station Setup', 'Satellite Communication', 'Network Management', 'Signal Processing', 'Antenna Systems', 'Monitoring & Control', 'Security Implementation', 'Maintenance'],
          pricing: 'Starting at $100,000',
          trial: 'Free space tech consultation',
          timeline: '20-40 weeks',
          link: 'https://ziontechgroup.com/satellite-communication-pro',
          popular: false
        },
        {
          name: 'Space Mission Control Systems Pro',
          description: 'Mission control infrastructure for space operations with real-time monitoring and control',
          features: ['Mission Control Center', 'Real-time Monitoring', 'Command & Control', 'Data Processing', 'Visualization Systems', 'Alert Systems', 'Backup Systems', 'Training'],
          pricing: 'Starting at $150,000',
          trial: 'Free mission control assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/space-mission-control-pro',
          popular: false
        },
        {
          name: 'Space Debris Tracking System Pro',
          description: 'AI-powered space debris tracking and collision avoidance system',
          features: ['Debris Tracking', 'Collision Prediction', 'Real-time Monitoring', 'Orbital Analysis', 'Risk Assessment', 'Alert System', 'Historical Data', 'API Integration'],
          pricing: 'Starting at $80,000',
          trial: 'Free debris tracking demo',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/space-debris-tracking-pro',
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
          name: 'Bioinformatics Infrastructure Pro',
          description: 'High-performance computing infrastructure for bioinformatics and genomic analysis',
          features: ['HPC Cluster Setup', 'Genomic Data Processing', 'Bioinformatics Tools', 'Data Storage', 'Analysis Pipelines', 'Visualization Tools', 'Security & Compliance', 'Training'],
          pricing: 'Starting at $60,000',
          trial: 'Free bioinformatics assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/bioinformatics-infrastructure-pro',
          popular: true
        },
        {
          name: 'Laboratory Information Management Pro',
          description: 'Comprehensive LIMS solution with sample tracking, data management, and compliance',
          features: ['Sample Tracking', 'Data Management', 'Compliance Tools', 'Quality Control', 'Reporting', 'Integration', 'Security', 'Training'],
          pricing: 'Starting at $35,000',
          trial: 'Free LIMS consultation',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/lims-solution-pro',
          popular: true
        },
        {
          name: 'Molecular Modeling Infrastructure Pro',
          description: 'High-performance computing for molecular modeling and drug discovery',
          features: ['HPC Setup', 'Molecular Modeling Software', 'GPU Acceleration', 'Data Processing', 'Visualization', 'Collaboration Tools', 'Security', 'Support'],
          pricing: 'Starting at $50,000',
          trial: 'Free molecular modeling demo',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/molecular-modeling-pro',
          popular: false
        }
      ]
    },
    {
      category: 'Advanced Security & Compliance Pro',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Zero Trust Security Architecture Pro',
          description: 'Complete zero trust security implementation with identity verification and micro-segmentation',
          features: ['Identity Verification', 'Micro-segmentation', 'Device Management', 'Access Control', 'Continuous Monitoring', 'Policy Enforcement', 'Compliance Tools', 'Training'],
          pricing: 'Starting at $40,000',
          trial: 'Free zero trust assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/zero-trust-security-pro',
          popular: true
        },
        {
          name: 'Advanced Threat Detection Pro',
          description: 'AI-powered threat detection with behavioral analysis and automated response',
          features: ['Behavioral Analysis', 'Threat Detection', 'Automated Response', 'Incident Management', 'Forensics', 'Compliance Reporting', 'Training', 'Support'],
          pricing: 'Starting at $30,000',
          trial: 'Free threat assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/advanced-threat-detection-pro',
          popular: true
        },
        {
          name: 'Compliance Automation Platform Pro',
          description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations',
          features: ['Compliance Monitoring', 'Automated Reporting', 'Policy Management', 'Audit Support', 'Risk Assessment', 'Documentation', 'Training', 'Support'],
          pricing: 'Starting at $25,000',
          trial: 'Free compliance audit',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/compliance-automation-pro',
          popular: true
        }
      ]
    },
    {
      category: 'Green Technology & Sustainability Pro',
      icon: Globe,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      services: [
        {
          name: 'Green IT Infrastructure Pro',
          description: 'Sustainable IT infrastructure with energy-efficient hardware and renewable energy integration',
          features: ['Energy-efficient Hardware', 'Renewable Energy', 'Carbon Tracking', 'Waste Reduction', 'Green Data Centers', 'Sustainability Reporting', 'Compliance', 'Training'],
          pricing: 'Starting at $60,000',
          trial: 'Free green IT assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/green-it-infrastructure-pro',
          popular: true
        },
        {
          name: 'Carbon Footprint Management Pro',
          description: 'AI-powered carbon footprint tracking and reduction strategies',
          features: ['Carbon Tracking', 'Emission Analysis', 'Reduction Strategies', 'Reporting', 'Compliance', 'Sustainability Planning', 'Monitoring', 'Support'],
          pricing: 'Starting at $20,000',
          trial: 'Free carbon assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/carbon-footprint-management-pro',
          popular: true
        },
        {
          name: 'Sustainable Data Centers Pro',
          description: 'Eco-friendly data center design and implementation with renewable energy',
          features: ['Green Data Center Design', 'Renewable Energy', 'Cooling Optimization', 'Energy Monitoring', 'Waste Reduction', 'Sustainability Metrics', 'Compliance', 'Maintenance'],
          pricing: 'Starting at $150,000',
          trial: 'Free data center assessment',
          timeline: '24-48 weeks',
          link: 'https://ziontechgroup.com/sustainable-data-centers-pro',
          popular: false
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