import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function ITServices() {
  const itServices = [
    {
      name: "Cloud Migration Services",
      description: "Complete cloud infrastructure migration with zero downtime, enhanced security, and optimized performance for your business.",
      price: "$2,999/project",
      features: [
        "Zero-downtime migration strategy",
        "Security assessment and hardening",
        "Performance optimization",
        "24/7 migration support",
        "Data backup and recovery",
        "Cost optimization analysis",
        "Training and documentation",
        "Post-migration monitoring"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve system reliability by 99.9%",
        "Enhance security posture",
        "Enable remote work capabilities"
      ],
      marketPrice: "$5,000-10,000/project",
      savings: "Save up to $7,000/project"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity platform with advanced threat detection, prevention, and response capabilities to protect your business.",
      price: "$799/month",
      features: [
        "24/7 threat monitoring",
        "Vulnerability scanning and patching",
        "Incident response team",
        "Security awareness training",
        "Compliance management",
        "Penetration testing",
        "Security policy development",
        "Regular security audits"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Reduce security incidents by 85%",
        "Ensure compliance with regulations",
        "Minimize business disruption"
      ],
      marketPrice: "$1,500-2,500/month",
      savings: "Save up to $1,700/month"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes, technology stack, and customer experience.",
      price: "$5,999/project",
      features: [
        "Process automation and optimization",
        "Legacy system modernization",
        "Technology integration",
        "Change management support",
        "Staff training programs",
        "Performance monitoring",
        "ROI tracking and analysis",
        "Ongoing support and maintenance"
      ],
      benefits: [
        "Increase operational efficiency by 60%",
        "Improve customer satisfaction by 45%",
        "Reduce manual processes by 80%",
        "Enable data-driven decision making"
      ],
      marketPrice: "$10,000-20,000/project",
      savings: "Save up to $14,000/project"
    },
    {
      name: "IT Infrastructure Management",
      description: "Complete IT infrastructure management including network setup, server maintenance, and system optimization for optimal performance.",
      price: "$1,299/month",
      features: [
        "Network design and implementation",
        "Server setup and maintenance",
        "Backup and disaster recovery",
        "Performance monitoring",
        "Security updates and patches",
        "Hardware lifecycle management",
        "Remote support and maintenance",
        "Documentation and reporting"
      ],
      benefits: [
        "Reduce IT downtime by 90%",
        "Improve system performance by 50%",
        "Lower IT operational costs",
        "Ensure business continuity"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,200/month"
    },
    {
      name: "DevOps and Automation",
      description: "Comprehensive DevOps services including CI/CD pipeline setup, infrastructure automation, and deployment optimization.",
      price: "$1,599/month",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Automated testing and deployment",
        "Container orchestration",
        "Monitoring and logging setup",
        "Performance optimization",
        "Security integration",
        "Team training and support"
      ],
      benefits: [
        "Reduce deployment time by 75%",
        "Improve code quality and reliability",
        "Enable faster feature delivery",
        "Reduce manual errors by 95%"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,400/month"
    },
    {
      name: "Data Analytics and Business Intelligence",
      description: "Advanced data analytics platform with real-time insights, predictive analytics, and automated reporting for informed decision making.",
      price: "$1,999/month",
      features: [
        "Data warehouse design and implementation",
        "ETL/ELT pipeline development",
        "Real-time dashboards and reports",
        "Predictive analytics models",
        "Data visualization tools",
        "Machine learning integration",
        "Data governance and security",
        "User training and support"
      ],
      benefits: [
        "Improve decision making speed by 70%",
        "Identify new business opportunities",
        "Reduce reporting time by 85%",
        "Enable data-driven culture"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,000/month"
    },
    {
      name: "API Development and Integration",
      description: "Comprehensive API development services including RESTful APIs, microservices architecture, and third-party integrations for seamless data flow.",
      price: "$1,199/month",
      features: [
        "RESTful API design and development",
        "GraphQL API implementation",
        "Microservices architecture",
        "API gateway setup",
        "Third-party integrations",
        "API documentation and testing",
        "Rate limiting and security",
        "Performance monitoring"
      ],
      benefits: [
        "Improve system integration by 80%",
        "Reduce development time by 60%",
        "Enable faster third-party connections",
        "Enhance system scalability"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,300/month"
    },
    {
      name: "Mobile App Development",
      description: "Full-stack mobile application development for iOS and Android with modern frameworks, cloud integration, and enterprise features.",
      price: "$2,499/month",
      features: [
        "Cross-platform development",
        "Native iOS and Android apps",
        "Cloud backend integration",
        "Push notifications",
        "Offline functionality",
        "App store optimization",
        "User analytics and tracking",
        "Maintenance and updates"
      ],
      benefits: [
        "Reach customers on all devices",
        "Improve user engagement by 70%",
        "Enable mobile commerce",
        "Enhance brand presence"
      ],
      marketPrice: "$4,000-7,000/month",
      savings: "Save up to $4,500/month"
    },
    {
      name: "E-commerce Platform Development",
      description: "Complete e-commerce solution with modern design, payment processing, inventory management, and marketing automation.",
      price: "$1,899/month",
      features: [
        "Custom e-commerce platform",
        "Payment gateway integration",
        "Inventory management system",
        "Order processing automation",
        "Customer management",
        "Marketing tools integration",
        "Analytics and reporting",
        "Mobile-responsive design"
      ],
      benefits: [
        "Increase online sales by 150%",
        "Reduce operational costs by 40%",
        "Improve customer experience",
        "Enable 24/7 sales operations"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,100/month"
    },
    {
      name: "Database Design and Optimization",
      description: "Advanced database services including design, optimization, migration, and performance tuning for maximum efficiency and reliability.",
      price: "$999/month",
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Data migration services",
        "Backup and recovery solutions",
        "Security hardening",
        "Query optimization",
        "Indexing strategies",
        "Monitoring and maintenance"
      ],
      benefits: [
        "Improve database performance by 90%",
        "Reduce query response time by 80%",
        "Ensure data integrity and security",
        "Lower database operational costs"
      ],
      marketPrice: "$1,500-2,500/month",
      savings: "Save up to $1,500/month"
    },
    {
      name: "Network Security and Monitoring",
      description: "Comprehensive network security services with advanced threat detection, firewall management, and 24/7 network monitoring.",
      price: "$1,399/month",
      features: [
        "Firewall configuration and management",
        "Intrusion detection systems",
        "Network segmentation",
        "VPN setup and management",
        "Traffic analysis and monitoring",
        "Security policy implementation",
        "Incident response",
        "Regular security assessments"
      ],
      benefits: [
        "Protect against network attacks",
        "Improve network performance by 50%",
        "Ensure compliance requirements",
        "Reduce security vulnerabilities"
      ],
      marketPrice: "$2,200-3,500/month",
      savings: "Save up to $2,100/month"
    },
    {
      name: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure management including AWS, Azure, and Google Cloud with optimization, monitoring, and cost management.",
      price: "$1,699/month",
      features: [
        "Multi-cloud management",
        "Cost optimization and monitoring",
        "Auto-scaling configuration",
        "Security and compliance",
        "Backup and disaster recovery",
        "Performance monitoring",
        "Resource optimization",
        "24/7 cloud support"
      ],
      benefits: [
        "Reduce cloud costs by 35%",
        "Improve system reliability by 99.9%",
        "Enable automatic scaling",
        "Ensure cloud security compliance"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,300/month"
    },
    {
      name: "Software Testing and Quality Assurance",
      description: "Comprehensive software testing services including automated testing, performance testing, and quality assurance for reliable applications.",
      price: "$1,099/month",
      features: [
        "Automated testing implementation",
        "Performance and load testing",
        "Security testing",
        "User acceptance testing",
        "Regression testing",
        "Test case development",
        "Bug tracking and reporting",
        "Quality metrics and reporting"
      ],
      benefits: [
        "Reduce bugs by 85%",
        "Improve application performance",
        "Ensure user satisfaction",
        "Lower maintenance costs"
      ],
      marketPrice: "$1,800-2,800/month",
      savings: "Save up to $1,700/month"
    },
    {
      name: "IT Consulting and Strategy",
      description: "Strategic IT consulting services to help businesses plan, implement, and optimize their technology infrastructure and digital transformation initiatives.",
      price: "$299/hour",
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Vendor evaluation and selection",
        "ROI analysis and planning",
        "Change management consulting",
        "Training and development",
        "Ongoing advisory services"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Improve decision making"
      ],
      marketPrice: "$500-800/hour",
      savings: "Save up to $500/hour"
    },
    {
      name: "Backup and Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions ensuring business continuity and data protection with automated backup systems.",
      price: "$799/month",
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data replication and sync",
        "Recovery time optimization",
        "Testing and validation",
        "Compliance monitoring",
        "24/7 monitoring and alerts",
        "Recovery documentation"
      ],
      benefits: [
        "Minimize data loss risks",
        "Reduce recovery time by 90%",
        "Ensure business continuity",
        "Meet compliance requirements"
      ],
      marketPrice: "$1,200-2,000/month",
      savings: "Save up to $1,200/month"
    },
    {
      name: "IT Support and Helpdesk",
      description: "Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive monitoring for optimal system performance.",
      price: "$599/month",
      features: [
        "24/7 technical support",
        "Remote assistance and troubleshooting",
        "Proactive system monitoring",
        "User training and support",
        "Hardware and software support",
        "Incident management",
        "Knowledge base maintenance",
        "Performance reporting"
      ],
      benefits: [
        "Reduce IT downtime by 95%",
        "Improve user productivity",
        "Lower IT support costs",
        "Ensure system reliability"
      ],
      marketPrice: "$1,000-1,500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "Cloud Infrastructure as a Service (IaaS)",
      description: "Complete cloud infrastructure management with automated provisioning, scaling, and optimization across AWS, Azure, and Google Cloud platforms.",
      price: "$1,899/month",
      features: [
        "Multi-cloud infrastructure management",
        "Automated resource provisioning",
        "Auto-scaling and load balancing",
        "Cost optimization and monitoring",
        "Disaster recovery and backup",
        "Security and compliance management",
        "Performance monitoring and alerting",
        "24/7 infrastructure support"
      ],
      benefits: [
        "Reduce infrastructure costs by 50%",
        "Improve scalability and flexibility",
        "Ensure 99.9% uptime",
        "Simplify cloud management"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,100/month"
    },
    {
      name: "Advanced DevOps & CI/CD Pipeline",
      description: "Comprehensive DevOps services with automated CI/CD pipelines, container orchestration, and infrastructure automation for modern software delivery.",
      price: "$2,199/month",
      features: [
        "Automated CI/CD pipeline setup",
        "Container orchestration with Kubernetes",
        "Infrastructure as Code (IaC)",
        "Automated testing and quality gates",
        "Deployment automation and rollback",
        "Monitoring and logging integration",
        "Security scanning and compliance",
        "Team training and best practices"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve code quality and reliability",
        "Enable continuous delivery",
        "Minimize deployment risks"
      ],
      marketPrice: "$3,500-6,000/month",
      savings: "Save up to $3,800/month"
    },
    {
      name: "Enterprise Database Management",
      description: "Comprehensive database services including design, optimization, migration, and maintenance for SQL and NoSQL databases.",
      price: "$1,499/month",
      features: [
        "Database design and architecture",
        "Performance tuning and optimization",
        "Data migration and synchronization",
        "Backup and recovery strategies",
        "Security and access management",
        "Monitoring and alerting",
        "Capacity planning and scaling",
        "24/7 database support"
      ],
      benefits: [
        "Improve database performance by 60%",
        "Ensure data integrity and security",
        "Reduce downtime to near zero",
        "Optimize storage and costs"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,500/month"
    },
    {
      name: "Network Security & Firewall Management",
      description: "Advanced network security services with firewall configuration, intrusion detection, and threat prevention for enterprise networks.",
      price: "$1,299/month",
      features: [
        "Firewall design and configuration",
        "Intrusion detection and prevention",
        "VPN setup and management",
        "Network segmentation and isolation",
        "Threat monitoring and analysis",
        "Security policy implementation",
        "Compliance and audit support",
        "Incident response and forensics"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Ensure network compliance",
        "Reduce security incidents by 90%",
        "Improve network performance"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,200/month"
    },
    {
      name: "IT Service Desk & Support",
      description: "Comprehensive IT support services with helpdesk management, remote assistance, and proactive maintenance for all IT needs.",
      price: "$899/month",
      features: [
        "24/7 IT helpdesk support",
        "Remote desktop assistance",
        "Hardware and software support",
        "User account management",
        "Printer and peripheral support",
        "Mobile device management",
        "Software installation and updates",
        "IT asset management"
      ],
      benefits: [
        "Reduce IT support costs by 40%",
        "Improve user productivity",
        "Minimize downtime and disruptions",
        "Centralize IT support operations"
      ],
      marketPrice: "$1,500-2,500/month",
      savings: "Save up to $1,600/month"
    },
    {
      name: "Cloud Migration & Modernization",
      description: "Complete cloud migration services with application modernization, data migration, and optimization for legacy systems.",
      price: "$3,999/project",
      features: [
        "Application assessment and planning",
        "Legacy system modernization",
        "Data migration and synchronization",
        "Cloud-native architecture design",
        "Performance optimization",
        "Security and compliance migration",
        "Training and documentation",
        "Post-migration support"
      ],
      benefits: [
        "Reduce operational costs by 45%",
        "Improve system performance and reliability",
        "Enable modern cloud capabilities",
        "Future-proof your technology stack"
      ],
      marketPrice: "$8,000-15,000/project",
      savings: "Save up to $11,000/project"
    },
    {
      name: "IT Compliance & Audit Services",
      description: "Comprehensive compliance services for SOX, HIPAA, GDPR, and other regulatory requirements with audit preparation and ongoing monitoring.",
      price: "$1,799/month",
      features: [
        "Compliance gap analysis",
        "Policy and procedure development",
        "Risk assessment and mitigation",
        "Audit preparation and support",
        "Documentation and reporting",
        "Training and awareness programs",
        "Ongoing compliance monitoring",
        "Regulatory change management"
      ],
      benefits: [
        "Ensure regulatory compliance",
        "Reduce audit findings by 85%",
        "Minimize compliance risks",
        "Streamline audit processes"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,200/month"
    },
    {
      name: "Advanced Backup & Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions with automated backups, testing, and rapid recovery capabilities.",
      price: "$1,199/month",
      features: [
        "Automated backup scheduling",
        "Multi-tier backup strategies",
        "Disaster recovery planning",
        "Recovery time objective (RTO) optimization",
        "Backup testing and validation",
        "Off-site storage management",
        "Recovery point objective (RPO) monitoring",
        "Business continuity planning"
      ],
      benefits: [
        "Ensure data protection and recovery",
        "Minimize business disruption",
        "Meet compliance requirements",
        "Reduce recovery time to minutes"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,300/month"
    },
    {
      name: "IT Asset Management & Lifecycle",
      description: "Complete IT asset management services including inventory, lifecycle management, and optimization for hardware and software assets.",
      price: "$699/month",
      features: [
        "IT asset inventory and tracking",
        "Software license management",
        "Hardware lifecycle planning",
        "Asset optimization and consolidation",
        "Vendor management and negotiations",
        "Compliance and audit support",
        "Cost analysis and reporting",
        "Asset disposal and recycling"
      ],
      benefits: [
        "Reduce IT costs by 30%",
        "Improve asset utilization",
        "Ensure license compliance",
        "Optimize IT investments"
      ],
      marketPrice: "$1,200-2,000/month",
      savings: "Save up to $1,300/month"
    },
    {
      name: "Advanced Monitoring & Analytics",
      description: "Comprehensive IT monitoring platform with real-time analytics, predictive insights, and automated alerting for all IT systems.",
      price: "$1,399/month",
      features: [
        "Real-time system monitoring",
        "Performance analytics and reporting",
        "Predictive failure analysis",
        "Custom dashboard creation",
        "Automated alerting and escalation",
        "Capacity planning and forecasting",
        "Trend analysis and insights",
        "Integration with existing tools"
      ],
      benefits: [
        "Prevent 95% of system failures",
        "Improve system performance",
        "Reduce downtime significantly",
        "Enable proactive maintenance"
      ],
      marketPrice: "$2,200-3,800/month",
      savings: "Save up to $2,400/month"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting services including technology roadmaps, architecture design, and digital transformation planning.",
      price: "$2,499/month",
      features: [
        "IT strategy and roadmap development",
        "Technology architecture design",
        "Digital transformation planning",
        "Vendor evaluation and selection",
        "Technology assessment and recommendations",
        "ROI analysis and business case development",
        "Change management support",
        "Ongoing strategic guidance"
      ],
      benefits: [
        "Align IT with business objectives",
        "Optimize technology investments",
        "Accelerate digital transformation",
        "Improve competitive advantage"
      ],
      marketPrice: "$4,000-7,000/month",
      savings: "Save up to $4,500/month"
    }
  ];

import { Star } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { useState } from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Network, 
  Database, 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  Globe,
  Lock,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Wrench,
  HardDrive,
  Wifi,
  Phone,
  Mail,
  MapPin,
  FileText,
  Cpu
} from 'lucide-react';

const itServices = [
  {
    category: "Managed IT Services",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "24/7 IT Support & Monitoring",
        description: "Round-the-clock monitoring and support for your IT infrastructure",
        features: ["24/7 monitoring", "Remote support", "Proactive maintenance", "Help desk support"],
        pricing: "Starting at $150/user/month",
        delivery: "Immediate"
      },
      {
        name: "Network Infrastructure Management",
        description: "Complete management of your network infrastructure and connectivity",
        features: ["Network design", "Router configuration", "Switch management", "WiFi optimization"],
        pricing: "Starting at $200/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Server Management & Maintenance",
        description: "Comprehensive server administration and maintenance services",
        features: ["Server monitoring", "Performance optimization", "Security updates", "Backup management"],
        pricing: "Starting at $300/server/month",
        delivery: "1-3 weeks"
      },
      {
        name: "AI-Powered IT Operations",
        description: "Intelligent IT operations using AI for predictive maintenance and automation",
        features: ["Predictive maintenance", "Automated troubleshooting", "Performance optimization", "Anomaly detection"],
        pricing: "Starting at $800/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Zero-Trust Security Architecture",
        description: "Implement zero-trust security model for enhanced protection",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Risk assessment"],
        pricing: "Starting at $1,200/month",
        delivery: "6-12 weeks"
      }
    ]
  },
  {
    category: "Cloud Services & Migration",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Cloud Migration Services",
        description: "Seamless migration of your infrastructure to cloud platforms",
        features: ["AWS/Azure/GCP migration", "Data migration", "Application migration", "Security configuration"],
        pricing: "Starting at $5,000/project",
        delivery: "4-8 weeks"
      },
      {
        name: "Cloud Infrastructure Management",
        description: "Ongoing management and optimization of cloud resources",
        features: ["Resource optimization", "Cost management", "Security monitoring", "Auto-scaling"],
        pricing: "Starting at $500/month",
        delivery: "2-4 weeks"
      },
      {
        name: "Hybrid Cloud Solutions",
        description: "Integration of on-premises and cloud infrastructure",
        features: ["Hybrid architecture", "Data synchronization", "Security integration", "Disaster recovery"],
        pricing: "Starting at $800/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Cybersecurity Services",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    services: [
      {
        name: "Security Assessment & Auditing",
        description: "Comprehensive security evaluation and vulnerability assessment",
        features: ["Penetration testing", "Vulnerability scanning", "Compliance auditing", "Security reporting"],
        pricing: "Starting at $2,500/assessment",
        delivery: "2-4 weeks"
      },
      {
        name: "Managed Security Services",
        description: "Ongoing security monitoring and threat management",
        features: ["SIEM monitoring", "Threat detection", "Incident response", "Security updates"],
        pricing: "Starting at $400/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Compliance & Governance",
        description: "Help with regulatory compliance and security governance",
        features: ["HIPAA compliance", "GDPR compliance", "SOX compliance", "Policy development"],
        pricing: "Starting at $1,500/month",
        delivery: "4-8 weeks"
      }
    ]
  },
  {
    category: "Data Management & Backup",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Data Backup & Recovery",
        description: "Comprehensive data protection and disaster recovery solutions",
        features: ["Automated backups", "Offsite storage", "Disaster recovery", "Data restoration"],
        pricing: "Starting at $200/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Database Administration",
        description: "Professional database management and optimization",
        features: ["Performance tuning", "Backup management", "Security hardening", "Monitoring"],
        pricing: "Starting at $350/month",
        delivery: "2-4 weeks"
      },
      {
        name: "Data Migration Services",
        description: "Safe and secure data migration between systems",
        features: ["Data mapping", "Migration planning", "Data validation", "Zero-downtime migration"],
        pricing: "Starting at $3,000/project",
        delivery: "3-6 weeks"
      }
    ]
  },
  {
    category: "Emerging IT Technologies",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    services: [
      {
        name: "Edge Computing Solutions",
        description: "Deploy computing power closer to data sources for faster processing",
        features: ["Edge deployment", "Real-time processing", "Reduced latency", "IoT integration"],
        pricing: "Starting at $2,500/month",
        delivery: "8-12 weeks"
      },
      {
        name: "5G Network Implementation",
        description: "Implement 5G networks for ultra-fast connectivity and IoT support",
        features: ["5G infrastructure", "Network optimization", "IoT connectivity", "Performance monitoring"],
        pricing: "Starting at $15,000/project",
        delivery: "12-20 weeks"
      },
      {
        name: "Quantum Computing Integration",
        description: "Integrate quantum computing capabilities for complex problem solving",
        features: ["Quantum algorithms", "Hybrid computing", "Optimization problems", "Cryptography"],
        pricing: "Starting at $25,000/month",
        delivery: "16-24 weeks"
      },
      {
        name: "Blockchain Infrastructure",
        description: "Build and maintain blockchain networks for secure transactions",
        features: ["Blockchain setup", "Smart contracts", "Consensus mechanisms", "Security auditing"],
        pricing: "Starting at $8,500/month",
        delivery: "10-16 weeks"
      }
    ]
  }
];

const microSaaS = [
  {
    name: "IT Asset Management",
    description: "Track and manage all your IT assets from a single dashboard",
    features: ["Asset tracking", "License management", "Maintenance scheduling", "Cost analysis"],
    pricing: "$99/month per 100 assets",
    icon: Monitor
  },
  {
    name: "Network Monitoring Dashboard",
    description: "Real-time network performance monitoring and alerting",
    features: ["Real-time monitoring", "Performance alerts", "Traffic analysis", "Uptime reporting"],
    pricing: "$149/month per location",
    icon: Network
  },
  {
    name: "Password Management System",
    description: "Secure password management and team collaboration",
    features: ["Secure storage", "Team sharing", "Password generation", "Access control"],
    pricing: "$79/month per 50 users",
    icon: Lock
  },
  {
    name: "IT Help Desk Ticketing",
    description: "Streamlined IT support ticket management system",
    features: ["Ticket creation", "Priority management", "SLA tracking", "Knowledge base"],
    pricing: "$199/month per 25 agents",
    icon: Headphones
  },
  {
    name: "Backup Monitoring Service",
    description: "Automated backup verification and monitoring",
    features: ["Backup verification", "Failure alerts", "Recovery testing", "Compliance reporting"],
    pricing: "$129/month per 10TB",
    icon: HardDrive
  },
  {
    name: "IT Documentation Platform",
    description: "Centralized IT documentation and knowledge management",
    features: ["Document storage", "Version control", "Team collaboration", "Search functionality"],
    pricing: "$89/month per team",
    icon: FileText
  },
  {
    name: "AI-Powered IT Analytics",
    description: "Intelligent analytics for IT operations and performance optimization",
    features: ["Performance insights", "Predictive analytics", "Cost optimization", "Trend analysis"],
    pricing: "$299/month per 100 devices",
    icon: BarChart3
  },
  {
    name: "Cloud Cost Optimizer",
    description: "Automated cloud cost optimization and resource management",
    features: ["Cost analysis", "Resource optimization", "Waste detection", "Budget alerts"],
    pricing: "$199/month per $10k spend",
    icon: Cloud
  },
  {
    name: "Security Compliance Tracker",
    description: "Automated security compliance monitoring and reporting",
    features: ["Compliance tracking", "Audit reports", "Risk assessment", "Policy management"],
    pricing: "$399/month per 500 users",
    icon: Shield
  },
  {
    name: "IT Automation Workflows",
    description: "Automate repetitive IT tasks with intelligent workflows",
    features: ["Task automation", "Workflow builder", "Integration APIs", "Custom triggers"],
    pricing: "$149/month per 50 workflows",
    icon: Settings
  },
  {
    name: "Remote Work IT Suite",
    description: "Complete IT solution for remote and hybrid work environments",
    features: ["VPN management", "Device security", "Collaboration tools", "Performance monitoring"],
    pricing: "$79/month per user",
    icon: Wifi
  }
];

const processSteps = [
  {
    step: "01",
    title: "IT Assessment",
    description: "We evaluate your current IT infrastructure and identify areas for improvement."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our experts create a comprehensive IT strategy aligned with your business goals."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We implement solutions with minimal disruption to your business operations."
  },
  {
    step: "04",
    title: "Monitoring & Support",
    description: "Continuous monitoring and proactive support to ensure optimal performance."
  },
  {
    step: "05",
    title: "Optimization",
    description: "Ongoing optimization and updates to keep your IT infrastructure current."
  }
];

const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "15min", label: "Response Time" },
  { number: "500+", label: "IT Projects Completed" },
  { number: "24/7", label: "Support Available" }
];
>>>>>>> main

export default function ITServices() {
>>>>>>> main
  return (
    <Layout 
      title="IT Services - Zion Tech Group" 
      description="Comprehensive IT services including managed IT, cloud migration, cybersecurity, data management, and infrastructure solutions. Expert IT support for businesses of all sizes."
      keywords="IT services, managed IT, cloud migration, cybersecurity, data backup, network management, IT support"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT services that keep your business running smoothly. From managed IT support 
              and cloud migration to cybersecurity and data management - we provide the technology foundation your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free IT Consultation
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Service Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Complete IT solutions designed to support your business operations and drive growth.
            </p>
          </motion.div>

          {itServices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Micro SaaS Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Management Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized IT management tools that can be deployed quickly and scaled with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaS.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {solution.pricing}
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                  >
                    Start Free Trial
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/request-quote"
                    className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Service Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful IT implementation and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your IT needs and get a customized solution
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free IT Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss your IT needs and create a comprehensive solution that supports your business growth. 
              Get a free consultation and discover how our IT services can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free IT Consultation
              </Link>
              <Link 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Call: +1 302 464 0950
              </Link>
            </div>
            <div className="mt-8 text-gray-600">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}