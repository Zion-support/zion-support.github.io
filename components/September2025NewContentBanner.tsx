import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, ArrowRight, Zap } from 'lucide-react';

export const September2025NewContentBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 mb-6 shadow-lg shadow-orange-500/20">
            <TrendingUp className="w-5 h-5 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-bold text-sm tracking-wider uppercase">
              🚀 BRAND NEW • SEPTEMBER 30, 2025
            </span>
            <TrendingUp className="w-5 h-5 text-red-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            4 Game-Changing AI Articles Just Dropped!
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep-dive into enterprise AI solutions that are transforming industries. From security to supply chain, 
            discover how Fortune 500 companies are achieving unprecedented results.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: '99.9% Threat Detection',
              subtitle: 'AI Security Posture Management',
              icon: '🔒',
              color: 'from-red-500 to-orange-500',
              link: '/blog/ai-security-posture-management-2025',
              badge: 'SECURITY'
            },
            {
              title: 'Unified Data Access',
              subtitle: 'Intelligent Data Fabric',
              icon: '🗄️',
              color: 'from-blue-500 to-cyan-500',
              link: '/blog/intelligent-data-fabric-architecture-2025',
              badge: 'DATA'
            },
            {
              title: '40% Cost Reduction',
              subtitle: 'AI Supply Chain Optimization',
              icon: '📦',
              color: 'from-green-500 to-teal-500',
              link: '/blog/ai-driven-supply-chain-optimization-2025',
              badge: 'SUPPLY CHAIN'
            },
            {
              title: '70% Support Savings',
              subtitle: 'Enterprise Conversational AI',
              icon: '💬',
              color: 'from-purple-500 to-fuchsia-500',
              link: '/blog/conversational-ai-enterprise-2025',
              badge: 'CUSTOMER AI'
            }
          ].map((article, index) => (
            <Link href={article.link} key={index}>
              <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer p-6">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-fuchsia-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {article.icon}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold">
                      NEW
                    </span>
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${article.color} bg-opacity-20 text-white text-xs font-semibold`}>
                      {article.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {article.subtitle}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
            <div className="bg-slate-950 rounded-xl px-10 py-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">
                  Stay Ahead of the AI Revolution
                </h3>
                <Sparkles className="w-6 h-6 text-fuchsia-400" />
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join 50,000+ enterprise leaders receiving weekly insights on AI transformation, 
                case studies, and breakthrough technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 inline-flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Explore All Articles</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <span>Get Started with Zion AI</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '500+', label: 'Enterprise Clients', icon: '🏢' },
            { value: '99.9%', label: 'System Uptime', icon: '⚡' },
            { value: '10B+', label: 'Data Points Daily', icon: '📊' },
            { value: '5M+', label: 'AI Operations Hours', icon: '🤖' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default September2025NewContentBanner;