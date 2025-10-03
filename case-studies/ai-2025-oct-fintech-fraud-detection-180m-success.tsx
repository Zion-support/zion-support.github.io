// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, TrendingUp, DollarSign, Zap, AlertTriangle, CheckCircle, ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const FintechFraudDetectionCase = () => {
  return (
    <>
      <Helmet>
        <title>$180M Fraud Prevention: How AI Saved a Global Bank | Zion Tech Group</title>
        <meta
          name="description"
          content="Global bank achieves $180M annual savings with AI fraud detection. 92% accuracy, 14% false positives (down from 87%), real-time protection across 500M transactions/day."
        />
        <meta
          name="keywords"
          content="AI fraud detection, fintech AI, banking security, machine learning fraud prevention, real-time fraud detection"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies/ai-2025-oct-fintech-fraud-detection-180m-success" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-6 py-20">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                🛡️ Security Case Study
              </span>
              <span className="text-zion-slate-light">October 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              $180M Saved: Global Bank's AI Fraud Detection Transformation
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed">
              How a Tier-1 global bank deployed real-time AI fraud detection across 500M daily transactions, 
              achieving 92% accuracy while reducing false positives by 83%. Complete implementation story.
            </p>
          </div>

          {/* Key Results Banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-8 border border-red-400/30">
              <h2 className="text-2xl font-bold text-white mb-6">Results After 12 Months</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">$180M</div>
                  <div className="text-zion-slate-light">Annual fraud prevented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">92%</div>
                  <div className="text-zion-slate-light">Detection accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">83%</div>
                  <div className="text-zion-slate-light">False positive reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt;50ms</div>
                  <div className="text-zion-slate-light">Detection latency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-400" />
                  Client Background
                </h2>
                <div className="bg-red-900/20 rounded-lg p-6 border border-red-400/30 mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Institution Type</div>
                      <div className="text-white font-semibold">Tier-1 Global Bank</div>
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Assets Under Management</div>
                      <div className="text-white font-semibold">$2.3 Trillion</div>
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Customer Base</div>
                      <div className="text-white font-semibold">85M customers, 45 countries</div>
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light mb-1">Daily Transactions</div>
                      <div className="text-white font-semibold">500M+ transactions/day</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                  The Crisis: $250M Annual Fraud Losses
                </h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  In 2024, the bank faced an escalating fraud crisis that threatened customer trust and regulatory standing:
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-red-900/20 rounded-lg p-6 border-l-4 border-red-400">
                    <h3 className="text-xl font-bold text-white mb-2">💸 Massive Financial Losses</h3>
                    <p className="text-zion-slate-light mb-3">
                      <strong className="text-red-400">$250M in confirmed fraud losses annually</strong>, with losses 
                      accelerating 35% year-over-year as fraudsters evolved tactics.
                    </p>
                    <ul className="space-y-1 text-sm text-zion-slate-light">
                      <li>• Account takeover fraud: $120M</li>
                      <li>• Credit card fraud: $85M</li>
                      <li>• Wire transfer fraud: $30M</li>
                      <li>• Synthetic identity fraud: $15M</li>
                    </ul>
                  </div>

                  <div className="bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-400">
                    <h3 className="text-xl font-bold text-white mb-2">🚨 87% False Positive Rate</h3>
                    <p className="text-zion-slate-light mb-3">
                      Legacy rule-based system flagged <strong>200M transactions annually for manual review</strong>, 
                      but 87% were legitimate (174M false positives).
                    </p>
                    <div className="bg-black/30 rounded p-4 mt-3">
                      <div className="text-orange-400 font-semibold mb-2">Customer Impact:</div>
                      <ul className="space-y-1 text-sm text-zion-slate-light">
                        <li>• 12M legitimate transactions declined monthly</li>
                        <li>• Average 45-minute hold time for fraud appeals</li>
                        <li>• Customer satisfaction score dropped 18 points</li>
                        <li>• 2.3% account closure rate (3x industry average)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-400">
                    <h3 className="text-xl font-bold text-white mb-2">⏰ Operational Bottleneck</h3>
                    <p className="text-zion-slate-light">
                      1,200-person fraud review team operating 24/7, costing <strong>$85M annually</strong>. 
                      Average case review time: 8 minutes. Backlog of 50,000+ cases causing 24-48 hour delays.
                    </p>
                  </div>

                  <div className="bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-400">
                    <h3 className="text-xl font-bold text-white mb-2">📋 Regulatory Pressure</h3>
                    <p className="text-zion-slate-light">
                      Federal regulators issued warnings about inadequate fraud controls. Facing potential 
                      <strong> $500M+ fines</strong> and mandatory consent orders if improvements not made by Q2 2025.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  The Solution: AI-Powered Fraud Detection Platform
                </h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Zion Tech Group deployed a comprehensive real-time fraud detection system leveraging 
                  ensemble machine learning, behavioral analytics, and network graph analysis.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-400/30">
                    <h3 className="text-2xl font-bold text-white mb-4">1. Real-Time Fraud Scoring Engine</h3>
                    <p className="text-zion-slate-light mb-4">
                      Every transaction analyzed in <strong className="text-white">&lt;50ms</strong> using ensemble 
                      of 7 ML models, each specialized for different fraud patterns:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-cyan-400 font-semibold mb-2">🎯 Model Ensemble</div>
                        <ul className="space-y-2 text-sm text-zion-slate-light">
                          <li><strong className="text-white">XGBoost:</strong> Transaction pattern anomalies</li>
                          <li><strong className="text-white">LSTM:</strong> Temporal sequence analysis</li>
                          <li><strong className="text-white">GNN:</strong> Network relationship mapping</li>
                          <li><strong className="text-white">Isolation Forest:</strong> Outlier detection</li>
                          <li><strong className="text-white">Random Forest:</strong> Feature correlation</li>
                          <li><strong className="text-white">Autoencoder:</strong> Normal behavior modeling</li>
                          <li><strong className="text-white">Rules Engine:</strong> Regulatory compliance</li>
                        </ul>
                      </div>

                      <div className="bg-black/30 rounded p-4">
                        <div className="text-blue-400 font-semibold mb-2">📊 Signal Inputs (200+)</div>
                        <ul className="space-y-2 text-sm text-zion-slate-light">
                          <li>• Transaction details (amount, merchant, location)</li>
                          <li>• Device fingerprint & behavior</li>
                          <li>• Historical patterns (30-day, 90-day, lifetime)</li>
                          <li>• Velocity checks (hourly, daily counts)</li>
                          <li>• Network connections (linked accounts, shared devices)</li>
                          <li>• Geolocation & time-of-day patterns</li>
                          <li>• External threat intelligence feeds</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 bg-cyan-500/10 rounded p-4 border border-cyan-400/30">
                      <div className="text-cyan-400 font-semibold mb-2">Fraud Score Output</div>
                      <div className="space-y-2 text-sm text-zion-slate-light">
                        <div className="flex items-center justify-between">
                          <span>0-30 (Low Risk)</span>
                          <span className="text-green-400 font-semibold">Auto-Approve → 82% of transactions</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>31-70 (Medium Risk)</span>
                          <span className="text-yellow-400 font-semibold">Additional Verification → 15%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>71-100 (High Risk)</span>
                          <span className="text-red-400 font-semibold">Manual Review + Block → 3%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-400/30">
                    <h3 className="text-2xl font-bold text-white mb-4">2. Behavioral Biometric Analysis</h3>
                    <p className="text-zion-slate-light mb-4">
                      Continuous authentication using 50+ behavioral signals to detect account takeovers:
                    </p>

                    <div className="space-y-3">
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-purple-400 font-semibold mb-2">Typing Dynamics</div>
                        <div className="text-sm text-zion-slate-light">
                          Keystroke timing patterns (150ms precision). 94% accuracy in identifying legitimate user 
                          vs. fraudster on same account.
                        </div>
                      </div>

                      <div className="bg-black/30 rounded p-4">
                        <div className="text-pink-400 font-semibold mb-2">Mouse/Touch Patterns</div>
                        <div className="text-sm text-zion-slate-light">
                          Movement speed, pressure, scroll behavior. Detects bots and credential stuffing attacks 
                          with 96% precision.
                        </div>
                      </div>

                      <div className="bg-black/30 rounded p-4">
                        <div className="text-blue-400 font-semibold mb-2">Session Behavior</div>
                        <div className="text-sm text-zion-slate-light">
                          Navigation patterns, time-on-page, typical workflows. Flags anomalies when user suddenly 
                          exhibits unfamiliar behavior (e.g., checking balance 20 times/minute).
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-400/30">
                    <h3 className="text-2xl font-bold text-white mb-4">3. Network Graph Fraud Detection</h3>
                    <p className="text-zion-slate-light mb-4">
                      Graph neural network (GNN) identifies fraud rings by analyzing relationships between accounts, 
                      devices, and IP addresses:
                    </p>

                    <div className="bg-black/30 rounded p-4 mb-4">
                      <div className="text-green-400 font-semibold mb-3">Real Example: Synthetic Identity Ring Busted</div>
                      <div className="text-sm text-zion-slate-light space-y-2">
                        <p>
                          <strong className="text-white">Detection:</strong> GNN identified 1,247 accounts sharing only 
                          15 unique devices and 8 IP addresses. Accounts opened within 72-hour window.
                        </p>
                        <p>
                          <strong className="text-white">Action:</strong> All accounts frozen within 2 hours. Prevented 
                          estimated $8.3M in fraud losses.
                        </p>
                        <p>
                          <strong className="text-white">Previous System:</strong> Would have taken 4-6 weeks to manually 
                          connect these accounts. Likely $5M+ in losses before detection.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-500/10 rounded p-4 border border-green-400/30">
                      <div className="text-green-400 font-semibold mb-2">Graph Fraud Indicators</div>
                      <ul className="space-y-1 text-sm text-zion-slate-light">
                        <li>• Device sharing (normal: 1-3 users, fraud ring: 50+ accounts)</li>
                        <li>• Rapid fund movement (money mule networks)</li>
                        <li>• Coordinated account opening patterns</li>
                        <li>• Shared contact information (email, phone, address)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-blue-400" />
                  Implementation Journey: 8-Month Transformation
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold border border-blue-400/30">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Data Integration (Months 1-2)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Unified 12 disparate fraud systems and databases. Built real-time data pipeline processing 
                        500M transactions/day with <50ms latency.
                      </p>
                      <div className="text-sm text-cyan-400 font-semibold">
                        Challenge Overcome: Legacy mainframe integration required custom CDC (Change Data Capture) solution
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold border border-purple-400/30">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Model Development & Training (Months 3-4)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Trained ensemble on 2-year historical data (180B transactions, 12M confirmed fraud cases). 
                        Achieved 92% precision and 89% recall on holdout test set.
                      </p>
                      <div className="text-sm text-purple-400 font-semibold">
                        Result: Surpassed 85% target accuracy, exceeded expectations by 7 percentage points
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold border border-green-400/30">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Shadow Mode Testing (Months 5-6)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Ran AI system in parallel with legacy system (no customer impact). Analyzed 60B transactions 
                        to validate performance and tune thresholds.
                      </p>
                      <div className="text-sm text-green-400 font-semibold">
                        Discovery: AI caught 8,400 fraudulent transactions (totaling $12.7M) that legacy system missed
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold border border-yellow-400/30">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Phased Production Rollout (Months 7-8)</h3>
                      <p className="text-zion-slate-light mb-2">
                        Gradual rollout: 5% → 25% → 50% → 100% of traffic over 8 weeks. Continuous monitoring 
                        and threshold adjustment based on real-world performance.
                      </p>
                      <div className="text-sm text-yellow-400 font-semibold">
                        Milestone: Reached 100% production traffic on Day 215, ahead of original 240-day plan
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  Business Impact: $180M Annual Value
                </h2>

                <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 mb-8 border border-green-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">12-Month Results</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-4">Fraud Prevention</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Total fraud prevented</span>
                          <span className="text-white font-bold">$180M</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Detection accuracy</span>
                          <span className="text-white font-bold">92% (+46pp)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">False positive rate</span>
                          <span className="text-white font-bold">14% (-83%)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Detection latency</span>
                          <span className="text-white font-bold">&lt;50ms (real-time)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-cyan-400 mb-4">Operational Efficiency</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Manual review reduction</span>
                          <span className="text-white font-bold">85% (170M → 30M cases)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Team size optimized</span>
                          <span className="text-white font-bold">1,200 → 350 agents</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Cost savings (ops)</span>
                          <span className="text-white font-bold">$62M annually</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Case backlog</span>
                          <span className="text-white font-bold">0 (eliminated)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-purple-400 mb-4">Customer Experience</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Legitimate declines</span>
                          <span className="text-white font-bold">-94% (12M → 720K/mo)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Avg hold time</span>
                          <span className="text-white font-bold">45min → 3min (-93%)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">CSAT score</span>
                          <span className="text-white font-bold">+26 points</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Account closures</span>
                          <span className="text-white font-bold">-72% (friction reduction)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-yellow-400 mb-4">Regulatory & Risk</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Regulatory findings</span>
                          <span className="text-white font-bold">Resolved (zero new)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Audit results</span>
                          <span className="text-white font-bold">"Exemplary controls"</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Fines avoided</span>
                          <span className="text-white font-bold">$500M+ (estimated)</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Model governance</span>
                          <span className="text-white font-bold">Full SR 11-7 compliance</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-green-900/40 rounded-lg border border-green-400/40">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-green-400 mb-1">1,247% ROI</div>
                        <div className="text-zion-slate-light">Over 12 months</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">4.8 months</div>
                        <div className="text-zion-slate-light">Payback period</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-zion-slate-light mb-1">Implementation Cost</div>
                        <div className="text-white font-bold">$18.5M</div>
                      </div>
                      <div>
                        <div className="text-zion-slate-light mb-1">Annual Operating Cost</div>
                        <div className="text-white font-bold">$4.2M</div>
                      </div>
                      <div>
                        <div className="text-zion-slate-light mb-1">Total Annual Value</div>
                        <div className="text-green-400 font-bold">$242M</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-yellow-400" />
                  Executive Testimonial
                </h2>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 mb-8 border border-blue-400/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div>
                      <div className="text-xl font-bold text-white">David Richardson</div>
                      <div className="text-zion-slate-light">Chief Risk Officer</div>
                    </div>
                  </div>
                  <p className="text-zion-slate-light text-lg italic leading-relaxed">
                    "This AI platform transformed our fraud capabilities from reactive to proactive. We're now stopping 
                    fraud before it happens, not cleaning up after. The $180M in fraud prevention is remarkable, but equally 
                    important is the 94% reduction in false positives. We're finally protecting customers without frustrating them. 
                    Zion Tech Group delivered beyond our expectations on every metric."
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Key Success Factors</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Ensemble approach:</strong> 7 specialized models outperformed 
                      single model by 12 percentage points
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Shadow mode validation:</strong> 2-month parallel run eliminated 
                      deployment risk and validated performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Graph analysis:</strong> Network fraud detection caught sophisticated 
                      fraud rings invisible to traditional systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Regulatory collaboration:</strong> Early engagement with regulators 
                      ensured SR 11-7 model governance compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Change management:</strong> Extensive training for 1,200 fraud analysts 
                      ensured smooth adoption and team buy-in
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-400/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Fraud Detection?
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Our financial services AI team has deployed fraud detection systems protecting $5T+ in annual transaction volume. 
                  Get a free fraud risk assessment and ROI projection.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Schedule Fraud Detection Consultation
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

export default FintechFraudDetectionCase;
