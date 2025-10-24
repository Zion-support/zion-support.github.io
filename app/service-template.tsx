'use client';

import React from 'react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
,
const ServiceTemplate: React.FC<ServiceTemplateProps> = ({,
  title,
  description,
  features
}) => {
  return (
    <div className="min-h-screenbg-gray-50py-12">
        <div className="max-w-4xlmx-autopx-4">
        <h1 className="text-3xlfont-boldtext-gray-900mb-8">
            {title}
        </div>
        </div>
        
          </h1>
        
        <div className="bg-whiterounded-lgshadowp-6"></div>
          <p className="text-gray-600mb-6">
            {description}
          
          
          </p>
          
          <div className="gridmd:grid-cols-2gap-4">,
            {features.map((feature, index) => (
              <div key={index} className="flexitems-centerspace-x-2"></div>
        </div>
                <svg className="w-5h-5text-green-500" fill="currentColor" viewBox="0 0 20 20"></svg>
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