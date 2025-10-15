import React, { useState, useEffect } from "react";

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
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      image: "/images/ai-analytics.jpg",
      category: "AI Solutions",
      featured: true
    },
    {
      id: "2",
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions designed for modern businesses.",
      image: "/images/cloud-infrastructure.jpg",
      category: "Cloud Services",
      featured: false
    },
    {
      id: "3",
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets.",
      image: "/images/cybersecurity.jpg",
      category: "Security",
      featured: true
    },
    {
      id: "4",
      title: "Data Management",
      description: "Efficient data storage, processing, and analysis solutions.",
      image: "/images/data-management.jpg",
      category: "Data Solutions",
      featured: false
    }
  ],
  autoPlay = true,
  interval = 5000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, filteredItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const filterByCategory = (category: string) => {
    if (category === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === category));
    }
    setCurrentIndex(0);
  };

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];

  return (
    <div className={`${className}`}>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterByCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filteredItems.some(item => 
                category === 'all' || item.category === category
              ) && filteredItems[currentIndex]?.category === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Carousel */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                      {item.featured && (
                        <span className="inline-block bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                          Featured
                        </span>
                      )}
                      <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                      <p className="text-xl mb-6 opacity-90">{item.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                          {item.category}
                        </span>
                        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        {filteredItems.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;