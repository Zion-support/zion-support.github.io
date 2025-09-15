import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full text-white text-sm font-bold mb-6">
            🤖 ADVANCED ROBOTICS • 2026
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Next-Generation Robotics Revolution
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Experience the future of robotics with autonomous systems, humanoid robots, 
            and AI-powered automation that's transforming industries worldwide
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#overview" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Robotics →
            </a>
            <a href="#applications" className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors font-semibold">
              View Applications
            </a>
          </div>
        </motion.div>

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              🤖 The Future of Robotics is Here
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Revolutionary Capabilities</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-500 text-xl">✓</span>
                    <span>Autonomous decision-making and learning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-500 text-xl">✓</span>
                    <span>Human-robot collaboration and interaction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-500 text-xl">✓</span>
                    <span>Advanced computer vision and perception</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-500 text-xl">✓</span>
                    <span>Precision manipulation and dexterity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-500 text-xl">✓</span>
                    <span>Swarm intelligence and coordination</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impact & Benefits</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800">75% Efficiency Increase</h4>
                    <p className="text-slate-700">Robotic automation boosts manufacturing productivity</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-100 to-zinc-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">24/7 Operation</h4>
                    <p className="text-gray-700">Continuous operation without human intervention</p>
                  </div>
                  <div className="bg-gradient-to-r from-zinc-100 to-slate-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-zinc-800">$500B Market Value</h4>
                    <p className="text-zinc-700">Global robotics market projected to reach $500B by 2030</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            🚀 Advanced Robotics Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-500 to-gray-500 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4">Industrial Automation</h3>
              <p className="text-slate-100 mb-6">
                Advanced robotic systems for manufacturing, assembly, and quality control 
                with unprecedented precision and efficiency.
              </p>
              <ul className="text-slate-200 space-y-2 text-sm">
                <li>• Autonomous assembly lines</li>
                <li>• Quality inspection systems</li>
                <li>• Material handling robots</li>
                <li>• Predictive maintenance</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-500 to-zinc-500 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Medical Robotics</h3>
              <p className="text-gray-100 mb-6">
                Surgical robots and medical assistants providing precise, 
                minimally invasive procedures and patient care.
              </p>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>• Robotic surgery systems</li>
                <li>• Rehabilitation robots</li>
                <li>• Diagnostic assistants</li>
                <li>• Elderly care robots</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-zinc-500 to-slate-500 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4">Autonomous Vehicles</h3>
              <p className="text-zinc-100 mb-6">
                Self-driving cars, trucks, and drones revolutionizing transportation 
                and logistics with AI-powered navigation.
              </p>
              <ul className="text-zinc-200 space-y-2 text-sm">
                <li>• Self-driving cars</li>
                <li>• Autonomous drones</li>
                <li>• Delivery robots</li>
                <li>• Fleet management</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-600 to-gray-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-4">Service Robotics</h3>
              <p className="text-slate-100 mb-6">
                Humanoid and service robots for domestic, commercial, 
                and hospitality applications with natural interaction.
              </p>
              <ul className="text-slate-200 space-y-2 text-sm">
                <li>• Domestic assistants</li>
                <li>• Customer service robots</li>
                <li>• Security robots</li>
                <li>• Entertainment robots</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-600 to-zinc-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-4">Underwater Robotics</h3>
              <p className="text-gray-100 mb-6">
                Autonomous underwater vehicles for exploration, maintenance, 
                and research in challenging marine environments.
              </p>
              <ul className="text-gray-200 space-y-2 text-sm">
                <li>• Ocean exploration</li>
                <li>• Underwater maintenance</li>
                <li>• Marine research</li>
                <li>• Search and rescue</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-zinc-600 to-slate-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space Robotics</h3>
              <p className="text-zinc-100 mb-6">
                Robotic systems for space exploration, satellite maintenance, 
                and planetary research missions.
              </p>
              <ul className="text-zinc-200 space-y-2 text-sm">
                <li>• Mars rovers</li>
                <li>• Satellite repair</li>
                <li>• Space station maintenance</li>
                <li>• Asteroid mining</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">
              🛠️ Advanced Robotics Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-300 text-sm">
                  Deep learning for perception, decision-making, and adaptation
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                <p className="text-gray-300 text-sm">
                  Advanced imaging and recognition systems for environment understanding
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">Actuators & Sensors</h3>
                <p className="text-gray-300 text-sm">
                  High-precision motors, sensors, and control systems
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-2">IoT Integration</h3>
                <p className="text-gray-300 text-sm">
                  Connected systems for remote monitoring and control
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Humanoid Robotics */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              👤 The Rise of Humanoid Robots
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Advanced Humanoid Features</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-gray-800">Natural Movement</h4>
                    <p className="text-gray-600 text-sm">Bipedal locomotion with human-like gait and balance</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-gray-800">Facial Expressions</h4>
                    <p className="text-gray-600 text-sm">Emotional intelligence and natural communication</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-gray-800">Voice Interaction</h4>
                    <p className="text-gray-600 text-sm">Natural language processing and speech synthesis</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Applications</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Elderly Care</h4>
                      <p className="text-gray-600 text-sm">Assistance with daily activities and companionship</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Education</h4>
                      <p className="text-gray-600 text-sm">Interactive teaching and learning assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-zinc-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Entertainment</h4>
                      <p className="text-gray-600 text-sm">Performances, shows, and interactive experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">
              🌟 The Future of Robotics
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">2026-2030 Roadmap</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold">General Purpose Robots</h4>
                      <p className="text-slate-200 text-sm">Robots capable of multiple tasks and environments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold">Emotional Intelligence</h4>
                      <p className="text-slate-200 text-sm">Robots with advanced emotional understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold">Swarm Intelligence</h4>
                      <p className="text-slate-200 text-sm">Coordinated robot swarms for complex tasks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Market Impact</h3>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-semibold">$500B Market Size</h4>
                    <p className="text-slate-200 text-sm">Global robotics market by 2030</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-semibold">50M Jobs Created</h4>
                    <p className="text-slate-200 text-sm">New jobs in robotics and AI sectors</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-semibold">90% Automation</h4>
                    <p className="text-slate-200 text-sm">Manufacturing processes automated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Embrace the Robotics Revolution?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover how advanced robotics can transform your business, 
              improve efficiency, and create new opportunities for growth and innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/contact" className="bg-white text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors font-semibold">
                Get Started Today
              </a>
              <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-600 transition-colors font-semibold">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;