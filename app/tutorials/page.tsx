import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Play, 
  Clock, 
  User, 
  Star, 
  BookOpen, 
  Code, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud,
  Filter,
  Search
} from "lucide-react";

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Tutorials", icon: <BookOpen className="w-4 h-4" /> },
    { id: "ai", name: "AI & Machine Learning", icon: <Brain className="w-4 h-4" /> },
    { id: "cybersecurity", name: "Cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud Computing", icon: <Cloud className="w-4 h-4" /> },
    { id: "analytics", name: "Data Analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "development", name: "Development", icon: <Code className="w-4 h-4" /> },
    { id: "5g", name: "5G Technology", icon: <Zap className="w-4 h-4" /> }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Analytics",
      description: "Learn how to set up and use our AI analytics platform to gain insights from your data.",
      category: "ai",
      duration: "15 min",
      difficulty: "Beginner",
      author: "Zion Tech Group",
      rating: 4.8,
      views: 1250,
      thumbnail: "/api/placeholder/400/250",
      tags: ["AI", "Analytics", "Data Science", "Machine Learning"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices",
      description: "Essential cybersecurity practices to protect your business from threats and vulnerabilities.",
      category: "cybersecurity",
      duration: "25 min",
      difficulty: "Intermediate",
      author: "Zion Tech Group",
      rating: 4.9,
      views: 2100,
      thumbnail: "/api/placeholder/400/250",
      tags: ["Security", "Best Practices", "Threat Protection", "Compliance"]
    },
    {
      id: 3,
      title: "Cloud Migration Strategies",
      description: "Step-by-step guide to migrating your infrastructure to the cloud efficiently and securely.",
      category: "cloud",
      duration: "30 min",
      difficulty: "Advanced",
      author: "Zion Tech Group",
      rating: 4.7,
      views: 1800,
      thumbnail: "/api/placeholder/400/250",
      tags: ["Cloud", "Migration", "Infrastructure", "AWS", "Azure"]
    },
    {
      id: 4,
      title: "Building AI-Powered Chatbots",
      description: "Create intelligent chatbots using our AI platform for customer support and engagement.",
      category: "ai",
      duration: "20 min",
      difficulty: "Intermediate",
      author: "Zion Tech Group",
      rating: 4.6,
      views: 1650,
      thumbnail: "/api/placeholder/400/250",
      tags: ["AI", "Chatbots", "NLP", "Customer Support"]
    },
    {
      id: 5,
      title: "5G Network Implementation",
      description: "Complete guide to implementing 5G networks for businesses and smart cities.",
      category: "5g",
      duration: "35 min",
      difficulty: "Advanced",
      author: "Zion Tech Group",
      rating: 4.8,
      views: 950,
      thumbnail: "/api/placeholder/400/250",
      tags: ["5G", "Networking", "IoT", "Smart Cities"]
    },
    {
      id: 6,
      title: "Data Visualization with AI",
      description: "Learn to create compelling data visualizations using AI-powered tools and techniques.",
      category: "analytics",
      duration: "18 min",
      difficulty: "Intermediate",
      author: "Zion Tech Group",
      rating: 4.5,
      views: 1400,
      thumbnail: "/api/placeholder/400/250",
      tags: ["Data Visualization", "AI", "Analytics", "Charts"]
    },
    {
      id: 7,
      title: "Micro SAAS Development",
      description: "Build and deploy micro SAAS applications using our development platform.",
      category: "development",
      duration: "40 min",
      difficulty: "Advanced",
      author: "Zion Tech Group",
      rating: 4.7,
      views: 1200,
      thumbnail: "/api/placeholder/400/250",
      tags: ["SAAS", "Development", "APIs", "Deployment"]
    },
    {
      id: 8,
      title: "AI Content Generation",
      description: "Master AI-powered content creation for marketing, blogs, and social media.",
      category: "ai",
      duration: "22 min",
      difficulty: "Beginner",
      author: "Zion Tech Group",
      rating: 4.4,
      views: 1900,
      thumbnail: "/api/placeholder/400/250",
      tags: ["AI", "Content Creation", "Marketing", "SEO"]
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400 bg-green-400/20";
      case "Intermediate": return "text-yellow-400 bg-yellow-400/20";
      case "Advanced": return "text-red-400 bg-red-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn AI & Technology</title>
        <meta
          name="description"
          content="Learn AI, cybersecurity, cloud computing, and 5G technology with our comprehensive tutorials. Expert-led courses for all skill levels."
        />
        <meta
          name="keywords"
          content="tutorials, AI learning, cybersecurity training, cloud computing, 5G technology, data analytics, programming courses"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Learn with Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Tutorials
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Master the latest technologies with our comprehensive tutorials. From AI and cybersecurity to cloud computing and 5G, 
              learn from industry experts at your own pace.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Tutorials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative">
                    <Play className="w-16 h-16 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {tutorial.author}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-300">{tutorial.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                      {tutorial.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                          +{tutorial.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{tutorial.views} views</span>
                      <Link
                        to={`/tutorials/${tutorial.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        Start Tutorial
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No tutorials found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are already advancing their skills with our tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}