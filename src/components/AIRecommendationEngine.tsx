import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Star, 
  Zap, 
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Filter,
  Search,
  RefreshCw,
  Bookmark,
  Share2,
  Download,
  Clock,
  DollarSign,
  Users,
  Shield,
  Globe,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Eye,
  MessageSquare,
  BarChart3,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

interface ServiceRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  features: string[];
  benefits: string[];
  aiScore: number;
  matchPercentage: number;
  tags: string[];
  icon: string;
  estimatedROI: number;
  implementationTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  popularity: number;
  trending: boolean;
  featured: boolean;
}
interface UserProfile {
  industry: string;
  companySize: string;
  budget: string;
  goals: string[];
  painPoints: string[];
  currentTech: string[];
  timeline: string;
  experience: string;
export const AIRecommendationEngine: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    industry: '',
    companySize: '',
    budget: '',
    goals: [],
    painPoints: [],
    currentTech: [],
    timeline: '',
    experience: ''
  });
  const [recommendations, setRecommendations] = useState<ServiceRecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education',
    'Manufacturing', 'Real Estate', 'Consulting', 'Media', 'Non-profit'
  ];
  const companySizes = [
    'Startup (1-10)', 'Small (11-50)', 'Medium (51-200)', 
    'Large (201-1000)', 'Enterprise (1000+)'
  const budgets = [
    '$1K - $10K', '$10K - $50K', '$50K - $100K', 
    '$100K - $500K', '$500K+'
  const commonGoals = [
    'Increase Efficiency', 'Reduce Costs', 'Improve Security', 'Scale Operations',
    'Enhance Customer Experience', 'Automate Processes', 'Data Analytics',
    'Digital Transformation', 'Cloud Migration', 'AI Integration'
  const painPoints = [
    'Legacy Systems', 'Security Concerns', 'Scalability Issues', 'High Costs',
    'Manual Processes', 'Data Silos', 'Poor Performance', 'Integration Challenges',
    'Compliance Requirements', 'Skill Gaps'
  const technologies = [
    'React', 'Node.js', 'Python', 'AWS', 'Azure', 'Google Cloud',
    'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis',
    'Machine Learning', 'AI/ML', 'Blockchain', 'IoT'
  const generateRecommendations = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    // Simulate AI analysis
    for (let i = 0; i <= 100; i += 10) {
      setAnalysisProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    // Generate mock recommendations based on user profile
    const mockRecommendations: ServiceRecommendation[] = [
      {
        id: '1',
        title: 'AI-Powered Business Intelligence Platform',
        description: 'Advanced analytics and business intelligence solution powered by machine learning algorithms.',
        category: 'AI & Analytics',
        price: 2500,
        rating: 4.9,
        reviewCount: 127,
        features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
        benefits: ['40% faster decision making', '25% cost reduction', 'Improved ROI tracking'],
        aiScore: 95,
        matchPercentage: 92,
        tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
        icon: 'Brain',
        estimatedROI: 340,
        implementationTime: '2-4 weeks',
        difficulty: 'Medium',
        popularity: 89,
        trending: true,
        featured: true
      },
        id: '2',
        title: 'Cloud Infrastructure Optimization',
        description: 'Comprehensive cloud infrastructure assessment and optimization service.',
        category: 'Cloud & Infrastructure',
        price: 1800,
        rating: 4.8,
        reviewCount: 94,
        features: ['Infrastructure Audit', 'Cost Optimization', 'Security Assessment', 'Performance Tuning'],
        benefits: ['30% cost savings', '50% performance improvement', 'Enhanced security'],
        aiScore: 88,
        matchPercentage: 85,
        tags: ['Cloud', 'AWS', 'Infrastructure', 'Optimization'],
        icon: 'Cloud',
        estimatedROI: 280,
        implementationTime: '1-2 weeks',
        difficulty: 'Easy',
        popularity: 76,
        trending: false,
        featured: false
        id: '3',
        title: 'Automated Security Monitoring System',
        description: '24/7 automated security monitoring and threat detection platform.',
        category: 'Cybersecurity',
        price: 3200,
        reviewCount: 156,
        features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Compliance Reporting'],
        benefits: ['99.9% threat detection rate', '60% faster incident response', 'Full compliance'],
        aiScore: 92,
        matchPercentage: 89,
        tags: ['Security', 'Monitoring', 'Automation', 'Compliance'],
        icon: 'Shield',
        estimatedROI: 420,
        implementationTime: '3-5 weeks',
        difficulty: 'Hard',
        popularity: 93,
        id: '4',
        title: 'Digital Transformation Consulting',
        description: 'End-to-end digital transformation strategy and implementation consulting.',
        category: 'Consulting',
        price: 5000,
        rating: 4.7,
        reviewCount: 203,
        features: ['Strategy Development', 'Process Optimization', 'Technology Integration', 'Change Management'],
        benefits: ['Complete digital transformation', '50% process efficiency', 'Future-ready organization'],
        aiScore: 87,
        matchPercentage: 82,
        tags: ['Digital Transformation', 'Consulting', 'Strategy', 'Process Optimization'],
        icon: 'Target',
        estimatedROI: 650,
        implementationTime: '8-12 weeks',
        popularity: 78,
        id: '5',
        title: 'Advanced Data Analytics Platform',
        description: 'Comprehensive data analytics and visualization platform with AI capabilities.',
        category: 'Data & Analytics',
        price: 2800,
        reviewCount: 142,
        features: ['Data Visualization', 'Advanced Analytics', 'Real-time Processing', 'Custom Reports'],
        benefits: ['80% faster insights', '30% better decisions', 'Automated reporting'],
        aiScore: 90,
        matchPercentage: 86,
        tags: ['Analytics', 'Data Visualization', 'AI', 'Reporting'],
        icon: 'BarChart3',
        estimatedROI: 380,
        implementationTime: '4-6 weeks',
        popularity: 84,
      }
    ];
    setRecommendations(mockRecommendations);
    setIsAnalyzing(false);
  };
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Brain: <Brain className="w-6 h-6" />,
      Cloud: <Cloud className="w-6 h-6" />,
      Shield: <Shield className="w-6 h-6" />,
      Target: <Target className="w-6 h-6" />,
      BarChart3: <BarChart3 className="w-6 h-6" />,
      Database: <Database className="w-6 h-6" />,
      Cpu: <Cpu className="w-6 h-6" />,
      Globe: <Globe className="w-6 h-6" />,
      Server: <Server className="w-6 h-6" />,
      Lock: <Lock className="w-6 h-6" />
    };
    return icons[iconName] || <Brain className="w-6 h-6" />;
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'Hard': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
  const filteredRecommendations = recommendations.filter(rec => {
    const matchesSearch = rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rec.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rec.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => 
                            rec.category.toLowerCase().includes(filter.toLowerCase()) ||
                            rec.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
                          );
    return matchesSearch && matchesFilters;
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            AI-Powered Service Recommendation Engine
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get personalized service recommendations powered by advanced AI algorithms. 
            Tell us about your business and we'll find the perfect solutions for your needs.
          </p>
        </div>
        {/* User Profile Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-blue-400" />
            Tell Us About Your Business
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Industry
              </label>
              <select
                value={userProfile.industry}
                onChange={(e) => setUserProfile({...userProfile, industry: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select Industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
                Company Size
                value={userProfile.companySize}
                onChange={(e) => setUserProfile({...userProfile, companySize: e.target.value})}
                <option value="">Select Size</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                Budget Range
                value={userProfile.budget}
                onChange={(e) => setUserProfile({...userProfile, budget: e.target.value})}
                <option value="">Select Budget</option>
                {budgets.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                Business Goals (Select all that apply)
              <div className="grid grid-cols-2 gap-2">
                {commonGoals.map(goal => (
                  <label key={goal} className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      checked={userProfile.goals.includes(goal)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setUserProfile({...userProfile, goals: [...userProfile.goals, goal]});
                        } else {
                          setUserProfile({...userProfile, goals: userProfile.goals.filter(g => g !== goal)});
                        }
                      }}
                      className="rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="text-gray-300">{goal}</span>
                  </label>
              </div>
                Pain Points (Select all that apply)
                {painPoints.map(pain => (
                  <label key={pain} className="flex items-center space-x-2 text-sm">
                      checked={userProfile.painPoints.includes(pain)}
                          setUserProfile({...userProfile, painPoints: [...userProfile.painPoints, pain]});
                          setUserProfile({...userProfile, painPoints: userProfile.painPoints.filter(p => p !== pain)});
                    <span className="text-gray-300">{pain}</span>
          <div className="flex justify-center">
            <button
              onClick={generateRecommendations}
              disabled={isAnalyzing || !userProfile.industry || !userProfile.companySize || !userProfile.budget}
              className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg font-medium transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Analyzing... {analysisProgress}%</span>
                </>
              ) : (
                  <Brain className="w-5 h-5" />
                  <span>Get AI Recommendations</span>
              )}
            </button>
          {isAnalyzing && (
            <div className="mt-4">
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${analysisProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              <p className="text-center text-gray-400 mt-2">
                Our AI is analyzing your profile and matching you with the best services...
              </p>
          )}
        </motion.div>
      </motion.div>
      {/* Recommendations */}
      <AnimatePresence>
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Personalized Recommendations ({filteredRecommendations.length})
              </h3>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search recommendations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none w-64"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedFilters[0] || ''}
                    onChange={(e) => setSelectedFilters(e.target.value ? [e.target.value] : [])}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">All Categories</option>
                    <option value="AI">AI & Analytics</option>
                    <option value="Cloud">Cloud & Infrastructure</option>
                    <option value="Security">Cybersecurity</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Data">Data & Analytics</option>
                  </select>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredRecommendations.map((recommendation, index) => (
                  key={recommendation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                        {getIcon(recommendation.icon)}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {recommendation.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{recommendation.category}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {recommendation.featured && (
                        <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full">
                          Featured
                        </span>
                      )}
                      {recommendation.trending && (
                        <span className="px-2 py-1 bg-red-600/20 text-red-400 text-xs rounded-full">
                          Trending
                  </div>
                  <p className="text-gray-300 mb-4">{recommendation.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-medium">{recommendation.rating}</span>
                      <span className="text-gray-400">({recommendation.reviewCount} reviews)</span>
                      <Brain className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">{recommendation.aiScore}% AI Score</span>
                      <Target className="w-4 h-4 text-green-400" />
                      <span className="text-white font-medium">{recommendation.matchPercentage}% Match</span>
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-white font-medium">{recommendation.estimatedROI}% ROI</span>
                  <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-bold text-lg">${recommendation.price.toLocaleString()}</span>
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">{recommendation.implementationTime}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recommendation.difficulty)}`}>
                      {recommendation.difficulty}
                    </span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{recommendation.popularity}% popular</span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recommendation.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  <div className="flex items-center justify-between">
                      <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                        <Bookmark className="w-4 h-4 text-gray-400" />
                      </button>
                        <Share2 className="w-4 h-4 text-gray-400" />
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
