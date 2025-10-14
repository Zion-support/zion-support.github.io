'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BookOpen, Play, Clock, Users, Star } from 'lucide-react'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Introduction to AI and Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      rating: 4.8,
      students: 1250,
      category: 'AI & ML'
    },
    {
      id: 2,
      title: 'Cloud Computing Fundamentals',
      description: 'Master the basics of cloud computing platforms and services.',
      level: 'Intermediate',
      duration: '3 hours',
      rating: 4.9,
      students: 980,
      category: 'Cloud'
    },
    {
      id: 3,
      title: 'Web Development with React',
      description: 'Build modern web applications using React and TypeScript.',
      level: 'Intermediate',
      duration: '4 hours',
      rating: 4.7,
      students: 2100,
      category: 'Web Dev'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Learn essential cybersecurity measures to protect your business.',
      level: 'Advanced',
      duration: '2.5 hours',
      rating: 4.9,
      students: 750,
      category: 'Security'
    },
    {
      id: 5,
      title: 'Database Design and Optimization',
      description: 'Design efficient databases and optimize performance.',
      level: 'Intermediate',
      duration: '3.5 hours',
      rating: 4.6,
      students: 890,
      category: 'Database'
    },
    {
      id: 6,
      title: 'DevOps and CI/CD Pipelines',
      description: 'Implement DevOps practices and continuous integration/deployment.',
      level: 'Advanced',
      duration: '5 hours',
      rating: 4.8,
      students: 650,
      category: 'DevOps'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta name="description" content="Comprehensive tutorials on AI, cloud computing, web development, cybersecurity, and more. Learn from industry experts." />
        <meta name="keywords" content="tutorials, online courses, AI learning, cloud computing, web development, cybersecurity, technology education" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Learn
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tutorials
              </span>3049
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI and IT skills with our comprehensive tutorials.
              Learn from experts with hands-on projects and real-world examples.
            </p>3226
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Learning
              </button>3797
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Browse All
              </button>3908
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, _index) => (
                <button
                  key={_index}
                  className=""
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Tutorials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Featured Tutorials
            </h2>4783
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {tutorial.title}

                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
<Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {tutorial.students} students
                    </span>6402
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">{tutorial.instructor}</span>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Start Tutorial
                      <Right className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6">Complete path from basics to advanced AI implementation.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Introduction to AI</li>
                  <li>• Machine Learning Fundamentals</li>
                  <li>• Deep Learning</li>
                  <li>• AI Implementation</li>
                </ul>
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Learning Path →
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
                <p className="text-gray-300 mb-6">Master cloud platforms and services for modern applications.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Cloud Fundamentals</li>
                  <li>• AWS Services</li>
                  <li>• Azure Platform</li>
                  <li>• Cloud Security</li>
                </ul>
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Learning Path →
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Development</h3>
                <p className="text-gray-300 mb-6">Build complete web applications from frontend to backend.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Frontend Development</li>
                  <li>• Backend Development</li>
                  <li>• Database Design</li>
                  <li>• Deployment</li>
                </ul>
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Learning Path →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>7224
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students already learning with our comprehensive tutorials.
            </p>7346
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started Free
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View All Tutorials
              </button>7951
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TutorialsPage;

