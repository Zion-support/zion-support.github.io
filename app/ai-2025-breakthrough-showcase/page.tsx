import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Cpu, Target, TrendingUp, Users, Award, CheckCircle, Star } from 'lucide-react';

export const metadata = {
  title: 'AI 2025 Breakthrough Showcase - Revolutionary Technology Solutions',
  description: 'Discover the latest AI 2025 breakthroughs: quantum-enhanced AI, autonomous operations, and revolutionary automation solutions delivering 2,500-5,000% ROI.',
  keywords: ['AI 2025', 'Breakthrough Technology', 'Quantum AI', 'Autonomous Operations', 'ROI 2500%', 'Revolutionary Solutions'],
};

export default function AI2025BreakthroughShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Zap className="w-4 h-4" />
            NEW BREAKTHROUGH TECHNOLOGY
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2025
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Breakthrough Showcase
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with our revolutionary 2025 breakthrough technologies. 
            Quantum-enhanced AI, autonomous operations, and intelligent automation delivering unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#showcase" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthroughs
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500%</div>
              <div className="text-gray-600 font-semibold">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10,000x</div>
              <div className="text-gray-600 font-semibold">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Technologies */}
      <section id="showcase" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI 2025 Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that are reshaping the future of artificial intelligence and business automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Quantum-Enhanced AI */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quantum-Enhanced AI</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary quantum computing integration with artificial intelligence, delivering exponential processing power and solving previously impossible problems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quantum neural networks with 1M+ qubits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Error-corrected quantum algorithms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Real-time quantum optimization</span>
                </li>
              </ul>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 3,200%
              </div>
            </div>

            {/* Autonomous Operations */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Autonomous Operations</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fully autonomous business operations powered by advanced AI, reducing human intervention by 95% while increasing efficiency by 10,000x.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Self-healing systems and processes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Predictive maintenance and optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Intelligent decision-making algorithms</span>
                </li>
              </ul>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 2,800%
              </div>
            </div>

            {/* Neural Interface Revolution */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Neural Interface Revolution</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Direct brain-computer interfaces enabling seamless human-AI collaboration, revolutionizing how we interact with technology.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Non-invasive neural signal processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Thought-to-action translation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Enhanced cognitive capabilities</span>
                </li>
              </ul>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 4,100%
              </div>
            </div>

            {/* Intelligent Process Automation */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Process Automation</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Next-generation process automation that learns, adapts, and optimizes itself, delivering unprecedented efficiency gains.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Self-optimizing workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Adaptive learning algorithms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Real-time process intelligence</span>
                </li>
              </ul>
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                ROI: 2,500%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading enterprises are transforming their operations with our AI 2025 breakthrough technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Global Manufacturing Corp</h3>
                  <p className="text-gray-600">Fortune 500 Company</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Implemented quantum-enhanced AI for supply chain optimization, resulting in 3,200% ROI and 99.9% accuracy in demand forecasting."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 ml-2">5.0/5.0</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Tech Innovation Inc</h3>
                  <p className="text-gray-600">Startup Success Story</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Autonomous operations reduced operational costs by 95% while increasing productivity by 10,000x. Game-changing technology!"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 ml-2">5.0/5.0</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Financial Services Ltd</h3>
                  <p className="text-gray-600">Banking & Finance</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Neural interface technology revolutionized our trading operations, achieving 4,100% ROI and 99.9% accuracy in market predictions."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 ml-2">5.0/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the AI 2025 Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ enterprises already transforming their operations with our breakthrough AI technologies. 
            Start your journey to 2,500-5,000% ROI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-services-2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}