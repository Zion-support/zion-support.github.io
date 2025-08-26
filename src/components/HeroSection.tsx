import React from 'react';
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Search, Shield, Rocket, Users, TrendingUp, Globe, Cpu, Brain } from "lucide-react";

export function HeroSection() {
    const { t } = useTranslation();
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
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
                ease: "easeInOut" as const
            }
        }
    };

    const trustMetrics = [
        { icon: Users, label: "15K+ Users", value: "Trusted globally", color: "text-zion-cyan" },
        { icon: TrendingUp, label: "98% Success", value: "Project completion rate", color: "text-zion-purple" },
        { icon: Shield, label: "Enterprise", value: "Fortune 500 clients", color: "text-zion-cyan" },
        { icon: Rocket, label: "24/7 Support", value: "Always available", color: "text-zion-purple" }
    ];

    const features = [
        { icon: Brain, label: "AI-Powered Matching", color: "bg-zion-cyan" },
        { icon: Cpu, label: "Quantum Computing", color: "bg-zion-purple" },
        { icon: Globe, label: "Global Network", color: "bg-zion-cyan" },
        { icon: Zap, label: "Lightning Fast", color: "bg-zion-purple" }
    ];

    return (
        <section className="relative overflow-hidden py-24 md:py-36 min-h-screen flex items-center">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/30 via-transparent to-zion-cyan/30 animate-pulse" />
            
            {/* Animated Background Elements */}
            <motion.div 
                className="absolute inset-0" 
                variants={containerVariants} 
                initial="hidden" 
                animate="visible"
            >
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-70 blur-sm" 
                    variants={floatingVariants} 
                    animate="animate" 
                />
                <motion.div 
                    className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-60 blur-sm" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: "1s" }} 
                />
                <motion.div 
                    className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-80 blur-sm" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: "2s" }} 
                />
                <motion.div 
                    className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-zion-cyan-light opacity-40 blur-sm" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: "3s" }} 
                />
            </motion.div>

            {/* Main Content */}
            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div 
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div 
                        variants={itemVariants} 
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-zion-cyan/10 backdrop-blur-sm border border-zion-cyan/20 rounded-full text-zion-cyan text-lg font-medium shadow-lg">
                            <Sparkles className="h-6 w-6 animate-pulse" />
                            <span>AI-Powered Technology Solutions</span>
                            <Sparkles className="h-6 w-6 animate-pulse" />
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div 
                        variants={itemVariants} 
                        className="mb-8"
                    >
                        <GradientHeading className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                            Transform Your Business with AI
                        </GradientHeading>
                        <p className="text-2xl md:text-3xl text-zion-slate-light font-light">
                            Leading the future of technology innovation
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                        variants={itemVariants} 
                        className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed font-light"
                    >
                        Discover cutting-edge AI solutions, expert talent, and innovative services that drive digital transformation. 
                        From startups to enterprises, we deliver results that matter.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        variants={itemVariants} 
                        className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
                    >
                        <Button 
                            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-xl py-7 px-10 shadow-2xl hover:shadow-purple-neon-xl transform hover:scale-105 transition-all duration-300 border-0" 
                            size="lg" 
                            asChild
                        >
                            <Link 
                                to="/request-quote" 
                                role="button" 
                                aria-label="Get Started" 
                                tabIndex={0} 
                                data-testid="hero-cta-btn" 
                                className="flex items-center gap-3"
                            >
                                <Rocket className="h-6 w-6" />
                                Get Started Today
                                <ArrowRight className="h-6 w-6" />
                            </Link>
                        </Button>
                        
                        <Link 
                            id="browse-marketplace" 
                            to="/services" 
                            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-xl py-7 px-10 rounded-xl inline-flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-neon-xl backdrop-blur-sm bg-zion-cyan/5"
                        >
                            <Search className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                            Explore Services
                        </Link>
                    </motion.div>

                    {/* Trust Metrics */}
                    <motion.div 
                        variants={itemVariants} 
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12"
                    >
                        {trustMetrics.map((metric, index) => (
                            <motion.div 
                                key={index}
                                className="text-center group hover:scale-105 transition-transform duration-300" 
                                variants={itemVariants}
                            >
                                <div className="flex justify-center mb-3">
                                    <metric.icon className={`h-10 w-10 ${metric.color} group-hover:scale-110 transition-transform`} />
                                </div>
                                <div className={`${metric.color} font-bold text-xl mb-1`}>
                                    {metric.label}
                                </div>
                                <div className="text-zion-slate-light text-sm">
                                    {metric.value}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div 
                        variants={itemVariants} 
                        className="flex flex-wrap justify-center items-center gap-4 text-zion-slate-light text-sm"
                    >
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zion-slate-dark/20 backdrop-blur-sm border border-zion-slate/20 hover:border-zion-cyan/40 transition-colors"
                            >
                                <div className={`w-2 h-2 ${feature.color} rounded-full animate-pulse`} />
                                <span className="font-medium">{feature.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center">
                    <motion.div 
                        className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}