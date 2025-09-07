
export type EnhancedLayoutProps = any;

export default function EnhancedLayout() {
  }
  useEffect(() => {

=======
    const lng = i18n.resolvedLanguage |i18n.language;
  children: React.ReactNode;}
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
=======
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {}
  useEffect(() => {}
  children: React.ReactNode;}
export type EnhancedLayoutProps = {}
  children: React.ReactNode;
export type EnhancedLayoutProps = {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  children: React.ReactNode;
  }, []);

  return (
    <div className=min-h-screen flex flex-col'>      <header>;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;

      </main>      <footer>    document && document.documentElement.setAttribute('lang, lng);
  }, []);
  return (
    <div className="min-h-screen flex flex-col>;
        <EnhancedNavigation />;
        <LanguageSwitchPrompt />;

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage || i18n.language;
    document.documentElement.setAttribute(dir', isRtl(lng) ? 'rtl : ltr');
document.documentElement.setAttribute('lang, lng);

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  }, []);
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


      </main>      <main id="main" className=flex-1 container mx-auto px-4 py-6>{children}</main>;
      <footer>;
        <EnhancedFooter />;
      </footer>;
    </div>;
}
}
  );
}
  );
}"
    <div className="min - h-screen flex flex - col>;
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
}
  );
}



  return (
    <div className='min-h-screen flex flex-col' />
      <header />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>

        {children}
      </main>
      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  );
}