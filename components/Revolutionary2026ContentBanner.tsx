import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Shield, Zap, Star } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {' '}Here Now
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI innovations that are transforming industries and reshaping 
            the future of human-computer interaction in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Neural Interfaces */}
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Neural Interfaces 2026
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Experience 300% productivity gains with revolutionary brain-computer interfaces 
                that are transforming how humans interact with technology.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">300%</div>
                    <div className="text-xs text-blue-200">Productivity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">95%</div>
                    <div className="text-xs text-blue-200">Accuracy</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Space Technology */}
          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Space Technology 2026
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Explore interplanetary AI systems achieving 1000x mission efficiency with 
                autonomous spacecraft and intelligent space operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">1000x</div>
                    <div className="text-xs text-blue-200">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">99.9%</div>
                    <div className="text-xs text-blue-200">Success</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Synthetic Data */}
          <Link href="/blog/ai-synthetic-data-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                AI Synthetic Data 2026
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Achieve 99.9% privacy protection while maintaining 95% model accuracy with 
                revolutionary synthetic data technology.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">99.9%</div>
                    <div className="text-xs text-blue-200">Privacy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">95%</div>
                    <div className="text-xs text-blue-200">Accuracy</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Success Stories */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Proven Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-neural-interface-success-2026" className="group">
              <div className="text-center p-4 hover:bg-white/10 rounded-xl transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  Neural Interface Success
                </h4>
                <p className="text-sm text-blue-200">
                  300% productivity gains at Fortune 500 company
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-space-mission-success-2026" className="group">
              <div className="text-center p-4 hover:bg-white/10 rounded-xl transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  Space Mission Success
                </h4>
                <p className="text-sm text-blue-200">
                  1000x efficiency in autonomous space missions
                </p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-synthetic-data-success-2026" className="group">
              <div className="text-center p-4 hover:bg-white/10 rounded-xl transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  Privacy-Preserving AI
                </h4>
                <p className="text-sm text-blue-200">
                  99.9% privacy protection with synthetic data
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore All 2026 Content
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            Join 50,000+ professionals discovering the future of AI
          </p>
        </div>
      </div>
    </section>
  );
}