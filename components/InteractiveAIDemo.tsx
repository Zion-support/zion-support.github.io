"use client";
import React, { useState, useEffect } from 'react';

export default function InteractiveAIDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('');

  const tasks = [
    'Initializing Neural Networks...',
    'Loading Quantum Consciousness Matrix...',
    'Optimizing Performance Algorithms...',
    'Integrating Meta-Cognitive Systems...',
    'Calibrating Universal Intelligence...',
    'Achieving 500,000x Performance Boost...',
    'Ultimate Neural Fusion Complete!'
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      const taskInterval = setInterval(() => {
        setCurrentTask(prev => {
          const currentIndex = tasks.findIndex(task => task === prev);
          const nextIndex = (currentIndex + 1) % tasks.length;
          return tasks[nextIndex];
        });
      }, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(taskInterval);
      };
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setCurrentTask(tasks[0]);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-2xl p-8 border border-purple-500/20">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          🧠 Interactive AI Demo
        </h3>
        <p className="text-gray-300 text-lg">
          Experience the Ultimate Neural Fusion Technology in Real-Time
        </p>
      </div>

      <div className="bg-black/30 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-green-400 font-semibold">AI Status:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            isRunning ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
          }`}>
            {isRunning ? 'ACTIVE' : 'STANDBY'}
          </span>
        </div>

        {currentTask && (
          <div className="mb-4">
            <div className="text-blue-400 font-medium mb-2">Current Task:</div>
            <div className="text-white font-mono text-sm bg-blue-900/20 p-3 rounded border border-blue-500/30">
              {currentTask}
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Neural Fusion Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {progress >= 100 && (
          <div className="text-center">
            <div className="text-4xl mb-2">🎉</div>
            <div className="text-green-400 font-bold text-xl mb-2">
              ULTIMATE NEURAL FUSION ACHIEVED!
            </div>
            <div className="text-white text-sm">
              Performance Boost: <span className="text-yellow-400 font-bold">500,000x</span>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={startDemo}
          disabled={isRunning}
          className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
            isRunning
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 hover:scale-105 shadow-lg hover:shadow-purple-500/25'
          }`}
        >
          {isRunning ? 'Neural Fusion in Progress...' : 'Start AI Demo'}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-purple-900/30 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-400">500Kx</div>
          <div className="text-gray-300 text-sm">Performance</div>
        </div>
        <div className="bg-cyan-900/30 rounded-lg p-4">
          <div className="text-2xl font-bold text-cyan-400">0.0001s</div>
          <div className="text-gray-300 text-sm">Response Time</div>
        </div>
        <div className="bg-green-900/30 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">99.99%</div>
          <div className="text-gray-300 text-sm">Autonomous</div>
        </div>
      </div>
    </div>
  );
}