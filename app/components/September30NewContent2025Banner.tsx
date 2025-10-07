import React from 'react';


const September30NewContent2025Banner: React.FC = () => {
  const newArticles = [
    {
      id: 0,
      title: 'AI-Accelerated Customer Experience 2025',
      slug: 'ai-accelerated-customer-experience-2025',
      excerpt: 'Real-time intent detection and autonomous workflows delivering 95% CSAT and 40% cost reduction across channels.',
      category: 'Customer Experience',
      date: '2025-09-30',
      readTime: '18 min',
      icon: '✨',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 1,
      title: 'AI-Powered Autonomous Operations 2025',
      slug: 'ai-autonomous-operations-2025',
      excerpt: 'Self-healing infrastructure achieving 99.99% uptime and 95% cost reduction. Discover how Fortune 500 enterprises achieve zero-touch IT operations.',
      category: 'Autonomous Operations',
      date: '2025-09-30',
      readTime: '15 min',
      icon: '🤖',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Generative AI for Enterprise Architecture 2025',
      slug: 'generative-ai-enterprise-architecture-2025',
      excerpt: 'Production-scale GenAI systems serving 100M+ daily requests. Master LLM orchestration, RAG pipelines, and deployment patterns at enterprise scale.',
      category: 'GenAI Architecture',
      date: '2025-09-30',
      readTime: '18 min',
      icon: '🎨',
      gradient: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 3,
      title: 'Multimodal AI Agents Enterprise 2025',
      slug: 'multimodal-ai-agents-enterprise-2025',
      excerpt: 'Unified vision, language, and audio intelligence achieving 97% cross-modal accuracy. Transform operations with AI that truly sees, hears, and understands.',
      category: 'Multimodal AI',
      date: '2025-09-30',
      readTime: '16 min',
      icon: '👁️',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Quantum-Enhanced Machine Learning 2025',
      slug: 'quantum-enhanced-machine-learning-2025',
      excerpt: '1000x performance breakthrough with quantum computing. Real quantum advantage demonstrated in optimization, drug discovery, and financial modeling.',
      category: 'Quantum ML',
      date: '2025-09-30',
      readTime: '20 min',
      icon: '⚛️',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 5,
      title: 'AI-Powered Cloud FinOps 2025',
      slug: 'ai-powered-cloud-finops-2025',
      excerpt: '60% cloud cost reduction through autonomous optimization. $450M+ annual savings achieved with AI-driven resource management and predictive scaling.',
      category: 'Cloud FinOps',
      date: '2025-09-30',
      readTime: '14 min',
      icon: '💰',
      gradient: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 border border-cyan-500/30 mb-8">
            <Rocket className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-bold text-lg tracking-wider">
              🔥 5 BREAKTHROUGH ARTICLES RELEASED • SEPTEMBER 30, 2025
            </span>
            <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Innovations
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge research, enterprise implementations, and breakthrough technologies that are 
            revolutionizing AI operations, quantum computing, and cloud economics.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-[1800px] mx-auto">
          {newArticles.slice(0, 3).map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {article.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold shadow-lg">
                      <TrendingUp className="w-4 h-4" />
                      <span>NEW</span>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {newArticles.slice(3).map((article) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-fuchsia-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-fuchsia-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {article.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4" />
                      <span>FEATURED</span>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-400 hover:to-fuchsia-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-24">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 shadow-2xl">
            <div className="bg-slate-900 rounded-3xl px-16 py-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                Transform Your Enterprise with AI
              </h3>
              <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join 500+ Fortune 500 enterprises achieving breakthrough results with AI-powered operations, 
                quantum computing, and autonomous systems. Get expert guidance from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3 text-lg"
                >
                  <Sparkles className="w-6 h-6" />
                  <span>Explore All Articles</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <span>Schedule Expert Consultation</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          {[
            { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
            { value: '$2.5B+', label: 'Value Delivered', icon: '💎' },
            { value: '99.99%', label: 'System Reliability', icon: '⚡' },
            { value: '1000x', label: 'Performance Gains', icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default September30NewContent2025Banner;