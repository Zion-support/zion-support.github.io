import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions for your business needs.",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Micro SaaS",
      description: "Scalable micro software-as-a-service solutions.",
      icon: "⚡",
      features: ["Rapid Deployment", "Scalable Architecture", "API Integration", "Cloud Native"]
    },
    {
      title: "IT Services",
      description: "Comprehensive IT support and consulting services.",
      icon: "💻",
      features: ["Infrastructure Management", "Security Solutions", "Cloud Migration", "24/7 Support"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions.",
      icon: "⚛️",
      features: ["Quantum Algorithms", "Quantum Simulation", "Optimization", "Research & Development"]
    },
    {
      title: "Blockchain",
      description: "Decentralized solutions and smart contracts.",
      icon: "🔗",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Web3 Integration"]
    },
    {
      title: "Space Technology",
      description: "Advanced aerospace and satellite solutions.",
      icon: "🚀",
      features: ["Satellite Systems", "Space Analytics", "Launch Services", "Orbital Mechanics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion
                </h1>
                <p className="text-2xl md:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  The future of technology is here. Transform your business with our cutting-edge AI, quantum computing, and space technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Explore Solutions
                  </button>
                  <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={service.title}
                      className={`bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-1000 delay-${index * 100} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-300">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
                    <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
                    <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime Guarantee</div>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
                    <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-12">
                  Join hundreds of companies already using our cutting-edge technology solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Start Your Project
                  </button>
                  <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;