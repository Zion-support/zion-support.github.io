import React from 'react';

export const metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Comprehensive technology solutions for modern enterprises - AI, micro SaaS, and IT services.',
  keywords: 'technology solutions, enterprise solutions, AI solutions, micro SaaS solutions, IT solutions',
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Enterprise AI Transformation',
      description: 'Complete AI transformation solution for large enterprises',
      features: ['AI Strategy Development', 'Model Development & Deployment', 'Data Pipeline Setup', 'Team Training'],
      pricing: 'Custom Pricing',
      category: 'AI Services'
    },
    {
      title: 'Micro SaaS Platform Development',
      description: 'Custom micro SaaS platforms for specific business needs',
      features: ['Custom Development', 'Cloud Infrastructure', 'API Integration', 'User Management'],
      pricing: 'Starting at $15,000',
      category: 'Micro SaaS'
    },
    {
      title: 'Cloud Migration & DevOps',
      description: 'Complete cloud transformation with DevOps implementation',
      features: ['Cloud Migration', 'CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Logging'],
      pricing: 'Starting at $25,000',
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform with AI capabilities',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Dashboard Creation', 'Data Visualization'],
      pricing: 'Starting at $20,000',
      category: 'AI Services'
    },
    {
      title: 'Custom SaaS Development',
      description: 'Tailored SaaS solutions for your specific requirements',
      features: ['Full-stack Development', 'Database Design', 'Payment Integration', 'Scalability Planning'],
      pricing: 'Starting at $30,000',
      category: 'Micro SaaS'
    },
    {
      title: 'Cybersecurity Implementation',
      description: 'Comprehensive cybersecurity solution for your organization',
      features: ['Security Assessment', 'Threat Detection', 'Incident Response', 'Compliance Management'],
      pricing: 'Starting at $18,000',
      category: 'IT Services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology Solutions
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions that combine cutting-edge technology with proven methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {solution.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800 font-medium">Starting at:</span>
                    <span className="text-lg font-bold text-blue-600">{solution.pricing}</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Solution
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}