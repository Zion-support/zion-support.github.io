<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n';
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt';
export type EnhancedLayoutProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage |i18n.language;
  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {;
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', lng);
  }, []);
<<<<<<< HEAD
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
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

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
<<<<<<< HEAD
=======


      </main>      <main id="main" className="flex-1 container mx-auto px-4 py-6">{children}</main>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
}
}
<<<<<<< HEAD
  )}
  )}
=======
  );
}
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
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
<<<<<<< HEAD
  )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    </div>);
}
}
  );
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
  )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
<<<<<<< HEAD

=======
return (<div className="min-h-screen flex flex-col" > <header> <EnhancedNavigation /> <LanguageSwitchPrompt /> </header> <footer> <EnhancedFooter /> </footer> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
