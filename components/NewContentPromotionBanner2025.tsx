import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Clock, Users, TrendingUp, BookOpen, DollarSign } from 'lucide-react';
import Link from 'next/link';

const newContent = [
  {
    id: 1,
    title: 'AI Implementation Masterclass',
    description: 'Master AI implementation from strategy to deployment',
    type: 'Tutorial',
    duration: '12+ Hours',
    lessons: 37,
    rating: 4.9,
    price: '$299',
    url: '/tutorials/ai-implementation-masterclass-2025',
    badge: 'New',
    icon: BookOpen,
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 2,
    title: 'AI Industry Trends 2025',
    description: 'Comprehensive analysis of AI trends and market insights',
    type: 'Insights',
    duration: '30 Min Read',
    lessons: 'Expert Analysis',
    rating: 4.8,
    price: 'Free',
    url: '/insights/ai-industry-trends-2025',
    badge: 'Trending',
    icon: TrendingUp,
    gradient: 'from-green-600 to-blue-600'
  },
  {
    id: 3,
    title: 'AI Startup Funding Guide',
    description: 'Complete guide to securing funding for your AI venture',
    type: 'Guide',
    duration: '45 Min Read',
    lessons: 'Step-by-Step',
    rating: 4.9,
    price: 'Free',
    url: '/guides/ai-startup-funding-guide-2025',
    badge: 'Popular',
    icon: DollarSign,
    gradient: 'from-purple-600 to-pink-600'
  }
];

export default function NewContentPromotionBanner2025() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            🚀 New Content 2025
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest AI Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with our newest tutorials, insights, and guides designed to accelerate your AI journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <Card key={content.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${content.gradient} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              content.badge === 'New' ? 'bg-blue-50 text-blue-700' :
                              content.badge === 'Trending' ? 'bg-green-50 text-green-700' :
                              'bg-purple-50 text-purple-700'
                            }`}
                          >
                            {content.badge}
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700">
                            {content.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {content.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {content.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{content.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{content.lessons}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{content.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-gray-900">
                        {content.price}
                      </div>
                      <Button 
                        size="sm" 
                        className={`bg-gradient-to-r ${content.gradient} hover:opacity-90 text-white`}
                        asChild
                      >
                        <Link href={content.url}>
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            <Link href="/content-showcase">
              View All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}