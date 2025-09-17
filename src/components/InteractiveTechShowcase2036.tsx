      name: "Reality Engineering",
      description: "Complete control over physical reality through advanced quantum field manipulation",
      icon: "🌍",
      features: [
        "Matter Creation",
        "Gravity Manipulation",
        "Time Dilation Control",
        "Reality Shaping"
      ],
      gradient: "from-pink-600 to-red-600",
      bgGradient: "from-pink-600/20 to-red-600/20"
  const handleTechClick = (index: number) => {
    if (index !== activeTech) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech(index);
        setIsAnimating(false);
      }, 300);
    }
