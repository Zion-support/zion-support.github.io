import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const ContentPromotionalBanner = () => {
  const highlights = [
    {
      icon: TrendingUp,
      text: 'Latest AI Trends 2025',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      text: 'Success Stories',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      text: 'New Services',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-slate-800/80 to-purple-900/80 border-slate-700 backdrop-blur-sm">
      <CardContent className="py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                New Content Available
              </Badge>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Discover Our Latest AI Insights & Solutions
            </h3>
            <p className="text-gray-300 text-lg mb-4 max-w-2xl">
              Explore cutting-edge AI trends, real success stories, and innovative solutions 
              that are transforming businesses worldwide.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">{highlight.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                Explore Content
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right Content - Quick Links */}
          <div className="flex-shrink-0">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Quick Access</h4>
                <div className="space-y-3">
                  <a 
                    href="/blog/ai-2025-revolutionary-breakthroughs" 
                    className="block p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white font-medium group-hover:text-green-300 transition-colors">
                          AI Trends 2025
                        </p>
                        <p className="text-gray-400 text-sm">Revolutionary breakthroughs</p>
                      </div>
                    </div>
                  </a>
                  
                  <a 
                    href="/case-studies/enterprise-ai-transformation-success" 
                    className="block p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                          Success Stories
                        </p>
                        <p className="text-gray-400 text-sm">300% productivity increase</p>
                      </div>
                    </div>
                  </a>
                  
                  <a 
                    href="/services/ai-automation-suite" 
                    className="block p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                          AI Automation Suite
                        </p>
                        <p className="text-gray-400 text-sm">Complete automation solution</p>
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentPromotionalBanner;