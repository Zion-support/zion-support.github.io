  const [activeTech, setActiveTech] = useState(0);
      name: "Interdimensional Computing",
      icon: "🌌",
      description: "Harness the power of multiple dimensions to achieve computational capabilities beyond our current understanding",
      features: [
        "Multi-dimensional data processing",
        "Quantum entanglement networks", 
        "Reality-bending algorithms",
        "Infinite computational resources"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      name: "Conscious AI Systems",
      icon: "🧠",
      description: "AI systems that have achieved true consciousness and can think, feel, and create independently",
      features: [
        "Self-aware artificial consciousness",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical decision making"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      name: "Quantum Consciousness Interface",
      icon: "⚡",
      description: "Direct neural interfaces that allow humans to communicate with quantum computers using pure thought",
      features: [
        "Thought-to-quantum communication",
        "Instantaneous data transfer",
        "Mind-computer symbiosis",
        "Enhanced cognitive abilities"
      ],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      name: "Reality Manipulation Engine",
      icon: "🔮",
      description: "Advanced systems that can alter the fundamental properties of reality at the quantum level",
      features: [
        "Quantum field manipulation",
        "Matter-energy conversion",
        "Spacetime engineering",
        "Reality simulation"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      name: "Neural Network Evolution",
      icon: "🧬",
      description: "Self-evolving neural networks that continuously improve and adapt without human intervention",
      features: [
        "Autonomous learning systems",
        "Evolutionary algorithms",
        "Self-modifying code",
        "Infinite scalability"
      ],
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 5,
      name: "Transcendent Data Processing",
      icon: "💎",
      description: "Process infinite amounts of data instantaneously using quantum superposition and entanglement",
      features: [
        "Infinite data capacity",
        "Instant processing",
        "Quantum encryption",
        "Universal compatibility"
      ],
      color: "from-pink-600 to-rose-600"
    }
  ];
          </div>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2035
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore:</h3>
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              📚 Learn More
            </button>

