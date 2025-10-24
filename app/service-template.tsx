<<<<<<< HEAD
'use client';
import React from 'react'
interface ServiceTemplateProps {
title: string;, description: string
  features: string[]
const ServiceTemplat,e: React.FC<ServiceTemplateProps> = ({
title,description
features
=======
import React from 'react';

interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ 
  className = '', 
  children 
}) => {
<<<<<<< HEAD
return (</ServiceTemplateProps>,
    <div className="min-h-screen bg-gray-50 py-12"></div>,
    <div className="max-w-4 xl mx-auto px-4"></div>,
    <h1 className="text-3 xl font-bold text-gray-900 mb-8"></h1>
          {title};</h1>/h1>,
    <div className="bg-white rounded-lg shadow p-6"></div>p className="text-gray-600 mb-6"></p>
            {description}</p>/p>,
    <div className="grid md: grid-cols-2 gap-4"></div>
            {features.map((feature,index) => (
              <div key={index} className="flex items-center space-x-2"></div>svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" />
                  <path fillRule="evenodd" d="M16.707 5.293 a1 1 0 010 1.414 l-8 8 a1 1 0 01-1.414 0 l-4-4 a1 1 0 011.414-1.414 L8 12.586 l7.293-7.293 a1 1 0 011.414 0 z" clipRule="evenodd" / /></p>/svg>,
    <span className="text-gray-700">{feature}</span>/div>
            ))}
            </div>/div>/div>}
=======
  return (
    <div className={'service-template ' + className}>
      {children || <p>Service Template component</p>}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
export default ServiceTemplate;
