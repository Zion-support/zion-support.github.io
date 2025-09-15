import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    icon: React.ComponentType<any>;
  }[];
  technologies: string[];
  duration: string;
  teamSize: string;
  featured: boolean;
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fortune-500-manufacturing',
    title: 'AI-Powered Production Optimization',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'The company was struggling with production inefficiencies, high downtime rates, and quality control issues across 15 manufacturing plants worldwide. Manual processes were leading to significant waste and missed delivery deadlines.',
    solution: 'Implemented our AI-powered predictive maintenance system and quality control platform. Deployed IoT sensors across all production lines and integrated machine learning algorithms for real-time optimization.',
    results: [
      {
        metric: 'Production Efficiency',
        value: '+35%',
        improvement: 'increase',
        icon: TrendingUp
      },
      {
        metric: 'Downtime Reduction',
        value: '-60%',
        improvement: 'decrease',
        icon: Clock
      },
      {
        metric: 'Cost Savings',
        value: '$2.3M',
        improvement: 'annually',
        icon: DollarSign
      },
      {
        metric: 'Quality Score',
        value: '99.2%',
        improvement: 'accuracy',
        icon: Target
      }
    ],
    technologies: ['AI/ML', 'IoT', 'Predictive Analytics', 'Cloud Computing'],
    duration: '6 months',
    teamSize: '12 specialists',
    featured: true,
    testimonial: {
      quote: 'Zion Tech Group transformed our entire production process. The AI system predicts maintenance needs before failures occur, saving us millions in downtime costs.',
      author: 'Sarah Chen',
      position: 'Chief Technology Officer'
    }
  },
  {
    id: 'retail-chain-personalization',
    title: 'AI Customer Experience Platform',
    company: 'MegaRetail International',
    industry: 'Retail',
    challenge: 'A global retail chain with 500+ stores needed to personalize customer experiences and improve conversion rates. Traditional marketing approaches were failing to engage customers effectively.',
    solution: 'Developed a comprehensive AI customer behavior analysis platform with real-time recommendation engines, personalized marketing automation, and predictive customer journey mapping.',
    results: [
      {
        metric: 'Customer Engagement',
        value: '+60%',
        improvement: 'increase',
        icon: Users
      },
      {
        metric: 'Sales Conversion',
        value: '+35%',
        improvement: 'increase',
        icon: BarChart3
      },
      {
        metric: 'Customer Satisfaction',
        value: '4.8/5',
        improvement: 'rating',
        icon: Star
      },
      {
        metric: 'Marketing ROI',
        value: '+280%',
        improvement: 'improvement',
        icon: TrendingUp
      }
    ],
    technologies: ['Machine Learning', 'Big Data Analytics', 'Real-time Processing', 'Marketing Automation'],
    duration: '4 months',
    teamSize: '8 specialists',
    featured: true,
    testimonial: {
      quote: 'The AI platform revolutionized how we interact with customers. Personalization at this scale was impossible before Zion Tech Group\'s solution.',
      author: 'Michael Rodriguez',
      position: 'VP of Marketing'
    }
  },
  {
    id: 'financial-services-automation',
    title: 'Quantum-Enhanced Trading Platform',
    company: 'Quantum Capital Partners',
    industry: 'Financial Services',
    challenge: 'A hedge fund needed to optimize portfolio management across 50,000+ assets while reducing risk and maximizing returns. Traditional optimization methods were computationally limited.',
    solution: 'Implemented our quantum-enhanced trading platform with advanced portfolio optimization algorithms, real-time risk assessment, and AI-powered market prediction models.',
    results: [
      {
        metric: 'Portfolio Returns',
        value: '+300%',
        improvement: 'improvement',
        icon: TrendingUp
      },
      {
        metric: 'Risk Reduction',
        value: '-45%',
        improvement: 'decrease',
        icon: Shield
      },
      {
        metric: 'Processing Speed',
        value: '1000x',
        improvement: 'faster',
        icon: Zap
      },
      {
        metric: 'Profit Increase',
        value: '$50M',
        improvement: 'annually',
        icon: DollarSign
      }
    ],
    technologies: ['Quantum Computing', 'AI/ML', 'High-Frequency Trading', 'Risk Analytics'],
    duration: '8 months',
    teamSize: '15 specialists',
    featured: false,
    testimonial: {
      quote: 'The quantum platform gave us an unprecedented edge in the market. We\'re seeing returns we never thought possible.',
      author: 'Dr. James Wilson',
      position: 'Chief Investment Officer'
    }
  },
  {
    id: 'healthcare-diagnostics',
    title: 'AI Medical Diagnostics System',
    company: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'A medical technology company needed to accelerate diagnostic accuracy and reduce false positives in medical imaging. Current systems had 85% accuracy rates and long processing times.',
    solution: 'Developed an AI-powered medical diagnostics platform using deep learning algorithms trained on millions of medical images, with real-time analysis capabilities and integrated workflow automation.',
    results: [
      {
        metric: 'Diagnostic Accuracy',
        value: '98.7%',
        improvement: 'accuracy',
        icon: Target
      },
      {
        metric: 'Processing Time',
        value: '-75%',
        improvement: 'reduction',
        icon: Clock
      },
      {
        metric: 'False Positives',
        value: '-80%',
        improvement: 'reduction',
        icon: CheckCircle
      },
      {
        metric: 'Cost Savings',
        value: '$15M',
        improvement: 'annually',
        icon: DollarSign
      }
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'Medical AI', 'Cloud Computing'],
    duration: '10 months',
    teamSize: '20 specialists',
    featured: false,
    testimonial: {
      quote: 'This AI system has transformed patient care. We can now provide faster, more accurate diagnoses, ultimately saving lives.',
      author: 'Dr. Emily Thompson',
      position: 'Chief Medical Officer'
    }
  }
];

