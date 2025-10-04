import React from 'react';
import { Link } from 'react-router-dom';

/**
 * October 2025 New Content Showcase
 * Prominently displays the latest blog posts and case studies
 * Created: October 1, 2025
 */
const October2025NewContentShowcase = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm rounded-full shadow-lg animate-bounce">
              🚀 JUST PUBLISHED - OCTOBER 2025
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Revolutionary AI Breakthroughs
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              $129M Combined Success Stories
            </span>
          </h2>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 100 and Fortune 500 companies are achieving unprecedented results
            with Autonomous System Orchestration and Cognitive AI Workplace Transformation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Blog Post 1: Autonomous System Orchestration */}
          <div className="group bg-gradient-to-br from-purple-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                NEW BLOG POST
              </span>
              <span className="text-sm text-blue-200">28 min read</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
              🤖 Autonomous System Orchestration Revolution
            </h3>
            
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Self-managing enterprise infrastructure with self-healing capabilities, 
              99.99% uptime, and $42M in proven annual savings.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">99.99%</div>
                <div className="text-sm text-gray-300">System Uptime</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">$42M</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">85%</div>
                <div className="text-sm text-gray-300">Less Manual Work</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">60x</div>
                <div className="text-sm text-gray-300">Faster Deployments</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-600/50 text-white text-xs rounded-full">Self-Healing</span>
              <span className="px-3 py-1 bg-purple-600/50 text-white text-xs rounded-full">Multi-Cloud</span>
              <span className="px-3 py-1 bg-purple-600/50 text-white text-xs rounded-full">AI/ML</span>
              <span className="px-3 py-1 bg-purple-600/50 text-white text-xs rounded-full">Kubernetes</span>
            </div>
            
            <Link 
              href="/blog/ai-2025-oct-autonomous-system-orchestration-revolution"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Full Article →
            </Link>
          </div>

          {/* Blog Post 2: Cognitive AI Workplace */}
          <div className="group bg-gradient-to-br from-pink-800/80 to-purple-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                NEW BLOG POST
              </span>
              <span className="text-sm text-pink-200">26 min read</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
              🧠 Cognitive AI Workplace Transformation
            </h3>
            
            <p className="text-lg text-pink-100 mb-6 leading-relaxed">
              The future of human-AI collaboration with 312% productivity gains, 
              $87M in value creation, and seamless workplace integration.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">312%</div>
                <div className="text-sm text-gray-300">Productivity Gain</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">$87M</div>
                <div className="text-sm text-gray-300">Annual Value</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">99.2%</div>
                <div className="text-sm text-gray-300">Employee Satisfaction</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">78%</div>
                <div className="text-sm text-gray-300">Less Routine Tasks</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-pink-600/50 text-white text-xs rounded-full">AI Assistants</span>
              <span className="px-3 py-1 bg-pink-600/50 text-white text-xs rounded-full">Productivity</span>
              <span className="px-3 py-1 bg-pink-600/50 text-white text-xs rounded-full">Wellbeing</span>
              <span className="px-3 py-1 bg-pink-600/50 text-white text-xs rounded-full">Future of Work</span>
            </div>
            
            <Link 
              href="/blog/ai-2025-oct-cognitive-ai-workplace-transformation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Full Article →
            </Link>
          </div>

          {/* Case Study 1: Fortune 100 Autonomous Orchestration */}
          <div className="group bg-gradient-to-br from-emerald-800/80 to-teal-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-400/30 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                NEW CASE STUDY
              </span>
              <span className="px-4 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                FORTUNE 100
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
              💎 $42M ROI: Autonomous Orchestration Success
            </h3>
            
            <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
              How a Fortune 100 technology company transformed infrastructure operations 
              with 99.99% uptime and 95% incident auto-resolution.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="font-bold text-lg">$42M Annual Savings</div>
                  <div className="text-sm text-emerald-200">223% First-Year ROI</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-bold text-lg">99.99% Uptime</div>
                  <div className="text-sm text-emerald-200">From 99.5% baseline</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-bold text-lg">95% Auto-Resolution</div>
                  <div className="text-sm text-emerald-200">28-second MTTR</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="font-bold text-lg">60x Deployment Velocity</div>
                  <div className="text-sm text-emerald-200">300 deploys per day</div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/case-studies/fortune-100-autonomous-orchestration-42m-success"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Case Study →
            </Link>
          </div>

          {/* Case Study 2: Fortune 500 Cognitive AI */}
          <div className="group bg-gradient-to-br from-orange-800/80 to-red-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-400/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                NEW CASE STUDY
              </span>
              <span className="px-4 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                FORTUNE 500
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
              💎 $87M ROI: Cognitive AI Workplace Success
            </h3>
            
            <p className="text-lg text-orange-100 mb-6 leading-relaxed">
              How a Fortune 500 financial services firm achieved 312% productivity gains 
              and 99.2% employee satisfaction with 15,000 knowledge workers.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="font-bold text-lg">$87M Annual Value</div>
                  <div className="text-sm text-orange-200">1,120% First-Year ROI</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="font-bold text-lg">312% Productivity Increase</div>
                  <div className="text-sm text-orange-200">18.7 hours saved per week</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">😊</span>
                <div>
                  <div className="font-bold text-lg">99.2% Employee Satisfaction</div>
                  <div className="text-sm text-orange-200">97% retention rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">🧠</span>
                <div>
                  <div className="font-bold text-lg">96% Better Decisions</div>
                  <div className="text-sm text-orange-200">78% less routine work</div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/case-studies/fortune-500-cognitive-ai-workplace-87m-success"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl border-2 border-blue-400/30">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join Fortune 100 and Fortune 500 companies achieving unprecedented results 
            with AI-powered transformation. Contact us for a complimentary assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Schedule Free Assessment
            </Link>
            <Link 
              href="/blog"
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Explore All Content
            </Link>
          </div>
          <div className="mt-8 text-blue-200">
            <p className="mb-2">📞 +1 302 464 0950</p>
            <p className="mb-2">📧 kleber@ziontechgroup.com</p>
            <p>🌐 www.ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025NewContentShowcase;
