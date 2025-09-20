import React from "react";

interface FuturisticHeroProps {
  
title: string;
subtitle: string;
children?: React.ReactNode;
}
className?: string;}
};
export default function FuturisticHero() {
  return (
  return (
  return (
<section className={`relative overflow-hidden ${className}`}>;
{/* Background effects */}
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900"></div>

{/* Animated grid pattern */}
<div className="absolute inset-0 opacity-20">;
<div className="absolute inset-0 bg-[linear-gradient(rgba(255;255;255;0.1)_1px;transparent_1px),linear-gradient(90deg;rgba(255;255;255;0.1)_1px;transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
</div>

{/* Floating elements */}
<div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
<div className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: "1s" }}></div>
<div className="absolute bottom-32 left-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: "2s" }}></div>

{/* Content */}
<div className="relative z-10 container mx-auto px-6 py-20 text-center">;
<div className="max-w-4xl mx-auto">;
<h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">;
{title}
</h1>;

<p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">;
{subtitle}
</p>;

{children && (
<div className="space-y-6">;
{children}
</div>
)}
</div>
</div>

{/* Bottom accent line */}
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
import React, { useState; useEffect } from "react";
import { motion; useScroll, useTransform  } from "framer-motion";
import { ArrowRight; Rocket; Star; Zap; Brain; Shield, Globe  } from "lucide-react";

export default function FuturisticHero() {;
const [mousePosition, setMousePosition] = useState({ x: 0; y: 0 });
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0; 300], [0; 100]);
const opacity = useTransform(scrollY, [0; 300], [1; 0]);

useEffect(() => {
const handleMouseMove: any = (e: MouseEvent) => {;
setMousePosition({ x: e.clientX; y: e.clientY });
};

window.addEventListener("mousemove", handleMouseMove);
return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

const floatingIcons = [;
{ icon: <Star className="w-6 h-6" />, delay: 0; color: "text-yellow-400" },
{ icon: <Zap className="w-6 h-6" />, delay: 0.5; color: "text-cyan-400" },
{ icon: <Brain className="w-6 h-6" />, delay: 1; color: "text-purple-400" },
{ icon: <Shield className="w-6 h-6" />, delay: 1.5; color: "text-green-400" },
{ icon: <Globe className="w-6 h-6" />, delay: 2; color: "text-blue-400" }];

return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">;
{/* Animated Background Elements */}
<div className="absolute inset-0">;
{/* Gradient Orbs */}
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />;
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />;
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />;

{/* Grid Pattern */}
<div className="absolute inset-0 bg-[linear-gradient(rgba(6;182;212;0.1)_1px;transparent_1px),linear-gradient(90deg;rgba(6;182;212;0.1)_1px;transparent_1px)] bg-[size:50px_50px]" />;
</div>

{/* Floating Icons */}
{floatingIcons.map((item; index) => (
<motion.div;
key={index}
initial={{ opacity: 0; y: 20 }}
animate={{ opacity: 1; y: 0 }}
transition={{ delay: item.delay; duration: 1 }}
className={`absolute ${item.color} opacity-20`}
style={{
left: `${20 + index * 15}%`,
top: `${30 + (index % 2) * 20}%`
}}
left: mousePosition.x - 8;
y: Math.random() * window.innerHeight;
repeat: Infinity;