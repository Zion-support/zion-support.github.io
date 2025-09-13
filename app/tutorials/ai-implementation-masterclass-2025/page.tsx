import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowRight, CheckCircle, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Implementation Masterclass 2025 | Zion Tech Group',
  description: 'Master AI implementation with our comprehensive masterclass covering strategy, deployment, and optimization for enterprise success.',
  keywords: 'AI implementation, masterclass, enterprise AI, AI strategy, AI deployment',
  openGraph: {
    title: 'AI Implementation Masterclass 2025',
    description: 'Transform your business with AI - Learn from industry experts',
    type: 'website',
  },
};

const modules = [
  {
    id: 1,
    title: 'AI Strategy Foundation',
    description: 'Build a solid foundation for AI implementation',
    duration: '2 hours',
    lessons: 8,
    difficulty: 'Beginner',
    topics: ['AI Readiness Assessment', 'Business Case Development', 'ROI Planning', 'Risk Management'],
    completed: false,
  },
  {
    id: 2,
    title: 'Technical Implementation',
    description: 'Hands-on technical implementation guide',
    duration: '4 hours',
    lessons: 12,
    difficulty: 'Intermediate',
    topics: ['Model Selection', 'Data Pipeline Setup', 'API Integration', 'Testing & Validation'],
    completed: false,
  },
  {
    id: 3,
    title: 'Enterprise Deployment',
    description: 'Scale AI solutions across your organization',
    duration: '3 hours',
    lessons: 10,
    difficulty: 'Advanced',
    topics: ['Scalability Planning', 'Security Implementation', 'Monitoring & Maintenance', 'Team Training'],
    completed: false,
  },
  {
    id: 4,
    title: 'Optimization & ROI',
    description: 'Maximize returns and optimize performance',
    duration: '2.5 hours',
    lessons: 7,
    difficulty: 'Advanced',
    topics: ['Performance Optimization', 'Cost Management', 'ROI Measurement', 'Continuous Improvement'],
    completed: false,
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechCorp',
    content: 'This masterclass transformed our AI implementation approach. We achieved 300% ROI in just 6 months.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'AI Director, InnovateLabs',
    content: 'The practical approach and real-world examples made all the difference in our AI journey.',
    rating: 5,
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Chief Data Officer, DataFirst',
    content: 'Comprehensive coverage from strategy to deployment. Highly recommended for any organization.',
    rating: 5,
  },
];

export default function AIMasterclassPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              🚀 New Masterclass 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Implementation Masterclass
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master AI implementation from strategy to deployment. Learn from industry experts and transform your business with cutting-edge AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>12+ Hours</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>37 Lessons</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <PlayCircle className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive modules covering every aspect of AI implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      Module {module.id}
                    </Badge>
                    <Badge 
                      variant={module.difficulty === 'Beginner' ? 'default' : module.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                    >
                      {module.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <PlayCircle className="w-4 h-4" />
                      {module.lessons} lessons
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    {module.completed ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Completed
                      </>
                    ) : (
                      <>
                        Start Module
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of professionals who've transformed their careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our comprehensive masterclass and gain the skills needed to implement AI successfully in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Enroll Now - $299
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}