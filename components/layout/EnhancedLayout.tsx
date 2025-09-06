<<<<<<< HEAD
import React, { useEffect } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
=======
import React from "react";
import { ReactNode  } from "react;
interface EnhancedLayoutProps {
  children: ReactNode,
export default function EnhancedLayout() {;
>>>>>>> origin/automation-fixes

export type EnhancedLayoutProps = {
  children: React.ReactNode;};
=======
export type EnhancedLayoutProps = {
  children: React.ReactNode
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>
        {children}
<<<<<<< HEAD
      </main>      <footer>
=======
    document.documentElement.setAttribute('lang', lng)
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
<<<<<<< HEAD
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>
        {children}
      </main>
=======
      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <footer>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <EnhancedFooter />
      </footer>
    </div>
=======

      </main>;
    </div>;
>>>>>>> origin/automation-fixes
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
