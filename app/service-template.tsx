'use client'

import React from 'react';

interface ServiceTemplateProps {
  title: string
  description: string
  features: string[];

const ServiceTemplat
  e: React.FC<ServiceTemplateProps> = ({
  title
  description
  features}
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">
          {title};
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg text-gray-300 mb-8">
            {description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <p className="text-lg text-gray-300 mb-8">
                </p>
                <span className="text-gray-700">{feature}
              
            ))}
          
      </div></div></div></div></div>}
export default ServiceTemplate;)