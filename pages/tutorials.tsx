import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  Play, 
  Code, 
  Database, 
  Cloud, 
  Shield 
} from 'lucide-react';

const Tutorials: React.FC = () => {
  const categories = [
    { id: 'all', name: 'All Tutorials', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'advanced', name: 'Advanced', icon: '⚡' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Integration',
      description: 'Learn the basics of integrating AI services into your applications',
      category: 'getting-started',
      duration: '15 min',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Advanced API Integration',
      description: 'Master advanced API integration techniques and best practices',
      category: 'integration',
      duration: '30 min',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      description: 'Deep dive into machine learning concepts and applications',
      category: 'advanced',
      duration: '45 min',
      difficulty: 'Advanced'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Tutorials - Zion App</title>
        <meta name="description" content="Learn from our comprehensive tutorials and guides" />
        <meta name="keywords" content="tutorials, guides, learning, development" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Tutorials</h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Learn new skills and advance your career with our comprehensive tutorials.
              </p>
            </motion.div>
          </div>

        {/* Tutorial Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tutorial Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our organized collection of tutorials by technology area.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tutorialCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm text-green-600 font-medium">
                    {category.tutorials} tutorials
                  </div>
                </motion.div>
=======
const Tutorials: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [;
    { id: 'all', name: 'All Tutorials', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'advanced', name: 'Advanced', icon: '⚡' },
    { id: 'best-practices', name: 'Best Practices', icon: '✅' },
  ];
  const tutorials = [;
    {;
      id: 1,
      title: 'Setting Up Your First AI Project',
      category: 'getting-started',
      description: 'Learn how to create and configure your first AI project on Zion Marketplace',
      duration: '20 min',
      difficulty: 'Beginner',
      steps: 8,
      featured: true,
      tags: ['onboarding', 'project-setup', 'first-steps'],,
},
    {;
      id: 2,
      title: 'Integrating AI Services with Your Application',
      category: 'integration',
      description: 'Step-by-step guide to integrating AI services into your existing applications',
      duration: '45 min',
      difficulty: 'Intermediate',
      steps: 12,
      featured: true,
      tags: ['integration', 'api', 'webhooks'],,
},
    {;
      id: 3,
      title: 'Building a Custom AI Workflow',
      category: 'advanced',
      description: 'Create complex AI workflows that combine multiple services and data sources',
      duration: '90 min',
      difficulty: 'Advanced',
      steps: 15,
      featured: false,
      tags: ['workflow', 'automation', 'advanced'],,
},
    {;
      id: 4,
      title: 'Implementing AI-Powered Search',
      category: 'integration',
      description: 'Add intelligent search capabilities to your application using our AI search API',
      duration: '35 min',
      difficulty: 'Intermediate',
      steps: 10,
      featured: false,
      tags: ['search', 'ai', 'implementation'],,
},
    {;
      id: 5,
      title: 'Securing Your AI Integration',
      category: 'best-practices',
      description: 'Best practices for securing AI integrations and protecting user data',
      duration: '40 min',
      difficulty: 'Intermediate',
      steps: 11,
      featured: true,
      tags: ['security', 'best-practices', 'compliance'],,
},
    {;
      id: 6,
      title: 'Optimizing AI Service Performance',
      category: 'advanced',
      description: 'Techniques for optimizing AI service performance and reducing costs',
      duration: '60 min',
      difficulty: 'Advanced',
      steps: 13,
      featured: false,
      tags: ['optimization', 'performance', 'cost'],,
},
    {;
      id: 7,
      title: 'Creating AI-Powered Dashboards',
      category: 'integration',
      description: 'Build real-time dashboards that display AI insights and analytics',
      duration: '50 min',
      difficulty: 'Intermediate',
      steps: 14,
      featured: false,
      tags: ['dashboard', 'analytics', 'real-time'],,
},
    {;
      id: 8,
      title: 'Testing and Debugging AI Integrations',
      category: 'best-practices',
      description: 'Comprehensive testing strategies for AI integrations and debugging techniques',
      duration: '55 min',
      difficulty: 'Intermediate',
      steps: 16,
      featured: false,
      tags: ['testing', 'debugging', 'quality'],,
},
  ];
  const filteredTutorials = tutorials.filter(tutorial => ;
    activeCategory === 'all' || tutorial.category === activeCategory;
  );
  return (;
    <>;
      <Head>;
        <title>Tutorials - Zion AI Marketplace</title>;
        <meta name="description" content="Step-by-step tutorials for AI integration and marketplace success" />;
        <meta name="keywords" content="tutorials, step-by-step, AI, integration, learning" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">;
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">;
          <div className="container mx-auto px-6 py-8">;
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
              Step-by-Step Tutorials;
            </h1>;
            <p className="text-xl text-gray-300 mt-4">;
              Master AI integration with our comprehensive, hands-on tutorials;
            </p>;
          </div>;
        </header>;

        {/* Category Filter */}
        <section className="container mx-auto px-6 py-8">;
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">;
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Choose a Category</h2>;
            <div className="flex flex-wrap gap-3">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${;
                    activeCategory === category.id;
                      ? 'bg-blue-600 text-white';
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600';
}`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name}
                </span>;
                </button>;
>>>>>>> origin/automation-fixes
              ))}
            </div>
          </div>

        {/* Featured Tutorials */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tutorials</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start with these popular tutorials to get up and running quickly.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-sm text-gray-500">Video Tutorial</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Getting Started with React</h3>
                <p className="text-gray-600 mb-4">Learn the fundamentals of React development</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  45 minutes
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">Written Guide</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Database Design Best Practices</h3>
                <p className="text-gray-600 mb-4">Master the art of database design</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  30 minutes
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Play className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-sm text-gray-500">Video Tutorial</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Security Fundamentals</h3>
                <p className="text-gray-600 mb-4">Protect your cloud infrastructure</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  60 minutes
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}