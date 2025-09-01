import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Brain, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Database,
  Cloud,
  Lock,
  Users,
  BarChart3,
  Code,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  RefreshCw,
  Eye,
  Heart,
  MessageSquare,
  Calendar,
  DollarSign,
  Award
} from 'lucide-react';

interface ServiceCategory {

  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  popularity: number;
  growthRate: number;
  averageRating: number;
  priceRange: string;
  implementationTime: string;
  roi: string;
}

interface UserBehavior {

  pageViews: string[];
  timeSpent: number;
  interactions: string[];
  interests: string[];
  companySize: string;
  industry: string;
  budget: string;
  timeline: string;
  painPoints: string[];
}

interface ServiceRecommendation {

  id: string;
  service: ServiceCategory;
  confidence: number;
  reasoning: string[];
  benefits: string[];
  implementation: string[];
  estimatedCost: string;
  estimatedROI: string;
  priority: 'high' | 'medium' | 'low';
}

const serviceCategories: ServiceCategory[] = [
  {

    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Advanced AI solutions for business automation and intelligence',
    popularity: 95,
    growthRate: 87,
    averageRating: 4.8,
    priceRange: '$50K - $500K',
    implementationTime: '3-6 months',
    roi: '300-500%'
  },
  {

    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: Cpu,
    description: 'Next-generation computing solutions for complex problems',
    popularity: 78,
    growthRate: 92,
    averageRating: 4.9,
    priceRange: '$200K - $2M',
    implementationTime: '6-12 months',
    roi: '500-1000%'
  },
  {

    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions for modern threats',
    popularity: 92,
    growthRate: 85,
    averageRating: 4.7,
    priceRange: '$30K - $300K',
    implementationTime: '2-4 months',
    roi: '200-400%'
  },
  {

    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and automation',
    popularity: 88,
    growthRate: 79,
    averageRating: 4.6,
    priceRange: '$25K - $250K',
    implementationTime: '2-5 months',
    roi: '150-300%'
  },
  {

    id: 'data-analytics',
    name: 'Data Analytics & BI',
    icon: BarChart3,
    description: 'Data-driven insights and business intelligence',
    popularity: 85,
    growthRate: 76,
    averageRating: 4.5,
    priceRange: '$20K - $200K',
    implementationTime: '1-3 months',
    roi: '180-350%'
  },
  {

    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: Globe,
    description: 'Decentralized solutions and digital transformation',
    popularity: 72,
    growthRate: 89,
    averageRating: 4.4,
    priceRange: '$100K - $800K',
    implementationTime: '4-8 months',
    roi: '250-600%'
  },
  {

    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: Database,
    description: 'Connected devices and edge processing solutions',
    popularity: 68,
    growthRate: 82,
    averageRating: 4.3,
    priceRange: '$40K - $400K',
    implementationTime: '3-6 months',
    roi: '200-450%'
  },
  {

    id: 'digital-twin',
    name: 'Digital Twin Platform',
    icon: Eye,
    description: 'Virtual representations of physical systems',
    popularity: 65,
    growthRate: 94,
    averageRating: 4.6,
    priceRange: '$150K - $1.5M',
    implementationTime: '6-10 months',
    roi: '400-800%'
  }
];

