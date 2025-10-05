import { Link } from "react-router-dom";

const September30NewContentMegaBanner = () => {
  const newArticles = [
    {",
      title: "AI Neural Coding Breakthrough",
      description: "Programming at the speed of thought with 99.7% accuracy",
      icon: Brain,",
      link: "/blog/ai-neural-coding-breakthrough-2025",
      category: "Neural AI",",
      impact: "95% faster development"
    },
    {",
      title: "AI Holographic Computing",
      description: "Immersive 3D data visualization with zero latency",
      icon: Layers,",
      link: "/blog/ai-holographic-computing-2025",
      category: "Spatial AI",",
      impact: "10x faster insights"
    },
    {",
      title: "AI Quantum Consciousness",
      description: "1M times faster reasoning with emergent creativity",
      icon: Atom,",
      link: "/blog/ai-quantum-consciousness-2025",
      category: "Quantum AI",",
      impact: "1M× performance"
    },
    {",
      title: "AI Molecular Manufacturing",
      description: "Atomic-precision production with zero waste",
      icon: Zap,",
      link: "/blog/ai-molecular-manufacturing-2025",
      category: "NanoTech",",
      impact: "100% recyclable"
    },
    {",
      title: "AI Personalized Education",
      description: "10x better learning outcomes for every student",
      icon: GraduationCap,",
      link: "/blog/ai-personalized-education-revolution-2025",
      category: "EdTech AI",",
      impact: "97% mastery rate"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-purple-500/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">

            <span className="text-lg font-bold">SEPTEMBER 30, 2025 • MEGA BREAKTHROUGH RELEASE</span>

          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            🚀 5 Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
            Neural coding that programs at thought speed • Holographic 3D visualization • Quantum consciousness AI • 
            Molecular manufacturing at atomic precision • Personalized education revolution
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {newArticles.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <article.icon className="w-6 h-6"</div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-cyan-300 mb-2">{article.category}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-blue-200 mb-3">{article.description}</p>
                  <div className="text-xs font-semibold text-green-300 bg-green-500/20 px-3 py-1 rounded-full inline-block">
                    {article.impact}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Additional promotional card */}
          <Link
            to="/blog"
            className="group bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center text-center"
          >

            <h3 className="text-xl font-bold mb-2">View All Articles</h3>
            <p className="text-sm text-yellow-200 mb-4">200+ groundbreaking insights</p>
            <div className="flex items-center gap-2 text-yellow-400 font-semibold">
              Explore Now

            </div>
          </Link>
        </div>

        {/* Stats Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              
              <div className="text-sm text-blue-200">New Breakthroughs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">10×</div>
              <div className="text-sm text-blue-200">Performance Gains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">1M×</div>
              <div className="text-sm text-blue-200">Quantum Speedup</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">97%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-1">$15T</div>
              <div className="text-sm text-blue-200">Market Impact</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 group"
          >

            Explore All Breakthroughs

          </Link>
          <Link
            to="/contact"
            className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >

            Get Started Today
          </Link>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
            🧠 Neural Coding
          </span>
          <span className="bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30">
            📊 Holographic AI
          </span>
          <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
            ⚛️ Quantum AI
          </span>
          <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
            🔬 Molecular Manufacturing
          </span>
          <span className="bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full text-sm font-medium border border-pink-400/30">
            📚 AI Education
          </span>
        </div>
      </div>
    </div>
  );
};

export default September30NewContentMegaBanner;