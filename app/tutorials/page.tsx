<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Clock,
  User,
  Star,
  Play,
  BookOpen,
  Code,
  Database,
  Shield,
} from "lucide-react";
=======
import React from "react";
import SEOHead from "../components/SEOHead";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const tutorials = [
    {
<<<<<<< HEAD
      id: 1,
      title: "Getting Started with AI Development",
      description:
        "Learn the fundamentals of AI development and machine learning from scratch.",
      category: "ai",
      icon: Code,
      duration: "2 hours",
      difficulty: "Beginner",
      rating: 4.8,
      students: "1,250",
      featured: true,
    },
    {
      id: 2,
      title: "Cloud Infrastructure Setup",
      description:
        "Complete guide to setting up scalable cloud infrastructure on AWS, Azure, and GCP.",
      category: "cloud",
      icon: Database,
      duration: "3 hours",
      difficulty: "Intermediate",
      rating: 4.6,
      students: "890",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      description:
        "Essential cybersecurity practices to protect your applications and data.",
      category: "security",
      icon: Shield,
      duration: "1.5 hours",
      difficulty: "Beginner",
      rating: 4.9,
      students: "1,100",
      featured: false,
    },
    {
      id: 4,
      title: "Building REST APIs with Node.js",
      description:
        "Step-by-step guide to building robust REST APIs using Node.js and Express.",
      category: "development",
      icon: Code,
      duration: "4 hours",
      difficulty: "Intermediate",
      rating: 4.7,
      students: "2,100",
      featured: true,
    },
=======
      title: "Getting Started with AI Solutions",
      description: "Learn the basics of implementing AI in your business",
      duration: "15 min",
      level: "Beginner",
      category: "AI Basics",
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Step-by-step guide to setting up cloud infrastructure",
      duration: "30 min",
      level: "Intermediate",
      category: "Cloud Computing",
    },
    {
      title: "Data Analytics Best Practices",
      description: "How to effectively analyze and visualize your data",
      duration: "25 min",
      level: "Intermediate",
      category: "Data Science",
    },
    {
      title: "API Development Fundamentals",
      description: "Build robust APIs for your applications",
      duration: "45 min",
      level: "Advanced",
      category: "Development",
    },
    {
      title: "Cybersecurity Essentials",
      description: "Protect your business from cyber threats",
      duration: "20 min",
      level: "Beginner",
      category: "Security",
    },
    {
      title: "Digital Transformation Strategy",
      description: "Plan and execute your digital transformation",
      duration: "60 min",
      level: "Advanced",
      category: "Strategy",
    },
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  ];

  const categories = [
    { id: "all", name: "All Tutorials" },
    { id: "ai", name: "AI & ML" },
    { id: "cloud", name: "Cloud" },
    { id: "security", name: "Security" },
    { id: "development", name: "Development" },
  ];

  const filteredTutorials =
    selectedCategory === "all"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === selectedCategory);

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Tutorials - Zion Tech Group | Learn Technology Skills</title>
        <meta
          name="description"
          content="Master technology skills with our comprehensive tutorials. Learn AI development, cloud computing, cybersecurity, and more with expert-led courses."
        />
        <meta
          name="keywords"
          content="tutorials, technology courses, AI development, cloud computing, cybersecurity, programming, learning"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master technology skills with our comprehensive tutorials. Learn
              AI development, cloud computing, cybersecurity, and more with
              expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Learning
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Browse All
              </button>
=======
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn AI and IT solutions with our comprehensive tutorials and guides. From beginner to advanced levels."
        keywords="AI tutorials, IT tutorials, cloud computing, data analytics, API development, cybersecurity"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorials & Learning Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI and IT solutions with our comprehensive tutorials,
              guides, and hands-on learning materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {tutorial.duration}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 mb-4">{tutorial.description}</p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded ${
                      tutorial.level === "Beginner"
                        ? "bg-green-600 text-white"
                        : tutorial.level === "Intermediate"
                          ? "bg-yellow-600 text-white"
                          : "bg-red-600 text-white"
                    }`}
                  >
                    {tutorial.level}
                  </span>
                  <button className="text-purple-400 hover:text-purple-300 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact our team for personalized training and consultation
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-purple-600 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Request Custom Training
              </a>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                    tutorial.featured ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-6xl">
                      {tutorial.icon === Code
                        ? "💻"
                        : tutorial.icon === Database
                          ? "☁️"
                          : "🔒"}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {tutorial.category.toUpperCase()}
                      </span>
                      {tutorial.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{tutorial.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{tutorial.students} students</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          tutorial.difficulty === "Beginner"
                            ? "bg-green-500/20 text-green-400"
                            : tutorial.difficulty === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {tutorial.difficulty}
                      </span>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Play className="w-4 h-4 mr-2" />
                        Start Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learning Paths
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow structured learning paths to master specific technology
                domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  AI Developer Path
                </h3>
                <p className="text-gray-300 mb-4">
                  Complete journey from AI basics to advanced machine learning
                  applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 12 tutorials</li>
                  <li>• 20 hours of content</li>
                  <li>• 5 hands-on projects</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Cloud Architect Path
                </h3>
                <p className="text-gray-300 mb-4">
                  Master cloud infrastructure design and deployment across major
                  platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 15 tutorials</li>
                  <li>• 25 hours of content</li>
                  <li>• 8 practical labs</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Security Expert Path
                </h3>
                <p className="text-gray-300 mb-4">
                  Learn cybersecurity fundamentals and advanced threat
                  protection techniques.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 10 tutorials</li>
                  <li>• 18 hours of content</li>
                  <li>• 6 security labs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are advancing their careers with
              our technology tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Browse All Tutorials
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Learning Paths
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
