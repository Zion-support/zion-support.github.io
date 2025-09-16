<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Play
  Code
  Brain
  Zap
  Shield
  Globe
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  BarChart3,
  Settings,
  Monitor,
  Smartphone,
  Laptop
} from 'lucide-react';

const InteractiveTechShowcase2026 = () => {
  const [activeDemosetActiveDemo] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  const [isPlayingsetIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const demos = [
    {
      id: 'ai-assistant',
      title: 'AI Assistant Demo',
      description: 'Experience our advanced AI assistant in action',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Natural language processing',
        'Real-time responses',
        'Context awareness',
        'Multi-language support'
      ],
      demoUrl: '/demos/ai-assistant',
      duration: '2 min',
      difficulty: 'Beginner'
    },
    {
      id: 'automation-workflow',
      title: 'Automation Workflow',
      description: 'See how complex processes are automated',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Visual workflow builder',
        'Drag-and-drop interface',
        'Real-time monitoring',
        'Error handling'
      ],
      demoUrl: '/demos/automation',
      duration: '3 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'security-dashboard',
      title: 'Security Dashboard',
      description: 'Monitor threats and security in real-time',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Threat detection',
        'Real-time alerts',
        'Security analytics',
        'Compliance monitoring'
      ],
      demoUrl: '/demos/security',
      duration: '4 min',
      difficulty: 'Advanced'
    },
    {
      id: 'global-analytics',
      title: 'Global Analytics',
      description: 'Comprehensive business intelligence platform',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Export capabilities'
      ],
      demoUrl: '/demos/analytics',
      duration: '5 min',
      difficulty: 'Intermediate'
    }
  ];

  const tools = [
    {
      name: 'ROI Calculator',
      description: 'Calculate your potential return on investment',
      icon: BarChart3,
      category: 'Business Tools',
      popularity: 95
    },
    {
      name: 'AI Code Generator',
      description: 'Generate code with AI assistance',
      icon: Code,
      category: 'Development',
      popularity: 88
    },
    {
      name: 'Security Scanner',
      description: 'Scan your systems for vulnerabilities',
      icon: Shield,
      category: 'Security',
      popularity: 92
    },
    {
      name: 'Performance Monitor',
      description: 'Monitor system performance in real-time',
      icon: Monitor,
      category: 'Monitoring',
      popularity: 87
    }
  ];

  const platforms = [
    { name: ''Web', 'icon: Laptopstatus: 'Available' },
    { name: ''Mobile', 'icon: Smartphonestatus: 'Available' },
    { name: ''Desktop', 'icon: Monitorstatus: 'Coming Soon' }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveTechShowcase2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveTechShowcase2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveTechShowcase2026;