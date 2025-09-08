import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Users, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Cpu,
  Network,
  Cloud,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  PieChart,
  LineChart,
  Database,
  Settings,
  Monitor,
  Award,
  Clock,
  Star,
  Microscope,
  TestTube,
  BarChart3
} from 'lucide-react';

const AIAutonomousResearch: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Intelligent Research Discovery",
      description: "AI-powered research exploration and hypothesis generation"
    },
    {
      icon: BookOpen,
      title: "Literature Analysis",
      description: "Comprehensive literature review and knowledge synthesis"
    },
    {
      icon: Brain,
      title: "Data Analysis",
      description: "Advanced data processing and statistical analysis"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Research methodology validation and result verification"
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Enhanced research collaboration and knowledge sharing"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Globe, 
  Database, 
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  Microscope,
  Lightbulb,
  Target,
  BarChart3,
  Network
} from 'lucide-react';

export default function AIAutonomousResearch() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Research Automation",
      description: "AI-powered research systems that autonomously discover, analyze, and synthesize information from multiple sources."
    },
    {
      icon: Search,
      title: "Advanced Data Mining",
      description: "Deep learning algorithms that extract meaningful insights from vast datasets and research papers."
    },
    {
      icon: BookOpen,
      title: "Literature Review Automation",
      description: "Automated systematic literature reviews with intelligent citation analysis and trend identification."
    },
    {
      icon: TrendingUp,
      title: "Predictive Research Insights",
      description: "Forecast research trends and identify emerging opportunities in your field of study."
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "AI-facilitated collaboration between researchers across different disciplines and institutions."
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    },
    {
      icon: Globe,
      title: "Global Research Network",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      description: "Access to worldwide research databases and collaborations"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      description: "Access to worldwide research databases and cross-cultural research collaboration."
    }
  ];

  const researchAreas = [
    {
      title: "Scientific Research",
      description: "Automated hypothesis generation, experimental design, and data analysis for scientific breakthroughs.",
      icon: Microscope
    },
    {
      title: "Market Research",
      description: "Intelligent market analysis, competitor research, and trend forecasting for business decisions.",
      icon: BarChart3
    },
    {
      title: "Academic Research",
      description: "Automated literature reviews, citation analysis, and research paper generation.",
      icon: BookOpen
    },
    {
      title: "Technology Research",
      description: "Emerging technology analysis, patent research, and innovation tracking.",
      icon: Lightbulb
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const benefits = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
    "Automated research discovery and hypothesis generation",
    "24/7 autonomous research operations",
    "Real-time data analysis and insights",
    "Reduced research time by 50%",
    "Improved research quality and accuracy",
    "Enhanced collaboration and knowledge sharing",
    "Scalable research capabilities for any field",
    "Continuous learning and adaptation to new data"
  ];

  const researchServices = [
    {
      title: "Research Discovery",
      description: "AI-powered research exploration and hypothesis generation",
      icon: Search
    },
    {
      title: "Data Analysis",
      description: "Advanced data processing and statistical analysis",
      icon: BarChart3
    },
    {
      title: "Literature Review",
      description: "Comprehensive literature analysis and synthesis",
      icon: BookOpen
    },
    {
      title: "Collaboration Platform",
      description: "Enhanced research collaboration and knowledge sharing",
      icon: Users
    }
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    "10x faster research completion",
    "Comprehensive data coverage",
    "Real-time insights and updates",
    "Reduced research bias",
    "24/7 autonomous operation",
    "Multi-language support"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  ];

  const useCases = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: "Academic Research",
      description: "University and institutional research with AI-powered insights",
      icon: "🎓"
    },
    {
      title: "Scientific Discovery",
      description: "Breakthrough research in science, technology, and medicine",
      icon: "🔬"
    },
    {
      title: "Market Research",
      description: "Business intelligence and market analysis",
      icon: "📊"
    },
    {
      title: "Policy Research",
      description: "Government and policy analysis and recommendations",
      icon: "🏛️"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: "Pharmaceutical Research",
      description: "AI-powered drug discovery and clinical trial analysis."
    },
    {
      title: "Financial Research",
      description: "Market analysis, risk assessment, and investment opportunity identification."
    },
    {
      title: "Academic Publishing",
      description: "Automated literature reviews and research paper generation."
    },
    {
      title: "Competitive Intelligence",
      description: "Real-time competitor analysis and market positioning."
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Search className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Research Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Revolutionize research with intelligent, autonomous systems that accelerate discovery and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Autonomous Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your research capabilities with autonomous AI systems that discover, 
              analyze, and synthesize information 24/7, accelerating breakthroughs across all fields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Researching
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI systems autonomously conduct comprehensive research across multiple domains, 
              providing insights that would take humans months or years to discover.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
=======
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI research platform combines cutting-edge technology with comprehensive research methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Research Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From scientific discovery to market intelligence, our AI research systems cover 
              every major research area with unprecedented depth and speed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
=======
      {/* Research Services Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Research Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research discovery to collaboration, our platform handles all aspects of research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits and Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Use Cases</h2>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-gray-300 text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Autonomous Research?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and innovation in your research operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Research Operations
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Research Performance
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Research Speed</span>
                      <span className="font-semibold text-green-600">50% Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy Rate</span>
                      <span className="font-semibold text-green-600">95%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Discovery Rate</span>
                      <span className="font-semibold text-green-600">3x Higher</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Collaboration</span>
                      <span className="font-semibold text-green-600">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI systems autonomously conduct comprehensive research across multiple domains, 
              providing insights that would take humans months or years to discover.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI research platform transforms operations across various fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{useCase.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
=======
      {/* Research Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From scientific discovery to market intelligence, our AI research systems cover 
              every major research area with unprecedented depth and speed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-purple-400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Analysis</h3>
              <p className="text-gray-300">Advanced AI algorithms that identify patterns, correlations, and insights</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-pink-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Accelerated Discovery</h3>
              <p className="text-gray-300">Reduce research time from months to days with autonomous workflows</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-green-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Synthesis</h3>
              <p className="text-gray-300">Automated compilation and analysis of research papers, datasets, and findings</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Literature Review</h3>
              <p className="text-gray-300">Comprehensive analysis of existing research and identification of gaps</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-red-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Trend Prediction</h3>
              <p className="text-gray-300">Forecast emerging trends and research directions using predictive analytics</p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Research Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">Scientific Research</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Drug discovery and pharmaceutical research</li>
                  <li>• Climate change and environmental studies</li>
                  <li>• Quantum physics and materials science</li>
                  <li>• Space exploration and astronomy</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">Business Intelligence</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Market trend analysis</li>
                  <li>• Competitive intelligence</li>
                  <li>• Consumer behavior research</li>
                  <li>• Industry disruption patterns</li>
                </ul>
              </div>
            </div>
          </div>

>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Research Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI and machine learning technologies for maximum research efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Deep Learning", desc: "Neural networks" },
              { icon: Database, name: "Big Data", desc: "Real-time processing" },
              { icon: Network, name: "Cloud Computing", desc: "Scalable resources" },
              { icon: Zap, name: "Natural Language", desc: "Text understanding" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous research with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Researching
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join the future of intelligent, autonomous research with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>)};
export default AIAutonomousResearch;
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous research with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Researching
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
