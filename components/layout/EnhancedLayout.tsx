<<<<<<< HEAD
import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';

export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage |i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useEffect } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
<<<<<<< HEAD
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export type EnhancedLayoutProps = {;
  children: React && React.ReactNode;};
export type EnhancedLayoutProps = {;
  children: React && React.ReactNode;
export type EnhancedLayoutProps = {;
  children: React && React.ReactNode;
};

export default function EnhancedLayout(): any ({ children }: EnhancedLayoutProps) {;
  useEffect(() => {;
    const lng = i18n && i18n.resolvedLanguage || i18n && i18n.language;
    document && document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document && document.documentElement.setAttribute('lang', lng);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>      <header>;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>;
        {children}
      </main>      <footer>    document && document.documentElement.setAttribute('lang', lng);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>;
        {children}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>
=======
export type EnhancedLayoutProps = {
  children: React.ReactNode
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng)
=======
import i18n, { is_rtl } from '../../utils / i18n';
import LanguageSwitchPrompt from '../i18n / LanguageSwitchPrompt';
export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode;
export type EnhancedLayoutProps = {
  children: React.ReactNode;
}
;
export default /**
 * EnhancedLayout - Function description
 */
function EnhancedLayout() {
  useEffect (() => {
    const lng = i18n.resolved_language || i18n.language;
    document.document_element.set_attribute ('dir', is_rtl (lng) ? 'rtl' : 'ltr');
    document.document_element.set_attribute ('lang', lng);
  }, []);
;
  return (
    <div className='min - h-screen flex flex - col'>      <header>;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className='flex - 1 container mx - auto px - 4 py - 6'>;
        {children}
      </main>      <footer>    document.document_element.set_attribute ('lang', lng);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }, []);
;
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col">
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
<<<<<<< HEAD
);
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
}
  );
}
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
    </div>);
}
}
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
