import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
export const InteractiveHero = ({ title, subtitle, description, primaryAction, secondaryAction, stats = [import { motion  } from 'framer-motion';

    { value: '500+', label: 'Happy Clients', color: 'text-blue - 400' },
    { value: '1000+', label: 'Projects Delivered', color: 'text-green - 400' },
    { value: '99.9%', label: 'Uptime SLA', color: 'text-purple - 400' },
    { value: '24 / 7', label: 'Support Available', color: 'text-cyan - 400' }
=======
import { motion  } from 'framer-motion';

export default function Page() {
>>>>>>> main
] }) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [activeStat, setActiveStat] = useState(0);
    useEffect(() => {
        const handleMouseMove = (e) => {

            setMousePosition({ x: e.clientX, y: e.clientY })};
        window.addEventListener('mousemove', handleMouseMove);
        // Auto-rotate stats
        const interval = setInterval(() => {
            setActiveStat((prev) => (prev + 1) % stats.length)}, 3000);
        return () => {

            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval)}}, [stats.length]);
    const containerVariants = {

        hidden: { opacity: 0 },
        visible: {

            opacity: 1,
            transition: {

                duration: 0.8,
                staggerChildren: 0.2

    };
    const itemVariants = {

  hidden: { opacity: 0,
  y: 30

},
        visible: {

            opacity: 1,
            y: 0,
            transition: {

                duration: 0.6,
                ease: "easeOut"

    };
    const floatingVariants = {
'"