import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/create-and-deploy-new-content-9a22

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
<<<<<<< HEAD
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h3 className="text-xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-400">
              Leading the future of technology with AI, quantum computing, and innovative solutions.
=======
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading provider of AI, quantum computing, and cybersecurity solutions.
>>>>>>> origin/cursor/create-and-deploy-new-content-9a22
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
<<<<<<< HEAD
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
=======
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
              <li><Link to="/quantum-computing" className="text-gray-400 hover:text-white">Quantum Computing</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
>>>>>>> origin/cursor/create-and-deploy-new-content-9a22
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
<<<<<<< HEAD
            <ul className="space-y-2 text-gray-400">
              <li>contact@ziontechgroup.com</li>
              <li>+1-555-123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
=======
            <p className="text-gray-400">Email: info@ziontechgroup.com</p>
            <p className="text-gray-400">Phone: +1-555-0123</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
>>>>>>> origin/cursor/create-and-deploy-new-content-9a22
        </div>
      </div>
    </footer>
  );
};

export default Footer;