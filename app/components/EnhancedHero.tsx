import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroStats {
  clients: number;,
    savings: string;
  uptime: string;,
    support: string;
}

const EnhancedHero: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats: HeroStats[] = [
    { clients: 500, savings: '$2.5B+', uptime: '99.9%', support: '24/7' },
    { clients: 750, savings: '$3.2B+', uptime: '99.95%', support: '24/7' },
    { clients: 1000, savings: '$4.1B+', uptime: '99.99%', support: '24/7' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',)
    event_label: 'main_phone_number',

    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {,
    opacity: 1,
      y: 0,
      transition: {,
    duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {,
    opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {,
    opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: {,
    opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >{/* Animated Background *</motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >/</motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >}</motion>
     <//motion> <//motion><div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
       </div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="absolute inset-0 cyber-grid opacity-20"><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">{/* Floating Elements </div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">*</div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">/</div>}</div>
      <//div> <//div> </div><motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
       </motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> </motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /><motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
    </motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> </motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> </div>

     <//div> <//div><div className="relative z-10 container mx-auto px-4 py-16 pt-24">
      </div className="relative z-10 container mx-auto px-4 py-16 pt-24"> </div className="relative z-10 container mx-auto px-4 py-16 pt-24"> </div><motion.div
          className="text-center max-w-6xl mx-auto"
          variants={itemVariants}
        >{/* Main Heading */</motion.div
          className="text-center max-w-6xl mx-auto"
          variants={itemVariants}
        >}</motion.div
          className="text-center max-w-6xl mx-auto"
          variants={itemVariants}
        ><motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
            variants={itemVariants}
          >Zion Tech Gro</motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
            variants={itemVariants}
          >u</motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
            variants={itemVariants}
          >p</motion>
        <//motion> <//motion> </motion.h1>

         <//motion.h1> <//motion.h1><motion.p
            className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium"
            variants={itemVariants}
          >Advanced AI and IT Solutio</motion.p
            className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium"
            variants={itemVariants}
          >n</motion.p
            className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium"
            variants={itemVariants}
          >s</motion>
        <//motion> <//motion> </motion.p>

         <//motion.p> <//motion.p><motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >Leading provider of enterprise AI solutions, quantum computing, and autonomous system</motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >s</motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >.</motion>
            Transform your business with our cutting-edge technology and achieve unprecedented growt<//motion>h<//motion>.</motion>
        <//motion> <//motion> </motion.p>

          {/* Animated Stats */}
         <//motion.p> <//motion.p><motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
           </motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          > </motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          ><AnimatePresence mode="wait">
             </AnimatePresence mode="wait"> </AnimatePresence mode="wait"><motion.div
                key={currentStat}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
               </motion.div
                key={currentStat}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              > </motion.div
                key={currentStat}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              ><div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stats[currentStat].clients}</div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">+</div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2"><div className="text-gray-300 text-sm sm:text-base">Enterprise Clie</div className="text-gray-300 text-sm sm:text-base">n</div className="text-gray-300 text-sm sm:text-base">t</div>s</div>
            <//div> <//div> </motion.div>
          <//motion.div> <//motion.div> </AnimatePresence>

           <//AnimatePresence> <//AnimatePresence><AnimatePresence mode="wait">
             </AnimatePresence mode="wait"> </AnimatePresence mode="wait"><motion.div
                key={`savings-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
               </motion.div
                key={`savings-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              > </motion.div
                key={`savings-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              ><div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">{stats[currentStat].savings</div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">}</div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2"><div className="text-gray-300 text-sm sm:text-base">Cost Savi</div className="text-gray-300 text-sm sm:text-base">n</div className="text-gray-300 text-sm sm:text-base">g</div>s</div>
            <//div> <//div> </motion.div>
          <//motion.div> <//motion.div> </AnimatePresence>

           <//AnimatePresence> <//AnimatePresence><AnimatePresence mode="wait">
             </AnimatePresence mode="wait"> </AnimatePresence mode="wait"><motion.div
                key={`uptime-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
               </motion.div
                key={`uptime-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              > </motion.div
                key={`uptime-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              ><div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">{stats[currentStat].uptime</div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">}</div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2"><div className="text-gray-300 text-sm sm:text-base">Upt</div className="text-gray-300 text-sm sm:text-base">i</div className="text-gray-300 text-sm sm:text-base">m</div>e</div>
            <//div> <//div> </motion.div>
          <//motion.div> <//motion.div> </AnimatePresence>

           <//AnimatePresence> <//AnimatePresence><AnimatePresence mode="wait">
             </AnimatePresence mode="wait"> </AnimatePresence mode="wait"><motion.div
                key={`support-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
               </motion.div
                key={`support-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              > </motion.div
                key={`support-${currentStat}`}
                className="cyber-card hologram-card p-4 sm:p-6 text-center"
                variants={statVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              ><div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">{stats[currentStat].support</div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">}</div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2"><div className="text-gray-300 text-sm sm:text-base">Supp</div className="text-gray-300 text-sm sm:text-base">o</div className="text-gray-300 text-sm sm:text-base">r</div>t</div>
            <//div> <//div> </motion.div>
          <//motion.div> <//motion.div> </AnimatePresence>
        <//AnimatePresence> <//AnimatePresence> </motion.div>

          {/* CTA Buttons */}
         <//motion.div> <//motion.div><motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
           </motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          > </motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          ><motion.a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >📞 Call Now: (302) 464-09</motion.a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >5</motion.a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >0</motion>
          <//motion> <//motion> </motion.a>

           <//motion.a> <//motion.a><motion.a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Get Free Consultati</motion.a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >o</motion.a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >n</motion>
          <//motion> <//motion> </motion.a>
        <//motion.a> <//motion.a> </motion.div>

          {/* Trust Indicators */}
         <//motion.div> <//motion.div><motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={itemVariants}
          >
           </motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={itemVariants}
          > </motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={itemVariants}
          ><div className="text-gray-400 text-sm">Trusted by Fortune 500 Companie</div className="text-gray-400 text-sm">s</div className="text-gray-400 text-sm"><div className="text-gray-400 text-sm">•</div>
           <//div> <//div><div className="text-gray-400 text-sm">SOC 2 Complian</div className="text-gray-400 text-sm">t</div className="text-gray-400 text-sm"><div className="text-gray-400 text-sm">•</div className="text-gray-400 text-sm"><div className="text-gray-400 text-sm">ISO 27001 Certif</div className="text-gray-400 text-sm">i</div className="text-gray-400 text-sm">e</div>d</div>
        <//div> <//div> </motion.div>
      <//motion.div> <//motion.div> </motion.div>
    <//motion.div> <//motion.div> </div>

      {/* Scroll Indicator */}
     <//div> <//div><motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
       </motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      > </motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      ><div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        </div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"> </div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"> </div><motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
      </motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          /> </motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          /> </div>
    <//div> <//div> </motion.div>
  <//motion.div> <//motion.div> </motion.section>
  );
};

export default EnhancedHero;<//motion.section>
<//motion.section>