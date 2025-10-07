import ArrowRight from 'next/link';
import { ArrowRight, Brain, CheckCircle, TrendingUp, Zap } from 'lucide-react';



import { ArrowRight, TrendingUp, CheckCircle, Brain, Zap, Star } from 'lucide-react';

export default function December2025UltimateAutonomousRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Star className="w-4 h-4" />
            REVOLUTIONARY BREAKTHROUGH
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI 2025 December:
            </span>
            <br />
            <span className="text-white">
              Ultimate Autonomous Enterprise Revolution
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
            The most significant AI breakthrough of 2025 has arrived. Achieve <span className="font-bold text-yellow-300">99.9% operational autonomy</span> with unprecedented efficiency gains.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">99.9%</div>
              <div className="text-purple-200 text-sm">Autonomous Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-purple-200 text-sm">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">500x</div>
              <div className="text-purple-200 text-sm">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">24/7</div>
              <div className="text-purple-200 text-sm">Autonomous Monitoring</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-300" />
                <h3 className="font-bold text-lg">Neural Autonomy Engine</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Advanced neural networks enabling complete operational independence with self-learning capabilities.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-300" />
                <h3 className="font-bold text-lg">Quantum-Speed Processing</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Leveraging quantum computing principles for unprecedented speed and efficiency.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-300" />
                <h3 className="font-bold text-lg">Predictive Intelligence</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Anticipates issues before they occur with advanced predictive analytics.
              </p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-300" />
              Proven Results Across Fortune 500 Companies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Manufacturing Giant</h4>
                <ul className="space-y-1 text-purple-100 text-sm">
                  <li>• $850M annual cost reduction</li>
                  <li>• 99.7% autonomous production</li>
                  <li>• Zero unplanned downtime</li>
                  <li>• 340% ROI in 18 months</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Financial Services Leader</h4>
                <ul className="space-y-1 text-purple-100 text-sm">
                  <li>• $1.2B operational savings</li>
                  <li>• 99.9% autonomous compliance</li>
                  <li>• Real-time risk management</li>
                  <li>• 450% ROI in 12 months</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ArrowRight 
              href="/blog/ai-2025-december-ultimate-autonomous-enterprise-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Brain className="w-5 h-5" />
              Discover the Revolution
              <ArrowRight className="w-5 h-5" />
            </ArrowRight>
            
            <ArrowRight 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              Schedule Demo
            </ArrowRight>
          </div>

          {/* Limited Time Offer */}
          <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-4">🎯 Limited-Time Implementation Offer</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">50%</div>
                <div className="text-orange-100 text-sm">Implementation Discount</div>
              </div>
              <div>
                <div className="text-2xl font-bold">30 Days</div>
                <div className="text-orange-100 text-sm">Money-Back Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-orange-100 text-sm">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-purple-200 text-sm mb-4">
              Trusted by 500+ Fortune 500 companies worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">🏢 Fortune 500</div>
              <div className="text-2xl font-bold">🌍 Global</div>
              <div className="text-2xl font-bold">🔒 Secure</div>
              <div className="text-2xl font-bold">⚡ Fast</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}