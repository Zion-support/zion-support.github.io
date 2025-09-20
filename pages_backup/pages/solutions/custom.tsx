import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>custom | Zion Tech Group</title>,
        <meta name="description" content="custom - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">custom</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Code, 
  Wrench, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Zap,
  Target,
  Rocket
} from 'lucide-react';
import Layout from '../../components/Layout';

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Deep dive into your requirements and business goals",
    icon: Target,
    details: [
      "Requirements gathering",
      "Technical analysis",
      "Feasibility study",
      "Project planning"
    ]
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Create detailed technical specifications and system design",
    icon: Code,
    details: [
      "System architecture",
      "UI/UX design",
      "Database design",
      "API specifications"
    ]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build and thoroughly test your custom solution",
    icon: Wrench,
    details: [
      "Agile development",
      "Code reviews",
      "Quality assurance",
      "Performance testing"
    ]
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch your solution and provide ongoing support",
    icon: Rocket,
    details: [
      "Production deployment",
      "User training",
      "Documentation",
      "Ongoing maintenance"
    ]
  }
];

const capabilities = [
  {
    title: "Web Applications",
    description: "Custom web applications built with modern technologies",
    icon: Cloud,
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    icon: Users,
    technologies: ["React Native", "Flutter", "iOS", "Android", "Swift"]
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs for system integration",
    icon: Settings,
    technologies: ["REST API", "GraphQL", "Microservices", "Docker", "Kubernetes"]
  },
  {
    title: "AI & ML Solutions",
    description: "Custom artificial intelligence and machine learning systems",
    icon: BarChart3,
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure and DevOps solutions",
    icon: Cloud,
    technologies: ["AWS", "Azure", "GCP", "Terraform", "CI/CD"]
  },
  {
    title: "Security Solutions",
    description: "Custom security implementations and compliance",
    icon: Shield,
    technologies: ["OAuth", "JWT", "Encryption", "SOC 2", "GDPR"]
  }
];

const benefits = [
  {
    title: "Bespoke Development",
    description: "Solutions built specifically for your unique requirements",
    icon: Target
  },
  {
    title: "Full Ownership",
    description: "Complete ownership of your custom solution and codebase",
    icon: Shield
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs",
    icon: Zap
  },
  {
    title: "Ongoing Support",
    description: "Continuous support and maintenance for your solution",
    icon: Users
  }
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP",
  "TensorFlow", "PyTorch", "OpenAI", "React Native", "Flutter"
];

export default function CustomDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>custom | Zion Tech Group</title>
        <meta name="description" content="custom - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">custom</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default custom;