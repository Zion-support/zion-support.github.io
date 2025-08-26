import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8"/>,
        title: "Discover",
        description: "Browse our comprehensive catalog of 100+ micro SAAS services and solutions",
        color: "from-zion-cyan to-zion-cyan-dark",
        bgColor: "from-zion-cyan/20 to-zion-cyan-dark/20",
        details: [
            "AI-powered search and filtering",
            "Curated service categories",
            "Industry-specific solutions",
            "Real-time availability"
        ],
        duration: "Immediate",
        success: "95% match rate"
    },
    {
        icon: <Users className="w-8 h-8"/>,
        title: "Connect",
        description: "Get matched with the perfect service or solution for your business needs",
        color: "from-zion-purple to-zion-purple-dark",
        bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
        details: [
            "Smart matching algorithm",
            "Service verification",
            "Portfolio review",
            "Direct communication"
        ],
        duration: "2-4 hours",
        success: "98% satisfaction"
    },
    {
        icon: <FileText className="w-8 h-8"/>,
        title: "Plan",
        description: "Collaborate on requirements, timeline, and implementation strategy",
        color: "from-zion-blue to-zion-blue-dark",
        bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
        details: [
            "Interactive planning",
            "Timeline optimization",
            "Resource allocation",
            "Risk assessment"
        ],
        duration: "4-8 hours",
        success: "90% on-time delivery"
    },
    {
        icon: <Rocket className="w-8 h-8"/>,
        title: "Execute",
        description: "Watch your vision come to life with our expert implementation",
        color: "from-zion-cyan-light to-zion-cyan",
        bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
        details: [
            "Agile implementation",
            "Regular progress updates",
            "Quality assurance",
            "Performance monitoring"
        ],
        duration: "1-4 weeks",
        success: "99% quality score"
    },
    {
        icon: <CheckCircle className="w-8 h-8"/>,
        title: "Deliver",
        description: "Receive your completed solution with ongoing support and maintenance",
        color: "from-zion-purple-light to-zion-purple",
        bgColor: "from-zion-purple-light/20 to-zion-purple/20",
        details: [
            "Comprehensive testing",
            "Documentation delivery",
            "Training and handover",
            "Post-launch support"
        ],
        duration: "Ongoing",
        success: "100% client retention"
    }
];

const stats = [
    { icon: <Clock className="w-6 h-6"/>, value: "3x Faster", label: "Implementation" },
    { icon: <Target className="w-6 h-6"/>, value: "99.9%", label: "Success Rate" },
    { icon: <TrendingUp className="w-6 h-6"/>, value: "50%", label: "Cost Reduction" },
    { icon: <Award className="w-6 h-6"/>, value: "1000+", label: "Services Delivered" }
];

export function HowItWorksSection() {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [activeStep, setActiveStep] = useState(0);

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
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16" 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 backdrop-blur-sm rounded-full border border-zion-cyan/30 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Rocket className="h-5 w-5 text-zion-cyan" />
                        <span className="text-zion-cyan text-sm font-medium">How It Works</span>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Simple 5-Step Process
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xl text-zion-slate-light max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        From discovery to delivery, our streamlined process ensures you get the right 
                        micro SAAS solution quickly and efficiently.
                    </motion.p>
                </motion.div>

                {/* Steps Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            variants={itemVariants}
                            onHoverStart={() => setHoveredStep(index)}
                            onHoverEnd={() => setHoveredStep(null)}
                            onClick={() => setActiveStep(index)}
                        >
                            {/* Step Number */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                {index + 1}
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-zion-cyan/30 hover:transform hover:scale-105">
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Quick Info */}
                                    <div className="space-y-2 text-xs text-zion-slate-light">
                                        <div className="flex items-center justify-center gap-2">
                                            <Clock className="w-3 h-3" />
                                            <span>{step.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <Target className="w-3 h-3" />
                                            <span>{step.success}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded details on hover */}
                                <AnimatePresence>
                                    {hoveredStep === index && (
                                        <motion.div 
                                            className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" 
                                            initial={{ opacity: 0, height: 0, y: 10 }} 
                                            animate={{ opacity: 1, height: "auto", y: 0 }} 
                                            exit={{ opacity: 0, height: 0, y: 10 }} 
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Features:</h4>
                                            <div className="space-y-2">
                                                {step.details.map((detail, idx) => (
                                                    <motion.div 
                                                        key={idx} 
                                                        className="flex items-center gap-2 text-zion-slate-light/80 text-xs" 
                                                        initial={{ opacity: 0, x: -10 }} 
                                                        animate={{ opacity: 1, x: 0 }} 
                                                        transition={{ delay: idx * 0.1 }}
                                                    >
                                                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                                                        <span>{detail}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center group"
                            variants={statsVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-zion-slate-light">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-zion-slate-light mb-6 text-lg">
                        Ready to start your journey with Zion Tech Group?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button 
                            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
                        </motion.button>
                        <motion.button 
                            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
