import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  Zap,
  Brain,
  Cpu,
  Shield,
  Globe,
  Rocket,
  Target,
  CheckCircle,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Lightbulb,
  Code,
  Database,
  Lock,
  Play,
  Download,
  ExternalLink,
  Bell,
  Gift,
  Fire,
  Crown,
  Diamond,
  Infinity,
  Thunderbolt
} from 'lucide-react';
interface AdCampaign {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  urgency: string;
  type: 'limited-time' | 'new-release' | 'trending' | 'exclusive' | 'breakthrough';
  ctaText: string;
  ctaLink: string;
  icon: string;
  gradient: string;
  badge: string;
  stats: {
    participants: number;
    successRate: number;
    savings: number;
    timeLeft: string;
  };
  features: string[];
  socialProof: {
    testimonials: number;
    rating: number;
    companies: number;
  };
const InteractiveAdvertisingBanner2026: React.FC = () => {
  const [currentCampaign, setCurrentCampaign] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200000); // 2 hours in milliseconds
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const campaigns: AdCampaign[] = [
    {
      id: 'ai-transformation-masterclass-2026',
      title: 'AI Transformation Masterclass 2026',
      subtitle: 'Transform Your Business with Revolutionary AI',
      description: 'Join 50,000+ business leaders in the most comprehensive AI transformation program. Learn from industry experts, get hands-on experience with cutting-edge AI tools, and achieve 500% ROI within 90 days.',
      category: 'Business AI',
      urgency: 'Limited Time',
      type: 'limited-time',
      ctaText: 'Reserve Your Spot',
      ctaLink: '/ai-masterclass-2026',
      icon: '🚀',
      gradient: 'from-purple-600 via-blue-600 to-indigo-600',
      badge: 'HOT',
      stats: {
        participants: 50000,
        successRate: 94,
        savings: 2500,
        timeLeft: '2h 45m'
      },
      features: [
        'Live AI Implementation Workshops',
        'Personal AI Strategy Consultation',
        'Access to Premium AI Tools',
        '90-Day ROI Guarantee',
        'Exclusive Community Access',
        'Lifetime Content Updates'
      ],
      socialProof: {
        testimonials: 2500,
        rating: 4.9,
        companies: 1200
      }
    },
    {
      id: 'quantum-computing-breakthrough-course',
      title: 'Quantum Computing Breakthrough Course',
      subtitle: 'Master Quantum Computing in 30 Days',
      description: 'Learn quantum computing from scratch with our revolutionary curriculum. Build quantum algorithms, understand quantum mechanics, and prepare for the quantum future.',
      category: 'Quantum Computing',
      urgency: 'New Release',
      type: 'new-release',
      ctaText: 'Start Learning',
      ctaLink: '/quantum-course-2026',
      icon: '⚛️',
      gradient: 'from-cyan-600 via-blue-600 to-purple-600',
      badge: 'NEW',
      stats: {
        participants: 15000,
        successRate: 89,
        savings: 1800,
        timeLeft: 'Always Available'
      },
      features: [
        'Interactive Quantum Simulator',
        'Real Quantum Hardware Access',
        'Expert Quantum Mentors',
        'Industry Certification',
        'Job Placement Assistance',
        'Quantum Project Portfolio'
      ],
      socialProof: {
        testimonials: 890,
        rating: 4.8,
        companies: 450
      }
    },
    {
      id: 'consciousness-ai-research-program',
      title: 'Consciousness AI Research Program',
      subtitle: 'Explore the Frontiers of AI Consciousness',
      description: 'Join leading researchers in exploring AI consciousness, self-awareness, and the future of conscious machines. Contribute to groundbreaking research that will shape humanity\'s future.',
      category: 'Consciousness AI',
      urgency: 'Exclusive',
      type: 'exclusive',
      ctaText: 'Apply Now',
      ctaLink: '/consciousness-ai-program',
      icon: '🧠',
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
      badge: 'EXCLUSIVE',
      stats: {
        participants: 500,
        successRate: 97,
        savings: 5000,
        timeLeft: 'Applications Close Soon'
      },
      features: [
        'Cutting-Edge Research Access',
        'Direct Collaboration with AI Experts',
        'Publication Opportunities',
        'Conference Presentations',
        'Research Funding Available',
        'Nobel Prize Potential Projects'
      ],
      socialProof: {
        testimonials: 125,
        rating: 5.0,
        companies: 75
      }
    },
    {
      id: 'neural-interface-development-kit',
      title: 'Neural Interface Development Kit',
      subtitle: 'Build the Future of Brain-Computer Interfaces',
      description: 'Get early access to our revolutionary neural interface development kit. Build applications that connect directly to the human brain and create the next generation of human-AI interaction.',
      category: 'Neural Interfaces',
      urgency: 'Breakthrough',
      type: 'breakthrough',
      ctaText: 'Get Early Access',
      ctaLink: '/neural-interface-kit',
      icon: '🔗',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      badge: 'BREAKTHROUGH',
      stats: {
        participants: 2500,
        successRate: 91,
        savings: 3200,
        timeLeft: 'Limited Beta Access'
      },
      features: [
        'Advanced BCI Hardware',
        'Neural Signal Processing SDK',
        'AI Brain Pattern Recognition',
        'Medical Grade Safety Standards',
        'Real-Time Brain Visualization',
        'Patent Support & IP Protection'
      ],
      socialProof: {
        testimonials: 340,
        rating: 4.9,
        companies: 180
      }
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampaign((prev) => (prev + 1) % campaigns.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [campaigns.length]);
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);
  const formatTime = (milliseconds: number) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Limited Time':
        return 'bg-red-500 text-white animate-pulse';
      case 'New Release':
        return 'bg-blue-500 text-white';
      case 'Exclusive':
        return 'bg-purple-500 text-white';
      case 'Breakthrough':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'HOT':
        return 'bg-red-500 text-white animate-bounce';
      case 'NEW':
        return 'bg-green-500 text-white';
      case 'EXCLUSIVE':
        return 'bg-purple-500 text-white';
      case 'BREAKTHROUGH':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };
  const currentAd = campaigns[currentCampaign];
  if (!isVisible) return null;
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl border border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-indigo-600/30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] animate-pulse"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-3xl">{currentAd.icon}</span>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-2xl font-bold text-white">{currentAd.title}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(currentAd.badge)}`}>
                  {currentAd.badge}
                </span>
              </div>
              <p className="text-white/80 text-sm">{currentAd.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 bg-white/20 rounded-lg backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              {isExpanded ? '−' : '+'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 bg-white/20 rounded-lg backdrop-blur-sm text-white/60 hover:text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCampaign}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-6"
          >
            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
              {currentAd.description}
            </p>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{currentAd.stats.participants.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Participants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{currentAd.stats.successRate}%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">${currentAd.stats.savings}</div>
                <div className="text-white/70 text-sm">You Save</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-red-400">{currentAd.stats.timeLeft}</div>
                <div className="text-white/70 text-sm">Time Left</div>
              </div>
            </div>
            {/* Social Proof */}
            <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{currentAd.socialProof.rating}</span>
                  <span className="text-white/70 text-sm">({currentAd.socialProof.testimonials} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white/70 text-sm">{currentAd.socialProof.companies} companies</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(currentAd.urgency)}`}>
                  {currentAd.urgency}
                </span>
              </div>
            </div>
            {/* Features (Expandable) */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-white">What's Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentAd.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onHoverStart={() => setHoveredFeature(index)}
                        onHoverEnd={() => setHoveredFeature(null)}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          hoveredFeature === index ? 'bg-white/20' : 'bg-white/10'
                        } backdrop-blur-sm`}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <button className="p-3 bg-white/20 rounded-xl backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/20 rounded-xl backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/20 rounded-xl backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={currentAd.ctaLink}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>{currentAd.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  <span>Download Info</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {campaigns.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCampaign(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCampaign 
                  ? 'bg-white scale-110' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        {/* Bottom Stats */}
        <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-white/60 text-sm">Active Campaigns</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">67K+</div>
            <div className="text-white/60 text-sm">Total Participants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">93%</div>
            <div className="text-white/60 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">$3.2M</div>
            <div className="text-white/60 text-sm">Total Savings</div>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-30"></div>
      </div>
    </div>
  );

};


export default InteractiveAdvertisingBanner2026;
