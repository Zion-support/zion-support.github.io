
<<<<<<< HEAD
import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = any;
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {;
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', lng);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
<main id='main' className='flex-1 container mx-auto px-4 py-6'>
        {children}
      </main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
}
=======
}
export default function EnhancedLayout() {useEffect(() => {const lng = i18n.resolvedLanguage |i18n.language;
  children: React.ReactNode;}export type EnhancedLayoutProps = {children: React.ReactNode;
export type EnhancedLayoutProps = {children: React.ReactNode;
  }, [])return (<div className='min-h-screen flex flex-col'>      <header>;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>;
        {children}
      </main>      <footer>    document && document.documentElement.setAttribute('lang', lng)}, [])return (<div className="min-h-screen flex flex-col">;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>;
        {children}
export type EnhancedLayoutProps = {children: React.ReactNode;}
export type EnhancedLayoutProps = {children: React.ReactNode;
export type EnhancedLayoutProps = {children: React.ReactNode;
}
  children: React.ReactNode;}export type EnhancedLayoutProps = {children: React.ReactNode;
export type EnhancedLayoutProps = {children: React.ReactNode;
}import React, { useEffect } from 'react',import EnhancedNavigation from './EnhancedNavigation',import EnhancedFooter from './EnhancedFooter',import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = any;export default function EnhancedLayout() {useEffect(() => {const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr')document.documentElement.setAttribute('lang', lng)}, [])</main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
}
}
  )}
  )}
    <div className="min - h-screen flex flex - col">;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className='flex - 1 container mx - auto px - 4 py - 6'>;
        {children}
      </main>      <main id="main" className="flex - 1 container mx - auto px - 4 py - 6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>)}
}
  )}return (<div className='min-h-screen flex flex-col'>;
      <header>;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
<main id='main' className='flex-1 container mx-auto px-4 py-6'>;
        {children}
      </main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
  )}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
