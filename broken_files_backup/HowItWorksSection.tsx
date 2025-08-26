import React from 'react';
export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business needs, current infrastructure, and goals for transformation.',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive roadmap tailored to your specific requirements and timeline.',
      icon: '📋',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring minimal disruption to your ongoing operations.',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization to ensure everything works flawlessly.',
      icon: '🧪',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Go-live with confidence, backed by our ongoing support and maintenance services.',
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    }
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and maximum value for your business
          </p>
        </div>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  {/* Step number background */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-md border-2 border-gray-200">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to guide you through every step of your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}