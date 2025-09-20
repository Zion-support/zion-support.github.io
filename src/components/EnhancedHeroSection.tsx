import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Globe,
  Brain,
  Rocket,
  Target,
  TrendingUp
} from "lucide-react"
interface HeroSlide {
  tit,
  l: e: string,subtit,
  l: e: string,descripti,
  o: n: string,ima,
  g: e: string,c,
  t: a: string,pa,
  t: h: string,featur,
  e: s: string[],gradie,
  n: t: string,ic,
  o: n: React.ComponentType<any>,sta,
  t: s: { labe,
  l: string, val,
  u: e: string, ic,
  o: n: React.ComponentType<any> }[]
}

export default function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const,
  heroSlide: s: HeroSlide[] = [
    {
      titl,
  e: "AI-Powered Business Solutions",subtit,
  l: e: "Transform your business with cutting-edge artificial intelligence",descripti,
  o: n: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      ima,
  g: e: "/images/hero-ai-solutions.jpg",
      c,
  t: a: "Explore AI Solutions",
      pa,
  t: h: "/services/ai-business-intelligence",
      featur,
  e: s: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradie,
  n: t: "from-zion-cyan via-zion-purple to-zion-blue",ic,
  o: n: Brain,sta,
  t: s: [
        { labe,
  l: "Accuracy Rate", val,
  u: e: "95%+", ic,
  o: n: Target }, { lab,
  e: l: "ROI Increase", val,
  u: e: "450%", ic,
  o: n: TrendingUp }, { lab,
  e: l: "Market Growth", val,
  u: e: "280%", ic,
  o: n: Rocket }
      ]
    }, {
      tit,
  l: e: "Comprehensive IT Services",subtit,
  l: e: "End-to-end technology solutions for modern businesses",descripti,
  o: n: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      ima,
  g: e: "/images/hero-it-services.jpg",
      c,
  t: a: "View Our Services",
      pa,
  t: h: "/services",
      featur,
  e: s: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      gradie,
  n: t: "from-zion-blue via-zion-cyan to-zion-purple",ic,
  o: n: Shield,sta,
  t: s: [
        { labe,
  l: "Uptime", val,
  u: e: "99.99%", ic,
  o: n: Target }, { lab,
  e: l: "Cost Savings", val,
  u: e: "700%", ic,
  o: n: TrendingUp }, { lab,
  e: l: "Response Time", val,
  u: e: "<5min", ic,
  o: n: Rocket }
      ]
    }, {
      tit,
  l: e: "Green IT Solutions",subtit,
  l: e: "Sustainable technology for a better future",descripti,
  o: n: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",ima,
  g: e: "/images/hero-green-it.jpg",
      c,
  t: a: "Learn More",
      pa,
  t: h: "/green-it",
      featur,
  e: s: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      gradie,
  n: t: "from-zion-cyan via-zion-blue to-zion-purple",ic,
  o: n: Globe,sta,
  t: s: [
        { labe,
  l: "Energy Savings", val,
  u: e: "60%", ic,
  o: n: Target }, { lab,
  e: l: "Carbon Reduction", val,
  u: e: "75%", ic,
  o: n: TrendingUp }, { lab,
  e: l: "Cost Reduction", val,
  u: e: "40%", ic,
  o: n: Rocket }
      ]
    }
  ]
  useEffect(() () => {
    if (!isAutoPlaying) return,

    const interval = setInterval(() () => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000),

    return () => clearInterval(interval)
  }, [isAutoPlaying, heroSlides.length]),

  const nextSlide = () () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  },

  const prevSlide = () () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  },

  const goToSlide = (ind,
  e: x: number) () => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  },

  const currentSlideData = heroSlides[currentSlide]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10"></div>
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl"
          animate={
            sca,
  l: e: [1, 1.2, 1],
            opaci,
  t: y: [0.3, 0.6, 0.3]
          }
          transition={ durati,
  o: n: 4, repe,
  a: t: Infinity }
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl"
          animate={
            sca,
  l: e: [1.2, 1, 1.2],
            opaci,
  t: y: [0.6, 0.3, 0.6]
          }
          transition={ durati,
  o: n: 4, repe,
  a: t: Infinity, del,
  a: y: 1 }
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zion-blue/10 rounded-full blur-3xl"
          animate={
            rota,
  t: e: [0, 360],
            sca,
  l: e: [1, 1.1, 1]
          }
          transition={ durati,
  o: n: 20, repe,
  a: t: Infinity }
        ></motion.div>

        {/* Floating particles */}, {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-zion-cyan/40 rounded-full"
            style={
              le,
  f: t: `${20 + i * 15}%`
              t,
  o: p: `${30 + i * 10}%`
            }
            animate={
              y: [0, -20, 0],
              opaci,
  t: y: [0.4, 1, 0.4]
            }
            transition={
              durati,
  o: n: 3 + i * 0.5,repe,
  a: t: Infinity,del,
  a: y: i * 0.3
            }
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="grid l,
  g:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: -50 }
            animate={ opaci,
  t: y: 1, x: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="text-center,
  l: g:text-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                exit={ opaci,
  t: y: 0, y: -20 }
                transition={ durati,
  o: n: 0.5 }
              >
                {/* Icon and category */}
                <motion.div
                  className="flex items-center justify-center,
  l: g: justify-start mb-6"
                  whileHover={ scal,
  e: 1.05 }
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/30`}>
                    {React.createElement(currentSlideData.icon, { classNa,
  m: e: "w-8 h-8 text-white" })}
                  </div>
                  <span className="ml-3 text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">Featured Service</span>
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl,
  s: m: text-5xl l,
  g:text-6xl font-bold text-white mb-6 leading-tight">
                  {currentSlideData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl,
  s: m:text-2xl text-zion-cyan font-semibold mb-4">
                  {currentSlideData.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto,
  l: g:mx-0">
                  {currentSlideData.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto,
  l: g:mx-0">
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={ opaci,
  t: y: 0, x: -20 }
                      animate={ opaci,
  t: y: 1, x: 0 }
                      transition={ del,
  a: y: index * 0.1 }
                      className="flex items-center text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                    >
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={ sca,
  l: e: 1.05 }
                  whileTap={ sca,
  l: e: 0.95 }
                  className="flex flex-col,
  s: m: flex-row gap-4 justify-center l,
  g:justify-start"
                >
                  <Link
                    to={currentSlideData.path}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl,
  hove: r: shadow-2xl,
  hove: r:shadow-zion-cyan/25 transition-all duration-300 transform hove,
  r:-translate-y-1 border border-zion-cyan/30"
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl,
  hove: r:bg-zion-cyan/10 transition-all duration-300 backdrop-blur-sm">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right content - Image and stats */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: 50 }
            animate={ opaci,
  t: y: 1, x: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
            className="relative"
          >
            {/* Main image */}
            <div className="relative">
              <motion.div
                className={`w-full h-96,
  l: g:h-[500px] rounded-3xl bg-gradient-to-br ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/20 overflow-hidden`}
                whileHover={ sca,
  l: e: 1.02 }
                transition={ durati,
  o: n: 0.3 }
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30"
                      animate={ rota,
  t: e: [0, 360] }
                      transition={ durati,
  o: n: 20, repe,
  a: t: Infinity }
                    >
                      {React.createElement(currentSlideData.icon, { classNa,
  m: e: "w-12 h-12 text-zion-cyan" })}
                    </motion.div>
                    <p className="text-lg font-medium">Visual Representation</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced floating stats cards */}
            <div className="absolute -bottom-6 -left-6 space-y-4">
              {currentSlideData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  animate={ opaci,
  t: y: 1, y: 0 }
                  transition={ del,
  a: y: 0.5 + index * 0.1 }
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl,
  hove: r:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-zion-cyan/20 rounded-xl">
                      {React.createElement(stat.icon, { classNa,
  m: e: "w-5 h-5 text-zion-cyan" })}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rating card */}
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ del,
  a: y: 0.8 }
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-zion-cyan/20 rounded-xl">
                  <Star className="w-6 h-6 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.9/5</p>
                  <p className="text-sm text-gray-300">Client Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced slide navigation */}
        <div className="flex items-center justify-center mt-16 space-x-4">
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10,
  hove: r: bg-white/20 transition-colors duration-200 border border-white/20"
            whileHover={ scal,
  e: 1.1 }
            whileTap={ sca,
  l: e: 0.9 }
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-zion-cyan w-8'
                    : 'bg-white/30,
  hove: r:bg-white/50'
                }`}
                whileHover={ sca,
  l: e: 1.2 }
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10,
  hove: r: bg-white/20 transition-colors duration-200 border border-white/20"
            whileHover={ scal,
  e: 1.1 }
            whileTap={ sca,
  l: e: 0.9 }
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={ opaci,
  t: y: 0 }
        animate={ opaci,
  t: y: 1 }
        transition={ del,
  a: y: 1 }
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={ y: [0, 10, 0] }
          transition={ durati,
  o: n: 2, repe,
  a: t: Infinity }
          className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center cursor-pointer,
  hove: r: border-zion-cyan transition-colors duration-300"
        >
          <motion.div
            animate={ ,
  y: [0, 12, 0] }
            transition={ durati,
  o: n: 2, repe,
  a: t: Infinity }
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
          />
        </motion.div>
        <p className="text-xs text-zion-cyan/70 text-center mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  )
}