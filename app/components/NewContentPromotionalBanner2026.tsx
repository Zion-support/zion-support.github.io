import React from 'react';
import { ArrowRight, Bot, Rocket, Shield, Target, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewContentPromotionalBanner2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'AI Autonomous Workflows 2026',
      slug: 'ai-autonomous-workflows-2026',
      excerpt:
        'Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration',
      category: 'Enterprise Automation',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      badge: 'NEW',
      badgeColor: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Enterprise AI Transformation Roadmap 2026',
      slug: 'enterprise-ai-transformation-roadmap-2026',
      excerpt:
        'Complete implementation guide delivering 300% ROI, 85% automation, and digital transformation',
      category: 'Strategic Guide',
      icon: '🎯',
      color: 'from-purple-500 to-fuchsia-600',
      bgColor: 'from-purple-50 to-fuchsia-50',
      badge: 'STRATEGIC',
      badgeColor: 'from-purple-500 to-fuchsia-600',
    },
    {
      id: 3,
      title: 'AI-Powered Security Operations Center 2026',
      slug: 'ai-security-operations-center-2026',
      excerpt:
        '99.9% threat detection, 95% faster response, and autonomous security operations',
      category: 'Cybersecurity',
      icon: '🛡️',
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-50 to-orange-50',
      badge: 'CRITICAL',
      badgeColor: 'from-red-500 to-orange-600',
    },
  ];
  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-lg">
=======
<<<<<<< HEAD
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }} />
=======
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
<<<<<<< HEAD
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">
              Revolutionary AI Content 2026
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI technology that are transforming enterprises worldwide
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
=======
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">
>>>>>>> origin/fix-merge-conflicts-final
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Latest AI Innovations
            </span>
            <br />
            <span className="text-white">
              That Transform Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="text-yellow-400 font-bold">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">10,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">3 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">Proven Results</span>
    <div className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated background effects */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse' />
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'
          style={{ animationDelay: '4s' }}
        />
      </div>
      <div className='relative z-10 container mx-auto px-4 py-16'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <Sparkles className='w-8 h-8 text-cyan-400' />
            <span className='text-2xl font-bold text-white'>
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className='w-8 h-8 text-cyan-400' />
          </div>
          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
            Latest AI Innovations
            <br />
            That Transform Business
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Explore cutting-edge AI strategies, implementation roadmaps, and
            security innovations that are delivering{' '}
            <span className='text-cyan-400 font-semibold'>300%+ ROI</span> for
            enterprises worldwide
          </p>
          <div className='flex items-center justify-center gap-8 text-gray-300'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-5 h-5' />
              <span>10,000+ Readers</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-5 h-5' />
              <span>3 New Articles</span>
            </div>
            <div className='flex items-center gap-2'>
              <Target className='w-5 h-5' />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
<<<<<<< HEAD
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className='group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
              />
              <div className='relative p-8'>
                {/* Icon & Badge */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='text-4xl'>{content.icon}</div>
                  <div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${content.badgeColor} text-white text-sm font-bold shadow-lg`}
                  >
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
=======
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0
>>>>>>> origin/fix-merge-conflicts-final
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{item.icon}</div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${item.badgeColor} text-white text-xs font-bold rounded-full`}>
                    {item.badge}
                  </span>
                </div>
                {/* Category */}
                <div className="mb-4">
<<<<<<< HEAD
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}>
                <div className='mb-4'>
                  <span
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}
                  >
                    {content.category}
=======
                  <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-semibold rounded-full`}>
                    {item.category}
>>>>>>> origin/fix-merge-conflicts-final
                  </span>
                </div>
                {/* Title */}
<<<<<<< HEAD
                <h3
                  className={`text-3xl font-extrabold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${content.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}
                >
                  {content.title}
=======
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
>>>>>>> origin/fix-merge-conflicts-final
                </h3>
                {/* Excerpt */}
<<<<<<< HEAD
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {content.excerpt}
=======
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.excerpt}
>>>>>>> origin/fix-merge-conflicts-final
                </p>
                {/* CTA Button */}
<<<<<<< HEAD
                <Link
                  href={`/blog/${content.slug}`}
                  className={`group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r ${content.color} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
=======
<<<<<<< HEAD
                <Link 
                  href={`/blog/${item.slug}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group-hover:shadow-lg`}
                >
                  Explore Content
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
=======
                <Link href={`/blog/${content.slug}`} className={`group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r ${content.color} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}>
>>>>>>> origin/fix-merge-conflicts-final
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  <span className="text-lg">Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}></div>
                {/* Corner accent */}
<<<<<<< HEAD
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}
                />
=======
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`} />
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0
>>>>>>> origin/fix-merge-conflicts-final
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of organizations already leveraging these breakthrough AI technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/ai-services"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Explore AI Services
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                Get Started
              </Link>
=======
>>>>>>> origin/fix-merge-conflicts-final
        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Enterprise?
            </h3>
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        <div className='text-center bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12'>
          <div className='flex items-center justify-center gap-4 mb-6'>
            <Rocket className='w-8 h-8 text-cyan-400' />
            <h3 className='text-3xl font-bold text-white'>
              Ready to Transform Your Enterprise?
            </h3>
            <Shield className='w-8 h-8 text-cyan-400' />
          </div>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Join 500+ enterprises achieving{' '}
            <span className='text-cyan-400 font-semibold'>300% ROI</span>,{' '}
            <span className='text-purple-400 font-semibold'>
              85% automation
            </span>
            , and{' '}
            <span className='text-blue-400 font-semibold'>
              complete digital transformation
            </span>{' '}
            with Zion Tech Group's AI solutions
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
            <Link
              href='/contact'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
            >
              <Sparkles className='w-5 h-5' />
              <span>Start Your AI Journey</span>
            </Link>
            <Link
              href='/blog'
              className='group flex items-center gap-3 border-2 border-white/20 hover:border-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/5'
            >
              <span>Explore All Content</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>500+</div>
              <div className='text-gray-300'>Enterprise Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400 mb-2'>400%</div>
              <div className='text-gray-300'>Average ROI</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400 mb-2'>99.9%</div>
              <div className='text-gray-300'>System Uptime</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-400 mb-2'>24/7</div>
              <div className='text-gray-300'>Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            Join 500+ enterprises achieving <span className="text-yellow-400 font-bold">300% ROI</span>, 
            <span className="text-green-400 font-bold"> 85% automation</span>, and 
            <span className="text-blue-400 font-bold"> complete digital transformation</span> with Zion Tech Group's AI solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
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
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
>>>>>>> 5fd561acd32fd4817eedd259cb34bdcff04831f0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewContentPromotionalBanner2026;
