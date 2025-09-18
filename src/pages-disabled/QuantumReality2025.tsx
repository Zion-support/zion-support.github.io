import React, { useState } from 'react';
import { 
  Atom, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Sparkles,
  Infinity,
  Brain,
  Eye,
  Layers
} from 'lucide-react';

const QuantumReality2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 animate-pulse">
              <Atom className="w-6 h-6" />
              <span>QUANTUM REALITY 2025</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 leading-tight">
              Enter the
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Reality
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              Experience the quantum revolution that's reshaping reality itself. 
              From quantum supremacy to reality manipulation, discover the infinite 
              possibilities of quantum technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-6 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Quantum World
                <ArrowRight className="inline-block ml-3 w-6 h-6" />
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl text-xl font-bold hover:bg-white/10 transition-all duration-300">
                Quantum Demo
          </div>
        </div>
      </div>
      {/* Quantum Stats */}
      <div className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {quantumStats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-5xl font-bold mb-3 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
      {/* Quantum Technologies */}
      <div className="py-24">
            className="text-center mb-20"
            <h2 className="text-6xl font-bold text-white mb-8">
              Quantum Technologies
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary quantum technologies that are transforming 
              every aspect of human existence and opening infinite possibilities.
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {quantumTechnologies.map((tech, index) => (
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 hover:bg-white/20 transition-all duration-300 group border border-white/20"
                <div className="flex items-center space-x-4 mb-8">
                    {tech.icon}
                  <h3 className="text-3xl font-bold text-white">{tech.title}</h3>
                <p className="text-gray-300 mb-6 text-xl leading-relaxed">
                  {tech.description}
                </p>
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-green-400 font-bold text-lg mb-4">
                    <CheckCircle className="w-6 h-6" />
                    <span>{tech.impact}</span>
                  <div className="space-y-2">
                    {tech.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{capability}</span>
                      </div>
                    ))}
      {/* Quantum Principles */}
      <div className="py-24 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Quantum Principles
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the fundamental principles that make quantum technology 
              so revolutionary and powerful.
          <div className="grid md:grid-cols-2 gap-8">
            {quantumPrinciples.map((principle, index) => (
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                <h3 className="text-2xl font-bold text-white mb-4">{principle.principle}</h3>
                <p className="text-gray-300 mb-4 text-lg">{principle.description}</p>
                <div className="bg-cyan-500/20 text-cyan-300 p-4 rounded-lg">
                  <strong>Example:</strong> {principle.example}
      {/* Applications */}
              Quantum Applications
              See how quantum technology is already revolutionizing industries 
              and solving previously impossible problems.
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumApplications.map((app, index) => (
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group"
                    {app.icon}
                <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="text-green-400 font-semibold">{app.impact}</div>
      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
              Enter the Quantum Future
            <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Be part of the quantum revolution that's reshaping reality itself. 
              Experience infinite possibilities with quantum technology.
              <button className="bg-white text-cyan-600 px-12 py-6 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Atom className="inline-block ml-3 w-6 h-6" />
                Schedule Demo
    </div>
  );
};
export default QuantumReality2025;
