<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Right, Play, User, Star, Circle, Clock } from 'lucide-react'
<<<<<<< HEAD
import React from 'react';
import { Helmet , Right,  Play,  User,  Star,  Circle,  Clock   } from 'lucide-react";
=======
import React from 'react';'
import { Helmet , Right,  Play,  User,  Star,  Circle,  Clock } from 'lucide-react';
>>>>>>> origin/main
const TutorialsPage: React.FC = () => {
  const tutorials = [{
      id: 1,
      title: "Getting Started with AI Development","
      description: "Learn the fundamentals of AI development and machine learning concepts.","
      duration: "2 hours","
      level: "Beginner","
      instructor: "Dr. Sarah Johnson","
      rating: 4.8,
      students: 1250,
<<<<<<< HEAD
      thumbnail: "🤖"},"
      thumbnail: "🤖";}"
=======
      thumbnail: "🤖" },
      thumbnail: "🤖";}
>>>>>>> origin/main
    },
    {
      id: 2,
      title: "Infrastructure Setup","
      description: "Complete guide to setting up cloud infrastructure on AWS and Azure.","
      duration: "3 hours","
      level: "Intermediate","
      instructor: "Michael Chen","
      rating: 4.9,
      students: 980,
<<<<<<< HEAD
      thumbnail: "☁️"},"
      thumbnail: "☁️";}"
=======
      thumbnail: "☁️" },
      thumbnail: "☁️";}
>>>>>>> origin/main
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals","
      description: "Essential cybersecurity practices and threat protection strategies.","
      duration: "4 hours","
      level: "Beginner","
      instructor: "Emily Rodriguez","
      rating: 4.7,
      students: 2100,
<<<<<<< HEAD
      thumbnail: "🔒"},"
      thumbnail: "🔒";}"
=======
      thumbnail: "🔒" },
      thumbnail: "🔒";}
>>>>>>> origin/main
    },
    {
      id: 4,
      title: "Advanced Machine Learning","
      description: "Deep dive into advanced ML algorithms and neural networks.","
      duration: "6 hours","
      level: "Advanced","
      instructor: "Dr. David Kim","
      rating: 4.9,
      students: 750,
<<<<<<< HEAD
      thumbnail: "🧠"},"
      thumbnail: "🧠";}"
=======
      thumbnail: "🧠" },
      thumbnail: "🧠";}
>>>>>>> origin/main
    },
    {
      id: 5,
      title: "DevOps Best Practices","
      description: "Learn modern DevOps practices and CI/CD pipeline implementation.","
      duration: "5 hours","
      level: "Intermediate","
      instructor: "Lisa Wang","
      rating: 4.8,
      students: 1100,
<<<<<<< HEAD
      thumbnail: "⚙️"},"
      thumbnail: "⚙️";}"
    },
    {
      id: 6,
      title: "Data Analytics with Python","
      description: "Master data analysis and visualization using Python and popular libraries.","
      duration: "4 hours","
      level: "Intermediate","
      instructor: "James Wilson","
      rating: 4.6,
      students: 1650,
      thumbnail: "📊"}"
=======
      thumbnail: "⚙️" },
      thumbnail: "⚙️";}
    },
    { id: 6,
      title: "Data Analytics with Python",
      description: "Master data analysis and visualization using Python and popular libraries.",
      duration: "4 hours",
      level: "Intermediate",
      instructor: "James Wilson",
      rating: 4.6,
      students: 1650,
      thumbnail: "📊" }
>>>>>>> origin/main
  ]
      thumbnail: "📊";}"
    }
  ];
  const categories = [{ name: "All", count: 24 },"
    { name: "AI & ML", count: 8 },"
    { name: "Computing", count: 6 },"
    { name: "Cybersecurity", count: 4 },"
    { name: "DevOps", count: 3 },"
    { name: "Data Science", count: 3 }"
  ]
=======

import { Helmet } from "react-helmet-async";

