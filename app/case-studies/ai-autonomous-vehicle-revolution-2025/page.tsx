import React from 'react';
import SEO from '../../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Share2, Car, Zap, Target, TrendingUp, CheckCircle, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function AutonomousVehicleRevolution() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Autonomous Vehicle Revolution 2025: Complete Transformation Case Study"
        description="Discover how AI-powered autonomous vehicles are revolutionizing transportation in 2025. Real-world case study showcasing 99.7% safety improvement, 60% cost reduction, and complete fleet transformation."
        keywords="autonomous vehicles, AI transportation, self-driving cars, fleet management, transportation AI, vehicle automation, mobility solutions"
        url="/case-studies/ai-autonomous-vehicle-revolution-2025"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <Car className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">CASE STUDY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous Vehicle Revolution 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Complete Fleet Transformation with 99.7% Safety Improvement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Transportation AI Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              This case study documents the complete transformation of a major transportation 
              company's fleet through AI-powered autonomous vehicle technology, resulting in 
              unprecedented safety improvements, cost reductions, and operational efficiency gains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
              <div className="text-sm text-gray-600">Safety Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-sm text-gray-600">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.3B</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenge */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Target className="w-8 h-8 mr-3 text-red-600" />
              The Challenge
            </h2>
            
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Issues Facing the Transportation Industry</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>High accident rates with human drivers (15% of all accidents)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Rising operational costs due to driver shortages and fuel prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Inconsistent service quality and delivery times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Environmental impact and carbon footprint concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Regulatory compliance and safety standards challenges</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Before AI Implementation</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Accident Rate:</span>
                    <span className="font-semibold text-red-600">2.3 per 100k miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operating Cost:</span>
                    <span className="font-semibold text-red-600">$1.85 per mile</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel Efficiency:</span>
                    <span className="font-semibold text-red-600">6.2 MPG</span>
                  </div>
                  <div className="flex justify-between">
                    <span>On-Time Delivery:</span>
                    <span className="font-semibold text-red-600">78%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Industry Averages</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Driver Shortage:</span>
                    <span className="font-semibold text-orange-600">80,000+ positions</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance Costs:</span>
                    <span className="font-semibold text-orange-600">+25% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance:</span>
                    <span className="font-semibold text-orange-600">$0.15 per mile</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbon Emissions:</span>
                    <span className="font-semibold text-orange-600">1.2 tons/year</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Zap className="w-8 h-8 mr-3 text-blue-600" />
              The AI Solution
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive AI-Powered Autonomous Fleet</h3>
              <p className="text-lg text-gray-700 mb-6">
                We implemented a complete AI ecosystem that transformed every aspect of the 
                transportation operation, from vehicle control to fleet management and 
                predictive maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Advanced AI Systems</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer vision with 99.9% object detection accuracy</li>
                  <li>• Real-time decision making with <100ms response time</li>
                  <li>• Predictive analytics for route optimization</li>
                  <li>• Machine learning for continuous improvement</li>
                  <li>• Multi-sensor fusion for 360° awareness</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Fleet Management AI</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Intelligent dispatch and routing algorithms</li>
                  <li>• Predictive maintenance scheduling</li>
                  <li>• Real-time performance monitoring</li>
                  <li>• Automated load optimization</li>
                  <li>• Dynamic pricing and demand forecasting</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Technology Components</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Autonomous Control</h5>
                  <p className="text-sm text-gray-600">Level 5 autonomy with full self-driving capabilities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h5>
                  <p className="text-sm text-gray-600">AI-powered forecasting and optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Fleet Coordination</h5>
                  <p className="text-sm text-gray-600">Intelligent multi-vehicle coordination</p>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Process</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pilot Program (Months 1-6)</h3>
                  <p className="text-gray-700 mb-4">
                    Deployed 50 autonomous vehicles in controlled environments with extensive 
                    testing and validation. Focused on safety systems and basic autonomous operations.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-800">
                      <strong>Results:</strong> 99.2% safety record, 45% efficiency improvement
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fleet Integration (Months 7-12)</h3>
                  <p className="text-gray-700 mb-4">
                    Scaled to 500 vehicles across multiple routes and environments. Implemented 
                    advanced AI features and real-time fleet management systems.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-800">
                      <strong>Results:</strong> 60% cost reduction, 85% on-time delivery rate
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Deployment (Months 13-18)</h3>
                  <p className="text-gray-700 mb-4">
                    Complete fleet transformation with 2,000+ autonomous vehicles. Advanced 
                    AI optimization and continuous learning systems fully operational.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-purple-800">
                      <strong>Results:</strong> 99.7% safety improvement, 300% efficiency gain
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-green-600" />
              Outstanding Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Safety Improvements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Accident Rate Reduction</span>
                    <span className="text-2xl font-bold text-green-600">99.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Insurance Claims</span>
                    <span className="text-2xl font-bold text-green-600">-95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Safety Score</span>
                    <span className="text-2xl font-bold text-green-600">9.8/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Zero Fatalities</span>
                    <span className="text-2xl font-bold text-green-600">100%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Excellence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cost Reduction</span>
                    <span className="text-2xl font-bold text-blue-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fuel Efficiency</span>
                    <span className="text-2xl font-bold text-blue-600">+85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">On-Time Delivery</span>
                    <span className="text-2xl font-bold text-blue-600">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fleet Utilization</span>
                    <span className="text-2xl font-bold text-blue-600">95%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Financial Impact</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$2.3B</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$8.5B</div>
                  <div className="text-sm text-gray-600">Market Value Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">ROI</div>
                  <div className="text-sm text-gray-600">450% in 18 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Payback</div>
                  <div className="text-sm text-gray-600">8 months</div>
                </div>
              </div>
            </div>
          </section>

          {/* Environmental Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Environmental Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">-75%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Carbon Emissions</div>
                <div className="text-sm text-gray-600">Reduction in fleet carbon footprint</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">+85%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Fuel Efficiency</div>
                <div className="text-sm text-gray-600">Improvement through AI optimization</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Electric Fleet</div>
                <div className="text-sm text-gray-600">Transition to zero-emission vehicles</div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Lessons Learned</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gradual Implementation is Critical</h3>
                <p className="text-gray-700">
                  Starting with a pilot program allowed us to identify and resolve issues 
                  before full deployment, ensuring smooth transition and maximum safety.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Continuous Learning is Essential</h3>
                <p className="text-gray-700">
                  The AI systems improved significantly over time through continuous learning, 
                  demonstrating the importance of adaptive algorithms in autonomous systems.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stakeholder Engagement Drives Success</h3>
                <p className="text-gray-700">
                  Early engagement with drivers, customers, and regulatory bodies was crucial 
                  for building trust and ensuring smooth adoption of autonomous technology.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fleet?</h2>
            <p className="text-xl mb-6 opacity-90">
              Discover how Zion Tech Group can help you implement AI-powered autonomous 
              vehicle solutions for your transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-manufacturing-automation-success-2025" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Manufacturing Automation Success
                </h3>
                <p className="text-gray-600">How AI transformed manufacturing operations with 90% efficiency gains.</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-financial-services-transformation-success-2025" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Financial Services Transformation
                </h3>
                <p className="text-gray-600">AI-powered financial services achieving 300% ROI in 12 months.</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Sustainability Transformation
                </h3>
                <p className="text-gray-600">How AI is driving sustainable business practices and green technology.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}