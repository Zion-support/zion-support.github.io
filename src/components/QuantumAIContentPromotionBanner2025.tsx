import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const QuantumAIContentPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentSlides = [
    {
      title: "🚀 NEW: Quantum-AI Hybrid Computing",
      subtitle: "Revolutionary breakthroughs in computational power",
      description: "Discover how quantum computing is transforming AI applications across industries",
      link: "/blog/quantum-ai-hybrid-computing-2025",
      gradient: "from-purple-600 via-blue-600 to-cyan-500",
      icon: "⚛️"
    },
    {
      title: "🤖 Advanced Agent Orchestration",
      subtitle: "Enterprise-scale multi-agent coordination",
      description: "Master intelligent routing, load balancing, and failure recovery systems",
      link: "/blog/ai-2026-advanced-agent-orchestration",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      icon: "🤖"
    },
    {
      title: "🏢 Autonomous Business Operations",
      subtitle: "The future of enterprise automation",
      description: "AI systems that independently manage complex business processes",
      link: "/blog/ai-autonomous-business-operations-2025",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: "🏢"
    },
    {
      title: "💰 Financial Optimization Case Study",
      subtitle: "40% risk reduction with quantum-AI",
      description: "Real-world success story from major financial institution",
      link: "/case-studies/quantum-ai-financial-optimization",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      icon: "💰"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);
  if (!isVisible) return null;
  const currentContent = contentSlides[currentSlide];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative overflow-hidden"
      >
        {/* Background with animated gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.gradient} opacity-90`}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 200 }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 200,
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        <div className="relative z-10 p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Content */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex-1 text-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl md:text-5xl">{currentContent.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {currentContent.title}
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 font-medium">
                      {currentContent.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg mb-6 opacity-90 max-w-2xl">
                  {currentContent.description}
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href={currentContent.link}
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Now
                  </motion.a>
                  <motion.a
                    href="/blog"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Content
                  </motion.a>
                </div>
              </motion.div>
              {/* Close button */}
              <motion.button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-300 transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-10 right-10 text-white opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-6xl"
          >
            ⚛️
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-10 text-white opacity-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="text-4xl"
          >
            🤖
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

};

export default QuantumAIContentPromotionBanner2025;
