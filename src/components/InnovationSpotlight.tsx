import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, TrendingUp, Users, Globe } from 'lucide-react';

const InnovationSpotlight: React.FC = () => {
  const [currentInnovation, setCurrentInnovation] = useState(0);

  const innovations = [
    {
      title: "Quantum-Enhanced AI Processing",
      description: "Revolutionary quantum computing integration that processes complex AI algorithms 1000x faster than traditional systems.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
      stats: { speed: "1000x", accuracy: "99.9%", clients: "500+" },
      category: "AI & Quantum Computing"
    },
    {
      title: "Autonomous Security Networks",
      description: "Self-healing cybersecurity systems that adapt and evolve to protect against emerging threats in real-time.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      stats: { threats: "Zero", uptime: "99.99%", response: "<1ms" },
      category: "Cybersecurity"
    },
    {
      title: "Global Edge Computing Mesh",
      description: "Distributed computing network spanning 100+ countries, delivering ultra-low latency services worldwide.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
      stats: { latency: "<10ms", coverage: "100+", nodes: "10,000+" },
      category: "Edge Computing"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = innovations[currentInnovation];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Innovation Spotlight
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our groundbreaking innovations that are reshaping industries and setting new standards for technological excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium">
                  {current.category}
                </span>
                <div className="flex space-x-1">
                  {innovations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentInnovation(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentInnovation ? 'bg-blue-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{current.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(current.stats).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Patents Filed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2B+</div>
                <div className="text-sm text-gray-400">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Innovation Lab</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <button className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6">
              Join industry leaders who are already leveraging our cutting-edge innovations to drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                Schedule Innovation Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              >
                View Research Papers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSpotlight;