import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Play, Users, Award, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 2025 Implementation Masterclass: Advanced Strategies | Zion Tech Group',
  description: 'Join our exclusive masterclass on advanced AI implementation strategies for 2025. Learn from industry experts and get hands-on experience with cutting-edge AI technologies.',
  keywords: 'AI masterclass, AI implementation, AI training, AI strategy, AI workshop, AI education',
  openGraph: {
    title: 'AI 2025 Implementation Masterclass: Advanced Strategies',
    description: 'Join our exclusive masterclass on advanced AI implementation strategies for 2025.',
    type: 'event',
    startTime: '2025-02-15T10:00:00.000Z',
    endTime: '2025-02-15T16:00:00.000Z',
    location: 'Virtual Event',
  },
};

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/webinars" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Webinars
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              February 15, 2025
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              6 hours
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Virtual Event
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI 2025 Implementation Masterclass: Advanced Strategies
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Master the art of AI implementation with our comprehensive 6-hour masterclass. Learn from 
            industry experts and get hands-on experience with the latest AI technologies and strategies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Event Overview */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Masterclass Overview</h2>
            <p className="text-xl leading-relaxed mb-6">
              This intensive masterclass is designed for C-level executives, IT directors, and AI 
              implementation leaders who want to accelerate their AI transformation journey. You'll 
              learn proven strategies, avoid common pitfalls, and gain practical insights from 
              real-world implementations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">6 Hours</div>
                <div className="text-sm">Intensive Training</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">5 Experts</div>
                <div className="text-sm">Industry Leaders</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Success Stories</div>
              </div>
            </div>
          </div>

          {/* Key Learning Objectives */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>AI strategy development and roadmap creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>ROI calculation and business case development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Change management and organizational readiness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span>Risk assessment and mitigation strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <span>AI architecture design and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <span>Data preparation and quality management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <span>Model selection and optimization techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <span>Deployment and scaling strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Applications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Financial services AI transformation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Healthcare AI implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Manufacturing AI automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Retail AI personalization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Topics</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                    <span>Generative AI and LLM implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                    <span>AI ethics and governance frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                    <span>Edge AI and real-time processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                    <span>AI security and compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Agenda */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Masterclass Agenda</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Session 1: AI Strategy & Planning (9:00 AM - 10:30 AM)</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">90 min</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Learn how to develop a comprehensive AI strategy, assess organizational readiness, 
                  and create a detailed implementation roadmap.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI strategy framework and methodology</li>
                  <li>• Business case development and ROI calculation</li>
                  <li>• Organizational change management</li>
                  <li>• Risk assessment and mitigation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Session 2: Technical Architecture & Data (10:45 AM - 12:15 PM)</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">90 min</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Deep dive into AI architecture design, data preparation, and technical implementation 
                  best practices.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI architecture patterns and design principles</li>
                  <li>• Data strategy and quality management</li>
                  <li>• Model selection and optimization</li>
                  <li>• Infrastructure and deployment considerations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Session 3: Industry Case Studies (1:15 PM - 2:45 PM)</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">90 min</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Explore real-world AI implementations across different industries, learning from 
                  successful transformations and common challenges.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Financial services AI transformation</li>
                  <li>• Healthcare AI implementation</li>
                  <li>• Manufacturing AI automation</li>
                  <li>• Retail AI personalization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Session 4: Hands-On Workshop (3:00 PM - 4:30 PM)</h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">90 min</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Get hands-on experience with AI tools and technologies through interactive workshops 
                  and practical exercises.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI model development and testing</li>
                  <li>• Data visualization and analysis</li>
                  <li>• AI deployment and monitoring</li>
                  <li>• Performance optimization techniques</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Session 5: Advanced Topics & Future Trends (4:45 PM - 6:00 PM)</h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">75 min</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Explore cutting-edge AI technologies and future trends that will shape the industry 
                  in 2025 and beyond.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Generative AI and large language models</li>
                  <li>• AI ethics and governance</li>
                  <li>• Edge AI and real-time processing</li>
                  <li>• Future trends and emerging technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Speakers */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Speakers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    JS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
                    <p className="text-gray-600">Chief AI Officer, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Former Google AI researcher with 15+ years of experience in machine learning and 
                  AI implementation. Led AI transformations at 3 Fortune 500 companies.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>PhD in Computer Science, MIT</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    MC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                    <p className="text-gray-600">VP of AI Strategy, DataFlow Inc.</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  AI strategy consultant with expertise in enterprise AI implementation. Helped 
                  over 100 companies successfully deploy AI solutions.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>MBA from Stanford, AI Certification</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dr. Alex Rodriguez</h3>
                    <p className="text-gray-600">Head of AI Research, InnovateAI</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Leading researcher in generative AI and large language models. Published 50+ 
                  papers on AI ethics and responsible AI development.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>PhD in AI Ethics, Carnegie Mellon</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    LT
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Lisa Thompson</h3>
                    <p className="text-gray-600">CTO, AI Solutions Group</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Technology executive with 20+ years in AI infrastructure and deployment. 
                  Expert in scaling AI solutions across enterprise environments.
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>MS Computer Science, Caltech</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing and Registration */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration & Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Bird Pricing</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$497</div>
                <p className="text-gray-600 mb-6">Valid until January 31, 2025</p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Full 6-hour masterclass access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>All presentation materials and resources</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Hands-on workshop participation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>30-day follow-up support</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Register Now - Early Bird
                </button>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Regular Pricing</h3>
                <div className="text-4xl font-bold mb-4">$697</div>
                <p className="text-purple-100 mb-6">Starting February 1, 2025</p>
                <ul className="space-y-3 text-purple-100 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    <span>Full 6-hour masterclass access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    <span>All presentation materials and resources</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    <span>Hands-on workshop participation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    <span>30-day follow-up support</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Previous Attendees Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "This masterclass completely transformed our approach to AI implementation. The 
                  practical insights and real-world case studies were invaluable. We've already 
                  started implementing the strategies we learned."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Davis</div>
                    <div className="text-sm text-gray-600">CTO, TechStart Inc.</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The hands-on workshop was fantastic. I came away with a clear understanding of 
                  how to implement AI in our organization. The ROI calculation framework alone 
                  was worth the price of admission."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Martinez</div>
                    <div className="text-sm text-gray-600">VP of Innovation, GlobalCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Master AI Implementation?</h2>
            <p className="text-xl mb-6">
              Join industry leaders and transform your organization with proven AI strategies. 
              Limited seats available - register today to secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center">
                Register Now - $497 Early Bird
              </button>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Contact Us for Group Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/webinars/ai-2025-revolutionary-breakthroughs"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Previous: Revolutionary Breakthroughs
              </Link>
              <Link 
                href="/webinars/ai-workforce-transformation-2025"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Next: Workforce Transformation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}