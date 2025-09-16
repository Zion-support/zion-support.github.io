<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveHero: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveHero</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveHero;