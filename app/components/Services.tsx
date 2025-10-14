import { Shield } from 'lucide-react';
import React from 'react';
import { CpuChipIcon, 
  CloudIcon, 
  CogIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon } from '@heroicons/react/24/outline';
const Services: React.FC = () => {
  return (
<>    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services;
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business ;
            thrive in the digital age.
          </p>
        </>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2>"
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how our solutions can help you achieve your goals.''
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
