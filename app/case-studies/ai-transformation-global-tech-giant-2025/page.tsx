import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Brain, Shield, Zap, Users, DollarSign, 
  ArrowRight, Calendar, Target, CheckCircle, BarChart3,
  Clock, Globe, Award, Lightbulb, Rocket
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Success: Global Tech Giant Achieves 400% ROI - Case Study',
  description: 'Discover how a Fortune 500 tech company achieved 400% ROI through comprehensive AI transformation, reducing costs by 60% and increasing productivity by 300%.',
  keywords: 'AI transformation case study, Fortune 500 AI success, enterprise AI ROI, AI automation results, tech company AI transformation',
  openGraph: {
    title: 'AI Transformation Success: Global Tech Giant Achieves 400% ROI',
    description: 'Comprehensive case study of a Fortune 500 tech company\'s successful AI transformation journey and remarkable results.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const AITransformationGlobalTechGiant2025 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const keyResults = [
    {
      icon: TrendingUp,
      title: "400% ROI",
      description: "Return on investment achieved within 18 months",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: DollarSign,
      title: "60% Cost Reduction",
      description: "Operational costs reduced across all departments",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "300% Productivity",
      description: "Employee productivity increased dramatically",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "System reliability and availability improved",
      color: "from-red-500 to-orange-500"
    }
  ];

  const transformationPhases = [
    {
      phase: "Phase 1: Assessment & Planning",
      duration: "3 months",
      description: "Comprehensive AI readiness assessment and strategic planning",
      achievements: [
        "AI maturity assessment completed",
        "Strategic roadmap developed",
        "Pilot projects identified",
        "Change management plan created"
      ],
      technologies: ["AI Readiness Assessment", "Strategic Planning", "Change Management"]
    },
    {
      phase: "Phase 2: Pilot Implementation",
      duration: "6 months",
      description: "Small-scale AI implementations in key departments",
      achievements: [
        "Customer service chatbot deployed",
        "Predictive maintenance system active",
        "HR automation processes implemented",
        "Initial ROI of 150% achieved"
      ],
      technologies: ["NLP Chatbots", "Predictive Analytics", "Process Automation"]
    },
    {
      phase: "Phase 3: Scale & Optimize",
      duration: "9 months",
      description: "Enterprise-wide AI deployment and optimization",
      achievements: [
        "AI systems deployed across all departments",
        "Advanced analytics and insights platform",
        "Autonomous decision-making systems",
        "Full ROI of 400% realized"
      ],
      technologies: ["Machine Learning", "Advanced Analytics", "Autonomous Systems"]
    }
  ];

  const departmentResults = [
    {
      department: "Customer Service",
      before: "Average response time: 24 hours",
      after: "Average response time: 2 minutes",
      improvement: "98% faster",
      technologies: ["AI Chatbots", "Sentiment Analysis", "Knowledge Graphs"]
    },
    {
      department: "Manufacturing",
      before: "Equipment downtime: 15%",
      after: "Equipment downtime: 2%",
      improvement: "87% reduction",
      technologies: ["Predictive Maintenance", "Computer Vision", "IoT Sensors"]
    },
    {
      department: "HR & Recruitment",
      before: "Time to hire: 45 days",
      after: "Time to hire: 12 days",
      improvement: "73% faster",
      technologies: ["Resume Screening", "Skill Matching", "Interview Scheduling"]
    },
    {
      department: "Finance & Accounting",
      before: "Monthly close: 15 days",
      after: "Monthly close: 3 days",
      improvement: "80% faster",
      technologies: ["Automated Reconciliation", "Fraud Detection", "Financial Analytics"]
    }
  ];

  const lessonsLearned = [
    {
      lesson: "Start Small, Scale Smart",
      description: "Begin with pilot projects to prove value before enterprise-wide deployment",
      impact: "Reduced implementation risk by 70%"
    },
    {
      lesson: "Change Management is Critical",
      description: "Invest heavily in training and communication to ensure adoption",
      impact: "Achieved 95% user adoption rate"
    },
    {
      lesson: "Data Quality Matters",
      description: "Clean, accurate data is essential for AI success",
      impact: "Improved AI accuracy by 40%"
    },
    {
      lesson: "Measure Everything",
      description: "Establish clear KPIs and continuous monitoring",
      impact: "Enabled data-driven optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              <span>Success Case Study</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                AI Transformation Success
              </span>
              <br />
              <span className="text-white">Global Tech Giant Achieves</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                400% ROI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how a Fortune 500 technology company transformed their entire organization through comprehensive AI implementation, achieving remarkable results across all departments.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>January 27, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>18 months implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Global Fortune 500 Company</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Remarkable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The transformation delivered exceptional value across all key metrics
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {keyResults.map((result, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${result.color} flex items-center justify-center mx-auto mb-6`}>
                  <result.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {result.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transformation Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to enterprise-wide AI transformation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {transformationPhases.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {phase.phase}
                        </h3>
                        <p className="text-cyan-400 text-sm font-medium">
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <h4 className="text-cyan-400 font-semibold mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {phase.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <h4 className="text-purple-400 font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Department Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Department-by-Department Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specific improvements achieved across different business units
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {departmentResults.map((dept, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  {dept.department}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Before:</h4>
                    <p className="text-gray-300">{dept.before}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">After:</h4>
                    <p className="text-gray-300">{dept.after}</p>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold">
                      {dept.improvement}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">AI Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Lessons Learned
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Critical insights from this successful AI transformation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {lessonsLearned.map((lesson, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {lesson.lesson}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="text-green-400 font-semibold text-sm">
                      Impact: {lesson.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your AI Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us help you achieve similar results with a comprehensive AI transformation strategy tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-consulting"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-green-500/50 text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-500/10 hover:border-green-500 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AITransformationGlobalTechGiant2025;