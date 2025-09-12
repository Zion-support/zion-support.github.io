import React from 'react';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Bot, Cpu, Zap, Target, TrendingUp, Award, Clock, 
  CheckCircle, ArrowRight, ArrowUpRight, Users, DollarSign,
  Brain, Shield, Rocket, Database, Network, Globe,
  Sparkles, Lightbulb, Code, Server, Gauge, Settings
} from 'lucide-react';

export default function AIRoboticsAutomationBreakthrough2025() {
  const automationSolutions = [
    {
      icon: Bot,
      title: "Autonomous Manufacturing Robots",
      description: "Self-learning robots that adapt to production changes in real-time",
      impact: "85% productivity increase",
      category: "Manufacturing",
      color: "from-blue-500 to-cyan-500",
      savings: "$12M annually"
    },
    {
      icon: Brain,
      title: "AI-Powered Quality Control",
      description: "Computer vision systems that detect defects with 99.9% accuracy",
      impact: "99.9% defect detection",
      category: "Quality Assurance",
      color: "from-purple-500 to-pink-500",
      savings: "$8M annually"
    },
    {
      icon: Zap,
      title: "Predictive Maintenance Systems",
      description: "AI systems that predict equipment failures before they occur",
      impact: "90% reduction in downtime",
      category: "Maintenance",
      color: "from-yellow-500 to-orange-500",
      savings: "$5M annually"
    },
    {
      icon: Target,
      title: "Intelligent Supply Chain",
      description: "Automated logistics and inventory management optimization",
      impact: "70% efficiency gain",
      category: "Supply Chain",
      color: "from-green-500 to-emerald-500",
      savings: "$15M annually"
    },
    {
      icon: Shield,
      title: "Safety Automation Systems",
      description: "AI-powered safety monitoring and accident prevention",
      impact: "95% safety improvement",
      category: "Safety",
      color: "from-red-500 to-orange-500",
      savings: "$3M annually"
    },
    {
      icon: Database,
      title: "Smart Data Analytics",
      description: "Real-time production analytics and optimization recommendations",
      impact: "60% faster decisions",
      category: "Analytics",
      color: "from-indigo-500 to-purple-500",
      savings: "$7M annually"
    }
  ];

  const keyMetrics = [
    {
      metric: "Production Efficiency",
      before: "65%",
      after: "95%",
      improvement: "+30%",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      metric: "Defect Rate",
      before: "5.2%",
      after: "0.1%",
      improvement: "-98%",
      icon: Target,
      color: "text-blue-400"
    },
    {
      metric: "Energy Consumption",
      before: "100%",
      after: "45%",
      improvement: "-55%",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      metric: "Maintenance Costs",
      before: "$50M/year",
      after: "$15M/year",
      improvement: "-70%",
      icon: DollarSign,
      color: "text-purple-400"
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1",
      title: "Assessment & Planning",
      duration: "8 weeks",
      description: "Comprehensive analysis of current operations and automation opportunities",
      deliverables: [
        "Current state assessment report",
        "ROI projections and cost-benefit analysis",
        "Automation roadmap and timeline",
        "Risk assessment and mitigation strategies"
      ],
      icon: Target
    },
    {
      phase: "Phase 2",
      title: "Pilot Implementation",
      duration: "16 weeks",
      description: "Small-scale deployment of core automation systems for validation",
      deliverables: [
        "Pilot automation system deployment",
        "Performance metrics and validation",
        "Staff training and change management",
        "System optimization and fine-tuning"
      ],
      icon: Rocket
    },
    {
      phase: "Phase 3",
      title: "Full Deployment",
      duration: "24 weeks",
      description: "Complete automation system rollout across all production facilities",
      deliverables: [
        "Full-scale automation deployment",
        "Integration with existing systems",
        "Comprehensive staff training programs",
        "Performance monitoring and optimization"
      ],
      icon: Bot
    },
    {
      phase: "Phase 4",
      title: "Optimization & Scaling",
      duration: "Ongoing",
      description: "Continuous improvement and expansion of automation capabilities",
      deliverables: [
        "Performance optimization and tuning",
        "Advanced AI feature implementation",
        "Expansion to additional facilities",
        "Innovation and technology upgrades"
      ],
      icon: Brain
    }
  ];

  const roiBreakdown = [
    {
      category: "Labor Cost Savings",
      amount: "$45M",
      percentage: "45%",
      description: "Reduced manual labor through automation",
      icon: Users
    },
    {
      category: "Energy Efficiency",
      amount: "$18M",
      percentage: "18%",
      description: "Optimized energy consumption and waste reduction",
      icon: Zap
    },
    {
      category: "Quality Improvements",
      amount: "$22M",
      percentage: "22%",
      description: "Reduced defects and rework costs",
      icon: Award
    },
    {
      category: "Maintenance Savings",
      amount: "$15M",
      percentage: "15%",
      description: "Predictive maintenance and reduced downtime",
      icon: Settings
    }
  ];

  const testimonials = [
    {
      quote: "The AI robotics implementation has transformed our manufacturing operations. We've achieved unprecedented levels of efficiency and quality that seemed impossible just two years ago.",
      author: "Sarah Chen",
      title: "Chief Operations Officer",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "The predictive maintenance system alone has saved us millions in unplanned downtime. Our equipment now runs at 99.9% uptime, which is remarkable for heavy manufacturing.",
      author: "Michael Rodriguez",
      title: "Plant Manager",
      company: "Industrial Solutions Ltd"
    },
    {
      quote: "The quality control automation has virtually eliminated defects. Our customers are amazed by the consistent quality and reliability of our products.",
      author: "Dr. Emily Watson",
      title: "Quality Director",
      company: "Precision Manufacturing Inc"
    }
  ];

  return (
    <>
      <SEO
        title="AI Robotics & Automation Breakthrough 2025: $100M Manufacturing Transformation"
        description="Discover how Global Manufacturing Corp achieved $100M in annual savings through AI robotics and automation. 95% efficiency increase, 98% defect reduction, and complete operational transformation."
        keywords="AI robotics, manufacturing automation, industrial AI, predictive maintenance, quality control automation, smart manufacturing, Industry 4.0"
        url="/case-studies/ai-robotics-automation-breakthrough-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6">
                <Bot className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">AI ROBOTICS BREAKTHROUGH</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  AI Robotics & Automation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                $100M Manufacturing Transformation: How Global Manufacturing Corp achieved unprecedented 
                efficiency and quality through revolutionary AI robotics and automation systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>Case Study</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-5 h-5" />
                  <span>Manufacturing Excellence Award 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <DollarSign className="w-5 h-5" />
                  <span>$100M Annual Savings</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Challenge</h3>
                  <p className="text-gray-300 mb-6">
                    Global Manufacturing Corp faced declining efficiency, rising labor costs, and inconsistent quality 
                    across their 15 production facilities worldwide. Manual processes and outdated equipment were 
                    limiting growth and profitability.
                  </p>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Solution</h3>
                  <p className="text-gray-300">
                    Comprehensive AI robotics and automation transformation including autonomous manufacturing robots, 
                    AI-powered quality control, predictive maintenance systems, and intelligent supply chain optimization.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>$100M annual cost savings</strong></span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>95% production efficiency</strong> (up from 65%)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>98% defect reduction</strong> (from 5.2% to 0.1%)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>90% reduction in downtime</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Automation Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Automation Solutions Implemented
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Six core automation systems that transformed manufacturing operations and delivered unprecedented results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                      {solution.category}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-400 font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        <span>{solution.impact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{solution.savings}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable Results & Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantifiable improvements across all key manufacturing metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{metric.metric}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                      <span className="text-red-300">Before:</span>
                      <span className="text-white font-semibold">{metric.before}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-900/30 rounded-lg border border-green-500/30">
                      <span className="text-green-300">After:</span>
                      <span className="text-white font-semibold">{metric.after}</span>
                    </div>
                    
                    <div className="text-center">
                      <span className={`text-3xl font-bold ${metric.color}`}>
                        {metric.improvement}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Implementation Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Structured 4-phase approach ensuring smooth transition and maximum ROI.
              </p>
            </motion.div>

            <div className="space-y-12">
              {implementationPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <phase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                          <p className="text-blue-400 font-semibold">{phase.duration}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <h4 className="text-2xl font-bold text-white mb-4">{phase.title}</h4>
                      <p className="text-gray-300 mb-6">{phase.description}</p>
                      
                      <h5 className="text-lg font-bold text-white mb-4">Key Deliverables:</h5>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Breakdown */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                $100M Annual Savings Breakdown
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed analysis of cost savings and return on investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roiBreakdown.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.category}</h3>
                      <p className="text-blue-400 font-semibold">{item.percentage} of total savings</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-4">{item.amount}</div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Testimonials
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                What the executive team says about the AI robotics transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30"
                >
                  <div className="text-4xl mb-4">💬</div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-blue-400">{testimonial.title}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Learn how AI robotics and automation can deliver similar results for your organization. 
                Get a customized assessment and ROI projection for your specific operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Manufacturing Assessment <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/services/ai-robotics-automation">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                  >
                    View Robotics Services <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Explore More Manufacturing Success Stories
              </h2>
              <p className="text-lg text-gray-300">
                Discover how other organizations are leveraging AI for manufacturing excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    $200M Manufacturing Success
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Autonomous AI systems delivering unprecedented results
                  </p>
                  <div className="flex items-center text-green-400 group-hover:gap-2 transition-all">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    AI 2025 Breakthrough Innovations
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Revolutionary AI technologies reshaping industries
                  </p>
                  <div className="flex items-center text-purple-400 group-hover:gap-2 transition-all">
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/services/ai-robotics-automation" className="group">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    AI Robotics Services
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Complete AI robotics and automation solutions
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:gap-2 transition-all">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}