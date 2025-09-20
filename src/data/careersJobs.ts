export interface CareerJob {
  id: number;
  title: string;
  department: string;
  location: string;
<<<<<<< HEAD
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  postedDate: string;
=======
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: string;
  applicationDeadline?: string;
  remote: boolean;
>>>>>>> acd3fffc0febff8152b7eda17ac2cde729b1e4ec
  featured: boolean;
}

export const CAREER_JOBS: CareerJob[] = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
<<<<<<< HEAD
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
=======
    location: "San Francisco, CA",
    type: "full-time",
    level: "senior",
    description: "We're looking for a Senior AI Engineer to join our innovative team and help build cutting-edge AI solutions that transform how businesses operate. You'll work on machine learning models, neural networks, and AI-powered applications that serve millions of users worldwide.",
    requirements: [
      "Bachelor's degree in Computer Science, AI, or related field",
      "5+ years of experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, GCP, Azure)",
      "Strong understanding of deep learning algorithms",
      "Experience with MLOps and model deployment"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401(k) with company matching",
      "Unlimited PTO"
    ],
    salary: {
      min: 150000,
      max: 220000,
      currency: "USD"
    },
    postedDate: "2025-01-15",
    remote: true,
>>>>>>> acd3fffc0febff8152b7eda17ac2cde729b1e4ec
    featured: true
  },
  {
    id: 2,
<<<<<<< HEAD
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
=======
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "full-time",
    level: "mid",
    description: "Join our frontend team to build beautiful, responsive user interfaces for our AI-powered applications. You'll work with modern frameworks and contribute to a user experience that makes complex AI accessible to everyone.",
    requirements: [
      "3+ years of frontend development experience",
      "Proficiency in React, TypeScript, and Next.js",
      "Experience with modern CSS frameworks (Tailwind, Styled Components)",
      "Understanding of responsive design principles",
      "Experience with state management (Redux, Zustand)",
      "Knowledge of testing frameworks (Jest, Cypress)"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health and dental insurance",
      "Remote-first culture",
      "Learning and development opportunities",
      "Flexible schedule",
      "Home office setup budget"
    ],
    salary: {
      min: 90000,
      max: 140000,
      currency: "USD"
    },
    postedDate: "2025-01-14",
    remote: true,
>>>>>>> acd3fffc0febff8152b7eda17ac2cde729b1e4ec
    featured: false
  },
  {
    id: 3,
<<<<<<< HEAD
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
=======
    title: "Product Manager - AI Solutions",
    department: "Product",
    location: "New York, NY",
    type: "full-time",
    level: "senior",
    description: "Lead product strategy for our AI-powered solutions, working closely with engineering, design, and business teams to deliver products that solve real-world problems and drive business growth.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of product management experience",
      "Experience with AI/ML products preferred",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Experience with agile development methodologies"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Team building events",
      "Stock options program"
    ],
    salary: {
      min: 120000,
      max: 180000,
      currency: "USD"
    },
    postedDate: "2025-01-13",
    remote: false,
    featured: true
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data Science",
    location: "Remote",
    type: "full-time",
    level: "mid",
    description: "Analyze complex datasets to extract insights and build predictive models that drive business decisions. Work with cross-functional teams to implement data-driven solutions across our platform.",
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      "3+ years of data science experience",
      "Proficiency in Python, R, SQL",
      "Experience with machine learning libraries (scikit-learn, pandas, numpy)",
      "Knowledge of statistical analysis and modeling",
      "Experience with data visualization tools"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health insurance and wellness programs",
      "Remote work flexibility",
      "Data science conference attendance",
      "Access to cutting-edge tools and datasets",
      "Collaborative team environment"
    ],
    salary: {
      min: 110000,
      max: 160000,
      currency: "USD"
    },
    postedDate: "2025-01-12",
    remote: true,
    featured: false
  },
  {
    id: 5,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "full-time",
    level: "mid",
    description: "Design intuitive and engaging user experiences for our AI-powered applications. Work closely with product and engineering teams to create designs that make complex AI accessible and useful for our users.",
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "3+ years of UX design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Experience with user research and testing",
      "Understanding of design systems and accessibility",
      "Portfolio demonstrating AI/tech product experience"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health and dental insurance",
      "Design tools and software licenses",
      "Professional development budget",
      "Flexible work arrangements",
      "Creative and collaborative environment"
    ],
    salary: {
      min: 85000,
      max: 130000,
      currency: "USD"
    },
    postedDate: "2025-01-11",
    remote: false,
>>>>>>> acd3fffc0febff8152b7eda17ac2cde729b1e4ec
    featured: false
  }
];