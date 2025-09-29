import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Brain, Zap, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* New 2026 Content Promo Strip */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
          <div className="flex items-center gap-3 text-sm md:text-base flex-wrap">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">🚀 NEW 2026</span>
            <Link href="/blog/ai-neural-interfaces-enterprise-2026" className="underline hover:text-yellow-200 font-semibold">Neural Interfaces</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-quantum-optimization-enterprise-2026" className="underline hover:text-yellow-200 font-semibold">Quantum Optimization</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/blog/ai-autonomous-business-systems-2026" className="underline hover:text-yellow-200 font-semibold">Autonomous Systems</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/case-studies/ai-neural-interface-banking-transformation-2026" className="underline hover:text-yellow-200 font-semibold">$50M Banking ROI</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/case-studies/ai-quantum-optimization-manufacturing-2026" className="underline hover:text-yellow-200 font-semibold">$35M Manufacturing Savings</Link>
          </div>
          <Link
            href="/blog"
            className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-2 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Explore All Content →
          </Link>
        </div>
      </div>

      {/* Featured 2026 Content Banner */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                🧠 BREAKTHROUGH 2026
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Content That's Transforming Business
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the latest breakthroughs in neural interfaces, quantum optimization, and autonomous business systems 
              that are reshaping enterprise operations and delivering unprecedented ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-purple-100 hover:border-purple-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Neural Interfaces</h3>
                  <p className="text-sm text-gray-500">Brain-Computer Communication</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Explore how neural interfaces are revolutionizing enterprise AI, enabling direct brain-computer 
                communication that promises unprecedented productivity gains and seamless human-AI collaboration.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </div>
                <Link
                  href="/blog/ai-neural-interfaces-enterprise-2026"
                  className="text-purple-600 font-bold hover:text-purple-700 transition-colors flex items-center gap-1"
                >
                  Read Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-indigo-100 hover:border-indigo-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quantum Optimization</h3>
                  <p className="text-sm text-gray-500">1000x Faster Computing</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Discover how quantum-enhanced AI optimization is revolutionizing enterprise decision-making, 
                supply chain management, and resource allocation with unprecedented speed and accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  30 min read
                </div>
                <Link
                  href="/blog/ai-quantum-optimization-enterprise-2026"
                  className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center gap-1"
                >
                  Read Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-orange-100 hover:border-orange-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Autonomous Systems</h3>
                  <p className="text-sm text-gray-500">Self-Managing Enterprise</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Learn how autonomous AI systems are transforming businesses into self-managing entities, 
                handling complex operations and strategic planning without human intervention.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  28 min read
                </div>
                <Link
                  href="/blog/ai-autonomous-business-systems-2026"
                  className="text-orange-600 font-bold hover:text-orange-700 transition-colors flex items-center gap-1"
                >
                  Read Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                💰 SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results: $85M+ in Proven ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading enterprises are achieving unprecedented results with our AI solutions, 
              from $50M banking transformations to $35M manufacturing savings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Banking Transformation</h3>
                  <p className="text-sm text-gray-500">Neural Interface Implementation</p>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="text-2xl font-bold text-green-700 mb-2">$50M Additional Revenue</div>
                <div className="text-sm text-green-600">40% faster reaction time • 25% better accuracy</div>
              </div>
              <p className="text-gray-600 mb-6">
                A leading investment bank achieved $50M in additional annual revenue through neural interface 
                technology, revolutionizing their trading operations and decision-making processes.
              </p>
              <Link
                href="/case-studies/ai-neural-interface-banking-transformation-2026"
                className="text-green-600 font-bold hover:text-green-700 transition-colors flex items-center gap-1"
              >
                Read Full Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-purple-100 hover:border-purple-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Manufacturing Revolution</h3>
                  <p className="text-sm text-gray-500">Quantum Optimization Implementation</p>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <div className="text-2xl font-bold text-purple-700 mb-2">$35M Cost Savings</div>
                <div className="text-sm text-purple-600">40% efficiency gains • 50% faster optimization</div>
              </div>
              <p className="text-gray-600 mb-6">
                A Fortune 500 manufacturing company achieved $35M in annual cost savings through quantum 
                optimization, revolutionizing production planning and supply chain management.
              </p>
              <Link
                href="/case-studies/ai-quantum-optimization-manufacturing-2026"
                className="text-purple-600 font-bold hover:text-purple-700 transition-colors flex items-center gap-1"
              >
                Read Full Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              View All Success Stories →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-neural-interfaces-enterprise-2026"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              🧠 Read Neural Interfaces Guide
            </Link>
            <Link
              href="/case-studies/ai-neural-interface-banking-transformation-2026"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              🏆 View $50M Success Story
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$85M+</div>
              <div className="text-gray-600">Client ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From neural interfaces to quantum optimization, we deliver cutting-edge AI solutions 
              that transform your business operations and drive measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Neural Interface Solutions</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary brain-computer interfaces that enable direct neural communication 
                with AI systems for unprecedented productivity gains.
              </p>
              <Link
                href="/services/ai-autonomous-cloud-ops"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum-enhanced AI optimization that solves complex business problems 
                1000x faster than traditional methods.
              </p>
              <Link
                href="/services/ai-fintech-transformation"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Systems</h3>
              <p className="text-gray-600 mb-6">
                Self-managing AI systems that handle complex business operations 
                and strategic planning without human intervention.
              </p>
              <Link
                href="/services/ai-retail-automation"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading enterprises who are already achieving unprecedented results 
            with our cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}