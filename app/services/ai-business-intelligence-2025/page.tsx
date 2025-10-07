import ArrowRight from 'next/link';
import { ArrowRight, Calculator, User } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Business Intelligence 2025: Advanced Analytics & Insights Platform',
  description: 'Transform your business with AI-powered business intelligence. Advanced analytics, predictive insights, and real-time dashboards for data-driven decision making.',
  keywords: 'AI business intelligence, business analytics, predictive analytics, data visualization, business insights, AI dashboards',
  openGraph: {
    title: 'AI Business Intelligence 2025: Advanced Analytics & Insights Platform',
    description: 'Transform your business with AI-powered business intelligence. Advanced analytics, predictive insights, and real-time dashboards.',
    type: 'website',
    url: 'https://ziontechgroup.com/services/ai-business-intelligence-2025',
    images: [
      {
        url: '/og-images/ai-business-intelligence-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Business Intelligence 2025 Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Intelligence 2025: Advanced Analytics & Insights Platform',
    description: 'Transform your business with AI-powered business intelligence. Advanced analytics, predictive insights, and real-time dashboards.',
    images: ['/og-images/ai-business-intelligence-2025.jpg'],
  },
};

export default function AIBusinessIntelligence2025() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <ArrowRight href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Services
          </ArrowRight>
          <span className="text-gray-400">|</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2025
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Business Intelligence 2025: Advanced Analytics & Insights Platform
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            Business Intelligence
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            Predictive Analytics
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            Data Visualization
          </span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
            Real-time Insights
          </span>
        </div>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          Transform your business with AI-powered business intelligence. Our advanced analytics platform delivers 
          predictive insights, real-time dashboards, and intelligent automation that drives 300% ROI and enables 
          data-driven decision making at scale.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose AI Business Intelligence?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Real-time</div>
            <div className="text-gray-600">Data Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
            <div className="text-gray-600">Faster Decisions</div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Advanced machine learning models that predict future trends, customer behavior, and business outcomes with 95% accuracy.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Revenue forecasting</li>
              <li>• Customer churn prediction</li>
              <li>• Market trend analysis</li>
              <li>• Risk assessment</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Dashboards</h3>
            <p className="text-gray-600 mb-4">
              Interactive dashboards that provide real-time insights into key business metrics and performance indicators.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Custom KPI tracking</li>
              <li>• Executive summaries</li>
              <li>• Department-specific views</li>
              <li>• Mobile-responsive design</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
            <p className="text-gray-600 mb-4">
              Intelligent insights and recommendations generated automatically from your data to guide strategic decisions.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Automated anomaly detection</li>
              <li>• Smart recommendations</li>
              <li>• Pattern recognition</li>
              <li>• Natural language queries</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Reporting</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive reporting suite with automated report generation and customizable templates for all stakeholders.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Automated report scheduling</li>
              <li>• Custom report builder</li>
              <li>• Multi-format export</li>
              <li>• Collaborative features</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integration</h3>
            <p className="text-gray-600 mb-4">
              Seamless integration with existing systems and data sources to create a unified view of your business.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 200+ pre-built connectors</li>
              <li>• Real-time data sync</li>
              <li>• Data quality management</li>
              <li>• Cloud and on-premise support</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Compliance</h3>
            <p className="text-gray-600 mb-4">
              Enterprise-grade security with compliance support for GDPR, HIPAA, SOX, and other regulatory requirements.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• End-to-end encryption</li>
              <li>• Role-based access control</li>
              <li>• Audit trails</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Use Cases</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sales & Marketing</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Lead scoring and qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Customer lifetime value prediction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Campaign performance optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Market segmentation analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Churn prediction and prevention</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Operations & Finance</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Financial forecasting and budgeting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Supply chain optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Inventory management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Risk assessment and management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Performance monitoring</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Human Resources</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Employee performance analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Turnover prediction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Recruitment optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Skills gap analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Workforce planning</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Experience</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Customer satisfaction analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Support ticket prediction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Personalization insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Product recommendation engine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Customer journey optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$999<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">Perfect for small to medium businesses</p>
            </div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Up to 10 users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>5 data sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Basic dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Standard reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Email support</span>
              </li>
            </ul>
            <ArrowRight
              href="/contact"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
            >
              Get Started
            </ArrowRight>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-lg p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$2,999<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">Ideal for growing enterprises</p>
            </div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Up to 50 users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Unlimited data sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Predictive analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Custom reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>API access</span>
              </li>
            </ul>
            <ArrowRight
              href="/contact"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
            >
              Get Started
            </ArrowRight>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">Custom</div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Enterprise integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>White-label solution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced AI models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>On-premise deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Custom development</span>
              </li>
            </ul>
            <ArrowRight
              href="/contact"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
            >
              Contact Sales
            </ArrowRight>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Process</h2>
        
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Planning</h3>
              <p className="text-gray-600 mb-4">
                We analyze your current data infrastructure, identify key business objectives, and create a 
                comprehensive implementation roadmap tailored to your needs.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Data source assessment</li>
                <li>• Business requirements gathering</li>
                <li>• Success metrics definition</li>
                <li>• Timeline and resource planning</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-green-600">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integration & Setup</h3>
              <p className="text-gray-600 mb-4">
                Our team connects your data sources, cleans and prepares data, and sets up the AI business 
                intelligence platform with your specific configurations.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Data pipeline creation</li>
                <li>• Data quality optimization</li>
                <li>• Platform configuration</li>
                <li>• Security setup</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-purple-600">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard & Report Creation</h3>
              <p className="text-gray-600 mb-4">
                We build custom dashboards and reports based on your business needs, incorporating AI-powered 
                insights and predictive analytics.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Custom dashboard design</li>
                <li>• KPI definition and tracking</li>
                <li>• Report template creation</li>
                <li>• User training materials</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-orange-600">4</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Deployment</h3>
              <p className="text-gray-600 mb-4">
                We provide comprehensive training for your team and deploy the solution with ongoing support 
                to ensure successful adoption and maximum value.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• User training sessions</li>
                <li>• Administrator training</li>
                <li>• Go-live support</li>
                <li>• Ongoing optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
          <p className="text-xl mb-8 text-blue-100">
            See how much your organization can save with AI Business Intelligence
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.3M</div>
              <div className="text-blue-100">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6-12</div>
              <div className="text-blue-100">Months to Break Even</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <ArrowRight
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Get Your Custom ROI Analysis
            </ArrowRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business Intelligence?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let our AI experts help you unlock the power of data-driven decision making.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ArrowRight
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </ArrowRight>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ArrowRight href="/services/ai-data-analytics" className="group">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                AI Data Analytics
              </h3>
              <p className="text-gray-600">
                Transform data into actionable insights with predictive modeling and real-time dashboards.
              </p>
            </div>
          </ArrowRight>
          <ArrowRight href="/services/ai-workflow-automation" className="group">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                AI Workflow Automation
              </h3>
              <p className="text-gray-600">
                Automate business processes with intelligent workflow design and smart triggers.
              </p>
            </div>
          </ArrowRight>
        </div>
      </section>
    </div>
  );
}