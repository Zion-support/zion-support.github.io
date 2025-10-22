import React from 'react'
import SEOHead from '../components/SEOHead'
const AILeadScoringProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Lead Scoring Pro - Intelligent Lead Qualification Solutions"
        description="Transform your sales process with our AI lead scoring system. Analyze customer behavior and predict conversion probability with machine learning."
        keywords="AI lead scoring, lead qualification, sales optimization, conversion prediction, marketing automation, lead analysis"
        canonicalUrl="https://ziontechgroup.com/ai-lead-scoring-pro"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion AI Lead Scoring Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Intelligent lead scoring system that uses AI to analyze customer behavior and predict conversion probability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact?service=ai-lead-scoring-pro" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Get Started
                </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Lead Scoring Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI lead scoring system combines behavioral analysis with predictive modeling to identify your best prospects
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Behavioral Analysis</h3>
              <p className="text-gray-600">Track and analyze customer interactions across all touchpoints to understand engagement patterns</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Scoring</h3>
              <p className="text-gray-600">Use machine learning to predict conversion probability and identify high-value leads</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Qualification</h3>
              <p className="text-gray-600">Automatically qualify leads based on multiple criteria and behavioral indicators</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversion Prediction</h3>
              <p className="text-gray-600">Predict which leads are most likely to convert and when they'll be ready to buy</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing CRM and marketing automation platforms</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive analytics and insights into lead quality and conversion performance</div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your lead scoring needs</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">$149<span className="text-lg text-gray-500">/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 5,000 leads/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic scoring models</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> CRM integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</ul>
                <a href="/contact?service=ai-lead-scoring-pro&plan=basic" className="w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Get Started
                </div>

              <div className="bg-indigo-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-indigo-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">$399<span className="text-lg opacity-75">/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 25,000 leads/month</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Advanced scoring models</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Custom scoring rules</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> A/B testing</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Analytics dashboard</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</ul>
                <a href="/contact?service=ai-lead-scoring-pro&plan=pro" className="w-full bg-white text-indigo-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">$999<span className="text-lg text-gray-500">/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited leads</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All features included</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom model training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automated workflows</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</ul>
                <a href="/contact?service=ai-lead-scoring-pro&plan=enterprise" className="w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Contact Sales
                </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-lg text-gray-600">See how our AI lead scoring can transform your sales process</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sales Optimization</h3>
                <p className="text-gray-600">Focus your sales team on the highest-quality leads and improve conversion rates.</div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Automation</h3>
                <p className="text-gray-600">Automatically segment leads and trigger personalized marketing campaigns based on scores.</div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Nurturing</h3>
                <p className="text-gray-600">Identify leads that need nurturing and deliver targeted content at the right time.</div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Acquisition</h3>
                <p className="text-gray-600">Find new customers who match your ideal customer profile and are likely to convert.</div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Forecasting</h3>
                <p className="text-gray-600">Predict future revenue based on lead quality and conversion probability.</div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Optimization</h3>
                <p className="text-gray-600">Optimize your marketing campaigns by focusing on channels that generate high-quality leads.</div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using our AI lead scoring to improve conversion rates and sales performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-lead-scoring-pro" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call +1 302 464 0950
              </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</div>
      </>
  )
  }
export default AILeadScoringProPage
                                                                                              </p>
                                                                                            </div>
                                                                                          </div>
                                                                                        </p>
                                                                                      </p>
                                                                                    </p>
                                                                                  </p>
                                                                                </p>
                                                                              </p>
                                                                            </p>
                                                                          </div>
                                                                        </div>
                                                                      </li>
                                                                    </li>
                                                                  </li>
                                                                </li>
                                                              </li>
                                                            </li>
                                                          </ul>
                                                        </a>
                                                      </li>
                                                    </li>
                                                  </li>
                                                </li>
                                              </li>
                                            </li>
                                          </ul>
                                        </a>
                                      </li>
                                    </li>
                                  </li>
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </p>
                    </p>
                  </p>
                </p>
              </p>
            </p>
          </div>
        </p>
      </div>
    </div>
  </div>
</div>