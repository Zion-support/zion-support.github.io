import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Building,
  Heart,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Factory,
  Globe
} from 'lucide-react';
import Layout from '../../components/Layout';

const industries = [
  {
    name: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant solutions for healthcare providers",
    features: [
      "Patient data management",
      "Telemedicine platforms",
      "Medical imaging AI",
      "Compliance automation"
    ],
    color: "from-red-600 to-red-800"
  },
  {
    name: "Finance",
    icon: Building,
    description: "Secure financial technology solutions",
    features: [
      "Payment processing",
      "Risk management",
      "Fraud detection",
      "Regulatory compliance"
    ],
    color: "from-green-600 to-green-800"
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "IoT and automation for manufacturing",
    features: [
      "Predictive maintenance",
      "Quality control AI",
      "Supply chain optimization",
      "Smart factory solutions"
    ],
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    description: "E-commerce and retail technology",
    features: [
      "Omnichannel platforms",
      "Inventory management",
      "Customer analytics",
      "Personalization engines"
    ],
    color: "from-purple-600 to-purple-800"
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "EdTech solutions for learning institutions",
    features: [
      "Learning management systems",
      "Student analytics",
      "Virtual classrooms",
      "Assessment tools"
    ],
    color: "from-indigo-600 to-indigo-800"
  },
  {
    name: "Government",
    icon: Landmark,
    description: "Secure government technology solutions",
    features: [
      "Citizen services",
      "Data security",
      "Compliance frameworks",
      "Digital transformation"
    ],
    color: "from-gray-600 to-gray-800"
  }
];

const solutions = [
  {
    title: "Compliance & Security",
    description: "Industry-specific compliance and security frameworks",
    icon: Shield,
    benefits: [
      "Regulatory compliance",
      "Data protection",
      "Security audits",
      "Risk assessment"
    ]
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with existing industry systems",
    icon: BarChart3,
    benefits: [
      "Legacy system integration",
      "API development",
      "Data migration",
      "System optimization"
    ]
  },
  {
    title: "Industry Expertise",
    description: "Deep understanding of industry challenges and requirements",
    icon: Users,
    benefits: [
      "Domain knowledge",
      "Best practices",
      "Industry standards",
      "Proven methodologies"
    ]
  }
];

const caseStudies = [
  {
    industry: "Healthcare",
    company: "Regional Medical Center",
    challenge: "Patient data management and HIPAA compliance",
    solution: "Custom patient portal with secure data handling",
    result: "40% reduction in administrative overhead"
  },
  {
    industry: "Finance",
    company: "Community Credit Union",
    challenge: "Digital transformation and fraud prevention",
    solution: "AI-powered fraud detection and mobile banking platform",
    result: "60% reduction in fraudulent transactions"
  },
  {
    industry: "Manufacturing",
    company: "Auto Parts Manufacturer",
    challenge: "Quality control and predictive maintenance",
    solution: "IoT sensors and AI-powered quality monitoring",
    result: "25% improvement in product quality"
  }
];

export default function IndustrySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>industry | Zion Tech Group</title>
        <meta name="description" content="industry - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">industry</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default industry;
