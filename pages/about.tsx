import React from 'react';
import Head from 'next/head';
import { Users, Target, Award, Globe, Zap, Shield, Brain, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation, AI solutions, and cutting-edge services." />
        <meta property="og:title" content="About Us — Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation, AI solutions, and cutting-edge services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Pioneering the future of technology through autonomous innovation, artificial intelligence, and cutting-edge solutions that transform businesses and industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Explore Our Services
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  To democratize cutting-edge technology and make advanced AI solutions accessible to businesses of all sizes, while pushing the boundaries of what's possible through autonomous innovation.
                </p>
                <p className="text-white/70">
                  We believe that technology should work for people, not the other way around. Our autonomous systems and AI solutions are designed to enhance human capabilities and drive unprecedented growth.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <Target className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Vision 2030</h3>
                <p className="text-white/80">
                  To become the world's leading autonomous technology company, creating a future where AI and human intelligence work in perfect harmony to solve humanity's greatest challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-white/70">Constantly pushing boundaries and exploring new possibilities in technology.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
                <p className="text-white/70">Building secure, reliable solutions that our clients can depend on.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Success</h3>
                <p className="text-white/70">Your success is our success. We're committed to delivering measurable results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-white/70">Striving for excellence in everything we do, from code to customer service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-300">
                Contact Us Today
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}