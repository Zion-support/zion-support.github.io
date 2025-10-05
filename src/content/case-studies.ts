/**
 * Case Studies Data
 * Collection of client success stories and case studies
 */

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
}

/**
 * Sample case studies
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "ai-automation-manufacturing",
    title: "AI-Powered Manufacturing Optimization",
    company: "TechManufacturing Inc.",
    industry: "Manufacturing",
    challenge: "Inefficient production processes and high operational costs",
    solution: "Implemented AI workflow automation and predictive analytics",
    results: [
      "40% reduction in production costs",
      "60% improvement in efficiency",
      "99.9% uptime achievement"
    ],
    technologies: ["AI/ML", "Predictive Analytics", "IoT Integration"],
    duration: "6 months"
  },
  {
    id: "data-analytics-retail",
    title: "Advanced Data Analytics for Retail Chain",
    company: "RetailMax Corporation",
    industry: "Retail",
    challenge: "Poor inventory management and customer insights",
    solution: "Deployed AI-powered analytics platform with real-time insights",
    results: [
      "35% improvement in inventory turnover",
      "25% increase in customer satisfaction",
      "50% reduction in stockouts"
    ],
    technologies: ["Data Analytics", "Machine Learning", "Real-time Processing"],
    duration: "4 months"
  }
];

export default caseStudies;