export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  subcategory: string;
  tags: string[];
  featured: boolean;
  newBadge: boolean;
  trending: boolean;
  pricing: {
    model: 'fixed' | 'hourly' | 'project' | 'subscription';
    startingPrice: string;
    currency: string;
    description: string;
  };
  benefits: string[];
  features: string[];
  useCases: string[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  prerequisites: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  caseStudy?: {
    company: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  testimonials: {
    quote: string;
    author: string;
    company: string;
    role: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  image: string;
  icon: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const newServices2025: Service[] = [
  {
    id: "ai-autonomous-infrastructure-platform",
    title: "AI Autonomous Infrastructure Platform",
    description: "Revolutionary self-managing infrastructure that automatically heals, optimizes, and scales your systems without human intervention. Our AI-powered platform monitors, predicts, and resolves issues before they impact your business.",
    shortDescription: "Self-healing, self-optimizing infrastructure powered by AI",
    category: "AI Solutions",
    subcategory: "Infrastructure Automation",
    tags: ["Autonomous Infrastructure", "AI Operations", "Self-Healing", "Predictive Maintenance", "Zero-Touch Operations"],
    featured: true,
    newBadge: true,
    trending: true,
    pricing: {
      model: "subscription",
      startingPrice: "$5,000",
      currency: "USD",
      description: "Per month for up to 100 servers"
    },
    benefits: [
      "85% reduction in operational costs",
      "99.99% uptime guarantee",
      "Sub-minute incident response",
      "Zero-touch operations",
      "Predictive issue resolution",
      "Automatic scaling and optimization"
    ],
    features: [
      "AI-powered anomaly detection",
      "Automated incident response",
      "Predictive maintenance scheduling",
      "Intelligent resource allocation",
      "Self-healing system capabilities",
      "Real-time performance optimization",
      "Automated backup and recovery",
      "Compliance monitoring and reporting"
    ],
    useCases: [
      "Enterprise cloud infrastructure management",
      "Multi-cloud environment optimization",
      "DevOps pipeline automation",
      "Disaster recovery automation",
      "Compliance and security monitoring",
      "Cost optimization and resource management"
    ],
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Time Series Analysis",
      "Anomaly Detection",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Prometheus",
      "Grafana",
      "ELK Stack"
    ],
    deliverables: [
      "AI Autonomous Infrastructure Platform",
      "Custom monitoring dashboards",
      "Automated response playbooks",
      "Performance optimization reports",
      "Training and documentation",
      "24/7 support and monitoring"
    ],
    timeline: "4-6 weeks",
    prerequisites: [
      "Cloud infrastructure (AWS, Azure, or GCP)",
      "Container orchestration (Kubernetes preferred)",
      "Monitoring tools (Prometheus, Grafana)",
      "API access for integration",
      "Dedicated technical team for implementation"
    ],
    metrics: [
      {
        label: "Cost Reduction",
        value: "85%",
        description: "Average operational cost savings"
      },
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "System availability achieved"
      },
      {
        label: "Response Time",
        value: "< 15 seconds",
        description: "Issue detection and resolution"
      },
      {
        label: "Manual Tasks",
        value: "95%",
        description: "Reduction in manual operations"
      }
    ],
    caseStudy: {
      company: "TechCorp Global",
      industry: "Financial Services",
      challenge: "Managing complex multi-cloud infrastructure with 99.5% uptime requirements and strict compliance needs",
      solution: "Implemented AI Autonomous Infrastructure Platform with predictive maintenance and automated compliance monitoring",
      results: [
        "99.99% uptime achieved (exceeded 99.5% requirement)",
        "85% reduction in operational costs",
        "Zero compliance violations",
        "95% reduction in manual tasks",
        "Sub-minute incident response time"
      ]
    },
    testimonials: [
      {
        quote: "The AI Autonomous Infrastructure Platform transformed our operations completely. We went from constant firefighting to zero-touch operations. Our uptime is now 99.99% and costs are down 85%.",
        author: "Michael Rodriguez",
        company: "TechCorp Global",
        role: "CTO"
      },
      {
        quote: "This is the future of infrastructure management. The system predicts and prevents issues before they happen. Our team can now focus on innovation instead of maintenance.",
        author: "Sarah Chen",
        company: "CloudScale Enterprises",
        role: "VP of Engineering"
      }
    ],
    faqs: [
      {
        question: "How does the AI predict infrastructure issues?",
        answer: "Our AI analyzes historical data, real-time metrics, and system behavior patterns to identify anomalies and predict potential issues before they occur. It uses machine learning models trained on thousands of infrastructure incidents."
      },
      {
        question: "What happens if the AI makes a wrong decision?",
        answer: "The system includes safety mechanisms and human oversight capabilities. All automated actions are logged and can be reviewed. Critical changes require approval, and the system learns from corrections to improve future decisions."
      },
      {
        question: "How long does implementation take?",
        answer: "Implementation typically takes 4-6 weeks, depending on infrastructure complexity. This includes platform setup, integration with existing tools, custom configuration, and team training."
      },
      {
        question: "What cloud platforms are supported?",
        answer: "We support AWS, Azure, Google Cloud, and hybrid environments. The platform can manage multi-cloud deployments and provide unified visibility across all environments."
      }
    ],
    image: "/images/ai-autonomous-infrastructure.jpg",
    icon: "Zap",
    seo: {
      metaTitle: "AI Autonomous Infrastructure Platform - Self-Managing Systems | Zion Tech",
      metaDescription: "Revolutionary AI-powered infrastructure that automatically heals, optimizes, and scales. Achieve 99.99% uptime with 85% cost reduction. Zero-touch operations.",
      keywords: ["AI autonomous infrastructure", "self-healing systems", "predictive maintenance", "infrastructure automation", "zero-touch operations"]
    },
    slug: "ai-autonomous-infrastructure-platform"
  },
  {
    id: "quantum-ai-hybrid-computing",
    title: "Quantum-AI Hybrid Computing Solutions",
    description: "Breakthrough quantum computing solutions combined with AI to solve previously impossible problems. Our quantum-AI hybrid platform delivers exponential speedups for optimization, machine learning, and complex simulations.",
    shortDescription: "Quantum computing meets AI for exponential problem-solving power",
    category: "Quantum Computing",
    subcategory: "Hybrid AI Solutions",
    tags: ["Quantum Computing", "Quantum AI", "Optimization", "Machine Learning", "Quantum Algorithms"],
    featured: true,
    newBadge: true,
    trending: true,
    pricing: {
      model: "project",
      startingPrice: "$100,000",
      currency: "USD",
      description: "For quantum-AI hybrid implementation projects"
    },
    benefits: [
      "1000x faster optimization algorithms",
      "Solve NP-hard problems efficiently",
      "Exponential speedup for machine learning",
      "Breakthrough in complex simulations",
      "Quantum advantage in specific domains",
      "Future-proof technology investment"
    ],
    features: [
      "Quantum machine learning algorithms",
      "Quantum optimization solvers",
      "Hybrid classical-quantum workflows",
      "Quantum circuit optimization",
      "Quantum error correction",
      "Quantum simulation capabilities",
      "Quantum neural networks",
      "Quantum data analysis tools"
    ],
    useCases: [
      "Portfolio optimization in finance",
      "Drug discovery and molecular simulation",
      "Supply chain optimization",
      "Cryptographic security enhancement",
      "Climate modeling and simulation",
      "Machine learning acceleration"
    ],
    technologies: [
      "Quantum Computing",
      "Quantum Machine Learning",
      "Qiskit",
      "Cirq",
      "PennyLane",
      "TensorFlow Quantum",
      "Quantum Annealing",
      "Quantum Optimization"
    ],
    deliverables: [
      "Quantum-AI Hybrid Platform",
      "Custom quantum algorithms",
      "Performance benchmarks",
      "Integration with existing systems",
      "Quantum computing training",
      "Ongoing optimization and support"
    ],
    timeline: "8-12 weeks",
    prerequisites: [
      "High-performance computing environment",
      "Quantum computing access (cloud or on-premises)",
      "Specialized problem domains",
      "Quantum computing expertise or training",
      "Significant computational resources"
    ],
    metrics: [
      {
        label: "Speed Improvement",
        value: "1000x",
        description: "Faster than classical algorithms"
      },
      {
        label: "Problem Complexity",
        value: "Exponential",
        description: "Handle NP-hard problems"
      },
      {
        label: "Accuracy Gain",
        value: "40%",
        description: "Better optimization results"
      },
      {
        label: "Cost Efficiency",
        value: "60%",
        description: "Reduction in computational costs"
      }
    ],
    caseStudy: {
      company: "Quantum Finance Corp",
      industry: "Financial Services",
      challenge: "Portfolio optimization for 10,000+ assets with complex constraints and real-time requirements",
      solution: "Implemented quantum-AI hybrid optimization algorithms for portfolio management",
      results: [
        "1000x faster portfolio optimization",
        "40% improvement in risk-adjusted returns",
        "Real-time optimization capabilities",
        "Handled 10,000+ asset portfolios",
        "60% reduction in computational costs"
      ]
    },
    testimonials: [
      {
        quote: "Quantum-AI hybrid computing opened up possibilities we never thought possible. We're solving optimization problems that were computationally infeasible before.",
        author: "Dr. James Wilson",
        company: "Quantum Finance Corp",
        role: "Chief Quantum Officer"
      },
      {
        quote: "The speedup is incredible. What used to take hours now takes seconds. This is truly revolutionary technology.",
        author: "Dr. Lisa Park",
        company: "BioTech Innovations",
        role: "Head of Computational Biology"
      }
    ],
    faqs: [
      {
        question: "What problems can quantum-AI hybrid computing solve?",
        answer: "Quantum-AI hybrid computing excels at optimization problems, machine learning acceleration, complex simulations, and cryptographic applications. It's particularly powerful for NP-hard problems that are intractable for classical computers."
      },
      {
        question: "How mature is quantum computing technology?",
        answer: "While still emerging, quantum computing has reached practical viability for specific applications. Our hybrid approach combines quantum advantages with classical computing reliability for production-ready solutions."
      },
      {
        question: "What's the learning curve for quantum computing?",
        answer: "We provide comprehensive training and support to help your team understand quantum concepts and implement quantum-AI solutions. Most teams are productive within 2-3 months of training."
      },
      {
        question: "How do you ensure quantum computing reliability?",
        answer: "We use hybrid approaches that combine quantum computing with classical verification and error correction. This ensures reliable results while maintaining quantum advantages."
      }
    ],
    image: "/images/quantum-ai-hybrid-computing.jpg",
    icon: "Atom",
    seo: {
      metaTitle: "Quantum-AI Hybrid Computing Solutions | Breakthrough Problem Solving",
      metaDescription: "Revolutionary quantum computing combined with AI for exponential speedups. Solve NP-hard problems 1000x faster with our quantum-AI hybrid platform.",
      keywords: ["quantum AI", "quantum computing", "quantum machine learning", "quantum optimization", "hybrid quantum systems"]
    },
    slug: "quantum-ai-hybrid-computing"
  },
  {
    id: "zero-trust-security-ai",
    title: "Zero Trust Security with AI",
    description: "Advanced AI-powered zero trust security architecture that continuously monitors, authenticates, and authorizes every user and device. Our system provides 360-degree security visibility with automated threat detection and response.",
    shortDescription: "AI-powered zero trust security for complete protection",
    category: "Cybersecurity",
    subcategory: "Zero Trust Architecture",
    tags: ["Zero Trust", "AI Security", "Threat Detection", "Identity Management", "Network Security"],
    featured: true,
    newBadge: true,
    trending: true,
    pricing: {
      model: "subscription",
      startingPrice: "$3,000",
      currency: "USD",
      description: "Per month for up to 1,000 users"
    },
    benefits: [
      "90% reduction in security incidents",
      "Continuous authentication and authorization",
      "AI-powered threat detection",
      "Automated incident response",
      "Complete network visibility",
      "Compliance automation"
    ],
    features: [
      "AI-driven threat detection",
      "Continuous user verification",
      "Micro-segmentation",
      "Behavioral analytics",
      "Automated policy enforcement",
      "Real-time risk assessment",
      "Identity and access management",
      "Network traffic analysis"
    ],
    useCases: [
      "Enterprise network security",
      "Remote workforce protection",
      "Cloud security implementation",
      "Compliance and audit preparation",
      "Threat hunting and investigation",
      "Incident response automation"
    ],
    technologies: [
      "Machine Learning",
      "Behavioral Analytics",
      "Identity Management",
      "Network Segmentation",
      "SIEM Integration",
      "SOAR Platforms",
      "Multi-Factor Authentication",
      "Blockchain Security"
    ],
    deliverables: [
      "Zero Trust Security Platform",
      "Security policy framework",
      "Implementation roadmap",
      "Security monitoring dashboards",
      "Incident response playbooks",
      "Compliance documentation"
    ],
    timeline: "6-8 weeks",
    prerequisites: [
      "Existing network infrastructure",
      "Identity management system",
      "Security monitoring tools",
      "Dedicated security team",
      "Executive support and budget"
    ],
    metrics: [
      {
        label: "Security Incidents",
        value: "90%",
        description: "Reduction in security breaches"
      },
      {
        label: "Response Time",
        value: "< 5 minutes",
        description: "Threat detection and response"
      },
      {
        label: "False Positives",
        value: "85%",
        description: "Reduction in false alarms"
      },
      {
        label: "Compliance Score",
        value: "100%",
        description: "Regulatory compliance achieved"
      }
    ],
    caseStudy: {
      company: "SecureBank International",
      industry: "Banking",
      challenge: "Protecting sensitive financial data across distributed networks with strict regulatory requirements",
      solution: "Implemented AI-powered zero trust security with continuous monitoring and automated threat response",
      results: [
        "90% reduction in security incidents",
        "100% compliance with financial regulations",
        "Sub-5-minute threat response time",
        "85% reduction in false positives",
        "Complete network visibility achieved"
      ]
    },
    testimonials: [
      {
        quote: "Zero Trust with AI gave us the security posture we needed for our distributed workforce. Incidents dropped by 90% and compliance is now automated.",
        author: "Robert Kim",
        company: "SecureBank International",
        role: "CISO"
      },
      {
        quote: "The AI-powered threat detection is incredible. It catches threats we never would have seen and responds automatically. Our security team can focus on strategy instead of firefighting.",
        author: "Amanda Foster",
        company: "TechSecure Corp",
        role: "Security Director"
      }
    ],
    faqs: [
      {
        question: "How does AI enhance zero trust security?",
        answer: "AI analyzes user behavior, network traffic, and system events to detect anomalies and threats in real-time. It continuously adapts security policies based on risk assessment and automatically responds to threats."
      },
      {
        question: "What's the difference between traditional and AI-powered zero trust?",
        answer: "Traditional zero trust relies on static policies and manual monitoring. AI-powered zero trust continuously learns and adapts, providing dynamic threat detection and automated response capabilities."
      },
      {
        question: "How long does zero trust implementation take?",
        answer: "Implementation typically takes 6-8 weeks, depending on network complexity and organization size. This includes assessment, planning, deployment, and team training."
      },
      {
        question: "Can zero trust work with existing security tools?",
        answer: "Yes, our zero trust platform integrates with existing SIEM, identity management, and security tools. We provide APIs and connectors for seamless integration."
      }
    ],
    image: "/images/zero-trust-security-ai.jpg",
    icon: "Shield",
    seo: {
      metaTitle: "Zero Trust Security with AI | Advanced Threat Protection",
      metaDescription: "AI-powered zero trust security architecture with 90% incident reduction. Continuous monitoring, automated threat detection, and compliance automation.",
      keywords: ["zero trust security", "AI security", "threat detection", "network security", "cybersecurity automation"]
    },
    slug: "zero-trust-security-ai"
  },
  {
    id: "ai-governance-scorecards",
    title: "AI Governance Scorecards & Policy Framework",
    description: "Comprehensive AI governance framework with automated scorecards, policy management, and compliance monitoring. Ensure your AI systems are ethical, compliant, and aligned with business objectives.",
    shortDescription: "Automated AI governance with scorecards and policy management",
    category: "AI Governance",
    subcategory: "Compliance & Ethics",
    tags: ["AI Governance", "Compliance", "Ethics", "Policy Management", "Risk Assessment"],
    featured: true,
    newBadge: true,
    trending: false,
    pricing: {
      model: "subscription",
      startingPrice: "$2,500",
      currency: "USD",
      description: "Per month for up to 50 AI models"
    },
    benefits: [
      "100% regulatory compliance",
      "Automated policy enforcement",
      "Real-time risk assessment",
      "Ethical AI implementation",
      "Audit-ready documentation",
      "Stakeholder transparency"
    ],
    features: [
      "Automated governance scorecards",
      "Policy management framework",
      "Compliance monitoring",
      "Risk assessment tools",
      "Ethics evaluation metrics",
      "Audit trail and reporting",
      "Stakeholder dashboards",
      "Regulatory updates tracking"
    ],
    useCases: [
      "Enterprise AI governance",
      "Regulatory compliance management",
      "AI ethics implementation",
      "Risk assessment and mitigation",
      "Audit preparation and documentation",
      "Stakeholder reporting and transparency"
    ],
    technologies: [
      "Machine Learning",
      "Natural Language Processing",
      "Risk Assessment Models",
      "Compliance Automation",
      "Policy Management Systems",
      "Audit Trail Systems",
      "Dashboard and Reporting",
      "API Integration"
    ],
    deliverables: [
      "AI Governance Platform",
      "Custom policy framework",
      "Compliance scorecards",
      "Risk assessment reports",
      "Audit documentation",
      "Training and support"
    ],
    timeline: "4-6 weeks",
    prerequisites: [
      "Existing AI/ML systems",
      "Compliance requirements identification",
      "Stakeholder buy-in",
      "Dedicated governance team",
      "Executive sponsorship"
    ],
    metrics: [
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Regulatory compliance achieved"
      },
      {
        label: "Risk Reduction",
        value: "80%",
        description: "AI-related risk mitigation"
      },
      {
        label: "Policy Adherence",
        value: "95%",
        description: "Automated policy compliance"
      },
      {
        label: "Audit Readiness",
        value: "100%",
        description: "Documentation completeness"
      }
    ],
    caseStudy: {
      company: "EthicalAI Corp",
      industry: "Healthcare",
      challenge: "Ensuring AI systems comply with healthcare regulations and ethical standards across multiple departments",
      solution: "Implemented comprehensive AI governance framework with automated scorecards and policy management",
      results: [
        "100% compliance with healthcare regulations",
        "80% reduction in AI-related risks",
        "95% automated policy adherence",
        "Complete audit readiness",
        "Stakeholder confidence increased"
      ]
    },
    testimonials: [
      {
        quote: "AI Governance Scorecards gave us the framework we needed to ensure our AI systems are ethical and compliant. We're now audit-ready and our stakeholders have complete confidence.",
        author: "Dr. Jennifer Martinez",
        company: "EthicalAI Corp",
        role: "AI Ethics Officer"
      },
      {
        quote: "The automated scorecards and policy management saved us months of manual work. We can now focus on AI innovation while ensuring compliance.",
        author: "David Thompson",
        company: "GovernanceFirst Inc",
        role: "Chief Compliance Officer"
      }
    ],
    faqs: [
      {
        question: "What regulations does the AI governance framework cover?",
        answer: "Our framework covers GDPR, CCPA, HIPAA, SOX, and other major regulations. It's designed to be adaptable to new regulations as they emerge and can be customized for specific industry requirements."
      },
      {
        question: "How do the AI governance scorecards work?",
        answer: "Scorecards automatically evaluate AI systems against governance criteria including ethics, compliance, risk, and performance. They provide real-time scoring and recommendations for improvement."
      },
      {
        question: "Can the framework be customized for our industry?",
        answer: "Yes, the framework is designed to be industry-agnostic and can be customized for specific requirements, regulations, and business objectives. We work with you to tailor it to your needs."
      },
      {
        question: "What's the ROI of AI governance?",
        answer: "AI governance typically provides ROI through risk reduction, compliance cost savings, and improved stakeholder confidence. Most organizations see positive ROI within 6-12 months of implementation."
      }
    ],
    image: "/images/ai-governance-scorecards.jpg",
    icon: "ClipboardCheck",
    seo: {
      metaTitle: "AI Governance Scorecards & Policy Framework | Compliance Automation",
      metaDescription: "Comprehensive AI governance framework with automated scorecards, policy management, and compliance monitoring. Ensure ethical, compliant AI systems.",
      keywords: ["AI governance", "AI compliance", "AI ethics", "policy management", "risk assessment"]
    },
    slug: "ai-governance-scorecards"
  }
  ,
  {
    id: "ai-risk-budgeted-runbooks",
    title: "AI Risk‑Budgeted Runbooks",
    description: "Operational runbooks with explicit risk budgets, approvals, and automated guardrails to ship safe AI automation fast.",
    shortDescription: "Ship automation with explicit risk budgets and approvals",
    category: "AI Operations",
    subcategory: "Governed Automation",
    tags: ["Risk Budgets", "Automation", "Approvals", "Guardrails"],
    featured: true,
    newBadge: true,
    trending: true,
    pricing: {
      model: "subscription",
      startingPrice: "$1,500",
      currency: "USD",
      description: "Per month for up to 10 automated runbooks"
    },
    benefits: [
      "Faster approvals with budget thresholds",
      "Reduced incident impact",
      "Clear accountability and audit trails"
    ],
    features: [
      "Policy‑as‑code approvals",
      "Budget thresholds and alerts",
      "Automated rollback actions",
      "Audit logs and reports"
    ],
    useCases: [
      "Safe deployment automation",
      "Production data fixes",
      "Cost‑aware inference routing"
    ],
    technologies: ["OPA", "GitOps", "CI/CD", "Observability"],
    deliverables: [
      "Runbook templates",
      "Approval workflows",
      "Budget policy library"
    ],
    timeline: "2-4 weeks",
    prerequisites: ["Access to CI/CD", "Monitoring", "Approval owners"],
    metrics: [
      { label: "Incident Impact", value: "−60%", description: "Reduced impact from changes" },
      { label: "Approval Lead Time", value: "−70%", description: "Faster approvals" }
    ],
    image: "/images/ai-risk-budgeted-runbooks.jpg",
    icon: "ClipboardCheck",
    seo: {
      metaTitle: "AI Risk‑Budgeted Runbooks",
      metaDescription: "Governed runbooks with risk budgets and approvals to ship automation safely.",
      keywords: ["risk budgets", "approvals", "ai automation", "governance"]
    },
    testimonials: [],
    faqs: [],
    slug: "ai-risk-budgeted-runbooks"
  }
];

export const featuredServices = newServices2025.filter(service => service.featured);
export const trendingServices = newServices2025.filter(service => service.trending);
export const latestServices = newServices2025
  .sort((a, b) => (a.newBadge ? 1 : 0) - (b.newBadge ? 1 : 0))
  .slice(0, 6);