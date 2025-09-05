import React from 'react';
import Layout from '../components/Layout';
import { 
  Shield, 
  Rocket, 
  Users, 
  Brain, 
  Network, 
  Lock, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Settings,
  Globe
} from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Solutions',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions designed for large organizations with complex requirements.',
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Scalable Architecture',
      'Enterprise Security',
      '24/7 Support',
      'Custom Integration',
      'Compliance Management',
      'Advanced Analytics'
    ],
    benefits: [
      'Reduced Operational Costs',
      'Enhanced Security',
      'Improved Efficiency',
      'Better Compliance'
    ],
    pricing: 'Custom Pricing',
    timeline: '3-12 months',
    popular: true
  },
  {
    title: 'Startup Solutions',
    icon: Rocket,
    description: 'Rapid deployment solutions designed to help startups scale quickly and efficiently.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Rapid Deployment',
      'Cost-effective Pricing',
      'Scalable Infrastructure',
      'Quick Setup',
      'Essential Features',
      'Growth Support'
    ],
    benefits: [
      'Fast Time to Market',
      'Lower Initial Investment',
      'Scalable Growth',
      'Expert Guidance'
    ],
    pricing: 'Starting at $1,000/month',
    timeline: '2-8 weeks',
    popular: true
  },
  {
    title: 'Industry Solutions',
    icon: BarChart3,
    description: 'Specialized solutions tailored to specific industries and their unique requirements.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Industry Expertise',
      'Compliance Ready',
      'Specialized Features',
      'Domain Knowledge',
      'Best Practices',
      'Regulatory Support'
    ],
    benefits: [
      'Industry-specific Features',
      'Compliance Assurance',
      'Expert Knowledge',
      'Proven Results'
    ],
    pricing: 'Starting at $5,000/project',
    timeline: '1-6 months'
  },
  {
    title: 'Custom Development',
    icon: Settings,
    description: 'Fully customized solutions built from scratch to meet your specific business requirements.',
    color: 'from-orange-500 to-red-500',
    features: [
      '100% Custom Built',
      'Unique Requirements',
      'Full Control',
      'Advanced Features',
      'Integration Support',
      'Ongoing Maintenance'
    ],
    benefits: [
      'Perfect Fit',
      'Competitive Advantage',
      'Full Ownership',
      'Unlimited Customization'
    ],
    pricing: 'Starting at $25,000/project',
    timeline: '3-18 months'
  },
  {
    title: 'Digital Transformation',
    icon: Globe,
    description: 'Complete digital transformation solutions to modernize your business processes and operations.',
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Process Modernization',
      'Technology Integration',
      'Change Management',
      'Training & Support',
      'Performance Optimization',
      'Future-proofing'
    ],
    benefits: [
      'Modernized Operations',
      'Improved Efficiency',
      'Better Customer Experience',
      'Competitive Edge'
    ],
    pricing: 'Starting at $10,000/project',
    timeline: '6-24 months'
  }
];

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover our range of cutting-edge solutions designed to transform your business and drive innovation across every industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise-grade platforms to startup-friendly solutions, we have the perfect fit for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color} text-white mr-4`}>
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                      {solution.popular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Pricing:</span>
                      <span className="font-semibold text-gray-900">{solution.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Timeline:</span>
                      <span className="font-semibold text-gray-900">{solution.timeline}</span>
                    </div>
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${solution.color} hover:opacity-90 transition-opacity`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our solutions can help you achieve your goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}