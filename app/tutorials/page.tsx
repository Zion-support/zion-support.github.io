import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Clock, User, ArrowRight, Play, Download, Star, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development, from basic concepts to building your first machine learning model.',
      category: 'AI & Machine Learning',
      duration: '2 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'React TypeScript Best Practices',
      description: 'Master React development with TypeScript. Learn advanced patterns, performance optimization, and best practices.',
      category: 'Web Development',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 980,
      thumbnail: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Architecture Patterns',
      description: 'Design scalable cloud architectures using AWS, Azure, and Google Cloud. Learn microservices and serverless patterns.',
      category: 'Cloud Computing',
      duration: '4 hours',
      difficulty: 'Advanced',
      rating: 4.7,
      students: 750,
      thumbnail: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity concepts, threat modeling, and security best practices for developers and IT professionals.',
      category: 'Cybersecurity',
      duration: '2.5 hours',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 1100,
      thumbnail: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Data Science with Python',
      description: 'Complete guide to data science using Python, pandas, NumPy, and scikit-learn for data analysis and machine learning.',
      category: 'Data Science',
      duration: '5 hours',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 890,
      thumbnail: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 6,
      title: 'DevOps with Docker and Kubernetes',
      description: 'Learn containerization and orchestration with Docker and Kubernetes. Deploy and manage applications at scale.',
      category: 'DevOps',
      duration: '3.5 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 650,
      thumbnail: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 7,
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile applications using React Native. Learn navigation, state management, and deployment.',
      category: 'Mobile Development',
      duration: '4 hours',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: 720,
      thumbnail: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 8,
      title: 'Database Design and Optimization',
      description: 'Master database design principles, query optimization, and performance tuning for MySQL, PostgreSQL, and MongoDB.',
      category: 'Database',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.6,
      students: 580,
      thumbnail: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 9,
      title: 'UI/UX Design Principles',
      description: 'Learn design thinking, user research, wireframing, and prototyping to create exceptional user experiences.',
      category: 'Design',
      duration: '2.5 hours',
      difficulty: 'Beginner',
      rating: 4.4,
      students: 920,
      thumbnail: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Web Development',
    'Cloud Computing',
    'Cybersecurity',
    'Data Science',
    'DevOps',
    'Mobile Development',
    'Database',
    'Design'
  ];

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const stats = [
    { label: 'Total Tutorials', value: '50+' },
    { label: 'Students Enrolled', value: '10,000+' },
    { label: 'Average Rating', value: '4.7/5' },
    { label: 'Hours of Content', value: '200+' }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Master technology skills with our comprehensive tutorials. Learn AI, web development, cloud computing, and more with expert guidance." />
        <meta name="keywords" content="tutorials, online courses, technology learning, AI tutorials, web development, cloud computing, programming" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technology skills with our comprehensive tutorials and hands-on projects. Learn from industry experts.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Category</label>
                  <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Difficulty</label>
                  <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty} className="bg-gray-800">
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                    Filter Tutorials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Tutorials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your learning journey with our most popular and highly-rated tutorials.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-48 object-cover"
                    />
                    {tutorial.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-white">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {tutorial.students} students
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {tutorial.difficulty}
                      </span>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center group-hover:scale-105">
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already advancing their careers with our comprehensive tutorials.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Browse All Tutorials
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Download Resources
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TutorialsPage;