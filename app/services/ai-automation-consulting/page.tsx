import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIAutomationConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Automation Consulting Services - Expert Implementation & Strategy"
        description="Transform your business with our AI automation consulting services. Expert strategy, implementation, and optimization to maximize efficiency and ROI. Free consultation available."
        keywords="AI automation consulting, business automation, process optimization, AI implementation, automation strategy, digital transformation"
        url="/services/ai-automation-consulting"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🚀 EXPERT SERVICES - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Automation Consulting Services
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business operations with our comprehensive AI automation consulting services. 
            Our expert team delivers strategic guidance, implementation support, and ongoing optimization 
            to maximize your automation ROI and drive sustainable growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
            <span>🎯 Strategy & Planning</span>
            <span>⚙️ Implementation</span>
            <span>📊 Optimization</span>
            <span>🔄 Ongoing Support</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="#services"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </header>

        {/* Value Proposition */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💡 Why Choose Our AI Automation Consulting?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-700">
                500+ successful automation projects across industries with average 85% cost reduction and 10x efficiency gains.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Implementation</h3>
              <p className="text-gray-700">
                Accelerated deployment with our proven methodology, delivering results in 60-90 days instead of 12+ months.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Free Approach</h3>
              <p className="text-gray-700">
                Comprehensive risk assessment and mitigation strategies with guaranteed ROI and performance outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">🛠️ Our AI Automation Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategic Consulting */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Strategic Consulting</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Comprehensive assessment and strategic planning to identify automation opportunities 
                and design optimal implementation roadmaps for maximum business impact.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Process assessment and optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">ROI analysis and business case development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Technology stack selection</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Change management planning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Risk assessment and mitigation</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800"><strong>Duration:</strong> 2-4 weeks</p>
                <p className="text-sm text-blue-800"><strong>Investment:</strong> Starting at $15,000</p>
              </div>
            </div>

            {/* Implementation Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Implementation Services</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                End-to-end implementation support with expert development, testing, and deployment 
                to ensure successful automation rollout and adoption.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Custom automation solution development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">System integration and configuration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Comprehensive testing and validation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">User training and documentation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Go-live support and monitoring</span>
                </li>
              </ul>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800"><strong>Duration:</strong> 8-16 weeks</p>
                <p className="text-sm text-green-800"><strong>Investment:</strong> Starting at $50,000</p>
              </div>
            </div>

            {/* Optimization Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Optimization Services</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Continuous improvement and optimization of existing automation systems to maximize 
                performance, reduce costs, and enhance business outcomes.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Performance monitoring and analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Process optimization and tuning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Advanced analytics implementation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Scalability planning and execution</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">ROI tracking and reporting</span>
                </li>
              </ul>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800"><strong>Duration:</strong> Ongoing</p>
                <p className="text-sm text-purple-800"><strong>Investment:</strong> Starting at $5,000/month</p>
              </div>
            </div>

            {/* Managed Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 text-xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Managed Services</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Complete management and maintenance of your automation systems with 24/7 monitoring, 
                support, and continuous improvement services.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">24/7 system monitoring and support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Regular maintenance and updates</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Incident response and resolution</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Performance optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Monthly reporting and insights</span>
                </li>
              </ul>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800"><strong>Duration:</strong> 12+ months</p>
                <p className="text-sm text-orange-800"><strong>Investment:</strong> Starting at $8,000/month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">🏭 Industry Expertise</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Supply chain automation, quality control, and production optimization</p>
            </div>
            
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm">Loan processing, compliance monitoring, and risk management</p>
            </div>
            
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Patient data processing, appointment scheduling, and billing automation</p>
            </div>
            
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600 text-sm">Inventory management, order processing, and customer service</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">📈 Proven Results</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Successful Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-700">Average Cost Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
              <div className="text-gray-700">Efficiency Improvement</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-700">Client Satisfaction Rate</div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">🔄 Our Proven Process</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Assessment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Comprehensive analysis of your current processes, technology infrastructure, and business 
                  objectives to identify automation opportunities and develop strategic recommendations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Process mapping and documentation</li>
                  <li>• Technology assessment and gap analysis</li>
                  <li>• ROI projections and business case development</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Development of comprehensive implementation strategy, technology selection, and detailed 
                  project roadmap with clear milestones and success metrics.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Technology stack selection and architecture design</li>
                  <li>• Implementation timeline and resource planning</li>
                  <li>• Change management and training strategy</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Implementation & Deployment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Expert development, testing, and deployment of automation solutions with comprehensive 
                  quality assurance and user training programs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom solution development and configuration</li>
                  <li>• Integration with existing systems</li>
                  <li>• User training and documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimization & Support</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ongoing monitoring, optimization, and support to ensure maximum performance and continuous 
                  improvement of your automation systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Performance monitoring and analytics</li>
                  <li>• Continuous optimization and tuning</li>
                  <li>• 24/7 support and maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">💬 Client Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Davis</h4>
                  <p className="text-sm text-gray-600">CTO, Manufacturing Corp</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The AI automation consulting team transformed our operations. We achieved 90% cost 
                reduction in our order processing and improved customer satisfaction significantly."
              </p>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Miller</h4>
                  <p className="text-sm text-gray-600">VP Operations, Financial Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Exceptional expertise and support throughout the implementation. Our loan processing 
                time went from 5 days to 2 hours with 99.8% accuracy."
              </p>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">RB</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Robert Brown</h4>
                  <p className="text-sm text-gray-600">CEO, Healthcare Group</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Professional, knowledgeable, and results-driven. The automation solutions have 
                revolutionized our patient data management and improved efficiency dramatically."
              </p>
              <div className="text-yellow-500">★★★★★</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI Automation?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation with our AI automation experts. We'll assess your current 
            processes, identify opportunities, and provide a customized strategy for maximum ROI. 
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/resources/ai-automation-implementation-checklist-2025"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Free Checklist
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">Free</div>
              <div className="text-sm opacity-90">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-90">Satisfaction Guarantee</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}