import React from 'react';
import { Link } from 'react-router-dom';

export function FeatureCTAs() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation across your organization.',
      ctaText: 'Explore AI Solutions',
      ctaLink: '/services/ai',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & DevOps Excellence',
      description: 'Streamline your development workflow with our cloud migration expertise and DevOps automation solutions.',
      ctaText: 'Learn About Cloud Services',
      ctaLink: '/services/cloud',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Protection',
      description: 'Protect your digital assets with our comprehensive security solutions and threat intelligence services.',
      ctaText: 'Secure Your Business',
      ctaLink: '/services/cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-orange-500'
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
            We combine deep technical expertise with innovative solutions to deliver exceptional results for businesses of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Link
                to={feature.ctaLink}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-lg"
              >
                {feature.ctaText}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}