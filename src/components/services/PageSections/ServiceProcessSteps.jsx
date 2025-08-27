import React from 'react';

export const ServiceProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Contact Us',
      description: 'Reach out to our team with your IT service needs',
      icon: '📞'
    },
    {
      number: 2,
      title: 'Assessment',
      description: 'We assess your current IT infrastructure and requirements',
      icon: '🔍'
    },
    {
      number: 3,
      title: 'Planning',
      description: 'Develop a customized solution plan for your business',
      icon: '📋'
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Execute the plan with our expert technicians',
      icon: '⚡'
    },
    {
      number: 5,
      title: 'Support',
      description: 'Ongoing support and maintenance services',
      icon: '🛠️'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-600 transform translate-x-1/2"></div>
                )}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};