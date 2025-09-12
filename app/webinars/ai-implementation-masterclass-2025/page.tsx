import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIImplementationMasterclass2025Page() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Implementation Masterclass 2025: Live Training with AI Experts | Zion Tech Group"
        description="Join our exclusive AI Implementation Masterclass 2025. Live training session with AI experts covering proven strategies, best practices, and real-world case studies for successful AI deployment."
        keywords="AI masterclass, AI training, AI implementation training, AI webinar, AI expert training, AI best practices, AI deployment"
        url="/webinars/ai-implementation-masterclass-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🎓 LIVE MASTERCLASS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Implementation Masterclass 2025
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our exclusive live training session with AI experts. Learn proven strategies, 
            best practices, and real-world case studies for successful AI deployment.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>2 hours</span>
            <span>•</span>
            <span>Live Session</span>
            <span>•</span>
            <span>Feb 15, 2025</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Event Details</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
              <p className="text-sm opacity-90">
                February 15, 2025<br />
                2:00 PM - 4:00 PM EST
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Format</h3>
              <p className="text-sm opacity-90">
                Live Online Session<br />
                Interactive Q&A
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-semibold mb-2">Capacity</h3>
              <p className="text-sm opacity-90">
                Limited to 100 participants<br />
                First-come, first-served
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Register for Free</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Join 500+ AI professionals who have already registered. Get instant access to the session 
            and receive exclusive resources after the event.
          </p>
          
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">AI Experience Level</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Beginner (0-1 years)</option>
                <option>Intermediate (1-3 years)</option>
                <option>Advanced (3-5 years)</option>
                <option>Expert (5+ years)</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">What's your biggest AI implementation challenge?</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us about your specific challenges so we can tailor the content..."
              />
            </div>
            
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                required
                className="mt-1"
              />
              <label className="text-sm text-gray-700">
                I agree to receive communications about this event and related AI content from Zion Tech Group. 
                I can unsubscribe at any time.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors text-lg"
            >
              Register for Free Masterclass
            </button>
          </form>
        </div>

        {/* Agenda */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Masterclass Agenda</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Implementation Framework Overview (20 min)</h3>
                  <p className="text-gray-600">
                    Introduction to our proven 7-pillar AI implementation framework and how it applies to different industries.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Case Studies (30 min)</h3>
                  <p className="text-gray-600">
                    Deep dive into 3 successful AI implementations: Manufacturing automation, Healthcare AI, and Financial services transformation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Common Pitfalls and How to Avoid Them (25 min)</h3>
                  <p className="text-gray-600">
                    Learn from the most common mistakes in AI implementation and how to prevent them in your organization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Q&A Session (30 min)</h3>
                  <p className="text-gray-600">
                    Get your specific questions answered by our AI experts. Bring your challenges and get personalized advice.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Next Steps and Resources (15 min)</h3>
                  <p className="text-gray-600">
                    Learn about additional resources, tools, and services to accelerate your AI implementation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speakers */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Meet Your AI Experts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-purple-600 font-medium mb-2">Chief AI Officer, Zion Tech Group</p>
              <p className="text-gray-600 text-sm">
                Sarah has led 200+ AI implementations across Fortune 500 companies, with expertise in 
                enterprise AI strategy and transformation. Former AI Director at Microsoft.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">DJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Johnson</h3>
              <p className="text-green-600 font-medium mb-2">Senior AI Solutions Architect</p>
              <p className="text-gray-600 text-sm">
                David specializes in AI infrastructure and deployment, with 15+ years experience in 
                machine learning operations and cloud-native AI systems. Former Principal Engineer at Google.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Get */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What You'll Get</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During the Session</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Live access to 2-hour expert training session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Interactive Q&A with AI experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Real-time chat with other participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Live polls and interactive exercises</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">After the Session</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Recording of the entire session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Exclusive AI Implementation Toolkit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Access to private LinkedIn group</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Follow-up consultation offer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Previous Attendees Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "This masterclass was incredibly valuable. The real-world case studies and practical advice 
                helped us avoid common pitfalls and accelerate our AI implementation by 6 months."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">AM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Alex Martinez</div>
                  <div className="text-sm text-gray-600">CTO, TechStart Inc.</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <blockquote className="text-gray-700 italic mb-4">
                "The interactive format and expert insights made this the most valuable AI training 
                I've attended. The follow-up resources alone were worth the time investment."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">LW</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Wang</div>
                  <div className="text-sm text-gray-600">AI Director, Global Corp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Complementary Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Master Guide 2025
                </h3>
                <p className="text-gray-600 mb-3">
                  Complete 200+ page guide with templates, checklists, and best practices.
                </p>
                <div className="text-blue-600 font-medium group-hover:underline">
                  Download Free Guide →
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 mb-3">
                  150+ actionable items to ensure successful AI deployment.
                </p>
                <div className="text-blue-600 font-medium group-hover:underline">
                  Download Checklist →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master AI Implementation?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our exclusive masterclass and learn from AI experts who have successfully implemented 
            AI solutions across hundreds of organizations.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register Now
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Limited seats available. Registration closes February 14, 2025.
          </p>
        </div>
      </div>
    </div>
  );
}