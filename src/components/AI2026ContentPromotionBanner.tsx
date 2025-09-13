import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  Rocket,
  Target,
  DollarSign,
  Users,
  Globe
} from "lucide-react";

export function AI2026ContentPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Rocket className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI 2026 Revolution</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover the Future of Business Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive AI 2026 content library featuring cutting-edge insights, implementation guides, and real-world success stories
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Latest Blog Post */}
          <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:translate-y-[-5px]">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-purple-400" />
                <Badge variant="outline" className="border-purple-400 text-purple-400">Latest Blog</Badge>
              </div>
              <CardTitle className="text-white text-lg">
                AI 2026: Next-Generation Business Automation Revolution
              </CardTitle>
              <CardDescription className="text-gray-400">
                Explore the future of business automation as we enter 2026, where AI systems achieve unprecedented levels of autonomy and business intelligence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <Link to="/blog/ai-2026-next-generation-business-automation">
                  <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Guide */}
          <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:translate-y-[-5px]">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-cyan-400" />
                <Badge variant="outline" className="border-cyan-400 text-cyan-400">Implementation Guide</Badge>
              </div>
              <CardTitle className="text-white text-lg">
                AI 2026 Automation Implementation Roadmap
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your complete guide to implementing next-generation AI automation in 2026 with proven methodologies and best practices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Users className="h-4 w-4" />
                  <span>20 min read</span>
                </div>
                <Link to="/resources/ai-2026-automation-implementation-roadmap">
                  <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                    Download Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Card>

          {/* Success Story */}
          <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:translate-y-[-5px]">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <Badge variant="outline" className="border-green-400 text-green-400">Success Story</Badge>
              </div>
              <CardTitle className="text-white text-lg">
                Global Enterprise AI 2026 Transformation: $100M Success
              </CardTitle>
              <CardDescription className="text-gray-400">
                Discover how a Fortune 100 multinational corporation achieved $100M annual savings through comprehensive AI 2026 automation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>$100M saved</span>
                </div>
                <Link to="/case-studies/ai-2026-global-automation-transformation">
                  <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                    View Case Study
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Card>
        </div>

        {/* Service Platform */}
        <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20">
          <CardHeader className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <Rocket className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">New Service Platform</span>
            </div>
            <CardTitle className="text-white text-2xl">
              AI 2026 Automation Platform
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Experience the future of business automation with our revolutionary AI 2026 platform. Achieve 400% ROI, $100M+ annual savings, and complete operational autonomy.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">400%</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$100M+</div>
                <div className="text-gray-400 text-sm">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-gray-400 text-sm">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                <div className="text-gray-400 text-sm">Reliability</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/ai-2026-automation-platform">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3">
                  Explore AI 2026 Platform
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3">
                Get Free Assessment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Fortune 100 Implementations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Global Deployment Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>24/7 AI Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedAI2026ContentSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured AI 2026 Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the future of AI automation with our comprehensive content library
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog Posts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              Latest Insights
            </h3>
            <div className="space-y-3">
              <Link to="/blog/ai-2026-next-generation-business-automation" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">AI 2026: Next-Generation Business Automation</div>
                <div className="text-gray-400 text-xs">12 min read • Latest</div>
              </Link>
              <Link to="/blog/ai-2025-autonomous-business-operations" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">AI 2025: Autonomous Business Operations</div>
                <div className="text-gray-400 text-xs">8 min read</div>
              </Link>
              <Link to="/blog/quantum-ai-breakthrough-2025" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">Quantum AI Breakthrough 2025</div>
                <div className="text-gray-400 text-xs">10 min read</div>
              </Link>
            </div>
          </div>

          {/* Implementation Guides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-cyan-400" />
              Implementation Guides
            </h3>
            <div className="space-y-3">
              <Link to="/resources/ai-2026-automation-implementation-roadmap" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">AI 2026 Implementation Roadmap</div>
                <div className="text-gray-400 text-xs">20 min read • Comprehensive</div>
              </Link>
              <Link to="/resources/ai-implementation-master-guide-2025" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">AI Implementation Master Guide 2025</div>
                <div className="text-gray-400 text-xs">25 min read</div>
              </Link>
              <Link to="/resources/complete-ai-implementation-guide-2025" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">Complete AI Implementation Guide</div>
                <div className="text-gray-400 text-xs">30 min read</div>
              </Link>
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              Success Stories
            </h3>
            <div className="space-y-3">
              <Link to="/case-studies/ai-2026-global-automation-transformation" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">Global Enterprise: $100M Success</div>
                <div className="text-gray-400 text-xs">15 min read • Fortune 100</div>
              </Link>
              <Link to="/case-studies/enterprise-ai-transformation-success-story" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">Enterprise AI Transformation</div>
                <div className="text-gray-400 text-xs">18 min read</div>
              </Link>
              <Link to="/case-studies/healthcare-ai-transformation-success" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">Healthcare AI Transformation</div>
                <div className="text-gray-400 text-xs">12 min read</div>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-yellow-400" />
              AI 2026 Services
            </h3>
            <div className="space-y-3">
              <Link to="/services/ai-2026-automation-platform" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">AI 2026 Automation Platform</div>
                <div className="text-gray-400 text-xs">400% ROI • $100M+ savings</div>
              </Link>
              <Link to="/services" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">All AI Services</div>
                <div className="text-gray-400 text-xs">Comprehensive solutions</div>
              </Link>
              <Link to="/contact" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-white text-sm font-medium mb-1">Get Free Assessment</div>
                <div className="text-gray-400 text-xs">AI readiness evaluation</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}