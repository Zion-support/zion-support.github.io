import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  BookOpen, 
  Clock, 
  User,
  Star,
  CheckCircle,
  Video,
  FileText,
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Mail,
  Phone,
  Globe as GlobeIcon,
  Search,
  Filter,
  Download
} from 'lucide-react';

const TutorialsPage = () => {
  const tutorialCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      tutorialCount: 12
    },
    {
      title: "AI Services",
      description: "Master our AI-powered solutions and features",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      tutorialCount: 18
    },
    {
      title: "Security & Privacy",
      description: "Keep your data secure with best practices",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      tutorialCount: 8
    },
    {
      title: "API Integration",
      description: "Connect and integrate with our APIs",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      tutorialCount: 15
    },
    {
      title: "Data Management",
      description: "Handle and process your data effectively",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      tutorialCount: 10
    },
    {
      title: "Advanced Features",
      description: "Unlock the full potential of our platform",
      icon: <Globe className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      tutorialCount: 14
    }
  ];

  const featuredTutorials = [
    {
      title: "Getting Started with AI Analytics",
      description: "Learn how to set up and use our AI analytics platform to gain insights from your data",
      duration: "15 min",
      difficulty: "Beginner",
      views: "2.5k",
      rating: 4.9,
      type: "Video",
      category: "AI Services",
      thumbnail: "📊"
    },
    {
      title: "Setting Up Your First Micro SAAS",
      description: "Step-by-step guide to deploying and configuring your first micro SAAS solution",
      duration: "22 min",
      difficulty: "Intermediate",
      views: "1.8k",
      rating: 4.8,
      type: "Video",
      category: "Getting Started",
      thumbnail: "🚀"
    },
    {
      title: "API Integration Best Practices",
      description: "Learn how to properly integrate with our APIs for optimal performance and security",
      duration: "18 min",
      difficulty: "Advanced",
      views: "1.2k",
      rating: 4.9,
      type: "Video",
      category: "API Integration",
      thumbnail: "🔗"
    },
    {
      title: "Security Configuration Guide",
      description: "Configure security settings to protect your data and ensure compliance",
      duration: "12 min",
      difficulty: "Intermediate",
      views: "3.1k",
      rating: 4.7,
      type: "Video",
      category: "Security & Privacy",
      thumbnail: "🔒"
    },
    {
      title: "Data Import and Export",
      description: "Learn how to efficiently import and export your data across different formats",
      duration: "10 min",
      difficulty: "Beginner",
      views: "2.2k",
      rating: 4.8,
      type: "Video",
      category: "Data Management",
      thumbnail: "📁"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Create custom dashboards and advanced analytics visualizations",
      duration: "25 min",
      difficulty: "Advanced",
      views: "950",
      rating: 4.9,
      type: "Video",
      category: "Advanced Features",
      thumbnail: "📈"
    }
  ];

  const learningPaths = [
    {
      title: "AI Solutions Mastery",
      description: "Complete learning path for AI services and solutions",
      duration: "2 hours",
      modules: 8,
      difficulty: "Beginner to Advanced",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Micro SAAS Development",
      description: "Build and deploy micro SAAS applications",
      duration: "3 hours",
      modules: 12,
      difficulty: "Intermediate to Advanced",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "5G Solutions Implementation",
      description: "Implement and manage 5G network solutions",
      duration: "2.5 hours",
      modules: 10,
      difficulty: "Intermediate",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "77+", label: "Tutorial Videos", icon: <Video className="w-6 h-6" /> },
    { number: "50k+", label: "Students", icon: <User className="w-6 h-6" /> },
    { number: "4.8", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "15+", label: "Hours of Content", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials & Learning Center - Master Our Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Learn how to use Zion Tech Group's AI and IT solutions with our comprehensive tutorials, video guides, and learning resources."
        />
        <meta
          name="keywords"
          content="tutorials, learning center, video guides, documentation, training, Zion Tech Group tutorials"
        />
        <link rel="canonical" href="https://ziontechgroup.com/tutorials" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Learning Center</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Tutorials &
              </span>
              <br />
              <span className="text-white">Learning Center</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master our AI and IT solutions with comprehensive tutorials, video guides, and hands-on learning experiences. 
              From beginner basics to advanced techniques, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="#featured"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Get Help
                <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Browse by Category
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find tutorials organized by topic and skill level
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorialCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400">{category.tutorialCount} tutorials</span>
                      <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        Explore
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Tutorials
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these popular and highly-rated tutorials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                    {tutorial.thumbnail}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">{tutorial.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Play className="w-4 h-4 mr-1" />
                        <span>{tutorial.views} views</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                        {tutorial.difficulty}
                      </span>
                      <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        Watch
                        <Play className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Learning Paths
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow structured learning paths to master specific skills and technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {path.icon}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {path.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                        <span>{path.modules} modules</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                        <span>{path.difficulty}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Start Learning Path
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GlobeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/support"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Support Center
                  <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;