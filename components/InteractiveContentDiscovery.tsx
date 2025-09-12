import React, { useState } from 'react';
import Link from 'next/link';

interface ContentRecommendation {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: string;
  readTime: string;
}

export default function InteractiveContentDiscovery() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [recommendations, setRecommendations] = useState<ContentRecommendation[]>([]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    const roleContent = {
      executive: [
        {
          title: "AI Implementation Master Guide 2026",
          description: "Strategic framework for AI implementation with ROI analysis.",
          href: "/resources/ai-implementation-master-guide-2026",
          category: "Strategy",
          icon: "📊",
          readTime: "200+ pages"
        }
      ],
      technical: [
        {
          title: "AI Advanced Neural Architectures 2025",
          description: "Deep dive into revolutionary neural architectures.",
          href: "/blog/ai-2025-advanced-neural-architectures",
          category: "Architecture",
          icon: "🧠",
          readTime: "35 min read"
        }
      ],
      business: [
        {
          title: "AI Workforce Transformation Playbook 2025",
          description: "Complete guide to building AI-ready teams.",
          href: "/resources/ai-workforce-transformation-playbook-2025",
          category: "Workforce",
          icon: "👥",
          readTime: "150+ pages"
        }
      ]
    };
    setRecommendations(roleContent[role as keyof typeof roleContent] || []);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🎯 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tell us about your role and we'll recommend the most relevant AI resources for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">👤 What's your primary role?</h3>
              <div className="space-y-4">
                <button
                  onClick={() => handleRoleSelect('executive')}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedRole === 'executive'
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👔</span>
                    <div>
                      <div className="font-semibold">Executive & Leader</div>
                      <div className="text-sm text-gray-600">Strategic AI implementation guides and ROI frameworks</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleRoleSelect('technical')}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedRole === 'technical'
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👨‍💻</span>
                    <div>
                      <div className="font-semibold">Technical Team</div>
                      <div className="text-sm text-gray-600">Deep technical guides and implementation frameworks</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleRoleSelect('business')}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedRole === 'business'
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <div className="font-semibold">Business Team</div>
                      <div className="text-sm text-gray-600">Business-focused guides and practical strategies</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              📚 Recommended for You
              {recommendations.length > 0 && (
                <span className="text-lg font-normal text-gray-600 ml-2">
                  ({recommendations.length} resources)
                </span>
              )}
            </h3>

            {recommendations.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Select your role</h4>
                <p className="text-gray-600">
                  Choose your primary role to get personalized AI resource recommendations.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recommendations.map((item, index) => (
                  <Link key={index} href={item.href} className="group block">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                            <span className="text-xs text-gray-500">{item.readTime}</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">Want to explore more?</h4>
              <p className="text-indigo-100 mb-4">Discover our complete library of AI resources.</p>
              <Link
                href="/content-showcase"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                🎯 Explore All Content
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}