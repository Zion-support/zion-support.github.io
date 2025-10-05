/**
 * Enterprise Case Studies 2025
 * Collection of enterprise client success stories for 2025
 */

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
    };
  };
  technologies: string[];
  featured: boolean;
  date: string;
  author: string;
  image?: string;
  newBadge?: boolean;
}

/**
 * Enterprise case studies for 2025
 */
export const enterpriseCaseStudies2025: EnterpriseCaseStudy[] = [
  {
    id: "fortune-500-ai-transformation",
    title: "Fortune 500 AI Transformation Success Story",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    description: "Complete AI transformation resulting in 40% cost reduction and 60% efficiency improvement",
    challenge: "Outdated processes and high operational costs in a global manufacturing operation",
    solution: "Implemented comprehensive AI workflow automation and predictive analytics platform",
    results: {
      metrics: {
        performance: "60% improvement",
        savings: "40% cost reduction",
        accuracy: "99.9% uptime"
      }
    },
    technologies: ["AI/ML", "Predictive Analytics", "IoT", "Cloud Computing"],
    featured: true,
    date: "2024-12-01",
    author: "Zion Tech Group",
    image: "/images/fortune-500-case-study.jpg",
    newBadge: true
  },
  {
    id: "financial-services-ai",
    title: "Financial Services AI Implementation",
    company: "Major Bank International",
    industry: "Financial Services",
    description: "AI-powered fraud detection and risk management system implementation",
    challenge: "Increasing fraud incidents and manual risk assessment processes",
    solution: "Deployed advanced AI fraud detection and automated risk management systems",
    results: {
      metrics: {
        performance: "95% fraud detection rate",
        savings: "70% reduction in false positives",
        accuracy: "99.8% accuracy"
      }
    },
    technologies: ["Machine Learning", "Real-time Analytics", "Blockchain", "API Integration"],
    featured: true,
    date: "2024-12-05",
    author: "Zion Tech Group",
    image: "/images/financial-ai-case-study.jpg",
    newBadge: false
  }
];

export default enterpriseCaseStudies2025;