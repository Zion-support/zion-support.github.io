import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/pages/AdvancedAITransformation2026" className="text-gray-600 hover:text-gray-900 transition-colors">
              AI Transformation
            </Link>
            <Link to="/pages/QuantumNeuralFusion2026" className="text-gray-600 hover:text-gray-900 transition-colors">
              Quantum-Neural
            </Link>
            <Link to="/pages/NeuralInterfaceRevolution2026" className="text-gray-600 hover:text-gray-900 transition-colors">
              Neural Interface
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;