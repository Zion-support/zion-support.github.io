import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  CheckCircle,
  Rocket,
  Brain,
  Cpu,
  Shield,
  Target,
  BarChart3,
  Globe,
  Building2
} from 'lucide-react';

const UltimateContentPromotionBanner2027: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Solutions",
      description: "99.9% accuracy with self-learning capabilities"
    },
    {
      icon: Cpu,
      title: "Quantum Computing",
      description: "Breakthrough quantum solutions for complex problems"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security with zero-trust architecture"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered targeting with 95% accuracy"
    }
  ];

  const stats = [
    { number: "2,800%", label: "Average ROI", icon: TrendingUp },
    { number: "730+", label: "Successful Projects", icon: Award },
    { number: "$50M+", label: "Total Cost Savings", icon: BarChart3 },
    { number: "99.9%", label: "Client Satisfaction", icon: Star }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Ultimate Content Revolution 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most comprehensive AI content ecosystem ever created. Revolutionary breakthroughs, 
              quantum computing solutions, and autonomous systems delivering unprecedented ROI and transformation.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/ultimate-content-revolution-2027"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              Explore Ultimate Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/roi-calculator"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center gap-2"
            >
              Calculate Your ROI
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Users className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="font-bold text-white">50,000+</div>
                <div className="text-sm">Satisfied Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Award className="w-6 h-6 text-yellow-400" />
              <div className="text-left">
                <div className="font-bold text-white">Industry Leading</div>
                <div className="text-sm">Solutions</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Zap className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <div className="font-bold text-white">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner2027;