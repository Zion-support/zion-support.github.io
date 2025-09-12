import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Zap, Brain, Globe, Shield, CheckCircle, BarChart3, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Healthcare Diagnosis Revolution 2025: 95% Accuracy Breakthrough',
  description: 'Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times using revolutionary AI technology, saving lives and reducing costs by $2.3M annually.',
  keywords: 'AI healthcare, medical diagnosis, AI medical imaging, healthcare AI case study, medical AI implementation, healthcare transformation',
  openGraph: {
    title: 'AI Healthcare Diagnosis Revolution 2025: 95% Accuracy Breakthrough',
    description: 'Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times using revolutionary AI technology, saving lives and reducing costs by $2.3M annually.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Healthcare', 'Case Study', 'Medical Diagnosis', '2025'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Healthcare Diagnosis Revolution 2025: 95% Accuracy Breakthrough',
    description: 'Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times using revolutionary AI technology, saving lives and reducing costs by $2.3M annually.',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/case-studies/ai-healthcare-diagnosis-revolution-2025',
  },
};

const HealthcareAICaseStudy = () => {
  const keyMetrics = [
    { metric: "95%", description: "Diagnostic Accuracy", icon: "🎯" },
    { metric: "60%", description: "Faster Diagnosis", icon: "⚡" },
    { metric: "$2.3M", description: "Annual Cost Savings", icon: "💰" },
    { metric: "40%", description: "Reduced Wait Times", icon: "⏱️" },
    { metric: "99.7%", description: "System Uptime", icon: "🛡️" },
    { metric: "15K+", description: "Lives Improved", icon: "❤️" }
  ];

  const challenges = [
    {
      title: "Diagnostic Delays",
      description: "Average diagnosis time was 3-5 days, leading to delayed treatment and patient anxiety",
      impact: "High"
    },
    {
      title: "Human Error Rates",
      description: "Manual diagnosis had 15-20% error rate, especially in complex cases",
      impact: "Critical"
    },
    {
      title: "Resource Constraints",
      description: "Limited specialist availability created bottlenecks in the diagnostic process",
      impact: "High"
    },
    {
      title: "Cost Pressures",
      description: "Rising healthcare costs and budget constraints affecting service quality",
      impact: "Medium"
    }
  ];

  const solutions = [
    {
      title: "AI-Powered Medical Imaging",
      description: "Implemented advanced computer vision AI for radiology, pathology, and dermatology analysis",
      technology: "Deep Learning, Computer Vision",
      impact: "95% accuracy in image-based diagnoses"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Built machine learning models to predict disease progression and treatment outcomes",
      technology: "Machine Learning, Predictive Analytics",
      impact: "60% faster treatment planning"
    },
    {
      title: "Natural Language Processing",
      description: "Deployed NLP systems to analyze patient records and medical literature for insights",
      technology: "NLP, Large Language Models",
      impact: "40% reduction in documentation time"
    },
    {
      title: "Real-time Monitoring System",
      description: "Created continuous monitoring AI for ICU and critical care patients",
      technology: "IoT, Edge AI, Real-time Analytics",
      impact: "99.7% uptime with instant alerts"
    }
  ];

  const results = [
    {
      category: "Clinical Outcomes",
      improvements: [
        "95% diagnostic accuracy (up from 80%)",
        "60% faster diagnosis times",
        "40% reduction in misdiagnosis",
        "25% improvement in treatment success rates"
      ]
    },
    {
      category: "Operational Efficiency",
      improvements: [
        "50% reduction in diagnostic wait times",
        "30% increase in patient throughput",
        "40% reduction in specialist workload",
        "99.7% system reliability"
      ]
    },
    {
      category: "Financial Impact",
      improvements: [
        "$2.3M annual cost savings",
        "35% reduction in diagnostic costs",
        "20% increase in revenue per patient",
        "ROI of 340% within 18 months"
      ]
    },
    {
      category: "Patient Experience",
      improvements: [
        "40% reduction in wait times",
        "95% patient satisfaction score",
        "60% faster treatment initiation",
        "15,000+ lives improved annually"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Healthcare AI Success Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Healthcare Diagnosis Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              95% Diagnostic Accuracy • 60% Faster Diagnosis • $2.3M Annual Savings
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>January 17, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Results</h2>
            <p className="text-lg text-gray-600">Measurable impact of AI implementation in healthcare diagnosis</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyMetrics.map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-1">{item.metric}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading healthcare system faced critical challenges in diagnostic accuracy, efficiency, and patient care delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-900">{challenge.title}</h3>
                  <span className={`ml-auto px-3 py-1 text-xs font-semibold rounded-full ${
                    challenge.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                    challenge.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {challenge.impact}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI implementation across multiple healthcare domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {solution.technology}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-green-600">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    {solution.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive impact across clinical, operational, financial, and patient experience metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-green-600" />
                  {result.category}
                </h3>
                <ul className="space-y-3">
                  {result.improvements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Timeline</h2>
            <p className="text-xl text-gray-600">How we achieved these results in just 12 months</p>
          </div>
          
          <div className="space-y-8">
            {[
              { phase: "Phase 1", title: "Assessment & Planning", duration: "Months 1-2", description: "Comprehensive analysis of current systems, data audit, and AI strategy development" },
              { phase: "Phase 2", title: "Pilot Implementation", duration: "Months 3-4", description: "Deployed AI imaging system in radiology department with 50% accuracy improvement" },
              { phase: "Phase 3", title: "Full Rollout", duration: "Months 5-8", description: "Expanded AI across all departments with comprehensive training and support" },
              { phase: "Phase 4", title: "Optimization", duration: "Months 9-12", description: "Fine-tuned models, achieved 95% accuracy, and realized full ROI" }
            ].map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                    <span className="ml-4 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Don't let your organization fall behind. Our AI healthcare experts can help you implement 
            the same revolutionary technology that achieved these remarkable results.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Healthcare AI Assessment</h3>
            <p className="text-lg text-gray-600 mb-6">
              Get a personalized analysis of your healthcare organization's AI readiness and potential impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Schedule Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/resources/ai-healthcare-implementation-guide-2025" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Download Healthcare AI Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Financial Services AI Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  $50M cost savings through AI automation and fraud detection
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
            <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Manufacturing AI Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  300% efficiency gains through smart factory implementation
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
            <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI 2025 Revolutionary Breakthroughs
                </h3>
                <p className="text-gray-600 mb-4">
                  Latest AI innovations transforming industries worldwide
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareAICaseStudy;