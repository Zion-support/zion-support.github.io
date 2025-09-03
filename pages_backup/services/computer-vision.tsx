import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Camera, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Target,
  Brain,
  BarChart3,
  Cpu
} from 'lucide-react'

const SEO = dynamic(() => import('../../src/components/seo/SEO'), { ssr: false })

const ComputerVision: NextPage = () => {
  const features = [
    {
      icon: Eye,
      title: "Object Detection",
      description: "Advanced algorithms to identify and locate objects in images and videos with high accuracy."
    },
    {
      icon: Camera,
      title: "Image Recognition",
      description: "Classify and analyze images to extract meaningful insights and automate visual tasks."
    },
    {
      icon: Target,
      title: "Facial Recognition",
      description: "Secure and accurate facial recognition systems for authentication and identification."
    },
    {
      icon: Brain,
      title: "Deep Learning",
      description: "State-of-the-art neural networks trained on massive datasets for superior performance."
    }
  ]

  const applications = [
    {
      title: "Quality Control",
      description: "Automated inspection and quality assurance in manufacturing processes.",
      icon: Shield
    },
    {
      title: "Security Systems",
      description: "Advanced surveillance and threat detection for enhanced security.",
      icon: Camera
    },
    {
      title: "Medical Imaging",
      description: "AI-powered analysis of medical images for faster and more accurate diagnoses.",
      icon: Brain
    },
    {
      title: "Retail Analytics",
      description: "Customer behavior analysis and inventory management through visual data.",
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Computer Vision Services - Zion Tech Group" 
        description="Transform your business with advanced computer vision solutions. Object detection, image recognition, and AI-powered visual analysis for modern applications."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Computer Vision
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                See the Future
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge computer vision solutions. From object detection 
              to facial recognition, we build AI systems that can see and understand the world around us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/demo" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105"
              >
                View Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Computer Vision Capabilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our computer vision solutions leverage state-of-the-art deep learning algorithms 
              to provide accurate and reliable visual analysis for your business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Computer vision technology is transforming industries across the board. 
              Discover how our solutions can benefit your sector.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => {
              const IconComponent = application.icon
              return (
                <motion.div
                  key={application.title}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{application.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{application.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Learning Frameworks</h3>
                    <p className="text-gray-600">TensorFlow, PyTorch, and OpenCV for robust computer vision model development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Neural Networks</h3>
                    <p className="text-gray-600">CNN, R-CNN, YOLO, and transformer-based models for superior accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                    <p className="text-gray-600">Optimized for real-time inference with edge computing and cloud deployment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Security</h3>
                    <p className="text-gray-600">Built with privacy-first principles and enterprise-grade security measures.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <Eye className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Computer Vision?</h3>
                <p className="text-gray-600 mb-6">
                  Our computer vision solutions deliver industry-leading accuracy and performance 
                  for mission-critical applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Detection Accuracy</span>
                    <span className="font-semibold text-green-600">99.5%+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Processing Speed</span>
                    <span className="font-semibold text-green-600">Real-time</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Model Performance</span>
                    <span className="font-semibold text-green-600">Optimized</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Implement Computer Vision?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Transform your business with our advanced computer vision solutions. 
              Get started with a consultation and discover the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ComputerVision