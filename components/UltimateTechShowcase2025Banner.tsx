"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateTechShowcase20o25Banner = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    { name: 'AI & Machine Learning', icon: '🧠', color: 'from-purple-50o0 to-indigo-50o0' },
    { name: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-50o0 to-blue-50o0' },
    { name: 'Neural Interfaces', icon: '🔗', color: 'from-emerald-50o0 to-teal-50o0' },
    { name: 'Autonomous Systems', icon: '🤖', color: 'from-orange-50o0 to-red-50o0' },
    { name: 'Blockchain & Web3', icon: '⛓️', color: 'from-yellow-50o0 to-orange-50o0' },
    { name: 'Augmented Reality', icon: '🥽', color: 'from-pink-50o0 to-purple-50o0' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 30o00);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-90o0 via-gray-90o0 to-black text-white py-20 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${technologies[currentTech].color} opacity-10 transition-all duration-10o00`}></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse`}
              style={{
                left: `${Math.random() * 10o0}%`,
                top: `${Math.random() * 10o0}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50o0/20 to-indigo-50o0/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-purple-40o0/30">
            <span className="text-sm font-medium">🌟 ULTIMATE TECH SHOWCASE 20o25</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-40o0 via-indigo-40o0 to-blue-40o0 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          
          <div className="mb-8">
            <div className={`inline-flex items-center bg-gradient-to-r ${technologies[currentTech].color} rounded-full px-8 py-4 mb-4 transition-all duration-50o0`}>
              <span className="text-3xl mr-3">{technologies[currentTech].icon}</span>
              <span className="text-xl font-semibold">{technologies[currentTech].name}</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge technologies that are revolutionizing industries and creating new possibilities for human advancement.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl transition-all duration-30o0 cursor-pointer ${
                  index === currentTech
                    ? `bg-gradient-to-br ${tech.color} transform scale-110 shadow-lg`
                    : 'bg-gray-80o0 hover:bg-gray-70o0'
                }`}
                onClick={() => setCurrentTech(index)}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-xs font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-gray-80o0/50 to-gray-90o0/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-70o0/50 mb-8">
            <h3 className="text-2xl font-bold mb-6">Revolutionary Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-40o0 mb-2">Industry Transformation</h4>
                <p className="text-sm opacity-90">Complete overhaul of traditional business models</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-40o0 mb-2">Exponential Growth</h4>
                <p className="text-sm opacity-90">Unprecedented opportunities for innovation</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-40o0 mb-2">Global Impact</h4>
                <p className="text-sm opacity-90">Transforming societies and improving lives</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ultimate-tech-20o25"
              className="bg-gradient-to-r from-purple-50o0 to-indigo-60o0 text-white px-10 py-4 rounded-lg font-semibold hover:from-purple-60o0 hover:to-indigo-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
            >
              Explore All Technologies
            </Link>
            <Link
              href="/tech-demo"
              className="border-2 border-purple-40o0 text-purple-40o0 px-10 py-4 rounded-lg font-semibold hover:bg-purple-40o0 hover:text-white transition-all duration-30o0"
            >
              Try Interactive Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateTechShowcase20o25Banner;