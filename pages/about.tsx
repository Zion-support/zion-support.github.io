import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pioneering the future of autonomous technology and intelligent automation systems.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Innovation First</h3>
                    <p className="text-white/80">
                      We believe in pushing the boundaries of what's possible through cutting-edge technology
                      and autonomous systems that work tirelessly to improve and evolve.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Autonomous Excellence</h3>
                    <p className="text-white/80">
                      Our systems operate independently, continuously learning and adapting to deliver
                      exceptional results without human intervention.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Autonomous Automation</h3>
                    <p className="text-white/80 mb-4">
                      We develop and deploy intelligent automation systems that handle complex tasks
                      with precision and efficiency.
                    </p>
                    <div className="text-sm text-cyan-300">
                      <span className="font-semibold">227+</span> Active Workflows
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Content Generation</h3>
                    <p className="text-white/80 mb-4">
                      Our AI-powered systems create intelligent, contextually relevant content
                      across multiple domains and industries.
                    </p>
                    <div className="text-sm text-fuchsia-300">
                      <span className="font-semibold">2,960+</span> Pages Generated
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">System Redundancy</h3>
                    <p className="text-white/80 mb-4">
                      We implement comprehensive redundancy systems ensuring 99.99% uptime
                      and continuous operation.
                    </p>
                    <div className="text-sm text-green-300">
                      <span className="font-semibold">99.99%</span> Uptime
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Next.js 14</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>React 18</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4">Backend & Infrastructure</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Node.js</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>PM2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>GitHub Actions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Netlify</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">227</div>
                    <div className="text-white/80">Automation Workflows</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                    <div className="text-white/80">Content Pages</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                    <div className="text-white/80">System Uptime</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-white/80">Operation</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Get Involved</h2>
                <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-lg p-8 border border-cyan-400/30 text-center">
                  <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Join Our Innovation Journey</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Whether you're interested in our autonomous systems, want to explore our content,
                    or have questions about our technology, we'd love to hear from you.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors">
                      Contact Us
                    </Link>
                    <Link href="/automation" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
                      Explore Automation
                    </Link>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>
          </section>
=======
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
                <p className="text-lg text-white/80 mb-4">
                  To create a world where technology operates autonomously, continuously improving and innovating without human intervention.
                </p>
                <p className="text-white/70">
                  We believe in the power of AI to solve complex problems, automate routine tasks, and unlock new possibilities for humanity.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Vision</h2>
                <p className="text-lg text-white/80 mb-4">
                  To be the leading force in autonomous technology, creating systems that think, learn, and evolve independently.
                </p>
                <p className="text-white/70">
                  We envision a future where AI and automation work seamlessly together to enhance human capabilities and drive progress.
                </p>
              </div>
            </div>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-white/70">Pushing boundaries and exploring new frontiers in technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-white/70">Building systems that work consistently and dependably</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-white/70">Ensuring the highest standards of data protection and privacy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-white/70">Working together to achieve greater impact and innovation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Creativity</h3>
                  <p className="text-white/70">Thinking outside the box to solve complex challenges</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Passion</h3>
                  <p className="text-white/70">Driven by our love for technology and its potential</p>
                </div>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-white/80">
                  Founded with a vision to create truly autonomous systems, Zion Tech Group emerged from the 
                  recognition that the future of technology lies in intelligent automation that can operate 
                  independently while continuously improving and adapting.
                </p>
                <p className="text-lg text-white/80">
                  Our journey began with a simple question: "What if technology could think for itself?" 
                  This curiosity led us to develop sophisticated AI systems, autonomous workflows, and 
                  intelligent automation solutions that are reshaping industries across the globe.
                </p>
                <p className="text-lg text-white/80">
                  Today, we stand at the forefront of autonomous technology, with over 200+ automation 
                  systems running continuously, generating content, optimizing performance, and driving 
                  innovation without human intervention. Our commitment to excellence and our passion for 
                  pushing technological boundaries continues to drive us forward.
                </p>
              </div>
            </section>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400">2,960</div>
                  <div className="text-sm text-white/70">Pages Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">12</div>
                  <div className="text-sm text-white/70">AI Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Ready to Learn More?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Explore our services, case studies, and latest innovations to see how we can help transform your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/services" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                  >
                    Our Services
                  </a>
                  <a 
                    href="/case-studies" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200"
                  >
                    Case Studies
                  </a>
                  <a 
                    href="/reports" 
                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200"
                  >
                    Latest Reports
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="mx-auto max-w-6xl mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Our Services</h3>
                <p className="text-white/80 text-sm">Discover our comprehensive AI and automation solutions</p>
              </a>
              
              <a href="/case-studies" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Case Studies</h3>
                <p className="text-white/80 text-sm">See real-world results from our implementations</p>
              </a>
              
              <a href="/contact" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Get in Touch</h3>
                <p className="text-white/80 text-sm">Ready to start your transformation journey?</p>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}