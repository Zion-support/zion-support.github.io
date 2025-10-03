// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIOpsPlatformPage() {
  return (
    <>
      <Helmet>
        <title>AIOps Platform | Zion Tech Group - Intelligent IT Operations</title>
        <meta name="description" content="AI-powered IT operations platform with intelligent monitoring, automated incident response, and predictive maintenance for enterprise infrastructure." />
        <meta name="keywords" content="AIOps, IT operations, intelligent monitoring, incident response, predictive maintenance, infrastructure automation" />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AIOps Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your IT operations with AI-powered monitoring, automated incident response, and predictive maintenance for maximum uptime and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Monitoring</h3>
              <p className="text-gray-600 mb-4">AI-powered monitoring that learns from your infrastructure patterns to detect anomalies and predict issues before they impact users.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Anomaly detection</li>
                <li>• Pattern recognition</li>
                <li>• Baseline learning</li>
                <li>• Predictive alerts</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Incident Response</h3>
              <p className="text-gray-600 mb-4">AI automatically responds to incidents with intelligent remediation, escalation, and communication workflows.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Auto-remediation</li>
                <li>• Smart escalation</li>
                <li>• Incident correlation</li>
                <li>• Communication automation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-4">Predict and prevent infrastructure failures with AI-driven maintenance scheduling and capacity planning.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Failure prediction</li>
                <li>• Maintenance scheduling</li>
                <li>• Capacity forecasting</li>
                <li>• Resource optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">Comprehensive analytics with AI insights to optimize performance, reduce costs, and improve service quality.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Performance analytics</li>
                <li>• Cost optimization</li>
                <li>• SLA monitoring</li>
                <li>• Trend analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Integration</h3>
              <p className="text-gray-600 mb-4">Integrated security monitoring with AI-powered threat detection and automated response capabilities.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Threat detection</li>
                <li>• Security correlation</li>
                <li>• Automated response</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow Automation</h3>
              <p className="text-gray-600 mb-4">Automate complex IT workflows with AI-driven decision making and intelligent process optimization.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Process automation</li>
                <li>• Decision support</li>
                <li>• Workflow optimization</li>
                <li>• Integration management</li>
              </ul>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade AIOps Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Standard</h3>
                <div className="text-3xl font-bold mb-4">$2,500<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 1,000 monitored assets</li>
                  <li>• Basic AI monitoring</li>
                  <li>• Standard incident response</li>
                  <li>• Email support</li>
                  <li>• 99.5% SLA</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">$5,000<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 5,000 monitored assets</li>
                  <li>• Advanced AI features</li>
                  <li>• Automated remediation</li>
                  <li>• Priority support</li>
                  <li>• 99.9% SLA</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">$10,000<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Unlimited monitored assets</li>
                  <li>• Full AI suite</li>
                  <li>• Custom automation</li>
                  <li>• Dedicated support</li>
                  <li>• 99.99% SLA</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-blue-100">* Market average: $3,000-15,000/month for enterprise AIOps platforms</p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven AIOps Benefits</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">75% Reduction in MTTR</h3>
                    <p className="text-gray-600">AI-powered incident response reduces mean time to resolution by 75% compared to manual processes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">99.9% Uptime Achievement</h3>
                    <p className="text-gray-600">Predictive maintenance and intelligent monitoring help achieve exceptional uptime levels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">40% Cost Reduction</h3>
                    <p className="text-gray-600">Automated operations and predictive maintenance significantly reduce IT operational costs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Validation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">"AIOps platforms reduce IT operational costs by 40% on average"</p>
                  <p className="text-xs text-gray-500 mt-1">- Gartner AIOps Market Research</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">"Organizations using AIOps see 60% faster incident resolution"</p>
                  <p className="text-xs text-gray-500 mt-1">- Forrester AIOps Study</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-600">"AIOps adoption increases system reliability by 85%"</p>
                  <p className="text-xs text-gray-500 mt-1">- IDC Infrastructure Research</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading enterprises using AIOps to achieve unprecedented operational efficiency and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}