import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 New AI Enterprise Solutions 2025",
      description: "Discover our comprehensive AI solutions delivering 500% ROI",
      link: "/ai-enterprise-solutions-2025",
      cta: "Explore Solutions",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "📊 TechCorp Success Story",
      description: "See how we helped achieve 500% ROI and 60% cost reduction",
      link: "/case-study-techcorp-2025",
      cta: "Read Case Study",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "🤖 Latest AI Insights",
      description: "5 new blog posts covering AI strategy, quantum computing, and MLOps",
      link: "/blog",
      cta: "Read Articles",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-green-500/20 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎉 New Content & Solutions Available!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our latest AI enterprise solutions, success stories, and expert insights 
            designed to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Promotion Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${promo.gradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                currentSlide === index ? 'ring-2 ring-white/50' : ''
              }`}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold mb-3">{promo.title}</h3>
                <p className="text-white/90 mb-4">{promo.description}</p>
                <Link
                  to={promo.link}
                  className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 backdrop-blur-sm"
                >
                  {promo.cta} →
                </Link>
              </div>
              
              {/* Animated elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-white/80 text-sm">New Blog Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-white/80 text-sm">New Service Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1</div>
              <div className="text-white/80 text-sm">Success Case Study</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500%</div>
              <div className="text-white/80 text-sm">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Services
          </Link>
          <Link
            to="/blog"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 backdrop-blur-sm border border-white/30"
          >
            Read Latest Articles
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 border border-white/50 hover:border-white"
          >
            Get Started Today
          </Link>
        </div>

        {/* Dismiss button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white text-sm transition duration-300"
          >
            Dismiss this notification
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;