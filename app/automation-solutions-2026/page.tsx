import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Settings, 
  Workflow, 
  Target, 
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Brain,
  Database,
  Network,
  Shield,
  Globe,
  BookOpen,
  Download,
  Play,
  Calendar
} from 'lucide-react';

const AutomationSolutions2026Page: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to optimize business processes',
      features: ['Self-learning algorithms', 'Process optimization', 'Real-time adaptation', 'Error reduction'],
      impact: '85% efficiency increase',
      icon: <Bot className="w-12 h-12" />,
      color: 'from-blue-600 to-cyan-600',
      details: 'Our intelligent process automation uses machine learning to continuously optimize business processes, reducing errors and increasing efficiency by up to 85%.',
      timeline: 'Available Now',
      status: 'Production Ready'
    },
    {
      title: 'Autonomous Decision Systems',
      description: 'AI systems that make complex decisions without human intervention',
      features: ['Real-time decision making', 'Risk assessment', 'Strategic planning', 'Performance monitoring'],
      impact: '99.9% decision accuracy',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-purple-600 to-pink-600',
      details: 'Autonomous decision systems analyze vast amounts of data in real-time to make optimal decisions, achieving 99.9% accuracy in complex scenarios.',
      timeline: 'Q2 2026',
      status: 'Beta Testing'
    },
    {
      title: 'Predictive Maintenance AI',
      description: 'Predict and prevent equipment failures before they occur',
      features: ['Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Uptime maximization'],
      impact: '90% reduction in downtime',
      icon: <Settings className="w-12 h-12" />,
      color: 'from-green-600 to-emerald-600',
      details: 'Predictive maintenance AI uses sensor data and machine learning to predict equipment failures before they happen, reducing downtime by 90%.',
      timeline: 'Q3 2026',
      status: 'Pilot Phase'
    },
    {
      title: 'Smart Resource Management',
      description: 'Optimize resource allocation across all business operations',
      features: ['Resource optimization', 'Cost reduction', 'Capacity planning', 'Performance tracking'],
      impact: '60% cost reduction',
      icon: <Target className="w-12 h-12" />,
      color: 'from-orange-600 to-red-600',
      details: 'Smart resource management systems automatically optimize resource allocation across all business operations, reducing costs by up to 60%.',
      timeline: 'Q4 2026',
      status: 'Development'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Process tasks 1000x faster than traditional methods'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Error-Free',
      description: 'Achieve 99.9% accuracy in automated processes'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable',
      description: 'Scale operations without proportional cost increases'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Operations',
      description: 'Run continuously without breaks or downtime'
    }
  ];

  const industries = [
    { 
      name: 'Manufacturing', 
      automation: '95%', 
      savings: '$2.5M',
      applications: ['Production Line Automation', 'Quality Control', 'Supply Chain Optimization'],
      caseStudy: 'Automotive manufacturer reduced defects by 95% and increased production by 40%'
    },
    { 
      name: 'Healthcare', 
      automation: '88%', 
      savings: '$1.8M',
      applications: ['Patient Scheduling', 'Medical Records', 'Diagnostic Assistance'],
      caseStudy: 'Hospital system reduced patient wait times by 60% and improved accuracy by 90%'
    },
    { 
      name: 'Finance', 
      automation: '92%', 
      savings: '$3.2M',
      applications: ['Fraud Detection', 'Risk Assessment', 'Customer Service'],
      caseStudy: 'Bank reduced fraud losses by 85% and improved customer satisfaction by 70%'
    },
    { 
      name: 'Retail', 
      automation: '85%', 
      savings: '$1.5M',
      applications: ['Inventory Management', 'Customer Service', 'Demand Forecasting'],
      caseStudy: 'Retail chain optimized inventory and reduced waste by 80%'
    },
    { 
      name: 'Logistics', 
      automation: '90%', 
      savings: '$2.1M',
      applications: ['Route Optimization', 'Warehouse Management', 'Delivery Tracking'],
      caseStudy: 'Logistics company reduced delivery times by 50% and fuel costs by 30%'
    },
    { 
      name: 'Energy', 
      automation: '87%', 
      savings: '$2.8M',
      applications: ['Grid Management', 'Predictive Maintenance', 'Energy Optimization'],
      caseStudy: 'Utility company reduced outages by 75% and improved efficiency by 45%'
    }
  ];

  const stats = [
    { number: '95%', label: 'Process Automation' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '1000x', label: 'Speed Increase' },
    { number: '60%', label: 'Cost Reduction' }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Analyze current processes and identify automation opportunities',
      duration: '2-4 weeks',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Design custom automation solutions for your specific needs',
      duration: '4-6 weeks',
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy automation solutions with minimal disruption',
      duration: '6-8 weeks',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Optimization',
      description: 'Continuously monitor and optimize performance',
      duration: 'Ongoing',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6"
            >
              <Bot className="w-5 h-5 mr-2" />
              Advanced Automation Solutions 2026
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Business Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge automation solutions that deliver unprecedented efficiency, 
              accuracy, and cost savings. The future of work is automated.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Solution
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our most advanced automation solution
            </p>
          </div>

          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${solutions[activeSolution].color} mb-6`}>
                  {solutions[activeSolution].icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {solutions[activeSolution].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {solutions[activeSolution].description}
                </p>
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-white mb-2">
                    {solutions[activeSolution].impact}
                  </div>
                  <div className="text-gray-300 text-sm">
                    Average Performance Impact
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {solutions[activeSolution].timeline}
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {solutions[activeSolution].status}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {solutions[activeSolution].features.map((feature, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-lg p-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Technical Details</h5>
                  <p className="text-gray-300 text-sm">
                    {solutions[activeSolution].details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Navigation */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSolution(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSolution === index ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Automation Solutions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our complete suite of automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 cursor-pointer ${
                  activeSolution === index ? 'ring-2 ring-green-400' : ''
                }`}
                onClick={() => setActiveSolution(index)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} mb-4`}>
                  {solution.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {solution.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {solution.description}
                </p>
                <div className="text-green-400 text-sm font-semibold mb-2">
                  {solution.impact}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{solution.timeline}</span>
                  <span className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {solution.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industry Impact & Results
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how our automation solutions are transforming industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {industry.applications.map((app, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Automation:</span>
                    <span className="text-green-400 font-semibold text-sm">{industry.automation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Savings:</span>
                    <span className="text-blue-400 font-semibold text-sm">{industry.savings}</span>
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <h5 className="text-white font-semibold text-sm mb-1">Case Study:</h5>
                  <p className="text-gray-300 text-xs">{industry.caseStudy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Implementation Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our proven 4-step process ensures successful automation implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div className="text-green-400 mb-2 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {step.description}
                </p>
                <div className="text-blue-400 text-xs font-semibold">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Automation Solutions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the key benefits that make our automation solutions the best choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with our 
              advanced automation solutions. Start your automation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Automation Journey
              </button>
              <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationSolutions2026Page;