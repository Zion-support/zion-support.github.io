import React from 'react';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Leaf, Recycle, Wind, Sun, Droplets, TreePine, 
  ArrowRight, Clock, User, Eye, CheckCircle, TrendingUp,
  ArrowUpRight, Globe, Award, Cpu, Database, Cloud,
  Sparkles, Lightbulb, Code, Server, Network, ShieldCheck,
  Zap, Target, Brain, Rocket, Shield, DollarSign
} from 'lucide-react';

export default function AISustainabilityGreenTech2025() {
  const greenTechSolutions = [
    {
      icon: Leaf,
      title: "AI-Powered Carbon Footprint Reduction",
      description: "Intelligent systems that automatically optimize energy consumption and reduce carbon emissions",
      impact: "40% energy reduction",
      category: "Energy Optimization",
      color: "from-green-500 to-emerald-500",
      savings: "$2.3M annually"
    },
    {
      icon: Wind,
      title: "Smart Renewable Energy Management",
      description: "AI-driven renewable energy optimization for maximum efficiency and minimal waste",
      impact: "60% renewable efficiency",
      category: "Renewable Energy",
      color: "from-blue-500 to-cyan-500",
      savings: "$1.8M annually"
    },
    {
      icon: Recycle,
      title: "Intelligent Waste Management Systems",
      description: "Automated waste sorting, recycling optimization, and circular economy implementation",
      impact: "85% waste reduction",
      category: "Waste Management",
      color: "from-purple-500 to-pink-500",
      savings: "$950K annually"
    },
    {
      icon: Droplets,
      title: "Smart Water Conservation",
      description: "AI-powered water usage monitoring and optimization for sustainable resource management",
      impact: "50% water savings",
      category: "Water Management",
      color: "from-cyan-500 to-blue-500",
      savings: "$650K annually"
    },
    {
      icon: TreePine,
      title: "Forest Protection AI",
      description: "Predictive analytics for forest health monitoring and biodiversity preservation",
      impact: "90% threat detection",
      category: "Environmental Protection",
      color: "from-emerald-500 to-green-500",
      savings: "Ecosystem preservation"
    },
    {
      icon: Sun,
      title: "Solar Energy Optimization",
      description: "Advanced AI algorithms for maximum solar panel efficiency and energy storage",
      impact: "35% efficiency boost",
      category: "Solar Technology",
      color: "from-yellow-500 to-orange-500",
      savings: "$1.2M annually"
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "Carbon Footprint Reduction",
      before: "2,500 tons CO2/year",
      after: "1,500 tons CO2/year",
      improvement: "40% reduction",
      icon: Leaf,
      color: "text-green-400"
    },
    {
      metric: "Energy Consumption",
      before: "15,000 MWh/year",
      after: "9,000 MWh/year",
      improvement: "40% reduction",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      metric: "Water Usage",
      before: "500,000 gallons/month",
      after: "250,000 gallons/month",
      improvement: "50% reduction",
      icon: Droplets,
      color: "text-cyan-400"
    },
    {
      metric: "Waste Generation",
      before: "2,000 tons/year",
      after: "300 tons/year",
      improvement: "85% reduction",
      icon: Recycle,
      color: "text-purple-400"
    }
  ];

  const caseStudies = [
    {
      company: "Global Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "High energy consumption and carbon emissions from production facilities",
      solution: "AI-powered smart grid optimization and predictive maintenance",
      results: [
        "60% reduction in energy consumption",
        "45% decrease in carbon emissions",
        "$5.2M annual cost savings",
        "Achieved carbon neutrality by 2025"
      ],
      timeline: "8 months implementation",
      impact: "Environmental Leader Award 2025"
    },
    {
      company: "Tech Campus Silicon Valley",
      industry: "Technology",
      challenge: "Water waste and inefficient cooling systems",
      solution: "AI-driven water management and smart building automation",
      results: [
        "70% reduction in water usage",
        "50% improvement in cooling efficiency",
        "$2.8M annual savings",
        "LEED Platinum certification achieved"
      ],
      timeline: "6 months deployment",
      impact: "Green Building Excellence Award"
    },
    {
      company: "Urban City Municipality",
      industry: "Government",
      challenge: "Waste management inefficiency and recycling rates below 30%",
      solution: "Intelligent waste sorting and circular economy optimization",
      results: [
        "90% increase in recycling rates",
        "80% reduction in landfill waste",
        "$1.5M operational savings",
        "Zero waste to landfill by 2026"
      ],
      timeline: "12 months rollout",
      impact: "Sustainable City Initiative Recognition"
    }
  ];

  const greenTechStats = [
    { number: "200+", label: "Green AI Solutions Deployed", icon: Leaf },
    { number: "$15M", label: "Environmental Cost Savings", icon: DollarSign },
    { number: "50%", label: "Average Carbon Reduction", icon: TrendingUp },
    { number: "100%", label: "Renewable Energy Usage", icon: Sun }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Sustainability Assessment",
      description: "Comprehensive analysis of current environmental impact and resource usage",
      duration: "2-4 weeks",
      icon: Target
    },
    {
      step: 2,
      title: "AI Solution Design",
      description: "Custom AI system design tailored to specific sustainability goals",
      duration: "4-6 weeks",
      icon: Brain
    },
    {
      step: 3,
      title: "Pilot Implementation",
      description: "Small-scale deployment to validate effectiveness and optimize performance",
      duration: "8-12 weeks",
      icon: Rocket
    },
    {
      step: 4,
      title: "Full Deployment",
      description: "Complete system rollout with monitoring and continuous optimization",
      duration: "12-16 weeks",
      icon: Shield
    }
  ];

  return (
    <>
      <SEO
        title="AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems"
        description="Discover how AI is driving sustainability initiatives, reducing carbon footprints, and building eco-friendly systems. Smart energy management, intelligent waste management, and climate risk assessment solutions."
        keywords="AI sustainability, green tech, carbon footprint reduction, renewable energy AI, smart waste management, environmental AI, sustainable technology"
        url="/blog/ai-sustainability-green-tech-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
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
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">SUSTAINABILITY & GREEN TECH</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  AI Sustainability & Green Tech
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Building eco-friendly AI systems that reduce environmental impact, optimize resource usage, 
                and create sustainable business operations for a greener future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>20 min read</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <User className="w-5 h-5" />
                  <span>Zion Tech Group</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Eye className="w-5 h-5" />
                  <span>Published Jan 28, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Green Tech Solutions Section */}
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
                AI-Powered Green Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Six revolutionary AI solutions that are transforming environmental sustainability and resource management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {greenTechSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                      {solution.category}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-400 font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        <span>{solution.impact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
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

        {/* Sustainability Metrics */}
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
                Measurable Environmental Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world environmental improvements achieved through AI-powered sustainability solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainabilityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
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
                      <span className={`text-2xl font-bold ${metric.color}`}>
                        {metric.improvement}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
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
                Green Transformation Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are achieving environmental sustainability through AI-powered green technology.
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-green-400/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6 text-green-400" />
                        <div>
                          <span className="text-green-400 font-semibold text-lg">{study.company}</span>
                          <p className="text-gray-400 text-sm">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4">Results</h3>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-green-400">
                            <Clock className="w-4 h-4" />
                            <span className="font-semibold">{study.timeline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-400">
                            <Award className="w-4 h-4" />
                            <span className="font-semibold">{study.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-6 border border-green-400/30">
                      <div className="text-6xl mb-4">🌱</div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        Environmental Impact
                      </h4>
                      <p className="text-gray-300 mb-4">
                        This transformation demonstrates how AI can drive significant environmental improvements 
                        while delivering substantial cost savings and operational efficiency.
                      </p>
                      <div className="text-green-400 font-semibold">
                        Sustainable Future Achieved
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
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
                Green AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven 4-step process for implementing AI-powered sustainability solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {index < implementationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 transform translate-x-4"></div>
                    )}
                  </div>
                  
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                    Step {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Green Tech Statistics */}
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
                Green AI Impact Statistics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable environmental and economic benefits from our AI sustainability solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {greenTechStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Your Green AI Transformation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Join the sustainable future with AI-powered green technology solutions that reduce environmental impact 
                while improving business performance and profitability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Green AI Assessment <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/case-studies/ai-sustainability-transformation-2025">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                  >
                    View Case Studies <ArrowUpRight className="w-5 h-5" />
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
                Continue Your Sustainability Journey
              </h2>
              <p className="text-lg text-gray-300">
                Explore more insights and resources for building a sustainable future with AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    AI Sustainability Success Story
                  </h3>
                  <p className="text-gray-300 mb-4">
                    60% energy reduction and carbon neutrality achieved
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

              <Link href="/resources/green-ai-implementation-guide" className="group">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    Green AI Implementation Guide
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Step-by-step guide to sustainable AI deployment
                  </p>
                  <div className="flex items-center text-emerald-400 group-hover:gap-2 transition-all">
                    Download Free <ArrowUpRight className="w-4 h-4" />
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