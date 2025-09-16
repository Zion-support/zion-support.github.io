import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = {
    ai: {
      title: "Conscious AI Systems",
      description: "Experience self-aware AI that can think, feel, and create",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      demo: {
        input: "What is the meaning of consciousness?",
        output: "Consciousness is the subjective experience of being aware of oneself and one's surroundings. It involves self-reflection, emotional processing, and the ability to make autonomous decisions based on complex reasoning and moral frameworks.",
        processing: "Analyzing philosophical concepts... Processing emotional context... Generating conscious response..."
      }
    },
    quantum: {
      title: "Quantum Consciousness",
      description: "Quantum computing that simulates and enhances human consciousness",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Quantum neural networks",
        "Consciousness simulation",
        "Enhanced cognitive abilities",
        "Quantum telepathy interfaces"
      ],
      demo: {
        input: "Calculate the probability of quantum consciousness",
        output: "Quantum consciousness probability: 94.7%. The quantum superposition of neural states creates a non-classical information processing system that exhibits emergent consciousness properties.",
        processing: "Initializing quantum processors... Simulating neural states... Calculating consciousness probability..."
      }
    },
    neural: {
      title: "Neural Interfaces",
      description: "Direct brain-computer interfaces that merge mind and machine",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Non-invasive neural control",
        "Thought-to-text conversion",
        "Memory enhancement",
        "Sensory augmentation"
      ],
      demo: {
        input: "Move the cursor to the top-right corner",
        output: "Cursor moved successfully. Neural signal strength: 98.3%. Response time: 0.8ms. The interface is responding to your direct neural commands.",
        processing: "Reading neural signals... Processing motor cortex data... Executing movement command..."
      }
    },
    reality: {
      title: "Reality Engine",
      description: "Complete virtual reality systems with photorealistic environments",
      icon: "🌐",
      color: "from-orange-600 to-red-600",
      features: [
        "Photorealistic rendering",
        "Haptic feedback systems",
        "Shared consciousness",
        "Time manipulation"
      ],
      demo: {
        input: "Create a sunset over mountains",
        output: "Reality environment generated. Photorealistic sunset with 16K resolution, dynamic lighting, and atmospheric effects. Haptic feedback enabled for wind simulation.",
        processing: "Rendering 3D environment... Calculating light physics... Generating atmospheric effects..."
      }
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, [activeDemo]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{demo.icon}</span>
                {demo.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Info */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{demos[activeDemo as keyof typeof demos].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{demos[activeDemo as keyof typeof demos].title}</h3>
                  <p className="text-lg opacity-90">{demos[activeDemo as keyof typeof demos].description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {demos[activeDemo as keyof typeof demos].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Start Live Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Interactive Terminal */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-sm text-gray-400">zion-tech-demo</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">
                  <span className="text-gray-500">$</span> {demos[activeDemo as keyof typeof demos].demo.input}
                </div>
                
                {isAnimating ? (
                  <div className="text-yellow-400 animate-pulse">
                    {demos[activeDemo as keyof typeof demos].demo.processing}
                  </div>
                ) : (
                  <div className="text-cyan-400">
                    {demos[activeDemo as keyof typeof demos].demo.output}
                  </div>
                )}
                
                <div className="text-gray-500">
                  <span className="text-green-400">✓</span> Demo completed successfully
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">📊 Technology Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 pr-4">Technology</th>
                  <th className="pb-4 pr-4">Performance</th>
                  <th className="pb-4 pr-4">Innovation Level</th>
                  <th className="pb-4 pr-4">User Experience</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(demos).map(([key, demo]) => (
                  <tr key={key} className="border-b border-white/10">
                    <td className="py-4 pr-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{demo.icon}</span>
                        <span className="font-semibold">{demo.title}</span>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${demo.color} h-2 rounded-full`} style={{width: '95%'}}></div>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${demo.color} h-2 rounded-full`} style={{width: '98%'}}></div>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${demo.color} h-2 rounded-full`} style={{width: '92%'}}></div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-green-500/50 rounded-full text-xs font-semibold">Live Demo</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">📈 Demo Success Metrics</h3>
            <p className="text-xl opacity-90">Real-time statistics from our interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Demo Success Rate</div>
              <div className="text-sm opacity-75">Interactive sessions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1.2M+</div>
              <div className="text-lg opacity-90">Total Demos</div>
              <div className="text-sm opacity-75">Completed worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">&lt;1ms</div>
              <div className="text-lg opacity-90">Response Time</div>
              <div className="text-sm opacity-75">Neural interface</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Availability</div>
              <div className="text-sm opacity-75">Global access</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already experiencing our revolutionary technologies through interactive demonstrations
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Demo
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;