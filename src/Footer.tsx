import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-400">
              Leading the future of technology with AI, quantum computing, and innovative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/pages/InnovationLanding2025" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="/pages/QuantumComputingSolutions2025" className="hover:text-white transition-colors">Quantum Computing</a></li>
              <li><a href="/pages/CybersecurityFortress2025" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="/pages/ComprehensiveServices2025" className="hover:text-white transition-colors">All Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Innovations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/pages/SyntheticIntelligence2026" className="hover:text-white transition-colors">Synthetic Intelligence</a></li>
              <li><a href="/pages/NeuralInterfaceRevolution2025" className="hover:text-white transition-colors">Neural Interfaces</a></li>
              <li><a href="/pages/NextGenTechShowcase2025" className="hover:text-white transition-colors">Next-Gen Tech</a></li>
              <li><a href="/pages/RevolutionaryTechBlog2026" className="hover:text-white transition-colors">Tech Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@ziontechgroup.com</li>
              <li>+1-555-123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;