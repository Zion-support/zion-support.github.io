import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure management and support for modern businesses.',
      features: ['Network Management', 'Cloud Migration', 'Security Audits', '24/7 Support']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.',
      features: ['AWS/Azure/GCP', 'Cloud Architecture', 'Migration Services', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards']
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to help you make informed technology decisions.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI and IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Get Quote
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;