import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI: A Beginner's Guide",
      description: "Learn the fundamentals of artificial intelligence and how to implement basic AI solutions in your business.",
      category: "AI Basics",
      duration: "45 min",
      difficulty: "Beginner",
      author: "Dr. Sarah Johnson",
      image: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices",
      description: "Step-by-step guide to migrating your infrastructure to the cloud safely and efficiently.",
      category: "Cloud Computing",
      duration: "60 min",
      difficulty: "Intermediate",
      author: "Michael Chen",
      image: "☁️",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      description: "Essential cybersecurity practices every business should implement to protect their data.",
      category: "Security",
      duration: "30 min",
      difficulty: "Beginner",
      author: "Emily Rodriguez",
      image: "🔒",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Web Applications",
      description: "Learn how to create web applications that can handle growth and scale with your business.",
      category: "Development",
      duration: "90 min",
      difficulty: "Advanced",
      author: "David Kim",
      image: "💻",
      featured: false
    }
  ];

  const categories = ["All", "AI Basics", "Cloud Computing", "Security", "Development"];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI, IT, and technology with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, AI learning, IT guides, technology education, online courses" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Learn AI, IT, and technology with our comprehensive tutorials and guides
            </p>
          </div>
        </section>

        {/* Featured Tutorial */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Tutorial</h2>
            {(() => {
              const featuredTutorial = tutorials.find(tutorial => tutorial.featured);
              return featuredTutorial ? (
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="text-6xl mb-4">{featuredTutorial.image}</div>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                          {featuredTutorial.category}
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {featuredTutorial.difficulty}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{featuredTutorial.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{featuredTutorial.description}</p>
                      <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredTutorial.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredTutorial.duration}
                        </div>
                      </div>
                      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        <Play className="w-4 h-4" />
                        Start Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{tutorial.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                      {tutorial.category}
                    </span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                      {tutorial.difficulty}
                    </span>
                    {tutorial.featured && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {tutorial.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tutorial.duration}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <Play className="w-4 h-4" />
                    Start Tutorial
                  </button>
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