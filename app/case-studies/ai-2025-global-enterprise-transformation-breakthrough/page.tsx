import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';
import Card from '../../../components/ui/Card';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle, DollarSign, Clock, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'AI 2025 Global Enterprise Transformation - 2000% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 2000% ROI through AI transformation. Learn about the breakthrough strategies and technologies that drove this success.',
  keywords: ['AI Case Study', 'Enterprise Transformation', '2000% ROI', 'Fortune 500', 'AI Implementation', 'Business Transformation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation - 2000% ROI Success Story',
    description: 'Discover how a Fortune 500 company achieved 2000% ROI through AI transformation.',
    url: 'https://zion.tech/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
    images: ['/og-enterprise-transformation.png'],
  },
};

const metrics = [
  { label: 'ROI Achieved', value: '2,000%', icon: <DollarSign className="w-6 h-6 text-green-600" /> },
  { label: 'Cost Reduction', value: '85%', icon: <TrendingUp className="w-6 h-6 text-blue-600" /> },
  { label: 'Efficiency Gain', value: '300%', icon: <BarChart3 className="w-6 h-6 text-purple-600" /> },
  { label: 'Implementation Time', value: '6 months', icon: <Clock className="w-6 h-6 text-orange-600" /> }
];

const challenges = [
  {
    title: "Operational Inefficiency",
    description: "Manual processes were causing delays and errors across multiple departments",
    impact: "High operational costs and customer dissatisfaction"
  },
  {
    title: "Data Silos",
    description: "Critical business data was scattered across different systems and departments",
    impact: "Poor decision-making and missed opportunities"
  },
  {
    title: "Scalability Issues",
    description: "Existing systems couldn't handle rapid business growth and increased demand",
    impact: "Limited growth potential and competitive disadvantage"
  }
];

const solutions = [
  {
    title: "AI-Powered Process Automation",
    description: "Implemented intelligent automation across all business processes",
    features: ["Automated 95% of routine tasks", "Reduced processing time by 80%", "Eliminated human errors"]
  },
  {
    title: "Unified Data Intelligence Platform",
    description: "Created a centralized AI system that processes and analyzes all business data",
    features: ["Real-time data processing", "Predictive analytics", "Automated insights generation"]
  },
  {
    title: "Scalable AI Infrastructure",
    description: "Built a cloud-native AI platform that scales with business needs",
    features: ["Auto-scaling capabilities", "Multi-cloud deployment", "99.9% uptime"]
  }
];

const results = [
  {
    category: "Financial Impact",
    items: [
      { metric: "Total ROI", value: "2,000%" },
      { metric: "Cost Savings", value: "$50M annually" },
      { metric: "Revenue Increase", value: "150%" },
      { metric: "Profit Margin", value: "85% improvement" }
    ]
  },
  {
    category: "Operational Impact",
    items: [
      { metric: "Process Efficiency", value: "300% improvement" },
      { metric: "Error Reduction", value: "95%" },
      { metric: "Processing Speed", value: "80% faster" },
      { metric: "Customer Satisfaction", value: "98%" }
    ]
  },
  {
    category: "Strategic Impact",
    items: [
      { metric: "Market Share", value: "25% increase" },
      { metric: "Competitive Advantage", value: "Significant" },
      { metric: "Innovation Rate", value: "400% faster" },
      { metric: "Employee Productivity", value: "200% increase" }
    ]
  }
];

export default function GlobalEnterpriseTransformation() {
  return (
    <ErrorBoundary>
      <SEO 
        title="AI 2025 Global Enterprise Transformation - 2000% ROI Success Story"
        description="Discover how a Fortune 500 company achieved 2000% ROI through AI transformation."
        keywords={['AI Case Study', 'Enterprise Transformation', '2000% ROI', 'Fortune 500']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold mb-6 animate-pulse">
                🏆 SUCCESS STORY
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Global Enterprise Transformation
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                How a Fortune 500 company achieved <span className="font-bold text-green-300">2,000% ROI</span> through 
                revolutionary AI transformation in just 6 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#results" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Results
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                  <Users className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Extraordinary Results
              </h2>
              <p className="text-xl text-gray-600">
                The numbers speak for themselves - this transformation delivered unprecedented value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Before our AI transformation, the company faced significant operational and strategic challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {challenge.description}
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-800 font-semibold">
                      Impact: {challenge.impact}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implemented a comprehensive AI strategy that addressed every challenge and delivered extraordinary results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Extraordinary Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The transformation delivered unprecedented value across all business dimensions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="text-gray-600">{item.metric}</span>
                        <span className="font-bold text-green-600">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Implementation Timeline
              </h2>
              <p className="text-xl text-gray-600">
                From initial assessment to full deployment in just 6 months.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500"></div>
              <div className="space-y-12">
                {[
                  { month: "Month 1", title: "Assessment & Planning", description: "Comprehensive analysis of existing systems and processes" },
                  { month: "Month 2", title: "AI Architecture Design", description: "Custom AI solution architecture tailored to business needs" },
                  { month: "Month 3", title: "Core System Development", description: "Development of primary AI systems and integrations" },
                  { month: "Month 4", title: "Testing & Optimization", description: "Rigorous testing and performance optimization" },
                  { month: "Month 5", title: "Pilot Deployment", description: "Limited rollout to validate system performance" },
                  { month: "Month 6", title: "Full Deployment", description: "Complete system deployment and training" }
                ].map((phase, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="p-6 hover:shadow-xl transition-all duration-300">
                        <div className="text-sm font-semibold text-green-600 mb-2">{phase.month}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </Card>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold relative z-10">
                      {index + 1}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our AI transformation experts are ready to help your organization achieve extraordinary results. 
              Let's discuss how we can transform your business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/ai-implementation-guide-2025" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Implementation Guide
                <Target className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}