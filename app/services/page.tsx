import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & IT Services | Zion Tech Group - Enterprise Solutions',
  description: 'Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI Content Optimization Suite',
      description: 'AI-powered content optimization platform for headlines, email subject lines, and marketing copy',
      icon: '📝',
      href: '/services/ai-content-optimization-suite',
      pricing: 'Starting from $29/month',
      features: [
        'HeadlineMaster AI - B2B Marketing Headlines',
        'PodcastTranscriber Pro - Accurate Transcriptions',
        'ContentAnalyzer AI - Performance Analytics',
        'A/B Testing Capabilities',
        'Industry-Specific Optimization',
        'Real-time Performance Tracking'
      ]
    },
    {
      title: 'AI Lead Scoring API',
      description: 'Real-time lead scoring API using behavioral, firmographic, and engagement signals with explainability.',
      icon: '📈',
      href: '/services/micro-saas/ai-lead-scoring-api',
      pricing: 'Starting from $99/month',
      features: [
        'HubSpot/Salesforce integrations',
        'Explainable scores',
        'Batch & streaming ingestion',
        'SLA-backed responses'
      ]
    },
    {
      title: 'AI Observability Platform',
      description: 'Unified logs, metrics, traces and AI anomaly detection with SLOs and guided RCA.',
      icon: '📊',
      href: '/services/it-services/ai-observability-platform',
      pricing: 'Team $1,499/month',
      features: [
        'OpenTelemetry-native',
        'SLOs & burn-rate alerts',
        'Service topology map',
        'RCA graph & log mining'
      ]
    },
    {
      title: 'AI Governance, Risk & Compliance',
      description: 'Operationalize responsible AI with policies, evals, model cards, and evidence automation.',
      icon: '⚖️',
      href: '/services/ai-governance-risk-compliance',
      pricing: 'Starting from $799/month',
      features: [
        'NIST AI RMF, EU AI Act mapping',
        'Model inventory & cards',
        'Bias & safety evaluations',
        'Evidence automation'
      ]
    },
    {
      title: 'AI Compliance GPT',
      description: 'Policy drafting, control mapping, evidence automation for SOC 2/ISO/HIPAA/GDPR',
      icon: '⚖️',
      features: [
        'Continuous Control Monitoring',
        'Risk & Vendor Management',
        'Audit-Ready Reports',
        'Okta/Cloud Integrations',
        'Change Tracking'
      ],
      href: '/services/ai-compliance-gpt',
      pricing: '$799 - $1,999+/month',
      category: 'AI Services'
    },
    {
      title: 'Autonomous Agents for Ops',
      description: 'Production-safe agents for SRE/SecOps/DevOps with approvals and guardrails',
      icon: '🧩',
      features: [
        'Alert Triage',
        'Runbooks & Safe Remediations',
        'Incident Comms',
        'Postmortems',
        'Cost Anomaly Investigations'
      ],
      href: '/services/agents-for-ops',
      pricing: '$999 - $2,499+/month',
      category: 'Process Automation'
    },
    {
      title: 'Enterprise RAG & GenAI Platform',
      description: 'RAG best practices, evals, guardrails, and observability for GenAI apps',
      icon: '🧠',
      features: [
        'Hybrid Search & Re-ranking',
        'Citations & Source Attribution',
        'Offline/Online Evals',
        'Prompt & Safety Management',
        'Multi-tenant & SSO'
      ],
      href: '/services/genai-rag-platform',
      pricing: '$299 - $999+/month',
      category: 'Advanced AI'
    },
    {
      title: 'AI Marketing Studio',
      description: 'Audience insights, creative generation, multivariate tests, attribution & MMM',
      icon: '📣',
      features: [
        'ICP Builder',
        'Creative Generation',
        'Auto-Allocation Experiments',
        'Attribution & MMM',
        'Brand Guardrails'
      ],
      href: '/services/ai-marketing-studio',
      pricing: '$199 - $499+/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI Sales Copilot',
      description: 'SDR/AE copilot: research, outreach, objection handling, call notes, CRM updates',
      icon: '💼',
      href: '/services/ai-sales-copilot',
      pricing: 'Starting from $59/user/month',
      features: [
        'Lead Research & Personalization',
        'Objection Playbooks',
        'Live Call Assistance',
        'Automatic CRM Updates',
        'Deal Risk Insights',
        'Gong/Zoom Integrations'
      ]
    },
    {
      title: 'Data Quality & Observability',
      description: 'Lineage, tests, anomalies, SLAs across pipelines, warehouses, and BI',
      icon: '📈',
      href: '/services/data-quality-observability',
      pricing: 'Starting from $799/month',
      features: [
        'Column-Level Lineage',
        'Anomaly Detection',
        'SLA Monitoring',
        'dbt/Airflow Integration',
        'PagerDuty/Jira Alerts',
        'Executive Trust Dashboards'
      ]
    },
    {
      title: 'FinOps Cost Optimizer',
      description: 'Rightsizing, commitments, anomaly alerts, Kubernetes cost allocation',
      icon: '💸',
      href: '/services/finops-cost-optimizer',
      pricing: 'Starting from $499/month',
      features: [
        'Rightsizing & Cleanup',
        'RI/Savings Plans Recs',
        'K8s Cost Allocation',
        'Budgets & Alerts',
        'Anomaly RCA',
        'Chargeback/Showback'
      ]
    },
    {
      title: 'Remote Work Productivity Suite',
      description: 'Comprehensive remote work solutions including meeting optimization, team onboarding, and productivity analytics',
      icon: '🏠',
      href: '/services/remote-work-productivity-suite',
      pricing: 'Starting from $19/month',
      features: [
        'MeetingTimer Pro - Meeting Efficiency',
        'RemoteOnboarding - Team Integration',
        'TeamAnalytics Pro - Productivity Insights',
        'AI-Powered Meeting Assistant',
        'Virtual Team Building Tools',
        'Collaboration Analytics'
      ]
    },
    {
      title: 'Healthcare Scheduling Platform',
      description: 'Comprehensive healthcare scheduling SaaS for hospitals and clinics with HIPAA compliance',
      icon: '🏥',
      href: '/services/healthcare-scheduling-platform',
      pricing: 'Starting from $149/month',
      features: [
        'Smart Appointment Scheduling',
        'Virtual Consultations Platform',
        'Patient Data Management',
        'HIPAA Compliance & Security',
        'Analytics Dashboard',
        'Mobile Applications'
      ]
    },
    {
      title: 'AI Meeting Assistant Platform',
      description: 'AI-powered meeting assistant that records conversations, extracts decisions, and manages tasks automatically',
      icon: '🤖',
      href: '/services/ai-meeting-assistant-platform',
      pricing: 'Starting from $29/month',
      features: [
        'Intelligent Recording & Transcription',
        'Smart Summarization & Decision Extraction',
        'Automatic Task Management',
        'Natural Language Processing',
        'Calendar Integration',
        'Advanced Analytics'
      ]
    },
    {
      title: 'AI Habit Tracking & Wellness Platform',
      description: 'AI-powered habit tracking and wellness platform for personal development and goal achievement',
      icon: '💪',
      href: '/services/ai-habit-tracking-wellness-platform',
      pricing: 'Starting from $9.99/month',
      features: [
        'Smart Habit Builder with AI Coaching',
        'Goal Optimization & Progress Tracking',
        'Wellness Analytics & Insights',
        'Social Accountability Features',
        'Achievement System & Gamification',
        'Smart Reminders & Notifications'
      ]
    },
    {
      title: 'AI Meeting Intelligence Platform',
      description: 'Transform meetings with AI-powered insights, automatic transcription, action item extraction, and real-time analytics',
      icon: '🎯',
      href: '/services/ai-meeting-intelligence-platform',
      pricing: 'Starting from $29/month',
      features: [
        'Real-Time Transcription in 50+ Languages',
        'Intelligent Summarization & Decision Extraction',
        'Analytics Dashboard & Meeting Effectiveness',
        'Speaker Analysis & Participation Insights',
        'Time Optimization & Pattern Recognition',
        'Action Item Tracking & Follow-ups'
      ]
    },
    {
      title: 'AI Financial Intelligence Platform',
      description: 'Transform your financial management with AI-powered insights, automated budgeting, investment analysis, and intelligent financial planning',
      icon: '💰',
      href: '/services/ai-financial-intelligence-platform',
      pricing: 'Starting from $19.99/month',
      features: [
        'Smart Budgeting & Expense Categorization',
        'Investment Analysis & Portfolio Optimization',
        'Goal Tracking & Financial Forecasting',
        'Risk Assessment & Fraud Detection',
        'Tax Optimization & Retirement Planning',
        'Bank-Level Security & Compliance'
      ]
    },
    {
      title: 'AI Smart Home Automation Platform',
      description: 'Transform your home into an intelligent living space with AI-powered automation, energy optimization, and seamless device control',
      icon: '🏠',
      href: '/services/ai-smart-home-automation-platform',
      pricing: 'Starting from $29.99/month',
      features: [
        'Intelligent Device Control & Voice Commands',
        'Energy Optimization (30% Cost Reduction)',
        'Predictive Automation & Learning',
        'Advanced Security with AI Monitoring',
        'Unified Control & Remote Access',
        'Usage Analytics & Cost Optimization'
      ]
    },
    {
      title: 'AI Remote Work Productivity Suite',
      description: 'Boost remote team productivity with AI-powered collaboration tools, intelligent scheduling, and automated workflow optimization',
      icon: '💻',
      href: '/services/ai-remote-work-productivity-suite',
      pricing: 'Starting from $19.99/user/month',
      features: [
        'Intelligent Task Management & Prioritization',
        'Smart Team Collaboration & Communication',
        'Time Tracking & Productivity Analytics',
        'Goal & KPI Tracking with AI Insights',
        'Work Pattern Analysis & Optimization',
        'Smart Scheduling & Meeting Optimization'
      ]
    },
    {
      title: 'AI Cybersecurity Automation',
      description: 'Advanced AI-powered cybersecurity automation platform with threat detection and automated response',
      icon: '🔒',
      href: '/services/ai-cybersecurity-automation',
      pricing: 'Starting from $1,499/month',
      features: [
        'AI Threat Detection',
        'Automated Response System',
        'Vulnerability Assessment',
        'Zero Trust Architecture',
        'Security Orchestration',
        'Compliance & Reporting'
      ]
    },
    {
      title: 'Cloud-Native DevOps Platform',
      description: 'Comprehensive cloud-native DevOps platform with CI/CD automation and infrastructure as code',
      icon: '☁️',
      href: '/services/cloud-native-devops-platform',
      pricing: 'Starting from $1,499/month',
      features: [
        'CI/CD Automation',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Observability',
        'Security & Compliance',
        'Multi-Cloud Support'
      ]
    },
    {
      title: 'Advanced Micro SaaS Solutions',
      description: 'Cutting-edge micro SaaS platforms designed to solve specific business challenges with AI-powered automation',
      icon: '🚀',
      href: '/services/advanced-micro-saas-solutions',
      pricing: 'Starting from $199/month',
      features: [
        'AI-Powered Content Creation Suite',
        'Smart Inventory Management Platform',
        'Automated Customer Support AI',
        'Financial Analytics Dashboard',
        'HR Automation Suite',
        'Project Management Intelligence'
      ]
    },
    {
      title: 'Comprehensive AI Services',
      description: 'Full-spectrum AI solutions including machine learning, NLP, computer vision, and autonomous systems',
      icon: '🧠',
      href: '/services/ai-services-comprehensive',
      pricing: 'Starting from $2,500/project',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing Suite',
        'Computer Vision & Image Recognition',
        'Autonomous Systems Development',
        'AI-Powered Business Intelligence',
        'AI Consulting & Strategy'
      ]
    },
    {
      title: 'AI Content Optimization Suite',
      description: 'AI-powered content creation, optimization, and performance analytics for marketing and business growth',
      icon: '📝',
      href: '/services/ai-content-optimization-suite',
      pricing: 'Starting from $199/month',
      features: [
        'AI Content Generation',
        'SEO Optimization',
        'Performance Analytics',
        'Content Personalization',
        'Quality Assurance',
        'Content Calendar Management'
      ]
    },
    {
      title: 'AI Workflow Automation Platform',
      description: 'Automate complex business workflows with AI-powered automation and intelligent decision making',
      icon: '⚡',
      href: '/services/ai-workflow-automation-platform',
      pricing: 'Starting from $299/month',
      features: [
        'Visual Workflow Builder',
        'AI-Powered Decision Making',
        'Integration Hub (500+ apps)',
        'Real-time Monitoring',
        'Enterprise Security',
        'Custom Development'
      ]
    },
    {
      title: 'AI-Powered Customer Insights Platform',
      description: 'Transform customer data into actionable insights with advanced AI analytics, sentiment analysis, and predictive behavior modeling',
      icon: '🔍',
      href: '/services/ai-powered-customer-insights-platform',
      pricing: 'Starting from $299/month',
      features: [
        'Real-time sentiment analysis with 95% accuracy',
        'Predictive behavior modeling and churn prediction',
        'Customer journey mapping and optimization',
        'Automated insights generation and reporting',
        'Multi-channel data integration',
        'Advanced analytics dashboard'
      ]
    },
    {
      title: 'AI-Powered Financial Intelligence Platform',
      description: 'Revolutionary AI platform for financial analysis, risk assessment, fraud detection, and automated trading with unprecedented accuracy',
      icon: '💰',
      href: '/services/ai-powered-financial-intelligence-platform',
      pricing: 'Starting from $1,999/month',
      features: [
        'AI risk assessment engine with 95% accuracy',
        'Intelligent fraud detection and prevention',
        'Automated trading intelligence and optimization',
        'Real-time financial analytics dashboard',
        'Predictive cash flow forecasting',
        'Regulatory compliance automation'
      ]
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing solutions for optimization, cryptography, drug discovery, and financial modeling with exponential speedups',
      icon: '⚛️',
      href: '/services/quantum-computing-solutions',
      pricing: 'Starting from $2,500/project',
      features: [
        'Quantum optimization for complex problems',
        'Quantum cryptography and security',
        'Quantum machine learning algorithms',
        'Financial modeling acceleration',
        'Drug discovery simulation',
        'Quantum cloud computing access'
      ]
    },
    {
      title: 'AI Autonomous DevOps Platform',
      description: 'Revolutionary self-healing infrastructure with autonomous incident response, predictive scaling, and AI-driven optimization',
      icon: '🤖',
      href: '/services/ai-autonomous-devops-platform',
      pricing: 'Starting from $499/month',
      features: [
        'Autonomous incident response and resolution',
        'Predictive scaling and resource optimization',
        'Self-healing infrastructure automation',
        'Intelligent code deployment and rollback',
        'Multi-cloud orchestration',
        'Advanced security automation'
      ]
    },
    {
      title: 'AI Financial Analysis Platform',
      description: 'Advanced AI-powered financial analysis, forecasting, and risk assessment for informed decision making',
      icon: '📊',
      href: '/services/ai-financial-analysis-platform',
      pricing: 'Starting from $599/month',
      features: [
        'Automated Financial Reporting',
        'Predictive Forecasting',
        'Risk Assessment',
        'Investment Analysis',
        'Fraud Detection',
        'Regulatory Compliance'
      ]
    },
    {
      title: 'Complete IT Services',
      description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and digital transformation',
      icon: '💻',
      href: '/services/it-services-comprehensive',
      pricing: 'Starting from $1,500/month',
      features: [
        'Cloud Migration & Management',
        'DevOps & CI/CD Implementation',
        'Cybersecurity Solutions',
        'Infrastructure Management',
        'Digital Transformation Consulting',
        'Database Management & Optimization'
      ]
    },
    {
      title: 'AI-Powered Project Management Platform',
      description: 'Intelligent project management with AI-driven task prioritization, resource optimization, and predictive analytics',
      icon: '📋',
      href: '/services/ai-project-management-platform',
      pricing: 'Starting from $39.99/month',
      features: [
        'AI Task Prioritization & Scheduling',
        'Resource Optimization & Allocation',
        'Risk Prediction & Mitigation',
        'Progress Analytics & Insights',
        'Team Collaboration Tools',
        'Integration with Popular Tools'
      ]
    },
    {
      title: 'Smart Invoice Processing System',
      description: 'Automated invoice processing with AI-powered data extraction, approval workflows, and payment automation',
      icon: '🧾',
      href: '/services/smart-invoice-processing',
      pricing: 'Starting from $99/month',
      features: [
        'AI-Powered Data Extraction (99% Accuracy)',
        'Automated Approval Workflows',
        'Payment Processing Integration',
        'Fraud Detection & Prevention',
        'Compliance & Audit Trails',
        'Multi-Currency Support'
      ]
    },
    {
      title: 'AI Customer Onboarding Platform',
      description: 'Streamlined customer onboarding with AI-guided workflows, document verification, and personalized experiences',
      icon: '🚀',
      href: '/services/ai-customer-onboarding',
      pricing: 'Starting from $199/month',
      features: [
        'AI-Guided Onboarding Workflows',
        'Document Verification & KYC',
        'Personalized User Experiences',
        'Progress Tracking & Analytics',
        'Integration with CRM Systems',
        'Compliance Automation'
      ]
    },
    {
      title: 'Intelligent Expense Management',
      description: 'AI-powered expense tracking with automated categorization, policy enforcement, and fraud detection',
      icon: '💳',
      href: '/services/intelligent-expense-management',
      pricing: 'Starting from $49/month',
      features: [
        'Automated Expense Categorization',
        'Policy Enforcement & Compliance',
        'Receipt OCR & Data Extraction',
        'Fraud Detection & Alerts',
        'Mobile App & Receipt Scanning',
        'Integration with Accounting Software'
      ]
    },
    {
      title: 'AI-Powered Lead Generation Engine',
      description: 'Automated lead generation with AI prospecting, contact enrichment, and qualification scoring',
      icon: '🎯',
      href: '/services/ai-lead-generation-engine',
      pricing: 'Starting from $299/month',
      features: [
        'AI Prospect Identification',
        'Contact Enrichment & Verification',
        'Lead Scoring & Qualification',
        'Multi-Channel Outreach Automation',
        'CRM Integration & Sync',
        'Performance Analytics & Optimization'
      ]
    },
    {
      title: 'Smart Contract Management Platform',
      description: 'AI-powered contract lifecycle management with automated review, risk assessment, and compliance monitoring',
      icon: '📄',
      href: '/services/smart-contract-management',
      pricing: 'Starting from $399/month',
      features: [
        'AI Contract Review & Analysis',
        'Risk Assessment & Alerts',
        'Automated Renewal Management',
        'Compliance Monitoring',
        'Digital Signatures & Workflows',
        'Integration with Legal Systems'
      ]
    },
    {
      title: 'AI-Powered Email Analytics',
      description: 'Advanced email analytics with AI insights, performance optimization, and deliverability monitoring',
      icon: '📧',
      href: '/services/ai-email-analytics',
      pricing: 'Starting from $149/month',
      features: [
        'AI-Powered Email Insights',
        'Deliverability Monitoring',
        'Performance Optimization',
        'A/B Testing & Analysis',
        'Competitor Analysis',
        'Integration with Email Platforms'
      ]
    },
    {
      title: 'Intelligent Document Search Platform',
      description: 'AI-powered document search with semantic understanding, content extraction, and knowledge management',
      icon: '🔍',
      href: '/services/intelligent-document-search',
      pricing: 'Starting from $199/month',
      features: [
        'Semantic Search & Understanding',
        'Content Extraction & Indexing',
        'Knowledge Graph Creation',
        'Natural Language Queries',
        'Multi-Format Support',
        'Enterprise Security & Compliance'
      ]
    },
    {
      title: 'AI-Powered Social Media Analytics',
      description: 'Comprehensive social media analytics with AI insights, sentiment analysis, and competitor tracking',
      icon: '📊',
      href: '/services/ai-social-media-analytics',
      pricing: 'Starting from $129/month',
      features: [
        'AI Sentiment Analysis',
        'Competitor Tracking & Analysis',
        'Content Performance Insights',
        'Audience Demographics & Behavior',
        'Trend Prediction & Analysis',
        'Multi-Platform Integration'
      ]
    },
    {
      title: 'Smart Inventory Forecasting',
      description: 'AI-powered inventory forecasting with demand prediction, seasonal analysis, and optimization recommendations',
      icon: '📦',
      href: '/services/smart-inventory-forecasting',
      pricing: 'Starting from $299/month',
      features: [
        'AI Demand Forecasting',
        'Seasonal Pattern Analysis',
        'Inventory Optimization',
        'Supplier Performance Tracking',
        'Cost Optimization Recommendations',
        'Integration with ERP Systems'
      ]
    },
    {
      title: 'AI-Powered Employee Performance Analytics',
      description: 'Intelligent employee performance tracking with AI insights, goal management, and productivity optimization',
      icon: '👥',
      href: '/services/ai-employee-performance',
      pricing: 'Starting from $249/month',
      features: [
        'AI Performance Insights',
        'Goal Setting & Tracking',
        'Productivity Analytics',
        'Skill Gap Analysis',
        'Career Development Recommendations',
        'Integration with HR Systems'
      ]
    },
    {
      title: 'Intelligent Backup & Recovery Platform',
      description: 'AI-powered backup and disaster recovery with automated scheduling, monitoring, and recovery optimization',
      icon: '💾',
      href: '/services/intelligent-backup-recovery',
      pricing: 'Starting from $199/month',
      features: [
        'AI-Powered Backup Scheduling',
        'Automated Recovery Testing',
        'Disaster Recovery Planning',
        'Compliance & Audit Support',
        'Multi-Cloud Backup Options',
        'Real-time Monitoring & Alerts'
      ]
    },
    {
      title: 'AI-Powered Website Optimization',
      description: 'Intelligent website optimization with AI testing, performance analysis, and conversion rate optimization',
      icon: '🌐',
      href: '/services/ai-website-optimization',
      pricing: 'Starting from $179/month',
      features: [
        'AI-Powered A/B Testing',
        'Performance Analysis & Optimization',
        'Conversion Rate Optimization',
        'User Experience Insights',
        'SEO Optimization',
        'Real-time Analytics & Reporting'
      ]
    },
    {
      title: 'Smart Vendor Management System',
      description: 'AI-powered vendor management with performance tracking, risk assessment, and contract optimization',
      icon: '🤝',
      href: '/services/smart-vendor-management',
      pricing: 'Starting from $349/month',
      features: [
        'Vendor Performance Tracking',
        'Risk Assessment & Monitoring',
        'Contract Management & Optimization',
        'Supplier Relationship Analytics',
        'Compliance Monitoring',
        'Integration with Procurement Systems'
      ]
    },
    {
      title: 'AI-Powered Time Tracking & Billing',
      description: 'Intelligent time tracking with AI categorization, automated billing, and productivity insights',
      icon: '⏰',
      href: '/services/ai-time-tracking-billing',
      pricing: 'Starting from $79/month',
      features: [
        'AI Time Categorization',
        'Automated Billing Generation',
        'Productivity Analytics',
        'Project Profitability Analysis',
        'Client Reporting & Invoicing',
        'Integration with Accounting Software'
      ]
    },
    {
      title: 'Intelligent Meeting Analytics Platform',
      description: 'AI-powered meeting analytics with productivity insights, action item tracking, and optimization recommendations',
      icon: '🎥',
      href: '/services/intelligent-meeting-analytics',
      pricing: 'Starting from $159/month',
      features: [
        'AI Meeting Transcription',
        'Action Item Extraction',
        'Productivity Analytics',
        'Meeting Effectiveness Scoring',
        'Calendar Optimization',
        'Integration with Video Platforms'
      ]
    },
    {
      title: 'AI-Powered Customer Feedback Analysis',
      description: 'Intelligent customer feedback analysis with sentiment tracking, trend identification, and actionable insights',
      icon: '💬',
      href: '/services/ai-customer-feedback-analysis',
      pricing: 'Starting from $199/month',
      features: [
        'AI Sentiment Analysis',
        'Trend Identification & Tracking',
        'Actionable Insight Generation',
        'Multi-Channel Feedback Collection',
        'Competitor Analysis',
        'Integration with Support Systems'
      ]
    },
    {
      title: 'Smart Password & Security Manager',
      description: 'AI-powered password management with security monitoring, breach detection, and compliance reporting',
      icon: '🔐',
      href: '/services/smart-password-security-manager',
      pricing: 'Starting from $99/month',
      features: [
        'AI-Powered Password Generation',
        'Security Monitoring & Alerts',
        'Breach Detection & Notifications',
        'Compliance Reporting',
        'Team Password Sharing',
        'Integration with SSO Systems'
      ]
    },
    {
      title: 'AI-Powered Learning Management System',
      description: 'Intelligent learning platform with personalized content, progress tracking, and skill assessment',
      icon: '🎓',
      href: '/services/ai-learning-management-system',
      pricing: 'Starting from $299/month',
      features: [
        'AI-Powered Content Personalization',
        'Adaptive Learning Paths',
        'Progress Tracking & Analytics',
        'Skill Assessment & Certification',
        'Gamification & Engagement',
        'Integration with HR Systems'
      ]
    },
    {
      title: 'Enterprise Cloud Migration Services',
      description: 'Complete cloud migration solutions with zero-downtime deployment, data migration, and cost optimization',
      icon: '☁️',
      href: '/services/enterprise-cloud-migration',
      pricing: 'Starting from $5,000/project',
      features: [
        'Zero-Downtime Migration Strategy',
        'Multi-Cloud Architecture Design',
        'Data Migration & Synchronization',
        'Security & Compliance Implementation',
        'Cost Optimization & Monitoring',
        '24/7 Migration Support'
      ]
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and monitoring solutions',
      icon: '⚙️',
      href: '/services/devops-cicd-implementation',
      pricing: 'Starting from $3,500/month',
      features: [
        'CI/CD Pipeline Setup & Optimization',
        'Infrastructure as Code (Terraform/CloudFormation)',
        'Container Orchestration (Kubernetes/Docker)',
        'Monitoring & Logging Solutions',
        'Security Scanning & Compliance',
        'Team Training & Best Practices'
      ]
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, incident response, and compliance management',
      icon: '🛡️',
      href: '/services/advanced-cybersecurity-solutions',
      pricing: 'Starting from $2,500/month',
      features: [
        'Advanced Threat Detection & Response',
        'Security Architecture Review',
        'Penetration Testing & Vulnerability Assessment',
        'Incident Response Planning',
        'Compliance Management (SOC 2, ISO 27001)',
        'Security Awareness Training'
      ]
    },
    {
      title: 'Database Management & Optimization',
      description: 'Professional database services including migration, optimization, backup, and performance tuning',
      icon: '🗄️',
      href: '/services/database-management-optimization',
      pricing: 'Starting from $1,500/month',
      features: [
        'Database Migration & Consolidation',
        'Performance Tuning & Optimization',
        'Backup & Disaster Recovery',
        'Security Hardening',
        'Monitoring & Alerting Setup',
        'Database Architecture Consulting'
      ]
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure services including server management, network optimization, and system administration',
      icon: '🖥️',
      href: '/services/it-infrastructure-management',
      pricing: 'Starting from $2,000/month',
      features: [
        'Server Management & Maintenance',
        'Network Design & Optimization',
        'System Administration & Monitoring',
        'Hardware Procurement & Setup',
        'IT Support & Help Desk',
        'Disaster Recovery Planning'
      ]
    },
    {
      title: 'API Development & Integration Services',
      description: 'Custom API development, third-party integrations, and microservices architecture implementation',
      icon: '🔗',
      href: '/services/api-development-integration',
      pricing: 'Starting from $2,500/project',
      features: [
        'RESTful API Development',
        'GraphQL API Implementation',
        'Third-Party Service Integration',
        'API Documentation & Testing',
        'Microservices Architecture',
        'API Security & Rate Limiting'
      ]
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize business processes and technology infrastructure',
      icon: '🔄',
      href: '/services/digital-transformation-consulting',
      pricing: 'Starting from $5,000/month',
      features: [
        'Digital Strategy & Roadmap Development',
        'Process Automation & Optimization',
        'Technology Stack Modernization',
        'Change Management & Training',
        'ROI Analysis & Measurement',
        'Ongoing Strategic Guidance'
      ]
    },
    {
      title: 'Cloud Cost Optimization Services',
      description: 'Professional cloud cost optimization with rightsizing, reserved instances, and automated cost management',
      icon: '💰',
      href: '/services/cloud-cost-optimization',
      pricing: 'Starting from $1,000/month',
      features: [
        'Cloud Cost Analysis & Audit',
        'Resource Right-sizing Recommendations',
        'Reserved Instance Optimization',
        'Automated Cost Management',
        'Budget Alerts & Monitoring',
        'Cost Allocation & Chargeback'
      ]
    },
    {
      title: 'IT Security Audit & Compliance',
      description: 'Comprehensive security audits, compliance assessments, and remediation planning for regulatory requirements',
      icon: '🔍',
      href: '/services/it-security-audit-compliance',
      pricing: 'Starting from $3,000/audit',
      features: [
        'Security Risk Assessment',
        'Compliance Gap Analysis',
        'Penetration Testing',
        'Security Policy Development',
        'Remediation Planning',
        'Audit Report & Documentation'
      ]
    },
    {
      title: 'Mobile App Development Services',
      description: 'Native and cross-platform mobile app development with modern frameworks and cloud backend integration',
      icon: '📱',
      href: '/services/mobile-app-development',
      pricing: 'Starting from $10,000/project',
      features: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions (React Native/Flutter)',
        'Backend API Development',
        'App Store Optimization',
        'Performance Optimization',
        'Maintenance & Support'
      ]
    },
    {
      title: 'Web Application Development',
      description: 'Custom web application development with modern frameworks, responsive design, and cloud deployment',
      icon: '🌐',
      href: '/services/web-application-development',
      pricing: 'Starting from $8,000/project',
      features: [
        'Custom Web Application Development',
        'Responsive Design & UX/UI',
        'Frontend & Backend Development',
        'Database Design & Integration',
        'Cloud Deployment & Scaling',
        'Performance Optimization'
      ]
    },
    {
      title: 'IT Support & Help Desk Services',
      description: 'Professional IT support services with 24/7 coverage, remote assistance, and proactive monitoring',
      icon: '🎧',
      href: '/services/it-support-help-desk',
      pricing: 'Starting from $500/month',
      features: [
        '24/7 IT Support & Monitoring',
        'Remote Desktop Assistance',
        'Hardware & Software Troubleshooting',
        'User Training & Documentation',
        'Proactive System Maintenance',
        'Incident Management & Escalation'
      ]
    },
    {
      title: 'Network Security & Firewall Management',
      description: 'Advanced network security services including firewall configuration, intrusion detection, and VPN setup',
      icon: '🔒',
      href: '/services/network-security-firewall',
      pricing: 'Starting from $1,200/month',
      features: [
        'Firewall Configuration & Management',
        'Intrusion Detection & Prevention',
        'VPN Setup & Management',
        'Network Monitoring & Analysis',
        'Security Policy Implementation',
        'Threat Intelligence & Response'
      ]
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated scheduling and testing',
      icon: '💾',
      href: '/services/data-backup-disaster-recovery',
      pricing: 'Starting from $800/month',
      features: [
        'Automated Backup Scheduling',
        'Multi-Location Backup Storage',
        'Disaster Recovery Planning',
        'Recovery Time Testing',
        'Business Continuity Planning',
        'Compliance & Audit Support'
      ]
    },
    {
      title: 'Advanced AI & Machine Learning Solutions',
      description: 'Cutting-edge AI and ML solutions including custom model development, training, and deployment',
      icon: '🧠',
      href: '/services/advanced-ai-machine-learning',
      pricing: 'Starting from $3,500/project',
      features: [
        'Custom ML Model Development',
        'Deep Learning & Neural Networks',
        'Computer Vision Solutions',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI Model Training & Optimization'
      ]
    },
    {
      title: 'AI-Powered Business Intelligence Platform',
      description: 'Intelligent business intelligence with AI-driven insights, automated reporting, and predictive analytics',
      icon: '📊',
      href: '/services/ai-business-intelligence-platform',
      pricing: 'Starting from $2,500/month',
      features: [
        'AI-Driven Data Insights',
        'Automated Report Generation',
        'Predictive Analytics & Forecasting',
        'Interactive Dashboards',
        'Data Visualization & Storytelling',
        'Integration with Business Systems'
      ]
    },
    {
      title: 'AI-Powered Chatbot Development',
      description: 'Intelligent chatbot solutions with natural language processing, multi-channel support, and human handoff',
      icon: '🤖',
      href: '/services/ai-chatbot-development',
      pricing: 'Starting from $2,000/project',
      features: [
        'Natural Language Processing',
        'Multi-Channel Integration',
        'Intent Recognition & Response',
        'Human Handoff Capabilities',
        'Analytics & Performance Tracking',
        'Custom Training & Optimization'
      ]
    },
    {
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, image classification, and visual analytics',
      icon: '👁️',
      href: '/services/computer-vision-image-recognition',
      pricing: 'Starting from $4,000/project',
      features: [
        'Object Detection & Recognition',
        'Image Classification & Tagging',
        'Facial Recognition Systems',
        'Visual Quality Inspection',
        'Augmented Reality Integration',
        'Real-time Processing Capabilities'
      ]
    },
    {
      title: 'AI-Powered Predictive Analytics',
      description: 'Advanced predictive analytics with machine learning models for forecasting and trend analysis',
      icon: '🔮',
      href: '/services/ai-predictive-analytics',
      pricing: 'Starting from $2,800/month',
      features: [
        'Demand Forecasting',
        'Customer Behavior Prediction',
        'Risk Assessment & Modeling',
        'Market Trend Analysis',
        'Anomaly Detection',
        'Real-time Prediction Updates'
      ]
    },
    {
      title: 'Natural Language Processing Solutions',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
      icon: '💬',
      href: '/services/natural-language-processing',
      pricing: 'Starting from $2,200/month',
      features: [
        'Text Analysis & Processing',
        'Sentiment Analysis',
        'Language Translation',
        'Text Summarization',
        'Named Entity Recognition',
        'Custom Language Models'
      ]
    },
    {
      title: 'AI-Powered Recommendation Engine',
      description: 'Intelligent recommendation systems for personalized content, products, and services',
      icon: '🎯',
      href: '/services/ai-recommendation-engine',
      pricing: 'Starting from $1,800/month',
      features: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-Based Filtering',
        'Real-time Recommendation Updates',
        'A/B Testing & Optimization',
        'Multi-Platform Integration'
      ]
    },
    {
      title: 'AI-Powered Fraud Detection System',
      description: 'Advanced fraud detection with machine learning models for real-time threat identification and prevention',
      icon: '🛡️',
      href: '/services/ai-fraud-detection-system',
      pricing: 'Starting from $3,200/month',
      features: [
        'Real-time Fraud Detection',
        'Machine Learning Models',
        'Behavioral Analysis',
        'Risk Scoring & Assessment',
        'Automated Response Actions',
        'Continuous Model Improvement'
      ]
    },
    {
      title: 'AI-Powered Document Processing',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow routing',
      icon: '📄',
      href: '/services/ai-document-processing',
      pricing: 'Starting from $1,500/month',
      features: [
        'Advanced OCR Technology',
        'Intelligent Data Extraction',
        'Document Classification',
        'Workflow Automation',
        'Quality Assurance',
        'Integration with Business Systems'
      ]
    },
    {
      title: 'AI-Powered Voice Recognition & Processing',
      description: 'Advanced voice recognition solutions with speech-to-text, voice commands, and audio analysis',
      icon: '🎤',
      href: '/services/ai-voice-recognition-processing',
      pricing: 'Starting from $2,600/month',
      features: [
        'Speech-to-Text Conversion',
        'Voice Command Processing',
        'Audio Analysis & Transcription',
        'Multi-Language Support',
        'Real-time Processing',
        'Custom Voice Model Training'
      ]
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning',
      icon: '🚚',
      href: '/services/ai-supply-chain-optimization',
      pricing: 'Starting from $3,800/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Route Planning',
        'Supplier Performance Analysis',
        'Risk Assessment & Mitigation',
        'Real-time Supply Chain Monitoring'
      ]
    },
    {
      title: 'AI-Powered Healthcare Analytics',
      description: 'Advanced healthcare AI solutions for patient analysis, drug discovery, and medical imaging',
      icon: '🏥',
      href: '/services/ai-healthcare-analytics',
      pricing: 'Starting from $4,500/month',
      features: [
        'Medical Image Analysis',
        'Patient Risk Assessment',
        'Drug Discovery Support',
        'Treatment Recommendation',
        'Clinical Decision Support',
        'Healthcare Data Analytics'
      ]
    },
    {
      title: 'AI-Powered Financial Risk Management',
      description: 'Advanced financial risk assessment with AI models for credit scoring, market analysis, and compliance',
      icon: '💼',
      href: '/services/ai-financial-risk-management',
      pricing: 'Starting from $3,600/month',
      features: [
        'Credit Risk Assessment',
        'Market Risk Analysis',
        'Regulatory Compliance',
        'Portfolio Optimization',
        'Stress Testing',
        'Real-time Risk Monitoring'
      ]
    },
    {
      title: 'AI-Powered Content Generation',
      description: 'Intelligent content creation with AI writing, image generation, and multimedia content production',
      icon: '✍️',
      href: '/services/ai-content-generation',
      pricing: 'Starting from $1,200/month',
      features: [
        'AI Writing & Copywriting',
        'Image & Video Generation',
        'Content Personalization',
        'SEO Optimization',
        'Brand Voice Consistency',
        'Multi-format Content Creation'
      ]
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Intelligent QA solutions with automated testing, defect detection, and quality optimization',
      icon: '🔍',
      href: '/services/ai-quality-assurance',
      pricing: 'Starting from $2,000/month',
      features: [
        'Automated Test Generation',
        'Defect Detection & Analysis',
        'Performance Testing',
        'Quality Metrics & Reporting',
        'Continuous Quality Monitoring',
        'Predictive Quality Analytics'
      ]
    }
  ];

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Services & Solutions",
      description: "Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation.",
      icon: "🤖",
      href: "/services/ai-services",
      features: [
        "Machine Learning Models",
        "Deep Learning Systems", 
        "AI Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Scalable software-as-a-service applications designed for rapid deployment and growth.",
      icon: "⚡",
      href: "/services/micro-saas",
      features: [
        "Rapid Development",
        "Scalable Architecture",
        "Cloud-Native Design",
        "API-First Approach",
        "Multi-tenant Systems",
        "Subscription Management"
      ]
    },
    {
      title: "IT Services & Solutions",
      description: "Comprehensive IT infrastructure, cloud migration, and DevOps services.",
      icon: "☁️",
      href: "/services/it-services",
      features: [
        "Cloud Migration",
        "DevOps & SRE",
        "Infrastructure Management",
        "Security & Compliance",
        "System Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "End-to-end cloud architecture and migration services for modern businesses.",
      icon: "🌩️",
      href: "/services/cloud-solutions",
      features: [
        "AWS/Azure/GCP Migration",
        "Cloud Architecture Design",
        "Cost Optimization",
        "Disaster Recovery",
        "Cloud Security",
        "Multi-cloud Strategies"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      icon: "🔒",
      href: "/services/cybersecurity",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
        "Security Training",
        "Risk Assessment"
      ]
    },
    {
      title: "Blockchain Solutions",
      description: "Blockchain development and integration services for decentralized applications.",
      icon: "⛓️",
      href: "/services/blockchain",
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Supplier Management',
        'Risk Management'
      ],
      href: '/services/ai-inventory-optimization-platform',
      pricing: '$599 - $1,999/month',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Content Generation Tool',
      description: 'Revolutionary AI-powered content creation platform for blogs, social media, and marketing materials',
      icon: '✍️',
      features: [
        'Smart Templates for All Content Types',
        'SEO Optimization & Keyword Integration',
        'Plagiarism Detection & Originality',
        'Brand Voice Matching & Consistency',
        'Multi-Platform Publishing'
      ],
      href: '/services/ai-content-generation-tool',
      pricing: '$50 - $500/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Automated Appointment Scheduler',
      description: 'Intelligent scheduling system with calendar integration and automated reminders',
      icon: '📅',
      features: [
        'Calendar Synchronization',
        'Automated Email & SMS Reminders',
        'Customizable Booking Pages',
        'Real-time Availability Updates',
        'Analytics Dashboard'
      ],
      href: '/services/automated-appointment-scheduler',
      pricing: '$25 - $200/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot with natural language processing and seamless human handoff',
      icon: '🤖',
      features: [
        'Natural Language Processing',
        '24/7 Availability',
        'Seamless Human Handoff',
        'Knowledge Base Integration',
        'Advanced Analytics'
      ],
      href: '/services/ai-customer-support-chatbot',
      pricing: '$100 - $800/month',
      category: 'AI Services'
    },
    {
      title: 'AI Resume Screening Service',
      description: 'Automated candidate evaluation with bias detection and intelligent scoring',
      icon: '📄',
      features: [
        'Smart Keyword Matching',
        'Bias Detection & Prevention',
        'Candidate Scoring System',
        'HR Software Integration',
        'Analytics Dashboard'
      ],
      href: '/services/ai-resume-screening-service',
      pricing: '$500 - $5,000/month',
      category: 'AI Services'
    },
    {
      title: 'Generative AI Solutions',
      description: 'Create, innovate, and generate novel solutions with cutting-edge generative intelligence',
      icon: '✨',
      features: [
        'Content Generation Systems',
        'Creative AI Applications',
        'Multimodal Generation',
        'Adaptive Learning Systems',
        'Innovation Automation'
      ],
      href: '/services/generative-ai'
    },
    {
      title: 'Cloud Migration & DevOps',
      description: 'Seamless cloud transitions and optimized DevOps practices for modern infrastructure',
      icon: '☁️',
      features: [
        'Cloud Architecture Design',
        'Migration Strategy & Execution',
        'CI/CD Pipeline Development',
        'Infrastructure as Code',
        'Monitoring & Observability'
      ],
      href: '/services/cloud-migration'
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Production-ready micro SaaS applications for specific business needs with immediate ROI',
      icon: '🔧',
      features: [
        'Cloud Cost Management',
        'AI Content Creation',
        'Compliance Automation',
        'Smart HR & Analytics',
        'Workflow Automation'
      ],
      href: '/services/micro-saas'
    },
    {
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and platform engineering',
      icon: '🖥️',
      features: [
        'Platform Engineering',
        'Cloud Migration',
        'DevOps Automation',
        'Cybersecurity Operations',
        'Data Analytics Platforms'
      ],
      href: '/services/it-services'
    },
    {
      title: 'Enterprise AI Consulting',
      description: 'Strategic AI implementation guidance for enterprise-scale digital transformation',
      icon: '🎯',
      features: [
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'Change Management',
        'ROI Optimization',
        'Compliance & Governance'
      ],
      href: '/services/ai-consulting'
    },
    {
      title: 'Cybersecurity Risk Assessment',
      description: 'Comprehensive security evaluation with vulnerability scanning and compliance checks',
      icon: '🛡️',
      features: [
        'Vulnerability Scanning',
        'Compliance Checks (GDPR, HIPAA, SOX)',
        'Detailed Risk Reports',
        'Penetration Testing',
        'Security Training'
      ],
      href: '/services/cybersecurity-risk-assessment',
      pricing: '$1,000 - $25,000+',
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Email Marketing Suite',
      description: 'Revolutionary email marketing platform with AI-driven optimization and automated personalization',
      icon: '📧',
      features: [
        '40% SEO Improvement',
        '60% Higher Engagement',
        '70% Time Savings',
        '85% Prediction Accuracy'
      ],
      href: '/services/ai-content-optimization-platform',
      pricing: '$99/month',
      category: 'AI Services'
    },
    {
      title: 'AI Financial Forecasting Suite',
      description: 'Revolutionize financial planning with AI-powered forecasting. Predict market trends and optimize investments.',
      icon: '💰',
      features: [
        '78% Prediction Accuracy',
        '25% Return Improvement',
        '90% Risk Assessment',
        '80% Time Savings'
      ],
      href: '/services/ai-financial-forecasting-suite',
      pricing: '$499/month',
      category: 'AI Services'
    },
    {
      title: 'Smart Inventory Management SaaS',
      description: 'AI-powered inventory optimization for retail, e-commerce, and manufacturing. Reduce costs and prevent stockouts.',
      icon: '📦',
      features: [
        '30% Cost Reduction',
        '60% Less Stockouts',
        '85% Demand Accuracy',
        '40% Cash Flow Improvement'
      ],
      href: '/services/smart-inventory-management-saas',
      pricing: '$79/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI-Powered CRM Automation',
      description: 'Transform customer relationships with AI automation. Automate lead scoring, sales forecasting, and engagement.',
      icon: '🤝',
      features: [
        '90% Lead Scoring Accuracy',
        '85% Forecast Accuracy',
        '70% Higher Engagement',
        '40% Churn Reduction'
      ],
      href: '/services/ai-powered-crm-automation',
      pricing: '$149/month',
      category: 'AI Services'
    },
    {
      title: 'Cloud-Native DevOps Platform',
      description: 'Enterprise-grade DevOps platform with CI/CD automation, infrastructure as code, and advanced monitoring.',
      icon: '⚙️',
      features: [
        '50% Faster Deployments',
        '80% Infrastructure Automation',
        '99.9% Success Rate',
        '30% Cost Optimization'
      ],
      href: '/services/cloud-native-devops-platform',
      pricing: '$299/month',
      category: 'IT Services'
    },
    {
      title: 'AI Cybersecurity Automation Suite',
      description: 'Advanced AI-powered cybersecurity platform. Detect threats, automate responses, and protect infrastructure.',
      icon: '🛡️',
      features: [
        '99.5% Threat Detection',
        '90% Faster Response',
        '95% Insider Threat Detection',
        '70% Alert Reduction'
      ],
      href: '/services/ai-cybersecurity-automation-suite',
      pricing: '$399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Transform customer support with intelligent automation and 24/7 AI-powered assistance',
      icon: '🎧',
      features: [
        '300% ROI',
        '60% Cost Reduction',
        '80% Faster Response',
        '24/7 Support'
      ],
      href: '/services/ai-customer-service-automation',
      pricing: '$299/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Smart Appointment Scheduler',
      description: 'Streamline bookings with AI-powered optimization and automated reminders',
      icon: '📅',
      features: [
        '250% ROI',
        '50% Less No-Shows',
        '35% More Bookings',
        '30 Day Trial'
      ],
      href: '/services/appointment-scheduling-saas',
      pricing: '$49/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Enterprise Cloud Migration',
      description: 'Seamless cloud transformation with zero downtime and expert guidance',
      icon: '☁️',
      features: [
        '200% ROI',
        '40% Cost Reduction',
        'Zero Downtime',
        '24/7 Support'
      ],
      href: '/services/cloud-migration-service',
      pricing: 'Custom Pricing',
      category: 'IT Services'
    },
    {
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and response with AI-powered security automation',
      icon: '🛡️',
      features: [
        '500% ROI',
        '90% Threat Reduction',
        'Real-time Monitoring',
        '14 Day Trial'
      ],
      href: '/services/ai-cybersecurity-platform',
      pricing: '$399/month',
      category: 'Advanced AI'
    },
    {
      title: 'Telemedicine Platform',
      description: 'Complete virtual healthcare solution with video consultations and patient management',
      icon: '🏥',
      features: [
        '300% ROI',
        '200% Patient Reach',
        '60% Less No-Shows',
        '30 Day Trial'
      ],
      href: '/services/healthcare-telemedicine-platform',
      pricing: '$149/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI-Powered Smart Contract Platform',
      description: 'Automated smart contract development, auditing, and deployment with AI-powered security analysis',
      icon: '🔗',
      features: [
        'Automated smart contract generation',
        'AI-powered security auditing',
        'Gas optimization recommendations',
        'DeFi protocol compliance checking',
        'Real-time vulnerability monitoring',
        'Multi-blockchain deployment'
      ],
      benefits: [
        '90% Faster Development',
        '99% Security Accuracy',
        '50% Gas Savings',
        '24/7 Monitoring'
      ],
      href: '/services/ai-smart-contract-platform',
      pricing: '$1,200/month',
      category: 'Advanced AI'
    },
    {
      title: 'Autonomous Supply Chain Intelligence',
      description: 'AI-driven supply chain optimization with predictive analytics and automated risk management',
      icon: '🚛',
      features: [
        'Predictive demand forecasting',
        'Automated inventory optimization',
        'Supplier risk assessment',
        'Route optimization algorithms',
        'Sustainability tracking',
        'Real-time supply chain visibility'
      ],
      benefits: [
        '25% Cost Reduction',
        '40% Faster Delivery',
        '30% Risk Mitigation',
        '95% Forecast Accuracy'
      ],
      href: '/services/autonomous-supply-chain',
      pricing: '$3,500/month',
      category: 'Advanced AI'
    },
    {
      title: 'AI-Powered Financial Risk Platform',
      description: 'Advanced financial risk management with real-time monitoring and automated compliance',
      icon: '💰',
      features: [
        'Real-time credit risk assessment',
        'Portfolio optimization algorithms',
        'Market volatility prediction',
        'Regulatory compliance automation',
        'Fraud detection systems',
        'Automated risk reporting'
      ],
      benefits: [
        '35% Loss Reduction',
        '20% Better Returns',
        '90% Faster Assessment',
        '100% Compliance'
      ],
      href: '/services/ai-financial-risk-platform',
      pricing: '$5,000/month',
      category: 'Advanced AI'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with AI-powered threat detection and automated response',
      icon: '🛡️',
      features: [
        'Identity and access management',
        'Network micro-segmentation',
        'Device trust verification',
        'Continuous security monitoring',
        'Automated threat response',
        'Compliance automation'
      ],
      benefits: [
        '99.9% Security Coverage',
        '80% Faster Response',
        '60% Breach Reduction',
        'Automated Compliance'
      ],
      href: '/services/zero-trust-security',
      pricing: '$4,500/month',
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Marketing Intelligence',
      description: 'Intelligent marketing automation with personalized customer journeys and predictive analytics',
      icon: '📊',
      features: [
        'Customer segmentation AI',
        'Personalized content generation',
        'Campaign optimization',
        'Predictive customer lifetime value',
        'Multi-channel orchestration',
        'Real-time marketing analytics'
      ],
      benefits: [
        '40% Higher Conversions',
        '60% Lower CAC',
        '35% Increased LTV',
        'Automated Optimization'
      ],
      href: '/services/ai-marketing-intelligence',
      pricing: '$2,000/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Autonomous DevOps Platform',
      description: 'Self-healing infrastructure with AI-powered monitoring, optimization, and automated incident response',
      icon: '⚙️',
      features: [
        'Self-healing infrastructure',
        'AI-powered monitoring',
        'Automated incident response',
        'Performance optimization',
        'Cost optimization',
        'Predictive maintenance'
      ],
      benefits: [
        '99.9% Uptime',
        '70% Faster Recovery',
        '50% Cost Reduction',
        'Zero Manual Intervention'
      ],
      href: '/services/autonomous-devops',
      pricing: '$6,000/month',
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Quality Assurance Suite',
      description: 'Automated software testing with intelligent test generation and comprehensive quality analysis',
      icon: '🔍',
      features: [
        'Automated test generation',
        'Intelligent bug detection',
        'Performance testing automation',
        'Security vulnerability scanning',
        'Code quality analysis',
        'Continuous testing integration'
      ],
      benefits: [
        '70% Testing Time Reduction',
        '85% Bug Detection Improvement',
        '50% Defect Reduction',
        'Automated Reporting'
      ],
      href: '/services/ai-quality-assurance',
      pricing: '$1,500/month',
      category: 'Micro SaaS'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, micro SaaS, and IT services. Explore our full range of technology solutions." />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI, IT & Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative micro SaaS platforms. 
              From Fortune 500 enterprises to growing startups, we deliver measurable results and immediate ROI.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started? Contact Us Today!</h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+13024640950" className="font-semibold hover:underline">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">AI & IT Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
                <div className="text-sm text-gray-600">Average Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;