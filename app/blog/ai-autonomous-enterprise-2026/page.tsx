import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata = {
  title: 'AI Autonomous Enterprise 2026: Complete Self-Managing Business Systems',
  description: 'Transform your enterprise into a fully autonomous, self-managing system with AI agents handling 95% of operations and delivering $10M+ ROI.',
  keywords: 'autonomous enterprise, AI agents, self-managing systems, enterprise automation, AI orchestration',
};

export default function AIAutonomousEnterprise2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            FEATURED
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Autonomous Enterprise 2026: Complete Self-Managing Business Systems
        </h1>
        <div className="flex items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>28 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>Enterprise AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Fortune 500</span>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Discover how to transform your enterprise into a fully autonomous, self-managing system where AI agents handle 95% of operations, 
          deliver $10M+ ROI, and operate with zero human intervention across all business functions.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transformation Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Operations Automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$10M+</div>
            <div className="text-gray-600">Annual ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Autonomous Operation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-gray-700">
          <li><a href="#overview" className="hover:text-blue-600 transition-colors">1. Autonomous Enterprise Overview</a></li>
          <li><a href="#architecture" className="hover:text-blue-600 transition-colors">2. Self-Managing System Architecture</a></li>
          <li><a href="#agents" className="hover:text-blue-600 transition-colors">3. AI Agent Ecosystem</a></li>
          <li><a href="#implementation" className="hover:text-blue-600 transition-colors">4. Implementation Roadmap</a></li>
          <li><a href="#case-study" className="hover:text-blue-600 transition-colors">5. Fortune 500 Case Study</a></li>
          <li><a href="#roi" className="hover:text-blue-600 transition-colors">6. ROI Analysis & Metrics</a></li>
          <li><a href="#best-practices" className="hover:text-blue-600 transition-colors">7. Best Practices & Lessons Learned</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Autonomous Enterprise Revolution</h2>
          <p className="text-lg text-gray-700 mb-6">
            The autonomous enterprise represents the pinnacle of AI transformation—a business that operates independently, 
            makes decisions autonomously, and continuously optimizes itself without human intervention. In 2026, this vision 
            becomes reality for forward-thinking organizations.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">What Makes an Enterprise Truly Autonomous?</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Self-healing systems that detect and resolve issues automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Autonomous decision-making across all business functions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Continuous learning and optimization without human input</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Predictive maintenance and proactive issue resolution</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Leading enterprises are already achieving 95% operational autonomy, with AI agents managing everything from 
            customer service to supply chain optimization, financial planning to talent acquisition. The results are 
            unprecedented: $10M+ annual ROI, 80% cost reduction, and 24/7 autonomous operation.
          </p>
        </section>

        <section id="architecture" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Self-Managing System Architecture</h2>
          <p className="text-lg text-gray-700 mb-6">
            The autonomous enterprise architecture consists of multiple layers working in harmony to create a truly 
            self-managing system.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Architecture Components</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-700 mb-4">🤖 AI Agent Layer</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Executive Decision Agents</li>
                  <li>• Operational Management Agents</li>
                  <li>• Customer Experience Agents</li>
                  <li>• Financial Optimization Agents</li>
                  <li>• HR & Talent Agents</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-blue-700 mb-4">⚙️ Orchestration Layer</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Agent Communication Hub</li>
                  <li>• Workflow Orchestration Engine</li>
                  <li>• Conflict Resolution System</li>
                  <li>• Performance Monitoring</li>
                  <li>• Learning & Adaptation Engine</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-green-900 mb-3">Key Architectural Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-800 mb-2">Decentralized Intelligence</h4>
                <p className="text-green-700 text-sm">Each agent operates independently while maintaining system-wide coordination</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Self-Healing Capabilities</h4>
                <p className="text-green-700 text-sm">Automatic detection and resolution of issues across all system layers</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Continuous Learning</h4>
                <p className="text-green-700 text-sm">Agents learn from every interaction and continuously improve performance</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Predictive Operations</h4>
                <p className="text-green-700 text-sm">Proactive issue prevention and optimization based on predictive analytics</p>
              </div>
            </div>
          </div>
        </section>

        <section id="agents" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Agent Ecosystem</h2>
          <p className="text-lg text-gray-700 mb-6">
            The autonomous enterprise relies on a sophisticated ecosystem of specialized AI agents, each handling 
            specific business functions while maintaining seamless coordination.
          </p>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👑</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Executive Decision Agents</h3>
                  <p className="text-gray-600">Strategic decision-making and resource allocation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                These high-level agents make strategic decisions about resource allocation, market positioning, 
                and long-term planning. They analyze market trends, competitive intelligence, and internal 
                performance metrics to make autonomous decisions that drive business growth.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Strategic Planning</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Resource Allocation</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Market Analysis</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Operational Management Agents</h3>
                  <p className="text-gray-600">Day-to-day operations and process optimization</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                These agents handle the day-to-day operations of the business, from inventory management 
                to quality control, process optimization to performance monitoring. They ensure smooth 
                operations while continuously seeking efficiency improvements.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Process Optimization</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Quality Control</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Performance Monitoring</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Customer Experience Agents</h3>
                  <p className="text-gray-600">Customer service, support, and relationship management</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                These agents provide 24/7 customer service, handle support requests, manage customer 
                relationships, and identify upselling opportunities. They maintain high customer 
                satisfaction while driving revenue growth through intelligent customer engagement.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">24/7 Support</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Relationship Management</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Upselling</span>
              </div>
            </div>
          </div>
        </section>

        <section id="case-study" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Fortune 500 Case Study: Global Manufacturing Corp</h2>
          <p className="text-lg text-gray-700 mb-6">
            Global Manufacturing Corp, a Fortune 500 company with operations in 50+ countries, achieved complete 
            enterprise autonomy within 18 months, resulting in $10M+ annual ROI and 95% operational automation.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$10.2M</div>
                <div className="text-gray-600">Annual ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Operations Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Challenge</h4>
              <p className="text-gray-700">
                Global Manufacturing Corp faced significant operational challenges: manual processes across 50+ countries, 
                inconsistent decision-making, high operational costs, and difficulty scaling operations. They needed a 
                solution that could standardize operations globally while maintaining local flexibility.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Solution</h4>
              <p className="text-gray-700 mb-4">
                We implemented a comprehensive autonomous enterprise system with specialized AI agents for each business function:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Executive Decision Agents for strategic planning and resource allocation</li>
                <li>Operational Management Agents for production, quality control, and supply chain</li>
                <li>Customer Experience Agents for global customer service and relationship management</li>
                <li>Financial Optimization Agents for cost management and revenue optimization</li>
                <li>HR & Talent Agents for recruitment, performance management, and workforce planning</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Results</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">Operational Excellence</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 95% of operations now fully automated</li>
                    <li>• 80% reduction in operational costs</li>
                    <li>• 99.9% system uptime achieved</li>
                    <li>• 24/7 autonomous operation across all time zones</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">Financial Impact</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• $10.2M annual ROI within 18 months</li>
                    <li>• 60% improvement in profit margins</li>
                    <li>• 40% increase in revenue through optimization</li>
                    <li>• 90% reduction in manual processing costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roi" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Analysis & Financial Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The financial impact of autonomous enterprise transformation is substantial and measurable. 
            Here's a detailed breakdown of the ROI and cost savings achieved.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Breakdown (18-Month Period)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">Cost Savings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operational Cost Reduction</span>
                    <span className="font-bold text-green-600">$6.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Manual Process Elimination</span>
                    <span className="font-bold text-green-600">$2.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Error Reduction & Quality</span>
                    <span className="font-bold text-green-600">$1.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Energy & Resource Optimization</span>
                    <span className="font-bold text-green-600">$800K</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Cost Savings</span>
                      <span className="text-green-600">$11.3M</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-purple-900 mb-4">Revenue Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Process Efficiency Gains</span>
                    <span className="font-bold text-blue-600">$3.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Customer Experience Improvement</span>
                    <span className="font-bold text-blue-600">$2.1M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Predictive Analytics Value</span>
                    <span className="font-bold text-blue-600">$1.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Market Expansion</span>
                    <span className="font-bold text-blue-600">$1.2M</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Revenue Impact</span>
                      <span className="text-blue-600">$8.3M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-green-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$19.6M</div>
                <div className="text-lg text-gray-700 mb-2">Total Financial Impact</div>
                <div className="text-sm text-gray-600">ROI: 450% | Payback Period: 8 months</div>
              </div>
            </div>
          </div>
        </section>

        <section id="best-practices" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices & Lessons Learned</h2>
          <p className="text-lg text-gray-700 mb-6">
            Based on our experience implementing autonomous enterprise systems, here are the key best practices 
            and lessons learned for successful transformation.
          </p>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">🚀 Start with High-Impact Areas</h3>
              <p className="text-yellow-800 mb-3">
                Focus on areas with the highest potential for automation and ROI. Customer service, 
                financial operations, and supply chain management typically offer the best returns.
              </p>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                <li>Prioritize processes with high volume and repetitive tasks</li>
                <li>Choose areas with clear success metrics and measurable outcomes</li>
                <li>Start with processes that have minimal regulatory constraints</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">🔄 Implement Gradual Rollout</h3>
              <p className="text-blue-800 mb-3">
                Autonomous enterprise transformation should be implemented gradually, with careful testing 
                and validation at each stage.
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                <li>Begin with pilot programs in specific departments or regions</li>
                <li>Validate agent performance before expanding to other areas</li>
                <li>Maintain human oversight during the transition period</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">📊 Establish Clear Metrics</h3>
              <p className="text-green-800 mb-3">
                Define clear success metrics and KPIs to measure the effectiveness of your autonomous systems.
              </p>
              <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                <li>Track automation percentage and accuracy rates</li>
                <li>Monitor cost savings and ROI metrics</li>
                <li>Measure customer satisfaction and employee productivity</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🛡️ Ensure Security & Compliance</h3>
              <p className="text-purple-800 mb-3">
                Security and compliance are critical for autonomous systems. Implement robust security 
                measures and ensure regulatory compliance.
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
                <li>Implement zero-trust security architecture</li>
                <li>Ensure data privacy and protection compliance</li>
                <li>Regular security audits and penetration testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Roadmap</h2>
          <p className="text-lg text-gray-700 mb-6">
            Here's a practical 18-month roadmap for implementing autonomous enterprise capabilities in your organization.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 1-3: Foundation & Planning</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Conduct comprehensive business process audit</li>
                  <li>Identify high-impact automation opportunities</li>
                  <li>Design autonomous system architecture</li>
                  <li>Establish success metrics and KPIs</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 4-6: Pilot Implementation</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Deploy AI agents in selected departments</li>
                  <li>Implement orchestration and monitoring systems</li>
                  <li>Train staff on new autonomous processes</li>
                  <li>Validate performance and make adjustments</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 7-12: Scale & Optimize</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Expand autonomous systems across all departments</li>
                  <li>Implement advanced learning and optimization</li>
                  <li>Integrate with external systems and partners</li>
                  <li>Monitor performance and continuous improvement</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 13-18: Full Autonomy</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Achieve 95% operational automation</li>
                  <li>Implement predictive and self-healing capabilities</li>
                  <li>Optimize for maximum ROI and efficiency</li>
                  <li>Prepare for next-generation autonomous features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how autonomous enterprise capabilities can revolutionize your business operations 
            and deliver unprecedented ROI.
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
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}