import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function AIServicesPage() {
  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, computer vision, and intelligent automation."
      keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, automation, AI consulting"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning models to intelligent automation, we provide end-to-end AI services that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Custom ML models for predictive analytics, recommendation systems, and intelligent decision making.",
                features: ["Predictive Analytics", "Recommendation Engines", "Anomaly Detection", "Pattern Recognition"]
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.",
                features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Text Classification", "Language Translation"]
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description: "Image and video analysis solutions for object detection, facial recognition, and visual inspection.",
                features: ["Object Detection", "Facial Recognition", "Image Classification", "Visual Inspection"]
              },
              {
                icon: Bot,
                title: "Intelligent Automation",
                description: "AI-powered automation solutions that streamline workflows and reduce manual effort.",
                features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Intelligent Routing"]
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Data-driven insights and forecasting to help you make informed business decisions.",
                features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Trend Analysis"]
              },
              {
                icon: Shield,
                title: "AI Security",
                description: "Advanced security solutions powered by AI to protect your digital assets and data.",
                features: ["Threat Detection", "Fraud Prevention", "Access Control", "Security Monitoring"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation and maximum ROI.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your business needs, data sources, and identify AI opportunities."
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Develop a comprehensive AI strategy aligned with your business objectives."
              },
              {
                step: "03",
                title: "Development & Training",
                description: "Build and train AI models using your data and industry best practices."
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy AI solutions and continuously optimize for better performance."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}