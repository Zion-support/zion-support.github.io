import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, FileText, Zap, TrendingUp, Users } from 'lucide-react';

const NewContentShowcase = () => {
  const featuredContent = [
    {
      title: 'AI 2025: Revolutionary Breakthroughs',
      description: 'Discover the groundbreaking AI innovations transforming industries in 2025',
      type: 'Blog Post',
      category: 'AI Trends',
      readTime: '8 min read',
      href: '/blog/ai-2025-revolutionary-breakthroughs',
      icon: TrendingUp,
      featured: true,
    },
    {
      title: 'Enterprise AI Transformation Success',
      description: 'How a Fortune 500 company achieved 300% productivity increase',
      type: 'Case Study',
      category: 'Success Story',
      readTime: '6 min read',
      href: '/case-studies/enterprise-ai-transformation-success',
      icon: Users,
      featured: true,
    },
    {
      title: 'AI Automation Suite',
      description: 'Complete business process automation solution',
      type: 'Service',
      category: 'Automation',
      readTime: '5 min read',
      href: '/services/ai-automation-suite',
      icon: Zap,
      featured: true,
    },
  ];

  const stats = [
    { label: 'New Content', value: '15+', icon: FileText },
    { label: 'Case Studies', value: '8+', icon: BookOpen },
    { label: 'Services', value: '12+', icon: Zap },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            Latest Content
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Fresh Content & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with our latest AI insights, success stories, and innovative solutions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = content.href}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">
                        {content.type}
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="text-gray-400 bg-gray-700">
                      {content.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 line-clamp-3">
                    {content.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{content.readTime}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 group-hover:translate-x-1 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
          <CardContent className="py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest AI Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest content, case studies, and AI breakthroughs 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewContentShowcase;