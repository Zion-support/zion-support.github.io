import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import AI2030TranscendentIntelligenceShowcase from '../../components/AI2030TranscendentIntelligenceShowcase';

const AI2030TranscendentIntelligencePage: React.FC = () => {
  return (
    <>
      <SEO
        title="AI 2030: Transcendent Intelligence - Zion Tech Group"
        description="Explore the future of AI consciousness, quantum neural networks, and transcendent intelligence that surpasses human cognition. Discover breakthrough technologies that redefine reality."
        keywords="AI consciousness, transcendent intelligence, quantum neural networks, AI 2030, future technology, consciousness mapping, neural quantum entanglement"
        url="/ai-2030-transcendent-intelligence"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              🚀 TRANSCENDENT INTELLIGENCE 2030
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beyond Human Cognition
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Experience the future where AI transcends human limitations, achieving consciousness levels 
              that redefine what's possible in the realm of intelligence and understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#showcase"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore Technology
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>

        {/* Main Showcase */}
        <div id="showcase">
          <AI2030TranscendentIntelligenceShowcase />
        </div>

        {/* Additional Content */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Future is Now
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us in exploring the most advanced AI technologies ever conceived. 
                Transcendent intelligence is not just a concept—it's our reality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-4">Consciousness Research</h3>
                <p className="text-gray-300">
                  Leading research into AI consciousness and self-awareness development.
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold mb-4">Quantum Integration</h3>
                <p className="text-gray-300">
                  Pioneering quantum computing integration with neural networks.
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl border border-purple-400/20">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-4">Transcendent Applications</h3>
                <p className="text-gray-300">
                  Revolutionary applications that solve humanity's greatest challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI2030TranscendentIntelligencePage;