import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Autonomous Systems | Self-Managing AI Solutions | Zion Tech Group',
  description: 'Deploy AI autonomous systems that self-manage, self-optimize, and self-heal. Achieve 99.9% uptime, 80% cost reduction, and 300% efficiency gains with our autonomous AI solutions.',
  keywords: 'AI autonomous systems, self-managing AI, autonomous agents, AI automation, enterprise AI, AI optimization',
  openGraph: {
    title: 'AI Autonomous Systems | Self-Managing AI Solutions',
    description: 'Deploy AI autonomous systems that self-manage, self-optimize, and self-heal. Achieve 99.9% uptime, 80% cost reduction, and 300% efficiency gains.',
    type: 'website',
    images: ['/og-ai-autonomous-systems.jpg'],
  },
};

export default function AIAutonomousSystems() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Autonomous Systems
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {' '}That Self-Manage
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy AI systems that think, learn, and act independently. Our autonomous AI solutions 
            achieve 99.9% uptime, 80% cost reduction, and 300% efficiency gains with minimal human intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </a>
            <Link
              href="#demo"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Watch Demo
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">80%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">300%</div>
              <div className="text-gray-600">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI Autonomous Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Are AI Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI Autonomous Systems are intelligent agents that can operate independently, 
              make decisions, learn from experience, and adapt to changing conditions without human intervention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Learning</h3>
              <p className="text-gray-600">
                Continuously learn from data and experiences to improve performance and adapt to new situations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Optimizing</h3>
              <p className="text-gray-600">
                Automatically optimize processes, resources, and performance based on real-time data and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Healing</h3>
              <p className="text-gray-600">
                Detect and resolve issues automatically, maintaining system health and performance without downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI autonomous systems come equipped with advanced capabilities that enable 
              truly independent operation and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Decision Making</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced AI algorithms that can analyze complex scenarios, evaluate multiple options, 
                and make optimal decisions in real-time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-criteria decision analysis</li>
                <li>• Risk assessment and mitigation</li>
                <li>• Predictive decision modeling</li>
                <li>• Context-aware reasoning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Continuous Learning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Machine learning systems that continuously improve performance through experience 
                and feedback loops.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Reinforcement learning algorithms</li>
                <li>• Online learning capabilities</li>
                <li>• Transfer learning between domains</li>
                <li>• Adaptive model updates</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Self-Maintenance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated maintenance and optimization systems that keep operations running 
                smoothly without human intervention.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive maintenance scheduling</li>
                <li>• Automated performance tuning</li>
                <li>• Self-diagnostic capabilities</li>
                <li>• Proactive issue resolution</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Multi-Agent Coordination</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intelligent coordination between multiple autonomous agents to achieve 
                complex organizational goals.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Distributed decision making</li>
                <li>• Agent communication protocols</li>
                <li>• Conflict resolution mechanisms</li>
                <li>• Collaborative optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Autonomous AI Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how autonomous AI systems are transforming industries and 
              revolutionizing business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏭 Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Autonomous production lines that self-optimize, self-maintain, and adapt to demand changes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Self-optimizing production schedules</li>
                <li>• Autonomous quality control</li>
                <li>• Predictive maintenance</li>
                <li>• Dynamic resource allocation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚚 Supply Chain</h3>
              <p className="text-gray-600 mb-4">
                Intelligent logistics systems that autonomously manage inventory, routing, and fulfillment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Autonomous inventory management</li>
                <li>• Dynamic routing optimization</li>
                <li>• Demand forecasting</li>
                <li>• Risk mitigation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Autonomous medical systems that provide continuous monitoring and care optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Patient monitoring systems</li>
                <li>• Treatment optimization</li>
                <li>• Resource allocation</li>
                <li>• Emergency response</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏦 Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Autonomous trading and risk management systems that operate 24/7 with minimal oversight.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algorithmic trading</li>
                <li>• Risk assessment</li>
                <li>• Fraud detection</li>
                <li>• Portfolio optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌐 IT Operations</h3>
              <p className="text-gray-600 mb-4">
                Self-managing IT infrastructure that automatically handles scaling, security, and maintenance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Auto-scaling systems</li>
                <li>• Security monitoring</li>
                <li>• Performance optimization</li>
                <li>• Incident response</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛒 E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Autonomous customer service and personalization systems that enhance user experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized recommendations</li>
                <li>• Automated customer service</li>
                <li>• Dynamic pricing</li>
                <li>• Inventory optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Autonomous AI Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Autonomous AI systems deliver unprecedented value through continuous optimization, 
              reduced operational costs, and enhanced reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operational Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">99.9% Uptime</h4>
                    <p className="text-gray-600">Continuous operation with minimal downtime through self-healing capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">80% Cost Reduction</h4>
                    <p className="text-gray-600">Significant savings through automation and optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">300% Efficiency Gain</h4>
                    <p className="text-gray-600">Dramatic improvements in productivity and performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Operation</h4>
                    <p className="text-gray-600">Round-the-clock autonomous operation without human intervention</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Advantage</h4>
                    <p className="text-gray-600">Stay ahead with cutting-edge autonomous capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Scalability</h4>
                    <p className="text-gray-600">Easily scale operations without proportional cost increases</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Risk Mitigation</h4>
                    <p className="text-gray-600">Proactive risk detection and mitigation capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Acceleration</h4>
                    <p className="text-gray-600">Faster innovation cycles through autonomous experimentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-phase approach ensures successful deployment of autonomous AI systems 
              with minimal risk and maximum value.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Assessment & Planning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive evaluation of your current systems, data infrastructure, and readiness for autonomous AI deployment.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• System architecture analysis</li>
                  <li>• Data quality assessment</li>
                  <li>• Use case identification</li>
                  <li>• ROI projection</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Design & Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Custom autonomous AI system design tailored to your specific requirements and constraints.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Autonomous agent design</li>
                  <li>• Learning algorithm selection</li>
                  <li>• Integration architecture</li>
                  <li>• Safety framework</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pilot Development</h3>
                <p className="text-gray-600 mb-4">
                  Development and testing of pilot autonomous systems in controlled environments.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Prototype development</li>
                  <li>• Controlled testing</li>
                  <li>• Performance validation</li>
                  <li>• Safety verification</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Deployment & Integration</h3>
                <p className="text-gray-600 mb-4">
                  Full deployment and integration of autonomous AI systems into your production environment.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Production deployment</li>
                  <li>• System integration</li>
                  <li>• User training</li>
                  <li>• Monitoring setup</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimization & Learning</h3>
                <p className="text-gray-600 mb-4">
                  Continuous optimization and learning to improve system performance and adapt to changing conditions.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Performance monitoring</li>
                  <li>• Continuous learning</li>
                  <li>• Optimization tuning</li>
                  <li>• Feedback integration</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">6</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scaling & Expansion</h3>
                <p className="text-gray-600 mb-4">
                  Scaling successful autonomous systems across the organization and expanding capabilities.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Enterprise-wide scaling</li>
                  <li>• Capability expansion</li>
                  <li>• Advanced features</li>
                  <li>• Innovation pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pricing & Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the autonomous AI package that best fits your organization's needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$2,999<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for small to medium businesses getting started with autonomous AI.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Basic autonomous agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Self-learning capabilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Basic monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$7,999<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600 mb-6">Ideal for growing enterprises requiring advanced autonomous capabilities.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Advanced autonomous agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Multi-agent coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Real-time monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">Custom<span className="text-lg text-gray-500"> pricing</span></div>
              <p className="text-gray-600 mb-6">Fully customized autonomous AI solutions for large enterprises.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Fully autonomous systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Custom AI models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>24/7 monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>White-label solutions</span>
                </li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-700 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Deploy Autonomous AI Systems?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your operations with self-managing AI systems that deliver 99.9% uptime, 
            80% cost reduction, and 300% efficiency gains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}