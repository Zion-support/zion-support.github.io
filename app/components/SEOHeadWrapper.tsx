import React from 'react';
interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className, title, description, keywords, children }) => {
=======

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ 
  className = '', 
  children 
}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
  return (
    <div className={'seoheadwrapper ' + className}>
      {children || <p>SEOHeadWrapper component</p>}
    </div>
  );
};
export default SEOHeadWrapper;
