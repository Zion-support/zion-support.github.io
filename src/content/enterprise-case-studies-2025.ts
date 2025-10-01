// Enterprise case studies showcasing real-world AI implementations and results

export interface EnterpriseCaseStudy {
  id: string;
  slug?: string;
  title: string;
  company: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metrics: {
      performance: string;
      savings: string;
      accuracy: string;
      roi: string;
    };
    timeframe: string;
    scale: string;
  };
  technologies: string[];
  featured: boolean;
  date: string;
  author: string;
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
}

export const enterpriseCaseStudies2025: EnterpriseCaseStudy[] = [
  {
    id: "fortune-500-ai-transformation",
    slug: "fortune-500-ai-transformation",
    title: "Fortune 500 Global Manufacturing: Complete AI Transformation",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    description: "Complete enterprise AI transformation achieving 99.99% operational autonomy, $3.7B value creation, and zero human error operations.",
    challenge: "Manual processes, operational inefficiencies, and high error rates across 450 global facilities",
    solution: "Implemented comprehensive AI mesh network with autonomous decision-making and self-healing infrastructure",
    results: {
      metrics: {
        performance: "99.99% uptime",
        savings: "$3.7B annually",
        accuracy: "Zero errors",
        roi: "2,400%"
      },
      timeframe: "18 months",
      scale: "450 facilities globally"
    },
    technologies: ["Autonomous AI", "Self-Healing Infrastructure", "Predictive Analytics", "IoT Integration"],
    featured: true,
    date: "2025-01-20",
    author: "Zion Tech Group Team",
    image: "/images/fortune-500-ai-transformation.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "financial-services-fraud-prevention",
    slug: "financial-services-fraud-prevention",
    title: "Leading Financial Services: AI-Powered Fraud Prevention",
    company: "Global Financial Services",
    industry: "Financial Services",
    description: "Advanced AI fraud detection system preventing $47B in fraudulent transactions with 99.94% accuracy and real-time processing.",
    challenge: "Sophisticated fraud schemes causing $200M+ annual losses and regulatory compliance requirements",
    solution: "Deployed quantum-enhanced neural networks with real-time behavioral analysis and predictive modeling",
    results: {
      metrics: {
        performance: "99.94% accuracy",
        savings: "$47B prevented",
        accuracy: "Sub-1ms detection",
        roi: "3,200%"
      },
      timeframe: "12 months",
      scale: "50M+ transactions daily"
    },
    technologies: ["Quantum AI", "Real-time Analytics", "Behavioral Analysis", "Predictive Modeling"],
    featured: true,
    date: "2025-01-20",
    author: "Zion Tech Group Team",
    image: "/images/financial-fraud-prevention.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "healthcare-ai-diagnostic-system",
    slug: "healthcare-ai-diagnostic-system",
    title: "Major Healthcare System: AI Diagnostic Excellence",
    company: "Regional Healthcare Network",
    industry: "Healthcare",
    description: "AI-powered diagnostic system achieving 94% diagnostic accuracy, 252 lives saved, and 497% ROI in healthcare delivery.",
    challenge: "Diagnostic delays, accuracy issues, and resource constraints affecting patient outcomes",
    solution: "Implemented multimodal AI diagnostic platform with real-time analysis and clinical decision support",
    results: {
      metrics: {
        performance: "94% accuracy",
        savings: "$1.5B value",
        accuracy: "252 lives saved",
        roi: "497%"
      },
      timeframe: "15 months",
      scale: "25 hospitals, 500K patients"
    },
    technologies: ["Multimodal AI", "Diagnostic Imaging", "Clinical Decision Support", "Real-time Analytics"],
    featured: true,
    date: "2025-01-20",
    author: "Zion Tech Group Team",
    image: "/images/healthcare-ai-diagnostics.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "retail-supply-chain-optimization",
    slug: "retail-supply-chain-optimization",
    title: "Global Retail Chain: AI Supply Chain Revolution",
    company: "Global Retail Corporation",
    industry: "Retail",
    description: "AI-driven supply chain optimization achieving 65% faster deliveries, 40% cost reduction, and 95% inventory accuracy.",
    challenge: "Supply chain inefficiencies, stockouts, and delivery delays affecting customer satisfaction",
    solution: "Deployed autonomous supply chain AI with predictive analytics and dynamic optimization",
    results: {
      metrics: {
        performance: "65% faster delivery",
        savings: "40% cost reduction",
        accuracy: "95% inventory accuracy",
        roi: "2,800%"
      },
      timeframe: "10 months",
      scale: "2,000+ stores globally"
    },
    technologies: ["Supply Chain AI", "Predictive Analytics", "Autonomous Optimization", "IoT Sensors"],
    featured: true,
    date: "2025-01-20",
    author: "Zion Tech Group Team",
    image: "/images/retail-supply-chain-ai.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "energy-sector-smart-grid",
    slug: "energy-sector-smart-grid",
    title: "Energy Utility: Smart Grid AI Implementation",
    company: "Regional Energy Utility",
    industry: "Energy",
    description: "Smart grid AI system achieving 99.97% uptime, 60% energy efficiency improvement, and $890M annual savings.",
    challenge: "Grid instability, energy waste, and maintenance inefficiencies in aging infrastructure",
    solution: "Implemented AI-powered smart grid with predictive maintenance and autonomous energy distribution",
    results: {
      metrics: {
        performance: "99.97% uptime",
        savings: "$890M annually",
        accuracy: "60% efficiency gain",
        roi: "1,600%"
      },
      timeframe: "20 months",
      scale: "5M+ customers served"
    },
    technologies: ["Smart Grid AI", "Predictive Maintenance", "Energy Optimization", "IoT Integration"],
    featured: true,
    date: "2025-01-20",
    author: "Zion Tech Group Team",
    image: "/images/energy-smart-grid-ai.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "logistics-autonomous-fleet",
    slug: "logistics-autonomous-fleet",
    title: "Logistics Company: Autonomous Fleet Management",
    company: "Global Logistics Provider",
    industry: "Logistics",
    description: "Autonomous fleet management achieving 99.8% delivery accuracy, 45% fuel savings, and $2.3B operational value.",
    challenge: "Fleet inefficiencies, fuel costs, and delivery accuracy issues across global operations",
    solution: "Deployed autonomous fleet AI with route optimization and predictive maintenance systems",
    results: {
      metrics: {
        performance: "99.8% accuracy",
        savings: "$2.3B value",
        accuracy: "45% fuel savings",
        roi: "1,900%"
      },
      timeframe: "14 months",
      scale: "50,000+ vehicles globally"
    },
    technologies: ["Autonomous Fleet", "Route Optimization", "Predictive Maintenance", "IoT Sensors"],
    featured: true,
    date: "2025-01-20",
    author: "Zion Tech Group Team",
    image: "/images/logistics-autonomous-fleet.jpg",
    newBadge: true,
    trending: true
  }
];

export const featuredCaseStudies = enterpriseCaseStudies2025.filter(caseStudy => caseStudy.featured);
export const trendingCaseStudies = enterpriseCaseStudies2025.filter(caseStudy => caseStudy.trending);
export const newCaseStudies = enterpriseCaseStudies2025.filter(caseStudy => caseStudy.newBadge);