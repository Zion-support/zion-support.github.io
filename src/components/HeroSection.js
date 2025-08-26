import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        { icon: Users, label: "15K+ Users", value: "Trusted globally", color: "text-zion-cyan" },
        { icon: TrendingUp, label: "98% Success", value: "Project completion", color: "text-zion-purple" },
        { icon: Shield, label: "Enterprise", value: "Fortune 500 clients", color: "text-zion-blue" },
        { icon: Rocket, label: "24/7 Support", value: "Always available", color: "text-zion-cyan" }
    ];

    const techFeatures = [
        { icon: Brain, label: "AI-Powered", description: "Advanced machine learning" },
        { icon: Cpu, label: "Quantum Ready", description: "Future-proof technology" },
        { icon: Globe, label: "Global Scale", description: "Worldwide deployment" }
    ];

    return (_jsxs("section", { className: "relative overflow-hidden py-24 md:py-36 min-h-screen flex items-center", children: [
        // Enhanced background with multiple layers
        _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-95" }),
        _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-purple/30 via-transparent to-zion-cyan/30 animate-pulse" }),
        _jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" }),
        
        // Enhanced floating elements
        _jsxs(motion.div, { className: "absolute inset-0", variants: containerVariants, initial: "hidden", animate: "visible", children: [
            _jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gradient-to-r from-zion-purple-light to-zion-cyan opacity-70", variants: floatingVariants, animate: "animate" }),
            _jsx(motion.div, { className: "absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue opacity-60", variants: floatingVariants, animate: "animate", style: { animationDelay: "1s" } }),
            _jsx(motion.div, { className: "absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan opacity-80", variants: floatingVariants, animate: "animate", style: { animationDelay: "2s" } }),
            _jsx(motion.div, { className: "absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-gradient-to-r from-zion-cyan-light to-zion-purple-light opacity-40", variants: floatingVariants, animate: "animate", style: { animationDelay: "3s" } }),
            _jsx(motion.div, { className: "absolute top-3/4 left-1/3 w-5 h-5 rounded-full bg-gradient-to-r from-zion-blue to-zion-purple opacity-50", variants: floatingVariants, animate: "animate", style: { animationDelay: "4s" } })
        ] }),
        
        // Main content
        _jsx("div", { className: "container relative z-10 px-4 mx-auto text-center", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", children: [
            // Enhanced header section
            _jsxs(motion.div, { variants: itemVariants, className: "mb-8", children: [
                _jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
                    _jsx(Sparkles, { className: "h-10 w-10 text-zion-cyan animate-pulse" }),
                    _jsx("span", { className: "text-zion-cyan text-xl font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-cyan/30", children: "AI-Powered Technology Solutions" }),
                    _jsx(Sparkles, { className: "h-10 w-10 text-zion-cyan animate-pulse" })
                ] }),
                _jsx(GradientHeading, { className: "text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Transform Your Business with AI" }),
                _jsx("p", { className: "text-2xl md:text-3xl text-zion-slate-light mt-6 font-light", children: "Leading the future of technology innovation" })
            ] }),
            
            // Enhanced description
            _jsx(motion.p, { variants: itemVariants, className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed font-light", children: "Discover cutting-edge AI solutions, expert talent, and innovative services that drive digital transformation. From startups to enterprises, we deliver results that matter in the AI-first economy." }),
            
            // Enhanced CTA buttons
            _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row justify-center gap-6 mb-16", children: [
                _jsx(Button, { className: "bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-dark text-xl py-7 px-10 shadow-2xl hover:shadow-purple-neon-xl transform hover:scale-105 transition-all duration-500 border border-zion-purple/30", size: "lg", asChild: true, children: _jsxs(Link, { to: "/request-quote", role: "button", "aria-label": "Get Started", tabIndex: 0, "data-testid": "hero-cta-btn", className: "flex items-center gap-3", children: [
                    _jsx(Rocket, { className: "h-6 w-6" }),
                    "Get Started Today",
                    _jsx(ArrowRight, { className: "h-6 w-6 group-hover:translate-x-1 transition-transform" })
                ] }) }),
                _jsxs(Link, { id: "browse-marketplace", to: "/services", className: "group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-xl py-7 px-10 rounded-xl inline-flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-105 hover:shadow-neon-xl bg-white/5 backdrop-blur-sm", children: [
                    _jsx(Search, { className: "h-6 w-6 group-hover:rotate-12 transition-transform duration-300" }),
                    "Explore Services"
                ] })
            ] }),
            
            // Enhanced tech features
            _jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12", children: techFeatures.map((feature, index) => _jsxs(motion.div, { className: "text-center group", variants: itemVariants, children: [
                _jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-zion-cyan/30", children: _jsx(feature.icon, { className: "h-8 w-8 text-zion-cyan" }) }) }),
                _jsx("div", { className: "text-zion-cyan font-bold text-xl mb-2", children: feature.label }),
                _jsx("div", { className: "text-zion-slate-light text-sm", children: feature.description })
            ] }, index)) }),
            
            // Enhanced trust metrics
            _jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12", children: trustMetrics.map((metric, index) => _jsxs(motion.div, { className: "text-center group", variants: itemVariants, children: [
                _jsx("div", { className: "flex justify-center mb-3", children: _jsx("div", { className: `w-14 h-14 bg-gradient-to-r from-${metric.color.split('-')[1]}/20 to-${metric.color.split('-')[1]}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-${metric.color.split('-')[1]}/30`, children: _jsx(metric.icon, { className: `h-7 w-7 ${metric.color}` }) }) }),
                _jsx("div", { className: `${metric.color} font-bold text-xl mb-1`, children: metric.label }),
                _jsx("div", { className: "text-zion-slate-light text-sm", children: metric.value })
            ] }, index)) }),
            
            // Enhanced feature indicators
            _jsxs(motion.div, { variants: itemVariants, className: "flex flex-wrap justify-center items-center gap-8 text-zion-slate-light text-sm", children: [
                _jsxs("div", { className: "flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-cyan/30", children: [
                    _jsx("div", { className: "w-3 h-3 bg-zion-cyan rounded-full animate-pulse" }),
                    _jsx("span", { children: "AI-Powered Matching" })
                ] }),
                _jsxs("div", { className: "flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-purple/30", children: [
                    _jsx("div", { className: "w-3 h-3 bg-zion-purple rounded-full animate-pulse" }),
                    _jsx("span", { children: "Verified Professionals" })
                ] }),
                _jsxs("div", { className: "flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-cyan/30", children: [
                    _jsx("div", { className: "w-3 h-3 bg-zion-cyan rounded-full animate-pulse" }),
                    _jsx("span", { children: "Secure Payments" })
                ] }),
                _jsxs("div", { className: "flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-zion-purple/30", children: [
                    _jsx("div", { className: "w-3 h-3 bg-zion-purple rounded-full animate-pulse" }),
                    _jsx("span", { children: "Enterprise Security" })
                ] })
            ] })
        ] }) })
    ] }));
}
