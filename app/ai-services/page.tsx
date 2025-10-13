import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional AI services from Zion Tech Group"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver AI that works.
            </p>
          </div>
        </section>

        {/* AI Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Machine Learning */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Build intelligent systems that learn and adapt. From predictive analytics to recommendation engines.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Predictive Modeling</li>
                  <li>• Recommendation Systems</li>
                  <li>• Pattern Recognition</li>
                  <li>• Anomaly Detection</li>
                </ul>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
                <p className="text-gray-300 mb-6">
                  Enable machines to understand and process human language with advanced NLP solutions.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Chatbots & Virtual Assistants</li>
                  <li>• Text Analysis & Sentiment</li>
                  <li>• Language Translation</li>
                  <li>• Document Processing</li>
                </ul>
              </div>

              {/* Computer Vision */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Computer Vision</h3>
                <p className="text-gray-300 mb-6">
                  Extract insights from images and videos with state-of-the-art computer vision technology.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Image Recognition</li>
                  <li>• Object Detection</li>
                  <li>• Facial Recognition</li>
                  <li>• Medical Imaging</li>
                </ul>
              </div>

              {/* AI Automation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
                <p className="text-gray-300 mb-6">
                  Automate complex business processes with intelligent AI-powered workflows.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Process Automation</li>
                  <li>• Intelligent Document Processing</li>
                  <li>• Workflow Optimization</li>
                  <li>• Smart Data Entry</li>
                </ul>
              </div>

              {/* AI Analytics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Unlock hidden insights from your data with advanced AI-powered analytics.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Predictive Analytics</li>
                  <li>• Real-time Insights</li>
                  <li>• Data Visualization</li>
                  <li>• Business Intelligence</li>
                </ul>
              </div>

              {/* AI Consulting */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Consulting</h3>
                <p className="text-gray-300 mb-6">
                  Strategic AI consulting to help you identify opportunities and plan your AI journey.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• AI Strategy Development</li>
                  <li>• Technology Assessment</li>
                  <li>• Implementation Planning</li>
                  <li>• ROI Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify opportunities and implement solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Free AI Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
