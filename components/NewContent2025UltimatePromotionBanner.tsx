import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Atom, 
  Bot, 
  Rocket, 
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Globe
} from 'lucide-react';

const NewContent2025UltimatePromotionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "AI 2025-2030 Comprehensive Predictions",
      subtitle: "Revolutionary insights into the next decade of artificial intelligence",
      description: "Discover groundbreaking predictions, breakthrough technologies, and transformative changes that will reshape our world.",
      features: [
        "Neural-Symbolic Fusion breakthroughs",
        "Quantum-Neural Hybrid Systems",
        "Consciousness-Level AI development",
        "Singularity-Level Intelligence predictions"
      ],
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20",
      link: "/ai-2025-2030-predictions"
    },
    {
      title: "Quantum Computing Breakthroughs 2025",
      subtitle: "Revolutionary quantum technologies achieving practical applications",
      description: "Explore the quantum revolution with fault-tolerant computing, quantum internet, and exponential speedup applications.",
      features: [
        "1000+ Qubit Systems deployed",
        "Quantum Internet infrastructure",
        "Fault-tolerant quantum computing",
        "Quantum machine learning applications"
      ],
      icon: Atom,
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20",
      link: "/quantum-computing-breakthroughs"
    },
    {
      title: "Advanced Automation Solutions 2025",
      subtitle: "Transform your business with revolutionary automation technologies",
      description: "Achieve unprecedented efficiency gains, cost reductions, and operational excellence with our comprehensive automation platform.",
      features: [
        "2,500% efficiency improvements",
        "85% cost reduction achieved",
        "99.9% accuracy in processes",
        "10,000x faster processing speeds"
      ],
      icon: Bot,
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-900/20 to-blue-900/20",
      link: "/automation-solutions"
    }
  ];

  const stats = [
    { label: "New Content Sections", value: "50+", icon: Star },
    { label: "Interactive Features", value: "25+", icon: Zap },
    { label: "Industry Applications", value: "15+", icon: Globe },
    { label: "Success Stories", value: "100+", icon: Users }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-bold mb-8 shadow-lg"
          >
            <Star className="w-5 h-5 mr-2" />
            🚀 NEW: Ultimate Content Collection 2025
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most comprehensive collection of AI predictions, quantum breakthroughs, 
            and automation solutions that will define the future of technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`p-12 bg-gradient-to-r ${slides[currentSlide].bgColor} rounded-2xl border border-white/20`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${slides[currentSlide].color} flex items-center justify-center mr-6`}>
                      <slides[currentSlide].icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{slides[currentSlide].title}</h3>
                      <p className="text-lg text-blue-300 font-semibold">{slides[currentSlide].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {slides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={slides[currentSlide].link}
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${slides[currentSlide].color} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl"></div>
                  <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-center">
                      <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${slides[currentSlide].color} flex items-center justify-center`}>
                        <slides[currentSlide].icon className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Interactive Preview</h4>
                      <p className="text-gray-300 mb-6">
                        Experience the future of technology with our interactive content showcases, 
                        real-time demonstrations, and hands-on exploration tools.
                      </p>
                      <div className="flex justify-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">99.9%</div>
                          <div className="text-sm text-gray-400">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">2,500%</div>
                          <div className="text-sm text-gray-400">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">24/7</div>
                          <div className="text-sm text-gray-400">Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-500 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-gradient-to-br ${slide.bgColor} rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${slide.color} flex items-center justify-center mb-6`}>
                <slide.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{slide.title}</h3>
              <p className="text-gray-300 mb-4">{slide.subtitle}</p>
              <div className="flex items-center text-blue-400 font-semibold">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Miss the Future
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking professionals who are already exploring these revolutionary 
              technologies and transforming their businesses for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/content-hub"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Explore All Content
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex items-center px-10 py-5 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Clock className="w-6 h-6 mr-3" />
                Get Updates
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContent2025UltimatePromotionBanner;