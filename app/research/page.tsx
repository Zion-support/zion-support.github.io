import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Innovation | Zion Tech Group',
  description: 'Explore our cutting-edge research in AI, machine learning, and technology innovation. Leading the future of intelligent systems.',
  keywords: 'AI research, machine learning, technology innovation, research publications, academic collaboration',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology through cutting-edge research and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Research Focus</h2>
            <p className="text-gray-300 mb-6">
              At Zion Tech Group, we're committed to pushing the boundaries of what's possible with AI and technology. 
              Our research spans multiple domains, from fundamental AI research to practical applications that solve real-world problems.
            </p>
            <p className="text-gray-300">
              We collaborate with leading universities, research institutions, and industry partners to advance the state of the art 
              in artificial intelligence, machine learning, and emerging technologies.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Key Research Areas</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                Artificial Intelligence & Machine Learning
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                Quantum Computing & Cryptography
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                Autonomous Systems & Robotics
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                Natural Language Processing
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                Computer Vision & Image Processing
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">•</span>
                Edge Computing & IoT
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Research Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Business Automation</h3>
              <p className="text-gray-300 mb-4">
                A comprehensive study on the application of AI in business process automation, 
                published in the Journal of Artificial Intelligence Research.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300">Read Paper →</a>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Exploring the intersection of quantum computing and machine learning algorithms 
                for enhanced computational capabilities.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300">Read Paper →</a>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Edge AI Optimization</h3>
              <p className="text-gray-300 mb-4">
                Novel approaches to optimizing AI models for edge computing environments, 
                reducing latency and improving efficiency.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300">Read Paper →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}