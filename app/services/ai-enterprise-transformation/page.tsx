import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Enterprise Transformation Services | Zion Tech Group',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains with our comprehensive AI transformation services.',
  keywords: 'AI enterprise transformation, AI implementation, enterprise AI services, digital transformation, AI consulting, AI strategy',
};

export default function AIEnterpriseTransformationService() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            Enterprise AI Services
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Enterprise Transformation
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {' '}Services
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Transform your enterprise with AI-powered solutions that deliver 300% ROI, 70% cost reduction, 
          and 90% efficiency gains. Our comprehensive AI transformation services help you achieve 
          unprecedented business outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </header>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Transformation Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology and expert team deliver measurable results that transform your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">300% Average ROI</h3>
              <p className="text-gray-600 mb-4">
                Our clients achieve an average ROI of 300% within 12 months of implementation, 
                with some seeing returns as high as 500%.
              </p>
              <div className="text-2xl font-bold text-blue-600">$50M+ Savings</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">90% Efficiency Gains</h3>
              <p className="text-gray-600 mb-4">
                Automate complex processes and workflows to achieve unprecedented efficiency 
                improvements across your organization.
              </p>
              <div className="text-2xl font-bold text-green-600">70% Cost Reduction</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Methodology</h3>
              <p className="text-gray-600 mb-4">
                Our 5-phase implementation framework has been refined through 500+ successful 
                enterprise AI transformations.
              </p>
              <div className="text-2xl font-bold text-purple-600">99.9% Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive AI Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI transformation services 
              that deliver measurable business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Strategy & Consulting</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Develop a comprehensive AI strategy aligned with your business objectives. 
                Our experts assess your current state and create a roadmap for transformation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>AI readiness assessment and gap analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Strategic roadmap development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>ROI projection and business case creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Technology stack evaluation and selection</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Implementation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Execute your AI transformation with our proven implementation methodology. 
                We handle everything from data preparation to model deployment.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Custom AI model development and training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>System integration and deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Data pipeline optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Performance monitoring and tuning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Operations & Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Ensure ongoing success with our comprehensive AI operations and support services. 
                We monitor, optimize, and maintain your AI systems.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>24/7 AI system monitoring and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Continuous model optimization and updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Performance analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Ongoing training and support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Innovation Lab</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Stay ahead of the curve with our AI innovation lab services. We help you 
                explore emerging AI technologies and pilot new solutions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Emerging AI technology evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Proof-of-concept development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Innovation workshops and training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Future AI strategy planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free AI transformation assessment and discover how your organization 
            can achieve 300% ROI with our proven framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}