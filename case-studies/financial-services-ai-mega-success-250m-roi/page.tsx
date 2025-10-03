import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Financial Services AI Transformation: $250M ROI Success Story | Zion Tech Group',
  description: 'Discover how a global bank achieved $250M ROI through AI transformation: 95% automation, 99.9% fraud detection, 85% cost reduction, 2x revenue growth in 24 months.',
  keywords: 'financial services AI, banking transformation, AI ROI, fraud detection AI, financial automation, digital banking transformation',
};

export default function FinancialServicesAISuccess() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <span>🏆</span>
              MEGA SUCCESS STORY • September 30, 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              $250M ROI: Financial Services AI Transformation Success Story
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How a global bank achieved $250M ROI through comprehensive AI transformation: 95% automation, 
              99.9% fraud detection accuracy, 85% cost reduction, and 2x revenue growth in just 24 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                📞 Get Your Transformation Roadmap
              </a>
              <Link
                href="/blog/ai-digital-transformation-roi-playbook-2026"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                📖 Read ROI Playbook
              </Link>
            </div>
          </div>
          
          {/* Key Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">$250M</div>
              <div className="text-gray-600">Total ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Fraud Detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">Automation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">2x</div>
              <div className="text-gray-600">Revenue Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About the Bank</h3>
              <p className="text-lg text-gray-600 mb-6">
                A leading global bank with operations in 45 countries, serving 25 million retail customers 
                and 500,000+ corporate clients. The bank faced mounting pressure from fintech disruptors, 
                rising operational costs, and increasing regulatory complexity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Industry:</strong> Global Banking & Financial Services</li>
                <li>• <strong>Size:</strong> Top 20 global bank, 75,000+ employees</li>
                <li>• <strong>Operations:</strong> 45 countries, 2,500+ branches</li>
                <li>• <strong>Revenue:</strong> $42B annually</li>
                <li>• <strong>Customers:</strong> 25M retail + 500K corporate</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Transformation Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Legacy Systems:</strong> 60% of infrastructure over 20 years old</li>
                <li>• <strong>High Fraud Losses:</strong> $180M annually from financial crime</li>
                <li>• <strong>Manual Processes:</strong> 80% of operations labor-intensive</li>
                <li>• <strong>Poor Customer Experience:</strong> 62% satisfaction, 18% churn</li>
                <li>• <strong>Regulatory Burden:</strong> $120M compliance costs</li>
                <li>• <strong>Slow Decision-Making:</strong> 3-5 days for loan approvals</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Objectives</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Revenue Growth</h4>
                <p className="text-sm text-gray-700">Double revenue through AI-powered personalization and new products</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Cost Reduction</h4>
                <p className="text-sm text-gray-700">Reduce operational costs by 70% through intelligent automation</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Risk Mitigation</h4>
                <p className="text-sm text-gray-700">Eliminate fraud and ensure 100% regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive AI Transformation Solution</h2>
          
          <div className="space-y-8">
            {/* AI Fraud Detection */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🛡️ AI-Powered Fraud Detection & Prevention</h3>
              <p className="text-gray-600 mb-4">
                Deployed real-time AI fraud detection system using machine learning, behavioral analytics, 
                and network analysis to prevent financial crime across all channels.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">Real-Time Detection</h4>
                  <p className="text-sm text-red-700">&lt;50ms transaction analysis</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-2">Advanced ML Models</h4>
                  <p className="text-sm text-orange-700">99.9% fraud detection accuracy</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">Network Analysis</h4>
                  <p className="text-sm text-yellow-700">Identify fraud rings automatically</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Results:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>$165M saved</strong> from prevented fraud (92% reduction)</li>
                  <li>• <strong>99.9% detection rate</strong> with &lt;0.1% false positives</li>
                  <li>• <strong>Real-time alerts</strong> in &lt;50 milliseconds</li>
                  <li>• <strong>95% reduction</strong> in manual investigation time</li>
                </ul>
              </div>
            </div>

            {/* Intelligent Process Automation */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🤖 Intelligent Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI-powered hyperautomation across operations: loan processing, KYC/AML, 
                account opening, customer service, and back-office operations.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Loan Processing</h4>
                  <p className="text-sm text-blue-700">Minutes instead of days</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-bold text-cyan-800 mb-2">KYC/AML Automation</h4>
                  <p className="text-sm text-cyan-700">90% faster compliance checks</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-2">Customer Service Bots</h4>
                  <p className="text-sm text-indigo-700">80% query resolution rate</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Results:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>$85M cost savings</strong> from process automation</li>
                  <li>• <strong>95% automation rate</strong> across 2,500+ processes</li>
                  <li>• <strong>5 minutes</strong> average loan approval time (vs. 3-5 days)</li>
                  <li>• <strong>98% accuracy</strong> in automated decision-making</li>
                </ul>
              </div>
            </div>

            {/* AI-Powered Personalization */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 AI-Driven Customer Intelligence & Personalization</h3>
              <p className="text-gray-600 mb-4">
                Built 360-degree customer intelligence platform using AI to deliver hyper-personalized 
                banking experiences, product recommendations, and financial advice.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-2">Customer 360</h4>
                  <p className="text-sm text-purple-700">Unified customer view across channels</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">Predictive Analytics</h4>
                  <p className="text-sm text-pink-700">Anticipate customer needs proactively</p>
                </div>
                <div className="bg-fuchsia-50 p-4 rounded-lg">
                  <h4 className="font-bold text-fuchsia-800 mb-2">Next-Best-Action</h4>
                  <p className="text-sm text-fuchsia-700">Real-time personalized offers</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Results:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>$180M revenue increase</strong> from personalized offerings</li>
                  <li>• <strong>3.5x conversion rate</strong> on AI-driven recommendations</li>
                  <li>• <strong>92% customer satisfaction</strong> (up from 62%)</li>
                  <li>• <strong>8% churn reduction</strong> through predictive retention</li>
                </ul>
              </div>
            </div>

            {/* Risk & Compliance AI */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚖️ AI-Powered Risk Management & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Automated regulatory compliance, risk assessment, and reporting using NLP, machine learning, 
                and continuous monitoring systems.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Regulatory Compliance</h4>
                  <p className="text-sm text-green-700">Automated compliance monitoring</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-bold text-teal-800 mb-2">Credit Risk AI</h4>
                  <p className="text-sm text-teal-700">Real-time risk assessment</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-bold text-emerald-800 mb-2">Intelligent Reporting</h4>
                  <p className="text-sm text-emerald-700">Automated regulatory reports</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Results:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>$95M reduction</strong> in compliance costs (80% savings)</li>
                  <li>• <strong>100% compliance</strong> with all regulatory requirements</li>
                  <li>• <strong>Zero regulatory fines</strong> since implementation</li>
                  <li>• <strong>90% faster</strong> risk assessment and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">24-Month Transformation Journey</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm w-40 text-center flex-shrink-0">
                Months 1-6<br/>Foundation
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Strategy, Infrastructure & Quick Wins</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• AI strategy and roadmap development</li>
                  <li>• Cloud infrastructure deployment (AWS + Azure)</li>
                  <li>• Data lake and AI/ML platform setup</li>
                  <li>• Pilot fraud detection system (saved $25M in first 6 months)</li>
                  <li>• Team training and CoE establishment</li>
                </ul>
                <div className="mt-3 text-sm font-semibold text-green-600">Investment: $45M • Value: $30M</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-sm w-40 text-center flex-shrink-0">
                Months 7-12<br/>Scale
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Enterprise Automation & Personalization</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Hyperautomation across 500+ processes</li>
                  <li>• Customer intelligence platform rollout</li>
                  <li>• AI-powered loan processing system</li>
                  <li>• Intelligent customer service (chatbots + voice AI)</li>
                  <li>• Risk and compliance automation</li>
                </ul>
                <div className="mt-3 text-sm font-semibold text-green-600">Investment: $35M • Value: $110M</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm w-40 text-center flex-shrink-0">
                Months 13-18<br/>Optimize
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Advanced AI & Enterprise Integration</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Advanced ML models for fraud and risk</li>
                  <li>• Predictive analytics for retention and growth</li>
                  <li>• Full process orchestration and optimization</li>
                  <li>• Real-time decision engines across all touchpoints</li>
                  <li>• Legacy system migration and modernization</li>
                </ul>
                <div className="mt-3 text-sm font-semibold text-green-600">Investment: $25M • Value: $145M</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm w-40 text-center flex-shrink-0">
                Months 19-24<br/>Transform
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-2">Innovation & Continuous Improvement</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Autonomous banking operations at scale</li>
                  <li>• Advanced AI products (robo-advisors, wealth management)</li>
                  <li>• Predictive lifecycle management for all customers</li>
                  <li>• Self-optimizing systems with continuous learning</li>
                  <li>• Innovation labs for emerging AI technologies</li>
                </ul>
                <div className="mt-3 text-sm font-semibold text-green-600">Investment: $20M • Value: $190M</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Total 24-Month Impact</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="text-3xl font-bold">$125M</div>
                <div className="text-sm opacity-90">Total Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$475M</div>
                <div className="text-sm opacity-90">Total Value Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold">280%</div>
                <div className="text-sm opacity-90">ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Business Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4">Financial Results</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>$250M total ROI</strong> in 24 months</li>
                <li>• <strong>$165M fraud prevention</strong> savings (92% reduction)</li>
                <li>• <strong>$85M operational savings</strong> from automation</li>
                <li>• <strong>$180M revenue growth</strong> from personalization</li>
                <li>• <strong>$95M compliance savings</strong> (80% reduction)</li>
                <li>• <strong>280% ROI</strong> on $125M investment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Operational Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>95% process automation</strong> across enterprise</li>
                <li>• <strong>5 minutes</strong> loan approval (vs. 3-5 days)</li>
                <li>• <strong>99.9% fraud detection</strong> accuracy</li>
                <li>• <strong>98% decision accuracy</strong> for automated processes</li>
                <li>• <strong>80% cost reduction</strong> in compliance operations</li>
                <li>• <strong>&lt;50ms</strong> real-time fraud analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Customer Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>92% customer satisfaction</strong> (up from 62%)</li>
                <li>• <strong>8% churn reduction</strong> through predictive retention</li>
                <li>• <strong>3.5x conversion rate</strong> on AI recommendations</li>
                <li>• <strong>80% query resolution</strong> through AI chatbots</li>
                <li>• <strong>Real-time personalization</strong> across all channels</li>
                <li>• <strong>24/7 intelligent service</strong> availability</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Strategic Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Market leader</strong> in digital banking innovation</li>
                <li>• <strong>Zero regulatory fines</strong> post-implementation</li>
                <li>• <strong>Competitive moat</strong> through AI capabilities</li>
                <li>• <strong>Talent attraction</strong> as AI-first organization</li>
                <li>• <strong>Scalable platform</strong> for continuous innovation</li>
                <li>• <strong>Future-ready</strong> infrastructure and culture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-green-900 mb-3">✅ What Worked</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Strong executive sponsorship from CEO and board</li>
                <li>• Focus on quick wins to build momentum and trust</li>
                <li>• Comprehensive change management and training program</li>
                <li>• Cross-functional teams with business and technical expertise</li>
                <li>• Continuous measurement and celebration of successes</li>
                <li>• Partnership with experienced AI transformation consultants</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-red-900 mb-3">⚠️ Challenges Overcome</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Initial resistance from employees fearing job loss</li>
                <li>• Complex legacy system integration requirements</li>
                <li>• Data quality and governance issues</li>
                <li>• Regulatory uncertainty around AI in financial services</li>
                <li>• Need to balance innovation with risk management</li>
                <li>• Cultural transformation from traditional to AI-first mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join industry leaders achieving $100M-$500M+ ROI through AI transformation. 
            Schedule a consultation with our financial services AI experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              📧 Get Custom Transformation Plan
            </a>
          </div>
          <div className="mt-8 text-sm opacity-90">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-hyperautomation-enterprise-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  AI Hyperautomation 2026
                </h4>
                <p className="text-gray-600 text-sm">
                  Achieve 500% productivity gains with enterprise hyperautomation.
                </p>
              </div>
            </Link>
            <Link href="/blog/ai-digital-transformation-roi-playbook-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  Digital Transformation ROI Playbook
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete framework for $500M+ value creation through AI.
                </p>
              </div>
            </Link>
            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  More Success Stories
                </h4>
                <p className="text-gray-600 text-sm">
                  Explore more AI transformation case studies and results.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/case-studies" className="text-green-600 hover:text-green-700 font-semibold">
          ← Back to All Case Studies
        </Link>
      </div>
    </div>
  );
}