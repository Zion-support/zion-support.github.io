import * as React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap, Shield, Cloud, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign } from 'lucide-react';

const aiServices = [
  {
    title: "Machine Learning Development",
    description: "Custom ML models and algorithms tailored to your business needs",
    icon: Brain,
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"],
    pricing: "Starting at $2,500/month",
    timeline: "4-12 weeks"
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, chatbots, and language understanding",
    icon: Code,
    features: ["Sentiment Analysis", "Language Translation", "Text Summarization"],
    pricing: "Starting at $1,800/month",
    timeline: "3-8 weeks"
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis solutions for various industries",
    icon: Database,
    features: ["Object Detection", "Facial Recognition", "Medical Imaging"],
    pricing: "Starting at $3,200/month",
    timeline: "6-16 weeks"
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI for customer service and support",
    icon: Zap,
    features: ["24/7 Support", "Multi-language", "Integration Ready"],
    pricing: "Starting at $1,200/month",
    timeline: "2-6 weeks"
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business optimization",
    icon: Shield,
    features: ["Risk Assessment", "Demand Forecasting", "Performance Optimization"],
    pricing: "Starting at $2,000/month",
    timeline: "4-10 weeks"
  },
  {
    title: "AI Cloud Solutions",
    description: "Scalable AI infrastructure and deployment on cloud platforms",
    icon: Cloud,
    features: ["Auto-scaling", "High Availability", "Cost Optimization"],
    pricing: "Starting at $1,500/month",
    timeline: "2-8 weeks"
  }
];

const industries = [
  { name: "Healthcare", applications: ["Medical Diagnosis", "Drug Discovery", "Patient Monitoring"] },
  { name: "Finance", applications: ["Fraud Detection", "Algorithmic Trading", "Risk Assessment"] },
  { name: "Retail", applications: ["Recommendation Engines", "Inventory Management", "Customer Analytics"] },
  { name: "Manufacturing", applications: ["Quality Control", "Predictive Maintenance", "Supply Chain Optimization"] },
  { name: "Education", applications: ["Personalized Learning", "Automated Grading", "Student Analytics"] },
  { name: "Transportation", applications: ["Autonomous Vehicles", "Route Optimization", "Traffic Management"] }
];

const process = [
  {
    step: "1",
    title: "Discovery & Analysis",
    description: "We analyze your business requirements and data to identify AI opportunities",
    duration: "1-2 weeks"
  },
  {
    step: "2", 
    title: "Strategy & Planning",
    description: "Develop a comprehensive AI strategy and implementation roadmap",
    duration: "1-2 weeks"
  },
  {
    step: "3",
    title: "Development & Training",
    description: "Build and train custom AI models using cutting-edge technologies",
    duration: "4-16 weeks"
  },
  {
    step: "4",
    title: "Testing & Optimization",
    description: "Rigorous testing and performance optimization of AI solutions",
    duration: "1-4 weeks"
  },
  {
    step: "5",
    title: "Deployment & Integration",
    description: "Deploy AI solutions and integrate with existing systems",
    duration: "1-2 weeks"
  },
  {
    step: "6",
    title: "Monitoring & Support",
    description: "Ongoing monitoring, maintenance, and continuous improvement",
    duration: "Ongoing"
  }
];

const stats = [
  { number: "95%", label: "Accuracy Improvement" },
  { number: "80%", label: "Process Automation" },
  { number: "60%", label: "Cost Reduction" },
  { number: "40%", label: "Faster Decision Making" }
];

export default function AIDevelopmentPage() {
  return (
    <Layout
      title="AI Development Services - Zion Tech Group"
      description="Expert AI development services including machine learning, NLP, computer vision, and custom AI solutions. Transform your business with cutting-edge artificial intelligence."
      keywords="AI development, machine learning, NLP, computer vision, artificial intelligence, AI consulting, custom AI solutions"
      canonical="https://ziontechgroup.com/ai-development"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Development Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                Our expert team delivers custom AI development services that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Free Consultation
                </a>
                <a href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  View Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Development Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive AI development services across all major domains of artificial intelligence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Timeline:</span>
                        <span className="text-sm font-medium">{service.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gray-100">
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
                Our AI solutions are tailored to meet the specific needs of various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
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
                Our AI Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our AI development services can help you achieve your business goals. 
              Get a free consultation and discover the potential of artificial intelligence for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}