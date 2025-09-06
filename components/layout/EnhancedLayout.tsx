import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';



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
export type EnhancedLayoutProps = {;
export type EnhancedLayoutProps = {
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
);
}
}
  );
}
}
  );

  return (
<<<<<<< HEAD
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
=======


      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
  );


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
}
  );
=======


  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
=======
  );
}

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

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
