"use client";
import React, { useState } from 'react';

const InteractiveContentHub2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const content = {
    breakthroughs: [
      {
        title: "March 2026 AI Breakthrough Revolution",
        description: "Revolutionary AI breakthroughs delivering 1000x processing speed and 99.7% decision accuracy",
        metrics: { speed: "1000x", accuracy: "99.7%", value: "$5B+" },
        link: "/blog/ai-2026-march-breakthrough-revolution",
        icon: "🚀"
      },
      {
        title: "Quantum-Neural Fusion Technology",
        description: "Advanced AI combining quantum computing with neural networks for unprecedented performance",
        metrics: { speed: "500x", accuracy: "98%", value: "$2B+" },
        link: "/blog/ai-2026-quantum-neural-fusion",
        icon: "⚛️"
      },
      {
        title: "Meta-Cognitive Superintelligence",
        description: "Self-aware AI systems with advanced reasoning and autonomous decision-making capabilities",
        metrics: { speed: "300x", accuracy: "97%", value: "$3B+" },
        link: "/blog/ai-2026-meta-cognitive-breakthrough",
        icon: "🧠"
      }
    ],
    caseStudies: [
      {
        title: "$5.2B Manufacturing Success",
        description: "Global manufacturing leader achieves $5.2 billion in value with 500% ROI in 6 months",
        metrics: { roi: "500%", value: "$5.2B", payback: "1.2 months" },
        link: "/case-studies/ai-2026-march-breakthrough-5-billion-success",
        icon: "💰"
      },
      {
        title: "Fortune 500 Healthcare Transformation",
        description: "Healthcare leader achieves 95% diagnostic accuracy improvement and $2.1B in savings",
        metrics: { accuracy: "95%", savings: "$2.1B", efficiency: "85%" },
        link: "/case-studies/fortune-500-ai-2026-breakthrough-mega-success",
        icon: "🏥"
      },
      {
        title: "Financial Services Revolution",
        description: "Leading bank achieves 80% fraud detection improvement and 70% cost reduction",
        metrics: { detection: "80%", savings: "70%", growth: "40%" },
        link: "/case-studies/ai-2026-financial-services-success",
        icon: "🏦"
      }
    ],
    services: [
      {
        title: "AI Strategy Consulting",
        description: "Comprehensive AI transformation strategy and roadmap development",
        metrics: { roi: "300%", duration: "3-6 months", success: "99%" },
        link: "/services/ai-2026-march-breakthrough-consulting",
        icon: "🎯"
      },
      {
        title: "Implementation Services",
        description: "End-to-end AI system deployment and integration support",
        metrics: { automation: "98%", efficiency: "99%", support: "24/7" },
        link: "/services/ai-implementation-services",
        icon: "⚙️"
      },
      {
        title: "Ongoing Optimization",
        description: "Continuous improvement and performance optimization services",
        metrics: { improvement: "50%", uptime: "99.9%", value: "200%" },
        link: "/services/ai-optimization-services",
        icon: "📈"
      }
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🎯 Interactive Content Hub 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Explore Our Revolutionary Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, success stories, and services that are transforming 
            enterprises worldwide with interactive content exploration.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('breakthroughs')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'breakthroughs'
                ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🚀 AI Breakthroughs
          </button>
          <button
            onClick={() => setActiveTab('caseStudies')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'caseStudies'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            💰 Success Stories
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'services'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🎯 Services
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content[activeTab as keyof typeof content].map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              {/* Metrics */}
              <div className="space-y-2 mb-6">
                {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-purple-400 font-bold">{value}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={item.link}
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center group-hover:shadow-lg group-hover:shadow-purple-500/50"
              >
                Explore Now →
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Interactive ROI Calculator</h3>
            <p className="text-gray-300 mb-6">
              Calculate your potential return on investment with our AI breakthrough technologies.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Annual Revenue</label>
                <input 
                  type="range" 
                  min="1000000" 
                  max="10000000000" 
                  step="1000000"
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$1M</span>
                  <span>$10B</span>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">Industry</label>
                <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white">
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Retail</option>
                </select>
              </div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 mb-4">
              <div className="text-2xl font-bold text-green-400 mb-1">Estimated ROI: 300-500%</div>
              <div className="text-green-300 text-sm">Based on industry averages</div>
            </div>
            <a 
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Get Detailed Analysis
            </a>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Success Metrics</h3>
            <p className="text-gray-300 mb-6">
              Live metrics from our AI breakthrough implementations across global enterprises.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Value Generated</span>
                <span className="text-cyan-400 font-bold text-xl">$50.2B+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Average ROI</span>
                <span className="text-blue-400 font-bold text-xl">425%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Success Rate</span>
                <span className="text-purple-400 font-bold text-xl">99.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Active Clients</span>
                <span className="text-green-400 font-bold text-xl">500+</span>
              </div>
            </div>
            <a 
              href="/case-studies"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center mt-6"
            >
              View All Success Stories
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with our revolutionary AI breakthrough technologies. 
              Get your free consultation and discover how we can deliver unprecedented value for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                Explore Services
              </a>
              <a 
                href="/blog" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Read Latest Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentHub2026;