const HomePage = () => {
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Tutorials - Learn AI & IT Skills | Zion Tech Group</title>
        <meta name="description" content="Master AI and IT skills with our comprehensive tutorials. Learn from experts with hands-on projects and real-world examples." />"
        <meta name="keywords" content="tutorials, AI learning, IT training, machine learning, cloud computing, cybersecurity, online courses" />"
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        {/* Hero Section */}
        <section className="relative py-20 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">"
=======
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
>>>>>>> origin/main
              Learn;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">"
                Tutorials;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Master AI and IT skills with our comprehensive tutorials.;
              Learn from experts with hands-on projects and real-world examples.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">"
                <Play className="w-5 h-5 mr-2 inline" />"
                Start Learning;
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">"
                Browse All;
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Categories */}
        <section className="py-10 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="flex flex-wrap justify-center gap-4">"
              {categories.map((category, _index) => (
                <button}
                  key={_index}
                  className="$1""
=======
        { /* Categories */ }
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              { categories.map((category, _index) => (
                <button; }
                  key={ _index }
                  className="$1"
>>>>>>> origin/main
                >
                  {category.name} ({category.count}
                </button>
              ))
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Tutorials Grid */}
        <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-4xl font-bold text-white text-center mb-16">"
=======
        { /* Tutorials Grid */ }
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
>>>>>>> origin/main
              Featured Tutorials;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">"
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>"
                  <div className="flex items-center justify-between mb-3">"
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">"
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.map((tutorial) => (}
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
<<<<<<< HEAD
                      {tutorial.level}
=======
            </h2>;
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              { tutorials.map((tutorial) => ( }
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">;
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                  <div className="flex items-center justify-between mb-3">;
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">;
                      { tutorial.level }
>>>>>>> origin/main
                    </span>
                    <div className="flex items-center text-yellow-400">"
                      <Star className="w-4 h-4 fill-current" />"
                      <span className="ml-1 text-sm">{tutorial.rating}</span>"
                    </div>
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">"
                    {tutorial.title}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}"
        <section className="relative py-20 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">"
=======
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    { tutorial.title }
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{ /* Hero Section */ }
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
>>>>>>> origin/main
              Learn
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">"
                Tutorials</span></h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Master AI and IT skills with our comprehensive tutorials.
              Learn from experts with hands-on projects and real-world examples.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">"
                <Play className="w-5 h-5 mr-2 inline" />"
                Start Learning</button>
<<<<<<< HEAD
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">"
                Browse All</button></div></div></section>{/* Categories */}
        <section className="py-10 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="flex flex-wrap justify-center gap-4">{categories.map((category, _index) => ("
=======
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Browse All</button></div></div></section>{ /* Categories */ }
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">{categories.map((category, _index) => (
>>>>>>> origin/main
                <button
                  key={_index}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300">{category.name} ({category.count})"
                </button>
<<<<<<< HEAD
              ))
            </div></div></section>{/* Tutorials Grid */}
        <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto">"
            <h2 className="text-4xl font-bold text-white text-center mb-16">"
              Featured Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{tutorials.map((tutorial) => ("
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">"
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>"
                  <div className="flex items-center justify-between mb-3">"
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">{tutorial.level}"
                    </span>
                    <div className="flex items-center text-yellow-400">"
                      <Star className="w-4 h-4 fill-current" />"
                      <span className="ml-1 text-sm">{tutorial.rating}</span></div></div>"
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{tutorial.title}"
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>"
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">"
                    <span className="flex items-center">"
                      <Clock className="w-4 h-4 mr-1" />"
                      {tutorial.duration}
=======
              ))}
            </div></div></section>{ /* Tutorials Grid */ }
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Featured Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">{ tutorial.level }
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{tutorial.rating}</span></div></div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{ tutorial.title }
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{tutorial.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      { tutorial.duration }
>>>>>>> origin/main
                    </span>
                    <span className="flex items-center">"
                      <User className="w-4 h-4 mr-1" />"
                      {tutorial.students} students;
                    </span>
                  </div>
                  <div className="flex items-center justify-between">"
                    <span className="text-cyan-400 text-sm font-medium">{tutorial.instructor}</span>"
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">"
                      Start Tutorial;
                      <Right className="w-4 h-4 ml-1" />"
                    </button>
                  </div>
                </div>
              ))
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-6">"
=======
        { /* CTA Section */ }
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> origin/main
              Ready to Start Learning?;
            </h2>
            <p className="text-xl text-gray-300 mb-8">"
              Join thousands of students already learning with our comprehensive tutorials.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">"
                Get Started Free;
                <Right className="w-5 h-5 ml-2 inline" />"
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">"
                View All Tutorials;
              </button>
            </div>
          </div>
        </section>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
>>>>>>> origin/main
      </div>
<<<<<<< HEAD
    </>
  )
export default TutorialsPage;
                      <Clock className="w-4 h-4 mr-1" />{tutorial.duration}"
=======
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
export default TutorialsPage;
                      <Clock className="w-4 h-4 mr-1" />{ tutorial.duration }
>>>>>>> origin/main
                    </span>
                    <span className="flex items-center">"
                      <User className="w-4 h-4 mr-1" />{tutorial.students} students</span></div>"
                  <div className="flex items-center justify-between">"
                    <span className="text-cyan-400 text-sm font-medium">{tutorial.instructor}</span>"
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">"
                      Start Tutorial
<<<<<<< HEAD
                      <Right className="w-4 h-4 ml-1" /></button></div></div>"
              ))
            </div></div></section>{/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-6">"
=======
                      <Right className="w-4 h-4 ml-1" /></button></div></div>
              ))}
            </div></div></section>{ /* CTA Section */ }
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> origin/main
              Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8">"
              Join thousands of students already learning with our comprehensive tutorials.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">"
                Get Started Free
                <Right className="w-5 h-5 ml-2 inline" /></button>"
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">"
                View All Tutorials</button></div></div></section></div></>
  )
export default TutorialsPage
<<<<<<< HEAD
}
export default TutorialsPage';
=======
=======
export default FiveGSolutionsPage;
=======
>>>>>>> origin/main
};

export default HomePage;
>>>>>>> origin/main
>>>>>>> origin/main
