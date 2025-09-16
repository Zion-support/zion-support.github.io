<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  ArrowRight
  TrendingUp
  Users
  DollarSign
  Clock
  Target,
  CheckCircle,
  Star,
  Quote,
  Building2,
  Globe,
  Zap
} from 'lucide-react';

const EnterpriseSuccessStories = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Technology",
      size: "Fortune 500",
      challenge: "Inefficient supply chain management causing 30% cost overruns",
      solution: "AI-powered predictive analytics and autonomous optimization",
      results: {
        costReduction: "45%",
        efficiencyGain: "60%",
        timeSaved: "2,500 hours/month",
        roi: "340%"
      },
      quote: "Zion Tech Group transformed our entire supply chain. The AI solutions delivered results beyond our expectations.",
      author: "Sarah ChenCTO",
      logo: "TC",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      company: "HealthFirst Medical",
      industry: "Healthcare",
      size: "Enterprise",
      challenge: "Patient data management and diagnostic accuracy issues",
      solution: "Neural network-powered diagnostic assistance and automated patient care workflows",
      results: {
        costReduction: "35%",
        efficiencyGain: "80%",
        timeSaved: "1,800 hours/month",
        roi: "280%"
      },
      quote: "The AI diagnostic tools have improved our accuracy by 40% while reducing processing time by 60%.",
      author: "Dr. Michael RodriguezChief Medical Officer",
      logo: "HF",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      company: "FinanceMax International",
      industry: "Financial Services",
      size: "Fortune 1000",
      challenge: "Manual risk assessment processes causing delays and errors",
      solution: "Quantum-enhanced risk modeling and real-time fraud detection systems",
      results: {
        costReduction: "50%",
        efficiencyGain: "75%",
        timeSaved: "3,200 hours/month",
        roi: "420%"
      },
      quote: "Our risk assessment accuracy improved by 65% while reducing processing time from days to minutes.",
      author: "Jennifer WalshChief Risk Officer",
      logo: "FM",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 4,
      company: "ManufacturingPro",
      industry: "Manufacturing",
      size: "Mid-Market",
      challenge: "Production line inefficiencies and quality control issues",
      solution: "Autonomous manufacturing systems with predictive maintenance and quality optimization",
      results: {
        costReduction: "40%",
        efficiencyGain: "55%",
        timeSaved: "2,100 hours/month",
        roi: "310%"
      },
      quote: "The autonomous systems increased our production efficiency by 55% while reducing defects by 70%.",
      author: "Robert KimOperations Director",
      logo: "MP",
      color: "from-orange-500 to-red-600"
    }
  ];

  const keyMetrics = [
    {
      icon: DollarSign,
      value: "15,000%",
      label: "Average ROI",
      description: "Across all implementations"
    },
    {
      icon: Clock,
      value: "2,400",
      label: "Hours Saved",
      description: "Per month on average"
    },
    {
      icon: Target,
      value: "95%",
      label: "Success Rate",
      description: "Project completion rate"
    },
    {
      icon: Users,
      value: "500+",
      label: "Enterprises",
      description: "Successfully transformed"
    }
  ];

  const benefits = [
    "Reduced operational costs by 40-60%",
    "Increased efficiency by 50-80%",
    "Eliminated manual processes",
    "Improved decision-making accuracy",
    "Scalable and future-proof solutions",
    "24/7 autonomous operations"
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnterpriseSuccessStories: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnterpriseSuccessStories</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnterpriseSuccessStories;