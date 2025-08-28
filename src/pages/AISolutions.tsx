import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Users,
  Clock,
  Globe,
  Cpu,
  Shield,
  Rocket,
  Heart,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  MessageSquare,
  FileText,
  Search,
  ShoppingCart,
  Building,
  Code,
  Lock,
  Cloud,
  Sparkles,
  Flame,
  Crown,
  Star
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function AISolutions() {
  const aiSolutions = [
    {
      category: 'AI Business Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Transform raw data into actionable business insights',
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Custom Reporting',
        'Data Visualization',
        'Trend Analysis',
        'Performance Metrics'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify growth opportunities',
        'Optimize business processes',
        'Improve customer insights'
      ],
      href: '/services/ai-business-intelligence'
    },
    {
      category: 'AI Content Creation',
      icon: PenTool,
      color: 'from-blue-500 to-cyan-500',
      description: 'Generate high-quality content at scale with AI assistance',
      features: [
        'Content Generation',
        'SEO Optimization',
        'Brand Voice Consistency',
        'Multi-language Support',
        'Content Planning',
        'Performance Analytics'
      ],
      benefits: [
        'Scale content production',
        'Maintain quality standards',
        'Improve SEO rankings',
        'Reduce content costs'
      ],
      href: '/services/ai-content-creation'
    },
    {
      category: 'AI Customer Support',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      description: 'Intelligent customer support automation and optimization',
      features: [
        'AI Chatbots',
        'Smart Routing',
        '24/7 Availability',
        'Multi-language Support',
        'Sentiment Analysis',
        'Performance Tracking'
      ],
      benefits: [
        'Reduce support costs',
        'Improve response times',
        'Enhance customer satisfaction',
        'Scale support operations'
      ],
      href: '/services/ai-customer-support'
    },
    {
      category: 'AI Marketing Automation',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      description: 'Automate and optimize marketing campaigns with AI',
      features: [
        'Campaign Automation',
        'Customer Segmentation',
        'Personalization',
        'A/B Testing',
        'ROI Optimization',
        'Predictive Analytics'
      ],
      benefits: [
        'Increase marketing ROI',
        'Improve conversion rates',
        'Reduce manual work',
        'Better customer targeting'
      ],
      href: '/services/ai-marketing-automation'
    },
    {
      category: 'AI Project Management',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      description: 'Intelligent project planning, execution, and monitoring',
      features: [
        'Task Automation',
        'Resource Optimization',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Performance Analytics'
      ],
      benefits: [
        'Improve project success rates',
        'Reduce project delays',
        'Optimize resource allocation',
        'Enhance team productivity'
      ],
      href: '/services/ai-project-management'
    },
    {
      category: 'AI Workflow Automation',
      icon: Cpu,
      color: 'from-yellow-500 to-orange-500',
      description: 'Streamline business processes with intelligent automation',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Integration Management',
        'Error Handling',
        'Performance Monitoring',
        'Scalability'
      ],
      benefits: [
        'Reduce manual errors',
        'Increase efficiency',
        'Lower operational costs',
        'Improve compliance'
      ],
      href: '/services/ai-workflow-automation'
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for pattern recognition and prediction'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis for automation and insights'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, generation, and understanding'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with high accuracy'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Threat detection and prevention using AI'
    },
    {
      icon: Users,
      title: 'Personalization',
      description: 'Tailored experiences based on user behavior'
    }
  ];

  const successMetrics = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average Performance Improvement',
      description: 'Across all AI implementations'
    },
    {
      icon: DollarSign,
      value: '65%',
      label: 'Cost Reduction',
      description: 'In operational expenses'
    },
    {
      icon: Clock,
      value: '80%',
      label: 'Time Savings',
      description: 'In manual processes'
    },
    {
      icon: Star,
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Rate for AI solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Solutions Hub - Zion Tech Group"
        description="Discover our comprehensive AI and machine learning solutions that transform businesses. From automation to intelligence, we deliver cutting-edge AI technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions That
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization. Our AI solutions deliver measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Explore AI Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-purple-400 mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions leverage cutting-edge technologies to deliver intelligent, 
              scalable, and secure automation across your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4">
                  <capability.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From business intelligence to workflow automation, our AI solutions address 
              every aspect of modern business needs with intelligent automation and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center mr-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.category}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{solution.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.a
                  href={solution.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-400 font-medium rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven methodology ensures successful AI implementation with measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Analyze your business needs and identify AI opportunities',
                icon: Eye
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop comprehensive AI implementation roadmap',
                icon: Target
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy AI solutions with expert guidance and support',
                icon: Rocket
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement and performance optimization',
                icon: TrendingUp
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <phase.icon className="w-10 h-10 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start AI Journey
              </motion.a>
              <motion.a
                href="/request-quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Get AI Assessment
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
