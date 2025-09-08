import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Cpu, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Factory,
  Wrench,
  BarChart3,
  Zap
} from 'lucide-react';

const services = [
  {
    name: 'IoT Integration',
    description: 'Connect your manufacturing equipment with smart sensors and IoT devices for real-time monitoring and control.',
    icon: Cpu,
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Remote Control', 'Data Collection']
  },
  {
    name: 'Predictive Maintenance',
    description: 'AI-powered maintenance scheduling to prevent equipment failures and optimize performance.',
    icon: Wrench,
    features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Downtime Reduction']
  },
  {
    name: 'Smart Factories',
    description: 'Transform your manufacturing facility into a fully automated smart factory.',
    icon: Factory,
    features: ['Automation', 'Quality Control', 'Process Optimization', 'Energy Efficiency']
  },
  {
    name: 'Quality Control',
    description: 'Advanced quality assurance systems with computer vision and machine learning.',
    icon: Shield,
    features: ['Computer Vision', 'Defect Detection', 'Quality Metrics', 'Compliance Tracking']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6">
            <Settings className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Manufacturing
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize your manufacturing operations with cutting-edge technology solutions. 
            From IoT integration to predictive maintenance, we help you build the factory of the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">30% Efficiency Gain</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">50% Cost Reduction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Manufacturing Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our manufacturing solutions can optimize your operations, 
              reduce costs, and increase efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}