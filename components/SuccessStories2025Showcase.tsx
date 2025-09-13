import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Download,
  Share2,
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
  Building2,
  Globe,
  Zap,
  Target
} from 'lucide-react';

interface SuccessStory {
  id: string;
  company: string;
  industry: string;
  logo: string;
  title: string;
  challenge: string;
  solution: string;
  results: {
    roi: string;
    efficiency: string;
    costSavings: string;
    timeSaved: string;
  };
  metrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  image: string;
  videoUrl?: string;
  caseStudyUrl?: string;
  duration: string;
  teamSize: string;
}

const successStories: SuccessStory[] = [
  {
    id: 'fortune-500-automation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    logo: '/logos/global-manufacturing.png',
    title: 'Complete Digital Transformation with AI Automation',
    challenge: 'A Fortune 500 manufacturing company was struggling with manual processes, high operational costs, and inconsistent quality control across 50+ facilities worldwide.',
    solution: 'Implemented our comprehensive AI automation suite including intelligent process automation, predictive maintenance, and quality control systems across all facilities.',
    results: {
      roi: '3,200%',
      efficiency: '95% improvement',
      costSavings: '$15M annually',
      timeSaved: '2,000 hours/week'
    },
    metrics: [
      { before: '45%', after: '98%', improvement: 'Quality Control Accuracy' },
      { before: '72 hours', after: '4 hours', improvement: 'Production Planning Time' },
      { before: '$2.5M', after: '$500K', improvement: 'Monthly Maintenance Costs' },
      { before: '15%', after: '2%', improvement: 'Defect Rate' }
    ],
    testimonial: {
      quote: "The AI automation solution transformed our entire operation. We achieved 3,200% ROI in just 8 months and reduced defects by 87%. This is the future of manufacturing.",
      author: "Sarah Chen",
      position: "Chief Operations Officer",
      company: "Global Manufacturing Corp"
    },
    image: '/images/fortune-500-case-study.jpg',
    videoUrl: '/videos/fortune-500-testimonial.mp4',
    caseStudyUrl: '/case-studies/fortune-500-automation.pdf',
    duration: '8 months',
    teamSize: '500+ employees'
  },
  {
    id: 'fintech-ai-platform',
    company: 'NextGen Financial',
    industry: 'Financial Services',
    logo: '/logos/nextgen-financial.png',
    title: 'AI-Powered Financial Services Revolution',
    challenge: 'A leading fintech company needed to process millions of transactions daily while maintaining 99.99% accuracy and reducing fraud detection time from hours to seconds.',
    solution: 'Deployed our quantum-enhanced AI platform with real-time fraud detection, automated risk assessment, and intelligent customer service systems.',
    results: {
      roi: '4,500%',
      efficiency: '99.8% accuracy',
      costSavings: '$8M annually',
      timeSaved: '1,500 hours/week'
    },
    metrics: [
      { before: '2 hours', after: '3 seconds', improvement: 'Fraud Detection Time' },
      { before: '95%', after: '99.8%', improvement: 'Transaction Accuracy' },
      { before: '500ms', after: '50ms', improvement: 'Response Time' },
      { before: '15%', after: '0.1%', improvement: 'False Positive Rate' }
    ],
    testimonial: {
      quote: "The quantum AI platform revolutionized our fraud detection capabilities. We now process 10x more transactions with 99.8% accuracy. Our customers love the instant responses.",
      author: "Michael Rodriguez",
      position: "Chief Technology Officer",
      company: "NextGen Financial"
    },
    image: '/images/fintech-ai-case-study.jpg',
    videoUrl: '/videos/fintech-testimonial.mp4',
    caseStudyUrl: '/case-studies/fintech-ai-platform.pdf',
    duration: '6 months',
    teamSize: '200+ employees'
  },
  {
    id: 'healthcare-ai-diagnosis',
    company: 'MedTech Innovations',
    industry: 'Healthcare',
    logo: '/logos/medtech-innovations.png',
    title: 'AI-Powered Medical Diagnosis System',
    challenge: 'A healthcare technology company needed to develop an AI system that could accurately diagnose diseases from medical images with higher accuracy than human radiologists.',
    solution: 'Implemented our advanced neural synthesis engine with quantum-enhanced machine learning for medical image analysis and diagnostic assistance.',
    results: {
      roi: '2,800%',
      efficiency: '99.5% accuracy',
      costSavings: '$12M annually',
      timeSaved: '3,000 hours/week'
    },
    metrics: [
      { before: '85%', after: '99.5%', improvement: 'Diagnostic Accuracy' },
      { before: '30 minutes', after: '2 minutes', improvement: 'Analysis Time' },
      { before: '20%', after: '95%', improvement: 'Early Detection Rate' },
      { before: '15%', after: '1%', improvement: 'Misdiagnosis Rate' }
    ],
    testimonial: {
      quote: "Our AI diagnosis system is saving lives every day. The 99.5% accuracy rate and 2-minute analysis time have revolutionized patient care. We're detecting diseases earlier than ever before.",
      author: "Dr. Emily Watson",
      position: "Chief Medical Officer",
      company: "MedTech Innovations"
    },
    image: '/images/healthcare-ai-case-study.jpg',
    videoUrl: '/videos/healthcare-testimonial.mp4',
    caseStudyUrl: '/case-studies/healthcare-ai-diagnosis.pdf',
    duration: '12 months',
    teamSize: '150+ employees'
  },
  {
    id: 'retail-ai-optimization',
    company: 'Smart Retail Solutions',
    industry: 'Retail',
    logo: '/logos/smart-retail.png',
    title: 'AI-Driven Retail Optimization Platform',
    challenge: 'A major retail chain needed to optimize inventory management, predict customer demand, and personalize shopping experiences across 1,000+ stores.',
    solution: 'Deployed our comprehensive AI platform with predictive analytics, demand forecasting, and personalized recommendation engines.',
    results: {
      roi: '2,200%',
      efficiency: '90% improvement',
      costSavings: '$20M annually',
      timeSaved: '4,000 hours/week'
    },
    metrics: [
      { before: '65%', after: '95%', improvement: 'Inventory Accuracy' },
      { before: '30%', after: '5%', improvement: 'Stockout Rate' },
      { before: '15%', after: '45%', improvement: 'Sales Conversion' },
      { before: '20%', after: '2%', improvement: 'Waste Rate' }
    ],
    testimonial: {
      quote: "The AI optimization platform transformed our retail operations. We reduced stockouts by 83% and increased sales conversion by 200%. Our customers are happier than ever.",
      author: "David Kim",
      position: "Chief Executive Officer",
      company: "Smart Retail Solutions"
    },
    image: '/images/retail-ai-case-study.jpg',
    videoUrl: '/videos/retail-testimonial.mp4',
    caseStudyUrl: '/case-studies/retail-ai-optimization.pdf',
    duration: '10 months',
    teamSize: '300+ employees'
  }
];

