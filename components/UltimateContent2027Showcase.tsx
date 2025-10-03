import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Award, Zap, Target } from 'lucide-react';

export default function UltimateContent2027Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 transform rotate-12 scale-150 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-400 to-pink-400 transform -rotate-12 scale-150 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg font-bold mb-8">
            <Star className="w-5 h-5 mr-2" />
            ULTIMATE 2027 CONTENT SHOWCASE
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Most Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {' '}AI Content
            </span>
            <br />
            Ever Created
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the pinnacle of AI innovation with our revolutionary 2027 content collection, 
            featuring breakthrough technologies and unprecedented business transformations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-blue-200">Revolutionary Articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-blue-200">Success Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">$100M+</div>
            <div className="text-blue-200">Total ROI Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Major Breakthroughs */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BREAKTHROUGH 2026
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Cognitive Computing Revolution</h3>
              <p className="text-blue-100 mb-6">
                The most advanced cognitive computing system ever created, achieving 95% accuracy 
                in complex reasoning tasks and generating $50M+ in enterprise value.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-blue-200">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">$50M+</div>
                  <div className="text-sm text-blue-200">Value</div>
                </div>
              </div>
              <Link
                href="/blog/ai-cognitive-computing-breakthrough-2026"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    REVOLUTIONARY 2026
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Business Systems</h3>
              <p className="text-blue-100 mb-6">
                Complete business automation achieving 95% process efficiency and $15M+ ROI 
                through intelligent workflow orchestration and AI agent coordination.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-blue-200">Automation</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">$15M+</div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
              </div>
              <Link
                href="/blog/ai-autonomous-business-systems-2026"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED CASE STUDY
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability Transformation Success</h3>
              <p className="text-blue-100 mb-6">
                Fortune 500 company achieved complete carbon neutrality and $10M ROI through 
                comprehensive AI sustainability transformation in just 18 months.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">$10M</div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm text-blue-200">Carbon Neutral</div>
                </div>
              </div>
              <Link
                href="/case-studies/ai-sustainability-transformation-2026"
                className="inline-flex items-center bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    QUANTUM BREAKTHROUGH
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing Optimization</h3>
              <p className="text-blue-100 mb-6">
                Financial services company achieved 1000x optimization speed and $12M additional 
                returns through quantum-enhanced AI computing systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">1000x</div>
                  <div className="text-sm text-blue-200">Faster</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">$12M</div>
                  <div className="text-sm text-blue-200">Returns</div>
                </div>
              </div>
              <Link
                href="/case-studies/ai-quantum-optimization-2026"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-12 border border-yellow-400/30">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already leveraging these revolutionary AI technologies 
              to transform their operations and achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}