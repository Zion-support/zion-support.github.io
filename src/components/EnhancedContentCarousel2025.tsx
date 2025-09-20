    }
  ];

    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };
  };
          </p>
        </motion.div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞
            <div className="text-gray-300">Possibilities
