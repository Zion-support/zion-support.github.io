import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const services = useMemo(() => [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions for your business needs.",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Micro SaaS",
      description: "Scalable micro software-as-a-service solutions.",
      icon: "⚡",
      features: ["Rapid Deployment", "Scalable Architecture", "API Integration", "Cloud Native"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT support and consulting services.",
      icon: "💻",
      features: ["Infrastructure Management", "Security Solutions", "Cloud Migration", "24/7 Support"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions.",
      icon: "⚛️",
      features: ["Quantum Algorithms", "Quantum Simulation", "Optimization", "Research & Development"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Blockchain",
      description: "Decentralized solutions and smart contracts.",
      icon: "🔗",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Web3 Integration"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Space Technology",
      description: "Advanced aerospace and satellite solutions.",
      icon: "🚀",
      features: ["Satellite Systems", "Space Analytics", "Launch Services", "Orbital Mechanics"],
      gradient: "from-sky-500 to-blue-500"
    }
  ], []);

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
                      className={`group bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer transition-all duration-1000 delay-${index * 100} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className={`text-4xl mb-4 transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transition-all duration-300`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                            <span className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 transition-all duration-300 ${hoveredService === index ? 'scale-125' : ''}`}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
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

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sarah Johnson",
                      role: "CTO, TechCorp",
                      content: "Zion's AI solutions transformed our operations completely. The results exceeded our expectations.",
                      rating: 5
                    },
                    {
                      name: "Michael Chen",
                      role: "CEO, InnovateLab",
                      content: "Their quantum computing expertise gave us a competitive edge we never thought possible.",
                      rating: 5
                    },
                    {
                      name: "Emily Rodriguez",
                      role: "VP Engineering, SpaceTech",
                      content: "Outstanding service and cutting-edge technology. Zion is truly ahead of the curve.",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                      <div className="border-t border-purple-500/30 pt-4">
                        <div className="font-semibold text-purple-300">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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