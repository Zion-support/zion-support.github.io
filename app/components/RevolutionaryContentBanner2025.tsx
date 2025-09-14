import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Download, CheckCircle, Zap, Target, Award, Users, DollarSign, BarChart3 } from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 'advanced-automation',
      title: 'AI 2025: The Advanced Automation Revolution',
      description: 'Transform your business with next-generation AI automation achieving 600% ROI and $2.8B savings',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      type: 'blog',
      metrics: { roi: '600%', savings: '$2.8B', efficiency: '89%' },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: Ultimate Success Story',
      description: 'How a global manufacturing giant achieved $3.2B annual savings with 700% ROI in 18 months',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      metrics: { roi: '700%', savings: '$3.2B', satisfaction: '98%' },
      readingTime: '22 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'transformation-guide',
      title: 'AI Transformation Master Guide 2025: Ultimate Edition',
      description: 'The complete blueprint for enterprise AI success - from strategy to 700% ROI',
      url: '/resources/ai-transformation-master-guide-2025-ultimate-edition',
      type: 'resource',
      metrics: { roi: '700%', successRate: '98%', projects: '500+' },
      readingTime: '45 min read',
      isNew: true,
      featured: true,
      downloadable: true
    }
  ];

  const stats = [
    { icon: DollarSign, value: '$3.2B', label: 'Annual Savings', color: 'text-green-600' },
    { icon: TrendingUp, value: '700%', label: 'Average ROI', color: 'text-blue-600' },
    { icon: Users, value: '500+', label: 'Success Stories', color: 'text-purple-600' },
    { icon: BarChart3, value: '98%', label: 'Success Rate', color: 'text-orange-600' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'resource': return <Download className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-bold">REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Most Powerful AI Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ever Created
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI content that's transforming businesses worldwide. 
            Featuring <strong className="text-yellow-400">real success stories</strong>, 
            <strong className="text-yellow-400"> proven strategies</strong>, and 
            <strong className="text-yellow-400"> implementation guides</strong> that have delivered 
            <strong className="text-yellow-400"> $3.2+ billion in savings</strong> across 500+ enterprises.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Featured Content</h3>
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredContent.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content Info */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                            {getTypeIcon(item.type)}
                            <span className="ml-1 capitalize">{item.type.replace('-', ' ')}</span>
                          </div>
                          <div className="flex items-center ml-4 space-x-2">
                            {item.isNew && (
                              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                NEW
                              </span>
                            )}
                            {item.featured && (
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            )}
                          </div>
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-4">
                          {item.title}
                        </h4>

                        <p className="text-blue-100 mb-6 text-lg">
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                            <div key={metricIndex} className="text-center">
                              <div className="text-2xl font-bold text-yellow-400">{value}</div>
                              <div className="text-xs text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-blue-200 text-sm mb-6">
                          <Clock className="w-4 h-4 mr-2" />
                          {item.readingTime}
                        </div>

                        <div className="flex space-x-4">
                          <Link
                            href={item.url}
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center group"
                          >
                            Read Now
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          
                          {item.downloadable && (
                            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center">
                              <Download className="w-5 h-5 mr-2" />
                              Download
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                              {getTypeIcon(item.type)}
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">
                              {Object.values(item.metrics)[0]}
                            </div>
                            <div className="text-blue-200 text-sm">
                              {Object.keys(item.metrics)[0].replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join the AI Revolution?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Access our complete library of revolutionary AI content and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                Explore All Content
                <Target className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              >
                Get Free Consultation
                <CheckCircle className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2025;