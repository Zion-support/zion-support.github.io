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
