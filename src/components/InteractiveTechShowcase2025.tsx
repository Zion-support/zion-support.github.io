            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg"></button>
              Schedule Consultation</button>
            ))}
          {/* Active Tech Display */}
          <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${currentTech.borderColor} transition-all duration-500 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">{currentTech.icon}
              <h3 className="text-3xl font-bold mb-4">{currentTech.name}</h3>
              <p className="text-lg opacity-90 mb-8">{currentTech.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                ))}
              <div className="space-y-4">
                <button className={`w-full bg-gradient-to-r ${currentTech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}></button>
                  Try Interactive Demo</button>
                </button>
                <button className="w-full border border-white/30 text-white py-3 rounded-lg hover:bg-white/10 transition-colors"></button>
                  Learn More</button>
                </button>
        {/* Live Stats */}
        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Live Technology Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%
              <div className="text-sm opacity-80">AI Accuracy Rate
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000x
              <div className="text-sm opacity-80">Processing Speed
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7
              <div className="text-sm opacity-80">Autonomous Operation
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+
              <div className="text-sm opacity-80">Active Technologies
        {/* Technology Timeline */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Technology Evolution Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500">
            <div className="space-y-8">
              {[
                { year: "2025", tech: "Quantum AI Integration", status: "Current" },
                { year: "2026", tech: "Neural Interface Launch", status: "Upcoming" },
                { year: "2027", tech: "Autonomous AI Networks", status: "Development" },
                { year: "2028", tech: "Conscious AI Systems", status: "Research" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${item.status === 'Current' ? 'bg-purple-500' : 'bg-gray-500'} z-10`}>
                  <div className="ml-6 text-left">
                    <div className="text-2xl font-bold">{item.year}
                    <div className="text-lg opacity-80">{item.tech}
                    <div className="text-sm text-purple-400">{item.status}
              ))}
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"></p>
            Join us in exploring the cutting-edge technologies that are reshaping our world. Start your journey into the future today.</p>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
              Start Interactive Demo</button>
            </button>
            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg"></button>
              Schedule Consultation</button>
