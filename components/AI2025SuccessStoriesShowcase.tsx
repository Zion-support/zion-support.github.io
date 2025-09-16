<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  TrendingUp
  Users
  DollarSign
  Clock
  CheckCircle
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
  BarChart3,
  Globe,
  Shield,
  Lightbulb
} from 'lucide-react';

const AI2025SuccessStoriesShowcase = () => {
  const [activeStorysetActiveStory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }5000);
    return () => clearInterval(interval);
  }[]);

  const successStories = [
    {
      id: 1,
      company: "TechCorp Solutions",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate",
      solution: "AI-powered computer vision for real-time quality inspection",
      results: {
        efficiency: "+200%",
        cost: "-60%",
        quality: "99.2%",
        time: "-75%"
      },
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      testimonial: "AI transformed our production line. We now catch defects in real-time and reduced waste by 60%."
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual fraud detection missing 8% of fraudulent transactions",
      solution: "Machine learning algorithms for real-time fraud detection",
      results: {
        efficiency: "+150%",
        cost: "-45%",
        quality: "99.8%",
        time: "-80%"
      },
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      testimonial: "Our fraud detection accuracy improved dramatically. We saved millions in prevented losses."
    },
    {
      id: 3,
      company: "HealthTech Partners",
      industry: "Healthcare",
      challenge: "Manual patient data analysis taking 40 hours per week",
      solution: "AI-powered medical image analysis and patient data processing",
      results: {
        efficiency: "+300%",
        cost: "-70%",
        quality: "98.5%",
        time: "-85%"
      },
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      testimonial: "AI helps us diagnose patients faster and more accurately. 'It', 's revolutionizing healthcare delivery."
    },
    {
      id: 4,
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Poor customer service response times and low satisfaction",
      solution: "AI chatbot and recommendation engine for personalized shopping",
      results: {
        efficiency: "+180%",
        cost: "-50%",
        quality: "95%",
        time: "-90%"
      },
      icon: Users,
      color: "from-orange-500 to-red-500",
      testimonial: "Customer satisfaction increased by 95% and our support costs dropped by 50%. Amazing results!"
    }
  ];

  const metrics = [
    { icon: TrendingUplabel: "Average ROI"value: "340%" },
    { icon: Clocklabel: "Time Saved"value: "75%" },
    { icon: DollarSignlabel: "Cost Reduction"value: "55%" },
    { icon: CheckCirclelabel: "Success Rate"value: "98%" }
  ];

  const industries = [
    { name: "Manufacturing"count: "150+"icon: Target },
    { name: "Healthcare"count: "120+"icon: Lightbulb },
    { name: "Finance"count: "200+"icon: Shield },
    { name: "Retail"count: "180+"icon: Users },
    { name: "Education"count: "90+"icon: Award },
    { name: "Logistics"count: "110+"icon: Globe }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AI2025SuccessStoriesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AI2025SuccessStoriesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AI2025SuccessStoriesShowcase;