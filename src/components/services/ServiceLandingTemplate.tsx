import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

interface ServiceLandingTemplateProps {
  title: string;
  description: string;
  benefits?: string[];
}

export function ServiceLandingTemplate({ 
  title, 
  description, 
  benefits = [] 
}: ServiceLandingTemplateProps) {
  return (
    <>
      <SEO
        title={`${title} | Zion AI`}
        description={description}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <GradientHeading
              level="h1"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {title}
            </GradientHeading>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          {benefits.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}