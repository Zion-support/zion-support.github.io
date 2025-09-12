import React from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { Bot, Brain, TrendingUp, Shield, Zap, Globe, Target, Users } from 'lucide-react';

const AutonomousBusinessPlatform: React.FC = () => {
  const autonomousFeatures = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: "Autonomous Decision Making",
      description: "AI agents that make strategic business decisions without human intervention",
      benefits: ["Real-time market analysis", "Automated strategy execution", "Continuous optimization"]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Self-Learning Systems",
      description: "Platforms that continuously evolve and improve through machine learning",
      benefits: ["Adaptive algorithms", "Predictive insights", "Self-optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Autonomous Revenue Generation",
      description: "Systems that identify and capitalize on revenue opportunities automatically",
      benefits: ["Dynamic pricing", "Market opportunity detection", "Automated sales processes"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Autonomous Security",
      description: "Self-defending systems that protect against threats in real-time",
      benefits: ["Threat detection", "Automated response", "Zero-trust architecture"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Autonomous Operations",
      description: "Platforms that manage worldwide operations without geographical limitations",
      benefits: ["24/7 global coverage", "Multi-timezone management", "Scalable infrastructure"]
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Autonomous Customer Engagement",
      description: "AI systems that engage customers and prospects with personalized experiences",
      benefits: ["Personalized interactions", "Automated follow-ups", "Customer journey optimization"]
    }
  ];

  const platformStats = [
    { number: "100%", label: "Autonomous Operations" },
    { number: "24/7", label: "Continuous Operation" },
    { number: "300%", label: "Efficiency Increase" },
    { number: "0", label: "Human Intervention Required" }
  ];

  const businessProcesses = [
    {
      process: "Marketing Automation",
      description: "Autonomous campaigns that adapt to market conditions and customer behavior",
      impact: "500% ROI improvement"
    },
    {
      process: "Supply Chain Management",
      description: "Self-optimizing supply chains that predict and prevent disruptions",
      impact: "60% cost reduction"
    },
    {
      process: "Financial Operations",
      description: "Autonomous financial planning, forecasting, and risk management",
      impact: "95% accuracy in predictions"
    },
    {
      process: "Customer Service",
      description: "AI agents that provide personalized support and resolve issues automatically",
      impact: "90% faster resolution times"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900">
      <SEO 
        title="Autonomous Business Platform - Zion Tech Group"
        description="Revolutionary autonomous business platform that runs your operations 24/7 without human intervention. AI-powered decision making and self-optimization."
        keywords="autonomous business, AI automation, self-managing systems, autonomous operations, business automation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Autonomous Business Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of business with our revolutionary autonomous platform that 
              runs your operations 24/7 without human intervention.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Launch Autonomous Platform
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300">
                See Platform Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Autonomous Business Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform operates independently, making decisions, optimizing processes, 
              and driving growth without human oversight.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autonomousFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Processes */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Autonomous Business Processes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of your business operations becomes autonomous, 
              efficient, and self-optimizing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-green-400 mb-3">{process.process}</h3>
                  <p className="text-gray-300 mb-4">{process.description}</p>
                  <div className="text-cyan-400 font-semibold">
                    Impact: {process.impact}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Autonomous?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business into a fully autonomous operation that runs 
              independently while maximizing efficiency and profitability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Launch Platform Now
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessPlatform;