import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Brain, Rocket } from 'lucide-react';

const RevolutionaryContentBanner2027 = () => {
  const featuredContent = [
    {
      title: "AI 2027 Autonomous Business Revolution",
      description: "Complete Guide to Self-Managing Enterprises with 1,000-5,000% ROI",
      type: "Blog Post",
      url: "/blog/ai-2027-autonomous-business-revolution",
      icon: Brain,
      featured: true
    },
    {
      title: "Fortune 500: $10 Billion ROI Success",
      description: "Most successful autonomous transformation in corporate history",
      type: "Case Study", 
      url: "/case-studies/fortune-500-autonomous-transformation-2027-10-billion-roi",
      icon: Zap,
      featured: true
    },
    {
      title: "Quantum AI Superintelligence 2027",
      description: "The Dawn of Artificial General Intelligence - 10,000x Human Capabilities",
      type: "Blog Post",
      url: "/blog/quantum-ai-superintelligence-2027",
      icon: Sparkles,
      featured: true
    },
    {
      title: "Autonomous Business Implementation Guide",
      description: "Complete Roadmap to Self-Managing Enterprises with Proven ROI",
      type: "Resource",
      url: "/resources/autonomous-business-implementation-guide-2027",
      icon: Rocket,
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            REVOLUTIONARY CONTENT 2027
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is 
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text"> Here</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI content, breakthrough case studies, and revolutionary guides that are reshaping business in 2027. 
            <span className="text-cyan-300 font-semibold"> Join the autonomous business revolution.</span>
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <Card 
                key={index}
                className={`bg-white/10 backdrop-blur-sm border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group ${content.featured ? 'ring-2 ring-cyan-400/50' : ''}`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                      {content.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-blue-100 text-sm mb-4 flex-grow">
                    {content.description}
                  </p>
                  
                  <Button 
                    asChild
                    variant="ghost"
                    className="text-cyan-300 hover:text-white hover:bg-cyan-400/20 p-0 h-auto font-semibold group-hover:translate-x-1 transition-all"
                  >
                    <Link href={content.url} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 text-lg"
            >
              <Link href="/revolutionary-content-showcase-2025">
                Explore All Revolutionary Content
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 font-bold px-8 py-4 text-lg"
            >
              <Link href="/resources/ai-superintelligence-readiness-assessment">
                Take Readiness Assessment
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-sm">500+ Successful Implementations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">$10B+ Client Savings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">99.9% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;