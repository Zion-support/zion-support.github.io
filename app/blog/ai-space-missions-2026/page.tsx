import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle, TrendingUp, Users, Rocket, Satellite, Globe } from 'lucide-react';

export const metadata = {
  title: 'AI Space Missions 2026: Autonomous Space Operations & Deep Space Intelligence',
  description: 'Revolutionary AI space technology for autonomous missions, deep space exploration, and orbital operations with 99.9% reliability and $500M+ savings.',
  keywords: 'AI space missions, autonomous space operations, deep space AI, space technology, orbital AI, space exploration',
};

export default function AISpaceMissions2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
          <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            REVOLUTIONARY
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Space Missions 2026: Autonomous Space Operations & Deep Space Intelligence
        </h1>
        <div className="flex items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>32 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            <span>Space Technology</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>Published Jan 20, 2026</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100">Mission Reliability</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">$500M+</div>
            <div className="text-blue-100">Cost Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">1000x</div>
            <div className="text-blue-100">Faster Processing</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Autonomous Operations</div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          The space industry is experiencing an unprecedented transformation with AI-powered autonomous missions that are revolutionizing deep space exploration, orbital operations, and interplanetary travel. This comprehensive guide explores the cutting-edge AI technologies that are making space missions more reliable, cost-effective, and autonomous than ever before.
        </p>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          From autonomous spacecraft navigation to real-time mission optimization, AI is enabling space agencies and private companies to achieve mission success rates of 99.9% while reducing costs by over $500M annually. These technologies are not just science fiction—they're operational today.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <a href="#autonomous-navigation" className="block text-blue-600 hover:text-blue-800 transition-colors">1. Autonomous Spacecraft Navigation</a>
            <a href="#deep-space-ai" className="block text-blue-600 hover:text-blue-800 transition-colors">2. Deep Space AI Systems</a>
            <a href="#orbital-operations" className="block text-blue-600 hover:text-blue-800 transition-colors">3. Orbital Operations Automation</a>
            <a href="#mission-optimization" className="block text-blue-600 hover:text-blue-800 transition-colors">4. Real-time Mission Optimization</a>
          </div>
          <div className="space-y-2">
            <a href="#quantum-space-ai" className="block text-blue-600 hover:text-blue-800 transition-colors">5. Quantum-Enhanced Space AI</a>
            <a href="#interplanetary-communication" className="block text-blue-600 hover:text-blue-800 transition-colors">6. Interplanetary Communication</a>
            <a href="#case-studies" className="block text-blue-600 hover:text-blue-800 transition-colors">7. Mission Success Stories</a>
            <a href="#future-missions" className="block text-blue-600 hover:text-blue-800 transition-colors">8. Future Space Missions</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <section id="autonomous-navigation" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Autonomous Spacecraft Navigation</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Autonomous navigation represents the cornerstone of modern space missions. AI-powered systems can now navigate spacecraft through complex orbital mechanics, avoid space debris, and make real-time course corrections without human intervention.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Key Navigation Technologies</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Neural Trajectory Optimization:</strong> AI algorithms that calculate optimal flight paths in real-time, reducing fuel consumption by 40%
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Autonomous Collision Avoidance:</strong> Machine learning systems that detect and avoid space debris with 99.9% accuracy
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Real-time Orbital Mechanics:</strong> Quantum-enhanced calculations for precise orbital positioning and station-keeping
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Adaptive Mission Planning:</strong> AI systems that adjust mission parameters based on real-time conditions and objectives
                </div>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Navigation Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span>99.9% navigation accuracy</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span>40% fuel efficiency improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span>0.1m positioning precision</span>
                </li>
                <li className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span>Real-time course corrections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Satellite className="w-5 h-5 text-blue-600" />
                  <span>Autonomous emergency protocols</span>
                </li>
                <li className="flex items-center gap-3">
                  <Satellite className="w-5 h-5 text-blue-600" />
                  <span>Redundant AI systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <Satellite className="w-5 h-5 text-blue-600" />
                  <span>Predictive failure detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Satellite className="w-5 h-5 text-blue-600" />
                  <span>Self-healing capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="deep-space-ai" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Deep Space AI Systems</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Deep space missions require AI systems that can operate independently for years, making critical decisions with minimal communication delays. These systems must be robust, self-repairing, and capable of adapting to unforeseen circumstances.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Deep Space AI Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Autonomous Operations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 5+ year autonomous operation</li>
                  <li>• Self-diagnosis and repair</li>
                  <li>• Adaptive mission planning</li>
                  <li>• Resource management optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Scientific Capabilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Real-time data analysis</li>
                  <li>• Hypothesis generation</li>
                  <li>• Experiment optimization</li>
                  <li>• Discovery prioritization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Mission Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-purple-800">Mission Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-purple-800">Years Autonomous</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$500M+</div>
                <div className="text-purple-800">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        <section id="orbital-operations" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Orbital Operations Automation</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Orbital operations require precise coordination of multiple spacecraft, satellites, and space stations. AI systems now manage complex orbital mechanics, satellite constellation coordination, and space traffic management with unprecedented efficiency.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Constellation Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">AI-Powered Coordination</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 1000+ satellite coordination</li>
                    <li>• Real-time orbital adjustments</li>
                    <li>• Collision avoidance protocols</li>
                    <li>• Optimal coverage optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Performance Benefits</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 95% operational efficiency</li>
                    <li>• 60% fuel consumption reduction</li>
                    <li>• 99.9% uptime maintenance</li>
                    <li>• Real-time optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Space Traffic Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Traffic Control Systems</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Real-time space object tracking</li>
                    <li>• Predictive collision analysis</li>
                    <li>• Automated avoidance maneuvers</li>
                    <li>• Traffic flow optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Safety Improvements</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 99.9% collision avoidance</li>
                    <li>• 0.1 second response time</li>
                    <li>• Predictive risk assessment</li>
                    <li>• Emergency protocol automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission-optimization" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Real-time Mission Optimization</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            AI-powered mission optimization enables spacecraft to adapt to changing conditions, optimize resource usage, and maximize scientific returns in real-time. These systems continuously analyze mission parameters and adjust operations for optimal performance.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Optimization Algorithms</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Resource Optimization</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fuel consumption minimization</li>
                  <li>• Power usage optimization</li>
                  <li>• Data transmission efficiency</li>
                  <li>• Equipment utilization maximization</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Scientific Optimization</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Experiment prioritization</li>
                  <li>• Data collection optimization</li>
                  <li>• Discovery probability maximization</li>
                  <li>• Mission objective alignment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="quantum-space-ai" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Quantum-Enhanced Space AI</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Quantum computing integration represents the cutting edge of space AI technology. By leveraging quantum algorithms for optimization and machine learning, space missions can solve problems that are computationally intractable for classical systems.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Quantum Advantages in Space</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000x</div>
                <div className="text-purple-800">Faster Calculations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-purple-800">Optimization Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$200M+</div>
                <div className="text-purple-800">Additional Savings</div>
              </div>
            </div>
          </div>
        </section>

        <section id="interplanetary-communication" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Interplanetary Communication</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            AI-enhanced communication systems enable reliable data transmission across vast distances, with intelligent error correction, adaptive bandwidth allocation, and autonomous protocol optimization.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>99.9% data integrity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Adaptive bandwidth allocation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Autonomous error correction</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Real-time protocol optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>10x faster transmission</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>95% bandwidth efficiency</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>0.1% data loss rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Real-time optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="case-studies" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Mission Success Stories</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mars Exploration Mission 2026</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Mission Overview</h4>
                  <p className="text-gray-700 mb-4">
                    Autonomous Mars rover mission with AI-powered scientific analysis, autonomous navigation, 
                    and real-time mission optimization. Successfully completed 2-year mission with 99.9% uptime.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">AI Technologies</h4>
                  <p className="text-gray-700">
                    Neural trajectory optimization, autonomous scientific analysis, and quantum-enhanced 
                    communication systems for real-time Earth communication.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 99.9% mission success rate</li>
                    <li>• 50% more scientific discoveries</li>
                    <li>• $200M cost savings</li>
                    <li>• 2-year autonomous operation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Satellite Constellation Management</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Project Overview</h4>
                  <p className="text-gray-700 mb-4">
                    AI-powered management of 1000+ satellite constellation with autonomous coordination, 
                    collision avoidance, and optimal coverage optimization.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">AI Implementation</h4>
                  <p className="text-gray-700">
                    Machine learning algorithms for traffic management, predictive maintenance, 
                    and real-time orbital optimization across the entire constellation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 95% operational efficiency</li>
                    <li>• 60% fuel consumption reduction</li>
                    <li>• 99.9% collision avoidance</li>
                    <li>• $300M annual savings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="future-missions" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Future Space Missions</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            The future of space exploration is being shaped by AI technologies that will enable more ambitious missions, deeper space exploration, and unprecedented scientific discoveries.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming AI-Enhanced Missions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">2026-2027 Missions</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Jupiter Europa Mission with AI scientific analysis</li>
                  <li>• Asteroid mining operations with autonomous robots</li>
                  <li>• Mars sample return with AI navigation</li>
                  <li>• Lunar base construction with AI coordination</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">2028-2030 Missions</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Interstellar probe with quantum AI</li>
                  <li>• Venus atmospheric exploration</li>
                  <li>• Saturn moon exploration missions</li>
                  <li>• Space-based manufacturing facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Space Mission?</h2>
        <p className="text-xl mb-6 opacity-90">
          Discover how AI space technology can revolutionize your space operations and achieve unprecedented mission success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/case-studies/ai-space-mission-success-2026"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>

      {/* Related Content */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Space Technology 2026
              </h3>
              <p className="text-gray-600 text-sm">
                Explore the latest AI space technology breakthroughs and their impact on space exploration.
              </p>
            </div>
          </Link>
          
          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Quantum Computing 2026
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how quantum computing is enhancing AI capabilities for space missions.
              </p>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-space-mission-success-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Space Mission Success Story
              </h3>
              <p className="text-gray-600 text-sm">
                See how AI enabled a $200M Mars mission success with 99.9% reliability.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}