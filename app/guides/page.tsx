'use client';
import React from 'react';
import { BookOpen, ArrowRight, CheckCircle, Star, Users, Clock, Target, Zap, Brain, Globe, Shield, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GuidesPage: React.FC = () => {
  const guideCategories = [
    {
      title: 'AI Implementation',
      description: 'Complete guides for implementing AI solutions in your business',
      guides: [
        { title: 'Getting Started with AI', duration: '15 min read', difficulty: 'Beginner' },
        { title: 'AI Strategy Planning', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'AI Model Selection', duration: '30 min read', difficulty: 'Advanced' },
        { title: 'AI Ethics and Compliance', duration: '20 min read', difficulty: 'Intermediate' }
      ],
      icon: Brain
    },
    {
      title: 'Digital Transformation',
      description: 'Step-by-step guides for modernizing your business processes',
      guides: [
        { title: 'Digital Transformation Roadmap', duration: '20 min read', difficulty: 'Beginner' },
        { title: 'Cloud Migration Guide', duration: '35 min read', difficulty: 'Intermediate' },
        { title: 'Automation Implementation', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'Data-Driven Decision Making', duration: '30 min read', difficulty: 'Advanced' }
      ],
      icon: Zap
    },
    {
      title: 'Cybersecurity',
      description: 'Essential security guides to protect your business',
      guides: [
        { title: 'Cybersecurity Fundamentals', duration: '20 min read', difficulty: 'Beginner' },
        { title: 'Threat Detection and Response', duration: '30 min read', difficulty: 'Intermediate' },
        { title: 'Compliance and Regulations', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'Advanced Security Architecture', duration: '40 min read', difficulty: 'Advanced' }
      ],
      icon: Shield
    },
    {
      title: 'Business Intelligence',
      description: 'Guides for leveraging data to drive business growth',
      guides: [
        { title: 'Data Analytics Basics', duration: '15 min read', difficulty: 'Beginner' },
        { title: 'Dashboard Design Principles', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'Predictive Analytics', duration: '35 min read', difficulty: 'Advanced' },
        { title: 'ROI Measurement', duration: '20 min read', difficulty: 'Intermediate' }
      ],
      icon: Target
    }
  ];

  const featuredGuides = [
    {
      title: 'Complete AI Implementation Guide',
      description: 'A comprehensive guide covering everything from AI strategy to deployment and maintenance.',
      readTime: '45 min',
      difficulty: 'Intermediate',
      category: 'AI Implementation',
      rating: 4.9,
      downloads: 1250
    },
    {
      title: 'Digital Transformation Playbook',
      description: 'Step-by-step playbook for transforming your business with modern technology.',
      readTime: '60 min',
      difficulty: 'Advanced',
      category: 'Digital Transformation',
      rating: 4.8,
      downloads: 980
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential security practices every business should implement to protect their data.',
      readTime: '30 min',
      difficulty: 'Beginner',
      category: 'Cybersecurity',
      rating: 4.7,
      downloads: 2100
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-cyan-400">Guides</span> & Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access comprehensive guides, tutorials, and resources to help you implement cutting-edge 
              technology solutions in your business. Learn from industry experts and stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#guides" className="cyber-button px-8 py-4 text-lg font-semibold">
                Browse All Guides
              </a>
              <a href="/contact" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Request Custom Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Guides</h2>
            <p className="text-xl text-gray-300">Most popular and highly-rated resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-cyan-400 font-medium">{guide.category}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-300">{guide.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                <p className="text-gray-300 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{guide.readTime} read</span>
                  <span>{guide.difficulty}</span>
                  <span>{guide.downloads} downloads</span>
                </div>
                <a href="/contact" className="cyber-button w-full text-center py-3">
                  Download Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section id="guides" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Guide Categories</h2>
            <p className="text-xl text-gray-300">Organized by topic and skill level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guideCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.guides.map((guide, guideIndex) => (
                    <div key={guideIndex} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{guide.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {guide.duration}
                          </span>
                          <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded text-xs">
                            {guide.difficulty}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  ))}
                </div>
                
                <a href="/contact" className="cyber-button w-full text-center py-3 mt-6">
                  View All {category.title} Guides
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Guide?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experts can create custom guides tailored to your specific business needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Request Custom Guide
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidesPage;