import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Case Studies</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. 
              Real results from real clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Healthcare AI Platform</h3>
                  <p className="text-gray-400">Medical Technology Company</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Developed an AI-powered diagnostic platform that reduced diagnosis time by 60% and improved accuracy by 40%. 
                The solution processes medical images and patient data to provide real-time diagnostic recommendations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">60%</div>
                  <div className="text-sm text-gray-400">Faster Diagnosis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">40%</div>
                  <div className="text-sm text-gray-400">Accuracy Improvement</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Healthcare AI</span>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">🏦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Banking Automation</h3>
                  <p className="text-gray-400">Regional Bank</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Implemented a comprehensive automation solution for loan processing that reduced processing time from 5 days to 2 hours. 
                The system includes document verification, risk assessment, and automated decision-making.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">95%</div>
                  <div className="text-sm text-gray-400">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">$2M</div>
                  <div className="text-sm text-gray-400">Annual Savings</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Process Automation</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Document AI</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Risk Assessment</span>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Manufacturing IoT</h3>
                  <p className="text-gray-400">Industrial Manufacturing</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Deployed IoT sensors and AI analytics to optimize production lines, resulting in 25% increase in efficiency 
                and 30% reduction in equipment downtime through predictive maintenance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">25%</div>
                  <div className="text-sm text-gray-400">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">30%</div>
                  <div className="text-sm text-gray-400">Downtime Reduction</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">IoT</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Predictive Analytics</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Manufacturing</span>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">E-commerce AI</h3>
                  <p className="text-gray-400">Online Retailer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Built an AI-powered recommendation engine and chatbot that increased conversion rates by 35% and 
                improved customer satisfaction scores by 50%. The solution provides personalized shopping experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">35%</div>
                  <div className="text-sm text-gray-400">Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50%</div>
                  <div className="text-sm text-gray-400">Satisfaction Boost</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Recommendation Engine</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Chatbot</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Personalization</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and IT solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </a>
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}