import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  TrendingUp,
  ArrowRight,
  Zap,
  Rocket,
  Star,
} from 'lucide-react';

const September30NewContent2025Banner: React.FC = () => {
  const newArticles = [
    {
      id: 0,
      title: 'AI-Accelerated Customer Experience 2025',
      slug: 'ai-accelerated-customer-experience-2025',
      excerpt:
        'Real-time intent detection and autonomous workflows delivering 95% CSAT and 40% cost reduction across channels.',
      category: 'Customer Experience',
      date: '2025-09-30',
      readTime: '18 min',
      icon: '✨',
      gradient: 'from-cyan-600 to-blue-700',
    },
    {
      id: 1,
      title: 'AI-Powered Autonomous Operations 2025',
      slug: 'ai-autonomous-operations-2025',
      excerpt:
        'Self-healing infrastructure achieving 99.99% uptime and 95% cost reduction. Discover how Fortune 500 enterprises achieve zero-touch IT operations.',
      category: 'Autonomous Operations',
      date: '2025-09-30',
      readTime: '15 min',
      icon: '🤖',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Generative AI for Enterprise Architecture 2025',
      slug: 'generative-ai-enterprise-architecture-2025',
      excerpt:
        'Production-scale GenAI systems serving 100M+ daily requests. Master LLM orchestration, RAG pipelines, and deployment patterns at enterprise scale.',
      category: 'GenAI Architecture',
      date: '2025-09-30',
      readTime: '18 min',
      icon: '🎨',
      gradient: 'from-purple-500 to-fuchsia-600',
    },
    {
      id: 3,
      title: 'Multimodal AI Agents Enterprise 2025',
      slug: 'multimodal-ai-agents-enterprise-2025',
      excerpt:
        'Unified vision, language, and audio intelligence achieving 97% cross-modal accuracy. Transform operations with AI that truly sees, hears, and understands.',
      category: 'Multimodal AI',
      date: '2025-09-30',
      readTime: '16 min',
      icon: '👁️',
      gradient: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='relative z-10 container mx-auto px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <Sparkles className='w-6 h-6 text-cyan-400' />
            <span className='text-cyan-400 font-bold text-xl'>
              🚀 BREAKING: 4 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <Zap className='w-6 h-6 text-yellow-400' />
          </div>

          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6'>
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>

          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Customer Experience • Autonomous Operations • GenAI Architecture •
            Multimodal AI — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {newArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className='group'
            >
              <div className='relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full'>
                {/* Card glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}
                ></div>

                <div className='relative z-10'>
                  {/* Icon & Badge */}
                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-3xl'>{article.icon}</div>
                    <div className='flex gap-2'>
                      <span className='px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full'>
                        🔥 HOT
                      </span>
                      <span className='px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full'>
                        NEW TODAY
                      </span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className='mb-4'>
                    <span
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-sm font-semibold rounded-full`}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className='text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight'>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className='flex items-center justify-between text-xs text-gray-400 mb-4'>
                    <span>⏱️ {article.readTime}</span>
                    <span>📅 {article.date}</span>
                  </div>

                  {/* CTA Button */}
                  <div className='flex items-center justify-center gap-2 text-cyan-400 font-semibold text-sm group-hover:text-white transition-colors'>
                    <span>Read Full Article</span>
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className='text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16'>
          <h3 className='text-4xl font-bold text-white mb-6'>
            Transform Your Enterprise with Cutting-Edge AI
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Join 50,000+ AI leaders implementing these breakthrough
            technologies. Get expert guidance from Zion Tech Group's AI
            transformation specialists.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
            <a
              href='tel:+13024640950'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
            >
              <span className='text-xl'>📞</span>
              <span>Call +1 302 464 0950</span>
            </a>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
            >
              <span className='text-xl'>📧</span>
              <span>Get Expert Consultation</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-300'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default September30NewContent2025Banner;
