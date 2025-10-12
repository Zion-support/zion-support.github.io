'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Play, Users, Clock, Star, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'AI Fundamentals',
      description: 'Learn the basics of artificial intelligence and machine learning',
      duration: '2 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 1250,
      icon: BookOpen,
      features: ['Video Lessons', 'Hands-on Labs', 'Certification', 'Lifetime Access']
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing and quantum algorithms',
      duration: '3 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 890,
      icon: Play,
      features: ['Interactive Demos', 'Code Examples', 'Quizzes', 'Community Access']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions',
      duration: '4 hours',
      level: 'Advanced',
      rating: 4.7,
      students: 2100,
      icon: Users,
      features: ['Real Projects', 'Expert Mentoring', 'Portfolio Building', 'Job Placement']
    }
  ];

  const stats = [
    { number: '500+', label: 'Tutorials' },
    { number: '50K+', label: 'Students' },
    { number: '4.9/5', label: 'Rating' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI & IT Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn cutting-edge AI, IT, and technology skills with our comprehensive tutorials. Expert-led courses for all skill levels." />
        <meta name="keywords" content="AI tutorials, IT courses, technology learning, online education, professional development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  📚 Learn from Experts
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                AI & IT
                <span className="block text-6xl md:text-8xl mt-2">Tutorials</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Master cutting-edge technologies with our comprehensive tutorials. 
                Learn from industry experts and advance your career in AI and IT.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tutorials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="text-cyan-400">Tutorials</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert-led courses designed to help you master the latest technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <tutorial.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {tutorial.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tutorial.students}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {tutorial.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="/contact"
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-center transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 flex items-center justify-center group"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of professionals who have advanced their careers with our expert-led tutorials. 
                Start your learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Browse All Tutorials
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free trial • ✓ Money-back guarantee • ✓ Lifetime access</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TutorialsPage;
