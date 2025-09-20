export interface CareerJob {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  postedDate: string;
  featured: boolean;
}

export const CAREER_JOBS: CareerJob[] = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for a Senior AI Engineer to join our team and help build the next generation of AI-powered solutions. You'll work on cutting-edge machine learning models and AI systems that power our marketplace platform.",
    requirements: [
      "5+ years of experience in AI/ML engineering",
      "Strong background in Python, TensorFlow, and PyTorch",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Knowledge of MLOps and model deployment",
      "Strong problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO"
    ],
    salary: "$120,000 - $180,000",
    postedDate: "2025-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Product Manager - AI Platform",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our product team to drive the vision and strategy for our AI platform. You'll work closely with engineering, design, and business teams to deliver products that delight our users.",
    requirements: [
      "3+ years of product management experience",
      "Experience with AI/ML products preferred",
      "Strong analytical and problem-solving skills",
      "Excellent communication and collaboration skills",
      "Bachelor's degree in relevant field"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development opportunities"
    ],
    salary: "$100,000 - $150,000",
    postedDate: "2025-01-12",
    featured: false
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "We're seeking a talented Frontend Developer to help build beautiful, responsive user interfaces for our AI marketplace platform. You'll work with modern technologies like React, TypeScript, and Next.js.",
    requirements: [
      "2+ years of frontend development experience",
      "Proficiency in React, TypeScript, and Next.js",
      "Experience with CSS frameworks (Tailwind CSS preferred)",
      "Knowledge of responsive design principles",
      "Experience with version control (Git)"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Learning and development budget",
      "Home office setup allowance"
    ],
    salary: "$80,000 - $120,000",
    postedDate: "2025-01-10",
    featured: false
  }
];