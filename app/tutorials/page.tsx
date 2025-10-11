'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Play, ArrowRight, Clock, Users, Star, Code, Database, Cloud, Shield } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  author: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  rating: number;
  students: number;
}

const TutorialsPage: React.FC = () => {
  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning from scratch.',
      duration: '2 hours',
      level: 'Beginner',
      author: 'Dr. Sarah Chen',
      category: 'AI/ML',
      thumbnail: '/tutorials/ai-fundamentals.jpg',
      videoUrl: '#',
      rating: 4.8,
      students: 1250
    },
    {
      id: '2',
      title: 'Cloud Architecture Fundamentals',
      description: 'Master cloud computing concepts and design scalable, reliable systems.',
      duration: '3 hours',
      level: 'Intermediate',
      author: 'Michael Rodriguez',
      category: 'Cloud',
      thumbnail: '/tutorials/cloud-architecture.jpg',
      videoUrl: '#',
      rating: 4.9,
      students: 980
    },
    {
      id: '3',
      title: 'Web Development with React',
      description: 'Build modern web applications using React and modern JavaScript.',
      duration: '4 hours',
      level: 'Beginner',
      author: 'David Kim',
      category: 'Development',
      thumbnail: '/tutorials/react-development.jpg',
      videoUrl: '#',
      rating: 4.7,
      students: 2100
    },
    {
      id: '4',
      title: 'Cybersecurity Best Practices',
      description: 'Learn essential security practices to protect your applications and data.',
      duration: '2.5 hours',
      level: 'Intermediate',
      author: 'Emily Johnson',
      category: 'Security',
      thumbnail: '/tutorials/cybersecurity.jpg',
      videoUrl: '#',
      rating: 4.8,
      students: 1560
    },
    {
      id: '5',
      title: 'Database Design and Optimization',
      description: 'Design efficient databases and optimize performance for large-scale applications.',
      duration: '3.5 hours',
      level: 'Advanced',
      author: 'Alex Thompson',
      category: 'Database',
      thumbnail: '/tutorials/database-design.jpg',
      videoUrl: '#',
      rating: 4.9,
      students: 890
    },
    {
      id: '6',
      title: 'Mobile App Development',
      description: 'Create cross-platform mobile applications using React Native and Flutter.',
      duration: '5 hours',
      level: 'Intermediate',
      author: 'Lisa Wang',
      category: 'Mobile',
      thumbnail: '/tutorials/mobile-development.jpg',
      videoUrl: '#',
      rating: 4.6,
      students: 1340
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'AI/ML', name: 'AI/ML', icon: Code },
    { id: 'Cloud', name: 'Cloud', icon: Cloud },
    { id: 'Development', name: 'Development', icon: Code },
    { id: 'Security', name: 'Security', icon: Shield },
    { id: 'Database', name: 'Database', icon: Database }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredTutorials = tutorials.filter(tutorial => 
    selectedCategory === 'all' || tutorial.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Tutorials | Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, web development, cybersecurity, and more. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, online courses, AI learning, cloud computing, web development, cybersecurity, programming tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Courses
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn from industry experts with our comprehensive tutorials on AI, cloud computing, web development, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Browse All
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-lg font-semibold">Tutorial Video</p>
                      <p className="text-cyan-100">Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan-600 font-medium">{tutorial.category}</span>
                      <span className="text-sm text-gray-500">{tutorial.level}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {tutorial.rating}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-4">
                      By {tutorial.author}
                    </div>
                    
                    <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Tutorial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students learning from our expert-led tutorials and advance your career in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started Free
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View All Courses
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default TutorialsPage