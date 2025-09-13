import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Target, 
  TrendingUp,
  Star,
  Clock,
  Users,
  BookOpen,
  Video,
  Mic,
  Image,
  Code,
  ArrowRight,
  RefreshCw,
  Heart,
  Bookmark,
  Share,
  Play,
  Download,
  ExternalLink,
  Filter,
  Search,
  ChevronDown,
  X,
  CheckCircle,
  Lightbulb,
  Award,
  Globe,
  Building,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const InteractiveContentRecommendationEngine: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    interests: [] as string[],
    role: '',
    industry: '',
    experience: '',
    goals: [] as string[]
  });
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showProfileSetup, setShowProfileSetup] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const interestCategories = [
    { id: 'ai-2025', label: 'AI 2025', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', label: 'Quantum Computing', icon: Zap, color: 'from-purple-500 to-pink-500' },
    { id: 'automation', label: 'Automation', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'neural', label: 'Neural Networks', icon: Database, color: 'from-orange-500 to-red-500' },
    { id: 'business', label: 'Business Solutions', icon: Building, color: 'from-indigo-500 to-purple-500' },
    { id: 'future', label: 'Future Tech', icon: Target, color: 'from-violet-500 to-pink-500' },
    { id: 'innovation', label: 'Innovation', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'from-cyan-500 to-blue-500' }
  ];

  const roles = [
    'CEO/Executive',
    'CTO/Technical Leader',
    'Data Scientist',
    'Software Engineer',
    'Product Manager',
    'Business Analyst',
    'Researcher',
    'Consultant'
  ];

  const industries = [
    'Technology',
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit'
  ];

  const experienceLevels = [
    'Beginner (0-2 years)',
    'Intermediate (3-5 years)',
    'Advanced (6-10 years)',
    'Expert (10+ years)'
  ];

  const goalOptions = [
    'Increase Efficiency',
    'Reduce Costs',
    'Improve Decision Making',
    'Automate Processes',
    'Enhance Security',
    'Scale Operations',
    'Innovate Products',
    'Gain Competitive Advantage'
  ];

  const sampleRecommendations = [
    {
      id: 1,
      title: 'AI 2025: Complete Implementation Guide',
      type: 'guide',
      category: 'ai-2025',
      difficulty: 'intermediate',
      readTime: '45 min',
      rating: 4.9,
      views: '125K',
      description: 'Comprehensive guide to implementing AI solutions in 2025 with real-world examples and best practices.',
      tags: ['AI', 'Implementation', '2025', 'Guide'],
      author: 'Dr. Sarah Chen',
      publishedAt: '2025-01-15',
      relevanceScore: 95,
      personalizedReason: 'Matches your interest in AI 2025 and business solutions',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Quantum Computing: Error-Corrected Systems',
      type: 'video',
      category: 'quantum',
      difficulty: 'advanced',
      readTime: '30 min',
      rating: 4.8,
      views: '89K',
      description: 'Deep dive into error-corrected quantum computers and their practical applications.',
      tags: ['Quantum', 'Computing', 'Error Correction', 'Advanced'],
      author: 'Prof. Michael Rodriguez',
      publishedAt: '2025-01-14',
      relevanceScore: 92,
      personalizedReason: 'Perfect for your advanced experience level and quantum interest',
      icon: Video,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Automation ROI Calculator Tool',
      type: 'tool',
      category: 'automation',
      difficulty: 'beginner',
      readTime: '15 min',
      rating: 4.7,
      views: '67K',
      description: 'Interactive tool to calculate ROI for automation implementations in your business.',
      tags: ['Automation', 'ROI', 'Calculator', 'Tool'],
      author: 'Zion Tech Team',
      publishedAt: '2025-01-13',
      relevanceScore: 88,
      personalizedReason: 'Aligns with your goal to reduce costs and increase efficiency',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Neural Interface Technology Podcast',
      type: 'podcast',
      category: 'neural',
      difficulty: 'intermediate',
      readTime: '25 min',
      rating: 4.6,
      views: '45K',
      description: 'Expert discussion on the latest developments in neural interface technology.',
      tags: ['Neural', 'Interface', 'Technology', 'Podcast'],
      author: 'Dr. Elena Vasquez',
      publishedAt: '2025-01-12',
      relevanceScore: 85,
      personalizedReason: 'Matches your interest in neural networks and future tech',
      icon: Mic,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Business Process Optimization Case Study',
      type: 'case-study',
      category: 'business',
      difficulty: 'intermediate',
      readTime: '20 min',
      rating: 4.9,
      views: '156K',
      description: 'Real-world case study showing 300% efficiency improvement through process optimization.',
      tags: ['Business', 'Process', 'Optimization', 'Case Study'],
      author: 'Alex Thompson',
      publishedAt: '2025-01-11',
      relevanceScore: 90,
      personalizedReason: 'Perfect match for your business solutions interest and efficiency goals',
      icon: Building,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Future Technology Predictions 2030-2035',
      type: 'infographic',
      category: 'future',
      difficulty: 'beginner',
      readTime: '10 min',
      rating: 4.8,
      views: '78K',
      description: 'Visual guide to the most revolutionary technologies coming in the next decade.',
      tags: ['Future', 'Predictions', 'Technology', '2030'],
      author: 'Future Tech Institute',
      publishedAt: '2025-01-10',
      relevanceScore: 87,
      personalizedReason: 'Matches your interest in future tech and innovation',
      icon: Image,
      color: 'from-violet-500 to-pink-500'
    }
  ];

  const handleInterestToggle = (interestId: string) => {
    setUserProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setUserProfile(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const generateRecommendations = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRecommendations(sampleRecommendations);
      setIsLoading(false);
      setShowProfileSetup(false);
    }, 1500);
  };

  const getTypeIcon = (type: string) => {
    const typeMap = {
      guide: BookOpen,
      video: Video,
      tool: BarChart3,
      podcast: Mic,
      'case-study': Building,
      infographic: Image,
      code: Code
    };
    return typeMap[type as keyof typeof typeMap] || BookOpen;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'from-green-500 to-emerald-500',
      intermediate: 'from-yellow-500 to-orange-500',
      advanced: 'from-red-500 to-pink-500',
      expert: 'from-purple-500 to-violet-500'
    };
    return colors[difficulty as keyof typeof colors] || colors.beginner;
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-4 h-4" />
            AI-POWERED CONTENT RECOMMENDATION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Personalized Content Discovery
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Get AI-powered recommendations tailored to your interests and goals
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our intelligent recommendation engine learns from your preferences to suggest the most relevant content for your needs
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {showProfileSetup ? (
            <motion.div
              key="profile-setup"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Profile Setup Form */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Tell us about yourself
                </h3>

                {/* Interests */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What are you interested in?</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {interestCategories.map((category) => {
                      const Icon = category.icon;
                      const isSelected = userProfile.interests.includes(category.id);
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleInterestToggle(category.id)}
                          className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-all duration-300 ${
                            isSelected
                              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Role */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's your role?</h4>
                  <select
                    value={userProfile.role}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                {/* Industry */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What industry are you in?</h4>
                  <select
                    value={userProfile.industry}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's your experience level?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experienceLevels.map(level => (
                      <button
                        key={level}
                        onClick={() => setUserProfile(prev => ({ ...prev, experience: level }))}
                        className={`p-3 rounded-lg text-sm transition-all duration-300 ${
                          userProfile.experience === level
                            ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What are your goals?</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {goalOptions.map(goal => {
                      const isSelected = userProfile.goals.includes(goal);
                      return (
                        <button
                          key={goal}
                          onClick={() => handleGoalToggle(goal)}
                          className={`p-3 rounded-lg text-sm transition-all duration-300 ${
                            isSelected
                              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          {goal}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Generate Recommendations Button */}
                <div className="text-center">
                  <button
                    onClick={generateRecommendations}
                    disabled={userProfile.interests.length === 0 || !userProfile.role || !userProfile.industry || !userProfile.experience || userProfile.goals.length === 0}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Generating Recommendations...
                      </>
                    ) : (
                      <>
                        <Brain className="w-5 h-5" />
                        Get My Recommendations
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Recommendations Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Your Personalized Recommendations
                  </h3>
                  <p className="text-gray-300">
                    Based on your interests in {userProfile.interests.length} categories and {userProfile.goals.length} goals
                  </p>
                </div>
                <button
                  onClick={() => setShowProfileSetup(true)}
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <RefreshCw className="w-4 h-4" />
                  Update Profile
                </button>
              </div>

              {/* Recommendations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((item, index) => {
                  const TypeIcon = getTypeIcon(item.type);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <TypeIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-400">{item.type.toUpperCase()}</div>
                              <div className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getDifficultyColor(item.difficulty)} text-white`}>
                                {item.difficulty}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-violet-400">{item.relevanceScore}%</div>
                            <div className="text-xs text-gray-400">Match</div>
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </p>

                        {/* Personalized Reason */}
                        <div className="bg-violet-600/20 rounded-lg p-3 mb-4">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                            <p className="text-violet-300 text-xs">
                              {item.personalizedReason}
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {item.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {item.views}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {item.rating}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <Link
                            to={`/content/${item.id}`}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-violet-500/25"
                          >
                            View
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <div className="flex items-center gap-2">
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
                              <Heart className="w-4 h-4 text-gray-400 hover:text-red-400" />
                            </button>
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
                              <Bookmark className="w-4 h-4 text-gray-400 hover:text-yellow-400" />
                            </button>
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300">
                              <Share className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Load More Recommendations
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveContentRecommendationEngine;