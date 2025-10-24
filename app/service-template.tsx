'use client'

import React from 'react';

interface ServiceTemplateProps {
  title:  ; ;s;t;r;i;n;g;
  description:  ; ;s;t;r;i;n;g;
  features:  ;s;t;r;i;n;g;[;];

const ServiceTemplat
  e: React.FC<ServiceTemplateProp;s;>; ;=; ;(;{;
  title
  description
  features



}
}) => {
  return (</ServiceTemplateProps>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {title};</h1>
        </h1>
        
        <p className="text-gray-600 mb-6">
            {description}</p>
          </p>
          
          <div className="grid md: grid-cols-2 gap-4"></d;i;v;>;
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2"></div>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"></svg>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>};

export default ServiceTemplate;)