import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Cpu, 
  Zap, 
  BarChart3, 
  Shield, 
  Settings,
  ArrowRight,
  CheckCircle,
  Gauge
} from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: 'Smart Manufacturing',
    description: 'AI-powered production optimization and automation'
  },
  {
    icon: Cpu,
    title: 'IoT Integration',
    description: 'Connected devices and real-time monitoring systems'
  },
  {
    icon: Zap,
    title: 'Predictive Maintenance',
    description: 'AI-driven equipment maintenance and failure prevention'
  },
  {
    icon: BarChart3,
    title: 'Quality Control',
    description: 'Advanced analytics for product quality assurance'
  },
  {
    icon: Shield,
    title: 'Supply Chain Security',
    description: 'Secure, transparent supply chain management'
  },
  {
    icon: Settings,
    title: 'Process Optimization',
    description: 'Continuous improvement and efficiency optimization'
  }
];

const solutions = [
  {
    title: 'Industrial IoT Platform',
    description: 'Comprehensive IoT solution for manufacturing operations',
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Remote Management', 'Data Integration']
  },
  {
    title: 'Quality Management System',
    description: 'AI-powered quality control and assurance platform',
    features: ['Automated Inspection', 'Defect Detection', 'Quality Analytics', 'Compliance Reporting']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Intelligent supply chain management and optimization',
    features: ['Demand Forecasting', 'Inventory Management', 'Supplier Analytics', 'Risk Assessment']
  },
  {
    title: 'Manufacturing Analytics',
    description: 'Advanced analytics for operational insights and optimization',
    features: ['Performance Metrics', 'Efficiency Analysis', 'Cost Optimization', 'Trend Analysis']
  }
];

export default function ManufacturingSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Manufacturing Solutions - Zion Tech Group" 
        description="AI-powered manufacturing technology solutions, IoT platforms, quality management, and supply chain optimization for industrial operations." 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Manufacturing Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your manufacturing operations with AI-powered automation, 
            IoT integration, and predictive analytics. Drive efficiency, quality, 
            and innovation in the Industry 4.0 era.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group for Manufacturing?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our manufacturing solutions are built with deep understanding of 
            industrial processes, quality requirements, and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Manufacturing Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to address the unique challenges of 
            modern manufacturing and industrial operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Industry 4.0 Ready</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our solutions are built for the future of manufacturing with cutting-edge 
              technology and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300">Intelligent automation and decision support</p>
            </div>
            <div className="text-center">
              <Gauge className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-300">Live monitoring and instant insights</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Predictive Capabilities</h3>
              <p className="text-gray-300">Anticipate issues before they occur</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Manufacturing?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our manufacturing solutions can drive efficiency, 
            improve quality, and optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}