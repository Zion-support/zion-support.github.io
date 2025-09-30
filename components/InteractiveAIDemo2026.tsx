import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveAIDemo2026() {
  const [selectedDemo, setSelectedDemo] = useState('neural');
  const [isRunning, setIsRunning] = useState(false);

  const demos = {
    neural: {
      title: 'Neural Interface Demo',
      description: 'Experience thought-controlled AI interaction',
      icon: '🧠',
      features: [
        'Thought-to-text conversion',
        'Neural command processing',
        'Emotion recognition',
        'Predictive assistance'
      ],
      metrics: {
        accuracy: '99.7%',
        latency: '<200ms',
        uptime: '24/7'
      }
    },
    quantum: {
      title: 'Quantum AI Demo',
      description: 'Witness quantum computing power',
      icon: '⚡',
      features: [
        'Quantum machine learning',
        'Optimization algorithms',
        'Cryptographic security',
        'Molecular simulation'
      ],
      metrics: {
        speed: '10,000x',
        accuracy: '99.9%',
        qubits: '1000+'
      }
    },
    banking: {
      title: 'Banking AI Demo',
      description: 'See neural banking in action',
      icon: '💰',
      features: [
        'Thought-controlled transactions',
        'Neural authentication',
        'Fraud detection',
        'Predictive analytics'
      ],
      metrics: {
        revenue: '+$2.5B',
        security: '99.9%',
        satisfaction: '95%'
      }
    }
  };

  const runDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive AI Technology Demos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of AI technology with our interactive demonstrations. 
            See how neural interfaces, quantum computing, and advanced AI systems work in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Demo</h3>
            
            {Object.entries(demos).map(([key, demo]) => (
              <div
                key={key}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedDemo === key
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedDemo(key)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {demo.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{demo.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(demo.metrics).map(([metric, value]) => (
                        <div key={metric} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{metric}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[selectedDemo].icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {demos[selectedDemo].title}
              </h3>
              <p className="text-gray-600">{demos[selectedDemo].description}</p>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-gray-900 rounded-xl p-6 mb-6 min-h-[300px] flex items-center justify-center">
              {isRunning ? (
                <div className="text-center text-white">
                  <div className="animate-spin w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-lg font-semibold">Running {demos[selectedDemo].title}...</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {selectedDemo === 'neural' && 'Processing neural signals...'}
                    {selectedDemo === 'quantum' && 'Executing quantum algorithms...'}
                    {selectedDemo === 'banking' && 'Processing banking transaction...'}
                  </p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">🎯</div>
                  <p className="text-lg font-semibold mb-2">Ready to Demo</p>
                  <p className="text-sm text-gray-400">
                    Click "Run Demo" to see {demos[selectedDemo].title.toLowerCase()} in action
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={runDemo}
                disabled={isRunning}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isRunning ? 'Running Demo...' : 'Run Interactive Demo'}
              </button>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                {Object.entries(demos[selectedDemo].metrics).map(([metric, value]) => (
                  <div key={metric} className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Implement These Technologies?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our team of AI experts can help you integrate these revolutionary technologies into your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore AI Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Demo Call
              </Link>
            </div>
            
            <div className="mt-6 text-sm opacity-75">
              <p>📞 Call +1 302 464 0950 for immediate assistance</p>
              <p>📧 Email: kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}