'use client';

import React from 'react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function ServiceTemplate({ 
  title, 
  description, 
  children 
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <p className="text-gray-600 text-lg mb-8">{description}</p>
        {children}
      </div>
    </div>
  );
}
