import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  ArrowRight,;
  Play,;
  Star,;
  CheckCircle,;
  ChevronLeft,;
  ChevronRight,;
  Zap,;
  Shield,;
  Globe,;
  Brain,;
  Rocket,;
  Target,;
  TrendingUp;
} from "lucide-react"
interface HeroSlide {;
  title: string,subtitle: string,description: string,image: string,cta: string,path: string,features: string[],gradient: string,icon: React.ComponentType<any>,stats: { label: string, value: string, icon: React.ComponentType<any> }[]
};

export default function EnhancedHeroSection() {;
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const heroSlides: HeroSlide[] = [;
    {;
      title: "AI-Powered Business Solutions",subtitle: "Transform your business with cutting-edge artificial intelligence",description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",;
      image: "/images/hero-ai-solutions.jpg",cta: "Explore AI Solutions",path: "/services/ai-business-intelligence",features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],;
      gradient: "from-zion-cyan via-zion-purple to-zion-blue",icon: Brain,stats: [;
        { label: "Accuracy Rate", value: "95%+", icon: Target };
        { label: "ROI Increase", value: "450%", icon: TrendingUp };
        { label: "Market Growth", value: "280%", icon: Rocket };
      ];
    };
    {;
      title: "Comprehensive IT Services",subtitle: "End-to-end technology solutions for modern businesses",description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",;
      image: "/images/hero-it-services.jpg",cta: "View Our Services",path: "/services",features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],;
      gradient: "from-zion-blue via-zion-cyan to-zion-purple",icon: Shield,stats: [;
        { label: "Uptime", value: "99.99%", icon: Target };
        { label: "Cost Savings", value: "700%", icon: TrendingUp };
        { label: "Response Time", value: "<5min", icon: Rocket };
      ];
    };
    {;
      title: "Green IT Solutions",subtitle: "Sustainable technology for a better future",description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",image: "/images/hero-green-it.jpg",cta: "Learn More",path: "/green-it",features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],;
      gradient: "from-zion-cyan via-zion-blue to-zion-purple",icon: Globe,stats: [;
        { label: "Energy Savings", value: "60%", icon: Target };
        { label: "Carbon Reduction", value: "75%", icon: TrendingUp };
        { label: "Cost Reduction", value: "40%", icon: Rocket };
      ];
    };
  ];
  useEffect(() => {;
    if (!isAutoPlaying) return,;

    const interval = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length),;
    }, 6000),;

    return () => clearInterval(interval),;
  }, [isAutoPlaying, heroSlides.length]),;

  const nextSlide = () => {;
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length),;
    setIsAutoPlaying(false),;
  },;

  const prevSlide = () => {;
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length),;
    setIsAutoPlaying(false),;
  },;

  const goToSlide = (index: number) => {;
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  },;

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Enhanced animated background elements */};
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10"></[^>]*>
        <motion.div
          className="[^"]*"
          animate={{;
            scale: [1, 1.2, 1],;
            opacity: [0.3, 0.6, 0.3]
          }};
          transition={{ duration: 4, repeat: Infinity }};
        ></[^>]*>
        <motion.div
          className="[^"]*"
          animate={{;
            scale: [1.2, 1, 1.2],;
            opacity: [0.6, 0.3, 0.6]
          }};
          transition={{ duration: 4, repeat: Infinity, delay: 1 }};
        ></[^>]*>
        <motion.div
          className="[^"]*"
          animate={{;
            rotate: [0, 360],;
            scale: [1, 1.1, 1]
          }};
          transition={{ duration: 20, repeat: Infinity }};
        ></[^>]*>

        {/* Floating particles */};
        {[...Array(6)].map((_, i) => (;
          <motion.div
            key={i};
            className="[^"]*"
            style={{;
              left: `${20 + i * 15}%`
              top: `${30 + i * 10}%`
            }};
            animate={{;
              y: [0, -20, 0],;
              opacity: [0.4, 1, 0.4]
            }};
            transition={{;
              duration: 3 + i * 0.5,repeat: Infinity,delay: i * 0.3;
            }};
          />;
        ))};
      </[^>]*>

      {/* Hero content */};
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="grid lg:grid-cols-2 gap-12 items-center">;
          {/* Left content */};
          <motion.div
            initial={{ opacity: 0, x: -50 }};
            animate={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <AnimatePresence mode="wait">;
              <motion.div
                key={currentSlide};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                exit={{ opacity: 0, y: -20 }};
                transition={{ duration: 0.5 }};
              >;
                {/* Icon and category */};
                <motion.div
                  className="[^"]*"
                  whileHover={{ scale: 1.05 }};
                >;
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/30`}>;
                    {React.createElement(currentSlideData.icon, { className: "w-8 h-8 text-white" })};
                  </[^>]*>
                  <span className="ml-3 text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">Featured Service</[^>]*>
                </[^>]*>

                {/* Title */};
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">;
                  {currentSlideData.title};
                </[^>]*>

                {/* Subtitle */};
                <p className="text-xl sm:text-2xl text-zion-cyan font-semibold mb-4">;
                  {currentSlideData.subtitle};
                </[^>]*>

                {/* Description */};
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">;
                  {currentSlideData.description};
                </[^>]*>

                {/* Features */};
                <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">;
                  {currentSlideData.features.map((feature, index) => (;
                    <motion.div
                      key={feature};
                      initial={{ opacity: 0, x: -20 }};
                      animate={{ opacity: 1, x: 0 }};
                      transition={{ delay: index * 0.1 }};
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>

                {/* CTA Button */};
                <motion.div
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  <Link;
                    to={currentSlideData.path};
                    className="[^"]*"
                  >;
                    {currentSlideData.cta};
                    <[^>]*/>
                  </[^>]*>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300 backdrop-blur-sm">;
                    <[^>]*/>
                    Watch Demo;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Right content - Image and stats */};
          <motion.div
            initial={{ opacity: 0, x: 50 }};
            animate={{ opacity: 1, x: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            {/* Main image */};
            <div className="relative">;
              <motion.div
                className={`w-full h-96 lg:h-[500px] rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/20 overflow-hidden`};
                whileHover={{ scale: 1.02 }};
                transition={{ duration: 0.3 }};
              >;
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></[^>]*>
                <div className="absolute inset-0 flex items-center justify-center">;
                  <div className="text-center text-white">;
                    <motion.div
                      className="[^"]*"
                      animate={{ rotate: [0, 360] }};
                      transition={{ duration: 20, repeat: Infinity }};
                    >;
                      {React.createElement(currentSlideData.icon, { className: "w-12 h-12 text-zion-cyan" })};
                    </[^>]*>
                    <p className="text-lg font-medium">Visual Representation</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Enhanced floating stats cards */};
            <div className="absolute -bottom-6 -left-6 space-y-4">;
              {currentSlideData.stats.map((stat, index) => (;
                <motion.div
                  key={stat.label};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ delay: 0.5 + index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className="flex items-center space-x-3">;
                    <div className="p-2 bg-zion-cyan/20 rounded-xl">;
                      {React.createElement(stat.icon, { className: "w-5 h-5 text-zion-cyan" })};
                    </[^>]*>
                    <div>;
                      <p className="text-xl font-bold text-white">{stat.value}</[^>]*>
                      <p className="text-xs text-gray-300">{stat.label}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>

            {/* Rating card */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ delay: 0.8 }};
              className="[^"]*"
            >;
              <div className="flex items-center space-x-4">;
                <div className="p-3 bg-zion-cyan/20 rounded-xl">;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <p className="text-2xl font-bold text-white">4.9/5</[^>]*>
                  <p className="text-sm text-gray-300">Client Rating</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Enhanced slide navigation */};
        <div className="flex items-center justify-center mt-16 space-x-4">;
          <motion.button
            onClick={prevSlide};
            className="[^"]*"
            whileHover={{ scale: 1.1 }};
            whileTap={{ scale: 0.9 }};
          >;
            <[^>]*/>
          </[^>]*>

          <div className="flex space-x-2">;
            {heroSlides.map((_, index) => (;
              <motion.button
                key={index};
                onClick={() => goToSlide(index)};
                className={`w-3 h-3 rounded-full transition-all duration-300 ${;
                  index === currentSlide;
                    ? 'bg-zion-cyan w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`};
                whileHover={{ scale: 1.2 }};
              />;
            ))};
          </[^>]*>

          <motion.button
            onClick={nextSlide};
            className="[^"]*"
            whileHover={{ scale: 1.1 }};
            whileTap={{ scale: 0.9 }};
          >;
            <[^>]*/>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Enhanced scroll indicator */};
      <motion.div
        initial={{ opacity: 0 }};
        animate={{ opacity: 1 }};
        transition={{ delay: 1 }};
        className="[^"]*"
      >;
        <motion.div
          animate={{ y: [0, 10, 0] }};
          transition={{ duration: 2, repeat: Infinity }};
          className="[^"]*"
        >;
          <motion.div
            animate={{ y: [0, 12, 0] }};
            transition={{ duration: 2, repeat: Infinity }};
            className="[^"]*"
          />;
        </[^>]*>
        <p className="text-xs text-zion-cyan/70 text-center mt-2">Scroll to explore</[^>]*>
      </[^>]*>
    </[^>]*>
  );
};