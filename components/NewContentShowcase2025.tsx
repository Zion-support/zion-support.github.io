import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Atom, 
  Zap, 
  Globe, 
  Rocket, 
  ArrowRight,
  Star,
  Sparkles,
  Infinity,
  Layers,
  Target,
  TrendingUp
} from 'lucide-react';

export default function NewContentShowcase2025() {
  const newContent = [
    {
      title: "AI 2035 Future Vision",
      description: "Explore the revolutionary technologies that will transform our world by 2035. From quantum consciousness to neural interfaces.",
      href: "/ai-2035-future-vision",
      icon: Brain,
      color: "from-purple-500 to-cyan-500",
      features: ["Quantum Consciousness", "Neural Interfaces", "Global AI Ecosystem"]
    },
    {
      title: "Quantum AI Breakthrough 2030",
      description: "Witness the convergence of quantum computing and artificial intelligence, unlocking unprecedented computational power.",
      href: "/quantum-ai-breakthrough-2030",
      icon: Atom,
      color: "from-indigo-500 to-pink-500",
      features: ["Quantum Neural Networks", "Quantum Optimization", "Quantum Supremacy"]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">NEW CONTENT SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the future of artificial intelligence through our cutting-edge content. 
            Explore groundbreaking technologies, revolutionary breakthroughs, and the next decade of AI evolution.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">2</div>
              <div className="text-gray-400 text-sm">New Revolutionary Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">2030-2035</div>
              <div className="text-gray-400 text-sm">Future Predictions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">∞</div>
              <div className="text-gray-400 text-sm">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {newContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {content.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {content.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {content.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-gray-300 border border-white/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={content.href}
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${content.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <Rocket className="w-5 h-5" />
                    Explore {content.title}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${content.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Future-Ready Content</h3>
            <p className="text-gray-400">
              Stay ahead with predictions and insights into the next decade of AI evolution
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Insights</h3>
            <p className="text-gray-400">
              Curated by AI experts and researchers at the forefront of technological innovation
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Interactive Experience</h3>
            <p className="text-gray-400">
              Engage with cutting-edge visualizations and interactive content elements
            </p>
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals, researchers, and AI enthusiasts exploring 
              the revolutionary content that will shape tomorrow's world.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ai-2035-future-vision"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Brain className="w-5 h-5" />
                Explore AI 2035 Vision
              </Link>
              
              <Link 
                href="/quantum-ai-breakthrough-2030"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Atom className="w-5 h-5" />
                Discover Quantum AI
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Trusted by 50,000+ professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Updated with latest research</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Expert-curated insights</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Future-focused content</span>
          </div>
        </div>
      </div>
    </div>
  );
}