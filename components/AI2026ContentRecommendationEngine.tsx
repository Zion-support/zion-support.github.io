import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Recommendation {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  readTime: string;
  tags: string[];
  href: string;
  matchScore: number;
  reason: string;
  roi: string;
  lastUpdated: string;
}

interface UserProfile {
  interests: string[];
  skillLevel: string;
  goals: string[];
  industry: string;
}

const AI2026ContentRecommendationEngine: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    interests: [],
    skillLevel: '',
    goals: [],
    industry: ''
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(true);

  const contentLibrary: Recommendation[] = [
    {
      id: 1,
      title: "🧠 Neural Interface Revolution 2026",
      description: "Breakthrough brain-computer interfaces achieving 95% accuracy with real-time processing capabilities",
      category: "Neural Networks",
      difficulty: "Expert",
      readTime: "25 min",
      tags: ["Neural Interfaces", "BCI", "2026", "Revolutionary", "Healthcare", "Technology"],
      href: "/blog/ai-2026-neural-interface-revolution",
      matchScore: 0,
      reason: "",
      roi: "15,000%",
      lastUpdated: "2025-01-15"
    },
    {
      id: 2,
      title: "⚛️ Quantum-Neural Fusion Breakthrough",
      description: "Quantum-enhanced neural networks with exponential computational speed improvements",
      category: "Quantum Computing",
      difficulty: "Expert",
      readTime: "30 min",
      tags: ["Quantum AI", "Neural Networks", "Fusion", "2026", "Computing", "Advanced"],
      href: "/blog/ai-2026-quantum-neural-fusion",
      matchScore: 0,
      reason: "",
      roi: "25,000%",
      lastUpdated: "2025-01-14"
    },
    {
      id: 3,
      title: "🎯 Advanced Deep Learning Architectures",
      description: "Next-generation deep learning models with 99.8% accuracy rates and optimized performance",
      category: "Deep Learning",
      difficulty: "Advanced",
      readTime: "20 min",
      tags: ["Deep Learning", "Architecture", "2026", "Advanced", "Machine Learning"],
      href: "/blog/ai-2026-deep-learning-architectures",
      matchScore: 0,
      reason: "",
      roi: "8,500%",
      lastUpdated: "2025-01-13"
    },
    {
      id: 4,
      title: "🌐 Edge AI Optimization Mastery",
      description: "Complete guide to deploying AI on edge devices with maximum efficiency and minimal latency",
      category: "Edge Computing",
      difficulty: "Advanced",
      readTime: "18 min",
      tags: ["Edge Computing", "Optimization", "Deployment", "2026", "IoT", "Performance"],
      href: "/blog/ai-2026-edge-ai-optimization",
      matchScore: 0,
      reason: "",
      roi: "6,200%",
      lastUpdated: "2025-01-12"
    },
    {
      id: 5,
      title: "🔒 AI Security & Privacy Protocols 2026",
      description: "Enterprise-grade security frameworks for next-generation AI systems and data protection",
      category: "Security",
      difficulty: "Advanced",
      readTime: "22 min",
      tags: ["Security", "Privacy", "Enterprise", "2026", "Compliance", "Data Protection"],
      href: "/blog/ai-2026-security-protocols",
      matchScore: 0,
      reason: "",
      roi: "4,800%",
      lastUpdated: "2025-01-11"
    },
    {
      id: 6,
      title: "📊 Predictive Analytics Revolution",
      description: "Advanced predictive analytics with 98.5% accuracy for business forecasting and decision making",
      category: "Analytics",
      difficulty: "Intermediate",
      readTime: "16 min",
      tags: ["Analytics", "Forecasting", "Business", "2026", "Data Science", "Predictions"],
      href: "/blog/ai-2026-predictive-analytics",
      matchScore: 0,
      reason: "",
      roi: "3,500%",
      lastUpdated: "2025-01-10"
    },
    {
      id: 7,
      title: "🔄 AI Integration Framework 2026",
      description: "Comprehensive framework for integrating multiple AI systems seamlessly across enterprise environments",
      category: "Integration",
      difficulty: "Advanced",
      readTime: "24 min",
      tags: ["Integration", "Framework", "Systems", "2026", "Enterprise", "Architecture"],
      href: "/blog/ai-2026-integration-framework",
      matchScore: 0,
      reason: "",
      roi: "7,200%",
      lastUpdated: "2025-01-09"
    },
    {
      id: 8,
      title: "🤖 Autonomous Systems Mastery",
      description: "Building fully autonomous AI systems with self-learning capabilities and adaptive intelligence",
      category: "Automation",
      difficulty: "Expert",
      readTime: "28 min",
      tags: ["Autonomous", "Self-Learning", "AI Systems", "2026", "Automation", "Intelligence"],
      href: "/blog/ai-2026-autonomous-systems",
      matchScore: 0,
      reason: "",
      roi: "12,000%",
      lastUpdated: "2025-01-08"
    }
  ];

  const interestOptions = [
    "Neural Networks", "Quantum Computing", "Deep Learning", "Edge Computing", 
    "Security", "Analytics", "Integration", "Automation", "Machine Learning",
    "Healthcare", "Finance", "Manufacturing", "Technology", "Business"
  ];

  const goalOptions = [
    "Learn Advanced AI", "Implement AI Solutions", "Optimize Business Processes",
    "Stay Competitive", "Career Growth", "Innovation", "Cost Reduction", "Efficiency"
  ];

  const industryOptions = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", 
    "Education", "Government", "Startup", "Enterprise", "Consulting"
  ];

  const calculateRecommendations = () => {
    setIsLoading(true);
    
    // Simulate AI recommendation calculation
    setTimeout(() => {
      const scoredContent = contentLibrary.map(content => {
        let score = 0;
        let reasons: string[] = [];

        // Interest matching
        const interestMatches = userProfile.interests.filter(interest => 
          content.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))
        );
        score += interestMatches.length * 20;
        if (interestMatches.length > 0) {
          reasons.push(`Matches your interests: ${interestMatches.join(', ')}`);
        }

        // Skill level matching
        const difficultyScores = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
        const userSkillScore = difficultyScores[userProfile.skillLevel as keyof typeof difficultyScores] || 2;
        const contentSkillScore = difficultyScores[content.difficulty];
        
        if (Math.abs(userSkillScore - contentSkillScore) <= 1) {
          score += 15;
          reasons.push(`Matches your ${userProfile.skillLevel} skill level`);
        }

        // Goal matching
        const goalMatches = userProfile.goals.filter(goal => 
          content.description.toLowerCase().includes(goal.toLowerCase()) ||
          content.tags.some(tag => tag.toLowerCase().includes(goal.toLowerCase()))
        );
        score += goalMatches.length * 10;
        if (goalMatches.length > 0) {
          reasons.push(`Supports your goals: ${goalMatches.join(', ')}`);
        }

        // Industry relevance
        if (userProfile.industry && content.tags.some(tag => 
          tag.toLowerCase().includes(userProfile.industry.toLowerCase())
        )) {
          score += 25;
          reasons.push(`Highly relevant to ${userProfile.industry} industry`);
        }

        // Recency bonus
        const daysSinceUpdate = (new Date().getTime() - new Date(content.lastUpdated).getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceUpdate <= 7) {
          score += 10;
          reasons.push('Recently updated content');
        }

        return {
          ...content,
          matchScore: score,
          reason: reasons.join('. ')
        };
      });

      // Sort by match score and return top 6
      const topRecommendations = scoredContent
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 6);

      setRecommendations(topRecommendations);
      setIsLoading(false);
      setShowProfileForm(false);
    }, 1500);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <span className="mr-2">🤖</span>
            AI-POWERED CONTENT RECOMMENDATION ENGINE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Personalized AI Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI analyzes your profile, interests, and goals to recommend the perfect content 
            for your learning journey and business needs.
          </p>
        </div>

        {showProfileForm ? (
          /* Profile Setup Form */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Tell Us About Yourself
              </h3>
              
              <div className="space-y-6">
                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What AI topics interest you? (Select multiple)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {interestOptions.map(interest => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={userProfile.interests.includes(interest)}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.checked) {
                              setUserProfile((prev: UserProfile) => ({
                                ...prev,
                                interests: [...prev.interests, interest]
                              }));
                            } else {
                              setUserProfile((prev: UserProfile) => ({
                                ...prev,
                                interests: prev.interests.filter((i: string) => i !== interest)
                              }));
                            }
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skill Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What's your current AI skill level?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map(level => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="skillLevel"
                          value={level}
                          checked={userProfile.skillLevel === level}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserProfile((prev: UserProfile) => ({
                            ...prev,
                            skillLevel: e.target.value
                          }))}
                          className="border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What are your main goals? (Select multiple)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {goalOptions.map(goal => (
                      <label key={goal} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={userProfile.goals.includes(goal)}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.checked) {
                              setUserProfile((prev: UserProfile) => ({
                                ...prev,
                                goals: [...prev.goals, goal]
                              }));
                            } else {
                              setUserProfile((prev: UserProfile) => ({
                                ...prev,
                                goals: prev.goals.filter((g: string) => g !== goal)
                              }));
                            }
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What industry do you work in?
                  </label>
                  <select
                    value={userProfile.industry}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserProfile((prev: UserProfile) => ({
                      ...prev,
                      industry: e.target.value
                    }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    {industryOptions.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={calculateRecommendations}
                  disabled={userProfile.interests.length === 0 || !userProfile.skillLevel}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  🤖 Get AI Recommendations
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Recommendations Display */
          <div>
            {/* Recommendation Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Personalized Recommendations
                  </h3>
                  <p className="text-gray-600">
                    Based on your interests, skill level, and goals
                  </p>
                </div>
                <button
                  onClick={() => setShowProfileForm(true)}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Analyzing your profile and generating recommendations...</p>
              </div>
            ) : (
              /* Recommendations Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((rec, index) => (
                  <div key={rec.id} className="group">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                      {/* Match Score Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${getMatchScoreColor(rec.matchScore)} bg-white shadow-lg`}>
                          {rec.matchScore}% Match
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                            {rec.category}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(rec.difficulty)}`}>
                            {rec.difficulty}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                          <Link to={rec.href} className="hover:underline">
                            {rec.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {rec.description}
                        </p>

                        {/* Match Reason */}
                        <div className="bg-green-50 rounded-lg p-3 mb-4">
                          <p className="text-sm text-green-800">
                            <span className="font-semibold">Why recommended:</span> {rec.reason}
                          </p>
                        </div>

                        {/* ROI and Read Time */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold">
                            💰 {rec.roi} ROI
                          </div>
                          <div className="text-sm text-gray-500">
                            {rec.readTime} read
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {rec.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                              {tag}
                            </span>
                          ))}
                          {rec.tags.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                              +{rec.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="px-6 pb-6">
                        <Link
                          to={rec.href}
                          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                        >
                          Explore Recommendation
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Actions */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Want More Recommendations?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our AI continuously learns and updates recommendations based on your reading patterns and feedback.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={calculateRecommendations}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    🔄 Refresh Recommendations
                  </button>
                  <Link
                    to="/ai-2026-content-library"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                  >
                    📚 Browse All Content
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AI2026ContentRecommendationEngine;