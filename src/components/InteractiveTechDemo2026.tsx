"use client";
import React{ useState } from 'react';
import Link from 'next/link';
PlayPauseRotateCcwCheckCircleArrowRightBrainZapTargetGlobe

const InteractiveTechDemo2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('quantum');
  const [isAnimating, setIsAnimating] = useState(false);
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 0,
      title: "AI-Powered Data Analysis",
      description: "Watch our AI analyze complex datasets in real-time and provide actionable insights",
      icon: Brain,
      features: ["Real-time processing"Pattern recognition"Predictive analytics"],
      demoData: {
        datasets: 15,
        accuracy: 99.2,
        timeSaved: "85%"
      }
    },
    {
      id: 1,
      title: "Automated Workflow Engine",
      description: "Experience how our automation engine streamlines business processes",
      icon: Zap,
      features: ["Process automation"Smart routing"Error handling"],
      demoData: {
        processes: 8,
        efficiency: 95,
        timeSaved: "70%"
      }
    },
    {
      id: 2,
      title: "Predictive Maintenance System",
      description: "See how AI predicts equipment failures before they happen",
      icon: Target,
      features: ["Failure prediction"Maintenance scheduling"Cost optimization"],
      demoData: {
        assets: 12,
        uptime: 99.8,
        costSaved: "40%"
      }
    },
    {
      id: 3,
      title: "Global AI Network",
      description: "Explore how distributed AI systems collaborate across the globe",
      icon: Globe,
      features: ["Distributed learning"Global collaboration"Real-time sync"],
      demoData: {
        nodes: 25,
        latency: "2ms",
        reliability: 99.9
      }
    }
  ];

  const handleStartDemo = () => {
    setIsRunning(true);
    // Simulate demo running
    setTimeout(() => setIsRunning(false)3000);
  };

  const handleResetDemo = () => {
    setIsRunning(false);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Interactive Tech Demo 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the future of technology through hands-on interactive demos. 
            Test our AI solutions and see the impact on your business.
          </p>
        </div>

        {/* Demo Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <demo.icon className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{demo.title}</h3>
              <p className="text-sm opacity-90">{demo.description}</p>
            </button>
          ))}
=======
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      title: "🔒 Cybersecurity AI",
      description: "Watch our AI detect and neutralize threats in real-time",
      features: ["Neural threat detection", "Autonomous response", "Quantum encryption", "Real-time monitoring"],
      color: "from-red-500 to-orange-500",
      icon: "🛡️"
    },
    {
      title: "🔗 Blockchain Quantum",
      description: "Experience quantum-resistant blockchain with instant transactions",
      features: ["Quantum consensus", "Instant finality", "AI smart contracts", "Holographic storage"],
      color: "from-blue-500 to-purple-500",
      icon: "⚡"
    },
    {
      title: "☁️ Cloud Quantum",
      description: "See quantum-enhanced cloud computing with unlimited scalability",
      features: ["Quantum processing", "Neural optimization", "Holographic storage", "Autonomous management"],
      color: "from-cyan-500 to-blue-500",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🎮</span>
          <h2 className="text-4xl font-bold text-white">Interactive Technology Demos 2026</h2>
          <span className="text-4xl animate-pulse">🎮</span>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience our revolutionary technologies through interactive demonstrations. 
          See the future in action with real-time simulations and live demos.
        </p>
      </div>

        {/* Interactive Demo Area */}
        <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 mb-8">
          {activeDemo === 'quantum' && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">⚛️ Quantum Computing Demo</h3>
              <div className="relative h-64 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl overflow-hidden mb-6">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animationDelay: `${particle.delay}s`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`
                    }}
                  />
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleStartDemo}
                  disabled={isRunning}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                >
                  {isRunning ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                  {isRunning ? 'Running...' : 'Start Demo'}
                </button>
                <button
                  onClick={handleResetDemo}
                  className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                >
                  Generate Particles
=======
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Reset
>>>>>>> cursor/create-and-deploy-new-content-f977
                </button>
              </div>
            </div>

          {activeDemo === 'ai' && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">🧠 AI Consciousness Demo</h3>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 mb-6">
                <div className="text-6xl mb-4">🤖</div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <p className="text-purple-200">
                      "Hello! I'm experiencing curiosity about your thoughts. What fascinates you most about consciousness?"
                    </p>
                  </div>
                ))}
              </div>
              
              {isRunning && (
                <div className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center text-green-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400 mr-3"></div>
                    Demo is running...
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Chat with our conscious AI system and experience genuine artificial intelligence.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start New Conversation
              </button>
=======
              )}
>>>>>>> cursor/create-and-deploy-new-content-f977
            </div>
          </div>
        </div>
      </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Try It Yourself?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our experts and see how these technologies 
            can transform your specific business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Schedule Personal Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-solutions" 
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InteractiveTechDemo2026;
