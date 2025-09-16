<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Play
  Pause
  RotateCcw
  Settings
  Code
  Database,
  Cpu,
  Network,
  BarChart3,
  Zap,
  Brain,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const InteractiveAIToolsDemo2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeDemosetActiveDemo] = useState(0);
  const [isRunningsetIsRunning] = useState(false);
  const [progressetProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)200);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }100);
    }
    return () => clearInterval(interval);
  }[isRunning]);

  const demos = [
    {
      id: 'ai-code-review',
      title: 'AI Code Review Assistant',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Automated code analysis and optimization suggestions',
      features: ['Security 'Scanning', 'Performance 'Optimization', 'Best 'Practices', 'Bug Detection'],
      metrics: { efficiency: '95%'accuracy: '98%'time: '3x faster' }
    },
    {
      id: 'data-analytics',
      title: 'Intelligent Data Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      description: 'Real-time data processing and predictive insights',
      features: ['Real-time 'Processing', 'Predictive 'Analytics', 'Data 'Visualization', 'Trend Analysis'],
      metrics: { efficiency: '90%'accuracy: '96%'time: '5x faster' }
    },
    {
      id: 'infrastructure-monitoring',
      title: 'Infrastructure Monitoring',
      icon: Network,
      color: 'from-purple-500 to-pink-500',
      description: 'Comprehensive system health and performance monitoring',
      features: ['Health 'Monitoring', 'Performance 'Tracking', 'Alert 'System', 'Auto-scaling'],
      metrics: { efficiency: '99%'accuracy: '99%'time: 'Real-time' }
    },
    {
      id: 'security-scanning',
      title: 'AI Security Scanner',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Advanced threat detection and vulnerability assessment',
      features: ['Threat 'Detection', 'Vulnerability 'Scanning', 'Risk 'Assessment', 'Compliance Check'],
      metrics: { efficiency: '97%'accuracy: '99%'time: '2x faster' }
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      company: 'TechFlow Inc.',
      content: 'The AI code review tool caught 15 critical security issues we missed. Incredible accuracy!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist',
      company: 'DataCorp',
      content: 'Our data processing speed increased by 500% with their analytics platform.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'CloudScale',
      content: 'Infrastructure monitoring has never been this comprehensive and reliable.',
      rating: 5
    }
  ];

  const handleStartDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const handleStopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const handleResetDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveAIToolsDemo2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveAIToolsDemo2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveAIToolsDemo2026;