import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'devops', name: 'DevOps' },
    { id: 'data', name: 'Data Science' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning',
      description: 'Learn the fundamentals of machine learning and how to build your first ML model.',
      category: 'ai',
      duration: '45 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/images/tutorials/ml-basics.jpg',
      instructor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      title: 'AWS Cloud Architecture Best Practices',
      description: 'Master cloud architecture patterns and best practices for scalable applications.',
      category: 'cloud',
      duration: '60 min',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 890,
      thumbnail: '/images/tutorials/aws-architecture.jpg',
      instructor: 'Michael Chen'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts and practices to protect your organization.',
      category: 'security',
      duration: '90 min',
      difficulty: 'Beginner',
      rating: 4.7,
      students: 2100,
      thumbnail: '/images/tutorials/cybersecurity.jpg',
      instructor: 'Alex Rodriguez'
    },
    {
      id: 4,
      title: 'Docker and Kubernetes for Beginners',
      description: 'Containerization and orchestration with Docker and Kubernetes.',
      category: 'devops',
      duration: '75 min',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 1560,
      thumbnail: '/images/tutorials/docker-k8s.jpg',
      instructor: 'Emma Wilson'
    },
    {
      id: 5,
      title: 'Data Visualization with Python',
      description: 'Create stunning visualizations and dashboards using Python libraries.',
      category: 'data',
      duration: '50 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 980,
      thumbnail: '/images/tutorials/data-viz.jpg',
      instructor: 'David Kim'
    },
    {
      id: 6,
      title: 'Advanced AI Model Deployment',
      description: 'Deploy and scale AI models in production environments.',
      category: 'ai',
      duration: '120 min',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 450,
      thumbnail: '/images/tutorials/ai-deployment.jpg',
      instructor: 'Dr. Sarah Johnson'
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and more. Expert-led courses for all skill levels." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Learn from <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experts</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials and courses. 
                Learn from industry experts and advance your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Start Learning
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Become an Instructor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular tutorials and courses designed to help you master 
                the latest technologies and advance your career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 flex items-center justify-center">
                    <PlayIcon className="w-16 h-16 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-sm font-semibold ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <StarIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{tutorial.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-2" />
                        {tutorial.students} students
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        By {tutorial.instructor}
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2">
                        <PlayIcon className="w-4 h-4" />
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learning Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of professionals who have advanced their careers with our tutorials.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  10,000+
                </div>
                <div className="text-gray-300 text-lg">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-300 text-lg">Tutorials Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  4.8
                </div>
                <div className="text-gray-300 text-lg">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-gray-300 text-lg">Completion Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our community of learners and start your journey to mastering the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;