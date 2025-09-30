import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Consulting Services: Transform Your Business with Expert AI Strategy | Zion Tech Group',
  description: 'Get expert AI consulting to transform your business. Our AI consultants help you develop strategies, implement solutions, and achieve 300% ROI. Free consultation available.',
  keywords: 'AI consulting, artificial intelligence consulting, AI strategy, AI implementation, business transformation, AI ROI, machine learning consulting',
  openGraph: {
    title: 'AI Consulting Services: Transform Your Business with Expert AI Strategy',
    description: 'Get expert AI consulting to transform your business. Our AI consultants help you develop strategies and achieve 300% ROI.',
    type: 'website',
    url: 'https://ziontechgroup.com/services/ai-consulting',
    images: [
      {
        url: '/og-ai-consulting-services.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Consulting Services - Zion Tech Group'
      }
    ]
  }
};

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="text-lg">🧠</span>
                <span>AI Consulting Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Expert AI Strategy
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get expert AI consulting to develop winning strategies, implement cutting-edge solutions, 
                and achieve measurable business results. Our proven framework delivers 300% ROI on average.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="#services" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our AI Consulting?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-lg">Proven Results</h4>
                    <p className="text-blue-100 text-sm">300% average ROI across 500+ implementations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-lg">Rapid Implementation</h4>
                    <p className="text-blue-100 text-sm">See results in 90 days, full transformation in 12 months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-bold text-lg">Enterprise Security</h4>
                    <p className="text-blue-100 text-sm">Bank-level security and compliance standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-bold text-lg">Global Scale</h4>
                    <p className="text-blue-100 text-sm">Supporting Fortune 500 companies worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting services designed to accelerate your digital transformation and maximize business value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Strategy & Roadmap</h3>
              <p className="text-gray-600 mb-6">
                Develop comprehensive AI strategies aligned with your business objectives and create detailed implementation roadmaps.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Business case development</li>
                <li>• Technology assessment</li>
                <li>• ROI analysis and projections</li>
                <li>• Implementation timeline</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Implementation</h3>
              <p className="text-gray-600 mb-6">
                End-to-end AI solution implementation with proven methodologies and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data integration and preparation</li>
                <li>• Model development and training</li>
                <li>• System integration and deployment</li>
                <li>• Performance monitoring and optimization</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Training & Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive training programs to upskill your team and ensure successful AI adoption.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Executive AI education</li>
                <li>• Technical team training</li>
                <li>• Change management support</li>
                <li>• Ongoing consultation and support</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Audit & Assessment</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive evaluation of your current AI capabilities and identification of improvement opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Current state analysis</li>
                <li>• Gap identification</li>
                <li>• Risk assessment</li>
                <li>• Improvement recommendations</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Optimization</h3>
              <p className="text-gray-600 mb-6">
                Optimize existing AI systems for better performance, efficiency, and business value.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Performance tuning</li>
                <li>• Cost optimization</li>
                <li>• Model retraining</li>
                <li>• System scaling</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Governance & Ethics</h3>
              <p className="text-gray-600 mb-6">
                Establish robust governance frameworks and ethical guidelines for responsible AI deployment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Governance framework design</li>
                <li>• Ethical AI guidelines</li>
                <li>• Compliance and risk management</li>
                <li>• Bias detection and mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful AI transformation and measurable business results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Assessment</h3>
              <p className="text-gray-600">
                Understand your business goals, current state, and AI readiness through comprehensive analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                Create a tailored AI strategy with clear objectives, timelines, and success metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Execute the strategy with agile methodologies and continuous monitoring and optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale & Optimize</h3>
              <p className="text-gray-600">
                Scale successful solutions across the organization and continuously optimize for maximum value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI consulting services have delivered measurable results for organizations across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-lg text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-lg text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.5B+</div>
              <div className="text-lg text-gray-600">Client Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI consulting expertise spans across multiple industries, delivering tailored solutions for each sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600">Predictive maintenance, quality control, and supply chain optimization.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-600">Risk management, fraud detection, and algorithmic trading.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600">Medical diagnosis, drug discovery, and patient care optimization.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail & E-commerce</h3>
              <p className="text-gray-600">Personalization, demand forecasting, and inventory management.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Logistics & Transportation</h3>
              <p className="text-gray-600">Route optimization, fleet management, and predictive analytics.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">Personalized learning, student success prediction, and content optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert AI consulting to develop winning strategies and achieve measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does an AI consulting engagement typically take?</h3>
              <p className="text-gray-600">
                The duration varies based on project scope, but most engagements range from 3-12 months. 
                We typically see initial results within 90 days and full transformation within 12 months.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's the typical ROI for AI consulting projects?</h3>
              <p className="text-gray-600">
                Our clients typically see 300% ROI on average, with some achieving returns as high as 1000%. 
                The exact ROI depends on the specific use case and implementation scope.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with small businesses or only large enterprises?</h3>
              <p className="text-gray-600">
                We work with organizations of all sizes, from startups to Fortune 500 companies. 
                Our approach is scalable and tailored to each client's specific needs and budget.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What happens after the consulting engagement ends?</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance options, including training your internal team, 
                monitoring system performance, and continuous optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}