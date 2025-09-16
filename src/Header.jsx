<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/pages/UltimateTechShowcase2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Tech Showcase
            </Link>
            <Link to="/pages/TranscendentAI2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              AI Revolution
            </Link>
            <Link to="/pages/NeuralInterfaceRevolution2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Neural Interfaces
            </Link>
            <Link to="/pages/AdvancedRobotics2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Robotics
            </Link>
            <Link to="/pages/SyntheticIntelligence2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Synthetic AI
            </Link>
            <Link to="/pages/TransdimensionalAI2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Transdimensional AI
            </Link>
            <Link to="/pages/SyntheticBiologyRevolution2027" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Bio Revolution
            </Link>
            <Link to="/pages/UltimateTechRevolution2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              2033 Tech
            </Link>
            <Link to="/pages/TranscendentAI2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              AI 2033
            </Link>
            <Link to="/pages/UniversalTechRevolution2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Universal Tech
            </Link>
            <Link to="/pages/QuantumConsciousnessRevolution2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Quantum Consciousness
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/pages/UltimateTechShowcase2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Tech Showcase
              </Link>
              <Link to="/pages/TranscendentAI2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                AI Revolution
              </Link>
              <Link to="/pages/NeuralInterfaceRevolution2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Neural Interfaces
              </Link>
              <Link to="/pages/AdvancedRobotics2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Robotics
              </Link>
              <Link to="/pages/SyntheticIntelligence2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Synthetic AI
              </Link>
              <Link to="/pages/TransdimensionalAI2026" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Transdimensional AI
              </Link>
              <Link to="/pages/SyntheticBiologyRevolution2027" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Bio Revolution
              </Link>
              <Link to="/pages/UltimateTechRevolution2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                2033 Tech
              </Link>
              <Link to="/pages/TranscendentAI2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                AI 2033
              </Link>
              <Link to="/pages/UniversalTechRevolution2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Universal Tech
              </Link>
              <Link to="/pages/QuantumConsciousnessRevolution2033" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Quantum Consciousness
              </Link>
            </nav>
          </div>
        )}
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-36c0
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
      </div>
    </header>
  );
};

export default Header;