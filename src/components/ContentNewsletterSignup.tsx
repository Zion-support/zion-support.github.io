import React from 'react';

interface ContentNewsletterSignupProps {
<<<<<<< HEAD
className?: string
}
}
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '' ,}) => {
return (</ContentNewsletterSignupProps>,
    <div className={className} /></div>h2>ContentNewsletterSignup</h2>p>This component is under construction.</p>/div>
  )
}
=======
  className?: string;
  children?: React.ReactNode;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default ContentNewsletterSignup;
