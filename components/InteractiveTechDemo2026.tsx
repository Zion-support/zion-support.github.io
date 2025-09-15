"use client";
import React{ useState } from 'react';
import Link from 'next/link';
PlayPauseRotateCcwCheckCircleArrowRightBrainZapTargetGlobe

const InteractiveTechDemo2026 = () => {
  const [activeDemosetActiveDemo] = useState(0);
  const [isRunningsetIsRunning] = useState(false);

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
        </div>

        {/* Active Demo Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {demos[activeDemo].title}
              </h2>
              <p className="text-gray-300 mb-6">
                {demos[activeDemo].description}
              </p>
              
              <div className="space-y-3 mb-8">
                {demos[activeDemo].features.map((featureindex) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    {feature}
                  </div>
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
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Reset
                </button>
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Live Demo Data</h3>
              <div className="space-y-4">
                {Object.entries(demos[activeDemo].demoData).map(([keyvalue]index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g' $1').trim()}:
                    </span>
                    <span className="text-white font-semibold">
                      {typeof value === 'number' ? `${value}${key.includes('accuracy') || key.includes('uptime') || key.includes('reliability') ? '%' : ''}` : value}
                    </span>
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
              )}
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