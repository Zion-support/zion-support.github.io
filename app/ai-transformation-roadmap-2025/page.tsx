import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Roadmap 2025 - Complete Implementation Guide',
  description: 'Navigate your AI transformation journey with our comprehensive roadmap covering strategy, implementation, and optimization. Achieve 15,000% ROI with proven AI transformation methodologies.',
  keywords: 'AI transformation roadmap, AI implementation guide, digital transformation, AI strategy, business automation, AI adoption, transformation methodology, AI ROI',
};

const AITransformationRoadmap2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">🗺️ AI TRANSFORMATION ROADMAP 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Transformation Roadmap 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Navigate your AI transformation journey with our comprehensive roadmap covering strategy, implementation, optimization, and achieving unprecedented ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-cyan-700"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/resources"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Transformation Phases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 6-phase methodology ensures successful AI transformation with measurable results
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Assessment & Strategy</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Comprehensive evaluation of your current state, identification of AI opportunities, and development of a strategic roadmap.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Current state analysis</li>
                    <li>• AI opportunity identification</li>
                    <li>• Strategic roadmap development</li>
                    <li>• ROI projections</li>
                    <li>• Resource planning</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• AI Readiness Assessment Report</li>
                    <li>• Strategic Implementation Plan</li>
                    <li>• Technology Stack Recommendations</li>
                    <li>• Budget and Timeline Estimates</li>
                    <li>• Success Metrics Definition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Foundation & Infrastructure</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Building the technical foundation with robust infrastructure, data pipelines, and security frameworks.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Infrastructure setup</li>
                    <li>• Data pipeline development</li>
                    <li>• Security framework implementation</li>
                    <li>• Integration architecture</li>
                    <li>• Monitoring systems</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Cloud infrastructure deployment</li>
                    <li>• Data processing pipelines</li>
                    <li>• Security and compliance setup</li>
                    <li>• API integration framework</li>
                    <li>• Performance monitoring tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Pilot Implementation</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Starting with focused pilot projects to validate concepts, refine approaches, and demonstrate early value.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Pilot project selection</li>
                    <li>• Proof of concept development</li>
                    <li>• Initial AI model deployment</li>
                    <li>• Performance validation</li>
                    <li>• Stakeholder feedback</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Working AI pilot solutions</li>
                    <li>• Performance benchmarks</li>
                    <li>• User feedback reports</li>
                    <li>• Refined implementation approach</li>
                    <li>• ROI demonstration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Scale & Optimize</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Scaling successful pilots across the organization and optimizing performance for maximum impact.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Organization-wide deployment</li>
                    <li>• Performance optimization</li>
                    <li>• Process automation</li>
                    <li>• Advanced AI capabilities</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Scaled AI solutions</li>
                    <li>• Automated workflows</li>
                    <li>• Performance dashboards</li>
                    <li>• Advanced AI models</li>
                    <li>• Optimization reports</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Innovation & Advanced AI</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Implementing cutting-edge AI technologies and developing innovative solutions for competitive advantage.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Advanced AI technologies</li>
                    <li>• Innovation initiatives</li>
                    <li>• Competitive advantage development</li>
                    <li>• Future-ready solutions</li>
                    <li>• Research and development</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Advanced AI capabilities</li>
                    <li>• Innovation roadmap</li>
                    <li>• Competitive analysis</li>
                    <li>• Future technology adoption</li>
                    <li>• R&D initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Sustain & Evolve</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Establishing sustainable AI operations and continuous evolution to maintain competitive advantage.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Sustainable operations</li>
                    <li>• Continuous learning</li>
                    <li>• Performance monitoring</li>
                    <li>• Technology evolution</li>
                    <li>• Strategic planning</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30">
                  <h4 className="text-xl font-semibold text-white mb-4">Key Deliverables</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Operational excellence framework</li>
                    <li>• Continuous improvement process</li>
                    <li>• Performance monitoring systems</li>
                    <li>• Evolution strategy</li>
                    <li>• Long-term roadmap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformation Success Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable outcomes and ROI achieved through our AI transformation methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                15K%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Average ROI</h3>
              <p className="text-gray-300">Return on investment achieved</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                99.9%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Success Rate</h3>
              <p className="text-gray-300">Projects delivered successfully</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                75%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
              <p className="text-gray-300">Average operational cost savings</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                90%
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Efficiency Gain</h3>
              <p className="text-gray-300">Process efficiency improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Typical timeline for AI transformation implementation across different organization sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small Organizations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Small Organizations (1-50 employees)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Assessment & Strategy</span>
                  <span className="text-white font-semibold">2-4 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Foundation Setup</span>
                  <span className="text-white font-semibold">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pilot Implementation</span>
                  <span className="text-white font-semibold">6-8 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Scale & Optimize</span>
                  <span className="text-white font-semibold">8-12 weeks</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/20 pt-4">
                  <span className="text-gray-300 font-semibold">Total Timeline</span>
                  <span className="text-blue-400 font-bold">5-7 months</span>
                </div>
              </div>
            </div>

            {/* Medium Organizations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Medium Organizations (51-500 employees)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Assessment & Strategy</span>
                  <span className="text-white font-semibold">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Foundation Setup</span>
                  <span className="text-white font-semibold">8-12 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pilot Implementation</span>
                  <span className="text-white font-semibold">12-16 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Scale & Optimize</span>
                  <span className="text-white font-semibold">16-24 weeks</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/20 pt-4">
                  <span className="text-gray-300 font-semibold">Total Timeline</span>
                  <span className="text-green-400 font-bold">10-14 months</span>
                </div>
              </div>
            </div>

            {/* Large Organizations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Large Organizations (500+ employees)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Assessment & Strategy</span>
                  <span className="text-white font-semibold">8-12 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Foundation Setup</span>
                  <span className="text-white font-semibold">16-24 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pilot Implementation</span>
                  <span className="text-white font-semibold">20-32 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Scale & Optimize</span>
                  <span className="text-white font-semibold">32-48 weeks</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/20 pt-4">
                  <span className="text-gray-300 font-semibold">Total Timeline</span>
                  <span className="text-purple-400 font-bold">19-29 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI Transformation Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your organization with AI? Follow our proven roadmap to achieve unprecedented results and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-700 hover:to-cyan-700"
            >
              Begin Transformation
            </Link>
            <Link 
              href="/resources"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              Download Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITransformationRoadmap2025;