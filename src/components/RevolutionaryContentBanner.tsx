import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: "🚀 BREAKTHROUGH: Neural Networks Revolution",
      subtitle: "Advanced AI with 99.9% accuracy - Experience the future today!",
      link: "/pages/AdvancedNeuralNetworks2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900"
    },
    {
      id: 2,
      title: "🔗 REVOLUTIONARY: Blockchain 2025",
      subtitle: "Web3, DeFi, and Enterprise solutions - Transform your business!",
      link: "/pages/BlockchainRevolution2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900"
    },
    {
      id: 3,
      title: "🌱 SUSTAINABLE: Green Tech Solutions",
      subtitle: "80% energy reduction, carbon neutral - Save the planet & money!",
      link: "/pages/SustainableTech2025",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-900 to-emerald-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentBannerData.bgColor} rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold">{currentBannerData.title}</h3>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {currentBannerData.subtitle}
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href={currentBannerData.link} 
              className={`inline-block bg-gradient-to-r ${currentBannerData.color} backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:scale-105`}
            >
              Explore Now →
            </a>
            <button className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg border-2 border-white/30">
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Banner Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link}
            className={`bg-gradient-to-br ${banner.bgColor} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 border border-white/20 ${
              index === currentBanner ? 'ring-4 ring-white/50' : ''
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">
                {banner.id === 1 ? '🧠' : banner.id === 2 ? '🔗' : '🌱'}
              </div>
              <h4 className="text-lg font-bold mb-2">{banner.title.split(':')[1]}</h4>
              <p className="text-sm opacity-90">{banner.subtitle}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Performance Stats */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 text-white mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">🌟 Revolutionary Technology Impact</h3>
          <p className="text-lg opacity-90">Join thousands of companies already transforming their future</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">99.9%</div>
            <div className="text-sm">AI Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">80%</div>
            <div className="text-sm">Energy Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">$3.2T</div>
            <div className="text-sm">Blockchain Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
            <div className="text-sm">Global Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;