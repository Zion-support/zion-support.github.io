import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <div className="animate-fade-in">
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
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our Services
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
                <div className="text-3xl font-bold text-blue-600">$2M+</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW CONTENT BANNER */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl animate-bounce">🚀</span>
              <h2 className="text-3xl font-bold">NEW CONTENT JUST PUBLISHED!</h2>
              <span className="text-3xl animate-bounce">✨</span>
            </div>
            <p className="text-center text-xl opacity-90">
              Fresh insights on AI Orchestration, Federated Learning, Code Generation & Real-Time Analytics
            </p>
          </div>
        </section>

        {/* New Content Advertisement Banner */}
        <section className="py-16 bg-gradient-to-r from-red-50 via-pink-50 to-purple-50 border-t-2 border-b-2 border-red-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                NEW CONTENT PUBLISHED
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🎯 Revolutionary AI Breakthroughs Now Live!
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the AI innovations that are transforming Fortune 500 companies and delivering unprecedented results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-red-200 hover:border-red-400 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">
                    AI 2026 Revolutionary Breakthrough
                  </h3>
                  <p className="text-gray-600 mb-4">
                    From autonomous AI systems to quantum-enhanced computing - discover how these innovations are achieving 300% ROI
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">SUCCESS STORY</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3">
                    $100M Success Story: Fortune 500 Mega Breakthrough
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How a Fortune 500 manufacturing giant achieved 95% efficiency gains and $100M ROI through AI transformation
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm text-gray-600">Don't miss out on these insights:</span>
                <a
                  href="tel:+13024640950"
                  className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured New Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Latest AI Insights for 2026</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Cutting-edge guides to transform your enterprise with next-generation AI technology
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* AI Orchestration Platforms */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI Orchestration Platforms 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Unified control for multi-agent systems
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-purple-600">60%</div>
                      <div className="text-xs text-gray-600">Cost Cut</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">10x</div>
                      <div className="text-xs text-gray-600">Faster</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-orchestration-platforms-2026"
                    className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* Federated Learning */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Federated Learning 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Privacy-preserving AI at enterprise scale
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-600">100%</div>
                      <div className="text-xs text-gray-600">Private</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">70%</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/federated-learning-2026"
                    className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* AI Code Generation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI Code Generation 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    10x developer productivity with AI
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-indigo-600">10x</div>
                      <div className="text-xs text-gray-600">Speed</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-600">80%</div>
                      <div className="text-xs text-gray-600">Debug</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">90%</div>
                      <div className="text-xs text-gray-600">Quality</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-code-generation-2026"
                    className="block w-full bg-indigo-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* Real-Time AI Analytics */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Real-Time AI Analytics 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Instant insights from streaming data
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">&lt;100ms</div>
                      <div className="text-xs text-gray-600">Latency</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-cyan-600">1B+</div>
                      <div className="text-xs text-gray-600">Events/s</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">99.99%</div>
                      <div className="text-xs text-gray-600">Accurate</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/real-time-ai-analytics-2026"
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link 
                href="/blog" 
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                View All Articles →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Content from Main */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest AI Innovations & Breakthroughs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 hover:border-red-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">AI 2026 Revolutionary Breakthrough</h3>
                      <p className="text-sm text-gray-500">Featured Innovation</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Discover the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations. 
                    From autonomous AI systems to quantum-enhanced computing, achieving 300% ROI.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200 hover:border-green-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">$100M Success Story</h3>
                      <p className="text-sm text-gray-500">Fortune 500 Mega Breakthrough</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Discover how a Fortune 500 manufacturing giant achieved $100M ROI, 95% efficiency gains, 
                    and 300% productivity improvement through our AI 2026 transformation solutions.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                    <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Quantum AI Breakthrough</h3>
                    <p className="text-sm text-gray-500">Computational Revolution</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore how quantum-enhanced AI is solving impossible optimization problems in seconds, 
                  delivering 500x faster results and transforming computational capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Coming Soon</div>
                  <div className="text-purple-600 font-semibold">
                    Learn More →
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore All Innovations
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}