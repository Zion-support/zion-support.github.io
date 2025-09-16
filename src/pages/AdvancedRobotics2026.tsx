import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  const [activeRobot, setActiveRobot] = useState('humanoid');
  const [animationFrame, setAnimationFrame] = useState(0);

  const robotTypes = {
    'humanoid': {
      title: "Humanoid Robots",
      description: "AI-powered human-like robots for complex tasks",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      capabilities: [
        "Natural human interaction",
        "Complex problem solving",
        "Emotional intelligence",
        "Physical dexterity"
      ]
    },
    'industrial': {
      title: "Industrial Automation",
      description: "Advanced manufacturing and production robots",
      icon: "🏭",
      color: "from-orange-500 to-red-500",
      capabilities: [
        "Precision manufacturing",
        "Quality control",
        "Predictive maintenance",
        "Flexible production"
      ]
    },
    'medical': {
      title: "Medical Robots",
      description: "Surgical and healthcare assistance robots",
      icon: "🏥",
      color: "from-green-500 to-emerald-500",
      capabilities: [
        "Minimally invasive surgery",
        "Patient monitoring",
        "Drug delivery",
        "Rehabilitation therapy"
      ]
    },
    'service': {
      title: "Service Robots",
      description: "Robots for everyday service and assistance",
      icon: "🛎️",
      color: "from-purple-500 to-pink-500",
      capabilities: [
        "Customer service",
        "Household assistance",
        "Elderly care",
        "Education support"
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 60);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
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
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;