import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              That's Changing Everything
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most groundbreaking AI innovations, case studies, and breakthrough technologies 
            that are reshaping industries and creating unprecedented opportunities in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                  REVOLUTIONARY
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-sm text-blue-200">Breakthrough Article</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI 2026 Revolutionary Breakthroughs: The Future is Here
              </h3>
              
              <p className="text-blue-100 text-sm mb-6">
                Discover the most revolutionary AI breakthroughs of 2026 that are reshaping industries 
                and creating unprecedented opportunities for business transformation.
              </p>
              
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">1000x</div>
                  <div className="text-xs text-blue-200">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">95%</div>
                  <div className="text-xs text-blue-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">$12M+</div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-200">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  4.9/5 rating
                </div>
                <div className="flex items-center text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-mega-transformation-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-sm text-blue-200">Success Story</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                AI Mega Transformation Success: $150M ROI Case Study
              </h3>
              
              <p className="text-blue-100 text-sm mb-6">
                Discover how a Fortune 500 company achieved $150M ROI through comprehensive 
                AI transformation, revolutionizing their entire business operations.
              </p>
              
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">$150M</div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">95%</div>
                  <div className="text-xs text-blue-200">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">18</div>
                  <div className="text-xs text-blue-200">Months</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-200">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  5.0/5 rating
                </div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Article 2 */}
          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  AUTONOMOUS
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <span className="text-sm text-blue-200">Enterprise Guide</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                AI Autonomous Enterprise 2026: Complete Business Automation Guide
              </h3>
              
              <p className="text-blue-100 text-sm mb-6">
                Master autonomous enterprise operations with AI. Achieve 95% automation, 
                $50M+ savings, and zero-touch business processes that run themselves.
              </p>
              
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">95%</div>
                  <div className="text-xs text-blue-200">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">$50M+</div>
                  <div className="text-xs text-blue-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">300%</div>
                  <div className="text-xs text-blue-200">Productivity</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-blue-200">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  4.8/5 rating
                </div>
                <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore All Revolutionary Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm">
            Join 50,000+ professionals discovering the future of AI and business transformation
          </p>
        </div>
      </div>
    </section>
  );
}