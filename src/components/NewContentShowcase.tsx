import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
  BarChart3,
  Clock,
  DollarSign,
  Lightbulb,
  Rocket,
  Eye,
  Cpu,
  Network
} from 'lucide-react';

const NewContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newContentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Trends 2025",
      description: "Discover breakthrough technologies reshaping industries",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-600",
      features: ["Consciousness AI", "Quantum Internet", "Autonomous Security"],
      link: "/pages/RevolutionaryTechTrends2025",
      badge: "NEW",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      id: 2,
      title: "AI Business Transformation",
      description: "Transform your business with cutting-edge AI solutions",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      features: ["Intelligent Automation", "Predictive Analytics", "Smart Security"],
      link: "/pages/AIBusinessTransformation2025",
      badge: "HOT",
      badgeColor: "bg-cyan-100 text-cyan-700"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub",
      description: "Welcome to the future of innovation and research",
      icon: Code,
      color: "from-emerald-500 to-teal-600",
      features: ["AGI Research", "Quantum-AI Hybrid", "Neural Interfaces"],
      link: "/pages/NextGenInnovationHub2025",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-emerald-100 text-emerald-700"
    },
    {
      id: 4,
      title: "Business Automation Guide",
      description: "Complete roadmap to automate 80% of operations",
      icon: Rocket,
      color: "from-orange-500 to-red-600",
      features: ["90-Day Plan", "Proven ROI", "Case Studies"],
      link: "/pages/BusinessAutomationGuide2025",
      badge: "POPULAR",
      badgeColor: "bg-orange-100 text-orange-700"
    },
    {
      id: 5,
      title: "Advanced Tech Solutions 2026",
      description: "Next-generation technologies for business innovation",
      icon: Cpu,
      color: "from-pink-500 to-rose-600",
      features: ["Neural Networks 3.0", "Quantum Computing", "Bio-Integration"],
      link: "/pages/AdvancedTechSolutions2026",
      badge: "FUTURE",
      badgeColor: "bg-pink-100 text-pink-700"
    },
    {
      id: 6,
      title: "Innovation Showcase 2026",
      description: "Revolutionary innovations reshaping business and society",
      icon: Star,
      color: "from-violet-500 to-purple-600",
      features: ["Consciousness AI", "Quantum Internet", "Genetic Optimization"],
      link: "/pages/InnovationShowcase2026",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-violet-100 text-violet-700"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContentItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, newContentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newContentItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newContentItems.length) % newContentItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentItem = newContentItems[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            🌟 Revolutionary New Content
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our latest breakthrough content that's reshaping the future of technology and business innovation.
          </p>
        </motion.div>

        {/* Main Showcase Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-0 min-h-[500px]"
              >
                {/* Content Section */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${currentItem.badgeColor} mr-4`}>
                      {currentItem.badge}
                    </span>
                    <div className={`w-12 h-12 bg-gradient-to-r ${currentItem.color} rounded-xl flex items-center justify-center`}>
                      <currentItem.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-8">
                    {currentItem.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {currentItem.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={currentItem.link}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  >
                    Explore Now <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>

                {/* Visual Section */}
                <div className={`bg-gradient-to-br ${currentItem.color} p-12 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10 text-center text-white">
                    <currentItem.icon className="w-32 h-32 mx-auto mb-8 opacity-80" />
                    <div className="text-6xl font-bold mb-4 opacity-90">
                      {currentItem.id.toString().padStart(2, '0')}
                    </div>
                    <div className="text-2xl font-semibold opacity-80">
                      {currentItem.badge}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/20 rounded-full animate-pulse delay-500"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6 text-gray-600 rotate-180" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {newContentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Quick Access to All New Content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {newContentItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.id}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${item.badgeColor} mb-3`}>
                    {item.badge}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase;