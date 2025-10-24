'use client';
import React from 'react';
<<<<<<< HEAD
interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}
const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
=======

interface ServicePageTemplateProps {
  className?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ServicePageTemplate</h2>
      <p>ServicePageTemplate component for enhanced functionality.</p>
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default ServicePageTemplate;