import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
<<<<<<< HEAD
      title: "AI Innovation 2025",
      description: "Latest AI breakthroughs and applications",
      image: "🤖",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Revolutionary quantum technologies",
      image: "⚡",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Neural Interfaces",
      description: "Brain-computer interface solutions",
      image: "🧠",
      gradient: "from-pink-500 to-red-500"
=======
      title: "AI Innovation Hub 2026",
      description: "Explore cutting-edge AI technologies and breakthrough innovations",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Discover the power of quantum computing and its applications",
      image: "⚛️",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Experience the future of brain-computer interfaces",
      image: "🧬",
      gradient: "from-green-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 4,
      title: "AI Transformation Guide",
      description: "Complete guide to AI transformation for your organization",
      image: "📚",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AITransformationGuide2026"
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
<<<<<<< HEAD
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Dynamic Content Carousel</h3>
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-r ${item.gradient} text-white p-8 rounded-lg text-center`}>
                <div className="text-6xl mb-4">{item.image}</div>
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-lg opacity-90">{item.description}</p>
=======
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className={`bg-gradient-to-r ${carouselItems[currentSlide].gradient} p-12 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-6xl mb-4">{carouselItems[currentSlide].image}</div>
                  <h3 className="text-4xl font-bold mb-4">{carouselItems[currentSlide].title}</h3>
                  <p className="text-xl mb-6 max-w-2xl">{carouselItems[currentSlide].description}</p>
                  <a
                    href={carouselItems[currentSlide].link}
                    className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Explore Now →
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-8xl">{carouselItems[currentSlide].image}</span>
                  </div>
                </div>
>>>>>>> 529ca24e68a672837e67d717ac7c2494da562120
              </div>
            </div>
<<<<<<< HEAD
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
=======
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
>>>>>>> cursor/create-and-deploy-new-content-d9c7
      </div>
    </div>
  );
};

export default DynamicContentCarousel;
