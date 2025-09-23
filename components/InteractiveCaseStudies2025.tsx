"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Implementation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how leading companies are transforming their operations with cutting-edge AI solutions. 
            Real case studiesreal resultsreal impact.
          </p>
        </motion.div>

        {/* Industry Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {industry}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredCaseStudies.map((caseStudyindex) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  caseStudy.isFeatured ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-white/10'
                }`}
                onClick={() => setSelectedCase(caseStudy)}
              >
                {/* Featured Badge */}
                {caseStudy.isFeatured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    FEATURED
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    <p className="text-blue-300 font-medium">{caseStudy.company}</p>
                    <p className="text-gray-400 text-sm">{caseStudy.industry}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{caseStudy.rating}</span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {caseStudy.results.slice(02).map((resultidx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-white">{result.value}</div>
                      <div className="text-xs text-gray-400">{result.metric}</div>
                      <div className="text-xs text-green-400">+{result.improvement}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tagidx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {caseStudy.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {caseStudy.teamSize}
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join these industry leaders and transform your business with AI. 
              Our experts are ready to help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Case Study Videos
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Start Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedCase.title}</h2>
                    <p className="text-blue-300 text-lg">{selectedCase.company}</p>
                    <p className="text-gray-400">{selectedCase.industry}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {selectedCase.results.map((resultidx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                      <div className="text-sm text-gray-400 mb-1">{result.metric}</div>
                      <div className="text-sm text-green-400 font-medium">+{result.improvement}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Challenge</h3>
                    <p className="text-gray-300">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Solution</h3>
                    <p className="text-gray-300">{selectedCase.solution}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                  <p className="text-gray-300 italic mb-4">"{selectedCase.testimonial}"</p>
                  <div>
                    <p className="text-white font-medium">{selectedCase.author}</p>
                    <p className="text-blue-300 text-sm">{selectedCase.role}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration: {selectedCase.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Team: {selectedCase.teamSize}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Rating: {selectedCase.rating}/5
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Download Full Case Study
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}