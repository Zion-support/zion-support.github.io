import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Rocket,
  Star,
  Target,
  Users,
  Zap,
  Building,
  DollarSign,
  Clock
} from 'lucide-react';

const AI2026LatestBreakthroughs: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const breakthroughs = [
    {
      icon: Brain,
      title: "Conscious AI Systems",
      description: "AI that demonstrates genuine self-awareness and emotional intelligence",
      impact: "85% improvement in human-AI collaboration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum Neural Networks",
      description: "Revolutionary computing that processes information at quantum speeds",
      impact: "10,000x faster processing capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Predictive Business Intelligence",
      description: "AI that predicts market trends with 99.7% accuracy",
      impact: "300% increase in strategic decision accuracy",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Autonomous Team Management",
      description: "AI systems that manage and optimize entire business teams",
      impact: "250% boost in team productivity",
      color: "from-orange-500 to-red-500"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Manual process inefficiencies costing $2.3M annually",
      solution: "Implemented AI consciousness platform",
      results: [
        "95% reduction in manual processes",
        "$4.7M annual savings",
        "300% increase in operational efficiency",
        "99.9% customer satisfaction rate"
      ],
      duration: "6 months",
      roi: "2,100%"
    },
    {
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Risk assessment taking weeks, causing missed opportunities",
      solution: "Deployed quantum neural risk analysis",
      results: [
        "Real-time risk assessment",
        "87% faster decision making",
        "45% reduction in bad loans",
        "$8.2M additional revenue"
      ],
      duration: "4 months",
      roi: "3,400%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold mb-6"
            >
              <Star className="w-5 h-5 mr-2" />
              Latest AI Breakthroughs 2026
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}AI is Here
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary AI technologies that are transforming businesses worldwide. 
              From conscious AI systems to quantum neural networks, the future is now.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Breakthroughs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Breakthroughs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four game-changing technologies that are reshaping the future of business and technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {breakthroughs.map((breakthrough, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${breakthrough.color} flex items-center justify-center mb-6`}>
                  <breakthrough.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {breakthrough.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {breakthrough.description}
                </p>
                
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                  <p className="text-green-300 font-semibold">
                    {breakthrough.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are achieving unprecedented results with our AI solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.company}
                    </h3>
                    <p className="text-purple-300 font-semibold">
                      {study.industry} • {study.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">
                      {study.roi} ROI
                    </div>
                    <div className="text-sm text-gray-300">
                      Return on Investment
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Companies Transformed", icon: Building },
              { number: "99.7%", label: "Success Rate", icon: Target },
              { number: "$2.3B+", label: "Client Savings", icon: DollarSign },
              { number: "24/7", label: "AI Support", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and achieve unprecedented results with our cutting-edge solutions
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center mx-auto"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Start Your AI Transformation Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AI2026LatestBreakthroughs;