import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import CaseStudyPage from './src/CaseStudyPage';
import InnovationLanding2025 from './src/pages/InnovationLanding2025';
import InnovativeServicesShowcase2025 from './src/pages/InnovativeServicesShowcase2025';
import BlogPost2025 from './src/pages/BlogPost2025';
import AISolutionsShowcase2025 from './src/pages/AISolutionsShowcase2025';
import BlockchainSolutions2025 from './src/pages/BlockchainSolutions2025';
import QuantumComputing2025 from './src/pages/QuantumComputing2025';
import AITrendsBlog2025 from './src/pages/AITrendsBlog2025';
import DeFiRevolutionBlog2025 from './src/pages/DeFiRevolutionBlog2025';
import './src/index.css';

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
                {/* Hero Section with New Content Promotions */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                    🚀 NEW: Revolutionary Technology Solutions 2025
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, blockchain, quantum computing, and innovative solutions
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-x-4 space-y-4 sm:space-y-0">
                    <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Explore Innovation 2025
                    </a>
                    <a href="/pages/AISolutionsShowcase2025" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      AI Solutions
                    </a>
                    <a href="/pages/BlockchainSolutions2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Blockchain
                    </a>
                    <a href="/pages/QuantumComputing2025" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Quantum Computing
                    </a>
                  </div>
                </div>

                {/* Featured Content Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-white">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">🌟 Featured: Revolutionary Technology 2025</h2>
                    <p className="text-lg opacity-90">Discover our latest innovations that are reshaping industries</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                      <div className="text-3xl mb-3">🧠</div>
                      <h3 className="text-xl font-semibold mb-2">AI Autonomous Agents</h3>
                      <p className="text-sm opacity-90 mb-4">Self-learning AI systems that handle complex business processes autonomously</p>
                      <a href="/pages/AISolutionsShowcase2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn More →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                      <div className="text-3xl mb-3">🔗</div>
                      <h3 className="text-xl font-semibold mb-2">DeFi Solutions</h3>
                      <p className="text-sm opacity-90 mb-4">Complete decentralized finance infrastructure with yield farming and swaps</p>
                      <a href="/pages/BlockchainSolutions2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                      <div className="text-3xl mb-3">⚛️</div>
                      <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
                      <p className="text-sm opacity-90 mb-4">Exponential speedup for complex optimization and simulation problems</p>
                      <a href="/pages/QuantumComputing2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Discover →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                      <div className="text-3xl mb-3">🌐</div>
                      <h3 className="text-xl font-semibold mb-2">Global IoT Network</h3>
                      <p className="text-sm opacity-90 mb-4">Worldwide connected devices for seamless data exchange and automation</p>
                      <a href="/pages/InnovationLanding2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Read More →</a>
                    </div>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Autonomous AI agents, machine learning, and intelligent automation for business transformation.
                    </p>
                    <a href="/pages/AISolutionsShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      View AI Services →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🔗</div>
                    <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
                    <p className="text-gray-600 mb-4">
                      DeFi protocols, NFT platforms, and enterprise blockchain solutions for secure transactions.
                    </p>
                    <a href="/pages/BlockchainSolutions2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Blockchain →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">⚛️</div>
                    <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
                    <p className="text-gray-600 mb-4">
                      Quantum algorithms, optimization, and simulation for solving complex computational problems.
                    </p>
                    <a href="/pages/QuantumComputing2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Quantum Solutions →
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2">Innovation 2025</h3>
                    <p className="text-gray-600 mb-4">
                      Next-generation technology solutions and innovative services for the future.
                    </p>
                    <a href="/pages/InnovationLanding2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Innovation →
                    </a>
                  </div>
                </div>

                {/* Latest News Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Latest Technology Insights</h2>
                    <p className="text-lg text-gray-600">Stay updated with the latest trends and innovations</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">NEW</span>
                        <span className="text-sm text-gray-500">January 20, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Technology Trends 2025</h3>
                      <p className="text-gray-600 mb-4 text-sm">Discover the most significant trends shaping our digital future...</p>
                      <a href="/pages/BlogPost2025" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Read Article →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">AI</span>
                        <span className="text-sm text-gray-500">January 19, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">AI Autonomous Agents</h3>
                      <p className="text-gray-600 mb-4 text-sm">Revolutionary AI systems that operate independently...</p>
                      <a href="/pages/AITrendsBlog2025" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Explore AI →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">BLOCKCHAIN</span>
                        <span className="text-sm text-gray-500">January 18, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">DeFi Revolution</h3>
                      <p className="text-gray-600 mb-4 text-sm">Decentralized finance is transforming traditional banking...</p>
                      <a href="/pages/DeFiRevolutionBlog2025" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Learn DeFi →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">QUANTUM</span>
                        <span className="text-sm text-gray-500">January 17, 2025</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Quantum Breakthrough</h3>
                      <p className="text-gray-600 mb-4 text-sm">Quantum computing achieves new milestones in optimization...</p>
                      <a href="/pages/QuantumComputing2025" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Discover Quantum →
                      </a>
                    </div>
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
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Start Your Journey
                    </a>
                    <a href="/pages/AISolutionsShowcase2025" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Explore AI Solutions
                    </a>
                    <a href="/pages/BlockchainSolutions2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Discover Blockchain
                    </a>
                    <a href="/pages/QuantumComputing2025" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Quantum Computing
                    </a>
                    <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </main>
            </div>
          } />
          <Route path="/pages/InnovationLanding2025" element={<InnovationLanding2025 />} />
          <Route path="/pages/InnovativeServicesShowcase2025" element={<InnovativeServicesShowcase2025 />} />
          <Route path="/pages/BlogPost2025" element={<BlogPost2025 />} />
          <Route path="/pages/AISolutionsShowcase2025" element={<AISolutionsShowcase2025 />} />
          <Route path="/pages/BlockchainSolutions2025" element={<BlockchainSolutions2025 />} />
          <Route path="/pages/QuantumComputing2025" element={<QuantumComputing2025 />} />
          <Route path="/pages/AITrendsBlog2025" element={<AITrendsBlog2025 />} />
          <Route path="/pages/DeFiRevolutionBlog2025" element={<DeFiRevolutionBlog2025 />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          <Route path="/blog" element={
            <main className="container mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
                <p className="text-xl text-gray-600">Coming soon - Latest insights and updates</p>
              </div>
            </main>
          } />
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