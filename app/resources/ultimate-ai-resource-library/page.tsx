import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, Play, Users, Clock, Star, TrendingUp, Brain, Zap, Code, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ultimate AI Resource Library - Comprehensive AI Knowledge Hub',
  description: 'Access our comprehensive library of AI resources including whitepapers, case studies, implementation guides, video tutorials, and research papers. Everything you need to master AI technologies.',
  keywords: 'AI resources, AI whitepapers, AI case studies, AI tutorials, AI research, AI implementation guides, machine learning resources',
  openGraph: {
    title: 'Ultimate AI Resource Library - Your AI Knowledge Hub',
    description: 'Comprehensive collection of AI resources, guides, and educational materials.',
    type: 'website',
  },
};

export default function UltimateAIResourceLibrary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ultimate AI
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Resource Library
              </span>
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Your comprehensive knowledge hub for AI technologies. Access whitepapers, case studies, 
              implementation guides, video tutorials, and cutting-edge research to master the future of AI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>500+ Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert Content</span>
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
              className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/resources" className="text-white hover:text-blue-300 transition-colors">
                All Resources
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
                Request Content
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resource Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Resource Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepapers */}
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Whitepapers</h3>
              </div>
              <p className="text-gray-300 mb-6">
                In-depth research papers covering the latest AI technologies, methodologies, 
                and industry insights from leading experts.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-900/40 rounded-lg p-3 border border-blue-500/20">
                  <h4 className="text-blue-300 font-semibold text-sm">Featured Papers</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• "Quantum AI Fusion: The Next Frontier"</li>
                    <li>• "Autonomous Business Ecosystems"</li>
                    <li>• "Neural Interface Revolution"</li>
                    <li>• "AI Ethics and Governance"</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-300 text-sm">75+ Papers</span>
                <Link 
                  href="/resources/whitepapers"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 text-sm"
                >
                  Browse All
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Case Studies</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Real-world success stories showcasing AI implementations across various industries 
                and their measurable business impact.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-green-900/40 rounded-lg p-3 border border-green-500/20">
                  <h4 className="text-green-300 font-semibold text-sm">Success Stories</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Fortune 100 AI Transformation</li>
                    <li>• Startup AI Success Stories</li>
                    <li>• Healthcare AI Breakthroughs</li>
                    <li>• Manufacturing Optimization</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-300 text-sm">120+ Studies</span>
                <Link 
                  href="/resources/case-studies"
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 text-sm"
                >
                  Browse All
                </Link>
              </div>
            </div>

            {/* Implementation Guides */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Implementation Guides</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Step-by-step guides for implementing AI solutions in your organization, 
                from strategy to deployment and optimization.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-purple-900/40 rounded-lg p-3 border border-purple-500/20">
                  <h4 className="text-purple-300 font-semibold text-sm">Guide Topics</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• AI Strategy Development</li>
                    <li>• Technology Selection</li>
                    <li>• Change Management</li>
                    <li>• ROI Measurement</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-300 text-sm">90+ Guides</span>
                <Link 
                  href="/resources/implementation-guides"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm"
                >
                  Browse All
                </Link>
              </div>
            </div>

            {/* Video Tutorials */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-md rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Video Tutorials</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive video tutorials covering AI concepts, tools, and practical 
                applications with hands-on demonstrations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-orange-900/40 rounded-lg p-3 border border-orange-500/20">
                  <h4 className="text-orange-300 font-semibold text-sm">Video Series</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• AI Fundamentals Course</li>
                    <li>• Advanced ML Techniques</li>
                    <li>• Quantum Computing Basics</li>
                    <li>• Business AI Applications</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-orange-300 text-sm">200+ Videos</span>
                <Link 
                  href="/resources/video-tutorials"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 text-sm"
                >
                  Watch Now
                </Link>
              </div>
            </div>

            {/* Research Papers */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Research Papers</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Latest academic research and breakthrough discoveries in AI, machine learning, 
                and quantum computing from leading institutions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-cyan-900/40 rounded-lg p-3 border border-cyan-500/20">
                  <h4 className="text-cyan-300 font-semibold text-sm">Research Areas</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• Neural Architecture Search</li>
                    <li>• Quantum Machine Learning</li>
                    <li>• AI Consciousness Research</li>
                    <li>• Advanced Optimization</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-cyan-300 text-sm">150+ Papers</span>
                <Link 
                  href="/resources/research-papers"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
                >
                  Browse All
                </Link>
              </div>
            </div>

            {/* Tools & Templates */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-md rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Tools & Templates</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Ready-to-use AI tools, templates, and frameworks to accelerate your 
                AI implementation and development projects.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-emerald-900/40 rounded-lg p-3 border border-emerald-500/20">
                  <h4 className="text-emerald-300 font-semibold text-sm">Available Tools</h4>
                  <ul className="text-gray-300 text-xs space-y-1 mt-1">
                    <li>• AI Project Templates</li>
                    <li>• ROI Calculators</li>
                    <li>• Assessment Frameworks</li>
                    <li>• Code Libraries</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-emerald-300 text-sm">80+ Tools</span>
                <Link 
                  href="/resources/tools-templates"
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 text-sm"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Resources
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl p-8 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">AI 2025-2030: Future Predictions</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive analysis of AI trends and predictions for the next 5 years. 
                This 50-page whitepaper covers quantum computing, neural interfaces, and autonomous systems.
              </p>
              <div className="bg-blue-900/40 rounded-lg p-4 border border-blue-500/20 mb-6">
                <h4 className="text-blue-300 font-semibold mb-2">Key Topics Covered</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Quantum AI convergence timeline</li>
                  <li>• Neural interface commercialization</li>
                  <li>• Autonomous business ecosystems</li>
                  <li>• AI consciousness evolution</li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    50 pages
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    15,000 downloads
                  </span>
                </div>
                <Link 
                  href="/resources/ai-2025-2030-predictions"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                >
                  Download PDF
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-8 border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-6 w-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Enterprise AI Implementation Playbook</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Step-by-step guide for enterprise AI transformation. This comprehensive playbook 
                includes frameworks, checklists, and real-world case studies from Fortune 500 companies.
              </p>
              <div className="bg-green-900/40 rounded-lg p-4 border border-green-500/20 mb-6">
                <h4 className="text-green-300 font-semibold mb-2">Implementation Framework</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 12-phase implementation roadmap</li>
                  <li>• ROI measurement frameworks</li>
                  <li>• Change management strategies</li>
                  <li>• Technology selection criteria</li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    85 pages
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    25,000 downloads
                  </span>
                </div>
                <Link 
                  href="/resources/enterprise-ai-playbook"
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
                >
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Statistics */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Resource Library Statistics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">715+</div>
                <div className="text-gray-300">Total Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500K+</div>
                <div className="text-gray-300">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Expert Authors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Access Our Complete Resource Library
            </h2>
            <p className="text-blue-200 mb-6">
              Join thousands of professionals who use our resources to stay ahead of AI trends 
              and implement cutting-edge solutions in their organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Premium Access
              </Link>
              <Link 
                href="/resources"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Browse All Resources
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