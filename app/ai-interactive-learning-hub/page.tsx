import React from 'react';
import { Metadata } from 'next';
import { Play, BookOpen, Users, Award, Clock, CheckCircle, ArrowRight, Brain, Code, Database, Zap, Shield, Globe, Target, Lightbulb, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Interactive Learning Hub | Zion Tech Group',
  description: 'Master AI technologies through interactive tutorials, hands-on projects, and comprehensive learning modules. Start your AI journey today.',
  keywords: 'AI learning, machine learning tutorial, AI education, interactive learning, AI courses, technology training',
  openGraph: {
    title: 'AI Interactive Learning Hub',
    description: 'Master AI technologies through interactive tutorials and hands-on projects',
    type: 'website',
  },
};

const AILearningHub = () => {
  const learningPaths = [
    {
      title: "AI Fundamentals",
      level: "Beginner",
      duration: "4 weeks",
      students: "12,500+",
      rating: 4.9,
      description: "Master the basics of artificial intelligence and machine learning",
      modules: [
        "Introduction to AI and ML",
        "Python for Data Science",
        "Data Preprocessing",
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks Basics"
      ],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Advanced AI Development",
      level: "Intermediate",
      duration: "8 weeks",
      students: "8,200+",
      rating: 4.8,
      description: "Build sophisticated AI applications and systems",
      modules: [
        "Deep Learning Architectures",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Model Deployment",
        "Performance Optimization"
      ],
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI for Business",
      level: "All Levels",
      duration: "6 weeks",
      students: "15,300+",
      rating: 4.9,
      description: "Apply AI solutions to real business challenges",
      modules: [
        "AI Strategy & Planning",
        "Data-Driven Decision Making",
        "AI Implementation",
        "ROI Measurement",
        "Change Management",
        "Ethical AI Practices"
      ],
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum AI Mastery",
      level: "Advanced",
      duration: "12 weeks",
      students: "2,100+",
      rating: 4.9,
      description: "Explore the cutting-edge intersection of quantum computing and AI",
      modules: [
        "Quantum Computing Basics",
        "Quantum Machine Learning",
        "Quantum Neural Networks",
        "Quantum Optimization",
        "Quantum Cryptography",
        "Future Quantum AI"
      ],
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const tutorials = [
    {
      title: "Building Your First AI Chatbot",
      duration: "2 hours",
      difficulty: "Beginner",
      type: "Tutorial",
      description: "Create an intelligent chatbot using modern NLP techniques",
      thumbnail: "/api/placeholder/400/250",
      views: "45,200",
      rating: 4.8
    },
    {
      title: "Computer Vision with OpenCV",
      duration: "3 hours",
      difficulty: "Intermediate",
      type: "Hands-on",
      description: "Learn image processing and object detection",
      thumbnail: "/api/placeholder/400/250",
      views: "32,100",
      rating: 4.7
    },
    {
      title: "Neural Network from Scratch",
      duration: "4 hours",
      difficulty: "Advanced",
      type: "Deep Dive",
      description: "Build a neural network without frameworks",
      thumbnail: "/api/placeholder/400/250",
      views: "28,500",
      rating: 4.9
    },
    {
      title: "AI Model Deployment",
      duration: "2.5 hours",
      difficulty: "Intermediate",
      type: "Practical",
      description: "Deploy AI models to production environments",
      thumbnail: "/api/placeholder/400/250",
      views: "38,900",
      rating: 4.6
    }
  ];

  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Build a movie recommendation engine using collaborative filtering",
      difficulty: "Intermediate",
      duration: "1 week",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
      participants: "2,400+",
      icon: Database
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "Analyze social media sentiment in real-time",
      difficulty: "Advanced",
      duration: "2 weeks",
      technologies: ["Python", "TensorFlow", "Twitter API", "Redis"],
      participants: "1,800+",
      icon: Globe
    },
    {
      title: "AI Security Scanner",
      description: "Develop an AI system to detect security vulnerabilities",
      difficulty: "Expert",
      duration: "3 weeks",
      technologies: ["Python", "PyTorch", "Docker", "Kubernetes"],
      participants: "950+",
      icon: Shield
    }
  ];

  const achievements = [
    { title: "AI Fundamentals Certified", count: "15,200+", icon: Award },
    { title: "Advanced AI Developer", count: "8,500+", icon: Star },
    { title: "Quantum AI Specialist", count: "1,200+", icon: Lightbulb },
    { title: "AI Business Leader", count: "5,800+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">
              <BookOpen className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Interactive Learning Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Master AI Through
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Interactive Learning
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn AI technologies through hands-on projects, interactive tutorials, 
              and comprehensive courses designed by industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${path.color} rounded-lg flex items-center justify-center mr-4`}>
                      <path.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{path.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-400">{path.level}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{path.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">{path.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{path.students} students</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{path.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Modules:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {path.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className={`w-full py-3 bg-gradient-to-r ${path.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tutorials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interactive Tutorials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn by doing with hands-on tutorials and real-world projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/60" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {tutorial.type}
                    </span>
                    <span className="text-xs text-gray-400">{tutorial.difficulty}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {tutorial.rating}
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">{tutorial.views} views</div>
                  
                  <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
                    Start Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-on Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hands-on Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Apply your knowledge with real-world projects and build your portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-400">{project.difficulty}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-blue-300 text-sm">{project.participants} participants</span>
                  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
                    Join Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your progress and earn certifications as you master AI technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.count}</div>
                <div className="text-gray-400">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your AI Learning Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners already mastering AI technologies with our interactive platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILearningHub;