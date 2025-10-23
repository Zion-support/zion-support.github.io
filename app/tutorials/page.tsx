"use client";
import React, { useState } from "react";
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

const TutorialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const tutorials = [
    {
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
              <span>Technology
              </span>
            </h1>
            <p>Master technology skills with our comprehensive tutorials. Learn
              AI development, cloud computing, cybersecurity, and more with
              expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>Start Learning
              </button>
              <button>Browse All
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button>setSelectedCategory(category.id)}
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
                    <div>{tutorial.icon === Code
                        ? "💻"
                        : tutorial.icon === Database
                          ? "☁️"
                          : "🔒"}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span>{tutorial.category.toUpperCase()}
                      </span>
                      {tutorial.featured && (
                        <span>Featured
                        </span>
                      )}
                    </div>

                    <h3>{tutorial.title}
                    </h3>
                    <p>{tutorial.description}</p>

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
                      <span>{tutorial.difficulty}
                      </span>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <Play>Start Tutorial
                      </Play>button>
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
              <h2>Learning Paths
              </h2>
              <p>Follow structured learning paths to master specific technology
                domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen> </BookOpen>div>
                <h3>AI Developer Path
                </h3>
                <p>Complete journey from AI basics to advanced machine learning
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
                  <Database> </Database>div>
                <h3>Cloud Architect Path
                </h3>
                <p>Master cloud infrastructure design and deployment across major
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
                  <Shield> </Shield>div>
                <h3>Security Expert Path
                </h3>
                <p>Learn cybersecurity fundamentals and advanced threat
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
            <h2>Ready to Start Learning?
            </h2>
            <p>Join thousands of learners who are advancing their careers with
              our technology tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Browse All Tutorials
                <ArrowRight> </ArrowRight>button>
              <button>View Learning Paths
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
