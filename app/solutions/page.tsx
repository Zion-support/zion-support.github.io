import React from 'react';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations. 
              From AI-powered automation to cloud infrastructure, we deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions across all technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/ai-services" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation.
                </p>
                <div className="text-sm text-gray-500 mb-2">Key Solutions:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Predictive Analytics</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Autonomous Systems</li>
                </ul>
                <span className="text-purple-600 font-medium group-hover:text-purple-800 mt-4 block">Explore AI Solutions →</span>
              </div>
            </Link>
            
            <Link href="/services/micro-saas" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">Micro SaaS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Scalable software-as-a-service applications designed for rapid deployment and growth.
                </p>
                <div className="text-sm text-gray-500 mb-2">Key Solutions:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rapid Development</li>
                  <li>• Scalable Architecture</li>
                  <li>• API-First Design</li>
                  <li>• Cloud-Native</li>
                </ul>
                <span className="text-blue-600 font-medium group-hover:text-blue-800 mt-4 block">Explore SaaS Solutions →</span>
              </div>
            </Link>
            
            <Link href="/services/it-services" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600">IT Services & Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive IT infrastructure, cloud migration, and DevOps services.
                </p>
                <div className="text-sm text-gray-500 mb-2">Key Solutions:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cloud Migration</li>
                  <li>• DevOps & SRE</li>
                  <li>• Infrastructure Management</li>
                  <li>• Security & Compliance</li>
                </ul>
                <span className="text-gray-600 font-medium group-hover:text-gray-800 mt-4 block">Explore IT Solutions →</span>
              </div>
            </Link>
            
            <Link href="/services/blockchain-solutions" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600">Blockchain Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Decentralized applications and blockchain infrastructure for secure, transparent operations.
                </p>
                <div className="text-sm text-gray-500 mb-2">Key Solutions:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart Contracts</li>
                  <li>• DeFi Applications</li>
                  <li>• NFT Platforms</li>
                  <li>• Supply Chain Tracking</li>
                </ul>
                <span className="text-yellow-600 font-medium group-hover:text-yellow-800 mt-4 block">Explore Blockchain →</span>
              </div>
            </Link>
            
            <Link href="/services/iot-solutions" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">IoT Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Internet of Things solutions for connected devices and smart infrastructure.
                </p>
                <div className="text-sm text-gray-500 mb-2">Key Solutions:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Device Management</li>
                  <li>• Data Analytics</li>
                  <li>• Edge Computing</li>
                  <li>• Smart Cities</li>
                </ul>
                <span className="text-green-600 font-medium group-hover:text-green-800 mt-4 block">Explore IoT Solutions →</span>
              </div>
            </Link>
            
            <Link href="/services/cybersecurity-solutions" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600">Cybersecurity Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Advanced security solutions to protect your digital assets and infrastructure.
                </p>
                <div className="text-sm text-gray-500 mb-2">Key Solutions:</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Threat Detection</li>
                  <li>• Zero-Trust Architecture</li>
                  <li>• Compliance Management</li>
                  <li>• Incident Response</li>
                </ul>
                <span className="text-red-600 font-medium group-hover:text-red-800 mt-4 block">Explore Security →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                AI-powered predictive maintenance, quality control, and supply chain optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive Maintenance</li>
                <li>• Quality Control Automation</li>
                <li>• Supply Chain Optimization</li>
                <li>• Smart Factory Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                AI-driven diagnostic systems, patient management, and medical research solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Diagnostic AI Systems</li>
                <li>• Patient Data Analytics</li>
                <li>• Drug Discovery</li>
                <li>• Telemedicine Platforms</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Fraud detection, algorithmic trading, and risk management solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fraud Detection</li>
                <li>• Algorithmic Trading</li>
                <li>• Risk Management</li>
                <li>• Regulatory Compliance</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-3">Retail & E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Personalized recommendations, inventory optimization, and customer analytics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized Recommendations</li>
                <li>• Inventory Optimization</li>
                <li>• Customer Analytics</li>
                <li>• Supply Chain Management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3">Logistics & Transportation</h3>
              <p className="text-gray-600 mb-4">
                Route optimization, fleet management, and autonomous vehicle solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Route Optimization</li>
                <li>• Fleet Management</li>
                <li>• Autonomous Vehicles</li>
                <li>• Real-time Tracking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600 mb-4">
                Personalized learning, student analytics, and educational content generation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized Learning</li>
                <li>• Student Analytics</li>
                <li>• Content Generation</li>
                <li>• Assessment Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions deliver measurable business impact across industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2B+</div>
              <div className="text-gray-600">Value Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right solutions for your specific needs and industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}