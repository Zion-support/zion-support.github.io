import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, TrendingUp, Users, DollarSign, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailAIPersonalizationCase = () => {
  return (
    <>
      <Helmet>
        <title>$214M Revenue Lift: Global Retailer AI Personalization Success | Zion Tech Group</title>
        <meta
          name="description"
          content="How a Fortune 100 retailer achieved $214M revenue increase in 9 months through AI-powered personalization. Complete case study with implementation details."
        />
        <meta
          name="keywords"
          content="AI personalization, retail AI, customer experience, machine learning, revenue growth, case study"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies/ai-2025-oct-retail-ai-personalization-success-story" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-6 py-20">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                💼 Case Study
              </span>
              <span className="text-zion-slate-light">October 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Global Retailer Achieved $214M Revenue Lift with AI Personalization
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed">
              Fortune 100 retail chain transformed customer experience and revenue through 
              advanced AI personalization. Complete implementation story with metrics, challenges, and lessons learned.
            </p>
          </div>

          {/* Key Results Banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-400/30">
              <h2 className="text-2xl font-bold text-white mb-6">Results After 9 Months</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$214M</div>
                  <div className="text-zion-slate-light">Revenue increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">47%</div>
                  <div className="text-zion-slate-light">Conversion rate lift</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">62%</div>
                  <div className="text-zion-slate-light">Customer engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
                  <div className="text-zion-slate-light">AOV increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <ShoppingBag className="w-8 h-8 text-blue-400" />
                  Client Overview
                </h2>
                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-400/30 mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Industry</div>
                      <div className="text-white font-semibold">Specialty Retail</div>
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Size</div>
                      <div className="text-white font-semibold">$18B annual revenue</div>
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Locations</div>
                      <div className="text-white font-semibold">2,400+ stores, 40 countries</div>
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Customers</div>
                      <div className="text-white font-semibold">85M+ loyalty members</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-red-400" />
                  The Challenge
                </h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Despite strong brand recognition and 85M loyalty members, the client faced critical challenges:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-red-900/20 rounded-lg p-6 border-l-4 border-red-400">
                    <h3 className="text-xl font-bold text-white mb-2">Generic Experience at Scale</h3>
                    <p className="text-zion-slate-light">
                      All 85M customers received identical product recommendations and marketing messages, 
                      regardless of preferences, purchase history, or behavior patterns.
                    </p>
                  </div>
                  <div className="bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-400">
                    <h3 className="text-xl font-bold text-white mb-2">Declining Engagement</h3>
                    <p className="text-zion-slate-light">
                      Email open rates dropped 28% year-over-year. Mobile app engagement down 35%. 
                      Customers increasingly ignored communications.
                    </p>
                  </div>
                  <div className="bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-400">
                    <h3 className="text-xl font-bold text-white mb-2">Conversion Plateau</h3>
                    <p className="text-zion-slate-light">
                      Online conversion rate stuck at 2.1% for 18 months despite significant marketing spend. 
                      Cart abandonment at 73%.
                    </p>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-400">
                    <h3 className="text-xl font-bold text-white mb-2">Legacy Technology</h3>
                    <p className="text-zion-slate-light">
                      15-year-old recommendation engine couldn't process real-time behavioral data or 
                      leverage modern ML techniques.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  The Solution: AI-Powered Personalization Platform
                </h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Zion Tech Group designed and deployed a comprehensive AI personalization platform 
                  with three core capabilities:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-400/30">
                    <h3 className="text-2xl font-bold text-white mb-4">1. Real-Time Behavioral Intelligence</h3>
                    <p className="text-zion-slate-light mb-4">
                      ML models process 500+ customer signals in real-time to understand intent, preferences, and context:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          Browsing patterns, search queries, and category exploration
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          Purchase history across all channels (online, in-store, mobile)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          Engagement with emails, app notifications, and ads
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          Similar customer cohort behavior patterns
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-2xl font-bold text-white mb-4">2. Hyper-Personalized Experiences</h3>
                    <p className="text-zion-slate-light mb-4">
                      Dynamic content generation delivering unique experiences for each customer:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-purple-400 font-semibold mb-2">Product Recommendations</div>
                        <div className="text-sm text-zion-slate-light">
                          AI selects from 150,000+ SKUs based on style preferences, size history, and 
                          current trends
                        </div>
                      </div>
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-pink-400 font-semibold mb-2">Dynamic Pricing</div>
                        <div className="text-sm text-zion-slate-light">
                          Personalized promotions optimized for individual price sensitivity and propensity to buy
                        </div>
                      </div>
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-blue-400 font-semibold mb-2">Email Campaigns</div>
                        <div className="text-sm text-zion-slate-light">
                          Subject lines, product selection, and send times customized per recipient
                        </div>
                      </div>
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-cyan-400 font-semibold mb-2">Homepage Layout</div>
                        <div className="text-sm text-zion-slate-light">
                          Hero images, category order, and featured products adapt to individual preferences
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-400/30">
                    <h3 className="text-2xl font-bold text-white mb-4">3. Predictive Customer Journey Optimization</h3>
                    <p className="text-zion-slate-light mb-4">
                      AI predicts next-best-action at every touchpoint to maximize lifetime value:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          <strong className="text-white">Cart abandonment recovery:</strong> Triggered messages 
                          with personalized incentives (24% recovery rate)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          <strong className="text-white">Churn prediction:</strong> Identify at-risk customers 
                          30 days before expected churn
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zion-slate-light">
                          <strong className="text-white">Upsell optimization:</strong> Recommend complementary 
                          products with 73% acceptance rate
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  Implementation Timeline
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold border border-blue-400/30">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Discovery & Data Integration (Month 1-2)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Unified customer data from 12 systems (POS, CRM, web analytics, mobile app, email platform).
                      </p>
                      <div className="text-sm text-cyan-400 font-semibold">
                        Result: 85M customer profiles with 24-month history
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold border border-purple-400/30">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Model Development & Training (Month 3-4)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Built and trained recommendation, propensity, and churn prediction models using historical data.
                      </p>
                      <div className="text-sm text-purple-400 font-semibold">
                        Result: 85% accuracy on holdout test set
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold border border-green-400/30">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Pilot Launch (Month 5-6)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Deployed to 10% of traffic for email and web recommendations. A/B tested against control group.
                      </p>
                      <div className="text-sm text-green-400 font-semibold">
                        Result: 42% lift in conversion, validated for full rollout
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold border border-yellow-400/30">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Full Deployment (Month 7-9)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Scaled to 100% of customers across all channels. Continuous model refinement and optimization.
                      </p>
                      <div className="text-sm text-yellow-400 font-semibold">
                        Result: Full performance metrics achieved
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  Business Impact
                </h2>

                <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 mb-8 border border-green-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">9-Month Results</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-4">Revenue & Conversion</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Total revenue increase</span>
                          <span className="text-white font-bold">$214M</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Conversion rate</span>
                          <span className="text-white font-bold">2.1% → 3.1% (+47%)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Average order value</span>
                          <span className="text-white font-bold">$87 → $117 (+35%)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Cart abandonment</span>
                          <span className="text-white font-bold">73% → 51% (-30%)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-cyan-400 mb-4">Engagement & Retention</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Email open rate</span>
                          <span className="text-white font-bold">18% → 34% (+89%)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Mobile app sessions</span>
                          <span className="text-white font-bold">+62%</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Customer churn</span>
                          <span className="text-white font-bold">-23%</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Repeat purchase rate</span>
                          <span className="text-white font-bold">+41%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-green-900/40 rounded-lg border border-green-400/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-400 mb-1">ROI: 847%</div>
                        <div className="text-zion-slate-light">Implementation cost: $2.8M</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">6.2 months</div>
                        <div className="text-zion-slate-light">Payback period</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  Customer Feedback
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-400/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-bold mb-1">Sarah M., Verified Customer</div>
                        <div className="flex text-yellow-400 mb-2">★★★★★</div>
                        <p className="text-zion-slate-light italic">
                          "It's like they read my mind! The product recommendations are spot-on, and I actually 
                          look forward to their emails now. Found so many items I love that I never would have discovered."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-bold mb-1">Marcus T., Loyalty Member (8 years)</div>
                        <div className="flex text-yellow-400 mb-2">★★★★★</div>
                        <p className="text-zion-slate-light italic">
                          "Been shopping here for years, but the app experience now is incredible. It's like having 
                          a personal shopper who knows exactly what I want."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Key Success Factors</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Data unification:</strong> Consolidated 12 disparate systems 
                      to create single customer view
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Phased rollout:</strong> De-risked deployment with controlled 
                      pilot before full scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Continuous optimization:</strong> Weekly model retraining with 
                      fresh data improved performance 15% post-launch
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Executive sponsorship:</strong> CEO-led initiative ensured 
                      cross-functional alignment and resources
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-2 border-green-400/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Customer Experience?
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Let's discuss how AI personalization can drive similar results for your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Schedule Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default RetailAIPersonalizationCase;
