import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AI2025ImplementationMasterclass() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI 2025 Implementation Masterclass: Free Live Training | Zion Tech Group"
        description="Join our free AI 2025 Implementation Masterclass. Learn proven strategies, frameworks, and best practices for successful AI deployment from industry experts."
        keywords="AI masterclass, AI training, AI implementation, AI webinar, AI education, AI best practices, AI strategy"
        url="/webinars/ai-2025-implementation-masterclass"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/webinars" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Webinars
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Feb 15, 2025</span>
            <span className="text-gray-400">•</span>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              Live Training
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI 2025 Implementation Masterclass
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our exclusive live masterclass and learn the proven strategies, frameworks, and best practices 
            for successful AI implementation from industry experts. Free registration for limited seats.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>•</span>
            <span>2 hours</span>
            <span>•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">🎓 Free</span>
          </div>
        </div>

        {/* Event Details Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Live Masterclass Details</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">📅</div>
                <div className="text-sm opacity-90">Date</div>
                <div className="font-semibold">Feb 15, 2025</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">⏰</div>
                <div className="text-sm opacity-90">Time</div>
                <div className="font-semibold">2:00 PM EST</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🎯</div>
                <div className="text-sm opacity-90">Duration</div>
                <div className="font-semibold">2 Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">👥</div>
                <div className="text-sm opacity-90">Seats</div>
                <div className="font-semibold">Limited</div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Register for Free</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Secure your spot in this exclusive masterclass. Limited seats available. 
              Registration includes access to recording and bonus resources.
            </p>
            
            <form className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                  <option>Select your job title</option>
                  <option>CEO/Founder</option>
                  <option>CTO/Technical Director</option>
                  <option>Data Scientist</option>
                  <option>AI Engineer</option>
                  <option>Project Manager</option>
                  <option>Consultant</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">What's your biggest AI implementation challenge?</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Tell us about your current AI challenges..."
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to receive updates about this masterclass and related AI content from Zion Tech Group.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
              >
                Register for Free Masterclass
              </button>
            </form>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Strategy & Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• How to develop a comprehensive AI strategy</li>
                  <li>• Use case identification and prioritization</li>
                  <li>• ROI calculation and business case development</li>
                  <li>• Risk assessment and mitigation strategies</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI architecture design and best practices</li>
                  <li>• Data strategy and infrastructure requirements</li>
                  <li>• Model development and deployment workflows</li>
                  <li>• Integration with existing systems</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team & Organization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Building effective AI teams</li>
                  <li>• Skills development and training programs</li>
                  <li>• Change management and adoption strategies</li>
                  <li>• Governance and oversight frameworks</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data & Infrastructure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data collection and preparation strategies</li>
                  <li>• Data quality and governance best practices</li>
                  <li>• Cloud vs. on-premises infrastructure decisions</li>
                  <li>• Security and compliance considerations</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scaling & Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scaling AI solutions across the organization</li>
                  <li>• Performance optimization techniques</li>
                  <li>• Continuous learning and improvement</li>
                  <li>• Innovation and future-proofing strategies</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethics & Governance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Responsible AI implementation</li>
                  <li>• Ethical frameworks and guidelines</li>
                  <li>• Compliance and regulatory requirements</li>
                  <li>• Monitoring and accountability measures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Masterclass Agenda</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening & AI Landscape Overview (15 min)</h3>
                  <p className="text-gray-600">Current state of AI, key trends, and opportunities for 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Strategy Development (25 min)</h3>
                  <p className="text-gray-600">How to create a comprehensive AI strategy that aligns with business objectives</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Implementation Deep Dive (30 min)</h3>
                  <p className="text-gray-600">Architecture, data strategy, model development, and deployment best practices</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-World Case Studies (25 min)</h3>
                  <p className="text-gray-600">Detailed analysis of successful AI implementations across different industries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Q&A & Live Discussion (15 min)</h3>
                  <p className="text-gray-600">Interactive session to address your specific questions and challenges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Your Instructors</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ZT
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Chen</h3>
                  <p className="text-blue-600 font-medium mb-3">Chief AI Officer, Zion Tech Group</p>
                  <p className="text-gray-600 mb-4">
                    Dr. Chen has 15+ years of experience in AI implementation, having led digital transformations 
                    at Fortune 500 companies. She holds a PhD in Machine Learning from Stanford and has published 
                    over 50 research papers on AI applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">AI Strategy</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Machine Learning</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Digital Transformation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ZT
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
                  <p className="text-green-600 font-medium mb-3">Senior AI Solutions Architect</p>
                  <p className="text-gray-600 mb-4">
                    Michael specializes in AI infrastructure and deployment, having architected AI solutions 
                    for over 100 organizations. He's an expert in cloud AI platforms, MLOps, and scalable 
                    AI system design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">AI Infrastructure</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">MLOps</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Cloud AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bonus Resources (Free with Registration)</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Masterclass recording (lifetime access)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>AI Implementation Master Guide (200+ pages)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>AI Implementation Checklist (150+ items)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>ROI Calculator Template</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Project Planning Templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Exclusive Slack community access</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Value Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Masterclass Recording</span>
                    <span className="font-semibold text-gray-900">$497</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">AI Implementation Guide</span>
                    <span className="font-semibold text-gray-900">$297</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Templates & Checklists</span>
                    <span className="font-semibold text-gray-900">$197</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Community Access</span>
                    <span className="font-semibold text-gray-900">$97</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total Value</span>
                      <span className="text-lg font-bold text-green-600">$1,088</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-red-600">Your Price</span>
                      <span className="text-2xl font-bold text-red-600">FREE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Past Attendees Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Davis</h4>
                  <p className="text-sm text-gray-600">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This masterclass completely transformed our approach to AI implementation. The frameworks 
                and strategies we learned helped us achieve 300% ROI on our AI projects. Highly recommended!"
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Martinez</h4>
                  <p className="text-sm text-gray-600">Data Science Director, InnovateAI</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The practical insights and real-world case studies were invaluable. We've successfully 
                implemented 5 AI projects using the methodologies from this masterclass."
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Miss This Opportunity</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of AI professionals who have already transformed their organizations 
                using our proven methodologies. Limited seats available.
              </p>
              
              <div className="max-w-md mx-auto">
                <button className="w-full bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Register Now - It's Free
                </button>
                <p className="text-sm opacity-75 mt-4">
                  Registration closes 24 hours before the event
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is this masterclass really free?</h3>
              <p className="text-gray-600">
                Yes, this masterclass is completely free. We believe in democratizing AI knowledge and helping 
                organizations succeed with AI implementation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I can't attend live?</h3>
              <p className="text-gray-600">
                No problem! All registrants will receive access to the full recording and all bonus resources, 
                so you can watch at your convenience.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Who should attend this masterclass?</h3>
              <p className="text-gray-600">
                This masterclass is designed for business leaders, technical teams, project managers, and 
                anyone involved in AI implementation projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Will I get the bonus resources immediately?</h3>
              <p className="text-gray-600">
                Yes! You'll receive access to all bonus resources immediately after registration, 
                including the AI Implementation Master Guide and templates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}