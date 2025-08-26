import React from 'react';
export function BenefitsSection() {
  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs by up to 40% through intelligent automation and optimized processes',
      icon: '💰',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Time Savings',
      description: 'Accelerate development cycles and deployment with streamlined DevOps practices',
      icon: '⏰',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security and compliance solutions',
      icon: '🛡️',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Scalability',
      description: 'Build infrastructure that grows with your business needs and requirements',
      icon: '📈',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Expert Support',
      description: '24/7 technical support and guidance from certified professionals',
      icon: '👥',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead of the competition with cutting-edge AI and technology solutions',
      icon: '🚀',
      color: 'from-yellow-500 to-orange-500'
    }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver measurable results that transform your business operations and drive growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-500 hover:shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-105"
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already experienced the Zion Tech Group advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}