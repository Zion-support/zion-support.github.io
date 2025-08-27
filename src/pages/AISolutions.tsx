import React from 'react';
import { SEO } from '@/components/SEO';

const AISolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="AI Solutions - Zion Tech Group" 
        description="Explore our AI solutions including analytics, automation, and intelligent platforms."
      />
      <div className="container-responsive py-16">
        <h1 className="text-4xl font-bold mb-4">AI Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          Discover our portfolio of AI-powered solutions spanning predictive analytics, automation, intelligent agents, and decision support.
        </p>
      </div>
    </div>
  );
};

export default AISolutions;

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
  Play,
  Code,
  Network,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

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
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to predictive analytics, we deliver AI that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get AI Consultation
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI solutions span the entire spectrum of artificial intelligence, 
              from foundational machine learning to cutting-edge deep learning applications.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aiServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions by Industry
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how AI is transforming different industries and creating new opportunities for growth and efficiency.
            </p>
          </motion.div>

          {/* Industry Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-cyan/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {industry.name}
                </button>
              );
            })}
          </motion.div>

          {/* Solutions Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We leverage the latest advancements in artificial intelligence to deliver 
              innovative solutions that give your business a competitive edge.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aiTechnologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">{tech.name}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{tech.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Applications:</h4>
                  <ul className="space-y-1">
                    {tech.applications.map((app, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI solutions deliver measurable impact and drive real business value 
              across industries and use cases.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {successMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-white">{metric.metric}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.label}</h3>
                <p className="text-zion-slate-light">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI deployment and maximum ROI for your business.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understand your business needs and data landscape",
                icon: Lightbulb
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Design AI roadmap and implementation strategy",
                icon: Target
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and validate AI models with your data",
                icon: Code
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Launch AI solutions and continuously improve",
                icon: Rocket
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{phase.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-zion-cyan" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how artificial intelligence can transform your business operations, 
              improve efficiency, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start AI Journey
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Download AI Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
