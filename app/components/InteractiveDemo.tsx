'use client';
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Zap, Brain, Shield, Cloud, Code } from 'lucide-react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: number;
  color: string;
}

const InteractiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const demoSteps: DemoStep[] = [
    {
      id: 'ai-analysis',
      title: 'AI Data Analysis',
      description: 'Our AI analyzes your business data in real-time, identifying patterns and opportunities.',
      icon: Brain,
      duration: 3000,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'security-scan',
      title: 'Security Assessment',
      description: 'Comprehensive security scan identifies vulnerabilities and provides protection recommendations.',
      icon: Shield,
      duration: 2500,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Optimization',
      description: 'Automated cloud resource optimization reduces costs while improving performance.',
      icon: Cloud,
      duration: 2000,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'code-generation',
      title: 'AI Code Generation',
      description: 'Generate production-ready code with AI assistance, reducing development time by 70%.',
      icon: Code,
      duration: 3500,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying) {
      const currentStepData = demoSteps[currentStep];
      
      // Progress animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / (currentStepData.duration / 50));
        });
      }, 50);

      // Step transition
      interval = setTimeout(() => {
        setCurrentStep(prev => (prev + 1) % demoSteps.length);
        setProgress(0);
      }, currentStepData.duration);
    }

    return () => {
      if (interval) clearTimeout(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isPlaying, currentStep, demoSteps]);

  const toggleDemo = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setProgress(0);
    }
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const currentStepData = demoSteps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Interactive AI Demo</h3>
        <p className="text-gray-300 mb-6">
          Experience our AI solutions in action. Watch as our systems analyze, optimize, and generate solutions for your business.
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={toggleDemo}
            className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
            {isPlaying ? 'Pause Demo' : 'Start Demo'}
          </button>
          
          <button
            onClick={resetDemo}
            className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${currentStepData.color} rounded-lg flex items-center justify-center mr-4`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">{currentStepData.title}</h4>
              <p className="text-gray-400">Step {currentStep + 1} of {demoSteps.length}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              {Math.round(progress)}%
            </div>
            <div className="text-sm text-gray-400">Complete</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 bg-gradient-to-r ${currentStepData.color} rounded-full transition-all duration-100`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-gray-300 text-center">
          {currentStepData.description}
        </p>

        {isPlaying && (
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              {demoSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-purple-500 scale-125'
                      : index < currentStep
                      ? 'bg-green-500'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          This demo showcases real capabilities of our AI solutions. 
          <span className="text-purple-400 font-semibold"> Contact us</span> to see how these technologies can transform your business.
        </p>
      </div>
    </div>
  );
};

export default InteractiveDemo;