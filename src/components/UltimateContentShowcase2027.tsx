import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "AI Innovation 2027",
      description: "Conscious AI systems with quantum processing and reality manipulation",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovation2027",
      features: ["Conscious AI", "Quantum Processing", "Reality Manipulation"]
    },
    {
      id: 2,
      title: "Quantum Consciousness 2028",
      description: "Universal awareness breakthrough with quantum mind networks",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumConsciousness2028",
      features: ["Universal Consciousness", "Quantum Networks", "Mind Integration"]
    },
    {
      id: 3,
      title: "Neural Reality 2027",
      description: "Thought-controlled reality interfaces and neural augmentation",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralReality2027",
      features: ["Neural Control", "Reality Interface", "Brain Augmentation"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 mb-12 overflow-hidden">
      {/* Animated Background */}
    <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>


      </div>
    </div>
  );
};


export default UltimateContentShowcase2027;
