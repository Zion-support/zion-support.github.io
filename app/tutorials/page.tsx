import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Clock, Users, BookOpen, Video, FileText, Download } from "lucide-react";

export default function Tutorials() {
  const tutorialCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of our platform",
      icon: <BookOpen className="w-6 h-6" />,
      tutorials: [
        {
          title: "Welcome to Zion Tech Group",
          duration: "5 min",
          level: "Beginner",
          description: "Introduction to our platform and services"
        },
        {
          title: "Setting Up Your Account",
          duration: "10 min",
          level: "Beginner",
          description: "Step-by-step account setup guide"
        },
        {
          title: "First Project Setup",
          duration: "15 min",
          level: "Beginner",
          description: "Create your first AI project"
        }
      ]
    },
    {
      title: "AI Services",
      description: "Master our AI-powered solutions",
      icon: <Video className="w-6 h-6" />,
      tutorials: [
        {
          title: "AI Business Intelligence Dashboard",
          duration: "20 min",
          level: "Intermediate",
          description: "Build powerful analytics dashboards"
        },
        {
          title: "AI Customer Support Bot",
          duration: "25 min",
          level: "Intermediate",
          description: "Create intelligent chatbots"
        },
        {
          title: "AI Content Generation",
          duration: "18 min",
          level: "Intermediate",
          description: "Automate content creation"
        }
      ]
    },
    {
      title: "Advanced Features",
      description: "Unlock advanced capabilities",
      icon: <FileText className="w-6 h-6" />,
      tutorials: [
        {
          title: "Custom AI Model Training",
          duration: "45 min",
          level: "Advanced",
          description: "Train custom AI models for your needs"
        },
        {
          title: "API Integration",
          duration: "30 min",
          level: "Advanced",
          description: "Integrate with external APIs"
        },
        {
          title: "Performance Optimization",
          duration: "35 min",
          level: "Advanced",
          description: "Optimize your AI solutions"
        }
      ]
    }
  ];

  const featuredTutorials = [
    {
      title: "Complete AI Solution Setup",
      description: "Learn how to set up a complete AI-powered business solution from scratch",
      duration: "60 min",
      level: "All Levels",
      thumbnail: "/api/placeholder/400/225",
      views: "12.5K",
      rating: 4.9
    },
    {
      title: "5G Network Implementation",
      description: "Step-by-step guide to implementing 5G solutions for your business",
      duration: "45 min",
      level: "Intermediate",
      thumbnail: "/api/placeholder/400/225",
      views: "8.2K",
      rating: 4.8
    },
    {
      title: "Cloud Migration Best Practices",
      description: "Migrate your infrastructure to the cloud with confidence",
      duration: "40 min",
      level: "Advanced",
      thumbnail: "/api/placeholder/400/225",
      views: "15.3K",
      rating: 4.9
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & Technology Solutions</title>
        <meta
          name="description"
          content="Learn how to use Zion Tech Group's AI and technology solutions with our comprehensive video tutorials and guides."
        />
        <meta
          name="keywords"
          content="tutorials, video guides, learning, AI tutorials, technology tutorials, how-to guides"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Tutorials & Guides
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master our AI and technology solutions with comprehensive video tutorials, 
              step-by-step guides, and expert tips from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"
              >
                Get Personal Training
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Watch Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most popular tutorials our users love
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                        {tutorial.level}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {tutorial.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.views} views
                      </span>
                      <span className="flex items-center">
                        ⭐ {tutorial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find tutorials organized by topic and skill level
              </p>
            </div>
            <div className="space-y-12">
              {tutorialCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <div
                        key={tutorialIndex}
                        className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                            {tutorial.level}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {tutorial.duration}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {tutorial.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Tutorial
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download guides, access documentation, and get expert help
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Download className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Download Guides</h3>
                <p className="text-gray-300 mb-4">Get PDF guides and documentation</p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Download Now
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">API Documentation</h3>
                <p className="text-gray-300 mb-4">Complete API reference and examples</p>
                <Link
                  to="/docs"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-block"
                >
                  View Docs
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
                <p className="text-gray-300 mb-4">Connect with other users and experts</p>
                <Link
                  to="/community"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-block"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Personalized Training?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our experts can provide one-on-one training sessions tailored to your specific needs. 
                Get hands-on guidance and accelerate your learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"
                >
                  Schedule Training
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}