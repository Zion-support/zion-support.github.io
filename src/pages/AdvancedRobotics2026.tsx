import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-gray-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-700 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Revolutionary robotics solutions transforming industries and reshaping the future of work with 
              AI-powered autonomous systems, humanoid robots, and precision manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Robotics →
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">AI-Powered Autonomous Robots</h3>
            <p className="text-gray-600 mb-6 text-center">
              Intelligent robots with advanced AI capabilities for autonomous operation and decision-making
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Machine learning algorithms</li>
              <li>• Computer vision systems</li>
              <li>• Natural language processing</li>
              <li>• Predictive maintenance</li>
            </ul>
<<<<<<< HEAD
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-200"
          >
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Medical Robotics</h3>
            <p className="text-gray-600 mb-6">
              Surgical and therapeutic robots that enhance medical procedures with precision, safety, and improved patient outcomes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Surgical assistance</li>
              <li>• Rehabilitation therapy</li>
              <li>• Diagnostic procedures</li>
              <li>• Patient care</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-200"
          >
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Service Robotics</h3>
            <p className="text-gray-600 mb-6">
              Intelligent service robots for domestic, commercial, and public applications that enhance daily life and productivity.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Domestic assistance</li>
              <li>• Customer service</li>
              <li>• Security patrol</li>
              <li>• Delivery services</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌐 Industry Applications</h2>
            <p className="text-xl text-slate-100">Transforming industries through intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-slate-100">Automated production and quality control</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-slate-100">Surgical assistance and patient care</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Transportation</h3>
              <p className="text-slate-100">Autonomous vehicles and logistics</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Home & Office</h3>
              <p className="text-slate-100">Personal assistance and automation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">⚙️ Advanced Technology Stack</h2>
          <p className="text-xl text-gray-600">Cutting-edge technologies powering next-generation robotics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">AI & ML</h3>
            <p className="text-sm text-gray-600">Machine learning algorithms and neural networks</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="text-3xl mb-3">👁️</div>
            <h3 className="text-lg font-bold text-green-600 mb-2">Computer Vision</h3>
            <p className="text-sm text-gray-600">Advanced image processing and recognition</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">Robotics</h3>
            <p className="text-sm text-gray-600">Mechanical systems and actuators</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold text-orange-600 mb-2">IoT Integration</h3>
            <p className="text-sm text-gray-600">Connected systems and data exchange</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Automate Your Future?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover how our advanced robotics solutions can transform your operations and unlock new possibilities for growth and innovation
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Get Started →
          </a>
          <a href="/pages/AdvancedTechSolutions2026" className="border border-slate-600 text-slate-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors">
            View All Solutions
          </a>
        </div>
=======
            <a href="/pages/AIAutonomousRobots2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore AI Robots →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">👤</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Humanoid Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced humanoid robots designed for human interaction and complex tasks
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Human-like movement</li>
              <li>• Emotional intelligence</li>
              <li>• Social interaction capabilities</li>
              <li>• Service and assistance roles</li>
            </ul>
            <a href="/pages/HumanoidRobotics2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Humanoids →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Industrial Automation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Precision manufacturing robots for industrial applications and production optimization
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Precision manufacturing</li>
              <li>• Quality control systems</li>
              <li>• Assembly line automation</li>
              <li>• Material handling</li>
            </ul>
            <a href="/pages/IndustrialAutomation2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Automation →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Medical Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Surgical and medical robots for precision healthcare and patient care
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Surgical precision robots</li>
              <li>• Rehabilitation assistance</li>
              <li>• Diagnostic imaging robots</li>
              <li>• Patient care automation</li>
            </ul>
            <a href="/pages/MedicalRobotics2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Medical →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Agricultural Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Smart farming robots for sustainable agriculture and food production
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Precision farming robots</li>
              <li>• Crop monitoring systems</li>
              <li>• Harvesting automation</li>
              <li>• Soil analysis robots</li>
            </ul>
            <a href="/pages/AgriculturalRobotics2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Agriculture →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚗</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Autonomous Vehicles</h3>
            <p className="text-gray-600 mb-6 text-center">
              Self-driving vehicles with advanced navigation and safety systems
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Advanced navigation systems</li>
              <li>• Safety and collision avoidance</li>
              <li>• Traffic optimization</li>
              <li>• Electric vehicle integration</li>
            </ul>
            <a href="/pages/AutonomousVehicles2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Vehicles →
            </a>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-slate-600/10 to-gray-600/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Robotics Impact Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-700 mb-2">Precision Rate</div>
              <div className="text-sm text-gray-500">Industrial automation accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">50%</div>
              <div className="text-lg text-gray-700 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">Manufacturing efficiency gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">24/7</div>
              <div className="text-lg text-gray-700 mb-2">Operation</div>
              <div className="text-sm text-gray-500">Continuous production capability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">0%</div>
              <div className="text-lg text-gray-700 mb-2">Error Rate</div>
              <div className="text-sm text-gray-500">AI-powered quality control</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Automate Your Future?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how our advanced robotics solutions can transform your business and revolutionize your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Automation Journey →
            </button>
            <button className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-8799
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;
