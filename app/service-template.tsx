'use client';

import React from 'react'

interface ServiceTemplateProps {;
  title: string;
  description: string;
  features: string[];

const ServiceTemplat,
  e: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  features}
}) => {
  return (</ServiceTemplateProps>
    <div className="min-h-screen bg-gray-50 py-12"></div>
      <div className="max-w-4xl mx-auto px-4"></div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {title};</h1>
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6"></div>
          <p className="text-gray-600 mb-6">
            {description}</p>
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (</div>
              <div key={index} className="flex items-center space-x-2"></div>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"></svg>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>}
export default ServiceTemplate;