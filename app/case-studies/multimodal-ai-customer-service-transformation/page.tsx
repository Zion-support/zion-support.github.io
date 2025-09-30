import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Multimodal AI Customer Service: 80% Faster Response Times | Zion Tech Group',
  description: 'See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with multimodal AI customer service transformation.',
  keywords: 'customer service AI, multimodal AI, AI transformation, e-commerce AI, customer support automation, AI case study',
  openGraph: {
    title: 'Multimodal AI Customer Service: 80% Faster Response Times',
    description: 'See how a leading e-commerce company achieved 80% faster response times with multimodal AI customer service.',
    type: 'article',
    url: 'https://ziontechgroup.com/case-studies/multimodal-ai-customer-service-transformation',
    images: [
      {
        url: '/case-studies/multimodal-ai-customer-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Multimodal AI Customer Service Transformation',
      },
    ],
  },
};

export default function MultimodalAICustomerServiceCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold">
              🎯 Success Story
            </span>
            <span className="text-green-200 text-sm">E-commerce</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Multimodal AI Customer Service: 80% Faster Response Times
          </h1>
          <p className="text-2xl text-green-100 mb-8 leading-relaxed">
            See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with our multimodal AI customer service platform.
          </p>
          <div className="flex items-center gap-4 text-green-200">
            <span>Published: January 20, 2026</span>
            <span>•</span>
            <span>Industry: E-commerce</span>
            <span>•</span>
            <span>Company Size: 10,000+ employees</span>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Results Achieved</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Faster Response Times</div>
              <div className="text-gray-600">Average response time reduced from 5 minutes to 1 minute</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Accuracy Rate</div>
              <div className="text-gray-600">Query resolution accuracy improved from 78% to 95%</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <div className="text-gray-600">Customer support costs reduced by $2.5M annually</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">😊</span>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</div>
              <div className="text-gray-600">Customer satisfaction rate increased from 85% to 98%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          {/* Company Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Company Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our client is a leading global e-commerce company with over 10,000 employees and millions of customers worldwide. 
              They were facing significant challenges with their customer service operations, including long response times, 
              inconsistent service quality, and escalating support costs.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry:</h4>
                  <p className="text-gray-600">E-commerce & Retail</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Company Size:</h4>
                  <p className="text-gray-600">10,000+ employees</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Annual Revenue:</h4>
                  <p className="text-gray-600">$5B+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Base:</h4>
                  <p className="text-gray-600">50M+ active customers</p>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Challenges Faced
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Slow Response Times</h3>
                  <p className="text-gray-700">
                    Average customer response time was 5 minutes, leading to customer frustration and potential loss of sales.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Low Accuracy Rate</h3>
                  <p className="text-gray-700">
                    Only 78% of customer queries were resolved accurately on the first contact, requiring multiple interactions.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">High Support Costs</h3>
                  <p className="text-gray-700">
                    Customer support costs were escalating, with $4M+ annually spent on support operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">😞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction Issues</h3>
                  <p className="text-gray-700">
                    Customer satisfaction rate was only 85%, below industry standards and company targets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Solution: Multimodal AI Customer Service Platform
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We implemented a comprehensive multimodal AI customer service platform that processes text, voice, and video 
              interactions simultaneously to provide faster, more accurate, and more personalized customer support.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features Implemented</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Multimodal query processing (text, voice, video)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Real-time sentiment analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Context-aware response generation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Automated escalation to human agents</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Advanced NLP and speech recognition</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Computer vision for video analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Machine learning for continuous improvement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Integration with existing CRM systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Implementation Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Planning (Week 1-2)</h3>
                  <p className="text-gray-700">Analyzed existing customer service workflows, identified pain points, and designed the multimodal AI solution architecture.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pilot Implementation (Week 3-8)</h3>
                  <p className="text-gray-700">Deployed the multimodal AI system for a subset of customer service channels to test and optimize performance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Deployment (Week 9-16)</h3>
                  <p className="text-gray-700">Rolled out the solution across all customer service channels with comprehensive training and support.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optimization (Ongoing)</h3>
                  <p className="text-gray-700">Continuous monitoring, performance optimization, and feature enhancement based on user feedback and analytics.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Results Achieved
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Improvements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Response Time</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">1 minute</div>
                      <div className="text-sm text-gray-500">Down from 5 minutes (80% improvement)</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Accuracy Rate</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-sm text-gray-500">Up from 78% (22% improvement)</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">98%</div>
                      <div className="text-sm text-gray-500">Up from 85% (15% improvement)</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Support Costs</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">$1.5M</div>
                      <div className="text-sm text-gray-500">Down from $4M (60% reduction)</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">First Contact Resolution</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">92%</div>
                      <div className="text-sm text-gray-500">Up from 65% (42% improvement)</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Agent Productivity</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">300%</div>
                      <div className="text-sm text-gray-500">Increase in handled queries per agent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ROI Analysis
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investment</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$800K</div>
                <p className="text-gray-600">Implementation and setup costs</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Savings</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$2.5M</div>
                <p className="text-gray-600">Reduced support costs</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ROI</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">312%</div>
                <p className="text-gray-600">Return on investment</p>
              </div>
            </div>
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payback Period</h3>
              <p className="text-gray-700">
                The investment was recovered in just 4 months, with ongoing annual savings of $2.5M. 
                The solution continues to deliver value through improved customer satisfaction, increased agent productivity, and reduced operational costs.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
            <p className="text-xl mb-8 opacity-90">
              Achieve similar results with our multimodal AI customer service solutions. Join leading companies that are revolutionizing customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/multimodal-ai-customer-service"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/case-studies/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Enterprise AI
                </span>
                <span className="text-sm text-gray-500">Fortune 500</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Enterprise Transformation: 400% ROI in 6 Months
              </h3>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 company achieved complete digital transformation with AI.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/manufacturing-ai-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Manufacturing
                </span>
                <span className="text-sm text-gray-500">Global Company</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Manufacturing AI: $50M+ Savings Achieved
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how smart manufacturing AI transformed production efficiency.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/autonomous-ai-systems-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Autonomous AI
                </span>
                <span className="text-sm text-gray-500">Tech Company</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Autonomous AI Systems: 99.9% Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how autonomous AI systems achieved complete process automation.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}