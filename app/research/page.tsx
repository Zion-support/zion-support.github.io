import React from 'react';

export const metadata = {
  title: "Research & Development | Zion Tech Group",
  description: "Explore our cutting-edge research in AI, quantum computing, and emerging technologies that shape the future of business.",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology through cutting-edge research and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-300">Patents Filed</div>
            <div className="text-sm text-gray-400 mt-2">Intellectual property protecting our innovations</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
            <div className="text-gray-300">R&D Investment</div>
            <div className="text-sm text-gray-400 mt-2">Annual investment in research and development</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Research Partners</div>
            <div className="text-sm text-gray-400 mt-2">Leading universities and institutions</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Advanced machine learning algorithms, neural networks, and AI systems that can learn and adapt.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Deep Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Reinforcement Learning</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">
                Exploring quantum algorithms and quantum machine learning for next-generation computing.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Quantum Algorithms</li>
                <li>• Quantum Machine Learning</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Blockchain Technology</h3>
              <p className="text-gray-300 mb-4">
                Developing secure, scalable blockchain solutions for enterprise applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Smart Contracts</li>
                <li>• DeFi Protocols</li>
                <li>• NFT Platforms</li>
                <li>• Cross-chain Solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Edge Computing</h3>
              <p className="text-gray-300 mb-4">
                Bringing AI and processing power closer to where data is generated.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Edge AI Models</li>
                <li>• IoT Integration</li>
                <li>• Real-time Processing</li>
                <li>• Distributed Computing</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Advanced security solutions to protect against evolving cyber threats.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Threat Detection</li>
                <li>• Zero Trust Architecture</li>
                <li>• AI-Powered Security</li>
                <li>• Privacy Preservation</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Sustainable Tech</h3>
              <p className="text-gray-300 mb-4">
                Green technology solutions for a more sustainable future.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Energy Optimization</li>
                <li>• Carbon Footprint Tracking</li>
                <li>• Green AI</li>
                <li>• Sustainable Computing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Stanford University</h3>
              <p className="text-gray-400 text-sm mb-2">Stanford, CA</p>
              <p className="text-gray-300 text-sm">Joint research programs and student exchanges in AI & Machine Learning</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">MIT</h3>
              <p className="text-gray-400 text-sm mb-2">Cambridge, MA</p>
              <p className="text-gray-300 text-sm">Shared research facilities and joint publications in Quantum Computing & AI</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">University of Oxford</h3>
              <p className="text-gray-400 text-sm mb-2">Oxford, UK</p>
              <p className="text-gray-300 text-sm">Collaborative research in AI Ethics & Governance</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Research Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented researchers and engineers to join our team. 
            Help us shape the future of technology.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}