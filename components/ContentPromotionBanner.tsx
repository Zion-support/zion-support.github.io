"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  badge: string;
  badgeColor: string;
  icon: string;
  roi?: string;
}

const contentItems: ContentItem[] = [
  {
    title: "AI 2025 Ultimate Breakthrough Revolution",
    description: "Revolutionary AI breakthrough delivering 5,000% ROI with autonomous operations and quantum-enhanced intelligence.",
    href: "/ai-2025-ultimate-breakthrough-revolution",
    badge: "BREAKTHROUGH",
    badgeColor: "from-red-500 to-pink-500",
    icon: "🚀",
    roi: "5,000% ROI"
  },
  {
    title: "Quantum Computing Solutions 2026",
    description: "Revolutionary quantum computing solutions with error-corrected quantum computers and quantum supremacy.",
    href: "/quantum-computing-solutions-2026",
    badge: "REVOLUTIONARY",
    badgeColor: "from-cyan-500 to-blue-500",
    icon: "⚛️",
    roi: "15,000% ROI"
  },
  {
    title: "AI 2025 Ultimate Breakthrough Success",
    description: "Real success story: Fortune 500 company achieves 5,000% ROI in just 12 months.",
    href: "/case-studies/ai-2025-ultimate-breakthrough-success",
    badge: "SUCCESS STORY",
    badgeColor: "from-green-500 to-emerald-500",
    icon: "🏆",
    roi: "5,000% ROI"
  },
  {
    title: "AI 2026-2030 Future Predictions",
    description: "Revolutionary predictions for AI development from 2026 to 2030 with breakthrough insights.",
    href: "/ai-2026-2030-future-predictions-breakthrough",
    badge: "FUTURE",
    badgeColor: "from-purple-500 to-pink-500",
    icon: "🔮",
    roi: "25,000% ROI"
  },
  {
    title: "Advanced Automation Solutions 2025",
    description: "Cutting-edge automation solutions delivering unprecedented efficiency and cost savings.",
    href: "/advanced-automation-solutions-2025",
    badge: "NEW",
    badgeColor: "from-orange-500 to-red-500",
    icon: "🤖",
    roi: "3,000% ROI"
  },
  {
    title: "Neural Interface Revolution 2026",
    description: "Revolutionary neural interface technology enabling direct brain-computer communication.",
    href: "/neural-interface-revolution-2026",
    badge: "REVOLUTIONARY",
    badgeColor: "from-indigo-500 to-purple-500",
    icon: "🧠",
    roi: "10,000% ROI"
  }
];

export default function ContentPromotionBanner() {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const currentContent = contentItems[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Content Display */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{currentContent.icon}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${currentContent.badgeColor} text-white animate-pulse`}>
                    {currentContent.badge}
                  </span>
                  {currentContent.roi && (
                    <span className="text-yellow-400 text-sm font-bold">
                      {currentContent.roi}
                    </span>
                  )}
                </div>
                <Link 
                  href={currentContent.href}
                  className="text-lg font-bold hover:text-cyan-400 transition-colors duration-300 group"
                >
                  {currentContent.title}
                  <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                </Link>
                <p className="text-sm text-gray-300 mt-1 line-clamp-1">
                  {currentContent.description}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href={currentContent.href}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Now
            </Link>
            <Link 
              href="/content-showcase"
              className="text-gray-300 hover:text-white text-sm font-semibold transition-colors duration-300"
            >
              View All Content
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-3">
          {contentItems.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}