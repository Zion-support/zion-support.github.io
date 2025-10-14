import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, User, Star, Clock } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and machine learning concepts.',
      duration: '2 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Best Practices',
      description: 'Master cloud architecture patterns and deployment strategies.',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 980,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security concepts and threat mitigation strategies.',
      duration: '2.5 hours',
      level: 'Beginner',
      rating: 4.7,
      students: 1100,
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Advanced Data Analytics',
      description: 'Deep dive into data science and business intelligence techniques.',
      duration: '4 hours',
      level: 'Advanced',
      rating: 4.9,
      students: 750,
      thumbnail: '/api/placeholder/400/225'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud, and IT solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Tutorials & Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the latest technologies with our comprehensive tutorials and hands-on learning experiences.
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  {tutorial.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {tutorial.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{tutorial.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {tutorial.students} students
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn?</h2>
          <p className="text-xl mb-8">
            Join thousands of students learning the latest technologies with our expert-led tutorials.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Browse All Tutorials
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;