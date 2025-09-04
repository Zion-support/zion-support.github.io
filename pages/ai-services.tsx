import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Bot, Eye, MessageSquare, BarChart3, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const aiServices = [
  {
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your specific business needs and data",
    icon: Brain,
    features: ["Predictive Analytics", "Classification Models", "Regression Analysis", "Model Optimization"]
  },
  {
    title: "Natural Language Processing",
    description: "Advanced text analysis and language understanding capabilities",
    icon: MessageSquare,
    features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Chatbot Development"]
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis solutions for automated visual processing",
    icon: Eye,
    features: ["Object Detection", "Image Recognition", "Video Analytics", "Quality Control"]
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights to forecast trends and optimize decision making",
    icon: BarChart3,
    features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior Analysis", "Performance Optimization"]
  },
  {
    title: "AI Automation",
    description: "Intelligent automation solutions to streamline business processes",
    icon: Bot,
    features: ["Process Automation", "Workflow Optimization", "Intelligent Document Processing", "Smart Scheduling"]
  },
  {
    title: "AI Infrastructure",
    description: "Scalable AI infrastructure and deployment solutions",
    icon: Cpu,
    features: ["Cloud AI Services", "Model Deployment", "Performance Monitoring", "Scalable Architecture"]
  }
];

const industries = [
  "Healthcare & Life Sciences",
  "Financial Services",
  "E-commerce & Retail",
  "Manufacturing",
  "Education",
  "Real Estate"
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your business needs and data to identify AI opportunities"
  },
  {
    step: "02", 
    title: "Strategy & Planning",
    description: "Develop a comprehensive AI strategy tailored to your objectives"
  },
  {
    step: "03",
    title: "Development & Training",
    description: "Build and train custom AI models using your specific data"
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description: "Deploy AI solutions and integrate them with your existing systems"
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description: "Continuously monitor performance and optimize AI models for better results"
  }
];

export default function AIServicesPage() {
  return (
    <MainLayout 
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics solutions."
      keywords="AI services, machine learning, NLP, computer vision, predictive analytics, AI automation"
    >
      <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services That Transform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation in your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Your AI Journey
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve complex business challenges and unlock new opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges of various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-medium text-gray-700">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver successful AI solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real business value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get AI Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </MainLayout>
  );
}