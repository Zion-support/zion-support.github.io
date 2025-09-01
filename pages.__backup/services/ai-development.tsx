import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Brain, Code, Database, ChartBar, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const AIDevelopment: NextPage = () => {
  return (
    <Layout
      title="AI Development Services - Zion Tech Group"
      description="Transform your business with custom AI solutions, machine learning models, and intelligent automation. Expert AI development services from Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Development
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning models to intelligent automation, we help you harness the power of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Start Your AI Project
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs and industry requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Machine Learning Models</h3>
              <p className="text-gray-600 mb-4">
                Custom ML models for prediction, classification, and pattern recognition in your data.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Applications</h3>
              <p className="text-gray-600 mb-4">
                Intelligent applications that learn and adapt to user behavior and business processes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Chatbots & Virtual Assistants</li>
                <li>• Intelligent Process Automation</li>
                <li>• Smart Document Processing</li>
                <li>• AI-Driven Analytics</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced data analysis and insights using AI and machine learning techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Big Data Processing</li>
                <li>• Statistical Analysis</li>
                <li>• Data Visualization</li>
                <li>• Business Intelligence</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <ChartBar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Forecast future trends and behaviors to make data-driven business decisions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Sales Forecasting</li>
                <li>• Risk Assessment</li>
                <li>• Customer Behavior Analysis</li>
                <li>• Market Trend Prediction</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Security Solutions</h3>
              <p className="text-gray-600 mb-4">
                Intelligent security systems that detect and prevent threats using AI algorithms.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Threat Detection</li>
                <li>• Fraud Prevention</li>
                <li>• Anomaly Detection</li>
                <li>• Security Automation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration of AI capabilities into your existing systems and workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• API Development</li>
                <li>• System Integration</li>
                <li>• Workflow Automation</li>
                <li>• Legacy System Modernization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We analyze your business needs, data sources, and objectives to design the optimal AI solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Preparation</h3>
              <p className="text-gray-600">
                We clean, structure, and prepare your data for optimal AI model training and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Model Development</h3>
              <p className="text-gray-600">
                Our experts develop and train AI models using state-of-the-art algorithms and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Deployment & Support</h3>
              <p className="text-gray-600">
                We deploy your AI solution and provide ongoing support, monitoring, and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities of various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Healthcare</h3>
              <p className="text-gray-600">AI-powered diagnostics, patient care optimization, and medical research acceleration.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Finance</h3>
              <p className="text-gray-600">Fraud detection, risk assessment, algorithmic trading, and customer service automation.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Retail</h3>
              <p className="text-gray-600">Personalized recommendations, inventory optimization, and customer behavior analysis.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Manufacturing</h3>
              <p className="text-gray-600">Predictive maintenance, quality control, and supply chain optimization.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Transportation</h3>
              <p className="text-gray-600">Route optimization, autonomous systems, and predictive maintenance.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Education</h3>
              <p className="text-gray-600">Personalized learning, student performance analysis, and administrative automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver AI solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert AI Team</h3>
                    <p className="text-gray-600">Our team includes PhD-level data scientists and AI engineers with years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Methodologies</h3>
                    <p className="text-gray-600">We follow industry best practices and proven methodologies for AI development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Our AI solutions are designed to scale with your business growth and evolving needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support, monitoring, and optimization for your AI systems.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how AI can transform your business operations and drive growth.
              </p>
              <Link href="/contact">
                <a className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your business with intelligent automation and data-driven insights. 
            Let Zion Tech Group be your AI development partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Start Your AI Project
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Explore All Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIDevelopment;