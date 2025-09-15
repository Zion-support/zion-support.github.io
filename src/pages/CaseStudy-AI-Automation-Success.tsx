import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  TrendingUp, 
  Users, 
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Building,
  Zap,
  Award,
  PieChart,
  LineChart
} from 'lucide-react';

const CaseStudyAIAutomationSuccess: React.FC = () => {
  const timeline = [
    {
      phase: "Discovery & Analysis",
      duration: "2 weeks",
      description: "Analyzed current processes and identified automation opportunities",
      achievements: [
        "Mapped 15 core business processes",
        "Identified 80% automation potential",
        "Created ROI projections"
      ]
    },
    {
      phase: "Solution Design",
      duration: "3 weeks",
      description: "Designed custom AI automation workflows tailored to business needs",
      achievements: [
        "Created 12 automated workflows",
        "Integrated with existing systems",
        "Developed custom AI models"
      ]
    },
    {
      phase: "Implementation",
      duration: "4 weeks",
      description: "Deployed automation solutions with comprehensive testing",
      achievements: [
        "Deployed all 12 workflows",
        "Achieved 99.5% uptime",
        "Trained 50+ staff members"
      ]
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring and improvement of automation systems",
      achievements: [
        "Monthly performance reviews",
        "Process optimization",
        "Additional workflow creation"
      ]
    }
  ];

  const metrics = [
    {
      icon: Clock,
      metric: "75%",
      label: "Reduction in Processing Time",
      description: "From 8 hours to 2 hours average processing time"
    },
    {
      icon: DollarSign,
      metric: "$180K",
      label: "Annual Cost Savings",
      description: "Reduced operational costs by eliminating manual tasks"
    },
    {
      icon: TrendingUp,
      metric: "40%",
      label: "Increase in Productivity",
      description: "Team focused on strategic initiatives instead of routine tasks"
    },
    {
      icon: Target,
      metric: "99.5%",
      label: "Accuracy Rate",
      description: "Near-perfect accuracy in automated processes"
    }
  ];

  const challenges = [
    {
      challenge: "Manual Data Entry Errors",
      solution: "AI-powered document processing with OCR and validation",
      result: "Eliminated 95% of data entry errors"
    },
    {
      challenge: "Slow Customer Response Times",
      solution: "Intelligent chatbot with instant response capabilities",
      result: "Reduced average response time from 4 hours to 2 minutes"
    },
    {
      challenge: "Inconsistent Process Execution",
      solution: "Standardized automated workflows with built-in compliance",
      result: "100% process compliance and consistency"
    },
    {
      challenge: "High Operational Costs",
      solution: "Comprehensive automation reducing manual labor requirements",
      result: "50% reduction in operational costs"
    }
  ];

  const technologies = [
    "Natural Language Processing (NLP)",
    "Machine Learning Algorithms",
    "Robotic Process Automation (RPA)",
    "OCR and Document Processing",
    "API Integration Platform",
    "Cloud Infrastructure",
    "Real-time Analytics Dashboard",
    "Custom AI Models"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Automation Success Story: 75% Time Reduction & $180K Savings | Zion Tech Group"
        description="Discover how a Fortune 500 company achieved 75% reduction in processing time and $180K annual savings through our AI automation solutions. Read the complete case study."
        keywords="AI automation case study, business automation success, ROI automation, AI implementation results"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Success Story</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI Automation{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Success Story
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            How a Fortune 500 company achieved 75% reduction in processing time, 
            $180K annual savings, and 99.5% accuracy through intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/AI-Business-Automation"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Get Similar Results</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>

        {/* Company Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Industry</div>
                    <div className="text-gray-300">Financial Services</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Company Size</div>
                    <div className="text-gray-300">Fortune 500 (5,000+ employees)</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Global Presence</div>
                    <div className="text-gray-300">25+ countries worldwide</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Annual Revenue</div>
                    <div className="text-gray-300">$2.5B+ annually</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 mb-4">
                This leading financial services company was struggling with manual, time-consuming 
                processes that were prone to errors and costly to maintain. With thousands of 
                documents processed daily and complex regulatory requirements, they needed a 
                solution that could scale with their growth while maintaining accuracy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mr-3" />
                  8+ hours average processing time per transaction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mr-3" />
                  15% error rate in manual data entry
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mr-3" />
                  $2M+ annual cost in manual labor
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mr-3" />
                  Customer satisfaction below industry standards
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Key Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Results Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-xl font-semibold text-gray-300 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Implementation Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Implementation Timeline</h2>
          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <div className="text-blue-400 font-semibold">{phase.duration}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Challenges & Solutions</h2>
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-2">Challenge</h3>
                    <p className="text-gray-300">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-2">Solution</h3>
                    <p className="text-gray-300">{item.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-400 mb-2">Result</h3>
                    <p className="text-gray-300">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies Used</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mr-3" />
                  <span className="text-gray-300 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ROI Analysis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">ROI Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Implementation Cost</span>
                  <span className="text-white font-semibold">$120,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Training & Support</span>
                  <span className="text-white font-semibold">$25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ongoing Maintenance</span>
                  <span className="text-white font-semibold">$15,000/year</span>
                </div>
                <hr className="border-white/20" />
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total Investment (Year 1)</span>
                  <span className="text-white font-bold">$160,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Returns</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Labor Cost Savings</span>
                  <span className="text-green-400 font-semibold">$180,000/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Error Reduction Savings</span>
                  <span className="text-green-400 font-semibold">$45,000/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Productivity Gains</span>
                  <span className="text-green-400 font-semibold">$75,000/year</span>
                </div>
                <hr className="border-white/20" />
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total Annual Savings</span>
                  <span className="text-green-400 font-bold">$300,000/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">ROI (Year 1)</span>
                  <span className="text-green-400 font-bold">87.5%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging AI automation to transform their 
            operations. Get started with a free consultation and discover your automation potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Start Your Success Story</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services/AI-Business-Automation"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-blue-400 hover:bg-white/10 transition-all duration-300"
            >
              Explore AI Automation Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyAIAutomationSuccess;