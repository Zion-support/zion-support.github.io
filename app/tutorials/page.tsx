import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Play, BookOpen, Code, Brain, Shield, Cloud, Users } from "lucide-react";

export default function Tutorials() {
  const categories = [
    {
      title: "AI & Machine Learning",
      description: "Learn how to implement AI solutions in your business",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      tutorials: [
        "Getting Started with AI Analytics",
        "Building Your First Chatbot",
        "Machine Learning Fundamentals",
        "AI Content Generation Best Practices"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security practices",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      tutorials: [
        "Cybersecurity Fundamentals",
        "Threat Detection and Response",
        "Secure Cloud Migration",
        "Compliance and Risk Management"
      ]
    },
    {
      title: "Cloud Computing",
      description: "Master cloud infrastructure and deployment",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      tutorials: [
        "Cloud Architecture Design",
        "Container Orchestration",
        "Serverless Computing",
        "Cloud Cost Optimization"
      ]
    },
    {
      title: "Development",
      description: "Modern development practices and tools",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      tutorials: [
        "Full-Stack Development",
        "API Design and Development",
        "Database Design Patterns",
        "DevOps Best Practices"
      ]
    }
  ];

  const featuredTutorials = [
    {
      title: "Complete AI Implementation Guide",
      description: "A comprehensive guide to implementing AI solutions in your business from start to finish.",
      duration: "2 hours",
      level: "Intermediate",
      type: "Video Course",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Cybersecurity for Small Businesses",
      description: "Essential security practices every small business should implement to protect their data.",
      duration: "45 minutes",
      level: "Beginner",
      type: "Tutorial",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Cloud Migration Best Practices",
      description: "Step-by-step guide to migrating your applications to the cloud safely and efficiently.",
      duration: "1.5 hours",
      level: "Advanced",
      type: "Video Course",
      icon: <Play className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn from our comprehensive tutorials covering AI, cybersecurity, cloud computing, and development best practices."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials, 
                guides, and hands-on learning resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Request Tutorial
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tutorials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Tutorials
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our most popular and comprehensive learning resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tutorial.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                    {tutorial.duration}
                  </span>
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">
                    {tutorial.level}
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                    {tutorial.type}
                  </span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learning Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore tutorials organized by technology and skill level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className={`text-${category.color.split('-')[1]}-400 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {category.tutorials.map((tutorial, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {tutorial}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learning Paths
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Structured learning journeys for different roles and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Developer Path",
                description: "Complete journey from beginner to AI expert",
                duration: "6 months",
                courses: 12,
                level: "Beginner to Advanced"
              },
              {
                title: "Cybersecurity Specialist",
                description: "Master security practices and threat management",
                duration: "4 months",
                courses: 8,
                level: "Intermediate to Advanced"
              },
              {
                title: "Cloud Architect",
                description: "Design and implement cloud solutions",
                duration: "5 months",
                courses: 10,
                level: "Intermediate to Advanced"
              }
            ].map((path, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {path.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {path.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-cyan-400">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Courses:</span>
                    <span className="text-cyan-400">{path.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-cyan-400">{path.level}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300">
                  Start Learning Path
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have advanced their careers with our tutorials.
              </p>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}