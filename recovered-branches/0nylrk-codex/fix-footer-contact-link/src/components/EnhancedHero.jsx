<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
const EnhancedHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const heroSlides = [
        {
            id: 1,
            title: "Transform Your Business",
            subtitle: "With Zion Tech Group",
            description: "Discover our cutting-edge micro SAAS solutions designed to scale your business operations and drive growth.",
            ctaText: "Explore Services",
            ctaLink: "/micro-saas-services",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "🚀"
        },
        {
            id: 2,
            title: "AI-Powered Solutions",
            subtitle: "For Modern Enterprises",
            description: "Leverage artificial intelligence to automate workflows, enhance productivity, and gain competitive advantages.",
            ctaText: "Learn More",
            ctaLink: "/ai-solutions",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "🤖"
        },
        {
            id: 3,
            title: "Cloud-Native Architecture",
            subtitle: "Built for Scale",
            description: "Enterprise-grade cloud solutions that grow with your business, ensuring reliability and performance.",
            ctaText: "Get Started",
            ctaLink: "/cloud-solutions",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "☁️"
        }
    ];
    useEffect(() => {
        if (!isAutoPlaying)
            return;
        const interval = setInterval(() => {
            if (isPlaying) {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isPlaying, isAutoPlaying, heroSlides.length]);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };
    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
        if (!isAutoPlaying) {
            setIsPlaying(true);
        }
    };
    return (<div className="relative w-full h-screen overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50"/>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnhancedHero: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedHero</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedHero;