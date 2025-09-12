import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ArrowRight, Star, Zap, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">🔥 ULTIMATE CONTENT DROP - JANUARY 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🚀 The Most Revolutionary AI Content Collection Ever Created
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover our groundbreaking collection of AI resources, breakthrough technologies, and implementation guides. 
            Everything you need to master artificial intelligence and transform your business in 2026.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300">100K+</div>
              <div className="text-sm opacity-80">Total Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-green-300">4.9★</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-purple-300">50+</div>
              <div className="text-sm opacity-80">Premium Resources</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-pink-300">24/7</div>
              <div className="text-sm opacity-80">Expert Support</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
              <Link href="/ultimate-content-showcase-2026">
                <Star className="w-5 h-5 mr-2" />
                Explore Ultimate Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-semibold">
              <Link href="/ai-mastery-academy-2026">
                <TrendingUp className="w-5 h-5 mr-2" />
                Join AI Mastery Academy
              </Link>
            </Button>
          </div>

          {/* Featured Content Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">AI Revolution 2026</h3>
              <p className="text-sm opacity-80 mb-3">Complete transformation guide with breakthrough technologies</p>
              <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-300 border-yellow-300">
                <Award className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Breakthrough</h3>
              <p className="text-sm opacity-80 mb-3">Next-gen computing convergence with AI</p>
              <Badge variant="secondary" className="bg-green-400/20 text-green-300 border-green-300">
                <Zap className="w-3 h-3 mr-1" />
                New
              </Badge>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous AI Systems</h3>
              <p className="text-sm opacity-80 mb-3">Self-evolving technology without human intervention</p>
              <Badge variant="secondary" className="bg-purple-400/20 text-purple-300 border-purple-300">
                <Users className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-70 mb-4">
              Trusted by 10,000+ professionals worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
              <span>✓ Enterprise Grade Security</span>
              <span>✓ 99.9% Uptime Guarantee</span>
              <span>✓ Expert Support</span>
              <span>✓ Regular Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner;