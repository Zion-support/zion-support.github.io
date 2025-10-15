import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI: A Complete Beginner's Guide",
      description: "Learn the fundamentals of artificial intelligence and how to implement AI solutions in your business.",
      duration: "45 min",
      level: "Beginner",
      category: "AI",
      thumbnail: "/api/placeholder/400/225",
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      description: "Essential cybersecurity measures to protect your business from cyber threats and data breaches.",
      duration: "30 min",
      level: "Intermediate",
      category: "Cybersecurity",
      thumbnail: "/api/placeholder/400/225",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: Step-by-Step Guide",
      description: "Learn how to migrate your business to the cloud with minimal disruption and maximum benefits.",
      duration: "60 min",
      level: "Advanced",
      category: "Cloud Computing",
      thumbnail: "/api/placeholder/400/225",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      students: 650
    },
    {
      id: 4,
      title: "Building Micro SaaS Applications",
      description: "Complete guide to building and scaling micro SaaS applications that generate recurring revenue.",
      duration: "90 min",
      level: "Advanced",
      category: "Micro SaaS",
      thumbnail: "/api/placeholder/400/225",
      instructor: "Alex Thompson",
      rating: 4.8,
      students: 420
    },
    {
      id: 5,
      title: "5G Technology: Implementation and Benefits",
      description: "Understanding 5G technology and how to leverage it for your business applications.",
      duration: "40 min",
      level: "Intermediate",
      category: "5G",
      thumbnail: "/api/placeholder/400/225",
      instructor: "David Kim",
      rating: 4.6,
      students: 320
    },
    {
      id: 6,
      title: "Digital Transformation: A Strategic Approach",
      description: "Learn how to plan and execute a successful digital transformation for your organization.",
      duration: "75 min",
      level: "Advanced",
      category: "Digital Transformation",
      thumbnail: "/api/placeholder/400/225",
      instructor: "Lisa Wang",
      rating: 4.9,
      students: 580
    }
  ];

  const categories = ["All", "AI", "Cybersecurity", "Cloud Computing", "Micro SaaS", "5G", "Digital Transformation"];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn from our expert tutorials on AI, cybersecurity, cloud computing, and more. Free educational content to help you master technology." />
        <meta name="keywords" content="tutorials, AI learning, cybersecurity training, cloud computing, micro SaaS, 5G technology, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn from Experts
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials and courses. 
              Learn from industry experts and advance your career in AI and IT.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <h3 className="text-lg font-semibold text-white mr-4">Categories:</h3>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    category === "All" 
                      ? "bg-purple-600 text-white" 
                      : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <h3 className="text-lg font-semibold text-white mr-4">Level:</h3>
              {levels.map((level, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    level === "All" 
                      ? "bg-purple-600 text-white" 
                      : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:bg-slate-700 transition-colors">
                  <div className="h-48 bg-slate-700 flex items-center justify-center">
                    <PlayIcon className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tutorial.category}
                      </span>
                      <span className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tutorial.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tutorial.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UserIcon className="w-4 h-4" />
                          <span>{tutorial.students} students</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>★</span>
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      Instructor: {tutorial.instructor}
                    </div>
                    <Link 
                      to={`/tutorials/${tutorial.id}`}
                      className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                    >
                      Start Learning <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are advancing their careers with our expert tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View All Tutorials
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
