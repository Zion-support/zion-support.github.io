<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
=======
import { ArrowRight, Star, Shield, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, Settings, Zap, BarChart3, Award, Target, HardDrive, Minimize, Star as StarIcon, Phone } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
import SEOOptimizer from "../components/SEOOptimizer";
=======
import { Cloud, Shield, Settings, Database, BarChart, CheckCircle, ArrowRight, Phone, Clock, Zap, Cpu, Wifi, Server, Code, TrendingUp, DollarSign, Clock, Shield, TrendingUp, MessageSquare } from 'lucide-react';

export default function ITServicesPage() {}
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {}
      category: 'Cloud Infrastructure & Migration',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {}
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and optimized performance',
          features: ['Multi-cloud Strategy', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Security Implementation', 'Performance Tuning'],
          pricing: 'Starting at $10,000',
          trial: 'Free consultation',
          timeline: '2-8 weeks',
          link: 'https://ziontechgroup.com/cloud-migration',
          popular: true;
        },
        {}
          name: 'IT Infrastructure Design',
          description: 'Scalable and secure infrastructure architecture tailored to your business needs',
          features: ['Network Design', 'Server Configuration', 'Load Balancing', 'Disaster Recovery', 'Scalability Planning'],
          pricing: 'Starting at $15,000',
          trial: 'Free assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/it-infrastructure',
          popular: true;
        },
        {}
          name: 'Database Management & Optimization',
          description: 'Comprehensive database administration with performance tuning and security hardening',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Scalability'],
          pricing: 'Starting at $5,000/month',
          trial: 'Free health check',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/database-management',
          popular: false;
        },
        {}
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
    {}
      category: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {}
          name: 'Enterprise Cybersecurity Suite',
          description: 'Comprehensive security solutions with 24/7 monitoring and threat detection',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free security audit',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/cybersecurity',
          popular: true;
        },
        {}
          name: 'Compliance Management Platform',
          description: 'Ensure compliance with GDPR, HIPAA, SOX, and other industry regulations',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support', 'Policy Management'],
          pricing: 'Starting at $12,000',
          trial: 'Free compliance check',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/compliance-management',
          popular: true;
        },
        {}
          name: 'Security Awareness Training',
          description: 'Comprehensive employee security training with phishing simulation and assessment',
          features: ['Phishing Simulation', 'Security Workshops', 'Policy Development', 'Assessment', 'Certification'],
          pricing: 'Starting at $3,000',
          trial: 'Free training session',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/security-training',
          popular: false;
        },
        {}
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
    {}
      category: 'IT Support & Management',
      icon: Settings,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {}
          name: '24/7 IT Support & Monitoring',
          description: 'Round-the-clock technical support with proactive monitoring and maintenance',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'Emergency Response', 'SLA Guarantee'],
          pricing: 'Starting at $2,000/month',
          trial: 'Free trial month',
          timeline: 'Immediate',
          link: 'https://ziontechgroup.com/it-support',
          popular: true;
        },
        {}
          name: 'System Administration Services',
          description: 'Complete system administration with user management and performance optimization',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Backup Management', 'Patch Management'],
          pricing: 'Starting at $4,000/month',
          trial: 'Free assessment',
          timeline: 'Ongoing',
          link: 'https://ziontechgroup.com/system-administration',
          popular: true;
        },
        {}
          name: 'IT Strategic Consulting',
          description: 'Strategic IT planning and technology consulting for digital transformation',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Budget Planning', 'Digital Transformation'],
          pricing: 'Starting at $200/hour',
          trial: 'Free consultation',
          timeline: 'As needed',
          link: 'https://ziontechgroup.com/it-consulting',
          popular: false;
        },
        {}
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
    {}
      category: 'Software Development & Integration',
      icon: Code,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {}
          name: 'Custom Software Development',
          description: 'Tailored software solutions built with modern technologies and best practices',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration Services', 'Quality Assurance'],
          pricing: 'Starting at $15,000',
          trial: 'Free consultation',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/custom-development',
          popular: true;
        },
        {}
          name: 'System Integration & APIs',
          description: 'Connect and integrate disparate systems with robust API development and management',
          features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy System Modernization', 'API Management'],
          pricing: 'Starting at $8,000',
          trial: 'Free integration assessment',
          timeline: '3-8 weeks',
          link: 'https://ziontechgroup.com/system-integration',
          popular: true;
        },
        {}
          name: 'DevOps & CI/CD Implementation',
          description: 'Streamline development and deployment with automated testing and continuous integration',
          features: ['Automated Testing', 'Continuous Integration', 'Deployment Automation', 'Monitoring', 'Infrastructure as Code'],
          pricing: 'Starting at $6,000',
          trial: 'Free DevOps audit',
          timeline: '2-6 weeks',
          link: 'https://ziontechgroup.com/devops-cicd',
          popular: true;
        },
        {}
          name: 'Legacy System Modernization',
          description: 'Modernize legacy systems with cloud migration and technology updates',
          features: ['Legacy Assessment', 'Cloud Migration', 'Technology Updates', 'Data Migration', 'User Training'],
          pricing: 'Starting at $20,000',
          trial: 'Free modernization plan',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/legacy-modernization',
          popular: false;
        }
      ]
    },
    {}
      category: 'Network & Infrastructure',
      icon: Wifi,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {}
          name: 'Network Design & Implementation',
          description: 'Secure and scalable network infrastructure with wireless and wired solutions',
          features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Optimization', 'Monitoring'],
          pricing: 'Starting at $12,000',
          trial: 'Free network assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/network-design',
          popular: true;
        },
        {}
          name: 'Disaster Recovery & Backup',
          description: 'Comprehensive disaster recovery solutions with automated backup and recovery testing',
          features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Testing', 'Documentation'],
          pricing: 'Starting at $5,000',
          trial: 'Free DR assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/disaster-recovery',
          popular: false;
        },
        {}
          name: 'IT Performance Monitoring',
          description: 'Real-time monitoring and alerting for IT infrastructure and applications',
          features: ['Real-time Monitoring', 'Performance Metrics', 'Alerting', 'Reporting', 'Capacity Planning'],
          pricing: 'Starting at $3,000/month',
          trial: 'Free monitoring setup',
          timeline: '1-2 weeks',
          link: 'https://ziontechgroup.com/performance-monitoring',
          popular: false;
        },
        {}
