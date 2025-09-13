import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Brain, Zap, Target, Users, Globe, Shield, BarChart3, Lightbulb } from 'lucide-react';

export default function AIInsightsComprehensive2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Insights Comprehensive 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Deep dive into the most comprehensive AI insights, market analysis, and strategic intelligence 
              that will shape the future of artificial intelligence and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Insights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          AI Market Analysis & Trends
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {marketAnalysis.map((analysis, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mr-4">
                  {analysis.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{analysis.title}</h3>
                  <p className="text-gray-400 text-sm">{analysis.category}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{analysis.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-medium">{analysis.growth}</span>
                <Link 
                  href={analysis.link} 
                  className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center"
                >
                  Read Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Insights */}
      <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Strategic AI Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategicInsights.map((insight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <div className="text-2xl font-bold text-indigo-400 mb-2">{insight.metric}</div>
                <div className="text-gray-400 text-sm">{insight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Impact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Industry Impact Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryImpact.map((industry, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">AI Adoption</span>
                  <span className="text-green-400 font-medium">{industry.adoption}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">ROI Impact</span>
                  <span className="text-blue-400 font-medium">{industry.roi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Growth Rate</span>
                  <span className="text-purple-400 font-medium">{industry.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Predictions */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Future AI Predictions 2025-2030
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get exclusive insights into the future of AI and how it will transform industries, 
            economies, and human society over the next decade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {futurePredictions.map((prediction, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{prediction.title}</h3>
                </div>
                <p className="text-gray-200 text-sm">{prediction.description}</p>
                <div className="mt-3 text-yellow-400 text-sm font-medium">{prediction.timeline}</div>
              </div>
            ))}
          </div>
          <Link 
            href="/blog/ai-2025-future-predictions" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            Read Full Predictions Report
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const marketAnalysis = [
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "AI Market Growth Analysis",
    category: "Market Research",
    description: "Comprehensive analysis of AI market growth, investment trends, and emerging opportunities across industries.",
    growth: "45% YoY Growth",
    link: "/blog/ai-2025-market-analysis"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "Enterprise AI Adoption Trends",
    category: "Business Intelligence",
    description: "Deep dive into how enterprises are adopting AI technologies and the impact on business operations.",
    growth: "78% Adoption Rate",
    link: "/blog/ai-2025-enterprise-adoption"
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "Neural Network Breakthroughs",
    category: "Technical Analysis",
    description: "Analysis of the latest neural network architectures and their implications for AI development.",
    growth: "300% Performance Gain",
    link: "/blog/ai-2025-neural-architecture-revolution"
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Global AI Policy Landscape",
    category: "Regulatory Analysis",
    description: "Comprehensive overview of AI regulations, policies, and governance frameworks worldwide.",
    growth: "New Framework",
    link: "/blog/ai-2025-global-policy-landscape"
  }
];

const strategicInsights = [
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "AI Implementation Success Rate",
    description: "Percentage of successful AI implementations across different industry verticals",
    metric: "87%",
    label: "Success Rate"
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Average ROI from AI Projects",
    description: "Typical return on investment for AI transformation initiatives",
    metric: "340%",
    label: "Average ROI"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Jobs Created by AI",
    description: "New job opportunities created by AI adoption and automation",
    metric: "2.3M",
    label: "New Jobs (2024)"
  }
];

const industryImpact = [
  {
    icon: <Brain className="h-5 w-5 text-white" />,
    name: "Healthcare",
    adoption: "92%",
    roi: "450%",
    growth: "+65%"
  },
  {
    icon: <Target className="h-5 w-5 text-white" />,
    name: "Finance",
    adoption: "88%",
    roi: "380%",
    growth: "+52%"
  },
  {
    icon: <Zap className="h-5 w-5 text-white" />,
    name: "Manufacturing",
    adoption: "85%",
    roi: "420%",
    growth: "+58%"
  },
  {
    icon: <Globe className="h-5 w-5 text-white" />,
    name: "Retail",
    adoption: "78%",
    roi: "320%",
    growth: "+45%"
  }
];

const futurePredictions = [
  {
    title: "Artificial General Intelligence (AGI)",
    description: "First AGI systems will emerge, capable of human-level reasoning across all domains.",
    timeline: "2027-2029"
  },
  {
    title: "Quantum AI Revolution",
    description: "Quantum computing will enable AI systems with unprecedented computational power.",
    timeline: "2026-2028"
  },
  {
    title: "Neural Interface Integration",
    description: "Direct brain-computer interfaces will become commercially available for consumers.",
    timeline: "2028-2030"
  },
  {
    title: "Autonomous Everything",
    description: "Complete automation of transportation, manufacturing, and service industries.",
    timeline: "2025-2027"
  }
];