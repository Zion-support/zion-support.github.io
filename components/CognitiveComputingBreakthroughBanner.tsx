import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users } from 'lucide-react';

export default function CognitiveComputingBreakthroughBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-3 mb-6">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-bold">COGNITIVE COMPUTING BREAKTHROUGH 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Human-Level Reasoning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Now Achievable
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            For the first time in history, AI systems have achieved human-level reasoning capabilities. 
            Discover how cognitive computing is revolutionizing decision-making, problem-solving, and enterprise intelligence.
          </p>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">98%</div>
              <div className="text-gray-300 font-semibold">Decision Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-300 mb-2">$25M+</div>
              <div className="text-gray-300 font-semibold">Value Creation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-300 mb-2">10x</div>
              <div className="text-gray-300 font-semibold">Faster Problem Solving</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-gray-300 font-semibold">Continuous Intelligence</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Revolutionary Capabilities</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Contextual Understanding</h4>
                  <p className="text-gray-300">
                    Advanced natural language processing that enables AI systems to understand nuances, 
                    implications, and hidden meanings in complex scenarios.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Multi-Dimensional Reasoning</h4>
                  <p className="text-gray-300">
                    Sophisticated reasoning engines that evaluate multiple factors simultaneously, 
                    consider long-term consequences, and balance competing priorities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Abstract Thinking</h4>
                  <p className="text-gray-300">
                    The ability to work with abstract concepts, metaphors, and hypothetical scenarios, 
                    enabling creative problem-solving approaches.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Emotional Intelligence</h4>
                  <p className="text-gray-300">
                    Advanced sentiment analysis and emotional reasoning that allows AI systems to 
                    understand and respond appropriately to human emotions and social contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Success Stories */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">SUCCESS STORY</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">Fortune 500 Financial Services</h4>
              <p className="text-gray-300 text-sm mb-4">
                Achieved 98% accuracy in complex financial risk assessment and $25M value creation 
                through optimized investment strategies.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">98%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">$25M</div>
                  <div className="text-xs text-gray-400">Value</div>
                </div>
              </div>
              <Link to="/case-studies/ai-cognitive-computing-success-2026"
                className="inline-flex items-center text-cyan-300 font-semibold hover:text-white transition-colors"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">Cognitive Computing Breakthrough</h4>
              <p className="text-gray-300 text-sm mb-4">
                Discover the revolutionary AI breakthrough that achieves human-level reasoning, 
                decision-making, and problem-solving capabilities.
              </p>
              <Link to="/blog/ai-cognitive-computing-breakthrough-2026"
                className="inline-flex items-center text-cyan-300 font-semibold hover:text-white transition-colors"
              >
                Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Industry Transformations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Healthcare Revolution</h4>
              <p className="text-gray-300 mb-4">
                Cognitive AI systems are revolutionizing medical diagnosis, treatment planning, 
                and drug discovery with human-level reasoning capabilities.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Diagnosis Accuracy</span>
                  <span className="text-green-300 font-semibold">95%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Drug Discovery Speed</span>
                  <span className="text-green-300 font-semibold">+60%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Financial Services</h4>
              <p className="text-gray-300 mb-4">
                Cognitive computing is transforming risk assessment, fraud detection, 
                and investment strategy with unprecedented accuracy and speed.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fraud Detection</span>
                  <span className="text-green-300 font-semibold">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">False Positives</span>
                  <span className="text-green-300 font-semibold">-50%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Enterprise Automation</h4>
              <p className="text-gray-300 mb-4">
                Autonomous decision-making systems for complex enterprise operations 
                with human-level reasoning and continuous improvement.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Decision Speed</span>
                  <span className="text-green-300 font-semibold">10x</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Process Efficiency</span>
                  <span className="text-green-300 font-semibold">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of human-level AI reasoning. Our expert team can help you implement 
              cognitive computing systems that deliver measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog/ai-cognitive-computing-breakthrough-2026"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Read Full Article
              </Link>
              <Link to="/services/ai-cognitive-computing"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}