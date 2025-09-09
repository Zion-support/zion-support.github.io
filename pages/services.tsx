import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'Intelligent Decision Making',
        'Automated Workflows'
      ],
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      pricing: 'Starting at $299/month',
      marketPrice: '$200-500/month',
      link: 'https://zapier.com/pricing',
      competitor: 'Zapier'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      features: [
        'Multi-Cloud Strategy',
        'Auto-Scaling Systems',
        'Load Balancing',
        'Disaster Recovery',
        'Performance Optimization'
      ],
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      pricing: 'Starting at $199/month',
      marketPrice: '$150-400/month',
      link: 'https://aws.amazon.com/pricing/',
      competitor: 'AWS'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions that protect your data and ensure regulatory compliance.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Data Encryption',
        'Access Control'
      ],
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      pricing: 'Starting at $399/month',
      marketPrice: '$300-800/month',
      link: 'https://www.crowdstrike.com/pricing/',
      competitor: 'CrowdStrike'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Real-time Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Modeling',
        'Performance Metrics'
      ],
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      pricing: 'Starting at $249/month',
      marketPrice: '$200-600/month',
      link: 'https://www.tableau.com/pricing',
      competitor: 'Tableau'
    },
    {
      icon: '🚀',
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated pipelines and deployment strategies.',
      features: [
        'Continuous Integration',
        'Automated Testing',
        'Deployment Automation',
        'Infrastructure as Code',
        'Monitoring & Alerting'
      ],
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      gradient: 'from-indigo-400 to-purple-500',
      pricing: 'Starting at $179/month',
      marketPrice: '$150-350/month',
      link: 'https://www.atlassian.com/software/jira/pricing',
      competitor: 'Atlassian'
    },
    {
      icon: '🌐',
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions and strategic consulting.',
      features: [
        'Technology Strategy',
        'Process Optimization',
        'Change Management',
        'Digital Innovation',
        'Legacy Modernization'
      ],
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: 'Starting at $599/month',
      marketPrice: '$500-1200/month',
      link: 'https://www.accenture.com/us-en/services/technology/technology-consulting-index',
      competitor: 'Accenture'
    },
    // New Micro SaaS Services
    {
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing with AI-powered personalization, automation workflows, and analytics.',
      features: [
        'AI-Powered Personalization',
        'Automated Email Sequences',
        'Advanced Segmentation',
        'A/B Testing Tools',
        'ROI Analytics'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      pricing: 'Starting at $89/month',
      marketPrice: '$75-200/month',
      link: 'https://mailchimp.com/pricing/',
      competitor: 'Mailchimp'
    },
    {
      icon: '💳',
      title: 'Payment Processing & Billing',
      description: 'Secure payment processing, subscription billing, and financial management solutions.',
      features: [
        'Multi-Payment Gateway Support',
        'Subscription Billing',
        'Recurring Payments',
        'Fraud Detection',
        'Financial Reporting'
      ],
      color: 'bg-gradient-to-br from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-green-500',
      pricing: 'Starting at $49/month + 2.9%',
      marketPrice: '$29-99/month + 2.5-3.5%',
      link: 'https://stripe.com/pricing',
      competitor: 'Stripe'
    },
    {
      icon: '🎯',
      title: 'Customer Relationship Management',
      description: 'Comprehensive CRM solution with sales automation, lead management, and customer insights.',
      features: [
        'Lead Management',
        'Sales Pipeline Tracking',
        'Customer Analytics',
        'Email Integration',
        'Mobile App'
      ],
      color: 'bg-gradient-to-br from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      gradient: 'from-violet-400 to-purple-500',
      pricing: 'Starting at $25/month/user',
      marketPrice: '$20-50/month/user',
      link: 'https://www.salesforce.com/crm/pricing/',
      competitor: 'Salesforce'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and cloud backend.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'Cloud Backend Integration',
        'Push Notifications',
        'App Store Optimization'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      pricing: 'Starting at $5,000/project',
      marketPrice: '$3,000-15,000/project',
      link: 'https://www.mobomo.com/mobile-app-development-cost/',
      competitor: 'Mobomo'
    },
    {
      icon: '🛒',
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with inventory management, payment processing, and analytics.',
      features: [
        'Product Catalog Management',
        'Shopping Cart & Checkout',
        'Inventory Tracking',
        'Order Management',
        'Analytics Dashboard'
      ],
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      gradient: 'from-amber-400 to-orange-500',
      pricing: 'Starting at $79/month',
      marketPrice: '$29-299/month',
      link: 'https://www.shopify.com/pricing',
      competitor: 'Shopify'
    },
    {
      icon: '📈',
      title: 'SEO & Content Marketing',
      description: 'Search engine optimization and content marketing services to improve online visibility.',
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Content Strategy & Creation',
        'Link Building',
        'Performance Tracking'
      ],
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      pricing: 'Starting at $299/month',
      marketPrice: '$200-800/month',
      link: 'https://www.semrush.com/prices/',
      competitor: 'SEMrush'
    }
  ];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Computer Vision & Image Analysis',
    summary: 'Object detection, facial recognition, quality control, and medical imaging analysis.',
    pricing: 'Typical: $5k–$25k setup, $0.10–$2.00/image',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Natural Language Processing Suite',
    summary: 'Sentiment analysis, entity extraction, text classification, and language translation.',
    pricing: 'Typical: $3k–$15k setup, $0.01–$0.05/request',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Fraud Detection',
    summary: 'Real-time fraud scoring, anomaly detection, and risk assessment for financial transactions.',
    pricing: 'Typical: $8k–$40k setup, $0.05–$0.50/transaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Recommendation Engine Platform',
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.10/recommendation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Voice AI & Speech Processing',
    summary: 'Speech-to-text, text-to-speech, voice commands, and conversational AI interfaces.',
    pricing: 'Typical: $4k–$20k setup, $0.01–$0.10/minute',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Data Pipeline Automation',
    summary: 'Automated data cleaning, feature engineering, model training, and deployment pipelines.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Analysis',
    summary: 'Contract analysis, legal document review, compliance checking, and knowledge extraction.',
    pricing: 'Typical: $5k–$25k setup, $0.50–$5.00/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Optimization',
    summary: 'Demand forecasting, route optimization, inventory management, and supplier risk assessment.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Conversational AI Platform',
    summary: 'Multi-channel chatbots, voice assistants, and intelligent virtual agents.',
    pricing: 'Typical: $8k–$35k setup, $0.05–$0.25/conversation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Model Monitoring & MLOps',
    summary: 'Model performance tracking, drift detection, automated retraining, and deployment management.',
    pricing: 'Typical: $6k–$25k setup, $500–$2k/month monitoring',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Automation',
    summary: 'RPA with AI, workflow automation, document processing, and business process optimization.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Market Research',
    summary: 'Competitive intelligence, trend analysis, consumer sentiment, and market forecasting.',
    pricing: 'Typical: $5k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Edge AI & IoT Intelligence',
    summary: 'Real-time inference on edge devices, IoT data processing, and distributed AI systems.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Cybersecurity Threat Detection',
    summary: 'Advanced threat hunting, behavioral analysis, and automated incident response.',
    pricing: 'Typical: $10k–$50k setup, $2k–$8k/month monitoring',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Mining & Optimization',
    summary: 'Business process discovery, bottleneck identification, and workflow optimization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Content Moderation Platform',
    summary: 'Automated content filtering, toxicity detection, and community management.',
    pricing: 'Typical: $5k–$25k setup, $0.01–$0.05/content review',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Manufacturing Quality Control',
    summary: 'Computer vision for defect detection, predictive maintenance, and quality optimization.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Healthcare Diagnostics',
    summary: 'Medical image analysis, symptom prediction, and treatment recommendation systems.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Intelligence Platform',
    summary: 'Advanced document understanding, information extraction, and knowledge graph creation.',
    pricing: 'Typical: $8k–$40k setup, $0.10–$1.00/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Risk Assessment Engine',
    summary: 'Credit scoring, insurance underwriting, and financial risk modeling.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Energy Grid Optimization',
    summary: 'Demand forecasting, load balancing, and renewable energy integration.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Personalization Engine',
    summary: 'Real-time user profiling, content recommendation, and experience optimization.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.10/interaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Automation Orchestration',
    summary: 'RPA with AI decision-making, workflow automation, and process intelligence.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Environmental Monitoring',
    summary: 'Climate data analysis, pollution detection, and environmental impact assessment.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Transportation Optimization',
    summary: 'Route optimization, traffic prediction, and fleet management intelligence.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Agricultural Intelligence',
    summary: 'Crop monitoring, yield prediction, and precision farming optimization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Customer Journey Analytics',
    summary: 'Behavioral analysis, journey mapping, and conversion optimization.',
    pricing: 'Typical: $8k–$35k setup, $1k–$5k/month analytics',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Real Estate Valuation',
    summary: 'Property assessment, market analysis, and investment opportunity identification.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Retail Analytics Platform',
    summary: 'Customer behavior analysis, inventory optimization, and sales forecasting.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Educational Assessment',
    summary: 'Learning analytics, personalized education, and performance prediction.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Financial Trading Algorithms',
    summary: 'Algorithmic trading, market prediction, and portfolio optimization.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart City Solutions',
    summary: 'Urban planning optimization, traffic management, and resource allocation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Quantum Computing Solutions',
    summary: 'Quantum algorithms for optimization, cryptography, and complex problem solving.',
    pricing: 'Typical: $50k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Neural Network Architectures',
    summary: 'Custom deep learning models, transformer networks, and specialized AI architectures.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Drug Discovery Platform',
    summary: 'Molecular analysis, drug interaction prediction, and pharmaceutical research automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Autonomous Systems',
    summary: 'Self-driving algorithms, robotic process automation, and autonomous decision making.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Financial Trading Algorithms',
    summary: 'Algorithmic trading, market prediction, and automated portfolio management.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Natural Language Generation',
    summary: 'GPT-style content creation, automated reporting, and intelligent document generation.',
    pricing: 'Typical: $15k–$75k setup, $0.05–$0.50/page',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Scientific Research Assistant',
    summary: 'Literature analysis, hypothesis generation, and research automation.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Multi-Modal AI Systems',
    summary: 'Vision-language models, audio-visual processing, and cross-modal understanding.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Space Technology Solutions',
    summary: 'Satellite data analysis, space mission optimization, and astronomical research.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Reinforcement Learning Systems',
    summary: 'Game AI, optimization algorithms, and adaptive learning systems.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Metaverse Development',
    summary: 'Virtual world creation, avatar intelligence, and immersive experience optimization.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Blockchain Analytics',
    summary: 'Cryptocurrency analysis, smart contract optimization, and DeFi intelligence.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Climate Change Solutions',
    summary: 'Climate modeling, carbon footprint optimization, and environmental impact prediction.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced Computer Vision for Robotics',
    summary: 'Robot vision systems, object manipulation, and autonomous navigation.',
    pricing: 'Typical: $60k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Mental Health Analytics',
    summary: 'Emotional analysis, mental health prediction, and therapeutic intervention systems.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Energy Storage Optimization',
    summary: 'Battery management, grid storage optimization, and renewable energy integration.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart City Infrastructure',
    summary: 'Urban planning optimization, traffic management, and city service automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced AI Ethics & Bias Detection',
    summary: 'Algorithmic fairness, bias detection, and ethical AI implementation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Cybersecurity Intelligence',
    summary: 'Advanced threat detection, zero-day vulnerability analysis, and security automation.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Digital Twin Technology',
    summary: 'Virtual replicas, predictive maintenance, and real-time system optimization.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Augmented Reality Solutions',
    summary: 'AR object recognition, spatial computing, and immersive experience creation.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced AI Model Compression',
    summary: 'Model optimization, edge deployment, and efficient AI inference.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Intelligence',
    summary: 'End-to-end visibility, disruption prediction, and optimization across global networks.',
    pricing: 'Typical: $60k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI Model Governance',
    summary: 'Model lifecycle management, compliance monitoring, and AI governance frameworks.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Personalized Medicine',
    summary: 'Genomic analysis, treatment optimization, and precision healthcare delivery.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Advanced AI-Powered Education Systems',
    summary: 'Personalized learning, adaptive assessment, and intelligent tutoring systems.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart Manufacturing 4.0',
    summary: 'Industrial IoT intelligence, predictive maintenance, and autonomous production.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Legal Tech',
    summary: 'Contract analysis, legal research automation, and case outcome prediction.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Materials Discovery',
    summary: 'Material property prediction, composition optimization, and novel material design.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Sports Analytics',
    summary: 'Performance optimization, injury prediction, and strategic decision support.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Robotics',
    summary: 'Humanoid robots, collaborative automation, and intelligent robotic systems.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Gaming Systems',
    summary: 'Procedural content generation, intelligent NPCs, and adaptive gameplay.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Biometrics',
    summary: 'Multi-modal authentication, behavioral analysis, and identity verification.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Logistics',
    summary: 'Route optimization, warehouse automation, and last-mile delivery intelligence.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Simulation Systems',
    summary: 'Physics simulation, virtual testing, and scenario modeling.',
    pricing: 'Typical: $60k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Content Creation',
    summary: 'Multi-modal content generation, creative AI, and automated media production.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Data Science',
    summary: 'Automated feature engineering, model selection, and advanced analytics.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Customer Intelligence',
    summary: 'Advanced customer profiling, behavior prediction, and relationship optimization.',
    pricing: 'Typical: $45k–$225k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Process Mining',
    summary: 'Business process discovery, optimization, and intelligent automation.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Decision Support',
    summary: 'Strategic decision making, scenario analysis, and intelligent recommendations.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Predictive Analytics',
    summary: 'Multi-variate forecasting, anomaly detection, and predictive insights.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Knowledge Management',
    summary: 'Automated knowledge extraction, semantic search, and intelligent information retrieval.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Optimization',
    summary: 'Multi-objective optimization, constraint solving, and intelligent resource allocation.',
    pricing: 'Typical: $45k–$225k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Innovation Systems',
    summary: 'Idea generation, innovation management, and creative problem solving.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Human-Computer Interaction',
    summary: 'Natural language interfaces, gesture recognition, and intelligent user experience.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Quality Assurance',
    summary: 'Automated testing, defect prediction, and quality optimization.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Security Systems',
    summary: 'Threat intelligence, security automation, and intelligent incident response.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Performance Optimization',
    summary: 'System optimization, resource management, and intelligent scaling.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Integration Systems',
    summary: 'API intelligence, data integration, and intelligent system connectivity.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Monitoring Systems',
    summary: 'Real-time monitoring, anomaly detection, and intelligent alerting.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Analytics Platform',
    summary: 'Multi-dimensional analysis, pattern recognition, and intelligent insights.',
    pricing: 'Typical: $45k–$225k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent AI-Powered Automation Suite',
    summary: 'End-to-end automation, intelligent workflows, and process optimization.',
    pricing: 'Typical: $50k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Advanced Intelligence Platform',
    summary: 'Comprehensive AI solutions, intelligent decision making, and strategic insights.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Fraud Detection System',
    summary: 'Advanced machine learning models for real-time fraud detection and prevention across financial transactions.',
    pricing: 'Typical: $10k–$50k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Autonomous Quality Control System',
    summary: 'Computer vision-powered quality inspection and defect detection for manufacturing and production lines.',
    pricing: 'Typical: $15k–$75k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Voice Analytics & Sentiment Analysis',
    summary: 'Advanced speech recognition and sentiment analysis for customer service and call center optimization.',
    pricing: 'Typical: $5k–$25k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Data Pipeline Automation',
    summary: 'AI-driven data processing, transformation, and pipeline optimization for enterprise data operations.',
    pricing: 'Typical: $8k–$40k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Optimization',
    summary: 'Machine learning solutions for supply chain forecasting, optimization, and risk management.',
    pricing: 'Typical: $12k–$60k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Security Threat Detection',
    summary: 'Advanced threat detection and response system using machine learning for cybersecurity.',
    pricing: 'Typical: $10k–$50k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Talent Acquisition',
    summary: 'Intelligent recruitment and talent management system with automated candidate screening and matching.',
    pricing: 'Typical: $5k–$30k setup',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Code Generation & Optimization',
    summary: 'Intelligent code generation, optimization, and automated testing for software development.',
    pricing: 'Typical: $8k–$35k setup',
    link: 'https://ziontechgroup.com/ai-services'}
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Multi-Cloud Architecture Design',
    summary: 'Hybrid cloud strategies, disaster recovery, and multi-region deployment architectures.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Kubernetes & Container Orchestration',
    summary: 'EKS/GKE/AKS setup, microservices architecture, and container security hardening.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Database Optimization & Migration',
    summary: 'Performance tuning, scaling strategies, and cloud database migration services.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'API Gateway & Microservices',
    summary: 'API design, rate limiting, authentication, and microservices architecture implementation.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Infrastructure as Code (IaC)',
    summary: 'Terraform, CloudFormation, and Pulumi implementations for automated infrastructure management.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Monitoring & Observability Platform',
    summary: 'ELK stack, Prometheus/Grafana, APM tools, and comprehensive logging solutions.',
    pricing: 'Typical: $8k–$35k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Backup & Disaster Recovery',
    summary: 'Automated backup strategies, cross-region replication, and disaster recovery testing.',
    pricing: 'Typical: $5k–$20k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Network Security & VPN Solutions',
    summary: 'VPN setup, network segmentation, firewall configuration, and secure remote access.',
    pricing: 'Typical: $3k–$15k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Compliance & Audit Services',
    summary: 'SOC 2, HIPAA, GDPR compliance assessments, and security audit preparation.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Performance Testing & Optimization',
    summary: 'Load testing, stress testing, performance profiling, and optimization recommendations.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Mobile App Development & DevOps',
    summary: 'iOS/Android app development, CI/CD for mobile, and app store deployment automation.',
    pricing: 'Typical: $15k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Blockchain & Web3 Integration',
    summary: 'Smart contract development, DeFi integration, and blockchain infrastructure setup.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Data Engineering & Analytics',
    summary: 'Data pipeline development, ETL processes, data warehousing, and analytics platform setup.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Integration',
    summary: 'API integration, middleware development, and legacy system modernization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Threat Intelligence Platform',
    summary: 'SIEM implementation, threat hunting, and security orchestration automation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'High-Performance Computing Solutions',
    summary: 'GPU clusters, parallel processing, and scientific computing infrastructure.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IoT Platform & Device Management',
    summary: 'IoT device connectivity, data collection, and edge computing solutions.',
    pricing: 'Typical: $18k–$90k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Analytics & Business Intelligence',
    summary: 'Data visualization, predictive analytics, and executive dashboards.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Content Management System',
    summary: 'Document management, workflow automation, and digital asset management.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Architecture Design',
    summary: 'SD-WAN, network segmentation, and zero-trust network implementation.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Resource Planning (ERP) Implementation',
    summary: 'ERP system selection, customization, and integration with existing systems.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Identity & Access Management',
    summary: 'SSO implementation, multi-factor authentication, and privileged access management.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Service Bus (ESB) Architecture',
    summary: 'Message queuing, service orchestration, and enterprise integration patterns.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Database Administration',
    summary: 'Database optimization, clustering, replication, and disaster recovery.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Workflow Automation',
    summary: 'Business process automation, approval workflows, and task management systems.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cloud Security Architecture',
    summary: 'Cloud security posture management, compliance automation, and threat protection.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise API Management Platform',
    summary: 'API gateway, developer portal, and API lifecycle management.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Monitoring & Alerting Systems',
    summary: 'Application performance monitoring, infrastructure monitoring, and alerting automation.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Backup & Archival Solutions',
    summary: 'Automated backup strategies, data archival, and long-term retention policies.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Load Balancing & Traffic Management',
    summary: 'Global load balancing, traffic routing, and application delivery optimization.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Messaging & Communication Platform',
    summary: 'Unified communications, video conferencing, and collaboration tools integration.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Virtualization & Containerization',
    summary: 'VMware/vSphere, Docker, Kubernetes, and hybrid cloud container orchestration.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Digital Transformation Consulting',
    summary: 'Technology strategy, digital roadmap, and organizational change management.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Quantum Computing Infrastructure Setup',
    summary: 'Quantum hardware integration, quantum software development, and quantum algorithm implementation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Edge Computing & IoT Platform Development',
    summary: 'Edge infrastructure, IoT device management, and real-time data processing systems.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Blockchain & Web3 Solutions',
    summary: 'Blockchain infrastructure, smart contract development, and DeFi platform creation.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: '5G Network Infrastructure & Optimization',
    summary: '5G deployment, network slicing, and mobile edge computing solutions.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cybersecurity & Zero Trust Architecture',
    summary: 'Zero trust implementation, advanced threat protection, and security orchestration.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'AI/ML Infrastructure & MLOps Platform',
    summary: 'ML pipeline development, model deployment, and AI infrastructure management.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Data Engineering & Analytics Platform',
    summary: 'Data lake architecture, real-time analytics, and advanced data processing systems.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'High-Performance Computing (HPC) Solutions',
    summary: 'HPC cluster setup, parallel processing optimization, and scientific computing infrastructure.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Microservices & API Architecture',
    summary: 'Microservices design, API gateway implementation, and service mesh architecture.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Integration & Middleware Solutions',
    summary: 'ESB implementation, API management, and enterprise service integration.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Database & Data Management',
    summary: 'Database optimization, data warehousing, and advanced data management solutions.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Disaster Recovery & Business Continuity',
    summary: 'DR planning, backup systems, and business continuity infrastructure.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Security & Monitoring',
    summary: 'Network security architecture, intrusion detection, and security monitoring systems.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Development',
    summary: 'Custom enterprise applications, legacy system modernization, and business process automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cloud Architecture & Migration',
    summary: 'Multi-cloud strategy, cloud-native architecture, and advanced migration services.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Infrastructure Automation & Orchestration',
    summary: 'Infrastructure as Code, automated provisioning, and IT process automation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Monitoring & Observability Platform',
    summary: 'APM implementation, log management, and comprehensive system observability.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Identity & Access Management',
    summary: 'IAM implementation, SSO solutions, and advanced identity management systems.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Backup & Data Protection',
    summary: 'Backup strategy, data protection, and advanced recovery solutions.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Service Management & ITSM Platform',
    summary: 'ITSM implementation, service desk automation, and IT process optimization.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Architecture & Design',
    summary: 'Network design, optimization, and advanced networking solutions.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Content Management Systems',
    summary: 'ECM implementation, document management, and content workflow automation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Virtualization & Hyperconverged Infrastructure',
    summary: 'HCI implementation, advanced virtualization, and infrastructure optimization.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Compliance & Governance Solutions',
    summary: 'Compliance management, IT governance, and regulatory adherence systems.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Storage & Data Management',
    summary: 'Storage architecture, data lifecycle management, and advanced storage solutions.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Mobile & Wireless Solutions',
    summary: 'Mobile device management, wireless infrastructure, and mobile application development.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Consulting & Strategy',
    summary: 'IT strategy development, technology assessment, and digital transformation planning.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Security Operations Center (SOC)',
    summary: 'SOC setup, security monitoring, and incident response automation.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Infrastructure Management',
    summary: 'Infrastructure optimization, capacity planning, and performance management.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Integration',
    summary: 'EAI implementation, system integration, and business process automation.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Support & Managed Services',
    summary: '24/7 IT support, managed services, and comprehensive IT operations management.',
    pricing: 'Typical: $50k–$300k/year',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Data Center Design & Implementation',
    summary: 'Data center planning, design, and implementation services.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Training & Knowledge Transfer',
    summary: 'IT training programs, knowledge transfer, and skill development services.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Audit & Assessment',
    summary: 'IT audit services, security assessment, and compliance evaluation.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Project Management',
    summary: 'IT project management, program management, and delivery optimization.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Vendor Management',
    summary: 'Vendor selection, contract management, and supplier relationship optimization.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Cost Optimization',
    summary: 'IT cost analysis, optimization strategies, and budget management.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Risk Management',
    summary: 'IT risk assessment, mitigation strategies, and risk management frameworks.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Performance Optimization',
    summary: 'Performance tuning, optimization, and system efficiency improvement.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Innovation & Emerging Technologies',
    summary: 'Technology innovation, emerging tech evaluation, and innovation strategy.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Security & Compliance',
    summary: 'Security implementation, compliance management, and regulatory adherence.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Operations & Maintenance',
    summary: 'IT operations management, maintenance services, and operational optimization.',
    pricing: 'Typical: $50k–$300k/year',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Architecture & Design',
    summary: 'IT architecture design, system design, and technical architecture planning.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Transformation & Modernization',
    summary: 'IT transformation, modernization, and digital evolution services.',
    pricing: 'Typical: $100k–$1M project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Analytics & Business Intelligence',
    summary: 'IT analytics, business intelligence, and data-driven IT decision making.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Quality Assurance & Testing',
    summary: 'QA services, testing automation, and quality management systems.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Documentation & Knowledge Management',
    summary: 'Technical documentation, knowledge management, and information architecture.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Change Management',
    summary: 'Change management, organizational change, and IT transformation support.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Capacity Planning & Management',
    summary: 'Capacity planning, resource management, and scalability planning.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Service Level Management',
    summary: 'SLA management, service level optimization, and performance management.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Incident & Problem Management',
    summary: 'Incident management, problem resolution, and IT service restoration.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Configuration Management',
    summary: 'Configuration management, asset management, and IT inventory optimization.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Release & Deployment Management',
    summary: 'Release management, deployment automation, and change deployment.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Financial Management',
    summary: 'IT financial management, cost allocation, and budget optimization.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Supplier & Vendor Management',
    summary: 'Supplier management, vendor optimization, and procurement services.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Relationship Management',
    summary: 'Stakeholder management, relationship optimization, and communication management.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Strategic Planning',
    summary: 'IT strategy development, strategic planning, and technology roadmap creation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Governance & Compliance',
    summary: 'IT governance, compliance management, and regulatory adherence.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Performance & Metrics Management',
    summary: 'Performance management, metrics optimization, and KPI management.',
    pricing: 'Typical: $35k–$225k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT Innovation & Technology Adoption',
    summary: 'Technology adoption, innovation management, and emerging technology integration.',
    pricing: 'Typical: $45k–$275k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced IT Business Continuity & Disaster Recovery',
    summary: 'BC/DR planning, business continuity, and disaster recovery optimization.',
    pricing: 'Typical: $60k–$400k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise IT End-to-End Service Management',
    summary: 'Comprehensive IT service management, end-to-end optimization, and service excellence.',
    pricing: 'Typical: $75k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Edge Computing Infrastructure',
    summary: 'Distributed edge computing solutions for low-latency applications and IoT deployments.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Data Lake & Analytics Platform',
    summary: 'Comprehensive data lake architecture with advanced analytics and machine learning capabilities.',
    pricing: 'Typical: $15k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Mobile-First Application Development',
    summary: 'Native and cross-platform mobile application development with modern frameworks and best practices.',
    pricing: 'Typical: $10k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'API Gateway & Microservices Architecture',
    summary: 'Modern microservices architecture with API gateway, service mesh, and container orchestration.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'DevOps Testing & Quality Assurance',
    summary: 'Comprehensive testing strategy with automated testing, performance testing, and quality assurance.',
    pricing: 'Typical: $5k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Technical Documentation & Knowledge Management',
    summary: 'Comprehensive technical documentation, API documentation, and knowledge management systems.',
    pricing: 'Typical: $3k–$20k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Legacy System Modernization',
    summary: 'Modernization of legacy systems with cloud migration, API integration, and technology stack updates.',
    pricing: 'Typical: $20k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'AI/ML Infrastructure & MLOps',
    summary: 'Machine learning infrastructure setup with MLOps practices for model development, deployment, and monitoring.',
    pricing: 'Typical: $15k–$80k project',
    link: 'https://ziontechgroup.com/it-services'}
];

export default function Services(): any {
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>
        <div style={{ 
          width: 4, height: 32, background: color, borderRadius: 2 
        }}></div>
        <h2 style={{ 
          fontSize: 28, fontWeight: 800, margin: 0,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>{title}</h2>
        <div style={{ 
          background: `${color}20`, color: color, padding: '4px 12px', 
          borderRadius: 20, fontSize: 14, fontWeight: 600 
        }}>
          {items.length} Services
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 20 
      }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24,
            background: 'white', textDecoration: 'none', color: '#0b1220',
            transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              borderColor: `${color}40`
            }
          }}>
            <div style={{ 
              fontWeight: 700, marginBottom: 8, fontSize: 16,
              lineHeight: 1.4, color: '#1e293b'
            }}>{s.name}</div>
            <div style={{ 
              opacity: 0.8, fontSize: 14, marginBottom: 12, 
              lineHeight: 1.5, color: '#64748b'
            }}>{s.summary}</div>
            <div style={{ 
              fontSize: 13, color: color, fontWeight: 600,
              background: `${color}10`, padding: '6px 12px',
              borderRadius: 8, display: 'inline-block'
            }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <main style={{ 
      background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', 
      minHeight: 'calc(100vh - 120px)' 
    }}>
      {/* Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0b1220, #1e293b)', 
        color: 'white', padding: '60px 20px', textAlign: 'center' 
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 48, fontWeight: 800, marginBottom: 16,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Our Services</h1>
          <p style={{ 
            fontSize: 20, opacity: 0.9, marginBottom: 24,
            lineHeight: 1.6 
          }}>
            Comprehensive technology solutions to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
              What We Offer
            </h2>
            <p className="text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of technology services designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${service.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-cursor-blue rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Pricing and Market Comparison */}
                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-400">Our Pricing:</span>
                        <span className="text-lg font-bold text-white">{service.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400">Market Average:</span>
                        <span className="text-sm text-gray-300">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Compare with:</span>
                        <a 
                          href={service.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 underline"
                        >
                          {service.competitor}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse" />
              Technology Stack
            </div>
          </div>
        </div>
      </section>

      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      
      {/* CTA Section */}
      <section style={{ 
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px',
        textAlign: 'center', background: 'white', marginTop: 40,
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{ 
          fontSize: 32, fontWeight: 700, marginBottom: 16,
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{ 
          fontSize: 18, color: '#64748b', marginBottom: 32,
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover 
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block', 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block', 
            background: 'rgba(34, 197, 94, 0.1)', 
            color: '#22c55e', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
  );
}
