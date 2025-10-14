import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PlayIcon, 
  ClockIcon, 
  UserIcon,
  BookOpenIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpenIcon },
    { id: 'ai', name: 'AI & Machine Learning', icon: CodeBracketIcon },
    { id: 'security', name: 'Cybersecurity', icon: ShieldCheckIcon },
    { id: 'cloud', name: 'Cloud Computing', icon: CloudIcon }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI: A Complete Beginner\'s Guide',
      description: 'Learn the fundamentals of artificial intelligence and how to implement basic AI solutions in your business.',
      category: 'ai',
      duration: '45 min',
      difficulty: 'Beginner',
      author: 'AI Team',
      thumbnail: '/images/tutorials/ai-basics.jpg',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      description: 'Essential security measures every small business should implement to protect against cyber threats.',
      category: 'security',
      duration: '30 min',
      difficulty: 'Intermediate',
      author: 'Security Team',
      thumbnail: '/images/tutorials/cybersecurity.jpg',
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'Cloud Migration: Step-by-Step Guide',
      description: 'Complete walkthrough of migrating your infrastructure to the cloud with minimal downtime.',
      category: 'cloud',
      duration: '60 min',
      difficulty: 'Advanced',
      author: 'Cloud Team',
      thumbnail: '/images/tutorials/cloud-migration.jpg',
      videoUrl: '#'
    },
    {
      id: 4,
      title: 'Building Your First AI Chatbot',
      description: 'Hands-on tutorial for creating an intelligent chatbot using modern AI frameworks.',
      category: 'ai',
      duration: '90 min',
      difficulty: 'Intermediate',
      author: 'AI Team',
      thumbnail: '/images/tutorials/chatbot.jpg',
      videoUrl: '#'
    },
    {
      id: 5,
      title: 'Network Security Fundamentals',
      description: 'Understanding network security concepts and implementing basic protection measures.',
      category: 'security',
      duration: '40 min',
      difficulty: 'Beginner',
      author: 'Security Team',
      thumbnail: '/images/tutorials/network-security.jpg',
      videoUrl: '#'
    },
    {
      id: 6,
      title: 'AWS vs Azure: Choosing the Right Cloud Platform',
      description: 'Comprehensive comparison of major cloud platforms to help you make the right choice.',
      category: 'cloud',
      duration: '35 min',
      difficulty: 'Intermediate',
      author: 'Cloud Team',
      thumbnail: '/images/tutorials/cloud-comparison.jpg',
      videoUrl: '#'
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
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cybersecurity, cloud computing, and digital transformation. Expert-led content for all skill levels." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tutorials & Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials and learning resources designed for all skill levels.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutorials.map((tutorial) => (
                  <div
                    key={tutorial.id}
                    className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-600 to-cyan-600">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center relative">
                        <PlayIcon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 right-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                            {tutorial.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full">
                          {categories.find(cat => cat.id === tutorial.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <UserIcon className="w-4 h-4" />
                            <span>{tutorial.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            <span>{tutorial.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                        Watch Tutorial
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Learning Paths</h2>
                <p className="text-gray-300">Structured learning journeys for different career goals</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">AI Developer Path</h3>
                  <p className="text-gray-300 mb-4">Master artificial intelligence and machine learning from basics to advanced applications.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Introduction to AI</li>
                    <li>• Machine Learning Fundamentals</li>
                    <li>• Deep Learning</li>
                    <li>• AI Project Implementation</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">Cybersecurity Expert</h3>
                  <p className="text-gray-300 mb-4">Build expertise in protecting digital assets and preventing cyber threats.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Security Fundamentals</li>
                    <li>• Network Security</li>
                    <li>• Incident Response</li>
                    <li>• Security Auditing</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">Cloud Architect</h3>
                  <p className="text-gray-300 mb-4">Learn to design and implement scalable cloud solutions for modern businesses.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Cloud Fundamentals</li>
                    <li>• Infrastructure as Code</li>
                    <li>• Microservices Architecture</li>
                    <li>• Cloud Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are advancing their careers with our expert-led tutorials.
            </p>
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Browse All Tutorials
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;