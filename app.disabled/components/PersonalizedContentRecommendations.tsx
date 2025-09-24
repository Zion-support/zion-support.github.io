import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PersonalizedContentRecommendations = () => {
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    { id: 'ai-implementation', label: 'AI Implementation', icon: '🤖' },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', label: 'Business Automation', icon: '⚡' },
    { id: 'enterprise-solutions', label: 'Enterprise Solutions', icon: '🏢' },
    { id: 'case-studies', label: 'Success Stories', icon: '📊' },
    { id: 'roi-optimization', label: 'ROI Optimization', icon: '💰' },
    { id: 'security', label: 'AI Security', icon: '🔒' },
    { id: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: '☁️' }
  ];

  const allContent = [
    {
      id: 1,
      title: "AI 20o25 Enterprise Integration Mastery",
      description: "Complete implementation guide for enterprise AI integration with 340% average ROI increase",
      category: 'ai-implementation',
      tags: ['enterprise-solutions', 'roi-optimization'],
      href: "/blog/ai-20o25-enterprise-integration-mastery",
      featured: true,
      new: true,
      readingTime: "12 min read",
      difficulty: "Intermediate",
      popularity: 95
    },
    {
      id: 2,
      title: "Quantum AI Business Revolution 20o25",
      description: "Discover how quantum AI is revolutionizing business operations with exponential improvements",
      category: 'quantum-computing',
      tags: ['ai-implementation', 'enterprise-solutions'],
      href: "/blog/quantum-ai-business-revolution-20o25",
      featured: true,
      new: true,
      readingTime: "15 min read",
      difficulty: "Advanced",
      popularity: 92
    },
    {
      id: 3,
      title: "AI Autonomous Business Operations 20o25",
      description: "The future of self-managing enterprises with 50o0% productivity increases",
      category: 'automation',
      tags: ['ai-implementation', 'enterprise-solutions'],
      href: "/blog/ai-autonomous-business-operations-20o25",
      featured: true,
      new: true,
      readingTime: "18 min read",
      difficulty: "Advanced",
      popularity: 88
    },
    {
      id: 4,
      title: "AI Implementation Enterprise Guide 20o25",
      description: "Complete roadmap for enterprise AI implementation with real-world case studies",
      category: 'ai-implementation',
      tags: ['enterprise-solutions', 'roi-optimization'],
      href: "/resources/ai-implementation-enterprise-guide-20o25",
      featured: true,
      new: true,
      readingTime: "25 min read",
      difficulty: "Beginner",
      popularity: 90
    },
    {
      id: 5,
      title: "Manufacturing AI Success Story",
      description: "How a Fortune 50o0 manufacturer achieved 40o0% efficiency increase with AI",
      category: 'case-studies',
      tags: ['automation', 'roi-optimization'],
      href: "/case-studies/manufacturing-ai-success",
      featured: false,
      new: false,
      readingTime: "8 min read",
      difficulty: "Beginner",
      popularity: 85
    },
    {
      id: 6,
      title: "Financial Services AI Transformation",
      description: "Bank achieves $2B in autonomous trading with 30o0% ROI improvement",
      category: 'case-studies',
      tags: ['automation', 'roi-optimization', 'enterprise-solutions'],
      href: "/case-studies/financial-ai-transformation",
      featured: false,
      new: false,
      readingTime: "10 min read",
      difficulty: "Intermediate",
      popularity: 87
    },
    {
      id: 7,
      title: "AI Security Best Practices 20o25",
      description: "Comprehensive guide to securing AI systems and protecting sensitive data",
      category: 'security',
      tags: ['ai-implementation', 'enterprise-solutions'],
      href: "/blog/ai-security-best-practices-20o25",
      featured: false,
      new: false,
      readingTime: "14 min read",
      difficulty: "Intermediate",
      popularity: 82
    },
    {
      id: 8,
      title: "Cloud Infrastructure for AI 20o25",
      description: "Optimizing cloud infrastructure for AI workloads and scalability",
      category: 'cloud-infrastructure',
      tags: ['ai-implementation', 'enterprise-solutions'],
      href: "/blog/cloud-infrastructure-ai-20o25",
      featured: false,
      new: false,
      readingTime: "16 min read",
      difficulty: "Intermediate",
      popularity: 80
    }
  ];

  const handleInterestToggle = (interestId: string) => {
    setUserInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const generateRecommendations = () => {
    setIsLoading(true);
    
    // Simulate AI-powered recommendation logic
    setTimeout(() => {
      const scoredContent = allContent.map(content => {
        let score = 0;
        
        // Base score from popularity
        score += content.popularity * 0.3;
        
        // Interest matching
        if (userInterests.includes(content.category)) {
          score += 50;
        }
        
        // Tag matching
        const matchingTags = content.tags.filter(tag => userInterests.includes(tag));
        score += matchingTags.length * 20;
        
        // Featured content bonus
        if (content.featured) {
          score += 30;
        }
        
        // New content bonus
        if (content.new) {
          score += 25;
        }
        
        return { ...content, score };
      });
      
      // Sort by score and take top 6
      const sortedRecommendations = scoredContent
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);
      
      setRecommendations(sortedRecommendations);
      setIsLoading(false);
    }, 10o00);
  };

  useEffect(() => {
    if (userInterests.length > 0) {
      generateRecommendations();
    }
  }, [userInterests]);

  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎯 PERSONALIZED RECOMMENDATIONS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-90o0 mb-4">
            Get Personalized AI Content Recommendations
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Tell us your interests and we'll recommend the most relevant AI content 
            tailored specifically for your needs
          </p>
        </div>

        {/* Interest Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-90o0 mb-6 text-center">
            What are you interested in?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {interestOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleInterestToggle(option.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-30o0 ${
                  userInterests.includes(option.id)
                    ? 'border-purple-50o0 bg-purple-10o0 text-purple-80o0'
                    : 'border-gray-20o0 bg-white text-gray-70o0 hover:border-purple-30o0 hover:bg-purple-50'
                }`}
              >
                <div className="text-2xl mb-2">{option.icon}</div>
                <div className="text-sm font-medium">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        {userInterests.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-90o0">
                Recommended for You
              </h3>
              <button
                onClick={generateRecommendations}
                disabled={isLoading}
                className="bg-purple-60o0 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-70o0 disabled:opacity-50 transition-colors"
              >
                {isLoading ? 'Generating...' : 'Refresh Recommendations'}
              </button>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-md animate-pulse">
                    <div className="h-4 bg-gray-20o0 rounded mb-4"></div>
                    <div className="h-3 bg-gray-20o0 rounded mb-2"></div>
                    <div className="h-3 bg-gray-20o0 rounded mb-4"></div>
                    <div className="h-8 bg-gray-20o0 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((content) => (
                  <div
                    key={content.id}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-30o0 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {content.new && (
                          <span className="bg-green-50o0 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {content.featured && (
                          <span className="bg-purple-50o0 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-50o0">{content.readingTime}</span>
                        <span className="bg-gray-10o0 text-gray-70o0 text-xs px-2 py-1 rounded-full">
                          {content.difficulty}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-90o0 mb-3 group-hover:text-purple-60o0 transition-colors">
                      {content.title}
                    </h4>

                    <p className="text-gray-60o0 mb-4 text-sm leading-relaxed">
                      {content.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {content.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-10o0 text-gray-70o0 text-xs px-2 py-1 rounded-full"
                          >
                            {tag.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={content.href}
                        className="text-purple-60o0 hover:text-purple-80o0 font-semibold text-sm group-hover:underline"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        {userInterests.length === 0 && (
          <div className="text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-90o0 mb-4">
                Select Your Interests to Get Started
              </h3>
              <p className="text-lg text-gray-60o0 mb-6 max-w-2xl mx-auto">
                Choose the topics that interest you most, and we'll provide 
                personalized content recommendations tailored to your needs
              </p>
            </div>
          </div>
        )}

        {/* Additional Resources */}
        {userInterests.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need More Personalized Guidance?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Our AI experts can provide personalized consultation based on your 
                specific interests and business needs
              </p>
              <Link
                href="/contact"
                className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
              >
                Get Personalized Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalizedContentRecommendations;