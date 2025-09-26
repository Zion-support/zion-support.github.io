import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  logo: string;
  category: 'enterprise' | 'startup' | 'agency' | 'government';
  results: {
    metric: string;
    value: string;
    change: string;
  }[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "Fortune 500 Tech Corp",
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team's expertise and dedication exceeded our expectations.",
    rating: 5,
    avatar: "/images/testimonials/sarah-chen.jpg",
    logo: "/images/companies/fortune500-tech.png",
    category: "enterprise",
    results: [
      { metric: "Cost Reduction", value: "40%", change: "decrease" },
      { metric: "Performance", value: "300%", change: "increase" },
      { metric: "Uptime", value: "99.99%", change: "improvement" }
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "CEO",
    company: "InnovateStart AI",
    content: "Working with Zion Tech Group was a game-changer for our startup. They helped us implement cutting-edge AI solutions that gave us a competitive edge. Their cloud infrastructure setup was flawless and scalable.",
    rating: 5,
    avatar: "/images/testimonials/marcus-rodriguez.jpg",
    logo: "/images/companies/innovate-ai.png",
    category: "startup",
    results: [
      { metric: "Time to Market", value: "-60%", change: "faster" },
      { metric: "Scalability", value: "500%", change: "increase" },
      { metric: "User Growth", value: "250%", change: "increase" }
    ]
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations transform their technology infrastructure and achieve remarkable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-lg p-2 shadow-lg">
            {['all', 'enterprise', 'startup', 'agency', 'government'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {currentTestimonial && (
                <>
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-gray-600">
                        {currentTestimonial.position} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentTestimonial.results.map((result, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          {result.change}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-gray-600" />
              ) : (
                <Play className="w-6 h-6 text-gray-600" />
              )}
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;