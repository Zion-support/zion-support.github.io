import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      id: 1,
      title: 'Getting Started with AI Implementation',
      description: 'A comprehensive guide to implementing AI solutions in your organization.',
      category: 'AI Implementation',
      difficulty: 'Beginner',
      duration: '45 min',
      topics: ['AI Strategy', 'Data Preparation', 'Model Selection', 'Deployment'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Fundamentals',
      description: 'Understanding the basics of quantum computing and its applications.',
      category: 'Quantum Computing',
      difficulty: 'Intermediate',
      duration: '60 min',
      topics: ['Quantum Mechanics', 'Qubits', 'Quantum Algorithms', 'Applications'],
      featured: false
    },
    {
      id: 3,
      title: 'Building Autonomous Systems',
      description: 'Step-by-step guide to creating self-managing intelligent systems.',
      category: 'Autonomous Systems',
      difficulty: 'Advanced',
      duration: '90 min',
      topics: ['System Architecture', 'Machine Learning', 'Decision Making', 'Monitoring'],
      featured: false
    },
    {
      id: 4,
      title: 'AI Cybersecurity Best Practices',
      description: 'Essential security measures for AI-powered systems and applications.',
      category: 'Cybersecurity',
      difficulty: 'Intermediate',
      duration: '50 min',
      topics: ['Threat Modeling', 'Data Protection', 'Model Security', 'Compliance'],
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain Development Guide',
      description: 'Complete guide to developing blockchain applications and smart contracts.',
      category: 'Blockchain',
      difficulty: 'Intermediate',
      duration: '75 min',
      topics: ['Blockchain Basics', 'Smart Contracts', 'DApps', 'DeFi'],
      featured: false
    },
    {
      id: 6,
      title: 'IoT and Edge Computing Architecture',
      description: 'Designing scalable IoT solutions with edge computing capabilities.',
      category: 'IoT & Edge',
      difficulty: 'Advanced',
      duration: '80 min',
      topics: ['IoT Protocols', 'Edge Computing', 'Data Processing', 'Security'],
      featured: false
    },
    {
      id: 7,
      title: 'AI Data Analytics Pipeline',
      description: 'Building robust data analytics pipelines with AI and machine learning.',
      category: 'Data Analytics',
      difficulty: 'Intermediate',
      duration: '65 min',
      topics: ['Data Collection', 'ETL Processes', 'ML Pipelines', 'Visualization'],
      featured: false
    },
    {
      id: 8,
      title: 'Cloud Infrastructure Optimization',
      description: 'Optimizing cloud infrastructure for AI workloads and applications.',
      category: 'Cloud Computing',
      difficulty: 'Advanced',
      duration: '70 min',
      topics: ['Cloud Architecture', 'Cost Optimization', 'Performance Tuning', 'Monitoring'],
      featured: false
    }
  ];

  const categories = ['All', 'AI Implementation', 'Quantum Computing', 'Autonomous Systems', 'Cybersecurity', 'Blockchain', 'IoT & Edge', 'Data Analytics', 'Cloud Computing'];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Technical Guides
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive technical documentation and step-by-step guides to help you 
              implement cutting-edge AI and technology solutions.
            </p>
          </div>

          {/* Featured Guide */}
          <div className="mb-16">
            {guides.filter(guide => guide.featured).map(guide => (
              <div key={guide.id} className="cyber-card hologram-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {guide.category}
                      </span>
                      <span className={`${getDifficultyColor(guide.difficulty)} text-white px-3 py-1 rounded-full text-sm font-medium ml-3`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-gray-400 text-sm ml-4">{guide.duration}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {guide.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                      {guide.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Topics Covered:</h3>
                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic, index) => (
                          <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="cyber-button">
                      Start Learning
                    </button>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-cyan-500 to-purple-600 p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📚</div>
                      <div className="text-xl font-bold">Free Guide</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category === 'All' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.filter(guide => !guide.featured).map(guide => (
              <article key={guide.id} className="cyber-card hologram-card group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {guide.category}
                    </span>
                    <span className={`${getDifficultyColor(guide.difficulty)} text-white px-3 py-1 rounded-full text-sm font-medium ml-3`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {guide.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                      {guide.topics.length > 3 && (
                        <span className="text-gray-400 text-xs">+{guide.topics.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{guide.duration}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Read Guide →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Custom Implementation Help?
            </h2>
            <p className="text-gray-300 mb-6">
              Our expert team can help you implement any of these solutions in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="cyber-button"
              >
                Get Expert Help
              </Link>
              <Link 
                to="/services" 
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuidesPage;