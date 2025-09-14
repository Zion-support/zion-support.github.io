import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Transformation in Manufacturing: A Complete Case Study',
  description: 'How TechCorp Global achieved 95% defect reduction and $2.3M annual savings through AI-powered quality control. Complete implementation guide and results.',
  keywords: 'AI manufacturing, quality control AI, computer vision, manufacturing automation, AI case study, industrial AI',
};

export default function ManufacturingAITransformation() {
  const implementationPhases = [
    {
      phase: 'Phase 1: Assessment & Planning',
      duration: '2 weeks',
      activities: [
        'Current process analysis',
        'AI readiness assessment',
        'ROI projection modeling',
        'Technology stack selection',
        'Team training planning'
      ],
      outcomes: [
        'Identified 15 critical quality checkpoints',
        'Projected 400% ROI within 6 months',
        'Selected computer vision + ML stack',
        'Trained 12 team members'
      ]
    },
    {
      phase: 'Phase 2: Data Collection & Preparation',
      duration: '3 weeks',
      activities: [
        'Historical defect data analysis',
        'Image dataset creation (50,000+ images)',
        'Data labeling and annotation',
        'Quality metrics baseline establishment',
        'Integration point identification'
      ],
      outcomes: [
        '50,000+ labeled defect images',
        '15 defect categories identified',
        'Baseline 15% defect rate documented',
        'Integration points mapped'
      ]
    },
    {
      phase: 'Phase 3: AI Model Development',
      duration: '4 weeks',
      activities: [
        'Computer vision model training',
        'Defect classification algorithms',
        'Real-time processing optimization',
        'Accuracy validation testing',
        'Performance benchmarking'
      ],
      outcomes: [
        '99.8% defect detection accuracy',
        'Sub-second processing time',
        '15 defect types classified',
        'Model validation completed'
      ]
    },
    {
      phase: 'Phase 4: System Integration',
      duration: '2 weeks',
      activities: [
        'Production line integration',
        'Real-time monitoring setup',
        'Alert system configuration',
        'Dashboard development',
        'User training delivery'
      ],
      outcomes: [
        'Seamless production integration',
        'Real-time quality monitoring',
        'Automated alert system',
        'User-friendly dashboard'
      ]
    },
    {
      phase: 'Phase 5: Deployment & Optimization',
      duration: '3 weeks',
      activities: [
        'Pilot deployment',
        'Performance monitoring',
        'Model fine-tuning',
        'Process optimization',
        'Full-scale rollout'
      ],
      outcomes: [
        '95% defect reduction achieved',
        '40% faster production cycles',
        '$2.3M annual cost savings',
        'Full production deployment'
      ]
    }
  ];

  const technicalSpecifications = [
    {
      category: 'Hardware',
      specifications: [
        'NVIDIA RTX 4090 GPUs for inference',
        'High-resolution industrial cameras (4K)',
        'Edge computing units for real-time processing',
        'Redundant power and network systems',
        'Industrial-grade mounting and protection'
      ]
    },
    {
      category: 'Software',
      specifications: [
        'TensorFlow 2.0 for model development',
        'OpenCV for image processing',
        'Python 3.9 for backend services',
        'React.js for dashboard interface',
        'PostgreSQL for data storage'
      ]
    },
    {
      category: 'AI Models',
      specifications: [
        'YOLOv8 for object detection',
        'Custom CNN for defect classification',
        'Transfer learning from ImageNet',
        'Data augmentation techniques',
        'Model ensemble for accuracy'
      ]
    },
    {
      category: 'Integration',
      specifications: [
        'RESTful API for system communication',
        'MQTT for real-time data streaming',
        'Docker containers for deployment',
        'Kubernetes for orchestration',
        'Prometheus for monitoring'
      ]
    }
  ];

  const results = [
    {
      metric: 'Defect Rate Reduction',
      before: '15%',
      after: '0.75%',
      improvement: '95%',
      impact: 'Massive quality improvement'
    },
    {
      metric: 'Processing Speed',
      before: '5 minutes per unit',
      after: '3 seconds per unit',
      improvement: '99%',
      impact: 'Real-time quality control'
    },
    {
      metric: 'Manual Inspection Time',
      before: '8 hours per shift',
      after: '30 minutes per shift',
      improvement: '94%',
      impact: 'Significant labor savings'
    },
    {
      metric: 'Annual Cost Savings',
      before: '$0',
      after: '$2.3M',
      improvement: '∞',
      impact: 'Substantial ROI achievement'
    },
    {
      metric: 'Customer Satisfaction',
      before: '78%',
      after: '96%',
      improvement: '23%',
      impact: 'Higher customer retention'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Transformation in Manufacturing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Complete case study: How TechCorp Global achieved 95% defect reduction, 
              $2.3M annual savings, and 40% faster production through AI-powered quality control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong>TechCorp Global</strong> is a leading manufacturer of precision 
                  electronic components, serving automotive, aerospace, and consumer 
                  electronics industries worldwide.
                </p>
                <p>
                  With 15 production facilities across 8 countries and over 5,000 employees, 
                  the company faced significant challenges in maintaining consistent quality 
                  standards while scaling production to meet growing demand.
                </p>
                <p>
                  The manual quality control processes were not only time-consuming but also 
                  prone to human error, resulting in a 15% defect rate that was costing 
                  millions in rework, returns, and lost customer trust.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Revenue:</span>
                  <span className="font-semibold">$2.8B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Production Facilities:</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-semibold">5,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Countries:</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Products:</span>
                  <span className="font-semibold">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Phases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensured successful AI implementation with minimal 
              disruption to ongoing operations.
            </p>
          </div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                    {phase.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Activities:</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Outcomes:</h4>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete technology stack that powered this successful AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecifications.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specifications.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI transformation delivered exceptional results across all key metrics, 
              exceeding initial projections and setting new industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{result.metric}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-red-600 mb-1">{result.before}</div>
                  <div className="text-sm text-gray-500">Before</div>
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">{result.after}</div>
                  <div className="text-sm text-gray-500">After</div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{result.improvement}</div>
                  <div className="text-sm text-gray-500">Improvement</div>
                </div>
                <p className="text-sm text-gray-600">{result.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ROI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The financial impact of this AI transformation exceeded all expectations, 
              delivering exceptional returns on investment.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">$450K</div>
                <div className="text-lg">Initial Investment</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$2.3M</div>
                <div className="text-lg">Annual Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">511%</div>
                <div className="text-lg">ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-lg">Months Payback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let your competitors get ahead. Start your AI transformation journey 
            today and achieve similar results in just 3-6 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free AI Assessment
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}