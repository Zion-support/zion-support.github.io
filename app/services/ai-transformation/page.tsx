import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Transformation Services - Complete Enterprise AI Implementation',
  description: 'Transform your business with our comprehensive AI transformation services. Get 300% ROI, 85% efficiency gains, and industry-leading AI capabilities.',
  keywords: 'AI transformation services, enterprise AI, AI implementation, digital transformation, AI consulting, AI strategy',
};

export default function AITransformationServices() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            Featured Service
          </span>
          <span className="text-gray-500 text-sm">Enterprise AI Solutions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Transformation Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Transform your business with our comprehensive AI transformation services. Achieve 300% ROI, 85% efficiency gains, and industry-leading AI capabilities with our proven methodologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/case-studies/ai-transformation-mega-success-2026"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
          <div className="text-gray-600">Average ROI</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
          <div className="text-gray-600">Efficiency Gain</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Projects Delivered</div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Transformation Framework</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Assess</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive AI readiness assessment and strategic planning
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
            <p className="text-gray-600 text-sm">
              Custom AI architecture and solution design for your business
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Implement</h3>
            <p className="text-gray-600 text-sm">
              End-to-end AI solution implementation and integration
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Optimize</h3>
            <p className="text-gray-600 text-sm">
              Continuous optimization and performance improvement
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Transformation Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Strategy & Planning</h3>
            <p className="text-gray-600 mb-4">
              Develop comprehensive AI strategies aligned with your business objectives and market opportunities.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• AI readiness assessment</li>
              <li>• Strategic roadmap development</li>
              <li>• ROI modeling and business case</li>
              <li>• Change management planning</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Infrastructure Setup</h3>
            <p className="text-gray-600 mb-4">
              Build robust, scalable AI infrastructure that supports your current and future AI initiatives.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Cloud platform selection and setup</li>
              <li>• Data pipeline architecture</li>
              <li>• Security and compliance frameworks</li>
              <li>• Monitoring and governance tools</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Model Development</h3>
            <p className="text-gray-600 mb-4">
              Develop, train, and deploy custom AI models tailored to your specific business needs and use cases.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Custom model development</li>
              <li>• Model training and optimization</li>
              <li>• A/B testing and validation</li>
              <li>• Model deployment and monitoring</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Process Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate business processes with AI-powered workflows that improve efficiency and reduce costs.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Workflow analysis and design</li>
              <li>• Automation implementation</li>
              <li>• Integration with existing systems</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics & Insights</h3>
            <p className="text-gray-600 mb-4">
              Transform your data into actionable insights with advanced AI-powered analytics and visualization.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Data analysis and visualization</li>
              <li>• Predictive analytics</li>
              <li>• Real-time dashboards</li>
              <li>• Business intelligence solutions</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive training programs and ongoing support to ensure successful AI adoption across your organization.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Employee training programs</li>
              <li>• Change management support</li>
              <li>• 24/7 technical support</li>
              <li>• Continuous optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🏭</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
            <p className="text-gray-600 text-sm">
              Predictive maintenance, quality control, and supply chain optimization
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🏥</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
            <p className="text-gray-600 text-sm">
              Medical diagnosis, patient care, and operational efficiency
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">💰</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Services</h3>
            <p className="text-gray-600 text-sm">
              Fraud detection, risk management, and customer analytics
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🛒</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Retail</h3>
            <p className="text-gray-600 text-sm">
              Personalization, inventory management, and customer experience
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fortune 500 Manufacturing Company</h3>
                <p className="text-gray-700 mb-4">
                  Achieved $50M additional revenue and 300% ROI through comprehensive AI transformation across 50+ facilities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$50M</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">300%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/case-studies/ai-transformation-mega-success-2026"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Financial Services Firm</h3>
                <p className="text-gray-700 mb-4">
                  Reduced operational costs by 40% and improved customer satisfaction by 85% with AI-powered automation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">40%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/case-studies/fintech-ai-transformation-2026"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing & Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
            <div className="text-3xl font-bold text-gray-900 mb-6">$50K<span className="text-lg text-gray-600">/month</span></div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• AI readiness assessment</li>
              <li>• Basic AI strategy development</li>
              <li>• 2-3 pilot AI implementations</li>
              <li>• Monthly progress reviews</li>
              <li>• Email support</li>
            </ul>
            <Link
              href="/contact"
              className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center block"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <div className="text-3xl font-bold text-gray-900 mb-6">$150K<span className="text-lg text-gray-600">/month</span></div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Comprehensive AI transformation</li>
              <li>• Custom AI model development</li>
              <li>• Full infrastructure setup</li>
              <li>• 24/7 technical support</li>
              <li>• Dedicated AI team</li>
              <li>• Change management support</li>
            </ul>
            <Link
              href="/contact"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-gray-900 mb-6">Custom<span className="text-lg text-gray-600"> pricing</span></div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Complete AI ecosystem transformation</li>
              <li>• Advanced AI capabilities</li>
              <li>• Multi-cloud deployment</li>
              <li>• Dedicated AI innovation lab</li>
              <li>• Executive AI advisory</li>
              <li>• Custom training programs</li>
            </ul>
            <Link
              href="/contact"
              className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Zion Tech Group?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Expertise</h3>
            <p className="text-gray-600 text-sm">
              500+ successful AI transformations across industries
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Implementation</h3>
            <p className="text-gray-600 text-sm">
              Rapid deployment with 18-month average timeline
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-gray-600 text-sm">
              Bank-grade security and compliance frameworks
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
            <p className="text-gray-600 text-sm">
              24/7 support and continuous optimization
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free AI transformation assessment and discover how AI can drive growth and efficiency in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ai-consulting" className="text-blue-600 hover:text-blue-700 font-medium">
                  AI Consulting Services →
                </Link>
              </li>
              <li>
                <Link href="/services/ai-infrastructure" className="text-blue-600 hover:text-blue-700 font-medium">
                  AI Infrastructure Setup →
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-blue-600 hover:text-blue-700 font-medium">
                  AI Process Automation →
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Expert Help</h3>
            <p className="text-gray-600 mb-4">
              Need help with your AI transformation? Our experts are ready to guide you through every step.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Our AI Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}