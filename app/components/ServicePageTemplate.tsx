<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ServicePageTemplate;
=======

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'servicepagetemplate ' + className}>
      {children || <p>ServicePageTemplate component</p>}
    </div>
  );
};

export default ServicePageTemplate;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
