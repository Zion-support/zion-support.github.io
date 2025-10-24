import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className, children }) => {
  return (
    <div className={className}>
=======

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
      {children}
    </div>
  );
};
<<<<<<< HEAD
export default ContentNewsletterSignup;
=======

export default ContentNewsletterSignup;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