export function AIServiceRecommendationEngine() {

  const [isOpen, setIsOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({

    pageViews: [],
    timeSpent: 0,
    interactions: [],
    interests: [],
    companySize: 'medium',
    industry: 'technology',
    budget: 'medium',
    timeline: '6-12 months',
    painPoints: []
  });
  const [recommendations, setRecommendations] = useState<ServiceRecommendation[]>([]);
  const [selectedService, setSelectedService] = useState<ServiceRecommendation | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Analyze user behavior and generate recommendations
  const analyzeUserBehavior = useCallback(async () => {

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate AI analysis process
    const steps = [
      'Analyzing page views and navigation patterns...',
      'Processing user interactions and engagement metrics...',
      'Identifying industry trends and market opportunities...',
      'Calculating ROI and implementation feasibility...',
      'Generating personalized recommendations...'
    ];

    for (let i = 0; i < steps.length; i++) {

      await new Promise(resolve => setTimeout(resolve, 800));
      setAnalysisProgress(((i + 1) / steps.length) * 100);
    }

    // Generate AI-powered recommendations
    const newRecommendations = generateRecommendations();
    setRecommendations(newRecommendations);
    setIsAnalyzing(false);
  }, [userBehavior]);

  // AI recommendation algorithm
  const generateRecommendations = useCallback(() => {

    const newRecommendations: ServiceRecommendation[] = [];

    // Analyze user behavior patterns
    const hasAIIntrest = userBehavior.interests.includes('ai') || userBehavior.pageViews.some(page => page.includes('ai'));
    const hasSecurityConcerns = userBehavior.painPoints.includes('security') || userBehavior.interests.includes('cybersecurity');
    const hasDataNeeds = userBehavior.interests.includes('data') || userBehavior.pageViews.some(page => page.includes('analytics'));
    const isEnterprise = userBehavior.companySize === 'large';
    const hasHighBudget = userBehavior.budget === 'high';

    // Generate personalized recommendations
    serviceCategories.forEach(service => {

      let confidence = 50; // Base confidence
      const reasoning: string[] = [];
      const benefits: string[] = [];
      const implementation: string[] = [];

      // AI/ML services
      if (service.id === 'ai-ml' && hasAIIntrest) {

        confidence += 30;
        reasoning.push('High interest in AI solutions detected');
        reasoning.push('Company size supports AI implementation');
        benefits.push('Automate repetitive tasks and processes');
        benefits.push('Gain competitive advantage through AI insights');
        benefits.push('Improve decision-making with predictive analytics');
        implementation.push('Start with pilot AI project');
        implementation.push('Implement data collection and preparation');
        implementation.push('Train team on AI tools and processes');
      }

      // Cybersecurity services
      if (service.id === 'cybersecurity' && hasSecurityConcerns) {

        confidence += 35;
        reasoning.push('Security concerns identified in pain points');
        reasoning.push('Critical for business continuity and compliance');
        benefits.push('Protect sensitive business data and systems');
        benefits.push('Meet regulatory compliance requirements');
        benefits.push('Build customer trust and confidence');
        implementation.push('Conduct security assessment and audit');
        implementation.push('Implement multi-layered security approach');
        implementation.push('Establish incident response procedures');
      }

      // Data Analytics services
      if (service.id === 'data-analytics' && hasDataNeeds) {

        confidence += 25;
        reasoning.push('Data-driven decision making identified as need');
        reasoning.push('Company has data assets to leverage');
        benefits.push('Unlock insights from existing data');
        benefits.push('Improve operational efficiency');
        benefits.push('Identify new business opportunities');
        implementation.push('Assess current data infrastructure');
        implementation.push('Implement data governance framework');
        implementation.push('Deploy analytics dashboards and tools');
      }

      // Enterprise services
      if (isEnterprise && service.id === 'quantum-computing') {

        confidence += 20;
        reasoning.push('Enterprise company can support quantum initiatives');
        reasoning.push('High budget allocation available');
        benefits.push('Solve complex computational problems');
        benefits.push('Future-proof technology investment');
        benefits.push('Competitive advantage in research and development');
        implementation.push('Partner with quantum computing experts');
        implementation.push('Develop quantum-ready applications');
        implementation.push('Establish quantum computing strategy');
      }

      // High budget services
      if (hasHighBudget && service.id === 'digital-twin') {

        confidence += 15;
        reasoning.push('Budget supports advanced technology investment');
        reasoning.push('Long-term strategic value proposition');
        benefits.push('Optimize physical systems and processes');
        benefits.push('Predictive maintenance and planning');
        benefits.push('Reduce operational costs and risks');
        implementation.push('Map physical systems to digital models');
        implementation.push('Integrate with existing IoT infrastructure');
        implementation.push('Train teams on digital twin operations');
      }

      // Industry-specific recommendations
      if (userBehavior.industry === 'healthcare' && service.id === 'ai-ml') {

        confidence += 20;
        reasoning.push('Healthcare industry benefits greatly from AI');
        reasoning.push('Regulatory compliance requirements met');
        benefits.push('Improve patient diagnosis and treatment');
        benefits.push('Optimize healthcare operations and costs');
        benefits.push('Enhance medical research and development');
      }

      if (userBehavior.industry === 'finance' && service.id === 'blockchain') {

        confidence += 25;
        reasoning.push('Finance industry embracing blockchain technology');
        reasoning.push('High security and transparency requirements');
        benefits.push('Reduce transaction costs and processing time');
        benefits.push('Enhance security and fraud prevention');
        benefits.push('Improve regulatory compliance and audit trails');
      }

      // Calculate priority based on confidence and business impact
      let priority: 'high' | 'medium' | 'low' = 'low';
      if (confidence >= 80) priority = 'high';
      else if (confidence >= 60) priority = 'medium';

      // Only include recommendations with sufficient confidence
      if (confidence >= 50) {

        newRecommendations.push({

          id: `${service.id}-rec`,
          service,
          confidence,
          reasoning,
          benefits,
          implementation,
          estimatedCost: service.priceRange,
          estimatedROI: service.roi,
          priority
        });
      }
    });

    // Sort by confidence and priority
    return newRecommendations.sort((a, b) => {

      if (a.priority === 'high' && b.priority !== 'high') return -1;
      if (b.priority === 'high' && a.priority !== 'high') return 1;
      return b.confidence - a.confidence;
    });
  }, [userBehavior]);

  // Track user behavior
  useEffect(() => {

    // Simulate tracking user behavior
    const trackBehavior = () => {

      const currentPage = window.location.pathname;
      setUserBehavior(prev => ({

        ...prev,
        pageViews: [...prev.pageViews, currentPage],
        timeSpent: prev.timeSpent + 1,
        interactions: [...prev.interactions, `page_view_${currentPage}`]
      }));
    };

    const interval = setInterval(trackBehavior, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-analyze when behavior changes significantly
  useEffect(() => {

    if (userBehavior.pageViews.length > 5 && !isAnalyzing) {

      analyzeUserBehavior();
    }
  }, [userBehavior.pageViews.length, analyzeUserBehavior, isAnalyzing]);

  return (
    <>
      {/* Floating AI Recommendation Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Brain className="w-6 h-6" />
      </motion.button>

      {/* AI Recommendation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      AI Recommendations
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Personalized service suggestions
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ×
                </button>
              </div>

              {/* Analysis Status */}
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <RefreshCw className="w-5 h-5 text-purple-600 animate-spin" />
                    <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                      AI Analysis in Progress
                    </span>
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${analysisProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                    {Math.round(analysisProgress)}% Complete
                  </div>
                </motion.div>
              )}

              {/* User Behavior Summary */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Behavior Analysis
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Pages Viewed</div>
                    <div className="font-medium text-gray-900 dark:text-white">{userBehavior.pageViews.length}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Time Spent</div>
                    <div className="font-medium text-gray-900 dark:text-white">{userBehavior.timeSpent}m</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Company Size</div>
                    <div className="font-medium text-gray-900 dark:text-white capitalize">{userBehavior.companySize}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400">Industry</div>
                    <div className="font-medium text-gray-900 dark:text-white capitalize">{userBehavior.industry}</div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Recommended Services
                  </h3>
                  <div className="space-y-3">
                    {recommendations.map((recommendation) => (
                      <motion.div
                        key={recommendation.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${

                          recommendation.priority === 'high' ? 'border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800' :
                          recommendation.priority === 'medium' ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800' :
                          'border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800'
                        }`}
                        onClick={() => setSelectedService(recommendation)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
                              <recommendation.service.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {recommendation.service.name}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {recommendation.service.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${

                              recommendation.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                              recommendation.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {recommendation.priority} priority
                            </div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                              {recommendation.confidence}%
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600 dark:text-gray-400">{recommendation.estimatedCost}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600 dark:text-gray-400">ROI: {recommendation.estimatedROI}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Manual Analysis Trigger */}
              <div className="text-center">
                <button
                  onClick={analyzeUserBehavior}
                  disabled={isAnalyzing}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Refresh Analysis'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <selectedService.service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedService.service.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        AI Recommendation • {selectedService.confidence}% Confidence
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Service Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Popularity:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.service.popularity}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Growth Rate:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.service.growthRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.service.averageRating}/5.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Implementation:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.service.implementationTime}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Business Impact
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Estimated Cost:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.estimatedCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Expected ROI:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{selectedService.estimatedROI}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Priority:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${

                          selectedService.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                          selectedService.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {selectedService.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Reasoning */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    AI Reasoning
                  </h3>
                  <div className="space-y-2">
                    {selectedService.reasoning.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Benefits
                  </h3>
                  <div className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Steps */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Implementation Steps
                  </h3>
                  <div className="space-y-2">
                    {selectedService.implementation.map((step, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}