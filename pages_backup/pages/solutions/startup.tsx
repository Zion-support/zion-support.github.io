import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  DollarSign, 
  Users, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Target,
  TrendingUp
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    title: "Quick Setup",
    description: "Get up and running in days, not months",
    icon: Zap,
    benefits: [
      "Pre-built templates",
      "One-click deployment",
      "Automated configuration",
      "Instant scaling"
    ]
  },
  {
    title: "Cost Effective",
    description: "Affordable solutions that grow with your budget",
    icon: DollarSign,
    benefits: [
      "Pay-as-you-scale pricing",
      "No upfront costs",
      "Transparent billing",
      "Budget-friendly options"
    ]
  },
  {
    title: "Scalable Growth",
    description: "Solutions that grow with your startup",
    icon: TrendingUp,
    benefits: [
      "Auto-scaling infrastructure",
      "Modular architecture",
      "Easy upgrades",
      "Future-proof design"
    ]
  },
  {
    title: "Expert Guidance",
    description: "Get the support you need to succeed",
    icon: Users,
    benefits: [
      "Dedicated startup advisor",
      "Best practices guidance",
      "Technical support",
      "Growth strategy consulting"
    ]
  }
];

const packages = [
  {
    name: "Launch Package",
    price: "$2,999",
    duration: "1-2 weeks",
    description: "Perfect for MVP development and initial launch",
    features: [
      "Basic cloud setup",
      "Core functionality",
      "Security essentials",
      "1 month support"
    ],
    popular: false
  },
  {
    name: "Growth Package",
    price: "$7,999",
    duration: "2-4 weeks",
    description: "Ideal for scaling startups with growing user base",
    features: [
      "Advanced cloud infrastructure",
      "Analytics & monitoring",
      "API development",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Scale Package",
    price: "$19,999",
    duration: "4-8 weeks",
    description: "Complete solution for established startups",
    features: [
      "Enterprise-grade infrastructure",
      "Custom integrations",
      "Advanced security",
      "6 months support"
    ],
    popular: false
  }
];

const successStories = [
  {
    company: "TechStart Inc.",
    industry: "FinTech",
    growth: "300% user growth",
    description: "Scaled from 1K to 100K users in 6 months"
  },
  {
    company: "HealthTech Solutions",
    industry: "Healthcare",
    growth: "500% revenue increase",
    description: "Expanded to 5 new markets with our platform"
  },
  {
    company: "EduTech Platform",
    industry: "Education",
    growth: "1000% user growth",
    description: "Served 50K+ students with our learning platform"
  }
];

export default function StartupSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>startup | Zion Tech Group</title>
        <meta name="description" content="startup - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">startup</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default startup;