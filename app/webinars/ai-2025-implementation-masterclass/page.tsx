import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AI2025ImplementationMasterclass() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI 2025 Implementation Masterclass: Free Live Webinar | Zion Tech Group"
        description="Join our free live webinar on AI implementation strategies for 2025. Learn from experts, get practical insights, and discover how to successfully deploy AI across your organization."
        keywords="AI webinar, AI implementation, AI masterclass, AI training, AI strategy, live webinar, AI best practices"
        url="/webinars/ai-2025-implementation-masterclass"
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/webinars" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Webinars
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Jan 30, 2025</span>
          </div>
          
          <div className="inline-flex items-center bg-red-100 text-red-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🎥 LIVE WEBINAR</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2025 Implementation Masterclass: From Strategy to Success
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our exclusive live webinar featuring AI implementation experts who have helped 500+ 
            organizations achieve breakthrough results. Learn proven strategies, avoid common pitfalls, 
            and get actionable insights for your AI transformation journey.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>•</span>
            <span>90 minutes</span>
            <span>•</span>
            <span>Free</span>
          </div>
        </div>

        {/* Webinar Details */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Webinar Details</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">Feb 15</div>
                <div className="text-lg opacity-90">Date</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2:00 PM</div>
                <div className="text-lg opacity-90">EST</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90 min</div>
                <div className="text-lg opacity-90">Duration</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                🎯 Register for Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-lg">
                📅 Add to Calendar
              </button>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Planning</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• AI readiness assessment framework</li>
                  <li>• ROI calculation and business case development</li>
                  <li>• Stakeholder engagement strategies</li>
                  <li>• Risk assessment and mitigation</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Architecture design best practices</li>
                  <li>• Data pipeline and MLOps strategies</li>
                  <li>• Model deployment and scaling</li>
                  <li>• Security and compliance considerations</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team & Change Management</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Building effective AI teams</li>
                  <li>• Skills development and training</li>
                  <li>• Change management strategies</li>
                  <li>• Communication and governance</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Metrics & Optimization</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• KPI tracking and measurement</li>
                  <li>• Performance monitoring and optimization</li>
                  <li>• Continuous improvement processes</li>
                  <li>• Scaling and expansion strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Expert Speakers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-2xl">JS</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-blue-600 font-medium mb-2">Chief AI Strategist, Zion Tech Group</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former Google AI researcher with 15+ years experience in enterprise AI implementation. 
                    Led AI transformations for 200+ Fortune 500 companies.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>PhD Computer Science</span>
                    <span>•</span>
                    <span>200+ AI Projects</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-2xl">MC</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
                  <p className="text-green-600 font-medium mb-2">VP of AI Engineering, Zion Tech Group</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former Microsoft AI architect with expertise in scalable AI systems. 
                    Specializes in MLOps, edge AI, and quantum computing applications.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>MS Computer Science</span>
                    <span>•</span>
                    <span>150+ Deployments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agenda */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Webinar Agenda</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening & AI Landscape 2025 (15 min)</h3>
                  <p className="text-gray-600">Current state of AI, emerging trends, and market opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Planning Framework (20 min)</h3>
                  <p className="text-gray-600">AI readiness assessment, ROI calculation, and business case development</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Implementation (25 min)</h3>
                  <p className="text-gray-600">Architecture design, data strategies, and deployment best practices</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories & Q&A (20 min)</h3>
                  <p className="text-gray-600">Real-world case studies and interactive Q&A session</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Steps & Resources (10 min)</h3>
                  <p className="text-gray-600">Implementation roadmap and additional resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories from Previous Attendees</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-sm text-gray-600 mb-3">ROI Achieved</div>
              <p className="text-gray-600 text-sm mb-4">
                "The strategies from this webinar helped us achieve 340% ROI on our AI implementation in just 8 months."
              </p>
              <div className="text-xs text-gray-500">- Fortune 500 Manufacturing</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-sm text-gray-600 mb-3">Faster Implementation</div>
              <p className="text-gray-600 text-sm mb-4">
                "We reduced our AI implementation time by 60% using the frameworks shared in this masterclass."
              </p>
              <div className="text-xs text-gray-500">- Healthcare System</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">$2.5M</div>
              <div className="text-sm text-gray-600 mb-3">Cost Savings</div>
              <p className="text-gray-600 text-sm mb-4">
                "The insights from this webinar helped us save $2.5M in implementation costs and avoid common pitfalls."
              </p>
              <div className="text-xs text-gray-500">- Technology Company</div>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization with AI?</h3>
          <p className="text-xl opacity-90 mb-6">
            Join 1,000+ AI professionals who have already registered for this exclusive masterclass. 
            Limited seats available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              🎯 Register for Free
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Schedule 1-on-1 Consultation
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Free registration • No credit card required • Instant confirmation
          </p>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">90-minute live masterclass</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">Q&A session with experts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">Recording access for 30 days</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">Implementation templates</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">ROI calculator tool</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">AI readiness assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">Exclusive resource library</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-gray-700">Follow-up consultation offer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Webinars */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Webinars</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/webinars/ai-cybersecurity-2025" className="group">
              <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Cybersecurity Masterclass 2025
                </h4>
                <p className="text-gray-600 mb-4">
                  Learn how to secure your AI systems and protect against emerging threats.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Feb 22, 2025</span>
                  <span className="mx-2">•</span>
                  <span>60 min</span>
                </div>
              </article>
            </Link>
            
            <Link href="/webinars/edge-ai-deployment-2025" className="group">
              <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Edge AI Deployment Strategies
                </h4>
                <p className="text-gray-600 mb-4">
                  Master edge AI deployment for real-time intelligence and performance.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Mar 1, 2025</span>
                  <span className="mx-2">•</span>
                  <span>75 min</span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}