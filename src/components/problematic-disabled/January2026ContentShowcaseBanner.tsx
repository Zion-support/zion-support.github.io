import React from 'react';
<<<<<<< HEAD:src/components/problematic-disabled/January2026ContentShowcaseBanner.tsx
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-ab0f:src/components/January2026ContentShowcaseBanner.tsx
const January2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            January 2026 Content Showcase
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Discover the latest innovations and breakthroughs in AI technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Advanced AI</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 94% reasoning accuracy improvement</li>
                <li>• Self-monitoring capabilities</li>
                <li>• Adaptive strategy selection</li>
                <li>• Meta-learning optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 60% faster processing</li>
                <li>• 50% memory reduction</li>
                <li>• Real-time optimization</li>
                <li>• Scalable architecture</li>
              </ul>
            </div>
<<<<<<< HEAD:src/components/problematic-disabled/January2026ContentShowcaseBanner.tsx
            <div className='bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10'>
              <div className='text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2'>
                94%
              </div>
              <div className='text-gray-400 text-sm font-medium'>
                Reasoning Accuracy Gain
              </div>
            </div>
            <div className='bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10'>
              <div className='text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                $500M+
              </div>
              <div className='text-gray-400 text-sm font-medium'>
                Enterprise Savings
              </div>
            </div>
          </div>
        </div>
        {/* Featured Articles Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {latestArticles.map((article, index) => (
            <div
              key={article.id}
              className='group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card glow effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-500'></div>
              <div className='relative p-8'>
                {/* Icon & Badges */}
                <div className='flex items-start justify-between mb-6'>
                  <div className='text-6xl group-hover:scale-110 transition-transform duration-300'>
                    {article.icon}
                  </div>
                  <div className='flex flex-col gap-2'>
                    {article.trending && (
                      <div className='flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg'>
                        <TrendingUp className='w-3 h-3' />
                        <span>TRENDING</span>
                      </div>
                    )}
                    <span className='px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold border border-purple-500/30'>
                      BREAKTHROUGH
                    </span>
                  </div>
                </div>
                {/* Category Tag */}
                <div className='mb-4'>
                  <span className='inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30'>
                    {article.category}
                  </span>
                </div>
                {/* Title */}
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight'>
                  {article.title}
                </h3>
                {/* Excerpt */}
                <p className='text-gray-400 mb-6 leading-relaxed text-sm'>
                  {article.excerpt}
                </p>
                {/* Meta Info */}
                <div className='flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10'>
                  <span className='flex items-center gap-2'>
                    <Zap className='w-4 h-4 text-purple-400' />
                    {article.readTime}
                  </span>
                  <span>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                {/* CTA Button */}
                <a
                  href={`/blog/${article.slug}`}
                  className={`group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r ${article.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300' />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Technology Highlights */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center'>
            <Brain className='w-16 h-16 text-cyan-400 mx-auto mb-4' />
            <h3 className='text-2xl font-bold mb-4 text-cyan-400'>
              Autonomous Agent Factories
            </h3>
            <p className='text-gray-300 mb-6'>
              Self-replicating AI systems that create, deploy, and manage
              specialized agents without human intervention.
            </p>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>• 95% automation rate achievement</li>
              <li>• Self-replicating agent systems</li>
              <li>• Advanced orchestration layers</li>
              <li>• Real-time performance monitoring</li>
            </ul>
          </div>
          <div className='bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 text-center'>
            <Atom className='w-16 h-16 text-purple-400 mx-auto mb-4' />
            <h3 className='text-2xl font-bold mb-4 text-purple-400'>
              Quantum Neural Optimization
            </h3>
            <p className='text-gray-300 mb-6'>
              Revolutionary AI performance breakthrough through quantum
              computing integration and neural network optimization.
            </p>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>• 1000x faster training speeds</li>
              <li>• Quantum superposition processing</li>
              <li>• Advanced error correction</li>
              <li>• Hybrid quantum-classical systems</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <Cpu className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">Meta-Cognitive Reasoning</h3>
            <p className="text-gray-300 mb-6">
              Self-aware AI systems with introspection capabilities and the ability to reason about their own reasoning processes.
          <div className='bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center'>
            <Cpu className='w-16 h-16 text-indigo-400 mx-auto mb-4' />
            <h3 className='text-2xl font-bold mb-4 text-indigo-400'>
              Meta-Cognitive Reasoning
            </h3>
            <p className='text-gray-300 mb-6'>
              Self-aware AI systems with introspection capabilities and the
              ability to reason about their own reasoning processes.
            </p>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>• 94% reasoning accuracy improvement</li>
              <li>• Self-monitoring capabilities</li>
              <li>• Adaptive strategy selection</li>
              <li>• Meta-learning optimization</li>
            </ul>
          </div>
        </div>
        {/* Call-to-Action Section */}
        <div className='text-center mt-20'>
          <div className='inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500'>
            <div className='bg-slate-900 rounded-xl px-12 py-10'>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Lead the AI 2026 Revolution
              </h3>
              <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
                Be among the first to implement these breakthrough AI
                technologies. Get a personalized assessment and discover how
                autonomous agents, quantum optimization, and meta-cognitive
                reasoning can transform your organization.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/blog'
                  className='bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2'
                >
                  <Sparkles className='w-5 h-5' />
                  <span>Explore All AI 2026 Articles</span>
                </a>
                <a
                  href='/contact'
                  className='border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2'
                >
                  <span>Get AI 2026 Assessment</span>
                  <ArrowRight className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Success Stories Preview */}
        <div className='mt-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8'>
          <h3 className='text-2xl font-bold mb-6 text-white text-center'>
            Proven Results from Fortune 500 Companies
          </h3>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2'>
                $500M+
              </div>
              <div className='text-gray-400 text-sm font-medium'>
                Total Enterprise Savings Achieved
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2'>
                500+
              </div>
              <div className='text-gray-400 text-sm font-medium'>
                Fortune 500 Companies Transformed
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                99.9%
              </div>
              <div className='text-gray-400 text-sm font-medium'>
                System Reliability & Uptime
              </div>
=======
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Next-gen algorithms</li>
                <li>• Quantum-ready design</li>
                <li>• Edge computing support</li>
                <li>• Future-proof technology</li>
              </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-ab0f:src/components/January2026ContentShowcaseBanner.tsx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD:src/components/problematic-disabled/January2026ContentShowcaseBanner.tsx
export default January2026ContentShowcaseBanner;
=======

export default January2026ContentShowcaseBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-ab0f:src/components/January2026ContentShowcaseBanner.tsx
