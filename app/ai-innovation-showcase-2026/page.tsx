import React from 'react';
import { Brain, Zap, Target, Globe, Cpu, Database, Shield, TrendingUp, Users, Award, ArrowRight, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AIInnovationShowcase2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Latest AI Innovations 2026
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🚀 Revolutionary AI Technology Showcase
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover the cutting-edge AI technologies that are reshaping industries, 
              revolutionizing human-computer interaction, and unlocking unprecedented possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Innovations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Breakthrough AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum-Enhanced Neural Networks
              </h3>
              <p className="text-gray-600 mb-6">
                Revolutionary AI systems that leverage quantum computing for 10,000x faster processing 
                and unprecedented pattern recognition capabilities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Real-time complex problem solving
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  99.7% accuracy improvement
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Petabyte-scale data processing
                </div>
              </div>
            </div>

            {/* Innovation 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Autonomous AI Ecosystems
              </h3>
              <p className="text-gray-600 mb-6">
                Self-evolving AI systems that design, test, and deploy their own improvements, 
                creating adaptive intelligence that grows more capable over time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Self-modifying algorithms
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Continuous learning
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Zero human intervention
                </div>
              </div>
            </div>

            {/* Innovation 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Multimodal Intelligence Fusion
              </h3>
              <p className="text-gray-600 mb-6">
                AI systems that seamlessly integrate vision, language, audio, and sensor data 
                for comprehensive understanding of complex environments.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Human-like perception
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Immersive experiences
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Intelligent surveillance
                </div>
              </div>
            </div>

            {/* Innovation 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Security & Governance
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced security frameworks and governance systems that ensure AI systems 
                operate safely, ethically, and in compliance with regulations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Ethical AI deployment
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Regulatory compliance
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Threat detection
                </div>
              </div>
            </div>

            {/* Innovation 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Edge AI Acceleration
              </h3>
              <p className="text-gray-600 mb-6">
                Ultra-fast AI processing at the edge, enabling real-time decision-making 
                and reducing latency to milliseconds.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Millisecond response times
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Offline capabilities
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Reduced bandwidth usage
                </div>
              </div>
            </div>

            {/* Innovation 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global AI Orchestration
              </h3>
              <p className="text-gray-600 mb-6">
                Intelligent systems that coordinate AI resources across multiple locations, 
                optimizing performance and ensuring seamless global operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Global coordination
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Resource optimization
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Seamless integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI technologies are transforming industries worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                99.7% diagnostic accuracy with AI-powered medical imaging and treatment optimization
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                500% productivity increase with autonomous production lines and predictive maintenance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Finance</h3>
              <p className="text-gray-600 text-sm">
                300% risk reduction with quantum-enhanced trading algorithms and fraud detection
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Cities</h3>
              <p className="text-gray-600 text-sm">
                200% efficiency gains with AI-driven urban planning and autonomous transportation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our AI technologies have delivered measurable impact across all industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$4.3B</div>
              <div className="text-lg opacity-90">Total Value Created</div>
              <div className="text-sm opacity-75 mt-2">Across all client implementations</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500%</div>
              <div className="text-lg opacity-90">Average ROI</div>
              <div className="text-sm opacity-75 mt-2">Within first 6 months</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.7%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
              <div className="text-sm opacity-75 mt-2">Across all AI systems</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">47</div>
              <div className="text-lg opacity-90">Countries Served</div>
              <div className="text-sm opacity-75 mt-2">Global presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the AI revolution and discover how our cutting-edge technologies can accelerate your growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}