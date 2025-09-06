<<<<<<< HEAD
import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type EnhancedLayoutProps = any;
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import React, { useEffect } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
<<<<<<< HEAD
export type EnhancedLayoutProps = {;
=======
export type EnhancedLayoutProps = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {;
    const lng = i18n.resolvedLanguage || i18n.language;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
  }, []);

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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
<<<<<<< HEAD
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
