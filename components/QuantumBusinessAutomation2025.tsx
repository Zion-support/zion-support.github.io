import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Clock, CheckCircle, ArrowRight, Star, BarChart3 } from 'lucide-react';

const QuantumBusinessAutomation2025: React.FC = () => {
  const automationFeatures = [
    {
      icon: Zap,
      title: "Quantum Decision Optimization",
      description: "Leverage quantum computing to make optimal business decisions in real-time, considering millions of variables simultaneously."
    },
    {
      icon: Target,
      title: "90-Day ROI Guarantee",
      description: "Our quantum automation systems deliver measurable ROI within 90 days or your money back. Average ROI: 300-500%."
    },
    {
      icon: TrendingUp,
      title: "Complete Operational Automation",
      description: "Automate entire business processes from customer acquisition to delivery, reducing human intervention by 95%."
    },
    {
      icon: Clock,
      title: "Real-Time Performance Monitoring",
      description: "Monitor and optimize all business operations in real-time with quantum-enhanced analytics and predictions."
    }
  ];

  const results = [
    { metric: "ROI Increase", value: "300-500%", timeframe: "90 days" },
    { metric: "Process Automation", value: "95%", timeframe: "Immediate" },
    { metric: "Decision Speed", value: "1000x", timeframe: "Real-time" },
    { metric: "Cost Reduction", value: "80%", timeframe: "30 days" }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      result: "450% ROI in 75 days",
      description: "Complete automation of customer service, sales, and operations"
    },
    {
      company: "Manufacturing Plus",
      industry: "Manufacturing", 
      result: "380% ROI in 60 days",
      description: "Quantum-optimized supply chain and production processes"
    },
    {
      company: "FinanceMax",
      industry: "Financial Services",
      result: "520% ROI in 90 days", 
      description: "Automated risk assessment and investment optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/quantum-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              QUANTUM BUSINESS AUTOMATION 2025
              <Star className="w-4 h-4" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                90-Day ROI
              </span>
              <br />
              <span className="text-white">Transformation</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business operations with quantum-enhanced automation that delivers measurable results in just 90 days. 
              Companies implementing our system report average ROI increases of 300-500% with complete operational automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Start Your 90-Day Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results in 90 Days
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum business automation delivers measurable results that transform your organization's performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                  {result.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{result.metric}</h3>
                <p className="text-gray-300 text-sm">{result.timeframe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary quantum business automation platform combines cutting-edge quantum computing with advanced AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real companies achieving extraordinary results with our quantum business automation platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{study.company}</h3>
                  <p className="text-blue-400 text-sm">{study.industry}</p>
                </div>
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-3">
                  {study.result}
                </div>
                <p className="text-gray-300 text-sm">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your 90-Day Transformation Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our proven process ensures you see measurable results within 90 days. 
                We work with you every step of the way to guarantee success.
              </p>

              <div className="space-y-6">
                {[
                  { day: "Days 1-15", title: "Assessment & Setup", description: "Analyze your current operations and deploy quantum automation systems" },
                  { day: "Days 16-45", title: "Automation Implementation", description: "Implement quantum-enhanced automation across all business processes" },
                  { day: "Days 46-75", title: "Optimization & Training", description: "Optimize systems and train your team on new quantum capabilities" },
                  { day: "Days 76-90", title: "Results & ROI", description: "Measure results and achieve guaranteed ROI targets" }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-blue-400 font-semibold">{phase.day}</span>
                        <span className="text-white font-bold">{phase.title}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30">
                <div className="text-center">
                  <Zap className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ROI Guarantee
                  </h3>
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-4">
                    300-500%
                  </div>
                  <p className="text-gray-300 mb-6">
                    Average ROI achieved within 90 days or your money back
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Success Rate: 95%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your 90-Day Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have achieved extraordinary ROI with our quantum business automation. 
              Your transformation starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Start Your 90-Day Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Calculate Your ROI
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumBusinessAutomation2025;