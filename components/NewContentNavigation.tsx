<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
  ArrowRight
  Star
  Zap
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  X,
  Play,
  Download,
  ExternalLink,
  Brain,
  Cpu,
  Database,
  Cloud,
  Shield
} from 'lucide-react';

const NewContentNavigation = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isExpandedsetIsExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentCategories = [
    {
      title: "AI Solutions",
      description: "Revolutionary AI technologies",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      href: "/ai-solutions",
      items: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "AI Automation"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      href: "/quantum-computing",
      items: [
        "Quantum Algorithms",
        "Quantum Machine Learning",
        "Quantum Security",
        "Quantum Optimization"
      ]
    },
    {
      title: "Neural Interfaces",
      description: "Brain-computer interface tech",
      icon: Database,
      color: "from-green-600 to-emerald-600",
      href: "/neural-interfaces",
      items: [
        "BCI Development",
        "Cognitive Enhancement",
        "Medical Applications",
        "Neural Signal Processing"
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions",
      icon: Cloud,
      color: "from-orange-600 to-red-600",
      href: "/cloud-infrastructure",
      items: [
        "Multi-Cloud Architecture",
        "Container Orchestration",
        "Serverless Computing",
        "Edge Computing"
      ]
    },
    {
      title: "Security Solutions",
      description: "Advanced security measures",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      href: "/security-solutions",
      items: [
        "Threat Detection",
        "Data Encryption",
        "Access Control",
        "Compliance Monitoring"
      ]
    },
    {
      title: "Ultimate Showcase",
      description: "Complete technology showcase",
      icon: Sparkles,
      color: "from-pink-600 to-rose-600",
      href: "/showcase/ultimate-2025",
      items: [
        "All Technologies",
        "Interactive Demos",
        "Case Studies",
        "Success Stories"
      ]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Breakthrough",
      description: "Latest AI innovations transforming industries",
      href: "/ai-solutions",
      badge: "HOT",
      icon: TrendingUp
    },
    {
      title: "Quantum Revolution",
      description: "Quantum computing solutions for complex problems",
      href: "/quantum-computing",
      badge: "NEW",
      icon: Zap
    },
    {
      title: "Neural Interface Demo",
      description: "Experience brain-computer interfaces",
      href: "/neural-interfaces",
      badge: "DEMO",
      icon: Play
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const NewContentNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewContentNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NewContentNavigation;