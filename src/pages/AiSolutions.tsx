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
  Monitor,
  Network
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
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis for automation and quality control",
      features: ["Object Detection", "Facial Recognition", "Quality Inspection", "Process Automation"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Text and speech analysis for customer insights and automation",
      features: ["Sentiment Analysis", "Chatbots", "Document Processing", "Language Translation"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors to make data-driven decisions",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior", "Market Trends"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Automation & RPA",
      description: "Intelligent process automation to streamline operations",
      features: ["Workflow Automation", "Data Entry", "Report Generation", "Process Optimization"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable business insights",
      features: ["Data Mining", "Business Intelligence", "Real-time Analytics", "Data Visualization"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Monitor },
    { id: 'finance', name: 'Finance', icon: BarChart3 },
    { id: 'retail', icon: Smartphone, name: 'Retail' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'logistics', name: 'Logistics', icon: Network }
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
        description="Explore our comprehensive AI solutions including machine learning, computer vision, natural language processing, and more."
        keywords="AI solutions, machine learning, computer vision, NLP, predictive analytics, automation"
      />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver innovative AI that drives results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* AI Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Industry Solutions */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI solutions are tailored for specific industries, delivering targeted results and measurable impact.
          </p>
        </motion.div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedIndustry === industry.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <industry.icon className="w-4 h-4" />
              {industry.name}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-4">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI solutions deliver measurable impact across all industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.metric}</div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
