import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target,
  TrendingUp,
  Shield,
  Users,
  Globe,
  Rocket,
  CheckCircle
} from 'lucide-react';
export default function AIServices() {
  const aiServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform",
      features: [
        "Predictive Analytics",
        "Real-time Data Processing",
        "Custom Dashboard Creation",
        "Automated Reporting"
      ],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning Models",
      description: "Custom ML solutions tailored to your business needs and industry requirements",
      features: [
        "Custom Algorithm Development",
        "Model Training & Optimization",
        "Continuous Learning Systems",
        "Performance Monitoring"
      ],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and language understanding",
      features: [
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
        "Chatbot Development"
      ],
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis powered by state-of-the-art computer vision technology",
      features: [
        "Object Detection",
        "Image Classification",
        "Facial Recognition",
        "Video Analytics"
      ],
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline business processes"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "AI-powered threat detection and security monitoring"
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "Personalized interactions and improved customer service"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Deploy AI solutions across multiple locations and markets"
    }
  ];
  const useCases = [
    {
      industry: "Healthcare",
      applications: ["Diagnostic Imaging", "Patient Data Analysis", "Drug Discovery", "Predictive Medicine"]
    },
    {
      industry: "Finance",
      applications: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Customer Insights"]
    },
    {
      industry: "Manufacturing",
      applications: ["Quality Control", "Predictive Maintenance", "Supply Chain Optimization", "Process Automation"]
    },
    {
      industry: "Retail",
      applications: ["Demand Forecasting", "Personalized Marketing", "Inventory Management", "Customer Behavior Analysis"]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions to transform your business
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From machine learning to natural language processing, computer vision to predictive analytics, 
              we deliver AI solutions that drive innovation and competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>
      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed for enterprise success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group for your AI initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI solutions that drive innovation across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your business and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}