import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Zap, Globe, Leaf, TrendingUp, Users, Target, CheckCircle, DollarSign, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Enterprise Transformation Success: $100M Revenue Impact Case Study',
  description: 'Discover how a Fortune 500 company achieved $100M revenue impact through comprehensive AI transformation. Learn the strategies, challenges, and results.',
  keywords: 'AI transformation, enterprise AI, case study, AI success story, digital transformation, AI ROI',
  openGraph: {
    title: 'AI Enterprise Transformation Success: $100M Revenue Impact Case Study',
    description: 'Discover how a Fortune 500 company achieved $100M revenue impact through comprehensive AI transformation. Learn the strategies, challenges, and results.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Transformation', 'Case Study', 'Enterprise', 'Success Story'],
  },
};

const impactStats = [
  { label: 'Revenue Impact', value: '$100M+', icon: DollarSign },
  { label: 'Cost Reduction', value: '45%', icon: Target },
  { label: 'Efficiency Gains', value: '300%', icon: Zap },
  { label: 'Implementation Time', value: '18 months', icon: Clock },
];

const transformationPhases = [
  {
    phase: 'Phase 1: Foundation',
    duration: '3 months',
    description: 'AI strategy development and infrastructure setup',
    keyActivities: [
      'Conducted comprehensive AI readiness assessment',
      'Developed enterprise-wide AI strategy',
      'Established AI governance framework',
      'Set up cloud infrastructure and data pipelines',
      'Formed cross-functional AI implementation team'
    ],
    results: ['AI strategy approved by board', 'Infrastructure ready for deployment', 'Team of 50+ AI specialists assembled']
  },
  {
    phase: 'Phase 2: Pilot Projects',
    duration: '6 months',
    description: 'Focused pilot implementations across key business units',
    keyActivities: [
      'Deployed AI in customer service operations',
      'Implemented predictive analytics for supply chain',
      'Launched AI-powered sales forecasting',
      'Piloted automated document processing',
      'Tested AI-driven quality control systems'
    ],
    results: ['40% improvement in customer satisfaction', '25% reduction in supply chain costs', '30% increase in forecast accuracy']
  },
  {
    phase: 'Phase 3: Scale & Optimize',
    duration: '9 months',
    description: 'Enterprise-wide deployment and continuous optimization',
    keyActivities: [
      'Scaled successful pilots across all business units',
      'Integrated AI with existing enterprise systems',
      'Implemented advanced analytics and reporting',
      'Launched AI-powered product recommendations',
      'Deployed autonomous decision-making systems'
    ],
    results: ['$100M+ revenue impact', '45% cost reduction', '300% efficiency improvements']
  }
];

const keyTechnologies = [
  {
    category: 'Machine Learning',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'],
    useCase: 'Predictive analytics and pattern recognition',
    impact: 'Improved accuracy by 85%'
  },
  {
    category: 'Natural Language Processing',
    technologies: ['BERT', 'GPT-4', 'Transformer models', 'SpaCy'],
    useCase: 'Customer service automation and document processing',
    impact: 'Reduced processing time by 70%'
  },
  {
    category: 'Computer Vision',
    technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet'],
    useCase: 'Quality control and visual inspection',
    impact: 'Defect detection accuracy of 99.2%'
  },
  {
    category: 'Cloud & Infrastructure',
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker'],
    useCase: 'Scalable AI model deployment and management',
    impact: '99.9% uptime and auto-scaling'
  }
];

const challenges = [
  {
    challenge: 'Data Quality and Integration',
    description: 'Integrating data from 50+ legacy systems with varying quality standards',
    solution: 'Implemented comprehensive data governance framework and automated data cleaning pipelines',
    outcome: 'Achieved 95% data quality score across all systems'
  },
  {
    challenge: 'Change Management',
    description: 'Resistance from employees concerned about job displacement',
    solution: 'Comprehensive training program and transparent communication about AI augmentation',
    outcome: '95% employee satisfaction with AI tools and 0% job losses'
  },
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting strict industry regulations while implementing AI systems',
    solution: 'Built compliance-first AI architecture with audit trails and explainability',
    outcome: '100% regulatory compliance maintained throughout implementation'
  },
  {
    challenge: 'Scalability',
    description: 'Scaling AI systems to handle enterprise-level workloads',
    solution: 'Microservices architecture with auto-scaling and load balancing',
    outcome: 'Successfully handled 10x increase in AI workload without performance degradation'
  }
];

const roiBreakdown = [
  { category: 'Revenue Increase', amount: '$100M', percentage: '40%' },
  { category: 'Cost Reduction', amount: '$45M', percentage: '18%' },
  { category: 'Efficiency Gains', amount: '$30M', percentage: '12%' },
  { category: 'Risk Mitigation', amount: '$15M', percentage: '6%' },
  { category: 'Innovation Value', amount: '$10M', percentage: '4%' }
];

export default function AIEnterpriseTransformationSuccess2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Success Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Enterprise Transformation Success
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto">
              $100M Revenue Impact Through Comprehensive AI Implementation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                18 min read
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Case Study
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                $100M Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-8">
              A Fortune 500 manufacturing company with operations across 30 countries was facing increasing 
              pressure from competitors and market demands. Despite having vast amounts of data and processes, 
              they were struggling to leverage this information effectively to drive business growth and efficiency.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              The company's key challenges included:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
              <li>Fragmented data across 50+ legacy systems</li>
              <li>Manual processes causing delays and errors</li>
              <li>Inability to predict market trends and customer needs</li>
              <li>High operational costs and inefficiencies</li>
              <li>Difficulty in maintaining quality standards at scale</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
            <p className="text-lg text-gray-600 mb-8">
              The company embarked on a comprehensive AI transformation initiative, implementing AI solutions 
              across all major business functions. The transformation was structured in three phases over 18 months, 
              with each phase building upon the previous one's success.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Journey</h2>
            <p className="text-lg text-gray-600">Three-phase approach to enterprise AI transformation</p>
          </div>
          <div className="space-y-8">
            {transformationPhases.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-lg text-gray-600 mb-2">{phase.description}</p>
                    <div className="text-sm text-emerald-600 font-medium">{phase.duration}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {phase.keyActivities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {phase.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <BarChart3 className="w-4 h-4 text-emerald-500 mr-2" />
                          {result}
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

      {/* Technologies Used */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Technologies</h2>
            <p className="text-lg text-gray-600">Advanced AI technologies powering the transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTechnologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <span key={techIndex} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Use Case:</h4>
                  <p className="text-sm text-gray-600">{tech.useCase}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Impact:</h4>
                  <p className="text-sm text-emerald-600 font-medium">{tech.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
            <p className="text-lg text-gray-600">How we overcame major implementation challenges</p>
          </div>
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{challenge.challenge}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600">{challenge.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Outcome:</h4>
                    <p className="text-sm text-emerald-600 font-medium">{challenge.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ROI Breakdown</h2>
            <p className="text-lg text-gray-600">$200M total value created through AI transformation</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              {roiBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full mr-4"></div>
                    <span className="font-medium text-gray-900">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{item.amount}</div>
                    <div className="text-sm text-gray-500">{item.percentage} of total value</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">Total Value Created</span>
                <span className="text-3xl font-bold text-emerald-600">$200M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Learn how to achieve similar results with our proven AI transformation methodology. 
            Get started with our comprehensive implementation guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2025"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">🏦</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600">Financial Services Transformation</h3>
                <p className="text-gray-600 text-sm">$50M savings through AI implementation</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600">Manufacturing Automation</h3>
                <p className="text-gray-600 text-sm">75% efficiency gains in production</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-healthcare-diagnosis-revolution-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">🏥</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600">Healthcare AI Revolution</h3>
                <p className="text-gray-600 text-sm">40% improvement in diagnostic accuracy</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}