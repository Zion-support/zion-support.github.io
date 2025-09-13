import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, Users, TrendingUp, Shield, Globe } from 'lucide-react';

export default function AI2025UltimateContentRevolution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2025 Ultimate Content Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most comprehensive collection of AI insights, breakthroughs, and revolutionary content that will transform your understanding of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/case-studies" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/blog" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Read Latest Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Revolutionary Content Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <Link 
                href={category.link} 
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
              >
                Explore Content
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Breakthroughs */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured AI Breakthroughs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredBreakthroughs.map((breakthrough, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{breakthrough.title}</h3>
                    <p className="text-gray-300 text-sm">{breakthrough.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{breakthrough.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-medium">{breakthrough.impact}</span>
                  <Link 
                    href={breakthrough.link} 
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Content Impact Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your AI Knowledge?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of professionals who are already leveraging our comprehensive AI content library to stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/guides" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
            >
              View Implementation Guides
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const contentCategories = [
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "Neural Architecture Revolution",
    description: "Explore cutting-edge neural network designs and consciousness breakthroughs that are reshaping AI.",
    link: "/blog/ai-2025-neural-architecture-revolution"
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Quantum AI Fusion",
    description: "Discover how quantum computing is revolutionizing artificial intelligence and machine learning.",
    link: "/blog/ai-2025-quantum-ai-fusion"
  },
  {
    icon: <Target className="h-6 w-6 text-white" />,
    title: "Enterprise Automation",
    description: "Learn about advanced automation solutions transforming businesses across industries.",
    link: "/case-studies/ai-2025-enterprise-automation-breakthrough"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Future Predictions",
    description: "Get insights into AI trends and predictions for 2025-2030 and beyond.",
    link: "/blog/ai-2025-future-predictions"
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Success Stories",
    description: "Read real-world case studies of AI transformation and breakthrough implementations.",
    link: "/case-studies"
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Security & Ethics",
    description: "Understand AI safety, governance, and ethical considerations in modern applications.",
    link: "/blog/ai-2025-ethical-ai-governance"
  }
];

const featuredBreakthroughs = [
  {
    title: "Quantum Neural Consciousness Breakthrough",
    date: "January 2025",
    description: "Revolutionary advancement in quantum-enhanced neural networks achieving unprecedented levels of artificial consciousness.",
    impact: "500% Performance Increase",
    link: "/blog/ai-2025-quantum-consciousness-breakthrough"
  },
  {
    title: "Autonomous Enterprise Transformation",
    date: "December 2024",
    description: "Complete automation of Fortune 500 operations resulting in massive efficiency gains and cost reductions.",
    impact: "15,000% ROI Achieved",
    link: "/case-studies/ai-2025-fortune-500-transformation-breakthrough"
  },
  {
    title: "Neural Interface Revolution",
    date: "November 2024",
    description: "Breakthrough in brain-computer interfaces enabling direct neural communication with AI systems.",
    impact: "Revolutionary Technology",
    link: "/blog/ai-2025-neural-interface-revolution"
  },
  {
    title: "Synthetic Intelligence Emergence",
    date: "October 2024",
    description: "First successful creation of synthetic intelligence systems with human-level reasoning capabilities.",
    impact: "Historical Milestone",
    link: "/blog/ai-2025-synthetic-intelligence-revolution"
  }
];

const statistics = [
  { value: "500+", label: "Articles Published" },
  { value: "200+", label: "Case Studies" },
  { value: "50K+", label: "Monthly Readers" },
  { value: "95%", label: "Success Rate" }
];