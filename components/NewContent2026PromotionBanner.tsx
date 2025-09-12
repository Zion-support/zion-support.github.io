import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, TrendingUp, BookOpen, Brain, Zap } from 'lucide-react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Sparkles className="h-3 w-3 mr-1" />
            NEW IN 2026
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Content Hub 2026
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI tools, master advanced tutorials, and stay ahead with industry insights. 
            The future of AI starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* AI Tools Showcase */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI Tools Showcase
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Discover revolutionary AI tools from neural interfaces to quantum computing solutions
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge variant="secondary" className="text-xs">8 Tools</Badge>
                <Badge variant="secondary" className="text-xs">Enterprise Ready</Badge>
              </div>
              <Link href="/ai-tools-showcase-2026">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Explore Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* AI Tutorials */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI Tutorials 2026
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Master advanced AI technologies with expert-led tutorials and hands-on learning
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge variant="secondary" className="text-xs">50+ Courses</Badge>
                <Badge variant="secondary" className="text-xs">25K+ Students</Badge>
              </div>
              <Link href="/ai-tutorials-2026">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Industry Insights */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Industry Insights
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Stay ahead with market analysis, trend predictions, and expert insights
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge variant="secondary" className="text-xs">Weekly Reports</Badge>
                <Badge variant="secondary" className="text-xs">Expert Analysis</Badge>
              </div>
              <Link href="/ai-industry-insights-2026">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  View Insights
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              <Zap className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Join 50,000+ professionals already transforming their businesses with AI
          </p>
        </div>
      </div>
    </div>
  );
}