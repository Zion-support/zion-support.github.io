'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { BookOpen, Brain, Cloud, Shield, Code, Play, Clock, Users } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = const categories = const categories = [
    { id: 'all', name: 'All Tutorials', icon: BookOpen },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
<<<<<<< HEAD
    { id: 'saas', name: 'Micro SaaS', icon: Zap },
    { id: 'security', name: 'Security', icon: Shield },;
    { id: 'integration', name: 'Integration', icon: Code };
  ];
  const tutorials = const tutorials = const tutorials = [
=======
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'development', name: 'Development', icon: Code }
  ];

  const tutorials = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      id: 1,
      title: 'Getting Started with AI Chatbots',
      category: 'ai',
      duration: '15 min',
<<<<<<< HEAD
      rating: 4.8,
      students: 1250,
      thumbnail: '/api/placeholder/400/250',
      tags: ['API', 'AI', 'Chat', 'Integration'],
      content: {
        overview: 'This tutorial covers the basics of integrating our AI chat API into your application.',
        prerequisites: ['Basic programming knowledge', 'API key', 'HTTP client'],
        steps: [
          'Set up your development environment',
          'Get your API key from the dashboard',
          'Make your first API call',;
          'Handle responses and errors',;
          'Implement advanced features';
        ];
      }
=======
      difficulty: 'Beginner',
      description: 'Learn how to build and deploy your first AI chatbot using our platform.',
      thumbnail: '/api/placeholder/400/225'
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      category: 'it',
      duration: '30 min',
      difficulty: 'Intermediate',
      description: 'A comprehensive guide to migrating your applications to the cloud.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      category: 'security',
      duration: '45 min',
      difficulty: 'Beginner',
      description: 'Essential cybersecurity concepts and best practices for businesses.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 4,
      title: 'Building REST APIs with Node.js',
      category: 'development',
      duration: '60 min',
      difficulty: 'Intermediate',
      description: 'Step-by-step guide to creating robust REST APIs using Node.js.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 5,
      title: 'AI Data Analytics Dashboard',
      category: 'ai',
      duration: '25 min',
      difficulty: 'Advanced',
      description: 'Create interactive dashboards with AI-powered analytics.',
      thumbnail: '/api/placeholder/400/225'
    },
    {
      id: 6,
      title: 'DevOps CI/CD Pipeline Setup',
      category: 'it',
      duration: '40 min',
      difficulty: 'Advanced',
      description: 'Set up automated deployment pipelines for your applications.',
      thumbnail: '/api/placeholder/400/225'
    }
  ];
<<<<<<< HEAD
  const filteredTutorials = const filteredTutorials = selectedCategory === 'all' ;
    ? tutorials ;
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

<<<<<<< HEAD
  return() {featuredTutorials.map((tutorial) => ()
                      {tutorial.tags.slice(0, 3).map((tag, index) => ()
                      ))}
                    </div>
                    <a href={`/tutorials/${tutorial.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" /></a>
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" / /></ArrowRight>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12" /></section>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4" /></div>
              {categories.map((category) => ()
=======
  return (
    <>
      <Helmet>
        <title>Tutorials | Zion Tech Group - Learning Resources</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and development. Step-by-step guides for all skill levels." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, cloud computing, cybersecurity, development, programming, guides" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master new skills with our comprehensive tutorials on AI, cloud computing, cybersecurity, and development.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our curated collection of tutorials organized by topic and skill level.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
<<<<<<< HEAD
                  <category.icon className="w-5 h-5" /></category>
                  <span>{category.name}</span>
=======
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </button>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* All Tutorials */}
          <section id="all-tutorials" className="mb-16" /></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
              {filteredTutorials.map((tutorial) => ()
                      {tutorial.tags.map((tag, index) => ()
                      ))}
                    </div>
                    <a href={`/tutorials/${tutorial.id}`}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" /></a>
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2" / /></ArrowRight>
                    </a>
=======
        {/* Tutorials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {tutorial.description}
                    </p>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Start Tutorial
                    </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* Learning Paths */}
          <section className="mb-16" /></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
              <div className="cyber-card-enhanced p-8" /></div>
                <div className="flex items-center mb-4" /></div>
                  <Brain className="w-8 h-8 text-cyan-400 mr-3" / /></Brain>
                  <h3 className="text-xl font-bold text-white">AI Developer Path</h3>
                </div>
                <p className="text-gray-300 mb-6" /></p>
                  Master AI development from basics to advanced implementations.
                </p>
                <ul className="space-y-2 mb-6" /></ul>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    AI Fundamentals
                  </li>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    API Integration
                  </li>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    Advanced AI Features
                  </li>
                </ul>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold" /></a>
                  Start Learning Path <ArrowRight className="w-4 h-4 inline ml-1" / /></ArrowRight>
                </a>
              </div>

              <div className="cyber-card-enhanced p-8" /></div>
                <div className="flex items-center mb-4" /></div>
                  <Cloud className="w-8 h-8 text-green-400 mr-3" / /></Cloud>
                  <h3 className="text-xl font-bold text-white">Cloud Architect Path</h3>
                </div>
                <p className="text-gray-300 mb-6" /></p>
                  Learn cloud architecture and infrastructure management.
                </p>
                <ul className="space-y-2 mb-6" /></ul>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    Cloud Fundamentals
                  </li>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    Security & Compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    Advanced Architecture
                  </li>
                </ul>
                <a href="#" className="text-green-400 hover:text-green-300 font-semibold" /></a>
                  Start Learning Path <ArrowRight className="w-4 h-4 inline ml-1" / /></ArrowRight>
                </a>
              </div>

              <div className="cyber-card-enhanced p-8" /></div>
                <div className="flex items-center mb-4" /></div>
                  <Zap className="w-8 h-8 text-purple-400 mr-3" / /></Zap>
                  <h3 className="text-xl font-bold text-white">SaaS Entrepreneur Path</h3>
                </div>
                <p className="text-gray-300 mb-6" /></p>
                  Build and scale your own SaaS business from scratch.
                </p>
                <ul className="space-y-2 mb-6" /></ul>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    SaaS Fundamentals
                  </li>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    Business Models
                  </li>
                  <li className="flex items-center text-sm text-gray-300" /></li>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" / /></CheckCircle>
                    Scaling & Growth
                  </li>
                </ul>
                <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold" /></a>
                  Start Learning Path <ArrowRight className="w-4 h-4 inline ml-1" / /></ArrowRight>
                </a>
=======
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-600">Tutorials Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-600">Students Learning</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* Resources */}
          <section className="mb-16" /></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" / /></Code>
                <h3 className="text-lg font-semibold text-white mb-2">Code Examples</h3>
                <p className="text-gray-300 mb-4 text-sm" /></p>
                  Ready-to-use code examples for all our services
                </p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm" /></a>
                  Browse Examples <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
                </a>
              </div>

              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <Download className="w-12 h-12 text-green-400 mx-auto mb-4" / /></Download>
                <h3 className="text-lg font-semibold text-white mb-2">SDKs & Libraries</h3>
                <p className="text-gray-300 mb-4 text-sm" /></p>
                  Official SDKs for popular programming languages
                </p>
                <a href="/api" className="text-green-400 hover:text-green-300 text-sm" /></a>
                  View SDKs <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
                </a>
              </div>

              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" / /></Users>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-300 mb-4 text-sm" /></p>
                  Join our developer community for support and discussions
                </p>
                <a href="/community" className="text-purple-400 hover:text-purple-300 text-sm" /></a>
                  Join Community <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
                </a>
              </div>

              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <BookOpen className="w-12 h-12 text-orange-400 mx-auto mb-4" / /></BookOpen>
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-gray-300 mb-4 text-sm" /></p>
                  Comprehensive API and service documentation
                </p>
                <a href="/docs" className="text-orange-400 hover:text-orange-300 text-sm" /></a>
                  View Docs <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16" /></section>
            <div className="cyber-card-enhanced p-8 text-center" /></div>
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h2>
              <p className="text-gray-300 mb-6" /></p>
                Join thousands of developers who are already building amazing applications with our services.
              </p>
              <div className="flex flex-wrap justify-center gap-4" /></div>
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                  Get Started Free
                </a>
                <a href="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300" /></a>
                  Request Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already mastering new skills with our tutorials.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Browse All Tutorials
            </button>
          </div>
        </section>
      </main>

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT technologies with our comprehensive tutorials." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Tutorials</h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn AI and IT technologies with our comprehensive tutorials
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    </>
  );
};

export default TutorialsPage;