import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';

export default function AI2026BreakthroughContentShowcase() {
  const breakthroughContent = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Discover the revolutionary AI breakthroughs that will transform industries in 2026. From quantum-enhanced AI to neural interfaces, explore the cutting-edge innovations shaping our future.",
      href: "/blog/ai-2026-breakthrough-innovations",
      type: "Blog Post",
      icon: "🚀",
      stats: "5000% ROI Potential",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Global Tech Transformation Case Study",
      description: "How a Fortune 500 technology company achieved unprecedented success with AI 2026 breakthrough technologies, delivering 5000% ROI and transforming their entire business model.",
      href: "/case-studies/ai-2026-global-tech-transformation-breakthrough",
      type: "Case Study",
      icon: "🏢",
      stats: "5000% ROI Achieved",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI 2026 Ultimate Implementation Toolkit",
      description: "The most comprehensive collection of tools, templates, frameworks, and strategies for implementing AI 2026 breakthrough technologies. Everything you need to transform your business.",
      href: "/resources/ai-2026-ultimate-implementation-toolkit",
      type: "Resource Guide",
      icon: "🛠️",
      stats: "Complete Toolkit",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const featuredTechnologies = [
    {
      name: "Quantum-Enhanced AI",
      description: "1000x faster processing with quantum computing",
      icon: "⚛️",
      impact: "5000% ROI"
    },
    {
      name: "Neural Interfaces",
      description: "Direct brain-computer integration",
      icon: "🧠",
      impact: "300% Productivity"
    },
    {
      name: "Autonomous Agents",
      description: "Self-organizing AI ecosystems",
      icon: "🤖",
      impact: "95% Automation"
    },
    {
      name: "Multimodal AI",
      description: "Understanding through multiple senses",
      icon: "🎯",
      impact: "95% Accuracy"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 AI 2026 Breakthrough Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring revolutionary AI innovations, 
            real-world success stories, and comprehensive implementation guides.
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {breakthroughContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <Card className="p-8 group-hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className={`inline-flex items-center bg-gradient-to-r ${content.color} text-white text-xs font-medium px-3 py-1 rounded-full mb-4`}>
                  {content.type}
                </div>
                <div className="text-4xl mb-4">{content.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    {content.stats}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🚀 Breakthrough Technologies
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredTechnologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center bg-white">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{tech.description}</p>
                <div className="text-lg font-bold text-blue-600">{tech.impact}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Don't miss out on the AI 2026 revolution. Get started with our comprehensive 
              implementation toolkit and join the companies achieving unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources/ai-2026-ultimate-implementation-toolkit"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Download Toolkit
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}