name: 'AI-Powered Infrastructure Management',
          description: 'Intelligent infrastructure management with AI-driven optimization and predictive maintenance',
          features: ['AI Optimization', 'Predictive Maintenance', 'Automated Scaling', 'Performance Tuning', 'Cost Optimization'],
          pricing: 'Starting at $5,500/month',
          trial: 'Free AI assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure',
          popular: true;
        },
        {}
          name: 'Quantum-Safe Security Implementation',
          description: 'Next-generation security solutions resistant to quantum computing threats',
          features: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Future-Proof Security', 'Migration Planning', 'Compliance Assurance'],
          pricing: 'Starting at $12,000',
          trial: 'Free security audit',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/quantum-security',
          popular: false;
        },
        {}
          name: 'Edge Computing Infrastructure',
          description: 'Distributed computing infrastructure for IoT and real-time applications',
          features: ['Edge Nodes', 'Real-time Processing', 'Low Latency', 'IoT Integration', 'Distributed Analytics'],
          pricing: 'Starting at $8,000/month',
          trial: 'Free edge assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/edge-computing',
          popular: true;
        }
      ]
    },
    {}
      category: 'AI-Powered IT Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {}
          name: 'AI Infrastructure Monitoring Pro',
          description: 'Advanced AI-powered infrastructure monitoring with predictive analytics and automated issue resolution',
          features: ['Predictive Analytics', 'Automated Issue Resolution', 'Anomaly Detection', 'Performance Optimization', 'Capacity Planning', 'Cost Optimization'],
          pricing: 'Starting at $4,999/mo',
          trial: 'Free AI assessment',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/ai-infrastructure-monitoring',
          popular: true;
        },
        {}
          name: 'AI Security Operations Center',
          description: 'Intelligent security operations with AI-powered threat detection, response, and prevention',
          features: ['AI Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Threat Intelligence', 'Incident Response', 'Compliance Monitoring'],
          pricing: 'Starting at $6,999/mo',
          trial: 'Free security audit',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/ai-security-operations',
          popular: true;
        },
        {}
          name: 'AI Cloud Cost Optimization',
          description: 'Intelligent cloud cost optimization with AI-driven resource management and cost prediction',
          features: ['Cost Prediction', 'Resource Optimization', 'Auto-scaling', 'Reserved Instance Management', 'Cost Allocation', 'Budget Alerts'],
          pricing: 'Starting at $2,999/mo',
          trial: 'Free cost analysis',
          timeline: '2-3 weeks',
          link: 'https://ziontechgroup.com/ai-cloud-optimization',
          popular: true;
        },
        {}
          name: 'AI Data Center Management',
          description: 'Smart data center management with AI-powered optimization, monitoring, and automation',
          features: ['Smart Monitoring', 'Predictive Maintenance', 'Energy Optimization', 'Capacity Planning', 'Automated Operations', 'Performance Analytics'],
          pricing: 'Starting at $8,999/mo',
          trial: 'Free assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-data-center-management',
          popular: false;
        }
      ]
    },
    {}
      category: 'Blockchain & Web3 Solutions',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {}
          name: 'Blockchain Integration Services Pro',
          description: 'Comprehensive blockchain integration with smart contracts, DeFi, and Web3 solutions',
          features: ['Smart Contract Development', 'DeFi Integration', 'NFT Solutions', 'Cross-chain Interoperability', 'Web3 Development', 'Token Economics'],
          pricing: 'Starting at $12,999',
          trial: 'Free consultation',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/blockchain-integration-services',
          popular: true;
        },
        {}
          name: 'Smart Contract Security Audit Pro',
          description: 'Advanced smart contract security auditing with AI-powered vulnerability detection',
          features: ['AI Vulnerability Detection', 'Code Review', 'Security Testing', 'Gas Optimization', 'Compliance Check', 'Audit Reports'],
          pricing: 'Starting at $5,999',
          trial: 'Free security scan',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/smart-contract-security-audit',
          popular: true;
        },
        {}
          name: 'Decentralized Infrastructure',
          description: 'Decentralized infrastructure solutions with distributed computing and storage',
          features: ['Distributed Computing', 'Decentralized Storage', 'Edge Computing', 'P2 P Networks', 'Consensus Mechanisms', 'Token Incentives'],
          pricing: 'Starting at $9,999/mo',
          trial: 'Free pilot',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/decentralized-infrastructure',
          popular: false;
        }
      ]
    },
    {}
      category: 'Advanced Analytics & BI',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {}
          name: 'AI Business Intelligence Pro',
          description: 'Advanced AI-powered business intelligence with predictive analytics and automated insights',
          features: ['Predictive Analytics', 'Automated Insights', 'Natural Language Queries', 'Real-time Dashboards', 'Data Visualization', 'Machine Learning'],
          pricing: 'Starting at $3,999/mo',
          trial: 'Free BI assessment',
          timeline: '3-6 weeks',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true;
        },
        {}
          name: 'Data Lake & Warehouse Solutions',
          description: 'Comprehensive data lake and warehouse solutions with AI-powered data processing',
          features: ['Data Lake Architecture', 'ETL/ELT Pipelines', 'Data Quality Management', 'Real-time Processing', 'Data Governance', 'AI Data Processing'],
          pricing: 'Starting at $7,999/mo',
          trial: 'Free data assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/data-lake-warehouse',
          popular: true;
        },
        {}
          name: 'Real-time Analytics Platform',
          description: 'Real-time analytics platform with streaming data processing and instant insights',
          features: ['Streaming Analytics', 'Real-time Processing', 'Event-driven Architecture', 'Instant Insights', 'Scalable Processing', 'Data Integration'],
          pricing: 'Starting at $4,999/mo',
          trial: 'Free demo',
          timeline: '2-4 weeks',
          link: 'https://ziontechgroup.com/real-time-analytics',
          popular: false;
        }
      ]
    },
    {}
      category: 'IoT & Edge Computing',
      icon: Cpu,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {}
          name: 'IoT Platform Development',
          description: 'Comprehensive IoT platform development with device management and data analytics',
          features: ['Device Management', 'Data Analytics', 'Edge Computing', 'Protocol Support', 'Security', 'Scalability'],
          pricing: 'Starting at $15,999',
          trial: 'Free IoT assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/iot-platform-development',
          popular: true;
        },
        {}
          name: 'Edge Computing Solutions',
          description: 'Edge computing solutions with real-time processing and low-latency applications',
          features: ['Edge Processing', 'Low Latency', 'Real-time Analytics', 'Edge AI', 'Distributed Computing', '5 G Integration'],
          pricing: 'Starting at $8,999/mo',
          trial: 'Free edge assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/edge-computing-solutions',
          popular: true;
        },
        {}
          name: 'Smart City Solutions',
          description: 'Comprehensive smart city solutions with IoT integration and data analytics',
          features: ['Smart Infrastructure', 'Data Analytics', 'Citizen Services', 'Traffic Management', 'Energy Management', 'Public Safety'],
          pricing: 'Starting at $25,999',
          trial: 'Free city assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/smart-city-solutions',
          popular: false;
        }
      ]
    },
    {}
      category: 'Advanced AI-Powered IT Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {}
          name: 'AI Quantum Security Implementation',
          description: 'Next-generation quantum-resistant security solutions for future-proof cybersecurity',
          features: ['Quantum Cryptography', 'Post-Quantum Algorithms', 'Future-Proof Security', 'Migration Planning', 'Compliance Assurance', 'Quantum Key Distribution'],
          pricing: 'Starting at $15,999',
          trial: 'Free security audit',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ai-quantum-security',
          popular: true;
        },
        {}
          name: 'AI Neural Network Infrastructure',
          description: 'Advanced neural network infrastructure for AI model training and deployment',
          features: ['Neural Network Training', 'Model Deployment', 'GPU Clusters', 'Distributed Computing', 'Auto-scaling', 'Performance Optimization'],
          pricing: 'Starting at $12,999/mo',
          trial: 'Free infrastructure assessment',
          timeline: '4-8 weeks',
          link: 'https://ziontechgroup.com/ai-neural-infrastructure',
          popular: true;
        },
        {}
          name: 'AI Edge Computing Platform',
          description: 'Intelligent edge computing platform with AI-powered decision making at the edge',
          features: ['Edge AI Processing', 'Real-time Decision Making', 'Low Latency', 'Distributed Intelligence', 'Edge Analytics', 'Autonomous Operations'],
          pricing: 'Starting at $8,999/mo',
          trial: 'Free edge assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/ai-edge-computing-platform',
          popular: true;
        },
        {}
          name: 'AI Quantum Computing Infrastructure',
          description: 'Quantum computing infrastructure for complex problem solving and optimization',
          features: ['Quantum Processors', 'Quantum Algorithms', 'Hybrid Computing', 'Quantum Simulation', 'Optimization Problems', 'Cryptographic Security'],
          pricing: 'Starting at $25,999/mo',
          trial: 'Free quantum assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/ai-quantum-infrastructure',
          popular: false;
        }
      ]
    },
    {}
      category: 'Specialized Industry IT Solutions',
      icon: Building,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {}
          name: 'Healthcare IT Solutions Pro',
          description: 'HIPAA-compliant healthcare IT solutions with AI-powered patient care and medical data management',
          features: ['HIPAA Compliance', 'Electronic Health Records', 'Medical Imaging AI', 'Patient Monitoring', 'Telemedicine Platform', 'Medical Data Security'],
          pricing: 'Starting at $18,999',
          trial: 'Free healthcare assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/healthcare-it-solutions-pro',
          popular: true;
        },
        {}
          name: 'Financial Services IT Pro',
          description: 'SOX-compliant financial IT solutions with AI-powered fraud detection and risk management',
          features: ['SOX Compliance', 'Fraud Detection AI', 'Risk Management', 'Financial Data Security', 'Regulatory Reporting', 'Transaction Monitoring'],
          pricing: 'Starting at $22,999',
          trial: 'Free financial assessment',
          timeline: '10-20 weeks',
          link: 'https://ziontechgroup.com/financial-it-solutions-pro',
          popular: true;
        },
        {}
          name: 'Manufacturing IT Solutions Pro',
          description: 'Industrial IT solutions with AI-powered manufacturing optimization and predictive maintenance',
          features: ['Industrial IoT', 'Predictive Maintenance', 'Quality Control AI', 'Supply Chain Integration', 'Manufacturing Analytics', 'Safety Monitoring'],
          pricing: 'Starting at $16,999',
          trial: 'Free manufacturing assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/manufacturing-it-solutions-pro',
          popular: true;
        },
        {}
          name: 'Retail IT Solutions Pro',
          description: 'E-commerce and retail IT solutions with AI-powered customer experience and inventory management',
          features: ['E-commerce Platform', 'Customer Analytics', 'Inventory AI', 'Personalization Engine', 'Payment Processing', 'Omnichannel Integration'],
          pricing: 'Starting at $14,999',
          trial: 'Free retail assessment',
          timeline: '6-12 weeks',
          link: 'https://ziontechgroup.com/retail-it-solutions-pro',
          popular: true;
        }
      ]
    },
    {}
      category: 'Emerging Technology Solutions',
      icon: Rocket,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        {}
          name: '5G Network Implementation Pro',
          description: 'Advanced 5G network implementation with AI-powered optimization and edge computing integration',
          features: ['5G Infrastructure', 'Edge Computing', 'Network Slicing', 'AI Optimization', 'Low Latency', 'High Bandwidth'],
          pricing: 'Starting at $35,999',
          trial: 'Free 5 G assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/5g-implementation-pro',
          popular: false;
        },
        {}
          name: 'AR/VR Infrastructure Pro',
          description: 'Immersive technology infrastructure for augmented and virtual reality applications',
          features: ['AR/VR Hardware', 'Spatial Computing', 'Haptic Feedback', 'Motion Tracking', 'Content Management', 'User Analytics'],
          pricing: 'Starting at $19,999',
          trial: 'Free AR/VR assessment',
          timeline: '8-16 weeks',
          link: 'https://ziontechgroup.com/ar-vr-infrastructure-pro',
          popular: true;
        },
        {}
          name: 'Digital Twin Platform Pro',
          description: 'Digital twin technology for real-time monitoring and simulation of physical assets',
          features: ['Real-time Monitoring', 'Predictive Simulation', 'Asset Management', 'Performance Analytics', 'Maintenance Optimization', 'Virtual Testing'],
          pricing: 'Starting at $24,999',
          trial: 'Free digital twin assessment',
          timeline: '12-24 weeks',
          link: 'https://ziontechgroup.com/digital-twin-platform-pro',
          popular: true;
        },
        {}
          name: 'Metaverse Infrastructure Pro',
          description: 'Infrastructure for metaverse applications with AI-powered virtual worlds and social interaction',
          features: ['Virtual Worlds', 'Avatar Technology', 'Social Interaction', 'Virtual Economy', 'Content Creation', 'User Management'],
          pricing: 'Starting at $29,999',
          trial: 'Free metaverse assessment',
          timeline: '16-32 weeks',
          link: 'https://ziontechgroup.com/metaverse-infrastructure-pro',
          popular: false
        }
      ]
import React, { useState } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Network } from 'lucide-react';
import { Code } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Cloud } from 'lucide-react';

export default function ITServices() {

  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including AWS, Azure, and Google Cloud Platform migration and optimization",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud strategy & planning",
        "AWS/Azure/GCP migration",
        "Cloud cost optimization",
        "Disaster recovery setup",
        "Auto-scaling configuration",
        "Security & compliance",
        "24/7 monitoring & support",
        "Performance optimization"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
      ],
      category: "Infrastructure",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-suite",
      name: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance audits (SOC2, ISO27001)",
        "Firewall & endpoint protection",
        "Data encryption & backup"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure regulatory compliance",
        "Minimize business disruption"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-suite",
      featured: true
    },
    {
      id: "network-engineering",
      name: "Network Engineering & Optimization",
      description: "Enterprise network design, implementation, and optimization for maximum performance and reliability",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Network architecture design",
        "WAN/LAN optimization",
        "SD-WAN implementation",
        "Network security hardening",
        "Performance monitoring",
        "Bandwidth optimization",
        "VoIP & unified communications",
        "Wireless network setup"
      ],
      benefits: [
        "Improve network performance by 60%",
        "Reduce downtime by 80%",
        "Enhance security posture",
        "Lower operational costs"
      ],
      category: "Networking",
      rating: 4.7,
      reviews: 1567,
      link: "/network-engineering",
      featured: true
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Expert database administration, optimization, and migration services for all major database platforms",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Backup & recovery strategies",
        "Database migration services",
        "High availability setup",
        "Security hardening",
        "Monitoring & alerting",
        "Capacity planning"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Ensure 99.99% uptime",
        "Reduce storage costs by 30%",
        "Enhance data security"
      ],
      category: "Database",
      rating: 4.8,
      reviews: 1123,
      link: "/database-management",
      featured: false
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation Services",
      description: "Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated deployments",
      price: "From $2,000/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Automated testing & deployment",
        "Monitoring & logging solutions",
        "Configuration management",
        "Release management",
        "Performance optimization"
      ],
      benefits: [
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve team productivity",
        "Scale infrastructure efficiently"
      ],
      category: "DevOps",
      rating: 4.9,
      reviews: 1345,
      link: "/devops-automation",
      featured: false
    },
    {
      id: "helpdesk-support",
      name: "24/7 IT Helpdesk & Support",
      description: "Comprehensive IT support services with rapid response times and expert technical assistance",
      price: "From $800/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Hardware & software support",
        "User training & onboarding",
        "Incident management",
        "Knowledge base maintenance",
        "SLA compliance monitoring",
        "Proactive maintenance"
      ],
      benefits: [
        "Reduce downtime by 75%",
        "Improve user satisfaction",
        "Lower support costs",
        "Increase productivity"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 2156,
      link: "/helpdesk-support",
      featured: false
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android platforms",
      price: "From $3,500/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design & optimization",
        "App store deployment",
        "Performance optimization",
        "Security implementation",
        "Backend integration",
        "Maintenance & updates"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase revenue opportunities",
        "Stay competitive in market"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 987,
      link: "/mobile-app-development",
      featured: false
    },
    {
      id: "web-development",
      name: "Web Development & E-commerce",
      description: "Custom web applications, e-commerce solutions, and digital platforms for modern businesses",
      price: "From $2,200/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Custom web applications",
        "E-commerce platform development",
        "Content management systems",
        "API development & integration",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation"
      ],
      benefits: [
        "Increase online presence",
        "Boost conversion rates",
        "Improve user experience",
        "Scale with business growth"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 1456,
      link: "/web-development",
      featured: false
    },
    {
      id: "data-analytics",
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics solutions with real-time insights and predictive modeling capabilities",
      price: "From $1,800/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "Data warehouse design",
        "ETL/ELT pipeline development",
        "Real-time analytics dashboards",
        "Predictive modeling & ML",
        "Data visualization",
        "Report automation",
        "Data governance",
        "Performance monitoring"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify business opportunities",
        "Improve operational efficiency",
        "Increase competitive advantage"
      ],
      category: "Analytics",
      rating: 4.8,
      reviews: 1234,
      link: "/data-analytics",
      featured: false
    },
    {
      id: "it-consulting",
      name: "IT Strategy & Consulting",
      description: "Strategic IT consulting services to align technology with business objectives and drive digital transformation",
      price: "From $1,500/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "IT strategy development",
        "Digital transformation planning",
        "Technology assessment",
        "Vendor evaluation & selection",
        "Project management",
        "Change management",
        "ROI analysis",
        "Risk assessment"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Reduce implementation risks",
        "Accelerate digital transformation"
      ],
      category: "Consulting",
      rating: 4.9,
      reviews: 876,
      link: "/it-consulting",
      featured: false
    },
    {
      id: "backup-disaster-recovery",
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity",
      price: "From $1,000/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Business continuity testing",
        "Data replication services",
        "Recovery time optimization",
        "Compliance reporting",
        "24/7 monitoring",
        "Emergency response"
      ],
      benefits: [
        "Minimize data loss risks",
        "Ensure business continuity",
        "Meet compliance requirements",
        "Reduce recovery time"
      ],
      category: "Backup",
      rating: 4.7,
      reviews: 654,
      link: "/backup-disaster-recovery",
      featured: false
    },
    {
      id: "managed-it-services",
      name: "Managed IT Services",
      description: "Complete IT management services including monitoring, maintenance, and proactive support",
      price: "From $1,200/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Proactive monitoring & maintenance",
        "Patch management",
        "Security updates",
        "Performance optimization",
        "Asset management",
        "License management",
        "Compliance monitoring",
        "Regular reporting"
      ],
      benefits: [
        "Reduce IT management overhead",
        "Improve system reliability",
        "Lower operational costs",
        "Focus on core business"
      ],
      category: "Managed Services",
      rating: 4.8,
      reviews: 1789,
      link: "/managed-it-services",
      featured: false
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current IT infrastructure, identify pain points, and understand your business objectives.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy aligned with your business goals and create a detailed implementation plan.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your business operations, ensuring smooth transitions.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
      icon: <Monitor className="w-8 h-8" />
  ];

  return (
    <div>
<<<<<<< HEAD
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and system integration. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, software development, system integration, IT consulting, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <SEOOptimizer></SEOOptimizer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Professional IT Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we have everything you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 ml-1 text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Clock, Users, Brain, Code, Server, Target, TrendingUp, BarChart, PieChart, LineChart, Monitor, Headphones } from 'lucide-react'

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      category: 'Infrastructure',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      price: 'Starting at $599/month'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      category: 'Security',
      icon: Shield,
      features: ['Security audits', 'Penetration testing', 'Compliance', 'Incident response'],
      price: 'Starting at $799/month'
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integrations',
      category: 'Development',
      icon: Code,
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Rate limiting'],
      price: 'Starting at $399/month'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      category: 'Data',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration'],
      price: 'Starting at $299/month'
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      category: 'DevOps',
      icon: Settings,
