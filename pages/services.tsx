import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import { 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Zap,
  Code,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  Settings,
  Users
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-blue-500" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation systems",
      features: [
        "Custom AI model development",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "Intelligent automation"
      ],
      price: "Starting at $5,000"
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data",
      features: [
        "Security audits & assessments",
        "Penetration testing",
        "Security monitoring",
        "Incident response",
        "Compliance consulting"
      ],
      price: "Starting at $3,000"
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-500" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses",
      features: [
        "Cloud migration & strategy",
        "Multi-cloud management",
        "Serverless architecture",
        "Container orchestration",
        "Cloud cost optimization"
      ],
      price: "Starting at $2,500"
    },
    {
      icon: <Code className="h-12 w-12 text-orange-500" />,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies and best practices",
      features: [
        "Web application development",
        "Mobile app development",
        "API development & integration",
        "Legacy system modernization",
        "Quality assurance & testing"
      ],
      price: "Starting at $4,000"
    },
    {
      icon: <Database className="h-12 w-12 text-red-500" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions",
      features: [
        "Data warehousing",
        "Business intelligence dashboards",
        "Real-time analytics",
        "Data visualization",
        "Machine learning integration"
      ],
      price: "Starting at $3,500"
    },
    {
      icon: <Network className="h-12 w-12 text-yellow-500" />,
      title: "Network Solutions",
      description: "Robust networking infrastructure and connectivity solutions for enterprises",
      features: [
        "Network design & implementation",
        "Security infrastructure",
        "Performance optimization",
        "Disaster recovery planning",
        "24/7 network monitoring"
      ],
      price: "Starting at $2,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current systems and identify opportunities for improvement"
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Develop a comprehensive roadmap tailored to your business objectives"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the solution with agile methodologies and continuous feedback"
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing maintenance and optimization to ensure peak performance"
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including AI solutions, cybersecurity, cloud infrastructure, and software development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to accelerate your digital transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-blue-400">
                          {service.price}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our team to discuss your project requirements and get a customized quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 hover:border-white text-white font-semibold rounded-lg transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;