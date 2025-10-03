// import React from 'react';

export default function RetailContinuousIntelligenceSuccess() {
  return (
    <article className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
            <span className="text-orange-400 font-bold text-sm tracking-wider uppercase">
              💼 Case Study - October 2025
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Global Retailer Transforms Customer Experience with Real-Time Continuous Intelligence
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            How a Fortune 500 retailer deployed continuous intelligence to process 50M events per second, deliver 
            personalized experiences in under 80ms, and achieve $723M in incremental revenue through real-time 
            AI-powered decision-making.
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
          <h2 className="text-3xl font-bold mb-6 text-orange-400">Results at a Glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl font-extrabold text-orange-400 mb-2">$723M</div>
              <div className="text-gray-300">Incremental Annual Revenue</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl font-extrabold text-red-400 mb-2">&lt;80ms</div>
              <div className="text-gray-300">End-to-End Decision Latency</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl font-extrabold text-pink-400 mb-2">156%</div>
              <div className="text-gray-300">Increase in Conversion Rate</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">50M</div>
              <div className="text-gray-300">Events Processed Per Second</div>
            </div>
          </div>
        </section>

        {/* The Client */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Client</h2>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-orange-500/20">
            <p className="text-gray-300 mb-4">
              <strong className="text-orange-400">RetailCorp</strong> (name anonymized) is a Fortune 500 omnichannel 
              retailer with:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• 100M+ monthly active users across web, mobile, and 2,500 physical stores</li>
              <li>• $45B annual revenue from 50M SKUs across 15 product categories</li>
              <li>• Operations in 35 countries with complex supply chain and logistics</li>
              <li>• Strong legacy systems but struggling to compete with digital-native retailers</li>
            </ul>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Challenge</h2>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-red-500/20 mb-6">
            <p className="text-gray-300 mb-4">
              RetailCorp's traditional business intelligence operated on day-old data, creating a fundamental disconnect 
              between customer behavior and business response. By the time insights were available, market conditions 
              had changed, opportunities had passed, and customers had moved to competitors.
            </p>
            
            <h3 className="text-xl font-bold text-red-400 mb-3 mt-6">Critical Pain Points:</h3>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">1. Batch Analytics Limitations</h4>
                <ul className="space-y-1 text-gray-300 text-sm ml-4">
                  <li>• Product recommendations based on yesterday's browsing data</li>
                  <li>• Prices updated once per day, missing demand surges</li>
                  <li>• Inventory decisions made on stale data, causing stockouts and overstock</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">2. Siloed Customer Experience</h4>
                <ul className="space-y-1 text-gray-300 text-sm ml-4">
                  <li>• Online and in-store systems didn't communicate in real-time</li>
                  <li>• Customers abandoned carts due to inconsistent pricing and availability</li>
                  <li>• Personalization limited to basic segments, not individual behavior</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold text-pink-400 mb-2">3. Operational Inefficiencies</h4>
                <ul className="space-y-1 text-gray-300 text-sm ml-4">
                  <li>• Supply chain reacted to shortages rather than predicting them</li>
                  <li>• Marketing campaigns optimized weekly, not in real-time</li>
                  <li>• Fraud detection averaged 4-hour lag, enabling significant losses</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-3">Business Impact Before Solution:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <ul className="space-y-2">
                  <li>• 3.2% conversion rate (industry: 4.5%)</li>
                  <li>• $287M annual revenue loss from stockouts</li>
                  <li>• 68% cart abandonment rate</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>• $156M in excess inventory carrying costs</li>
                  <li>• $89M annual fraud losses</li>
                  <li>• Customer satisfaction score: 3.2/5</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Solution: Enterprise Continuous Intelligence Platform</h2>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20 mb-6">
            <p className="text-gray-300 mb-6">
              Zion Tech Group designed and deployed a comprehensive continuous intelligence platform that transformed 
              RetailCorp from batch analytics to real-time, AI-powered decision-making across all customer touchpoints 
              and operational processes.
            </p>
            
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Architecture Components:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-bold text-orange-400 mb-3">Ingestion Layer</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Apache Kafka (50M events/sec)</li>
                  <li>• CDC from 15 source databases</li>
                  <li>• API gateway for mobile/web</li>
                  <li>• IoT sensors from stores</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="text-lg font-bold text-red-400 mb-3">Processing Layer</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Apache Flink for stream processing</li>
                  <li>• Real-time feature engineering</li>
                  <li>• Stateful aggregations</li>
                  <li>• Complex event processing</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="text-lg font-bold text-pink-400 mb-3">Intelligence Layer</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Tecton feature store (&lt;10ms)</li>
                  <li>• TensorFlow Serving (GPU)</li>
                  <li>• Real-time A/B testing</li>
                  <li>• Decision orchestration</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-red-400 mb-4 mt-8">Key Use Cases Implemented:</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-orange-500">
              <h4 className="text-lg font-bold text-orange-400 mb-3">1. Real-Time Personalization Engine</h4>
              <p className="text-gray-300 mb-3">
                Every click, scroll, and interaction triggers instant profile updates. ML models compute personalized 
                recommendations, content, and offers in &lt;80ms based on current session context, not yesterday's data.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-orange-400">156%</div>
                  <div className="text-gray-300">Conversion increase</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-red-400">$298M</div>
                  <div className="text-gray-300">Additional revenue</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-pink-400">42%</div>
                  <div className="text-gray-300">AOV improvement</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-400 mb-3">2. Dynamic Pricing & Inventory Optimization</h4>
              <p className="text-gray-300 mb-3">
                Prices adjust every 5 seconds based on demand signals, competitor prices, inventory levels, and 
                customer segments. Real-time inventory allocation across stores and warehouses minimizes stockouts.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-red-400">34%</div>
                  <div className="text-gray-300">Margin improvement</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-pink-400">$287M</div>
                  <div className="text-gray-300">Recovered from stockouts</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-purple-400">52%</div>
                  <div className="text-gray-300">Inventory reduction</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-pink-500">
              <h4 className="text-lg font-bold text-pink-400 mb-3">3. Fraud Detection & Prevention</h4>
              <p className="text-gray-300 mb-3">
                Transaction risk scoring in &lt;50ms blocks fraudulent purchases before processing. Behavioral 
                biometrics and device fingerprinting detect account takeover attempts in real-time.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-pink-400">89%</div>
                  <div className="text-gray-300">Fraud reduction</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-purple-400">$89M</div>
                  <div className="text-gray-300">Annual savings</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-indigo-400">0.02%</div>
                  <div className="text-gray-300">False positive rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Implementation Journey</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-orange-400">Phase 1: Foundation (Months 1-3)</h3>
                <span className="text-sm text-gray-400 bg-orange-500/20 px-3 py-1 rounded-full">Q1 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Deployed Kafka cluster with 99.99% availability SLA</li>
                <li>✓ Implemented change data capture from legacy databases</li>
                <li>✓ Built observability stack (Prometheus, Grafana, Jaeger)</li>
                <li>✓ Created sandbox for experimentation and proof-of-concepts</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-red-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-red-400">Phase 2: MVP Use Case (Months 4-6)</h3>
                <span className="text-sm text-gray-400 bg-red-500/20 px-3 py-1 rounded-full">Q2 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Launched real-time personalization for 10% of traffic (A/B test)</li>
                <li>✓ Achieved 78% conversion improvement in test group</li>
                <li>✓ Validated &lt;100ms latency at scale</li>
                <li>✓ Gained executive buy-in for full rollout</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-pink-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-pink-400">Phase 3: Scale & Expand (Months 7-10)</h3>
                <span className="text-sm text-gray-400 bg-pink-500/20 px-3 py-1 rounded-full">Q3-Q4 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Rolled out personalization to 100% of customers</li>
                <li>✓ Added dynamic pricing and inventory optimization</li>
                <li>✓ Deployed fraud detection system</li>
                <li>✓ Integrated with all channels (web, mobile, in-store)</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-purple-400">Phase 4: Optimization (Ongoing)</h3>
                <span className="text-sm text-gray-400 bg-purple-500/20 px-3 py-1 rounded-full">2026</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>→ Continuous model retraining and improvement</li>
                <li>→ Expanding to new use cases (supply chain, marketing attribution)</li>
                <li>→ Multi-region deployment for global operations</li>
                <li>→ Advanced causal inference for decision optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Results: Transformational Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Revenue & Growth</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <div className="flex justify-between items-center">
                    <span>Incremental Annual Revenue</span>
                    <span className="font-bold text-2xl text-orange-400">$723M</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>Conversion Rate Increase</span>
                    <span className="font-bold text-2xl text-red-400">156%</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>Average Order Value Growth</span>
                    <span className="font-bold text-2xl text-pink-400">42%</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>Customer Lifetime Value</span>
                    <span className="font-bold text-2xl text-purple-400">+67%</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <div className="flex justify-between items-center">
                    <span>Inventory Carrying Costs Reduced</span>
                    <span className="font-bold text-2xl text-red-400">$156M</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>Fraud Loss Prevention</span>
                    <span className="font-bold text-2xl text-pink-400">$89M</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>Marketing Efficiency Gain</span>
                    <span className="font-bold text-2xl text-purple-400">73%</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>Supply Chain Cost Reduction</span>
                    <span className="font-bold text-2xl text-indigo-400">$127M</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Customer Experience Transformation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-emerald-400 mb-2">4.7/5</div>
                <div className="text-gray-300 text-sm">Customer Satisfaction</div>
                <div className="text-xs text-gray-400 mt-1">(from 3.2/5)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-teal-400 mb-2">38%</div>
                <div className="text-gray-300 text-sm">Cart Abandonment</div>
                <div className="text-xs text-gray-400 mt-1">(from 68%)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">&lt;80ms</div>
                <div className="text-gray-300 text-sm">Decision Latency</div>
                <div className="text-xs text-gray-400 mt-1">p99 latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">89%</div>
                <div className="text-gray-300 text-sm">Personalization Accuracy</div>
                <div className="text-xs text-gray-400 mt-1">ML model precision</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30">
            <div className="text-orange-400 text-6xl mb-4">"</div>
            <blockquote className="text-xl text-white italic mb-6">
              Continuous intelligence fundamentally transformed how we operate. We went from reacting to yesterday's 
              data to anticipating customer needs in real-time. The results speak for themselves: $723M in incremental 
              revenue and the highest customer satisfaction scores in our history.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-2xl">
                👨‍💼
              </div>
              <div>
                <div className="font-bold text-white">James Morrison</div>
                <div className="text-gray-300">Chief Digital Officer, RetailCorp</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business with Continuous Intelligence?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Learn how continuous intelligence can help your organization make instant, AI-powered decisions that 
            drive revenue growth and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            >
              Schedule Continuous Intelligence Assessment
            </a>
            <a 
              href="/blog/ai-2025-october-continuous-intelligence-real-time-analytics"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Read Technical Architecture →
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
