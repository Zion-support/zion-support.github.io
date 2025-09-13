import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Settings, Shield, TrendingUp, Clock, Users } from 'lucide-react';

const AutonomousAI2025Showcase: React.FC = () => {
  const autonomousFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Self-Managing Systems",
      description: "AI systems that autonomously optimize, update, and maintain themselves",
      metrics: "99.9% autonomous operation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Adaptive Configuration",
      description: "Dynamic system reconfiguration based on real-time performance data",
      metrics: "500% efficiency improvement",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Autonomous Security",
      description: "Self-healing security protocols that adapt to emerging threats",
      metrics: "Zero security breaches",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Optimization",
      description: "AI that predicts and prevents issues before they occur",
      metrics: "95% issue prevention rate",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Adaptation",
      description: "Instant response to changing conditions and requirements",
      metrics: "Sub-millisecond response",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-AI Collaboration",
      description: "Seamless integration with human workflows and decision-making",
      metrics: "300% productivity boost",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const performanceMetrics = [
    { label: "Autonomous Operation", value: "99.9%", description: "Uptime without human intervention" },
    { label: "Efficiency Gain", value: "500%", description: "Improvement in operational efficiency" },
    { label: "Cost Reduction", value: "75%", description: "Decrease in operational costs" },
    { label: "Response Time", value: "<1ms", description: "Average response time" },
    { label: "Error Rate", value: "0.01%", description: "Minimal error occurrence" },
    { label: "Scalability", value: "1000x", description: "Dynamic scaling capability" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <Bot className="w-5 h-5 text-green-400" />
            <span className="text-green-300 text-lg font-semibold">Autonomous AI 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Autonomous AI Systems
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
              Self-Managing Intelligence
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with fully autonomous systems that manage themselves, 
            optimize performance, and adapt to changing conditions without human intervention
          </p>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-green-300 font-semibold mb-2">{metric.label}</div>
              <div className="text-gray-400 text-xs">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Autonomous Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {autonomousFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <div className="text-blue-400 font-bold text-lg">{feature.metrics}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-3xl p-10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Implementation Process</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Deploy autonomous AI systems in your organization with our proven implementation methodology
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <div className="text-white font-semibold text-lg mb-2">System Assessment</div>
                  <div className="text-gray-400">Comprehensive analysis of current infrastructure and requirements</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <div className="text-white font-semibold text-lg mb-2">Autonomous Architecture Design</div>
                  <div className="text-gray-400">Custom autonomous system architecture tailored to your needs</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <div className="text-white font-semibold text-lg mb-2">Deployment & Training</div>
                  <div className="text-gray-400">Seamless deployment with autonomous learning capabilities</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-3xl p-10 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">Success Stories</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Real-world results from organizations using autonomous AI systems
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="text-green-400 font-bold text-xl mb-2">Fortune 500 Manufacturing</div>
                <div className="text-white mb-2">500% efficiency improvement</div>
                <div className="text-gray-400 text-sm">Autonomous production line optimization</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="text-green-400 font-bold text-xl mb-2">Healthcare Network</div>
                <div className="text-white mb-2">99.9% system uptime</div>
                <div className="text-gray-400 text-sm">Autonomous patient monitoring systems</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="text-green-400 font-bold text-xl mb-2">Financial Services</div>
                <div className="text-white mb-2">75% cost reduction</div>
                <div className="text-gray-400 text-sm">Autonomous trading and risk management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500/30 rounded-3xl p-16 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready for Autonomous AI?
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Transform your organization with self-managing AI systems that work 24/7, 
            optimize themselves, and deliver unprecedented results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/autonomous-ai-2025" 
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Autonomous AI
            </Link>
            <Link 
              to="/autonomous-ai-demo" 
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousAI2025Showcase;