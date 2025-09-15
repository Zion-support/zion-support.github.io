import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import CaseStudyPage from './CaseStudyPage';
import './index.css';

// Import only the pages we've created
import AdvancedAITransformation2026 from './pages/AdvancedAITransformation2026';
import NextGenTechShowcase2026 from './pages/NextGenTechShowcase2026';
import QuantumNeuralFusion2026 from './pages/QuantumNeuralFusion2026';
import NeuralInterfaceRevolution2026 from './pages/NeuralInterfaceRevolution2026';
import RevolutionaryContentShowcase2026 from './components/RevolutionaryContentShowcase2026';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
              <main className="container mx-auto px-4 py-8">
                {/* Revolutionary New Content Banner */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-3xl animate-bounce">🚀</span>
                      <h3 className="text-2xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h3>
                      <span className="text-3xl animate-bounce">🚀</span>
                    </div>
                    <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
                      Experience the future of technology with our groundbreaking new content featuring Advanced AI Transformation, 
                      Next-Gen Tech Showcase, Quantum-Neural Fusion, Synthetic Intelligence, and Revolutionary Neural Interfaces
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                      <a href="/pages/AdvancedAITransformation2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧠 AI Transformation →
                      </a>
                      <a href="/pages/QuantumNeuralFusion2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        ⚛️ Quantum-Neural Fusion →
                      </a>
                      <a href="/pages/NextGenTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🌟 Next-Gen Showcase →
                      </a>
                      <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                        🧬 Neural Interface Revolution →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                    🚀 NEW: Innovation 2026 Showcase
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, quantum computing, and innovative solutions
                  </p>
                </div>

                {/* Revolutionary Content Showcase 2026 */}
                <div className="mb-12">
                  <RevolutionaryContentShowcase2026 />
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Cutting-edge artificial intelligence solutions for your business needs.
                    </p>
                    <a href="/pages/AdvancedAITransformation2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      View AI Services →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">⚛️</div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary quantum computing solutions for complex problems.
                    </p>
                    <a href="/pages/QuantumNeuralFusion2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Quantum →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
                    <p className="text-gray-600 mb-4">
                      Direct brain-computer interfaces for enhanced human capabilities.
                    </p>
                    <a href="/pages/NeuralInterfaceRevolution2026" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Neural Tech →
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                    We combine cutting-edge technology with deep industry expertise to deliver 
                    solutions that drive real business value. Our team of experts is dedicated 
                    to helping you succeed in the digital age.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="/pages/NextGenTechShowcase2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Start Your Journey
                    </a>
                    <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </main>
            </div>
          } />
          
          {/* Routes for our new pages */}
          <Route path="/pages/AdvancedAITransformation2026" element={<AdvancedAITransformation2026 />} />
          <Route path="/pages/NextGenTechShowcase2026" element={<NextGenTechShowcase2026 />} />
          <Route path="/pages/QuantumNeuralFusion2026" element={<QuantumNeuralFusion2026 />} />
          <Route path="/pages/NeuralInterfaceRevolution2026" element={<NeuralInterfaceRevolution2026 />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          
          <Route path="/contact" element={
            <main className="container mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600">Get in touch with our team</p>
              </div>
            </main>
          } />
          
          <Route path="*" element={
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-xl text-gray-600">The page you're looking for doesn't exist.</p>
            </main>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}