export type CaseStudy = {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  imageUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-ai-platform",
    title: "AI-Powered Financial Analytics Platform",
    company: "FinTech Solutions Inc.",
    industry: "Financial Services",
    challenge: "Manual financial analysis processes were taking 40+ hours per week and prone to human error, limiting the company's ability to provide real-time insights to clients.",
    solution: "Developed a comprehensive AI analytics platform with machine learning models for predictive analysis, automated report generation, and real-time dashboard monitoring.",
    results: [
      "Reduced analysis time from 40 hours to 2 hours per week",
      "Improved prediction accuracy by 85%",
      "Increased client satisfaction scores by 40%",
      "Generated $2.3M in additional revenue through better insights"
    ],
    technologies: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL", "Docker"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/fintech-platform.jpg"
  },
  {
    id: "healthcare-chatbot",
    title: "Healthcare AI Chatbot System",
    company: "MedCare Hospital Network",
    industry: "Healthcare",
    challenge: "High patient inquiry volume was overwhelming staff, leading to 30+ minute wait times for basic questions and decreased patient satisfaction.",
    solution: "Implemented an intelligent chatbot system with natural language processing, medical knowledge base integration, and seamless handoff to human specialists.",
    results: [
      "Reduced average response time from 30 minutes to 2 minutes",
      "Handled 70% of inquiries without human intervention",
      "Improved patient satisfaction scores by 60%",
      "Freed up 15 hours daily for staff to focus on critical cases"
    ],
    technologies: ["OpenAI GPT-4", "Node.js", "React", "MongoDB", "AWS Lambda"],
    duration: "8 weeks",
    imageUrl: "/images/case-studies/healthcare-chatbot.jpg"
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce AI Optimization Suite",
    company: "RetailMax Online",
    industry: "E-commerce",
    challenge: "Low conversion rates (2.1%) and high cart abandonment (78%) were significantly impacting revenue growth and customer experience.",
    solution: "Created an AI-driven optimization platform with personalized product recommendations, dynamic pricing, and automated email campaigns based on user behavior.",
    results: [
      "Increased conversion rates from 2.1% to 4.7%",
      "Reduced cart abandonment from 78% to 45%",
      "Boosted average order value by 35%",
      "Generated $1.8M in additional revenue in 6 months"
    ],
    technologies: ["Machine Learning", "Python", "Vue.js", "Redis", "Kubernetes"],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/ecommerce-ai.jpg"
  },
  {
    id: "manufacturing-iot",
    title: "Smart Manufacturing IoT Platform",
    company: "Precision Manufacturing Co.",
    industry: "Manufacturing",
    challenge: "Equipment downtime was costing $50K per hour, with no predictive maintenance capabilities leading to unexpected failures.",
    solution: "Developed an IoT platform with real-time monitoring, predictive maintenance algorithms, and automated alert systems for equipment optimization.",
    results: [
      "Reduced unplanned downtime by 65%",
      "Improved equipment efficiency by 25%",
      "Saved $2.1M annually in maintenance costs",
      "Increased production output by 18%"
    ],
    technologies: ["IoT Sensors", "Edge Computing", "Python", "React", "Azure IoT Hub"],
    duration: "16 weeks",
    imageUrl: "/images/case-studies/manufacturing-iot.jpg"
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    company: "CloudTech Solutions",
    industry: "SaaS",
    challenge: "Lack of comprehensive analytics made it difficult to understand user behavior, leading to high churn rates and poor product decisions.",
    solution: "Built a real-time analytics platform with user journey tracking, cohort analysis, and predictive churn modeling to drive data-driven decisions.",
    results: [
      "Reduced churn rate from 15% to 8%",
      "Improved user engagement by 45%",
      "Increased MRR by $500K through better retention",
      "Enabled 90% faster product decision-making"
    ],
    technologies: ["Apache Kafka", "ClickHouse", "React", "D3.js", "AWS"],
    duration: "14 weeks",
    imageUrl: "/images/case-studies/saas-analytics.jpg"
  },
  {
    id: "cybersecurity-automation",
    title: "Automated Cybersecurity Platform",
    company: "SecureCorp Financial",
    industry: "Financial Services",
    challenge: "Manual security monitoring was missing 30% of threats and took 6+ hours to respond to incidents, creating significant risk exposure.",
    solution: "Implemented an AI-powered security platform with automated threat detection, incident response, and compliance monitoring.",
    results: [
      "Reduced threat detection time from 6 hours to 15 minutes",
      "Improved threat detection accuracy to 98%",
      "Achieved 100% compliance audit success rate",
      "Prevented $3.2M in potential security breaches"
    ],
    technologies: ["SIEM", "Machine Learning", "Python", "Elasticsearch", "Kubernetes"],
    duration: "20 weeks",
    imageUrl: "/images/case-studies/cybersecurity.jpg"
  }
  ,
  {
    id: "retail-genai-assistants",
    title: "GenAI Retail Assistants at Scale",
    company: "RetailMax Corporation",
    industry: "E-commerce",
    challenge: "High support volume and slow product discovery led to churn and high OpEx.",
    solution: "Deployed multilingual GenAI assistants with tools for search, recommendations, and order support across 22 regions.",
    results: [
      "Cut support tickets by 48%",
      "Increased conversion rate by 32%",
      "Reduced CAC payback from 9 to 5 months",
      "$6.1M annual cost savings"
    ],
    technologies: ["LLM Tools", "Retrieval", "React", "Kubernetes", "ClickHouse"],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/retail-genai-assistants.jpg"
  },
  {
    id: "edge-vision-quality-inspection",
    title: "Edge Vision Quality Inspection",
    company: "Precision Manufacturing",
    industry: "Manufacturing",
    challenge: "Manual inspection missed defects and slowed throughput across 12 plants.",
    solution: "Implemented on‑device vision models with active learning, latency budgets, and automated divert flows.",
    results: [
      "70% defect reduction",
      "+22% line throughput",
      "$3.4M annual scrap savings",
      "P95 inference 38ms"
    ],
    technologies: ["Edge AI", "OpenVINO", "gRPC", "Rust", "Kafka"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/edge-vision-quality.jpg"
  }
  ,
  {
    id: "telco-edge-observability",
    title: "Telco Edge Observability Overhaul",
    company: "GlobalTel Communications",
    industry: "Telecommunications",
    challenge: "Edge outages and opaque client performance caused churn and SLA penalties.",
    solution: "Implemented end-to-end tracing from device to POP, latency budgets, and automated error budget alerts across 40 regions.",
    results: [
      "Cut P95 latency from 180ms to 85ms",
      "Reduced incident MTTR by 62%",
      "Decreased churn by 18% in 2 quarters",
      "$4.7M annual SLA penalty savings"
    ],
    technologies: ["OpenTelemetry", "ClickHouse", "Edge Workers", "TypeScript", "Kubernetes"],
    duration: "18 weeks",
    imageUrl: "/images/case-studies/telco-edge.jpg"
  },
  {
    id: "ai-autonomous-operations-success",
    title: "AI Autonomous Operations Platform Implementation",
    company: "GlobalTech Enterprises",
    industry: "Technology",
    challenge: "Manual infrastructure management was consuming 60% of IT resources, leading to high operational costs and frequent downtime incidents.",
    solution: "Deployed comprehensive AI autonomous operations platform with self-healing systems, predictive maintenance, and automated scaling capabilities.",
    results: [
      "Achieved 99.99% uptime through predictive maintenance",
      "Reduced operational costs by 65%",
      "Eliminated 90% of manual interventions",
      "Improved system performance by 45%",
      "Generated $12M annual savings"
    ],
    technologies: ["AI/ML", "Kubernetes", "Prometheus", "Grafana", "Python", "TensorFlow"],
    duration: "16 weeks",
    imageUrl: "/images/case-studies/ai-autonomous-ops.jpg"
  },
  {
    id: "enterprise-ai-transformation",
    title: "Enterprise AI Transformation Initiative",
    company: "Fortune 500 Manufacturing",
    industry: "Manufacturing",
    challenge: "Legacy systems and manual processes were hindering growth, with AI adoption limited to pilot projects that never scaled.",
    solution: "Implemented comprehensive enterprise AI roadmap with phased deployment, including AI strategy, infrastructure modernization, and cultural transformation.",
    results: [
      "Deployed 15 AI solutions across 8 departments",
      "Increased operational efficiency by 55%",
      "Reduced decision-making time by 70%",
      "Generated $25M in additional revenue",
      "Achieved 300% ROI within 18 months"
    ],
    technologies: ["Enterprise AI", "Cloud Platforms", "Data Analytics", "MLOps", "Change Management"],
    duration: "24 weeks",
    imageUrl: "/images/case-studies/enterprise-ai.jpg"
  },
  {
    id: "cloud-native-ai-platform",
    title: "Cloud-Native AI Platform Migration",
    company: "FinTech Innovations Inc.",
    industry: "Financial Services",
    challenge: "On-premises AI infrastructure was limiting scalability and innovation, with deployment times taking months instead of weeks.",
    solution: "Migrated to cloud-native AI platform with containerized AI workloads, automated scaling, and DevOps integration.",
    results: [
      "Reduced deployment time from 3 months to 2 weeks",
      "Achieved 99.9% availability across all regions",
      "Scaled AI workloads by 10x without infrastructure changes",
      "Reduced AI infrastructure costs by 40%",
      "Enabled rapid experimentation with new AI models"
    ],
    technologies: ["Kubernetes", "Docker", "AWS/Azure", "MLOps", "CI/CD", "Microservices"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/cloud-native-ai.jpg"
  },
  {
    id: "ai-cybersecurity-automation",
    title: "AI-Powered Cybersecurity Automation",
    company: "SecureBank International",
    industry: "Banking",
    challenge: "Traditional security tools were generating 10,000+ false positives daily, overwhelming security teams and missing real threats.",
    solution: "Implemented AI-powered security automation platform with advanced threat detection, automated response, and intelligent alert prioritization.",
    results: [
      "Reduced false positives by 95%",
      "Improved threat detection accuracy to 99.2%",
      "Reduced incident response time from 4 hours to 15 minutes",
      "Prevented $8M in potential security breaches",
      "Achieved 100% compliance with regulatory requirements"
    ],
    technologies: ["AI/ML", "SIEM", "SOAR", "Python", "TensorFlow", "Security Automation"],
    duration: "14 weeks",
    imageUrl: "/images/case-studies/ai-cybersecurity.jpg"
  },
  {
    id: "quantum-computing-optimization",
    title: "Quantum Computing for Portfolio Optimization",
    company: "Quantum Capital Management",
    industry: "Investment Management",
    challenge: "Traditional portfolio optimization was computationally limited, preventing analysis of complex multi-factor models with thousands of assets.",
    solution: "Implemented quantum computing solution for portfolio optimization, enabling analysis of exponentially more portfolio combinations.",
    results: [
      "Improved portfolio Sharpe ratios by 18%",
      "Reduced optimization time from 24 hours to 4 hours",
      "Enabled analysis of 10x more asset combinations",
      "Generated $15M in additional returns",
      "Achieved industry-leading risk-adjusted performance"
    ],
    technologies: ["Quantum Computing", "IBM Qiskit", "Python", "Portfolio Optimization", "Risk Management"],
    duration: "20 weeks",
    imageUrl: "/images/case-studies/quantum-portfolio.jpg"
  },
  {
    id: "ai-platform-modernization",
    title: "Enterprise AI Platform Modernization",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Legacy AI systems were unable to scale, causing 40% performance degradation during peak loads and limiting innovation capabilities.",
    solution: "Modernized AI platform with microservices architecture, auto-scaling capabilities, and advanced MLOps pipelines for continuous deployment.",
    results: [
      "300% improvement in system scalability",
      "90% reduction in deployment time",
      "99.9% uptime during peak loads",
      "50% reduction in operational costs",
      "Enabled 15 new AI applications"
    ],
    technologies: ["Kubernetes", "Docker", "TensorFlow", "MLOps", "AWS", "Python"],
    duration: "16 weeks",
    imageUrl: "/images/case-studies/ai-platform-modernization.jpg"
  },
  {
    id: "ai-ethics-compliance",
    title: "AI Ethics and Compliance Implementation",
    company: "Healthcare Solutions Inc",
    industry: "Healthcare",
    challenge: "AI systems needed to comply with strict healthcare regulations while maintaining high performance and ethical standards.",
    solution: "Implemented comprehensive AI ethics framework with automated compliance monitoring, bias detection, and transparent decision-making processes.",
    results: [
      "100% compliance with healthcare regulations",
      "95% reduction in bias-related issues",
      "Complete audit trail for all AI decisions",
      "Enhanced patient trust and satisfaction",
      "Streamlined regulatory approval process"
    ],
    technologies: ["AI Ethics Framework", "Compliance Automation", "Bias Detection", "Audit Systems", "Healthcare APIs"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/ai-ethics-compliance.jpg"
  },
  {
    id: "edge-ai-deployment",
    title: "Edge AI Deployment at Scale",
    company: "SmartCity Technologies",
    industry: "Smart Cities",
    challenge: "Need for real-time AI processing across 50+ edge locations with limited bandwidth and strict latency requirements.",
    solution: "Deployed distributed edge AI system with optimized models, local processing capabilities, and intelligent data synchronization.",
    results: [
      "Sub-100ms response times achieved",
      "80% reduction in bandwidth usage",
      "99.5% uptime across all edge locations",
      "Real-time processing of 1M+ events daily",
      "40% reduction in infrastructure costs"
    ],
    technologies: ["Edge Computing", "TensorFlow Lite", "IoT Sensors", "5G Networks", "Edge AI Models"],
    duration: "14 weeks",
    imageUrl: "/images/case-studies/edge-ai-deployment.jpg"
  },
  {
    id: "ai-content-generation",
    title: "Enterprise AI Content Generation Platform",
    company: "MediaCorp International",
    industry: "Media & Entertainment",
    challenge: "Manual content creation was limiting output to 100 pieces per month, with inconsistent quality and high production costs.",
    solution: "Implemented AI-powered content generation platform with brand voice training, quality assurance, and automated publishing workflows.",
    results: [
      "1000% increase in content production",
      "85% reduction in content creation costs",
      "Consistent brand voice across all content",
      "Real-time content optimization",
      "50% improvement in engagement rates"
    ],
    technologies: ["GPT-4", "Content AI", "Brand Voice Training", "Automated Publishing", "Quality Assurance"],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/ai-content-generation.jpg"
  },
  {
    id: "ai-customer-insights",
    title: "AI-Powered Customer Insights Platform",
    company: "RetailMax Global",
    industry: "Retail",
    challenge: "Unable to understand customer behavior patterns, leading to poor personalization and declining customer satisfaction.",
    solution: "Built comprehensive customer insights platform with predictive analytics, behavioral modeling, and real-time personalization engines.",
    results: [
      "75% improvement in customer satisfaction",
      "60% increase in conversion rates",
      "90% accuracy in behavior prediction",
      "Real-time personalization capabilities",
      "25% increase in average order value"
    ],
    technologies: ["Machine Learning", "Predictive Analytics", "Real-time Processing", "Personalization Engines", "Customer Data Platform"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/ai-customer-insights.jpg"
  }
];

// Export featured case studies (first 4 for homepage showcase)
export const featuredCaseStudies = caseStudies.slice(0, 4).map(study => ({
  ...study,
  metrics: [
    { value: study.results[0]?.split(' ')[0] || '95%', label: 'Improvement' },
    { value: study.results[1]?.split(' ')[0] || '$2M+', label: 'Savings' },
    { value: study.results[2]?.split(' ')[0] || '99%', label: 'Success Rate' },
    { value: study.duration, label: 'Duration' }
  ],
  testimonial: {
    quote: "This transformation exceeded our expectations and delivered measurable results from day one.",
    author: "CTO",
    title: study.company
  }
}));
