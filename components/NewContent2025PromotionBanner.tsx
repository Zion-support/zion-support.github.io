import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Star, TrendingUp, Users, Award, Brain, Target } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  const newContentFeatures = [
    {
      icon: Brain,
      title: "AI Breakthroughs",
      description: "Latest neural architecture and quantum AI innovations",
      count: "47 new breakthroughs"
    },
    {
      icon: Target,
      title: "Quantum Solutions",
      description: "Revolutionary quantum computing applications",
      count: "23 quantum solutions"
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Intelligent process automation and smart systems",
      count: "35 automation tools"
    },
    {
      icon: Star,
      title: "Success Stories",
      description: "Proven results from leading companies",
      count: "89 success stories"
    }
  ];

  const stats = [
    { label: "New Content", value: "500+", icon: TrendingUp },
    { label: "Total Views", value: "25M+", icon: Users },
    { label: "Success Rate", value: "99.8%", icon: Award },
    { label: "ROI Average", value: "2,500%", icon: Star }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-lg font-semibold mb-6">
            <Zap className="w-5 h-5 mr-3 animate-pulse" />
            🚀 NEW CONTENT 2025 - REVOLUTIONARY AI BREAKTHROUGHS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the Future of
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI Technology
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our massive collection of cutting-edge AI breakthroughs, quantum computing solutions, 
            automation tools, and proven success stories that are transforming industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/new-content-2025"
              className="group px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore New Content
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/content-discovery"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Interactive Discovery
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newContentFeatures.map((feature, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-4 group-hover:bg-white/30 transition-colors">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm mb-3">{feature.description}</p>
              <div className="text-yellow-300 font-semibold text-sm">{feature.count}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of companies already using our AI solutions to achieve extraordinary results. 
              Get started with a free consultation and discover your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo"
                className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Try Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025PromotionBanner;