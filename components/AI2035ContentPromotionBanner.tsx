import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Brain, Zap, Star, Rocket } from 'lucide-react';

const AI2035ContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-purple-600 bg-white">
            🚀 NEW CONTENT LAUNCH
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover the Future of AI:
            <span className="block text-yellow-300">2035 Predictions & Mastery</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore groundbreaking AI predictions for 2035 and master the implementation of 
            quantum AI, neural interfaces, and autonomous systems that will reshape our world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AI 2035 Predictions Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-400 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI 2035 Predictions</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Explore revolutionary predictions for AI development through 2035, including 
                quantum AI breakthroughs, neural interfaces, and autonomous systems.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-blue-100">Quantum AI Revolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-blue-100">Neural Interface Breakthroughs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-blue-100">Autonomous Everything</span>
                </div>
              </div>
              <Link href="/ai-2035-future-predictions">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-600 font-semibold">
                  Explore Predictions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* AI Implementation Mastery Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-400 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Implementation Mastery</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Master the implementation of cutting-edge AI systems for 2035. Learn quantum AI, 
                neural interfaces, and autonomous system deployment from industry experts.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-blue-100">12-Month Mastery Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-blue-100">Hands-On Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-blue-100">Industry Certification</span>
                </div>
              </div>
              <Link href="/ai-implementation-mastery-2035">
                <Button className="w-full bg-green-400 hover:bg-green-500 text-purple-600 font-semibold">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Special Offer Banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-yellow-400 text-purple-600 px-8 py-4 rounded-full font-bold text-lg mb-6">
            <Rocket className="h-6 w-6" />
            <span>LIMITED TIME: Early Access + 50% Discount</span>
            <Rocket className="h-6 w-6" />
          </div>
          <p className="text-blue-100 text-lg">
            Be among the first to access these revolutionary AI resources and transform your career
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2035ContentPromotionBanner;