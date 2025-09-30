import React from 'react';

export default function FeaturedContentBanner2025() {
  const featuredContent = [
    {
      type: 'blog',
      title: 'AI 2025: The Enterprise Autonomous Operations Revolution',
      excerpt: 'Discover how Fortune 500 companies are achieving 95% automation rates and $2M+ annual savings through next-generation autonomous AI operations.',
      href: '/blog/ai-autonomous-operations-2025',
      image: '🚀',
      category: 'Latest AI Innovation',
      readTime: '12 min read',
      publishDate: 'Jan 27, 2025'
    },
    {
      type: 'case-study',
      title: 'Fortune 500 AI Transformation: $50M Annual Savings',
      excerpt: 'How we helped a Fortune 500 company achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation.',
      href: '/case-studies/fortune-500-ai-transformation',
      image: '💰',
      category: 'Success Story',
      readTime: '8 min read',
      publishDate: 'Jan 25, 2025'
    },
    {
      type: 'service',
      title: 'AI Autonomous Operations Services',
      excerpt: 'Transform your enterprise with fully autonomous AI operations. Achieve 95% automation rates and $2M+ annual savings with our cutting-edge solutions.',
      href: '/services/ai-autonomous-operations',
      image: '⚡',
      category: 'New Service',
      readTime: '5 min read',
      publishDate: 'Jan 20, 2025'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/80 to-blue-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
              🚀 Latest Content & Innovations
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest insights, success stories, and cutting-edge AI solutions that are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <a
              key={index}
              href={content.href}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {content.image}
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-3">
                    <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
                      {content.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {content.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {content.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📅 {content.publishDate}</span>
                    <span>⏱️ {content.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300">
                  Read More →
                </span>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Promotional Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-green-400">🎯 Free AI Assessment</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover your enterprise's AI automation potential with our comprehensive assessment. 
              Get personalized recommendations and ROI projections in just 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Get Free Assessment
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                View Success Stories
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">🚀 AI Innovation Lab</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join our exclusive AI Innovation Lab and get early access to breakthrough technologies, 
              pilot programs, and direct access to our AI experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Join Innovation Lab
              </a>
              <a 
                href="/services" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Stay Ahead of the AI Revolution</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get exclusive insights, latest AI trends, and breakthrough technologies delivered to your inbox. 
            Join 10,000+ enterprise leaders already subscribed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Privacy policy applies.
          </p>
        </div>
      </div>
    </section>
  );
}