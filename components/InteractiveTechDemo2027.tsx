import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveTechDemo2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Fusion',
      description: 'Experience real-time quantum computing simulation with AI integration',
      features: ['Quantum Neural Networks', 'Real-time Processing', 'Predictive Analytics'],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence',
      description: 'Interact with advanced AI that understands context and emotion',
      features: ['Emotional AI', 'Context Understanding', 'Autonomous Learning'],
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface',
      description: 'Direct brain-computer interface for seamless interaction',
      features: ['Thought Control', 'Neural Feedback', 'Mind-Machine Sync'],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🚀 INTERACTIVE TECH DEMO 2027</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Experience the Future
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Interactive demonstrations of revolutionary technologies that will transform your business operations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                activeDemo === index
                  ? 'border-white bg-white bg-opacity-10 scale-105'
                  : 'border-gray-600 bg-gray-800 bg-opacity-50 hover:border-gray-400'
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${demo.color} opacity-20 rounded-2xl`}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{demo.title}</h3>
                <p className="text-gray-300 mb-6">{demo.description}</p>
                <ul className="space-y-2">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 mb-8">
            {demos.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeDemo === index ? 'bg-white scale-125' : 'bg-gray-500'
                }`}
                onClick={() => setActiveDemo(index)}
              />
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2027-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore {demos[activeDemo].title}</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services/ai-automation"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo2027;