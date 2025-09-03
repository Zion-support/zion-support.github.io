import React from "react"
import Head from "next/head"
import Link from "next/link"
import { ArrowRight, Award, BarChart3, Bot, Brain, CheckCircle, Eye, MessageSquare, Shield, Zap, Cpu, Users, TrendingUp, FileText, Mic, Phone, Mail, MapPin  } from "lucide-react"
import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"
export default function AIServices() {
  return (
    <>
      <div>Content</div>
    </>
  );
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and autonomous systems." />
      </Head>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */};
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

        {/* AI Services Grid */};
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Machine Learning */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Build intelligent systems that learn and adapt to your business needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Predictive Analytics</li>
                  <li>• Recommendation Systems</li>
                  <li>• Pattern Recognition</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $5,000/month
                </div>
              </div>

              {/* Natural Language Processing */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">NLP & Chatbots</h3>
                <p className="text-gray-600 mb-4">
                  Create intelligent conversational interfaces and language understanding systems.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Chatbot Development</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Language Translation</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $3,000/month
                </div>
              </div>

              {/* Computer Vision */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Eye className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
                <p className="text-gray-600 mb-4">
                  Enable machines to see and understand visual information like humans.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Image Recognition</li>
                  <li>• Object Detection</li>
                  <li>• Facial Recognition</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $4,000/month
                </div>
              </div>

              {/* Autonomous Systems */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Bot className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Develop self-operating systems that can make decisions independently.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Autonomous Vehicles</li>
                  <li>• Smart Manufacturing</li>
                  <li>• Robotic Process Automation</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $10,000/month
                </div>
              </div>

              {/* AI Analytics */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <BarChart3 className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Extract actionable insights from your data using advanced AI algorithms.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Business Intelligence</li>
                  <li>• Real-time Analytics</li>
                  <li>• Data Mining</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $3,500/month
                </div>
              </div>

              {/* AI Security */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Security</h3>
                <p className="text-gray-600 mb-4">
                  Protect your systems with intelligent threat detection and prevention.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Threat Detection</li>
                  <li>• Fraud Prevention</li>
                  <li>• Security Automation</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $5,000/month
                </div>
              </div>

              {/* Quantum AI */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Cpu className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum AI</h3>
                <p className="text-gray-600 mb-4">
                  Leverage quantum computing for advanced AI algorithms and optimization.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quantum Machine Learning</li>
                  <li>• Quantum Optimization</li>
                  <li>• Quantum Cryptography</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $15,000/month
                </div>
              </div>

              {/* AI-Powered Automation */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automate complex business processes with intelligent decision-making.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Intelligent Routing</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $2,500/month
                </div>
              </div>

              {/* AI-Powered Personalization */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Personalization</h3>
                <p className="text-gray-600 mb-4">
                  Create personalized experiences for customers using AI-driven insights.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Customer Segmentation</li>
                  <li>• Personalized Recommendations</li>
                  <li>• Dynamic Content</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $3,000/month
                </div>
              </div>

              {/* AI-Powered Forecasting */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Forecasting</h3>
                <p className="text-gray-600 mb-4">
                  Predict future trends and outcomes with advanced AI forecasting models.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Demand Forecasting</li>
                  <li>• Market Prediction</li>
                  <li>• Risk Assessment</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $4,500/month
                </div>
              </div>

              {/* AI-Powered Content Generation */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Content Generation</h3>
                <p className="text-gray-600 mb-4">
                  Generate high-quality content automatically using advanced AI models.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Text Generation</li>
                  <li>• Image Creation</li>
                  <li>• Video Production</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $2,000/month
                </div>
              </div>

              {/* AI-Powered Voice & Audio */};
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Mic className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Voice & Audio</h3>
                <p className="text-gray-600 mb-4">
                  Advanced voice processing, synthesis, and audio analysis capabilities.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Voice Synthesis</li>
                  <li>• Speech Recognition</li>
                  <li>• Audio Analysis</li>
                </ul>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  Starting at $3,500/month
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced AI Services */};
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Advanced AI Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Consulting */};
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Strategy Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Develop comprehensive AI strategies that align with your business objectives and drive measurable results.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>AI Readiness Assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Technology Roadmap Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>ROI Analysis & Business Case</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Implementation Planning</span>
                  </li>
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  $10,000 - $50,000 per project
                </div>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* AI Implementation */};
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Implementation Services</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end AI implementation with custom model development, deployment, and ongoing optimization.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Custom Model Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Data Pipeline Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Cloud Infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span>Performance Monitoring</span>
                  </li>
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  $25,000 - $200,000 per project
                </div>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Implementation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */};
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

        {/* Contact Section */};
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Get started with our AI services today. Contact us for a free consultation and custom pricing.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500 font-medium">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-500 font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
};