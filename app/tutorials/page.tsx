import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and machine learning concepts.',
      level: 'Beginner',
      duration: '2 hours',
      category: 'AI Basics',
      lessons: 12
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Deep dive into machine learning algorithms and their practical applications.',
      level: 'Intermediate',
      duration: '4 hours',
      category: 'Machine Learning',
      lessons: 18
    },
    {
      id: 3,
      title: 'Cloud Computing Essentials',
      description: 'Master cloud platforms and services for scalable applications.',
      level: 'Beginner',
      duration: '3 hours',
      category: 'Cloud',
      lessons: 15
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices',
      description: 'Learn how to protect your applications and data from security threats.',
      level: 'Intermediate',
      duration: '2.5 hours',
      category: 'Security',
      lessons: 10
    },
    {
      id: 5,
      title: 'Data Analytics with Python',
      description: 'Analyze data effectively using Python and popular data science libraries.',
      level: 'Intermediate',
      duration: '5 hours',
      category: 'Data Science',
      lessons: 20
    },
    {
      id: 6,
      title: 'Advanced AI Applications',
      description: 'Build sophisticated AI applications using cutting-edge techniques.',
      level: 'Advanced',
      duration: '6 hours',
      category: 'AI Development',
      lessons: 25
    }
  ];

  const categories = ['All', 'AI Basics', 'Machine Learning', 'Cloud', 'Security', 'Data Science', 'AI Development'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI and Technology</title>
        <meta name="description" content="Comprehensive tutorials on AI, machine learning, cloud computing, and cybersecurity. Learn from experts and advance your technical skills." />
        <meta name="keywords" content="tutorials, AI learning, machine learning, cloud computing, cybersecurity, data science, programming" />
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
                Master the latest technologies with our comprehensive tutorials. 
                From AI fundamentals to advanced applications, we've got you covered.
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
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
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
                    <span className="text-gray-400 text-sm">{tutorial.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{tutorial.lessons} lessons</span>
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

        {/* Learning Paths */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Learning Paths</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow structured learning paths designed by experts to master specific technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">AI Developer Path</h3>
                <p className="text-gray-300 mb-6">
                  Complete journey from AI basics to advanced applications and deployment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    AI Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Machine Learning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Deep Learning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    AI Deployment
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Path
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Architect Path</h3>
                <p className="text-gray-300 mb-6">
                  Master cloud technologies and architecture patterns for scalable applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Infrastructure as Code
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Microservices
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    DevOps Practices
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Path
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Browse All Tutorials
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;