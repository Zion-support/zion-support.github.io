import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Zap, Users, BarChart3, Shield, Code, ArrowRight, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const microSaaSFeatures = [
  {
    title: "Rapid Prototyping",
    description: "Quickly build and test your SaaS ideas with our agile development approach",
    icon: Zap,
    features: ["MVP Development", "User Testing", "Iterative Design", "Fast Deployment"]
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business from startup to enterprise scale",
    icon: Cloud,
    features: ["Microservices", "Auto-scaling", "Load Balancing", "Performance Optimization"]
  },
  {
    title: "User Management",
    description: "Comprehensive user authentication and management systems",
    icon: Users,
    features: ["Authentication", "Authorization", "User Profiles", "Role Management"]
  },
  {
    title: "Analytics & Insights",
    description: "Built-in analytics to track usage and optimize performance",
    icon: BarChart3,
    features: ["Usage Analytics", "Performance Metrics", "User Behavior", "Custom Dashboards"]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security built into every solution",
    icon: Shield,
    features: ["Data Encryption", "GDPR Compliance", "Security Audits", "Backup & Recovery"]
  },
  {
    title: "API Development",
    description: "Robust APIs for seamless integration with other systems",
    icon: Code,
    features: ["RESTful APIs", "GraphQL", "Webhooks", "Third-party Integrations"]
  }
];

const saasTypes = [
  {
    name: "Productivity Tools",
    description: "Tools to improve team productivity and workflow efficiency",
    examples: ["Project Management", "Task Automation", "Time Tracking", "Document Collaboration"]
  },
  {
    name: "Business Intelligence",
    description: "Data-driven solutions for better business decision making",
    examples: ["Analytics Dashboards", "Reporting Tools", "Data Visualization", "KPI Tracking"]
  },
  {
    name: "Customer Management",
    description: "Solutions to manage and engage with your customers effectively",
    examples: ["CRM Systems", "Customer Support", "Feedback Management", "Loyalty Programs"]
  },
  {
    name: "Industry-Specific",
    description: "Tailored solutions for specific industries and use cases",
    examples: ["Healthcare SaaS", "E-commerce Tools", "Financial Services", "Education Platforms"]
  }
];

const developmentProcess = [
  {
    phase: "Discovery",
    title: "Requirements & Strategy",
    description: "We analyze your business needs and define the optimal SaaS solution strategy"
  },
  {
    phase: "Design",
    title: "UI/UX & Architecture",
    description: "Create intuitive user interfaces and design scalable system architecture"
  },
  {
    phase: "Development",
    title: "Agile Development",
    description: "Build your SaaS solution using modern technologies and best practices"
  },
  {
    phase: "Testing",
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure reliability, security, and performance"
  },
  {
    phase: "Deployment",
    title: "Launch & Scale",
    description: "Deploy to production with monitoring and support for continuous growth"
  }
];

export default function MicroSaaSPage() {
  return (
    <MainLayout 
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Build scalable micro SaaS applications with rapid prototyping, modern architecture, and comprehensive features."
      keywords="micro SaaS, SaaS development, rapid prototyping, scalable architecture, API development"
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
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Build, launch, and scale your software-as-a-service applications with our proven development approach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Your SaaS
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Comprehensive SaaS Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a successful SaaS application, from rapid prototyping to enterprise scaling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
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
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SaaS Types Section */}
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
              Types of SaaS We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From productivity tools to industry-specific solutions, we create SaaS applications for every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-600 bg-white p-2 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
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
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver successful SaaS applications on time and within budget
            </p>
          </motion.div>

          <div className="space-y-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {step.phase}
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
              Ready to Build Your SaaS?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experienced team help you turn your SaaS idea into a successful, scalable business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Your Project
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