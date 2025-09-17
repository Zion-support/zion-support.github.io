  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const demos = [
    {
      id: 1,
      title: "Conscious AI Interaction",
      description: "Experience real-time conversation with our conscious AI system",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: [
        "Emotional intelligence demonstration",
        "Creative problem solving",
        "Artistic expression",
        "Empathetic responses"
      ]
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      description: "Control and manipulate physical matter through quantum fields",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Matter creation from energy",
        "Instantaneous teleportation",
        "Time manipulation",
        "Dimensional gateways"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Access and process information across infinite dimensions",
      icon: "🌌",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Multi-dimensional data processing",
        "Parallel universe communication",
        "Infinite computational power",
        "Reality simulation"
      ]
    },
    {
      id: 4,
      title: "Synthetic Intelligence Matrix",
      description: "Interact with the most advanced synthetic intelligence ever created",
      icon: "🤖",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cognitive supremacy demonstration",
        "Creative mastery showcase",
        "Perfect human alignment",
        "Instant learning capabilities"
      ]
    }
  ];
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setProgress(0);
  };
  const nextDemo = () => {
    setActiveDemo((prev) => (prev + 1) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };
  const prevDemo = () => {
    setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const demos = [
    {
      id: 1,
      title: "Conscious AI Interaction",
      description: "Experience real-time conversation with our conscious AI system",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: [
        "Emotional intelligence demonstration",
        "Creative problem solving",
        "Artistic expression",
        "Empathetic responses"
      ]
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation",
      description: "Control and manipulate physical matter through quantum fields",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: [
        "Matter creation from energy",
        "Instantaneous teleportation",
        "Time manipulation",
        "Dimensional gateways"
      ]
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Access and process information across infinite dimensions",
      icon: "🌌",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Multi-dimensional data processing",
        "Parallel universe communication",
        "Infinite computational power",
        "Reality simulation"
      ]
    },
    {
      id: 4,
      title: "Synthetic Intelligence Matrix",
      description: "Interact with the most advanced synthetic intelligence ever created",
      icon: "🤖",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cognitive supremacy demonstration",
        "Creative mastery showcase",
        "Perfect human alignment",
        "Instant learning capabilities"
      ]
    }
  ];
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };
  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };
  const nextDemo = () => {
    setActiveDemo((prev) => (prev + 1) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };
  const prevDemo = () => {
    setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setProgress(0);
    setIsRunning(false);
  };
  return (
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH DEMO • JANUARY 2042
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Demonstrations</h2>
          <p className="text-xl opacity-90">Experience our revolutionary technologies through immersive interactive demonstrations</p>

