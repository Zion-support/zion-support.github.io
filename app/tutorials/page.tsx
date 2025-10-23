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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">>{/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" loading="lazy">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" loading="lazy"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" loading="lazy">Learn{" "}</h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Master technology skills with our comprehensive tutorials. Learn</p>
              AI development, cloud computing, cybersecurity, and more with
              expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300" loading="lazy" aria-label="Action button">Start Learning</button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" loading="lazy" aria-label="Action button">Browse All</button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="flex flex-wrap justify-center gap-4" loading="lazy">{categories.map((category) => (</div>
                <button
                  key={category.id}
                  onClick={() = aria-label="Action button">setSelectedCategory(category.id)}</button>
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
        <section className="py-20 px-4" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" loading="lazy">{filteredTutorials.map((tutorial) => (</div>
                <div
                  key={tutorial.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                    tutorial.featured ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 flex items-center justify-center" loading="lazy">
                    <div className="text-6xl" loading="lazy">{tutorial.icon === Code</div>
                        ? "💻"
                        : tutorial.icon === Database
                          ? "☁️"
                          : "🔒"}
                    </div>
                  </div>

                  <div className="p-6" loading="lazy">
                    <div className="flex items-center gap-4 mb-4" loading="lazy">
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm" loading="lazy">{tutorial.category.toUpperCase()}</span>
                      {tutorial.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm" loading="lazy">Featured</span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3" loading="lazy">{tutorial.title}</h3>h3>
                    <p className="text-gray-300 mb-4" loading="lazy">{tutorial.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4" loading="lazy">
                      <div className="flex items-center gap-4" loading="lazy">
                        <div className="flex items-center gap-1" loading="lazy">
                          <Clock className="w-4 h-4" loading="lazy" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1" loading="lazy">
                          <User className="w-4 h-4" loading="lazy" />
                          <span>{tutorial.students} students</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1" loading="lazy">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" loading="lazy" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between" loading="lazy">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          tutorial.difficulty === "Beginner"
                            ? "bg-green-500/20 text-green-400"
                            : tutorial.difficulty === "Intermediate"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >{tutorial.difficulty}</span>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors" loading="lazy" aria-label="Action button">
                        <Play className="w-4 h-4 mr-2" loading="lazy" />
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
        <section className="py-20 px-4 bg-white/5" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Learning Paths</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Follow structured learning paths to master specific technology</p>
                domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6" loading="lazy">
                  <BookOpen className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4" loading="lazy">AI Developer Path</h3>h3>
                <p className="text-gray-300 mb-4" loading="lazy">Complete journey from AI basics to advanced machine learning</p>
                  applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400" loading="lazy">
                  <li>• 12 tutorials</li>
                  <li>• 20 hours of content</li>
                  <li>• 5 hands-on projects</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6" loading="lazy">
                  <Database className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4" loading="lazy">Cloud Architect Path</h3>h3>
                <p className="text-gray-300 mb-4" loading="lazy">Master cloud infrastructure design and deployment across major</p>
                  platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400" loading="lazy">
                  <li>• 15 tutorials</li>
                  <li>• 25 hours of content</li>
                  <li>• 8 practical labs</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6" loading="lazy">
                  <Shield className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4" loading="lazy">Security Expert Path</h3>h3>
                <p className="text-gray-300 mb-4" loading="lazy">Learn cybersecurity fundamentals and advanced threat</p>
                  protection techniques.
                </p>
                <ul className="space-y-2 text-sm text-gray-400" loading="lazy">
                  <li>• 10 tutorials</li>
                  <li>• 18 hours of content</li>
                  <li>• 6 security labs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8" loading="lazy">Join thousands of learners who are advancing their careers with</p>
              our technology tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">Browse All Tutorials</button>
                <ArrowRight className="w-5 h-5 ml-2" loading="lazy" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300" loading="lazy" aria-label="Action button">View Learning Paths</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


