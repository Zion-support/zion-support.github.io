import React from 'react';
import { Brain, Target, BarChart, Users, Settings, Navigation, Target, Users, Cube } from 'lucide-react';

const AIHolographicWorkspacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Navigation */}</div>
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group<a href="/contact" className="cyber-button px-4 py-2 text-sm">Get Started</a>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Holographic Workspace</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">Step into the future with our immersive 3D holographic workspace that revolutionizes how you interact with digital content and collaborate with your team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Enter Holographic Space<a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">View Demo</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Immersive 3D Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the next generation of workspace technology with holographic displays and spatial computing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Cube className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3"> className="text-gray-300"</h3>
            <p className="text-gray-300">Interact with your data and applications in full 3D space using advanced holographic projection technology.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3"> className="text-gray-300"</h3>
            <p className="text-gray-300">Meet and collaborate with team members in shared virtual spaces with realistic avatars and spatial audio.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3"> className="text-gray-300"</h3>
            <p className="text-gray-300">Control your workspace with natural hand gestures and eye tracking for intuitive interaction.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3"> className="text-gray-300"</h3>
            <p className="text-gray-300">Visualize complex data sets in 3D space for better understanding and analysis.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3"> className="text-gray-300"</h3>
            <p className="text-gray-300">Intelligent AI assistant that understands spatial context and provides contextual help.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold text-white mb-3"> className="text-gray-300"</h3>
            <p className="text-gray-300">Personalize your holographic workspace with custom themes, layouts, and virtual objects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Holographic Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the perfect holographic workspace plan for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Holographic Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Basic 3D workspace</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Gesture controls</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Up to 5 virtual screens</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Email support<a href="/contact" className="w-full cyber-button px-6 py-3 text-center block">Get Started</a>
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular<h3 className="text-2xl font-bold text-white mb-4">Holographic Pro</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399<span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Advanced 3D workspace</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Multi-user collaboration</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Unlimited virtual screens</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >AI spatial assistant</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Priority support<a href="/contact" className="w-full cyber-button px-6 py-3 text-center block">Get Started</a>
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Holographic Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799<span className="text-lg text-gray-400">/month</span>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Full holographic suite</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Enterprise collaboration</Check>
                </Check>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" >Custom virtual environments</Check>
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
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Enter the Holographic Future?</h2>
            <p className="text-xl text-gray-300 mb-8">Join the revolution in workspace technology and experience productivity like never before.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Your Holographic Journey<a href="/demo" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Schedule Demo</a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-400/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group<p className="text-gray-300 mb-4">Leading provider of AI-powered enterprise solutions and holographic workspace technology.</p>
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy<a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service<a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIHolographicWorkspacePage;