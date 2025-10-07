import React from 'react';
import { ArrowRight, Bookmark, Rocket, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ArrowRight, Zap, Rocket, Star } from 'lucide-react';

import {
  ArrowRight,
  Bookmark,
  Rocket,
  TrendingUp,
  Zap,
  Sparkles,
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
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-lg">
              🚀 BREAKING: 4 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Customer Experience • Autonomous Operations • GenAI Architecture • Multimodal AI — The future of enterprise AI starts here
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">50,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">4 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {newArticles.map((article, index) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{article.icon}</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-xs font-semibold rounded-full`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                    <span>⏱️ {article.readTime}</span>
                    <span>📅 {article.date}</span>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                    <span className="text-sm">Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
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
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div>
                  <span>
                    <Zap />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short',
  day: 'numeric',
  year: 'numeric' })}</span>
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
        <div>
          {newArticles.slice(3).map((article) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Card glow effect */}
              <div></div>
              
              <div>
                {/* Icon & Badge */}
                <div>
                  <div>
                    {article.icon}
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

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-white text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div>
                  <span>
                    <Zap />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short',
  day: 'numeric',
  year: 'numeric' })}</span>
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
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Customer Experience • Autonomous Operations • GenAI Architecture • Multimodal AI — The future of enterprise AI starts here
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">50,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">4 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {newArticles.map((article, index) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="group">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{article.icon}</div>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW</span>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${article.gradient} bg-opacity-20 text-white text-xs font-semibold rounded-full border border-white/20`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:${article.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>⏱️ {article.readTime}</span>
                    <span>📅 {article.date}</span>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center gap-2 text-cyan-400 font-semibold group-hover:text-white transition-colors">
                    <span className="text-sm">Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
            </Link>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div>
          <div>
            <div>
              <h3>
                Transform Your Enterprise with AI
              </h3>
              <p>
                Join 500+ Fortune 500 enterprises achieving breakthrough results with AI-powered operations, 
                quantum computing, and autonomous systems. Get expert guidance from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3 text-lg"
                >
                  <Sparkles />
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
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with Cutting-Edge AI
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group's AI transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Rocket className="w-5 h-5" />
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group's AI transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your AI Journey</span>
            </Link>
            <Link
              href="/blog"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
              className="flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
            { value: '5M+', label: 'Autonomous Operations Hours' },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-300'>{stat.label}</div>
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">
              Transform Your Enterprise with Cutting-Edge AI
            </h3>
            <Rocket className="w-8 h-8 text-cyan-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group's AI transformation specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your AI Journey</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '50K+', label: 'AI Leaders' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default September30NewContent2025Banner;
=======
>>>>>>> main
