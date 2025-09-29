import React from 'react';
import Link from 'next/link';
import { featuredServices } from '../src/content/featured-services';

interface FeaturedServicesSectionProps {
  title?: string;
  subtitle?: string;
  maxServices?: number;
  showMetrics?: boolean;
  showTestimonials?: boolean;
}

export default function FeaturedServicesSection({
  title = "Featured AI Solutions",
  subtitle = "Transform your business with our most popular AI-powered services",
  maxServices = 3,
  showMetrics = true,
  showTestimonials = true
}: FeaturedServicesSectionProps) {
  const services = featuredServices.slice(0, maxServices);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              showMetrics={showMetrics}
              showTestimonials={showTestimonials}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service, 
  showMetrics, 
  showTestimonials 
}: { 
  service: any; 
  showMetrics: boolean; 
  showTestimonials: boolean; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{service.icon}</div>
          {service.pricing.popular && (
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </span>
          )}
        </div>

        {/* Title and Category */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{service.category}</p>

        {/* Description */}
        <p className="text-gray-600 mb-4">{service.description}</p>

        {/* Pricing */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">
            Starting at {service.pricing.starting}
          </span>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {showMetrics && service.metrics && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Results:</h4>
            <div className="grid grid-cols-1 gap-2">
              {service.metrics.slice(0, 2).map((metric: any, index: number) => (
                <div key={index} className="text-xs">
                  <span className="font-semibold text-blue-600">{metric.value}</span>
                  <span className="text-gray-600 ml-1">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {showTestimonials && service.testimonial && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 italic mb-2">
              "{service.testimonial.quote}"
            </p>
            <p className="text-xs text-gray-600">
              — {service.testimonial.author}, {service.testimonial.company}
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="space-y-2">
          <Link
            href={service.id === 'ai-chatbot-development' ? '/services/ai-chatbot' : 
                  service.id === 'ai-analytics-platform' ? '/services/ai-analytics-platform' : 
                  `/services/${service.id}`}
            className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            {service.cta.primary}
          </Link>
          <Link
            href="/case-studies"
            className="block w-full border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            {service.cta.secondary}
          </Link>
        </div>
      </div>
    </div>
  );
}