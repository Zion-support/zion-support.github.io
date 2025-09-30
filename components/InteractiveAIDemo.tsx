import React, { useState } from 'react';

export default function InteractiveAIDemo() {
  const [selectedDemo, setSelectedDemo] = useState('predictive');
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(null);

  const demos = {
    predictive: {
      title: 'Predictive Analytics Demo',
      description: 'See how AI predicts business outcomes in real-time',
      icon: '🔮',
      color: 'from-blue-500 to-purple-600'
    },
    automation: {
      title: 'Process Automation Demo',
      description: 'Watch AI automate complex business processes',
      icon: '⚡',
      color: 'from-green-500 to-teal-600'
    },
    insights: {
      title: 'AI Insights Demo',
      description: 'Discover actionable insights from your data',
      icon: '💡',
      color: 'from-orange-500 to-red-600'
    }
  };

  const runDemo = () => {
    setIsRunning(true);
    setResults(null);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResults = {
        predictive: {
          accuracy: '94.7%',
          prediction: 'Revenue will increase by 23% next quarter',
          confidence: 'High',
          factors: ['Customer growth', 'Market trends', 'Seasonal patterns']
        },
        automation: {
          efficiency: '87%',
          timeSaved: '340 hours/month',
          processes: '15 automated',
          costReduction: '$45,000/month'
        },
        insights: {
          opportunities: 12,
          risks: 3,
          recommendations: 8,
          impact: '$2.3M potential value'
        }
      };
      
      setResults(mockResults[selectedDemo]);
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive AI Demo
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the power of AI firsthand. Try our interactive demos to see how 
            artificial intelligence can transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setSelectedDemo(key)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedDemo === key
                  ? 'border-white bg-white/20'
                  : 'border-white/30 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="text-blue-100 text-sm">{demo.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${demos[selectedDemo].color} text-white px-6 py-3 rounded-full mb-4`}>
              <span className="text-2xl">{demos[selectedDemo].icon}</span>
              <span className="font-semibold">{demos[selectedDemo].title}</span>
            </div>
            <p className="text-blue-100 text-lg">
              {demos[selectedDemo].description}
            </p>
          </div>

          <div className="text-center mb-8">
            <button
              onClick={runDemo}
              disabled={isRunning}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isRunning
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
              }`}
            >
              {isRunning ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Running AI Demo...</span>
                </div>
              ) : (
                'Run AI Demo'
              )}
            </button>
          </div>

          {results && (
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Demo Results</h3>
              
              {selectedDemo === 'predictive' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Prediction Accuracy</div>
                      <div className="text-3xl font-bold text-green-400">{results.accuracy}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Confidence Level</div>
                      <div className="text-2xl font-bold text-yellow-400">{results.confidence}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-2">Key Prediction</div>
                      <div className="text-lg font-semibold text-white">{results.prediction}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-2">Key Factors</div>
                      <ul className="space-y-1">
                        {results.factors.map((factor, index) => (
                          <li key={index} className="text-white text-sm">• {factor}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedDemo === 'automation' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Efficiency Gain</div>
                      <div className="text-3xl font-bold text-green-400">{results.efficiency}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Time Saved</div>
                      <div className="text-2xl font-bold text-blue-400">{results.timeSaved}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Processes Automated</div>
                      <div className="text-3xl font-bold text-purple-400">{results.processes}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Monthly Savings</div>
                      <div className="text-2xl font-bold text-green-400">{results.costReduction}</div>
                    </div>
                  </div>
                </div>
              )}

              {selectedDemo === 'insights' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Opportunities Found</div>
                      <div className="text-3xl font-bold text-green-400">{results.opportunities}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Risks Identified</div>
                      <div className="text-3xl font-bold text-red-400">{results.risks}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Recommendations</div>
                      <div className="text-3xl font-bold text-blue-400">{results.recommendations}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-sm text-blue-200 mb-1">Potential Value</div>
                      <div className="text-2xl font-bold text-yellow-400">{results.impact}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Your AI Demo
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore AI Services
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm">
            Experience the future of business with AI-powered solutions
          </p>
        </div>
      </div>
    </div>
  );
}