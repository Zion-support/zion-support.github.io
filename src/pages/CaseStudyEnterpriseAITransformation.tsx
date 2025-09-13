import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Users,
  Target,
  CheckCircle,
  DollarSign,
  BarChart3,
  Award,
  Rocket
} from 'lucide-react';

export default function CaseStudyEnterpriseAITransformation() {
  const results = [
    {
      metric: "300%",
      description: "Increase in Operational Efficiency",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      metric: "90%",
      description: "Reduction in Manual Processes",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      metric: "50%",
      description: "Cost Savings Across Departments",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500"
    },
    {
      metric: "99.9%",
      description: "Accuracy in Automated Tasks",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  const challenges = [
    "Manual processes consuming 80% of workforce time",
    "High error rates in data processing and analysis",
    "Inconsistent customer service quality",
    "Limited scalability due to human resource constraints",
    "High operational costs and inefficiencies"
  ];

  const solutions = [
    {
      title: "AI-Powered Process Automation",
      description: "Implemented intelligent automation across all business processes",
      features: ["Workflow automation", "Document processing", "Data validation"]
    },
    {
      title: "Advanced Analytics Platform",
      description: "Real-time business intelligence and predictive analytics",
      features: ["Predictive modeling", "Real-time dashboards", "Automated reporting"]
    },
    {
      title: "Intelligent Customer Service",
      description: "AI-driven customer support with natural language processing",
      features: ["Chatbot integration", "Sentiment analysis", "Automated responses"]
    },
    {
      title: "Quantum-Enhanced Computing",
      description: "Quantum computing integration for complex problem solving",
      features: ["Quantum algorithms", "Optimization engines", "Advanced simulations"]
    }
  ];

  const timeline = [
    {
      phase: "Discovery & Analysis",
      duration: "2 weeks",
      description: "Comprehensive business analysis and requirement gathering",
      icon: Brain
    },
    {
      phase: "Solution Design",
      duration: "3 weeks",
      description: "Custom AI solution architecture and integration planning",
      icon: Target
    },
    {
      phase: "Implementation",
      duration: "6 weeks",
      description: "Phased rollout with minimal business disruption",
      icon: Zap
    },
    {
      phase: "Optimization",
      duration: "4 weeks",
      description: "Performance tuning and continuous improvement",
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Enterprise AI Transformation Case Study: 300% Efficiency Gains | Zion Tech Group"
        description="Discover how a Fortune 500 company achieved 300% operational efficiency gains through Zion Tech Group's AI transformation solutions. Real results, real impact."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Button 
            asChild
            variant="ghost"
            className="mb-8 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
          >
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Zion Tech Group</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise AI Transformation:
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              300% Efficiency Gains
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            How a Fortune 500 manufacturing company transformed their operations with Zion Tech Group's 
            AI solutions, achieving unprecedented efficiency gains and cost savings.
          </p>
        </motion.div>

        {/* Results Summary */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Transformation Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${result.color} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{result.metric}</div>
                    <div className="text-gray-300">{result.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Company Overview */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">Fortune 500</div>
                    <div className="text-gray-300">Manufacturing Company</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">25,000+</div>
                    <div className="text-gray-300">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">$2.5B</div>
                    <div className="text-gray-300">Annual Revenue</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A leading global manufacturing company with operations across 40+ countries, 
                  facing increasing pressure to improve efficiency and reduce costs while maintaining 
                  high-quality standards and customer satisfaction.
                </p>
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Challenges Faced</h2>
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Our AI Solutions</h2>
              <div className="grid grid-cols-1 gap-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-sm px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Implementation Timeline */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Implementation Timeline</h2>
              <div className="space-y-6">
                {timeline.map((phase, index) => {
                  const IconComponent = phase.icon;
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                          <span className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-sm px-3 py-1 rounded-full">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-gray-300">{phase.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Own Transformation?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Don't let your competitors get ahead. Start your AI transformation journey today 
                  with Zion Tech Group's proven solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to="/contact">
                      Start Your Transformation
                      <Rocket className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to="/case-studies">
                      View More Case Studies
                      <BarChart3 className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              className="sticky top-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Key Metrics */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ROI</span>
                    <span className="text-green-400 font-bold">450%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Payback Period</span>
                    <span className="text-cyan-400 font-bold">8 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Implementation Time</span>
                    <span className="text-purple-400 font-bold">15 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-green-400 font-bold">$2.3M annually</span>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <div className="space-y-2">
                  {["Machine Learning", "Natural Language Processing", "Quantum Computing", "Robotic Process Automation", "Advanced Analytics", "Cloud Infrastructure"].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Case Studies */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Related Case Studies</h3>
                <div className="space-y-4">
                  <Link to="/case-studies/healthcare-ai-transformation-success" className="block group">
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 group-hover:border-blue-400/50 transition-all duration-300">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                        Healthcare AI Transformation
                      </h4>
                      <p className="text-gray-400 text-sm">How AI revolutionized patient care...</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}