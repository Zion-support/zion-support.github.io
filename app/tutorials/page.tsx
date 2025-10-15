import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  PlayIcon, 
  ClockIcon,
  AcademicCapIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Services',
      description: 'Learn how to set up and use our AI-powered solutions effectively',
      duration: '45 min',
      difficulty: 'Beginner',
      category: 'AI Services',
      icon: CpuChipIcon,
      color: 'text-cyan-400',
      rating: 4.8,
      students: 1250,
      href: '/tutorials/ai-services/getting-started'
    },
    {
      title: 'Micro SaaS Integration Guide',
      description: 'Step-by-step guide to integrating our micro SaaS solutions',
      duration: '60 min',
      difficulty: 'Intermediate',
      category: 'Micro SaaS',
      icon: GlobeAltIcon,
      color: 'text-green-400',
      rating: 4.7,
      students: 890,
      href: '/tutorials/micro-saas/integration'
    },
    {
      title: 'API Development Best Practices',
      description: 'Learn how to build robust APIs using our development tools',
      duration: '90 min',
      difficulty: 'Advanced',
      category: 'Development',
      icon: CodeBracketIcon,
      color: 'text-purple-400',
      rating: 4.9,
      students: 650,
      href: '/tutorials/development/api-best-practices'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up and managing cloud infrastructure',
      duration: '75 min',
      difficulty: 'Intermediate',
      category: 'Infrastructure',
      icon: CogIcon,
      color: 'text-orange-400',
      rating: 4.6,
      students: 720,
      href: '/tutorials/infrastructure/cloud-setup'
    },
    {
      title: 'Data Analytics & Visualization',
      description: 'Master data analytics and create stunning visualizations',
      duration: '50 min',
      difficulty: 'Intermediate',
      category: 'Analytics',
      icon: ChartBarIcon,
      color: 'text-pink-400',
      rating: 4.8,
      students: 980,
      href: '/tutorials/analytics/data-visualization'
    },
    {
      title: 'Team Collaboration Tools',
      description: 'Learn how to use our collaboration and project management tools',
      duration: '30 min',
      difficulty: 'Beginner',
      category: 'Productivity',
      icon: UserGroupIcon,
      color: 'text-blue-400',
      rating: 4.5,
      students: 1100,
      href: '/tutorials/productivity/team-collaboration'
    }
  ];

  const categories = [
    { name: 'All', count: 24 },
    { name: 'AI Services', count: 8 },
    { name: 'Micro SaaS', count: 6 },
    { name: 'Development', count: 5 },
    { name: 'Infrastructure', count: 3 },
    { name: 'Analytics', count: 2 }
  ];

  const featuredTutorials = [
    {
      title: 'Complete AI Implementation Guide',
      description: 'From setup to deployment, learn everything about implementing AI solutions',
      duration: '2 hours',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 2100,
      href: '/tutorials/ai/complete-implementation'
    },
    {
      title: 'Building Your First Micro SaaS',
      description: 'Create and launch your first micro SaaS application from scratch',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 1500,
      href: '/tutorials/micro-saas/building-first-app'
    }
  ];

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn how to use our AI and IT solutions with comprehensive video tutorials and step-by-step guides. From beginners to advanced users."
        keywords="tutorials, video guides, learning, AI tutorials, IT tutorials, step-by-step guides, how-to"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white futuristic-bg">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(35)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold holographic mb-6 neon-text">
              Tutorials
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Learn how to use our AI and IT solutions with comprehensive video tutorials and step-by-step guides. 
              From beginners to advanced users, we have something for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/beginner" className="cyber-button neon-border-animated">
                Start Learning
              </Link>
              <Link to="/tutorials/advanced" className="btn-futuristic neon-glow">
                Advanced Topics
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Featured Tutorials
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and comprehensive tutorials to get you started.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-8 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {tutorial.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-semibold">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        <span>{tutorial.students.toLocaleString()} students</span>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-400 font-medium px-2 py-1 bg-cyan-400/10 rounded-full">
                      {tutorial.difficulty}
                    </span>
                  </div>
                  
                  <Link to={tutorial.href} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    <span>Start Tutorial</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Browse by Category
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Find tutorials organized by topic and skill level.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button key={index} 
                  className="group px-6 py-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300 neon-glow"
                >
                  <span className="text-white group-hover:text-cyan-300 transition-colors font-medium">
                    {category.name}
                  </span>
                  <span className="ml-2 text-xs text-gray-400 group-hover:text-cyan-400">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Tutorials */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                All Tutorials
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete library of tutorials and learning resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${tutorial.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <tutorial.icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors neon-text">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-300">
                      <div className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-3 h-3 mr-1" />
                        <span>{tutorial.students}</span>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-400 font-medium px-2 py-1 bg-cyan-400/10 rounded-full">
                      {tutorial.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{tutorial.difficulty}</span>
                    <Link to={tutorial.href} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                      <span>Watch</span>
                      <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Ready to Learn?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Start your learning journey today with our comprehensive tutorials and guides. 
              From beginner to expert, we'll help you master our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/beginner" className="cyber-button neon-border-animated">
                Start Learning Now
              </Link>
              <Link to="/contact" className="btn-futuristic neon-glow">
                Get Personalized Help
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;