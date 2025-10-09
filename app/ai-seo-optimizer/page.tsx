'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AISEOOptimizerPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI SEO Optimizer - Zion Tech Group"
        description="Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights. Starting at $129/month."
        keywords={['AI SEO', 'SEO optimization', 'keyword research', 'content optimization', 'ranking tracking', 'AI insights']}
        canonicalUrl="https://ziontechgroup.com/ai-seo-optimizer"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI SEO Optimizer">
              AI SEO Optimizer
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-8 font-medium cyber-glow neon-text">
              Automated SEO Analysis & Optimization
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Boost your search rankings with AI-powered SEO analysis, keyword research, content optimization, and automated tracking. 
              Increase organic traffic by 400% with our intelligent SEO platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free SEO Audit
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">SEO Optimization Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Keyword Research</h3>
                <p className="text-gray-300">Discover high-value keywords with AI-powered research and competitor analysis tools.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Content Optimization</h3>
                <p className="text-gray-300">Get AI recommendations for improving your content's SEO performance and readability.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-4">Ranking Tracking</h3>
                <p className="text-gray-300">Monitor your search rankings across thousands of keywords with detailed analytics.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Technical SEO</h3>
                <p className="text-gray-300">Automated technical SEO audits and fixes for site speed, mobile optimization, and more.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">Competitor Analysis</h3>
                <p className="text-gray-300">Track competitor rankings and discover new opportunities with AI-powered insights.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-4">Local SEO</h3>
                <p className="text-gray-300">Optimize for local search with location-based keyword research and Google My Business management.</p>
              </div>
            </div>
          </section>

          {/* SEO Tools Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Comprehensive SEO Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🔎</div>
                <h3 className="text-lg font-bold text-white mb-2">Site Audit</h3>
                <p className="text-gray-300 text-sm">Complete website SEO analysis</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-lg font-bold text-white mb-2">Content Analysis</h3>
                <p className="text-gray-300 text-sm">AI-powered content optimization</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-lg font-bold text-white mb-2">Link Building</h3>
                <p className="text-gray-300 text-sm">Backlink analysis and opportunities</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Rankings</h3>
                <p className="text-gray-300 text-sm">Keyword position tracking</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">SERP Analysis</h3>
                <p className="text-gray-300 text-sm">Search results page insights</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-2">Mobile SEO</h3>
                <p className="text-gray-300 text-sm">Mobile-first optimization</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2">Core Web Vitals</h3>
                <p className="text-gray-300 text-sm">Performance monitoring</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-white mb-2">Reporting</h3>
                <p className="text-gray-300 text-sm">Automated SEO reports</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$129<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 1 website</li>
                  <li>✓ 1,000 keywords tracked</li>
                  <li>✓ Monthly site audit</li>
                  <li>✓ Basic keyword research</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>
              <div className="cyber-card hologram-card p-8 border-2 border-yellow-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 5 websites</li>
                  <li>✓ 10,000 keywords tracked</li>
                  <li>✓ Weekly site audits</li>
                  <li>✓ Advanced keyword research</li>
                  <li>✓ Competitor analysis</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Most Popular</a>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited websites</li>
                  <li>✓ Unlimited keywords</li>
                  <li>✓ Daily site audits</li>
                  <li>✓ AI content optimization</li>
                  <li>✓ White-label reports</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ API access</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose AI SEO Optimizer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">400%</p>
                      <p className="text-gray-300">Average increase in organic traffic</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">85%</p>
                      <p className="text-gray-300">Of keywords rank in top 10</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">$500K+</p>
                      <p className="text-gray-300">Average additional revenue</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <p className="text-gray-300 italic">"Our organic traffic increased by 500% in 6 months. The AI insights helped us identify opportunities we never knew existed."</p>
                    <p className="text-yellow-400 font-semibold mt-2">- Lisa Chen, Marketing Director</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <p className="text-gray-300 italic">"The automated reporting saves us 10 hours per week. We can focus on strategy instead of data analysis."</p>
                    <p className="text-yellow-400 font-semibold mt-2">- Mark Thompson, SEO Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Dominate Search Rankings?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our AI SEO Optimizer to increase organic traffic and boost search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Email Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AISEOOptimizerPage;