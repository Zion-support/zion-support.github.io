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
            View Success Stories
          </Link>
        </div>
      </header>

      {/* Key Benefits */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">📈</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">300% ROI Guaranteed</h3>
            <p className="text-gray-600">
              Our proven AI transformation framework delivers measurable returns on investment within 6-12 months.
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">70% Cost Reduction</h3>
            <p className="text-gray-600">
              Streamline operations and eliminate inefficiencies with intelligent automation and optimization.
            </p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">90% Efficiency Gains</h3>
            <p className="text-gray-600">
              Accelerate processes and improve productivity with cutting-edge AI technologies and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Transformation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your enterprise operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Strategy & Planning</h3>
            <p className="text-gray-600 mb-6">
              Develop comprehensive AI strategies aligned with your business objectives and digital transformation goals.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• AI readiness assessment</li>
              <li>• Technology roadmap development</li>
              <li>• ROI projection and planning</li>
              <li>• Change management strategy</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Process Automation</h3>
            <p className="text-gray-600 mb-6">
              Automate complex business processes with intelligent workflow design and smart decision-making systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Workflow analysis and optimization</li>
              <li>• RPA implementation</li>
              <li>• Intelligent document processing</li>
              <li>• Process monitoring and optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics & AI</h3>
            <p className="text-gray-600 mb-6">
              Transform data into actionable insights with advanced analytics and machine learning capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Predictive analytics</li>
              <li>• Real-time dashboards</li>
              <li>• Machine learning models</li>
              <li>• Data visualization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Security & Governance</h3>
            <p className="text-gray-600 mb-6">
              Ensure secure and compliant AI implementations with robust governance frameworks and security protocols.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• AI security assessment</li>
              <li>• Compliance framework design</li>
              <li>• Risk management</li>
              <li>• Ethical AI guidelines</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud AI Integration</h3>
            <p className="text-gray-600 mb-6">
              Seamlessly integrate AI capabilities with your existing cloud infrastructure and enterprise systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Cloud migration strategy</li>
              <li>• AI platform integration</li>
              <li>• Scalability planning</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Develop tailored AI solutions that address your specific business challenges and opportunities.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Custom model development</li>
              <li>• Industry-specific solutions</li>
              <li>• Integration with existing systems</li>
              <li>• Ongoing support and maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our AI transformation services have delivered measurable results for enterprise clients across industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2B+</div>
              <div className="text-blue-100">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Enterprise?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Let's discuss how our AI transformation services can help you achieve unprecedented business outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}