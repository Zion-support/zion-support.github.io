import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items = [
    {
      id: "1",
      title: "AI-Powered Solutions",
      description:
        "Transform your business with cutting-edge artificial intelligence technology.",
      image: "/api/placeholder/400/300",
      category: "AI Solutions",
      featured: true,
    },
    {
      id: "2",
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our expert services.",
      image: "/api/placeholder/400/300",
      category: "Cloud Services",
    },
    {
      id: "3",
      title: "Data Analytics",
      description:
        "Unlock insights from your data with advanced analytics and visualization.",
      image: "/api/placeholder/400/300",
      category: "Data Services",
    },
  ],
  autoPlay = true,
  interval = 5000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-gray-900">
        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="w-full flex-shrink-0">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    {currentItem.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {currentItem.title}
                  </h2>
                  <p className="text-gray-300 text-lg">
                    {currentItem.description}
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {currentItem.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={togglePlayPause}
            className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={goToNext}
            className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-cyan-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
