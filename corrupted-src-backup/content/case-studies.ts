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
    id: "global-energy-digital-twin-850m",
    title:
      "Global Energy Corporation: $850M Digital Twin Transformation Success",
    company: "Global Energy Corporation (Fortune 100)",
    industry: "Energy & Utilities",
    challenge:
      "Critical infrastructure aging with $2.3B annual maintenance costs, 87 major outages in 2024, and declining customer satisfaction",
    solution:
      "Enterprise AI-Powered Digital Twin Platform with real-time monitoring, predictive analytics, and autonomous optimization across 125,000 assets",
    results: [
      "$850 million in documented value creation",
      "1,808% ROI over 3 years",
      "99.4% equipment uptime (from 87.3%)",
      "61% reduction in maintenance costs",
      "87% reduction in unplanned outages",
      "99.2% failure prediction accuracy",
    ],
    technologies: [
      "Azure IoT Hub",
      "TensorFlow",
      "Apache Kafka",
      "Azure ML",
      "Unity 3D",
      "Kubernetes",
    ],
    duration: "18 months",
    imageUrl: "/images/case-studies/energy-digital-twin.jpg",
  },
  {
    id: "fintech-ai-platform",
    title: "AI-Powered Financial Analytics Platform",
    company: "FinTech Solutions Inc.",
    industry: "Financial Services",
    challenge:
      "Manual financial analysis processes were taking 40+ hours per week and prone to human error, limiting the company's ability to provide real-time insights to clients.",
    solution:
      "Developed a comprehensive AI analytics platform with machine learning models for predictive analysis, automated report generation, and real-time dashboard monitoring.",
    results: [
      "Reduced analysis time from 40 hours to 2 hours per week",
      "Improved prediction accuracy by 85%",
      "Increased client satisfaction scores by 40%",
      "Generated $2.3M in additional revenue through better insights",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "AWS",
      "PostgreSQL",
      "Docker",
    ],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/fintech-platform.jpg",
  },
  {
    id: "healthcare-chatbot",
    title: "Healthcare AI Chatbot System",
    company: "MedCare Hospital Network",
    industry: "Healthcare",
    challenge:
      "High patient inquiry volume was overwhelming staff, leading to 30+ minute wait times for basic questions and decreased patient satisfaction.",
    solution:
      "Implemented an intelligent chatbot system with natural language processing, medical knowledge base integration, and seamless handoff to human specialists.",
    results: [
      "Reduced average response time from 30 minutes to 2 minutes",
      "Handled 70% of inquiries without human intervention",
      "Improved patient satisfaction scores by 60%",
      "Freed up 15 hours daily for staff to focus on critical cases",
    ],
    technologies: ["OpenAI GPT-4", "Node.js", "React", "MongoDB", "AWS Lambda"],
    duration: "8 weeks",
    imageUrl: "/images/case-studies/healthcare-chatbot.jpg",
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce AI Optimization Suite",
    company: "RetailMax Online",
    industry: "E-commerce",
    challenge:
      "Low conversion rates (2.1%) and high cart abandonment (78%) were significantly impacting revenue growth and customer experience.",
    solution:
      "Created an AI-driven optimization platform with personalized product recommendations, dynamic pricing, and automated email campaigns based on user behavior.",
    results: [
      "Increased conversion rates from 2.1% to 4.7%",
      "Reduced cart abandonment from 78% to 45%",
      "Boosted average order value by 35%",
      "Generated $1.8M in additional revenue in 6 months",
    ],
    technologies: [
      "Machine Learning",
      "Python",
      "Vue.js",
      "Redis",
      "Kubernetes",
    ],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/ecommerce-ai.jpg",
  },
  {
    id: "manufacturing-iot",
    title: "Smart Manufacturing IoT Platform",
    company: "Precision Manufacturing Co.",
    industry: "Manufacturing",
    challenge:
      "Equipment downtime was costing $50K per hour with no predictive maintenance capabilities, leading to unexpected failures.",
    solution:
      "Developed an IoT platform with real-time monitoring, predictive maintenance algorithms, and automated alert systems for equipment optimization.",
    results: [
      "Reduced unplanned downtime by 65%",
      "Improved equipment efficiency by 25%",
      "Saved $2.1M annually in maintenance costs",
      "Increased production output by 18%",
    ],
    technologies: [
      "IoT Sensors",
      "Edge Computing",
      "Python",
      "React",
      "Azure IoT Hub",
    ],
    duration: "16 weeks",
    imageUrl: "/images/case-studies/manufacturing-iot.jpg",
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    company: "CloudTech Solutions",
    industry: "SaaS",
    challenge:
      "Lack of comprehensive analytics made it difficult to understand user behavior, leading to high churn rates and poor product decisions.",
    solution:
      "Built a real-time analytics platform with user journey tracking, cohort analysis, and predictive churn modeling to drive data-driven decisions.",
    results: [
      "Reduced churn rate from 15% to 8%",
      "Improved user engagement by 45%",
      "Increased MRR by $500K through better retention",
      "Enabled 90% faster product decision-making",
    ],
    technologies: ["Apache Kafka", "ClickHouse", "React", "D3.js", "AWS"],
    duration: "14 weeks",
    imageUrl: "/images/case-studies/saas-analytics.jpg",
  },
  {
    id: "cybersecurity-automation",
    title: "Automated Cybersecurity Platform",
    company: "SecureCorp Financial",
    industry: "Financial Services",
    challenge:
      "Manual security monitoring was missing 30% of threats and took 6+ hours to respond to incidents, creating significant risk exposure.",
    solution:
      "Implemented an AI-powered security platform with automated threat detection, incident response, and compliance monitoring.",
    results: [
      "Reduced threat detection time from 6 hours to 15 minutes",
      "Improved threat detection accuracy to 98%",
      "Achieved 100% compliance audit success rate",
      "Prevented $3.2M in potential security breaches",
    ],
    technologies: [
      "SIEM",
      "Machine Learning",
      "Python",
      "Elasticsearch",
      "Kubernetes",
    ],
    duration: "20 weeks",
    imageUrl: "/images/case-studies/cybersecurity.jpg",
  },
  {
    id: "telco-edge-observability",
    title: "Telco Edge Observability Overhaul",
    company: "GlobalTel Communications",
    industry: "Telecommunications",
    challenge:
      "Edge outages and opaque client performance caused churn and SLA penalties.",
    solution:
      "Implemented end-to-end tracing from device to POP, latency budgets, and automated error budget alerts across 40 regions.",
    results: [
      "Cut P95 latency from 180ms to 85ms",
      "Reduced incident MTTR by 62%",
      "Decreased churn by 18% in 2 quarters",
      "$4.7M annual SLA penalty savings",
    ],
    technologies: [
      "OpenTelemetry",
      "ClickHouse",
      "Edge Workers",
      "TypeScript",
      "Kubernetes",
    ],
    duration: "18 weeks",
    imageUrl: "/images/case-studies/telco-edge.jpg",
  },
  {
    id: "enterprise-rag-rollout",
    title: "Enterprise RAG Rollout at Fortune 500",
    company: "Global Consumer Goods Co.",
    industry: "Consumer Goods",
    challenge:
      "Fragmented knowledge base and inconsistent answers from traditional search led to low CSAT and high ticket volume.",
    solution:
      "Implemented governed Retrieval-Augmented Generation with curated sources, retrieval policies, online eval canaries, and human-in-the-loop feedback loops.",
    results: [
      "Increased self-service deflection by 32%",
      "Raised CSAT from 3.7 to 4.5",
      "Cut average handle time by 28%",
      "$3.1M/year support cost savings",
    ],
    technologies: ["RAG", "Vector DB", "TypeScript", "OpenAI", "ClickHouse"],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/enterprise-rag.jpg",
  },
];
