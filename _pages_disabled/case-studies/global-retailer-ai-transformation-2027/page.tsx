import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Global Retailer AI Transformation: $420M Revenue Growth with Edge AI | Zion Tech Group Case Study',
  description: 'Discover how a Fortune 100 retailer achieved $420M in revenue growth, 89% customer satisfaction, and real-time personalization using edge AI and agentic automation across 5,000+ stores.',
  keywords: 'retail AI transformation, edge AI retail, AI personalization, retail automation, computer vision retail, smart stores, AI customer experience',
};

export default function GlobalRetailerAITransformation2027() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Case Studies
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Global Retailer Transforms Customer Experience with Edge AI
            </h1>
            <p className="text-xl text-pink-100 mb-6">
              How a Fortune 100 retailer achieved $420M in revenue growth and 89% customer satisfaction 
              with AI-powered stores and real-time personalization
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Industry: Retail</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Company Size: 200,000+ employees</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Duration: 18 months</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Key Metrics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Results at a Glance</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
                  <p className="text-4xl font-bold text-pink-600 mb-2">$420M</p>
                  <p className="text-gray-700 font-semibold">Revenue Growth</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                  <p className="text-4xl font-bold text-purple-600 mb-2">89%</p>
                  <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                  <p className="text-4xl font-bold text-blue-600 mb-2">67%</p>
                  <p className="text-gray-700 font-semibold">Inventory Efficiency</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl">
                  <p className="text-4xl font-bold text-teal-600 mb-2">5,000+</p>
                  <p className="text-gray-700 font-semibold">Stores Transformed</p>
                </div>
              </div>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A leading global retailer with 5,000+ stores across 40 countries faced mounting pressure 
                from e-commerce competitors and changing consumer expectations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Generic Shopping Experience:</strong> Unable to personalize in-store experiences at scale</li>
                <li><strong>Inventory Inefficiency:</strong> 23% stockout rate causing $600M in lost sales annually</li>
                <li><strong>Slow Checkout:</strong> Average wait time of 8 minutes frustrating customers</li>
                <li><strong>Labor Challenges:</strong> High turnover and difficulty staffing stores adequately</li>
                <li><strong>Limited Insights:</strong> No real-time visibility into customer behavior and preferences</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The retailer needed to transform physical stores into intelligent, responsive environments 
                that could compete with the convenience and personalization of online shopping.
              </p>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Solution</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Zion Tech Group designed and implemented a comprehensive AI transformation leveraging 
                edge computing, computer vision, and agentic automation:
              </p>

              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Edge AI Infrastructure</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Deployed edge servers in every store for real-time processing</li>
                    <li>Computer vision cameras analyzing customer movement and product interaction</li>
                    <li>Local processing ensuring sub-second response times and privacy compliance</li>
                    <li>Federated learning to improve models across all stores without centralizing data</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Frictionless Checkout System</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Computer vision tracking items as customers shop</li>
                    <li>Automatic payment when customers exit (just-walk-out technology)</li>
                    <li>99.2% accuracy in item recognition and transaction processing</li>
                    <li>Average transaction time reduced from 8 minutes to 12 seconds</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Real-Time Personalization</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Mobile app integration for personalized product recommendations</li>
                    <li>Dynamic pricing and promotions based on inventory and demand</li>
                    <li>In-store navigation guiding customers to desired products</li>
                    <li>AI stylists suggesting complementary items in real-time</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. Intelligent Inventory Management</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Computer vision detecting low stock and triggering automatic reordering</li>
                    <li>Demand forecasting using historical data, weather, events, and trends</li>
                    <li>Automated shelf restocking alerts for store associates</li>
                    <li>AI-optimized warehouse-to-store distribution</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">5. Agentic Store Operations</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>AI agents managing energy consumption based on occupancy</li>
                    <li>Autonomous cleaning robots optimizing schedules</li>
                    <li>Self-healing systems detecting and resolving issues automatically</li>
                    <li>Digital twins simulating store changes before implementation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Journey</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pilot Phase (Months 1-3)</h4>
                    <p className="text-gray-700">
                      Deployed solution in 10 flagship stores, tested edge AI infrastructure, and refined 
                      computer vision models for diverse store layouts and lighting conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Regional Rollout (Months 4-10)</h4>
                    <p className="text-gray-700">
                      Expanded to 500 stores across 5 regions, established center of excellence for 
                      continuous improvement, and trained store teams on new systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Scale (Months 11-18)</h4>
                    <p className="text-gray-700">
                      Completed deployment to all 5,000+ stores globally, integrated with existing 
                      systems, and established 24/7 monitoring and support infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformative Results</h2>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">▸</span>
                    <span><strong>$420M revenue increase</strong> in first year post-deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">▸</span>
                    <span><strong>31% increase in basket size</strong> from personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">▸</span>
                    <span><strong>$180M savings</strong> from inventory optimization and reduced waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">▸</span>
                    <span><strong>18-month ROI</strong> on entire AI infrastructure investment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▸</span>
                    <span><strong>89% customer satisfaction</strong> rating (up from 67%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▸</span>
                    <span><strong>98% checkout accuracy</strong> with frictionless system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▸</span>
                    <span><strong>4.2x increase</strong> in mobile app engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▸</span>
                    <span><strong>67% reduction</strong> in customer wait times</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Operational Excellence</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">▸</span>
                    <span><strong>67% improvement</strong> in inventory turnover rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">▸</span>
                    <span><strong>Stockout rate reduced</strong> from 23% to 3%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">▸</span>
                    <span><strong>28% energy cost savings</strong> from AI-optimized operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">▸</span>
                    <span><strong>42% employee productivity increase</strong> with AI assistance</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Testimonial */}
            <section className="mb-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <svg className="w-12 h-12 text-pink-200 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div>
                  <p className="text-lg mb-4 leading-relaxed">
                    "Zion Tech Group didn't just implement technology—they transformed how we think about 
                    retail. Our stores are now intelligent environments that delight customers and drive 
                    business results. The edge AI architecture they designed is a true competitive advantage."
                  </p>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-pink-200">Chief Digital Officer</p>
                </div>
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Success Factors</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎯</span>
                  <div>
                    <strong>Start with Customer Pain Points:</strong> Focused on checkout friction and 
                    product discovery rather than technology for its own sake
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🚀</span>
                  <div>
                    <strong>Edge-First Architecture:</strong> Processing at the edge enabled real-time 
                    experiences and maintained customer privacy
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">👥</span>
                  <div>
                    <strong>Change Management:</strong> Comprehensive training and support ensured employee 
                    adoption and enthusiasm
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <strong>Continuous Optimization:</strong> Federated learning across stores improved 
                    models without compromising privacy
                  </div>
                </li>
              </ul>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies Deployed</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Edge AI</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• NVIDIA Jetson Edge Servers</li>
                    <li>• TensorFlow Lite</li>
                    <li>• Edge Impulse</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Computer Vision</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• YOLO v8 Object Detection</li>
                    <li>• DeepSort Tracking</li>
                    <li>• Custom CNN Models</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud & Orchestration</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• AWS IoT Greengrass</li>
                    <li>• Kubernetes</li>
                    <li>• Apache Kafka</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Retail Operations with AI</h2>
          <p className="text-xl mb-6 text-blue-100">
            Let's discuss how edge AI and intelligent automation can revolutionize your customer experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}