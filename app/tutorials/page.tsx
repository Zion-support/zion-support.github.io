import { ArrowRight, Play, Clock, Users, BookOpen, Code, Brain, Shield, Zap, Globe, Star, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Tutorials", count: 24 },
    { id: "ai", name: "AI & Machine Learning", count: 8 },
    { id: "web", name: "Web Development", count: 6 },
    { id: "mobile", name: "Mobile Development", count: 4 },
    { id: "cloud", name: "Cloud & DevOps", count: 6 }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Analytics Dashboard",
      description: "Learn how to set up and configure your AI analytics dashboard for maximum insights and performance.",
      category: "ai",
      duration: "45 min",
      difficulty: "Beginner",
      rating: 4.8,
      students: 1250,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/ai-analytics-tutorial.mp4",
      instructor: "Dr. Sarah Chen",
      tags: ["AI", "Analytics", "Dashboard", "Data Visualization"]
    },
    {
      id: 2,
      title: "Building Responsive Web Applications with React",
      description: "Master the fundamentals of React development and create stunning, responsive web applications.",
      category: "web",
      duration: "2h 30min",
      difficulty: "Intermediate",
      rating: 4.9,
      students: 2100,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/react-tutorial.mp4",
      instructor: "Mike Rodriguez",
      tags: ["React", "JavaScript", "Web Development", "Responsive Design"]
    },
    {
      id: 3,
      title: "AI-Powered Content Generation Workshop",
      description: "Discover how to leverage AI for creating high-quality content at scale for your business.",
      category: "ai",
      duration: "1h 15min",
      difficulty: "Beginner",
      rating: 4.7,
      students: 980,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/ai-content-tutorial.mp4",
      instructor: "Emily Watson",
      tags: ["AI", "Content Creation", "Marketing", "Automation"]
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile applications using React Native and modern development practices.",
      category: "mobile",
      duration: "3h 45min",
      difficulty: "Advanced",
      rating: 4.8,
      students: 1650,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/react-native-tutorial.mp4",
      instructor: "Alex Thompson",
      tags: ["React Native", "Mobile", "iOS", "Android"]
    },
    {
      id: 5,
      title: "Cloud Infrastructure Setup and Management",
      description: "Learn to design, deploy, and manage scalable cloud infrastructure on AWS and Azure.",
      category: "cloud",
      duration: "2h 15min",
      difficulty: "Intermediate",
      rating: 4.6,
      students: 1420,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/cloud-infrastructure-tutorial.mp4",
      instructor: "David Park",
      tags: ["AWS", "Azure", "Cloud", "DevOps", "Infrastructure"]
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices for Developers",
      description: "Essential security practices every developer should know to build secure applications.",
      category: "web",
      duration: "1h 30min",
      difficulty: "Intermediate",
      rating: 4.9,
      students: 1890,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/cybersecurity-tutorial.mp4",
      instructor: "Lisa Chen",
      tags: ["Security", "Best Practices", "Web Security", "Authentication"]
    },
    {
      id: 7,
      title: "Machine Learning Model Deployment",
      description: "Deploy machine learning models to production with MLOps best practices and monitoring.",
      category: "ai",
      duration: "2h 00min",
      difficulty: "Advanced",
      rating: 4.7,
      students: 1100,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/ml-deployment-tutorial.mp4",
      instructor: "Dr. James Wilson",
      tags: ["Machine Learning", "MLOps", "Deployment", "Production"]
    },
    {
      id: 8,
      title: "5G Network Implementation Guide",
      description: "Complete guide to implementing 5G networks for IoT and edge computing applications.",
      category: "cloud",
      duration: "1h 45min",
      difficulty: "Advanced",
      rating: 4.8,
      students: 750,
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "/api/placeholder/video/5g-implementation-tutorial.mp4",
      instructor: "Maria Garcia",
      tags: ["5G", "IoT", "Edge Computing", "Networking"]
    }
  ];

  const filteredTutorials = selectedCategory === "all" 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const stats = [
    { number: "24+", label: "Tutorials", icon: <Play className="w-6 h-6" /> },
    { number: "12K+", label: "Students", icon: <Users className="w-6 h-6" /> },
    { number: "4.8", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Hours of Content", icon: <Clock className="w-6 h-6" /> }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "from-green-500 to-emerald-500";
      case "Intermediate": return "from-yellow-500 to-orange-500";
      case "Advanced": return "from-red-500 to-pink-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learning Resources & Guides</title>
        <meta
          name="description"
          content="Learn from our comprehensive tutorial library covering AI, web development, mobile apps, cloud computing, and more. Expert-led courses for all skill levels."
        />
        <meta
          name="keywords"
          content="tutorials, learning, courses, AI tutorials, web development, mobile development, cloud computing, Zion Tech Group"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Center
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the latest technologies with our comprehensive tutorial library. 
              From AI and machine learning to web development and cloud computing.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-white font-medium">Tutorial Video</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getDifficultyColor(tutorial.difficulty)} text-white`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.category.toUpperCase()}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">{tutorial.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {tutorial.students.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        By {tutorial.instructor}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105">
                        Start Learning
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students already learning with our expert-led tutorials and hands-on projects.
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
                  <MapPin className="w-6 h-6 text-white" />
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
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Request Custom Training
                <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
