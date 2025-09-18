import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SpaceTechInnovation2027Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentFeature, setCurrentFeature] = useState<number>(0);
  const featureRef = useRef<number>(0);

  const features = [
    {
      title: "Quantum Space Drive",
      description: "Near-light-speed travel with zero fuel consumption",
      icon: "🚀",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Self-Replicating Stations",
      description: "Autonomous space stations that build themselves",
      icon: "🏗️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Neural Space Communication",
      description: "Direct brain-to-brain communication across space",
      icon: "🧠",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "AI Terraforming",
      description: "Transform planets into habitable environments",
      icon: "🌍",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      featureRef.current = (featureRef.current + 1) % features.length;
      setCurrentFeature(featureRef.current);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
              🌌 SPACE BREAKTHROUGH
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Space Tech Innovation 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Revolutionary space technologies that make interstellar travel and planetary colonization a reality
            </p>
          </div>

          {/* Feature Carousel */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${feature.color} p-8 md:p-12 rounded-2xl`}>
                      <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl mb-6">{feature.icon}</div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                          {feature.title}
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                          {feature.description}
                        </p>
                        <Link
                          to="/space-tech-innovation-2027"
                          className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                          Explore Technology
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeature ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12</div>
              <div className="text-white font-semibold">Active Missions</div>
              <div className="text-gray-300 text-sm">Exploring the cosmos</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">47</div>
              <div className="text-white font-semibold">Planets Found</div>
              <div className="text-gray-300 text-sm">Potentially habitable</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-white font-semibold">Success Rate</div>
              <div className="text-gray-300 text-sm">Mission reliability</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-white font-semibold">Possibilities</div>
              <div className="text-gray-300 text-sm">Endless exploration</div>
            </div>
          </div>

          {/* Technology Preview */}
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-8 border border-white/20 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Experience Quantum Space Drive
              </h3>
              <p className="text-gray-300 mb-6">
                Watch our revolutionary propulsion system in action, propelling spacecraft to near-light speeds
              </p>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/space-tech-innovation-2027"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Technologies
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Join Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2027Banner;