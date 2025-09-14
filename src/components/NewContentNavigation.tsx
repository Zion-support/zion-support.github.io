import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const NewContentNavigation = () => {
  const newContent = [
    {
      title: "AI 2027 Autonomous Business Revolution",
      description: "Complete Guide to Self-Managing Enterprises with 1,000-5,000% ROI potential",
      type: "Blog Post",
      url: "/blog/ai-2027-autonomous-business-revolution",
      category: "AI Revolution",
      readTime: "15 min read",
      publishedDate: "January 2027",
      featured: true
    },
    {
      title: "Fortune 500: $10 Billion ROI Success Story",
      description: "Most successful autonomous transformation in corporate history",
      type: "Case Study",
      url: "/case-studies/fortune-500-autonomous-transformation-2027-10-billion-roi",
      category: "Success Stories",
      readTime: "12 min read",
      publishedDate: "January 2027",
      featured: true
    },
    {
      title: "Quantum AI Superintelligence 2027",
      description: "The Dawn of Artificial General Intelligence - 10,000x Human Capabilities",
      type: "Blog Post",
      url: "/blog/quantum-ai-superintelligence-2027",
      category: "Future Tech",
      readTime: "18 min read",
      publishedDate: "January 2027",
      featured: true
    },
    {
      title: "Autonomous Business Implementation Guide",
      description: "Complete Roadmap to Self-Managing Enterprises with Proven ROI",
      type: "Resource",
      url: "/resources/autonomous-business-implementation-guide-2027",
      category: "Implementation",
      readTime: "25 min read",
      publishedDate: "January 2027",
      featured: false
    },
    {
      title: "AI Superintelligence Readiness Assessment",
      description: "Comprehensive tool to evaluate your organization's superintelligence readiness",
      type: "Assessment",
      url: "/resources/ai-superintelligence-readiness-assessment",
      category: "Assessment",
      readTime: "10 min read",
      publishedDate: "January 2027",
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest Revolutionary Content
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Discover the most advanced AI insights, breakthrough case studies, and comprehensive guides 
            that are reshaping business in 2027.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan-300 bg-cyan-400/20 px-3 py-1 rounded-full">
                    {content.type}
                  </span>
                  {content.featured && (
                    <span className="text-xs font-semibold text-yellow-300 bg-yellow-400/20 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-blue-300 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{content.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{content.readTime}</span>
                  </div>
                </div>
                
                <Button 
                  asChild
                  variant="ghost"
                  className="text-cyan-300 hover:text-white hover:bg-cyan-400/20 p-0 h-auto font-semibold w-full justify-between group-hover:translate-x-1 transition-all"
                >
                  <Link href={content.url} className="flex items-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8"
          >
            <Link href="/revolutionary-content-showcase-2025">
              View All Revolutionary Content
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewContentNavigation;