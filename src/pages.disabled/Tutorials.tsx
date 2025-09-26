import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Play, Clock, Star, Users, BookOpen, Video, Code, Brain, Shield, Database, Globe, Zap, ArrowRight, Filter, TrendingUp, Lightbulb, Target, Award, Eye, MessageCircle, Type, BarChart3, Settings, Rocket, Heart, Download, Share2 } from "lucide-react"
const Tutorials = () => {;
  const tutorialCategories = [;
    {;
      title: "Beginner",description: "Perfect for those new to AI and technology",color: "from-green-500 to-emerald-500",count: "12"
    };
    {;
      title: "Intermediate",description: "For users with some experience",color: "from-yellow-500 to-orange-500",count: "18"
    };
    {;
      title: "Advanced",description: "Complex topics for experienced users",color: "from-red-500 to-pink-500",count: "8"
    };
    {;
      title: "Expert",description: "Cutting-edge research and techniques",color: "from-purple-500 to-indigo-500",count: "5"
    };
  ];
  const featuredTutorials = [;
    {;
      title: "AI Autonomous Research Assistant Implementation",description: "Learn to implement and configure AI Autonomous Research Assistant systems for enterprise research and intelligence gathering.",category: "Advanced",duration: "75 min",instructor: "Dr. Sarah Chen",rating: 4.9,students: "1.2k",thumbnail: "/images/tutorials/ai-autonomous-research.jpg"
    };
    {;
      title: "AI Supply Chain Optimization Setup",description: "Master the implementation of AI-powered supply chain optimization solutions for cost reduction and efficiency improvement.",category: "Expert",duration: "90 min",instructor: "Michael Rodriguez",rating: 4.8,students: "856",thumbnail: "/images/tutorials/ai-supply-chain.jpg"
    };
    {;
      title: "Building Your First AI Chatbot",description: "Learn to create a conversational AI chatbot using our platform. This comprehensive tutorial covers everything from data preparation to deployment.",category: "Beginner",duration: "45 min",instructor: "Dr. Sarah Chen",rating: 4.8,students: "2.3k",thumbnail: "/images/tutorials/ai-chatbot.jpg"
    };
    {;
      title: "Quantum Neural Network Implementation",description: "Dive deep into quantum computing and implement neural networks that leverage quantum properties for enhanced performance.",category: "Advanced",duration: "90 min",instructor: "Michael Rodriguez",rating: 4.9,students: "856",thumbnail: "/images/tutorials/quantum-neural.jpg"
    };
    {;
      title: "Cybersecurity Best Practices",description: "Master essential cybersecurity concepts and implement robust security measures to protect your applications and data.",category: "Intermediate",duration: "60 min",instructor: "James Wilson",rating: 4.7,students: "1.5k",thumbnail: "/images/tutorials/cybersecurity.jpg"
    };
    {;
      title: "AI Model Optimization",description: "Learn advanced techniques to optimize your AI models for better performance, faster inference, and reduced resource consumption.",;
      category: "Expert",duration: "75 min",instructor: "Dr. Emily Watson",rating: 4.6,students: "623",thumbnail: "/images/tutorials/model-optimization.jpg"
    };
  ];
  const recentTutorials = [;
    {;
      title: "Data Pipeline Automation",category: "Intermediate",duration: "40 min",instructor: "David Kim",rating: 4.5,students: "432"
    };
    {;
      title: "Cloud Infrastructure Setup",category: "Beginner",duration: "35 min",instructor: "Lisa Thompson",rating: 4.4,students: "789"
    };
    {;
      title: "API Integration Patterns",category: "Intermediate",duration: "50 min",instructor: "Dr. Sarah Chen",rating: 4.6,students: "567"
    };
    {;
      title: "Machine Learning Model Deployment",category: "Advanced",duration: "65 min",instructor: "Michael Rodriguez",rating: 4.7,students: "345"
    };
  ];
  const learningPaths = [;
    {;
      title: "AI Developer Path",description: "Complete path from beginner to AI expert",courses: 8,duration: "12 weeks",level: "Beginner to Expert"
    };
    {;
      title: "Cybersecurity Specialist",description: "Master security and compliance",courses: 6,duration: "8 weeks",level: "Intermediate to Expert"
    };
    {;
      title: "Quantum Computing Engineer",description: "Learn quantum algorithms and applications",courses: 5,duration: "10 weeks",level: "Advanced to Expert"
    };
  ];
  return (
    <div className="min-h-screen bg-futuristic">;
      {/* Hero Section */};
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">;
        <div className="absolute inset-0 opacity-10">;
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></[^>]*>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></[^>]*>
        </[^>]*>

        <div className="container mx-auto px-4 text-center relative z-10">;
          <div className="flex justify-center mb-8">;
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">;
              <[^>]*/>
            </[^>]*>
          </[^>]*>

          <h1 className="text-6xl md: text-7xl font-bold text-white mb-8 leading-tight">;
            Interactive{' '};
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Tutorials;
            </[^>]*>
          </[^>]*>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">;
            Master cutting-edge technologies with our comprehensive tutorials;
            hands-on projects, and expert-led learning paths.;
          </[^>]*>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">;
              Start Learning;
            </[^>]*>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
              Browse Tutorials;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Tutorials */};
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Featured Tutorials;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Start your learning journey with our most popular and highly-rated tutorials;
              covering the latest in AI, cybersecurity, and emerging technologies.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {featuredTutorials.map((tutorial, index) => (;
              <div;
                key={index};
                className="[^"]*"
              >;
                {/* Tutorial Image Placeholder */};
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>

                <div className="p-6">;
                  {/* Category Badge */};
                  <div className="mb-4">;
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">;
                      {tutorial.category};
                    </[^>]*>
                  </[^>]*>

                  {/* Title */};
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">;
                    {tutorial.title};
                  </[^>]*>

                  {/* Description */};
                  <p className="text-zion-slate-light mb-4 leading-relaxed">;
                    {tutorial.description};
                  </[^>]*>

                  {/* Tutorial Details */};
                  <div className="space-y-2 mb-6">;
                    <div className="flex items-center text-zion-slate-light text-sm">;
                      <[^>]*/>
                      {tutorial.instructor};
                    </[^>]*>
                    <div className="flex items-center text-zion-cyan text-sm">;
                      <[^>]*/>
                      {tutorial.duration};
                    </[^>]*>
                    <div className="flex items-center text-zion-slate-light text-sm">;
                      <[^>]*/>
                      {tutorial.students} students;
                    </[^>]*>
                  </[^>]*>

                  {/* Rating */};
                  <div className="flex items-center justify-between mb-6">;
                    <div className="flex items-center text-zion-cyan text-sm">;
                      <[^>]*/>
                      {tutorial.rating};
                    </[^>]*>
                    <button className="text-zion-cyan hover:text-white transition-colors duration-300">;
                      Start Learning;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Learning Paths */};
      <section className="py-20 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Learning Paths;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Follow structured learning paths designed to take you from beginner;
              to expert in your chosen technology domain.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {learningPaths.map((path, index) => (;
              <div;
                key={index};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">;
                  <[^>]*/>
                </[^>]*>

                <h3 className="text-2xl font-bold text-white mb-4">{path.title}</[^>]*>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{path.description}</[^>]*>

                <div className="space-y-2 mb-6 text-zion-slate-light">;
                  <div className="flex items-center justify-center gap-2">;
                    <[^>]*/>
                    {path.courses} courses;
                  </[^>]*>
                  <div className="flex items-center justify-center gap-2">;
                    <[^>]*/>
                    {path.duration};
                  </[^>]*>
                  <div className="flex items-center justify-center gap-2">;
                    <[^>]*/>
                    {path.level};
                  </[^>]*>
                </[^>]*>

                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">;
                  Start Path;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
            Ready to Start Learning?;
          </[^>]*>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
            Join thousands of learners who are already mastering cutting-edge technologies;
            with our comprehensive tutorial library and expert-led courses.;
          </[^>]*>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">;
              Get Started Today;
            </[^>]*>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
              Contact Us;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

export default Tutorials;