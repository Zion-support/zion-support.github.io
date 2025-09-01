import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Innovation Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive range of autonomous technology services including AI automation, system optimization, and intelligent infrastructure solutions." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Innovation Solutions" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive range of autonomous technology services including AI automation, system optimization, and intelligent infrastructure solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive autonomous technology solutions designed to transform your business and drive innovation
            </p>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                About
              </a>
              <a href="/automation" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                Automation
              </a>
              <a href="/blog" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Blog
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Navigation */}
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-semibold text-green-300 mb-3">Cloud Solutions</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Scalable cloud infrastructure with autonomous management and optimization
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Infrastructure as Code</li>
                    <li>• Auto-scaling systems</li>
                    <li>• Cost optimization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Security & Compliance</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Advanced security systems with autonomous threat detection and response
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Threat intelligence</li>
                    <li>• Automated response</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">Data Analytics</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Real-time data processing and insights with autonomous pattern recognition
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Real-time processing</li>
                    <li>• Pattern recognition</li>
                    <li>• Predictive insights</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">Digital Transformation</h3>
                  <p className="text-white/80 text-sm mb-4">
                    End-to-end digital transformation with autonomous optimization
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Legacy modernization</li>
                    <li>• Process optimization</li>
                    <li>• Change management</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-pink-300 mb-3">Innovation Labs</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Research and development of cutting-edge autonomous technologies
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• R&D partnerships</li>
                    <li>• Prototype development</li>
                    <li>• Innovation consulting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-xl font-semibold text-green-300 mb-2">Healthcare</h3>
                    <p className="text-white/80 text-sm">Autonomous patient monitoring, drug discovery, and healthcare analytics</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">Finance</h3>
                    <p className="text-white/80 text-sm">AI-powered risk assessment, fraud detection, and automated trading</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Manufacturing</h3>
                    <p className="text-white/80 text-sm">Smart factory automation, predictive maintenance, and quality control</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-400 pl-6">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">Retail</h3>
                    <p className="text-white/80 text-sm">Autonomous inventory management, customer insights, and supply chain optimization</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-6">
                    <h3 className="text-xl font-semibold text-orange-300 mb-2">Transportation</h3>
                    <p className="text-white/80 text-sm">Autonomous vehicle systems, traffic optimization, and logistics automation</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-6">
                    <h3 className="text-xl font-semibold text-pink-300 mb-2">Energy</h3>
                    <p className="text-white/80 text-sm">Smart grid management, renewable energy optimization, and consumption analytics</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70">Understanding your needs and objectives</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Innovation Focus</h3>
                      <p className="text-white/70 text-sm">Cutting-edge research and development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Scalable Solutions</h3>
                      <p className="text-white/70 text-sm">Grow with your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">ROI Guarantee</h3>
                      <p className="text-white/70 text-sm">Measurable results and performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Ready to Get Started?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI and automation services can transform your business operations 
                  and drive innovation in your industry.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/case-studies" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200"
                  >
                    View Case Studies
                  </a>
                </div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mt-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">Next.js</span>
                  </div>
                  <p className="text-white/80 text-sm">React Framework</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">GitHub</span>
                  </div>
                  <p className="text-white/80 text-sm">Actions & CI/CD</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">AI/ML</span>
                  </div>
                  <p className="text-white/80 text-sm">Machine Learning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">Cloud</span>
                  </div>
                  <p className="text-white/80 text-sm">Native Architecture</p>
                </div>
              </div>
            </div>

            {/* Specialized Solutions */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mt-8">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Specialized Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">GitHub Actions Automation</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive CI/CD automation with intelligent workflow management and autonomous optimization.
                  </p>
                  <div className="text-sm text-cyan-300/80">
                    • 227+ Active Workflows<br/>
                    • Automated Testing<br/>
                    • Intelligent Deployment<br/>
                    • Performance Monitoring
                  </div>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-fuchsia-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Content Management Systems</h3>
                  <p className="text-white/80 mb-4">
                    AI-powered content generation and management with automated optimization and quality control.
                  </p>
                  <div className="text-sm text-fuchsia-300/80">
                    • 2,960+ Generated Pages<br/>
                    • SEO Optimization<br/>
                    • Multi-format Support<br/>
                    • Quality Assurance
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Performance Optimization</h3>
                  <p className="text-white/80 mb-4">
                    Continuous performance monitoring and optimization with predictive analytics and automated improvements.
                  </p>
                  <div className="text-sm text-green-300/80">
                    • Real-time Monitoring<br/>
                    • Predictive Analytics<br/>
                    • Automated Optimization<br/>
                    • Performance Reporting
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Ready to Transform Your Infrastructure?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our autonomous technology solutions can revolutionize your digital operations and drive unprecedented efficiency.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/about" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Learn More About Us
                  </a>
                  <a href="/contact" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}