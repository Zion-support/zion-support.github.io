import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Settings, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Download, 
  BookOpen, 
  MessageSquare, 
  Workflow, 
  Target, 
  Cpu, 
  Database,
  Cloud,
  Globe,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns from your business processes and continuously improves efficiency.'
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic optimization of business operations based on real-time data and market conditions.'
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails for all operations.'
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Automated inventory management, demand forecasting, and supplier coordination.',
      icon: Workflow
    },
    {
      title: 'Customer Service',
      description: 'Intelligent chatbots, ticket routing, and automated customer support workflows.',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, expense management, and financial reporting.',
      icon: BarChart3
    },
    {
      title: 'HR & Recruitment',
      description: 'Automated candidate screening, onboarding processes, and performance management.',
      icon: Users
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve process efficiency by 60%',
    'Eliminate manual errors and delays',
    '24/7 automated operations',
    'Scalable infrastructure for growth',
    'Real-time monitoring and analytics'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Logistics',
    'Technology',
    'Energy',
    'Education'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2"/>
              Autonomous Operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered automation that orchestrates complex operations, 
              optimizes processes, and drives unprecedented efficiency across your organization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border border-green-400/40 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to automate and optimize your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300">
              Proven solutions across diverse business domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Autonomous Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience unprecedented efficiency and productivity with our autonomous 
                business operations platform. Let AI handle the routine while you focus on strategy.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (<div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                    <span className="text-gray-300">{benefit}</span>
                  </div>))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-green-400 font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Efficiency Gain</span>
                    <span className="text-green-400 font-semibold">60%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Error Reduction</span>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to work across industries, with specialized 
              automation solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (<div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>))}
          </div>
        </div>
      </section>
      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform leverages the latest advancements in AI, machine learning, 
              and cloud computing to deliver enterprise-grade performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300 text-lg mb-4">
                Advanced algorithms that learn from your business processes and continuously improve performance.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Natural Language Processing</li>
                <li>• Predictive Analytics</li>
                <li>• Computer Vision</li>
                <li>• Deep Learning Models</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 text-lg mb-4">
                Scalable, secure, and reliable cloud infrastructure that grows with your business.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Multi-cloud Support</li>
                <li>• Auto-scaling</li>
                <li>• High Availability</li>
                <li>• Disaster Recovery</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 text-lg mb-4">
                Bank-level security with comprehensive compliance and audit capabilities.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• SOC 2 Type II</li>
                <li>• GDPR Compliance</li>
                <li>• End-to-end Encryption</li>
                <li>• Role-based Access Control</li>
              </ul>
            </div>
      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Automation Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Harness the power of AI to automate complex business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Automation</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Intelligent bots that learn from your business processes and continuously optimize operations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Real-time insights and predictive analytics to optimize business performance and decision-making.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Seamless integration with your team workflows and enhanced collaboration tools.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Bank-grade security with role-based access control and comprehensive audit trails.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Process thousands of operations per second with our optimized AI algorithms.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Scalability</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Scale your operations globally with our distributed cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Process Automation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Automate critical business processes across all departments
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Finance & Accounting</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Automate invoice processing, expense management, and financial reporting with AI-powered accuracy.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Automated invoice processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Expense categorization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Financial reporting automation
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Human Resources</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Streamline recruitment, onboarding, and employee management with intelligent automation.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Resume screening and matching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Onboarding workflow automation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Performance review scheduling
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Service</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Enhance customer experience with AI-powered support and automated issue resolution.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Intelligent ticket routing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Automated response generation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Customer sentiment analysis
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Management</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Optimize inventory, predict demand, and streamline logistics with predictive AI.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Demand forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Inventory optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Route optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technology Stack Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-zion-slate-light text-sm">
                Advanced ML algorithms for pattern recognition and predictive analytics
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Native</h3>
              <p className="text-zion-slate-light text-sm">
                Built on scalable cloud infrastructure for global deployment
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
              <p className="text-zion-slate-light text-sm">
                Live dashboards and instant insights for decision-making
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light text-sm">
                SOC2 compliant with advanced encryption and access controls
              </p>
            </div>
      {/* Integration Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing tools and systems</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
                                                            "Salesforce", "HubSpot", "Slack", "Microsoft 365", "Google Workspace", "Zapier",
                                                            "QuickBooks", "Shopify", "WooCommerce", "Magento", "AWS", "Azure"
                                                        ].map((tool, index) => (<div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-green-500/50 transition-colors duration-200">
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>))}
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-green-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Business Automation
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our platform covers every aspect of business operations, from customer service 
                to financial management, all running autonomously with AI oversight.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (<div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Settings className="w-12 h-12 text-green-400 mx-auto mb-4"/>
                  <h3 className="text-2xl font-bold text-white mb-2">Platform Benefits</h3>
                  <p className="text-gray-300">Transform your business operations today</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (<div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous operations platform is designed to work across all industries, 
              with specialized solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (<div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have transformed their operations with our 
            autonomous platform. Start your automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
            <Link to="/pricing" className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learn More About Autonomous Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our resources to understand how autonomous operations can transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
              <p className="text-gray-300 mb-4">Comprehensive guides and API documentation for developers.</p>
              <Link to="/docs" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                Read Docs →
              </Link>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SDK & Tools</h3>
              <p className="text-gray-300 mb-4">Download our SDK and development tools to get started.</p>
              <Link to="/downloads" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                Download →
              </Link>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
              <p className="text-gray-300 mb-4">Get help from our automation experts and support team.</p>
              <Link to="/contact" className="text-green-400 hover:text-green-300 transition-colors duration-300">
                Contact Support →
              </Link>
            </div>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the autonomous operations revolution and transform your business efficiency today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2"/>
            </button>
            <button className="px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/20 rounded-lg font-semibold transition-all duration-300">
              Contact Sales
            </button>
          </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Contact Sales
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already experiencing the future of autonomous operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Link>
              <Link to="/pricing" className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200">
                View Pricing
              </Link>
            </></div>
          </div>
        </section>
      </div>
</>
      </section>
    </div>
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-green-400 mx-auto mb-6"/>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Autonomous?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward fully autonomous business operations today 
                and discover the unlimited potential of AI-powered business management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline"/>
                </button>
                <button className="px-8 py-4 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
</>
<>
      <SEOHead customData={{
                                                            title: "Autonomous Business Operations Platform - Zion Tech Group",
                                                            description: "Revolutionary AI-powered platform that automates and optimizes your entire business operations. Streamline processes, reduce costs, and boost efficiency with intelligent automation.",
                                                            keywords: ["business automation", "AI operations", "process automation", "business intelligence", "autonomous systems", "enterprise automation", "workflow automation"],
                                                            type: "website",
                                                            url: "https://ziontechgroup.com/autonomous-business-operations-platform"
                                                        }}/>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business Operations Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your business with AI-powered automation that works 24/7. Streamline operations, reduce costs, and boost efficiency across your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5"/>
                </Link>
                <Link to="/services/ai-autonomous-systems" className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (<div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400"/>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous platform combines cutting-edge AI with business process automation to deliver unprecedented operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (<div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyan-400"/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2"/>
                        {benefit}
                      </li>))}
                  </ul>
                </div>))}
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our autonomous platform is revolutionizing business operations across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (<div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <useCase.icon className="h-12 w-12 text-cyan-400"/>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their operations with our autonomous platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
              <Link to="/services/ai-autonomous-systems" className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
</>
  );
}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link to="/pricing" className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"/>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses that have already transformed their operations 
            with our autonomous platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
            <Link to="/pricing" className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-200">
              View Pricing Plans
            </Link>
  const testimonials = [
    {name}: "Operations Director",
      role: "Chief Operations Officer",
      company: "Global Manufacturing Co.",
      content: "The autonomous operations platform has transformed our business. We've achieved 60% efficiency gains and 24/7 operations.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {name}: "Sarah Operations",
      role: "VP of Operations",
      company: "Tech Solutions Inc.",
      content: "The platform's autonomous decision-making capabilities have revolutionized how we manage our operations.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {name}: "Michael Operations",
      role: "Operations Manager",
      company: "Innovation Corp",
      content: "We've seen unprecedented improvements in efficiency and cost reduction with this platform.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 quantum-particles">
          <div className="quantum-particle"></div>
          <div className="quantum-particle"></div>
          <div className="quantum-particle"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/50 text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2"/>
              Autonomous Operations Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Business Operations Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with our revolutionary autonomous platform. 
              Let AI manage your business 24/7 with intelligent automation and decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center">
                <Play className="w-5 h-5 mr-2"/>
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2"/>
                Get Started
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-400">Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-400">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with intelligent automation to deliver 
              unprecedented business operations capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (<div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"/>
                          {benefit}
                        </li>))}
                    </ul>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Operations Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From financial management to supply chain optimization, our platform handles every aspect of business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (<div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-400 mb-4">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (<li key={idx} className="flex items-start text-gray-300">
                      <Target className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0"/>
                      {item}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Choose Your Autonomous Operations Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business operations and automation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (<div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${plan.popular
                                                                ? 'bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-green-400/50 shadow-2xl shadow-green-500/30'
                                                                : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'}`}>
                {plan.popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  </div>)}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                                                ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-400 hover:to-cyan-400'
                                                                : 'border border-green-400/50 text-green-400 hover:bg-green-400/20'}`}>
                  Get Started
                </button>
              </div>))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 relative bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted by Operations Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how forward-thinking companies are transforming their operations with our autonomous platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (<div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.role}</p>
                    <p className="text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
                <div className="flex items-center mt-4">
                  <div className="text-3xl mr-2">{testimonial.rating}</div>
                  <div className="w-16 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: `${testimonial.rating * 20}%` }}></div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/50">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ready for Autonomous Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous revolution and experience unprecedented business efficiency and scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center">
                <Rocket className="w-5 h-5 mr-2"/>
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2"/>
                Schedule Demo
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
      {/* Footer Navigation */}
      <section className="py-12 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Operations Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/ai-autonomous-business-manager" className="text-gray-300 hover:text-green-400 transition-colors">AI Business Manager</Link></li>
                <li><Link to="/ai-autonomous-business-manager-2029" className="text-gray-300 hover:text-green-400 transition-colors">AI Business Manager 2029</Link></li>
                <li><Link to="/quantum-neural-network-platform" className="text-gray-300 hover:text-green-400 transition-colors">Quantum Neural Network Platform</Link></li>
                <li><Link to="/services/ai-autonomous-systems" className="text-gray-300 hover:text-green-400 transition-colors">AI Autonomous Systems</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><Link to="/solutions/enterprise" className="text-gray-300 hover:text-green-400 transition-colors">Enterprise</Link></li>
                <li><Link to="/solutions/healthcare" className="text-gray-300 hover:text-green-400 transition-colors">Healthcare</Link></li>
                <li><Link to="/marketplace" className="text-gray-300 hover:text-green-400 transition-colors">Marketplace</Link></li>
                <li><Link to="/emerging-tech" className="text-gray-300 hover:text-green-400 transition-colors">Emerging Tech</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-green-400 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-green-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/webinars" className="text-gray-300 hover:text-green-400 transition-colors">Webinars</Link></li>
                <li><Link to="/white-papers" className="text-gray-300 hover:text-green-400 transition-colors">White Papers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;
