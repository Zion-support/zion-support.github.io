<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
=======
import React from 'react'
import { Metadata } from 'next'
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export const metadata: Metadata = {
  title: 'Finance Solutions | Zion Tech Group',
  description: 'Professional finance solutions for your business needs.',
  keywords: 'finance, solutions, business, technology'
}
<<<<<<< HEAD

  "title": 'Finance | Zion Tech Group','
  "description": 'Professional finance services for your business needs.','
  "keywords": 'finance, services, business, technology''

  "title": 'Finance | Zion Tech Group','
  "description": 'Professional finance services for your business needs.','
  "keywords": 'finance, services, business, technology''
};

export default function FinanceSolutionsPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            Finance Industry Solutions
=======

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Finance Solutions
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Specialized technology solutions designed specifically for the finance industry. 
            We understand the unique challenges and compliance requirements of your sector.
          </p>
        </div>

<<<<<<< HEAD
        <div className="max-w-6xl mx-auto">"
          {/* Industry-specific Features */}
          <div className="grid grid-cols-1 "md":grid-cols-2 gap-12 mb-16">"
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Finance Solutions?</h2>"
              <div className="space-y-6">"
                <div className="flex items-start">"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">"
                    <span className="text-2xl">🏥</span>"
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>"
                    <p className="text-gray-600">"
                      Deep understanding of finance industry challenges and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">"
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">"
                    <span className="text-2xl">📋</span>"
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>"
                    <p className="text-gray-600">"
                      Built with industry regulations and compliance standards in mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">"
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">"
                    <span className="text-2xl">🔒</span>"
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>"
                    <p className="text-gray-600">"
                      Enterprise-grade security designed for sensitive finance data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">"
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Finance Solutions</h3>"
              <div className="space-y-4">"
                <div className="flex items-center">"
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>"
                  <span className="text-gray-700">Custom Software Development</span>"
                </div>
                <div className="flex items-center">"
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>"
                  <span className="text-gray-700">Data Analytics & Reporting</span>"
                </div>
                <div className="flex items-center">"
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>"
                  <span className="text-gray-700">Process Automation</span>"
                </div>
                <div className="flex items-center">"
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>"
                  <span className="text-gray-700">Compliance Management</span>"
                </div>
                <div className="flex items-center">"
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>"
                  <span className="text-gray-700">Security Solutions</span>"
                </div>
                <div className="flex items-center">"
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>"
                  <span className="text-gray-700">Cloud Migration</span>"
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">"
              Ready to Transform Your Finance Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
              Let's discuss how our specialized finance solutions can help '
              your organization achieve its goals.
            </p>
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
              <Link,
href="/contact""
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors inline-flex items-center""
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />"
              </Link>
              <Link,
href="/services""
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold "hover":border-blue-400 "hover":text-blue-600 transition-colors""
              >
                View All Services
              </Link>
            </div>
        
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">"
            <h3 className="text-2xl font-bold text-white mb-4">Feature 1</h3>"
            <p className="text-gray-300 mb-6">Description of the first key feature.</p>"
            <ul className="space-y-2 text-gray-300">"
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">"
            <h3 className="text-2xl font-bold text-white mb-4">Feature 2</h3>"
            <p className="text-gray-300 mb-6">Description of the second key feature.</p>"
            <ul className="space-y-2 text-gray-300">"
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">"
            <h3 className="text-2xl font-bold text-white mb-4">Feature 3</h3>"
            <p className="text-gray-300 mb-6">Description of the third key feature.</p>"
            <ul className="space-y-2 text-gray-300">"
              <li>• Benefit 1</li>
              <li>• Benefit 2</li>
              <li>• Benefit 3</li>
            </ul>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-4">Financial Planning</h3>
            <p className="text-gray-300">
              Comprehensive financial planning and analysis solutions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-gray-300">
              Advanced financial analytics and reporting tools.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-4">Security</h3>
            <p className="text-gray-300">
              Secure financial data management and compliance.
            </p>
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our finance solutions can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
=======
import React from 'react';

export const metadata = {
  title: 'Finance Solutions | Zion Tech Group',
  description: 'Professional finance solutions for modern businesses. Transform your financial operations with our advanced finance technology.'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Finance Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional finance solutions for modern businesses. Transform your financial operations with our advanced finance technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Analytics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time financial reporting</li>
              <li>• Predictive analytics</li>
              <li>• Risk assessment</li>
              <li>• Performance tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Processing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Secure payment gateways</li>
              <li>• Multi-currency support</li>
              <li>• Fraud detection</li>
              <li>• Compliance management</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Budget planning</li>
              <li>• Expense tracking</li>
              <li>• Investment analysis</li>
              <li>• Tax optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our finance solutions can help your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
