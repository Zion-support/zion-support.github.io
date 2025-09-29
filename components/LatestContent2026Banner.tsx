import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Star, Zap } from 'lucide-react';

export default function LatestContent2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              ✨ LATEST 2026
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Latest AI Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              & Revolutionary Innovations
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the most cutting-edge AI content, case studies, and technological 
            breakthroughs that are defining the future of artificial intelligence in 2026.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Cognitive Architecture */}
          <Link href="/blog/ai-cognitive-architecture-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🧠</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                    Cognitive Architecture
                  </h3>
                  <p className="text-blue-200 text-xs">Next-Gen AI</p>
                </div>
              </div>
              
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Self-evolving AI systems with 99.9% accuracy and 10x performance gains.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <Clock className="w-3 h-3" />
                  <span>28 min</span>
                </div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-revolution-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                    Space Tech Revolution
                  </h3>
                  <p className="text-blue-200 text-xs">Autonomous Ops</p>
                </div>
              </div>
              
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                AI-powered space operations with $50B+ market opportunities.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <Clock className="w-3 h-3" />
                  <span>32 min</span>
                </div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                    AI Mega Trends
                  </h3>
                  <p className="text-blue-200 text-xs">$50B+ Opportunity</p>
                </div>
              </div>
              
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                15 mega trends reshaping enterprise AI and creating massive opportunities.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <Clock className="w-3 h-3" />
                  <span>45 min</span>
                </div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>

          {/* Neural Interfaces */}
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                    Neural Interfaces
                  </h3>
                  <p className="text-blue-200 text-xs">Brain-Computer AI</p>
                </div>
              </div>
              
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                Direct brain-computer integration with 10x productivity gains.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <Clock className="w-3 h-3" />
                  <span>32 min</span>
                </div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  Read →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Featured Case Study */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Featured Success Story</h3>
              <p className="text-blue-200">Fortune 500 AI Transformation</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                AI Autonomous Enterprise: $25M ROI Case Study
              </h4>
              <p className="text-blue-100 mb-6 leading-relaxed">
                See how a Fortune 500 manufacturing company achieved complete enterprise autonomy 
                with 95% operational automation, 99.9% uptime, and $25M annual ROI through 
                comprehensive AI transformation.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">$25M</div>
                  <div className="text-sm text-blue-200">Annual ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-blue-200">Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-blue-200">Uptime</div>
                </div>
              </div>
              
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
              >
                View Complete Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h5 className="text-lg font-bold text-white mb-4">Key Achievements</h5>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Complete operational automation</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Zero-touch business management</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Predictive maintenance systems</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Autonomous decision making</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Self-optimizing processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Ahead with the Latest AI Innovations
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get weekly updates on the most cutting-edge AI breakthroughs, case studies, 
              and technological innovations that are reshaping industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>Join 15,000+ professionals staying ahead with AI innovations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}