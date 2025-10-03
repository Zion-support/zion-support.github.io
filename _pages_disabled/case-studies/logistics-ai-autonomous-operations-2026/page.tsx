import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Global Logistics: $240M ROI with Autonomous AI Operations 2026 | Zion Tech Group',
  description: 'See how a Fortune 500 logistics company achieved $240M ROI, 95% autonomous operations, and 99.7% on-time delivery through comprehensive AI transformation of fleet, warehouses, and routing systems.',
  keywords: 'logistics AI, autonomous logistics, AI supply chain, fleet optimization, warehouse automation, AI routing, logistics case study 2026',
};

export default function LogisticsAIAutonomousOperations2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🏆 SUCCESS STORY
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              Fortune 500 Logistics
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Global Logistics: $240M ROI with Autonomous AI Operations
          </h1>
          <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
            How a Fortune 500 logistics company achieved $240M annual ROI, 95% autonomous operations,
            and 99.7% on-time delivery through AI transformation of fleet management, warehouses, and routing.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">$240M</div>
              <div className="text-sm text-blue-100">Annual ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-blue-100">Autonomous Operations</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">99.7%</div>
              <div className="text-sm text-blue-100">On-Time Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold">38K</div>
              <div className="text-sm text-blue-100">Vehicles Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Company Overview</h2>
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 my-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry</h3>
                <p className="text-gray-700">Global Logistics & Transportation</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue</h3>
                <p className="text-gray-700">$32 billion annually</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fleet Size</h3>
                <p className="text-gray-700">38,000 vehicles worldwide</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Operations</h3>
                <p className="text-gray-700">280 warehouses, 150 countries</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Business Challenges</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            In 2024, this logistics giant faced intense pressure from rising fuel costs, driver shortages, and 
            increasing customer expectations for faster delivery. Traditional manual operations couldn't scale to 
            meet demand:
          </p>

          <div className="space-y-6 my-8">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🚛 Inefficient Routing</h3>
              <p className="text-gray-700">
                Manual route planning resulting in 28% excess miles driven annually. Fuel costs $4.2B higher than 
                optimal. Real-time traffic updates not integrated into routing decisions.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📦 Warehouse Bottlenecks</h3>
              <p className="text-gray-700">
                Pick-and-pack operations averaging 45 minutes per order. Inventory tracking accuracy at 84%. Peak 
                season overflow causing 15% of shipments to miss SLA.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">👨‍✈️ Driver Shortage Crisis</h3>
              <p className="text-gray-700">
                18% driver positions unfilled due to industry-wide shortage. High turnover (92% annually) increasing 
                training costs. Manual dispatching failing to optimize driver utilization.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📉 Customer Dissatisfaction</h3>
              <p className="text-gray-700">
                On-time delivery at 82% vs. industry leader's 98%. Limited shipment visibility causing frequent customer 
                inquiries. NPS score of +12 well below target of +40.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">The AI Transformation Journey</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Zion Tech Group partnered with the company to implement a comprehensive AI transformation across all 
            operational areas over 20 months:
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Phase 1: Intelligent Fleet Optimization</h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 my-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">🗺️ AI-Powered Dynamic Routing</h4>
            <p className="text-lg text-gray-700 mb-4">
              Real-time route optimization considering traffic, weather, delivery windows, and vehicle capabilities:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>Miles driven reduced by 32% through intelligent routing</li>
              <li>Fuel consumption down $1.8B annually</li>
              <li>Average delivery time reduced from 4.2 hours to 2.1 hours</li>
              <li>Real-time rerouting handling traffic incidents automatically</li>
              <li>Route optimization processing 2M+ scenarios per hour</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 my-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">🚗 Predictive Vehicle Maintenance</h4>
            <p className="text-lg text-gray-700 mb-4">
              ML models predicting failures before they occur:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>Unplanned downtime reduced by 87%</li>
              <li>Maintenance costs down 45% through predictive scheduling</li>
              <li>Fleet availability increased from 82% to 97%</li>
              <li>IoT sensors on 38,000 vehicles streaming real-time telemetry</li>
              <li>$680M savings from reduced breakdowns and optimized maintenance</li>
            </ul>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Phase 2: Autonomous Warehouse Operations</h3>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8 my-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">🤖 Robotic Process Automation</h4>
            <p className="text-lg text-gray-700 mb-4">
              AI-orchestrated robotic fleet for picking, packing, and sorting:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>12,000 autonomous robots deployed across 280 warehouses</li>
              <li>Pick-and-pack time reduced from 45 minutes to 4 minutes</li>
              <li>Order processing capacity increased 8x</li>
              <li>Inventory accuracy improved from 84% to 99.8%</li>
              <li>Labor costs reduced by $2.4B annually</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 my-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">📊 Intelligent Inventory Management</h4>
            <p className="text-lg text-gray-700 mb-4">
              AI predicting demand and optimizing stock levels across network:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>Inventory carrying costs reduced by $1.2B</li>
              <li>Stock-outs reduced by 94%</li>
              <li>Warehouse space utilization increased by 65%</li>
              <li>Dynamic rebalancing moving inventory to high-demand locations</li>
              <li>Safety stock requirements reduced by 40%</li>
            </ul>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Phase 3: AI-Driven Customer Experience</h3>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 my-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">📱 Real-Time Shipment Intelligence</h4>
            <p className="text-lg text-gray-700 mb-4">
              Proactive communication and predictive delivery estimates:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>Real-time tracking with 1-minute location updates</li>
              <li>AI-powered delivery time predictions within ±5 minutes</li>
              <li>Proactive delay notifications with automatic rescheduling</li>
              <li>Customer portal reducing inquiry calls by 78%</li>
              <li>NPS score improved from +12 to +58</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8 my-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">💬 AI Customer Service Agents</h4>
            <p className="text-lg text-gray-700 mb-4">
              24/7 intelligent assistants handling customer inquiries:
            </p>
            <ul className="list-disc pl-8 text-gray-700 space-y-2">
              <li>3.2M customer conversations handled monthly</li>
              <li>88% of inquiries resolved without human agent</li>
              <li>Average response time reduced from 12 minutes to 8 seconds</li>
              <li>Support costs reduced by $140M annually</li>
              <li>Customer satisfaction increased to 96%</li>
            </ul>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Implementation Timeline</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-indigo-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Months 1-4: Data & Infrastructure</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• IoT sensor deployment across entire fleet</li>
                  <li>• Data lake and analytics platform setup</li>
                  <li>• API integration with 120+ existing systems</li>
                  <li>• Historical data aggregation and cleaning</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Months 5-10: Fleet AI Deployment</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Dynamic routing system for 38K vehicles</li>
                  <li>• Predictive maintenance model training</li>
                  <li>• Driver app with AI-powered assistance</li>
                  <li>• Fuel optimization and eco-routing</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-cyan-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Months 11-16: Warehouse Automation</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 12,000 robots deployed across 280 facilities</li>
                  <li>• AI inventory management system rollout</li>
                  <li>• Computer vision quality control</li>
                  <li>• Automated slotting and space optimization</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-green-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Months 17-20: Customer Experience AI</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Real-time tracking platform launch</li>
                  <li>• Conversational AI customer service</li>
                  <li>• Predictive delivery estimates</li>
                  <li>• Enterprise-wide optimization and scaling</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Results & Business Impact</h2>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Financial Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Annual Cost Savings</span>
                  <span className="text-3xl font-bold text-green-600">$6.8B</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Revenue Growth</span>
                  <span className="text-3xl font-bold text-green-600">+$4.2B</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Net Annual ROI</span>
                  <span className="text-3xl font-bold text-green-600">$240M</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Profit Margin</span>
                  <span className="text-3xl font-bold text-green-600">+12.4%</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Operational Excellence</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">On-Time Delivery</span>
                  <span className="text-3xl font-bold text-blue-600">99.7%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Fleet Utilization</span>
                  <span className="text-3xl font-bold text-blue-600">+67%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Warehouse Efficiency</span>
                  <span className="text-3xl font-bold text-blue-600">+740%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Fuel Savings</span>
                  <span className="text-3xl font-bold text-blue-600">-32%</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">😊 Customer Metrics</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">NPS Score</span>
                  <span className="text-3xl font-bold text-purple-600">+58</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Customer Retention</span>
                  <span className="text-3xl font-bold text-purple-600">96%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Satisfaction Score</span>
                  <span className="text-3xl font-bold text-purple-600">4.8/5</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Support Inquiries</span>
                  <span className="text-3xl font-bold text-purple-600">-78%</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🌍 Sustainability</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">CO2 Reduction</span>
                  <span className="text-3xl font-bold text-orange-600">-2.8M tons</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Miles Saved</span>
                  <span className="text-3xl font-bold text-orange-600">-840M</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Packaging Waste</span>
                  <span className="text-3xl font-bold text-orange-600">-55%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Energy Use</span>
                  <span className="text-3xl font-bold text-orange-600">-42%</span>
                </li>
              </ul>
            </div>

          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Technology Architecture</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise AI Stack</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">🧠 AI Core Platform</h4>
                <p className="text-gray-700">Kubernetes-based ML platform processing 12TB data daily, training 300+ models, serving 800M+ predictions per hour</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">📡 IoT & Telemetry</h4>
                <p className="text-gray-700">38,000 connected vehicles streaming real-time data, 50K warehouse sensors, edge computing for low-latency decisions</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">🗺️ Geospatial Intelligence</h4>
                <p className="text-gray-700">Real-time traffic data integration, weather forecasting, historical route analysis, dynamic mapping with HD precision</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">🤖 Autonomous Systems</h4>
                <p className="text-gray-700">Multi-agent reinforcement learning orchestrating 12,000 warehouse robots, fleet routing, and dispatch systems</p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Key Success Factors</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Clear ROI Targets</h3>
              <p className="text-gray-700">
                Defined specific, measurable goals for each phase. Tracked ROI weekly. Adjusted strategy based on 
                early results to maximize returns.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📊 Data-Driven Culture</h3>
              <p className="text-gray-700">
                Invested heavily in data infrastructure first. Created unified data platform before deploying AI. 
                Established data quality standards across organization.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔄 Agile Deployment</h3>
              <p className="text-gray-700">
                Piloted each system in limited scope before full rollout. Rapid iteration based on feedback. 
                Continuous monitoring and optimization post-deployment.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">👥 Workforce Transformation</h3>
              <p className="text-gray-700">
                Comprehensive retraining program for 45,000 employees. Positioned AI as tool to enhance human 
                capabilities, not replace workers.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Executive Perspective</h2>

          <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-indigo-600 p-8 my-12 rounded-r-xl shadow-lg">
            <p className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "This transformation exceeded every expectation. We didn't just optimize existing processes—we 
              fundamentally reimagined how logistics works. The $240M ROI is remarkable, but the real value is the 
              competitive moat we've built. Competitors can't match our speed, reliability, or cost structure. 
              We're now positioned to dominate the industry for decades."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                M.C.
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Michael Chen</div>
                <div className="text-gray-600">Chief Operations Officer</div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mt-12 mb-6">Future Initiatives</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 my-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">2026-2027 Roadmap</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚛</span>
                <span><strong>Autonomous Delivery Vehicles:</strong> Deploy 5,000 self-driving delivery trucks in controlled urban areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚁</span>
                <span><strong>Drone Last-Mile Delivery:</strong> Autonomous drones for 30% of urban deliveries within 2 years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <span><strong>Blockchain Integration:</strong> Immutable supply chain tracking for pharmaceutical and high-value goods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <span><strong>Humanoid Robots:</strong> Testing for complex warehouse tasks requiring human-like dexterity</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-2xl p-12 my-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Transform Your Logistics Operations with AI</h2>
            <p className="text-2xl mb-8 text-blue-100">
              Achieve 95% autonomous operations and $240M+ ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all hover:scale-105"
              >
                📧 Schedule Consultation
              </a>
            </div>
            <p className="mt-8 text-lg text-blue-100">
              Discover how AI can revolutionize your logistics operations
            </p>
          </div>

        </div>
      </article>

      {/* Related Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/retail-giant-ai-transformation-2026" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Giant: $320M ROI</h3>
              <p className="text-gray-600">Fortune 100 retail transformation success</p>
            </Link>
            <Link href="/case-studies/manufacturing-ai-transformation-2026" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing: $180M Savings</h3>
              <p className="text-gray-600">Global manufacturer operations transformation</p>
            </Link>
            <Link href="/case-studies/ai-supply-chain-optimization-mega-success-2025" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain: $200M ROI</h3>
              <p className="text-gray-600">Fortune 500 supply chain optimization</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}