const SuccessStories2025Showcase: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const industries = ['all', ...Array.from(new Set(successStories.map(story => story.industry)))];

  const filteredStories = selectedIndustry === 'all' 
    ? successStories 
    : successStories.filter(story => story.industry === selectedIndustry);

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const handleShare = (story: SuccessStory) => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.challenge,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Success Stories 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Proven Results, Real Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how leading companies achieved extraordinary results with our AI solutions, delivering average ROI of 3,200% and transforming their operations.
          </p>
        </motion.div>

        {/* Success Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">3,200%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">$55M</div>
            <div className="text-gray-300">Total Savings</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-300">Efficiency Gain</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
            <div className="text-gray-300">Companies Transformed</div>
          </div>
        </motion.div>

        {/* Industry Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </motion.div>

        {/* Success Stories Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(story.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedStory(story)}
              >
                {/* Success Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Company Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <img
                      src={story.logo}
                      alt={story.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{story.company}</h3>
                      <p className="text-gray-400 text-sm">{story.industry}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {story.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStory(story);
                        }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(story);
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white font-bold text-lg">{story.title}</h4>
                  </div>
                </div>

                {/* Challenge Preview */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 relative z-10">
                  <span className="font-semibold text-amber-400">Challenge:</span> {story.challenge}
                </p>

                {/* Results Overview */}
                <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                  <div className="text-center p-3 bg-amber-500/20 rounded-lg">
                    <div className="text-lg font-bold text-amber-400">{story.results.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-orange-500/20 rounded-lg">
                    <div className="text-lg font-bold text-orange-400">{story.results.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                </div>

                {/* Key Metrics Preview */}
                <div className="space-y-2 mb-4 relative z-10">
                  <div className="text-sm font-semibold text-white">Key Improvements:</div>
                  <div className="space-y-1">
                    {story.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex justify-between text-sm text-gray-300">
                        <span>{metric.improvement}:</span>
                        <span className="text-amber-400 font-semibold">
                          {metric.before} → {metric.after}
                        </span>
                      </div>
                    ))}
                    {story.metrics.length > 2 && (
                      <div className="text-sm text-gray-400">
                        +{story.metrics.length - 2} more improvements
                      </div>
                    )}
                  </div>
                </div>

                {/* Testimonial Preview */}
                <div className="bg-white/5 rounded-lg p-4 mb-4 relative z-10">
                  <Quote className="w-4 h-4 text-amber-400 mb-2" />
                  <p className="text-gray-300 text-sm italic mb-2 line-clamp-2">
                    "{story.testimonial.quote}"
                  </p>
                  <div className="text-xs text-gray-400">
                    — {story.testimonial.author}, {story.testimonial.position}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div className="text-sm text-gray-400">
                    Duration: <span className="text-white font-semibold">{story.duration}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Team: <span className="text-white font-semibold">{story.teamSize}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group relative z-10">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join 50+ companies achieving extraordinary results with our AI solutions. Average ROI of 3,200% and counting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
              Start Your Success Story
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Download All Case Studies
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Detailed View */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedStory.logo}
                    alt={selectedStory.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedStory.title}</h2>
                    <p className="text-gray-400">{selectedStory.company} • {selectedStory.industry}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  {selectedStory.videoUrl && (
                    <div className="mb-6">
                      <video
                        controls
                        className="w-full rounded-xl"
                        poster={selectedStory.image}
                      >
                        <source src={selectedStory.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                    <p className="text-gray-300">{selectedStory.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                    <p className="text-gray-300">{selectedStory.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-amber-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-amber-400">{selectedStory.results.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-orange-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-400">{selectedStory.results.efficiency}</div>
                      <div className="text-sm text-gray-400">Efficiency</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{selectedStory.results.costSavings}</div>
                      <div className="text-sm text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{selectedStory.results.timeSaved}</div>
                      <div className="text-sm text-gray-400">Time Saved</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
                    <div className="space-y-3">
                      {selectedStory.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-gray-300">{metric.improvement}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400">{metric.before}</span>
                            <ArrowRight className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-400 font-semibold">{metric.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <Quote className="w-6 h-6 text-amber-400 mb-4" />
                    <p className="text-gray-300 italic mb-4">"{selectedStory.testimonial.quote}"</p>
                    <div className="text-sm text-gray-400">
                      <div className="font-semibold text-white">{selectedStory.testimonial.author}</div>
                      <div>{selectedStory.testimonial.position}, {selectedStory.testimonial.company}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedStory.caseStudyUrl && (
                      <button
                        onClick={() => handleDownload(selectedStory.caseStudyUrl!)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Case Study
                      </button>
                    )}
                    <button className="flex items-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuccessStories2025Showcase;