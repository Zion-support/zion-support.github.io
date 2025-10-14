'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: "Getting Started with AI Solutions",
      description: "Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.",
      duration: "2 hours",
      level: "Beginner",
      category: "AI",
      icon: CpuChipIcon,
      rating: 4.8,
      students: 1250
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Complete guide to setting up and managing cloud infrastructure for modern applications.",
      duration: "3 hours",
      level: "Intermediate",
      category: "Cloud",
      icon: CloudIcon,
      rating: 4.9,
      students: 980
    },
    {
      title: "Micro SaaS Development",
      description: "Build and deploy micro SaaS applications from scratch using modern technologies.",
      duration: "4 hours",
      level: "Advanced",
      category: "Development",
      icon: CodeBracketIcon,
      rating: 4.7,
      students: 750
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Essential cybersecurity practices to protect your business and data from threats.",
      duration: "1.5 hours",
      level: "Beginner",
      category: "Security",
      icon: CpuChipIcon,
      rating: 4.6,
      students: 1100
    },
    {
      title: "Data Analytics with AI",
      description: "Advanced data analytics techniques using artificial intelligence and machine learning.",
      duration: "3.5 hours",
      level: "Advanced",
      category: "Analytics",
      icon: CpuChipIcon,
      rating: 4.8,
      students: 650
    },
    {
      title: "Digital Transformation Strategy",
      description: "Strategic approach to digital transformation and modernizing business processes.",
      duration: "2.5 hours",
      level: "Intermediate",
      category: "Strategy",
      icon: BookOpenIcon,
      rating: 4.7,
      students: 890
    }
  ];

  const categories = ["All", "AI", "Cloud", "Development", "Security", "Analytics", "Strategy"];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our comprehensive tutorials on AI, cloud computing, cybersecurity, and digital transformation. Expert-led courses for all skill levels." />
        <meta name="keywords" content="tutorials, courses, learning, AI, cloud computing, cybersecurity, digital transformation, training" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Tutorials & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Learn from Industry Experts
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and courses. 
              From AI and cloud computing to cybersecurity and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="#tutorials" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                <PlayIcon className="w-5 h-5" />
                Start Learning
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                <AcademicCapIcon className="w-5 h-5" />
                Custom Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section id="tutorials" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tutorials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert-led courses designed to advance your skills and career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => {
              const Icon = tutorial.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                    <span className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded ml-2">
                      {tutorial.level}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{tutorial.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <UserGroupIcon className="w-4 h-4" />
                        {tutorial.students} students
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{tutorial.rating}</span>
                    </div>
                  </div>
                  
                  <Link to="/contact" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                    Enroll Now <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Advance Your Skills?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have enhanced their careers with our expert-led tutorials and courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <AcademicCapIcon className="w-5 h-5" />
              Get Started Today
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <DocumentTextIcon className="w-5 h-5" />
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorialsPage;
