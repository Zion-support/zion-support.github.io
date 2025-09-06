import React from 'react';
import { Search, Users, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Discovery & Analysis",
      description: "We analyze your current systems, identify pain points, and understand your business objectives to create a tailored solution."
    },
    {
      number: "02",
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Strategy & Planning",
      description: "Our expert team develops a comprehensive strategy and detailed implementation plan that aligns with your goals and timeline."
    },
    {
      number: "03",
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Implementation & Testing",
      description: "We implement the solution with rigorous testing to ensure everything works perfectly and meets your requirements."
    },
    {
      number: "04",
      icon: <ArrowRight className="w-8 h-8 text-orange-600" />,
      title: "Launch & Support",
      description: "We launch your solution and provide ongoing support to ensure continued success and optimal performance."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures successful project delivery from start to finish. 
            Here's how we transform your business with technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="text-gray-300">
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
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals 
              with our proven methodology and expert team.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;