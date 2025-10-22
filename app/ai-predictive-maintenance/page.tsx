<<<<<<< HEAD
import React from 'react';
import SEOHead from '../components/SEOHead';

const AIPredictiveMaintenancePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Predictive Maintenance - Zion Tech Group"
        description="AI-powered predictive maintenance solutions. Prevent equipment failures, reduce downtime, and optimize maintenance schedules with machine learning and IoT sensors."
        keywords="AI predictive maintenance, equipment monitoring, IoT sensors, machine learning, maintenance optimization, failure prevention"
        canonicalUrl="https://ziontechgroup.com/ai-predictive-maintenance"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Predictive Maintenance Platform</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prevent equipment failures before they happen with AI-powered predictive maintenance. Monitor equipment health, predict failures, and optimize maintenance schedules to reduce downtime and costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">IoT Sensor Integration</h3>
                    <p className="text-gray-600">Connect and monitor equipment through various IoT sensors and devices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Machine Learning Models</h3>
                    <p className="text-gray-600">Advanced ML algorithms that learn from historical data to predict failures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Real-Time Monitoring</h3>
                    <p className="text-gray-600">Continuous monitoring of equipment health and performance metrics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Failure Prediction</h3>
                    <p className="text-gray-600">Predict equipment failures with high accuracy and provide maintenance recommendations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Maintenance Optimization</h3>
                    <p className="text-gray-600">Optimize maintenance schedules to minimize costs while maximizing equipment uptime</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Basic Monitoring</h4>
                  <p className="text-3xl font-bold text-teal-600">$199<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 10 devices</li>
                    <li>• Basic monitoring</li>
                    <li>• Email alerts</li>
                    <li>• Standard reporting</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-teal-500 rounded-lg p-4 bg-teal-50">
                  <h4 className="text-lg font-semibold text-gray-900">Professional</h4>
                  <p className="text-3xl font-bold text-teal-600">$499<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Up to 50 devices</li>
                    <li>• Advanced AI predictions</li>
                    <li>• Real-time alerts</li>
                    <li>• Custom dashboards</li>
                    <li>• API integration</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise</h4>
                  <p className="text-3xl font-bold text-teal-600">$1,299<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Unlimited devices</li>
                    <li>• Custom ML models</li>
                    <li>• 24/7 monitoring</li>
                    <li>• On-site support</li>
                    <li>• Custom integrations</li>
                    <li>• Dedicated support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevent Equipment Failures with AI</h2>
            <p className="text-gray-600 mb-6">Reduce downtime and maintenance costs with predictive intelligence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Get Equipment Assessment
              </a>
              <a href="tel:+13024640950" className="border border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function AiPredictiveMaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Predictive Maintenance | Zion Tech Group</title>
        <meta name="description" content="Professional ai predictive maintenance solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Ai Predictive Maintenance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ai predictive maintenance solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with ai predictive maintenance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
