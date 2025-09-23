'use client';

import React from 'react';
import Link from 'next/link';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain
  Zap
  TrendingUp
  ArrowRight
  Calendar
  Users
  Target,
  Sparkles,
  Rocket,
  Star
} from 'lucide-react';

export default function AI2030ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">NEW: AI 2030 FUTURE CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prepare for the AI 2030 Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge insightstrategiesand tools to transform your organization 
            for the autonomous AI future 'that', 's arriving faster than you think.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Blog Posts */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-6 w-6 text-yellow-400" />
              <h3 className="text-2xl font-bold">Featured Insights</h3>
            </div>
            
            <Card className="bg-white bg-opacity-10 border-white border-opacity-20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-yellow-500 text-yellow-900">NEW</Badge>
                    <h4 className="text-xl font-bold mb-2">
                      AI 2030: Future Workforce Revolution
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Explore how AI will revolutionize workplace collaboration by 2030
                      creating seamless human-AI partnerships that transform productivity.
                    </p>
                    <Link href="/blog/ai-2030-future-workforce-autonomous-collaboration-revolution">
                      <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-gray-900">
                        Read Article <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-white border-opacity-20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-3 flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-green-500 text-green-900">SUSTAINABILITY</Badge>
                    <h4 className="text-xl font-bold mb-2">
                      Sustainable Enterprise Transformation
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Discover how AI will drive sustainable business transformation
                      enabling enterprises to achieve carbon neutrality while maximizing profitability.
                    </p>
                    <Link href="/blog/ai-2030-sustainable-enterprise-transformation-ultimate-guide">
                      <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-gray-900">
                        Read Article <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Tools */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-6 w-6 text-yellow-400" />
              <h3 className="text-2xl font-bold">Interactive Tools</h3>
            </div>

            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-white bg-opacity-20 text-white">ASSESSMENT TOOL</Badge>
                    <h4 className="text-xl font-bold mb-2">
                      AI 2030 Readiness Assessment
                    </h4>
                    <p className="text-white opacity-90 mb-4">
                      Evaluate your 'organization', 's readiness for the AI-driven future. 
                      Get personalized recommendations and a comprehensive roadmap.
                    </p>
                    <Link href="/tools/ai-2030-readiness-assessment">
                      <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-100">
                        Take Assessment <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 border-white border-opacity-20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-3 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-orange-500 text-orange-900">CASE STUDY</Badge>
                    <h4 className="text-xl font-bold mb-2">
                      Fortune 500 Net-Zero Success
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Learn how a Fortune 500 company achieved net-zero emissions 
                      and 400% ROI through AI-powered sustainability transformation.
                    </p>
                    <Link href="/case-studies/fortune-500-ai-2030-transformation-net-zero-success-story">
                      <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-gray-900">
                        Read Case Study <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-yellow-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Future-Ready Insights</h4>
            <p className="text-gray-300">
              Stay ahead with cutting-edge AI trends and predictions for 2030 and beyond
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Proven Strategies</h4>
            <p className="text-gray-300">
              Learn from real-world success stories and implementable strategies
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-yellow-400" />
            </div>
            <h4 className="text-lg font-bold mb-2">Actionable Tools</h4>
            <p className="text-gray-300">
              Use interactive assessments and calculators to plan your transformation
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Organization for AI 2030?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join the AI revolution and position your organization as a leader in the autonomous future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                  Start Your Transformation <Rocket className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}