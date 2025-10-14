import React, { ReactNode } from 'react';

interface MetaManagerProps {
  children: ReactNode;
}

const MetaManager: React.FC<MetaManagerProps> = ({ children }) => {
  React.useEffect(() => {
    // Meta management logic
    const updateMetaTags = () => {
      // Update viewport meta tag
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        document.head.appendChild(viewport);
      }
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

      // Update theme color
      let themeColor = document.querySelector('meta[name="theme-color"]');
      if (!themeColor) {
        themeColor = document.createElement('meta');
        themeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColor);
      }
      themeColor.setAttribute('content', '#0f172a');
    };

    updateMetaTags();
  }, []);

  return <>{children}</>;
};

export default MetaManager;