import React from 'react';

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Discover our comprehensive technology solutions designed to transform your business and drive growth.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Discovery & Assessment</h3>
              <p className="text-gray-300">
                We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-4">Solution Design</h3>
              <p className="text-gray-300">
                Our experts design custom AI solutions tailored to your specific business needs and objectives.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Development & Testing</h3>
              <p className="text-gray-300">
                We develop and rigorously test your AI solution to ensure optimal performance and reliability.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-4">Deployment & Training</h3>
              <p className="text-gray-300">
                Seamless deployment with comprehensive training for your team to maximize solution adoption.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
              <p className="text-gray-300 mb-4">
                AI-powered diagnostic tools, patient management systems, and medical data analytics.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Medical Image Analysis</li>
                <li>• Predictive Health Analytics</li>
                <li>• Electronic Health Records</li>
                <li>• Telemedicine Platforms</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
              <p className="text-gray-300 mb-4">
                Fraud detection, algorithmic trading, risk assessment, and personalized financial services.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Fraud Detection Systems</li>
                <li>• Algorithmic Trading</li>
                <li>• Credit Risk Assessment</li>
                <li>• Robo-Advisors</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
              <p className="text-gray-300 mb-4">
                Smart manufacturing, predictive maintenance, quality control, and supply chain optimization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Predictive Maintenance</li>
                <li>• Quality Control Systems</li>
                <li>• Supply Chain Optimization</li>
                <li>• Industrial IoT</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Retail & E-commerce</h3>
              <p className="text-gray-300 mb-4">
                Personalized shopping experiences, inventory management, and customer analytics.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Recommendation Engines</li>
                <li>• Inventory Optimization</li>
                <li>• Customer Analytics</li>
                <li>• Chatbots & Virtual Assistants</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <p className="text-gray-300 mb-4">
                Personalized learning platforms, intelligent tutoring systems, and educational analytics.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Adaptive Learning Systems</li>
                <li>• Intelligent Tutoring</li>
                <li>• Student Performance Analytics</li>
                <li>• Virtual Classrooms</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Government</h3>
              <p className="text-gray-300 mb-4">
                Smart city solutions, citizen services automation, and data-driven policy making.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Smart City Infrastructure</li>
                <li>• Citizen Service Automation</li>
                <li>• Data Analytics & Insights</li>
                <li>• Digital Government Platforms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a custom solution that drives real business value.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}