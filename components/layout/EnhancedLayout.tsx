import React, {_useEffect} from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import i18n, {_isRtl} from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';

export type EnhancedLayoutProps = {_children: React.ReactNode;};

export default function EnhancedLayout(_{_children}: EnhancedLayoutProps) {_useEffect__(() => {
    const _lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', _isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', _lng);}, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id="main" className="flex-1 container mx-auto px-4 py-6">{_children}</main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
}