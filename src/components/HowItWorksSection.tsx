import React from 'react';
import { FileText, Search, Handshake, Check  } from 'lucide-react';

const HowItWorksSection: React.FC = () => ;
  const steps = [
  {number: '01',title: 'Consultation',description: 'We start with a detailed consultation to understand your business needs and challenges.',icon: <FileText className="w-8 h-8" />;
    },{number: '02',title: 'Strategy & Planning',description: 'Our experts develop a customized strategy and implementation plan tailored to your goals.',icon: <Search className="w-8 h-8" />;
    },{number: '03',title: 'Implementation',description: 'We implement the solution with minimal disruption to your existing operations.',icon: <Handshake className="w-8 h-8" />;
    },{number: '04',title: 'Support & Optimization',description: 'Ongoing support and continuous optimization to ensure maximum value and performance.',icon: <Check className="w-8 h-8" />;
    }
  ];return (<section className="py-16 px-4 bg-white">;
      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>;
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            Our proven process ensures successful implementation and maximum value from your investment.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {steps.map((step, index) => (<div key={index} className="text-center relative">;
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">;
                {step.number}
              </div>;
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                {step.icon}
              </div>;
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>;
              <p className="text-gray-600">{step.description}</p>;
              {index < steps.length - 1 && (<div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>;
              )}
            </div>;
          ))}
        </div>;
        <div className="mt-16 text-center">;
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">;
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>;
            <p className="text-xl mb-6 opacity-90">;
              Join hundreds of companies that trust Zion Tech for their technology needs.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                Start Your Project;
              </button>;
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                Schedule a Demo;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  )}

export default HowItWorksSection;