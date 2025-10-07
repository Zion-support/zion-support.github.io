import React from 'react';
import Link from 'next/link';
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
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Customer Experience • Autonomous Operations • GenAI Architecture • Multimodal AI — The future of enterprise AI starts here
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>15,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>4 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {newArticles.map((article, index) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="group">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{article.icon}</div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:${article.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>⏱️ {article.readTime}</span>
                    <span>📅 {article.date}</span>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center gap-2 text-cyan-400 font-semibold text-sm group-hover:text-white transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
