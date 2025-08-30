import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, 
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
    { id: 'retail', name: 'Retail', icon: Smartphone },
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
      benefits: ["Real-time Detection", "Reduced Losses", "Compliance", "Risk Management"],
      icon: Eye
    },
    {
      title: "Supply Chain Optimization",
      description: "AI-powered demand forecasting and inventory management for optimal operations",
      industry: "logistics",
      benefits: ["Cost Reduction", "Improved Efficiency", "Better Planning", "Risk Mitigation"],
      icon: Network
    },
    {
      title: "Medical Diagnosis Support",
      description: "AI-assisted medical imaging and diagnostic tools for healthcare professionals",
      industry: "healthcare",
      benefits: ["Faster Diagnosis", "Improved Accuracy", "Better Patient Outcomes", "Cost Efficiency"],
      icon: Brain
    },
    {
      title: "Smart Manufacturing",
      description: "AI-driven quality control and production optimization for manufacturing processes",
      industry: "manufacturing",
      benefits: ["Quality Improvement", "Production Efficiency", "Cost Reduction", "Predictive Maintenance"],
      icon: Cpu
    }
  ];

  const filteredSolutions = selectedIndustry === 'all' 
    ? aiSolutions 
    : aiSolutions.filter(solution => solution.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Every Industry</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions designed for your specific industry. 
              From healthcare to manufacturing, we deliver intelligent solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Industry-Specific Solutions</h2>
          
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-zion-cyan text-white border-zion-cyan'
                    : 'bg-transparent text-zion-slate-light border-zion-purple/30 hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <industry.icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4">
                  {solution.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-sm text-zion-cyan font-medium">Key Benefits:</span>
                  <ul className="mt-2 space-y-1">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify the perfect solutions for your industry and business needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-lg font-semibold">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors text-lg font-semibold">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
