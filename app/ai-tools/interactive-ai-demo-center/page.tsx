import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Play, Zap, Brain, Code, Database, Shield, TrendingUp, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive AI Demo Center - Experience Cutting-Edge AI Technologies',
  description: 'Explore our comprehensive AI demo center featuring live demonstrations of quantum computing, neural networks, autonomous systems, and advanced AI tools. Try before you buy with our interactive showcases.',
  keywords: 'AI demos, interactive AI, quantum computing demo, neural networks, autonomous systems, AI tools showcase',
  openGraph: {
    title: 'Interactive AI Demo Center - Live AI Technology Demonstrations',
    description: 'Experience cutting-edge AI technologies through our interactive demonstration center.',
    type: 'website',
  },
};

export default function InteractiveAIDemoCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interactive AI
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Demo Center
              </span>
            </h1>
            <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
              Experience the future of AI technology through our comprehensive demonstration center. 
              Explore quantum computing, neural networks, and autonomous systems with hands-on interactive showcases.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-indigo-200">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Live Demos</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span>Interactive Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Real-time Results</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/ai-tools" className="text-white hover:text-indigo-300 transition-colors">
                All AI Tools
              </Link>
              <Link href="/contact" className="text-white hover:text-indigo-300 transition-colors">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Demo Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore AI Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Computing Demo */}
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Quantum Computing</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Experience quantum algorithms in action. See how quantum computing solves complex optimization 
                problems exponentially faster than classical computers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-900/40 rounded-lg p-3 border border-blue-500/20">
                  <h4 className="text-blue-300 font-semibold text-sm">Live Demo Features</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Quantum optimization algorithms</li>
                    <li>• Real-time quantum state visualization</li>
                    <li>• Performance comparison with classical methods</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/ai-tools/quantum-computing-demo"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </div>

            {/* Neural Networks Demo */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Neural Networks</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Interact with advanced neural network models. Train your own models and see real-time 
                learning processes in action.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-purple-900/40 rounded-lg p-3 border border-purple-500/20">
                  <h4 className="text-purple-300 font-semibold text-sm">Interactive Features</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Real-time model training visualization</li>
                    <li>• Custom parameter adjustment</li>
                    <li>• Performance metrics dashboard</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/ai-tools/neural-networks-demo"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </div>

            {/* Autonomous Systems Demo */}
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Autonomous Systems</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Watch autonomous systems make decisions in real-time. Experience how AI agents 
                collaborate and optimize complex workflows.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-green-900/40 rounded-lg p-3 border border-green-500/20">
                  <h4 className="text-green-300 font-semibold text-sm">Live Scenarios</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Supply chain optimization</li>
                    <li>• Resource allocation decisions</li>
                    <li>• Multi-agent collaboration</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/ai-tools/autonomous-systems-demo"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </div>

            {/* Computer Vision Demo */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-md rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Computer Vision</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Upload your own images and see advanced computer vision algorithms in action. 
                Experience object detection, classification, and analysis.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-orange-900/40 rounded-lg p-3 border border-orange-500/20">
                  <h4 className="text-orange-300 font-semibold text-sm">Upload & Analyze</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Real-time image analysis</li>
                    <li>• Object detection and tracking</li>
                    <li>• Custom model training</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/ai-tools/computer-vision-demo"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </div>

            {/* Natural Language Processing Demo */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">NLP & Chatbots</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Chat with advanced AI assistants and experience natural language processing 
                capabilities including sentiment analysis and language translation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-cyan-900/40 rounded-lg p-3 border border-cyan-500/20">
                  <h4 className="text-cyan-300 font-semibold text-sm">AI Conversations</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Advanced chatbot interactions</li>
                    <li>• Sentiment analysis tools</li>
                    <li>• Multi-language translation</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/ai-tools/nlp-demo"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </div>

            {/* Security & Ethics Demo */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-md rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Security & Ethics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Explore AI security measures and ethical considerations. Learn about bias detection, 
                privacy protection, and responsible AI practices.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-emerald-900/40 rounded-lg p-3 border border-emerald-500/20">
                  <h4 className="text-emerald-300 font-semibold text-sm">Security Tools</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Bias detection algorithms</li>
                    <li>• Privacy preservation techniques</li>
                    <li>• Adversarial attack simulations</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/ai-tools/security-ethics-demo"
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Try Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Demos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Interactive Demos
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-8 border border-indigo-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="h-6 w-6 text-yellow-400" />
                AI-Powered Business Optimization
              </h3>
              <p className="text-gray-300 mb-6">
                Experience how AI can optimize your business processes in real-time. This comprehensive 
                demo shows supply chain optimization, resource allocation, and predictive analytics.
              </p>
              <div className="bg-indigo-900/40 rounded-lg p-4 border border-indigo-500/20 mb-6">
                <h4 className="text-indigo-300 font-semibold mb-2">Demo Highlights</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Real-time supply chain simulation</li>
                  <li>• Dynamic pricing optimization</li>
                  <li>• Predictive demand forecasting</li>
                  <li>• Automated resource allocation</li>
                </ul>
              </div>
              <Link 
                href="/ai-tools/business-optimization-demo"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                Launch Demo
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="h-6 w-6 text-yellow-400" />
                Quantum AI Fusion Platform
              </h3>
              <p className="text-gray-300 mb-6">
                Explore the convergence of quantum computing and artificial intelligence. See how 
                quantum-enhanced AI algorithms solve complex problems with unprecedented speed.
              </p>
              <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20 mb-6">
                <h4 className="text-green-300 font-semibold mb-2">Quantum Features</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Quantum machine learning algorithms</li>
                  <li>• Quantum optimization problems</li>
                  <li>• Quantum neural networks</li>
                  <li>• Quantum cryptography demonstrations</li>
                </ul>
              </div>
              <Link 
                href="/ai-tools/quantum-ai-fusion-demo"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                Launch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Statistics */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Demo Center Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
                <div className="text-gray-300">Interactive Demos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10,000+</div>
                <div className="text-gray-300">Demo Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Available Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 border border-indigo-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Experience AI in Action?
            </h2>
            <p className="text-indigo-200 mb-6">
              Start exploring our interactive demos today and discover how AI can transform your business. 
              All demos are free to try and require no registration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Live Demo
              </Link>
              <Link 
                href="/ai-tools"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Browse All Tools
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}