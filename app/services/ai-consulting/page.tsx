import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIConsultingService() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Consulting Services - Strategic AI Implementation & Transformation"
        description="Expert AI consulting services to help your organization navigate AI transformation. From strategy to implementation, we guide you through every step of your AI journey."
        keywords="AI consulting, AI strategy, AI implementation, AI transformation, artificial intelligence consulting, AI advisory"
        url="/services/ai-consulting"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your business with strategic AI implementation. Our expert consultants guide you through 
            every step of your AI journey, from initial strategy to full-scale deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="#services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic AI Planning</h3>
            <p className="text-gray-600">
              Develop comprehensive AI strategies aligned with your business objectives and market opportunities.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Implementation</h3>
            <p className="text-gray-600">
              Accelerate your AI adoption with proven methodologies and expert guidance throughout the process.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Results</h3>
            <p className="text-gray-600">
              Achieve tangible business outcomes with AI solutions that deliver ROI and competitive advantage.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our AI Consulting Services
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Strategy & Planning */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Strategy & Planning</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Develop comprehensive AI strategies that align with your business goals and create sustainable 
                competitive advantages.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">AI Readiness Assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Technology Roadmap Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">ROI Analysis & Business Case</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Risk Assessment & Mitigation</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Implementation */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Implementation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Execute AI projects with precision using our proven implementation methodologies and expert guidance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Custom AI Solution Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Data Pipeline & Infrastructure Setup</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Model Training & Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Integration & Deployment</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Governance & Ethics */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Governance & Ethics</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Ensure responsible AI deployment with comprehensive governance frameworks and ethical guidelines.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">AI Ethics Framework Development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Compliance & Regulatory Guidance</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Bias Detection & Mitigation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">AI Risk Management</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* AI Training & Support */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Training & Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Empower your team with comprehensive AI training and ongoing support to maximize your AI investments.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Executive AI Education</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Technical Team Training</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Change Management Support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Ongoing Support & Maintenance</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Industry Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">Medical diagnosis, drug discovery, patient care optimization</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-sm text-gray-600">Fraud detection, risk assessment, algorithmic trading</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-600">Predictive maintenance, quality control, supply chain optimization</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
              <p className="text-sm text-gray-600">Personalization, demand forecasting, customer service</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our AI Consulting Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
              <p className="text-gray-600">
                Understand your business, current state, and AI opportunities through comprehensive analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                Create a tailored AI strategy with clear objectives, timelines, and success metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Execute the strategy with expert guidance, ensuring smooth deployment and adoption.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Continuously monitor, measure, and optimize AI solutions for maximum business impact.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Provider</h3>
              <p className="text-gray-600 mb-4">
                "Zion Tech Group helped us implement AI-powered diagnostic tools that improved patient outcomes by 40% 
                while reducing diagnostic time by 60%."
              </p>
              <div className="text-sm text-gray-500">- Dr. Sarah Johnson, CMO</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Institution</h3>
              <p className="text-gray-600 mb-4">
                "Their AI fraud detection system reduced false positives by 70% while catching 95% more fraudulent 
                transactions, saving us millions annually."
              </p>
              <div className="text-sm text-gray-500">- Michael Chen, CTO</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing Company</h3>
              <p className="text-gray-600 mb-4">
                "Predictive maintenance AI reduced unplanned downtime by 50% and increased equipment efficiency by 25%, 
                delivering $2M in annual savings."
              </p>
              <div className="text-sm text-gray-500">- Lisa Rodriguez, VP Operations</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Consulting Packages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Strategy Session</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">$5,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">2-day AI readiness assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Custom AI strategy roadmap</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Executive presentation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">30-day follow-up support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-blue-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Implementation</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">$25,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Complete AI strategy development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Custom AI solution development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Team training and support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">3-month implementation support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Transformation</h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Enterprise-wide AI transformation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Multiple AI solution implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Dedicated AI team support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Ongoing optimization and support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join hundreds of companies that have successfully transformed their operations with our AI consulting services. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View Success Stories
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}