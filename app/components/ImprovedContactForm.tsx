'use client'
import React from 'react';

interface ImprovedContactFormProps {
  className?: string;
}

const ImprovedContactForm: React.FC<ImprovedContactFormProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Improved Contact Form</h2>
      <p className="text-gray-600">This is a placeholder component for Improved Contact Form.</p>
    </div>
  );
};

export default ImprovedContactForm;
