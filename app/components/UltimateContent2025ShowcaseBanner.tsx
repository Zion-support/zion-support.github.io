import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
import { X, ChevronRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months - Complete Guide',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '99.2%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: 'Ultimate Success Story - 567% ROI in 18 Months',
      type: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
      setIsDismissed(dismissed === 'true');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];
>>>>>>> origin/cursor/create-and-deploy-new-content-ad66

export default function UltimateContent2025ShowcaseBanner() {
  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
            🚀 NEW: Ultimate Content 2025 Showcase
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 2025: The Enterprise
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolution Begins
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving <strong className="text-yellow-300">500%+ ROI</strong> with 
            cutting-edge AI solutions. Real case studies, proven strategies, and actionable insights.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500%+</div>
              <div className="text-blue-100 text-sm md:text-base">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-blue-100 text-sm md:text-base">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">98%</div>
              <div className="text-blue-100 text-sm md:text-base">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">18</div>
              <div className="text-blue-100 text-sm md:text-base">Months to ROI</div>
            </div>
          </div>
          
          {/* Featured Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Featured Blog Post */}
            <Link href="/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📖 Featured Article
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  AI 2025: The Enterprise AI Revolution
                </h3>
                <p className="text-blue-100 mb-4 text-sm md:text-base">
                  Complete guide to achieving 500%+ ROI with advanced AI automation and machine learning solutions.
                </p>
                <div className="flex items-center text-yellow-300 font-medium">
                  Read Full Article →
                </div>
              </div>
            </Link>
            
            {/* Featured Case Study */}
            <Link href="/case-studies/fortune-500-ai-transformation-ultimate-success-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    📊 Case Study
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  Fortune 500 AI Transformation
                </h3>
                <p className="text-blue-100 mb-4 text-sm md:text-base">
                  Real-world success story: $2.8B annual savings in 18 months with 567% ROI achievement.
                </p>
                <div className="flex items-center text-yellow-300 font-medium">
                  View Success Story →
                </div>
              </div>
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your AI Journey
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              View All Success Stories
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-blue-200 text-sm mb-4">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">🏢 Fortune 500</div>
              <div className="text-white font-semibold">🌍 Global Enterprises</div>
              <div className="text-white font-semibold">🏭 Manufacturing Leaders</div>
              <div className="text-white font-semibold">🏦 Financial Giants</div>
            </div>
          </div>
=======
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">NEW ULTIMATE CONTENT 2025</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Preview */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm font-medium">FEATURED {currentContent.type.toUpperCase()}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {currentContent.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-6">
                    {currentContent.subtitle}
                  </p>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium">ROI</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium">SAVINGS</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors flex items-center justify-center"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Content Showcase */}
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Success Metrics</h3>
                    <span className="text-sm text-white/70">{currentContent.readingTime}</span>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(currentContent.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-white/80 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Type Indicator */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      currentContent.type === 'blog' ? 'bg-green-400' :
                      currentContent.type === 'case-study' ? 'bg-blue-400' : 'bg-purple-400'
                    }`}></div>
                    <span className="text-sm text-white/80 capitalize">{currentContent.type.replace('-', ' ')}</span>
                  </div>
                  {currentContent.featured && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">Featured</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 pb-6">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
>>>>>>> origin/cursor/create-and-deploy-new-content-ad66
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}