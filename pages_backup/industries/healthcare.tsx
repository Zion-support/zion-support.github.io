import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar, 
  Stethoscope, 
  Activity, 
  Database, 
  Camera, 
  FileText 
} from 'lucide-react';

const solutions = [
  {
    title: 'AI-Powered Medical Imaging',
    description: 'Advanced AI algorithms for medical image analysis and diagnosis support',
    icon: Camera,
    features: ['Image Analysis', 'Diagnosis Support', 'Pattern Recognition', 'Report Generation']
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR system with AI-powered features for better patient care',
    icon: FileText,
    features: ['Patient Records', 'Medical History', 'Treatment Plans', 'Data Analytics']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure video consultations and remote patient monitoring solutions',
    icon: Phone,
    features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management', 'Appointment Scheduling']
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models for predicting patient outcomes and treatment effectiveness',
    icon: Brain,
    features: ['Risk Assessment', 'Treatment Optimization', 'Outcome Prediction', 'Clinical Decision Support']
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

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-pink-500 mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Healthcare
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform healthcare delivery with cutting-edge technology solutions. From AI-powered 
            diagnostics to telemedicine platforms, we help healthcare providers deliver better patient care.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-white font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Database className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Secure Data</span>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                {solution.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {solution.description}
              </p>

              <div className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our healthcare solutions can improve patient outcomes, 
              streamline operations, and enhance the quality of care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
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