import React from 'react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.'
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.'
  },
  {
    step: '04',
    title: 'Deployment & Training',
    description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.'
  },
  {
    step: '05',
    title: 'Support & Optimization',
    description: 'Ongoing support and continuous optimization to ensure your solution evolves with your business.'
  }
];

const solutions = [
  {
    title: 'Enterprise AI Solutions',
    description: 'Comprehensive AI platforms for large-scale business transformation',
    features: [
      'Custom AI model development',
      'Enterprise-grade security',
      'Scalable cloud infrastructure',
      'Advanced analytics dashboard',
      '24/7 monitoring and support'
    ],
    industries: ['Finance', 'Healthcare', 'Manufacturing', 'Retail']
  },
  {
    title: 'Micro SaaS Platforms',
    description: 'Specialized software solutions for niche business problems',
    features: [
      'Rapid deployment',
      'Cost-effective pricing',
      'User-friendly interfaces',
      'API integrations',
      'Mobile-responsive design'
    ],
    industries: ['Startups', 'SMBs', 'Agencies', 'Consultants']
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Modern cloud solutions for scalable and secure operations',
    features: [
      'Multi-cloud deployment',
      'Auto-scaling capabilities',
      'Disaster recovery',
      'Security compliance',
      'Cost optimization'
    ],
    industries: ['Technology', 'E-commerce', 'Media', 'Education']
  },
  {
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions to protect your digital assets',
    features: [
      'Threat detection and response',
      'Zero-trust architecture',
      'Compliance management',
      'Security training',
      'Incident response planning'
    ],
    industries: ['Government', 'Finance', 'Healthcare', 'Legal']
  }
];

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 40%.',
    metric: '40%',
    metricLabel: 'Productivity Increase'
  },
  {
    title: 'Cost Reduction',
    description: 'Reduce operational costs through intelligent automation and optimized processes.',
    metric: '30%',
    metricLabel: 'Cost Savings'
  },
  {
    title: 'Enhanced Decision Making',
    description: 'Make data-driven decisions with real-time insights and predictive analytics.',
    metric: '60%',
    metricLabel: 'Faster Decisions'
  },
  {
    title: 'Competitive Advantage',
    description: 'Stay ahead of the competition with cutting-edge technology and innovation.',
    metric: '2x',
    metricLabel: 'Market Growth'
  }
];

export const metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Discover our comprehensive technology solutions including AI, cloud infrastructure, cybersecurity, and micro SaaS platforms.',
  keywords: 'solutions, AI, cloud, cybersecurity, micro SaaS, enterprise, technology'
};

export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Technology Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with our comprehensive suite of technology solutions. 
          From AI-powered automation to secure cloud infrastructure, we deliver results that matter.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
            <p className="text-gray-600 mb-4">{solution.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Industries:</h4>
              <div className="flex flex-wrap gap-2">
                {solution.industries.map((industry, industryIndex) => (
                  <span 
                    key={industryIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
              <div className="text-sm text-gray-500 mb-3">{benefit.metricLabel}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how our technology solutions can help you achieve your business goals 
          and stay ahead of the competition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="/services"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}