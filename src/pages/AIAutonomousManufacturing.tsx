import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Cpu, 
  Target, 
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
  PieChart,
  LineChart,
  Database,
  Settings,
  Monitor,
  Award,
  Clock,
  Star,
  Cog,
  Wrench,
  BarChart3
} from 'lucide-react';

const AIAutonomousManufacturing: React.FC = () => {
  const features = [
    {
      icon: Factory,
      title: "Intelligent Production Lines",
      description: "AI-powered manufacturing automation with real-time optimization"
    },
    {
      icon: Cpu,
      title: "Predictive Maintenance",
      description: "Advanced equipment monitoring and proactive maintenance scheduling"
    },
    {
      icon: Target,
      title: "Quality Control",
      description: "Automated quality inspection and defect detection systems"
    },
    {
      icon: Shield,
      title: "Safety Management",
      description: "Comprehensive safety monitoring and risk prevention"
    },
    {
      icon: Users,
      title: "Workforce Optimization",
      description: "Intelligent task allocation and skill development"
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Multi-site manufacturing coordination and optimization"
    }
  ];

  const benefits = [
    "Automated production processes with 99.9% uptime",
    "Predictive maintenance reducing downtime by 60%",
    "Real-time quality control with 99.5% accuracy",
    "Reduced production costs by 30%",
    "Improved product quality and consistency",
    "24/7 autonomous manufacturing operations",
    "Enhanced worker safety and compliance",
    "Scalable production capacity and flexibility"
  ];

  const manufacturingServices = [
    {
      title: "Production Automation",
      description: "Intelligent manufacturing process automation",
      icon: Factory
    },
    {
      title: "Quality Assurance",
      description: "Automated quality control and testing",
      icon: Target
    },
    {
      title: "Maintenance Management",
      description: "Predictive maintenance and equipment optimization",
      icon: Wrench
    },
    {
      title: "Supply Chain Integration",
      description: "Seamless supply chain coordination and optimization",
      icon: Network
    }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Intelligent production lines and quality control for automotive components",
      icon: "🚗"
    },
    {
      title: "Electronics Production",
      description: "Precision manufacturing and testing for electronic devices",
      icon: "📱"
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Compliant and precise pharmaceutical production processes",
      icon: "💊"
    },
    {
      title: "Food & Beverage",
      description: "Safe and efficient food production with quality assurance",
      icon: "🍔"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-700 text-white">
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
                <Factory className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Manufacturing Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100">
              Revolutionize manufacturing with intelligent, autonomous systems that optimize every aspect of production
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
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
              Advanced Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI manufacturing platform combines cutting-edge technology with industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
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

      {/* Manufacturing Services Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Manufacturing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From production automation to quality assurance, our platform handles all aspects of manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
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
              Why Choose AI Autonomous Manufacturing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and optimization in your manufacturing operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Manufacturing Operations
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
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Manufacturing Performance
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Production Uptime</span>
                      <span className="font-semibold text-green-600">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Quality Accuracy</span>
                      <span className="font-semibold text-green-600">99.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Downtime Reduction</span>
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
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI manufacturing platform transforms operations across various industries
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
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join the future of intelligent, autonomous manufacturing with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousManufacturing;