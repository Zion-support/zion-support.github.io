import React from "react";
interface ContentNewsletterSignupProps {
className?: string
}
}
}

const ContentNewsletterSignup: "React.FC<ContentNewsletterSignupProps> = ({ className="" "}) => {
return (</ContentNewsletterSignupProps>
    <divclassName = {className} / />
      <h2>ContentNewsletterSignup</h2>
      <p>This component is under construction.</p>
      </div>
    </>
  )
  )
}

export const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`contentnewslettersignup ${className}`}>
      {children}
    </div>
  );
};

export default ContentNewsletterSignup;