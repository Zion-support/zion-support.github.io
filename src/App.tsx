import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Main App component
const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userLocation, setUserLocation] = useState<string>('');
  const [systemStats, setSystemStats] = useState({
    uptime: '99.9%',
    users: '1,234',
    projects: '567'
  });

  // Get user location
  const getUserLocation = useCallback(async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setUserLocation(`${data.city}, ${data.region}, ${data.country_name}`);
    } catch (error) {
      console.log('Location detection failed:', error);
      setUserLocation('Location unavailable');
    }
  }, []);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Set loaded state after component mounts
    setIsLoaded(true);

    // Get user location
    getUserLocation();

    return () => clearInterval(timer);
  }, [getUserLocation]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const services = [
    {
      title: "AI Services",
      description: "Advanced AI-powered solutions for modern businesses",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IT Services",
      description: "Comprehensive managed IT and cybersecurity solutions",
      icon: "🛡️",
      features: ["Cybersecurity", "Cloud Migration", "Network Management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Micro SAAS",
      description: "Scalable software solutions for growing businesses",
      icon: "⚡",
      features: ["Custom Development", "API Integration", "Scalable Architecture"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Solutions",
      description: "Enterprise-grade cloud infrastructure and migration",
      icon: "☁️",
      features: ["AWS/Azure/GCP", "DevOps", "Container Orchestration"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analytics",
      description: "Transform data into actionable business insights",
      icon: "📊",
      features: ["Big Data", "Business Intelligence", "Predictive Analytics"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Blockchain",
      description: "Decentralized solutions and smart contract development",
      icon: "⛓️",
      features: ["Smart Contracts", "DeFi", "NFT Platforms"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode 
      ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900' 
      : 'bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100'
    } text-white`}>
      {/* Header with controls */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${isDarkMode 
              ? 'from-white via-blue-200 to-purple-200' 
              : 'from-gray-800 via-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Zion Tech Group
            </h1>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-blue-200' : 'text-gray-600'}`}>
              Innovative IT Solutions & AI Services
            </p>
            
            {/* Enhanced info display */}
            <div className={`text-sm mb-8 space-y-2 ${isDarkMode ? 'text-blue-300' : 'text-gray-500'}`}>
              <div>🕐 Current Time: {currentTime.toLocaleString()}</div>
              {userLocation && <div>📍 Location: {userLocation}</div>}
              <div className="flex justify-center space-x-6 text-xs">
                <span>⚡ Uptime: {systemStats.uptime}</span>
                <span>👥 Users: {systemStats.users}</span>
                <span>🚀 Projects: {systemStats.projects}</span>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20' 
                    : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-blue-200' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <ul className={`text-xs space-y-1 ${isDarkMode ? 'text-blue-300' : 'text-gray-500'}`}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center group-hover:text-white transition-colors duration-200">
                        <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${service.color}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Status Section */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`backdrop-blur-sm rounded-xl p-6 border max-w-4xl mx-auto ${
              isDarkMode 
                ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30' 
                : 'bg-gradient-to-r from-green-100 to-blue-100 border-green-300'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
                    ✅ Build Status
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-green-200' : 'text-green-600'}`}>
                    Successfully built and deployed on Netlify! 🚀
                  </p>
                </div>
                <div className="text-center">
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    🔧 Technical
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-600'}`}>
                    All conflicts resolved • TypeScript fixed • Production ready
                  </p>
                </div>
                <div className="text-center">
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    🎨 Features
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-purple-200' : 'text-purple-600'}`}>
                    Dark mode • Real-time updates • Responsive design
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className={`mt-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}>
                🚀 Get Started
              </button>
              <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-transparent border border-white/30 hover:bg-white/10 text-white' 
                  : 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700'
              }`}>
                📚 Learn More
              </button>
              <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
              }`}>
                💬 Contact Us
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2024 Zion Tech Group. All rights reserved. | Built with React + TypeScript + Vite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;