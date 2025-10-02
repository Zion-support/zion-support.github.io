import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, TrendingUp, Shield, Cloud, BarChart3, Database, Users, Target, Zap, Rocket, Globe, Phone, Mail, MapPin, ArrowRight, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
  description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Experience 2000x processing speed and 99.9% automation rates.',
  keywords: 'AI, Enterprise AI, Quantum Computing, Autonomous Operations, Meta-Cognitive AI, Zion Tech Group',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Our Services →
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">50+</div>
                <div className="text-xs text-blue-300">AI Solutions</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">95%</div>
                <div className="text-xs text-purple-300">Decision Accuracy</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
                <div className="text-xs text-green-300">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">$5.2B</div>
                <div className="text-xs text-orange-300">Client Savings</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Services */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Revolutionary AI Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Transform your organization with cutting-edge AI innovations and enterprise-grade solutions
            </p>
          </div>

          {/* New Innovative Services Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border border-green-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">🚀 NEW: 2026 Innovative Micro SaaS Solutions</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our latest AI-powered micro SaaS solutions that deliver immediate ROI and transform business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-lg font-semibold mb-2">AI Customer Feedback Analyzer</h4>
                <p className="text-gray-600 text-sm mb-3">92% sentiment accuracy across all channels</p>
                <div className="text-green-600 font-bold">$149/month</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="text-4xl mb-4">💳</div>
                <h4 className="text-lg font-semibold mb-2">AI Expense Management SaaS</h4>
                <p className="text-gray-600 text-sm mb-3">95% accuracy in automatic categorization</p>
                <div className="text-blue-600 font-bold">$99/month</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
                <div className="text-4xl mb-4">⏱️</div>
                <h4 className="text-lg font-semibold mb-2">AI Time Tracking Suite</h4>
                <p className="text-gray-600 text-sm mb-3">30% productivity improvement guaranteed</p>
                <div className="text-purple-600 font-bold">$79/month</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore All 50+ Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Brain className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Quantum AI Computing</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Leverage quantum-enhanced AI for unprecedented computational power and breakthrough performance.
              </p>
              <Link href="/services/ai-quantum-computing-2026" className="text-blue-600 font-semibold hover:text-blue-700 text-sm md:text-base">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Zap className="w-5 md:w-6 h-5 md:h-6 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Autonomous Enterprise</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Achieve 95% automation across your enterprise with self-managing AI systems.
              </p>
              <Link href="/services/ai-autonomous-operations-2026" className="text-purple-600 font-semibold hover:text-purple-700 text-sm md:text-base">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <TrendingUp className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">AI ROI Optimization</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Proven strategies to achieve $150M+ ROI through strategic AI implementation.
              </p>
              <Link href="/services/ai-business-intelligence-platform" className="text-green-600 font-semibold hover:text-green-700 text-sm md:text-base">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Shield className="w-5 md:w-6 h-5 md:h-6 text-orange-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">AI Security & Governance</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Enterprise-grade AI security frameworks and governance models.
              </p>
              <Link href="/services/ai-cybersecurity-automation-suite" className="text-orange-600 font-semibold hover:text-orange-700 text-sm md:text-base">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Cloud className="w-5 md:w-6 h-5 md:h-6 text-red-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Cloud AI Infrastructure</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Scalable, secure cloud infrastructure optimized for AI workloads.
              </p>
              <Link href="/services/cloud-native-devops-platform" className="text-red-600 font-semibold hover:text-red-700 text-sm md:text-base">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <BarChart3 className="w-5 md:w-6 h-5 md:h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">AI Analytics & Insights</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                Advanced analytics platforms powered by next-generation AI.
              </p>
              <Link href="/services/ai-business-intelligence-platform" className="text-indigo-600 font-semibold hover:text-indigo-700 text-sm md:text-base">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real results from Fortune 500 companies and enterprise clients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="w-6 md:w-8 h-6 md:h-8 text-blue-600 mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold">Fortune 500 Transformation</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                "Zion Tech Group's AI solutions delivered a 1000x performance improvement 
                and $150M ROI within the first year of implementation."
              </p>
              <div className="flex items-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base">Sarah Chen</div>
                  <div className="text-gray-600 text-sm md:text-base">CTO, Global Tech Corp</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="w-6 md:w-8 h-6 md:h-8 text-green-600 mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold">95% Automation Achievement</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                "Our autonomous enterprise system now handles 95% of routine operations, 
                freeing our team to focus on strategic initiatives."
              </p>
              <div className="flex items-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base">Michael Rodriguez</div>
                  <div className="text-gray-600 text-sm md:text-base">CEO, InnovateCorp</div>
                </div>
              </div>
            </div>
          </div>

          {/* New Comprehensive Services Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Link 
              href="/services" 
              className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-xl border border-cyan-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Comprehensive Micro SaaS Solutions</h3>
                  <p className="text-cyan-600 text-sm">50+ AI-powered micro SaaS solutions</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Revolutionary micro SaaS solutions across AI automation, data analytics, cybersecurity, cloud infrastructure, 
                e-commerce, healthcare tech, fintech, education, real estate, and logistics with proven ROI and fast deployment.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">50+ Solutions</span> • Starting at $49/month
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-500" />
              </div>
            </Link>

            <Link 
              href="/services" 
              className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Comprehensive IT Services</h3>
                  <p className="text-purple-600 text-sm">Professional IT solutions & support</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete IT services including cloud migration, cybersecurity, infrastructure management, 
                digital transformation, software development, and 24/7 support with industry expertise.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">8 Categories</span> • Starting at $1,500/month
                </div>
                <ArrowRight className="w-5 h-5 text-purple-500" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 px-4">
            Join the AI revolution and unlock unprecedented growth with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base"
            >
              Get Started Today
              <Rocket className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm md:text-base"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our experts today to discuss how our AI and IT solutions can drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors font-medium">
                +1 302 464 0950
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <a href="https://ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                ziontechgroup.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
              <div className="text-blue-100 font-medium">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution with Zion Tech Group. Get your free consultation and discover how our 
              revolutionary technologies can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Our Services →
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
                <p className="text-xs text-gray-400">Available 24/7 for enterprise clients • Free consultation for projects over $10K</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}