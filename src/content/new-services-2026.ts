export interface NewService {
  id: string;
  name: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  category: string;
  pricing: string;
  link: string;
  icon: string;
  featured: boolean;
  launchDate: string;
}

export const newServices2026: NewService[] = [
  {
    id: "ai-predictive-maintenance",
    name: "AI Predictive Maintenance Platform",
    title: "⚙️ AI Predictive Maintenance: Zero Unplanned Downtime",
    description: "AI-powered predictive maintenance reducing equipment downtime by 85% and maintenance costs by 40%. Predict failures before they happen with 98% accuracy.",
    benefits: [
      "85% reduction in unplanned downtime",
      "40% lower maintenance costs",
      "98% failure prediction accuracy",
      "ROI in 6 months"
    ],
    features: [
      "Real-time equipment monitoring",
      "Predictive failure analysis",
      "Automated maintenance scheduling",
      "Asset performance optimization",
      "IoT sensor integration"
    ],
    category: "Industrial AI",
    pricing: "Starting at $5,000/month",
    link: "/services/ai-predictive-maintenance",
    icon: "⚙️",
    featured: true,
    launchDate: "2025-10-15"
  },
  {
    id: "ai-talent-acquisition",
    name: "AI Talent Acquisition Suite",
    title: "👥 AI Talent Acquisition: 10x Faster Hiring",
    description: "Revolutionize recruiting with AI matching candidates 10x faster with 95% accuracy. Reduce time-to-hire from weeks to days while improving candidate quality.",
    benefits: [
      "10x faster candidate matching",
      "95% match accuracy",
      "60% reduction in time-to-hire",
      "50% cost savings"
    ],
    features: [
      "AI-powered candidate screening",
      "Automated interview scheduling",
      "Skills assessment automation",
      "Bias-free candidate evaluation",
      "Predictive candidate success scoring"
    ],
    category: "HR Tech",
    pricing: "Starting at $3,000/month",
    link: "/services/ai-talent-acquisition",
    icon: "👥",
    featured: true,
    launchDate: "2025-10-15"
  },
  {
    id: "ai-fraud-prevention",
    name: "AI Fraud Prevention System",
    title: "🛡️ AI Fraud Prevention: 99.95% Detection Accuracy",
    description: "Next-generation fraud detection with AI achieving 99.95% accuracy and real-time prevention. Stop fraud before it happens with sub-100ms detection.",
    benefits: [
      "99.95% fraud detection accuracy",
      "Sub-100ms detection time",
      "95% reduction in false positives",
      "$5M+ annual savings"
    ],
    features: [
      "Real-time transaction monitoring",
      "Behavioral anomaly detection",
      "Multi-layer authentication",
      "Automated fraud blocking",
      "Continuous learning AI models"
    ],
    category: "FinTech Security",
    pricing: "Starting at $8,000/month",
    link: "/services/ai-fraud-prevention",
    icon: "🛡️",
    featured: true,
    launchDate: "2025-10-15"
  },
  {
    id: "ai-creative-studio",
    name: "AI Creative Studio",
    title: "🎨 AI Creative Studio: 100x Faster Content Creation",
    description: "Transform creative workflows with AI generating high-quality content 100x faster. Create videos, images, copy, and designs at unprecedented scale.",
    benefits: [
      "100x faster content creation",
      "90% cost reduction",
      "Professional quality output",
      "Unlimited creative variations"
    ],
    features: [
      "AI video generation",
      "Automated image creation",
      "Smart copywriting assistant",
      "Design automation",
      "Brand consistency enforcement"
    ],
    category: "Creative AI",
    pricing: "Starting at $2,500/month",
    link: "/services/ai-creative-studio",
    icon: "🎨",
    featured: true,
    launchDate: "2025-10-15"
  },
  {
    id: "ai-legal-research",
    name: "AI Legal Research Assistant",
    title: "⚖️ AI Legal Research: 1000x Faster Case Analysis",
    description: "Accelerate legal research 1000x with AI analyzing millions of cases instantly. Achieve comprehensive legal insights in minutes instead of weeks.",
    benefits: [
      "1000x faster research",
      "99% accuracy in case matching",
      "85% reduction in research costs",
      "Comprehensive precedent analysis"
    ],
    features: [
      "Instant case law search",
      "Automated legal document analysis",
      "Precedent recommendation engine",
      "Regulatory compliance checking",
      "Contract risk assessment"
    ],
    category: "Legal Tech",
    pricing: "Starting at $4,500/month",
    link: "/services/ai-legal-research",
    icon: "⚖️",
    featured: true,
    launchDate: "2025-10-15"
  },
  {
    id: "ai-customer-sentiment-analysis",
    name: "AI Customer Sentiment Analysis",
    title: "💬 AI Sentiment Analysis: Real-Time Customer Intelligence",
    description: "Understand customer emotions in real-time with AI achieving 97% sentiment accuracy. Transform customer feedback into actionable insights instantly.",
    benefits: [
      "97% sentiment accuracy",
      "Real-time feedback analysis",
      "300% improvement in customer satisfaction",
      "Actionable insights dashboard"
    ],
    features: [
      "Multi-channel sentiment tracking",
      "Emotion detection AI",
      "Automated response recommendations",
      "Trend analysis and forecasting",
      "Customer churn prediction"
    ],
    category: "Customer Intelligence",
    pricing: "Starting at $3,500/month",
    link: "/services/ai-customer-sentiment-analysis",
    icon: "💬",
    featured: true,
    launchDate: "2025-09-30"
  },
  {
    id: "ai-supply-chain-visibility",
    name: "AI Supply Chain Visibility Platform",
    title: "📦 AI Supply Chain: End-to-End Visibility & Optimization",
    description: "Complete supply chain visibility with AI optimizing logistics, inventory, and delivery. Achieve 99.9% on-time delivery and 35% cost reduction.",
    benefits: [
      "99.9% on-time delivery",
      "35% cost reduction",
      "Real-time tracking",
      "Predictive inventory management"
    ],
    features: [
      "Real-time supply chain monitoring",
      "Demand forecasting AI",
      "Route optimization",
      "Inventory optimization",
      "Supplier risk assessment"
    ],
    category: "Supply Chain AI",
    pricing: "Starting at $6,000/month",
    link: "/services/ai-supply-chain-visibility",
    icon: "📦",
    featured: true,
    launchDate: "2025-09-30"
  },
  {
    id: "ai-code-quality-assistant",
    name: "AI Code Quality Assistant",
    title: "💻 AI Code Quality: Automated Reviews & Optimization",
    description: "Elevate code quality with AI reviewing code, detecting bugs, and suggesting optimizations. Reduce bugs by 80% and improve performance by 40%.",
    benefits: [
      "80% fewer bugs in production",
      "40% performance improvement",
      "50% faster code reviews",
      "Automated technical debt reduction"
    ],
    features: [
      "Automated code reviews",
      "Bug prediction and prevention",
      "Performance optimization suggestions",
      "Security vulnerability detection",
      "Code style enforcement"
    ],
    category: "Developer Tools",
    pricing: "Starting at $2,000/month",
    link: "/services/ai-code-quality-assistant",
    icon: "💻",
    featured: true,
    launchDate: "2025-09-30"
  }
];

// October 3, 2025 – New services to advertise prominently on homepage
newServices2026.unshift(
  {
    id: "ai-guarded-agent-operations",
    name: "AI Guarded Agent Operations",
    title: "🛡️ AI Guarded Agent Ops: Safe Autonomy at Scale",
    description: "Deploy agentic systems with budgeted tools, HIL approvals, live evals, and instant rollback. Ship 10x faster with zero incidents.",
    benefits: [
      "10x faster feature delivery",
      "Zero Sev‑1 incidents",
      "Budgeted, auditable actions",
      "Automated rollback on regressions"
    ],
    features: [
      "Per‑tool and per‑task budgets",
      "Risk‑tiered approval workflows",
      "Live policy tests on each PR",
      "Action journals and tamper‑proof audit logs",
      "One‑click rollback"
    ],
    category: "AI Operations",
    pricing: "Custom — starts at $7,500/month",
    link: "/services/ai-guarded-agent-operations",
    icon: "🛡️",
    featured: true,
    launchDate: "2025-10-03"
  },
  {
    id: "risk-controlled-autonomy-implementation",
    name: "Risk‑Controlled Autonomy Implementation",
    title: "🤖 Risk‑Controlled Autonomy: Budgets, Approvals, Live Evals",
    description: "End‑to‑end implementation of safe autonomy: budgets, approvals, live evals, and rollback integrated into your SDLC and production ops.",
    benefits: [
      "92% reduction in risky changes reaching prod",
      "78% cycle time reduction",
      "Measurable reliability with eval KPIs",
      "Compliance‑ready audit trails"
    ],
    features: [
      "Budget enforcer and policy engine",
      "Approval SLAs and escalation",
      "PR policy tests and shadow runs",
      "Progressive delivery with canaries",
      "Automated rollback triggers"
    ],
    category: "Professional Services",
    pricing: "Engagements from $65,000",
    link: "/services/risk-controlled-autonomy-implementation",
    icon: "🤖",
    featured: true,
    launchDate: "2025-10-03"
  }
);

// Sept 30, 2025 – New service to advertise on the homepage
newServices2026.push(
  {
    id: "edge-experimentation-suite",
    name: "Edge Experimentation Suite",
    title: "🧪 Edge Experimentation Suite: Privacy‑First A/B at <100ms",
    description: "Run compliant, sub‑100ms experiments with scoped IDs, on‑device metrics, and DP noise—no PII required.",
    benefits: [
      "Compliant A/B testing without PII",
      "Sub‑100ms global latency",
      "Reliable insights with DP noise",
      "Geo/account targeting with budgets"
    ],
    features: [
      "Scoped identifier framework",
      "On‑device metrics aggregation",
      "Edge flags and geo budgets",
      "Signed configs and audit trails",
      "Automated rollback triggers"
    ],
    category: "Analytics",
    pricing: "Starting at $4,000/month",
    link: "/services/edge-experimentation-suite",
    icon: "🧪",
    featured: true,
    launchDate: "2025-09-30"
  }
);

