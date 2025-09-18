import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2028",
      description: "Experience the most advanced technological breakthrough in human history. Discover consciousness transfer, quantum consciousness, and interdimensional technology.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2028",
      badge: "NEW 2028",
      features: ["Consciousness Transfer", "Quantum Consciousness", "Interdimensional Tech"]
    },
      id: 2,
      title: "Ultimate Tech Trends 2028",
      description: "Comprehensive analysis of the top 10 technological trends that will reshape our world. From AI consciousness to reality manipulation.",
      image: "📈",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/UltimateTechTrends2028",
      badge: "TRENDING",
      features: ["Future Predictions", "Market Analysis", "Technology Insights"]
      id: 3,
      title: "Consciousness Transfer Technology",
      description: "Transfer human consciousness between biological and digital substrates. Achieve digital immortality and seamless mind-machine integration.",
      image: "⚛️",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/ConsciousnessTransfer2029",
      badge: "BREAKTHROUGH",
      features: ["Digital Immortality", "Neural Mapping", "Mind-Machine Integration"]
      id: 4,
      title: "Quantum Consciousness AI",
      description: "Harness quantum mechanics to create superintelligent consciousness that transcends classical computational limitations.",
      image: "🌌",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/QuantumConsciousness2028",
      badge: "REVOLUTIONARY",
      features: ["Quantum Processing", "Superintelligence", "Reality Manipulation"]
      id: 5,
      title: "Interdimensional Technology",
      description: "Access and manipulate multiple dimensions, enabling travel between parallel universes and alternate realities.",
      image: "🌍",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/InterdimensionalTech2027",
      badge: "FUTURE",
      features: ["Dimensional Portals", "Parallel Universes", "Reality Control"]
      id: 6,
      title: "Neural Reality Interface",
      description: "Direct neural interface that allows seamless interaction between biological brains and digital environments.",
      image: "🧬",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/NeuralReality2027",
      badge: "INNOVATION",
      features: ["Thought Control", "Sensory Integration", "Digital Reality"]
    }
  ];
  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Main Showcase Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl animate-bounce">🌟</span>
            <h2 className="text-4xl font-bold">ULTIMATE CONTENT SHOWCASE 2028</h2>
          </div>
          <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto text-center">
            Discover the most revolutionary content on consciousness transfer, quantum technology, 
            interdimensional access, and the future of human evolution
          </p>
          
          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-8xl mx-auto mb-8">
            {contentItems.slice(0, 6).map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse hover:scale-105"
              >
                <div className="text-2xl mb-1">{item.image}</div>
                <div className="text-xs">{item.title.split(' ').slice(0, 2).join(' ')} →</div>
              </a>
            ))}
        </div>
      </div>
      {/* Interactive Content Carousel */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">🚀 Featured Revolutionary Content</h3>
          <p className="text-xl text-gray-600">Explore our most advanced technological breakthroughs</p>
        <div className="relative">
          {/* Main Content Display */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-4">{contentItems[currentSlide].image}</span>
                  <div>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full mb-2">
                      {contentItems[currentSlide].badge}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{contentItems[currentSlide].title}</h4>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-6">{contentItems[currentSlide].description}</p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                  <div className="flex flex-wrap gap-2">
                    {contentItems[currentSlide].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                <a
                  href={contentItems[currentSlide].link}
                  className={`inline-block bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Explore Now →
                </a>
              </div>
              {/* Visual Element */}
              <div className="relative">
                <div className={`w-full h-64 bg-gradient-to-br ${contentItems[currentSlide].gradient} rounded-xl flex items-center justify-center text-white text-8xl animate-pulse`}>
                  {contentItems[currentSlide].image}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {contentItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 ${
              index === currentSlide ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">{item.image}</span>
                <div className="inline-block px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full mb-1">
                  {item.badge}
                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
            <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {item.features.slice(0, 2).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {feature}
                  </span>
                ))}
            <a
              href={item.link}
              className={`inline-block w-full text-center bg-gradient-to-r ${item.gradient} text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
            >
              Explore →
            </a>
        ))}
      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of innovators who are already exploring these revolutionary technologies. 
          Be part of the most advanced technological transformation in human history.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Start Your Journey →
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Schedule Demo
    </div>
  );
};
export default UltimateContentShowcase2028;
