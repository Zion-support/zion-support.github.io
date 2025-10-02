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
      title: 'AI-Powered Content Tools',
      description: 'Advanced AI content optimization tools for headlines, email subject lines, and marketing copy.',
      icon: '📝',
      href: '/services/ai-powered-content-tools',
      pricing: 'Starting from $29/month',
      features: [
        'HeadlineMaster AI - B2B Marketing Headlines',
        'EmailSubjectAI - Open Rate Optimization',
        'ContentAnalyzer Pro - Performance Analytics',
        'PodcastTranscriber AI - Accurate Transcriptions'
      ]
    },
    {
      title: 'Telemedicine Platform',
      description: 'Comprehensive telemedicine solution for hospitals and clinics with virtual consultations.',
      icon: '🏥',
      href: '/services/telemedicine-platform',
      pricing: 'Starting from $299/month',
      features: [
        'HD video conferencing',
        'Secure patient records',
        'HIPAA compliance',
        'Automated appointment scheduling'
      ]
    },
    {
      title: 'Remote Collaboration Suite',
      description: 'Complete remote work platform integrating video conferencing, messaging, and project management.',
      icon: '💻',
      href: '/services/remote-collaboration-suite',
      pricing: 'Starting from $25/user/month',
      features: [
        'Video conferencing for 1000+ participants',
        'Team messaging and file sharing',
        'Project management suite',
        'Document collaboration tools'
      ]
    },
    {
      title: 'API Integration Platform',
      description: 'Enterprise-grade API integration platform for seamless software system connectivity.',
      icon: '🔗',
      href: '/services/api-integration-platform',
      pricing: 'Starting from $99/month',
      features: [
        'API gateway with load balancing',
        'Data synchronization engine',
        'Webhook automation hub',
        'Legacy system connectors'
      ]
    },
    {
      title: 'AI Customer Insights Platform',
      description: 'AI-powered customer analytics for behavioral analysis, sentiment tracking, and predictive insights.',
      icon: '🧠',
      href: '/services/ai-customer-insights-platform',
      pricing: 'Starting from $299/month',
      features: [
        'Behavioral analytics engine',
        'Sentiment intelligence',
        'Predictive customer analytics',
        'Real-time customer intelligence'
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
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