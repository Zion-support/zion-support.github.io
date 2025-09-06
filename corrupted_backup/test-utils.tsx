<<<<<<< HEAD
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  );
=======
 {
  children 
}</ThemeProvider>) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
isFallback: false;
isLocale: false;
isReady: true;
defaultLocale: 'en';
domainLocales: [];
isPreview: false 
});
<<<<<<< HEAD

export const createMockProps = (overrides = {}) => ({
  ...overrides,
});
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
