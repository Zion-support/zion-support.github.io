'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon, 
  ClockIcon, 
  AcademicCapIcon, 
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  CodeBracketIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: AcademicCapIcon },
    { id: 'ai', name: 'AI Solutions', icon: CpuChipIcon },
    { id: 'security', name: 'Cybersecurity', icon: ShieldCheckIcon },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: CloudIcon },
    { id: 'analytics', name: 'Data Analytics', icon: ChartBarIcon },
    { id: 'development', name: 'Development', icon: CodeBracketIcon },
    { id: 'business', name: 'Business', icon: UserGroupIcon }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Chatbot Builder',
      description: 'Learn how to create and deploy your first AI-powered chatbot in under 30 minutes.',
      category: 'ai',
      duration: '25 min',
      difficulty: 'Beginner',
      type: 'Video',
      thumbnail: '/tutorials/ai-chatbot-builder.jpg',
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: 'Setting Up Cloud Infrastructure',
      description: 'Complete guide to deploying and managing your cloud infrastructure with our platform.',
      category: 'cloud',
      duration: '45 min',
      difficulty: 'Intermediate',
      type: 'Video',
      thumbnail: '/tutorials/cloud-infrastructure.jpg',
      rating: 4.9,
      students: 980
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures to protect your digital assets and infrastructure.',
      category: 'security',
      duration: '35 min',
      difficulty: 'Intermediate',
      type: 'Video',
      thumbnail: '/tutorials/cybersecurity.jpg',
      rating: 4.7,
      students: 1100
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard Setup',
      description: 'Create powerful analytics dashboards to visualize your business data.',
      category: 'analytics',
      duration: '40 min',
      difficulty: 'Intermediate',
      type: 'Video',
      thumbnail: '/tutorials/analytics-dashboard.jpg',
      rating: 4.6,
      students: 850
    },
    {
      id: 5,
      title: 'API Integration Guide',
      description: 'Step-by-step guide to integrating our APIs with your existing systems.',
      category: 'development',
      duration: '30 min',
      difficulty: 'Advanced',
      type: 'Video',
      thumbnail: '/tutorials/api-integration.jpg',
      rating: 4.8,
      students: 720
    },
    {
      id: 6,
      title: 'Digital Transformation Strategy',
      description: 'Learn how to plan and execute a successful digital transformation initiative.',
      category: 'business',
      duration: '50 min',
      difficulty: 'Intermediate',
      type: 'Video',
      thumbnail: '/tutorials/digital-transformation.jpg',
      rating: 4.9,
      students: 650
    },
    {
      id: 7,
      title: 'AI Model Training Basics',
      description: 'Introduction to training and fine-tuning AI models for your specific use cases.',
      category: 'ai',
      duration: '60 min',
      difficulty: 'Advanced',
      type: 'Video',
      thumbnail: '/tutorials/ai-model-training.jpg',
      rating: 4.7,
      students: 580
    },
    {
      id: 8,
      title: 'DevOps Automation Setup',
      description: 'Automate your development and deployment processes with our DevOps tools.',
      category: 'development',
      duration: '35 min',
      difficulty: 'Intermediate',
      type: 'Video',
      thumbnail: '/tutorials/devops-automation.jpg',
      rating: 4.8,
      students: 920
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <>
      <SEOHead 
        title="Tutorials & Learning Center - Zion Tech Group"
        description="Learn how to use our AI solutions, cybersecurity, and cloud infrastructure with comprehensive tutorials and guides."
        keywords="tutorials, learning, AI solutions, cybersecurity, cloud infrastructure, training, guides"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Learning Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master our AI solutions, cybersecurity, and cloud infrastructure with comprehensive tutorials, guides, and hands-on learning experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tutorials</span>
              </h2>
              <p className="text-lg text-gray-300">
                {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                      <PlayIcon className="w-16 h-16 text-white/60" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {tutorial.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-purple-400 font-medium">{tutorial.type}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        <span>{tutorial.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Start Tutorial
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Learning <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Paths</span>
              </h2>
              <p className="text-lg text-gray-300">
                Structured learning paths to master our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions Path</h3>
                <p className="text-gray-300 mb-6">Master AI technologies from basics to advanced implementations</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">5 Tutorials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">3 Hours Total</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Certificate Available</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                  Start Learning Path
                </button>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Path</h3>
                <p className="text-gray-300 mb-6">Learn essential security practices and threat protection</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">4 Tutorials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">2.5 Hours Total</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Certificate Available</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                  Start Learning Path
                </button>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure Path</h3>
                <p className="text-gray-300 mb-6">Master cloud deployment and infrastructure management</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">6 Tutorials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">4 Hours Total</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Certificate Available</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                  Start Learning Path
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are already mastering our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </a>
              <a href="/support" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Need Help?
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;