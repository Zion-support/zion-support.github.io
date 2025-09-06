import React from 'react';

export interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  avatar?: string;
}

interface ServiceLandingTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  features?: string[];
  stats?: Array<{ label: string; value: string }>;
  ctaText: string;
  ctaLink: string;
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
  title,
  subtitle,
  description,
  benefits,
  features = [],
  stats = [],
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {benefits.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  {benefit.icon && (
                    <div className="mb-4 text-blue-600">
                      {benefit.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {stats.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn more about our services.
          </p>
          <a
            href={ctaLink}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            {ctaText}
          </a>
        </div>
      </section>
    </div>
  );
};