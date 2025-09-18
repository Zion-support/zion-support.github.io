import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "Lead the development of cutting-edge AI solutions and neural networks for enterprise clients",
      requirements: [
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Computing Researcher",
      department: "Quantum Computing",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120,000 - $180,000",
      description: "Research and develop quantum algorithms and quantum-resistant cryptography solutions",
      requirements: [
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      type: "Full-time",
      experience: "7+ years",
      salary: "$160,000 - $220,000",
      description: "Design and implement enterprise-level security architectures and zero-trust solutions",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Expertise in security frameworks and compliance standards",
        "Experience with zero-trust architecture implementation",
        "Strong knowledge of threat detection and response"
      ],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Infrastructure Engineer",
      department: "Cloud Infrastructure",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130,000 - $180,000",
      description: "Build and maintain scalable cloud infrastructure and DevOps automation systems",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110,000 - $160,000",
      description: "Develop predictive analytics models and data-driven insights for business clients",
      requirements: [
      icon: Zap,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      experience: "5+ years",
      salary: "$140,000 - $190,000",
      description: "Lead product strategy and development for our technology solutions portfolio",
      requirements: [
        "Experience in B2B SaaS or technology products",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and leadership abilities"
      ],
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries with equity options and performance bonuses",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Health & Wellness",
      icon: Star,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work-life balance",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Professional Growth",
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const careers: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">careers</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default careers;
