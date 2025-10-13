import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Clock, Users, Star, ArrowRight } from 'lucide-react';

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Development",
      description: "Learn the fundamentals of artificial intelligence and machine learning development.",
      duration: "2 hours",
      level: "Beginner",
      students: 1250,
      rating: 4.8,
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "5G Network Implementation",
      description: "Complete guide to implementing 5G networks for enterprise applications.",
      duration: "3 hours",
      level: "Intermediate",
      students: 890,
      rating: 4.9,
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      description: "Essential cybersecurity strategies to protect your digital assets.",
      duration: "1.5 hours",
      level: "Beginner",
      students: 2100,
      rating: 4.7,
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies",
      description: "Step-by-step guide to migrating your infrastructure to the cloud.",
      duration: "2.5 hours",
      level: "Intermediate",
      students: 1560,
      rating: 4.8,
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Data Analytics with Python",
      description: "Master data analysis and visualization using Python and popular libraries.",
      duration: "4 hours",
      level: "Advanced",
      students: 980,
      rating: 4.9,
      thumbnail: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "IoT Development Fundamentals",
      description: "Build and deploy Internet of Things solutions from scratch.",
      duration: "3.5 hours",
      level: "Intermediate",
      students: 720,
      rating: 4.6,
      thumbnail: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, 5G, cybersecurity, and more. Expert-led courses for all skill levels." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Tutorials</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master the latest technologies with our comprehensive, expert-led tutorials. 
            From beginner to advanced, we have courses for every skill level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/60" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tutorial.level === 'Beginner' 
                      ? 'bg-green-500/20 text-green-400' 
                      : tutorial.level === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {tutorial.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tutorial.students.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white font-semibold">{tutorial.rating}</span>
                  </div>
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="mr-2">Start Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of students who are already advancing their careers with our tutorials.
            </p>
            <button className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors">
              Browse All Tutorials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}