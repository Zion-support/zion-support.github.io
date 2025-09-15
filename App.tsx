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
import AdvancedTechSolutions2025 from './src/pages/AdvancedTechSolutions2025';
import FutureTechTrends2025 from './src/pages/FutureTechTrends2025';
import ComprehensiveServices2025 from './src/pages/ComprehensiveServices2025';
import AIInnovationPlaybook2025 from './src/pages/AIInnovationPlaybook2025';
import TechnologyInsights2025 from './src/pages/TechnologyInsights2025';
import AITransformationGuide2025 from './src/pages/AITransformationGuide2025';
import QuantumComputingSolutions2025 from './src/pages/QuantumComputingSolutions2025';
import TechLeadershipGuide2025 from './src/pages/TechLeadershipGuide2025';
import EdgeAITrends2025 from './src/pages/EdgeAITrends2025';
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
                {/* Promotional Banner */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-white text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl">🎉</span>
                    <h3 className="text-xl font-bold">NEW: Revolutionary Content 2025</h3>
                    <span className="text-2xl">🎉</span>
                  </div>
                  <p className="text-lg opacity-90 mb-4">
                    Explore our latest insights on AI Transformation, Quantum Computing, and Technology Trends
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href="/pages/TechnologyInsights2025" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                      🔮 Tech Insights →
                    </a>
                    <a href="/pages/AITransformationGuide2025" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                      🤖 AI Guide →
                    </a>
                    <a href="/pages/QuantumComputingSolutions2025" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                      ⚡ Quantum →
                    </a>
                    <a href="/pages/ComprehensiveServices2025" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                      🚀 All Services →
                    </a>
                  </div>
                </div>

                {/* Hero Section with New Content Promotions */}
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
                    🚀 NEW: Innovation 2025 Showcase
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Leading the future of technology with AI, blockchain, and innovative solutions
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <a href="/pages/TechnologyInsights2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔮 Tech Insights 2025
                    </a>
                    <a href="/pages/AITransformationGuide2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🤖 AI Transformation
                    </a>
                    <a href="/pages/QuantumComputingSolutions2025" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Quantum Computing
                    </a>
                    <a href="/pages/ComprehensiveServices2025" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🚀 All Services
                    </a>
                    <a href="/pages/InnovationLanding2025" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                      🌟 Innovation 2025
                    </a>
                    <a href="/pages/AdvancedTechSolutions2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      ⚡ Advanced Solutions
                    </a>
                    <a href="/pages/FutureTechTrends2025" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🔮 Future Trends
                    </a>
                    <a href="/pages/AIInnovationPlaybook2025" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center font-semibold">
                      📘 AI Playbook
                    </a>
                    <a href="/pages/TechLeadershipGuide2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🧭 Tech Leadership
                    </a>
                    <a href="/pages/EdgeAITrends2025" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
                      🛰️ Edge AI Trends
                    </a>
                  </div>
                </div>

                {/* Interactive Dynamic Content Carousel */}
                <div className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Featured: Revolutionary Technology 2025</h2>
                    <p className="text-xl text-gray-600">Discover our latest innovations that are reshaping industries</p>
                  </div>
                  <DynamicContentCarousel />
                </div>

                {/* Featured New Services */}
                <section className="mb-12">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">🚀 Newest Services</h2>
                    <p className="text-gray-600">Explore our latest offerings designed to drive measurable outcomes.</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">🧭</div>
                      <h3 className="text-xl font-semibold mb-2">AI Sales Copilot</h3>
                      <p className="text-gray-600 mb-4">Automate prospecting, personalize outreach, and accelerate pipeline with conversational AI.</p>
                      <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">💸</div>
                      <h3 className="text-xl font-semibold mb-2">Cloud Cost Optimizer</h3>
                      <p className="text-gray-600 mb-4">Cut multi-cloud spend with automated rightsizing, scheduling, and anomaly detection.</p>
                      <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="text-xl font-semibold mb-2">Cyber Threat Intelligence Hub</h3>
                      <p className="text-gray-600 mb-4">Unify threat feeds and correlate signals with AI to reduce alert fatigue.</p>
                      <a href="/pages/ComprehensiveServices2025" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more →</a>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <a href="/pages/ComprehensiveServices2025" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">View all services</a>
                  </div>
                </section>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Cutting-edge artificial intelligence solutions for your business needs.
                    </p>
                    <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      View AI Services →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">🔗</div>
                    <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
                    <p className="text-gray-600 mb-4">
                      Secure, decentralized solutions powered by blockchain technology.
                    </p>
                    <a href="/pages/InnovationLanding2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Explore Blockchain →
                    </a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">☁️</div>
                    <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
                    <p className="text-gray-600 mb-4">
                      Scalable cloud infrastructure and deployment solutions.
                    </p>
                    <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Cloud Solutions →
                    </a>
                  </div>
                </div>

                {/* Success Stories Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 Client Success Stories</h2>
                    <p className="text-lg text-gray-600">See how we've transformed businesses with cutting-edge technology</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+300%</span>
                        <span className="text-sm text-gray-500">Efficiency Gain</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Fortune 500 AI Transformation</h3>
                      <p className="text-gray-600 mb-4">Implemented autonomous AI agents that reduced operational costs by 40% and increased productivity by 300%.</p>
                      <a href="/case-studies/ai-transformation" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read Case Study →
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">$2M</span>
                        <span className="text-sm text-gray-500">Cost Savings</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Global Blockchain Implementation</h3>
                      <p className="text-gray-600 mb-4">Deployed enterprise blockchain solution that streamlined supply chain operations and saved $2M annually.</p>
                      <a href="/case-studies/blockchain-implementation" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Learn More →
                      </a>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">99.9%</span>
                        <span className="text-sm text-gray-500">Uptime</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Cloud Migration Success</h3>
                      <p className="text-gray-600 mb-4">Migrated legacy systems to cloud infrastructure achieving 99.9% uptime and 60% faster performance.</p>
                      <a href="/case-studies/cloud-migration" className="text-blue-600 hover:text-blue-700 font-semibold">
                        View Results →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Latest News Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Latest Technology Insights</h2>
                    <p className="text-lg text-gray-600">Stay updated with the latest trends and innovations</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">NEW</span>
                        <span className="text-sm text-gray-500">January 20, 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Technology Trends 2025</h3>
                      <p className="text-gray-600 mb-4">Discover the most significant trends shaping our digital future...</p>
                      <a href="/pages/BlogPost2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Read Full Article →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">FEATURED</span>
                        <span className="text-sm text-gray-500">January 18, 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Innovation Showcase 2025</h3>
                      <p className="text-gray-600 mb-4">Explore our revolutionary services across cutting-edge technology domains...</p>
                      <a href="/pages/InnovationLanding2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Explore Innovations →
                      </a>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">BREAKTHROUGH</span>
                        <span className="text-sm text-gray-500">January 22, 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Tech Solutions</h3>
                      <p className="text-gray-600 mb-4">Cutting-edge AI, quantum computing, and neural interface technologies...</p>
                      <a href="/pages/AdvancedTechSolutions2025" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Explore Solutions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* NEW CONTENT SHOWCASE - Latest Additions */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-white">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                      🎉 JUST RELEASED • JANUARY 2025
                    </div>
                    <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary New Content</h2>
                    <p className="text-xl opacity-90">Discover our latest insights on cutting-edge technologies</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-300">
                      <div className="text-4xl mb-3">🔮</div>
                      <h3 className="text-xl font-semibold mb-2">Technology Insights 2025</h3>
                      <p className="text-sm opacity-90 mb-4">Key trends reshaping industries and business</p>
                      <a href="/pages/TechnologyInsights2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore Insights →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-300">
                      <div className="text-4xl mb-3">🤖</div>
                      <h3 className="text-xl font-semibold mb-2">AI Transformation Guide</h3>
                      <p className="text-sm opacity-90 mb-4">Complete roadmap to AI implementation</p>
                      <a href="/pages/AITransformationGuide2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Start Journey →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-300">
                      <div className="text-4xl mb-3">⚡</div>
                      <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
                      <p className="text-sm opacity-90 mb-4">Next-generation quantum solutions</p>
                      <a href="/pages/QuantumComputingSolutions2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Go Quantum →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-300">
                      <div className="text-4xl mb-3">🧭</div>
                      <h3 className="text-xl font-semibold mb-2">Tech Leadership Guide</h3>
                      <p className="text-sm opacity-90 mb-4">Scale teams, AI, and reliability</p>
                      <a href="/pages/TechLeadershipGuide2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Read Guide →</a>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-300">
                      <div className="text-4xl mb-3">🛰️</div>
                      <h3 className="text-xl font-semibold mb-2">Edge AI Trends 2025</h3>
                      <p className="text-sm opacity-90 mb-4">On-device genAI and privacy</p>
                      <a href="/pages/EdgeAITrends2025" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore Trends →</a>
                    </div>
                  </div>
                </div>

                {/* Interactive Technology Showcase */}
                <div className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive Technology Showcase</h2>
                    <p className="text-xl text-gray-600">Explore our cutting-edge technology solutions with interactive features</p>
                  </div>
                  <InteractiveTechShowcase />
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
                    <a href="/pages/InnovationLanding2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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
          <Route path="/pages/InnovationLanding2025" element={<InnovationLanding2025 />} />
          <Route path="/pages/InnovativeServicesShowcase2025" element={<InnovativeServicesShowcase2025 />} />
          <Route path="/pages/BlogPost2025" element={<BlogPost2025 />} />
          <Route path="/pages/AdvancedTechSolutions2025" element={<AdvancedTechSolutions2025 />} />
          <Route path="/pages/FutureTechTrends2025" element={<FutureTechTrends2025 />} />
          <Route path="/pages/ComprehensiveServices2025" element={<ComprehensiveServices2025 />} />
          <Route path="/pages/AIInnovationPlaybook2025" element={<AIInnovationPlaybook2025 />} />
          <Route path="/pages/TechnologyInsights2025" element={<TechnologyInsights2025 />} />
          <Route path="/pages/AITransformationGuide2025" element={<AITransformationGuide2025 />} />
          <Route path="/pages/QuantumComputingSolutions2025" element={<QuantumComputingSolutions2025 />} />
          <Route path="/pages/TechLeadershipGuide2025" element={<TechLeadershipGuide2025 />} />
          <Route path="/pages/EdgeAITrends2025" element={<EdgeAITrends2025 />} />
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
