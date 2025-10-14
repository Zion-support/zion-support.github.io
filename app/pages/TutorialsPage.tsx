import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AcademicCapIcon,
  PlayIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon
 } from "@heroicons/react/24/outline";

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Solutions",
      description: "Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.",
      duration: "2 hours",
      level: "Beginner",
      category: "AI Solutions",
      href: "/tutorials/ai-fundamentals",
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices",
      description: "Essential cybersecurity practices to protect your business from threats and vulnerabilities.",
      duration: "3 hours",
      level: "Intermediate",
      category: "Cybersecurity",
      href: "/tutorials/cybersecurity-basics",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Setup",
      description: "Step-by-step guide to setting up and managing cloud infrastructure for your business.",
      duration: "4 hours",
      level: "Advanced",
      category: "Cloud Computing",
      href: "/tutorials/cloud-setup",
    },
    {
      id: 4,
      title: "5G Technology Implementation",
      description: "Understanding and implementing 5G technology solutions for modern businesses.",
      duration: "2.5 hours",
      level: "Intermediate",
      category: "5G Solutions",
      href: "/tutorials/5g-implementation",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Comprehensive tutorials and guides for AI, cybersecurity, cloud computing, and digital transformation technologies." />
        <meta name="keywords" content="tutorials, AI learning, cybersecurity training, cloud computing guides, 5G technology" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Tutorials & Learning
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Master the latest technologies with our comprehensive tutorials and guides.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <AcademicCapIcon className="w-6 h-6 text-purple-400" />
                      <span className="text-sm text-purple-400 font-medium">{tutorial.category}</span>
                    </div>
                    <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded">{tutorial.level}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <UserGroupIcon className="w-4 h-4" />
                      <span>Self-paced</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={tutorial.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Start Learning
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;