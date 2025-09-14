import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neural Interface Revolution 2025 - Zion Tech Group',
  description: 'Experience the future of human-computer interaction with advanced neural interfaces. Direct brain-computer communication for unprecedented control and efficiency.',
  keywords: ['neural interface', 'brain-computer interface', 'BCI', 'neural technology', 'mind control', 'neural implants'],
};

export default function NeuralInterfaceRevolution2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🧠 NEURAL REVOLUTION 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Neural Interface Revolution
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Break through the barriers between mind and machine. Experience direct neural interfaces that allow you to control technology with your thoughts, access information instantly, and enhance your cognitive abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-8 py-4 rounded-lg font-semibold hover:from-green-300 hover:to-blue-300 transition-all transform hover:scale-105"
              >
                Join the Revolution
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
              >
                Explore Technology
              </Link>
            </div>
          </div>

          {/* Neural Interface Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold mb-4">Non-Invasive Interfaces</h3>
              <p className="text-gray-300 mb-4">
                Advanced EEG-based systems that read brain signals through the scalp, providing seamless control without any surgical procedures.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time brain monitoring</li>
                <li>• Thought-based control</li>
                <li>• Zero surgical risk</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Invasive Interfaces</h3>
              <p className="text-gray-300 mb-4">
                High-precision neural implants that provide direct access to neural signals for maximum control and data transfer rates.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Direct neural access</li>
                <li>• Ultra-high precision</li>
                <li>• Maximum data throughput</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-4">Optical Interfaces</h3>
              <p className="text-gray-300 mb-4">
                Light-based neural interfaces that use optogenetics to control and monitor neural activity with unprecedented precision.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Light-based control</li>
                <li>• Cell-level precision</li>
                <li>• Reversible activation</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Electrical Interfaces</h3>
              <p className="text-gray-300 mb-4">
                Advanced electrical stimulation and recording systems that provide bidirectional communication with neural circuits.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Bidirectional communication</li>
                <li>• Neural stimulation</li>
                <li>• Real-time feedback</li>
              </ul>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Revolutionary Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-3">Gaming & Entertainment</h3>
                <p className="text-gray-400">
                  Control games and virtual environments directly with your mind for immersive experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3">Medical Rehabilitation</h3>
                <p className="text-gray-400">
                  Restore movement and communication for patients with paralysis or neurological conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3">Professional Enhancement</h3>
                <p className="text-gray-400">
                  Boost productivity and efficiency with direct neural control of work systems and tools.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Neural Signal Processing</h3>
              <ul className="text-black space-y-2">
                <li>• Real-time signal analysis</li>
                <li>• Machine learning interpretation</li>
                <li>• Adaptive algorithms</li>
                <li>• Noise filtering</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Safety & Security</h3>
              <ul className="text-black space-y-2">
                <li>• Encrypted neural data</li>
                <li>• Privacy protection</li>
                <li>• Safe operation protocols</li>
                <li>• Emergency disconnect</li>
              </ul>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">99.7%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">&lt;10ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-300">Neural Channels</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Operation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black bg-opacity-30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Mind?</h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the future of human-computer interaction. Join the neural interface revolution and unlock the full potential of your mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-8 py-4 rounded-lg font-semibold hover:from-green-300 hover:to-blue-300 transition-all transform hover:scale-105"
            >
              Connect Your Mind
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}