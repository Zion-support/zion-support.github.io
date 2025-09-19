import React, { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';

export default function Page() {
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