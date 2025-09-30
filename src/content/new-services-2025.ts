export interface ServiceOffering {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  benefits: string[];
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  useCases: string[];
  featured: boolean;
  newBadge: boolean;
  popularBadge: boolean;
  icon: string;
}

export const newServices2025: ServiceOffering[] = [
  {
    id: "ai-copilot-platform",
    slug: "ai-copilot-platform",
    name: "AI Copilot Platform",
    tagline: "10x Developer Productivity with AI Pair Programming",
    description: "Revolutionary AI-powered development platform providing intelligent code completion, bug detection, and automated refactoring achieving 10x productivity gains.",
    category: "Developer Tools",
    benefits: [
      "10x faster code writing with context-aware AI completion",
      "95% bug detection before runtime",
      "Automatic technical debt reduction",
      "Real-time code review and optimization",
      "Multi-language support (50+ languages)"
    ],
    features: [
      "Intelligent Code Completion",
      "Automated Bug Detection",
      "Real-Time Code Review",
      "Security Vulnerability Scanning",
      "Performance Optimization Suggestions",
      "Automated Documentation Generation",
      "Team Collaboration Tools",
      "Custom Model Training"
    ],
    pricing: {
      starter: "$49/developer/month",
      professional: "$149/developer/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Accelerate feature development by 10x",
      "Reduce production bugs by 95%",
      "Modernize legacy codebases automatically",
      "Onboard new developers 5x faster",
      "Maintain consistent code quality across teams"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🤖"
  },
  {
    id: "quantum-optimization-service",
    slug: "quantum-optimization-service",
    name: "Quantum Optimization Service",
    tagline: "1000x Speedup for Complex Business Problems",
    description: "Harness quantum computing power for optimization problems achieving 1000x speedup over classical algorithms for logistics, portfolio management, and supply chain optimization.",
    category: "Quantum Computing",
    benefits: [
      "1000x faster optimization vs classical methods",
      "Solve previously intractable problems",
      "Real-time portfolio optimization",
      "Perfect supply chain routing",
      "Zero-setup quantum access"
    ],
    features: [
      "Quantum Algorithm Library",
      "Hybrid Classical-Quantum Solver",
      "Real-Time Optimization API",
      "Portfolio Optimization",
      "Supply Chain Routing",
      "Financial Risk Modeling",
      "Molecular Simulation",
      "24/7 Quantum Access"
    ],
    pricing: {
      starter: "$2,000/month",
      professional: "$10,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Optimize $1B+ investment portfolios in seconds",
      "Route 10,000+ delivery vehicles optimally",
      "Accelerate drug discovery by 100x",
      "Perfect resource allocation across factories",
      "Real-time risk assessment for trading"
    ],
    featured: true,
    newBadge: true,
    popularBadge: false,
    icon: "⚛️"
  },
  {
    id: "neuromorphic-edge-ai",
    slug: "neuromorphic-edge-ai",
    name: "Neuromorphic Edge AI",
    tagline: "10,000x Energy Efficiency for Edge Intelligence",
    description: "Deploy brain-inspired neuromorphic processors at the edge achieving 10,000x better energy efficiency with spiking neural networks for IoT and autonomous systems.",
    category: "Edge Computing",
    benefits: [
      "10,000x better energy efficiency vs GPUs",
      "Real-time inference with <1ms latency",
      "Privacy-preserving on-device AI",
      "Works on battery power for months",
      "Perfect for autonomous vehicles and robotics"
    ],
    features: [
      "Spiking Neural Network Runtime",
      "Event-Driven Computation",
      "Ultra-Low Power Operation",
      "Real-Time Inference",
      "On-Device Training",
      "Computer Vision Acceleration",
      "Sensor Fusion",
      "Edge Deployment Tools"
    ],
    pricing: {
      starter: "$500/device/year",
      professional: "$2,500/device/year",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Power autonomous drones for 10x longer",
      "Real-time object detection on edge devices",
      "Smart home intelligence without cloud",
      "Industrial IoT with month-long battery life",
      "Autonomous vehicle perception systems"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🧠"
  },
  {
    id: "ai-security-ops-platform",
    slug: "ai-security-ops-platform",
    name: "AI Security Operations Platform",
    tagline: "Sub-30s Autonomous Threat Response",
    description: "Zero-touch security operations achieving sub-30s incident containment with 99.8% accuracy. Autonomous threat detection, analysis, and remediation without human intervention.",
    category: "Cybersecurity",
    benefits: [
      "Sub-30s threat containment (vs 18-hour industry average)",
      "99.8% threat detection accuracy",
      "95% reduction in security team workload",
      "Zero-day threat detection",
      "Automatic compliance reporting"
    ],
    features: [
      "Autonomous Threat Detection",
      "Real-Time Behavioral Analysis",
      "Automated Incident Response",
      "Zero-Day Exploit Detection",
      "Threat Intelligence Integration",
      "Automated Playbook Execution",
      "Compliance Automation (SOC 2, ISO 27001)",
      "24/7 AI Security Monitoring"
    ],
    pricing: {
      starter: "$5,000/month",
      professional: "$20,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Detect and stop breaches in seconds",
      "Automate SOC operations completely",
      "Achieve zero security breaches",
      "Reduce security costs by 85%",
      "Maintain perfect compliance posture"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🛡️"
  },
  {
    id: "synthetic-data-factory",
    slug: "synthetic-data-factory",
    name: "Synthetic Data Factory",
    tagline: "Unlimited Training Data with Perfect Privacy",
    description: "Generate unlimited high-quality synthetic training data achieving 98% statistical parity with perfect privacy preservation for ML development at scale.",
    category: "Data Science",
    benefits: [
      "Unlimited training data generation",
      "98% statistical parity with real data",
      "Perfect privacy preservation (zero PII leakage)",
      "10x faster ML model training",
      "Bias-free dataset generation"
    ],
    features: [
      "GAN-Based Data Generation",
      "Diffusion Model Synthesis",
      "Privacy-Preserving Techniques",
      "Bias Detection & Correction",
      "Multi-Modal Data Generation",
      "Custom Data Schema Support",
      "Quality Validation Pipeline",
      "API & SDK Access"
    ],
    pricing: {
      starter: "$1,000/month",
      professional: "$5,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Train ML models without real user data",
      "Overcome data scarcity limitations",
      "Generate bias-free training datasets",
      "Accelerate AI development by 10x",
      "Maintain perfect GDPR compliance"
    ],
    featured: true,
    newBadge: true,
    popularBadge: false,
    icon: "🔬"
  },
  {
    id: "real-time-personalization-engine",
    slug: "real-time-personalization-engine",
    name: "Real-Time Personalization Engine",
    tagline: "Sub-50ms Adaptive User Experiences",
    description: "Deliver hyper-personalized experiences with <50ms latency using edge computing and real-time AI achieving 5x engagement and 340% revenue growth.",
    category: "Customer Experience",
    benefits: [
      "Sub-50ms personalization latency",
      "5x higher user engagement",
      "340% average revenue increase",
      "Privacy-preserving personalization",
      "Works offline on edge devices"
    ],
    features: [
      "Real-Time Behavioral Prediction",
      "Edge Computing Deployment",
      "Dynamic Content Optimization",
      "A/B Testing Automation",
      "Multi-Channel Personalization",
      "Privacy-First Architecture",
      "Predictive Analytics",
      "ROI Dashboard"
    ],
    pricing: {
      starter: "$2,000/month",
      professional: "$10,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Increase e-commerce conversion by 4x",
      "Personalize content for millions of users",
      "Reduce cart abandonment by 78%",
      "Optimize product recommendations in real-time",
      "Deliver Netflix-level personalization"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🎯"
  },
  {
    id: "ai-contract-intelligence",
    slug: "ai-contract-intelligence",
    name: "AI Contract Intelligence",
    tagline: "95% Faster Legal Review with 99.8% Accuracy",
    description: "Transform legal operations with AI achieving 95% faster contract review, 99.8% accuracy in risk detection, and automatic compliance verification.",
    category: "Legal Tech",
    benefits: [
      "95% faster contract review (40 hours → 2 hours)",
      "99.8% accuracy in risk detection",
      "20x capacity increase per legal team",
      "Automatic compliance verification",
      "3.5x more risks identified than humans"
    ],
    features: [
      "Intelligent Contract Analysis",
      "Risk & Obligation Extraction",
      "Clause Recommendation Engine",
      "Compliance Checking",
      "Contract Comparison",
      "Automated Redlining",
      "Legal Research Assistant",
      "Multi-Language Support"
    ],
    pricing: {
      starter: "$1,500/month",
      professional: "$7,500/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Review contracts 95% faster",
      "Identify hidden legal risks automatically",
      "Scale legal team capacity by 20x",
      "Ensure perfect regulatory compliance",
      "Reduce legal costs by 85%"
    ],
    featured: true,
    newBadge: true,
    popularBadge: false,
    icon: "⚖️"
  },
  {
    id: "autonomous-supply-chain",
    slug: "autonomous-supply-chain",
    name: "Autonomous Supply Chain Platform",
    tagline: "99.9% On-Time Delivery with 40% Cost Reduction",
    description: "AI-powered supply chain achieving 99.9% on-time delivery, 40% cost reduction, and real-time adaptation to disruptions across global operations.",
    category: "Supply Chain",
    benefits: [
      "99.9% on-time delivery rate",
      "40% logistics cost reduction",
      "96% demand prediction accuracy",
      "68% inventory waste reduction",
      "Real-time disruption adaptation"
    ],
    features: [
      "Predictive Demand Forecasting",
      "Autonomous Route Optimization",
      "Real-Time Inventory Management",
      "Supplier Risk Assessment",
      "Disruption Prediction & Mitigation",
      "Multi-Modal Transportation Planning",
      "Carbon Footprint Optimization",
      "Global Network Visibility"
    ],
    pricing: {
      starter: "$3,000/month",
      professional: "$15,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Optimize 50,000+ delivery routes daily",
      "Predict demand with 96% accuracy",
      "Reduce logistics costs by $320M annually",
      "Achieve 99.9% on-time delivery",
      "Adapt to disruptions in real-time"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "📦"
  },
  {
    id: "ai-drug-discovery-accelerator",
    slug: "ai-drug-discovery-accelerator",
    name: "AI Drug Discovery Accelerator",
    tagline: "100x Faster Discovery with 85% Cost Reduction",
    description: "Accelerate drug discovery by 100x reducing time from 8 years to 10 months while cutting costs 85% using AI molecular prediction and optimization.",
    category: "Healthcare AI",
    benefits: [
      "100x faster drug discovery (8 years → 10 months)",
      "85% cost reduction ($2.8B → $400M)",
      "3.2x clinical trial success rate",
      "97% molecule efficacy prediction accuracy",
      "Federated learning across research centers"
    ],
    features: [
      "AI Molecular Property Prediction",
      "Toxicity & Efficacy Modeling",
      "Drug-Drug Interaction Analysis",
      "Clinical Trial Optimization",
      "Federated Learning Platform",
      "Genomic Data Integration",
      "Literature Mining AI",
      "Regulatory Compliance Tools"
    ],
    pricing: {
      starter: "$10,000/month",
      professional: "$50,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Identify drug candidates in 10 months vs 8 years",
      "Reduce drug development costs by 85%",
      "Increase clinical trial success 3.2x",
      "Predict molecule efficacy before synthesis",
      "Accelerate personalized medicine"
    ],
    featured: true,
    newBadge: true,
    popularBadge: false,
    icon: "💊"
  },
  {
    id: "cognitive-ai-assistant",
    slug: "cognitive-ai-assistant",
    name: "Cognitive AI Assistant Platform",
    tagline: "Human-Level Understanding with 98% Satisfaction",
    description: "Build cognitive AI assistants with human-level understanding, contextual memory, and emotional intelligence achieving 98% user satisfaction.",
    category: "Conversational AI",
    benefits: [
      "Human-level conversation understanding",
      "98% user satisfaction rate",
      "Long-term contextual memory",
      "Emotional intelligence & empathy",
      "Multi-modal interaction (voice, text, vision)"
    ],
    features: [
      "Advanced Natural Language Understanding",
      "Contextual Memory System",
      "Emotion Detection & Response",
      "Multi-Modal Interaction",
      "Personality Customization",
      "Knowledge Graph Integration",
      "Real-Time Learning",
      "Enterprise Integration APIs"
    ],
    pricing: {
      starter: "$500/month",
      professional: "$2,500/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Deploy enterprise virtual assistants",
      "Automate customer service at scale",
      "Create AI companions for elderly care",
      "Build intelligent personal assistants",
      "Transform employee productivity tools"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "💬"
  },
  {
    id: "ai-fintech-platform",
    slug: "ai-fintech-platform",
    name: "AI FinTech Platform",
    tagline: "99.9% Fraud Detection with Instant Decisions",
    description: "Autonomous financial services achieving 99.9% fraud detection, instant loan approvals, and personalized wealth management at scale.",
    category: "FinTech",
    benefits: [
      "99.9% fraud detection accuracy",
      "Instant loan decisions (seconds vs days)",
      "Personalized wealth management at scale",
      "Autonomous trading with superior returns",
      "Perfect regulatory compliance"
    ],
    features: [
      "Real-Time Fraud Detection",
      "AI Credit Risk Assessment",
      "Automated Loan Underwriting",
      "Personalized Investment Advisory",
      "Algorithmic Trading Platform",
      "Regulatory Compliance Automation",
      "Financial Forecasting",
      "Portfolio Optimization"
    ],
    pricing: {
      starter: "$5,000/month",
      professional: "$25,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Prevent fraud with 99.9% accuracy",
      "Approve loans instantly vs 10-day wait",
      "Deliver personalized wealth strategies",
      "Automate trading with AI",
      "Maintain perfect compliance posture"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "💰"
  },
  {
    id: "ai-climate-tech-solution",
    slug: "ai-climate-tech-solution",
    name: "AI Climate Tech Solution",
    tagline: "40% Carbon Reduction with AI Optimization",
    description: "Deploy AI for climate action achieving 40% carbon reduction, optimized renewable energy, and predictive climate modeling for sustainability at scale.",
    category: "Climate Tech",
    benefits: [
      "40% carbon emissions reduction",
      "95% renewable energy grid efficiency",
      "60% energy cost savings",
      "Predictive climate impact modeling",
      "ESG reporting automation"
    ],
    features: [
      "Carbon Footprint Analysis",
      "Renewable Energy Optimization",
      "Smart Grid Management",
      "Climate Risk Prediction",
      "ESG Compliance Automation",
      "Emission Monitoring & Reporting",
      "Sustainability Dashboard",
      "Carbon Offset Optimization"
    ],
    pricing: {
      starter: "$2,000/month",
      professional: "$10,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Reduce corporate carbon by 40%",
      "Optimize renewable energy grids",
      "Predict climate risks years ahead",
      "Automate ESG compliance reporting",
      "Achieve net-zero targets faster"
    ],
    featured: true,
    newBadge: true,
    popularBadge: false,
    icon: "🌍"
  },
  {
    id: "multimodal-ai-platform",
    slug: "multimodal-ai-platform",
    name: "Multimodal AI Platform",
    tagline: "Process Text, Image, Video, Audio Simultaneously",
    description: "Revolutionary multimodal AI processing text, images, video, and audio in real-time achieving human-level comprehension across all modalities with unified understanding.",
    category: "Multimodal AI",
    benefits: [
      "Unified understanding across all content types",
      "Real-time processing of mixed media",
      "98% accuracy across all modalities",
      "Cross-modal reasoning and insight generation",
      "Seamless integration with existing workflows"
    ],
    features: [
      "Text-Image-Video-Audio Processing",
      "Cross-Modal Understanding",
      "Real-Time Inference",
      "Unified Embedding Space",
      "Content Generation Across Modalities",
      "Sentiment Analysis Multi-Modal",
      "Object Detection & Recognition",
      "Speech-to-Text & Text-to-Speech"
    ],
    pricing: {
      starter: "$3,000/month",
      professional: "$15,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Analyze customer feedback across all channels",
      "Generate content in any format from any input",
      "Monitor brand presence across media types",
      "Create accessible content automatically",
      "Enhance search with multimodal understanding"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🎬"
  },
  {
    id: "ai-model-compression-service",
    slug: "ai-model-compression-service",
    name: "AI Model Compression Service",
    tagline: "90% Size Reduction, Zero Accuracy Loss",
    description: "Compress AI models by 90% with zero accuracy loss using advanced quantization, pruning, and knowledge distillation achieving 10x faster inference.",
    category: "Model Optimization",
    benefits: [
      "90% model size reduction",
      "Zero accuracy degradation",
      "10x faster inference speed",
      "70% cost reduction in deployment",
      "Deploy models on edge devices"
    ],
    features: [
      "Automated Quantization",
      "Neural Architecture Search",
      "Knowledge Distillation",
      "Pruning & Sparsification",
      "Hardware-Aware Optimization",
      "Model Benchmarking",
      "Continuous Optimization",
      "Cross-Platform Deployment"
    ],
    pricing: {
      starter: "$2,000/month",
      professional: "$8,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Deploy large models on mobile devices",
      "Reduce cloud inference costs by 70%",
      "Run AI at the edge with limited compute",
      "Achieve real-time performance on CPUs",
      "Scale AI deployment to millions of devices"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🗜️"
  },
  {
    id: "ai-explainability-platform",
    slug: "ai-explainability-platform",
    name: "AI Explainability Platform",
    tagline: "Transparent AI Decisions with Complete Audit Trails",
    description: "Make every AI decision explainable and auditable achieving 100% transparency for regulatory compliance, building trust, and identifying model biases.",
    category: "AI Governance",
    benefits: [
      "100% transparency in AI decisions",
      "Regulatory compliance automation",
      "Bias detection and mitigation",
      "Complete decision audit trails",
      "Build trust with stakeholders"
    ],
    features: [
      "Model Interpretation Dashboard",
      "Feature Importance Analysis",
      "Decision Path Visualization",
      "Bias Detection & Reporting",
      "Counterfactual Explanations",
      "Model Card Generation",
      "Regulatory Compliance Reports",
      "Real-Time Monitoring"
    ],
    pricing: {
      starter: "$1,500/month",
      professional: "$7,500/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Explain loan rejection decisions to customers",
      "Audit AI hiring decisions for bias",
      "Generate regulatory compliance reports",
      "Debug model predictions in real-time",
      "Build trust in AI-driven healthcare decisions"
    ],
    featured: true,
    newBadge: true,
    popularBadge: false,
    icon: "🔍"
  },
  {
    id: "federated-learning-platform",
    slug: "federated-learning-platform",
    name: "Federated Learning Platform",
    tagline: "Train AI Without Centralizing Data",
    description: "Train powerful AI models on distributed data without ever centralizing it, achieving perfect privacy preservation while maintaining 98% of centralized model accuracy.",
    category: "Privacy-Preserving AI",
    benefits: [
      "Perfect data privacy preservation",
      "Train on distributed data sources",
      "98% accuracy vs centralized training",
      "GDPR/HIPAA compliant by design",
      "Reduce data transfer costs by 95%"
    ],
    features: [
      "Secure Aggregation Protocol",
      "Differential Privacy",
      "Encrypted Model Updates",
      "Cross-Silo Federation",
      "Cross-Device Federation",
      "Byzantine-Resilient Training",
      "Model Personalization",
      "Communication Optimization"
    ],
    pricing: {
      starter: "$5,000/month",
      professional: "$20,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Train healthcare AI across hospitals",
      "Build financial models without sharing data",
      "Create personalized models on user devices",
      "Collaborate on AI across organizations",
      "Maintain data sovereignty compliance"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🔐"
  },
  {
    id: "ai-continuous-learning-platform",
    slug: "ai-continuous-learning-platform",
    name: "AI Continuous Learning Platform",
    tagline: "Models That Learn and Improve Automatically",
    description: "Deploy AI models that continuously learn from production data achieving always-fresh predictions with automated retraining, monitoring, and deployment.",
    category: "MLOps",
    benefits: [
      "Automated continuous model improvement",
      "Zero model drift over time",
      "Always-fresh predictions",
      "50% reduction in manual ML operations",
      "Automatic A/B testing and deployment"
    ],
    features: [
      "Automated Retraining Pipeline",
      "Model Performance Monitoring",
      "Data Drift Detection",
      "Online Learning Support",
      "Automated A/B Testing",
      "Gradual Rollout Deployment",
      "Feature Store Integration",
      "Experiment Tracking"
    ],
    pricing: {
      starter: "$2,500/month",
      professional: "$12,000/month",
      enterprise: "Custom Pricing"
    },
    useCases: [
      "Maintain recommendation system freshness",
      "Adapt fraud detection to new patterns",
      "Keep demand forecasting accurate",
      "Automatically improve customer service AI",
      "Continuously optimize pricing strategies"
    ],
    featured: true,
    newBadge: true,
    popularBadge: true,
    icon: "🔄"
  }
];

export const featuredServices = newServices2025.filter(s => s.featured);
export const popularServices = newServices2025.filter(s => s.popularBadge);
export const newServicesList = newServices2025.filter(s => s.newBadge);