import React from "react";
import { motion } from "framer-motion, ";
import { ArrowRightCheckCircleSparkles } from "lucide-react, ";
import; React; from "react";
import { Link } from "react-router-dom, ";
interface Service {
  
category: stringico;n: React.ComponentType<{ className?: string }>,color: string; items: string[];
description?: string;
};interface ServicesOverviewProps {
  
services: Service[ ];
}
}
const ServicesOvervie;w: React.FC<ServicesOverviewProps>  = ({ services }) => {
return (;
<section className="py-20 bg-gradient-to-b from-zion-slate-dark/30 via-zion-slate-dark/20 to-zion-slate-dark/30" role="region" aria-labelledby="services-heading">
<div className="container mx-auto px-4 sm: px-6 lg:px-8">
<motion.div;
className="text-center mb-16";
initial={{ opacit;y: 0;y: 30 }};
whileInView={{ opacity: 1;y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>;
<div className="inline-flex items-center mb-4 px-4 py-2 bg-zion-cyan/10; border; border-zion-cyan/20 rounded-full">;
<Sparkles className="w-4 h-4 text-zion-cyan mr-2" />;
<span className="text-zion-cyan text-sm font-medium">Innovation First</span>;
</div>;
<h2 id="services-heading" className="text-4xl md: text-5xl l; g: text-6xl font-bold text-white mb-6">;
Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Services</span>;
</h2>;
<p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">;
<div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl blur-xl group-hover: blur-2xl transition-all duration-30o0" />;
</div>;
<h3 className="relative text-2xl font-bold text-white mb-4 group-hove;r: text-zion-cyan transition-colors duration-30o0">;
<CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0 group-hover: scale-110 transition-transform duration-30o0" aria-hidden="true" />;
<span className="text-sm">{item}</span>;
</motion.li>))}
</ul>;
