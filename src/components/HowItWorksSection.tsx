import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We start with a detailed consultation to understand your business needs and challenges."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a customized strategy and implementation plan tailored to your goals."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your existing operations."
    },
    {
      number: "04",
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure maximum value and performance."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our proven process ensures successful implementation and maximum value from your investment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;