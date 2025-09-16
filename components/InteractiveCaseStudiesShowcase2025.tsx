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
  Target
  CheckCircle,
  ArrowRight,
  Play,
  ExternalLink,
  Star,
  Building2,
  Zap,
  BarChart3,
  Award,
  Quote
} from 'lucide-react';

const InteractiveCaseStudiesShowcase2025 = () => {
  const [activeStudysetActiveStudy] = useState(0);
  const [filtersetFilter] = useState('all');
  const [isPlayingsetIsPlaying] = useState(false);

  const industries = [
    { id: ''all', 'name: 'All 'Industries', 'count: 12 },
    { id: ''finance', 'name: ''Finance', 'count: 3 },
    { id: ''healthcare', 'name: ''Healthcare', 'count: 2 },
    { id: ''retail', 'name: ''Retail', 'count: 2 },
    { id: ''manufacturing', 'name: ''Manufacturing', 'count: 2 },
    { id: ''technology', 'name: ''Technology', 'count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      company: 'Global Finance Corp',
      industry: 'finance',
      title: 'AI-Powered Risk Assessment Revolution',
      challenge: 'Manual risk assessment processes were taking 3-5 days per applicationcausing delays and customer dissatisfaction.',
      solution: 'Implemented AI-driven risk assessment system with real-time data analysis and predictive modeling.',
      results: {
        timeReduction: '85%',
        costSavings: '$2.3M',
        accuracy: '94%',
        customerSatisfaction: '98%'
      },
      testimonial: {
        text: "The AI transformation has been incredible. 'We', 've reduced processing time by 85% while improving accuracy significantly.",
        author: "Sarah Chen",
        position: "Chief Risk Officer",
        avatar: "/api/placeholder/60/60"
      },
      technologies: ['Machine 'Learning', 'Natural Language 'Processing', 'Predictive Analytics'],
      duration: '6 months',
      teamSize: '12',
      image: '/api/placeholder/600/400',
      video: '/api/placeholder/video',
      featured: true
    },
    {
      id: 2,
      company: 'MedTech Solutions',
      industry: 'healthcare',
      title: 'AI-Driven Patient Care Optimization',
      challenge: 'Patient care coordination was fragmented across multiple systemsleading to delays and missed appointments.',
      solution: 'Deployed AI-powered care coordination platform with intelligent scheduling and patient monitoring.',
      results: {
        timeReduction: '70%',
        costSavings: '$1.8M',
        accuracy: '96%',
        customerSatisfaction: '95%'
      },
      testimonial: {
        text: "Our patient outcomes have improved dramatically. The AI system helps us provide more personalized care.",
        author: "Dr. Michael Rodriguez",
        position: "Chief Medical Officer",
        avatar: "/api/placeholder/60/60"
      },
      technologies: ['AI/'ML', 'IoT 'Integration', 'Real-time Analytics'],
      duration: '8 months',
      teamSize: '15',
      image: '/api/placeholder/600/400',
      video: '/api/placeholder/video',
      featured: false
    },
    {
      id: 3,
      company: 'RetailMax',
      industry: 'retail',
      title: 'Intelligent Inventory Management',
      challenge: 'Inventory management was causing stockouts and overstock situationsimpacting revenue and customer satisfaction.',
      solution: 'Implemented AI-powered demand forecasting and automated inventory optimization system.',
      results: {
        timeReduction: '60%',
        costSavings: '$3.1M',
        accuracy: '92%',
        customerSatisfaction: '97%'
      },
      testimonial: {
        text: "The AI system has revolutionized our inventory management. 'We', 've eliminated stockouts and reduced waste significantly.",
        author: "Jennifer Park",
        position: "VP of Operations",
        avatar: "/api/placeholder/60/60"
      },
      technologies: ['Demand 'Forecasting', 'Supply Chain 'AI', 'Real-time Analytics'],
      duration: '5 months',
      teamSize: '10',
      image: '/api/placeholder/600/400',
      video: '/api/placeholder/video',
      featured: true
    },
    {
      id: 4,
      company: 'ManufacturingPro',
      industry: 'manufacturing',
      title: 'Predictive Maintenance Revolution',
      challenge: 'Unexpected equipment failures were causing production delays and expensive emergency repairs.',
      solution: 'Deployed AI-powered predictive maintenance system with IoT sensors and machine learning algorithms.',
      results: {
        timeReduction: '90%',
        costSavings: '$4.2M',
        accuracy: '98%',
        customerSatisfaction: '99%'
      },
      testimonial: {
        text: "Predictive maintenance has been a game-changer. 'We', 've virtually eliminated unplanned downtime.",
        author: "Robert Kim",
        position: "Plant Manager",
        avatar: "/api/placeholder/60/60"
      },
      technologies: [', 'IoT', 'Machine 'Learning', 'Predictive Analytics'],
      duration: '7 months',
      teamSize: '18',
      image: '/api/placeholder/600/400',
      video: '/api/placeholder/video',
      featured: false
    }
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === filter);

  const currentStudy = filteredStudies[activeStudy];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveStudy((prev) => (prev + 1) % filteredStudies.length);
      }5000);
      return () => clearInterval(interval);
    }
  }[isPlayingfilteredStudies.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveCaseStudiesShowcase2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveCaseStudiesShowcase2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveCaseStudiesShowcase2025;