import React from 'react';
import Head from 'next/head';
import { Brain, Zap, Shield, Users, TrendingUp, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function AISolutionsPage() {
  return (
    <>
      <Head>
        <title>AI Solutions — Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions. From machine learning to autonomous systems, we deliver intelligent technology that drives growth." />
        <meta property="og:title" content="AI Solutions — Zion Tech Group" />
        <meta property="og:description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions. From machine learning to autonomous systems, we deliver intelligent technology that drives growth." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and unlock unprecedented growth opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* AI Capabilities Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <p className="text-white/70">
                  Custom ML models, predictive analytics, and intelligent automation systems that learn and adapt to your business needs.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Autonomous Systems</h3>
                <p className="text-white/70">
                  Self-operating systems that can make decisions, execute tasks, and optimize processes without human intervention.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Security</h3>
                <p className="text-white/70">
                  Advanced threat detection, behavioral analysis, and intelligent security systems that protect against evolving cyber threats.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                <Users className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
                <p className="text-white/70">
                  Chatbots, language understanding, and text analysis systems that enhance customer interactions and automate communication.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                <TrendingUp className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-white/70">
                  Data-driven insights and forecasting models that help you make informed decisions and anticipate market trends.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl p-6">
                <Target className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
                <p className="text-white/70">
                  Image and video analysis systems for quality control, security monitoring, and automated visual inspection processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions for Industries */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400">AI Solutions by Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Healthcare & Life Sciences</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Medical image analysis and diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Drug discovery and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Patient data analytics and predictive care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Healthcare process automation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Financial Services</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Fraud detection and prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Risk assessment and management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Algorithmic trading systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Customer service automation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Manufacturing & Logistics</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Predictive maintenance systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Quality control automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Supply chain optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Inventory management AI</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Retail & E-commerce</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Demand forecasting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Customer behavior analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Dynamic pricing optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implementation Process */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our AI Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Assessment</h3>
                <p className="text-white/70">
                  We analyze your business processes, identify AI opportunities, and develop a comprehensive implementation strategy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Preparation</h3>
                <p className="text-white/70">
                  We clean, structure, and prepare your data for AI model training, ensuring quality and compliance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Model Development</h3>
                <p className="text-white/70">
                  Our AI experts develop, train, and validate custom models tailored to your specific business requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Deployment & Optimization</h3>
                <p className="text-white/70">
                  We deploy your AI solution, monitor performance, and continuously optimize for maximum business impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Success Metrics */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400">AI Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40-60%</div>
                <div className="text-white/70">Cost Reduction</div>
                <p className="text-white/50 text-sm mt-2">Through process automation and optimization</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">3-5x</div>
                <div className="text-white/70">Productivity Increase</div>
                <p className="text-white/50 text-sm mt-2">With intelligent automation and insights</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">90%+</div>
                <div className="text-white/70">Accuracy Improvement</div>
                <p className="text-white/50 text-sm mt-2">In decision-making and predictions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and discover how intelligent automation can drive unprecedented growth and efficiency for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg flex items-center gap-2">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 text-lg">
                Explore All Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}