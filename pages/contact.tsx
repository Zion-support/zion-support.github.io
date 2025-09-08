import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for partnerships, collaborations, or to learn more about our autonomous AI technologies." />
        <meta property="og:title" content="Contact Zion Tech Group | Get in Touch" />
        <meta property="og:description" content="Contact Zion Tech Group for partnerships, collaborations, or to learn more about our autonomous AI technologies." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </a>
          </nav>
          
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to explore the future of autonomous technology? Let's connect and discuss how we can help transform your vision into reality.
            </p>
          </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">General Inquiries</h3>
                    <p className="text-white/80 mb-3">
                      Questions about our technology, partnerships, or general information
                    </p>
                    <a 
                      href="mailto:info@zion.tech" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      info@zion.tech
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Partnerships</h3>
                    <p className="text-white/80 mb-3">
                      Interested in collaborating or integrating our autonomous systems
                    </p>
                    <a 
                      href="mailto:partnerships@zion.tech" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      partnerships@zion.tech
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Technical Support</h3>
                    <p className="text-white/80 mb-3">
                      Need help with our systems or have technical questions
                    </p>
                    <a 
                      href="mailto:support@zion.tech" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      support@zion.tech
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Media & Press</h3>
                    <p className="text-white/80 mb-3">
                      Journalists, bloggers, or media inquiries
                    </p>
                    <a 
                      href="mailto:press@zion.tech" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      press@zion.tech
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="technical">Technical Support</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                  <p className="text-white/70">Get a response within 24 hours, often much sooner</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                  <p className="text-white/70">Leverage our autonomous systems for your projects</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-white/70">We work with clients worldwide, 24/7</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Explore More</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Learn more about our services, view our case studies, and stay updated with our latest innovations.
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
        </main>
      </div>
    </>
  );
}