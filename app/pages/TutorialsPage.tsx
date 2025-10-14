import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PlayIcon, 
  ClockIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Integration',
      description: 'Learn the fundamentals of integrating AI solutions into your business processes.',
      duration: '45 min',
      level: 'Beginner',
      category: 'AI Solutions',
      icon: CpuChipIcon,
      thumbnail: '/images/tutorials/ai-integration.jpg'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up scalable cloud infrastructure for your applications.',
      duration: '1h 30min',
      level: 'Intermediate',
      category: 'Cloud Computing',
      icon: CloudIcon,
      thumbnail: '/images/tutorials/cloud-setup.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures to protect your digital assets and data.',
      duration: '1h 15min',
      level: 'Intermediate',
      category: 'Security',
      icon: CodeBracketIcon,
      thumbnail: '/images/tutorials/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Digital Transformation Strategy',
      description: 'How to plan and execute a successful digital transformation initiative.',
      duration: '2h',
      level: 'Advanced',
      category: 'Strategy',
      icon: AcademicCapIcon,
      thumbnail: '/images/tutorials/digital-transformation.jpg'
    },
    {
      id: 5,
      title: 'API Development Fundamentals',
      description: 'Learn to build robust and scalable APIs for modern applications.',
      duration: '1h 45min',
      level: 'Intermediate',
      category: 'Development',
      icon: CodeBracketIcon,
      thumbnail: '/images/tutorials/api-development.jpg'
    },
    {
      id: 6,
      title: 'Machine Learning Model Deployment',
      description: 'Deploy and manage machine learning models in production environments.',
      duration: '2h 30min',
      level: 'Advanced',
      category: 'AI Solutions',
      icon: CpuChipIcon,
      thumbnail: '/images/tutorials/ml-deployment.jpg'
    }
  ];

  const categories = ['All', 'AI Solutions', 'Cloud Computing', 'Security', 'Strategy', 'Development'];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Learn with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI and IT solutions with our comprehensive tutorials, guides, and hands-on learning experiences.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <PlayIcon className="w-16 h-16 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-purple-400">{tutorial.category}</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tutorial.level === 'Beginner' 
                          ? 'bg-green-500/20 text-green-400'
                          : tutorial.level === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {tutorial.level}
                      </span>
                      
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        Start Learning
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Learning Paths</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-4">
                    <CpuChipIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Solutions Path</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Master artificial intelligence from basics to advanced implementation in real-world scenarios.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    AI Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    Machine Learning Basics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    Deep Learning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    AI Deployment
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start AI Path
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-4">
                    <CloudIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud Infrastructure Path</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Learn cloud computing, infrastructure management, and scalable architecture design.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    Cloud Fundamentals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    Infrastructure as Code
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    Containerization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2" />
                    DevOps Practices
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Cloud Path
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are advancing their careers with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Browse All Tutorials
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Get Personalized Recommendations
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
