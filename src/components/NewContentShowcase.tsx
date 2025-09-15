import React from 'react';

const NewContentShowcase: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="w-full">
      {/* New Content Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-4xl animate-bounce">🚀</span>
            <h2 className="text-3xl font-bold">BREAKTHROUGH NEW CONTENT 2025</h2>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary technology content ever created. Discover groundbreaking innovations that are reshaping the future of humanity.
          </p>
          
          {/* Featured New Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <a href="/pages/AdvancedTechInnovations2025" className="group bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 border border-white/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-xl font-bold mb-3">Advanced Tech Innovations</h3>
              <p className="text-sm opacity-90 mb-4">Revolutionary quantum AI, neural interfaces, and autonomous systems that are transforming industries.</p>
              <div className="flex items-center justify-between">
                <span className="bg-white/30 px-3 py-1 rounded-full text-xs font-semibold">NEW</span>
                <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">Explore →</span>
              </div>
            </a>

            <a href="/pages/FutureTechSolutions2025" className="group bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 border border-white/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <h3 className="text-xl font-bold mb-3">Future Tech Solutions</h3>
              <p className="text-sm opacity-90 mb-4">Next-generation autonomous AI ecosystems and bio-digital fusion technologies.</p>
              <div className="flex items-center justify-between">
                <span className="bg-white/30 px-3 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">Discover →</span>
              </div>
            </a>

            <a href="/pages/RevolutionaryTechInsights2025" className="group bg-white/20 backdrop-blur-sm text-white p-6 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 border border-white/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
              <h3 className="text-xl font-bold mb-3">Revolutionary Insights</h3>
              <p className="text-sm opacity-90 mb-4">Exclusive insights into AI consciousness, quantum breakthroughs, and future predictions.</p>
              <div className="flex items-center justify-between">
                <span className="bg-white/30 px-3 py-1 rounded-full text-xs font-semibold">EXCLUSIVE</span>
                <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">Learn →</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Additional New Content Showcase */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 text-white">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">🌟 More Revolutionary Content</h3>
          <p className="text-gray-300">Explore our complete collection of cutting-edge technology content</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <a href="/pages/NextGenAIRevolution2026" className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-blue-400/30">
            <div className="text-2xl mb-2">🧠</div>
            <div className="text-sm font-semibold">Next-Gen AI</div>
          </a>
          
          <a href="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-cyan-400/30">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-semibold">Quantum Revolution</div>
          </a>
          
          <a href="/pages/NeuralInterfaceRevolution2026" className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-green-400/30">
            <div className="text-2xl mb-2">🧬</div>
            <div className="text-sm font-semibold">Neural Interface</div>
          </a>
          
          <a href="/pages/RevolutionaryTechBlog2026" className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-purple-400/30">
            <div className="text-2xl mb-2">📚</div>
            <div className="text-sm font-semibold">Tech Blog</div>
          </a>
          
          <a href="/pages/ComprehensiveTechInsights2026" className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-orange-400/30">
            <div className="text-2xl mb-2">🔍</div>
            <div className="text-sm font-semibold">Tech Insights</div>
          </a>
          
          <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-indigo-400/30">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-sm font-semibold">Synthetic AI</div>
          </a>
        </div>
      </div>

      {/* Technology Impact Stats */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Revolutionary Impact</h3>
          <p className="text-emerald-100">The numbers that prove our technology is changing the world</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500%</div>
            <div className="text-emerald-100 text-sm">Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-emerald-100 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10x</div>
            <div className="text-emerald-100 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-emerald-100 text-sm">Autonomous Operation</div>
          </div>
        </div>
=======
  const newContent = [
    {
      title: "Trustworthy Model Routing",
      description: "Eval‑gated routing with cost, latency, and safety evidence",
      category: "AI Operations",
      date: "September 15, 2025",
      link: "/blog/ai-2026-trustworthy-model-routing",
      featured: true,
      badge: "NEW"
    },
    {
      title: "Agent Benchmark Suite",
      description: "Scenario packs, harnesses, and scorecards for agents",
      category: "Evaluations",
      date: "September 15, 2025",
      link: "/blog/ai-2026-agent-benchmark-suite",
      featured: true,
      badge: "NEW"
    },
    {
      title: "Revolutionary AI Business Automation",
      description: "Discover how AI automation is transforming enterprises in 2025",
      category: "AI & Automation",
      date: "January 20, 2025",
      link: "/content/blog/ai-2025-revolutionary-business-automation-breakthrough",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      title: "Quantum Computing Business Applications",
      description: "Explore the 2025 quantum computing revolution in business",
      category: "Quantum Computing",
      date: "January 20, 2025",
      link: "/content/blog/quantum-computing-business-applications-2025",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      title: "$100M AI Automation Success Story",
      description: "Real case study of transformative AI automation results",
      category: "Case Study",
      date: "January 20, 2025",
      link: "/content/case-studies/ai-automation-revolutionary-breakthrough-2025-success",
      featured: true,
      badge: "SUCCESS"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
          🚀 JUST PUBLISHED • SEPTEMBER 2025
        </div>
        <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary New Content</h2>
        <p className="text-xl opacity-90">Discover our latest insights on cutting-edge technologies</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {newContent.map((content, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                content.badge === 'BREAKTHROUGH' ? 'bg-green-500/30 text-green-200' :
                content.badge === 'REVOLUTIONARY' ? 'bg-purple-500/30 text-purple-200' :
                'bg-blue-500/30 text-blue-200'
              }`}>
                {content.badge}
              </span>
              <span className="text-sm opacity-75">{content.date}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
            <p className="text-sm opacity-90 mb-4">{content.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-75">{content.category}</span>
              <a 
                href={content.link} 
                className="text-cyan-300 hover:text-cyan-200 font-semibold text-sm transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a 
          href="/blog" 
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
        >
          View All Content
        </a>
>>>>>>> cursor/create-and-deploy-new-content-7720
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
export { NewContentShowcase };
>>>>>>> cursor/create-and-deploy-new-content-7720
export default NewContentShowcase;