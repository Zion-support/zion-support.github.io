import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const InteractiveHero = ({ title, subtitle, description, primaryAction, secondaryAction, stats = [
    { value: '500+', label: 'Happy Clients', color: 'text-blue-400' },
    { value: '1000+', label: 'Projects Delivered', color: 'text-green-400' },
    { value: '99.9%', label: 'Uptime SLA', color: 'text-purple-400' },
    { value: '24/7', label: 'Support Available', color: 'text-cyan-400' }
] }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [activeStat, setActiveStat] = useState(0);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        // Auto-rotate stats
        const interval = setInterval(() => {
            setActiveStat((prev) => (prev + 1) % stats.length);
        }, 3000);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [stats.length]);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (<section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
        }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }}/>
        <motion.div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
        }} transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
        }}/>
        <motion.div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
        }} transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
        }}/>
      </div>

      {/* Interactive Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px'
        }}/>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="mr-2">
              🚀
            </motion.span>
            {subtitle}
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {title.split(' ').map((word, index) => (<motion.span key={index} className="inline-block mr-4" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                {word === 'Zion' ? (<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {word}
                  </span>) : (word)}
              </motion.span>))}
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={primaryAction.href} className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl">
                <span className="relative z-10">{primaryAction.text}</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={false}/>
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-300" initial={false}/>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={secondaryAction.href} className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                {secondaryAction.text}
                <motion.svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" initial={false}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (<motion.div key={index} className="text-center group cursor-pointer" whileHover={{ scale: 1.1 }} onClick={() => setActiveStat(index)}>
                <motion.div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 transition-all duration-300 ${activeStat === index ? 'scale-110' : 'scale-100'}`} variants={floatingVariants} animate="animate">
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full border border-blue-400/20 backdrop-blur-sm" animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
        }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }}/>

      <motion.div className="absolute top-1/3 right-16 w-16 h-16 bg-cyan-500/10 rounded-full border border-cyan-400/20 backdrop-blur-sm" animate={{
            y: [0, 30, 0],
            x: [0, 20, 0]
        }} transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
        }}/>

      {/* Mouse Follower Effect */}
      <motion.div className="fixed w-4 h-4 bg-blue-400/50 rounded-full pointer-events-none z-50 mix-blend-difference" animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: isHovered ? 2 : 1
        }} transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
        }}/>
    </section>);
};
export default InteractiveHero;
