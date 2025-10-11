'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Code, Brain, Shield, Zap } from 'lucide-react';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group's innovative AI and IT solutions." />
        <meta name="keywords" content="team, experts, AI specialists, IT professionals, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Our Expert Team
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Meet the brilliant minds behind our innovative AI and IT solutions. 
                  Our team combines decades of experience with cutting-edge expertise.
                </p>
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Expert Professionals</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/20">
                  <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-pink-500/20">
                  <Code className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
                  <Brain className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>

              {/* Team Members */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* CEO */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Kleber Santos</h3>
                    <p className="text-cyan-400 font-semibold mb-4">CEO & Founder</p>
                    <p className="text-gray-300 text-sm">
                      Visionary leader with 15+ years in AI and technology innovation, 
                      driving our mission to transform businesses through cutting-edge solutions.
                    </p>
                  </div>
                </div>

                {/* CTO */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Dr. Sarah Chen</h3>
                    <p className="text-purple-400 font-semibold mb-4">Chief Technology Officer</p>
                    <p className="text-gray-300 text-sm">
                      AI research expert with PhD in Machine Learning, leading our technical 
                      innovation and ensuring cutting-edge solutions for our clients.
                    </p>
                  </div>
                </div>

                {/* Head of Security */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Marcus Rodriguez</h3>
                    <p className="text-green-400 font-semibold mb-4">Head of Cybersecurity</p>
                    <p className="text-gray-300 text-sm">
                      Cybersecurity specialist with expertise in AI-powered security solutions, 
                      ensuring our clients' data and systems remain protected.
                    </p>
                  </div>
                </div>

                {/* AI Research Lead */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Dr. Alex Kim</h3>
                    <p className="text-orange-400 font-semibold mb-4">AI Research Lead</p>
                    <p className="text-gray-300 text-sm">
                      Quantum computing and AI researcher, pioneering next-generation 
                      algorithms that power our most advanced solutions.
                    </p>
                  </div>
                </div>

                {/* Enterprise Solutions */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Jennifer Walsh</h3>
                    <p className="text-blue-400 font-semibold mb-4">Head of Enterprise Solutions</p>
                    <p className="text-gray-300 text-sm">
                      Enterprise transformation expert, helping Fortune 500 companies 
                      implement AI solutions that drive real business value.
                    </p>
                  </div>
                </div>

                {/* Innovation Lab */}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">David Park</h3>
                    <p className="text-pink-400 font-semibold mb-4">Innovation Lab Director</p>
                    <p className="text-gray-300 text-sm">
                      Creative technologist leading our innovation lab, exploring 
                      emerging technologies and developing breakthrough solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Join Our Team CTA */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Join Our Team
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our passion 
                  for innovation and excellence. Explore opportunities to make an impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/careers"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Open Positions
                  </a>
                  <a
                    href="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TeamPage;