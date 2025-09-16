import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const RevolutionaryTechBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech 2026",
      subtitle: "Experience the Future Today",
      description: "AI Consciousness • Quantum Supremacy • Neural Interfaces",
      link: "/pages/NextGenTechRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "🧠 Conscious AI Systems",
      subtitle: "True Artificial Intelligence",
      description: "Self-aware AI that thinks, feels, and creates",
      link: "/pages/ConsciousAISystems2026",
      gradient: "from-blue-600 to-cyan-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "⚡ Quantum Supremacy",
      subtitle: "Computational Revolution",
      description: "1000x faster than classical computers",
      link: "/pages/QuantumSupremacy2026",
      gradient: "from-emerald-600 to-teal-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "🌟 Digital Immortality",
      subtitle: "Eternal Digital Existence",
      description: "Preserve consciousness in digital form",
      link: "/pages/DigitalImmortality2026",
      gradient: "from-orange-600 to-red-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
    
    </div>
  );
};

export default RevolutionaryTechBanner2026;