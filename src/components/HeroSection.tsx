import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const trustMetrics = [
        { icon: Users, label: "10K+ Users", value: "Trusted by thousands" },
        { icon: TrendingUp, label: "95% Success", value: "Project completion rate" },
        { icon: Shield, label: "Enterprise", value: "Fortune 500 clients" },
        { icon: Rocket, label: "24/7 Support", value: "Always available" }
    ];

    const featureBadges = [
        { icon: Zap, label: "AI-Powered Matching", color: "zion-cyan" },
        { icon: Star, label: "Verified Professionals", color: "zion-purple" },
        { icon: Shield, label: "Secure Payments", color: "zion-cyan" },
        { icon: Rocket, label: "Enterprise Security", color: "zion-purple" }
    ];

    return (
        <section ref={containerRef} className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
            {/* Enhanced background with parallax effect */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" 
                style={{ y, opacity }}
            />
            
            {/* Animated floating particles */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60" 
                    variants={floatingVariants} 
                    animate="animate"
                />
                <motion.div 
                    className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '1s' }}
                />
                <motion.div 
                    className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '2s' }}
                />
                <motion.div 
                    className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-40" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '0.5s' }}
                />
            </div>

            {/* Decorative geometric shapes */}
            <motion.div 
                className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30" 
                animate={{ rotate: -360 }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
                className="container relative z-10 px-4 mx-auto text-center" 
                variants={containerVariants} 
                initial="hidden" 
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
                        <span className="text-zion-cyan text-lg font-medium">
                            AI-Powered Technology Solutions
                        </span>
                        <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-4">
                        Transform Your Business with{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan animate-gradient">
                            AI
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zion-slate-light mt-4">
                        Leading the future of technology innovation
                    </p>
                </motion.div>

                {/* Description */}
                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
                    Discover cutting-edge AI solutions, expert talent, and innovative services that drive digital transformation. 
                    From startups to enterprises, we deliver results that matter.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <Link 
                        to="/contact" 
                        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group flex items-center gap-2"
                    >
                        Get Started Today
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                    <Link 
                        to="/services" 
                        className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg py-6 px-8 rounded-xl transition-all duration-300 flex items-center gap-2"
                    >
                        Explore Services
                        <ArrowRight className="w-5 h-5"/>
                    </Link>
                </motion.div>

                {/* Trust Metrics */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                    {trustMetrics.map((metric, index) => (
                        <motion.div 
                            key={index} 
                            className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-zion-cyan mb-2 flex justify-center">
                                <metric.icon className="w-6 h-6"/>
                            </div>
                            <div className="text-xl font-bold text-white mb-1">{metric.label}</div>
                            <div className="text-zion-slate-light text-sm">{metric.value}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Feature Badges */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                    {featureBadges.map((badge, index) => (
                        <motion.div 
                            key={index} 
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <badge.icon className={`w-4 h-4 text-${badge.color}`}/>
                            <span className="text-zion-slate-light text-sm font-medium">{badge.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
