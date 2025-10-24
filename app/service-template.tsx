'use client'
import React from 'react';
interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
const ServiceTemplat
  e: React.FC<ServiceTemplateProps> = ({
  title
  description
  features}
}) => {
  return (</ServiceTemplateProps>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {title};</h1>
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 mb-6">
            {description}</p>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, inde, x) => (
              <div key={index} className="flex items-center space-x-2">
                <svg></svg>
                  <path></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>}
export default ServiceTemplate;