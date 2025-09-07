<<<<<<< HEAD

<<<<<<< HEAD

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';
const Enhanced2026ServicesShowcase = $2;
      name: 'AI Business Intelligence Elite 2026',
      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
      price: '$299',
      period: '/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      category: 'AI & Analytics',
      features: ['Predictive AnalyticsReal-time InsightsCustom DashboardsAI-powered Reports']
    },
    {
      id: 'autonomous-ai-agents-platform-2026',
      name: 'Autonomous AI Agents Platform 2026',
      description: 'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199',
      period: '/month',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI & Automation',
      features: ['Task AutomationProcess Optimization24/7 OperationScalable Architecture']
    },
    {
      id: 'quantum-cybersecurity-suite-2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
      price: '$599',
      period: '/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      features: ['Quantum EncryptionThreat DetectionZero TrustCompliance Ready']
    },
    {
      id: 'neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026',
      description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499',
      period: '/month',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      category: 'Emerging Tech',
      features: ['Brain-like ProcessingLow PowerReal-time LearningCognitive Computing']
    },
    {
      id: 'dna-computing-platform-2026',
      name: 'DNA Computing Platform 2026',
      description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
      price: '$2,999',
      period: '/month',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      category: 'Emerging Tech',
      features: ['Molecular ProcessingExponential SpeedComplex AlgorithmsResearch Ready']
    },
    {
      id: 'space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026',
      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
      price: '$899',
      period: '/month',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      category: 'Space Tech',
      features: ['Real-time TrackingCollision PredictionSatellite SafetySpace Traffic Management']
    }
    {
      id: 'dna-computing-platform-2026'
      name: 'DNA Computing Platform 2026'
      description:
        'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.'
      price: '$2,999'
      period: '/month'
      icon: Globe
      color: 'from-indigo-500 to-purple-500'
      category: 'Emerging Tech'
      features: [
        'Molecular Processing'
        'Exponential Speed'
        'Complex Algorithms'
        'Research Ready'
      ]
    }
    {
      id: 'space-debris-tracking-system'
      name: 'Space Debris Tracking System 2026'
      description:
        'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',      price: '$899',      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.'
      price: '$899'
      period: '/month'
      icon: Rocket
      color: 'from-yellow-500 to-orange-500'
      category: 'Space Tech'
      features: [
        'Real-time Tracking'
        'Collision Prediction'
        'Satellite Safety'
        'Space Traffic Management'
      ]
=======
<<<<<<< HEAD
const Enhanced2026ServicesShowcase = null;
import { motion } from 'framer-motion;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {
  ArrowRight
  Brain
  Zap
  Shield
  Rocket
  Sparkles
  Star
  TrendingUp
  Globe
  Cpu
  Lock
  Cloud;
<<<<<<< HEAD
} from lucide-react';
import Link from 'next/link;import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from lucide-react';
import Link from 'next/link;
const Enhanced2026ServicesShowcase = () => {
  const featuredServices = [
    {
      id: 'ai-business-intelligence-elite-2026'
      name: 'AI Business Intelligence Elite 2026'
      description:
        'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',      price: '$299',      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.'
      price: '$299'
      period: '/month'
      icon: Brain
      color: 'from-purple-500 to-pink-500'
      category: 'AI & Analytics'
      features: [
        'Predictive Analytics'
        'Real-time Insights'
        'Custom Dashboards'
        'AI-powered Reports'
      ]
=======

import React from 'react';
import { motion  } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud  } from 'lucide-react';
import Link from 'next/link';

const Enhanced2026ServicesShowcase = null;
    {
      id: 'autonomous-ai-agents-platform-2026',
  name: 'Autonomous AI Agents Platform 2026'
      description: 'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
  price: '$199',
      period: '/month',
  icon: Zap,
      color: 'from-blue-500 to-cyan-500',
  category: 'AI & Automation',
features: [
=======
  ArrowRight,
  Brain,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Lock,;
  Cloud,;
} from 'lucide-react';
import Link from 'next/link';import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import { motion } from 'framer-motion';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import Link from 'next/link';
const Enhanced2026ServicesShowcase = () => {
  const featuredServices = [
    {

      id: 'ai-business-intelligence-elite-2026',
      name: 'AI Business Intelligence Elite 2026',
      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ArrowRight,
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';
const Enhanced2026ServicesShowcase = () => {
  const featuredServices = [
    {
      id: 'ai-business-intelligence-elite-2026',
      name: 'AI Business Intelligence Elite 2026',
      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
ArrowRight,
import React from 'react';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Globe,
  Cpu,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Lock,
  Cloud,
} from 'lucide-react';
import Link from 'next / link';import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next / link';
const Enhanced2026ServicesShowcase = () =>: any {
  const featured_services = [;
    {
      id: 'ai - business - intelligence - elite - 2026',
      name: 'AI Business Intelligence Elite 2026',
      description:;
        'Transform your business data into actionable intelligence with our advanced AI - powered analytics platform.',      price: '$299',      description: 'Transform your business data into actionable intelligence with our advanced AI - powered analytics platform.',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      price: '$299',
      period: '/month',
      icon: Brain,
      color: 'from - purple - 500 to - pink - 500',
      category: 'AI & Analytics',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      features: [;
        'Predictive Analytics',
        'Real - time Insights',
        'Custom Dashboards',
        'AI - powered Reports',
      ],
    },
<<<<<<< HEAD
    {
      id: 'autonomous - ai - agents - platform - 2026',
      name: 'Autonomous AI Agents Platform 2026',
      description:;
        'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199',      period: '/month',
      icon: Zap,
      color: 'from - blue - 500 to - cyan - 500',
      category: 'AI & Automation',
=======

    {
      id: 'autonomous - ai - agents - platform - 2026',
      name: 'Autonomous AI Agents Platform 2026',

      description:;
        'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199',      period: '/month',

      icon: Zap,
      color: 'from - blue - 500 to - cyan - 500',
      category: 'AI & Automation',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      features: [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        'Task Automation',
        'Process Optimization',
        '24/7 Operation',
        'Scalable Architecture'}
      ]}
>>>>>>> origin/chore/fix-lint-and-merge
    },
    {
      id: 'quantum-cybersecurity-suite-2026',
  name: 'Quantum Cybersecurity Suite 2026'
      description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
  price: '$599',
      period: '/month',
  icon: Shield,
      color: 'from-red-500 to-orange-500',
  category: 'Security',
features: [
        'Quantum Encryption',
        'Threat Detection',
        'Zero Trust',
        'Compliance Ready'}
      ]}
    },
    {
      id: 'neuromorphic-computing-platform-2026',
  name: 'Neuromorphic Computing Platform 2026',
      description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
  price: '$1,499',
      period: '/month',
  icon: Cpu,
      color: 'from-green-500 to-emerald-500',
  category: 'Emerging Tech',
      features: [
        'Brain-like Processing',
        'Low Power',
        'Real-time Learning',
        'Cognitive Computing'}
      ]}
    },
    {
      id: 'dna-computing-platform-2026',
  name: 'DNA Computing Platform 2026',
      description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
  price: '$2,999',
      period: '/month',
  icon: Globe,
      color: 'from-indigo-500 to-purple-500',
  category: 'Emerging Tech',
      features: [
        'Molecular Processing',
        'Exponential Speed',
        'Complex Algorithms',
        'Research Ready'}
      ]}
    },
    {
      id: 'space-debris-tracking-system',
  name: 'Space Debris Tracking System 2026',
      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
  price: '$899',
      period: '/month',
  icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
  category: 'Space Tech',
features: [
        'Real-time Tracking',
        'Collision Prediction',
        'Satellite Safety',
        'Space Traffic Management'}
      ]}
>>>>>>> merged-prs-20250907-203621
    }
  ];

const categories = [
  {name: 'AI Services'}
  count: '150+',icon: Brain,color: 'from-purple-500 to-pink-500'},{name: 'Quantum Tech'}
  count: '75+',icon: Sparkles,color: 'from-blue-500 to-cyan-500'},{name: 'Emerging Tech'}
  count: '100+',icon: Rocket,color: 'from-green-500 to-emerald-500'},{name: 'IT Solutions'}
  count: '200+',icon: Cloud,color: 'from-yellow-500 to-orange-500'}];
<<<<<<< HEAD
  return (<section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden' />;
=======
<<<<<<< HEAD
  return (<section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden' />;
=======
  return (<section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
      {/* Background Effects */}{ name: 'IT Solutions'}
  count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500'}
}
  const categories = [
    {
      name: 'AI Services'
      count: '150+'
      icon: Brain
      color: 'from-purple-500 to-pink-500'
    }
    {
      name: 'Quantum Tech'
      count: '75+'
      icon: Sparkles
      color: 'from-blue-500 to-cyan-500'
    }
    {
      name: 'Emerging Tech'
      count: '100+'
      icon: Rocket
      color: 'from-green-500 to-emerald-500'
    }
    {
      name: 'IT Solutions'
      count: '200+'
      icon: Cloud
      color: 'from-yellow-500 to-orange-500'
    }
<<<<<<< HEAD
  ];
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
=======
      id: 'autonomous-ai-agents-platform-2026'
      name: 'Autonomous AI Agents Platform 2026'
      description:
        'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199',
      period: '/month',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI & Automation',
features: [
        'Task Automation',
        'Process Optimization',
        '24/7 Operation',
        'Scalable Architecture',
      ],
    },
    {
<<<<<<< HEAD
      id: 'quantum-cybersecurity-suite-2026'
      name: 'Quantum Cybersecurity Suite 2026'
      description:
        'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
      price: '$599',
=======
      id: 'quantum - cybersecurity - suite - 2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description:;
        'Next - generation cybersecurity platform that uses quantum - resistant algorithms to protect against current and future cyber threats.',      price: '$599',      features: ['Task AutomationProcess Optimization24 / 7 OperationScalable Architecture'];
    }
<<<<<<< HEAD
    {
      id: 'quantum - cybersecurity - suite - 2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description: 'Next - generation cybersecurity platform that uses quantum - resistant algorithms to protect against current and future cyber threats.',
=======

    {
      id: 'quantum - cybersecurity - suite - 2026',
      name: 'Quantum Cybersecurity Suite 2026',

      description: 'Next - generation cybersecurity platform that uses quantum - resistant algorithms to protect against current and future cyber threats.',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      period: '/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
<<<<<<< HEAD
features: [
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      features: [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        'Quantum Encryption',
        'Threat Detection',
        'Zero Trust',
        'Compliance Ready',
      ],
    },
    {
      id: 'neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026',
      description:
        'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499',
      period: '/month',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      category: 'Emerging Tech',
<<<<<<< HEAD
      features: [
        'Brain-like Processing',
=======
      features: ['Brain - like ProcessingLow PowerReal - time LearningCognitive Computing'];
    }
    {
      id: 'dna - computing - platform - 2026',
      name: 'DNA Computing Platform 2026',
      description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
      price: '$2, 999';
      period: '/month',
      icon: Globe,
      color: 'from - indigo - 500 to - purple - 500',
      category: 'Emerging Tech',
      features: ['Molecular ProcessingExponential SpeedComplex AlgorithmsResearch Ready'];
    }
    {
      id: 'space - debris - tracking - system',
      name: 'Space Debris Tracking System 2026',
      description:;
        'Brain - inspired computing for next - generation AI with ultra - low power consumption and cognitive capabilities.',
      price: '$1, 499',
      period: '/month',
<<<<<<< HEAD
      icon: Cpu,
      color: 'from - green - 500 to - emerald - 500',
      category: 'Emerging Tech',
=======

      icon: Cpu,
      color: 'from - green - 500 to - emerald - 500',
      category: 'Emerging Tech',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: 'space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026',
      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
      features: [;
        'Brain - like Processing',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        'Low Power',
        'Real-time Learning',
        'Cognitive Computing',
      ],
    },
    {
      id: 'dna-computing-platform-2026',
      name: 'DNA Computing Platform 2026',
      description:
        'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
      price: '$2,999',
      period: '/month',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      category: 'Emerging Tech',
      features: [
        'Molecular Processing',
        'Exponential Speed',
        'Complex Algorithms',
        'Research Ready',
      ],
    },
    {
      id: 'space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026',
<<<<<<< HEAD
      description:
        'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
=======
      description:;
        'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',      price: '$899',      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      price: '$899',
      period: '/month',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      category: 'Space Tech',
<<<<<<< HEAD
features: [
        'Real-time Tracking',
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  ArrowRight,;
  Brain,;
  Zap,;
  Shield,;
  Rocket,;
  Sparkles,;
  Star,;
  TrendingUp,;
  Globe,;
  Cpu,;
  Lock,;
  Cloud,;
  Lock,;
  Cloud,;
} from 'lucide-react';
import Link from 'next/link';import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';
const Enhanced2026ServicesShowcase = () => {;
  const featuredServices = [;
    {;
      id: 'ai-business-intelligence-elite-2026',;
      name: 'AI Business Intelligence Elite 2026',;
      description:;
        'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',      price: '$299',      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',;
      price: '$299',;
      period: '/month',;
      icon: Brain,;
      color: 'from-purple-500 to-pink-500',;
      category: 'AI & Analytics',;
      features: [;
        'Predictive Analytics',;
        'Real-time Insights',;
        'Custom Dashboards',;
        'AI-powered Reports',;
      ],;
    },;
    {;
      id: 'autonomous-ai-agents-platform-2026',;
      name: 'Autonomous AI Agents Platform 2026',;
      description:;
        'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',;
      price: '$199',      period: '/month',;
      icon: Zap,;
      color: 'from-blue-500 to-cyan-500',;
      category: 'AI & Automation',;
      features: [;
        'Task Automation',;
        'Process Optimization',;
        '24/7 Operation',;
        'Scalable Architecture',;
      ],;
    },;
    {;
      id: 'quantum-cybersecurity-suite-2026',;
      name: 'Quantum Cybersecurity Suite 2026',;
      description:;
        'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',      price: '$599',      features: ['Task AutomationProcess Optimization24/7 OperationScalable Architecture'];
    };
    {;
      id: 'quantum-cybersecurity-suite-2026',;
      name: 'Quantum Cybersecurity Suite 2026',;
      description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',;
      period: '/month',;
      icon: Shield,;
      color: 'from-red-500 to-orange-500',;
      category: 'Security',;
      features: [;
        'Quantum Encryption',;
        'Threat Detection',;
        'Zero Trust',;
        'Compliance Ready',;
      ],;
    },;
    {;
      id: 'neuromorphic-computing-platform-2026',;
      name: 'Neuromorphic Computing Platform 2026',    {;
      id: 'neuromorphic-computing-platform-2026',;
      name: 'Neuromorphic Computing Platform 2026',;
      description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',;
      price: '$1,499';
      period: '/month',;
      icon: Cpu,;
      color: 'from-green-500 to-emerald-500',;
      category: 'Emerging Tech',;
      features: ['Brain-like ProcessingLow PowerReal-time LearningCognitive Computing'];
    };
    {;
      id: 'dna-computing-platform-2026',;
      name: 'DNA Computing Platform 2026',;
      description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',;
      price: '$2,999';
      period: '/month',;
      icon: Globe,;
      color: 'from-indigo-500 to-purple-500',;
      category: 'Emerging Tech',;
      features: ['Molecular ProcessingExponential SpeedComplex AlgorithmsResearch Ready'];
    };
    {;
      id: 'space-debris-tracking-system',;
      name: 'Space Debris Tracking System 2026',;
      description:;
        'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',;
      price: '$1,499',;
      period: '/month',;
      icon: Cpu,;
      color: 'from-green-500 to-emerald-500',;
      category: 'Emerging Tech',;
      features: [;
        'Brain-like Processing',;
        'Low Power',;
        'Real-time Learning',;
        'Cognitive Computing',;
      ],;
    },;
    {;
      id: 'dna-computing-platform-2026',;
      name: 'DNA Computing Platform 2026',;
      description:;
        'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',;
      price: '$2,999',;
      period: '/month',;
      icon: Globe,;
      color: 'from-indigo-500 to-purple-500',;
      category: 'Emerging Tech',;
      features: [;
        'Molecular Processing',;
        'Exponential Speed',;
        'Complex Algorithms',;
        'Research Ready',;
      ],;
    },;
    {;
      id: 'space-debris-tracking-system',;
      name: 'Space Debris Tracking System 2026',;
      description:;
        'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',      price: '$899',      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',;
      price: '$899',;
      period: '/month',;
      icon: Rocket,;
      color: 'from-yellow-500 to-orange-500',;
      category: 'Space Tech',;
      features: [;
        'Real-time Tracking',;
        'Collision Prediction',;
        'Satellite Safety',;
        'Space Traffic Management',;
      ],;
    },;
  ];
  const categories = [;
    {;
      name: 'AI Services',;
      count: '150+',;
      icon: Brain,;
      color: 'from-purple-500 to-pink-500',;
    },;
    {;
      name: 'Quantum Tech',;
      count: '75+',;
      icon: Sparkles,;
      color: 'from-blue-500 to-cyan-500',;
    },;
    {;
      name: 'Emerging Tech',;
      count: '100+',;
      icon: Rocket,;
      color: 'from-green-500 to-emerald-500',;
    },;
    {;
      name: 'IT Solutions',;
      count: '200+',;
      icon: Cloud,;
      color: 'from-yellow-500 to-orange-500',;
    },;
  ];
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];



  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>;
>>>>>>> merged-prs-20250907-203621
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'></div>
      <div className='max-w-7xl mx-auto relative z-10'>        {/* Section Header */}  ];
  const categories = [
    { name: 'AI Services', count: '150+', icon: Brain, color: 'from-purple-500 to-pink-500' }
    { name: 'Quantum Tech', count: '75+', icon: Sparkles, color: 'from-blue-500 to-cyan-500' }
    { name: 'Emerging Tech', count: '100+', icon: Rocket, color: 'from-green-500 to-emerald-500' }
    { name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500' }
  ],

<<<<<<< HEAD
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
=======
<<<<<<< HEAD

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>;
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'></div>;
      <div className='max-w-7xl mx-auto relative z-10'>        {/* Section Header */}  ];
=======
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'></div>;
      <div className='max-w-7xl mx-auto relative z-10'>        {/* Section Header */}  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const categories = [;
    { name: 'AI Services', count: '150+', icon: Brain, color: 'from-purple-500 to-pink-500' },;
    { name: 'Quantum Tech', count: '75+', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },;
    { name: 'Emerging Tech', count: '100+', icon: Rocket, color: 'from-green-500 to-emerald-500' },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    { name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">;
      {/* Background Effects */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Section Header */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}


        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              2026 Revolutionary Services
            </span>
          </h2>
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>
            Experience the future with our cutting-edge AI, quantum, and
            emerging technology services designed to transform your business          </p>        >
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
          </p>
        </motion.div>


          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>;
            Experience the future with our cutting-edge AI, quantum, and;
            emerging technology services designed to transform your business          </p>        >;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">;
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business;
          </p>;
        </motion && motion.div>;
<<<<<<< HEAD



=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Category Overview */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
          viewport={{ once: true }}

<<<<<<< HEAD
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        >
          {categories.map((category, index) => (
            <motion.div
      features: [;
        'Real - time Tracking',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        'Collision Prediction',
        'Satellite Safety',
        'Space Traffic Management',
      ],
    },
origin/cursor/automate-test-improve-and-merge-code-2533
  ];
<<<<<<< HEAD
  const categories = [;
    {;'
      name: 'AI Services',;'
      count: '150+',;
      icon: Brain,;'
      color: 'from-purple-500 to-pink-500',;
    },;
    {;'
      name: 'Quantum Tech',;'
      count: '75+',;
      icon: Sparkles,;'
      color: 'from-blue-500 to-cyan-500',;
    },;
    {;'
      name: 'Emerging Tech',;'
      count: '100+',;
      icon: Rocket,;'
      color: 'from-green-500 to-emerald-500',;
    },;
    {;'
      name: 'IT Solutions',;'
      count: '200+',;
      icon: Cloud,;'
      color: 'from-yellow-500 to-orange-500',;
    },;
  ];
  return ('
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>;
      {/* Background Effects */}'
    { name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">;
      {/* Background Effects */}
  return (<section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">;
      {/* Background Effects */}<div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'></div>;
      <div className='max-w-7xl mx-auto relative z-10'>;
        {/* Section Header */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
=======

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'    />;
      {/* Background Effects */}

      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'    /></div>

      <div className='max-w-7xl mx-auto relative z-10'    />

        {/* Section Header */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }
}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

          viewport={{ once: true }
}

<<<<<<< HEAD
className='text-center mb-16'
         />
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6' />
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' />
              2026 Revolutionary Services;
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
=======
<<<<<<< HEAD
  const categories = [
    { name: 'AI Services', count: '150+', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Tech', count: '75+', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },
    { name: 'Emerging Tech', count: '100+', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500' }
  ],

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true}}
          className="text-center mb-16"
        >
          <h2 className='text-4xl "md":text-5xl font-bold text-white mb-6'>'
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>'
              2026 Revolutionary Services
=======
className='text-center mb-16'
            />
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
              2026 Revolutionary Services;
>>>>>>> origin/chore/fix-lint-and-merge
            </span>
          </h2>
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'    />
            Experience the future with our cutting-edge AI, quantum, and;
emerging technology services designed to transform your business;
>>>>>>> merged-prs-20250907-203621
          </p>
        </motion.div>

          className='text-center mb-16'>;
<<<<<<< HEAD
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6' />;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' />;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed' />;
            Experience the future with our cutting-edge AI, quantum, and;
            emerging technology services designed to transform your business          </p>        >;
          <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\" />;"
            <span className=\"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\" />;
              2026 Revolutionary Services;
            </span>;
          </h2>;"
          <p className=\"text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed\" />;
=======
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'    />;
            Experience the future with our cutting-edge AI, quantum, and;
            emerging technology services designed to transform your business          </p>        >;
          <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-6\"    />;"
            <span className=\"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\"    />;
              2026 Revolutionary Services;
            </span>;
          </h2>;"
          <p className=\"text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed\"    />;
>>>>>>> merged-prs-20250907-203621
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business;
          </p>;
        </motion && motion.div>;{/* Category Overview */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }
}
          whileInView={{ opacity: 1, y: 0 }
}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}

<<<<<<< HEAD
          viewport={{ once: true }
}

className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
         />
          {categories.map((category, index) => (}
            <motion.div;}
key={category.name}
              initial={{ opacity: 0, scale: 0.8 }
}
              whileInView={{ opacity: 1, scale: 1 }
}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }
}
              whileHover={{ scale: 1.05, y: -5 }
}

className='group text-center'
             />

              whileInView={{ opacity: 1, scale: 1 }
}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 + index * 0 && 0.1 }}
              viewport={{ once: true }
}
              whileHover={{ scale: 1 && 1.05, y: -5 }
}
              className='group text-center'>;

              <div;
className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover: shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
                  />
                <category.icon className='w-8 h-8 text-white'    />
=======
<<<<<<< HEAD

        >
          {categories.map((category, index) => (
            <motion.div
          viewport={{ once: true }}>;
          {categories.map((category, index) => (<motion.div;
      features: [;
        'Real - time Tracking','Collision Prediction','Satellite Safety','Space Traffic Management',],},];const categories = [;
    {name: 'AI Services',count: '150+',icon: Brain,color: 'from - purple - 500 to - pink - 500',},{name: 'Quantum Tech',count: '75+',icon: Sparkles,color: 'from - blue - 500 to - cyan - 500',},{name: 'Emerging Tech',count: '100+',icon: Rocket,color: 'from - green - 500 to - emerald - 500',},{name: 'IT Solutions',count: '200+',icon: Cloud,color: 'from - yellow - 500 to - orange - 500',},];return (<section className='py - 20 px - 4 sm:px - 6 lg:px - 8 relative overflow - hidden'>;
      {/* Background Effects */}
      <div className='absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 900 / 10 to - cyan - 900 / 10'></div>;
      <div className='max - w-7xl mx - auto relative z - 10'>        {/* Section Header */}  ];const categories = [;
    { name: 'AI Services', count: '150+', icon: Brain, color: 'from - purple - 500 to - pink - 500' },{ name: 'Quantum Tech', count: '75+', icon: Sparkles, color: 'from - blue - 500 to - cyan - 500' },{ name: 'Emerging Tech', count: '100+', icon: Rocket, color: 'from - green - 500 to - emerald - 500' },{ name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from - yellow - 500 to - orange - 500' }
  ];return (<section className="py - 20 px - 4 sm:px - 6 lg:px - 8 relative overflow - hidden">;
      {/* Background Effects */}
      <div className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 900 / 10 to - cyan - 900 / 10"></div>;
      <div className="max - w-7xl mx - auto relative z - 10">;
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
          viewport={{ once: true }}className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16';
        >;
          {categories.map((category, index) => (<motion.div;
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
          viewport={{ once: true }}
            >
className='group text-center';
            >;
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 + index * 0 && 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1 && 1.05, y: -5 }}
              className='group text-center'>;
              <div;
=======
          viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className='text - center mb - 16';
        >;
          <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className='text - gray - 300 text - xl max - w-3xl mx - auto leading - relaxed'>;
            Experience the future with our cutting - edge AI, quantum, and;
            emerging technology services designed to transform your business          </p>        >;
          <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
            <span className="bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className="text - gray - 300 text - xl max - w-3xl mx - auto leading - relaxed">;
            Experience the future with our cutting - edge AI, quantum, and emerging technology services designed to transform your business;
          </p>;
        </motion.div>;
        {/* Category Overview */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 16'        >          className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 16";
        >;
          {categories.map ((category, index) => (
            <motion.div;
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 + index * 0 && 0.1 }}
              viewport={{ once: true }}

              whileHover={{ scale: 1.05, y: -5 }}
              className='group text-center'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



            >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div
              <div;
                className={`w-16 h-16 bg-gradient-to-br ${category && category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>;
                <category && category.icon className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-lg font-bold text-white mb-2'>;
                {category && category.name}
              </h3>;
              <p className='text-2xl font-bold text-cyan-400'>;
                {category && category.count}
              </p>            </motion && motion.div>            >;
              <div className={`w-16 h-16 bg-gradient-to-br ${category && category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>;
                <category && category.icon className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-lg font-bold text-white mb-2">{category && category.name}</h3>;
              <p className="text-2xl font-bold text-cyan-400">{category && category.count}</p>;
<<<<<<< HEAD
            </motion && motion.div>;className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
              >;
                <category.icon className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-lg font-bold text-white mb-2'>;
                {category.name}
              </h3>;
              <p className='text-2xl font-bold text-cyan-400'>;
          transition={{ duration: 0 && 0.6 }}
=======
            </motion && motion.div>;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{category.count}</p>
            </motion.div>

          ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              2026 Revolutionary Services;
            </span>
          </h2>'
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>
            Experience the future with our cutting-edge AI, quantum, and
            emerging technology services designed to transform your business
          </p>
        </motion.div>'
          className='text-center mb-16'>;'
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;'
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              2026 Revolutionary Services;
            </span>;
          </h2>;'
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>;
            Experience the future with our cutting-edge AI, quantum, and;
            emerging technology services designed to transform your business          </p>        >;"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;"
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
              2026 Revolutionary Services;
            </span>;
          </h2>;"
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">;
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business;
          </p>;
        </motion && motion.div>;


<<<<<<< HEAD


        {/* Category Overview */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
          viewport={{ once: true }}
=======
<<<<<<< HEAD
          ))}
        </motion && motion.div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Featured Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>          {featuredServices && featuredServices.map((service, index) => (        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
          {featuredServices && featuredServices.map((service, index) => (;
            <motion&& motion.div
              key={service && service.id}
              initial={{ opacity: 0, scale: 0 && 0.8, y: 20 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
          viewport={{ once: true }
}

className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
            />
          {categories.map((category, index) => (}
            <motion.div;}
key={category.name}
              initial={{ opacity: 0, scale: 0.8 }
}
              whileInView={{ opacity: 1, scale: 1 }
}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }
}
              whileHover={{ scale: 1.05, y: -5 }
}

<<<<<<< HEAD
className='group text-center''
            >
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 + index * 0 && 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1 && 1.05, y: -5 }}'
              className='group text-center'>;
              <div;
className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover: shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
                  />
                <category.icon className='w-8 h-8 text-white'    />
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>'
    {}
  const categories = [
    {
      name: AI Services'
      count: '150+
      icon: Brain
      color: from-purple-500 to-pink-500'
    }
    {
      name: 'Quantum Tech
      count: 75+'
      icon: Sparkles
      color: 'from-blue-500 to-cyan-500
    }
    {
      name: Emerging Tech'
      count: '100+
      icon: Rocket
      color: from-green-500 to-emerald-500'
    }
    {
      name: 'IT Solutions
      count: 200+'
      icon: Cloud
      color: 'from-yellow-500 to-orange-500
    }
      id: autonomous-ai-agents-platform-2026'
      name: 'Autonomous AI Agents Platform 2026
      description:
        Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199,
      period: /month',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500,
      category: AI & Automation',
features: [
        'Task Automation,
        Process Optimization',
        '24/7 Operation,
        Scalable Architecture']},
    {
      id: 'quantum-cybersecurity-suite-2026
      name: Quantum Cybersecurity Suite 2026'
      description:
        'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.,
      price: $599',
      period: '/month,
      icon: Shield,
      color: from-red-500 to-orange-500',
      category: 'Security,
features: [
        Quantum Encryption',
        'Threat Detection,
        Zero Trust',
        'Compliance Ready]},
    {
      id: neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026,
      description:
        Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499,
      period: /month',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500,
      category: Emerging Tech',
      features: [
        'Brain-like Processing,
        Low Power',
        'Real-time Learning,
        Cognitive Computing']},
    {
      id: 'dna-computing-platform-2026,
      name: DNA Computing Platform 2026',
      description:
        'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.,
      price: $2,999',
      period: '/month,
      icon: Globe,
      color: from-indigo-500 to-purple-500',
      category: 'Emerging Tech,
      features: [
        Molecular Processing',
        'Exponential Speed,
        Complex Algorithms',
        'Research Ready]},
    {
      id: space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026,
      description:
        Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
      price: '$899,
      period: /month',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500,
      category: Space Tech',
features: [
        'Real-time Tracking,
        Collision Prediction',
        'Satellite Safety,
        Space Traffic Management']},
origin/cursor/automate-test-improve-and-merge-code-2533
  ];
  const categories = [;
    {'
      name: AI Services,'
      count: '150+,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'},
    {
      name: Quantum Tech','
      count: 75+,
      icon: Sparkles,'
      color: 'from-blue-500 to-cyan-500},
    {
      name: 'Emerging Tech',
      count: 100+',
      icon: Rocket,'
      color: from-green-500 to-emerald-500},
    {'
      name: 'IT Solutions,
      count: '200+',
      icon: Cloud,
      color: from-yellow-500 to-orange-500'}];
  return ('
    <section className=py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden>;
      {/* Background Effects */}'
    { name: 'IT Solutions, count: 200+', icon: Cloud, color: 'from-yellow-500 to-orange-500 }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden>;
      {/* Background Effects */}

        {/* Section Header */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}

  return (
    <section className=py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10></div>
      
      <div className=max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            <span className=bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              2026 Revolutionary Services;
            </span>
          </h2>'
          <p className=text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed>

          </p>
        </motion.div>'
          className='text-center mb-16>;
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
            <span className=bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              2026 Revolutionary Services;
            </span>;
          </h2>;'
          <p className=text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed>;
            Experience the future with our cutting-edge AI, quantum, and;
            emerging technology services designed to transform your business          </p>        >;"
          <h2 className=text-4xl md:text-5xl font-bold text-white mb-6>;"
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent>;
              2026 Revolutionary Services;
            </span>;
          </h2>;
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">;
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business;
          </p>;
        </motion && motion.div>;




        {/* Category Overview */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
          viewport={{ once: true }}



        >
          {categories.map((category, index) => (
            <motion.div;
      features: [;'
        'Real - time Tracking,
        'Collision Prediction',
        Satellite Safety','
        Space Traffic Management]}];
    {'
      name: 'AI Services,
      count: '150+',
      icon: Brain,
      color: from - purple - 500 to - pink - 500'},
    {'
      name: Quantum Tech,'
      count: '75+,
      icon: Sparkles,
      color: 'from - blue - 500 to - cyan - 500'},
    {
      name: Emerging Tech','
      count: 100+,
      icon: Rocket,'
      color: 'from - green - 500 to - emerald - 500},
    {
      name: 'IT Solutions',
      count: 200+',
      icon: Cloud,'
      color: from - yellow - 500 to - orange - 500}];
  return ('
    <section className='py - 20 px - 4 sm:px - 6 lg:px - 8 relative overflow - hidden>;
      {/* Background Effects */}
      <div className='absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 900 / 10 to - cyan - 900 / 10'></div>;
      <div className=max - w-7xl mx - auto relative z - 10'>        {/* Section Header */}  ];
  const categories = [;'
    { name: AI Services, count: '150+', icon: Brain, color: from - purple - 500 to - pink - 500 },'
    { name: 'Quantum Tech, count: 75+', icon: Sparkles, color: 'from - blue - 500 to - cyan - 500 },
    { name: 'Emerging Tech', count: 100+, icon: Rocket, color: 'from - green - 500 to - emerald - 500' },
    { name: IT Solutions', count: '200+, icon: Cloud, color: from - yellow - 500 to - orange - 500' }
  ];
  return (
    <section className=py - 20 px - 4 sm:px - 6 lg:px - 8 relative overflow - hidden">;
      {/* Background Effects */}"
      <div className=absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 900 / 10 to - cyan - 900 / 10></div>;"
      <div className="max - w-7xl mx - auto relative z - 10>;
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
className=group text-center'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 + index * 0 && 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1 && 1.05, y: -5 }}'
              className=group text-center>;
              <div;

className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover: shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
                  />
                <category.icon className='w-8 h-8 text-white'    />
              </div>
              <h3 className=text-lg font-bold text-white mb-2    />

                {category.nam}

              </h3>
              <p className='text-2xl font-bold text-cyan-400'    />
                {category.count}
            </motion && motion.div>;
          ))}
        {/* Featured Services Grid */}

<<<<<<< HEAD
<div className='grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16'>'
=======
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>          {featuredServices.map((service, index) => (



<<<<<<< HEAD
        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        >
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              2026 Revolutionary Services
            </span>
          </h2>
          <p className=&quot;text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed&quot;>
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
          </p>
        </motion.div>

        {_/* Category Overview */}
          className='text-center mb-16'

        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              2026 Revolutionary Services
            </span>
          </h2>
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>
            Experience the future with our cutting-edge AI, quantum, and
            emerging technology services designed to transform your business          </p>        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
          </p>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'        >          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'        >

        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className='group text-center'

            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
              >
                <category.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>
                {category.name}
              </h3>
              <p className='text-2xl font-bold text-cyan-400'>
                {category.count}
              </p>            </motion.div>            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{category.count}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Featured Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>          {featuredServices.map((service, index) => (        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          ))}
        </motion.div>

        {/* Featured Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>          {featuredServices.map((service, index) => (

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {featuredServices.map((service, index) => (
            <motion.div
              </p>;
            </motion.div>;
          ))}
        {/* Featured Services Grid */}<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>;
          {featuredServices.map((service, index) => (<motion.div;
                className={`w-16 h-16 bg-gradient-to-br ${category && category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>;'
                <category && category.icon className='w-8 h-8 text-white' />;
              </div>;'
              <h3 className='text-lg font-bold text-white mb-2'>;
                {category && category.name}
              </h3>;'
              <p className='text-2xl font-bold text-cyan-400'>;
                {category && category.count}
              </p>            </motion && motion.div>            >;`
              <div className={`w-16 h-16 bg-gradient-to-br ${category && category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>;"
                <category && category.icon className="w-8 h-8 text-white" />;
              </div>;"
              <h3 className="text-lg font-bold text-white mb-2">{category && category.name}</h3>;"
              <p className="text-2xl font-bold text-cyan-400">{category && category.count}</p>;
            </motion && motion.div>;
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
              >
                <category.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>
                {category.name}
              </h3>
              <p className='text-2xl font-bold text-cyan-400'>
                {category.count}
              </p>
            </motion.div>
origin/cursor/automate-test-improve-and-merge-code-2533
          ))}
        {/* Featured Services Grid */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {featuredServices.map((service, index) => (
            <motion.div;
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
<<<<<<< HEAD
              viewport={{ once: true }}whileHover={{ scale: 1.02, y: -5 }}
className='group relative';
            >;
              <div;
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-"hover": blur-2xl transition-all duration-500,`}
              ></div>;
              <div className='relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 "hover":border-cyan-500/40 transition-all duration-300'>;'
                {/* Service Header */}

                <div className='flex items-center space-x-3 mb-4'>'
                  <div,
className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}`                  >
                    <service.icon className='w-6 h-6 text-white' />'
=======
              viewport={{ once: true }}
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            >
              whileHover={{ scale: 1.02, y: -5 }}
              className='group relative'

            >
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className='relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300'>
                {/* Service Header */}
                <div className='flex items-center space-x-3 mb-4'>
                  <div
<<<<<<< HEAD
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                  >
                    <service.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>
                      {service.name}
                    </h3>
                    <p className='text-gray-400 text-sm'>{service.category}</p>                  </div>
                </div>
                {/* Description */}
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>                  {service.description}
                </p>
                {/* Features */}            >
=======

              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>'

                      {service.name}
                    </h3>;
                    <p className='text-gray-400 text-sm'>{service.category}</p>;'
                  </div>;
                </div>;
                {/* Description */}
<p className='text-gray-300 text-sm mb-4 leading-relaxed'>;

<p className='text-gray-300 text-sm mb-4 leading-relaxed'>'

<<<<<<< HEAD
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {service.description}
<<<<<<< HEAD
                </p>;
                    className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}>`
                    <service && service.icon className='w-6 h-6 text-white' />;'
=======
                </p>
                    className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}>;
                    <service && service.icon className='w-6 h-6 text-white' />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                  <div>;
                    <h3 className='text-lg font-bold text-white'>;'
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-400 text-sm'>{service && service.category}</p>                  </div>;'
                </div>;
<<<<<<< HEAD
=======
                {/* Description */}
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>                  {service && service.description}
                </p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {/* Features */}            >;
              <div className={`absolute inset-0 bg-gradient-to-r ${service && service.color} opacity-10 rounded-2xl blur-xl group-"hover": blur-2xl transition-all duration-500,`}></div>;
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 "hover":border-cyan-500/40 transition-all duration-300">;"
                {/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">;"
                  <div className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}>`
                    <service && service.icon className="w-6 h-6 text-white" />;"
                  </div>;
                  <div>;
                    <h3 className="text-lg font-bold text-white">{service && service.name}</h3>;"
                    <p className="text-gray-400 text-sm">{service && service.category}</p>;"
                  </div>;
                </div>;
                {/* Description */}
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>                <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
                  {service && service.description}
                </p>;
                {/* Features */}
<<<<<<< HEAD
=======

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true}}
              whileHover={{ scale: 1.05, y: -5 }}
              className=group text-center
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
>>>>>>> merged-prs-20250907-203621
              </div>
              <h3 className=text-lg font-bold text-white mb-2>{category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{category.count}</p>
=======
<<<<<<< HEAD
className='group text-center'
                />

              whileInView={{ opacity: 1, scale: 1 }
}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 + index * 0 && 0.1 }}
              viewport={{ once: true }
}
              whileHover={{ scale: 1 && 1.05, y: -5 }
}
              className='group text-center'>;

              <div;
className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover: shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
                  />
                <category.icon className='w-8 h-8 text-white'    />
              </div>
              <h3 className='text-lg font-bold text-white mb-2'    />

                {category.nam}
}
              </h3>;
              <p className='text-2xl font-bold text-cyan-400'    />;
                {category.count}

              </p>
>>>>>>> origin/chore/fix-lint-and-merge
            </motion.div>
          ))}
        {/* Featured Services Grid */}
<<<<<<< HEAD
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16>
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20}}
              whileInView={{ opacity: 1, scale: 1, y: 0}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true}}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className=relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300>
                {/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className=w-6 h-6 text-white />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className=text-gray-400 text-sm>{service.category}</p>
                  </div>
                </div>
=======

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'    />
          {featuredServices.map((service, index) => (}
            <motion.div;}
key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }
}
              whileInView={{ opacity: 1, scale: 1, y: 0 }
}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              viewport={{ once: true }
}whileHover={{ scale: 1.02, y: -5 }
}
className='group relative'    />

              <div;
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover: blur-2xl transition-all duration-500
}
                  /></div>;
              <div className='relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300'    />;
                {/* Service Header */}
>>>>>>> origin/chore/fix-lint-and-merge

                <div className='flex items-center space-x-3 mb-4'    />
                  <div;
className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                      />
                    <service.icon className='w-6 h-6 text-white'    />
                  </div>
                  <div    />
                    <h3 className='text-lg font-bold text-white'    />

                      {service.name}
                    </h3>;
                    <p className='text-gray-400 text-sm'    />{service.category}</p>;
                  </div>;
                </div>;
                {/* Description */}

<<<<<<< HEAD
                {/* Features */}
                <div className=mb-4>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="mb-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <ul className="space-y-1">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className=flex items-center text-gray-400 text-xs>
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD
                        {feature}
=======
<<<<<<< HEAD
                {/* Features */}<div className=mb-4>;
                  <ul className="space-y-1">;
                    {service.features.slice(0, 2).map((feature, i) => (<li key={i} className=flex items-center text-gray-400 text-xs>;
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />;
                  {service.description}
                </p>;
                {/* Features */}{feature}<div className=mb-4'>;
                  <ul className='space-y-1>;
                    {service.features.slice(0, 2).map((feature, i) => (<li;
                        key={i}
                        className=flex items-center text-gray-400 text-xs';
                      >;
                        <Star className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0 />;
                        {feature}</li>;
                    ))}
                {/* Price and CTA */}<div className=flex items-center justify-between'>;
<div className='flex items-center justify-between>;
                  <div>;
                    <span className=text-2xl font-bold text-cyan-400'>;
                      {service.price}
                    </span>;
                    <span className='text-gray-400 text-sm'>;
              viewport={{ once: true }}

              whileHover={{ scale: 1.02, y: -5 }}
className='group relative'
            >
              <div;`
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className='relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300'>
                {/* Service Header */}
                <div className=flex items-center space-x-3 mb-4'>
                  <div;`
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className=relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                {/* Service Header */}"
                <div className=flex items-center space-x-3 mb-4>`
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>"
                    <service.icon className="w-6 h-6 text-white />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className=text-gray-400 text-sm">{service.category}</p>
                  </div>
                </div>
                {/* Description */}
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                  >
                    <service.icon className='w-6 h-6 text-white />
                  </div>
                  <div>
                    <h3 className=text-lg font-bold text-white'>
                      {service.name}
                    </h3>
                    <p className='text-gray-400 text-sm>{service.category}</p>
                  </div>
                </div>
                {/* Description */}
<p className=text-gray-300 text-sm mb-4 leading-relaxed'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {service.description}
                </p>`
                    className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}>;'
                    <service && service.icon className=w-6 h-6 text-white />;
                  </div>;
                  <div>;'
                    <h3 className='text-lg font-bold text-white>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-400 text-sm'>{service && service.category}</p>                  </div>;
                </div>;
                {/* Features */}            >;`
              <div className={`absolute inset-0 bg-gradient-to-r ${service && service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>;"
              <div className=relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300>;
                {/* Service Header */}"
                <div className="flex items-center space-x-3 mb-4>;`
                  <div className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}>;
                    <service && service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className=text-lg font-bold text-white">{service && service.name}</h3>;"
                    <p className=text-gray-400 text-sm>{service && service.category}</p>;
                  </div>;
                </div>;
                {/* Description */}"
                <p className=text-gray-300 text-sm mb-4 leading-relaxed'>                <p className="text-gray-300 text-sm mb-4 leading-relaxed>;
                  {service && service.description}
                </p>;
                {/* Features */}
                <div className="mb-4">
                  <ul className=space-y-1">
                    {service.features.slice(0, 2).map((feature, i) => ("
                      <li key={i} className=flex items-center text-gray-400 text-xs>"
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0 />
=======
<<<<<<< HEAD
=======
                        {feature}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


                  {service.description}
                </p>

                {/* Features */}

                        {feature}


<<<<<<< HEAD
=======

<<<<<<< HEAD
                      </li>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    ))}

                  </ul>;
                </div>;
<<<<<<< HEAD



                {/* Price and CTA */}



                  {service.description}
                </p>

                {/* Features */}

                        {feature}

>>>>>>> merged-prs-20250907-203621
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm">{service.period}</span>
                  </div>
                  <Link 
                    href={`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
=======
                {/* Price and CTA */}
                <div className='flex items-center justify-between'>

                {/* Price and CTA */}
                <div className='flex items-center justify-between'>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
<p className='text-gray-300 text-sm mb-4 leading-relaxed'    />

                  {service.description}
                </p>;
                    className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}>

                    <service && service.icon className='w-6 h-6 text-white'    />;
                  </div>;
                  <div    />;
                    <h3 className='text-lg font-bold text-white'    />;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-400 text-sm'    />{service && service.category}</p>                  </div>;
                </div>;
                {/* Features */}            >;
              <div className={`absolute inset-0 bg-gradient-to-r ${service && service.color} opacity-10 rounded-2xl blur-xl group-hover: blur-2xl transition-all duration-500
}    /></div>;"
              <div className=\"relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300\"    />;
                {/* Service Header */}"
                <div className=\"flex items-center space-x-3 mb-4\"    />;
                  <div className={`w-12 h-12 bg-gradient-to-br ${service && service.color} rounded-xl flex items-center justify-center`}    />
"
                    <service && service.icon className=\"w-6 h-6 text-white\"    />;
                  </div>;
                  <div    />;"
                    <h3 className=\"text-lg font-bold text-white\"    />{service && service.name}</h3>;"
                    <p className=\"text-gray-400 text-sm\"    />{service && service.category}</p>;
                  </div>;
                </div>;
                {/* Description */}"
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'    />                <p className=\"text-gray-300 text-sm mb-4 leading-relaxed\"    />;
                  {service && service.description}
                </p>;

                {/* Features */}

<div className='mb-4'    />
                  <ul className='space-y-1'    />
                    {service.features.slice(0, 2).map((feature, i) => (}
                      <li;}
key={i}
                        className='flex items-center text-gray-400 text-xs'
                          />
                        <Star className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0'    />
>>>>>>> origin/chore/fix-lint-and-merge
                        {feature}
                      </li>
                    ))}
<<<<<<< HEAD
                {/* Price and CTA */}'
                <div className=flex items-center justify-between>


<<<<<<< HEAD
<div className='flex items-center justify-between'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {/* Price and CTA */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <div>
                    <span className='text-2xl font-bold text-cyan-400'>
                      {service.price}
                    </span>'
                    <span className='text-gray-400 text-sm'>
=======
                {/* Price and CTA */}

<div className='flex items-center justify-between'    />
                  <div    />
                    <span className='text-2xl font-bold text-cyan-400'    />

                      {service.price}
                    </span>;
                    <span className='text-gray-400 text-sm'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      {service.period}
<<<<<<< HEAD
                    </span>;
                  </div>;
                    ))}
                {/* Price and CTA */}
                <div className='flex items-center justify-between'    />;
                  <div    />;
                    <span className='text-2xl font-bold text-cyan-400'    />;
                      {service && service.price}
                    </span>;
<<<<<<< HEAD
                    <span className='text-gray-400 text-sm'>;
=======
                    <span className='text-gray-400 text-sm'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      {service && service.period}
                    </span>;
                  </div>;
=======
                    </span>
                  </div>
<<<<<<< HEAD
                  <Link
                    href={`/${service.id}`}
                    className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200'
                  >
                    Learn More <ArrowRight className='w-4 h-4 ml-1' />                  </Link>                  <div>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <Link
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
                  <Link,
href={`/${service.id}`}`                    className='inline-flex items-center text-cyan-400 "hover": text-cyan-300 transition-colors text-sm font-medium group-"hover":translate-x-1 transition-transform duration-200''
=======
                <div className="flex items-center justify-between">
                  <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm">{service.period}</span>
                  </div>
                  <Link
                    href={`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
=======
                  <Link;
href={`/${service.id}`}
                    className='inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200'
                      />
                    Learn More <ArrowRight className='w-4 h-4 ml-1'    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                  </Link>
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD
          ))}
        </div>

=======
                  <Link;
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>;
                    <span className="text-gray-400 text-sm">{service.period}</span>;
                  </div>;
                  <Link;
                    href={`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200";
                  >;
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />;
                    href={`/${service.id}`}
                    className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200';
                  >;
                    Learn More <ArrowRight className='w-4 h-4 ml-1' />;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </div>;
                    href={`/${service && service.id}`}
<<<<<<< HEAD
href={`/${service && service.id}`}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200'>;
                    Learn More <ArrowRight className='w-4 h-4 ml-1'    />                  </Link>                  <div    />;"
                    <span className=\"text-2xl font-bold text-cyan-400\"    />{service && service.price}</span>;"
                    <span className=\"text-gray-400 text-sm\"    />{service && service.period}</span>;
                  </div>;
                  <Link;
<<<<<<< HEAD
                    href={`/${service && service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">;
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />;
=======
                    href={`/${service && service.id}`}"
                    className=\"inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200\"    />;"
                    Learn More <ArrowRight className=\"w-4 h-4 ml-1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                  </Link>;
                </div>;
              </div>;
            </motion && motion.div>;
          ))}
        </div>;{/* Call to Action */}
        <motion&& motion.div;
<<<<<<< HEAD
        </div>;

<<<<<<< HEAD
        {/* Call to Action */}
        <motion&& motion.div;
=======

<<<<<<< HEAD

        {/* Call to Action */}
        <motion&& motion.div
        {/* Call to Action */}
        <motion&& motion.div

        {/* Call to Action */}
        <motion.div
=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Call to Action */}
        <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
          viewport={{ once: true }}
          ))}
        </div>

>>>>>>> merged-prs-20250907-203621
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true}}
          className="text-center"
        >
<<<<<<< HEAD
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
=======
<<<<<<< HEAD
          <div className='bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8'>'
            <h3 className='text-2xl font-bold text-white mb-4'>'
=======
          initial={{ opacity: 0, y: 20 }
}
          whileInView={{ opacity: 1, y: 0 }
}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}

          viewport={{ once: true }}

className='text-center'
            />
          <div className='bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8'    />
            <h3 className='text-2xl font-bold text-white mb-4'    />
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
          className="text-center"
        >
          className='text-center'

        >
          <div className='bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our revolutionary
              services to achieve unprecedented growth and innovation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>              <motion.div        >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'    />
              Join thousands of businesses already leveraging our revolutionary;
services to achieve unprecedented growth and innovation.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
className='text-center'
        >
          <div className='bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our revolutionary
              services to achieve unprecedented growth and innovation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <motion.div
>>>>>>> merged-prs-20250907-203621
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </motion.div>
              <motion.div
<<<<<<< HEAD
=======
href='/services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200'
                >
                  <Rocket className='w-5 h-5 mr-2' />
origin/cursor/automate-test-improve-and-merge-code-2533
                  View All Services
                </Link>
              </motion.div>
              <motion.div;
>>>>>>> merged-prs-20250907-203621
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
<<<<<<< HEAD
                <Link;'
                  href='/contact';'
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 200'
                >;'"
                  <Shield className='w - 5 h - 5 mr - 2' />                  Get Started                  href="/contact";"
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover: bg - cyan - 500 / 10 transition - all duration - 200"
                >;"
                  <Shield className="w - 5 h - 5 mr - 2" />
=======
                <Link
export default Enhanced2026ServicesShowcase;  )
}
export default Enhanced2026ServicesShowcase;
href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200'
                >
<<<<<<< HEAD
                  <Shield className='w-5 h-5 mr-2' />'
=======
<Shield className="w-5 h-5 mr-2" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  Get Started
=======
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'    />
              <motion.div;
whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                  />
                <Link;
href='/services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200'
                    />
                  <Rocket className='w-5 h-5 mr-2'    />
                  View All Services;
                </Link>
              </motion.div>
              <motion.div;
whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }
}
                transition={{ duration: 0.2, delay: 0.1 }}
                  />
                <Link;
href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200'
                    />
                  <Shield className='w-5 h-5 mr-2'    />
                  Get Started;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
)
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
  );
}
};

export default Enhanced2026ServicesShowcase;  )
}
export default Enhanced2026ServicesShowcase;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default Enhanced2026ServicesShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533
'"`

>>>>>>> merged-prs-20250907-203621
}
export default Enhanced2026ServicesShowcase;  )
}
export default Enhanced2026ServicesShowcase;

<<<<<<< HEAD
"
=======
};
export default Enhanced2026ServicesShowcase;

export default Enhanced2026ServicesShowcase;  );
};

export default Enhanced2026ServicesShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533
          viewport={{ once: true }}>;
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
className='text-center';
        >;
          <div className='bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>;
              Join thousands of businesses already leveraging our revolutionary;
              services to achieve unprecedented growth and innovation.;
            </p>;
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>;
              <motion.div;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >;
                <Link;
                  href="/services";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200";
                >;
                  <Rocket className="w-5 h-5 mr-2" />;
href='/services';
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200';
                >;
                  <Rocket className='w-5 h-5 mr-2' />;
                  View All Services;
                </Link>;
              </motion.div>;
              <motion.div;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >;
                <Link;
export default Enhanced2026ServicesShowcase;  )}
export default Enhanced2026ServicesShowcase;export default Enhanced2026ServicesShowcase;}
}
export default Enhanced2026ServicesShowcase;}}export default Enhanced2026ServicesShowcase;  )}export default Enhanced2026ServicesShowcase;
              while_hover={{ scale: 1.05, coordinate_y: -5 }}
              className='group text - center';
            >;
              <div;
                className={`w - 16 h - 16 bg - gradient - to - br ${category.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300`}
              >;
                <category.icon className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - lg font - bold text - white mb - 2'>;
                {category.name}
              </h3>;
              <p className='text - 2xl font - bold text - cyan - 400'>;
                {category.count}
              </p>            </motion.div>            >;
              <div className={`w - 16 h - 16 bg - gradient - to - br ${category.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300`}>;
                <category.icon className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - lg font - bold text - white mb - 2">{category.name}</h3>;
              <p className="text - 2xl font - bold text - cyan - 400">{category.count}</p>;
            </motion.div>))}
        </motion.div>;
        {/* Featured Services Grid */}
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>          {featured_services.map ((service, index) => (        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16">;
          {featured_services.map ((service, index) => (<motion.div;
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, coordinate_y: 20 }}
              whileInView={{ opacity: 1, scale: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              while_hover={{ scale: 1.02, coordinate_y: -5 }}
              className='group relative';
            >;
              <div;
                className={`absolute inset - 0 bg - gradient - to - r ${service.color} opacity - 10 rounded - 2xl blur - xl group - hover:blur - 2xl transition - all duration - 500`}
              ></div>;
              <div className='relative bg - black / 40 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 hover:border - cyan - 500 / 40 transition - all duration - 300'>;
                {/* Service Header */}
                <div className='flex items - center space - x-3 mb - 4'>;
                  <div;
                    className={`w - 12 h - 12 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center`}
                  >;
                    <service.icon className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div>;
                    <h3 className='text - lg font - bold text - white'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 400 text - sm'>{service.category}</p>                  </div>;
                </div>;
                {/* Description */}
                <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>                  {service.description}
                </p>;
                {/* Features */}            >;
              <div className={`absolute inset - 0 bg - gradient - to - r ${service.color} opacity - 10 rounded - 2xl blur - xl group - hover:blur - 2xl transition - all duration - 500`}></div>;
              <div className="relative bg - black / 40 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 hover:border - cyan - 500 / 40 transition - all duration - 300">;
                {/* Service Header */}
                <div className="flex items - center space - x-3 mb - 4">;
                  <div className={`w - 12 h - 12 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center`}>;
                    <service.icon className="w - 6 h - 6 text - white" />;
                  </div>;
                  <div>;
                    <h3 className="text - lg font - bold text - white">{service.name}</h3>;
                    <p className="text - gray - 400 text - sm">{service.category}</p>;
                  </div>;
                </div>;
                {/* Description */}
                <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>                <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">;
                  {service.description}
                </p>;
                {/* Features */}
                <div className='mb - 4'>;
                  <ul className='space - y-1'>;
                    {service.features.slice (0, 2).map ((feature, i) => (<li;
                        key={i}
                        className='flex items - center text - gray - 400 text - xs';
                      >;
                        <Star className='w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0' />                        {feature}                <div className="mb - 4">;
                  <ul className="space - y-1">;
                    {service.features.slice (0, 2).map ((feature, i) => (<li key={i} className="flex items - center text - gray - 400 text - xs">;
                        <Star className="w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0" />;
                      </li>))}
                  </ul>;
                </div>;
                {/* Price and CTA */}
                <div className='flex items - center justify - between'>;
                  <div>;
                    <span className='text - 2xl font - bold text - cyan - 400'>;
                      {service.price}
                    </span>;
                    <span className='text - gray - 400 text - sm'>;
                      {service.period}
                    </span>;
                  </div>;
                  <Link;
                    href={`/${service.id}`}
                    className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm font - medium group - hover:translate - x-1 transition - transform duration - 200';
                  >;
                    Learn More <ArrowRight className='w - 4 h - 4 ml - 1' />                  </Link>                  <div>;
                    <span className="text - 2xl font - bold text - cyan - 400">{service.price}</span>;
                    <span className="text - gray - 400 text - sm">{service.period}</span>;
                  </div>;
                  <Link;
                    href={`/${service.id}`}
                    className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm font - medium group - hover:translate - x-1 transition - transform duration - 200";
                  >;
                    Learn More <ArrowRight className="w - 4 h - 4 ml - 1" />;
                  </Link>;
                </div>;
              </div>;
            </motion.div>))}
        </div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text - center';
        >;
          <div className='bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20 border border - cyan - 500 / 20 rounded - 2xl p - 8'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of businesses already leveraging our revolutionary;
              services to achieve unprecedented growth and innovation.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>              <motion.div        >;
          <div className="bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20 border border - cyan - 500 / 20 rounded - 2xl p - 8">;
            <h3 className="text - 2xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - gray - 300 mb - 6 max - w-2xl mx - auto">;
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.;
            </p>;
            <div className="flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6">;
              <motion.div;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >;
                <Link;
                  href='/services';
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40 transition - all duration - 200';
                >;
                  <Rocket className='w - 5 h - 5 mr - 2' />                  View All Services                  href="/services";
                  className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40 transition - all duration - 200";
                >;
                  <Rocket className="w - 5 h - 5 mr - 2" />;
                </Link>;
              </motion.div>;
              <motion.div;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >;
                <Link;
                  href='/contact';
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 200';
                >;
                  <Shield className='w - 5 h - 5 mr - 2' />                  Get Started                  href="/contact";
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover: bg - cyan - 500 / 10 transition - all duration - 200";
                >;
                  <Shield className="w - 5 h - 5 mr - 2" />;
                </Link>;
              </motion.div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>)}export default Enhanced2026ServicesShowcase)}export default Enhanced2026ServicesShowcase;href='/contact';
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200';
                >;
                  <Shield className='w-5 h-5 mr-2' />;
                  Get Started;
                </Link>;
              </motion.div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
    </section>);
}
;
export default Enhanced2026ServicesShowcase);
}
;
export default Enhanced2026ServicesShowcase;
;
)}export default Enhanced2026ServicesShowcase;
                  href = $2;
export default Enhanced2026ServicesShowcase,

"
=======
<<<<<<< HEAD


export default Enhanced2026ServicesShowcase;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
export default Enhanced2026ServicesShowcase;

}
}
export default Enhanced2026ServicesShowcase;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
