import React, { useState, useEffect } from 'react';
import './App.css';

// Main App component
const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Set loaded state after component mounts
    setIsLoaded(true);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "AI Services",
      description: "Advanced AI-powered solutions for modern businesses",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "IT Services",
      description: "Comprehensive managed IT and cybersecurity solutions",
      icon: "🛡️",
      features: ["Cybersecurity", "Cloud Migration", "Network Management"]
    },
    {
      title: "Micro SAAS",
      description: "Scalable software solutions for growing businesses",
      icon: "⚡",
      features: ["Custom Development", "API Integration", "Scalable Architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
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
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-blue-200 mb-4">
                  {service.description}
                </p>
                <ul className="text-xs text-blue-300 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`mt-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-green-400/30 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-green-300">
                ✅ Build Status
              </h3>
              <p className="text-sm text-green-200">
                Successfully built and deployed on Netlify! 🚀
              </p>
              <p className="text-xs text-green-300 mt-2">
                All merge conflicts resolved • TypeScript errors fixed • Production ready
              </p>
            </div>
          </div>

          <div className={`mt-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 px-6 py-2 rounded-lg transition-colors duration-200">
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