export function CaseStudyShowcase() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry.toLowerCase() === filter.toLowerCase());

  const industries = ['all', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories That Speak
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how leading companies across industries have transformed their operations with Zion Tech Group's innovative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setFilter(industry)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  filter === industry
                    ? 'bg-zion-cyan text-slate-900'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {industry === 'all' ? 'All Industries' : industry}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCaseStudy(caseStudy)}
            >
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <p className="text-zion-cyan font-semibold mb-1">{caseStudy.company}</p>
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  {caseStudy.featured && (
                    <div className="flex items-center space-x-1">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-300 mb-6 line-clamp-3">
                  {caseStudy.challenge}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudy.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-2">
                        <result.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-white">{result.value}</p>
                      <p className="text-sm text-gray-400">{result.metric}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {caseStudy.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-slate-600/50 text-gray-400 text-xs rounded-full">
                        +{caseStudy.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have transformed their businesses with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-slate-900 font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-200"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-slate-900 transition-all duration-200"
            >
              View All Case Studies
            </Link>
          </div>
        </motion.div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedCaseStudy.title}</h2>
                      <p className="text-zion-cyan font-semibold text-lg mb-2">{selectedCaseStudy.company}</p>
                      <span className="inline-block px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full">
                        {selectedCaseStudy.industry}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedCaseStudy(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-400" />
                        Challenge
                      </h3>
                      <p className="text-gray-300">{selectedCaseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Brain className="w-5 h-5 mr-2 text-zion-cyan" />
                        Solution
                      </h3>
                      <p className="text-gray-300">{selectedCaseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                      Results
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {selectedCaseStudy.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
                            <result.icon className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-3xl font-bold text-white mb-2">{result.value}</p>
                          <p className="text-lg font-semibold text-gray-300 mb-1">{result.metric}</p>
                          <p className="text-sm text-gray-400">{result.improvement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCaseStudy.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Project Duration</h4>
                      <p className="text-gray-300">{selectedCaseStudy.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Team Size</h4>
                      <p className="text-gray-300">{selectedCaseStudy.teamSize}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  {selectedCaseStudy.testimonial && (
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <blockquote className="text-lg text-gray-300 italic mb-4">
                        "{selectedCaseStudy.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mr-4">
                          <span className="text-slate-900 font-bold text-lg">
                            {selectedCaseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{selectedCaseStudy.testimonial.author}</p>
                          <p className="text-gray-400">{selectedCaseStudy.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default CaseStudyShowcase;