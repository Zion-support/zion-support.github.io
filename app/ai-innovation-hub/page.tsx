import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Card from '../../components/ui/Card';
import FeatureCard from '../../components/FeatureCard';

export default function AIInnovationHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SEO
        title="AI Innovation Hub - Zion Tech Group"
        description="Discover cutting-edge AI innovations, breakthrough technologies, and revolutionary solutions that are transforming industries worldwide."
        keywords="AI innovation, breakthrough technology, AI research, cutting-edge solutions, AI development"
        url="/ai-innovation-hub"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Innovation Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the future of artificial intelligence through our comprehensive collection of breakthrough innovations, 
            cutting-edge research, and revolutionary solutions that are reshaping industries worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              🚀 Latest Breakthroughs
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              🔬 Research & Development
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              💡 Innovation Showcase
            </span>
          </div>
        </div>

        {/* Featured Innovations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured AI Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Neural Architecture Revolution
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how advanced neural architectures are enabling unprecedented AI capabilities 
                  and transforming machine learning paradigms.
                </p>
                <Link 
                  href="/blog/ai-2025-neural-architecture-revolution"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore Innovation →
                </Link>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Edge AI Acceleration
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about the latest breakthroughs in edge computing that are bringing AI 
                  capabilities directly to devices and IoT systems.
                </p>
                <Link 
                  href="/blog/ai-2025-edge-ai-acceleration"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore Innovation →
                </Link>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quantum AI Breakthrough
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the intersection of quantum computing and AI, unlocking new possibilities 
                  for solving complex optimization problems.
                </p>
                <Link 
                  href="/blog/ai-2025-quantum-computing-breakthrough"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore Innovation →
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Innovation Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Innovation Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Autonomous Systems"
              description="Self-driving vehicles, autonomous robots, and intelligent automation systems"
              icon="🤖"
              href="/blog/ai-2025-autonomous-systems"
            />
            <FeatureCard
              title="Multimodal AI"
              description="AI systems that understand and process multiple types of data simultaneously"
              icon="👁️"
              href="/blog/ai-2025-multimodal-ai-applications"
            />
            <FeatureCard
              title="Neural Interfaces"
              description="Brain-computer interfaces and direct neural communication systems"
              icon="🧠"
              href="/blog/ai-2025-neural-interfaces"
            />
            <FeatureCard
              title="Generative AI"
              description="Advanced content generation, creative AI, and synthetic media"
              icon="🎨"
              href="/blog/ai-2025-generative-ai-revolution"
            />
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Research & Development
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cutting-Edge Research
                </h3>
                <p className="text-gray-600 mb-6">
                  Our research team is at the forefront of AI innovation, working on breakthrough 
                  technologies that will shape the future of artificial intelligence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Advanced Neural Architecture Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Quantum Machine Learning Algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Edge AI Optimization Techniques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Ethical AI Governance Frameworks
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Innovation Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Research Papers</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">25+</div>
                    <div className="text-sm text-gray-600">Patents Filed</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">100+</div>
                    <div className="text-sm text-gray-600">Innovation Projects</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-gray-600">Industry Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore AI Innovation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of innovators and discover the latest breakthroughs in artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/blog"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Innovations
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}