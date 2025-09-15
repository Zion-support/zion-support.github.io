import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Services - Zion Tech Group',
  description: 'Comprehensive AI automation, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services for enterprise transformation.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="AI & Technology Services - Zion Tech Group"
        description="Comprehensive AI automation, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services for enterprise transformation."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/services"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 COMPREHENSIVE SERVICES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI & Technology Services
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
                Expert consulting and implementation services for enterprise success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI automation to quantum computing, we provide end-to-end technology solutions 
                that drive real business results and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Automation */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Automation</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent automation solutions that streamline operations and boost productivity across your organization.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• Process Automation</li>
                  <li>• Machine Learning Integration</li>
                  <li>• Intelligent Workflows</li>
                  <li>• RPA Implementation</li>
                </ul>
                <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>

              {/* Cloud Infrastructure */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">☁️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Scalable, secure cloud solutions designed to support your business growth and digital transformation.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• AWS/Azure/GCP Migration</li>
                  <li>• Container Orchestration</li>
                  <li>• Microservices Architecture</li>
                  <li>• DevOps Implementation</li>
                </ul>
                <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>

              {/* Micro SaaS */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">
                  Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• Custom Application Development</li>
                  <li>• API Development & Integration</li>
                  <li>• Database Design & Optimization</li>
                  <li>• User Experience Design</li>
                </ul>
                <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>

              {/* Quantum Computing */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
                <p className="text-gray-600 mb-6">
                  Revolutionary quantum computing solutions for complex optimization and simulation problems.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• Quantum Algorithm Development</li>
                  <li>• Hybrid Quantum-Classical Systems</li>
                  <li>• Quantum Machine Learning</li>
                  <li>• Optimization Solutions</li>
                </ul>
                <Link href="/services/quantum-computing" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>

              {/* Data Analytics */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Advanced analytics and business intelligence solutions that turn data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence Dashboards</li>
                  <li>• Data Visualization</li>
                  <li>• Machine Learning Models</li>
                </ul>
                <Link href="/services/data-analytics" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">🔒</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security solutions to protect your digital assets and ensure compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• Security Assessment & Auditing</li>
                  <li>• Threat Detection & Response</li>
                  <li>• Compliance Management</li>
                  <li>• Security Training</li>
                </ul>
                <Link href="/services/cybersecurity" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600">
                Our track record speaks for itself
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful project delivery and maximum ROI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your current state, challenges, and opportunities for improvement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
                <p className="text-gray-600">
                  Development of a customized strategy and roadmap tailored to your specific business objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Expert execution of the solution with continuous monitoring and optimization throughout the process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
                <p className="text-gray-600">
                  Ongoing support, monitoring, and continuous improvement to ensure maximum value and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful companies that have achieved remarkable results with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}