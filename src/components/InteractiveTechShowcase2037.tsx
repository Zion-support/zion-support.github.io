        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2037
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto"></p>
            Experience our revolutionary technologies through interactive demonstrations</p>
          </p>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Technology</h3>
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeTech === index
                    ? `border-purple-400 bg-gradient-to-br ${getColorClasses(tech.color)}`
                    : 'border-white/20 bg-white/10 hover:border-purple-300'
                }`}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-80 mb-3">{tech.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 ${getStatusColor(tech.status)} text-white rounded-full text-xs font-semibold`}>
                        {tech.status}
                      </span>
                      <span className="text-sm opacity-60">
                        {index + 1} of {technologies.length}
                      </span>
            ))}
          {/* Technology Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{technologies[activeTech].icon}
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
                <div className="flex justify-center mb-6">
                  <span className={`px-4 py-2 ${getStatusColor(technologies[activeTech].status)} text-white rounded-full text-sm font-semibold`}>
                    {technologies[activeTech].status}
                  </span>
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-sm opacity-90">{feature}</span>
                  ))}
              {/* Interactive Demo Area */}
              <div className={`bg-gradient-to-br ${getColorClasses(technologies[activeTech].color)} rounded-lg p-8 mb-6 min-h-[200px] flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">{technologies[activeTech].icon}
                  <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
                  <p className="text-sm opacity-80 mb-4"></p>
                    Experience {technologies[activeTech].name} in action</p>
                  </p>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"></button>
                    Start Demo</button>
                  </button>
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"></button>
                  Try Now</button>
                </button>
                <button className="flex-1 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"></button>
                  Learn More</button>
                </button>
        {/* Technology Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%
            <div className="text-white/80">Accuracy Rate
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">300%
            <div className="text-white/80">Efficiency Gain
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5
            <div className="text-white/80">Dimensions Accessed
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">1000+
            <div className="text-white/80">Active Users
