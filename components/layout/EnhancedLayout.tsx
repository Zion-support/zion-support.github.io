<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
export type EnhancedLayoutProps = any;

export default function EnhancedLayout() {
=======
>>>>>>> origin/resolved-merge-conflicts
interface EnhancedLayoutProps {
  children: React.ReactNode;
}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
=======
    <div className='min-h-screen flex flex-col'>
      <header>
  }, []);

import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = any;
export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
}
=======
<<<<<<< HEAD

export type EnhancedLayoutProps = any;

<<<<<<< HEAD
export default function EnhancedLayout() {
=======

<<<<<<< HEAD

  }, []);
;
  return (


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  useEffect(() => {
    const lng = i18n.resolvedLanguage |i18n.language;
  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {}
  useEffect(() => {};
    const lng = i18n.resolvedLanguage |i18n.language;
  children: React.ReactNode;};
export type EnhancedLayoutProps = {};
  children: React.ReactNode;
export type EnhancedLayoutProps = {};
  children: React.ReactNode;
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
export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
}
  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode;
};

      </header>;'
      <main id='main' className='flex-1 container mx-auto px-4 py-6'>;
        {children}
export type EnhancedLayoutProps = {};
  children: React.ReactNode;}
export type EnhancedLayoutProps = {};
  children: React.ReactNode;
export type EnhancedLayoutProps = {};
  children: React.ReactNode;
}
  children: React.ReactNode;};
export type EnhancedLayoutProps = {};
  children: React.ReactNode;
export type EnhancedLayoutProps = {};
  children: React.ReactNode;
};

import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {;
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', lng);
  }, []);
  return (
    <div className='min-h-screen flex flex-col'>
      <header>
  }, []);

=======
}, []);
>>>>>>> origin/chore/fix-lint-and-merge


<<<<<<< HEAD
      </main>      <main id="main" className=flex-1 container mx-auto px-4 py-6>{children}</main>;
=======
<<<<<<< HEAD
      </main>      <main id="main" className=flex-1 container mx-auto px-4 py-6>{children}</main>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
});
});
}"
    <div className="min - h-screen flex flex - col>;
<<<<<<< HEAD
=======
=======
  );
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
}
  );


  );

}
<<<<<<< HEAD
  );
}

  );
}
=======
=======
  );
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min - h-screen flex flex - col">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;
      </header>;
      <main id='main' className=flex - 1 container mx - auto px - 4 py - 6>;
        {children}
      </main>      <main id="main" className="flex - 1 container mx - auto px - 4 py - 6">{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>);
}
});
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD

  return (
    <div className='min-h-screen flex flex-col' />
      <header />
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
  return (
    <div className='min-h-screen flex flex-col'    />
      <header    />
        <EnhancedNavigation    />
        <LanguageSwitchPrompt    />
      </header>
<main id='main' className='flex-1 container mx-auto px-4 py-6'    />
>>>>>>> origin/chore/fix-lint-and-merge
        {children}
      </main>
      <footer    />
        <EnhancedFooter    />
<<<<<<< HEAD
=======
=======
=======
  );

  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id=&quot;main&quot; className=&quot;flex-1 container mx-auto px-4 py-6&quot;>{children}</main>
import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';

import React, { useEffect } from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = {
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
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
      <footer>
        <EnhancedFooter />
>>>>>>> merged-prs-20250907-203621
      </footer>
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
    </div>
);
}
}
  );
}
<<<<<<< HEAD

=======
}
  );
}
=======
=======
<<<<<<< HEAD
  return (
    <div className='min-h-screen flex flex-col'    />
      <header    />
        <EnhancedNavigation    />
        <LanguageSwitchPrompt    />
      </header>
<main id='main' className='flex-1 container mx-auto px-4 py-6'    />
>>>>>>> origin/chore/fix-lint-and-merge
        {children}
      </main>
      <footer    />
        <EnhancedFooter    />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </footer>
    </div>
  );
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
