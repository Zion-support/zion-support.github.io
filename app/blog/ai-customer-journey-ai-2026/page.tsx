import React from 'react';
import { Link } from 'react-router-dom';


export default function AICustomerJourney2026Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6">
            <span className="text-2xl mr-2">🛤️</span>
            NEW 2026 GUIDE
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Customer Journey 2026
          </h1>
          <p className="text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
            Complete guide to AI-powered customer journey optimization delivering 
            250% conversion increase, 90% satisfaction improvement, and seamless experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Implementation Help
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
              <p className="text-gray-700 font-semibold">Conversion Increase</p>
              <p className="text-sm text-gray-600 mt-2">AI-optimized journeys</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-gray-700 font-semibold">Satisfaction Improvement</p>
              <p className="text-sm text-gray-600 mt-2">Customer experience</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <p className="text-gray-700 font-semibold">Time Reduction</p>
              <p className="text-sm text-gray-600 mt-2">Journey completion</p>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.5M</div>
              <p className="text-gray-700 font-semibold">Revenue Impact</p>
              <p className="text-sm text-gray-600 mt-2">Annual increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are AI Customer Journeys?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI Customer Journeys are intelligent, personalized experiences that adapt in real-time 
              based on customer behavior, preferences, and context. They use machine learning to 
              optimize every touchpoint and create seamless, engaging interactions.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Components of AI Customer Journeys</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-3">Journey Mapping</h4>
                <p className="text-gray-700">
                  AI-powered analysis of customer touchpoints, pain points, and opportunities 
                  for optimization across all channels and interactions.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Real-time Personalization</h4>
                <p className="text-gray-700">
                  Dynamic content, recommendations, and experiences that adapt instantly 
                  based on customer behavior and preferences.
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-purple-900 mb-3">Predictive Analytics</h4>
                <p className="text-gray-700">
                  Machine learning models that predict customer needs, preferences, 
                  and next-best actions to optimize engagement.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-orange-900 mb-3">Omnichannel Orchestration</h4>
                <p className="text-gray-700">
                  Seamless coordination across web, mobile, email, social media, 
                  and offline channels for consistent experiences.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Framework</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Customer Data Foundation</h4>
                  <p className="text-gray-600">
                    Establish unified customer profiles, behavioral tracking, and real-time 
                    data collection across all touchpoints and channels.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Journey Analytics & Mapping</h4>
                  <p className="text-gray-600">
                    Analyze existing customer journeys, identify friction points, and map 
                    optimal paths for different customer segments and scenarios.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">AI Model Development</h4>
                  <p className="text-gray-600">
                    Build machine learning models for personalization, next-best-action 
                    prediction, and journey optimization recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Experience Delivery</h4>
                  <p className="text-gray-600">
                    Implement real-time personalization engines, content management systems, 
                    and omnichannel orchestration platforms.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Journey Stages</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">1</div>
                  <h4 className="font-bold text-gray-900 mb-2">Awareness</h4>
                  <p className="text-sm text-gray-600">AI-powered content discovery and targeted advertising</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">2</div>
                  <h4 className="font-bold text-gray-900 mb-2">Consideration</h4>
                  <p className="text-sm text-gray-600">Personalized product recommendations and comparisons</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">3</div>
                  <h4 className="font-bold text-gray-900 mb-2">Purchase</h4>
                  <p className="text-sm text-gray-600">Streamlined checkout with dynamic pricing and offers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">4</div>
                  <h4 className="font-bold text-gray-900 mb-2">Onboarding</h4>
                  <p className="text-sm text-gray-600">Guided setup with contextual help and tutorials</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">5</div>
                  <h4 className="font-bold text-gray-900 mb-2">Retention</h4>
                  <p className="text-sm text-gray-600">Proactive engagement and loyalty program optimization</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Analytics & ML</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer Journey Analytics</li>
                  <li>• Real-time Personalization</li>
                  <li>• Predictive Modeling</li>
                  <li>• A/B Testing Platforms</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Experience Delivery</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CDP Platforms</li>
                  <li>• Marketing Automation</li>
                  <li>• Content Management</li>
                  <li>• Omnichannel Orchestration</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Data & Integration</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer Data Platforms</li>
                  <li>• Real-time Data Streaming</li>
                  <li>• API Management</li>
                  <li>• Identity Resolution</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expected Business Outcomes</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700"><strong>250% increase</strong> in conversion rates</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700"><strong>90% improvement</strong> in customer satisfaction</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700"><strong>60% reduction</strong> in journey completion time</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700"><strong>$2.5M annual</strong> revenue impact</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700"><strong>40% increase</strong> in customer lifetime value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Optimize Your Customer Journeys?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how to implement AI-powered customer journey optimization 
            that delivers seamless experiences and drives significant business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}