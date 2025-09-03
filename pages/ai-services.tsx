import React from "react"
import Head from "next/head"
import Link from "next/link"
import { ArrowRight, Award, BarChart3, Bot, Brain, CheckCircle, Eye, MessageSquare, Shield, Zap, Cpu, Wifi } from 'lucide-react'
import Navigation from "../src/components/Navigation"
import Footer from '../src/components/Footer'
export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and autonomous systems." />
      </Head>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence services. 
              From machine learning to autonomous systems, we deliver intelligent solutions that drive growth.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
href="/services"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Machine Learning */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Build intelligent systems that learn and adapt to your business needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Predictive Analytics</li>
                  <li>• Recommendation Systems</li>
                  <li>• Pattern Recognition</li>
                  <li>• Deep Learning Models</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$5,000 - $50,000/month</div>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">NLP & Chatbots</h3>
                <p className="text-gray-600 mb-4">
                  Create intelligent conversational interfaces and language understanding systems.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Chatbot Development</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Language Translation</li>
                  <li>• Voice Recognition</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$2,000 - $15,000/month</div>
              </div>

              {/* Computer Vision */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Eye className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
                <p className="text-gray-600 mb-4">
                  Enable machines to see and understand visual information like humans.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Image Recognition</li>
                  <li>• Object Detection</li>
                  <li>• Facial Recognition</li>
                  <li>• Medical Imaging</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$3,000 - $25,000/month</div>
              </div>

              {/* Autonomous Systems */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Bot className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Develop self-operating systems that can make decisions independently.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Autonomous Vehicles</li>
                  <li>• Smart Manufacturing</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Drone Fleet Management</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$10,000 - $100,000/month</div>
              </div>

              {/* AI Analytics */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <BarChart3 className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Extract actionable insights from your data using advanced AI algorithms.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Business Intelligence</li>
                  <li>• Real-time Analytics</li>
                  <li>• Data Mining</li>
                  <li>• Predictive Modeling</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$2,500 - $20,000/month</div>
              </div>

              {/* AI Security */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Security</h3>
                <p className="text-gray-600 mb-4">
                  Protect your systems with intelligent threat detection and prevention.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Threat Detection</li>
                  <li>• Fraud Prevention</li>
                  <li>• Security Automation</li>
                  <li>• Zero-Trust Architecture</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$3,000 - $25,000/month</div>
              </div>

              {/* Generative AI */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Generative AI</h3>
                <p className="text-gray-600 mb-4">
                  Create content, code, and solutions using advanced generative AI models.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Content Generation</li>
                  <li>• Code Generation</li>
                  <li>• Image Creation</li>
                  <li>• Video Production</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$1,500 - $12,000/month</div>
              </div>

              {/* Quantum AI */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Cpu className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum AI</h3>
                <p className="text-gray-600 mb-4">
                  Leverage quantum computing for complex AI problems and optimization.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Quantum Machine Learning</li>
                  <li>• Optimization Algorithms</li>
                  <li>• Cryptography</li>
                  <li>• Drug Discovery</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$15,000 - $150,000/month</div>
              </div>

              {/* Edge AI */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Wifi className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Edge AI</h3>
                <p className="text-gray-600 mb-4">
                  Deploy AI models at the edge for real-time processing and reduced latency.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• IoT AI Processing</li>
                  <li>• Real-time Inference</li>
                  <li>• Offline AI Capabilities</li>
                  <li>• Bandwidth Optimization</li>
                </ul>
                <div className="text-sm text-blue-600 font-semibold">$2,000 - $15,000/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced AI Solutions */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Advanced AI Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI-Powered Business Automation</h3>
                <p className="text-gray-600 mb-6">
                  Transform your business operations with intelligent automation that learns and adapts to your processes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Intelligent Document Processing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Automated Customer Service
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Predictive Maintenance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Smart Resource Allocation
                  </li>
                </ul>
                <div className="text-lg font-semibold text-blue-600">Starting at $5,000/month</div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Research & Development</h3>
                <p className="text-gray-600 mb-6">
                  Partner with our AI research team to develop cutting-edge solutions for your industry.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Custom AI Model Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Algorithm Optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Research Collaboration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Patent Development
                  </li>
                </ul>
                <div className="text-lg font-semibold text-blue-600">Starting at $10,000/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our AI Services?</h2>
            <div className="grid md: grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our AI specialists have years of experience in cutting-edge technologies.
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  We deliver AI solutions quickly without compromising on quality.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Our AI implementations have delivered measurable business value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}