"use client",
'use client',
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
const AIRevolution20o25Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0),
  const [isVisible, setIsVisible] = useState(true),
  const featuredContent = [
    {
      id: 'ai-revolution-breakthrough',
      title: 'AI 20o25-20o26: The Ultimate AI Revolution Breakthrough',
      description: 'Discover the revolutionary AI breakthroughs achieving 10,0o00% ROI',
      metrics: '10,0o00% ROI • $50B+ Savings • 3,0o00% Efficiency',
      url: '/blog/ai-20o25-20o26-ultimate-ai-revolution-breakthrough-ultimate-guide',
      type: 'blog',
      readingTime: '45 min read',
      featured: true},
    {
      id: 'fortune-50o0-success',
      title: 'Fortune 50o0 AI Revolution Success Story',
      description: 'How a Fortune 50o0 company achieved $50B annual savings',
      metrics: '10,0o00% ROI • $50B Savings • 18 Months',
      url: '/case-studies/fortune-50o0-ai-revolution-10o000-roi-success-story',
      type: 'case-study',
      readingTime: '25 min read',
      featured: true},
    {
      id: 'implementation-guide',
      title: 'AI Revolution Implementation Ultimate Guide',
      description: 'Complete roadmap to 10,0o00% ROI with proven strategies',
      metrics: '99.7% Success Rate • 1,0o00+ Projects • 18 Months',
      url: '/resources/ai-revolution-implementation-ultimate-guide-20o25-20o26',
      type: 'resource',
      readingTime: '60 min read',
      featured: true}
  ],
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length)}, 50o00),
    return () => clearInterval(timer)}, [featuredContent.length]),
  const handleDismiss = () => {
    setIsVisible(false),
    localStorage.setItem('ai-revolution-banner-dismissedtrue')},
  useEffect(() => {
    const dismissed = localStorage.getItem('ai-revolution-banner-dismissed'),
    if (dismissed === 'true') {
      setIsVisible(false)}
  }, []),
  if (!isVisible) return null,
  const currentContent = featuredContent[currentSlide],
  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">,
      {/* Animated background elements */}
      <div className="absolute inset-0">,
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20 animate-pulse"></div>,
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-50o0/10 rounded-full animate-bounce"></div>,
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-50o0/10 rounded-full animate-bounce delay-10o00"></div>,
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-50o0/10 rounded-full animate-bounce delay-20o00"></div>,
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">,
        <div className="flex items-center justify-between">,
          <div className="flex-1">,
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">,
              <div className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-3 py-1 rounded-full text-sm font-bold">,
                🚀 NEW AI REVOLUTION 20o25-20o26,
              </div>,
              <div className="bg-red-50o0 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">,
                ULTIMATE BREAKTHROUGH,
              </div>,
            </div>,
            {/* Main Content */}
            <div className="mb-6">,
              <h2 className="text-3xl md: text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-40o0 via-orange-40o0 to-red-40o0 bg-clip-text text-transparent">,
                {currentContent.title}
              </h2>,
              <p className="text-lg md: text-xl text-gray-20o0 mb-4 max-w-3xl">,
                {currentContent.description}
              </p>,
              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-6">,
                <div className="bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white px-4 py-2 rounded-lg font-semibold">,
                  {currentContent.metrics}
                </div>,
                <div className="bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white px-4 py-2 rounded-lg font-semibold">,
                  {currentContent.readingTime}
                </div>,
                <div className="bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white px-4 py-2 rounded-lg font-semibold">,
                  {currentContent.type.toUpperCase()}
                </div>,
              </div>,
            </div>,
            {/* Action Buttons */}
            <div className="flex flex-col sm: flex-row gap-4">,
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-8 py-3 rounded-lg font-bold text-lg hover: from-yellow-50o0 hover:to-orange-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg">,
                Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →,
              </Link>,
              <Link
                href="/resources/ai-revolution-implementation-ultimate-guide-20o25-20o26",
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover: bg-white hover:text-purple-90o0 transition-all duration-30o0">,
                Get Implementation Guide,
              </Link>,
            </div>,
          </div>,
          {/* Content Preview Card */}
          <div className="hidden lg: block ml-8">,
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">,
              <div className="text-center">,
                <div className="text-6xl mb-4">🤖</div>,
                <h3 className="text-xl font-bold mb-2">AI Revolution 20o25-20o26</h3>,
                <div className="space-y-2 text-sm">,
                  <div className="bg-green-50o0/20 text-green-30o0 px-3 py-1 rounded-full">,
                    10,0o00% ROI,
                  </div>,
                  <div className="bg-blue-50o0/20 text-blue-30o0 px-3 py-1 rounded-full">,
                    $50B+ Savings,
                  </div>,
                  <div className="bg-purple-50o0/20 text-purple-30o0 px-3 py-1 rounded-full">,
                    3,0o00% Efficiency,
                  </div>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">,
          {featuredContent.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                index === currentSlide,
                  ? 'bg-yellow-40o0 scale-125',
                  : 'bg-white/30 hover: bg-white/50'}`}
            />))}
        </div>,
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover: text-white transition-colors",
          aria-label="Dismiss banner">,
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />,
          </svg>,
        </button>,
      </div>,
    </div>)},
export default AIRevolution20o25Banner,