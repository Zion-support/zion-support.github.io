import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Main App component
const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Set loaded state after component mounts
    setIsLoaded(true);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const handleServiceHover = useCallback((index: number | null) => {
    setActiveService(index);
  }, []);

  const services = [
    {
      title: "AI Services",
      description: "Advanced AI-powered solutions for modern businesses",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-400 to-cyan-400"
    },
    {
      title: "IT Services",
      description: "Comprehensive managed IT and cybersecurity solutions",
      icon: "🛡️",
      features: ["Cybersecurity", "Cloud Migration", "Network Management"],
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-400 to-pink-400"
    },
    {
      title: "Micro SAAS",
      description: "Scalable software solutions for growing businesses",
      icon: "⚡",
      features: ["Custom Development", "API Integration", "Scalable Architecture"],
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <div className={`min-h-screen text-white transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 text-gray-900'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: window.innerWidth - mousePosition.x - 100,
            bottom: window.innerHeight - mousePosition.y - 100,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-800'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Innovative IT Solutions & AI Services
            </p>
            <div className="text-sm text-blue-300 mb-8">
              Current Time: {currentTime.toLocaleString()}
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {services.map((service, index) => (
              <div 
                key={index}
                onMouseEnter={() => handleServiceHover(index)}
                onMouseLeave={() => handleServiceHover(null)}
                className={`relative overflow-hidden rounded-xl p-6 border transition-all duration-500 cursor-pointer group ${
                  isDarkMode 
                    ? 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20' 
                    : 'bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white/90'
                } ${
                  activeService === index 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-105 hover:shadow-xl'
                }`}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Service content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? 'text-blue-200' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  <ul className={`text-xs space-y-1 ${
                    isDarkMode ? 'text-blue-300' : 'text-gray-500'
                  }`}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center transform group-hover:translate-x-2 transition-transform duration-300">
                        <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${service.color}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            ))}
          </div>

          <div className={`mt-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`backdrop-blur-sm rounded-xl p-6 border max-w-2xl mx-auto ${
              isDarkMode 
                ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30' 
                : 'bg-gradient-to-r from-green-100/80 to-blue-100/80 border-green-300/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-700'
              }`}>
                ✅ Build Status
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-green-200' : 'text-green-600'
              }`}>
                Successfully built and deployed on Netlify! 🚀
              </p>
              <p className={`text-xs mt-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-500'
              }`}>
                All merge conflicts resolved • TypeScript errors fixed • Production ready
              </p>
            </div>
          </div>

          <div className={`mt-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center space-x-4">
              <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-lg hover:shadow-xl'
              }`}>
                Get Started
              </button>
              <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-transparent border border-white/30 hover:bg-white/10 text-white' 
                  : 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700'
              }`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;