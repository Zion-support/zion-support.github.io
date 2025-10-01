import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { newServices2026 } from '../content/new-services-2026';

const NewServicesShowcase: React.FC = () => {
  const services = newServices2026.filter(s => s.featured).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold mb-4">
            🚀 NEW SERVICES AVAILABLE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our latest AI-powered solutions delivering unprecedented results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <div className="mb-2">
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  {service.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                <Link
                  to={service.link}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
          >
            View All Services
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewServicesShowcase;