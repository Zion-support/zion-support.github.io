import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI: A Complete Beginner's Guide",
      description: "Learn the fundamentals of artificial intelligence and how to implement basic AI solutions in your business.",
      category: "AI & Machine Learning",
      duration: "2 hours",
      difficulty: "Beginner",
      instructor: "AI Team",
      thumbnail: "/images/tutorials/ai-basics.jpg",
      icon: CodeBracketIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Cybersecurity Fundamentals for Business Owners",
      description: "Essential cybersecurity practices to protect your business from common threats and vulnerabilities.",
      category: "Cybersecurity",
      duration: "1.5 hours",
      difficulty: "Beginner",
      instructor: "Security Team",
      thumbnail: "/images/tutorials/cybersecurity-basics.jpg",
      icon: ShieldCheckIcon,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Cloud Migration Strategy and Implementation",
      description: "Step-by-step guide to migrating your infrastructure to the cloud with minimal downtime.",
      category: "Cloud Computing",
      duration: "3 hours",
      difficulty: "Intermediate",
      instructor: "Cloud Team",
      thumbnail: "/images/tutorials/cloud-migration.jpg",
      icon: CloudIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Building Your First Micro SaaS Application",
      description: "Complete tutorial on creating a micro SaaS application from concept to deployment.",
      category: "Micro SaaS",
      duration: "4 hours",
      difficulty: "Intermediate",
      instructor: "Development Team",
      thumbnail: "/images/tutorials/micro-saas.jpg",
      icon: CodeBracketIcon,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      title: "5G Technology Implementation for Businesses",
      description: "Understanding 5G capabilities and how to leverage them for your business operations.",
      category: "5G Solutions",
      duration: "2.5 hours",
      difficulty: "Advanced",
      instructor: "5G Team",
      thumbnail: "/images/tutorials/5g-implementation.jpg",
      icon: CloudIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Digital Transformation Roadmap Development",
      description: "Learn how to create and execute a comprehensive digital transformation strategy.",
      category: "Digital Transformation",
      duration: "3.5 hours",
      difficulty: "Advanced",
      instructor: "Strategy Team",
      thumbnail: "/images/tutorials/digital-transformation.jpg",
      icon: BookOpenIcon,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const categories = [
    "All Tutorials",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Micro SaaS",
    "5G Solutions",
    "Digital Transformation"
  ];

  const difficultyColors = {
    "Beginner": "bg-green-500",
    "Intermediate": "bg-yellow-500",
    "Advanced": "bg-red-500"
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI, cybersecurity, cloud computing, and digital transformation with our comprehensive tutorials and guides." />
        <meta name="keywords" content="AI tutorials, cybersecurity training, cloud computing guide, digital transformation, technology learning" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tutorials & Learning
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master the latest technologies with our comprehensive tutorials and guides
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From beginner-friendly introductions to advanced implementation guides, 
              our tutorials cover everything you need to succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <div 
                  key={tutorial.id}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tutorial.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${difficultyColors[tutorial.difficulty]} text-white text-sm font-semibold rounded-full`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                        <PlayIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        <span>{tutorial.instructor}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {tutorial.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {tutorial.category}
                      </span>
                      
                      <Link 
                        to={`/tutorials/${tutorial.id}`}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                      >
                        Start Learning <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <CodeBracketIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Developer Path</h3>
              <p className="text-gray-300 mb-6">
                Master artificial intelligence development from basics to advanced implementations.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 12 Tutorials</li>
                <li>• 24 Hours Content</li>
                <li>• 3 Projects</li>
                <li>• Certificate</li>
              </ul>
              <Link 
                to="/learning-paths/ai-developer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold"
              >
                Start Path <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Expert</h3>
              <p className="text-gray-300 mb-6">
                Become a cybersecurity professional with comprehensive security training.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 15 Tutorials</li>
                <li>• 30 Hours Content</li>
                <li>• 5 Labs</li>
                <li>• Certification</li>
              </ul>
              <Link 
                to="/learning-paths/cybersecurity"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Start Path <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Architect</h3>
              <p className="text-gray-300 mb-6">
                Design and implement scalable cloud solutions for modern businesses.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 18 Tutorials</li>
                <li>• 36 Hours Content</li>
                <li>• 4 Projects</li>
                <li>• Badge</li>
              </ul>
              <Link 
                to="/learning-paths/cloud-architect"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold"
              >
                Start Path <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of professionals who are advancing their careers with our tutorials
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/tutorials"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Browse All Tutorials
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Custom Training
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )}