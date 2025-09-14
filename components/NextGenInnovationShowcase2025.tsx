"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const NextGenInnovationShowcase2025: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [hoveredCardsetHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const innovations = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      icon: '📊',
      description: 'Advanced machine learning algorithms for predictive insights',
      features: ['Real-time Analysis'Predictive Modeling'Automated Insights'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Revolutionary computing power for complex problem solving',
      features: ['Quantum Algorithms'Optimization'Cryptography'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Neural Interfaces',
      icon: '🧠',
      description: 'Direct brain-computer interaction technologies',
      features: ['BCI Systems'Cognitive Enhancement'Mind Control'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Blockchain Solutions',
      icon: '⛓️',
      description: 'Securedecentralized systems for modern applications',
      features: ['Smart Contracts'DeFi'NFT Integration'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'IoT Networks',
      icon: '🌐',
      description: 'Connected devices creating smart ecosystems',
      features: ['Sensor Networks'Edge Computing'Real-time Monitoring'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Robotic Automation',
      icon: '🤖',
      description: 'Intelligent robots transforming industries',
      features: ['Industrial Robots'Service Bots'Autonomous Systems'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className={`py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-white font-medium">Next Generation Innovation</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase 2025
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the cutting-edge technologies that are reshaping our world. 
            From AI to quantum computingdiscover innovations that will define the future.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovationindex) => (
            <div
              key={innovation.id}
              onMouseEnter={() => setHoveredCard(innovation.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group cursor-pointer transition-all duration-500 transform ${
                hoveredCard === innovation.id ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`relative bg-gradient-to-br ${innovation.gradient} p-8 rounded-2xl overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/30 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{innovation.icon}</span>
                    <div className={`w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center ${
                      hoveredCard === innovation.id ? 'animate-spin' : ''
                    }`}>
                      <div className="w-6 h-6 border-2 border-white/50 border-t-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {innovation.features.map((featureidx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30">
                    Learn More
                  </button>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 ${
                  hoveredCard === innovation.id ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Experience the Future
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Watch our technologies in action. From AI processing to quantum simulations
                see how these innovations solve real-world problems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">▶️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Live Demo Sessions</h4>
                    <p className="text-gray-400">Interactive demonstrations of our latest technologies</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Custom Solutions</h4>
                    <p className="text-gray-400">Tailored implementations for your specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Rapid Deployment</h4>
                    <p className="text-gray-400">Quick implementation with minimal disruption</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-6">🎮</div>
                  <h4 className="text-2xl font-bold text-white mb-4">Interactive Experience</h4>
                  <p className="text-gray-300 mb-6">
                    Try our technologies hands-on in our virtual lab
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-400">98%</div>
                      <div className="text-sm text-gray-300">Accuracy Rate</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">0.1s</div>
                      <div className="text-sm text-gray-300">Response Time</div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    Launch Virtual Lab
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Lead the Innovation Revolution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our 
              next-generation technologies to stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Talk to an Expert
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 text-blue-100">
              <p>✓ Free 30-day trial • ✓ No setup fees • ✓ 24/7 expert support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationShowcase2025;