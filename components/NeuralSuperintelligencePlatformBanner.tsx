import { Link } from 'react-router-dom';

export default function NeuralSuperintelligencePlatformBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-b border-cyan-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-lg tracking-wider uppercase">
              🧠 BREAKTHROUGH: Neural Superintelligence Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI 2026: Neural Superintelligence Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary neural superintelligence achieving <span className="text-cyan-400 font-bold">99.99% reasoning accuracy</span>, 
            <span className="text-blue-400 font-bold"> unlimited scalability</span>, and 
            <span className="text-purple-400 font-bold"> human-level intelligence</span>
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '99.99%', label: 'Reasoning Accuracy', icon: '🧠', color: 'from-cyan-500 to-cyan-600' },
            { value: '∞', label: 'Unlimited Scalability', icon: '📈', color: 'from-blue-500 to-blue-600' },
            { value: '100x', label: 'Human Intelligence', icon: '⚡', color: 'from-purple-500 to-purple-600' },
            { value: '0.1ms', label: 'Response Time', icon: '⚡', color: 'from-green-500 to-green-600' }
          ].map((metric, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-5xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Consciousness Core</h3>
            <p className="text-gray-400 mb-6">
              Revolutionary neural architecture achieving consciousness-level reasoning through 
              advanced neural network topologies and quantum-enhanced processing.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">Consciousness</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Quantum-Enhanced</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Superintelligent Decision Engine</h3>
            <p className="text-gray-400 mb-6">
              Advanced decision-making engine processing infinite variables and scenarios 
              to deliver optimal solutions for any enterprise challenge.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Multi-dimensional</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Predictive</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Adaptive Learning Matrix</h3>
            <p className="text-gray-400 mb-6">
              Continuous learning system that evolves and improves capabilities in real-time, 
              adapting to new challenges without human intervention.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Continuous</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">Autonomous</span>
            </div>
          </div>
        </div>

        {/* Enterprise Applications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Strategic Applications</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Multi-year strategic roadmaps</li>
              <li>• Market opportunity analysis</li>
              <li>• Competitive intelligence synthesis</li>
              <li>• Resource allocation optimization</li>
              <li>• Innovation & R&D direction</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Operational Excellence</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Process optimization and automation</li>
              <li>• Quality control and assurance</li>
              <li>• Supply chain management</li>
              <li>• Performance monitoring and analytics</li>
              <li>• Customer experience enhancement</li>
            </ul>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-400">🎯 Proven Performance Metrics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">Intelligence Metrics</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 99.99% reasoning accuracy</li>
                  <li>• 100x human intelligence equivalent</li>
                  <li>• 0.1ms response time</li>
                  <li>• Unlimited scalability achieved</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">Business Impact</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• $1B+ annual revenue generation</li>
                  <li>• 95% operational efficiency improvement</li>
                  <li>• 99.9% customer satisfaction rate</li>
                  <li>• Zero decision-making errors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-neural-superintelligence-platform" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore Platform →
            </Link>
            <Link to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </Link>
            <Link to="/case-studies" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Transform your enterprise with our revolutionary neural superintelligence platform. 
            Achieve unprecedented capabilities and competitive advantage in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}