'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        guide: '60 min read'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="text-left">
      {/* Animated Background */}
      <div className="text-left">
        <div className="text-left"></div>
        <div className="text-left"></div>
        <div className="text-left"></div>
        <div className="text-left"></div>
        <div className="text-left"></div>
      </div>

      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              🚀 NEW BREAKTHROUGH
            </div>
            <div className="text-left">
              Ultimate Business Intelligence 2025
            </div>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-left"
            aria-label="Dismiss banner"
          >
            <svg className="text-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />"
            </svg>
          </button>
        </div>

        <div className="text-left"></div>
          <div className="text-left"></div>
            <div className="text-left"></div>
              <h2 className="text-left">
                {currentContent.title}
              </h2>
              <p className="text-left">
                {currentContent.description}
              </p>
            </div>

            {/* Success Metrics */}
            <div className="text-left"></div>
              <div className="text-left"></div>
                <div className="text-left">{currentContent.metrics.roi}</div>"
                <div className="text-left">ROI</div>"
              </div>
              <div className="text-left"></div>
                <div className="text-left">{currentContent.metrics.savings}</div>"
                <div className="text-left">Annual Savings</div>"
              </div>
              <div className="text-left"></div>
                <div className="text-left">{currentContent.metrics.accuracy}</div>"
                <div className="text-left">Accuracy</div>"
              </div>
              <div className="text-left"></div>
                <div className="text-left">{currentContent.metrics.speed || currentContent.metrics.timeline}</div>"
                <div className="text-left">{currentContent.metrics.speed ? 'Faster' : 'Timeline'}</div>"
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-left"></div>
              <Link
                href={currentContent.url}
                className="text-left">
                Read {currentContent.type}
              </Link>
              <Link
                href="/contact"
                className="text-left">
                Get Consultation
              </Link>
            </div>

            {/* Content Type Badge */}
            <div className="text-left"></div>
              <span className="text-left">
                {currentContent.type}
              </span>
              <span className="text-left">
                {currentContent.readingTime}
              </span>
              {currentContent.featured && (
                <span className="text-left">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="text-left"></div>
            <h3 className="text-left">Featured Content</h3>"
            {content.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-yellow-400 bg-white/20' : 'hover:bg-white/15'
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
                <div className="text-left"></div>
                  <div className="text-left"></div>
                    <h4 className="text-left">{item.title}</h4>"
                    <div className="text-left"></div>
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.readingTime}</span>
                    </div>
                  </div>
                  <div className="text-left"></div>
                    <div className="text-left">{item.metrics.roi}</div>"
                    <div className="text-left">ROI</div>"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="text-left">
          {content.map((_, index) => (</div>
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;