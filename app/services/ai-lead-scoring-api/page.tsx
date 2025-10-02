import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  BarChart3,
  Users,
  Brain,
  Database,
  Shield,
  Cpu,
  Activity
} from 'lucide-react';

export const metadata = {
  title: 'AI Lead Scoring API | Zion Tech Group',
  description: 'Revolutionary AI-powered lead scoring API that automatically identifies and prioritizes high-value prospects with 95% accuracy.',
  keywords: 'AI lead scoring, lead scoring API, AI prospect analysis, lead qualification, sales automation, AI CRM integration',
  openGraph: {
    title: 'AI Lead Scoring API | Zion Tech Group',
    description: 'Revolutionary AI-powered lead scoring API that automatically identifies and prioritizes high-value prospects with 95% accuracy.',
    type: 'website',
    url: 'https://ziontechgroup.com/services/ai-lead-scoring-api',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Lead Scoring API - Zion Tech Group',
      },
    ],
  },
};

export default function AILeadScoringAPIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            AI Lead Scoring API
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Revolutionary AI-powered lead scoring API that automatically identifies and prioritizes 
            high-value prospects with 95% accuracy and real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get API Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50ms</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">10M+</div>
              <div className="text-gray-600">Leads Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your lead qualification process with advanced AI-powered scoring and analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms analyze lead behavior, demographics, and engagement patterns.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Behavioral pattern recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Demographic analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Intent prediction
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Scoring</h3>
              <p className="text-gray-600 mb-4">
                Get instant lead scores with sub-50ms response times for seamless integration into your workflow.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Instant API responses
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Webhook notifications
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Predict lead conversion probability and optimal engagement timing with advanced analytics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Conversion probability
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Optimal contact timing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Churn prediction
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate with your existing CRM, marketing automation, and data platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  CRM integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Marketing automation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Data warehouse sync
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Bank-grade security with SOC 2 compliance, encryption, and comprehensive audit trails.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  SOC 2 compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Audit logging
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive dashboards and reports to track performance and optimize your lead scoring strategy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance dashboards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Custom reporting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ROI tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple API Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our comprehensive API documentation and SDKs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="text-gray-400 mb-2">// Example API Call</div>
                <div>POST /api/v1/leads/score</div>
                <div className="text-gray-400 mt-4 mb-2">{'{'}</div>
                <div className="ml-4">"email": "john@company.com",</div>
                <div className="ml-4">"company": "Tech Corp",</div>
                <div className="ml-4">"industry": "Technology",</div>
                <div className="ml-4">"job_title": "CTO",</div>
                <div className="ml-4">"company_size": "100-500"</div>
                <div className="text-gray-400">{'}'}</div>
                <div className="text-gray-400 mt-4 mb-2">// Response</div>
                <div className="text-gray-400">{'{'}</div>
                <div className="ml-4 text-blue-400">"lead_score": 87,</div>
                <div className="ml-4 text-blue-400">"conversion_probability": 0.73,</div>
                <div className="ml-4 text-blue-400">"priority": "high",</div>
                <div className="ml-4 text-blue-400">"recommended_actions": [</div>
                <div className="ml-8 text-yellow-400">"schedule_demo",</div>
                <div className="ml-8 text-yellow-400">"send_case_study"</div>
                <div className="ml-4 text-blue-400">]</div>
                <div className="text-gray-400">{'}'}</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multiple SDKs</h3>
                  <p className="text-gray-600">
                    Native SDKs for Python, JavaScript, PHP, Ruby, and more for seamless integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
                  <p className="text-gray-600">
                    Get up and running in under 15 minutes with our comprehensive documentation and examples.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-gray-600">
                    Webhook support for real-time lead score updates and automated workflow triggers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">
                    24/7 technical support and dedicated customer success managers for enterprise clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies achieving unprecedented results with our AI lead scoring API
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">300% Increase in Conversion</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  "Our sales team's conversion rate increased by 300% after implementing Zion Tech Group's AI lead scoring API. The accuracy is incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-gray-600">VP of Sales, TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">95% Accuracy Rate</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  "The AI lead scoring is incredibly accurate. We've seen a 95% accuracy rate in predicting which leads will convert, saving us countless hours."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-gray-600">Marketing Director, InnovateCorp</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Key Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lead Qualification Time</span>
                  <span className="font-semibold text-green-600">-85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sales Conversion Rate</span>
                  <span className="font-semibold text-blue-600">+300%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROI Improvement</span>
                  <span className="font-semibold text-purple-600">+450%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">API Response Time</span>
                  <span className="font-semibold text-orange-600">50ms</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your lead volume and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  10,000 API calls/month
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic lead scoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard documentation
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$499<span className="text-lg text-blue-100">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  100,000 API calls/month
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI scoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Analytics dashboard
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited API calls
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  On-premise deployment
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lead Qualification?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies using our AI lead scoring API to achieve unprecedented sales results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}