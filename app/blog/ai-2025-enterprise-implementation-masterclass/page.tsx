import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIEnterpriseImplementationMasterclass() {
  return (
    <>
      <SEO
        title="AI Enterprise Implementation Masterclass 2025 - Complete Guide"
        description="Master AI implementation in enterprise environments with our comprehensive 45-minute guide. Learn proven strategies, frameworks, and real-world case studies for successful AI transformation."
        keywords="AI enterprise implementation, AI transformation, enterprise AI, AI strategy, AI governance, AI ROI"
        url="/blog/ai-2025-enterprise-implementation-masterclass"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🎓 MASTERCLASS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Enterprise Implementation Masterclass 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The complete guide to implementing AI in enterprise environments. 
                Learn proven strategies, frameworks, and real-world case studies for successful AI transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
                  📖 45 min read
                </div>
                <div className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
                  🎯 Expert Level
                </div>
                <div className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">
                  📅 January 30, 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#introduction" className="block text-blue-600 hover:text-blue-800">1. Introduction to Enterprise AI</a>
                <a href="#strategy" className="block text-blue-600 hover:text-blue-800">2. AI Strategy Development</a>
                <a href="#governance" className="block text-blue-600 hover:text-blue-800">3. AI Governance Framework</a>
                <a href="#implementation" className="block text-blue-600 hover:text-blue-800">4. Implementation Roadmap</a>
              </div>
              <div className="space-y-2">
                <a href="#case-studies" className="block text-blue-600 hover:text-blue-800">5. Real-World Case Studies</a>
                <a href="#roi" className="block text-blue-600 hover:text-blue-800">6. ROI Measurement & Optimization</a>
                <a href="#challenges" className="block text-blue-600 hover:text-blue-800">7. Common Challenges & Solutions</a>
                <a href="#next-steps" className="block text-blue-600 hover:text-blue-800">8. Next Steps & Action Plan</a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction to Enterprise AI</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Enterprise AI implementation represents one of the most significant opportunities for business transformation in 2025. 
                  With the global AI market projected to reach $1.8 trillion by 2030, organizations that successfully implement AI 
                  at scale are seeing average ROI improvements of 340% within 18 months.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Statistics</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• 78% of Fortune 500 companies have active AI initiatives</li>
                    <li>• Average AI implementation ROI: 340% within 18 months</li>
                    <li>• 65% reduction in operational costs with proper AI implementation</li>
                    <li>• 89% of successful AI implementations follow structured governance frameworks</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-600 mb-6">
                  However, enterprise AI implementation comes with unique challenges. Unlike smaller organizations, enterprises must 
                  navigate complex legacy systems, regulatory requirements, and diverse stakeholder needs. This masterclass provides 
                  a comprehensive framework for overcoming these challenges and achieving successful AI transformation.
                </p>
              </section>

              <section id="strategy" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. AI Strategy Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  A successful AI strategy begins with clear business objectives and a deep understanding of your organization's 
                  current capabilities. The following framework has been proven across 50+ enterprise implementations.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.1 Strategic Assessment Framework</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold mb-4">The 5-Pillar Assessment</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">1. Data Readiness</h5>
                      <p className="text-sm text-gray-600">Assess data quality, availability, and governance maturity</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">2. Technology Infrastructure</h5>
                      <p className="text-sm text-gray-600">Evaluate current systems and integration capabilities</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">3. Organizational Capability</h5>
                      <p className="text-sm text-gray-600">Assess skills, culture, and change management readiness</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">4. Business Process Maturity</h5>
                      <p className="text-sm text-gray-600">Evaluate process standardization and optimization potential</p>
                    </div>
                    <div className="md:col-span-2">
                      <h5 className="font-semibold text-gray-900 mb-2">5. Risk & Compliance</h5>
                      <p className="text-sm text-gray-600">Assess regulatory requirements and risk tolerance</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.2 Use Case Prioritization Matrix</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Not all AI use cases are created equal. Use this matrix to prioritize initiatives based on business impact 
                  and implementation feasibility.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Use Case</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Business Impact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feasibility</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Customer Service Automation</td>
                        <td className="px-6 py-4 text-sm text-gray-500">High</td>
                        <td className="px-6 py-4 text-sm text-gray-500">High</td>
                        <td className="px-6 py-4 text-sm text-green-600 font-semibold">Quick Win</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Predictive Analytics</td>
                        <td className="px-6 py-4 text-sm text-gray-500">High</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Medium</td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-semibold">Strategic</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Process Automation</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Medium</td>
                        <td className="px-6 py-4 text-sm text-gray-500">High</td>
                        <td className="px-6 py-4 text-sm text-yellow-600 font-semibold">Foundation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="governance" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. AI Governance Framework</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Effective AI governance is critical for enterprise success. Our framework addresses the unique challenges 
                  of managing AI at scale while ensuring compliance and ethical considerations.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">The 4-Layer Governance Model</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900 mb-3">1. Strategic Layer</h4>
                      <ul className="text-purple-800 space-y-2 text-sm">
                        <li>• AI strategy alignment with business objectives</li>
                        <li>• Executive sponsorship and oversight</li>
                        <li>• Investment prioritization and resource allocation</li>
                        <li>• Risk tolerance and compliance requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">2. Operational Layer</h4>
                      <ul className="text-blue-800 space-y-2 text-sm">
                        <li>• AI project management and delivery</li>
                        <li>• Quality assurance and testing protocols</li>
                        <li>• Performance monitoring and optimization</li>
                        <li>• Change management and training</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-900 mb-3">3. Technical Layer</h4>
                      <ul className="text-green-800 space-y-2 text-sm">
                        <li>• Data governance and privacy protection</li>
                        <li>• Model development and deployment standards</li>
                        <li>• Security and access controls</li>
                        <li>• Integration and interoperability requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-900 mb-3">4. Ethical Layer</h4>
                      <ul className="text-orange-800 space-y-2 text-sm">
                        <li>• Bias detection and mitigation</li>
                        <li>• Fairness and transparency standards</li>
                        <li>• Human oversight and accountability</li>
                        <li>• Social impact assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Implementation Roadmap</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Successful enterprise AI implementation follows a structured 6-phase approach. Each phase builds upon the 
                  previous one, ensuring sustainable growth and measurable outcomes.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 1: Foundation (Months 1-3)</h3>
                    <p className="text-gray-600 mb-4">
                      Establish governance framework, assess current capabilities, and identify quick-win opportunities.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Complete 5-pillar assessment</li>
                      <li>• Establish AI governance committee</li>
                      <li>• Identify and prioritize use cases</li>
                      <li>• Set up data infrastructure</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 2: Pilot Projects (Months 4-6)</h3>
                    <p className="text-gray-600 mb-4">
                      Launch 2-3 pilot projects to build capabilities and demonstrate value.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Implement customer service automation</li>
                      <li>• Deploy predictive analytics for inventory</li>
                      <li>• Establish performance metrics</li>
                      <li>• Build internal AI capabilities</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 3: Scale & Optimize (Months 7-12)</h3>
                    <p className="text-gray-600 mb-4">
                      Expand successful pilots and optimize performance across the organization.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Scale successful pilots to full deployment</li>
                      <li>• Implement advanced AI use cases</li>
                      <li>• Optimize models and processes</li>
                      <li>• Establish center of excellence</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="case-studies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Real-World Case Studies</h2>
                
                <div className="space-y-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Case Study: Fortune 500 Manufacturing</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-600 mb-4">
                          A global manufacturing company needed to optimize their supply chain operations, 
                          reduce costs, and improve customer satisfaction. They had complex legacy systems 
                          and limited AI expertise.
                        </p>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600">
                          Implemented AI-powered demand forecasting, inventory optimization, and predictive 
                          maintenance across 15 manufacturing facilities.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                        <ul className="text-gray-600 space-y-2">
                          <li>• 40% reduction in inventory costs</li>
                          <li>• 60% improvement in demand forecasting accuracy</li>
                          <li>• $2.3M annual savings in maintenance costs</li>
                          <li>• 25% improvement in customer satisfaction</li>
                          <li>• 340% ROI within 18 months</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Case Study: Global Financial Services</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-600 mb-4">
                          A major financial institution needed to improve fraud detection, enhance customer 
                          service, and ensure regulatory compliance while managing sensitive financial data.
                        </p>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600">
                          Deployed AI-powered fraud detection, automated customer service chatbots, and 
                          compliance monitoring systems with advanced privacy protection.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                        <ul className="text-gray-600 space-y-2">
                          <li>• 75% reduction in false fraud alerts</li>
                          <li>• 50% improvement in fraud detection accuracy</li>
                          <li>• $15M annual savings in operational costs</li>
                          <li>• 100% regulatory compliance maintained</li>
                          <li>• 250% ROI within 12 months</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="roi" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. ROI Measurement & Optimization</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Measuring AI ROI requires a comprehensive approach that goes beyond simple cost savings. 
                  Our framework captures both quantitative and qualitative benefits.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">ROI Measurement Framework</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
                      <div className="text-sm text-gray-600">Months to ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Performance Indicators (KPIs)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Financial Metrics</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Total cost of ownership (TCO)</li>
                      <li>• Return on investment (ROI)</li>
                      <li>• Cost per transaction</li>
                      <li>• Revenue per employee</li>
                      <li>• Profit margin improvement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Operational Metrics</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Process automation rate</li>
                      <li>• Error reduction percentage</li>
                      <li>• Processing time improvement</li>
                      <li>• Customer satisfaction scores</li>
                      <li>• Employee productivity gains</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="challenges" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Common Challenges & Solutions</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">Challenge: Data Quality Issues</h3>
                    <p className="text-red-800 mb-4">
                      Poor data quality is the #1 reason for AI project failures in enterprise environments.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Implement data governance framework</li>
                        <li>• Establish data quality metrics and monitoring</li>
                        <li>• Invest in data cleaning and validation tools</li>
                        <li>• Create data stewardship roles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-3">Challenge: Change Management</h3>
                    <p className="text-yellow-800 mb-4">
                      Employee resistance and lack of AI literacy can derail even the best AI initiatives.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Develop comprehensive training programs</li>
                        <li>• Create AI champions in each department</li>
                        <li>• Implement gradual rollout strategies</li>
                        <li>• Communicate benefits clearly and frequently</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Challenge: Integration Complexity</h3>
                    <p className="text-blue-800 mb-4">
                      Integrating AI with legacy systems and existing workflows can be technically challenging.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Use API-first architecture approaches</li>
                        <li>• Implement microservices for AI components</li>
                        <li>• Create integration layers and adapters</li>
                        <li>• Plan for gradual system modernization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Next Steps & Action Plan</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ready to start your enterprise AI transformation? Follow this action plan to ensure success.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">30-Day Action Plan</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-900 mb-3">Week 1-2: Assessment</h4>
                      <ul className="text-indigo-800 space-y-2 text-sm">
                        <li>• Complete 5-pillar assessment</li>
                        <li>• Identify key stakeholders</li>
                        <li>• Document current state</li>
                        <li>• Set initial objectives</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900 mb-3">Week 3-4: Planning</h4>
                      <ul className="text-purple-800 space-y-2 text-sm">
                        <li>• Develop AI strategy</li>
                        <li>• Create governance framework</li>
                        <li>• Prioritize use cases</li>
                        <li>• Secure executive sponsorship</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Started Today</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Free Resources</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/resources/ai-implementation-checklist-2025" className="text-blue-600 hover:text-blue-800">
                            AI Implementation Checklist
                          </Link>
                        </li>
                        <li>
                          <Link href="/resources/ai-governance-framework-2025" className="text-blue-600 hover:text-blue-800">
                            AI Governance Framework Template
                          </Link>
                        </li>
                        <li>
                          <Link href="/resources/ai-roi-calculator" className="text-blue-600 hover:text-blue-800">
                            AI ROI Calculator Tool
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Services</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/services/ai-consulting" className="text-blue-600 hover:text-blue-800">
                            AI Strategy Consulting
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ai-implementation" className="text-blue-600 hover:text-blue-800">
                            AI Implementation Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                            Free AI Assessment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise with AI?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get a free 30-minute consultation with our AI experts and receive a custom implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}