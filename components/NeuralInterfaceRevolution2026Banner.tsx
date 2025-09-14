import React from 'react';
import Link from 'next/link';

export default function NeuralInterfaceRevolution2026Banner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧠 NEURAL REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Neural Interface Revolution 2026 Ultimate
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate neural interface revolution of 2026. Direct brain-computer integration 
            that transforms human capabilitiescommunicationand interaction with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/neural-interface-revolution-2026-ultimate"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105"
            >
              Transform Your Potential
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all"
            >
              Join the Revolution
            </Link>
          </div>
        </div>
        
        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Direct Neural Control</h3>
            <p className="text-gray-300">Control devices through pure thought with 99.9% accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-xl font-bold mb-2">Neural Communication</h3>
            <p className="text-gray-300">Share thoughts and emotions directly between minds</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2">Enhanced Cognition</h3>
            <p className="text-gray-300">10x memory enhancement and instant knowledge acquisition</p>
          </div>
        </div>
      </div>
    </section>
  );
}