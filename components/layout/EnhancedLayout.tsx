import React, { useEffect } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
<<<<<<< HEAD

export type EnhancedLayoutProps = {
  children: React.ReactNode;
=======
export type EnhancedLayoutProps = {
  children: React.ReactNode
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
<<<<<<< HEAD
    document.documentElement.setAttribute('lang', lng);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
=======
    document.documentElement.setAttribute('lang', lng)
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
