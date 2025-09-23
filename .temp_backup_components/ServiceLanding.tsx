import React from 'react';
import Link from 'next/link';

interface ServiceLandingProps {
  title: string;
  slug: string;
  description: string;
  subtitle: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceLanding({
  title,
  slug,
  description,
  subtitle,
  features = [],
  ctaText = "Get Started",
  ctaLink = "/contact"
}: ServiceLandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/80 mb-4">
            {subtitle}
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((featureindex) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href={ctaLink}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}