import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AI2026ImplementationToolkit() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI 2026 Implementation Toolkit - Complete Guide"
        description="The ultimate AI implementation toolkit for 2026. Step-by-step guides, checklists, templates, and best practices for successful AI transformation."
        keywords="AI implementation, AI toolkit, AI guide, AI transformation, AI best practices, AI checklist"
        url="/resources/ai-2026-implementation-toolkit"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-6">
              🚀 COMPLETE IMPLEMENTATION TOOLKIT
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI 2026 Implementation Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Everything you need to successfully implement AI in your organization. 
              Comprehensive guides, templates, checklists, and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Complete Toolkit
              </button>
              <Link 
                href="#toolkit-sections" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Sections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What's Included in the Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of resources designed to guide you through every step of AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Checklists</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step checklists for each phase of AI implementation to ensure nothing is missed.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pre-implementation assessment</li>
                <li>• Data preparation checklist</li>
                <li>• Model deployment checklist</li>
                <li>• Post-deployment monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI Calculators</h3>
              <p className="text-gray-600 mb-6">
                Interactive tools to calculate potential ROI and justify AI investments to stakeholders.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cost-benefit analysis templates</li>
                <li>• ROI projection models</li>
                <li>• Risk assessment frameworks</li>
                <li>• Success metrics tracking</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Architecture Templates</h3>
              <p className="text-gray-600 mb-6">
                Pre-built architecture templates for common AI use cases and deployment scenarios.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cloud AI architectures</li>
                <li>• Edge computing setups</li>
                <li>• Hybrid deployment models</li>
                <li>• Security configurations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices Guide</h3>
              <p className="text-gray-600 mb-6">
                Proven methodologies and best practices from successful AI implementations across industries.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data governance frameworks</li>
                <li>• Model validation procedures</li>
                <li>• Change management strategies</li>
                <li>• Team training programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Templates</h3>
              <p className="text-gray-600 mb-6">
                Ready-to-use templates for AI governance, ethics, and regulatory compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI ethics frameworks</li>
                <li>• Privacy impact assessments</li>
                <li>• Regulatory compliance checklists</li>
                <li>• Audit documentation templates</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Metrics</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive metrics and KPIs to measure AI implementation success and impact.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Performance indicators</li>
                <li>• Business impact metrics</li>
                <li>• User adoption tracking</li>
                <li>• Continuous improvement KPIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section id="toolkit-sections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Toolkit Sections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of each toolkit component with practical examples and templates
            </p>
          </div>

          <div className="space-y-16">
            {/* Section 1: Assessment & Planning */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SECTION 1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    AI Readiness Assessment & Planning
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive assessment tools to evaluate your organization's AI readiness and create a detailed implementation roadmap.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">AI Maturity Assessment Framework</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Data Quality Evaluation Tools</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Technology Stack Assessment</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Implementation Roadmap Template</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Download Section 1
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Sample Assessment Questions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <strong>Data Infrastructure:</strong> Do you have centralized data storage and processing capabilities?
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <strong>Technical Expertise:</strong> What is your team's current AI/ML knowledge level?
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <strong>Business Alignment:</strong> Are AI initiatives aligned with business objectives?
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <strong>Governance:</strong> Do you have AI governance and ethics frameworks in place?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Data Preparation */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-xl shadow-lg p-6 order-2 lg:order-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Data Quality Checklist</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Data completeness</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Data accuracy</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Data consistency</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Data timeliness</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Data security</span>
                      <span className="text-green-600">✓</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SECTION 2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Data Preparation & Quality
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Essential tools and processes for preparing high-quality data for AI model training and deployment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Data Quality Assessment Framework</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Data Cleaning & Preprocessing Templates</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Feature Engineering Guidelines</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Data Pipeline Architecture Templates</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Download Section 2
                  </button>
                </div>
              </div>
            </div>

            {/* Section 3: Model Development */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SECTION 3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Model Development & Training
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive guides for developing, training, and validating AI models with best practices and templates.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Model Selection Framework</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Training Pipeline Templates</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Validation & Testing Procedures</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Hyperparameter Tuning Guides</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Download Section 3
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Model Development Workflow</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                      <span className="text-gray-700">Problem Definition & Data Collection</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                      <span className="text-gray-700">Data Preprocessing & Feature Engineering</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                      <span className="text-gray-700">Model Selection & Training</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                      <span className="text-gray-700">Validation & Performance Testing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</div>
                      <span className="text-gray-700">Model Deployment & Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Deployment & Operations */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-xl shadow-lg p-6 order-2 lg:order-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Deployment Checklist</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Infrastructure setup</span>
                      <span className="text-orange-600">⏳</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Security configuration</span>
                      <span className="text-orange-600">⏳</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Performance testing</span>
                      <span className="text-orange-600">⏳</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Monitoring setup</span>
                      <span className="text-orange-600">⏳</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>Rollback procedures</span>
                      <span className="text-orange-600">⏳</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    SECTION 4
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Deployment & Operations
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete guides for deploying AI models to production and maintaining optimal performance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Deployment Architecture Templates</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Monitoring & Alerting Setup</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Performance Optimization Guides</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">Incident Response Procedures</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Download Section 4
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific Implementation Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored implementation strategies for different industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-6">
                AI implementation for medical diagnosis, patient care, and healthcare operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• HIPAA compliance frameworks</li>
                <li>• Medical data preprocessing</li>
                <li>• Clinical validation procedures</li>
                <li>• Regulatory approval processes</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Healthcare Guide
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-6">
                AI for predictive maintenance, quality control, and production optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• IoT data integration</li>
                <li>• Predictive maintenance models</li>
                <li>• Quality control automation</li>
                <li>• Supply chain optimization</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Download Manufacturing Guide
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-6">
                AI for fraud detection, risk assessment, and algorithmic trading.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Regulatory compliance frameworks</li>
                <li>• Risk modeling techniques</li>
                <li>• Fraud detection algorithms</li>
                <li>• Trading system integration</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Download Financial Guide
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail & E-commerce</h3>
              <p className="text-gray-600 mb-6">
                AI for personalization, inventory management, and customer service.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Recommendation systems</li>
                <li>• Demand forecasting</li>
                <li>• Customer segmentation</li>
                <li>• Chatbot implementation</li>
              </ul>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                Download Retail Guide
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transportation</h3>
              <p className="text-gray-600 mb-6">
                AI for autonomous vehicles, route optimization, and fleet management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Autonomous system safety</li>
                <li>• Route optimization algorithms</li>
                <li>• Fleet management systems</li>
                <li>• Traffic prediction models</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Download Transportation Guide
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600 mb-6">
                AI for personalized learning, assessment, and educational content generation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Personalized learning paths</li>
                <li>• Automated assessment tools</li>
                <li>• Content generation systems</li>
                <li>• Student performance analytics</li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Download Education Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Your Complete AI Implementation Toolkit
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Download the complete toolkit with all sections, templates, and guides. 
            Start your AI transformation journey today with proven methodologies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Download Complete Toolkit (PDF)
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download Individual Sections
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            <p>✓ 200+ pages of comprehensive guides</p>
            <p>✓ 50+ ready-to-use templates and checklists</p>
            <p>✓ Industry-specific implementation strategies</p>
            <p>✓ Regular updates with latest AI trends and best practices</p>
          </div>
        </div>
      </section>
    </div>
  );
}