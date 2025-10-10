import React from 'react';
import { Brain, Zap, Target, BarChart, Shield, Database, Navigation, Zap, Target, Shield } from 'lucide-react';

const AINeuralMemoryAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Navigation */}</div>
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4"></div>
          <div className="flex items-center justify-between h-16"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span><a href="/contact" className="cyber-button px-4 py-2 text-sm">Get Started</a>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center"></section>
          <div className="max-w-4xl mx-auto"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Neural Memory Assistant</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">Enhance your cognitive capabilities with our advanced AI neural memory system that learns, remembers, and assists you with perfect recall and intelligent insights.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Enhance Your Memory<a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">View Demo</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Neural Memory Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of AI-enhanced memory with advanced neural networks and cognitive assistance.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Brain className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Neural Learning</h3><p className="text-gray-300">Advanced neural networks that learn from your patterns and preferences to provide personalized memory assistance.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Database className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Perfect Recall</h3><p className="text-gray-300">Instantly retrieve any information from your digital memory with perfect accuracy and context.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Target className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Contextual Reminders</h3><p className="text-gray-300">Smart reminders that appear at the perfect moment based on your current context and priorities.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-4"></div>
                <BarChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Memory Analytics</h3><p className="text-gray-300">Detailed insights into your memory patterns and cognitive performance over time.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Zap className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Instant Access</h3><p className="text-gray-300">Lightning-fast access to any stored information with natural language queries.</p>
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
                <Shield className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3">Privacy Protection</h3><p className="text-gray-300">Advanced encryption and privacy controls to keep your personal memories secure.</p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Memory Enhancement Pricing</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect memory enhancement plan for your cognitive needs.</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Memory Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49</div><span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Basic memory storage</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Simple reminders</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Text search</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Email support<a href="/contact" className="w-full cyber-button px-6 py-3 text-center block">Get Started</a>
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-lg p-8 relative"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span><h3 className="text-2xl font-bold text-white mb-4">Memory Pro</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99</div><span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Advanced neural learning</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Contextual reminders</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Voice commands</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Memory analytics</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Priority support<a href="/contact" className="w-full cyber-button px-6 py-3 text-center block">Get Started</a>
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Memory Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199</div><span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Full neural network access</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Team collaboration</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Custom AI models</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >24/7 dedicated support</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >On-premise deployment<a href="/contact" className="w-full cyber-button px-6 py-3 text-center block">Contact Sales</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center"></section>
          <div className="max-w-4xl mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Enhance Your Memory?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of users who have enhanced their cognitive capabilities with AI neural memory assistance.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Memory Enhancement<a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Schedule Demo</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-400/20 py-12">
        <div className="container mx-auto px-4 text-center"></div>
          <div className="flex items-center justify-center space-x-2 mb-4"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center"></div>
              <Brain className="w-5 h-5 text-white" />
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span><p className="text-gray-300 mb-4">Leading provider of AI-powered enterprise solutions and neural memory enhancement technology.</p>
          </p>
          <div className="flex justify-center space-x-6"></div>
            <a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy<a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service<a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AINeuralMemoryAssistantPage;