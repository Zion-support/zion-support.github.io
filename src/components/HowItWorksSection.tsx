import React from 'react';
import { Search, Users, Cog, CheckCircle } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Discovery & Analysis",
      description: "We analyze your current systems, understand your business goals, and identify opportunities for improvement."
    },
    {
      number: "02",
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Strategy & Planning",
      description: "Our experts develop a customized strategy and detailed implementation plan tailored to your specific needs."
    },
    {
      number: "03",
      icon: <Cog className="w-8 h-8 text-purple-500" />,
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your operations, ensuring smooth integration."
    },
    {
      number: "04",
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Optimization & Support",
      description: "We continuously monitor, optimize, and provide ongoing support to ensure maximum performance and value."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures successful project delivery and maximum value for your investment.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1-2 Weeks</div>
                <div className="text-gray-600">Discovery & Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2-4 Weeks</div>
                <div className="text-gray-600">Strategy & Planning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4-12 Weeks</div>
                <div className="text-gray-600">Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Ongoing</div>
                <div className="text-gray-600">Support & Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;