import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Introduction to AI and Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI Fundamentals',
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: 'Building Your First Neural Network',
      description: 'Hands-on tutorial on creating and training neural networks from scratch.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'Deep Learning',
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing principles and applications.',
      level: 'Advanced',
      duration: '6 hours',
      category: 'Quantum Computing',
      rating: 4.7,
      students: 456
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity strategies and implementation techniques.',
      level: 'Intermediate',
      duration: '3 hours',
      category: 'Security',
      rating: 4.6,
      students: 1100
    },
    {
      id: 5,
      title: 'Cloud Architecture Design',
      description: 'Design scalable and secure cloud infrastructure solutions.',
      level: 'Advanced',
      duration: '5 hours',
      category: 'Cloud Computing',
      rating: 4.8,
      students: 720
    },
    {
      id: 6,
      title: 'Data Science with Python',
      description: 'Complete guide to data analysis and visualization using Python.',
      level: 'Beginner',
      duration: '8 hours',
      category: 'Data Science',
      rating: 4.9,
      students: 2100
    }
  ];

  const categories = ['All', 'AI Fundamentals', 'Deep Learning', 'Quantum Computing', 'Security', 'Cloud Computing', 'Data Science'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & Technology</title>
        <meta name="description" content="Comprehensive tutorials on AI, machine learning, quantum computing, cybersecurity, and cloud technologies. Learn from industry experts." />
        <meta name="keywords" content="AI tutorials, machine learning course, quantum computing tutorial, cybersecurity training, cloud computing course" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials. From AI and machine learning 
              to quantum computing and cybersecurity, learn from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-gray-300 hover:bg-white/20"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{tutorial.title}</h3>
                <p className="text-gray-300 mb-6">{tutorial.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{tutorial.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{tutorial.students}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{tutorial.category}</span>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Learning Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of learners who have transformed their careers with our tutorials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
              <div className="text-white text-lg">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white text-lg">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4.8</div>
              <div className="text-white text-lg">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-white text-lg">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your learning journey with our comprehensive tutorials and expert guidance.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutorialsPage;