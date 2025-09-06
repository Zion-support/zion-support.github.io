<<<<<<< HEAD

<<<<<<< HEAD
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

  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {;
    const lng = i18n.resolvedLanguage || i18n.language;

    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lng);
=======


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>

  );

=======


  }, []);
;
  return (


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
  }, []);
;
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
  );
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
}
  );
=======


  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
<<<<<<< HEAD
=======
  );
}

=======
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id=&quot;main&quot; className=&quot;flex-1 container mx-auto px-4 py-6&quot;>{children}</main>
=======
<<<<<<< HEAD
import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';

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
<<<<<<< HEAD

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
    <div className='min-h-screen flex flex-col'>      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>
        {children}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
<<<<<<< HEAD
  )

}
=======
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
}
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
