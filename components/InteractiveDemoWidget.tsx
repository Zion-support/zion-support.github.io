'use client';

import React, { useState, useEffect } from 'react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  action: string;
  result: string;
  icon: string;
}

const InteractiveDemoWidget: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const demoSteps: DemoStep[] = [
    {
      id: '1',
      title: 'Data Input',
      description: 'Upload your business data and requirements',
      action: 'Uploading data...',
      result: 'Data processed successfully!',
      icon: '📊'
    },
    {
      id: '2',
      title: 'AI Analysis',
      description: 'AI analyzes patterns and identifies opportunities',
      action: 'Analyzing data patterns...',
      result: 'Found 15 optimization opportunities!',
      icon: '🤖'
    },
    {
      id: '3',
      title: 'Strategy Generation',
      description: 'AI generates personalized implementation strategy',
      action: 'Generating strategy...',
      result: 'Strategy created with 340% ROI projection!',
      icon: '💡'
    },
    {
      id: '4',
      title: 'Implementation',
      description: 'Deploy AI solutions with guided setup',
      action: 'Deploying solutions...',
      result: 'AI solutions deployed successfully!',
      icon: '🚀'
    },
    {
      id: '5',
      title: 'Monitoring',
      description: 'Real-time monitoring and optimization',
      action: 'Monitoring performance...',
      result: 'Achieved 45% efficiency gain!',
      icon: '📈'
    }
  ];

  const handleStartDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const handleNextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    } else {
      setCompletedSteps(prev => [...prev, currentStep]);
      setIsPlaying(false);
    }
  };

  const handleResetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  useEffect(() => {
    if (isPlaying && currentStep < demoSteps.length) {
      const timer = setTimeout(() => {
        handleNextStep();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🎮 INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solutions work in real-time. Follow the interactive demo 
            to understand the complete transformation process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Steps */}
          <div className="space-y-6">
            {demoSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-6 rounded-xl border-2 transition-all duration-500 ${
                  index === currentStep && isPlaying
                    ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                    : completedSteps.includes(index)
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 ${
                    index === currentStep && isPlaying
                      ? 'bg-indigo-500 text-white animate-pulse'
                      : completedSteps.includes(index)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {completedSteps.includes(index) ? '✓' : step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${
                      index === currentStep && isPlaying ? 'text-indigo-700' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3">
                      {step.description}
                    </p>

                    {index === currentStep && isPlaying && (
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600 mr-2"></div>
                          <span className="text-sm font-semibold text-indigo-700">
                            {step.action}
                          </span>
                        </div>
                        <div className="text-sm text-indigo-600">
                          {step.result}
                        </div>
                      </div>
                    )}

                    {completedSteps.includes(index) && (
                      <div className="bg-green-100 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-green-700 mb-1">
                          ✓ Completed
                        </div>
                        <div className="text-sm text-green-600">
                          {step.result}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Line */}
                {index < demoSteps.length - 1 && (
                  <div className={`absolute left-6 top-16 w-0.5 h-8 ${
                    completedSteps.includes(index) ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Demo Controls & Info */}
          <div className="space-y-8">
            {/* Demo Controls */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo Controls</h3>
              
              <div className="space-y-4">
                {!isPlaying ? (
                  <button
                    onClick={handleStartDemo}
                    className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors"
                  >
                    🚀 Start Interactive Demo
                  </button>
                ) : (
                  <div className="text-center">
                    <div className="text-lg font-semibold text-indigo-700 mb-4">
                      Demo in Progress...
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Step {currentStep + 1} of {demoSteps.length}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleResetDemo}
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  🔄 Reset Demo
                </button>
              </div>
            </div>

            {/* Demo Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What 'You', 'll See</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                    <p className="text-gray-600 text-sm">Watch AI analyze data and generate insights in real-time</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI Calculations</h4>
                    <p className="text-gray-600 text-sm">See actual ROI projections and cost savings calculations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Implementation Guide</h4>
                    <p className="text-gray-600 text-sm">Follow step-by-step implementation process</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Monitoring</h4>
                    <p className="text-gray-600 text-sm">Experience real-time performance monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            {completedSteps.length > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo Results</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      {completedSteps.length}
                    </div>
                    <div className="text-sm text-gray-600">Steps Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {Math.round((completedSteps.length / demoSteps.length) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600">Progress</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Projected Results:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 340% ROI within 12 months</li>
                    <li>• 45% efficiency improvement</li>
                    <li>• $2.1M annual cost savings</li>
                    <li>• 60% reduction in manual tasks</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the full power of our AI solutions with a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
              Schedule Live Demo
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
              Download Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoWidget;