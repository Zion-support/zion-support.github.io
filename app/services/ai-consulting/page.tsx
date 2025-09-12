import React from 'react';
import SEO from '../../../components/SEO';
import { CheckCircle, ArrowRight, Brain, Zap, Target, Users, Award, Clock, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AIConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Consulting Services - Expert AI Strategy & Implementation | Zion Tech Group"
        description="Transform your business with expert AI consulting services. Strategic AI planning, implementation, and optimization to drive innovation and competitive advantage."
        keywords="AI consulting, artificial intelligence strategy, AI implementation, AI transformation, machine learning consulting, AI advisory services"
        url="/services/ai-consulting"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI CONSULTING</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert AI Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform Your Business with Strategic AI Implementation and Expert Guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Consulting */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group for AI Consulting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team combines deep technical knowledge with proven business acumen 
              to deliver AI solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">
                500+ successful AI implementations across industries with 95% client satisfaction rate.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Focus</h3>
              <p className="text-gray-600">
                We align AI initiatives with your business goals to maximize ROI and competitive advantage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Support</h3>
              <p className="text-gray-600">
                From strategy to implementation and ongoing optimization, we're with you every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Consulting Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting services designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Strategy & Planning */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Strategy & Planning</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Develop comprehensive AI strategies aligned with your business objectives and market opportunities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AI readiness assessment and gap analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategic roadmap development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ROI analysis and business case development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Technology stack recommendations</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Duration:</strong> 4-8 weeks | <strong>Investment:</strong> $25,000 - $75,000
              </div>
            </div>

            {/* AI Implementation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Implementation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                End-to-end implementation of AI solutions with proven methodologies and best practices.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom AI model development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Data pipeline and infrastructure setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Testing, validation, and deployment</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Duration:</strong> 8-24 weeks | <strong>Investment:</strong> $100,000 - $500,000
              </div>
            </div>

            {/* AI Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Optimization</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Enhance existing AI systems for better performance, efficiency, and business impact.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Performance analysis and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Model retraining and fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scalability improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cost optimization and resource management</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Duration:</strong> 4-12 weeks | <strong>Investment:</strong> $50,000 - $200,000
              </div>
            </div>

            {/* AI Training & Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">AI Training & Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Empower your team with AI knowledge and provide ongoing support for sustained success.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Executive AI education and workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Technical team training programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 AI system monitoring and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Continuous improvement and updates</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Duration:</strong> Ongoing | <strong>Investment:</strong> $10,000 - $50,000/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have deep experience across multiple industries, delivering tailored AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">Medical diagnosis, drug discovery, patient care optimization</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-sm text-gray-600">Fraud detection, algorithmic trading, risk management</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-600">Predictive maintenance, quality control, supply chain optimization</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
              <p className="text-sm text-gray-600">Personalization, demand forecasting, inventory management</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transportation</h3>
              <p className="text-sm text-gray-600">Autonomous vehicles, route optimization, fleet management</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-sm text-gray-600">Personalized learning, student assessment, content generation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600">Environmental monitoring, energy optimization, green tech</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-600">Threat detection, security automation, risk assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI consulting that ensures successful outcomes
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
                <p className="text-gray-700 mb-4">
                  We begin with a comprehensive analysis of your current state, business objectives, 
                  and AI readiness. This includes stakeholder interviews, data assessment, and 
                  technology evaluation.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-800">
                    <strong>Deliverables:</strong> AI readiness report, gap analysis, strategic recommendations
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Strategy & Planning</h3>
                <p className="text-gray-700 mb-4">
                  Based on our assessment, we develop a comprehensive AI strategy with clear 
                  objectives, timelines, and success metrics. This includes technology selection, 
                  resource planning, and risk mitigation strategies.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-800">
                    <strong>Deliverables:</strong> AI strategy document, implementation roadmap, ROI projections
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-700 mb-4">
                  Our expert team implements the AI solution using agile methodologies, ensuring 
                  quality, scalability, and alignment with business requirements. We provide 
                  regular updates and maintain close collaboration throughout the process.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-800">
                    <strong>Deliverables:</strong> Working AI solution, documentation, training materials
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Optimization & Support</h3>
                <p className="text-gray-700 mb-4">
                  We monitor performance, optimize the system, and provide ongoing support to 
                  ensure continued success. This includes performance tuning, feature enhancements, 
                  and team training.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-sm text-orange-800">
                    <strong>Deliverables:</strong> Performance reports, optimization recommendations, ongoing support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI consulting services have delivered measurable results across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">AI Projects</div>
              <div className="text-sm text-gray-600">Successfully completed across industries</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Based on post-project surveys</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Average ROI</div>
              <div className="text-sm text-gray-600">Within 12 months of implementation</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Fortune 500</div>
              <div className="text-sm text-gray-600">Companies trust our expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get a free consultation with our AI experts and discover how we can help you 
            achieve your business goals with cutting-edge artificial intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}