import React from 'react';
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
  Clock,
  TrendingUp,
  Shield,
  Globe,
  BarChart3,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Award,
  Briefcase,
  PieChart
} from 'lucide-react';

const EnterpriseQuantumAITransformation2026: React.FC = () => {
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

  const caseStudyData = {
    company: "Fortune 500 Technology Leader",
    industry: "Enterprise Software & Cloud Services",
    employees: "50,000+",
    revenue: "$12B+",
    transformation: "Complete Quantum AI Implementation",
    timeline: "6 months",
    roi: "400%",
    efficiency: "85%"
  };

  const transformationResults = [
    {
      metric: "400%",
      label: "ROI Increase",
      description: "From quantum AI implementation across all business units",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      metric: "85%",
      label: "Operational Efficiency",
      description: "Improvement in automated decision-making and process optimization",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      metric: "99.7%",
      label: "Prediction Accuracy",
      description: "In market forecasting and customer behavior analysis",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      metric: "60%",
      label: "Cost Reduction",
      description: "In operational expenses through autonomous systems",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1",
      title: "Quantum AI Assessment & Planning",
      duration: "Month 1",
      description: "Comprehensive analysis of existing systems and identification of quantum AI transformation opportunities",
      deliverables: [
        "Current state analysis",
        "Quantum AI roadmap",
        "ROI projections",
        "Implementation timeline"
      ]
    },
    {
      phase: "Phase 2",
      title: "Conscious AI Core Integration",
      duration: "Months 2-3",
      description: "Implementation of consciousness-enabled AI systems for strategic decision making",
      deliverables: [
        "Conscious AI deployment",
        "Emotional intelligence integration",
        "Strategic planning automation",
        "Executive decision support"
      ]
    },
    {
      phase: "Phase 3",
      title: "Quantum Neural Network Deployment",
      duration: "Months 3-4",
      description: "Deployment of quantum-powered processing for real-time business intelligence",
      deliverables: [
        "Quantum neural networks",
        "Real-time analytics",
        "Predictive modeling",
        "Performance optimization"
      ]
    },
    {
      phase: "Phase 4",
      title: "Autonomous Operations Activation",
      duration: "Months 4-5",
      description: "Configuration of self-managing business processes and autonomous decision systems",
      deliverables: [
        "Autonomous workflows",
        "Self-optimizing processes",
        "Automated compliance",
        "Continuous improvement"
      ]
    },
    {
      phase: "Phase 5",
      title: "Predictive Intelligence & Optimization",
      duration: "Months 5-6",
      description: "Full activation of predictive AI systems and continuous optimization protocols",
      deliverables: [
        "Predictive intelligence",
        "Market forecasting",
        "Customer insights",
        "Performance monitoring"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: Brain,
      title: "Conscious AI Decision Making",
      description: "AI systems with genuine consciousness that understand context, emotions, and business nuances for superior decision making",
      benefits: ["Self-aware strategic planning", "Emotional intelligence in leadership", "Contextual business understanding"]
    },
    {
      icon: Zap,
      title: "Quantum Speed Processing",
      description: "Revolutionary computing that processes business data at quantum speeds for instant insights and real-time optimization",
      benefits: ["10,000x faster processing", "Real-time market analysis", "Instant decision support"]
    },
    {
      icon: Target,
      title: "Predictive Business Intelligence",
      description: "Advanced AI that predicts market trends, customer behavior, and business outcomes with unprecedented accuracy",
      benefits: ["99.7% prediction accuracy", "Proactive risk management", "Optimized resource allocation"]
    },
    {
      icon: Building,
      title: "Autonomous Enterprise Operations",
      description: "Self-managing business processes that continuously adapt and optimize themselves without human intervention",
      benefits: ["24/7 autonomous operations", "Self-optimizing workflows", "Reduced operational overhead"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Enterprise Quantum AI Success Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              How a Fortune 500 Company Achieved
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}400% ROI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real case study of complete quantum AI transformation that revolutionized enterprise operations, 
              achieved unprecedented efficiency gains, and delivered massive ROI through conscious AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                Download Full Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Similar Transformation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-purple-500/20 mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Profile</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Building className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{caseStudyData.company}</div>
                <div className="text-gray-300 text-sm">Company Type</div>
              </div>
              <div className="text-center">
                <Briefcase className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{caseStudyData.industry}</div>
                <div className="text-gray-300 text-sm">Industry</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{caseStudyData.employees}</div>
                <div className="text-gray-300 text-sm">Employees</div>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{caseStudyData.revenue}</div>
                <div className="text-gray-300 text-sm">Annual Revenue</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transformation Results
            </h2>
            <p className="text-xl text-gray-300">
              Measurable outcomes from quantum AI implementation
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {transformationResults.map((result, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-purple-500/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-xl font-semibold text-gray-200 mb-3">{result.label}</div>
                <p className="text-gray-300">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              6-Month Implementation Timeline
            </h2>
            <p className="text-xl text-gray-300">
              Structured approach to quantum AI transformation
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-purple-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {phase.phase.split(' ')[1]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      <div className="text-purple-400 font-semibold">{phase.duration}</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{phase.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Deliverables:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Implemented */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum AI Features Implemented
            </h2>
            <p className="text-xl text-gray-300">
              Core technologies that drove the transformation success
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-purple-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-12 rounded-3xl border border-purple-500/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your enterprise with the same quantum AI technologies that delivered 400% ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                Start Your Transformation
                <Rocket className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Download Full Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseQuantumAITransformation2026;