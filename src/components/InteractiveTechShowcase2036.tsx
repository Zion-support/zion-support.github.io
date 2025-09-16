  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const technologies = [
    {
      id: 1,
      name: "AI Consciousness",
      icon: "🧠",
      description: "True artificial consciousness with self-awareness and emotional intelligence",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Consciousness", "Meta-Cognition"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900"
    },
    {
      id: 2,
      name: "Quantum Computing",
      icon: "⚡",
      description: "Quantum-enhanced processing with superposition and entanglement capabilities",
      features: ["Quantum Superposition", "Quantum Entanglement", "Quantum Tunneling", "Quantum Speed"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900"
    },
    {
      id: 3,
      name: "Interdimensional Tech",
      icon: "🌌",
      description: "Technology that interacts with parallel dimensions and alternate realities",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Multi-Dimensional Awareness"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900"
    },
    {
      id: 4,
      name: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer interfaces for seamless human-AI integration",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Consciousness Amplification"],
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900 to-purple-900"
    },
    {
      id: 5,
=======
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
