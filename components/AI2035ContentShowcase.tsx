import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Target, Users, Clock, TrendingUp } from 'lucide-react';

const AI2035ContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      title: 'AI 2035 Future Predictions',
      description: 'Explore groundbreaking predictions for AI development through 2035, including quantum AI, neural interfaces, and autonomous systems.',
      image: '/api/placeholder/400/250',
      category: 'Predictions',
      readTime: '15 min read',
      trending: true,
      href: '/ai-2035-future-predictions',
      features: ['Quantum AI Revolution', 'Neural Interfaces', 'Autonomous Systems', 'AI Safety']
    },
    {
      title: 'AI Implementation Mastery 2035',
      description: 'Master the implementation of cutting-edge AI systems for 2035. Learn quantum AI, neural interfaces, and autonomous system deployment.',
      image: '/api/placeholder/400/250',
      category: 'Mastery Program',
      readTime: '12 months',
      trending: true,
      href: '/ai-implementation-mastery-2035',
      features: ['Quantum AI Implementation', 'Neural Interface Development', 'Autonomous Systems', 'AI Safety & Governance']
    }
  ];

  const upcomingContent = [
    {
      title: 'Quantum AI Development Guide',
      description: 'Complete guide to building quantum-enhanced AI systems',
      category: 'Development',
      eta: 'Coming Soon',
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: 'Neural Interface Prototyping',
      description: 'Hands-on tutorial for brain-computer interfaces',
      category: 'Tutorial',
      eta: 'Next Week',
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: 'Autonomous System Architecture',
      description: 'Design patterns for self-managing AI systems',
      category: 'Architecture',
      eta: 'In Development',
      icon: <Target className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            🚀 NEW CONTENT
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2035 Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest content exploring the future of artificial intelligence 
            and master the skills needed for 2035 and beyond.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900">Featured Content</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-purple-600 bg-purple-100">
                      {content.category}
                    </Badge>
                    {content.trending && (
                      <Badge variant="destructive" className="animate-pulse">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {content.readTime}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {content.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={content.href}>
                      <Button className="w-full group-hover:bg-purple-600 transition-colors">
                        Explore Content
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Coming Soon</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingContent.map((content, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {content.icon}
                    </div>
                    <Badge variant="outline">{content.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{content.title}</CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{content.eta}</Badge>
                    <Button variant="outline" size="sm" disabled>
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Stay Ahead of the AI Revolution
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who are preparing for the future of AI. 
            Get exclusive access to cutting-edge content and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2035ContentShowcase;