import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, ArrowRight, Clock, Users, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI Fundamentals'
    },
    {
      title: 'Building Your First Chatbot',
      description: 'Step-by-step guide to creating an intelligent chatbot using modern AI tools.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'AI Development'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure on AWS and Azure.',
      level: 'Advanced',
      duration: '6 hours',
      category: 'Cloud Computing'
    },
    {
      title: 'Data Analytics with Python',
      description: 'Master data analysis and visualization using Python and popular libraries.',
      level: 'Intermediate',
      duration: '5 hours',
      category: 'Data Science'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity measures to protect your applications and data.',
      level: 'Beginner',
      duration: '3 hours',
      category: 'Security'
    },
    {
      title: 'React Development Masterclass',
      description: 'Advanced React patterns and best practices for building modern web applications.',
      level: 'Advanced',
      duration: '8 hours',
      category: 'Web Development'
    },
    {
      title: 'API Design and Development',
      description: 'Learn to design, build, and document RESTful APIs that developers love.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'Backend Development'
    },
    {
      title: 'DevOps and CI/CD',
      description: 'Implement continuous integration and deployment pipelines for your projects.',
      level: 'Advanced',
      duration: '6 hours',
      category: 'DevOps'
    },
    {
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and Flutter.',
      level: 'Intermediate',
      duration: '7 hours',
      category: 'Mobile Development'
    }
  ];

  const categories = [
    'All',
    'AI Fundamentals',
    'AI Development',
    'Cloud Computing',
    'Data Science',
    'Security',
    'Web Development',
    'Backend Development',
    'DevOps',
    'Mobile Development'
  ];

  const stats = [
    { icon: BookOpen, number: '50+', label: 'Tutorials' },
    { icon: Users, number: '10K+', label: 'Students' },
    { icon: Clock, number: '200+', label: 'Hours of Content' },
    { icon: Star, number: '4.9', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & IT Skills</title>
        <meta name="description" content="Comprehensive tutorials and courses on AI, IT, cloud computing, and more. Learn from industry experts and advance your technical skills." />
        <meta name="keywords" content="tutorials, courses, learning, AI, IT, cloud computing, programming, cybersecurity, data science" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and courses. 
              From AI fundamentals to advanced cloud computing, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tutorials"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                Browse Tutorials
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-cyan-500 text-slate-900'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Tutorial Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of tutorials designed for all skill levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
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
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mb-6">{tutorial.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{tutorial.duration}</span>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your learning journey with our comprehensive tutorials and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutorialsPage;