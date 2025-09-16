import React from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';

ArrowRightZapShieldCloudBrainGlobeTrendingUpStarCheckCircle

const services = [
  {
    id: 1,
    title: "AI-Powered Business Automation",
    description: "Transform your operations with intelligent automation that learns and adapts to your business needs.",
    price: "From $299/month",
    features: [
      "40-60% operational cost reduction",
      "300% productivity increase",
      "ROI within 3 months",
      "24/7 intelligent monitoring"
    ],
    icon: Brain,
    color: "from-blue-500 to-purple-600",
    popular: true,
    category: "AI & Automation"
  },
  {
    id: 2,
    title: "Enterprise AI Content Generation",
    description: "Create high-qualitySEO-optimized content at scale with our advanced AI writing platform.",
    price: "From $199/month",
    features: [
      "80% content creation time savings",
      "200% SEO ranking improvement",
      "Consistent brand messaging",
      "Multi-language support"
    ],
    icon: Zap,
    color: "from-green-500 to-teal-600",
    popular: false,
    category: "Content & Marketing"
  },
  {
    id: 3,
    title: "Advanced Cybersecurity Solutions",
    description: "Protect your business with next-generation AI-powered security that evolves with threats.",
    price: "From $399/month",
    features: [
      "90% faster threat detection",
      "70% reduction in false positives",
      "24/7 automated protection",
      "Zero-trust architecture"
    ],
    icon: Shield,
    color: "from-red-500 to-pink-600",
    popular: false,
    category: "Security"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Optimization",
    description: "Maximize your cloud investment with intelligent resource management and cost optimization.",
    price: "From $599/month",
    features: [
      "40% cloud cost reduction",
      "10x faster deployment",
      "Auto-scaling capabilities",
      "Disaster recovery automation"
    ],
    icon: Cloud,
    color: "from-indigo-500 to-blue-600",
    popular: true,
    category: "Cloud & DevOps"
  },
  {
    id: 5,
    title: "Customer Behavior Analytics",
    description: "Understand and predict customer behavior with advanced AI analytics and insights.",
    price: "From $449/month",
    features: [
      "35% customer retention increase",
      "200% customer lifetime value boost",
      "50% churn reduction",
      "Real-time behavior insights"
    ],
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    popular: false,
    category: "Analytics"
  },
  {
    id: 6,
    title: "Global Digital Transformation",
    description: "Comprehensive digital transformation services for businesses worldwide.",
    price: "From $1,500/project",
    features: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Global implementation support"
    ],
    icon: Globe,
    color: "from-purple-500 to-indigo-600",
    popular: false,
    category: "Consulting"
  }
];

const categories = ["All"AI & Automation"Content & Marketing"Security"Cloud & DevOps"Analytics"Consulting"];

export default function UltimateServicesShowcase2025() {
  const [selectedCategorysetSelectedCategory] = React.useState("All");

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const UltimateServicesShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltimateServicesShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltimateServicesShowcase2025;