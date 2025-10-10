'use client';
import React, { useState, memo } from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

const InteractiveContentShowcase2026: React.FC = memo(() => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-sentiment',
      title: 'AI Sentiment Analysis',
      description: 'Real-time customer sentiment analysis across all channels',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      features: ['95% Accuracy', 'Real-time Processing', 'Multi-language Support'],
      price: '$99/month'
    },
    {
      id: 'ai-video',
      title: 'AI Video Generation',
      description: 'Create professional videos from text prompts in minutes',
      icon: Play,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      features: ['4K Quality', 'Custom Branding', 'Multiple Formats'],
      price: '$49/month'
    },
    {
      id: 'ai-code',
      title: 'AI Code Assistant',
      description: 'Boost coding productivity with AI-powered assistance',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      features: ['50+ Languages', 'Smart Debugging', 'Code Generation'],
      price: '$29/month'
    },
    {
      id: 'ai-security',
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and automated response',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      features: ['99.9% Accuracy', 'Real-time Monitoring', 'Automated Response'],
      price: '$299/month'
    }
  ];

  const handleDemoChange = (index: number) => {
    setActiveDemo(index);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setIsPlaying(false);
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-cyan-600/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Brain className="w-4 h-4" />
          <span>Interactive Demo</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
          Experience Our AI Solutions
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Try our interactive demos to see how our AI solutions can transform your business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Demo Selector */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">Choose a Demo</h3>
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => handleDemoChange(index)}
              className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                activeDemo === index
                  ? 'border-cyan-400 bg-cyan-500/20'
                  : 'border-gray-600 bg-slate-800/50 hover:border-gray-500'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg ${demo.bgColor} flex items-center justify-center`}>
                  <demo.icon className={`w-5 h-5 ${demo.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{demo.title}</h4>
                  <p className="text-gray-400 text-sm">{demo.description}</p>
                </div>
                <div className="text-cyan-400 font-bold">{demo.price}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <div className="bg-slate-800/50 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">
              {demos[activeDemo].title} Demo
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={togglePlay}
                className="p-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={resetDemo}
                className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-6 mb-4 min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${demos[activeDemo].bgColor} flex items-center justify-center`}>
                <demos[activeDemo].icon className={`w-8 h-8 ${demos[activeDemo].color}`} />
              </div>
              <h4 className="text-white font-semibold mb-2">{demos[activeDemo].title}</h4>
              <p className="text-gray-400 text-sm mb-4">{demos[activeDemo].description}</p>
              {isPlaying && (
                <div className="text-cyan-400 text-sm">
                  Demo is running... (Simulated)
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Key Features:</h4>
            <ul className="space-y-2">
              {demos[activeDemo].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-cyan-400">{demos[activeDemo].price}</div>
                <div className="text-sm text-gray-400">Starting price</div>
              </div>
              <a
                href={`/${demos[activeDemo].id}`}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Try Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

InteractiveContentShowcase2026.displayName = 'InteractiveContentShowcase2026';

export default InteractiveContentShowcase2026;