import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Award, Users, ArrowRight, Clock } from 'lucide-react';

const NewContentShowcaseBanner: React.FC = () => {
  const newContent = [
    {
      title: "Neuromorphic Computing Revolution",
      excerpt: "Brain-inspired AI with 1000x energy efficiency and real-time learning capabilities",
      category: "AI Innovation",
      readTime: "8 min read",
      href: "/blog/ai-2026-neuromorphic-computing-revolution",
      featured: true
    },
    {
      title: "Autonomous Enterprise Operations",
      excerpt: "Self-managing organizations achieving 300% ROI through AI transformation",
      category: "Enterprise AI",
      readTime: "10 min read",
      href: "/blog/ai-2026-autonomous-enterprise-operations-breakthrough",
      featured: true
    },
    {
      title: "Quantum Machine Learning Revolution",
      excerpt: "Exponential performance gains with quantum-enhanced ML systems",
      category: "Quantum AI",
      readTime: "12 min read",
      href: "/blog/ai-2026-quantum-machine-learning-revolution",
      featured: true
    },
    {
      title: "Fortune 500 AI Transformation Success",
      excerpt: "How a Fortune 500 company achieved 300% ROI in 12 months",
      category: "Case Study",
      readTime: "15 min read",
      href: "/case-studies/fortune-500-ai-transformation-success",
      featured: true
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Latest Content - January 2026</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest breakthroughs in AI technology, enterprise transformation success stories, and cutting-edge innovations that are reshaping industries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newContent.map((content, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              {/* Featured badge */}
              {content.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {content.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.excerpt}
                </p>
                
                {/* Read time */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readTime}
                </div>
                
                {/* CTA */}
                <Link 
                  href={content.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">New Articles Published</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-sm text-gray-600">Average ROI Achieved</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Enterprise Readers</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Content Updates</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest insights, case studies, and breakthrough innovations delivered directly to your inbox. Join thousands of enterprise leaders transforming their organizations with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                Explore All Content
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies"
                className="inline-flex items-center px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-colors duration-200"
              >
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcaseBanner;