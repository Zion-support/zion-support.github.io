export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  featured?: boolean;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "enterprise-ai-automation",
    title: "Enterprise AI Automation Platform",
    client: "Fortune 500 Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Manual processes were costing the company $2M annually in inefficiencies. They needed to automate complex workflows while maintaining quality and compliance standards.",
    solution: "We implemented an AI-powered automation platform that combines machine learning, natural language processing, and robotic process automation to streamline operations across 15 departments.",
    results: [
      "75% reduction in manual processing time",
      "$1.8M annual cost savings",
      "99.7% accuracy in automated decision-making",
      "40% improvement in employee productivity"
    ],
    technologies: ["Machine Learning", "NLP", "RPA", "Cloud Infrastructure", "API Integration"],
    duration: "6 months",
    featured: true
  },
  {
    id: "cloud-migration-financial",
    title: "Multi-Cloud Migration Strategy",
    client: "Regional Financial Services Firm",
    industry: "Financial Services",
    challenge: "Legacy on-premises infrastructure was limiting scalability and innovation. The company needed to migrate to the cloud while maintaining strict security and compliance requirements.",
    solution: "We designed and executed a comprehensive multi-cloud migration strategy using AWS, Azure, and Google Cloud, implementing zero-downtime migration patterns and advanced security controls.",
    results: [
      "60% reduction in infrastructure costs",
      "99.99% uptime achieved",
      "50% faster application deployment",
      "Full compliance with financial regulations"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Security Controls"],
    duration: "8 months",
    featured: true
  },
  {
    id: "ai-customer-service",
    title: "AI-Powered Customer Service Transformation",
    client: "E-commerce Retailer",
    industry: "Retail",
    challenge: "Customer service volume increased 300% during peak seasons, leading to long wait times and decreased customer satisfaction scores.",
    solution: "We deployed an intelligent customer service platform featuring AI chatbots, sentiment analysis, and automated ticket routing to handle 80% of inquiries without human intervention.",
    results: [
      "80% reduction in response time",
      "85% customer satisfaction improvement",
      "60% decrease in support staff workload",
      "24/7 multilingual support capability"
    ],
    technologies: ["Natural Language Processing", "Machine Learning", "Sentiment Analysis", "API Integration", "CRM Systems"],
    duration: "4 months",
    featured: true
  },
  {
    id: "data-analytics-platform",
    title: "Real-Time Data Analytics Platform",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    challenge: "The organization needed real-time insights from patient data to improve care quality and operational efficiency while maintaining HIPAA compliance.",
    solution: "We built a secure, real-time data analytics platform that processes patient data streams and provides actionable insights to healthcare providers through intuitive dashboards.",
    results: [
      "Real-time patient monitoring capabilities",
      "30% improvement in diagnosis accuracy",
      "25% reduction in readmission rates",
      "Full HIPAA compliance maintained"
    ],
    technologies: ["Apache Kafka", "Apache Spark", "Machine Learning", "Real-time Processing", "Healthcare APIs", "Security Encryption"],
    duration: "7 months",
    featured: false
  },
  {
    id: "cybersecurity-implementation",
    title: "Zero Trust Security Architecture",
    client: "Government Agency",
    industry: "Government",
    challenge: "The agency needed to modernize their security posture to protect against sophisticated cyber threats while enabling remote work capabilities.",
    solution: "We implemented a comprehensive zero trust security architecture with advanced threat detection, identity management, and network segmentation to protect critical government systems.",
    results: [
      "99.9% reduction in security incidents",
      "Complete network visibility achieved",
      "Secure remote access for 10,000+ employees",
      "Full compliance with government security standards"
    ],
    technologies: ["Zero Trust Architecture", "Identity Management", "Threat Detection", "Network Segmentation", "SIEM", "Endpoint Protection"],
    duration: "10 months",
    featured: false
  },
  {
    id: "micro-saas-platform",
    title: "Micro SaaS Platform Development",
    client: "Technology Startup",
    industry: "Technology",
    challenge: "A startup needed to quickly launch a scalable SaaS platform to serve multiple market segments with different feature requirements.",
    solution: "We designed and built a microservices-based SaaS platform with modular architecture, enabling rapid feature development and independent scaling of different service components.",
    results: [
      "3x faster time-to-market for new features",
      "99.95% platform uptime",
      "Support for 50,000+ concurrent users",
      "Modular architecture enabling rapid expansion"
    ],
    technologies: ["Microservices", "Kubernetes", "API Gateway", "Container Orchestration", "Cloud Infrastructure", "CI/CD Pipelines"],
    duration: "5 months",
    featured: true
  },
  {
    id: "ai-workflow-optimization",
    title: "AI-Driven Workflow Optimization",
    client: "Logistics Company",
    industry: "Logistics",
    challenge: "Route optimization and inventory management processes were inefficient, leading to increased costs and delivery delays.",
    solution: "We implemented AI-powered optimization algorithms that analyze traffic patterns, weather data, and inventory levels to automatically optimize routes and inventory management.",
    results: [
      "35% reduction in fuel costs",
      "20% improvement in delivery times",
      "15% increase in customer satisfaction",
      "Automated inventory management"
    ],
    technologies: ["Machine Learning", "Optimization Algorithms", "Real-time Data Processing", "IoT Integration", "Predictive Analytics"],
    duration: "6 months",
    featured: false
  },
  {
    id: "digital-transformation-consulting",
    title: "Enterprise Digital Transformation",
    client: "Global Manufacturing Corporation",
    industry: "Manufacturing",
    challenge: "The company needed to modernize their entire technology stack and business processes to compete in the digital economy.",
    solution: "We provided comprehensive digital transformation consulting, implementing cloud infrastructure, AI solutions, and modern development practices across all business units.",
    results: [
      "40% improvement in operational efficiency",
      "50% reduction in IT maintenance costs",
      "Complete modernization of technology stack",
      "Enhanced competitive positioning in market"
    ],
    technologies: ["Cloud Migration", "AI Implementation", "DevOps", "Modern Development Practices", "Process Automation", "Data Analytics"],
    duration: "12 months",
    featured: true
  }
];