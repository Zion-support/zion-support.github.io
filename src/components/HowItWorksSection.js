<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const steps = [
    {
        title: "Post",
        description: "Publish your service, job, or equipment in minutes with our AI-powered form.",
        icon: Send,
        color: "from-zion-purple to-zion-purple-dark",
        delay: 0,
        features: ["AI-powered forms", "Quick setup", "Smart suggestions"]
    },
    {
        title: "Match",
        description: "Our AI automatically matches your needs with the perfect providers or opportunities.",
        icon: Search,
        color: "from-zion-cyan to-zion-blue",
        delay: 0.2,
        features: ["Smart algorithms", "Instant results", "Quality filtering"]
    },
    {
        title: "Hire/Buy",
        description: "Connect directly with matched providers and complete your transaction securely.",
        icon: Handshake,
        color: "from-zion-blue to-zion-cyan",
        delay: 0.4,
        features: ["Secure payments", "Direct contact", "Escrow protection"]
    },
    {
        title: "Done",
        description: "Enjoy hassle-free delivery and support for your technology solutions.",
        icon: Check,
        color: "from-zion-purple-light to-zion-cyan",
        delay: 0.6,
        features: ["Quality assurance", "Ongoing support", "Success tracking"]
    },
];
export function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(null);
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';
const steps = [
    {
        icon: <Search className="w-8 h-8"/>,
        title: "Discover",
        description: "Browse our comprehensive catalog of services, talent, and solutions",
        color: "from-zion-cyan to-zion-cyan-dark",
        bgColor: "from-zion-cyan/20 to-zion-cyan-dark/20",
        details: [
            "AI-powered search and filtering",
            "Curated service categories",
            "Expert talent matching",
            "Real-time availability"
        ],
        duration: "1-2 hours",
        success: "95% match rate"
    },
    {
        icon: <Users className="w-8 h-8"/>,
        title: "Connect",
        description: "Get matched with the perfect team or service for your project",
        color: "from-zion-purple to-zion-purple-dark",
        bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
        details: [
            "Smart matching algorithm",
            "Profile verification",
            "Portfolio review",
            "Direct communication"
        ],
        duration: "2-4 hours",
        success: "98% satisfaction"
    },
    {
        icon: <FileText className="w-8 h-8"/>,
        title: "Plan",
        description: "Collaborate on project requirements, timeline, and deliverables",
        color: "from-zion-blue to-zion-blue-dark",
        bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
        details: [
            "Interactive project planning",
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
        description: "Watch your vision come to life with our expert execution",
        color: "from-zion-cyan-light to-zion-cyan",
        bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
        details: [
            "Agile development process",
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
        description: "Receive your completed project with ongoing support and maintenance",
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
    { icon: <Clock className="w-6 h-6"/>, value: "3x Faster", label: "Project Delivery" },
    { icon: <Target className="w-6 h-6"/>, value: "99.9%", label: "Success Rate" },
    { icon: <TrendingUp className="w-6 h-6"/>, value: "50%", label: "Cost Reduction" },
    { icon: <Award className="w-6 h-6"/>, value: "1000+", label: "Projects Completed" }
];
export function HowItWorksSection() {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
<<<<<<< HEAD
                duration: 1,
                staggerChildren: 0.3,
            },
        },
    };
    const stepVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        hover: {
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };
    return (_jsxs("section", { className: "py-20 bg-zion-blue relative overflow-hidden", "aria-labelledby": "how-it-works-heading", children: [_jsxs("div", { className: "absolute inset-0 opacity-5", children: [_jsx("div", { className: "absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-zion-purple to-transparent rounded-full blur-2xl" }), _jsx("div", { className: "absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-tl from-zion-cyan to-transparent rounded-full blur-2xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-16", variants: titleVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [_jsx(GradientHeading, { id: "how-it-works-heading", children: "How It Works" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto leading-relaxed", children: "A simple four-step process to connect technology providers with clients" })] }), _jsxs(motion.div, { className: "relative", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, children: [_jsx("div", { className: "absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden", children: steps.map((_, index) => (_jsx(motion.div, { className: "absolute w-4 h-4 bg-zion-blue border-2 border-zion-purple rounded-full transform -translate-x-1/2", style: { top: `${(index / (steps.length - 1)) * 100}%` }, initial: { scale: 0 }, whileInView: { scale: 1 }, viewport: { once: true }, transition: { delay: index * 0.2, duration: 0.5 } }, index))) }), _jsx("div", { className: "space-y-16 md:space-y-0", children: steps.map((step, index) => (_jsxs(motion.div, { className: `flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} relative`, variants: stepVariants, whileHover: "hover", onHoverStart: () => setActiveStep(index), onHoverEnd: () => setActiveStep(null), children: [_jsx("div", { className: "md:w-1/2 mb-8 md:mb-0 md:px-12 text-center md:text-right", children: index % 2 === 0 ? (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: step.delay + 0.3, duration: 0.6 }, children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300", children: step.title }), _jsx("p", { className: "text-zion-slate-light mb-4 leading-relaxed", children: step.description }), _jsx("div", { className: "space-y-2", children: step.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm justify-center md:justify-end", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { className: "text-zion-slate-light/80", children: feature })] }, featureIndex))) })] })) : null }), _jsxs(motion.div, { className: "relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-blue-light to-zion-blue border-2 border-zion-purple mx-4 md:mx-0 shadow-lg group-hover:shadow-xl transition-all duration-300", variants: iconVariants, whileHover: "hover", children: [_jsx(step.icon, { className: "w-8 h-8 text-zion-cyan" }), _jsx("div", { className: "absolute -top-2 -right-2 w-6 h-6 bg-zion-purple text-white text-xs rounded-full flex items-center justify-center font-bold", children: index + 1 })] }), _jsx("div", { className: "md:w-1/2 md:px-12 text-center md:text-left", children: index % 2 !== 0 ? (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: step.delay + 0.3, duration: 0.6 }, children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300", children: step.title }), _jsx("p", { className: "text-zion-slate-light mb-4 leading-relaxed", children: step.description }), _jsx("div", { className: "space-y-2", children: step.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm justify-center md:justify-start", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { className: "text-zion-slate-light/80", children: feature })] }, featureIndex))) })] })) : null })] }, step.title))) })] }), _jsx(motion.div, { className: "text-center mt-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 1 }, children: _jsxs("div", { className: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-full hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl", children: [_jsx("span", { className: "font-medium", children: "Ready to get started?" }), _jsx(ArrowRight, { className: "w-5 h-5" })] }) })] })] }));
=======
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    ;
    const statsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
        <motion.div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}/>
        <motion.div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion. 
            Experience the Zion difference with our proven methodology.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {stats.map((stat, index) => (<motion.div key={index} variants={statsVariants} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>))}
        </motion.div>
        
        <motion.div className="relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden lg:block">
            <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}/>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (<motion.div key={index} variants={itemVariants} className="relative" onHoverStart={() => setHoveredStep(index)} onHoverEnd={() => setHoveredStep(null)} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="text-center h-full">
                  {/* Step number with enhanced styling */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border-2 border-zion-cyan text-white font-bold text-xl mb-6 relative z-10 shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Duration and success rate */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-zion-cyan/80 text-xs">
                      <Clock className="w-3 h-3"/>
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">
                      <Target className="w-3 h-3"/>
                      <span>{step.success}</span>
                    </div>
                  </div>

                  {/* Interactive details on hover */}
                  <AnimatePresence>
                    {hoveredStep === index && (<motion.div className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial={{ opacity: 0, height: 0, y: 10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: 10 }} transition={{ duration: 0.3 }}>
                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              <span>{detail}</span>
                            </motion.div>))}
                        </div>
                      </motion.div>)}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>))}
          </div>
        </></div>
        
        {/* Enhanced bottom CTA */}
        <motion.div className="text-center mt-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your project journey?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25">
                Get Started Today
                <Rocket className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional features */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
              <Zap className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Fast Setup</h4>
            <p className="text-zion-slate-light text-sm">Get started in minutes, not days</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-purple to-zion-cyan mb-4">
              <Shield className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Secure & Reliable</h4>
            <p className="text-zion-slate-light text-sm">Enterprise-grade security and uptime</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan-light to-zion-blue mb-4">
              <Users className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Support</h4>
            <p className="text-zion-slate-light text-sm">24/7 support from our team</p>
          </div>
        </motion.div>
      </div>);
    section >
    ;
    ;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
