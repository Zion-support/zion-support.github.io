import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, TrendingUp, Target, Clock, CheckCircle, Star } from 'lucide-react';

const AutonomousBusinessProcessesBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-200 font-semibold text-sm">🚀 NEW JANUARY 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
              Autonomous Business Processes
            </span>
            <span className="text-3xl md:text-4xl text-blue-200 block mt-2">
              The 2026 Revolution
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with truly intelligent systems that independently manage, optimize, and evolve your business workflows. 
            Experience <strong className="text-yellow-300">85% process automation</strong> and <strong className="text-green-300">60% cost reduction</strong> with cutting-edge AI.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Self-Managing Workflows</h3>
            <p className="text-blue-100 leading-relaxed">
              AI systems that self-analyze, self-optimize, self-heal, and self-evolve without human intervention.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Orchestration</h3>
            <p className="text-blue-100 leading-relaxed">
              Multi-agent systems with predictive analytics and autonomous decision-making capabilities.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
            <p className="text-blue-100 leading-relaxed">
              Real-world implementations showing 85% automation, 60% cost reduction, and 95% quality improvement.
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 mb-16 border border-green-400/30">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">85%</div>
              <div className="text-green-100">Process Automation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">60%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-purple-100">Quality Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-yellow-100">Autonomous Operation</div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Blog Article */}
          <Link href="/blog/ai-powered-autonomous-business-processes-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-orange-300 font-semibold text-sm">FEATURED ARTICLE</div>
                  <div className="text-white font-bold text-lg">AI-Powered Autonomous Business Processes</div>
                </div>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Discover how AI-powered autonomous business processes are revolutionizing enterprise operations in 2026, 
                delivering unprecedented efficiency and strategic insights.
              </p>
              <div className="flex items-center text-yellow-300 group-hover:text-yellow-200 transition-colors">
                <span className="mr-2">Read the full article</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/global-manufacturing-autonomous-transformation" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-green-300 font-semibold text-sm">SUCCESS STORY</div>
                  <div className="text-white font-bold text-lg">Global Manufacturing Transformation</div>
                </div>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                See how a Fortune 500 manufacturer achieved 85% process automation and $75M annual savings 
                with our autonomous business process solution.
              </p>
              <div className="flex items-center text-yellow-300 group-hover:text-yellow-200 transition-colors">
                <span className="mr-2">View case study</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Implementation Guide CTA */}
        <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl p-8 mb-16 border border-purple-400/30">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get our comprehensive implementation guide with step-by-step instructions, best practices, 
              and proven methodologies for deploying autonomous business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/guides/autonomous-business-processes-implementation-guide-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                <Clock className="w-5 h-5 mr-2" />
                Get Implementation Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Proven Across Industries</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-green-300 font-bold text-lg mb-2">Financial Services</div>
              <div className="text-blue-200 text-sm">85% faster loan processing with autonomous decision-making</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-blue-300 font-bold text-lg mb-2">Manufacturing</div>
              <div className="text-blue-200 text-sm">30% cost reduction through autonomous supply chain optimization</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-purple-300 font-bold text-lg mb-2">Healthcare</div>
              <div className="text-blue-200 text-sm">95% accuracy in autonomous quality control and compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousBusinessProcessesBanner;