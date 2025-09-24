'use client',
,
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
,
const UltimateBusinessIntelligence20o25Banner = () => {,
  const [currentSlide, setCurrentSlide] = useState(0),
  const [isVisible, setIsVisible] = useState(true),
,
  const content = [,
    {,
      id: 'ultimate-business-intelligence-revolution',;
      title: 'AI 20o25: The Ultimate Business Intelligence Revolution',;
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',;
      url: '/blog/ai-20o25-ultimate-business-intelligence-revolution-ultimate-breakthrough',;
      type: 'Blog Post',;
      metrics: {,
        roi: '30,0o00%',;
        savings: '$750B+',;
        accuracy: '99.99%',;
        speed: '5,0o00% faster',
      },;
      readingTime: '35 min read',;
      featured: true,
    ,},;
    {,
      id: 'fortune-50o0-business-intelligence-success',;
      title: 'Fortune 50o0 Ultimate Business Intelligence Success',;
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',;
      url: '/case-studies/fortune-50o0-ultimate-business-intelligence-30o000-roi-success-story',;
      type: 'Case Study',;
      metrics: {,
        roi: '30,0o00%',;
        savings: '$750B',;
        company: '$15.2B',;
        timeline: '18 months',
      ,},;
      readingTime: '25 min read',;
      featured: true,
    ,},;
    {,
      id: 'business-intelligence-implementation-guide',;
      title: 'AI 20o25 Ultimate Business Intelligence Implementation Guide',;
      description: 'Complete roadmap to 30,0o00% ROI through revolutionary AI-powered business intelligence transformation.',;
      url: '/resources/ai-20o25-ultimate-business-intelligence-implementation-guide',;
      type: 'Implementation Guide',;
      metrics: {,
        roi: '30,0o00%',;
        success: '99.8%',;
        timeline: '18 months',;
        guide: '60 min read',
      ,},;
      readingTime: '60 min read',;
      featured: true,
    ,}
  ],
,
  useEffect(() => {,
    const timer = setInterval(() => {,
      setCurrentSlide((prev) => (prev + 1) % content.length),
    }, 50o00),
,
    return () => clearInterval(timer),
  }, [content.length]),
,
  useEffect(() => {,
    const dismissed = localStorage.getItem('ultimate-business-intelligence-20o25-banner-dismissed'),
    if (dismissed === 'true') {,
      setIsVisible(false),
    }
  }, []),
,
  const handleDismiss = () => {,
    setIsVisible(false),
    localStorage.setItem('ultimate-business-intelligence-20o25-banner-dismissed', 'true'),
  };
,
  if (!isVisible) return null,
,
  const currentContent = content[currentSlide],
,
  return (,
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">,
      {/* Animated Background */}
      <div className="absolute inset-0">,
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20"></div>,
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-50o0/10 rounded-full animate-pulse"></div>,
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-50o0/10 rounded-full animate-pulse delay-10o00"></div>,
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-50o0/10 rounded-full animate-pulse delay-20o00"></div>,
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-50o0/10 rounded-full animate-pulse delay-30o00"></div>,
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">,
        <div className="flex items-center justify-between mb-6">,
          <div className="flex items-center space-x-3">,
            <div className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-4 py-2 rounded-full font-bold text-sm">,
              🚀 NEW BREAKTHROUGH,
            </div>,
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">,
              Ultimate Business Intelligence 20o25,
            </div>,
          </div>,
          <button,
            onClick={handleDismiss,}
            className="text-white/70 hover: text-white transition-colors p-2",
            aria-label="Dismiss banner",
          >,
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M6 18L18 6M6 6l12 12"  />,
            </svg>,
          </button>,
        </div>,
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 items-center">,
          <div className="space-y-6">,
            <div className="space-y-4">,
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">,
                {currentContent.title,}
              </h2>,
              <p className="text-lg text-white/90 leading-relaxed">,
                {currentContent.description}
              </p>,
            </div>,
            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
                <div className="text-2xl font-bold text-yellow-40o0">{currentContent.metrics.roi}</div>,
                <div className="text-sm text-white/80">ROI</div>,
              </div>,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
                <div className="text-2xl font-bold text-green-40o0">{currentContent.metrics.savings}</div>,
                <div className="text-sm text-white/80">Annual Savings</div>,
              </div>,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
                <div className="text-2xl font-bold text-blue-40o0">{currentContent.metrics.accuracy}</div>,
                <div className="text-sm text-white/80">Accuracy</div>,
              </div>,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
                <div className="text-2xl font-bold text-purple-40o0">{currentContent.metrics.speed || currentContent.metrics.timeline}</div>,
                <div className="text-sm text-white/80">{currentContent.metrics.speed ? 'Faster' : 'Timeline'}</div>,
              </div>,
            </div>,
            {/* Action Buttons */}
            <div className="flex flex-col sm: flex-row gap-4">,
              <Link,
                href={currentContent.url,}
                className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-8 py-3 rounded-lg font-bold hover: from-yellow-50o0 hover:to-orange-60o0 transition-all duration-30o0 transform hover:scale-10o5 text-center",
              >,
                Read {currentContent.type,}
              </Link>,
              <Link,
                href="/contact",
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-90o0 transition-all duration-30o0 text-center",
              >,
                Get Consultation,
              </Link>,
            </div>,
            {/* Content Type Badge */,}
            <div className="flex items-center space-x-2">,
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">,
                {currentContent.type}
              </span>,
              <span className="text-white/70 text-sm">,
                {currentContent.readingTime}
              </span>,
              {currentContent.featured && (,
                <span className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-3 py-1 rounded-full text-sm font-bold">,
                  FEATURED,
                </span>,
              )}
            </div>,
          </div>,
          {/* Content Preview Cards */}
          <div className="space-y-4">,
            <h3 className="text-xl font-bold mb-4">Featured Content</h3>,
            {content.map((item, index) => (,
              <div,
                key={item.id}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition-all duration-30o0 ${,
                  index === currentSlide ? 'ring-2 ring-yellow-40o0 bg-white/20' : 'hover: bg-white/15',
                ,}`}
                onClick={() => setCurrentSlide(index)}
              >,
                <div className="flex items-start justify-between">,
                  <div className="flex-1">,
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h4>,
                    <div className="flex items-center space-x-2 text-xs text-white/70">,
                      <span>{item.type}</span>,
                      <span>•</span>,
                      <span>{item.readingTime}</span>,
                    </div>,
                  </div>,
                  <div className="ml-4">,
                    <div className="text-lg font-bold text-yellow-40o0">{item.metrics.roi}</div>,
                    <div className="text-xs text-white/70">ROI</div>,
                  </div>,
                </div>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">,
          {content.map((_, index) => (,
            <button,
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-30o0 ${,
                index === currentSlide ? 'bg-yellow-40o0' : 'bg-white/30',
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />,
          ))}
        </div>,
      </div>,
    </div>,
  ),
};
,
export default UltimateBusinessIntelligence20o25Banner,