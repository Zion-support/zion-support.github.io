import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ArrowRight, Star, TrendingUp, Zap, Target, Award, Clock, Users, BarChart3, Lightbulb, Globe, CheckCircle } from 'lucide-react';

export default function UltraContentPromotionBanner2025() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
            🔥 MEGA CONTENT DROP - JANUARY 2025
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🚀 30+ New AI Resources Just Released!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-5xl mx-auto">
            Discover our biggest content update yet: Advanced AI Architecture, Cybersecurity Defense, 
            Quantum Computing Breakthroughs, Manufacturing Success Stories, and comprehensive implementation guides. 
            Everything you need to succeed with AI in 2025.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">30+</div>
              <div className="text-sm text-gray-200">New Resources</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">2,500%</div>
              <div className="text-sm text-gray-200">Max ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-200">Pages of Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">95%</div>
              <div className="text-sm text-gray-200">Success Rate</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 text-lg px-8 py-4">
              <Target className="w-5 h-5 mr-2" />
              Explore All New Content
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 text-lg px-8 py-4">
              <BarChart3 className="w-5 h-5 mr-2" />
              Download Master Guide
            </Button>
          </div>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Blog Post */}
          <Link href="/blog/ai-2025-comprehensive-trends-analysis" className="group">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-1">NEW</Badge>
                  <h3 className="text-lg font-semibold text-white">AI 2025 Trends Analysis</h3>
                </div>
              </div>
              <p className="text-gray-200 text-sm mb-4">
                Comprehensive analysis of the most significant AI trends shaping 2025. 
                From enterprise automation to quantum computing breakthroughs.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="w-4 h-4 mr-1" />
                  15 min read
                </div>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
          
          {/* Featured Case Study */}
          <Link href="/case-studies/ai-2025-energy-sector-transformation-breakthrough" className="group">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-400/30 mb-1">BREAKTHROUGH</Badge>
                  <h3 className="text-lg font-semibold text-white">Energy Sector Success</h3>
                </div>
              </div>
              <p className="text-gray-200 text-sm mb-4">
                How a leading energy company achieved 2,500% ROI through comprehensive AI transformation, 
                revolutionizing grid management and operational efficiency.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-300">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  2,500% ROI
                </div>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
          
          {/* Featured Resource */}
          <Link href="/resources/ai-2025-comprehensive-implementation-playbook" className="group">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-1">ESSENTIAL</Badge>
                  <h3 className="text-lg font-semibold text-white">Implementation Playbook</h3>
                </div>
              </div>
              <p className="text-gray-200 text-sm mb-4">
                The complete, step-by-step guide to implementing AI in your organization. 
                From strategy to execution, get everything you need for success.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-300">
                  <Users className="w-4 h-4 mr-1" />
                  500+ pages
                </div>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        </div>
        
        {/* Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/blog" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-semibold text-white mb-1">Blog Posts</h3>
              <p className="text-sm text-gray-300">15+ new articles</p>
            </div>
          </Link>
          
          <Link href="/case-studies" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold text-white mb-1">Case Studies</h3>
              <p className="text-sm text-gray-300">8+ success stories</p>
            </div>
          </Link>
          
          <Link href="/resources" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-white mb-1">Resources</h3>
              <p className="text-sm text-gray-300">7+ guides & tools</p>
            </div>
          </Link>
          
          <Link href="/webinars" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-2xl mb-2">🎥</div>
              <h3 className="font-semibold text-white mb-1">Webinars</h3>
              <p className="text-sm text-gray-300">5+ live sessions</p>
            </div>
          </Link>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-200 mb-6">
            Join 10,000+ professionals who are already transforming their businesses with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 text-lg px-8 py-4">
              <Star className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 text-lg px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}