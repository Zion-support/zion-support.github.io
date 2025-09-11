import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Globe, Shield, Zap, CheckCircle, TrendingUp } from 'lucide-react';
const features = [
    {
        icon: Users,
        title: "Global Talent Network",
        description: "Connect with verified professionals from 50+ countries",
        color: "from-blue-500 to-cyan-500",
        link: "/talent",
        features: ["AI-Powered Matching", "Verified Profiles", "Quick Hiring", "Global Coverage"]
    },
    {
        icon: Shield,
        title: "24/7 IT Support",
        description: "Round-the-clock technical assistance worldwide",
        color: "from-green-500 to-emerald-500",
        link: "/it-onsite-services",
        features: ["Emergency Response", "Onsite Services", "Remote Support", "Certified Technicians"]
    },
    {
        icon: Zap,
        title: "AI Solutions",
        description: "Cutting-edge artificial intelligence services",
        color: "from-purple-500 to-pink-500",
        link: "/ai-services",
        features: ["Machine Learning", "Neural Networks", "Predictive Analytics", "Automation"]
    },
    {
        icon: Globe,
        title: "Equipment Marketplace",
        description: "High-quality tech hardware and devices",
        color: "from-orange-500 to-red-500",
        link: "/equipment",
        features: ["Quality Guaranteed", "Fast Delivery", "Warranty", "Support"]
    }
];
const stats = [
    { number: "50+", label: "Countries Served" },
    { number: "10K+", label: "Verified Providers" },
    { number: "99.9%", label: "Success Rate" },
    { number: "<2hr", label: "Response Time" }
];
export function FeatureCTAs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    return (_jsx("section", { className: "py-20 bg-zion-blue", role: "region", "aria-labelledby": "features-title", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { id: "features-title", className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Why Choose Zion Tech Group?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Experience the future of tech services with our comprehensive platform designed for businesses and individuals alike." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-white mb-2", children: stat.number }), _jsx("div", { className: "text-zion-slate-light text-sm md:text-base", children: stat.label })] }, stat.label))) }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: features.map((feature, index) => (_jsx(motion.div, { variants: itemVariants, whileHover: "hover", className: "group", children: _jsx(Link, { to: feature.link, className: "block", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300", children: [_jsx("div", { className: `w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, children: _jsx(feature.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: feature.title }), _jsx("p", { className: "text-zion-slate-light mb-6 leading-relaxed", children: feature.description }), _jsx("ul", { className: "space-y-3 mb-6", children: feature.features.map((item, idx) => (_jsxs("li", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-400 flex-shrink-0" }), _jsx("span", { children: item })] }, idx))) }), _jsxs("div", { className: "flex items-center gap-2 text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300", children: [_jsx("span", { className: "font-medium", children: "Learn More" }), _jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })] })] }) }) }, feature.title))) }), _jsx(motion.div, { className: "text-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Get Started?" }), _jsx("p", { className: "text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Join thousands of satisfied customers who trust Zion Tech Group for their technology needs." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Link, { to: "/signup", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 group", children: ["Get Started Free", _jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" })] }), _jsx(Link, { to: "/contact", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105", children: "Contact Sales" })] }), _jsxs("div", { className: "mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-zion-slate-light", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }), _jsx("span", { children: "4.9/5 Rating" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-4 h-4 text-green-400" }), _jsx("span", { children: "SOC 2 Certified" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-4 h-4 text-blue-400" }), _jsx("span", { children: "Trusted by Fortune 500" })] })] })] }) })] }) }));
}
