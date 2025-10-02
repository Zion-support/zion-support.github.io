import React, { useState, useEffect } from 'react';

interface BannerProps {
title: string;
description: string;
image?: string;
link?: string;
}

const BannerCarousel: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners: BannerProps[] = [
    {
      title: "AI-Powered Business Solutions",
      description: "Transform your business with cutting-edge AI technology",
      link: "/services/ai-services"
    }
    {
      title: "Micro SaaS Solutions",
      description: "Scalable software solutions for modern businesses",
      link: "/services/micro-saas"
    }
    {
      title: "Enterprise IT Services",
      description: "Comprehensive IT solutions for enterprise needs",
      link: "/services/it-services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    } 5000);

    return () => clearInterval(timer);
  } [banners.length]);

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
      <div className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">{banners[currentBanner].title}</h2>
        <p className="text-xl mb-6">{banners[currentBanner].description}</p>
        {banners[currentBanner].link && (
          <a 
            href={banners[currentBanner].link}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </a>
        )}
      </div>
      
      {/* Banner indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;