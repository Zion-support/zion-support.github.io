import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span className="animate-pulse">🤖</span>
            <span>ADVANCED ROBOTICS 2026</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Advanced Robotics Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of intelligent robots that can think, learn, and adapt 
            to any environment, revolutionizing industries and transforming human-robot collaboration.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence</h3>
            <p className="text-gray-300">
              Advanced AI systems that enable robots to understand context, make decisions, 
              and learn from experience in real-time.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🦾</div>
            <h3 className="text-2xl font-bold mb-4">Humanoid Design</h3>
            <p className="text-gray-300">
              Human-like robots with advanced dexterity, mobility, and social interaction 
              capabilities for seamless human-robot collaboration.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Operation</h3>
            <p className="text-gray-300">
              Fully autonomous robots that can navigate complex environments, make decisions, 
              and complete tasks without human intervention.
            </p>
          </div>
        </div>

        {/* Technology Deep Dive */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Robotics Technology
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">🤖 Advanced Mechanics</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Precision actuators with micro-millimeter accuracy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Flexible joints with 360-degree rotation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Self-healing materials for durability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Modular design for easy customization</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">🧠 AI & Machine Learning</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Computer vision with 360-degree perception</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Natural language processing and understanding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Reinforcement learning for skill acquisition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Predictive analytics for maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Transformative Applications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-400/30">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-4">Manufacturing & Industry</h3>
              <p className="text-gray-300 text-sm">
                Autonomous manufacturing robots that can adapt to new products, perform 
                quality control, and optimize production processes in real-time.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-4">Healthcare & Medical</h3>
              <p className="text-gray-300 text-sm">
                Surgical robots with precision control, rehabilitation assistants, and 
                patient care robots that provide 24/7 monitoring and support.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-400/30">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-4">Home & Personal Care</h3>
              <p className="text-gray-300 text-sm">
                Domestic robots that can clean, cook, provide companionship, and assist 
                with daily tasks, making life easier and more convenient.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-400/30">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-4">Transportation & Logistics</h3>
              <p className="text-gray-300 text-sm">
                Autonomous delivery robots, warehouse automation systems, and robotic 
                vehicles for efficient transportation and logistics operations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-2xl p-8 border border-red-400/30">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-4">Research & Exploration</h3>
              <p className="text-gray-300 text-sm">
                Research robots for space exploration, deep-sea exploration, and scientific 
                research in extreme environments where humans cannot go.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 border border-indigo-400/30">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-4">Education & Training</h3>
              <p className="text-gray-300 text-sm">
                Educational robots that can teach, demonstrate concepts, and provide 
                interactive learning experiences for students of all ages.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 mb-16 border border-blue-400/30">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">🤖 Physical Capabilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Height Range</span>
                  <span className="text-white font-semibold">1.2m - 2.0m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Weight Capacity</span>
                  <span className="text-white font-semibold">50kg - 200kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Movement Speed</span>
                  <span className="text-white font-semibold">5 m/s max</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Precision</span>
                  <span className="text-white font-semibold">±0.1mm</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-300">🧠 AI & Processing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Processing Power</span>
                  <span className="text-white font-semibold">100+ TOPS</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Memory</span>
                  <span className="text-white font-semibold">32GB+ RAM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Battery Life</span>
                  <span className="text-white font-semibold">8-12 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Learning Rate</span>
                  <span className="text-green-400 font-semibold">Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Ethics */}
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl p-12 mb-16 border border-green-400/30">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Safety & Ethical Standards
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-300">🛡️ Safety Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Collision detection and avoidance systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Emergency stop mechanisms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Human-robot interaction safety protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Regular safety inspections and maintenance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-300">⚖️ Ethical Guidelines</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Transparent AI decision-making processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Privacy protection and data security</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Human oversight and control mechanisms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Fair and unbiased AI algorithms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Experience the Future of Robotics
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how advanced robotics can transform your business, enhance productivity, 
            and create new possibilities for human-robot collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;