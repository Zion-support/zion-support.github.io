import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Network,
  Cloud,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  GitBranch,
  Database,
  Settings,
  Monitor,
  Server,
  Terminal
} from 'lucide-react';

const AIAutonomousDevOps: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Intelligent Code Management",
      description: "AI-powered code review, testing, and deployment automation"
    },
    {
      icon: Cpu,
      title: "Automated Infrastructure",
      description: "Self-managing cloud infrastructure with intelligent scaling"
    },
    {
      icon: Shield,
      title: "Security Automation",
      description: "Continuous security monitoring and vulnerability assessment"
    },
    {
      icon: Zap,
      title: "CI/CD Pipeline",
      description: "Intelligent build, test, and deployment pipelines"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enhanced developer experience and workflow optimization"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Multi-region deployment with intelligent routing"
    }
  ];

  const benefits = [
    "Automated code review and quality assurance",
    "Intelligent testing and bug detection",
    "Self-healing infrastructure management",
    "Continuous security monitoring and compliance",
    "Reduced deployment time by 90%",
    "Improved system reliability and uptime",
    "Cost optimization through intelligent resource management",
    "Enhanced developer productivity and satisfaction"
  ];

  const devOpsStages = [
    {
      title: "Plan & Design",
      description: "AI-assisted project planning and architecture design",
      icon: Lightbulb
    },
    {
      title: "Code & Build",
      description: "Intelligent code generation and automated building",
      icon: Code
    },
    {
      title: "Test & Quality",
      description: "Automated testing and quality assurance",
      icon: Shield
    },
    {
      title: "Deploy & Monitor",
      description: "Intelligent deployment and real-time monitoring",
      icon: Monitor
    }
  ];

  const useCases = [
    {
      title: "Microservices Architecture",
      description: "Automated deployment and scaling of microservices with intelligent load balancing",
      icon: "🔧"
    },
    {
      title: "Cloud-Native Applications",
      description: "Seamless cloud deployment with automatic infrastructure provisioning",
      icon: "☁️"
    },
    {
      title: "Legacy System Modernization",
      description: "Automated migration and modernization of legacy systems",
      icon: "🔄"
    },
    {
      title: "Multi-Cloud Management",
      description: "Intelligent multi-cloud deployment and management",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Code className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous DevOps Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Revolutionize your development operations with intelligent, autonomous DevOps that never sleeps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete DevOps Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform automates every aspect of the DevOps lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Stages Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              End-to-End DevOps Pipeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to deployment, our platform handles every stage of the DevOps lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devOpsStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stage.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Autonomous DevOps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and reliability in your development operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Development Operations
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Performance Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Deployment Speed</span>
                      <span className="font-semibold text-green-600">90% Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Uptime</span>
                      <span className="font-semibold text-green-600">99.99%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bug Detection</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous DevOps transforms operations across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{useCase.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join the future of autonomous development operations with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousDevOps;