'use client';
import React from 'react';
interface SEOHeadWrapperProps {
  className?: string;
}
<<<<<<< HEAD
const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className, title, description, keywords, children }) => {
=======

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
  return (
    <div className={className}>
      <h2>SEOHeadWrapper</h2>
      <p>SEOHeadWrapper component for enhanced functionality.</p>
    </div>
  );
};
<<<<<<< HEAD
export default SEOHeadWrapper;
=======

export default SEOHeadWrapper;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
