import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Users, Star, BookOpen, Code, Brain, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tutorials 2026 - Learn Advanced AI Technologies | Zion Tech Group',
  description: 'Master cutting-edge AI technologies with our comprehensive tutorials. From neural interfaces to quantum computing, learn the future of AI.',
  keywords: 'AI tutorials 2026, artificial intelligence learning, neural networks, quantum computing, machine learning courses, AI education',
};

const tutorials = [
  {
    id: 1,
    title: 'Neural Interface Development Masterclass',
    description: 'Learn to build revolutionary brain-computer interfaces using advanced neural signal processing techniques.',
    duration: '8 hours',
    level: 'Advanced',
    students: '2.5K',
    rating: 4.9,
    instructor: 'Dr. Sarah Chen',
    category: 'Neural Computing',
    thumbnail: '/api/placeholder/400/225',
    lessons: 24,
    icon: Brain
  },
  {
    id: 2,
    title: 'Quantum Machine Learning Fundamentals',
    description: 'Master the principles of quantum computing and its applications in machine learning algorithms.',
    duration: '12 hours',
    level: 'Expert',
    students: '1.8K',
    rating: 4.8,
    instructor: 'Prof. Michael Rodriguez',
    category: 'Quantum Computing',
    thumbnail: '/api/placeholder/400/225',
    lessons: 36,
    icon: Zap
  },
  {
    id: 3,
    title: 'Autonomous AI Agent Architecture',
    description: 'Build sophisticated autonomous AI agents capable of complex decision-making and self-learning.',
    duration: '15 hours',
    level: 'Advanced',
    students: '3.2K',
    rating: 4.9,
    instructor: 'Dr. Alex Thompson',
    category: 'AI Automation',
    thumbnail: '/api/placeholder/400/225',
    lessons: 42,
    icon: Code
  },
  {
    id: 4,
    title: 'Multimodal AI Systems Design',
    description: 'Create AI systems that can process and understand multiple data types simultaneously.',
    duration: '10 hours',
    level: 'Intermediate',
    students: '4.1K',
    rating: 4.7,
    instructor: 'Dr. Lisa Park',
    category: 'Multimodal AI',
    thumbnail: '/api/placeholder/400/225',
    lessons: 28,
    icon: Brain
  },
  {
    id: 5,
    title: 'Advanced RAG Systems Implementation',
    description: 'Build production-ready Retrieval-Augmented Generation systems with advanced optimization techniques.',
    duration: '6 hours',
    level: 'Advanced',
    students: '5.5K',
    rating: 4.8,
    instructor: 'Dr. James Wilson',
    category: 'Natural Language Processing',
    thumbnail: '/api/placeholder/400/225',
    lessons: 18,
    icon: BookOpen
  },
  {
    id: 6,
    title: 'AI Security and Ethical Governance',
    description: 'Learn to implement robust security measures and ethical frameworks for AI systems.',
    duration: '8 hours',
    level: 'Intermediate',
    students: '3.8K',
    rating: 4.6,
    instructor: 'Dr. Maria Santos',
    category: 'AI Ethics',
    thumbnail: '/api/placeholder/400/225',
    lessons: 22,
    icon: Brain
  },
  {
    id: 7,
    title: 'Vector Database Optimization',
    description: 'Master advanced techniques for optimizing vector databases in AI applications.',
    duration: '5 hours',
    level: 'Advanced',
    students: '2.9K',
    rating: 4.7,
    instructor: 'Dr. David Kim',
    category: 'Database Systems',
    thumbnail: '/api/placeholder/400/225',
    lessons: 16,
    icon: Code
  },
  {
    id: 8,
    title: 'Edge AI Deployment Strategies',
    description: 'Learn to deploy and optimize AI models on edge devices for real-time applications.',
    duration: '7 hours',
    level: 'Intermediate',
    students: '4.3K',
    rating: 4.8,
    instructor: 'Dr. Rachel Green',
    category: 'Edge Computing',
    thumbnail: '/api/placeholder/400/225',
    lessons: 20,
    icon: Zap
  }
];

const categories = ['All', 'Neural Computing', 'Quantum Computing', 'AI Automation', 'Multimodal AI', 'Natural Language Processing', 'AI Ethics', 'Database Systems', 'Edge Computing'];

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

export default function AITutorials2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Tutorials 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master the most advanced AI technologies with our comprehensive tutorials. 
            From neural interfaces to quantum computing, learn from industry experts.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Learning
              <Play className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Browse All Courses
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Courses Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Hours of Content</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === 'All' ? 'default' : 'secondary'}
                className="px-3 py-1 text-xs cursor-pointer hover:bg-green-100"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Levels:</span>
            {levels.map((level) => (
              <Badge 
                key={level}
                variant={level === 'All' ? 'default' : 'outline'}
                className="px-3 py-1 text-xs cursor-pointer hover:bg-blue-100"
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => {
            const IconComponent = tutorial.icon;
            return (
              <Card key={tutorial.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                    {tutorial.level}
                  </Badge>
                  <Button 
                    size="sm" 
                    className="absolute top-4 right-4 bg-black/20 hover:bg-black/30"
                    variant="secondary"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit text-xs mb-2">
                    {tutorial.category}
                  </Badge>
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-2">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {tutorial.lessons} lessons
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {tutorial.students} students
                    </div>
                    <span className="text-sm text-gray-500">by {tutorial.instructor}</span>
                  </div>
                  
                  <Button className="w-full">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master AI?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join our community of AI professionals and start your learning journey today.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}