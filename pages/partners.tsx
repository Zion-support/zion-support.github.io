import React from 'react';
import Head from 'next/head';

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Partner with Zion Tech Group to deliver innovative technology solutions. Explore partnership opportunities and join our ecosystem." />
        <meta property="og:title" content="Partners | Zion Tech Group" />
        <meta property="og:description" content="Partner with Zion Tech Group to deliver innovative technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join forces with Zion Tech Group to create innovative solutions, expand your market reach, and deliver exceptional value to clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Become a Partner
              </a>
              <a href="#partnership-types" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Learn More
              </a>
            </div>
          </section>

          {/* Partnership Types */}
          <section id="partnership-types" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technology Partners */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Technology Partners</h3>
                <p className="text-white/70 mb-4">Integrate complementary technologies and create comprehensive solutions for clients.</p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>• API integrations</li>
                  <li>• Platform partnerships</li>
                  <li>• Co-development opportunities</li>
                </ul>
                <a href="/partners/technology" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
              </div>

              {/* Channel Partners */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Channel Partners</h3>
                <p className="text-white/70 mb-4">Resell our solutions and earn competitive margins while expanding your service portfolio.</p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>• Reseller programs</li>
                  <li>• Referral partnerships</li>
                  <li>• Revenue sharing</li>
                </ul>
                <a href="/partners/channel" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">Learn More →</a>
              </div>

              {/* Consulting Partners */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Consulting Partners</h3>
                <p className="text-white/70 mb-4">Collaborate on client projects and leverage our expertise for mutual success.</p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>• Joint project delivery</li>
                  <li>• Expertise sharing</li>
                  <li>• Client collaboration</li>
                </ul>
                <a href="/partners/consulting" className="text-green-400 hover:text-green-300 transition-colors">Learn More →</a>
              </div>

              {/* Strategic Partners */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Partners</h3>
                <p className="text-white/70 mb-4">Long-term partnerships focused on market expansion and innovation.</p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>• Market expansion</li>
                  <li>• Innovation collaboration</li>
                  <li>• Joint ventures</li>
                </ul>
                <a href="/partners/strategic" className="text-orange-400 hover:text-orange-300 transition-colors">Learn More →</a>
              </div>

              {/* Academic Partners */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Partners</h3>
                <p className="text-white/70 mb-4">Research collaboration and talent development partnerships with universities.</p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>• Research collaboration</li>
                  <li>• Talent pipeline</li>
                  <li>• Innovation programs</li>
                </ul>
                <a href="/partners/academic" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
              </div>

              {/* Industry Partners */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Partners</h3>
                <p className="text-white/70 mb-4">Sector-specific partnerships for industry expertise and market access.</p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>• Industry expertise</li>
                  <li>• Market access</li>
                  <li>• Regulatory knowledge</li>
                </ul>
                <a href="/partners/industry" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Revenue Growth</h3>
                    <p className="text-white/70">Access new markets and revenue streams through our extensive client network and solutions portfolio.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technology Access</h3>
                    <p className="text-white/70">Leverage our cutting-edge AI, quantum, and cybersecurity technologies for your clients.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expertise Sharing</h3>
                    <p className="text-white/70">Access our technical expertise, best practices, and industry knowledge to enhance your capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Market Expansion</h3>
                    <p className="text-white/70">Expand your geographic and industry reach through our global presence and diverse client base.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Partners */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Microsoft</h3>
                <p className="text-white/60 text-sm">Cloud & AI Solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AWS</h3>
                <p className="text-white/60 text-sm">Cloud Infrastructure</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Google Cloud</h3>
                <p className="text-white/60 text-sm">AI & ML Platform</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">IBM</h3>
                <p className="text-white/60 text-sm">Quantum Computing</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create value together and build successful partnerships that drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Start Partnership Discussion
                </a>
                <a href="/about" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  Learn More About Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}