'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface DynamicContentShowcaseProps {
  title?: string;
  description?: string;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  title = "Dynamic Content Showcase",
  description = "Experience our dynamic content capabilities",
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Real-time Updates",
      description: "Content updates automatically based on user behavior and preferences"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with instant content delivery"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "Personalized",
      description: "AI-powered personalization for each user"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Collaborative",
      description: "Team collaboration features built-in"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Analytics",
      description: "Comprehensive analytics and insights"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Secure",
      description: "Enterprise-grade security and compliance"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, features.length]);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 min-h-[300px] flex items-center justify-center">
          <div className="text-center">
            {features[currentIndex] && (
              <>
                <div className="mb-6">
                  {features[currentIndex].icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {features[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {features[currentIndex].description}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={prevFeature}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          <button
            onClick={nextFeature}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center mx-auto">
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;