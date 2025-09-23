import React from 'react';

import { BookOpen, Download, Star, CheckCircle, ArrowRight, Calendar, Video } from 'lucide-react';

export default function ResourcesPage() {
  const whitepapers = [
    { title: 'AI-Powered Business Transformation', description: 'How AI is revolutionizing operations.', category: 'AI & Automation', downloadCount: '2.3k', rating: 4.8, fileSize: '2.4 MB', downloadUrl: '/resources/whitepapers/ai-business-transformation.pdf' }
  ];
  const caseStudies = [
    { title: 'Cloud Costs -40%', company: 'TechCorp', industry: 'Technology', results: ['40% cost reduction', 'Improved performance'], readTime: '5 min read', url: '/resources/case-studies/techcorp-cloud-optimization' }
  ];
  const guides = [
    { title: 'Getting Started with AI', description: 'Step-by-step guide for AI adoption.', level: 'Beginner', estimatedTime: '30 min', category: 'AI & ML', url: '/resources/guides/ai-implementation-guide' }
  ];
  const webinars = [
    { title: 'The Future of AI in Business', date: 'Dec 15, 2025', time: '2:00 PM EST', speaker: 'Dr. Sarah Chen', description: 'Emerging AI trends and impact.', registrationUrl: '/webinars/future-of-ai-business' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Hub
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access whitepapers, case studies, guides, and webinars to stay ahead of technology trends.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Whitepapers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper) => (
              <div key={paper.title} className="bg-white p-6 rounded-lg border">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">{paper.category}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />{paper.rating}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>📥 {paper.downloadCount} downloads</span>
                  <span>📁 {paper.fileSize}</span>
                </div>
                <a href={paper.downloadUrl} className="w-full inline-flex items-center justify-center bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700">
                  <Download className="w-4 h-4 mr-2" />Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white p-6 rounded-lg border">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full inline-block mb-3">{study.industry}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-cyan-700 font-medium mb-3">{study.company}</p>
                <ul className="space-y-1 mb-4">
                  {study.results.map((r) => (
                    <li key={r} className="text-gray-600 text-sm flex items-center">
                      <CheckCircle className="w-3 h-3 text-cyan-600 mr-2" />{r}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{study.readTime}</span>
                  <a href={study.url} className="text-cyan-700 hover:text-cyan-800 text-sm font-medium inline-flex items-center">
                    Read Case Study<ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practical Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white p-6 rounded-lg border">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">{guide.category}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">{guide.level}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="text-xs text-gray-500 mb-4">⏱ {guide.estimatedTime}</div>
                <a href={guide.url} className="w-full inline-flex items-center justify-center border border-cyan-600 text-cyan-700 py-2 rounded-md hover:bg-cyan-50">
                  <BookOpen className="w-4 h-4 mr-2" />Read Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webinars.map((w) => (
              <div key={w.title} className="bg-white p-6 rounded-lg border">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">Live Event</span>
                  <span className="text-gray-500 text-sm">{w.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-gray-600 mb-4">{w.description}</p>
                <div className="mb-4 text-gray-600 text-sm flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />{w.date} at {w.time}
                </div>
                <a href={w.registrationUrl} className="w-full inline-flex items-center justify-center bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700">
                  <Video className="w-4 h-4 mr-2" />Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 px-4 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-6">Subscribe to our newsletter for the latest insights and events.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg border" />
            <button className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
