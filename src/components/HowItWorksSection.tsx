import React from 'react';
import { Check, Handshake, Search, Send } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    title: 'Post Your Project',
    description: 'Describe your requirements and let our AI understand your needs.',
    icon: Send,
  },
  {
    title: 'AI Matching',
    description: 'Our intelligent system finds the perfect talent and services for you.',
    icon: Search,
  },
  {
    title: 'Connect & Hire',
    description: 'Review proposals and connect directly with qualified professionals.',
    icon: Handshake,
  },
  {
    title: 'Get Results',
    description: 'Receive high-quality deliverables with ongoing support and maintenance.',
    icon: Check,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Simple steps to transform your business with cutting-edge technology
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 transform -translate-x-1/2 md:block hidden"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-blue-200">{step.description}</p>
                    </div>
                  ) : null}
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-2 border-purple-400 mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-blue-200">{step.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;