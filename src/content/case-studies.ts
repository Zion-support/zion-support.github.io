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
    id: "ai-sustainability-transformation-2026",
    title: "AI Sustainability Transformation 2026: Carbon-Neutral Operations",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Massive AI infrastructure consuming 45MW of power daily, generating 35,000 tons of CO2 annually, with energy costs exceeding $18M per year and mounting regulatory pressure for carbon neutrality.",
    solution: "Implemented comprehensive AI sustainability transformation including solar-powered data centers, optimized algorithms, carbon offset programs, and intelligent automation systems across 25 facilities.",
    results: [
      "Achieved 100% carbon neutral operations",
      "Reduced energy consumption by 80%",
      "Generated $10M total ROI",
      "Achieved 95% automation efficiency",
      "Eliminated 35,000 tons CO2 annually"
    ],
    technologies: ["Solar Energy", "AI Optimization", "Carbon Offsets", "Smart Manufacturing", "Predictive Analytics"],
    duration: "18 months",
    imageUrl: "/images/case-studies/ai-sustainability-transformation-2026.jpg"
  },
  {
    id: "ai-quantum-optimization-2026",
    title: "AI Quantum Optimization 2026: 1000x Speed Improvement",
    company: "FinanceCorp International",
    industry: "Financial Services",
    challenge: "Portfolio optimization for $50B in assets taking 8 hours on classical computers, limiting real-time trading opportunities and costing $2M annually in suboptimal allocations.",
    solution: "Implemented quantum-enhanced AI optimization system using variational quantum algorithms with hybrid quantum-classical processing for real-time portfolio optimization and decision making.",
    results: [
      "Achieved 1000x speed improvement (8 hours → 30 seconds)",
      "Generated $12M additional annual returns",
      "Improved optimization accuracy by 95%",
      "Enabled real-time portfolio rebalancing",
      "Reduced portfolio risk by 40%"
    ],
    technologies: ["Quantum Computing", "Variational Quantum Algorithms", "AI/ML", "Portfolio Optimization", "Real-time Analytics"],
    duration: "12 months",
    imageUrl: "/images/case-studies/ai-quantum-optimization-2026.jpg"
  },
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
    id: "ai-autonomous-vehicles-transformation",
    title: "Autonomous Vehicle AI Platform Implementation",
    company: "FutureMobility Corp",
    industry: "Automotive",
    challenge: "Traditional vehicle testing was expensive, time-consuming, and couldn't simulate all real-world scenarios, limiting autonomous vehicle development speed.",
    solution: "Implemented AI-powered autonomous vehicle platform with advanced perception systems, decision-making algorithms, and comprehensive simulation environments.",
    results: [
      "Reduced vehicle testing costs by 70% through virtual simulation",
      "Improved safety scores by 95% with advanced AI perception",
      "Accelerated development timeline from 5 years to 2 years",
      "Achieved Level 4 autonomy certification ahead of schedule",
      "Generated $50M in cost savings and faster time-to-market"
    ],
    technologies: ["Computer Vision", "Deep Learning", "Simulation", "Edge Computing", "Sensor Fusion"],
    duration: "18 months",
    imageUrl: "/images/case-studies/autonomous-vehicles-ai.jpg"
  },
  {
    id: "ai-healthcare-diagnostics-platform",
    title: "AI-Powered Healthcare Diagnostics Platform",
    company: "MedTech Innovations",
    industry: "Healthcare",
    challenge: "Manual medical diagnosis was slow and inconsistent, with radiologists struggling to keep up with increasing patient volumes and complex cases.",
    solution: "Deployed comprehensive AI diagnostics platform with medical imaging analysis, predictive diagnostics, and clinical decision support systems.",
    results: [
      "Improved diagnostic accuracy by 40% across all specialties",
      "Reduced diagnosis time from 48 hours to 4 hours",
      "Detected early-stage diseases with 98% accuracy",
      "Freed up 60% of radiologist time for complex cases",
      "Saved $15M annually in healthcare costs"
    ],
    technologies: ["Medical AI", "Computer Vision", "Deep Learning", "DICOM", "Clinical Workflows"],
    duration: "14 months",
    imageUrl: "/images/case-studies/healthcare-ai-diagnostics.jpg"
  },
  {
    id: "ai-smart-city-transformation",
    title: "Smart City AI Integration Platform",
    company: "UrbanTech Solutions",
    industry: "Smart Cities",
    challenge: "City operations were inefficient with manual processes, poor resource allocation, and limited data-driven decision making affecting citizen services.",
    solution: "Implemented comprehensive smart city AI platform with traffic optimization, resource management, citizen services automation, and predictive analytics.",
    results: [
      "Reduced traffic congestion by 35% through intelligent routing",
      "Improved emergency response times by 50%",
      "Optimized energy consumption by 25% across city infrastructure",
      "Enhanced citizen satisfaction scores by 60%",
      "Generated $100M in operational cost savings over 3 years"
    ],
    technologies: ["IoT", "Edge Computing", "Predictive Analytics", "Real-time Processing", "Citizen Portals"],
    duration: "20 months",
    imageUrl: "/images/case-studies/smart-city-ai.jpg"
  },
  {
    id: "ai-financial-fraud-detection",
    title: "Advanced AI Fraud Detection System",
    company: "SecureBank International",
    industry: "Banking",
    challenge: "Traditional fraud detection was generating 95% false positives, missing real threats, and causing customer friction with legitimate transactions.",
    solution: "Deployed advanced AI fraud detection system with machine learning models, behavioral analysis, and real-time risk scoring for all transactions.",
    results: [
      "Reduced false positives by 90% while maintaining detection accuracy",
      "Improved fraud detection rate to 99.5%",
      "Reduced customer friction by 75% for legitimate transactions",
      "Prevented $200M in fraudulent transactions annually",
      "Achieved 40% reduction in fraud investigation costs"
    ],
    technologies: ["Machine Learning", "Behavioral Analytics", "Real-time Processing", "Risk Scoring", "API Integration"],
    duration: "12 months",
    imageUrl: "/images/case-studies/financial-fraud-ai.jpg"
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI-Driven Supply Chain Optimization",
    company: "GlobalLogistics Corp",
    industry: "Logistics",
    challenge: "Supply chain disruptions and inefficiencies were costing $50M annually, with poor demand forecasting and suboptimal inventory management.",
    solution: "Implemented AI-powered supply chain optimization platform with demand forecasting, inventory optimization, route planning, and risk management.",
    results: [
      "Improved demand forecasting accuracy by 85%",
      "Reduced inventory costs by 30% through optimized stock levels",
      "Decreased supply chain disruptions by 70%",
      "Optimized delivery routes saving $12M in fuel costs",
      "Achieved 99.5% on-time delivery performance"
    ],
    technologies: ["Predictive Analytics", "Optimization Algorithms", "IoT", "Blockchain", "Real-time Tracking"],
    duration: "16 months",
    imageUrl: "/images/case-studies/supply-chain-ai.jpg"
  },
  {
    id: "ai-energy-grid-optimization",
    title: "Smart Energy Grid AI Management",
    company: "PowerGrid Solutions",
    industry: "Energy",
    challenge: "Energy grid inefficiencies and renewable energy integration challenges were causing power outages and suboptimal energy distribution.",
    solution: "Deployed AI-powered smart grid management system with renewable energy integration, demand forecasting, and automated grid optimization.",
    results: [
      "Improved grid efficiency by 40% through intelligent load balancing",
      "Integrated 60% more renewable energy sources",
      "Reduced power outages by 85%",
      "Optimized energy distribution saving $25M annually",
      "Achieved 99.9% grid reliability"
    ],
    technologies: ["Smart Grid", "Renewable Energy", "Predictive Analytics", "IoT Sensors", "Grid Automation"],
    duration: "22 months",
    imageUrl: "/images/case-studies/energy-grid-ai.jpg"
  },
  {
    id: "fortune-500-retail-ai-infrastructure",
    title: "Fortune 500 Retail AI Infrastructure Transformation",
    company: "RetailMax Corporation",
    industry: "E-commerce",
    challenge: "Manual order processing taking 24 hours, high operational costs, and frequent system outages affecting customer satisfaction and revenue.",
    solution: "Implemented AI autonomous infrastructure platform with self-healing systems, predictive analytics, and automated orchestration across all retail operations.",
    results: [
      "75% reduction in operational costs",
      "99.9% system uptime achieved",
      "Order processing time reduced from 24 hours to 2 minutes",
      "Generated $2.3M annual savings",
      "Improved customer satisfaction by 85%"
    ],
    technologies: ["AI Autonomous Infrastructure", "Self-Healing Systems", "Predictive Analytics", "Automated Orchestration", "Real-time Monitoring"],
    duration: "12 months",
    imageUrl: "/images/case-studies/fortune-500-retail-ai-infrastructure.jpg"
  },
  {
    id: "multimodal-ai-healthcare-diagnostics",
    title: "Multimodal AI Healthcare Diagnostics Platform",
    company: "MedTech Innovations",
    industry: "Healthcare",
    challenge: "Manual diagnostic processes were slow and error-prone, with radiologists struggling to analyze multiple data types simultaneously for accurate patient diagnosis.",
    solution: "Deployed multimodal AI platform that processes medical images, patient records, lab results, and clinical notes simultaneously for comprehensive diagnostic insights.",
    results: [
      "90% improvement in diagnostic accuracy",
      "Diagnosis time reduced from 48 hours to 4 hours",
      "Detected early-stage diseases with 98% accuracy",
      "Freed up 70% of specialist time for complex cases",
      "Saved $8M annually in healthcare costs"
    ],
    technologies: ["Multimodal AI", "Computer Vision", "NLP", "Medical Imaging", "Clinical Decision Support"],
    duration: "14 months",
    imageUrl: "/images/case-studies/multimodal-ai-healthcare-diagnostics.jpg"
  },
  {
    id: "edge-ai-manufacturing-optimization",
    title: "Edge AI Manufacturing Optimization Platform",
    company: "Precision Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Real-time quality control and predictive maintenance were impossible with centralized AI systems, leading to production delays and quality issues.",
    solution: "Implemented edge AI platform with real-time inference, offline capabilities, and seamless cloud synchronization for distributed manufacturing intelligence.",
    results: [
      "Sub-50ms real-time quality detection",
      "65% reduction in production defects",
      "Predictive maintenance accuracy of 95%",
      "Reduced downtime by 80%",
      "Generated $5.2M annual savings"
    ],
    technologies: ["Edge AI", "Real-time Inference", "Predictive Maintenance", "Quality Control", "Edge Computing"],
    duration: "10 months",
    imageUrl: "/images/case-studies/edge-ai-manufacturing-optimization.jpg"
  },
  {
    id: "ai-ethics-compliance-banking",
    title: "AI Ethics & Compliance Framework in Banking",
    company: "SecureBank International",
    industry: "Banking",
    challenge: "AI systems lacked proper ethics oversight and compliance monitoring, creating regulatory risks and potential bias in financial decision-making.",
    solution: "Implemented comprehensive AI ethics framework with automated compliance monitoring, transparency reporting, and continuous bias detection across all AI systems.",
    results: [
      "100% regulatory compliance achieved",
      "95% stakeholder trust score",
      "80% reduction in AI-related risks",
      "90% system transparency achieved",
      "Prevented $12M in compliance penalties"
    ],
    technologies: ["AI Ethics Framework", "Compliance Monitoring", "Bias Detection", "Transparency Reporting", "Risk Assessment"],
    duration: "8 months",
    imageUrl: "/images/case-studies/ai-ethics-compliance-banking.jpg"
  },
  {
    id: "quantum-ai-financial-modeling",
    title: "Quantum-AI Financial Modeling Platform",
    company: "Quantum Capital Management",
    industry: "Investment Management",
    challenge: "Complex financial modeling for $100B portfolio was computationally limited, preventing real-time risk assessment and optimization opportunities.",
    solution: "Deployed quantum-AI hybrid computing platform combining quantum processing with AI algorithms for exponentially faster financial modeling and risk analysis.",
    results: [
      "1000x faster portfolio optimization",
      "40% improvement in risk-adjusted returns",
      "Real-time risk assessment capabilities",
      "Generated $25M additional annual returns",
      "Achieved industry-leading Sharpe ratios"
    ],
    technologies: ["Quantum Computing", "AI Algorithms", "Financial Modeling", "Risk Analysis", "Portfolio Optimization"],
    duration: "16 months",
    imageUrl: "/images/case-studies/quantum-ai-financial-modeling.jpg"
  },
  {
    id: "ai-performance-monitoring-telecom",
    title: "AI Performance Monitoring for Telecom Networks",
    company: "GlobalTel Communications",
    industry: "Telecommunications",
    challenge: "Network performance issues were difficult to predict and resolve, leading to service outages and customer churn across 50+ regions.",
    solution: "Implemented comprehensive AI performance monitoring platform with real-time observability, predictive analytics, and automated incident response.",
    results: [
      "99.9% network reliability achieved",
      "85% reduction in false positive alerts",
      "70% improvement in incident resolution time",
      "Reduced customer churn by 25%",
      "Generated $15M in operational savings"
    ],
    technologies: ["AI Performance Monitoring", "Real-time Observability", "Predictive Analytics", "Network Automation", "Incident Response"],
    duration: "12 months",
    imageUrl: "/images/case-studies/ai-performance-monitoring-telecom.jpg"
  },
  {
    id: "zero-trust-ai-security-enterprise",
    title: "Zero Trust AI Security for Enterprise Systems",
    company: "Enterprise Security Corp",
    industry: "Cybersecurity",
    challenge: "Traditional security models were insufficient for AI systems, creating vulnerabilities and compliance gaps in enterprise environments.",
    solution: "Implemented zero trust AI security framework with comprehensive threat detection, access controls, and continuous monitoring across all AI systems.",
    results: [
      "99.8% threat detection accuracy",
      "Zero security breaches in 18 months",
      "100% compliance with security standards",
      "Reduced incident response time by 90%",
      "Prevented $20M in potential security losses"
    ],
    technologies: ["Zero Trust Security", "AI Threat Detection", "Access Controls", "Continuous Monitoring", "Security Automation"],
    duration: "10 months",
    imageUrl: "/images/case-studies/zero-trust-ai-security-enterprise.jpg"
  },
  {
    id: "ai-data-pipeline-optimization-logistics",
    title: "AI Data Pipeline Optimization for Global Logistics",
    company: "GlobalLogistics Corp",
    industry: "Logistics",
    challenge: "Data processing bottlenecks were limiting real-time decision-making capabilities, affecting supply chain efficiency and customer satisfaction.",
    solution: "Optimized AI data pipelines with advanced caching, parallel processing, and intelligent routing for high-performance data processing across global operations.",
    results: [
      "10x improvement in data processing speed",
      "1TB/hour data throughput achieved",
      "70% reduction in processing costs",
      "99.9% pipeline reliability",
      "Generated $8M in efficiency savings"
    ],
    technologies: ["AI Data Pipelines", "Performance Optimization", "Parallel Processing", "Intelligent Caching", "Real-time Analytics"],
    duration: "8 months",
    imageUrl: "/images/case-studies/ai-data-pipeline-optimization-logistics.jpg"
  },
  {
    id: "enterprise-ai-governance-pharmaceuticals",
    title: "Enterprise AI Governance for Pharmaceutical Research",
    company: "PharmaTech Innovations",
    industry: "Pharmaceuticals",
    challenge: "AI model lifecycle management was fragmented across research teams, creating compliance risks and inconsistent model quality standards.",
    solution: "Implemented enterprise AI governance platform with model lifecycle management, version control, and compliance monitoring across all research initiatives.",
    results: [
      "95% improvement in model quality",
      "100% compliance with regulatory standards",
      "5x faster model deployment",
      "80% reduction in model-related risks",
      "Accelerated drug discovery by 40%"
    ],
    technologies: ["Enterprise AI Governance", "Model Lifecycle Management", "Version Control", "Compliance Monitoring", "Quality Assurance"],
    duration: "14 months",
    imageUrl: "/images/case-studies/enterprise-ai-governance-pharmaceuticals.jpg"
  },
  {
    id: "ai-automation-workflows-insurance",
    title: "AI Automation Workflows for Insurance Claims",
    company: "InsureTech Solutions",
    industry: "Insurance",
    challenge: "Manual claims processing was slow and error-prone, taking weeks to process simple claims and leading to customer dissatisfaction.",
    solution: "Implemented intelligent automation workflows combining AI, RPA, and business process management for end-to-end claims processing automation.",
    results: [
      "Claims processing time reduced from 2 weeks to 24 hours",
      "95% accuracy in automated claim assessment",
      "80% reduction in processing costs",
      "Improved customer satisfaction by 90%",
      "Generated $12M in operational savings"
    ],
    technologies: ["AI Automation", "RPA", "Business Process Management", "Intelligent Workflows", "Claims Processing"],
    duration: "6 months",
    imageUrl: "/images/case-studies/ai-automation-workflows-insurance.jpg"
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
