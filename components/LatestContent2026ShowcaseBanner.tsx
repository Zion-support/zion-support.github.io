import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Rocket, DollarSign } from 'lucide-react';

export default function LatestContent2026ShowcaseBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Star className="w-4 h-4" />
            LATEST 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content That's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {' '}Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies and success stories that are reshaping 
            how businesses operate, compete, and innovate in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Mega Breakthroughs */}
          <div className="bg-gradient-to-br from-purple-800 to-blue-800 p-8 rounded-2xl border border-purple-600 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI 2026 Mega Breakthroughs</h3>
                <p className="text-purple-200 text-sm">Revolutionary Technologies</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the groundbreaking AI technologies that are fundamentally reshaping 
              enterprise operations and redefining what's possible.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Quantum-Enhanced AI (1000x faster)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Neural Interfaces (300% productivity)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Autonomous Enterprise Systems</span>
              </div>
            </div>
            <Link to="/blog/ai-2026-mega-breakthroughs"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all group-hover:scale-105"
            >
              Read Full Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Enterprise Automation */}
          <div className="bg-gradient-to-br from-blue-800 to-green-800 p-8 rounded-2xl border border-blue-600 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Automation Revolution</h3>
                <p className="text-blue-200 text-sm">Enterprise Transformation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Discover how AI-powered automation is revolutionizing enterprise operations 
              with 300% productivity gains and 85% process automation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-green-400" />
                <span>Intelligent Process Automation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-green-400" />
                <span>Autonomous Decision Making</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-green-400" />
                <span>Self-Healing Systems</span>
              </div>
            </div>
            <Link to="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-teal-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-teal-600 transition-all group-hover:scale-105"
            >
              Explore Revolution
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mega Success Story */}
          <div className="bg-gradient-to-br from-green-800 to-teal-800 p-8 rounded-2xl border border-green-600 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">$50M Success Story</h3>
                <p className="text-green-200 text-sm">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Learn how a Fortune 500 company achieved $50M additional revenue through 
              comprehensive AI transformation in just 18 months.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>340% ROI on AI investment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>85% reduction in operational costs</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% system uptime achieved</span>
              </div>
            </div>
            <Link to="/case-studies/ai-2026-mega-transformation-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all group-hover:scale-105"
            >
              View Success Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Space Tech Highlight */}
        <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-8 rounded-2xl border border-indigo-600 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Space Tech Revolution</h3>
                  <p className="text-indigo-200">$100M Mission Success</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Discover how AI-powered space technology enabled a $100M mission success 
                with 99.9% accuracy and 500% efficiency improvements in autonomous spacecraft operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">$100M</div>
                  <div className="text-sm text-gray-300">Mission Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">500%</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">0%</div>
                  <div className="text-sm text-gray-300">Human Intervention</div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link to="/case-studies/ai-space-tech-revolution-success-2026"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all hover:scale-105"
              >
                Explore Space Mission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            Ready to transform your business with cutting-edge AI technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link to="/case-studies"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}