import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
<<<<<<< HEAD
<<<<<<< HEAD
export type EnhancedLayoutProps = any;
=======
export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
}
=======

export type EnhancedLayoutProps = {
  children: React.ReactNode;
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage |i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
  }, []);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
<<<<<<< HEAD
    <div className='min-h-screen flex flex-col'>      <header>
=======
    <div className='min-h-screen flex flex-col'>
      <header>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>
        {children}
<<<<<<< HEAD
      </main>      <footer>    document.documentElement.setAttribute('lang', lng)
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>
        {children}
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>
=======
      </main>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
<<<<<<< HEAD
);
}
}
  );
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
