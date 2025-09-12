import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AICybersecurityTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Cybersecurity Transformation 2025: 99.8% Threat Detection Success | Zion Tech Group"
        description="Discover how a Fortune 500 company achieved 99.8% threat detection accuracy and 75% reduction in security incidents through AI-powered cybersecurity transformation."
        keywords="AI cybersecurity, threat detection, security transformation, AI security, cybersecurity case study, threat intelligence, security automation"
        url="/case-studies/ai-cybersecurity-transformation-2025"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Case Studies
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Jan 30, 2025</span>
            <span className="text-gray-400">•</span>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              Cybersecurity
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Cybersecurity Transformation: 99.8% Threat Detection Success
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            How a Fortune 500 financial services company transformed their cybersecurity operations using 
            AI-powered threat detection, achieving unprecedented security improvements and cost savings.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">✅ Success Story</span>
          </div>
        </div>

        {/* Key Results Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Transformation Results</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-sm opacity-90">Threat Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-sm opacity-90">Reduction in Security Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-90">Faster Incident Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$12M</div>
              <div className="text-sm opacity-90">Annual Cost Savings</div>
            </div>
          </div>
        </div>

        {/* Client Overview */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Industry:</strong> Financial Services</li>
                  <li><strong>Size:</strong> Fortune 500 Company</li>
                  <li><strong>Employees:</strong> 50,000+ globally</li>
                  <li><strong>Revenue:</strong> $15+ billion annually</li>
                  <li><strong>Geographic Presence:</strong> 40+ countries</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge Summary</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Increasingly sophisticated cyber threats</li>
                  <li>• High volume of false positive alerts</li>
                  <li>• Manual security processes and slow response times</li>
                  <li>• Growing security team costs and complexity</li>
                  <li>• Regulatory compliance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Cybersecurity Challenge</h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Growing Threat Landscape</h3>
              <p className="text-red-800 mb-4">
                The client was facing an increasingly sophisticated threat landscape with advanced persistent 
                threats (APTs), ransomware attacks, and zero-day exploits targeting financial institutions. 
                Traditional signature-based security tools were proving inadequate against these evolving threats.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold text-red-900">Threat Volume</div>
                  <div className="text-red-700">2M+ alerts per day</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold text-red-900">False Positives</div>
                  <div className="text-red-700">95% of alerts</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold text-red-900">Response Time</div>
                  <div className="text-red-700">72+ hours average</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Operational Challenges</h3>
              <p className="text-yellow-800 mb-4">
                The security operations center (SOC) was overwhelmed with manual processes, leading to 
                alert fatigue, missed threats, and inefficient resource utilization. The team needed 
                a way to scale their capabilities without proportionally increasing headcount.
              </p>
              <ul className="space-y-2 text-yellow-800">
                <li>• Security analysts spending 80% of time on false positives</li>
                <li>• Manual threat hunting processes taking days to complete</li>
                <li>• Inconsistent incident response procedures</li>
                <li>• Difficulty correlating threats across multiple data sources</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Business Impact</h3>
              <p className="text-blue-800 mb-4">
                The cybersecurity challenges were directly impacting business operations, regulatory 
                compliance, and customer trust. The client needed a solution that could provide 
                comprehensive protection while reducing operational costs.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Financial Impact</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• $2M+ annual security team costs</li>
                    <li>• $500K+ in security tool licensing</li>
                    <li>• Potential $50M+ breach costs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Operational Impact</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 24/7 SOC operations required</li>
                    <li>• Complex compliance reporting</li>
                    <li>• Customer trust and reputation risk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI-Powered Solution</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We implemented a comprehensive AI-powered cybersecurity platform that transformed the client's 
            security operations through intelligent threat detection, automated response, and predictive analytics.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Threat Detection Engine</h3>
              <p className="text-gray-600 mb-4">
                Machine learning algorithms trained on millions of threat indicators to identify 
                sophisticated attacks in real-time with 99.8% accuracy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Behavioral analysis and anomaly detection</li>
                <li>• Natural language processing for threat intelligence</li>
                <li>• Deep learning for pattern recognition</li>
                <li>• Continuous learning and adaptation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Response System</h3>
              <p className="text-gray-600 mb-4">
                Intelligent automation that responds to threats within seconds, containing 
                incidents and preventing lateral movement across the network.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated threat containment</li>
                <li>• Dynamic security policy updates</li>
                <li>• Incident escalation workflows</li>
                <li>• Integration with existing security tools</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics that predict potential threats and vulnerabilities, 
                enabling proactive security measures and risk mitigation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Threat intelligence correlation</li>
                <li>• Vulnerability prediction</li>
                <li>• Risk scoring and prioritization</li>
                <li>• Trend analysis and forecasting</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Operations Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive dashboard providing real-time visibility into security posture, 
                threat landscape, and operational metrics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time threat monitoring</li>
                <li>• Security metrics and KPIs</li>
                <li>• Compliance reporting</li>
                <li>• Executive-level insights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Process</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 1: Assessment & Planning (Weeks 1-4)</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Assessment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comprehensive security posture evaluation</li>
                    <li>• Threat landscape analysis</li>
                    <li>• Current tool inventory and gaps</li>
                    <li>• Process and workflow documentation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Solution Design</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI model selection and configuration</li>
                    <li>• Integration architecture planning</li>
                    <li>• Data pipeline design</li>
                    <li>• Security and compliance requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 2: Development & Testing (Weeks 5-12)</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Model Development</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Training data collection and preparation</li>
                    <li>• Machine learning model training</li>
                    <li>• Model validation and testing</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">System Integration</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• API development and integration</li>
                    <li>• Dashboard and UI development</li>
                    <li>• Security tool integration</li>
                    <li>• End-to-end testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 3: Deployment & Optimization (Weeks 13-16)</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Pilot Deployment</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Limited production deployment</li>
                    <li>• Performance monitoring</li>
                    <li>• User training and feedback</li>
                    <li>• System tuning and optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Full Rollout</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Organization-wide deployment</li>
                    <li>• Process integration</li>
                    <li>• Team training and certification</li>
                    <li>• Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Improvements</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Threat Detection</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Detection Accuracy</span>
                        <span className="font-semibold text-green-600">99.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">False Positive Rate</span>
                        <span className="font-semibold text-green-600">Reduced by 95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Threat Response Time</span>
                        <span className="font-semibold text-green-600">60% Faster</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Incident Management</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Security Incidents</span>
                        <span className="font-semibold text-green-600">Reduced by 75%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Mean Time to Detection</span>
                        <span className="font-semibold text-green-600">Reduced by 80%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Mean Time to Response</span>
                        <span className="font-semibold text-green-600">Reduced by 70%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Operational Efficiency</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Alert Processing Time</span>
                        <span className="font-semibold text-green-600">Reduced by 90%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Manual Tasks</span>
                        <span className="font-semibold text-green-600">Automated 85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Analyst Productivity</span>
                        <span className="font-semibold text-green-600">Increased by 200%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Annual Security Costs</span>
                        <span className="font-semibold text-green-600">Reduced by $12M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tool Consolidation</span>
                        <span className="font-semibold text-green-600">50% Reduction</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ROI</span>
                        <span className="font-semibold text-green-600">400% in Year 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$12M</div>
                  <div className="text-gray-600">Annual Cost Savings</div>
                  <div className="text-sm text-gray-500 mt-2">Through automation and efficiency gains</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">99.8%</div>
                  <div className="text-gray-600">Threat Detection Rate</div>
                  <div className="text-sm text-gray-500 mt-2">Industry-leading accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
                  <div className="text-gray-600">Reduction in Incidents</div>
                  <div className="text-sm text-gray-500 mt-2">Proactive threat prevention</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Success Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Clear Objectives</h3>
                <p className="text-gray-600">
                  Defined specific, measurable goals for threat detection accuracy, response times, 
                  and cost reduction that aligned with business objectives.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stakeholder Buy-in</h3>
                <p className="text-gray-600">
                  Secured strong executive sponsorship and engaged security teams throughout 
                  the implementation process to ensure adoption and success.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Quality</h3>
                <p className="text-gray-600">
                  Invested in data quality and preparation to ensure AI models had access to 
                  clean, comprehensive, and representative training data.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Iterative Approach</h3>
                <p className="text-gray-600">
                  Used an agile implementation approach with regular feedback loops and 
                  continuous improvement to optimize system performance.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Training</h3>
                <p className="text-gray-600">
                  Provided comprehensive training for security analysts and IT teams to 
                  ensure they could effectively use and maintain the new AI systems.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security First</h3>
                <p className="text-gray-600">
                  Implemented robust security measures for the AI system itself, including 
                  model protection, data encryption, and access controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lessons Learned</h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Worked Well</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Phased implementation approach reduced risk</li>
                  <li>• Strong executive sponsorship ensured resources</li>
                  <li>• Comprehensive training improved adoption</li>
                  <li>• Regular performance monitoring enabled optimization</li>
                  <li>• Integration with existing tools minimized disruption</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges Overcome</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Initial resistance to AI automation</li>
                  <li>• Data quality and integration issues</li>
                  <li>• Performance tuning and optimization</li>
                  <li>• Change management and user adoption</li>
                  <li>• Balancing automation with human oversight</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Transforming Cybersecurity with AI</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              This case study demonstrates how AI can revolutionize cybersecurity operations, delivering 
              unprecedented threat detection accuracy while significantly reducing costs and improving 
              operational efficiency. The key to success lies in careful planning, stakeholder engagement, 
              and continuous optimization.
            </p>
            
            <div className="text-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-block"
              >
                Start Your AI Security Transformation
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Manufacturing Automation</h3>
                <p className="text-gray-600 text-sm mb-3">40% cost reduction through intelligent automation</p>
                <div className="text-xs text-gray-500">Manufacturing • Success Story</div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Sustainability Success</h3>
                <p className="text-gray-600 text-sm mb-3">60% energy reduction and carbon neutrality</p>
                <div className="text-xs text-gray-500">Sustainability • New</div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">AI Financial Services</h3>
                <p className="text-gray-600 text-sm mb-3">300% ROI through AI transformation</p>
                <div className="text-xs text-gray-500">Financial Services • Popular</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}