import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Database,
  Eye,
  MessageSquare,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function AISolutions() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const aiServices = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom ML models and algorithms tailored to your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Continuous Learning"],
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis for automation and quality control",
      features: ["Object Detection", "Facial Recognition", "Quality Inspection", "Process Automation"],
      color: "from-zion-purple to-zion-pink"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Text and speech analysis for customer insights and automation",
      features: ["Sentiment Analysis", "Chatbots", "Document Processing", "Language Translation"],
      color: "from-zion-green to-zion-emerald"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors to make data-driven decisions",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior", "Market Trends"],
      color: "from-zion-yellow to-zion-orange"
    },
    {
      icon: Zap,
      title: "Automation & RPA",
      description: "Intelligent process automation to streamline operations",
      features: ["Workflow Automation", "Data Entry", "Report Generation", "Process Optimization"],
      color: "from-zion-red to-zion-pink"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable business insights",
      features: ["Data Mining", "Business Intelligence", "Real-time Analytics", "Data Visualization"],
      color: "from-zion-indigo to-zion-purple"
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Monitor },
    { id: 'finance', name: 'Finance', icon: BarChart3 },
    { id: 'retail', name: 'Retail', icon: Smartphone },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'logistics', name: 'Logistics', icon: TrendingUp }
  ];

  const aiSolutions = [
    {
      title: "AI-Powered Customer Service",
      description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support",
      industry: "retail",
      benefits: ["24/7 Availability", "Instant Responses", "Cost Reduction", "Customer Satisfaction"],
      icon: MessageSquare
    },
    {
      title: "Predictive Maintenance",
      description: "AI-driven equipment monitoring to prevent downtime and optimize maintenance schedules",
      industry: "manufacturing",
      benefits: ["Reduced Downtime", "Cost Savings", "Extended Equipment Life", "Safety Improvement"],
      icon: Shield
    },
    {
      title: "Fraud Detection",
      description: "Advanced algorithms to detect and prevent fraudulent activities in real-time",
      industry: "finance",
      benefits: ["Real-time Detection", "False Positive Reduction", "Compliance", "Risk Mitigation"],
      icon: Eye
    },
    {
      title: "Medical Image Analysis",
      description: "AI-powered diagnostic tools for faster and more accurate medical imaging",
      industry: "healthcare",
      benefits: ["Faster Diagnosis", "Improved Accuracy", "Cost Reduction", "Better Patient Care"],
      icon: Brain
    },
    {
      title: "Supply Chain Optimization",
      description: "Intelligent forecasting and route optimization for logistics operations",
      industry: "logistics",
      benefits: ["Cost Reduction", "Efficiency", "Real-time Tracking", "Predictive Planning"],
      icon: TrendingUp
    },
    {
      title: "Personalized Recommendations",
      description: "AI-driven product and content recommendations for enhanced user experience",
      industry: "retail",
      benefits: ["Increased Sales", "Customer Engagement", "Personalization", "Conversion Rate"],
      icon: Target
    }
  ];

  const aiTechnologies = [
    {
      name: "Deep Learning",
      description: "Neural networks that learn complex patterns from large datasets",
      applications: ["Image Recognition", "Speech Processing", "Natural Language Understanding"],
      icon: Brain
    },
    {
      name: "Machine Learning",
      description: "Algorithms that improve through experience and data",
      applications: ["Predictive Modeling", "Classification", "Clustering", "Regression"],
      icon: Cpu
    },
    {
      name: "Computer Vision",
      description: "AI systems that interpret and understand visual information",
      applications: ["Object Detection", "Facial Recognition", "Quality Control", "Autonomous Vehicles"],
      icon: Eye
    },
    {
      name: "Natural Language Processing",
      description: "AI that understands and generates human language",
      applications: ["Chatbots", "Translation", "Sentiment Analysis", "Document Processing"],
      icon: MessageSquare
    },
    {
      name: "Reinforcement Learning",
      description: "AI that learns through trial and error and rewards",
      applications: ["Game AI", "Robotics", "Autonomous Systems", "Optimization"],
      icon: Rocket
    },
    {
      name: "Federated Learning",
      description: "Distributed AI training while preserving data privacy",
      applications: ["Healthcare", "Finance", "IoT Devices", "Privacy-Sensitive Applications"],
      icon: Shield
    }
  ];

  const successMetrics = [
    { metric: "95%", label: "Accuracy Rate", description: "Our AI models achieve industry-leading accuracy" },
    { metric: "10x", label: "Faster Processing", description: "Significant speed improvements over traditional methods" },
    { metric: "40%", label: "Cost Reduction", description: "Average cost savings for our clients" },
    { metric: "24/7", label: "Availability", description: "AI systems work around the clock" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const filteredSolutions = selectedIndustry === 'all' 
    ? aiSolutions 
    : aiSolutions.filter(solution => solution.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI Solutions - Zion Tech Group" 
        description="Explore our AI solutions including analytics, automation, and intelligent platforms."
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our portfolio of AI-powered solutions spanning predictive analytics, automation, intelligent agents, and decision support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'services'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'solutions'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Solutions
            </button>
            <button
              onClick={() => setActiveTab('technologies')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'technologies'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Technologies
            </button>
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 pb-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">AI Services</h2>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedIndustry === industry.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <industry.icon className="w-4 h-4 inline mr-2" />
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-8 h-8 text-zion-cyan mr-3" />
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'technologies' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8">AI Technologies</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {aiTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{tech.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Applications:</h4>
                    <ul className="space-y-1">
                      {tech.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
