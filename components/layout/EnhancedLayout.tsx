import React, { useEffect } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import dynamic from 'next/dynamic';

const MobileTabBar = dynamic(() => import('./MobileTabBar'), { ssr: false });

const EnhancedLayout: React.FC = ({ children }) => {
  return <>{children}</>;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main className="flex-1 container mx-auto px-4 py-6 pb-20 md:pb-6">{children}</main>
      <footer className="hidden md:block">
        <EnhancedFooter />
      </footer>
      <MobileTabBar />
    </div>
  );
}