<<<<<<< HEAD
      features: ['Automated deployments', 'Version control', 'Testing automation', 'Rollback capabilities'],
      price: 'Starting at $499/month'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      category: 'Development',
      icon: Globe,
      features: ['React/Next.js', 'Responsive design', 'SEO optimization', 'Performance tuning'],
      price: 'Starting at $199/month'
=======
      features: ['Technology Strategy', 'Digital Transformation', 'IT Assessment', 'Project Management'],
      benefits: ['Strategic guidance', 'Technology roadmap', 'Cost optimization', 'Risk mitigation'],
      pricing: { starting: 1500, period: 'hour' },
      popular: false,
      color: 'from-indigo-400 to-purple-500'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  ]

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Data', name: 'Data', count: services.filter(s => s.category === 'Data').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length }
  ]

  const filteredServices = services.filter(service =>
    selectedCategory === 'all' || service.category === selectedCategory
  )

  const stats = [
    { label: 'Services Delivered', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Response Time', value: '<2 hours', icon: Clock },
    { label: 'Success Rate', value: '100%', icon: TrendingUp }
  ]
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
=======
  const benefits = [
    {}
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in system performance',
      stat: '40%',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: Monitor,
      stat: '24/7'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    },
    {
      icon: BarChart,
<<<<<<< HEAD
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
=======
      stat: '40%'
    },
    {}
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes for critical issues',
      stat: '15 min'},
    {}
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 60% through optimization',
      stat: '60%'},
    {}
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our comprehensive approach',
      stat: '100%'}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

