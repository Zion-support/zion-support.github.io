<<<<<<< HEAD

=======
import React from 'react'
>>>>>>> cursor/fix-errors-and-merge-to-main-50ad

interface ServiceTemplateProps {
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'service-template ' + className}>
      {children || <p>Service-template component</p>}
    </div>
  );
};

export default ServiceTemplate;