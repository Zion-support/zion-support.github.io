'use client';
import React from 'react';
'use client';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
interface UserExperienceEnhancerProps {
  children: React.ReactNode;
}
const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
      // Add loading states for interactive elements
=======
;
interface UserExperienceEnhancerProps {;
  children: React.ReactNode;}
}
;
const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {;}
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
;
  useEffect(() => {;
    // UX enhancement logic;
    const enhanceUX = (;
      // Add smooth scrolling;
      document.documentElement.style.scrollBehavior = 'smooth';
;
      // Add loading states for interactive elements;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
      const interactiveElements = document.querySelectorAll('button, a, input');
      interactiveElements.forEach((element, index) => {;) => {
  return (
    $3
  );
};
        element.addEventListener('click', () => {;}
          setLoadingStates(prev => ({ ...prev, [index]: true }));
          setTimeout(() => {;}
            setLoadingStates(prev => ({ ...prev, [index]: false }));
          }, 1000);
        });
      });
<<<<<<< HEAD
      // Add focus indicators
=======
;
      // Add focus indicators;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
      const style = document.createElement('style');
      style.textContent = `;
        *:focus {;
          outline: 2px solid #06b6d4;
          outline-offset: 2px,;}
        }
      `;
      document.head.appendChild(style);
    };
<<<<<<< HEAD
    enhanceUX();
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};
export default UserExperienceEnhancer;
  </UserExperienceEnhancerProps>
=======
;
    enhanceUX();
  }, []);
;
  return <>{children}</>;
};
;
export default UserExperienceEnhancer;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
