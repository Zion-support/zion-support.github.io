import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Cog, Brain, Target, Shield, Clock, Users, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advanced Automation Solutions 2025 - Intelligent Process Automation',
  description: 'Intelligent automation systems delivering 95% efficiency gains, 24/7 autonomous operation, and 99.9% uptime guarantees.',
  keywords: 'Automation Solutions, Intelligent Process Automation, Autonomous Systems, Predictive Maintenance, AI Automation, Business Automation',
};

const AutomationSolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mb-8"
            >
              <Cog className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              Advanced Automation Solutions 2025
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Intelligent process automation with self-learning algorithms, autonomous decision-making, 
              and predictive maintenance systems that revolutionize operational efficiency.
            </motion.p>

            {/* Automation Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-sm text-gray-300">Efficiency Gain</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-300">Autonomous Operation</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime Guarantee</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-full mb-4 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-sm text-gray-300">Processes Automated</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Solutions */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Next-generation automation technologies that transform business operations 
              through intelligent process automation and autonomous decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Intelligent Process Automation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Process Automation</h3>
              <p className="text-gray-300 mb-6">
                Self-learning automation systems that adapt and optimize processes in real-time, 
                eliminating manual intervention and maximizing efficiency.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Self-optimizing workflows</li>
                <li>• Adaptive process learning</li>
                <li>• Intelligent exception handling</li>
              </ul>
            </div>

            {/* Autonomous Decision Systems */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Decision Systems</h3>
              <p className="text-gray-300 mb-6">
                AI-powered decision engines that make complex business decisions autonomously, 
                with full audit trails and continuous learning capabilities.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time risk assessment</li>
                <li>• Predictive analytics integration</li>
                <li>• Self-improving algorithms</li>
              </ul>
            </div>

            {/* Predictive Maintenance AI */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Maintenance AI</h3>
              <p className="text-gray-300 mb-6">
                Advanced predictive analytics that anticipate equipment failures before they occur, 
                reducing downtime and maintenance costs by up to 80%.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• IoT sensor integration</li>
                <li>• Machine learning predictions</li>
                <li>• Automated maintenance scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world success stories from organizations that have transformed 
              their operations with advanced automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-5xl font-bold text-green-400 mb-4">$2.5M</div>
              <div className="text-xl text-gray-300 mb-4">Average Cost Savings</div>
              <p className="text-gray-400">
                Organizations save an average of $2.5M annually through 
                intelligent process automation and predictive maintenance.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-5xl font-bold text-teal-400 mb-4">3.2x</div>
              <div className="text-xl text-gray-300 mb-4">ROI Increase</div>
              <p className="text-gray-400">
                Average return on investment increases by 3.2x within 
                the first year of implementing automation solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-4">87%</div>
              <div className="text-xl text-gray-300 mb-4">Faster Implementation</div>
              <p className="text-gray-400">
                Automation solutions deploy 87% faster than traditional 
                process improvement initiatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Transform Your Operations</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of organizations already achieving breakthrough results 
                with advanced automation solutions. Our comprehensive approach ensures 
                maximum impact and sustainable transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-green-400">
                  <Zap className="w-5 h-5 mr-3" />
                  <span>Rapid deployment and implementation</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Brain className="w-5 h-5 mr-3" />
                  <span>Continuous learning and optimization</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <Target className="w-5 h-5 mr-3" />
                  <span>Scalable and future-proof architecture</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Your Automation Journey</h3>
              <p className="text-white/90 mb-6">
                Transform your operations with next-generation automation solutions 
                that deliver measurable results from day one.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Automation Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationSolutions2025;