<<<<<<< HEAD
  return (
    <React.Fragment>
      <Helmet>
<<<<<<< HEAD
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and web development." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, web development, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
=======
  const process = [
    {}
      step: 1,
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current IT infrastructure and needs',
      duration: '1-2 weeks'},
    {}
      step: 2,
      title: 'Strategy Development',
      description: 'Create a detailed IT strategy aligned with your business goals',
      duration: '1-2 weeks'},
    {}
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'},
    {}
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'},
    {}
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'}
  ];

  const caseStudies = [
    {}
      company: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Outdated IT infrastructure causing production delays',
      solution: 'Complete infrastructure modernization and cloud migration',
      results: ['50% faster processing', '99.9% uptime', '40% cost reduction'],
      image: '/images/case-studies/manufacturing.webp'},
    {}
      company: 'FinanceFirst Bank',
      industry: 'Banking',
      challenge: 'Security vulnerabilities and compliance issues',
      solution: 'Comprehensive cybersecurity suite and compliance framework',
      results: ['Zero security incidents', '100% compliance', '60% faster audits'],
      image: '/images/case-studies/banking.webp'},
    {}
      company: 'RetailMax Stores',
      industry: 'Retail',
      challenge: 'Disconnected systems and poor customer experience',
      solution: 'System integration and unified platform development',
      results: ['30% improved efficiency', '25% better customer satisfaction', '200% ROI'],
      image: '/images/case-studies/retail.webp'
    }
  ];
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
      icon: Users,
      stat: '50+'
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA compliance, medical records, telemedicine' },
    { name: 'Finance', description: 'PCI compliance, trading systems, risk management' },
    { name: 'E-commerce', description: 'Online platforms, payment processing, inventory' },
    { name: 'Manufacturing', description: 'Production systems, quality control, supply chain' },
    { name: 'Education', description: 'Learning management, student data, remote learning' },
    { name: 'Government', description: 'Public services, data security, compliance' }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'it_services_phone_number'});
    }
  };


