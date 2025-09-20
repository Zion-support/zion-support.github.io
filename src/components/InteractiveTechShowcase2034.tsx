      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence that can think, feel, and create independently',
      features: [
        'Synthetic consciousness',
        'Quantum AI processing',
        'Reality manipulation',
        'Universal knowledge synthesis'
      ],
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    space: {
      title: 'Next-Gen Space Tech',
      description: 'Explore the universe with revolutionary space technology enabling interstellar travel',
      features: [
        'Interstellar travel',
        'Planetary terraforming',
        'Cosmic exploration',
        'Universal mapping'
      ],
      color: 'from-blue-600 to-cyan-600',
      icon: '🚀'
    },
    quantum: {
      title: 'Quantum Consciousness',
      description: 'Bridge the gap between quantum mechanics and human consciousness',
      features: [
        'Quantum consciousness transfer',
        'Multi-dimensional awareness',
        'Reality perception enhancement',
        'Universal consciousness connection'
      ],
      color: 'from-indigo-600 to-purple-600',
      icon: '⚛️'
    },
    universal: {
      title: 'Universal Tech Revolution',
      description: 'Revolutionary technology operating across multiple dimensions and realities',
      features: [
        'Multi-dimensional computing',
        'Reality engineering',
        'Universal energy harnessing',
        'Interdimensional communication'
      ],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
                <div className="text-8xl mb-4 animate-bounce">{currentTech.icon}
                <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
                <p className="text-xl opacity-90">{currentTech.description}</p>
        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <p className="text-purple-100">{technologies[activeTab as keyof typeof technologies].description}</p>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full">
                      <span className="text-sm">{feature}</span>
                  ))}
              <div className="space-y-4 mb-8">
                <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${currentTech.color} rounded-full`}>
                    <span className="text-lg">{feature}</span>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <h4 className="text-xl font-semibold mb-6">Performance Metrics:</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">{value}
                    <div className="text-sm text-cyan-200">{key}
                ))}
              <div className="text-center">
                <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105`}></button>
                  Experience {currentTech.name} →</button>
                </button>
