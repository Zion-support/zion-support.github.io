import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface ContentNewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ContentNewsletterSignup;
=======

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'contentnewslettersignup ' + className}>
      {children || <p>ContentNewsletterSignup component</p>}
    </div>
  );
};

export default ContentNewsletterSignup;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
