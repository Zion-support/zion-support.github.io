import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Globe, Zap } from 'lucide-react';

export function AIMetaverseEnterpriseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Metaverse Enterprise 2026
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your business with immersive AI-powered metaverse solutions. 
              Achieve 95% efficiency gains and $15M+ ROI with cutting-edge virtual reality technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-metaverse-enterprise-2026"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Read Article →
              </Link>
              <Link
                href="/case-studies/ai-metaverse-transformation-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Globe className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$15M+</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AINeuralInterfacesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Neural Interfaces 2026
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the future of human-computer interaction with AI neural interfaces. 
              Achieve 99.9% accuracy and $50M+ ROI with revolutionary brain-computer integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Read Article →
              </Link>
              <Link
                href="/services/ai-neural-interfaces"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$50M+</div>
                <div className="text-sm opacity-90">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AISpaceTechnologyBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                SPACE TECH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Space Technology 2026
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Launch your business into the space economy with AI-powered satellite intelligence. 
              Achieve 99.9% mission success and $100B+ market opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-space-tech-2026"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Read Article →
              </Link>
              <Link
                href="/services/ai-space-technology"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Rocket className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">$100B+</div>
                <div className="text-sm opacity-90">Market Size</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Revolutionary2026ContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is Here
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover groundbreaking AI technologies that are transforming industries and creating 
            unprecedented opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Metaverse Enterprise</h3>
            <p className="text-sm opacity-90 mb-4">
              Immersive business transformation with 95% efficiency gains and $15M+ ROI
            </p>
            <Link
              href="/blog/ai-metaverse-enterprise-2026"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Neural Interfaces</h3>
            <p className="text-sm opacity-90 mb-4">
              Brain-computer integration with 99.9% accuracy and $50M+ ROI potential
            </p>
            <Link
              href="/blog/ai-neural-interfaces-2026"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Space Technology</h3>
            <p className="text-sm opacity-90 mb-4">
              Extraterrestrial business with $100B+ market opportunity and 99.9% success rates
            </p>
            <Link
              href="/blog/ai-space-tech-2026"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore All Content
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

export function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            NEW 2026 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI innovations that are reshaping industries and creating 
            unprecedented opportunities for business transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Article */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Metaverse Enterprise</h3>
                  <p className="text-purple-100">Immersive Business Transformation</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                <span className="text-gray-500 text-sm">28 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Metaverse Enterprise 2026: Immersive Business Transformation
              </h4>
              <p className="text-gray-600 mb-6">
                Transform your business with immersive AI-powered metaverse solutions. Achieve 95% efficiency 
                gains and $15M+ ROI with cutting-edge virtual reality technology.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$15M+</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-metaverse-enterprise-2026"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Neural Interfaces</h3>
                  <p className="text-indigo-100">Brain-Computer Integration</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                <span className="text-gray-500 text-sm">32 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI Neural Interfaces 2026: Brain-Computer Integration Revolution
              </h4>
              <p className="text-gray-600 mb-6">
                Experience the future of human-computer interaction with AI neural interfaces. 
                Achieve 99.9% accuracy and $50M+ ROI with revolutionary brain-computer integration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$50M+</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-neural-interfaces-2026"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}