import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "AI 2025 Next Generation Solutions",
      description: "Cutting-edge AI technology for tomorrow",
      link: "/ai-2025-next-generation-solutions",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "AI 2025 Advanced Services Showcase",
      description: "Premium AI solutions & services",
      link: "/ai-2025-advanced-services-showcase",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Revolutionary Breakthroughs",
      description: "Latest AI innovations and predictions",
      link: "/ai-2025-ultimate-breakthrough",
      color: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg mb-4 animate-bounce">
            🚀 NEW CONTENT ALERT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Our Latest AI 2025 Innovations
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore groundbreaking content, cutting-edge solutions, and premium services that are reshaping the future of artificial intelligence.
          </p>
        </div>

        {/* Feature showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                index === currentFeature ? 'scale-105' : 'scale-95'
              }`}
            >
              <Link href={feature.link} className="block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-4 mx-auto`}>
                    {index === 0 && "🔮"}
                    {index === 1 && "🏆"}
                    {index === 2 && "⚡"}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {feature.description}
                  </p>
                  <div className={`w-full py-2 px-4 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-full text-center hover:shadow-lg transition-all duration-300`}>
                    Explore Now →
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-emerald-400">50+</div>
            <div className="text-sm text-gray-300">New Pages</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-blue-400">2,500%</div>
            <div className="text-sm text-gray-300">ROI Guarantee</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
            <div className="text-2xl font-bold text-yellow-400">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-innovation-hub-2025" 
              className="px-8 py-4 border-2 border-emerald-400 text-emerald-300 font-bold text-lg rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Join 10,000+ businesses already transforming with our AI solutions
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75 animation-delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-75 animation-delay-3000"></div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default NewContent2025PromotionBanner;