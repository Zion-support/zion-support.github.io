import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current systems and understand your business goals.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Our experts develop a comprehensive strategy and implementation plan.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Implementation", 
      description: "We execute the solution with precision and minimal disruption.",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring and support ensure maximum value.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and maximum value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;