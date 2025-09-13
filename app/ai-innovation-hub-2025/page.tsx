import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Users, TrendingUp, Shield, Globe, Star, Sparkles, Target, Rocket } from 'lucide-react';

export default function AIInnovationHub2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <SEO
        title="AI Innovation Hub 2025 - Revolutionary AI Solutions | Zion Tech Group"
        description="Discover cutting-edge AI solutions, machine learning platforms, and intelligent automation tools that are transforming businesses worldwide in 2025."
        keywords="AI solutions 2025, machine learning, artificial intelligence, AI automation, business intelligence, AI consulting"
        url="/ai-innovation-hub-2025"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI INNOVATION HUB 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revolutionary
              <span className="block bg-gradient-to-r from-yellow-300 to-cyan-300 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, machine learning, and automation solutions that deliver unprecedented results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/success-stories"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to accelerate your digital transformation and drive measurable business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Business Process Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Business Process Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automate complex business processes with intelligent AI agents that learn, adapt, and optimize operations in real-time.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  Reduce operational costs by 40-60%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Increase productivity by 300%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  ROI within 3 months
                </div>
              </div>
              
              <div className="text-2xl font-bold text-purple-600 mb-4">$299/month</div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* AI Content Generation Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Generation Platform</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Generate high-quality, SEO-optimized content at scale with AI that understands your brand voice and industry context.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  Save 80% on content creation time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Improve SEO rankings by 200%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  Consistent brand messaging
                </div>
              </div>
              
              <div className="text-2xl font-bold text-cyan-600 mb-4">$199/month</div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* AI Customer Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Customer Behavior Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deep insights into customer behavior with predictive analytics and personalized engagement strategies.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  Increase retention by 35%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Boost lifetime value by 200%
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  Reduce churn by 50%
                </div>
              </div>
              
              <div className="text-2xl font-bold text-green-600 mb-4">$449/month</div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Features */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the latest in artificial intelligence technology with our cutting-edge platforms and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Next-Generation AI Technology
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Deep Learning Models</h4>
                    <p className="text-gray-600">Advanced neural networks that continuously learn and improve from your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                    <p className="text-gray-600">Bank-grade security with end-to-end encryption and compliance standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Scalability</h4>
                    <p className="text-gray-600">Cloud-native architecture that scales with your business needs worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-time Processing</h4>
                    <p className="text-gray-600">Instant insights and responses with sub-second processing capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses already leveraging our AI solutions to drive innovation and growth.
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              Transform your business with our revolutionary AI solutions. Get started today with a free consultation and discover how AI can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-purple-50 transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                href="/success-stories"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}