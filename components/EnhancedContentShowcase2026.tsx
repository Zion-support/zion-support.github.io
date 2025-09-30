import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Star, Users, Eye } from 'lucide-react';

export default function EnhancedContentShowcase2026() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            Premium Content Showcase
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and success stories that are transforming industries worldwide. 
            From comprehensive guides to real-world case studies, explore content that delivers extraordinary results.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article */}
          <div className="lg:col-span-1">
            <Link href="/blog/ai-business-transformation-2026-complete-guide" className="group">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200">
                <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">AI Business Transformation</h3>
                      <p className="text-blue-100">Complete 2026 Guide</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW 2026
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Complete Guide</span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      45 min read
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Business Transformation 2026: Complete Guide to Revolutionary Enterprise Change
                  </h4>
                  <p className="text-gray-600 mb-6 text-lg">
                    Master the proven 7-phase framework delivering $50M+ ROI and 500% productivity gains across Fortune 500 companies. 
                    Learn from real-world success stories and implementation strategies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$50M+</div>
                        <div className="text-xs text-gray-500">Average ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">500%</div>
                        <div className="text-xs text-gray-500">Productivity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">95%</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:scale-105">
                      Read Guide →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="lg:col-span-1">
            <Link href="/case-studies/ai-mega-transformation-success-2026" className="group">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200">
                <div className="relative h-64 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-3xl">📊</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">AI Mega Transformation</h3>
                      <p className="text-green-100">$150M ROI Success</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      CASE STUDY
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      25 min read
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Mega Transformation Success 2026: $150M ROI Case Study
                  </h4>
                  <p className="text-gray-600 mb-6 text-lg">
                    Discover how a Fortune 500 company achieved unprecedented success with comprehensive AI transformation, 
                    delivering $150M ROI, 95% automation efficiency, and zero-touch operations.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$150M</div>
                        <div className="text-xs text-gray-500">Total ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">95%</div>
                        <div className="text-xs text-gray-500">Automation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">600%</div>
                        <div className="text-xs text-gray-500">Productivity</div>
                      </div>
                    </div>
                    <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group-hover:scale-105">
                      View Case Study →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "AI Autonomous Enterprise Systems 2026",
              description: "Discover how autonomous AI systems are revolutionizing enterprise operations with 95% automation efficiency and $50M+ ROI.",
              href: "/blog/ai-autonomous-enterprise-systems-2026",
              category: "Article",
              readTime: "28 min",
              metrics: { value: "95%", label: "Automation" },
              color: "blue"
            },
            {
              title: "Manufacturing AI Transformation Success",
              description: "$200M ROI achieved through comprehensive manufacturing AI transformation with 800% productivity gains and 99.8% uptime.",
              href: "/case-studies/ai-manufacturing-transformation-mega-success-2026",
              category: "Case Study",
              readTime: "20 min",
              metrics: { value: "$200M", label: "ROI" },
              color: "green"
            },
            {
              title: "AI Quantum Computing Breakthrough 2026",
              description: "Revolutionary quantum computing applications delivering 1000x optimization speed and $12M additional returns.",
              href: "/blog/ai-quantum-computing-breakthrough-2026",
              category: "Article",
              readTime: "32 min",
              metrics: { value: "1000x", label: "Faster" },
              color: "purple"
            }
          ].map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`bg-${item.color}-100 text-${item.color}-600 px-2 py-1 rounded-full text-xs font-semibold`}>
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className={`text-xl font-bold text-${item.color}-600`}>{item.metrics.value}</div>
                    <div className="text-xs text-gray-500">{item.metrics.label}</div>
                  </div>
                  <div className={`flex items-center text-${item.color}-600 font-semibold text-sm group-hover:text-${item.color}-700 transition-colors`}>
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Content Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Content Impact & Engagement</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2.5M+</div>
              <div className="text-sm text-gray-600">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">150K+</div>
              <div className="text-sm text-gray-600">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving extraordinary results with our proven AI transformation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call +1 302 464 0950
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📧</span>
              Get Your AI Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}