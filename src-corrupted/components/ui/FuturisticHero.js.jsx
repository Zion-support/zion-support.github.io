<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {ArrowRight, Rocket, Star, Zap, Brain, Shield, Globe} from 'lucide-react';
export default function FuturisticHero
export {FuturisticHero}() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    useEffect(() => {
        const handleMouseMove = (props: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY })};
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove)}, []);
    const floatingIcons = [
        {icon: <Star className="w-6 h-6" />, delay: 0, color: 'text-yellow-400'},
        {icon: <Zap className="w-6 h-6" />, delay: 0.5, color: 'text-cyan-400'},
        {icon: <Brain className="w-6 h-6" />, delay: 1, color: 'text-purple-400'},
        {icon: <Shield className="w-6 h-6" />, delay: 1.5, color: 'text-green-400'},
        {icon: <Globe className="w-6 h-6" />, delay: 2, color: 'text-blue-400'},
    ];
    return (<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
=======

const FuturisticHero.js: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FuturisticHero.js</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default FuturisticHero.js;