// January 2026 – Fresh new services to advertise prominently
newServices2026.push(
  {
    id: "ai-autonomous-infrastructure-platform",
    name: "AI Autonomous Infrastructure Platform",
    title: "🏗️ AI Autonomous Infrastructure: Self-Healing, Self-Optimizing Systems",
    description: "Revolutionary infrastructure that manages itself—self-healing failures, self-optimizing performance, and self-scaling resources. Achieve 99.99% uptime with zero manual intervention.",
    benefits: [
      "99.99% uptime with zero downtime",
      "60% reduction in operational costs",
      "Self-healing infrastructure failures",
      "Automated scaling and optimization"
    ],
    features: [
      "Predictive failure detection",
      "Automated incident response",
      "Self-optimizing resource allocation",
      "Intelligent capacity planning",
      "Zero-touch deployment pipelines"
    ],
    category: "Infrastructure AI",
    pricing: "Starting at $12,000/month",
    link: "/services/ai-autonomous-infrastructure-platform",
    icon: "🏗️",
    featured: true,
    launchDate: "2026-01-15"
  },
  {
    id: "quantum-ai-acceleration-service",
    name: "Quantum AI Acceleration Service",
    title: "⚛️ Quantum AI Acceleration: 1000x Performance Boost",
    description: "Harness quantum computing power to accelerate AI training and inference by 1000x. Solve complex optimization problems in seconds instead of hours.",
    benefits: [
      "1000x faster AI training",
      "Quantum-enhanced optimization",
      "Exponential performance gains",
      "Breakthrough computational capabilities"
    ],
    features: [
      "Quantum neural network training",
      "Quantum optimization algorithms",
      "Hybrid quantum-classical computing",
      "Real-time quantum simulation",
      "Quantum machine learning models"
    ],
    category: "Quantum Computing",
    pricing: "Starting at $25,000/month",
    link: "/services/quantum-ai-acceleration-service",
    icon: "⚛️",
    featured: true,
    launchDate: "2026-01-15"
  },
  {
    id: "ai-multimodal-content-studio",
    name: "AI Multimodal Content Studio",
    title: "🎭 AI Multimodal Content Studio: Vision + Language + Audio",
    description: "Revolutionary content creation platform that combines vision, language, and audio AI to generate immersive multimedia experiences with 98% accuracy across all modalities.",
    benefits: [
      "98% accuracy across all modalities",
      "10x faster content production",
      "Unified vision-language-audio processing",
      "Immersive multimedia experiences"
    ],
    features: [
      "Cross-modal content generation",
      "Real-time audio-visual synthesis",
      "Intelligent content adaptation",
      "Multi-language support",
      "Advanced content personalization"
    ],
    category: "Creative AI",
    pricing: "Starting at $7,500/month",
    link: "/services/ai-multimodal-content-studio",
    icon: "🎭",
    featured: true,
    launchDate: "2026-01-15"
  },
  {
    id: "ai-autonomous-business-intelligence",
    name: "AI Autonomous Business Intelligence",
    title: "📊 AI Autonomous BI: Self-Driving Analytics & Insights",
    description: "Revolutionary business intelligence that automatically discovers insights, generates reports, and makes data-driven recommendations without human intervention. Achieve 95% accuracy in predictive analytics.",
    benefits: [
      "95% accuracy in predictive analytics",
      "Automatic insight discovery",
      "Real-time business recommendations",
      "Zero-touch report generation"
    ],
    features: [
      "Autonomous data analysis",
      "Predictive business modeling",
      "Intelligent report generation",
      "Natural language queries",
      "Automated anomaly detection"
    ],
    category: "Business Intelligence",
    pricing: "Starting at $6,500/month",
    link: "/services/ai-autonomous-business-intelligence",
    icon: "📊",
    featured: true,
    launchDate: "2026-01-15"
  },
  {
    id: "ai-neural-architecture-optimization",
    name: "AI Neural Architecture Optimization",
    title: "🧠 AI Neural Architecture Optimization: Auto-Designing Networks",
    description: "Revolutionary service that automatically designs optimal neural architectures 1000x faster than humans, achieving state-of-the-art performance with minimal computational resources.",
    benefits: [
      "1000x faster architecture design",
      "State-of-the-art performance",
      "Minimal computational resources",
      "Automated optimization pipelines"
    ],
    features: [
      "Automated neural architecture search",
      "Multi-objective optimization",
      "Hardware-aware design",
      "Continuous learning algorithms",
      "Performance benchmarking"
    ],
    category: "AI Engineering",
    pricing: "Starting at $9,000/month",
    link: "/services/ai-neural-architecture-optimization",
    icon: "🧠",
    featured: true,
    launchDate: "2026-01-15"
  }
);