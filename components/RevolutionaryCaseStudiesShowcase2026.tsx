<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  ArrowRight
  CheckCircle
  TrendingUp
  Users
  DollarSign,
  Clock,
  Target,
  Award,
  Star,
  ExternalLink,
  Play,
  BarChart3,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const RevolutionaryCaseStudiesShowcase2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeCasetActiveCase] = useState(0);
  const [isVideoPlayingsetIsVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)300);
    return () => clearTimeout(timer);
  }[]);

  const caseStudies = [
    {
      id: 'fintech-transformation',
      title: 'FinTech Revolution: 500% ROI in 6 Months',
      company: 'PayFlow Solutions',
      industry: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      challenge: 'Legacy payment processing system causing 40% transaction failures and customer churn',
      solution: 'Implemented AI-powered fraud detectionreal-time processingand automated compliance',
      results: {
        roi: '500%',
        efficiency: '300%',
        costReduction: '60%',
        customerSatisfaction: '95%'
      },
      timeline: '6 months',
      team: '15 experts',
      technologies: ['AI/'ML', 'Blockchain'Cloud 'Infrastructure', 'Real-time Analytics'],
      testimonial: {
        name: 'Sarah Chen',
        role: 'CTO',
        content: 'Zion Tech Group transformed our entire payment ecosystem. The results exceeded our wildest expectations.'
      }
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI: Diagnosing 10x Faster',
      company: 'MediTech Innovations',
      industry: 'Healthcare Technology',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      challenge: 'Manual diagnosis processes taking 2-3 dayscausing delayed treatments and patient dissatisfaction',
      solution: 'Deployed AI diagnostic toolsautomated patient triageand predictive health analytics',
      results: {
        roi: '400%',
        efficiency: '1000%',
        costReduction: '45%',
        customerSatisfaction: '98%'
      },
      timeline: '8 months',
      team: '20 experts',
      technologies: ['Computer 'Vision', 'NLP'Predictive 'Analytics', 'IoT Integration'],
      testimonial: {
        name: 'Dr. Michael Rodriguez',
        role: 'Chief Medical Officer',
        content: 'Our diagnostic accuracy improved dramatically while reducing processing time from days to minutes.'
      }
    },
    {
      id: 'ecommerce-automation',
      title: 'E-commerce Automation: $50M Revenue Boost',
      company: 'ShopGlobal',
      industry: 'E-commerce',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      challenge: 'Manual inventory management and customer service causing 30% lost sales opportunities',
      solution: 'Implemented AI-driven inventory optimizationautomated customer serviceand dynamic pricing',
      results: {
        roi: '600%',
        efficiency: '400%',
        costReduction: '50%',
        customerSatisfaction: '92%'
      },
      timeline: '10 months',
      team: '25 experts',
      technologies: ['Machine 'Learning', 'NLP'Computer 'Vision', 'Cloud Computing'],
      testimonial: {
        name: 'Jennifer Walsh',
        role: 'CEO',
        content: 'The automation solutions revolutionized our operations. We saw immediate impact on both revenue and customer satisfaction.'
      }
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing: Zero Downtime Achievement',
      company: 'AutoParts Pro',
      industry: 'Manufacturing',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      challenge: 'Unplanned downtime costing $2M monthly and 15% production efficiency loss',
      solution: 'Deployed IoT sensorspredictive maintenance AIand real-time production optimization',
      results: {
        roi: '350%',
        efficiency: '250%',
        costReduction: '40%',
        customerSatisfaction: '97%'
      },
      timeline: '12 months',
      team: '18 experts',
      technologies: [', 'IoT', 'Edge 'Computing', 'Predictive 'Analytics', 'Digital Twins'],
      testimonial: {
        name: 'Robert Kim',
        role: 'Operations Director',
        content: 'We achieved zero unplanned downtime for 6 consecutive months. The predictive maintenance system is a game-changer.'
      }
    }
  ];

  const overallStats = [
    { label: 'Projects 'Completed', 'value: '200+'icon: CheckCircle },
    { label: 'Average 'ROI', 'value: '450%'icon: TrendingUp },
    { label: 'Client 'Satisfaction', 'value: '96%'icon: Star },
    { label: 'Years 'Experience', 'value: '8+'icon: Award }
  ];

  if (!isVisible) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const RevolutionaryCaseStudiesShowcase2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">RevolutionaryCaseStudiesShowcase2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default RevolutionaryCaseStudiesShowcase2026;