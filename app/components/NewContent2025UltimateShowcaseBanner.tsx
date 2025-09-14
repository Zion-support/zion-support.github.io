'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Zap, Clock, Award } from 'lucide-react';

const NewContent2025UltimateShowcaseBanner = () => {
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
      featured: true,
      category: 'Business Transformation'
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
      featured: true,
      category: 'Success Story'
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
      featured: true,
      category: 'Implementation Guide'
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('new-content-2025-ultimate-banner-dismissed');
      setIsDismissed(dismissed === 'true');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('new-content-2025-ultimate-banner-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

'use client';
        </div>
        
        {/* Success Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$100B+</div>
              <div className="text-blue-100 text-sm">Market Cap Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">500+</div>
              <div className="text-blue-100 text-sm">Enterprises Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">99.7%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">25+</div>
              <div className="text-blue-100 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
'use client';
    </div>
  );
}