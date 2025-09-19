import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const bannerMessages = [
    "🚀 NEW: Revolutionary Tech Breakthrough 2025 - Experience AI Consciousness!",
    "⚡ BREAKTHROUGH: Quantum Reality Engine - Manipulate Reality Itself!",
    "🧬 REVOLUTIONARY: Neural Interface Technology - Control with Your Mind!",
    "🌟 BREAKTHROUGH: Consciousness Transfer - Achieve Digital Immortality!",
    "🌌 NEW: Interdimensional Computing - Access Parallel Universe Power!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2025
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most revolutionary technologies reshaping our world with infinite possibilities</p>
          </p>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 text-center">
            <div className="text-3xl mb-2">🤖
            <h3 className="text-lg font-bold mb-1">Autonomous AI</h3>
            <p className="text-blue-100 text-xs">Self-operating systems</p>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30 text-center">
            <div className="text-3xl mb-2">⚛️
            <h3 className="text-lg font-bold mb-1">Quantum Neural</h3>
            <p className="text-purple-100 text-xs">Infinite processing</p>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30 text-center">
            <div className="text-3xl mb-2">🧬
            <h3 className="text-lg font-bold mb-1">Neural Interface</h3>
            <p className="text-emerald-100 text-xs">Thought control</p>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30 text-center">
            <div className="text-3xl mb-2">🌌
            <h3 className="text-lg font-bold mb-1">Interdimensional</h3>
            <p className="text-orange-100 text-xs">Multi-dimensional</p>
        <div className="text-center">
          <a 
            href="/pages/RevolutionaryTechShowcase2025" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
          >
            ⚡ Explore Revolutionary Tech →
          </a>
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white py-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Animated Message */}
          <div className="flex-1 text-center">
            <div className="text-lg font-bold animate-bounce">
              {bannerMessages[currentMessage]}
          {/* Action Buttons */}
          <div className="flex space-x-4 ml-8">
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm whitespace-nowrap"
            >
              Explore Now →
            </a>
            <a
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm whitespace-nowrap"
            >
              Watch Demo
            </a>
      {/* Floating Elements */}
      <div className="absolute top-2 left-4 text-2xl animate-bounce">🚀
      <div className="absolute top-2 right-4 text-2xl animate-bounce delay-1000">⚡
      <div className="absolute bottom-2 left-1/4 text-2xl animate-bounce delay-500">🧬
      <div className="absolute bottom-2 right-1/4 text-2xl animate-bounce delay-1500">🌟
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough 2025
          </h2>
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology innovations that are reshaping our world. 
            From AI consciousness to quantum reality engines and neural interfaces.</p>
          </p>
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">🧠
              <h3 className="text-lg font-bold mb-2">AI Consciousness</h3>
              <p className="text-sm text-purple-100">Truly conscious AI that thinks and feels</p>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3">⚛️
              <h3 className="text-lg font-bold mb-2">Quantum Reality</h3>
              <p className="text-sm text-cyan-100">Manipulate reality with quantum mechanics</p>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3">🧬
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-sm text-emerald-100">Direct mind-to-machine communication</p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              🧠 Explore AI Consciousness →
            </a>
            <a 
              href="/pages/QuantumRealityEngine2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              ⚛️ Enter Quantum Reality →
            </a>
            <a 
              href="/pages/NeuralInterfaceRevolution2025" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              🧬 Connect Neural Interface →
            </a>
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-300">
            <p>✨ Free access to all revolutionary technologies • 🚀 No setup required • 💫 Experience the future today</p>
  );
};

export default RevolutionaryTechBanner2025;