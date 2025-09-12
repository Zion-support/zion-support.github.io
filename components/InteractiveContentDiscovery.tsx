import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource' | 'webinar' | 'tool';
  category: string;
  readTime: string;
  icon: string;
  featured: boolean;
  tags: string[];
}

interface InteractiveContentDiscoveryProps {
  className?: string;
}

const InteractiveContentDiscovery = ({
  className = ''
}: InteractiveContentDiscoveryProps) => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const allContent: ContentItem[] = [
    {
      id: '1',
      title: "AI Advanced Automation 2025: Complete Implementation Guide",
      description: "Master advanced AI automation with comprehensive strategies, best practices, and real-world case studies for enterprise success.",
      href: "/blog/ai-2025-advanced-automation",
      type: "blog",
      category: "AI Automation",
      readTime: "25 min read",
      icon: "🤖",
      featured: true,
      tags: ["automation", "implementation", "enterprise", "ai"]
    },
    {
      id: '2',
      title: "AI Cybersecurity Threats 2025: Complete Defense Guide",
      description: "Protect your organization from emerging AI cybersecurity threats with advanced defense strategies and security best practices.",
      href: "/blog/ai-2025-cybersecurity-threats",
      type: "blog",
      category: "Cybersecurity",
      readTime: "22 min read",
      icon: "🛡️",
      featured: true,
      tags: ["security", "cybersecurity", "defense", "threats"]
    },
    {
      id: '3',
      title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
      description: "How a Fortune 500 manufacturing company achieved $200M savings, 60% faster processing, and 99.7% uptime with autonomous AI.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      type: "case-study",
      category: "Manufacturing",
      readTime: "18 min read",
      icon: "💰",
      featured: true,
      tags: ["manufacturing", "autonomous", "success", "case-study"]
    },
    {
      id: '4',
      title: "AI Implementation Checklist 2025: 150+ Actionable Items",
      description: "Complete checklist covering every aspect of AI implementation with 150+ actionable items across 7 key categories.",
      href: "/resources/ai-implementation-checklist-2025",
      type: "resource",
      category: "Implementation",
      readTime: "35 min read",
      icon: "📋",
      featured: true,
      tags: ["checklist", "implementation", "guide", "actionable"]
    },
    {
      id: '5',
      title: "AI 2025 Implementation Masterclass: Advanced Strategies",
      description: "Join our exclusive 6-hour masterclass on advanced AI implementation strategies with industry experts.",
      href: "/webinars/ai-2025-implementation-masterclass-advanced",
      type: "webinar",
      category: "Training",
      readTime: "6 hours",
      icon: "🎓",
      featured: true,
      tags: ["masterclass", "training", "expert", "strategies"]
    }
  ];

  const roles = [
    { id: 'executive', label: 'Executive/Leader', icon: '👔' },
    { id: 'technical', label: 'Technical Team', icon: '👨‍💻' },
    { id: 'business', label: 'Business Team', icon: '🏢' },
    { id: 'startup', label: 'Startup Founder', icon: '🚀' }
  ];

  const challenges = [
    { id: 'implementation', label: 'AI Implementation', icon: '⚙️' },
    { id: 'security', label: 'Security & Compliance', icon: '🔒' },
    { id: 'automation', label: 'Process Automation', icon: '🤖' },
    { id: 'strategy', label: 'AI Strategy & Planning', icon: '📊' },
    { id: 'cost', label: 'Cost Optimization', icon: '💰' },
    { id: 'talent', label: 'Talent & Training', icon: '👥' }
  ];

  const getRecommendations = (role: string, challenge: string) => {
    const roleTags = {
      'executive': ['strategy', 'implementation', 'success', 'case-study'],
      'technical': ['implementation', 'automation', 'security', 'guide'],
      'business': ['strategy', 'case-study', 'training', 'checklist'],
      'startup': ['implementation', 'strategy', 'training', 'checklist']
    };

    const challengeTags = {
      'implementation': ['implementation', 'guide', 'checklist'],
      'security': ['security', 'cybersecurity', 'defense'],
      'automation': ['automation', 'autonomous', 'implementation'],
      'strategy': ['strategy', 'planning', 'case-study'],
      'cost': ['optimization', 'success', 'case-study'],
      'talent': ['training', 'masterclass', 'guide']
    };

    const relevantTags = [
      ...(roleTags[role as keyof typeof roleTags] || []),
      ...(challengeTags[challenge as keyof typeof challengeTags] || [])
    ];

    return allContent.filter(item => 
      item.tags.some(tag => relevantTags.includes(tag))
    ).slice(0, 4);
  };

  useEffect(() => {
    if (selectedRole && selectedChallenge) {
      setIsLoading(true);
      setTimeout(() => {
        const recommendations = getRecommendations(selectedRole, selectedChallenge);
        setFilteredContent(recommendations);
        setIsLoading(false);
      }, 800);
    } else {
      setFilteredContent([]);
    }
  }, [selectedRole, selectedChallenge]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      case 'webinar': return 'from-orange-500 to-red-500';
      case 'tool': return 'from-yellow-500 to-amber-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🎯 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tell us about your role and challenges, and we'll recommend the most relevant AI resources, 
            guides, and case studies for your specific needs.
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's your role?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedRole === role.id
                    ? 'border-indigo-500 bg-indigo-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <div className="text-sm font-semibold text-gray-900">{role.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Selection */}
        {selectedRole && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's your main challenge?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => setSelectedChallenge(challenge.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedChallenge === challenge.id
                      ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-2">{challenge.icon}</div>
                  <div className="text-sm font-semibold text-gray-900">{challenge.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        {selectedRole && selectedChallenge && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recommended for {roles.find(r => r.id === selectedRole)?.label} facing {challenges.find(c => c.id === selectedChallenge)?.label}
            </h3>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                <span className="ml-4 text-lg text-gray-600">Finding your perfect resources...</span>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredContent.map((item) => (
                  <Link key={item.id} href={item.href} className="group">
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:scale-105">
                      <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-6 text-white`}>
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <div className="text-xs font-medium opacity-75 uppercase tracking-wide">
                          {item.type === 'case-study' ? 'Case Study' : 
                           item.type === 'webinar' ? 'Webinar' :
                           item.type === 'resource' ? 'Resource' : 'Article'}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500">{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reset Button */}
        {(selectedRole || selectedChallenge) && (
          <div className="text-center">
            <button
              onClick={() => {
                setSelectedRole('');
                setSelectedChallenge('');
                setFilteredContent([]);
              }}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Start Over
            </button>
          </div>
        )}

        {/* Quick Links */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
          >
            🎯 Explore All Resources
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery;