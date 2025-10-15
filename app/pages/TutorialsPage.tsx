import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  PlayIcon,
  ClockIcon,
  AcademicCapIcon,
  StarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Solutions',
      description: 'Learn the fundamentals of AI and how to implement our AI solutions in your business.',
      duration: '45 min',
      level: 'Beginner',
      type: 'Video',
      icon: CpuChipIcon,
      href: '/tutorials/ai-solutions-basics',
      features: ['AI Fundamentals', 'Implementation Guide', 'Best Practices', 'Troubleshooting']
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up and configuring cloud infrastructure for your business.',
      duration: '60 min',
      level: 'Intermediate',
      type: 'Video',
      icon: CloudIcon,
      href: '/tutorials/cloud-infrastructure-setup',
      features: ['AWS Configuration', 'Security Setup', 'Monitoring', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your business from threats and vulnerabilities.',
      duration: '30 min',
      level: 'All Levels',
      type: 'Article',
      icon: ShieldCheckIcon,
      href: '/tutorials/cybersecurity-best-practices',
      features: ['Threat Assessment', 'Security Policies', 'Incident Response', 'Compliance']
    },
    {
      title: 'Micro SaaS Development',
      description: 'Build and deploy your own micro SaaS application using our development framework.',
      duration: '90 min',
      level: 'Advanced',
      type: 'Video',
      icon: CodeBracketIcon,
      href: '/tutorials/micro-saas-development',
      features: ['Architecture Design', 'API Development', 'Database Setup', 'Deployment']
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Plan and execute a successful digital transformation initiative for your organization.',
      duration: '75 min',
      level: 'Intermediate',
      type: 'Video',
      icon: RocketLaunchIcon,
      href: '/tutorials/digital-transformation-strategy',
      features: ['Strategy Planning', 'Change Management', 'Technology Selection', 'Implementation']
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive guide to managing and maintaining your IT infrastructure effectively.',
      duration: '50 min',
      level: 'Intermediate',
      type: 'Video',
      icon: ServerIcon,
      href: '/tutorials/it-infrastructure-management',
      features: ['Server Management', 'Network Configuration', 'Backup Strategies', 'Monitoring']
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      count: 12,
      icon: CpuChipIcon,
      description: 'Learn about artificial intelligence and machine learning technologies'
    },
    {
      name: 'Cloud Computing',
      count: 8,
      icon: CloudIcon,
      description: 'Master cloud platforms and infrastructure management'
    },
    {
      name: 'Cybersecurity',
      count: 15,
      icon: ShieldCheckIcon,
      description: 'Protect your business with advanced security practices'
    },
    {
      name: 'Development',
      count: 20,
      icon: CodeBracketIcon,
      description: 'Build applications and software solutions'
    },
    {
      name: 'IT Infrastructure',
      count: 10,
      icon: ServerIcon,
      description: 'Manage and optimize your IT infrastructure'
    },
    {
      name: 'Digital Transformation',
      count: 6,
      icon: RocketLaunchIcon,
      description: 'Transform your business with digital solutions'
    }
  ];

  const benefits = [
    {
      title: 'Expert-Led Content',
      description: 'Learn from industry experts with years of experience in their fields.',
      icon: AcademicCapIcon
    },
    {
      title: 'Hands-On Learning',
      description: 'Practical tutorials with real-world examples and exercises.',
      icon: BookOpenIcon
    },
    {
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with flexible scheduling and progress tracking.',
      icon: ClockIcon
    },
    {
      title: 'Community Support',
      description: 'Join our community of learners and get help from peers and experts.',
      icon: UserGroupIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI, IT, and technology solutions through our comprehensive tutorials. Expert-led content for all skill levels." />
        <meta name="keywords" content="tutorials, learning, AI tutorials, IT tutorials, cloud tutorials, cybersecurity tutorials, programming tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Tutorials & Learning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI, IT, and technology solutions through our comprehensive tutorial library. 
              Learn from experts and advance your skills at your own pace.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Learning
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Learning <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our organized collection of tutorials by technology area
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">{category.count} tutorials</span>
                    <Link to={`/tutorials/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-purple-400 hover:text-purple-300 flex items-center">
                      Explore
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tutorials</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these popular tutorials to build your foundation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <tutorial.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {tutorial.level}
                      </span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        {tutorial.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-400">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{tutorial.duration}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">What you'll learn:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {tutorial.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={tutorial.href} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <PlayIcon className="w-4 h-4" />
                    Start Tutorial
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Learn With <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Us</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide the best learning experience for technology professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 gradient-text">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who are advancing their careers with our comprehensive tutorial library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started
                <AcademicCapIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Demo
                <PlayIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;