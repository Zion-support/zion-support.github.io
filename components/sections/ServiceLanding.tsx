import React from 'react';
import Link from 'next/link';

interface ServiceLandingProps {
  title: string;
  subtitle?: string;
  description?: string;
  benefits?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const ServiceLanding: React.FC<ServiceLandingProps> = ({
  title,
  subtitle,
  description,
  benefits = [],
  ctaText = 'Get Started',
  ctaLink = '/contact'
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {benefits.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-blue-400 text-2xl mb-4">✨</div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link 
            href={ctaLink}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceLanding;