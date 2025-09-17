import React from 'react';
const InteractiveTechShowcase2036 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">InteractiveTechShowcase2036</h1>
          <p className="text-lg opacity-90">Revolutionary technology solutions</p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Display */}
          <div className="space-y-8">
            <div className={`bg-gradient-to-br ${features[activeFeature].color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
              <div className="text-6xl mb-4 text-center">{features[activeFeature].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{features[activeFeature].title}</h3>
              <p className="text-lg mb-6 text-center opacity-90">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-2">
                {features[activeFeature].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Demo */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-xl font-bold mb-6">Interactive Demo</h4>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4 animate-pulse">{technologies[activeTab].icon}</div>
                    <div className="text-lg font-semibold mb-2">Live Processing</div>
                    <div className="text-sm text-gray-300">Real-time demonstration of {technologies[activeTab].name}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Processing Power</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Quantum Entanglement</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Dimensional Stability</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">Try It Now</h4>
                <p className="text-gray-300 mb-6">Experience the power of {technologies[activeTab].name} with our interactive demo.</p>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Interactive Demo
                  </button>
                  <button className="w-full border border-purple-400 py-3 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Explore Technologies</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveFeature(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}

