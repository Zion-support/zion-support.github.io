'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Cpu, Phone, Mail, MapPin, Navigation } from 'lucide-react';

const QuantumAiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Quantum AI Computing - Zion Tech Group"
        description="Next-generation quantum algorithms for complex problem solving with exponential speedup."
        keywords={["quantum computing","quantum AI","quantum algorithms","quantum optimization","quantum machine learning"]}
        canonicalUrl="https://ziontechgroup.com/quantum-ai"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
        <section className="text-center mb-16">
          </section><div className="max-w-4xl mx-auto">
            </div><div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum AI Computing</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Next-generation quantum algorithms for complex problem solving with exponential speedup.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >Get Started Today</a>
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" >+1 302 464 0950</Phone>
              </Phone>
            </div>
          </div>
        </section>

        {/* Features Section */}<section className="mb-16">
          </section><div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Powerful capabilities designed to transform your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            </div><div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4"  / />
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Algorithms</h3><p className="text-gray-300">Advanced quantum algorithms capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4"  / />
              <h3 className="text-xl font-semibold text-white mb-2">Optimization Problems</h3><p className="text-gray-300">Advanced optimization problems capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4"  / />
              <h3 className="text-xl font-semibold text-white mb-2">Cryptography</h3><p className="text-gray-300">Advanced cryptography capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4"  / />
              <h3 className="text-xl font-semibold text-white mb-2">Simulation</h3><p className="text-gray-300">Advanced simulation capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4"  / />
              <h3 className="text-xl font-semibold text-white mb-2">Research & Development</h3><p className="text-gray-300">Advanced research & development capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4"  / />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3><p className="text-gray-300">Advanced custom solutions capabilities powered by AI</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}<section className="mb-16">
          </section><div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Quantum AI Computing?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Proven results and measurable impact for your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            </div><div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Exponential Speedup</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Complex Optimization</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Future-proof Technology</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantage</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}<section className="mb-16">
          </section><div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
            </p>
          </div>

          <div className="max-w-md mx-auto">
            </div><div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Computing<div className="text-4xl font-bold text-cyan-400 mb-4">$5,000/month</div>
              <p className="text-gray-300 mb-6">per month<a
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              >Get Started</a>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}<section className="mb-16">
          </section><div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Contact our experts to discuss your specific needs</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            </div><div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3><p className="text-gray-300 mb-4">Speak directly with our experts<a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">+1 302 464 0950</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3><p className="text-gray-300 mb-4">Send us your requirements<a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">kleber@ziontechgroup.com</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3><p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm">
                364 E Main St STE 1008<br  />Middletown DE 19709</br>
              </br>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuantumAiPage;