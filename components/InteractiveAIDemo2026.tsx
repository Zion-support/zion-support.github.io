import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveAIDemo2026 = () => {
  const [selectedDemo, setSelectedDemo] = useState('chatbot');
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'chatbot',
      title: 'AI Customer Service',
      description: 'Experience our advanced conversational AI that handles complex customer queries with human-like understanding.',
      icon: '💬',
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness', 'Sentiment Analysis']
    },
    {
      id: 'analytics',
      title: 'AI Data Analytics',
      description: 'See how our AI transforms raw data into actionable insights with predictive modeling and real-time dashboards.',
      icon: '📊',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Automated Reporting']
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Watch our AI automate complex business processes with intelligent workflow design and smart decision making.',
      icon: '⚙️',
      features: ['Workflow Automation', 'Smart Triggers', 'Decision Trees', 'Performance Monitoring']
    },
    {
      id: 'security',
      title: 'AI Cybersecurity',
      description: 'Explore our AI-powered security system that detects threats in real-time and responds autonomously.',
      icon: '🛡️',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Risk Assessment']
    }
  ];

  const handleDemoStart = () => {
    setIsPlaying(true);
    // Simulate demo loading
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-blue-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-400/10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Interactive AI Demo 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience AI in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Real-Time
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Try our revolutionary AI solutions hands-on. See how our technology can transform 
            your business operations with interactive demonstrations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose Your Demo Experience</h3>
            
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold">{demo.title}</h4>
                    <p className="text-blue-200 text-sm">{demo.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {demo.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Demo Display */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm text-gray-400 ml-4">AI Demo Console</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                {isPlaying ? (
                  <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-cyan-400 font-semibold">Loading AI Demo...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {demos.find(d => d.id === selectedDemo)?.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">
                      {demos.find(d => d.id === selectedDemo)?.title}
                    </h4>
                    <p className="text-gray-400 mb-6">
                      {demos.find(d => d.id === selectedDemo)?.description}
                    </p>
                    <button
                      onClick={handleDemoStart}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    >
                      ▶️ Start Interactive Demo
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                Experience the full power of our AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Full Demo
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Custom Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already leveraging our AI solutions to achieve 
              unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                🚀 Start Your AI Journey
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIDemo2026;