<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 matrix-bg"></div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>

<h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">IT Services</h1><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">Comprehensive IT solutions that keep your business running smoothly, securely, and efficiently.</p>
              From infrastructure to security, we've got you covered.</p>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 matrix-bg"></div>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles"></div>
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
<h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>
              IT Services;
            </h1>,
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">,
,
              Comprehensive IT solutions that keep your business running smoothly, securely, and efficiently.
              From infrastructure to security, we've got you covered.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">150+</div><div className="text-gray-300">IT Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">750+</div><div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20"></div>
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div><div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div><div className="text-gray-300">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">24/7 Support</span>
              </div>
            </div>,
          </div>,
        </div>,
      </section>,
,
      {/* Benefits */}
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Proven expertise and enterprise-grade solutions that deliver measurable business value</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <benefit.icon className="w-10 h-10 text-white" />
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Proven expertise and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="text-center group"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <benefit.icon className="w-10 h-10 text-white" />,
                </div>,
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our IT Services</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Comprehensive IT solutions designed to meet your business needs</p><div className="space-y-16">{itServices.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}></div>
                <div className="flex items-center space-x-3 mb-8"></div>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">{category.services.map((service, serviceIndex) => (</div>
</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Our IT Services;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          <div className="space-y-16"></div>
            {itServices.map((category, categoryIndex) => (}
              <div key={categoryIndex}></div>
                <div className="flex items-center space-x-3 mb-8"></div>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8">,
                  {category.services.map((service, serviceIndex) => (
}
<div key={serviceIndex} className="futuristic-card hover-lift p-6 relative"></div>
<div key={serviceIndex} className="futuristic-card-enhanced hover-lift p-6 relative"></div>

                      {service.popular && (}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"></div>
                          Popular;
<div key={serviceIndex} className="futuristic-card hover-lift p-6 relative"></div>
<div key={serviceIndex} className="futuristic-card-enhanced hover-lift p-6 relative">{service.popular && (</div><div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Popular</div>
                        </div>
                      )}

                      <div className="relative z-10"></div>
                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{service.name}<p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                        <div className="space-y-4 mb-6"></div>
                          <h5 className="text-lg font-semibold text-white flex items-center"></h5>
                            <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                            Key Features:
                          </h5>
                          <ul className="space-y-2"></ul>
                            {service.features.slice(0, 4).map((feature, featureIndex) => (}
                              <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300"></li>
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                            {service.features.length > 4 && (}
                              <li className="text-cyan-400 text-sm font-medium"></li>
                                +{service.features.length - 4} more features;
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="space-y-3 mb-6"></div>
                          <div className="flex justify-between items-center"></div>
                            <span className="text-sm text-gray-400">Pricing:</span><span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                          </div>
                          <div className="flex justify-between items-center"></div>
                            <span className="text-sm text-gray-400">Trial:</span><span className="text-sm font-medium text-green-400">{service.trial}</span>
                          </div>
                            <span className="text-sm text-gray-400">Pricing: </span>,
                            <span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                          </div>
                          <div className="flex justify-between items-center"></div>
                            <span className="text-sm text-gray-400">Trial: </span>,
                            <span className="text-sm font-medium text-green-400">{service.trial}</span>
                          </div>
                          <div className="flex justify-between items-center"></div>
                            <span className="text-sm text-gray-400">Timeline: </span>,
                            <span className="text-sm font-medium text-purple-400">{service.timeline}</span>
                          </div>
                        </div>

                        <div className="space-y-3"></div>
                          <a;
                          <div className="flex justify-between items-center"></div>
                            <span className="text-sm text-gray-400">Timeline:</span><span className="text-sm font-medium text-purple-400">{service.timeline}</span>
                          </div>
                        </div>

                        <div className="space-y-3"></div>
                          <a
                            href={service.link}
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          ></a>
                            Learn More;
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                          <a;
                            href="/contact"
                            className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                          ></a>
                            Get Started;
                          </a>
                        </div>
                      </div>
<div className="space-y-2"></div>
                        <a
                          href={service.link}
                          className="w-full neon-button-enhanced py-2 px-4 rounded-lg font-medium transition-all block text-center"
                        ></a>
                          Learn More;
                        </a>
                        <a;
                          href="/contact"
                          className="w-full neon-button-enhanced py-2 px-4 rounded-lg font-medium transition-all block text-center"
                        ></a>
                          Get Started;
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
      <section className="py-20"></section>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Technologies We Work With;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {technologies.map((tech, index) => (}
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technologies We Work With</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We work with the latest and most reliable technologies in the industry</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{technologies.map((tech, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <tech.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2"></div>
                  {tech.techs.map((technology, techIndex) => (}
                    <div key={techIndex} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded"></div>
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
      <section className="py-20 bg-slate-800/50"></section>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our IT Implementation Process</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">A proven methodology that ensures successful IT implementation</p>
            </p>
          </div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Our IT Implementation Process;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              A proven methodology that ensures successful IT implementation;
            </p>
          </div>
          <div className="max-w-4xl mx-auto">,
            <div className="relative">,
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>,
              {process.map((step, index) => (
          <div className="max-w-4xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (}
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}<h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}<div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div><h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p><div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20"></section>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {caseStudies.map((study, index) => (}
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <span className="text-2xl font-bold text-white">{study.company.split(' ').map(word => word[0]).join('')}<h3 className="text-xl font-bold text-white mb-2">{study.company}</h3><p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3"></div>
                  <div></div>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Success Stories</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Real results from real clients across various industries</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{caseStudies.map((study, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <span className="text-2xl font-bold text-white">{study.company.split(' ').map(word => word[0]).join('')}</span><h3 className="text-xl font-bold text-white mb-2">{study.company}</h3><p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:<p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:<p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:<ul className="space-y-1">{study.results.map((result, resultIndex) => (</ul>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Success Stories;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Real results from real clients across various industries;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-700/50 transition-all duration-300">,
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">,
                  <span className="text-2xl font-bold text-white">,
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge: </h4>,
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution: </h4>,
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1"></ul>
                      {study.results.map((result, resultIndex) => (}
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400"></li>
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
    <>
      <Helmet></Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, support, cybersecurity, and cloud solutions for modern businesses." />
        <meta name="keywords" content="IT services, IT support, IT infrastructure, cybersecurity, cloud services, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-24 pb-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
=======
        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} solutions tailored to your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices
                  .filter(service => service.category === category)
                  .map((service, index) => (</div>
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"></div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice,}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates</div>
                        </div>
=======
        {/* Services Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Professional IT services designed to support and enhance your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/20 hover:border-cyan-400/50'
                }`}></div>
                  {service.popular && (
                    <div className="absolute -top-3 left-6"></div>
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold"></div>
                        Most Popular
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                      </div>

                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (</div>
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6"></div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Quote
                      </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                    </div>
<<<<<<< HEAD
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <p className="text-green-400 text-sm font-semibold">Flexible pricing</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/demo"
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      Demo
                    </Link>
                  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}></div>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2"></ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2"></ul>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300"></li>
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-cyan-400 font-semibold mb-4"></div>
                    Starting at ${service.pricing.starting.toLocaleString()}/{service.pricing.period}
                  </div>
                  
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button>
                    Learn More
                  </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
=======
          <h2 className="text-4xl lg: text-6xl font-bold text-white mb-6 neon-text"></h2>
            Ready to Modernize Your IT Infrastructure?
          </h2>
<p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"></p>
            Join 500+ enterprises that have already transformed their IT operations with our solutions. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" /></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>

        <div className="container mx-auto px-4 text-center relative z-10"></div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 neon-text">Ready to Modernize Your IT Infrastructure?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join 500+ enterprises that have already transformed their IT operations with our solutions. Get started today!</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8"></div>
            <a
              href="https://ziontechgroup.com/contact"
className="neon-button-enhanced px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center"

              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"

            ></a>
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today;
            </a>
            <a;
              href="tel:+13024640950"

className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"

            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950;
            </a>,
          </div>,
          <div className="text-gray-200 text-sm">,
          <div className="text-gray-200 text-sm"></div>
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>

        {/* Benefits Section */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the difference with our professional IT services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                    <benefit.icon className="w-10 h-10 text-white" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  </div>
                  <div className="text-cyan-400 font-bold text-lg mb-2">{step.step}</div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
<<<<<<< HEAD
=======
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our IT services are tailored to meet the unique requirements of various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                A systematic approach to delivering exceptional IT services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Evaluate your current IT infrastructure and identify areas for improvement.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
                <p className="text-gray-300">Develop a comprehensive IT strategy aligned with your business goals.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Deploy IT solutions with minimal disruption to your operations.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support</h3>
                <p className="text-gray-300">Provide ongoing support and optimization for your IT systems.</p>
              </div>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our IT solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
              </Link>
=======
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services for modern businesses." />
        <meta name="keywords" content="IT services, technology services, support, maintenance" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
=======
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss how our IT services can help you achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
</div>
=======
      <Head>
        <title>It It Servicess - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            It It Servicess
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            it-services services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your IT Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default ItServicesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
    </>
  );
};

export default ITServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======


  return (
    <>
      <title>ItServices - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">ItServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional itservices services coming soon.</p>

              Contact Us

      <  />
  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
