import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function WebinarsPage() {
  const webinars = [
    {
      id: 'ai-implementation-masterclass-2025',
      title: 'AI Implementation Masterclass 2025: Live Expert Training for Enterprise AI Success',
      description: 'Join our exclusive 4-hour live masterclass featuring industry experts who have successfully implemented AI in Fortune 500 companies.',
      date: 'February 15, 2025',
      duration: '4 Hours',
      format: 'Live Online',
      price: '$297',
      originalPrice: '$497',
      featured: true,
      image: '/api/placeholder/600/400',
      instructor: 'Sarah Chen, Michael Rodriguez, Lisa Thompson',
      capacity: '100 participants',
      category: 'Masterclass Series'
    },
    {
      id: 'ai-automation-workshop-2025',
      title: 'AI Automation Workshop: Hands-On Implementation Guide',
      description: 'Learn how to implement AI automation in your organization with hands-on exercises and real-world case studies.',
      date: 'March 8, 2025',
      duration: '3 Hours',
      format: 'Live Online',
      price: '$197',
      originalPrice: '$297',
      featured: true,
      image: '/api/placeholder/600/400',
      instructor: 'Michael Rodriguez',
      capacity: '75 participants',
      category: 'Workshop Series'
    },
    {
      id: 'ai-ethics-governance-masterclass',
      title: 'AI Ethics & Governance: Building Responsible AI Systems',
      description: 'Learn how to implement responsible AI practices and governance frameworks in your organization.',
      date: 'March 22, 2025',
      duration: '2.5 Hours',
      format: 'Live Online',
      price: '$147',
      originalPrice: '$197',
      featured: false,
      image: '/api/placeholder/600/400',
      instructor: 'Dr. Sarah Chen',
      capacity: '50 participants',
      category: 'Specialized Training'
    },
    {
      id: 'ai-data-strategy-masterclass',
      title: 'AI Data Strategy Masterclass: Foundation for AI Success',
      description: 'Master data strategy and infrastructure requirements for successful AI implementation.',
      date: 'April 5, 2025',
      duration: '3 Hours',
      format: 'Live Online',
      price: '$197',
      originalPrice: '$297',
      featured: false,
      image: '/api/placeholder/600/400',
      instructor: 'Lisa Thompson',
      capacity: '60 participants',
      category: 'Technical Training'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Webinars & Masterclasses 2025: Expert-Led Training for Enterprise AI Success"
        description="Join our exclusive AI webinars and masterclasses led by industry experts. Learn proven strategies, implementation techniques, and best practices for successful AI transformation."
        keywords="AI webinars, AI masterclass, AI training, enterprise AI, AI education, AI implementation, AI workshops"
        url="/webinars"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎓 AI Webinars & Masterclasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from industry experts who have successfully implemented AI in Fortune 500 companies. 
            Get hands-on experience, proven strategies, and practical insights to accelerate your AI transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              🚀 Get Expert Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📚 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Featured This Month</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {webinars.filter(webinar => webinar.featured).map((webinar) => (
              <Link key={webinar.id} href={`/webinars/${webinar.id}`} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{webinar.price}</div>
                      <div className="text-sm text-gray-500 line-through">{webinar.originalPrice}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-600">Date</div>
                      <div className="font-semibold text-gray-900">{webinar.date}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold text-gray-900">{webinar.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Format</div>
                      <div className="font-semibold text-gray-900">{webinar.format}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Capacity</div>
                      <div className="font-semibold text-gray-900">{webinar.capacity}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Instructors: <span className="font-medium text-gray-900">{webinar.instructor}</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Webinars */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📅 All Webinars</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Masterclass</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Workshop</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">Technical</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <Link key={webinar.id} href={`/webinars/${webinar.id}`} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {webinar.category}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{webinar.price}</div>
                      <div className="text-xs text-gray-500 line-through">{webinar.originalPrice}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-900">{webinar.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{webinar.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Instructor:</span>
                      <span className="font-medium text-gray-900">{webinar.instructor}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{webinar.capacity}</span>
                    <span className="text-blue-600 font-medium group-hover:underline">Register →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Our Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🎯 Why Choose Our Webinars?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-700 text-sm">
                Learn from industry experts with proven track records in Fortune 500 AI implementations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Focus</h3>
              <p className="text-gray-700 text-sm">
                Hands-on exercises and real-world case studies you can apply immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Resources</h3>
              <p className="text-gray-700 text-sm">
                Get templates, checklists, and frameworks to accelerate your implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-700 text-sm">
                Access to community and follow-up support to ensure your success.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💬 What Our Participants Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Johnson</h4>
                  <p className="text-sm text-gray-600">CTO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The masterclass was incredibly valuable. We implemented the strategies learned and achieved 250% ROI in just 8 months."
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Maria Garcia</h4>
                  <p className="text-sm text-gray-600">AI Director, GlobalCorp</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The hands-on exercises were fantastic. We used the implementation templates to successfully deploy AI across 5 departments."
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">D</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Kim</h4>
                  <p className="text-sm text-gray-600">VP Digital Transformation</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The change management section was exactly what we needed. We successfully transitioned 800+ employees to AI workflows."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Knowledge?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of professionals who have accelerated their AI journey with our expert-led training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/webinars/ai-implementation-masterclass-2025"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              🎓 Register for Masterclass
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              🚀 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}