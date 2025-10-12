'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Play, Download, Users, Clock, Star, Brain, Cloud, Monitor } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Learn with <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tutorials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'AI Fundamentals',
              description: 'Learn the basics of artificial intelligence and machine learning',
              duration: '2 hours',
              level: 'Beginner',
              students: '1.2k',
              rating: '4.8',
              icon: <Brain className="w-8 h-8 text-cyan-400" />
            },
            {
              title: 'React Development',
              description: 'Build modern web applications with React and TypeScript',
              duration: '4 hours',
              level: 'Intermediate',
              students: '2.1k',
              rating: '4.9',
              icon: <Monitor className="w-8 h-8 text-blue-400" />
            },
            {
              title: 'Cloud Architecture',
              description: 'Design and deploy scalable cloud solutions',
              duration: '3 hours',
              level: 'Advanced',
              students: '856',
              rating: '4.7',
              icon: <Cloud className="w-8 h-8 text-purple-400" />
            }
          ].map((tutorial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                {tutorial.icon}
                <span className="text-sm text-gray-400">{tutorial.level}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
              <p className="text-gray-300 mb-4">{tutorial.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{tutorial.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{tutorial.students}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{tutorial.rating}</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Learning</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit space-x-2"
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Tutorials</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;