#!/bin/bash

echo "Fixing corrupted component files..."

# Fix ContentPromotionBanner.tsx
cat > /workspace/app/components/ContentPromotionBanner.tsx << 'COMPONENT_EOF'
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContentPromotionBannerProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ContentPromotionBanner({ 
  className = '',
  title = "Discover Our Latest Features",
  description = "Explore cutting-edge solutions designed to transform your business",
  buttonText = "Learn More",
  buttonLink = "/services"
}: ContentPromotionBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-8 text-white ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-purple-100 mb-6">{description}</p>
        <a
          href={buttonLink}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
COMPONENT_EOF

# Fix ContentStatistics.tsx
cat > /workspace/app/components/ContentStatistics.tsx << 'COMPONENT_EOF'
import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

interface ContentStatisticsProps {
  className?: string;
  stats?: StatItem[];
}

export default function ContentStatistics({ 
  className = '',
  stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" }
  ]
}: ContentStatisticsProps) {
  return (
    <div className={`bg-gray-800 rounded-xl p-8 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
COMPONENT_EOF

# Fix CookieConsent.tsx
cat > /workspace/app/components/CookieConsent.tsx << 'COMPONENT_EOF'
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg z-50">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold">Cookie Consent</h3>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-gray-300 text-sm mb-4">
        We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you consent to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-cyan-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-cyan-600 transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
COMPONENT_EOF

# Fix DynamicContentShowcase.tsx
cat > /workspace/app/components/DynamicContentShowcase.tsx << 'COMPONENT_EOF'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
}

interface DynamicContentShowcaseProps {
  className?: string;
  items?: ContentItem[];
}

export default function DynamicContentShowcase({ 
  className = '',
  items = [
    {
      id: '1',
      title: 'AI-Powered Solutions',
      description: 'Revolutionary artificial intelligence services',
      category: 'AI Services'
    },
    {
      id: '2',
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure migration',
      category: 'Cloud Services'
    },
    {
      id: '3',
      title: 'Cybersecurity',
      description: 'Advanced security solutions for your business',
      category: 'Security'
    }
  ]
}: DynamicContentShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Featured Content</h3>
          <div className="flex gap-2">
            <button
              onClick={prevItem}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextItem}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-cyan-400 mb-2">{items[currentIndex].category}</div>
          <h4 className="text-lg font-semibold text-white mb-2">{items[currentIndex].title}</h4>
          <p className="text-gray-300">{items[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
}
COMPONENT_EOF

echo "Corrupted component files fixed!"
