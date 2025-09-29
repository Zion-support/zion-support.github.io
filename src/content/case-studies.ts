export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  featured: boolean;
  category: string;
  image?: string;
  readTime: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "retailmax-ai-automation",
    title: "RetailMax: AI Workflow Automation Transforms E-commerce Operations",
    company: "RetailMax Corporation",
    industry: "E-commerce",
    challenge: "RetailMax was struggling with manual order processing, inventory management, and customer service operations. Their 500-person team was overwhelmed with repetitive tasks, leading to processing delays, inventory discrepancies, and poor customer satisfaction.",
    solution: "We implemented a comprehensive AI workflow automation platform that automated order processing, inventory management, customer service, and demand forecasting. The solution included intelligent routing, automated quality checks, and predictive analytics.",
    results: [
      "Reduced order processing time from 24 hours to 2 minutes",
      "Eliminated 99% of manual inventory management tasks",
      "Improved customer satisfaction scores by 85%",
      "Reduced operational costs by $2.3M annually",
      "Increased order accuracy to 99.9%"
    ],
    metrics: [
      {
        label: "Processing Time Reduction",
        value: "99%",
        description: "From 24 hours to 2 minutes"
      },
      {
        label: "Cost Savings",
        value: "$2.3M",
        description: "Annual operational cost reduction"
      },
      {
        label: "Customer Satisfaction",
        value: "85%",
        description: "Improvement in satisfaction scores"
      },
      {
        label: "Order Accuracy",
        value: "99.9%",
        description: "Achieved accuracy rate"
      }
    ],
    technologies: ["AI Workflow Automation", "Machine Learning", "RPA", "Predictive Analytics", "Cloud Infrastructure"],
    testimonial: {
      quote: "Zion Tech Group's AI automation platform transformed our entire operation. We went from struggling to keep up with demand to being the most efficient e-commerce operation in our sector.",
      author: "Sarah Mitchell",
      title: "CEO, RetailMax Corporation"
    },
    featured: true,
    category: "AI Automation",
    image: "/images/case-study-retailmax.jpg",
    readTime: "5 min read"
  },
  {
    id: "first-national-ai-assistant",
    title: "First National Bank: AI Virtual Assistant Revolutionizes Customer Service",
    company: "First National Bank",
    industry: "Banking",
    challenge: "First National Bank was experiencing long customer wait times, high support costs, and inconsistent service quality. Their traditional call center couldn't handle the volume of inquiries, leading to customer frustration and lost business opportunities.",
    solution: "We deployed an advanced AI virtual assistant with natural language processing, multi-channel support, and seamless human handoff capabilities. The system was trained on banking regulations, products, and customer service best practices.",
    results: [
      "Reduced customer wait times from 45 minutes to 2 minutes",
      "Handled 80% of customer inquiries without human intervention",
      "Increased customer satisfaction by 95%",
      "Reduced support costs by $1.8M annually",
      "Improved cross-selling success rate by 40%"
    ],
    metrics: [
      {
        label: "Wait Time Reduction",
        value: "95%",
        description: "From 45 minutes to 2 minutes"
      },
      {
        label: "Cost Savings",
        value: "$1.8M",
        description: "Annual support cost reduction"
      },
      {
        label: "Customer Satisfaction",
        value: "95%",
        description: "Improvement in satisfaction scores"
      },
      {
        label: "Automation Rate",
        value: "80%",
        description: "Inquiries handled without human intervention"
      }
    ],
    technologies: ["AI Virtual Assistant", "Natural Language Processing", "Multi-channel Support", "CRM Integration", "Banking APIs"],
    testimonial: {
      quote: "The AI virtual assistant has revolutionized our customer service. We can now provide instant, accurate responses 24/7 while reducing costs and improving customer satisfaction.",
      author: "Michael Rodriguez",
      title: "VP of Customer Experience, First National Bank"
    },
    featured: true,
    category: "AI Assistant",
    image: "/images/case-study-bank.jpg",
    readTime: "6 min read"
  },
  {
    id: "precision-manufacturing-ai-analytics",
    title: "Precision Manufacturing: AI Data Analytics Optimizes Production",
    company: "Precision Manufacturing Inc.",
    industry: "Manufacturing",
    challenge: "Precision Manufacturing was facing significant production waste, unpredictable equipment failures, and inefficient resource utilization. Their traditional manufacturing processes couldn't adapt to changing demand patterns and quality requirements.",
    solution: "We implemented an AI data analytics platform with predictive maintenance, quality control automation, and real-time production optimization. The system included computer vision for defect detection and machine learning for predictive analytics.",
    results: [
      "Reduced production waste by 70%",
      "Decreased equipment downtime by 85%",
      "Improved product quality by 60%",
      "Increased overall equipment effectiveness by 45%",
      "Saved $3.2M in operational costs annually"
    ],
    metrics: [
      {
        label: "Waste Reduction",
        value: "70%",
        description: "Reduction in production waste"
      },
      {
        label: "Downtime Reduction",
        value: "85%",
        description: "Decrease in equipment downtime"
      },
      {
        label: "Quality Improvement",
        value: "60%",
        description: "Improvement in product quality"
      },
      {
        label: "Cost Savings",
        value: "$3.2M",
        description: "Annual operational cost savings"
      }
    ],
    technologies: ["AI Data Analytics", "Predictive Maintenance", "Computer Vision", "IoT Sensors", "Machine Learning"],
    testimonial: {
      quote: "Zion Tech Group's AI analytics platform transformed our manufacturing operations. We now predict and prevent issues before they occur, resulting in unprecedented efficiency and quality.",
      author: "Jennifer Chen",
      title: "Operations Director, Precision Manufacturing Inc."
    },
    featured: true,
    category: "AI Analytics",
    image: "/images/case-study-manufacturing.jpg",
    readTime: "7 min read"
  },
  {
    id: "healthcare-network-ai-autonomous",
    title: "MedCare Network: AI Autonomous Operations Ensures 99.99% Uptime",
    company: "MedCare Hospital Network",
    industry: "Healthcare",
    challenge: "MedCare Hospital Network required 100% uptime for critical healthcare systems but was experiencing frequent outages, manual intervention requirements, and escalating operational costs. Their IT infrastructure couldn't keep pace with growing demands.",
    solution: "We deployed AI Autonomous Operations with self-healing infrastructure, predictive maintenance, and automated scaling. The system monitors all critical systems 24/7 and automatically resolves issues without human intervention.",
    results: [
      "Achieved 99.99% system uptime",
      "Reduced incident response time by 95%",
      "Eliminated 90% of manual interventions",
      "Reduced operational costs by $1.5M annually",
      "Improved patient care efficiency by 40%"
    ],
    metrics: [
      {
        label: "System Uptime",
        value: "99.99%",
        description: "Achieved uptime with autonomous ops"
      },
      {
        label: "Response Time",
        value: "95%",
        description: "Reduction in incident response time"
      },
      {
        label: "Cost Savings",
        value: "$1.5M",
        description: "Annual operational cost reduction"
      },
      {
        label: "Efficiency Gain",
        value: "40%",
        description: "Improvement in patient care efficiency"
      }
    ],
    technologies: ["AI Autonomous Operations", "Self-Healing Infrastructure", "Predictive Maintenance", "Healthcare IT", "Cloud Infrastructure"],
    testimonial: {
      quote: "AI Autonomous Operations gives us peace of mind knowing our critical healthcare systems are always running optimally. We've achieved unprecedented reliability while reducing costs.",
      author: "Dr. Robert Kim",
      title: "CTO, MedCare Hospital Network"
    },
    featured: false,
    category: "AI Operations",
    image: "/images/case-study-healthcare.jpg",
    readTime: "6 min read"
  },
  {
    id: "fintech-quantum-optimization",
    title: "FinTech Solutions: Quantum Optimization Transforms Portfolio Management",
    company: "FinTech Solutions Inc.",
    industry: "Financial Services",
    challenge: "FinTech Solutions needed to optimize complex investment portfolios with thousands of assets and constraints. Traditional optimization methods were too slow and couldn't handle the complexity of modern financial instruments.",
    solution: "We implemented a Quantum Optimization Engine that uses quantum algorithms to solve complex portfolio optimization problems in real-time. The system handles multi-objective optimization with risk constraints and regulatory requirements.",
    results: [
      "Improved portfolio performance by 25%",
      "Reduced optimization time from hours to minutes",
      "Handled 10x more complex scenarios",
      "Increased client satisfaction by 90%",
      "Generated $15M in additional revenue"
    ],
    metrics: [
      {
        label: "Performance Improvement",
        value: "25%",
        description: "Improvement in portfolio performance"
      },
      {
        label: "Speed Improvement",
        value: "1000x",
        description: "Faster optimization processing"
      },
      {
        label: "Revenue Impact",
        value: "$15M",
        description: "Additional revenue generated"
      },
      {
        label: "Client Satisfaction",
        value: "90%",
        description: "Improvement in client satisfaction"
      }
    ],
    technologies: ["Quantum Computing", "Portfolio Optimization", "Financial Analytics", "Risk Management", "Quantum Algorithms"],
    testimonial: {
      quote: "Quantum optimization has revolutionized our portfolio management capabilities. We can now solve complex optimization problems in real-time, delivering superior results to our clients.",
      author: "Amanda Foster",
      title: "Head of Quantitative Research, FinTech Solutions Inc."
    },
    featured: false,
    category: "Quantum Computing",
    image: "/images/case-study-fintech.jpg",
    readTime: "8 min read"
  },
  {
    id: "logistics-edge-ai",
    title: "Global Logistics: Edge AI Optimizes Supply Chain Operations",
    company: "Global Logistics Corp",
    industry: "Logistics",
    challenge: "Global Logistics needed real-time visibility and optimization across their complex supply chain network. Traditional centralized systems couldn't handle the latency requirements for real-time decision making.",
    solution: "We deployed Edge AI solutions across their distribution network with real-time processing, predictive analytics, and autonomous decision making. The system processes data locally and makes instant optimization decisions.",
    results: [
      "Reduced delivery times by 35%",
      "Improved route optimization by 60%",
      "Decreased fuel costs by 25%",
      "Enhanced customer satisfaction by 80%",
      "Saved $4.2M in operational costs annually"
    ],
    metrics: [
      {
        label: "Delivery Time Reduction",
        value: "35%",
        description: "Faster delivery times"
      },
      {
        label: "Route Optimization",
        value: "60%",
        description: "Improvement in route efficiency"
      },
      {
        label: "Cost Savings",
        value: "$4.2M",
        description: "Annual operational cost savings"
      },
      {
        label: "Customer Satisfaction",
        value: "80%",
        description: "Improvement in satisfaction scores"
      }
    ],
    technologies: ["Edge AI", "Real-time Processing", "Supply Chain Optimization", "IoT Sensors", "Predictive Analytics"],
    testimonial: {
      quote: "Edge AI has transformed our logistics operations. We now make real-time decisions that optimize our entire supply chain, resulting in faster deliveries and significant cost savings.",
      author: "Carlos Martinez",
      title: "VP of Operations, Global Logistics Corp"
    },
    featured: false,
    category: "Edge AI",
    image: "/images/case-study-logistics.jpg",
    readTime: "7 min read"
  }
];

export const featuredCaseStudies = caseStudies.filter(study => study.featured);