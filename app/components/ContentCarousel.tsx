"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Globe,
} from "lucide-react";

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description:
        "Advanced AI technology to transform your business operations and improve efficiency",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Lightning-fast processing and real-time analytics for optimal results",
      features: [
        "Real-time Processing",
        "Scalable Architecture",
        "Optimized Performance",
        "Low Latency",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with encryption and compliance standards",
      features: [
        "End-to-End Encryption",
        "Compliance Standards",
        "Security Audits",
        "24/7 Monitoring",
      ],
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Worldwide deployment and support for international businesses",
      features: [
        "Multi-Region Support",
        "Local Compliance",
        "Global CDN",
        "International Support",
      ],
    },
  ];

  const benefits = [
    "Advanced AI technology integration",
    "Real-time processing and analytics",
    "Enterprise-grade security and compliance",
    "Scalable and flexible solutions",
    "24/7 technical support",
    "Easy integration with existing systems",
    "Cost-effective pricing plans",
    "Proven track record of success",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <slide.icon className="w-8 h-8 text-white" />
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {slide.title}
                      </h2>

                      <p className="text-xl text-gray-300 mb-8">
                        {slide.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {slide.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-300"
                          >
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>

                    {/* Visual Element */}
                    <div className="flex justify-center">
                      <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <slide.icon className="w-12 h-12 text-white" />
                          </div>
                          <p className="text-white/60 text-sm">
                            Interactive Demo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-purple-500" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our solutions deliver unmatched value and performance for your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
