import React from 'react';
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
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
    },
    {
      icon: Globe,
      title: "Global Research Network",
<<<<<<< HEAD
      description: "Access to worldwide research databases and collaborations"
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
    }
  ];

  const benefits = [
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
    "10x faster research completion",
    "Comprehensive data coverage",
    "Real-time insights and updates",
    "Reduced research bias",
    "24/7 autonomous operation",
    "Multi-language support"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
  ];

  const useCases = [
    {
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
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
    }
  ];

  return (
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
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
        </div>
      </section>

      {/* Features Section */}
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
            ))}
          </div>
        </div>
      </section>

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
            ))}
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
>>>>>>> origin/cursor/website-audit-and-enhancement-98d0
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
import { SEOHead } from '../components/SEOHead';

const AIAutonomousResearch: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Research | Zion Tech Group"
        description="Revolutionary AI autonomous research platform. Intelligent research automation, data analysis, and scientific discovery powered by artificial intelligence."
        keywords="AI autonomous research, research automation, AI data analysis, scientific discovery, autonomous research, intelligent research"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-research"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              AI Autonomous Research
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform research with our AI Autonomous Research platform. 
              Intelligent automation, data analysis, and scientific discovery without human limitations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Intelligent Research Revolution
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Autonomous Research platform represents the future of scientific discovery, 
                combining advanced AI with research automation to deliver breakthrough insights.
              </p>
              <p className="text-gray-300 text-lg">
                From hypothesis generation to data analysis, our AI operates autonomously, 
                ensuring comprehensive research coverage and innovative discoveries around the clock.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Research Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Hypothesis Generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Data Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                  Literature Review
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Pattern Recognition
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Research Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hypothesis Testing</h3>
                <p className="text-gray-400">Intelligent hypothesis generation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Data Analysis</h3>
                <p className="text-gray-400">Advanced data processing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253zm0 0C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Literature Review</h3>
                <p className="text-gray-400">Comprehensive research analysis</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Research
            </button>
          </div>
        </div>
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
  );
};

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
