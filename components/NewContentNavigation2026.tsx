import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, BookOpen, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export default function NewContentNavigation2026() {
  const contentSections = [
    {
      title: 'AI Tools Showcase',
      description: 'Revolutionary AI tools from neural interfaces to quantum computing',
      icon: Brain,
      href: '/ai-tools-showcase-2026',
      badge: '8 Tools',
      color: 'blue'
    },
    {
      title: 'AI Tutorials 2026',
      description: 'Master advanced AI technologies with expert-led tutorials',
      icon: BookOpen,
      href: '/ai-tutorials-2026',
      badge: '50+ Courses',
      color: 'green'
    },
    {
      title: 'Industry Insights',
      description: 'Market analysis, trend predictions, and expert insights',
      icon: TrendingUp,
      href: '/ai-industry-insights-2026',
      badge: 'Weekly Reports',
      color: 'purple'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Sparkles className="h-3 w-3 mr-1" />
            NEW IN 2026
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Latest AI Content
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover cutting-edge AI tools, comprehensive tutorials, and industry insights 
            that will help you stay ahead in the rapidly evolving AI landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentSections.map((section, index) => {
            const IconComponent = section.icon;
            const colorClasses = {
              blue: 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100',
              green: 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100',
              purple: 'bg-purple-50 border-purple-200 text-purple-600 hover:bg-purple-100'
            };

            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colorClasses[section.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {section.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    {section.description}
                  </p>
                  
                  <Link href={section.href}>
                    <Button className="w-full" variant="outline">
                      Explore Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600 text-sm">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Tutorials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25K+</div>
            <div className="text-gray-600 text-sm">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
            <div className="text-gray-600 text-sm">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}