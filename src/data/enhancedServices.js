// Enhanced Services Data for Zion Tech Group
// Comprehensive collection of micro SAAS, IT, and AI services

export const ENHANCED_SERVICES = [
  // AI & Machine Learning Services
  {
    id: "ai-content-generation",
    title: "AI Content Generator Pro",
    description: "Generate high-quality content, code, and creative assets with our advanced AI models. Perfect for marketers, developers, and content creators.",
    category: "AI & ML",
    price: 29,
    currency: "$",
    pricing: "monthly",
    tags: ["AI Content", "Text Generation", "Code Generation", "Creative Writing"],
    features: [
      "100+ content templates",
      "Multi-language support",
      "SEO optimization",
      "Brand voice customization",
      "API access included"
    ],
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
    marketPrice: "$49-99/month",
    benefits: [
      "Save 20+ hours per week on content creation",
      "Improve SEO rankings with AI-optimized content",
      "Maintain consistent brand voice across all channels"
    ],
    useCases: ["Blog writing", "Social media content", "Email marketing", "Product descriptions"],
    integration: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "API available"]
  },
  {
    id: "ai-media-editing",
    title: "AI Image & Video Editor",
    description: "Professional-grade AI-powered image and video editing tools for creators and businesses. Remove backgrounds, enhance quality, and generate variations.",
    category: "AI & ML",
    price: 19,
    currency: "$",
    pricing: "monthly",
    tags: ["Image Editing", "Video Editing", "AI Enhancement", "Background Removal"],
    features: [
      "One-click background removal",
      "AI-powered image enhancement",
      "Video stabilization",
      "Object removal & replacement",
      "Style transfer & filters"
    ],
    author: {
      name: "Zion Media Studio",
      id: "zion-media-studio",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
    marketPrice: "$39-79/month",
    benefits: [
      "Professional-quality edits in minutes, not hours",
      "No design skills required",
      "Consistent brand imagery across all assets"
    ],
    useCases: ["E-commerce product photos", "Social media graphics", "Marketing materials", "Personal projects"],
    integration: ["Photoshop", "Canva", "Figma", "Shopify", "Social media platforms"]
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant",
    description: "Intelligent code completion, debugging, and optimization powered by advanced language models. Support for 50+ programming languages with IDE integrations.",
    category: "AI & ML",
    price: 39,
    currency: "$",
    pricing: "monthly",
    tags: ["Code Completion", "Debugging", "Code Review", "IDE Integration"],
    features: [
      "50+ programming language support",
      "Real-time code suggestions",
      "Automated bug detection",
      "Code optimization recommendations",
      "GitHub integration"
    ],
    author: {
      name: "Zion Dev Tools",
      id: "zion-dev-tools",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 203,
    marketPrice: "$59-129/month",
    benefits: [
      "Increase coding speed by 40-60%",
      "Reduce debugging time significantly",
      "Learn best practices from AI suggestions"
    ],
    useCases: ["Web development", "Mobile app development", "Data science", "DevOps automation"],
    integration: ["VS Code", "IntelliJ", "Sublime Text", "Vim", "GitHub Copilot alternative"]
  },
  {
    id: "ai-analytics",
    title: "AI Data Analytics Platform",
    description: "Transform raw data into actionable insights with our AI-powered analytics suite. Advanced data visualization, predictive analytics, and automated reporting.",
    category: "AI & ML",
    price: 199,
    currency: "$",
    pricing: "monthly",
    tags: ["Data Analytics", "Predictive Analytics", "Data Visualization", "Business Intelligence"],
    features: [
      "Real-time data processing",
      "Predictive modeling",
      "Interactive dashboards",
      "Automated insights",
      "Multi-source data integration"
    ],
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 67,
    marketPrice: "$299-599/month",
    benefits: [
      "Make data-driven decisions faster",
      "Identify hidden patterns and trends",
      "Automate routine reporting tasks"
    ],
    useCases: ["Business intelligence", "Customer analytics", "Financial forecasting", "Operational insights"],
    integration: ["Google Analytics", "Salesforce", "HubSpot", "QuickBooks", "Custom APIs"]
  },

  // Cybersecurity Services
  {
    id: "ai-threat-detection",
    title: "AI Threat Detection",
    description: "Real-time cybersecurity threat detection and response using advanced AI algorithms. 24/7 monitoring with instant alerts and automated response.",
    category: "Cybersecurity",
    price: 99,
    currency: "$",
    pricing: "monthly",
    tags: ["Threat Detection", "AI Security", "24/7 Monitoring", "Automated Response"],
    features: [
      "Real-time threat monitoring",
      "AI-powered anomaly detection",
      "Automated incident response",
      "Threat intelligence feeds",
      "Compliance reporting"
    ],
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T16:45:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 134,
    marketPrice: "$199-499/month",
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 80%",
      "24/7 protection without human intervention"
    ],
    useCases: ["Enterprise security", "SMB protection", "Compliance requirements", "Incident response"],
    integration: ["SIEM systems", "Firewalls", "EDR solutions", "Cloud platforms", "Security tools"]
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Suite",
    description: "Comprehensive zero-trust security implementation for modern enterprise environments. Identity verification, network segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    price: 499,
    currency: "$",
    pricing: "monthly",
    tags: ["Zero Trust", "Identity Verification", "Network Security", "Enterprise Security"],
    features: [
      "Multi-factor authentication",
      "Network segmentation",
      "Continuous monitoring",
      "Privileged access management",
      "Compliance automation"
    ],
    author: {
      name: "Zion Enterprise Security",
      id: "zion-enterprise-security",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T13:20:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 78,
    marketPrice: "$799-1499/month",
    benefits: [
      "Reduce attack surface by 90%",
      "Meet compliance requirements automatically",
      "Centralized security management"
    ],
    useCases: ["Enterprise security", "Government compliance", "Healthcare security", "Financial services"],
    integration: ["Active Directory", "Okta", "CrowdStrike", "Palo Alto", "Custom systems"]
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management",
    description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments. Cost optimization, security compliance, and unified monitoring.",
    category: "Cloud & Infrastructure",
    price: 79,
    currency: "$",
    pricing: "monthly",
    tags: ["Multi-Cloud", "Cost Optimization", "Security Compliance", "Unified Monitoring"],
    features: [
      "Multi-cloud dashboard",
      "Cost optimization engine",
      "Security compliance monitoring",
      "Unified logging",
      "Automated scaling"
    ],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 145,
    marketPrice: "$149-299/month",
    benefits: [
      "Reduce cloud costs by 20-40%",
      "Single pane of glass for all clouds",
      "Automated compliance and security"
    ],
    useCases: ["Multi-cloud environments", "Cost optimization", "Compliance management", "DevOps automation"],
    integration: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"]
  },

  // Business Intelligence Services
  {
    id: "ai-crm",
    title: "AI-Powered CRM",
    description: "Intelligent customer relationship management with predictive analytics and automation. Lead scoring, sales forecasting, and automated follow-ups.",
    category: "Business Intelligence",
    price: 39,
    currency: "$",
    pricing: "monthly",
    tags: ["CRM", "Lead Scoring", "Sales Forecasting", "Automation"],
    features: [
      "AI-powered lead scoring",
      "Sales forecasting",
      "Automated follow-ups",
      "Customer segmentation",
      "Performance analytics"
    ],
    author: {
      name: "Zion Business Solutions",
      id: "zion-business-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T14:20:00.000Z",
    aiScore: 90,
    rating: 4.6,
    reviewCount: 189,
    marketPrice: "$79-199/month",
    benefits: [
      "Increase sales conversion by 25%",
      "Automate 80% of follow-up tasks",
      "Predict customer behavior accurately"
    ],
    useCases: ["Sales management", "Customer service", "Marketing automation", "Business development"],
    integration: ["Salesforce", "HubSpot", "Pipedrive", "Zapier", "Email platforms"]
  },

  // Communication & Collaboration Services
  {
    id: "ai-meeting-assistant",
    title: "AI Meeting Assistant",
    description: "Intelligent meeting transcription, summarization, and action item tracking. Real-time transcription with smart summaries and automated follow-ups.",
    category: "Communication",
    price: 19,
    currency: "$",
    pricing: "monthly",
    tags: ["Meeting Transcription", "AI Summarization", "Action Tracking", "Productivity"],
    features: [
      "Real-time transcription",
      "AI-powered summaries",
      "Action item extraction",
      "Meeting analytics",
      "Integration with calendar"
    ],
    author: {
      name: "Zion Communication",
      id: "zion-communication",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-27T13:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 234,
    marketPrice: "$29-59/month",
    benefits: [
      "Save 5+ hours per week on meeting notes",
      "Never miss action items again",
      "Improve meeting productivity by 40%"
    ],
    useCases: ["Team meetings", "Client calls", "Training sessions", "Interviews"],
    integration: ["Zoom", "Teams", "Google Meet", "Slack", "Calendar systems"]
  },

  // Specialized Tools
  {
    id: "ai-legal-review",
    title: "AI Legal Document Review",
    description: "Automated legal document analysis, contract review, and compliance checking. Contract analysis, risk assessment, and compliance monitoring.",
    category: "Specialized Tools",
    price: 149,
    currency: "$",
    pricing: "monthly",
    tags: ["Legal Review", "Contract Analysis", "Risk Assessment", "Compliance"],
    features: [
      "Contract analysis",
      "Risk assessment",
      "Compliance monitoring",
      "Legal research automation",
      "Document comparison"
    ],
    author: {
      name: "Zion Legal Tech",
      id: "zion-legal-tech",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T12:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 87,
    marketPrice: "$299-599/month",
    benefits: [
      "Reduce legal review time by 70%",
      "Identify risks and compliance issues automatically",
      "Standardize legal processes"
    ],
    useCases: ["Contract review", "Compliance checking", "Legal research", "Risk assessment"],
    integration: ["DocuSign", "Legal software", "Document management", "Compliance tools"]
  },

  // NEW INNOVATIVE SERVICES

  // Quantum Computing Services
  {
    id: "quantum-computing-simulator",
    title: "Quantum Computing Simulator",
    description: "Access to quantum computing resources and simulation tools for research, development, and optimization problems. Support for multiple quantum algorithms.",
    category: "Quantum Computing",
    price: 299,
    currency: "$",
    pricing: "monthly",
    tags: ["Quantum Computing", "Simulation", "Optimization", "Research"],
    features: [
      "Quantum algorithm library",
      "Real quantum hardware access",
      "Optimization problem solving",
      "Quantum machine learning",
      "Research collaboration tools"
    ],
    author: {
      name: "Zion Quantum Labs",
      id: "zion-quantum-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:00:00.000Z",
    aiScore: 99,
    rating: 4.9,
    reviewCount: 45,
    marketPrice: "$599-1499/month",
    benefits: [
      "Solve complex optimization problems in minutes",
      "Access to cutting-edge quantum technology",
      "Stay ahead in quantum computing research"
    ],
    useCases: ["Financial modeling", "Drug discovery", "Logistics optimization", "Cryptography research"],
    integration: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "Custom APIs"]
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-development-platform",
    title: "Blockchain Development Platform",
    description: "Complete blockchain development and deployment platform with smart contract templates, testing tools, and deployment automation.",
    category: "Blockchain & Web3",
    price: 89,
    currency: "$",
    pricing: "monthly",
    tags: ["Blockchain", "Smart Contracts", "Web3", "DeFi"],
    features: [
      "Smart contract templates",
      "Multi-chain support",
      "Testing and deployment tools",
      "Security auditing",
      "Analytics dashboard"
    ],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-06T14:30:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 78,
    marketPrice: "$199-499/month",
    benefits: [
      "Launch blockchain projects 10x faster",
      "Reduce development costs by 60%",
      "Built-in security best practices"
    ],
    useCases: ["DeFi applications", "NFT marketplaces", "Supply chain tracking", "Identity verification"],
    integration: ["Ethereum", "Polygon", "Solana", "Binance Smart Chain", "Web3 wallets"]
  },

  // IoT & Edge Computing
  {
    id: "iot-platform",
    title: "IoT Management Platform",
    description: "Comprehensive IoT device management, data collection, and analytics platform. Real-time monitoring, predictive maintenance, and automation.",
    category: "IoT & Edge",
    price: 69,
    currency: "$",
    pricing: "monthly",
    tags: ["IoT", "Device Management", "Data Collection", "Predictive Maintenance"],
    features: [
      "Device management dashboard",
      "Real-time data collection",
      "Predictive maintenance",
      "Automation workflows",
      "Security monitoring"
    ],
    author: {
      name: "Zion IoT Solutions",
      id: "zion-iot-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-07T09:15:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 112,
    marketPrice: "$149-399/month",
    benefits: [
      "Monitor 1000+ devices from one dashboard",
      "Predict equipment failures before they happen",
      "Automate routine maintenance tasks"
    ],
    useCases: ["Smart cities", "Industrial IoT", "Smart homes", "Agriculture monitoring"],
    integration: ["MQTT", "HTTP APIs", "Cloud platforms", "Mobile apps", "Web dashboards"]
  },

  // AR/VR Development
  {
    id: "ar-vr-development-platform",
    title: "AR/VR Development Platform",
    description: "Complete platform for developing augmented and virtual reality applications. Templates, 3D modeling tools, and deployment solutions.",
    category: "AR/VR",
    price: 79,
    currency: "$",
    pricing: "monthly",
    tags: ["AR/VR", "3D Modeling", "Development", "Deployment"],
    features: [
      "3D model library",
      "AR/VR templates",
      "Cross-platform deployment",
      "Analytics dashboard",
      "Content management"
    ],
    author: {
      name: "Zion AR/VR Studio",
      id: "zion-ar-vr-studio",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8c5ea?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T11:45:00.000Z",
    aiScore: 88,
    rating: 4.6,
    reviewCount: 67,
    marketPrice: "$199-599/month",
    benefits: [
      "Create AR/VR experiences without 3D expertise",
      "Deploy to multiple platforms simultaneously",
      "Track user engagement and behavior"
    ],
    useCases: ["Training simulations", "Product visualization", "Virtual tours", "Gaming applications"],
    integration: ["Unity", "Unreal Engine", "WebXR", "Mobile platforms", "VR headsets"]
  },

  // FinTech Services
  {
    id: "ai-trading-platform",
    title: "AI Trading Platform",
    description: "Intelligent trading platform with AI-powered market analysis, automated trading strategies, and risk management tools.",
    category: "FinTech",
    price: 199,
    currency: "$",
    pricing: "monthly",
    tags: ["Trading", "AI Analysis", "Risk Management", "Automation"],
    features: [
      "AI market analysis",
      "Automated trading strategies",
      "Risk management tools",
      "Portfolio optimization",
      "Real-time alerts"
    ],
    author: {
      name: "Zion FinTech",
      id: "zion-fintech",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-09T13:20:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    marketPrice: "$399-999/month",
    benefits: [
      "Make data-driven trading decisions",
      "Automate routine trading tasks",
      "Minimize risk with AI-powered analysis"
    ],
    useCases: ["Stock trading", "Cryptocurrency trading", "Forex trading", "Portfolio management"],
    integration: ["Trading APIs", "Broker platforms", "Market data feeds", "Risk management tools"]
  },

  // Healthcare AI
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostics",
    description: "AI-powered medical image analysis, symptom assessment, and diagnostic support tools for healthcare professionals.",
    category: "Healthcare AI",
    price: 399,
    currency: "$",
    pricing: "monthly",
    tags: ["Healthcare", "Medical Imaging", "Diagnostics", "AI Analysis"],
    features: [
      "Medical image analysis",
      "Symptom assessment",
      "Diagnostic support",
      "Patient monitoring",
      "HIPAA compliance"
    ],
    author: {
      name: "Zion Health AI",
      id: "zion-health-ai",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
    marketPrice: "$799-1999/month",
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce diagnosis time significantly",
      "Support remote healthcare delivery"
    ],
    useCases: ["Radiology", "Pathology", "Dermatology", "General practice"],
    integration: ["PACS systems", "EHR platforms", "Medical devices", "Telemedicine platforms"]
  },

  // Education Technology
  {
    id: "ai-learning-platform",
    title: "AI Learning Platform",
    description: "Personalized learning experience with AI-powered content adaptation, progress tracking, and intelligent tutoring systems.",
    category: "EdTech",
    price: 29,
    currency: "$",
    pricing: "monthly",
    tags: ["Education", "Personalized Learning", "AI Tutoring", "Progress Tracking"],
    features: [
      "Personalized learning paths",
      "AI tutoring system",
      "Progress analytics",
      "Content adaptation",
      "Assessment tools"
    ],
    author: {
      name: "Zion Education",
      id: "zion-education",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-11T10:15:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 234,
    marketPrice: "$59-149/month",
    benefits: [
      "Improve learning outcomes by 40%",
      "Personalize education for each student",
      "Track progress in real-time"
    ],
    useCases: ["K-12 education", "Higher education", "Corporate training", "Skill development"],
    integration: ["LMS platforms", "Video conferencing", "Assessment tools", "Content libraries"]
  },

  // Environmental Technology
  {
    id: "ai-climate-monitoring",
    title: "AI Climate Monitoring",
    description: "Advanced climate monitoring and prediction platform using AI and satellite data for environmental research and sustainability planning.",
    category: "Environmental Tech",
    price: 149,
    currency: "$",
    pricing: "monthly",
    tags: ["Climate Monitoring", "Environmental Data", "AI Prediction", "Sustainability"],
    features: [
      "Satellite data integration",
      "Climate prediction models",
      "Environmental monitoring",
      "Sustainability analytics",
      "Reporting tools"
    ],
    author: {
      name: "Zion Environmental",
      id: "zion-environmental",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T12:00:00.000Z",
    aiScore: 91,
    rating: 4.6,
    reviewCount: 78,
    marketPrice: "$299-699/month",
    benefits: [
      "Monitor environmental changes in real-time",
      "Predict climate patterns accurately",
      "Support sustainability initiatives"
    ],
    useCases: ["Climate research", "Environmental monitoring", "Sustainability planning", "Policy development"],
    integration: ["Satellite data", "Weather APIs", "Environmental sensors", "Research databases"]
  },

  // Supply Chain AI
  {
    id: "ai-supply-chain",
    title: "AI Supply Chain Optimization",
    description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.",
    category: "Supply Chain",
    price: 179,
    currency: "$",
    pricing: "monthly",
    tags: ["Supply Chain", "Demand Forecasting", "Inventory Optimization", "Logistics"],
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Logistics automation",
      "Supplier management",
      "Risk assessment"
    ],
    author: {
      name: "Zion Supply Chain",
      id: "zion-supply-chain",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-13T14:45:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 134,
    marketPrice: "$399-899/month",
    benefits: [
      "Reduce inventory costs by 25%",
      "Improve delivery times by 30%",
      "Minimize supply chain disruptions"
    ],
    useCases: ["Retail", "Manufacturing", "Logistics", "E-commerce"],
    integration: ["ERP systems", "WMS platforms", "Transportation management", "Supplier portals"]
  }
];

// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { id: 'ai-ml', label: 'AI & Machine Learning', icon: '🤖', count: 0 },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: '🔒', count: 0 },
  { id: 'cloud-infrastructure', label: 'Cloud & Infrastructure', icon: '☁️', count: 0 },
  { id: 'business-intelligence', label: 'Business Intelligence', icon: '📊', count: 0 },
  { id: 'communication', label: 'Communication & Collaboration', icon: '💬', count: 0 },
  { id: 'specialized-tools', label: 'Specialized Tools', icon: '🛠️', count: 0 },
  { id: 'quantum-computing', label: 'Quantum Computing', icon: '⚛️', count: 0 },
  { id: 'blockchain-web3', label: 'Blockchain & Web3', icon: '⛓️', count: 0 },
  { id: 'iot-edge', label: 'IoT & Edge Computing', icon: '📡', count: 0 },
  { id: 'ar-vr', label: 'AR/VR Development', icon: '🥽', count: 0 },
  { id: 'fintech', label: 'FinTech', icon: '💰', count: 0 },
  { id: 'healthcare-ai', label: 'Healthcare AI', icon: '🏥', count: 0 },
  { id: 'edtech', label: 'Education Technology', icon: '🎓', count: 0 },
  { id: 'environmental-tech', label: 'Environmental Tech', icon: '🌱', count: 0 },
  { id: 'supply-chain', label: 'Supply Chain', icon: '🚚', count: 0 }
];

// Calculate category counts
SERVICE_CATEGORIES.forEach(category => {
  category.count = ENHANCED_SERVICES.filter(service => 
    service.category.toLowerCase().includes(category.id.split('-')[0]) ||
    service.category.toLowerCase().includes(category.id.split('-')[1])
  ).length;
});

// Pricing tiers
export const PRICING_TIERS = [
  { id: 'free', label: 'Free', range: '$0' },
  { id: 'starter', label: 'Starter', range: '$1-$50' },
  { id: 'professional', label: 'Professional', range: '$51-$200' },
  { id: 'enterprise', label: 'Enterprise', range: '$201+' }
];

// Market comparison data
export const MARKET_COMPARISON = {
  aiContentGeneration: { competitors: ['Jasper', 'Copy.ai', 'Writesonic'], avgPrice: '$49/month' },
  aiMediaEditing: { competitors: ['Remove.bg', 'Canva Pro', 'Adobe Creative Cloud'], avgPrice: '$39/month' },
  aiCodeAssistant: { competitors: ['GitHub Copilot', 'Tabnine', 'Kite'], avgPrice: '$59/month' },
  aiAnalytics: { competitors: ['Tableau', 'Power BI', 'Looker'], avgPrice: '$299/month' },
  aiThreatDetection: { competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'], avgPrice: '$199/month' },
  multiCloudManagement: { competitors: ['CloudHealth', 'RightScale', 'Scalr'], avgPrice: '$149/month' }
};
