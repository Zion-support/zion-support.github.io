import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  BookOpen, 
  Users, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Cpu,
  Network,
  Cloud,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  PieChart,
  LineChart,
  Database,
  Settings,
  Monitor,
  Award,
  Clock,
  Star,
  FileText,
  Gavel,
  Search
} from 'lucide-react';

const AIAutonomousLegalCounsel: React.FC = () => {
  const features = [
    {
      icon: Scale,
      title: "Intelligent Legal Analysis",
      description: "AI-powered legal research and case analysis with comprehensive insights"
    },
    {
      icon: BookOpen,
      title: "Document Generation",
      description: "Automated legal document creation and contract drafting"
    },
    {
      icon: Brain,
      title: "Risk Assessment",
      description: "Advanced legal risk analysis and compliance monitoring"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Automated regulatory compliance and legal requirement tracking"
    },
    {
      icon: Users,
      title: "Client Support",
      description: "24/7 legal consultation and guidance services"
    },
    {
      icon: Globe,
      title: "Global Legal Expertise",
      description: "Multi-jurisdiction legal knowledge and international law support"
    }
  ];

  const benefits = [
    "24/7 legal consultation and support",
    "Automated document generation and review",
    "Real-time compliance monitoring and alerts",
    "Reduced legal costs by 60%",
    "Faster legal research and analysis",
    "Improved accuracy in legal advice",
    "Comprehensive risk assessment and mitigation",
    "Scalable legal services for any organization size"
  ];

  const legalServices = [
    {
      title: "Contract Review",
      description: "Intelligent contract analysis and risk assessment",
      icon: FileText
    },
    {
      title: "Legal Research",
      description: "Comprehensive case law and regulation research",
      icon: Search
    },
    {
      title: "Compliance Monitoring",
      description: "Automated regulatory compliance tracking",
      icon: Shield
    },
    {
      title: "Dispute Resolution",
      description: "AI-powered mediation and conflict resolution support",
      icon: Gavel
    }
  ];

  const useCases = [
    {
      title: "Corporate Legal",
      description: "Comprehensive legal support for businesses of all sizes",
      icon: "🏢"
    },
    {
      title: "Contract Management",
      description: "Automated contract creation, review, and management",
      icon: "📋"
    },
    {
      title: "Regulatory Compliance",
      description: "Real-time compliance monitoring and reporting",
      icon: "📊"
    },
    {
      title: "Legal Research",
      description: "Advanced legal research and case analysis",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 text-white">
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
                <Scale className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Legal Counsel
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-100">
              Revolutionize legal services with intelligent, autonomous counsel that's always available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors">
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
              Advanced Legal Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI legal counsel combines cutting-edge technology with comprehensive legal expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-slate-600" />
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

      {/* Legal Services Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From contract review to compliance monitoring, our AI counsel handles all aspects of legal support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
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
              Why Choose AI Autonomous Legal Counsel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in legal services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Legal Operations
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
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Legal Performance
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Response Time</span>
                      <span className="font-semibold text-green-600">24/7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy Rate</span>
                      <span className="font-semibold text-green-600">95%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Efficiency</span>
                      <span className="font-semibold text-green-600">10x</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Legal Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI legal counsel transforms legal services across various industries
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
                <button className="text-slate-600 font-semibold hover:text-slate-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Legal Services?
            </h2>
            <p className="text-xl mb-8 text-slate-100">
              Join the future of intelligent, autonomous legal counsel with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousLegalCounsel;