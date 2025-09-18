import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Target } from 'lucide-react';

const UltimateContentShowcase2026Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6">
            <Star className="h-4 w-4 mr-2" />
            NEW: Ultimate Content Showcase 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate AI Innovations
            </span>
            of 2026
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore groundbreaking AI technologies, quantum computing breakthroughs, and revolutionary 
            solutions that will transform your business forever.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Brain,
              title: "Conscious AI Systems",
              description: "AI with genuine consciousness and emotional intelligence",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Zap,
              title: "Quantum AI Processing",
              description: "10,000x faster processing with quantum computing",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: Target,
              title: "Autonomous Operations",
              description: "Complete business automation with self-managing AI",
              color: "from-green-500 to-emerald-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "AI 2026 Ultimate Innovation Hub",
              description: "Comprehensive showcase of the most advanced AI technologies",
              link: "/ai-2026-ultimate-innovation-hub",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
              badge: "New"
            },
            {
              title: "Quantum AI Revolution 2026",
              description: "Experience quantum-powered artificial intelligence",
              link: "/quantum-ai-revolution-2026",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
              badge: "Revolutionary"
            },
            {
              title: "Advanced AI Consciousness 2026",
              description: "AI systems with genuine consciousness and self-awareness",
              link: "/advanced-ai-consciousness-2026",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
              badge: "Breakthrough"
            }
          ].map((content, index) => (
            <Link
              key={index}
              to={content.link}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                    {content.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {content.description}
                </p>
                <div className="flex items-center text-blue-400 text-sm font-semibold mt-4 group-hover:text-blue-300">
                  Explore Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/ai-2026-ultimate-innovation-hub"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Innovations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026Banner;