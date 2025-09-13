import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContent2026UltimateShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026 Ultimate Breakthrough Showcase",
      description: "Revolutionary AI technologies delivering 15,000% ROI with quantum-neural fusion and autonomous systems.",
      category: "AI Breakthroughs",
      roi: "15,000%",
      accuracy: "99.9%",
      performance: "15,000x",
      href: "/ai-2026-ultimate-breakthrough-showcase",
      icon: "🚀",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-900/50 to-blue-900/50"
    },
    {
      id: 2,
      title: "Advanced Quantum Computing Solutions",
      description: "Achieve quantum supremacy with 10,000x performance improvements and breakthrough applications.",
      category: "Quantum Computing",
      roi: "10,000%",
      accuracy: "99.99%",
      performance: "10,000x",
      href: "/quantum-computing-solutions-advanced",
      icon: "⚛️",
      gradient: "from-cyan-500 to-purple-500",
      bgGradient: "from-cyan-900/50 to-purple-900/50"
    },
    {
      id: 3,
      title: "Neural Interface Solutions",
      description: "Revolutionary brain-computer interfaces with 95% accuracy and zero latency communication.",
      category: "Neural Technology",
      roi: "3,000%",
      accuracy: "95%",
      performance: "0ms",
      href: "/neural-interface-solutions",
      icon: "🧠",
      gradient: "from-emerald-500 to-cyan-500",
      bgGradient: "from-emerald-900/50 to-cyan-900/50"
    }
  ];

  const successStories = [
    {
      company: "Global Manufacturing Giant",
      industry: "Manufacturing",
      roi: "15,000%",
      improvement: "300% efficiency gain",
      technology: "Quantum-Neural Fusion",
      icon: "🏭"
    },
    {
      company: "Leading Healthcare Network",
      industry: "Healthcare",
      roi: "3,000%",
      improvement: "95% patient recovery rate",
      technology: "Neural Interface",
      icon: "🏥"
    },
    {
      company: "Fortune 500 Financial",
      industry: "Finance",
      roi: "10,000%",
      improvement: "95% risk reduction",
      technology: "Quantum Computing",
      icon: "💰"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold mb-6">
            🎯 FEATURED BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content showcasing the most advanced AI, quantum computing, 
            and neural interface technologies delivering unprecedented results.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => (
            <div 
              key={content.id}
              className={`bg-gradient-to-br ${content.bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:scale-105 shadow-lg`}
            >
              <div className="text-4xl mb-4">{content.icon}</div>
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.gradient} text-white`}>
                  {content.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                {content.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{content.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{content.accuracy}</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{content.performance}</div>
                  <div className="text-xs text-gray-400">Performance</div>
                </div>
              </div>
              
              <Link 
                href={content.href}
                className={`inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r ${content.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Success Stories</h3>
            <p className="text-lg text-gray-600">
              Real enterprises achieving extraordinary results with our breakthrough technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
                <div className="text-4xl mb-4">{story.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h4>
                <p className="text-gray-600 mb-4">{story.industry}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI Achieved:</span>
                    <span className="font-bold text-green-600">{story.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Improvement:</span>
                    <span className="font-semibold text-blue-600">{story.improvement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Technology:</span>
                    <span className="font-semibold text-purple-600">{story.technology}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already achieving breakthrough results with our 
            revolutionary technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Start Your Transformation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/resources"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200"
            >
              📚 View All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}