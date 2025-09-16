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
  ExternalLink,
  Play,
  Star,
  Award,
  Target,
  Zap
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  duration: string;
  teamSize: string;
  rating: number;
  testimonial: string;
  author: string;
  role: string;
  image: string;
  tags: string[];
  isFeatured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered Supply Chain Optimization',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Inefficient supply chain management leading to 30% inventory waste and delayed deliveries',
    solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
    results: [
      { metric: 'Cost 'Reduction', 'value: '$2.3'M', 'improvement: '35%' },
      { metric: 'Delivery 'Time', 'value: '2.1 'days', 'improvement: '60% faster' },
      { metric: 'Inventory 'Waste', 'value: '8%'improvement: '73% reduction' },
      { metric: 'Customer 'Satisfaction', 'value: '94%'improvement: '28% increase' }
    ],
    duration: '6 months',
    teamSize: '12 members',
    rating: 4.9,
    testimonial: 'The AI implementation transformed our entire supply chain. We never thought we could achieve such dramatic improvements in such a short time.',
    author: 'Sarah Chen',
    role: 'VP of Operations',
    image: '/api/placeholder/400/300',
    tags: [', 'AI', 'Supply 'Chain', 'Manufacturing'ROI'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Neural Customer Service Revolution',
    company: 'TechStart Solutions',
    industry: 'Technology',
    challenge: 'High customer service costs and low satisfaction rates with traditional support systems',
    solution: 'Deployed advanced AI chatbots with emotional intelligence and human handoff capabilities',
    results: [
      { metric: 'Response 'Time', 'value: '15 'seconds', 'improvement: '95% faster' },
      { metric: 'Cost 'Reduction', 'value: '$180'K', 'improvement: '65% savings' },
      { metric: 'Customer 'Satisfaction', 'value: '91%'improvement: '42% increase' },
      { metric: 'Resolution 'Rate', 'value: '87%'improvement: '38% increase' }
    ],
    duration: '4 months',
    teamSize: '8 members',
    rating: 4.8,
    testimonial: 'Our customers love the instantintelligent responses. The AI understands context better than most human agents.',
    author: 'Michael Rodriguez',
    role: 'Head of Customer Success',
    image: '/api/placeholder/400/300',
    tags: [', 'AI', 'Customer 'Service', 'Automation'Satisfaction']
  },
  {
    id: '3',
    title: 'Quantum-Enhanced Financial Analytics',
    company: 'FinTech Innovations',
    industry: 'Financial Services',
    challenge: 'Complex risk assessment and fraud detection requiring massive computational power',
    solution: 'Implemented quantum-inspired algorithms for real-time risk analysis and fraud prevention',
    results: [
      { metric: 'Fraud 'Detection', 'value: '99.7%'improvement: '23% more accurate' },
      { metric: 'Processing 'Speed', 'value: '0.3'ms', 'improvement: '1000x faster' },
      { metric: 'False 'Positives', 'value: '0.1%'improvement: '89% reduction' },
      { metric: 'Cost 'Savings', 'value: '$5.2'M', 'improvement: '45% reduction' }
    ],
    duration: '8 months',
    teamSize: '15 members',
    rating: 4.9,
    testimonial: 'The quantum algorithms gave us unprecedented accuracy in fraud detection while dramatically reducing processing time.',
    author: 'Dr. Emily Watson',
    role: 'Chief Technology Officer',
    image: '/api/placeholder/400/300',
    tags: ['Quantum 'AI', 'Finance', 'Security', 'Performance'],
    isFeatured: true
  },
  {
    id: '4',
    title: 'AI-Driven Healthcare Diagnostics',
    company: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'Manual diagnostic processes causing delays and inconsistent accuracy in medical imaging',
    solution: 'Deployed deep learning models for automated medical image analysis and diagnostic assistance',
    results: [
      { metric: 'Diagnostic 'Accuracy', 'value: '96.8%'improvement: '18% increase' },
      { metric: 'Processing 'Time', 'value: '2 'minutes', 'improvement: '85% faster' },
      { metric: 'Early 'Detection', 'value: '89%'improvement: '34% improvement' },
      { metric: 'Cost per 'Diagnosis', 'value: '$45'improvement: '60% reduction' }
    ],
    duration: '10 months',
    teamSize: '20 members',
    rating: 4.9,
    testimonial: 'The AI system has revolutionized our diagnostic capabilitieshelping us save lives through fastermore accurate diagnoses.',
    author: 'Dr. James Park',
    role: 'Chief Medical Officer',
    image: '/api/placeholder/400/300',
    tags: [', 'AI', 'Healthcare', 'Diagnostics', 'Life-Saving']
  }
];

const industries = [', 'All', 'Manufacturing', 'Technology', 'Financial 'Services', 'Healthcare'];

export default function InteractiveCaseStudies2025() {
  const [selectedIndustrysetSelectedIndustry] = useState('All');
  const [selectedCasetSelectedCase] = useState<CaseStudy | null>(null);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveCaseStudies2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveCaseStudies2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveCaseStudies2025;