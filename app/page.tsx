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
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl animate-bounce">🚀</span>
              <h2 className="text-4xl font-bold">FRESH CONTENT SEPTEMBER 2025!</h2>
              <span className="text-4xl animate-bounce">✨</span>
            </div>
            <p className="text-center text-2xl opacity-90 mb-4">
              4 NEW Enterprise AI Guides Just Published!
            </p>
            <p className="text-center text-lg opacity-80">
              Multiagent Systems • DevOps Automation • Cybersecurity Mesh • MLOps Platforms
            </p>
          </div>
        </section>

        {/* Featured New Content */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-4">
                <span className="text-2xl">🆕</span>
                <span className="font-bold text-purple-800">SEPTEMBER 2025 • BRAND NEW</span>
              </div>
              <h2 className="text-4xl font-bold text-center mb-4">Latest Enterprise AI Insights</h2>
              <p className="text-center text-gray-600 mb-8 text-xl">
                Transform your business with cutting-edge AI strategies and implementation guides
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* AI Multiagent Collaboration */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-purple-200">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white text-purple-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI Multiagent Collaboration 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Orchestrating intelligent agents at scale
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-purple-600">200%</div>
                      <div className="text-xs text-gray-600">Productivity</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-pink-600">85%</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">60%</div>
                      <div className="text-xs text-gray-600">Cost Cut</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-multiagent-collaboration-2026"
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* AI DevOps Automation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white text-blue-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI DevOps Automation 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Autonomous CI/CD & infrastructure
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-600">Success</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-cyan-600">80%</div>
                      <div className="text-xs text-gray-600">Faster</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">90%</div>
                      <div className="text-xs text-gray-600">Fewer Issues</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-devops-automation-2026"
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* AI Cybersecurity Mesh */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-red-200">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white text-red-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    AI Cybersecurity Mesh 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Zero-trust security at scale
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-red-600">99.9%</div>
                      <div className="text-xs text-gray-600">Detection</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-orange-600">&lt;1min</div>
                      <div className="text-xs text-gray-600">Response</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">85%</div>
                      <div className="text-xs text-gray-600">Fewer Incidents</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/ai-cybersecurity-mesh-2026"
                    className="block w-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-colors text-sm"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>

              {/* Enterprise MLOps */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-2 border-green-200">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      🆕 NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Enterprise MLOps Platforms 2026
                  </h3>
                  <p className="text-sm opacity-90">
                    Production AI at scale
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-green-600">10x</div>
                      <div className="text-xs text-gray-600">Deploy</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-600">95%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">80%</div>
                      <div className="text-xs text-gray-600">Cost Cut</div>
                    </div>
                  </div>
                  <Link 
                    href="/blog/enterprise-mlops-platforms-2026"
                    className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-colors text-sm"
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